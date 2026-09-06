/* Scientific calculator: a small recursive-descent parser.
   No eval() - the expression is tokenised and evaluated by hand. */

var CalcEngine = (function () {

  function tokenize(src) {
    var tokens = [], i = 0;
    while (i < src.length) {
      var c = src[i];
      if (c === " " || c === "\t") { i++; continue; }
      if (/[0-9.]/.test(c)) {
        var num = "";
        while (i < src.length && /[0-9.]/.test(src[i])) { num += src[i++]; }
        /* scientific notation: 1.2e-6 */
        if (i < src.length && /e/i.test(src[i]) && /[0-9+\-]/.test(src[i + 1] || "")) {
          num += src[i++];
          if (/[+\-]/.test(src[i])) num += src[i++];
          while (i < src.length && /[0-9]/.test(src[i])) num += src[i++];
        }
        if (isNaN(parseFloat(num))) throw new Error("Bad number: " + num);
        tokens.push({ type: "num", value: parseFloat(num) });
        continue;
      }
      if (/[a-zA-Z]/.test(c)) {
        var name = "";
        while (i < src.length && /[a-zA-Z0-9_]/.test(src[i])) { name += src[i++]; }
        tokens.push({ type: "name", value: name.toLowerCase() });
        continue;
      }
      if ("+-*/^()%".indexOf(c) !== -1) { tokens.push({ type: "op", value: c }); i++; continue; }
      throw new Error("Unexpected character: " + c);
    }
    return tokens;
  }

  var FUNCS = {
    sin: Math.sin, cos: Math.cos, tan: Math.tan,
    asin: Math.asin, acos: Math.acos, atan: Math.atan,
    sqrt: Math.sqrt, cbrt: Math.cbrt, abs: Math.abs,
    ln: Math.log, log: function (x) { return Math.log(x) / Math.LN10; },
    exp: Math.exp
  };
  var TRIG_IN = ["sin", "cos", "tan"];
  var TRIG_OUT = ["asin", "acos", "atan"];

  /* degMode: trig arguments/results are in degrees.
     ans: value of the previous result, available as "ans". */
  function evaluate(src, degMode, ans) {
    var tokens = tokenize(src), pos = 0;
    var D2R = Math.PI / 180, R2D = 180 / Math.PI;

    function peek() { return tokens[pos]; }
    function next() { return tokens[pos++]; }
    function isOp(v) { var t = peek(); return t && t.type === "op" && t.value === v; }
    function expect(v) {
      if (!isOp(v)) throw new Error("Expected '" + v + "'");
      pos++;
    }

    function parseExpr() {
      var left = parseTerm();
      while (isOp("+") || isOp("-")) {
        var op = next().value;
        var right = parseTerm();
        left = (op === "+") ? left + right : left - right;
      }
      return left;
    }

    function startsPrimary() {
      var t = peek();
      if (!t) return false;
      return t.type === "num" || t.type === "name" || (t.type === "op" && t.value === "(");
    }

    function parseTerm() {
      var left = parseUnary();
      while (true) {
        if (isOp("*") || isOp("/")) {
          var op = next().value;
          var right = parseUnary();
          if (op === "/" && right === 0) throw new Error("Division by zero");
          left = (op === "*") ? left * right : left / right;
        } else if (isOp("%")) {
          next();
          var m = parseUnary();
          left = left % m;
        } else if (startsPrimary()) {
          /* implicit multiplication: 2pi, 3(4+1) */
          left = left * parseUnary();
        } else { break; }
      }
      return left;
    }

    function parseUnary() {
      if (isOp("-")) { next(); return -parseUnary(); }
      if (isOp("+")) { next(); return parseUnary(); }
      return parsePower();
    }

    function parsePower() {
      var base = parsePrimary();
      if (isOp("^")) {
        next();
        var exponent = parseUnary();  /* right-associative, allows 2^-3 */
        return Math.pow(base, exponent);
      }
      return base;
    }

    function parsePrimary() {
      var t = peek();
      if (!t) throw new Error("Unexpected end of expression");

      if (t.type === "num") { next(); return t.value; }

      if (t.type === "op" && t.value === "(") {
        next();
        var v = parseExpr();
        expect(")");
        return v;
      }

      if (t.type === "name") {
        next();
        var name = t.value;
        if (name === "pi") return Math.PI;
        if (name === "e") return Math.E;
        if (name === "ans") return ans || 0;
        if (FUNCS[name]) {
          expect("(");
          var arg = parseExpr();
          expect(")");
          if (degMode && TRIG_IN.indexOf(name) !== -1) arg = arg * D2R;
          var out = FUNCS[name](arg);
          if (degMode && TRIG_OUT.indexOf(name) !== -1) out = out * R2D;
          if (typeof out !== "number" || !isFinite(out)) {
            if (isNaN(out)) throw new Error("Undefined result");
          }
          return out;
        }
        throw new Error("Unknown name: " + name);
      }
      throw new Error("Unexpected token: " + t.value);
    }

    var result = parseExpr();
    if (pos < tokens.length) throw new Error("Unexpected trailing input");
    if (typeof result !== "number" || isNaN(result)) throw new Error("Undefined result");
    return result;
  }

  return { evaluate: evaluate, tokenize: tokenize };
})();

if (typeof module !== "undefined") { module.exports = CalcEngine; }
