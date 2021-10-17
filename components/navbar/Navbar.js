// import crocodile from '../Menu/crocodile.png'
import woman from "../navbar/woman.png";
import {useState, useCallback, memo } from "react";
import { sighOut } from "../../services/user";
import { useRouter } from "next/router";
import Link from "next/link";
// import rainbow from '../Menu/rainbow.png'

import { CgPlayListAdd } from "react-icons/cg";
import { route } from "next/dist/next-server/server/router";
// import router, { useRouter } from 'next/router'

export default function Navbar({ user, signout }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 h-20 transition-all duration-500 bg-xanh31c2b8 `}
      >
        <div className="container px-4 md:px-0 h-20 mx-auto flex items-center justify-between">
          <div className="flex flex-row justify-between items-center ">
            <Link href="/">
              <div className="cursor-pointer">
                <img src={woman} className="  h-20 p-2 "></img>
              </div>
            </Link>
            <div className="text-xl font-bold text-GhostWhite italic hidden sm:block ">
              Ở đây có review nè
            </div>
          </div>

          <div className="">
            <UserSetting user={user}></UserSetting>
          </div>
        </div>
      </div>
    </>
  );
}

const DropDown = (({logout}) => {
  return (
    <div class="absolute  w-40 mt-2 py-2 px-1.5  bg-FDF5E6  rounded shadow-xl">
      <a
        href="#"
        class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
      >
        <div className="mr-3">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        Setting
      </a>
      <div class="py-2">
        <hr className="dark:border-gray-700" />
      </div>
      <a
        href="#"
        class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
        onClick={logout}
      >
        <div className="mr-3 text-red-600">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </div>
        Logout
      </a>
    </div>
  );
})

const UserSetting = memo(({ user }) => {
  const [show, setShow] = useState(false);
  const showDropdown = () =>{
    setShow(!show)
  }
  const router = useRouter();
  const logout = () => {
    sighOut();
    window.location.reload();
    //  router.push("/")
  };

  if (user === undefined) {
    return null;
  }

  if (user === null) {
    return (
      <Link
        href={`/user/login?redirect_uri=${router.asPath || router.pathname}`}
      >
        <button className="text-LightSeaGreen bg-xanhlo shadow-2xl p-2 border-2 rounded-full border-GhostWhi">
          Đăng nhập
        </button>
      </Link>
    );
  }
  return (
    <div className=" mr-5">
      <div className="flex justify-center items-center  space-x-1">
        <img
          className="h-10 w-10 rounded-full mx-auto "
          src={user.displayImage}
          onClick={showDropdown}
        />
        <div className="">{user.displayImage}</div>
        <div className=" text-sm font-bold text-GhostWhite italic">
          {user.displayName}
        </div>
      </div>
      {show? <DropDown  logout={logout}></DropDown>: null}
    </div>
  );
});
