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
  let n = array.length

  console.log("The following items are for sale:")
  for (let i = 0; i < n; i++) {
    if (array[i].forSale == true) {
      console.log(array[i].item)
    }

      // console.log(array[i].item,array[i].price,array[i].forSale)
   }
}

displayForSale(items)