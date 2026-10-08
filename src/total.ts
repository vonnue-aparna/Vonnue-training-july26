import { loadExpenses } from "./repo.js";


export async function getTotal() {
    const data = await loadExpenses();

    let totalAmount = 0;
    for (let index = 0; index < data.length; index++) {
        totalAmount += data[index].amount
    }

    console.log(totalAmount)
}
