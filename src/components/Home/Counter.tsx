interface Props {
  className?: string;
  count: number;
}

export default function Counter(props: Props) {
  const { className, count } = props;

  return (
    <div
      className={`${className} flex select-none flex-col items-center justify-center gap-1`}
    >
      <span className="text-7xl">{count}</span>
    </div>
  );
}
