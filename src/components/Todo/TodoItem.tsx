import * as Type from "store/interface";
import Recoil from "components/Common/Recoil";

interface Props {
  className?: string;
  data: Type.TodoItem;
}

export default function TodoItem(props: Props) {
  const { className, data } = props;

  return (
    <div className={`${className} flex w-full gap-3`}>
      <input
        value={data.text}
        autoFocus
        className="w-full rounded-lg bg-gray-200 bg-opacity-50 p-2 text-xl"
        type="text"
      />
      <Recoil size="sm" />
    </div>
  );
}
