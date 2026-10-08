import { addExpense, totalExpenses, deleteExpense, listExpenses } from "./service.js";
const command = process.argv[2];
try {
    if (command === "add") {
        const description = process.argv[3];
        const amount = process.argv[4];
        const category = process.argv[5];
        if (!description) {
            console.log("Please provide a expense description");
        }
        if (!amount) {
            console.log("Plese provide Expense amount");
        }
        if (!category) {
            console.log("Please provide category");
        }
        else {
            const expense = await addExpense(description, amount, category, created);
            console.log(`Expense Added: ${expense}`);
        }
    }
    else if (command === "list") {
        const expenses = await listExpenses();
        console.log(expenses);
    }
    else if (command === "delete") {
        const id = Number(process.argv[3]);
        if (!process.argv[3]) {
            console.log("Enter the correct ID");
        }
        else {
            await deleteExpense(id);
            console.log(`Deleted Expense ${id}`);
        }
    }
}
catch (error) {
    console.log("Error:", error);
}
//# sourceMappingURL=cli.js.map