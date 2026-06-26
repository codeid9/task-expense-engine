import type { Expense } from "../models/expense.js";

export class FinanceManager {
    private expenses:Expense[] = [];

    addExpense(expense:Expense):string{
        if (expense.amount <= 0) return "Amount must be greater than 0";
        this.expenses.push(expense)
        return "Expense added successfully";
    }
    getExpenses():Expense[]{
        return [...this.expenses];
    }
}