/* Answer + unit checking, modelled on the Moodle numerical-with-unit format:
   90% of each question for the number, 10% for the unit. */

const NUMERIC_TOLERANCE = 0.01; /* 1% relative tolerance */

/* Words / symbols that mean the same unit. Everything is compared in a
   normalised lower-case form, e.g. "m/s2", "m/s^2" and "m s^-2" all match. */
const UNIT_ALIASES = [
  ["", "-", "--", "none", "nounit", "1", "dimensionless", "unitless", "n/a", "na", "ratio"],
  ["m", "meter", "meters", "metre", "metres"],
  ["cm", "centimeter", "centimeters", "centimetre", "centimetres"],
  ["km", "kilometer", "kilometers", "kilometre", "kilometres"],
  ["m^2", "squaremeter", "squaremeters", "sqm"],
  ["cm^2", "squarecentimeter", "squarecentimeters"],
  ["m^3", "cubicmeter", "cubicmeters"],
  ["cm^3", "cubiccentimeter", "cubiccentimeters", "cc", "ml", "milliliter", "milliliters"],
  ["in^3", "inch^3", "cubicinch", "cubicinches", "cuin"],
  ["s", "sec", "secs", "second", "seconds"],
  ["ns", "nanosecond", "nanoseconds"],
  ["days", "day", "d"],
  ["kg", "kilogram", "kilograms"],
  ["g", "gram", "grams"],
  ["n", "newton", "newtons"],
  ["l", "liter", "liters", "litre", "litres", "dm^3"],
  ["hectares", "hectare", "ha"],
  ["rad", "radian", "radians"],
  ["deg", "degree", "degrees", "^o", "o"],
  ["m/s", "ms^-1", "m/sec", "meterspersecond", "meterpersecond"],
  ["m/s^2", "ms^-2", "m/sec^2", "meterspersecondsquared"],
  ["km/h", "kmh^-1", "kph", "km/hr", "kmperhour", "kilometersperhour"],
  ["g/cm^3", "gcm^-3", "g/cc", "gramspercubiccentimeter"]
];

function normalizeUnit(raw) {
  if (raw === null || raw === undefined) return "";
  var u = String(raw).trim().toLowerCase();

  /* superscript characters -> ^n */
  u = u.replace(/²/g, "^2").replace(/³/g, "^3").replace(/¹/g, "^1");
  u = u.replace(/⁰/g, "^0").replace(/[⁴]/g, "^4");
  u = u.replace(/⁻/g, "-");
  /* degree sign, middle dot, multiplication sign, spaces */
  u = u.replace(/°/g, "deg").replace(/·/g, "").replace(/×/g, "");
  u = u.replace(/[\s*]/g, "");
  /* "per" written out */
  u = u.replace(/per/g, "/");
  /* implicit exponent: m/s2 -> m/s^2, cm3 -> cm^3 */
  u = u.replace(/([a-z])(-?\d)/g, "$1^$2");
  /* tidy duplicated carets and trivial exponents */
  u = u.replace(/\^\^+/g, "^").replace(/\^\+?1(?![0-9])/g, "");
  return u;
}

function unitsMatch(given, expected) {
  var g = normalizeUnit(given);
  var e = normalizeUnit(expected);
  if (g === e) return true;
  for (var i = 0; i < UNIT_ALIASES.length; i++) {
    var set = UNIT_ALIASES[i];
    if (set.indexOf(g) !== -1 && set.indexOf(e) !== -1) return true;
  }
  return false;
}

/* Accepts 12.5, -3, 1.2e-6, 1.2E-6, 5.1x10^-6, and comma decimals like 5,15.
   "13,491" is genuinely ambiguous (13.491 or 13491), so both readings are
   returned and the grader accepts whichever one matches. */
function cleanNumeric(s) {
  s = s.replace(/\s/g, "").replace(/−/g, "-");
  s = s.replace(/[x×*]10\^?/i, "e").replace(/\^/g, "");
  return s;
}

function toNumber(s) {
  if (!/^[-+]?(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?$/.test(s)) return NaN;
  return parseFloat(s);
}

function parseCandidates(raw) {
  if (raw === null || raw === undefined) return [];
  var s = cleanNumeric(String(raw).trim());
  if (s === "") return [];
  var out = [];
  if (s.indexOf(",") !== -1) {
    out.push(toNumber(s.replace(/,/g, ".")));   /* comma as decimal point */
    out.push(toNumber(s.replace(/,/g, "")));    /* comma as thousands separator */
  } else {
    out.push(toNumber(s));
  }
  return out.filter(function (v) { return !isNaN(v); });
}

function parseNumericAnswer(raw) {
  var c = parseCandidates(raw);
  return c.length ? c[0] : NaN;
}

function numbersMatch(given, expected, tol) {
  if (isNaN(given)) return false;
  var t = (tol === undefined) ? NUMERIC_TOLERANCE : tol;
  if (expected === 0) return Math.abs(given) < 1e-9;
  return Math.abs(given - expected) / Math.abs(expected) <= t;
}

/* Returns { numberOk, unitOk, score (0..1), value } for one problem. */
function gradeAnswer(problem, rawNumber, rawUnit) {
  /* A blank answer scores nothing, even on a dimensionless problem where an
     empty unit box would otherwise count as the "correct" unit. */
  var blank = (rawNumber === null || rawNumber === undefined || String(rawNumber).trim() === "");
  if (blank) return { value: NaN, numberOk: false, unitOk: false, blank: true, score: 0 };

  var candidates = parseCandidates(rawNumber);
  var value = candidates.length ? candidates[0] : NaN;
  var numberOk = false;
  for (var i = 0; i < candidates.length; i++) {
    if (numbersMatch(candidates[i], problem.a)) { numberOk = true; value = candidates[i]; break; }
  }
  var unitOk = unitsMatch(rawUnit, problem.u);
  return {
    value: value,
    numberOk: numberOk,
    unitOk: unitOk,
    blank: false,
    score: (numberOk ? 0.9 : 0) + (unitOk ? 0.1 : 0)
  };
}

/* Pretty-print the official answer, trimming trailing zeros. */
function formatAnswer(v) {
  if (v === 0) return "0";
  var abs = Math.abs(v);
  if (abs < 1e-4 || abs >= 1e7) {
    var parts = v.toExponential(5).split("e");
    var mant = parts[0].replace(/0+$/, "").replace(/\.$/, "");
    return mant + "x10^" + parts[1].replace("+", "");
  }
  return String(parseFloat(v.toPrecision(6)));
}

if (typeof module !== "undefined") {
  module.exports = { normalizeUnit, unitsMatch, parseNumericAnswer, parseCandidates, numbersMatch, gradeAnswer, formatAnswer, NUMERIC_TOLERANCE };
}
