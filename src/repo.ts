import { readFile, writeFile } from "node:fs/promises";
import type { Expenses } from "./types/expenses";

const FILE_PATH = "expenses.json";

export async function loadExpenses(): Promise<Expenses[]> {
    try{
        const data = await readFile(FILE_PATH, "utf-8");
        return JSON.parse(data) as Expenses[];
    }
    catch (error) {
        if (error instanceof Error && "code" in error && error.code === "ENOENT") {
            return [];
        }

        throw error;
    }
}

export async function saveExpenses(tasks: Expenses[]): Promise<void> {
    const data = JSON.stringify(tasks, null, 2);
    await writeFile(FILE_PATH, data, "utf-8");
}
