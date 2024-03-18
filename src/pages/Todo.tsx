import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { filteredTodoListState } from "store";
import * as Type from "store/interface";
import Recoil from "components/Common/Recoil";
import Box from "components/Common/Box";
import HotDog from "components/Common/HotDog";
import TodoStats from "components/Todo/TodoStats";
import TodoFilter from "components/Todo/TodoFilter";
import TodoItem from "components/Todo/TodoItem";
import TodoInput from "components/Todo/TodoInput";

export default function Todo() {
  const navigate = useNavigate();

  const list = useRecoilValue(filteredTodoListState);

  /* 상태와 업데이트 함수 둘 다 호출 */
  //const [list, setList] = useRecoilState(todoListState);

  /* 업데이트만 함수만 호출하려면 이렇게  */
  //const setList = useSetRecoilState(todoListState);

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-between p-4">
      <Recoil onClick={() => setIsActive(!isActive)} size="lg" />
      <TodoStats className="mb-2 mt-4" />
      <div className="mb-4 mt-1 flex min-h-0 w-full flex-1 flex-col items-end">
        <TodoFilter className="mb-2" />
        <Box className="flex w-full flex-1 flex-col gap-2 overflow-y-auto">
          {list.length > 0 ? (
            list.map((item: Type.TodoItem, index: number) => (
              <TodoItem key={index} data={item} />
            ))
          ) : (
            <div className="flex w-full flex-1 select-none items-center justify-center text-lg">
              no result
            </div>
          )}
        </Box>
      </div>
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
