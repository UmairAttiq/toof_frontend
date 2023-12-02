import Image from "next/image";

export default function StoreImageUploder({ state, dispatch }) {

    const handleUploadImage = (event) => {
        const file = event.target.files[0];
        console.log(URL.createObjectURL(file))
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                dispatch({ type: 'UPDATE_FIELD', field: 'storeImage', value: reader.result })
            };
            reader.readAsDataURL(file);
        }
    }

    const handleRemoveImage = () => {
        dispatch({ type: 'UPDATE_FIELD', field: 'storeImage', value: null })
    }
    return (
        <div className="flex py-5 w-full justify-between sm:max-w-lg">
            <div className="h-36 w-36 bg-gray-300 flex justify-center items-center rounded-2xl sm:h-52 sm:w-52">
                {
                    state.storeImage ? (
                        <Image className="h-36 w-36 rounded-2xl sm:h-52 sm:w-52" width={208} height={208} layout="reponsive" src={state.storeImage} alt={state.storeName} />
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 576 512" fill="#C1C7CD">
                            <path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z" />
                        </svg>
                    )
                }
            </div>
            <div className="flex flex-col justify-center items-center">
                <label className="block bg-transparent hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-2 px-4 border-2 border-blue-600 hover:border-transparent" htmlFor="store_image_uploader">Upload Photo</label>
                <input className="hidden" id="store_image_uploader" type="file" onChange={handleUploadImage} />

                <span className=" cursor-pointer" onClick={handleRemoveImage}>remove</span>
            </div>
        </div>
    )
}