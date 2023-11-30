export default function Input() {
  return (
    <form class="w-full my-3">
      <label htmlFor="" className="">
        Non
      </label>
      <div class="flex items-center border-b border- border-gray-400">
        <input
          class="appearance-none bg-gray-300 border-none w-full text-gray-600 py-5 px-5 leading-tight focus:outline-none"
          type="text"
          placeholder="Jane Doe"
          aria-label="Full name"
        />
        {/* <button class="flex-shrink-0 bg-transparent" type="button">
          Sign Up
        </button> */}
      </div>
    </form>
  );
}
