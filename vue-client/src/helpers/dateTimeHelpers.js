import leftPad from 'left-pad';

export function formatDate(unformattedDate) {
  const date = new Date(unformattedDate);
  const day = leftPad(date.getDate(), 2, 0);
  const month = leftPad(date.getMonth() + 1, 2, 0);
  return `${day}-${month}-${date.getFullYear()}`;
}

export function formatDateTime(unformattedDate) {
  const date = new Date(unformattedDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // months are zero indexed
  const monthFormatted = month < 10 ? `0${month}` : month;
  const day = date.getDate();
  const dayFormatted = day < 10 ? `0${day}` : day;
  const hour = date.getHours();
  const minute = date.getMinutes();
  const minuteFormatted = minute < 10 ? `0${minute}` : minute;
  return `${dayFormatted}-${monthFormatted}-${year} ${hour}:${minuteFormatted}`;
}
