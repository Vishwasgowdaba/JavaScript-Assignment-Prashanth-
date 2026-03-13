# Inventory & Work Order Utilities (JavaScript)

This project contains two JavaScript utility functions used for simple operations in a maintenance or inventory management context. One function identifies items that are running low in stock, and the other summarizes work order statistics.

## 1. getLowStockItems(inventory, threshold)

This function checks an inventory list and returns the names of items whose quantity is less than or equal to a given threshold.

### How it Works
- The function takes two inputs: an `inventory` array and a `threshold` value.
- Each inventory item contains a `name` and `quantity`.
- It first filters the items whose quantity is less than or equal to the threshold.
- The filtered items are then sorted in ascending order based on their quantity.
- Finally, it returns an array containing only the names of the low-stock items.

### Example Input
```javascript
const inventory = [
    { name: "Pump Seal", quantity: 3 },
    { name: "Valve", quantity: 10 },
    { name: "Bearing", quantity: 2 },
    { name: "Filter", quantity: 5 }
];
summarizeWorkOrders(workOrders)

This function analyzes a list of work orders and returns a summary of their status and average labor hours.

How it Works

The function accepts an array of work order objects.

Each work order includes an id, status, and labourHours.

It loops through all work orders and counts:

Total number of work orders

Number of OPEN work orders

Number of CLOSED work orders

At the same time, it adds up the total labor hours.

After processing all entries, it calculates the average labor hours.

The average is rounded to one decimal place using toFixed(1).

The function returns a summary object containing the calculated statistics
