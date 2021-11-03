// import crocodile from '../Menu/crocodile.png'
import woman from "../navbar/woman.png";
import { useState, useCallback, memo } from "react";
import { sighOut } from "../../services/user";
import { useRouter } from "next/router";
import Link from "next/link";
// import rainbow from '../Menu/rainbow.png'

import { CgPlayListAdd } from "react-icons/cg";
import { route } from "next/dist/next-server/server/router";
// import router, { useRouter } from 'next/router'
import { useAuth } from "../../services/auth";

export default function Navbar({ signout }) {
  const { user } = useAuth();
  return (
    <>
      <div
        className={`fixed inset-0 z-50 h-20 transition-all duration-500 bg-xanh31c2b8 `}
      >
        <div className="container flex items-center justify-between h-20 px-4 mx-auto md:px-0">
          <div className="flex flex-row items-center justify-between ">
            <Link href="/">
              <div className="cursor-pointer">
                <img src={woman} className="h-20 p-2 "></img>
              </div>
            </Link>
            <div className="hidden text-xl italic font-bold text-GhostWhite sm:block ">
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

const DropDown = ({ logout, setting }) => {
  return (
    <div className="absolute  w-40 mt-2 py-2 px-1.5  bg-FDF5E6  rounded shadow-xl">
      <a
        href="#"
        className="flex items-center transition-colors duration-200 transform border-r-4 border-transparent hover:border-red-600"
        onClick={setting}
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
      <div className="py-2">
        <hr className="dark:border-gray-700" />
      </div>
      <a
        href="#"
        className="flex items-center transition-colors duration-200 transform border-r-4 border-transparent hover:border-red-600"
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
};

const UserSetting = memo(({ user }) => {
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const router = useRouter();
  const logout = () => {
    sighOut();
    window.location.reload();
    //  router.push("/")
  };

  const setting = () => {
    router.push("/user/setting");
  };

  if (user === undefined) {
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
    <div className="mr-5 ">
      <div className="flex items-center justify-center space-x-1">
        <img
          className="mx-auto rounded-full h-11 w-11 "
          src={user.photoURL}
          onClick={showDropdown}
        />
        <div className="">{user.displayImage}</div>
        <div className="text-sm italic font-bold text-GhostWhite">
          {user.displayName}
        </div>
      </div>
      {show ? <DropDown logout={logout} setting={setting}></DropDown> : null}
    </div>
  );
});
