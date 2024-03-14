interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Box(props: Props) {
  const { className, children } = props;

  return (
    <div className={`${className} rounded-2xl bg-gray-200 bg-opacity-50 p-3`}>
      {children}
    </div>
  );
}
