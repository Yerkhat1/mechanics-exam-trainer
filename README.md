# Mechanics — Exam 1 Trainer

A practice site that mimics a first-year mechanics Exam 1 format: **7 problems drawn at random**
from a 150-problem pool, a **40-minute timer**, a built-in **scientific calculator**,
and **units required** — graded the way Moodle grades them (90% number, 10% unit).
Every problem comes with a full worked solution once you submit.

**Live site:** https://yerkhat1.github.io/mechanics-exam-trainer/

## What's in it

- **Exam mode** — 7 random problems, 40 minutes, auto-submits when the clock runs out.
  A **pause button** stops the clock and hides the question, so a break can't be used to read ahead.
- **Practice mode** — untimed sets filtered by chapter (5/7/10/15 problems).
- **Problem bank** — all 150 problems, searchable by keyword, topic or number (`P42`),
  each with the official answer and a step-by-step solution.
- **Calculator** — trig (DEG/RAD), inverse trig, `sqrt`, `ln`, `log`, powers, `pi`,
  scientific notation, and a "use result as answer" button.
- **Progress saved locally** — scores, problems seen, and an interrupted exam you can resume
  after a refresh. Everything lives in your browser's `localStorage`; nothing is uploaded.
- Light/dark theme, works on phones.

## Topics covered (Chapters 1–6)

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

## How answers are marked

- **Number — 0.9 points.** Accepted within **1%** of the official value, so `4.065`,
  `4.07` and `4.0650406` all pass. Scientific notation works: `5.15e-6` or `5.15x10^-6`.
- **Unit — 0.1 points.** Moodle style: `m/s^2`, `cm^3`, `N`, `km/h`, `rad`, `deg`.
  Common variants are accepted too (`m/s2`, `m/s²`, `newtons`, `kph`).
- Some answers are **pure ratios** (relative error, coefficients of friction). Those have
  no unit — leave the unit box empty.
- A blank answer scores zero regardless of the unit box.

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
js/problems.js      the 150 problems: question, answer, unit, worked solution
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

Every answer in the bank was recomputed from the problem statement and matches the
official value. The grader is checked against all 150 problems at exact, 4-significant-figure
and 3-significant-figure precision.

If you spot a mistake in a problem or a solution, please open an issue.

## Disclaimer

Unofficial study tool. Not affiliated with or endorsed by any course or institution.
Problem statements come from the publicly posted Exam 1 practice set; the solutions
and the site are original work.

## License

MIT — see [LICENSE](LICENSE).
