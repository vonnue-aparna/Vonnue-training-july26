import { readFile, writeFile } from "node:fs/promises";

export type Expenses = {
  id: number;
  description: string;
  amount: number;
  category: string;
  createdAt: string;
};

export const expenses: Expenses[] = [];

export async function getExpenses() {
  try {
    const contents = await readFile("expenses.json", { encoding: "utf8" });
    const data = JSON.parse(contents);
    // console.log("getExpenses: ", data);

    return data;
  } catch (error) {
    console.error("error while reading file");
    return [];
  }
}

export async function updateExpenses(data: Expenses[]) {
  try {
    const dataString = JSON.stringify(data);
    // console.log("updateExpenses Data: ", dataString);

    await writeFile("expenses.json", dataString);
  } catch (error) {
    console.error("error while updating expenses");
  }
}
