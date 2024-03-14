import { useState } from "react";
import { useRecoilState } from "recoil";
import { countState } from "store";
import { useNavigate } from "react-router-dom";
import Box from "components/Common/Box";
import Recoil from "components/Common/Recoil";
import Counter from "components/Home/Counter";
import HotDog from "components/Common/HotDog";

export default function Home() {
  const navigate = useNavigate();

  const [count, setCount] = useRecoilState(countState);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6 overflow-hidden">
      <Recoil
        onClick={() => {
          setCount(count + 1);
          setIsActive(!isActive);
        }}
        size="lg"
      />
      <Box className="flex items-center justify-center">
        <Counter
          count={count}
          className="h-[20vw] min-h-[200px] w-2/5 min-w-[300px]"
        />
      </Box>
      <HotDog
        onClick={() => {
          navigate("/todo");
          setIsActive(false);
        }}
        className={`${isActive ? "bottom-0" : "-bottom-full"} fixed left-4`}
      />
    </div>
  );
}
