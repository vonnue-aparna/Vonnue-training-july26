import {add} from './add';
import {getTotal} from './total'
import { loadExpenses } from './repo';

const command = process.argv[2];

// console.log(command)

switch (command) {
    case "add":
        const description = process.argv[3];
        const amount = Number(process.argv[4]);
        const category = process.argv[5];

        add(description, amount, category);

        break;

    case "list":
        const data = await loadExpenses();
        console.log(data);

        break;

    case "delete":
        const id = process.argv[3];
        break;

    case "total":
        getTotal();
        break;

    default:
        break;
}