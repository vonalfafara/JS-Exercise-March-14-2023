// [Array]
// 1. Write a Javascript function that returns the first N items of an array, where N is the number of items. The function must accept 2 parameters: the array and the number of items to be returned.

const array = [1, 2, 3, 4]
const n = 3


// Solution 1
function getElements(array, numberOfItems) {
    if(array.length < numberOfItems){
        return "Your numberOfItems exceeded the length of your Array";
    }else{
        let myArr = [];
        for(let x = 0; x < numberOfItems; x++)
                myArr.push(array[x]);
        return myArr;
    }
}


// Solution 2
// But has its fallback the array is mutated;
function getElementsShift(array, numberOfItems) {
    let myArr = [];
    for(let x = 0; x < numberOfItems; x++)
        myArr.push(array.shift());
    return myArr;
}


// Solution 3
// But has its fallback the array is mutated;
function getElementsPop(array, numberOfItems) {
    while(array.length > numberOfItems)
        array.pop();
    return array;
}

// Solution 4
function getElementsSlice(array, numberOfItems){
    return array.slice(0, numberOfItems);
}

const result = getElementsSlice(array, 3);
console.log(result);






// [Array of Objects]
// 2. Write a Javascript function that displays items that are for sale from an array of objects.

const items = [
  {
    item: "Book",
    price: 50,
    forSale: true
  },
  {
    item: "Pen",
    price: 10,
    forSale: true
  },
  {
    item: "Paper",
    price: 25,
    forSale: false
  },
  {
    item: "Glue",
    price: 5,
    forSale: true
  },
  {
    item: "Table",
    price: 100,
    forSale: false
  },
]

function displayForSale(array) {
    // Solution 1
 for (const item of array) {
    if(item.forSale == true){
        console.log("This is for sale: "+ item.item + " \t \t Price: " + item.price);
    }
 }  
    // Solution 2 
 array.forEach(item => {
    if(item.forSale == true)  console.log("This is for sale: "+ item.item + " \t \t Price: " + item.price)
 });

}

displayForSale(items)