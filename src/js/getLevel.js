/* eslint-disable import/prefer-default-export */
import fetchData from './http';

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  // TODO: логика обработки
  if (response.status === 'ok') {
    // eslint-disable-next-line indent
    return `Ваш текущий уровень: ${response.level}`;
  }

  return 'Информация об уровне временно недоступна';
}
