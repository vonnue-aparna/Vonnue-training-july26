import { getExpenses, type Expenses } from "./data.js";

export async function listExpenses(category: string | undefined) {
  const data = await getExpenses();

  //   console.log(category?.toLowerCase());

  let flag = 0;
  data.map((d: Expenses) => {
    if (d.category.toLowerCase() === category?.toLowerCase()) {
      flag = 1;
    }
  });

  if (flag === 0) {
    if (category !== undefined)
      console.log(`Error: not items for the category: ${category}`);
  }

  if (category === undefined) {
    data.map((d: Expenses) => {
      console.log(`${d.id} | ${d.description} | ${d.amount} | ${d.category}`);
    });
  } else {
    let filteredData = data.filter(
      (d: Expenses) => d.category.toLowerCase() === category.toLowerCase(),
    );
    filteredData.map((d: Expenses) => {
      console.log(`${d.id} | ${d.description} | ${d.amount} | ${d.category}`);
    });
  }
}
