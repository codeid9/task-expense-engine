type Category = "Food" | "Travel" | "Bills" | "Shopping" | "Others";

export interface Expense {
    id:number;
    title:string;
    type:"Income" | "Expense";
    amount:number;
    category:Category;
    note?:string;
}