import { getExpenses, type Expenses } from "./data.js";

export async function total() {
  const data = await getExpenses();

  let total = 0;
  data.map((d: Expenses) => {
    total = total + d.amount;
  });

  console.log("TOTAL Expenses: ", total);
}
