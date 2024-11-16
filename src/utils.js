export function getDiff(start) {
  const newTime = new Date();
  const diff = newTime.getTime() - start.getTime();
  return diff;
  // return Math.floor(diff / 1000);
}

export function formatTime(timeInMil) {
  const timeInSec = Math.floor(timeInMil / 1000);
  const min = Math.floor(timeInSec / 60);
  const sec = timeInSec % 60;

  return formatNum(min) + ":" + formatNum(sec);
}

export function formatNum(num) {
  return num < 10 ? "0" + num : num;
}

export function getFormatedDate(date) {
  return date
    .toLocaleDateString("en-IN", { dateStyle: "medium" })
    .replaceAll(" ", "-");
}

export function getFormatedTime(date) {
  return date
    .toLocaleString("en-IN", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
    })
    .toUpperCase();
}
