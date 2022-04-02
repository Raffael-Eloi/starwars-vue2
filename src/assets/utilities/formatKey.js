export function formatKey(key) {
  const arraykey = key.split("_");
  let keyFormated = "";
  arraykey.forEach((keyItem, index) => {
    if (index === 0) {
      keyFormated += keyItem.charAt(0).toUpperCase() + keyItem.slice(1) + " ";
    } else {
      keyFormated += keyItem;
    }
  });
  return keyFormated;
}
