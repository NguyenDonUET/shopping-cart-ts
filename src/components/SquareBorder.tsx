type SquareBorderProps = {
  children: React.ReactElement;
};
export default function SquareBorder({ children }: SquareBorderProps) {
  return (
    <div className="w-fit border-2 border-gray-400 p-3 grid place-items-center">
      {children}
    </div>
  );
}
