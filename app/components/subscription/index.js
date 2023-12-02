export default function Subscription() {
    return (
        <div className="w-full flex flex-col justify-center bg-white border border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-3xl text-center font-semibold text-black dark:text-gray-400">Prix 1</h5>
            <span className="font-normal text-center text-gray-600 dark:text-gray-400">Quisque donec nibh diam tellus integer eros.</span>
            <div className="flex items-baseline m-auto py-5 text-gray-900 dark:text-white">
                <span className="text-5xl font-extrabold tracking-tight">10€</span>
            </div>
            <span className="font-normal text-center text-gray-600 dark:text-gray-400">$25 USD per month, paid annually</span>

            <div className="text-center mt-5">
                <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium text-sm px-5 py-2.5 inline-flex justify-center text-center">Get Started</button>
            </div>
            <ul role="list" className="space-y-5 my-7 m-auto">
                <li className="flex">
                    <Check />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Feature Eleven</span>
                </li>
                <li className="flex">
                    <Check />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Feature Twelve</span>
                </li>
                <li className="flex">
                    <Check />
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Feature Thirteen</span>
                </li>
                <li className="flex decoration-gray-500">
                    <Check />
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">Feature Fourteen</span>
                </li>
                <li className="flex decoration-gray-500">
                    <Check />
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">Feature Fifteen</span>
                </li>
            </ul>
        </div>

    )
}

function Check() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" fill="green" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
    );
}