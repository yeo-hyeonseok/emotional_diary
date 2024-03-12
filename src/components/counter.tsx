interface Props {
  className?: string;
  count: number;
}

export default function Counter(props: Props) {
  const { className, count } = props;

  return (
    <div
      className={`${className} flex select-none flex-col items-center justify-center gap-2 text-slate-100`}
    >
      <p className="text-sm">COUNTER</p>
      <span className="text-5xl">{count}</span>
    </div>
  );
}
