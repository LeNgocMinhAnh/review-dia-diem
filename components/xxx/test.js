import brtest from "../xxx/banner.jpg";
import brgif from "../xxx/RainyDays.gif";
import Review from "../review";
import Search from "../search";
import Navbar from "../navbar/Navbar";
import { useAuth } from "../../services/auth";

export default function test({ reviews, place }) {
  const { user } = useAuth();
  return (
    <>
      <Navbar user={user} />
      <div className="flex flex-col h-screen pt-20">
        <div className="relative border-4 border-white overflow-hien to-pink-500">
          <div className="absolute inset-0 h-auto overflow-auto opacity-50">
            <img
              src={brtest}
              className="absolute object-cover w-full h-full overflow-auto "
            ></img>
          </div>
          <div className="container relative z-10 flex items-center w-4/5 py-12 mx-auto my-20 overflow-auto rounded-lg md:my-32">
            <img
              className="absolute z-10 flex flex-col object-cover w-auto w-full h-full overflow-auto bg-opacity-25 border-2 border-white rounded-2xl "
              src={brgif}
            ></img>

            <div className="relative z-10 flex flex-col items-center justify-between w-full h-full overflow-hidden bg-opacity-50">
              <p className=" text-center items-center text-#FFFFFF  md:text-2xl overflow-auto font-bold font-BlinkMacSystemFont">
                Review tất tần tật về trường học của bạn nào !!!
              </p>
              <div className="w-4/5">
                <div className="w-full p-5">
                  <Search></Search>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative mx-auto mb-16 md:-mt-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-4 xl:gap-x-4">
            <div className="col-span-2 bg-gray-100 rounded-md">
              <Review reviews={reviews} />
            </div>
            <div className="bg-gray-100 rounded-md">
              <img
                className="mx-auto mt-16"
                src="https://demos.onepagelove.com/html/leno/images/header-iphone.png"
                alt="Mobile Phone"
              />
            </div>
          </div>
        </div>

        <footer className="relative flex py-16 pt-1 my-24 border-b-2 border-blue-700 footer bg-xanh31c2b8">
          <div className="container px-6 mx-auto">
            <div className="sm:flex sm:mt-8">
              <div className="flex flex-col justify-between mt-8 sm:mt-0 sm:w-full sm:px-8 md:flex-row">
                <div className="flex flex-col text-lg font-BlinkMacSystemFont text-GhostWhite ">
                  <span className="mt-4 mb-2 font-bold text-gray-700 uppercase md:mt-0">
                    REVIEW CÔNG TY
                  </span>
                  <span className="my-2">
                    <a
                      href="#"
                      className="text-blue-700 text-md hover:text-blue-500"
                    >
                      Giải đáp thắc mắc - Yêu cầu xoá riview
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      href="#"
                      className="text-blue-700 text-md hover:text-blue-500"
                    >
                      Yêu cầu thêm công ty
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      href="#"
                      className="text-blue-700 text-md hover:text-blue-500"
                    >
                      Điều khoản sử dụng
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
