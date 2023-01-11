import { atom, selector } from "recoil";

interface TodoItem {
  id: number;
  title: string;
  checked: boolean;
}

export interface CommonState {
  todoList: TodoItem[];
}

const initialState: CommonState = {
  todoList: [],
};

export const recoilCounterState = atom({
  key: "recoilTodoState",
  default: initialState,
});
