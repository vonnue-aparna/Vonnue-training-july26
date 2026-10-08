import { addExpenses } from "./lib/add.js";
import { deleteExpenses } from "./lib/delete.js";
import { listExpenses } from "./lib/list.js";
import { total } from "./lib/total.js";

async function main() {
  const args = process.argv;
  const command = args.slice(2);
  console.log(command);

  switch (command[0]) {
    case "add": {
      const desc = command[1];
      const amount = Number(command[2]);
      const category = command[3];
      await addExpenses(desc!, amount!, category!);

      break;
    }
    case "list": {
      const category = command[1] || undefined;
      await listExpenses(category);
      break;
    }
    case "delete": {
      const id = Number(command[1]);
      await deleteExpenses(id);
      break;
    }
    case "total": {
      await total();
      break;
    }
    default: {
      console.log(`Error: ${command[0]} is invalid command`);
      console.log("The valid commands are: add, delete, list and total");
    }
  }
}

main();
