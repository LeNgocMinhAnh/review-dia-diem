export default function PlaceForm({ visible, showOrHidePlaceForm }) {
  return (
    <div className={visible ? " flex justify-center h-screen items-center  antialiased fixed backdrop-opacity-50 bg-black bg-opacity-70 inset-0 z-99" : 'hidden'}>
      <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
        <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
          <p className="font-semibold text-gray-800">Thêm địa điểm</p>
          <svg
            className="w-6 h-6 hover:bg-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={showOrHidePlaceForm}

          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col px-6 py-3 bg-gray-50">
          <div className="w-full ">
            <p className="mb-2 font-semibold text-gray-700">
              Tên địa điểm
            </p>
            <input
              type="text"
              name
              className="w-full p-2 bg-white border border-gray-200 rounded shadow-sm appearance-none"
              id
              placeholder="Nhập tên..."
            >

            </input>
          </div>
          <p className="mt-2 font-semibold text-gray-700">Mô tả địa điểm</p>
          <textarea
            type="text"
            name
            placeholder="Mô tả..."
            className="p-3 mt-5 bg-white border border-gray-200 rounded shadow-sm h-24"
            id
            defaultValue={""}
          />
          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">


          </div>
          <p className="mb-2 font-semibold text-gray-700">
            Địa chỉ
          </p>
          <input
            type="text"
            name
            className="w-full p-2 bg-white border border-gray-200 rounded shadow-sm appearance-none mb-2"
            placeholder="Nhập địa chỉ..."
          />

          <div className="grid grid-cols-2 gap-4 mb-2">
            <div className="w-full">
              <p className="mb-2 font-semibold text-gray-700">
                Kinh độ
              </p>
              <input
                type="text"
                name
                className="w-full p-2 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                placeholder="Nhập địa chỉ..."
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-semibold text-gray-700">
                Vĩ độ
              </p>
              <input
                type="text"
                name
                className="w-full p-2 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                placeholder="Nhập địa chỉ..."
              />
            </div>
          </div>

        </div>
        <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
          <p className="font-semibold text-gray-600">Cancel</p>
          <button className="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
