export default function fetchData(url) {
  if (url === 'https://server/user/007') {
    return { status: 'ok', level: 80 };
  }
  if (url === 'https://server/user/001') {
    return { status: 'no', level: 1 };
  }
  throw new Error('Mock this!');
}
