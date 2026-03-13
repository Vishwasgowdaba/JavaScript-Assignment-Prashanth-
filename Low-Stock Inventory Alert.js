function getLowStockItems(inventory, threshold) {
    
    const lowStock = inventory.filter(item => item.quantity <= threshold);

    lowStock.sort((a, b) => a.quantity - b.quantity);

   
    return lowStock.map(item => item.name);
}



const inventory = [
    { name: "Pump Seal", quantity: 3 },
    { name: "Valve", quantity: 10 },
    { name: "Bearing", quantity: 2 },
    { name: "Filter", quantity: 5 }
];

console.log(getLowStockItems(inventory, 5));