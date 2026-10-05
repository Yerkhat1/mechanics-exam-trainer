# Mechanics — Exam Trainer

A practice site that mimics a first-year mechanics exam format: **7 problems drawn at random**
from a 150-problem pool, a **40-minute timer**, a built-in **scientific calculator**,
and **units required** — graded the way Moodle grades them (90% number, 10% unit).
Every problem comes with a full worked solution once you submit.

Two question sets, switched with the **Exam 1 / Exam 2** toggle in the top bar:

- **Exam 1** — units, vectors, kinematics, Newton's laws (Chapters 1–6)
- **Exam 2** — work, energy, momentum, rotation

**Live site:** https://yerkhat1.github.io/mechanics-exam-trainer/

## What's in it

- **Exam mode** — 7 problems, 40 minutes, auto-submits when the clock runs out.
  A **pause button** stops the clock and hides the question, so a break can't be used to read ahead.
- **Practice mode** — untimed sets in random order, from one topic or all of them
  (5/7/10/15 problems, or the whole topic). Tick *Only problems I haven't solved yet* to
  work through what's left.
- **Topic progress** — every topic shows how many of its problems you have solved (got the
  number right at least once), with one-click **Practice**, **Retry missed** (problems
  whose last attempt was wrong) and, once the topic is finished, **Practice again**.
  After a practice set, *Next set* on the results page repeats the same kind of run.
- **No-repeat question dealing** — problems are dealt like cards from a deck, so a problem
  never returns until every other one has been used. All 150 are covered in 22 exams instead
  of the ~120 that independent random draws would need. Each pool (the full exam, and each
  topic) keeps its own deck, and progress survives refreshes.
- **Separate records per set** — scores, decks and an in-progress exam are kept per set,
  so switching sets never mixes them up.
- **Problem bank** — all 150 problems of the active set, searchable by keyword, topic or
  number (`P42`), each with the official answer and a step-by-step solution.
- **Calculator** — trig (DEG/RAD), inverse trig, `sqrt`, `ln`, `log`, powers, `pi`,
  scientific notation, and a "use result as answer" button.
- **Progress saved locally** — scores, problems seen, and an interrupted exam you can resume
  after a refresh. Everything lives in your browser's `localStorage`; nothing is uploaded.
- **Visitor counter** — a total shown in the footer (see *Counting visitors* below).
- Light/dark theme, works on phones.

## Topics covered

### Exam 1 (Chapters 1–6)

| Topic | Problems |
|---|---|
| Units & Conversions | 8 |
| Uncertainty | 6 |
| Vectors | 14 |
| Kinematics: 1D Motion | 25 |
| Relative Motion in 2D | 5 |
| Projectile Motion | 12 |
| Kinematics in Vector Form | 10 |
| Circular Motion | 13 |
| Friction | 7 |
| Newton's Second Law | 20 |
| Applications of Newton's Laws | 30 |
| **Total** | **150** |

### Exam 2

| Topic | Problems |
|---|---|
| Work | 14 |
| Kinetic Energy | 11 |
| Power | 4 |
| Potential Energy | 6 |
| Energy Conservation | 24 |
| Impulse & Collisions | 12 |
| Conservation of Momentum | 20 |
| Rocket Propulsion | 2 |
| Moment of Inertia | 13 |
| Rotational Kinematics | 12 |
| Torque | 14 |
| Angular Momentum | 18 |
| **Total** | **150** |

Problems that relied on a figure in the original sheet describe that figure in square brackets.

## How answers are marked

- **Number — 0.9 points.** Accepted within **1%** of the official value, so `4.065`,
  `4.07` and `4.0650406` all pass. Scientific notation works: `5.15e-6` or `5.15x10^-6`.
- **Unit — 0.1 points.** Moodle style: `m/s^2`, `cm^3`, `N`, `km/h`, `rad`, `J`, `W`,
  `kg m/s`, `rad/s^2`, `kg m^2`, `N m`. Common variants are accepted too (`m/s2`, `m/s²`,
  `newtons`, `kph`, `N·m`, `kg*m^2`). Impulse answers take either `N s` or `kg m/s`.
- Some answers are **pure ratios or counts** (coefficients of friction, fractions,
  revolutions). Those have no unit — leave the unit box empty.
