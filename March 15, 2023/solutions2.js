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
    array = [];
    for(let i = 0; i < items.length; i++){
        // console.log(items[i].forSale);
        if(items[i].forSale == true){
            console.log(array.push(items.item));
        }
    }
    
  }
  
  displayForSale(items);
  //wala napong oras, ang nagpprint lang kung ilang itams ang for sale :-)