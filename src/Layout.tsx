interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const { className, children } = props;

  return (
    <div
      style={{ height: "100dvh" }}
      className={`${className} flex flex-col items-center justify-center bg-gradient-to-b from-gray-400 to-gray-600`}
    >
      {children}
    </div>
  );
}
