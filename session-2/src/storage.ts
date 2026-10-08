import type { Expense } from "./types.js";

import {readFile,writeFile,mkdir } from "node:fs/promises";


export async function getExpenses():Promise<Expense[]>{

    try{
    const data= await readFile("data/expenses.json", "utf-8");
    const expenses:Expense[]= JSON.parse(data);
    return expenses;
    } catch(error){
        if ((error as Error) ){
            return [];
        }

        throw error;
    }

}

export async function saveExpenses(expenses:Expense[]):Promise<void>{
   const data = JSON.stringify(expenses, null,2);

   await mkdir("data",{recursive:true});

   await writeFile("data/expenses.json",data, "utf-8");
}