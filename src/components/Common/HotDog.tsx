interface Props {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

export default function HotDog(props: Props) {
  const { className, onClick } = props;

  return (
    <img
      onClick={onClick}
      src="images/hotdog.png"
      className={`${className} w-[16vw] min-w-[150px] cursor-pointer transition-all duration-700 ease-in-out`}
      alt="핫도그"
    />
  );
}
