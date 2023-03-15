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
    let forSaleItems = [];
    for(let i = 0; i < items; i++){
        if(items.forSale === true){
            forSaleItems.push(i);
        }
    }
    console.log(forSaleItems);
  }
  
  displayForSale(items);