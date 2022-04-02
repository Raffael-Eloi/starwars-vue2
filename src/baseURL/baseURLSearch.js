export function getNameForSearch(name) {
  const arrayName = name.split(" ");
  let nameFormated = "";
  arrayName.forEach((name, index) => {
    if (index + 1 !== arrayName.length) {
      nameFormated += name + "+";
    } else {
      nameFormated += name;
    }
  });
  const URLSEARCH = `https://www.google.com/search?q=${nameFormated}&source=lnms&tbm=isch&sa=X&ved=2ahUKEwih2aLizPX2AhUDupUCHfX6CAcQ_AUoAXoECAIQAw&biw=1920&bih=969`;
  return URLSEARCH;
}
