module.exports = function(elementName) {
  return elementName
    .split("-")
    .map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1);
    })
    .join("");
};
