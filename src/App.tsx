import { useRecoilState } from "recoil";
import { countState } from "store";
import Counter from "components/counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useRecoilState(countState);
  //const value = useRecoilValue(charCountState);

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-6 bg-gradient-to-b from-gray-400 to-gray-600">
      <img
        onClick={() => {
          setCount(count + 1);
          setIsActive(!isActive);
        }}
        src="images/recoil.png"
        alt="리코일"
        width={65}
        className="cursor-pointer select-none"
      />
      <div className="flex h-[26vw] min-h-[200px] w-2/5 min-w-[300px] items-center justify-center rounded-2xl bg-gray-200 bg-opacity-50 p-5">
        <Counter count={count} />
      </div>
      <img
        src="images/hotdog.png"
        className={`${isActive ? "bottom-0" : "-bottom-[100%]"} transition-translate absolute left-0 w-[30vw] min-w-[250px] duration-700 ease-in-out`}
        alt="핫도그"
      />
    </div>
  );
}

export default App;
