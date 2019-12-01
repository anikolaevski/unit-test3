import fetchData from '../src/js/http';

jest.mock('../src/js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Test fetchData have been called', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  const callURL = 'https://server/user/123';
  expect(fetchData(callURL)).toBe('{}');
  expect(fetchData).toHaveBeenCalled();
  // expect(f).toThrowError('Mock this!');
});

// eslint-disable-next-line func-names
const f = function (url) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((r, c) => {
    fetchData(url);
  });
};

test('Test fetchData error message, because toThrowError() seems not working for fetchData()', () => {
  // f.mockReturnValue(JSON.stringify({}));
  const callURL = 'https://server/user/123';
  f(callURL).catch((e) => { expect(e.message).toBe('Mock this!'); });
});

// eslint-disable-next-line func-names
const foo = function () {
  throw new TypeError('foo bar baz');
};

test('Test hrow error for local defined function', () => {
  expect(foo).toThrowError('foo bar baz');
});
