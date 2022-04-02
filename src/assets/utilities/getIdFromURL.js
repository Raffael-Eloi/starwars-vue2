export function getIdFromUrl(url) {
  let id = "";
  for (let char of url) {
    isNaN(char) === false ? (id += char) : null;
  }
  return parseInt(id);
}
