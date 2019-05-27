import { getLevel } from '../src/js/getLevel';

test('Test GetLevel response on 007', () => {
  const received = getLevel('007');
  expect(received).toBe('Ваш текущий уровень: 80');
});

test('Test GetLevel response on 001', () => {
  const received = getLevel('001');
  expect(received).toBe('Информация об уровне временно недоступна');
});

// test('Test GetLevel response on 123', () => {
//   const expected = undefined;
//   const received = getLevel('123');
//   expect(received).toBe(expected);
// });
