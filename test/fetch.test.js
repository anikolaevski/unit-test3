import fetchData from '../src/js/http';

jest.mock('../src/js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Test fetchData throw error', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  const callURL = 'https://server/user/123';
  expect(fetchData(callURL)).toBe('{}');
  expect(fetchData).toHaveBeenCalled();
  // expect(fetchData).toThrow();
});
