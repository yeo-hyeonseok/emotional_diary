import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { todoListState } from "store";
import * as Type from "store/interface";
import Recoil from "components/Common/Recoil";
import Box from "components/Common/Box";
import HotDog from "components/Common/HotDog";
import TodoItem from "components/Todo/TodoItem";
import TodoInput from "components/Todo/TodoInput";

export default function Todo() {
  const navigate = useNavigate();
  /* 상태만 호출 */
  const list = useRecoilValue(todoListState);
  const [isActive, setIsActive] = useState(false);

  /* 상태와 업데이트 함수 둘 다 호출 */
  //const [list, setList] = useRecoilState(todoListState);

  /* 업데이트만 함수만 호출하려면 이렇게  */
  //const setList = useSetRecoilState(todoListState);

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-between gap-4 px-4 py-6">
      <Recoil
        onClick={() => {
          setIsActive(!isActive);
        }}
        size="lg"
      />
      <Box className="flex w-full flex-1 flex-col gap-2 overflow-y-auto">
        {list.map((item: Type.TodoItem, index: number) => (
          <TodoItem key={index} data={item} />
        ))}
      </Box>
      <TodoInput />
      <HotDog
        onClick={() => {
          navigate("/");
          setIsActive(false);
        }}
        className={`${isActive ? "bottom-0" : "-bottom-full"} fixed left-4`}
      />
    </div>
  );
}
