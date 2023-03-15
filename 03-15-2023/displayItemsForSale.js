// Write a Javascript function that displays items that are for sale from an array of objects
function displayItemsForSale(items) {
    const forSaleItems = items.filter(item => item.forSale === true);
    for (let i = 0; i < forSaleItems.length; i++) {
        console.log(forSaleItems[i].item + " is for sale at $" + forSaleItems[i].price);
    }
}

// Here's how you can use the function:
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

displayItemsForSale(items);
