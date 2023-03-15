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

for (let i = 0; i < items.length; i++) {
    const sale = items[i] 
    

if (sale.forSale === true){
    // console.log("item for sale")
    console.log(`${sale.item} : P${sale.price}`)
}   
}

  
 
//   function displayForSale(array) {
    
//   }
  
//   displayForSale(items)

