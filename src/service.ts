import { log } from "console";
import { deleteData, readData,writeData ,type Expense} from "./storage.js";
import { exit } from "process";

export async function addExpense(){
    const desc =process.argv[3]
    const amount=process.argv[4]
    const category=process.argv[5]
    let id=1
    const expenses=await readData()
    if(expenses.length!=0){
        let max=expenses[0]!.id
        for(let expense of expenses){
            if(expense.id>max){
                max=expense.id
            }
        }
        id=max
    }
    if(desc && id && category && amount){
        const expense : Expense={
            id:id,
            description:desc,
            category:category,
            amount : +(amount)
        }
        writeData(expense)
    }
    else{
        console.log("Invalid arguments or types")
    }
}

export async function listService() {
    const expenses=await readData()
    if(expenses.length!=0){
        log("No expenses in the file")
        exit(1)
    }
    const category=process.argv[3]
    if(!category){
        log(expenses)
        return expenses
    }
    else{
        //filer by category
        for(let expense of expenses){
            if(expense.category==category){
                log(expense)
            }
        }
    }
}

export async function deleteService() {
    const expenses=await readData()
    if(expenses.length!=0){
        log("No expenses in the file")
        exit(1)
    }
    const id=process.argv[3]
    if(!id){
        log("Invalid argument")
        exit(1)
    }
    else{
        //filer by category
        try{
            const integerId=+(id)
            for(let expense of expenses){
            if(expense.id==integerId){
                deleteData(integerId)
            }
            exit(0)
        }
        }
        catch(err){
            log("Invalid datatype")
            exit(1)
        } 
    }
}

export async function totalAmount() {
    const expenses=await readData()
    if(expenses.length!=0){
        log("No expenses in the file")
        exit(1)
    }
    else{
        //Find sum
        let sum=0
        for(let expense of expenses){
            sum+=expense.amount
        }
        log(sum)
        exit(0)
    }
}