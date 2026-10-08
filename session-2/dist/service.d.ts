import { Expense } from "./types.js";
export declare function addExpense(description: string, amount: number, category: string, createdAt: Date): Promise<Expense>;
export declare function listExpenses(): Promise<Expense[]>;
export declare function totalExpenses(id: number): Promise<Expense>;
export declare function deleteExpense(id: number): Promise<void>;
//# sourceMappingURL=service.d.ts.map