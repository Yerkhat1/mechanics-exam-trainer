/*
 * units.js is loaded by the page as a plain script, not a module, so the browser
 * sees globals. Rather than change how the page loads to suit a test, the file is
 * evaluated in a VM context and the globals are read out of it. The code under test
 * is byte-identical to what ships.
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const here = dirname(fileURLToPath(import.meta.url));
const sandbox = vm.createContext({});
vm.runInContext(readFileSync(join(here, '..', 'js', 'units.js'), 'utf8'), sandbox);
const { normalizeUnit, unitsMatch, numbersMatch, gradeAnswer, parseCandidates, formatAnswer } =
  sandbox;

describe('unit normalisation', () => {
  it('accepts a unit written out in words', () => {
    // Regression: "per" is rewritten to "/" before alias lookup, so the alias table
    // has to be normalised too or this correct answer loses the unit mark.
    assert.ok(unitsMatch('meters per second', 'm/s'));
    assert.ok(unitsMatch('meterspersecond', 'm/s'));
    assert.ok(unitsMatch('kilometers per hour', 'km/h'));
  });

  it('accepts the three ways people write acceleration', () => {
    assert.ok(unitsMatch('m/s2', 'm/s^2'));
    assert.ok(unitsMatch('m s^-2', 'm/s^2'));
    assert.ok(unitsMatch('ms^-2', 'm/s^2'));
  });

  it('is case and space insensitive', () => {
    assert.ok(unitsMatch('  KM/H ', 'km/h'));
  });

  it('counts a blank as the correct unit on a dimensionless answer', () => {
    assert.ok(unitsMatch('', 'none'));
  });

  it('does not treat nanoseconds as seconds', () => {
    assert.ok(!unitsMatch('ns', 's'));
  });

  it('rejects a genuinely different unit', () => {
    assert.ok(!unitsMatch('kg', 'm'));
  });
});

describe('numeric comparison', () => {
  it('accepts an answer inside the 1% tolerance', () => {
    assert.ok(numbersMatch(9.85, 9.81));
  });

  it('rejects an answer outside it', () => {
    assert.ok(!numbersMatch(9.0, 9.81));
  });

  it('handles negatives', () => {
    assert.ok(numbersMatch(-4.0, -4.01));
    assert.ok(!numbersMatch(4.0, -4.0));
  });

  it('reads scientific notation', () => {
    assert.ok(numbersMatch(parseCandidates('3.0e8')[0], 3.0e8));
  });
});

describe('gradeAnswer', () => {
  const problem = { a: 9.81, u: 'm/s^2' };

  it('gives full credit for the right number and unit', () => {
    const r = gradeAnswer(problem, '9.81', 'm/s^2');
    assert.equal(r.score, 1);
    assert.ok(r.numberOk && r.unitOk);
  });

  it('gives 0.9 for the right number with the wrong unit', () => {
    assert.equal(gradeAnswer(problem, '9.81', 'kg').score, 0.9);
  });

  it('gives 0.1 for the right unit with the wrong number', () => {
    assert.equal(gradeAnswer(problem, '1.0', 'm/s^2').score.toFixed(2), '0.10');
  });

  it('scores a blank answer zero even when the unit box is empty and correct', () => {
    const dimensionless = { a: 0.5, u: 'none' };
    const r = gradeAnswer(dimensionless, '', '');
    assert.equal(r.score, 0);
    assert.equal(r.blank, true);
    assert.equal(r.unitOk, false, 'an empty box must not earn the unit mark');
  });

  it('accepts a per-problem alternative unit spelling', () => {
    const impulse = { a: 12, u: 'kg m/s', ua: ['n s'] };
    assert.equal(gradeAnswer(impulse, '12', 'N s').score, 1);
  });

  it('does not crash on text in the number box', () => {
    const r = gradeAnswer(problem, 'about nine', 'm/s^2');
    assert.equal(r.numberOk, false);
    assert.equal(r.unitOk, true);
  });
});

describe('formatAnswer', () => {
  it('prints zero plainly', () => {
    assert.equal(formatAnswer(0), '0');
  });

  it('trims trailing zeros', () => {
    assert.ok(!formatAnswer(2.5).endsWith('0'));
  });
});
