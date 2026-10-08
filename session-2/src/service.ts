import { getExpenses, saveExpenses } from "./storage.js";
import type  { Expense } from "./types.js";


export async function addExpense(description: string, amount:number,category:string): Promise<Expense> {
  const expenses = await getExpenses();
  const newExpense:Expense= {
     id: expenses.length + 1,
     description: description,
     amount:amount,
     category:category,
  };

  expenses.push(newExpense);
  await saveExpenses(expenses);
  return newExpense;
}



export async function listExpenses(): Promise<Expense[]> {
  const expenses = await getExpenses();
  return expenses;
}



export async function totalExpenses(amount:number): Promise<void> {

  const expenses = await getExpenses();
  console.log(expenses.length);
}



export async function deleteExpense(id: number): Promise<void> {
  const expenses = await getExpenses();

  const expenseIndex = expenses.findIndex((expense) => expense.id === id);
  if (expenseIndex === -1) {
    throw new Error("Task not found");
  }

  expenses.splice(expenseIndex, 1);

  await saveExpenses(expenses);
}

