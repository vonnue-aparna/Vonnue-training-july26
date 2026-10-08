import { loadExpenses, saveExpenses } from "./repo";


export async function add(description: string, amount: number, category: string) {
    const data = {
        id: 10,
        description: description,
        amount: amount,
        category: category
    }

    saveExpenses(data);
}

