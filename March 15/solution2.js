// [Array of Objects]
// 2. Write a Javascript function that displays items that are for sale from an array of objects.

// const items = [
//   {
//     item: "Book",
//     price: 50,
//     forSale: true
//   },
//   {
//     item: "Pen",
//     price: 10,
//     forSale: true
//   },
//   {
//     item: "Paper",
//     price: 25,
//     forSale: false
//   },
//   {
//     item: "Glue",
//     price: 5,
//     forSale: true
//   },
//   {
//     item: "Table",
//     price: 100,
//     forSale: false
//   },
// ]

// function displayForSale(array) {
//   ...
// }

// displayForSale(items)

// solution

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
    const forSaleItems = array.filter(item => item.forSale === true);
  for (let i = 0; i < forSaleItems.length; i++) {
    console.log(`${forSaleItems[i].item} is for sale for ${forSaleItems[i].price} dollars.`);
  }
  }
  
  displayForSale(items)