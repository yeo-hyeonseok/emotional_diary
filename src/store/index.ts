import { RecoilState, atom, selector } from "recoil";
import * as Type from "store/interface";

const countState = atom({
  key: "countState",
  default: 0,
});

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const count = get(countState);
    return count + "times";
  },
});

const todoListState: RecoilState<any> = atom({
  key: "todoListState",
  default: [],
});

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "all",
});

const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(todoListFilterState);

    switch (filter) {
      case "completed":
        return list.filter((item: Type.TodoItem) => item.isComplete);
      case "uncompleted":
        return list.filter((item: Type.TodoItem) => !item.isComplete);
      default:
        return list;
    }
  },
});

export {
  countState,
  charCountState,
  todoListState,
  todoListFilterState,
  filteredTodoListState,
};
