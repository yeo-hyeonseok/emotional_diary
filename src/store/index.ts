import { atom, selector } from "recoil";

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

export { countState, charCountState };
