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
    const forSaleItems = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i].forSale) {
        forSaleItems.push(array[i]);
      }
    }
  
    for (let i = 0; i < forSaleItems.length; i++) {
      console.log(`${forSaleItems[i].item}: ₱${forSaleItems[i].price}`);
    }
  }
  
  displayForSale(items);
  