import brtest from "../xxx/banner.jpg";
import brgif from "../xxx/RainyDays.gif";
import Review from "../review";
import Search from "../search";
import Navbar from "../navbar/Navbar";

export default function test({ reviews, place, user }) {
  return (
    <>
      <Navbar user={user} />
      <div className="h-screen flex flex-col pt-20">
        <div className=" relative overflow-hien to-pink-500 border-4 border-white">
          <div className="inset-0 h-auto opacity-50 absolute overflow-auto">
            <img
              src={brtest}
              className="absolute object-cover overflow-auto h-full w-full "
            ></img>
          </div>
          <div className="container rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-12 my-20 md:my-32 overflow-auto">
            <img
              className="border-2 border-white rounded-2xl z-10 w-auto absolute object-cover bg-opacity-25 w-full h-full flex flex-col overflow-auto  "
              src={brgif}
            ></img>

            <div className="w-full h-full flex flex-col items-center justify-between relative z-10 bg-opacity-50 overflow-hidden">
              <p className=" text-center items-center text-#FFFFFF  md:text-2xl overflow-auto font-bold font-BlinkMacSystemFont">
                Review tất tần tật về trường học của bạn nào !!!
              </p>
              <div className="w-4/5">
                <div className="p-5 w-full">
                  <Search></Search>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto relative  md:-mt-6 mb-16">
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

        <footer className="footer bg-xanh31c2b8 relative pt-1 border-b-2 border-blue-700 flex py-16 my-24">
          <div className="container mx-auto px-6">
            <div className="sm:flex sm:mt-8">
              <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col font-BlinkMacSystemFont text-GhostWhite text-lg ">
                  <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
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
                      className="text-blue-700  text-md hover:text-blue-500"
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
