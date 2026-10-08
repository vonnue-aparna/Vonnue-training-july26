import { log } from "node:console"
import {readFile, writeFile}  from "node:fs/promises"
// Returns the entire Array to services
async function readData() : Promise<Expense[]>{
    try{
        const expenses=await readFile("./src/EXPENSES_FILE.json","utf-8")
        log(typeof JSON.parse(expenses))
        return JSON.parse(expenses)
    }
    catch(err){
        if(err instanceof Error && err.message.includes('ENOENT: no such file or directory')){
            await writeFile("./src/EXPENSES_FILE.json",JSON.stringify([]))
            log("Initated new file..")
            return []
        }
        return []
    }
}

type Expense = {
    id : number,
    description:string,
    amount : number
    category:string
    createdAt ?: Date
}

async function writeData(validExpense:Expense) {
    try{
        const expenses : Expense[]=await readData()
        expenses.push(validExpense)
        log(validExpense)
        await writeFile("./src/EXPENSES_FILE.json",JSON.stringify(expenses,null,2))
        return validExpense
    }
    catch(err){
        if(err instanceof Error){
            console.error(err.message)
        }
    }
}

// readData()
// writeData(
//     {
//         id:1,
//         description:"Taxi",
//         amount:43,
//         category:"travel"
//     }
// )

