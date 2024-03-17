import { useRecoilState } from "recoil";
import * as Type from "store/interface";
import { countState, todoListState } from "store";
import Recoil from "components/Common/Recoil";

interface Props {
  className?: string;
  data: Type.TodoItem;
}

export default function TodoItem(props: Props) {
  const { className, data } = props;

  const [count, setCount] = useRecoilState(countState);
  const [list, setList] = useRecoilState(todoListState);

  const editItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    let arr = list.map((item: Type.TodoItem) => ({ ...item }));
    const index = list.findIndex((item: Type.TodoItem) => item.id === data.id);

    arr[index].text = e.target.value;
    setList(arr);
  };

  const toggleIsComplete = () => {
    let arr = list.map((item: Type.TodoItem) => ({ ...item }));
    const index = list.findIndex((item: Type.TodoItem) => item.id === data.id);

    arr[index].isComplete = !arr[index].isComplete;
    setList(arr);
  };

  const deleteItem = () => {
    const arr = list.filter((item: Type.TodoItem) => item.id !== data.id);
    setList(arr);
  };

  return (
    <div className={`${className} relative flex w-full gap-3`}>
      <input
        value={data.text}
        onChange={editItem}
        className="w-full rounded-lg bg-gray-200 bg-opacity-50 py-2 pl-[42px] pr-2"
        type="text"
      />
      <span className="absolute left-1.5 top-1/2 -translate-y-1/2">
        <input
          onChange={toggleIsComplete}
          checked={data.isComplete}
          type="checkBox"
          id={data.id}
          className="hidden"
        />
        <label
          onClick={() => setCount(count + 1)}
          style={{ backgroundImage: "url('/images/recoil.png')" }}
          htmlFor={data.id}
          className={`${data.isComplete && "-rotate-90"} block h-[30px] w-[30px] cursor-pointer bg-contain bg-no-repeat`}
        />
      </span>
      <Recoil onClick={deleteItem} size="sm" />
    </div>
  );
}
