import { getExpenses, updateExpenses } from "./data.js";

export async function addExpenses(
  desc: string,
  amount: number,
  category: string,
) {
  try {
    let data = await getExpenses();
    const date = Date.now();

    if (data.length === 0) {
      data.push({
        id: 1,
        description: desc,
        amount,
        category,
        createdAt: new Date(date).toISOString(),
      });
    } else {
      const dataLength = data.length;

      const id = data[dataLength - 1].id + 1;
      data.push({
        id,
        description: desc,
        amount,
        category,
        createdAt: new Date(date).toISOString(),
      });
    }

    await updateExpenses(data);
  } catch (error) {
    console.log("Error: add function error");
  }
}
