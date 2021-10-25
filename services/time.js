export function padNumber(number) {
  return number.toString().padStart(2, "0");
}

export function formatTime(time) {
  const date = time ? new Date(time) : new Date();
  return `${padNumber(date.getHours())}:${padNumber(
    date.getMinutes()
  )}:${padNumber(date.getSeconds())} ${padNumber(date.getDate())}/${padNumber(
    date.getMonth() + 1
  )}/${padNumber(date.getFullYear())}`;
}

export function formatDate(date) {
  const d = new Date(date);

  return `${d.getDay()}-${d.getMonth() + 1}-${d.getFullYear()}`;
}
