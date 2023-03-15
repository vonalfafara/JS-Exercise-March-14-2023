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
      forSale: true
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
    
    console.log("the following items are for sale:")
    for(let i = 0; i < items. length; i++) {
        if(array[i].forsale < 100) {
           console.log(array[i].items)
        }
    }
  }
  
  displayForSale(items)