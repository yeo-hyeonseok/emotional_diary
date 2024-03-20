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

const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const list = get(todoListState);

    const total = list.length;
    const totalComplete = list.filter(
      (item: Type.TodoItem) => item.isComplete,
    ).length;
    const totalUncomplete = total - totalComplete;
    const ratio =
      list.length === 0 ? 0 : Math.floor((totalComplete / total) * 100);

    return {
      total,
      totalComplete,
      totalUncomplete,
      ratio,
    };
  },
});

const userIdState = atom({
  key: "userIdState",
  default: 1,
});

const userInfoState = selector({
  key: "userInfoState",
  get: async ({ get }) => {
    const userId = get(userIdState);

    const userInfo = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${userId}`,
    ).then((response) => response.json());

    return userInfo;
  },
});

export {
  countState,
  charCountState,
  todoListState,
  todoListFilterState,
  filteredTodoListState,
  todoListStatsState,
  userIdState,
  userInfoState,
};
