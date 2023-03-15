const array = ["fuchsia", "rouge", "taffy", "blush", "cerise"];
const n = 3;
const result = getElements(array, n);

function getElements(array, n) {
  return array.slice(0, n);
}

console.log(result);
