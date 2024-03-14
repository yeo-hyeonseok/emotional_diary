import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSetRecoilState } from "recoil";
import { todoListState } from "store";
import * as Type from "store/interface";
import Recoil from "components/Common/Recoil";

interface Props {
  className?: string;
}

export default function TodoInput(props: Props) {
  const { className } = props;

  const setList = useSetRecoilState(todoListState);
  const [input, setInput] = useState("");

  const addItem = () => {
    const id = uuidv4();

    setList((prev: Type.TodoItem[]) => [
      ...prev,
      {
        id,
        text: input,
        isComplete: false,
      },
    ]);

    setInput("");
  };

  return (
    <div className={`${className} flex w-full gap-3`}>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        autoFocus
        className="w-full rounded-xl bg-gray-200 bg-opacity-50 px-4 text-lg"
        type="text"
      />
      <Recoil onClick={addItem} size="md" />
    </div>
  );
}
