import {suite, test} from 'node:test';
import {equal} from 'node:assert';
import {FOO} from './index.js';

suite(FOO, () => {
  test('equals bar', () => {
    equal(FOO, 'bar');
  });
});
