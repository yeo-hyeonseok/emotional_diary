import { ClipLoader } from "react-spinners";

interface Props {
  className?: string;
}

export default function Loader(props: Props) {
  const { className } = props;

  return (
    <div
      style={{ height: "100dvh" }}
      className={`${className} flex flex-col items-center justify-center bg-gradient-to-b from-gray-400 to-gray-600`}
    >
      <ClipLoader size={50} color="#ffffff" />
    </div>
  );
}
