import { addExpense, deleteService, listService, totalAmount } from "./service.js";
function main() {
    // console.log(process.argv[2])
    const command=process.argv[2]
    switch(command){
        case "add":
            addExpense()
            break;
        case "list":
            listService()
            break;
        case "delete":
            deleteService()
            break;
        case "total":
            totalAmount()
            break;
        default:
            console.log(`Available commands \n 
                add \t   To add Expense \n
                list \t   To List Expense \n
                delete \t   To Delete Expense \n
                add \t   To find total amount \n`)
    }
}

main()