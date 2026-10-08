import { Expense } from "./types.js";
import { readFile, writeFile, mkdir } from "node:fs/promises";
export async function getExpenses() {
    try {
        const data = await readFile("data/expenses.json", "utf-8");
        const expenses = JSON.parse(data);
        return expenses;
    }
    catch (error) {
        if (error) {
            return [];
        }
        throw error;
    }
}
export async function saveExpenses(expenses) {
    const data = JSON.stringify(expenses, null, 2);
    await mkdir("data", { recursive: true });
    await writeFile("data/expenses.json", data, "utf-8");
}
//# sourceMappingURL=storage.js.map