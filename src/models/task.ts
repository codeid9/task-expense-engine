export enum TaskStatus {
    Pending,
    Complete,
}

export interface Task {
    id:number;
    title:string;
    status:TaskStatus;
    description?:string;
}