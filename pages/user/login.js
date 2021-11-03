import { loginWithFacebook, loginWithGoogle } from "../../services/user";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

import Mishagirl3 from "../user/Mishagirl3.png";

import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../services/auth";

export default function login() {
  const router = useRouter();
  const { user } = useAuth();

  const goHome = useCallback(() => {
    console.log("go home", router.query?.redirect_uri);
    if (router.query?.redirect_uri) {
      if (typeof router.query?.redirect_uri === "string") {
        console.log(`Redirecting to"${router.query?.redirect_uri}"`);
        return router.push(router.query?.redirect_uri);
      }
    } else {
      console.log('Redirecting to "/"');
      router.push("/");
    }
  }, [router.query?.redirect_uri]);

  const onLoginWithGoogle = useCallback(() => {
    return loginWithGoogle();
  }, []);
  useEffect(() => {
    console.log(user);
    if (user) {
      return goHome();
    } else if (user === null) {
    }
  }, [user]);
  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen px-4 py-12 bg-gray-500 bg-no-repeat bg-cover bg-gray-50 sm:px-6 lg:px-8">
        <img src={Mishagirl3}></img>
        <div className="absolute inset-0 z-0 bg-black opacity-60" />
        <div className="z-10 w-full max-w-md p-10 space-y-8 bg-white rounded-xl">
          <div className="text-center">
            <h2 className="mt-6 text-2xl italic font-bold text-xanh31c2b8">
              Mừng bạn quay trở lại dới chúng mình nè
            </h2>
            <p className="mt-2 text-sm text-xanh31c2b8">Đăng nhập thui</p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-3">
            <span
              onClick={onLoginWithGoogle}
              className="inline-flex items-center justify-center text-lg font-bold transition duration-300 ease-in bg-blue-200 rounded-full cursor-pointer w-11 h-11 hover:shadow-lg"
            >
              <FcGoogle className="w-4 h-4 text-GhostWhite " />
            </span>
            <span className="inline-flex items-center justify-center text-lg font-bold text-white transition duration-300 ease-in bg-blue-400 rounded-full cursor-pointer w-11 h-11 hover:shadow-lg">
              <img
                className="w-4 h-4"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY4MS4zMzQ2NCA2ODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIwMC45NjQ4NDQgNTE1LjI5Mjk2OWMyNDEuMDUwNzgxIDAgMzcyLjg3MTA5NC0xOTkuNzAzMTI1IDM3Mi44NzEwOTQtMzcyLjg3MTA5NCAwLTUuNjcxODc1LS4xMTcxODgtMTEuMzIwMzEzLS4zNzEwOTQtMTYuOTM3NSAyNS41ODU5MzctMTguNSA0Ny44MjQyMTgtNDEuNTg1OTM3IDY1LjM3MTA5NC02Ny44NjMyODEtMjMuNDgwNDY5IDEwLjQ0MTQwNi00OC43NTM5MDcgMTcuNDYwOTM3LTc1LjI1NzgxMyAyMC42MzY3MTggMjcuMDU0Njg3LTE2LjIzMDQ2OCA0Ny44MjgxMjUtNDEuODk0NTMxIDU3LjYyNS03Mi40ODgyODEtMjUuMzIwMzEzIDE1LjAxMTcxOS01My4zNjMyODEgMjUuOTE3OTY5LTgzLjIxNDg0NCAzMS44MDg1OTQtMjMuOTE0MDYyLTI1LjQ3MjY1Ni01Ny45NjQ4NDMtNDEuNDAyMzQ0LTk1LjY2NDA2Mi00MS40MDIzNDQtNzIuMzY3MTg4IDAtMTMxLjA1ODU5NCA1OC42ODc1LTEzMS4wNTg1OTQgMTMxLjAzMTI1IDAgMTAuMjg5MDYzIDEuMTUyMzQ0IDIwLjI4OTA2MyAzLjM5ODQzNyAyOS44ODI4MTMtMTA4LjkxNzk2OC01LjQ4MDQ2OS0yMDUuNTAzOTA2LTU3LjYyNS0yNzAuMTMyODEyLTEzNi45MjE4NzUtMTEuMjUgMTkuMzYzMjgxLTE3Ljc0MjE4OCA0MS44NjMyODEtMTcuNzQyMTg4IDY1Ljg3MTA5MyAwIDQ1LjQ2MDkzOCAyMy4xMzY3MTkgODUuNjA1NDY5IDU4LjMxNjQwNyAxMDkuMDgyMDMyLTIxLjUtLjY2MDE1Ni00MS42OTUzMTMtNi41NjI1LTU5LjM1MTU2My0xNi4zODY3MTktLjAxOTUzMS41NTA3ODEtLjAxOTUzMSAxLjA4NTkzNy0uMDE5NTMxIDEuNjcxODc1IDAgNjMuNDY4NzUgNDUuMTcxODc1IDExNi40NjA5MzggMTA1LjE0NDUzMSAxMjguNDY4NzUtMTEuMDE1NjI1IDIuOTk2MDk0LTIyLjYwNTQ2OCA0LjYwOTM3NS0zNC41NTg1OTQgNC42MDkzNzUtOC40Mjk2ODcgMC0xNi42NDg0MzctLjgyODEyNS0yNC42MzI4MTItMi4zNjMyODEgMTYuNjgzNTk0IDUyLjA3MDMxMiA2NS4wNjY0MDYgODkuOTYwOTM3IDEyMi40MjU3ODEgOTEuMDIzNDM3LTQ0Ljg1NTQ2OSAzNS4xNTYyNS0xMDEuMzU5Mzc1IDU2LjA5NzY1Ny0xNjIuNzY5NTMxIDU2LjA5NzY1Ny0xMC41NjI1IDAtMjEuMDAzOTA2LS42MDU0NjktMzEuMjYxNzE4OC0xLjgxNjQwNyA1Ny45OTk5OTk4IDM3LjE3NTc4MSAxMjYuODcxMDkzOCA1OC44NzEwOTQgMjAwLjg4NjcxODggNTguODcxMDk0IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
              />
            </span>
            <span className="inline-flex items-center justify-center text-lg font-bold text-white transition duration-300 ease-in bg-blue-500 rounded-full cursor-pointer w-11 h-11 hover:shadow-lg">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMy45OTQgMjR2LS4wMDFoLjAwNnYtOC44MDJjMC00LjMwNi0uOTI3LTcuNjIzLTUuOTYxLTcuNjIzLTIuNDIgMC00LjA0NCAxLjMyOC00LjcwNyAyLjU4N2gtLjA3di0yLjE4NWgtNC43NzN2MTYuMDIzaDQuOTd2LTcuOTM0YzAtMi4wODkuMzk2LTQuMTA5IDIuOTgzLTQuMTA5IDIuNTQ5IDAgMi41ODcgMi4zODQgMi41ODcgNC4yNDN2Ny44MDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIuODgyIDBjLTEuNTkxIDAtMi44ODIgMS4yOTEtMi44ODIgMi44ODJzMS4yOTEgMi45MDkgMi44ODIgMi45MDkgMi44ODItMS4zMTggMi44ODItMi45MDljLS4wMDEtMS41OTEtMS4yOTItMi44ODItMi44ODItMi44ODJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                className="w-4 h-4"
              />
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="w-16 h-px bg-gray-300" />
            <span className="font-normal text-gray-500">HOẶC</span>
            <span className="w-16 h-px bg-gray-300" />
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="relative">
              <div className="absolute right-0 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <label className="text-sm font-bold tracking-wide text-xanh31c2b8">
                Email
              </label>
              <input
                className="w-full py-2 text-base border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type
                placeholder="Nhập mail của bạn nè"
                defaultValue=""
              />
            </div>
            <div className="content-center mt-8">
              <label className="text-sm font-bold tracking-wide text-xanh31c2b8">
                Password
              </label>
              <input
                className="content-center w-full py-2 text-base border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type
                placeholder="Nhập mật khẩu nè"
                defaultValue=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded bg-xanh31c2b8 focus:ring-indigo-400"
                />
                <label
                  htmlFor="remember_me"
                  className="block ml-2 text-sm text-gray-900"
                >
                  Lưu lại hong?
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-xanh31c2b8 hover:text-indigo-500"
                >
                  Quên mật khẩu gùi hả?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center w-full p-4 font-semibold tracking-wide transition duration-300 ease-in rounded-full shadow-lg cursor-pointer bg-xanh31c2b8 text-GhostWhite focus:outline-none focus:shadow-outline hover:bg-TimNhat"
              >
                Gô gô gô
              </button>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-xanh31c2b8">
              <span>Hổng có nick hả?</span>
              <a
                href="#"
                className="transition duration-300 ease-in cursor-pointer text-xanh31c2b8 hover:text-indigo-500no-underline hover:underline"
              >
                Đăng ký nè
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
