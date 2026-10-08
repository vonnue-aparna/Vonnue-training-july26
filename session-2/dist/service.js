import { getExpenses, saveExpenses } from "./storage.js";
import { Expense } from "./types.js";
export async function addExpense(description, amount, category, createdAt) {
    const expenses = await getExpenses();
    const newExpense = {
        id: expenses.length + 1,
        description: description,
        amount: amount,
        category: category,
        createdAt: createdAt
    };
    expenses.push(newExpense);
    await saveExpenses(expenses);
    return newExpense;
}
export async function listExpenses() {
    const expenses = await getExpenses();
    return expenses;
}
export async function totalExpenses(id) {
    const expenses = await getExpenses();
    const expense = expenses.find((expense) => expense.id === id);
    if (!expense) {
        throw new Error("Task not found");
    }
    await saveExpenses(expenses);
    return expense;
}
export async function deleteExpense(id) {
    const expenses = await getExpenses();
    const expenseIndex = expenses.findIndex((expense) => expense.id === id);
    if (expenseIndex === -1) {
        throw new Error("Task not found");
    }
    expenses.splice(expenseIndex, 1);
    await saveExpenses(expenses);
}
//# sourceMappingURL=service.js.map