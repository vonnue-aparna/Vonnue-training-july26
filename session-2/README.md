To initialize the Project 

run commands For Package installation:

 - npm init -y

 - npx tsc --init

 create the Folder named Src -->Source File
  * cli.ts
  * service.ts
  * storage.ts
  * types.ts

  craete a folder named .gitignore 

  --- To run the Commands 

  npx tsx src/cli.ts <command> [arguments]

  Example:
   - npx tsx src/cli.ts add "Apple 1-kg" 200 "fruits"           --->To Add
   - npx tsc src/cli.ts list "vegetables"                 --->list by category
   - npx tsc src/cli.ts delete 1                         ---->delete by id
   - npx tsc src/cli.ts total                        --->To see the total expenses

