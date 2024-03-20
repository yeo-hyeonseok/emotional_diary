import { useRecoilValue } from "recoil";
import * as Type from "store/interface";
import { userInfoState } from "store";

export default function User() {
  const userInfo: Type.UserInfo = useRecoilValue(userInfoState);

  return <div>{userInfo.title}</div>;
}
