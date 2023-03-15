
    
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
  
  displayForSale(items);

  function displayForSale(array) {
  const forSaleItems = array.filter(item => item.forSale);
    for (const item of forSaleItems) {
      console.log(`${item.item} - Php${item.price}`);
    }
  }

  