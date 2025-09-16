export default function Skeleton() {
  return (
    <div className="animate-pulse bg-white dark:bg-gray-800 rounded-lg shadow-card dark:shadow-cardDark overflow-hidden">
      <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700"></div>
      <div className="p-4 flex flex-col gap-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
      </div>
    </div>
  );
}
