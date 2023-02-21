export interface TodoItem {
  id?: number;
  description: string;
  isDone: boolean;
  priority?: "Urgent" | "1" | "2" | "3";
  created: Date;
}