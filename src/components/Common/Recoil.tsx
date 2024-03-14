import { useRecoilState } from "recoil";
import { countState } from "store";

interface Props {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  size: "lg" | "md" | "sm";
}

export default function Recoil(props: Props) {
  const { className, onClick = () => {}, size } = props;

  const [count, setCount] = useRecoilState(countState);

  const sizeValues = {
    lg: 50,
    md: 40,
    sm: 30,
  };

  return (
    <img
      onClick={(e) => {
        onClick(e);
        setCount(count + 1);
      }}
      src="images/recoil.png"
      alt="리코일"
      width={sizeValues[size]}
      className={`${className} cursor-pointer select-none`}
    />
  );
}
