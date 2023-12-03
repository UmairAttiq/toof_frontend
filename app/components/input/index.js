import React from "react";

export default React.memo(function Input({ values, value, dispatch }) {
  console.log("values--->", value)
  return (
    <React.Fragment>
      {
        Array.isArray(values) ? (
          <div className="flex justify-between">
            {
              values.map(({ label, name, ...rest }, key) => (
                <React.Fragment key={name + '-' + key}>
                  <div className="w-full my-3" key={name + '-' + key}>
                    <label htmlFor={name} className="">
                      {label}
                    </label>
                    <div className="flex items-center border-b-2 bg-gray-300 border-gray-450">
                      <input
                        className="appearance-none bg-transparent border-none w-full text-gray-500 py-5 px-5 leading-tight focus:outline-none"
                        type={rest.type}
                        placeholder={rest.placeholder}
                        aria-label={label}
                        name={name}
                        value={value}
                        onChange={(event) => dispatch({ type: 'UPDATE_FIELD', field: rest.field, value: event.target.value })}
                      />
                      {
                        rest.button && (
                          <button className="flex-shrink-0 bg-transparent w-10" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" /></svg>
                          </button>
                        )
                      }
                    </div>
                    
                  </div>
                  {values.length - 1 !== key && <div className="px-3"></div>}
                </React.Fragment>
              ))
            }
          </div>
        ) : values.type == 'description' ? (
          <div className="w-full my-3">
            <label htmlFor={values.name} className="">
              {values.label}
            </label>
            <div className="flex items-center border-b-2 border-gray-450 bg-gray-300">
              <textarea
                id="message"
                rows="4"
                className="appearance-none bg-transparent border-none w-full text-gray-500 py-5 px-5 leading-tight focus:outline-none text-sm "
                placeholder={values.placeholder}
                aria-label={values.label}
                value={value}
                onChange={(event) => dispatch({ type: 'UPDATE_FIELD', field: values.field, value: event.target.value })}
              ></textarea>
            </div>
          </div>

        ) : (
          <div className="w-full my-3">
            <label htmlFor={values.name} className="">
              {values.label}
            </label>
            <div className="flex items-center border-b-2 border-gray-450 bg-gray-300">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-500 py-5 px-5 leading-tight focus:outline-none"
                type={values.type}
                placeholder={values.placeholder}
                aria-label={values.label}
                name={values.name}
                value={value}
                onChange={(event) => dispatch({ type: 'UPDATE_FIELD', field: values.field, value: event.target.value })}
              />
              {
                values.button && (
                  <button className="flex-shrink-0 bg-transparent w-10" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" /></svg>
                  </button>
                )
              }
            </div>
          </div>
        )
      }
    </React.Fragment>
  );
})
