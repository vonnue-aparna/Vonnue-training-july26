import { getExpenses, updateExpenses, type Expenses } from "./data.js";

export async function deleteExpenses(id: number) {
  if (id < 0) {
    console.log("Error: invalid id");
    return;
  }

  let flag = 0;
  const data = await getExpenses();
  data.map((d: Expenses) => {
    if (d.id === id) {
      flag = 1;
    }
  });

  if (flag === 1) {
    const newData = data.filter((d: Expenses) => d.id !== id);
    await updateExpenses(newData);
  } else {
    console.log(`Error: expense ${id} not found`);
  }
}
