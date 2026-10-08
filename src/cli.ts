import console = require("node:console");
import readFile = require("node:fs/promises");

function main() {
    // console.log(process.argv[2])
    const command=process.argv[2]
    switch(command){
        case "add":
            //Function to add
            break;
        case "list":
            //Function to list
            break;
        case "delete":
            // Delete
            break;
        case "total":
            // total
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