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

  function getRandomNum() {
    return Math.floor(Math.random() * 10);
  }

  const sayings = [
    "When in doubt, choose change.",
    "Nothing in more despicable than respect based on fear.",
    "Great minds have purposes, others have wishes.",
    "Daechung heugbaeg sajin-e geul sseumyeon myeong-eon gatda",
    "A day without laughter is a day wasted.",
    "love what you have.",
    "Success usually comes to those who are too busy to be looking for it.",
    "It is kind of fun to do the impossible.",
    "The way to get started is to quit talking and begin doing.",
    "I find that the harder I work, the more luck I seem to have.",
  ];

  const addItem = () => {
    const id = uuidv4();

    setList((prev: Type.TodoItem[]) => [
      ...prev,
      {
        id,
        text:
          input.replace(/\s+/g, "") !== "" ? input : sayings[getRandomNum()],
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
        className="w-full rounded-xl bg-gray-200 bg-opacity-50 px-4 placeholder:text-white"
        type="text"
        placeholder="Enter the text..."
      />
      <Recoil onClick={addItem} size="md" />
    </div>
  );
}
