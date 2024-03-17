import { useRecoilState } from "recoil";
import { countState, todoListFilterState } from "store";

interface Props {
  className?: string;
}

export default function TodoFilter(props: Props) {
  const { className } = props;

  const [count, setCount] = useRecoilState(countState);
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  return (
    <div className={`${className} relative w-32 select-none`}>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full appearance-none rounded-lg bg-gray-200 bg-opacity-50 px-2 py-1 text-sm"
      >
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="uncompleted">uncompleted</option>
      </select>
      <span
        onClick={() => setCount(count + 1)}
        style={{ backgroundImage: "url('/images/recoil.png')" }}
        className="absolute right-1.5 top-1/2 h-4 w-4 -translate-y-1/2 bg-contain bg-no-repeat"
      />
    </div>
  );
}
