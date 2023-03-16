// [Array of Objects]
// 2. Write a Javascript function that displays items that are for sale from an array of objects.

const items = [
    {
      item: "Book",
      price: 50,
      forSale: true,
    },
    {
      item: "Pen",
      price: 10,
      forSale: true,
    },
    {
      item: "Paper",
      price: 25,
      forSale: false,
    },
    {
      item: "Glue",
      price: 5,
      forSale: true,
    },
    {
      item: "Table",
      price: 100,
      forSale: false,
    },
  ]
  
  function displayForSale(array) {
    for (let index = 0; index < array.length; index++) {
      if (array[index].forSale == true) {
        console.log(
          `${array[index].item} is for sale with a price of ${array[index].price}`
        )
      }
    }
  }
  
  displayForSale(items)