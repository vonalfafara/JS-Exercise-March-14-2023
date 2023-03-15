function getElements(array, n) {
  return array.slice(0, n);
}

const array = ["fuchsia", "rouge", "taffy", "magenta", "cerise",];

const n = 3;

const result = getElements(array, n);
console.log(result);