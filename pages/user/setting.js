import NavBar from "../../components/navbar/Navbar";
import { useAuth } from "../../services/auth";

export default function Setting() {
  const { user } = useAuth();
  if (user == undefined) {
    return null;
  }
  if (user === null) {
    return (
      <Link
        href={`/user/login?redirect_uri=${router.asPath || router.pathname}`}
      >
        <button className="p-2 border-2 rounded-full shadow-2xl text-LightSeaGreen bg-xanhlo border-GhostWhi">
          Đăng nhập
        </button>
      </Link>
    );
  }
  return (
    <div>
      <NavBar user={user}></NavBar>
      <section className="pt-20 bg-blueGray-50">
        <div className="w-full px-4 mx-auto mt-6 lg:w-8/12">
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-xanhlo">
            <div className="px-6 py-6 mb-0 bg-white rounded-t">
              <div className="flex justify-between text-center">
                <h6 className="text-xl font-bold text-blueGray-700">
                  Tài khoản của tôi
                </h6>
                <button
                  className="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
                  type="button"
                >
                  Cập Nhật
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
              <form>
                <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
                  Thông tin
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full px-4 lg:w-6/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlfor="grid-password"
                      >
                        Tên hiển thị
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        value={user.displayName}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-6/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlfor="grid-password"
                      >
                        Địa chỉ Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        defaultValue={user.email}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-6/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlfor="grid-password"
                      >
                        Mật khẩu mới
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-6/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlfor="grid-password"
                      >
                        Nhập lại mật khẩu
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
