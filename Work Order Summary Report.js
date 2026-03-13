function summarizeWorkOrders(workOrders) {
    let total = 0;
    let open = 0;
    let closed = 0;
    let sumHours = 0;

    for (const wo of workOrders) {
        total++;

        if (wo.status === "OPEN") open++;
        if (wo.status === "CLOSE") closed++;

        sumHours += wo.labourHours;
    }

    const avgLabourHours = Number((sumHours / total).toFixed(1));

    return {
        total,
        open,
        closed,
        avgLabourHours
    };
}

const wos = [
    { id: "WO1001", status: "OPEN", labourHours: 3.5 },
    { id: "WO1002", status: "CLOSE", labourHours: 6.0 },
    { id: "WO1003", status: "OPEN", labourHours: 2.0 }
];

console.log(summarizeWorkOrders(wos));