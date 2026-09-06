/* Mechanics Exam Trainer - application logic. */
(function () {
  "use strict";

  var EXAM_SIZE = 7;
  var EXAM_MINUTES = 40;
  var KEY_THEME = "mechtrainer.theme";
  var KEY_STATS = "mechtrainer.stats";
  var KEY_EXAM  = "mechtrainer.exam";

  var $ = function (id) { return document.getElementById(id); };
  var byId = {};
  PROBLEMS.forEach(function (p) { byId[p.n] = p; });

  /* Topic chip carries a data-topic attribute so CSS can give each chapter
     its own hue - it makes the problem bank scannable at a glance. */
  function topicChip(key) {
    var c = el("span", "chip topic", TOPICS[key]);
    c.setAttribute("data-topic", key);
    return c;
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }

  function store(key, value) {
    try {
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify(value));
    } catch (e) { /* private mode: fail quietly */ }
  }
  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  }

  /* One-time cleanup: carry over anything saved under the old key prefix,
     then remove it so no legacy names linger in the browser. */
  (function migrateLegacyKeys() {
    try {
      [["phys161.theme", KEY_THEME], ["phys161.stats", KEY_STATS], ["phys161.exam", KEY_EXAM]]
        .forEach(function (pair) {
          var old = localStorage.getItem(pair[0]);
          if (old === null) return;
          if (localStorage.getItem(pair[1]) === null) localStorage.setItem(pair[1], old);
          localStorage.removeItem(pair[0]);
        });
    } catch (e) { /* private mode: nothing to migrate */ }
  })();

  /* ---------------- theme ---------------- */
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    store(KEY_THEME, t);
  }
  var savedTheme = load(KEY_THEME, null);
  applyTheme(savedTheme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  $("themeToggle").addEventListener("click", function () {
    applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  /* ---------------- navigation ---------------- */
  var VIEWS = ["home", "exam", "results", "browse"];
  function show(view) {
    VIEWS.forEach(function (v) { $("view-" + v).hidden = (v !== view); });
    window.scrollTo(0, 0);
    if (view === "home") renderStats();
  }
  document.querySelectorAll("[data-nav]").forEach(function (b) {
    b.addEventListener("click", function () {
      var target = b.getAttribute("data-nav");
      if (exam && !exam.finished && target !== "exam") {
        if (!confirm("Leave the exam in progress? Your answers are saved and you can resume from the home page.")) return;
        stopTimer();
      }
      show(target);
    });
  });

  /* ---------------- helpers ---------------- */
  function shuffled(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function fmtClock(ms) {
    if (ms < 0) ms = 0;
    var s = Math.floor(ms / 1000);
    return pad(Math.floor(s / 60)) + ":" + pad(s % 60);
  }
  function fmtDuration(ms) {
    var s = Math.round(ms / 1000);
    var m = Math.floor(s / 60);
    return m + " min " + (s % 60) + " s";
  }

  /* ---------------- exam engine ---------------- */
  var exam = null;
  var timerId = null;

  function newExam(pool, size, timed, label) {
    var picked = shuffled(pool).slice(0, Math.min(size, pool.length));
    exam = {
      ids: picked.map(function (p) { return p.n; }),
      answers: picked.map(function () { return { num: "", unit: "", flagged: false }; }),
      idx: 0,
      timed: !!timed,
      startedAt: Date.now(),
      durationMs: EXAM_MINUTES * 60 * 1000,
      pausedMs: 0,      /* total time spent paused */
      pausedAt: null,   /* when the current pause began, else null */
      label: label || "Exam",
      finished: false
    };
    persistExam();
    show("exam");
    renderQuestion();
    startTimer();
    applyPauseUI();
  }

  function persistExam() {
    if (exam && !exam.finished) store(KEY_EXAM, exam); else store(KEY_EXAM, null);
  }

  /* Time actually spent working, excluding any paused stretches. */
  function workedMs(e) {
    if (!e) return 0;
    var end = e.pausedAt || Date.now();
    return end - e.startedAt - (e.pausedMs || 0);
  }
  function remainingFor(e) {
    if (!e || !e.timed) return null;
    return e.durationMs - workedMs(e);
  }
  function remainingMs() { return remainingFor(exam); }

  function isPaused() { return !!(exam && exam.pausedAt); }

  function setPaused(on) {
    if (!exam || exam.finished || !exam.timed) return;
    if (on && !exam.pausedAt) {
      saveCurrent();
      exam.pausedAt = Date.now();
      toggleCalc(false);              /* no calculating on a stopped clock */
    } else if (!on && exam.pausedAt) {
      exam.pausedMs = (exam.pausedMs || 0) + (Date.now() - exam.pausedAt);
      exam.pausedAt = null;
    } else { return; }
    persistExam();
    applyPauseUI();
    if (!exam.pausedAt) $("ansInput").focus();
  }

  /* Hide the question while paused so the break cannot be used to read ahead. */
  function applyPauseUI() {
    var paused = isPaused();
    $("questionCard").hidden = paused;
    $("pauseScreen").hidden = !paused;
    document.querySelector(".exam-nav").hidden = paused;
    $("calcToggle").hidden = paused;
    $("dots").style.pointerEvents = paused ? "none" : "";
    $("dots").style.opacity = paused ? ".45" : "";
    $("pauseBtn").textContent = paused ? "Resume" : "Pause";
    if (paused) {
      $("pauseNote").textContent = "The clock is stopped and the question is hidden. " +
        fmtClock(remainingMs()) + " still on the clock.";
    }
    tick();
  }

  function startTimer() {
    stopTimer();
    if (!exam.timed) {
      $("timer").textContent = "no limit";
      $("timer").className = "timer";
      $("pauseBtn").hidden = true;
      return;
    }
    $("pauseBtn").hidden = false;
    tick();
    timerId = setInterval(tick, 250);
  }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

  function tick() {
    if (!exam || exam.finished) return;
    var left = remainingMs();
    if (left === null) return;
    var t = $("timer");
    t.textContent = fmtClock(left) + (isPaused() ? " paused" : "");
    t.className = "timer" + (isPaused() ? " paused" :
      (left <= 60000 ? " danger" : (left <= 300000 ? " warn" : "")));
    if (!isPaused() && left <= 0) { stopTimer(); finishExam(true); }
  }

  function currentProblem() { return byId[exam.ids[exam.idx]]; }

  function renderDots() {
    var wrap = $("dots");
    wrap.textContent = "";
    exam.ids.forEach(function (id, i) {
      var a = exam.answers[i];
      var d = el("button", "dot", String(i + 1));
      if (a.num.trim() !== "") d.classList.add("answered");
      if (a.flagged) d.classList.add("flagged");
      if (i === exam.idx) d.classList.add("current");
      d.title = "Question " + (i + 1);
      d.addEventListener("click", function () { saveCurrent(); exam.idx = i; renderQuestion(); });
      wrap.appendChild(d);
    });
  }

  function renderQuestion() {
    var p = currentProblem();
    var a = exam.answers[exam.idx];
    $("qCounter").textContent = "Question " + (exam.idx + 1) + " of " + exam.ids.length + " · " + exam.label;
    $("qNumber").textContent = "P" + p.n;
    $("qTopic").textContent = TOPICS[p.t];
    $("qTopic").className = "chip topic";
    $("qTopic").setAttribute("data-topic", p.t);
    $("qText").textContent = p.q;
    $("ansInput").value = a.num;
    $("unitInput").value = a.unit;
    $("unitHint").textContent = "Units count for 10% of the mark. Use the Moodle style (m/s^2, cm^3, N, km/h, rad). If the answer is a pure ratio, leave the unit box empty.";
    $("flagBtn").classList.toggle("on", a.flagged);
    $("prevBtn").disabled = (exam.idx === 0);
    $("nextBtn").textContent = (exam.idx === exam.ids.length - 1) ? "Review →" : "Next →";
    renderDots();
    $("ansInput").focus();
  }

  function saveCurrent() {
    if (!exam || exam.finished) return;
    exam.answers[exam.idx].num = $("ansInput").value;
    exam.answers[exam.idx].unit = $("unitInput").value;
    persistExam();
  }

  function move(delta) {
    saveCurrent();
    var next = exam.idx + delta;
    if (next < 0 || next >= exam.ids.length) return;
    exam.idx = next;
    renderQuestion();
  }

  $("ansInput").addEventListener("input", saveCurrent);
  $("unitInput").addEventListener("input", saveCurrent);
  $("prevBtn").addEventListener("click", function () { move(-1); });
  $("nextBtn").addEventListener("click", function () {
    if (exam.idx === exam.ids.length - 1) { saveCurrent(); confirmFinish(); }
    else move(1);
  });
  $("flagBtn").addEventListener("click", function () {
    var a = exam.answers[exam.idx];
    a.flagged = !a.flagged;
    $("flagBtn").classList.toggle("on", a.flagged);
    renderDots();
    persistExam();
  });
  $("finishBtn").addEventListener("click", function () { saveCurrent(); confirmFinish(); });
  $("pauseBtn").addEventListener("click", function () { setPaused(!isPaused()); });
  $("resumePauseBtn").addEventListener("click", function () { setPaused(false); });
  $("unitInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); $("nextBtn").click(); }
  });
  $("ansInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); $("unitInput").focus(); }
  });

  function confirmFinish() {
    var blank = exam.answers.filter(function (a) { return a.num.trim() === ""; }).length;
    var msg = blank > 0
      ? blank + " question" + (blank === 1 ? " is" : "s are") + " still blank. Submit and grade anyway?"
      : "Submit and grade your answers?";
    if (confirm(msg)) finishExam(false);
  }

  /* ---------------- grading ---------------- */
  function finishExam(auto) {
    if (!exam || exam.finished) return;
    if (!auto) saveCurrent();
    stopTimer();
    exam.finished = true;
    exam.elapsedMs = workedMs(exam);
    exam.pausedTotalMs = (exam.pausedMs || 0) + (exam.pausedAt ? Date.now() - exam.pausedAt : 0);
    exam.pausedAt = null;
    store(KEY_EXAM, null);

    var results = exam.ids.map(function (id, i) {
      var p = byId[id];
      var a = exam.answers[i];
      var g = gradeAnswer(p, a.num, a.unit);
      return { p: p, given: a, grade: g };
    });

    var earned = results.reduce(function (s, r) { return s + r.grade.score; }, 0);
    var total = results.length;
    var pct = total ? (earned / total) * 100 : 0;

    recordStats(results, pct, total);
    renderResults(results, earned, total, pct, auto);
    show("results");
  }

  function recordStats(results, pct, total) {
    var st = load(KEY_STATS, { runs: [], perProblem: {} });
    st.runs.push({ at: Date.now(), pct: Math.round(pct * 10) / 10, n: total, label: exam.label });
    if (st.runs.length > 100) st.runs = st.runs.slice(-100);
    results.forEach(function (r) {
      var k = String(r.p.n);
      var e = st.perProblem[k] || { seen: 0, right: 0 };
      e.seen++;
      if (r.grade.numberOk) e.right++;
      st.perProblem[k] = e;
    });
    store(KEY_STATS, st);
  }

  function verdictOf(g) {
    if (g.numberOk && g.unitOk) return "correct";
    if (g.numberOk || g.unitOk) return "partial";
    return "wrong";
  }

  function renderResults(results, earned, total, pct, auto) {
    $("scorePct").textContent = Math.round(pct) + "%";
    $("scorePct").className = "score-number " + (pct >= 80 ? "high" : (pct >= 50 ? "mid" : "low"));
    $("scoreFraction").textContent = earned.toFixed(1) + " / " + total.toFixed(1) + " points";
    var full = results.filter(function (r) { return r.grade.numberOk && r.grade.unitOk; }).length;
    var numOnly = results.filter(function (r) { return r.grade.numberOk && !r.grade.unitOk; }).length;
    var missed = total - full - numOnly;
    var parts = [full + " fully correct"];
    if (numOnly) parts.push(numOnly + " right number, wrong unit");
    if (missed) parts.push(missed + " wrong number");
    $("scoreBreakdown").textContent = parts.join(" · ");
    $("scoreTime").textContent = (auto ? "Time expired. " : "") +
      "Finished in " + fmtDuration(exam.elapsedMs || 0) + "." +
      (exam.pausedTotalMs > 1000 ? " Paused for " + fmtDuration(exam.pausedTotalMs) + "." : "");

    var list = $("resultList");
    list.textContent = "";

    results.forEach(function (r, i) {
      var v = verdictOf(r.grade);
      var card = el("div", "result " + v);

      var head = el("div", "result-head");
      head.appendChild(el("span", "chip", "P" + r.p.n));
      head.appendChild(topicChip(r.p.t));
      head.appendChild(el("span", "verdict " + v,
        v === "correct" ? "1.0 pt" : (v === "partial" ? r.grade.score.toFixed(1) + " pt" : "0 pt")));
      card.appendChild(head);

      card.appendChild(el("p", "qtext", (i + 1) + ". " + r.p.q));

      var ans = el("div", "answers");
      var mine = el("div");
      mine.appendChild(el("span", "lbl", "Your answer"));
      var mineVal = el("b", r.grade.numberOk ? "ok" : "no",
        (r.given.num.trim() === "" ? "— blank —" : r.given.num) +
        (r.given.unit.trim() === "" ? "" : " " + r.given.unit));
      mine.appendChild(mineVal);
      ans.appendChild(mine);

      var right = el("div");
      right.appendChild(el("span", "lbl", "Official answer"));
      right.appendChild(el("b", null, formatAnswer(r.p.a) + (r.p.u ? " " + r.p.u : " (no unit)")));
      ans.appendChild(right);

      var uni = el("div");
      uni.appendChild(el("span", "lbl", "Unit"));
      uni.appendChild(el("b", r.grade.unitOk ? "ok" : "no", r.grade.unitOk ? "correct" : "not accepted"));
      ans.appendChild(uni);
      card.appendChild(ans);

      var sol = el("div", "solution", r.p.s);
      sol.hidden = true;
      var tog = el("button", "sol-toggle", "Show worked solution");
      tog.addEventListener("click", function () {
        sol.hidden = !sol.hidden;
        tog.textContent = sol.hidden ? "Show worked solution" : "Hide worked solution";
      });
      card.appendChild(tog);
      card.appendChild(sol);
      list.appendChild(card);
    });

    $("expandAllBtn").textContent = "Expand all solutions";
  }

  $("expandAllBtn").addEventListener("click", function () {
    var opening = $("expandAllBtn").textContent.indexOf("Expand") === 0;
    document.querySelectorAll("#resultList .solution").forEach(function (s) { s.hidden = !opening; });
    document.querySelectorAll("#resultList .sol-toggle").forEach(function (b) {
      b.textContent = opening ? "Hide worked solution" : "Show worked solution";
    });
    $("expandAllBtn").textContent = opening ? "Collapse all solutions" : "Expand all solutions";
  });
  $("againBtn").addEventListener("click", function () { newExam(PROBLEMS, EXAM_SIZE, $("timedCheck").checked, "Exam"); });
  $("homeBtn").addEventListener("click", function () { show("home"); });

  /* ---------------- home ---------------- */
  var topicKeys = Object.keys(TOPICS);
  function fillTopicSelect(sel, allLabel) {
    sel.textContent = "";
    var o = el("option", null, allLabel);
    o.value = "all";
    sel.appendChild(o);
    topicKeys.forEach(function (k) {
      var count = PROBLEMS.filter(function (p) { return p.t === k; }).length;
      var opt = el("option", null, TOPICS[k] + " (" + count + ")");
      opt.value = k;
      sel.appendChild(opt);
    });
  }
  fillTopicSelect($("topicSelect"), "All topics (150)");
  fillTopicSelect($("browseTopic"), "All topics (150)");

  $("startExamBtn").addEventListener("click", function () {
    newExam(PROBLEMS, EXAM_SIZE, $("timedCheck").checked, "Exam");
  });
  $("startPracticeBtn").addEventListener("click", function () {
    var key = $("topicSelect").value;
    var pool = (key === "all") ? PROBLEMS : PROBLEMS.filter(function (p) { return p.t === key; });
    var n = parseInt($("countSelect").value, 10);
    newExam(pool, n, false, key === "all" ? "Practice" : TOPICS[key]);
  });

  function renderStats() {
    var st = load(KEY_STATS, { runs: [], perProblem: {} });
    var row = $("statsRow");
    row.textContent = "";
    var runs = st.runs || [];
    var avg = runs.length ? runs.reduce(function (s, r) { return s + r.pct; }, 0) / runs.length : 0;
    var best = runs.length ? Math.max.apply(null, runs.map(function (r) { return r.pct; })) : 0;
    var seen = Object.keys(st.perProblem || {}).length;
    [["Sets completed", runs.length],
     ["Average score", runs.length ? Math.round(avg) + "%" : "—"],
     ["Best score", runs.length ? Math.round(best) + "%" : "—"],
     ["Problems seen", seen + " / 150"]].forEach(function (pair) {
      var b = el("div");
      b.appendChild(el("div", "stat-value", String(pair[1])));
      b.appendChild(el("div", "stat-label", pair[0]));
      row.appendChild(b);
    });
  }
  $("clearStatsBtn").addEventListener("click", function () {
    if (confirm("Clear your saved scores and progress?")) { store(KEY_STATS, null); renderStats(); }
  });

  /* resume an interrupted exam */
  function checkResume() {
    var saved = load(KEY_EXAM, null);
    if (!saved || !saved.ids || saved.finished) { $("resumeBanner").hidden = true; return; }
    if (saved.timed && remainingFor(saved) <= 0) { store(KEY_EXAM, null); return; }
    var answered = saved.answers.filter(function (a) { return a.num.trim() !== ""; }).length;
    $("resumeInfo").textContent = saved.label + " · " + answered + " of " + saved.ids.length + " answered" +
      (saved.timed ? " · " + fmtClock(remainingFor(saved)) + " left" + (saved.pausedAt ? " (paused)" : "") : "");
    $("resumeBanner").hidden = false;
    $("resumeBtn").onclick = function () {
      exam = saved;
      $("resumeBanner").hidden = true;
      show("exam");
      renderQuestion();
      startTimer();
      applyPauseUI();
    };
    $("discardBtn").onclick = function () { store(KEY_EXAM, null); $("resumeBanner").hidden = true; };
  }

  /* ---------------- browse ---------------- */
  function renderBrowse() {
    var q = $("searchInput").value.trim().toLowerCase();
    var topic = $("browseTopic").value;
    var list = $("browseList");
    list.textContent = "";

    var matches = PROBLEMS.filter(function (p) {
      if (topic !== "all" && p.t !== topic) return false;
      if (!q) return true;
      var num = q.replace(/^p/, "");
      if (/^\d+$/.test(num) && String(p.n) === num) return true;
      var hay = ("p" + p.n + " " + TOPICS[p.t] + " " + p.q + " " + p.s).toLowerCase();
      return q.split(/\s+/).every(function (word) { return hay.indexOf(word) !== -1; });
    });

    $("browseCount").textContent = matches.length + " of " + PROBLEMS.length + " problems";

    matches.forEach(function (p) {
      var item = el("div", "browse-item");
      var head = el("div", "result-head");
      head.appendChild(el("span", "chip", "P" + p.n));
      head.appendChild(topicChip(p.t));
      item.appendChild(head);
      item.appendChild(el("p", "qtext", p.q));

      var row = el("div", "reveal");
      var answer = el("span", "official", formatAnswer(p.a) + (p.u ? " " + p.u : " (no unit)"));
      answer.hidden = true;
      var showAns = el("button", "sol-toggle", "Show answer");
      var sol = el("div", "solution", p.s);
      sol.hidden = true;
      var showSol = el("button", "sol-toggle", "Show solution");

      showAns.addEventListener("click", function () {
        answer.hidden = !answer.hidden;
        showAns.textContent = answer.hidden ? "Show answer" : "Hide answer";
      });
      showSol.addEventListener("click", function () {
        sol.hidden = !sol.hidden;
        showSol.textContent = sol.hidden ? "Show solution" : "Hide solution";
      });

      row.appendChild(showAns);
      row.appendChild(showSol);
      row.appendChild(answer);
      item.appendChild(row);
      item.appendChild(sol);
      list.appendChild(item);
    });

    if (!matches.length) {
      list.appendChild(el("div", "card muted", "No problems match that search."));
    }
  }
  $("searchInput").addEventListener("input", renderBrowse);
  $("browseTopic").addEventListener("change", renderBrowse);

  /* ---------------- calculator ---------------- */
  var calcDeg = true;
  var calcAns = 0;

  function calcEval() {
    var src = $("calcInput").value.trim();
    var out = $("calcOutput");
    if (!src) { out.textContent = " "; out.className = "calc-output"; return; }
    try {
      var v = CalcEngine.evaluate(src, calcDeg, calcAns);
      calcAns = v;
      out.textContent = formatCalc(v);
      out.className = "calc-output";
    } catch (err) {
      out.textContent = err.message;
      out.className = "calc-output err";
    }
  }
  function formatCalc(v) {
    if (!isFinite(v)) return "undefined";
    if (v !== 0 && (Math.abs(v) < 1e-6 || Math.abs(v) >= 1e10)) return v.toExponential(6);
    return String(parseFloat(v.toPrecision(10)));
  }
  function insert(text) {
    var i = $("calcInput");
    var start = i.selectionStart, end = i.selectionEnd;
    i.value = i.value.slice(0, start) + text + i.value.slice(end);
    i.selectionStart = i.selectionEnd = start + text.length;
    i.focus();
    calcEval();
  }
  function toggleCalc(open) {
    var panel = $("calcPanel");
    panel.hidden = (open === undefined) ? !panel.hidden : !open;
    if (!panel.hidden) $("calcInput").focus();
  }
  $("calcToggle").addEventListener("click", function () { toggleCalc(); });
  $("calcClose").addEventListener("click", function () { toggleCalc(false); });
  $("calcInput").addEventListener("input", calcEval);
  $("calcInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); calcEval(); }
  });
  $("calcEq").addEventListener("click", calcEval);
  $("calcClear").addEventListener("click", function () {
    $("calcInput").value = ""; $("calcOutput").textContent = " ";
    $("calcOutput").className = "calc-output"; $("calcInput").focus();
  });
  $("calcBack").addEventListener("click", function () {
    var i = $("calcInput");
    var s = i.selectionStart;
    if (s > 0) { i.value = i.value.slice(0, s - 1) + i.value.slice(i.selectionEnd); i.selectionStart = i.selectionEnd = s - 1; }
    i.focus(); calcEval();
  });
  $("angleMode").addEventListener("click", function () {
    calcDeg = !calcDeg;
    $("angleMode").textContent = calcDeg ? "DEG" : "RAD";
    calcEval();
  });
  document.querySelectorAll(".calc-keys button[data-k]").forEach(function (b) {
    b.addEventListener("click", function () { insert(b.getAttribute("data-k")); });
  });
  $("calcToAnswer").addEventListener("click", function () {
    var out = $("calcOutput");
    if (out.className.indexOf("err") !== -1 || out.textContent.trim() === "") return;
    if (!$("view-exam").hidden) {
      $("ansInput").value = out.textContent.trim();
      saveCurrent();
      renderDots();
      $("unitInput").focus();
      toggleCalc(false);
    }
  });

  /* ---------------- keyboard ---------------- */
  document.addEventListener("keydown", function (e) {
    if (e.altKey && (e.key === "p" || e.key === "P")) {
      if (!$("view-exam").hidden) { e.preventDefault(); setPaused(!isPaused()); }
      return;
    }
    if (isPaused()) return;   /* the clock is stopped: no shortcuts get through */
    if (e.altKey && (e.key === "c" || e.key === "C")) { e.preventDefault(); toggleCalc(); return; }
    if (e.key === "Escape" && !$("calcPanel").hidden) { toggleCalc(false); return; }
    if ($("view-exam").hidden) return;
    if (e.altKey && e.key === "ArrowRight") { e.preventDefault(); move(1); }
    if (e.altKey && e.key === "ArrowLeft") { e.preventDefault(); move(-1); }
  });

  window.addEventListener("beforeunload", function (e) {
    if (exam && !exam.finished) { saveCurrent(); }
  });

  /* ---------------- boot ---------------- */
  renderStats();
  renderBrowse();
  checkResume();
  show("home");
})();
