export default function Stepper() {
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span className="flex flex-col items-center">
          <span className="w-10 h-10 rounded-full bg-blue-600 block"></span>
          <span>Confirmation</span>
        </span>
      </li>
      <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span className="flex flex-col items-center">
          <span className="w-10 h-10 rounded-full bg-blue-600 block"></span>
          <span>Confirmation</span>
        </span>
      </li>
      <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span className="flex flex-col items-center">
          <span className="w-10 h-10 rounded-full bg-blue-600 block"></span>
          <span>Confirmation</span>
        </span>
      </li>
      <li className="flex flex-col items-center">
        <span className="w-10 h-10 rounded-full bg-blue-600 block"></span>
        <span>Confirmation</span>
      </li>
    </ol>
  );
}
