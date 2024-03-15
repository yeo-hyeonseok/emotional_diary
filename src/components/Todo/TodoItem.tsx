import { useRecoilState } from "recoil";
import * as Type from "store/interface";
import { todoListState } from "store";
import Recoil from "components/Common/Recoil";

interface Props {
  className?: string;
  data: Type.TodoItem;
}

export default function TodoItem(props: Props) {
  const { className, data } = props;

  const [list, setList] = useRecoilState(todoListState);

  const editItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    let arr = list.map((item: Type.TodoItem) => ({ ...item }));
    const index = list.findIndex((item: Type.TodoItem) => item.id === data.id);

    arr[index].text = e.target.value;
    setList(arr);
  };

  const deleteItem = () => {
    const arr = list.filter((item: Type.TodoItem) => item.id !== data.id);
    setList(arr);
  };

  return (
    <div className={`${className} flex w-full gap-3`}>
      <input
        value={data.text}
        onChange={editItem}
        autoFocus
        className="w-full rounded-lg bg-gray-200 bg-opacity-50 p-2 text-xl"
        type="text"
      />
      <Recoil onClick={deleteItem} size="sm" />
    </div>
  );
}
