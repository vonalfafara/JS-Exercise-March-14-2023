const array = ["fuchsia", "rouge", "taffy", "blush", "cerise"];
const n = 3;

function getElements(array, n) {
  return array.slice(0, n);
}

const result = getElements(array, n);
console.log(result);
