export default function Loading() {
  return (
    <div className="flex flex-col items-center absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className="loading loading-dots loading-lg"></span>
      <p className="text-xl">Loading</p>
    </div>
  );
}
