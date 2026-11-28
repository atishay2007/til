export type Priority = "low" | "medium" | "high";

export interface TodoItem {
  id: number;
  title: string;
  done: boolean;
  priority: Priority;
}

export interface Identifiable {
  id: number;
}

export class Store<T extends Identifiable> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  list(): readonly T[] {
    return this.items;
  }
}

export function toggleTodo(items: TodoItem[], id: number): TodoItem[] {
  return items.map((item) =>
    item.id === id ? { ...item, done: !item.done } : item
  );
}
