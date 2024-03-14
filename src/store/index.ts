import { RecoilState, atom, selector } from "recoil";

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

export { countState, charCountState, todoListState };
