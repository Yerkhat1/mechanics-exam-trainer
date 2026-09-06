/* Visitor counter.
 *
 * Counts every page load, not just finished exams, so people who open the
 * site and leave straight away are still counted.
 *
 *   views  - incremented on every page load (reloads included)
 *   people - incremented once per browser, using a localStorage flag
 *
 * Backed by abacus.jasoncameron.dev, a free public counter that needs no
 * account. It receives nothing but a URL hit: no cookies, no identifiers,
 * no personal data. If it is slow or offline the page carries on as normal
 * and simply shows no figure.
 *
 * To swap in a full analytics dashboard later (GoatCounter, Cloudflare Web
 * Analytics), delete this file and its <script> tag and drop in their snippet.
 */
(function () {
  "use strict";

  var BASE = "https://abacus.jasoncameron.dev";
  var NS = "yerkhat1-mechanics-exam-trainer";
  var SEEN_KEY = "mechtrainer.counted";
  var out = document.getElementById("visitCount");
  if (!out || !window.fetch) return;

  function ask(path) {
    return fetch(BASE + path, { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { return (d && typeof d.value === "number") ? d.value : null; })
      .catch(function () { return null; });
  }

  var firstVisit = false;
  try { firstVisit = !localStorage.getItem(SEEN_KEY); } catch (e) { /* private mode */ }

  Promise.all([
    ask("/hit/" + NS + "/pageviews"),
    /* a browser is only counted as a new person once */
    ask((firstVisit ? "/hit/" : "/get/") + NS + "/visitors")
  ]).then(function (r) {
    var views = r[0], people = r[1];
    if (firstVisit) {
      try { localStorage.setItem(SEEN_KEY, "1"); } catch (e) { /* ignore */ }
    }
    if (views === null && people === null) return;

    var parts = [];
    if (views !== null) parts.push(views.toLocaleString() + (views === 1 ? " visit" : " visits"));
    if (people !== null && people > 0) parts.push(people.toLocaleString() + (people === 1 ? " person" : " people"));
    out.textContent = parts.join(" · ");
    out.hidden = false;
  });
})();
