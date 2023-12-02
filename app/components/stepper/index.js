export default function Stepper({ steps, current }) {
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      {
        steps?.map((step, key) => (
          steps.length - 1 !== key ? (
            <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-500 after:border-1 after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700" key={step.name + '-' + key}>
              <span className="flex flex-col items-center">
                <span className={`w-7 h-7 rounded-full ${current >= step.no ? 'bg-blue-600' : 'bg-gray-350'} block`}></span>
                <span>{step.name}</span>
              </span>
            </li>
          ) : (
            <li className="flex flex-col items-center" key={step.name + '-' + key}>
              <span className={`w-7 h-7 rounded-full ${current >= step.no ? 'bg-blue-600' : 'bg-gray-350'}`}></span>
              <span>{step.name}</span>
            </li>
          )
        ))
      }
    </ol>
  );
}
