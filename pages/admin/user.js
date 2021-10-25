import { useEffect, useState } from "react";
import { getUser } from "../../services/api";

import Sidebar from "../../components/admin/side-bar";
import Navbar from "../../components/navbar/Navbar";
import AddUser from "../../components/tab/add-user";

export default function UserManage({ user }) {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (user) {
      getUser().then(({ data, status }) => {
        if (status === 200) {
          setUsers(data.results);
          setTotal(data.total);
        } else {
          console.log("loi");
        }
      });
    }
  }, [user]);

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
    <>
      <Navbar user={user}></Navbar>
      <div className="flex flex-row pt-20 bg-gray-50 ">
        {/**Sidebar */}
        <Sidebar></Sidebar>
        <AddUser users={users} total={total}></AddUser>
        {/**Content */}
      </div>
    </>
  );
}
