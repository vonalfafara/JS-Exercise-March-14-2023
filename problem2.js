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
];

function displayForSale(array) {
  array.forEach(item => {
    if (item.forSale) {
      console.log(`${item.item} - $${item.price}`);
    }
  });
}

displayForSale(items);


const author={
  name:"carlo"
  age:"30"
}

