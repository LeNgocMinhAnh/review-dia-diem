import { useEffect, useState } from "react";
import { getReport, getReportTop } from "../../services/api";
import { toast } from "react-toastify";
import { useAuth } from "../../services/auth";

export default function Dasboard({}) {
  const {user} = useAuth()
  const [report, setReport] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  const [topPlaces, setTopPlaces] = useState([]);

  function getPercent(percent) {
    if (!percent) {
      return "0%";
    }
    return percent.toFixed(2) + "%";
  }

  useEffect(() => {
    if (!!user) {
      getReport().then(({ data, status }) => {
        if (status === 200) {
          setReport(data);
        } else toast.error("Lỗi");
      });

      getReportTop().then(({ data, status }) => {
        if (status === 200) {
          console.log("data", data);
          setTopUsers(data.topUsersReviews); // state thay đổi
          setTopPlaces(data.topPlacesReviews); // too
        } else toast.error("Lỗi");
      });
    }
  }, [user]); // Cái này chạy khi state thay đổi ??? -> vô hạn
  console.log("test data:", topUsers);

  return (
    <div className="flex-grow h-full py-5 -10 md:ml-72 ">
      <div className="flex ">
        <div>
          <h1 className="px-6 text-4xl font-bold text-purple mt-">
            Hế lu quý dị
          </h1>
        </div>
      </div>
      <div className="mt-4 ">
        <div className="flex flex-wrap ">
          <div className="items-center justify-center w-full px-6 sm:w-1/2 xl:w-1/5">
            <div className="flex items-center justify-around p-6 mt-10 space-x-2 transition duration-300 transform shadow-xl bg-xanhlo rounded-xl hover:scale-105 hover:bg-yellow-400">
              <div>
                <span className="text-sm font-semibold text-gray-400 ">
                  Users
                </span>
                <h1 className="text-2xl font-bold text-center">
                  {report.users}
                </h1>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/5 sm:mt-0">
            <div className="flex items-center justify-around p-6 mt-10 space-x-2 transition duration-300 transform shadow-xl bg-xanhlo hover:scale-105 rounded-xl">
              <div>
                <span className="text-sm font-semibold text-gray-400">
                  Places
                </span>
                <h1 className="text-2xl font-bold text-center">
                  {report.places}
                </h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/5 xl:mt-0">
            <div className="flex items-center justify-around p-6 mt-10 space-x-2 transition duration-300 transform shadow-xl bg-xanhlo hover:scale-105 rounded-xl">
              <div>
                <span className="text-sm font-semibold text-gray-400">
                  Reviews
                </span>
                <h1 className="text-2xl font-bold text-center">
                  {report.reviews}
                </h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/5 xl:mt-0">
            <div className="flex items-center justify-around p-6 mt-10 space-x-2 transition duration-300 transform shadow-xl bg-xanhlo hover:scale-105 rounded-xl">
              <div>
                <span className="text-sm font-semibold text-gray-400">
                  UpVote
                </span>
                <h1 className="text-2xl font-bold text-center">
                  {report.likes}
                </h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/5 xl:mt-0">
            <div className="flex items-center justify-around p-6 mt-10 space-x-2 transition duration-300 transform shadow-xl bg-xanhlo hover:scale-105 rounded-xl">
              <div>
                <span className="text-sm font-semibold text-gray-400">
                  DownVote
                </span>
                <h1 className="text-2xl font-bold text-center">
                  {report.dislikes}
                </h1>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 ">
          <div className="container flex items-center justify-around p-8 bg-white shadow-lg rounded-xl">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-400">
                Lượt truy cập
              </h3>
              <h1 className="text-4xl font-bold text-indigo-600">
                {report.views}
              </h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-40 h-40 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-span-12 px-2 mt-5">
          <div className="grid items-center justify-center grid-cols-1 gap-2 lg:grid-cols-2">
            <div className="w-full px-4 mx-auto ">
              <div className="w-full min-w-0 mb-6 break-words bg-white shadow-lg rounded-2xl">
                <div className="w-full ">
                  <table className="items-center w-full text-blueGray-700 ">
                    <thead>
                      <tr className="">
                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border-l-0 border-r-0 bg-xanhlo text-blueGray-500 whitespace-nowrap">
                          User
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border-l-0 border-r-0 bg-xanhlo text-blueGray-500 whitespace-nowrap">
                          Total
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border-l-0 border-r-0 bg-xanhlo text-blueGray-700 whitespace-nowrap min-w-140-px" />
                      </tr>
                    </thead>
                    <tbody>
                      {topUsers.map((topUser, index) => (
                        <tr key={topUser.uid}>
                          <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            {topUser.displayName}
                          </th>
                          <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            {topUser.totalReviews}
                          </td>
                          <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="mr-2">
                                {getPercent(topUser.percent)}
                              </span>
                              <div className="relative w-full">
                                <div className="flex h-2 overflow-hidden text-xs bg-purple-200 rounded">
                                  <div
                                    style={{
                                      width: getPercent(topUser.percent),
                                    }}
                                    className="flex flex-col justify-center text-center text-white bg-purple-500 shadow-none whitespace-nowrap"
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mx-auto ">
              <div className="w-full min-w-0 mb-6 break-words bg-white shadow-lg rounded-2xl">
                <div className="w-full ">
                  <table className="items-center w-full text-blueGray-700 ">
                    <thead className="">
                      <tr>
                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border-l-0 border-r-0 bg-blueGray-50 text-blueGray-500 whitespace-nowrap">
                          Place
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border-l-0 border-r-0 bg-blueGray-50 text-blueGray-500 whitespace-nowrap">
                          Total
                        </th>
                        <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border-l-0 border-r-0 bg-blueGray-50 text-blueGray-700 whitespace-nowrap min-w-140-px" />
                      </tr>
                    </thead>
                    <tbody>
                      {topPlaces.map((topPlace, index) => (
                        <tr key={topPlace.uid}>
                          <th className="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            {topPlace.name}
                          </th>
                          <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            {topPlace.totalReviews}
                          </td>
                          <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="mr-2">
                                {getPercent(topPlace.percent)}
                              </span>
                              <div className="relative w-full">
                                <div className="flex h-2 overflow-hidden text-xs bg-purple-200 rounded">
                                  <div
                                    style={{
                                      width: getPercent(topPlace.percent),
                                    }}
                                    className="flex flex-col justify-center text-center text-white bg-purple-500 shadow-none whitespace-nowrap"
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div />
        <div />
      </div>
      <div />
      <div />
    </div>
  );
}