- A blank answer scores zero regardless of the unit box.

## Sharing a specific set of problems

Append `?set=` and a list of problem numbers to open exactly those problems as an exam —
useful for revising a list someone gives you:

```
https://yerkhat1.github.io/mechanics-exam-trainer/?set=24,56,31,73,69,115,113
```

Those numbers refer to Exam 1. For Exam 2 problems add `&exam=2`
(`?set=72,133&exam=2`); `?exam=2` on its own simply opens the site on Exam 2.

Add `&timer=off` for an untimed run. Unknown or repeated numbers are ignored, and if none
are valid the site opens normally. A shared set does not consume your no-repeat deck.

## Keyboard shortcuts

| Key | Action |
|---|---|
| `Alt` + `P` | Pause / resume the exam |
| `Alt` + `C` | Open / close the calculator |
| `Esc` | Close the calculator |
| `Alt` + `←` / `→` | Previous / next question |
| `Enter` | Answer field → unit field → next question |

## Running it locally

It is a plain static site — no build step, no dependencies.

```bash
python3 -m http.server 4455
```

Then open <http://localhost:4455>.

## Project layout

```
index.html          markup for all four views
css/style.css       theming and layout
js/problems.js      Exam 1: 150 problems - question, answer, unit, worked solution
js/problems2.js     Exam 2: 150 problems, same format
js/units.js         answer + unit checking (the Moodle-style grader)
js/calculator.js    expression parser for the calculator (no eval)
js/app.js           exam engine, results, problem bank, calculator UI
```

To add or edit a problem, append an entry to `PROBLEMS` in `js/problems.js`:

```js
{n:151, t:"kin1d",
 q:"Question text...",
 a:12.34, u:"m/s",
 s:"Worked solution. Use \n for line breaks."}
```

`t` must be one of the keys in `TOPICS` at the top of the same file.

## Accuracy

Every answer in both banks was recomputed from the problem statement and matches the
official value. The grader is checked against all 300 problems at exact, 4-significant-figure
and 3-significant-figure precision.

If you spot a mistake in a problem or a solution, please open an issue.

## Counting visitors

GitHub Pages publishes no visitor statistics, and the app itself stores everything in the
visitor's own browser, so `js/counter.js` adds a lightweight count instead. On every page
load it pings [abacus](https://abacus.jasoncameron.dev) — a free public counter needing no
account — and shows the result in the footer:

- **pageviews** — incremented on every page load, so someone who opens the site and leaves
  immediately is still counted
- **visitors** — incremented once per browser, using a `localStorage` flag

Read the current numbers without incrementing them:

```bash
curl -s https://abacus.jasoncameron.dev/get/yerkhat1-mechanics-exam-trainer/pageviews
```

What it sends: nothing but a URL hit. No cookies, no identifiers, no personal data, no
consent banner needed. If the service is slow or down the page works exactly as normal and
simply shows no figure.

Its limits, honestly: the counter lives on a free shared service, so the namespace is
guessable and anyone could inflate the number, and the service could disappear. Treat the
figures as a rough indicator, not analytics. For referrers, countries and trends over time,
delete `js/counter.js` and its `<script>` tag and drop in
[GoatCounter](https://www.goatcounter.com) or
[Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) — both free and
cookie-free, both needing an account you create yourself.

## Disclaimer

Unofficial study tool. Not affiliated with or endorsed by any course or institution.
Problem statements come from the publicly posted Exam 1 and Exam 2 practice sets; the solutions
and the site are original work.

## License

MIT — see [LICENSE](LICENSE).


## Tests

```bash
node --test test/
```

18 tests over `js/units.js`, the file that decides marks. It is loaded into a VM
context rather than imported, so the code under test is byte-identical to what the
page ships.

They already caught one real bug. `normalizeUnit` rewrites "per" to "/" before the
alias table is consulted, but the table itself was never normalised, so the alias
`meterspersecond` could not match anything. A student who typed "meters per second"
lost the unit mark on a correct answer. Fixed by normalising the table once at load.

## Limitations

- The problem bank is fixed and hand-written; there is no generator.
- Grading is numeric with a 1% tolerance plus a unit check. It cannot award partial
  credit for a correct method with an arithmetic slip, which a human marker would.
- Progress is per-browser. Clearing site data clears history.
