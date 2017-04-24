import 'jest';
import yelo from '../index';

test('yelo', () => {
  expect(yelo('hello yelo')).toBe('hello yelo');
})