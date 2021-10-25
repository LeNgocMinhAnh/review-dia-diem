import { getPlace, deletePlace } from "../../services/api";
import PlaceForm from "../admin/place-form";
import { useEffect, useState, useCallback, useRef } from "react";
import Swal from "sweetalert2";

export default function AddPlace({
  total,
  places,
  setPlaces,
  searchText,
  setSearchText,
}) {
  const [allPlace, setAllPlace] = useState(places);

  const setSearchTextChange = useCallback((event) => {
    setSearchText(event.target.value);
  }, []);

  const [isShowPlaceForm, setShowPlaceForm] = useState(false);
  const showOrHidePlaceForm = useCallback(() => {
    setShowPlaceForm((prevState) => !prevState);
  }, []);

  const onClickDeletePlace = (place) => {
    console.log(place);
    Swal.fire({
      title: "Xóa địa điểm!",
      text: `Bạn có muốn xóa ${place.name} khum`,
      icon: "info",
      confirmButtonText: "say yes",
      showCancelButton: true,
      cancelButtonText: "huỷe",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePlace(place.id).then(() => {
          setPlaces((prevState) =>
            prevState.filter((item) => item.id !== place.id)
          );
        });
      }
    });
  };

  return (
    <div className="flex-grow px-10 py-12 font-semibold bg-gray-50 md:ml-72">
      <h1 className="px-8 mb-2">Places Layout</h1>
      <nav className="relative flex items-center justify-between w-full h-16 px-8 mx-auto ">
        {/* logo */}
        <div className="inline-flex">
          <div className="">
            <div className="">
              <div className="inline-block mt-2 mr-2">
                <button
                  onClick={showOrHidePlaceForm}
                  className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-purple-400 to-purple-600 transform hover:scale-110"
                >
                  Thêm địa điểm
                </button>
              </div>
              <button
                onClick={showOrHidePlaceForm}
                className="w-10 h-10 p-0 transition duration-200 ease-in bg-white rounded-lg shadow hover:bg-red-700 active:shadow-lg mouse focus:outline-none"
              >
                <svg
                  viewBox="0 0 20 20"
                  enableBackground="new 0 0 20 20"
                  className="inline-block w-6 h-6"
                >
                  <path
                    fill="#999999"
                    d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                              C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                              C15.952,9,16,9.447,16,10z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* end logo */}
        {/* search bar */}
        <div className="justify-start flex-grow-0 flex-shrink hidden px-2 sm:block">
          <div className="inline-block text-gray-100 ">
            Showing 1 to 10 of {total} place
          </div>
        </div>
        {/* end search bar */}
        {/* login */}
        <div className="flex-initial">
          <div className="inline-flex items-center max-w-full ">
            <div className="relative text-gray-600">
              <input
                type="search"
                name="serch"
                placeholder="Search"
                className="h-10 px-5 pr-10 text-sm bg-white rounded-full focus:outline-none"
                value={searchText}
                onChange={setSearchTextChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 mt-3 mr-4"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* end login */}
      </nav>

      <section className="container p-6 mx-auto font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="table-row font-medium tracking-wide text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-600 text-md">
                  <th className="w-1/4 px-4 py-3 ">Name</th>
                  <th className="px-4 py-3">Age</th>
                  <th className="w-1/5 px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 ">
                {places.map((place, index) => (
                  <tr
                    key={place.id}
                    className="text-gray-700 hover:bg-gray-100 hover:shadow-lg sm:table-row"
                  >
                    <td className="px-4 py-3 ">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block"></div>
                        <div>
                          <p className="font-semibold text-gray-100">
                            {place.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-semibold text-ms ">
                      <p className="line-clamp-2">{place.description}</p>
                    </td>
                    <td className="px-4 py-3 text-xs ">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        {place.address}{" "}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-xs ">
                      <div className="flex justify-center item-center">
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                        <div
                          onClick={() => onClickDeletePlace(place)}
                          className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <PlaceForm
        visible={isShowPlaceForm}
        showOrHidePlaceForm={showOrHidePlaceForm}
      ></PlaceForm>
    </div>
  );
}
