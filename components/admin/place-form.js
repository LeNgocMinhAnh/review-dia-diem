import { useCallback, useEffect, useState } from "react";
import { addPlace } from "../../services/api";
import AddPlace from "../tab/addPlace";
import { toast } from "react-toastify";

export default function PlaceForm({ visible, showOrHidePlaceForm }) {
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("university");
  const [locationX, setLocationX] = useState("");
  const [locationY, setLocationY] = useState("");

  const submitPlace = useCallback(async (event) => {
    event.preventDefault();

    const data = {
      name,
      description,
      address,
      type,
      location: {
        coordinates: [parseFloat(locationX), parseFloat(locationY)],
      },
    };

    const { status } = await addPlace(data);
    if (status === 201) {
      console.log(status);
      toast.info("Thêm địa điểm thành công");
      showOrHidePlaceForm();
    } else {
      toast.error("Lỗi");
    }
  });

  return (
    <div
      className={
        visible
          ? " flex justify-center h-screen items-center  antialiased fixed backdrop-opacity-50 bg-black bg-opacity-70 inset-0 z-99"
          : "hidden"
      }
    >
      <div className="flex flex-col w-11/12 max-w-2xl mx-auto border border-gray-300 rounded-lg shadow-xl sm:w-5/6 lg:w-1/2">
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
            <p className="mb-2 font-semibold text-gray-700">Tên địa điểm</p>
            <input
              type="text"
              className="w-full p-2 bg-white border border-gray-200 rounded shadow-sm appearance-none"
              id
              placeholder="Nhập tên..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <p className="mt-2 font-semibold text-gray-700">Mô tả địa điểm</p>
          <textarea
            type="text"
            name
            placeholder="Mô tả..."
            className="h-24 p-3 mt-5 bg-white border border-gray-200 rounded shadow-sm"
            id
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
          <div className="flex flex-col items-center mb-5 sm:flex-row sm:space-x-5"></div>
          <p className="mb-2 font-semibold text-gray-700">Địa chỉ</p>
          <input
            type="text"
            name
            className="w-full p-2 mb-2 bg-white border border-gray-200 rounded shadow-sm appearance-none"
            placeholder="Nhập địa chỉ..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-4 mb-2">
            <div className="w-full">
              <p className="mb-2 font-semibold text-gray-700">Kinh độ</p>
              <input
                type="text"
                name
                className="w-full p-2 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                placeholder="Nhập kinh độ..."
                value={locationX}
                onChange={(e) => setLocationX(e.target.value)}
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-semibold text-gray-700">Vĩ độ</p>
              <input
                type="text"
                name
                className="w-full p-2 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                placeholder="Nhập vĩ độ..."
                value={locationY}
                onChange={(e) => setLocationY(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
          <p className="font-semibold text-gray-600">Cancel</p>
          <button
            onClick={submitPlace}
            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
