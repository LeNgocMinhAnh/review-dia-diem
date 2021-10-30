import { useEffect, useState, useCallback } from "react";
import { getUser } from "../../services/api";
import SidebarMobile from "../../components/admin/sidebar-mobile";

import Sidebar from "../../components/admin/sidebar";
import NavbarAdmin from "../../components/navbar/nav-admin";
import AddUser from "../../components/tab/add-user";
import { useDebounce } from "../../services/hooks";

export default function UserManage({ user }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(
    () => setSidebarOpen((prevState) => !prevState),
    []
  );

  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);

  // Search text phải nằm bên này
  const [searchText, setSearchText] = useState("");

  // debouncedValue sẽ thay đổi sau khi giá trị search text ngưng thay đổi sau 300ms
  const debouncedValue = useDebounce(searchText, 300);

  // Cái này sẽ được gọi khi user hoặc debouncedValue thay đổi
  // Vì debouncedValue thay đổi sau 300ms khi searchText thay đổi nên hàm này sẽ gọi sau 300ms
  useEffect(() => {
    // Nếu đã đăng nhập
    if (user) {
      const data = { search: debouncedValue };
      console.log("Call api", data);
      getUser(data).then(({ data, status }) => {
        if (status === 200) {
          setUsers(data.results);
          setTotal(data.total);
        } else {
          // todo: toast lỗi
          console.log("loi");
        }
      });
    }
  }, [user, debouncedValue]);

  useEffect(() => {
    console.log("searchText", searchText, "debouncedValue", debouncedValue);
  }, [searchText, debouncedValue]);

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
      <NavbarAdmin user={user} toggleSidebar={toggleSidebar}></NavbarAdmin>
      <div className="flex flex-row pt-20 bg-gray-50 ">
        {/**Sidebar */}
        <SidebarMobile sidebarOpen={sidebarOpen}></SidebarMobile>
        <AddUser
          user={user}
          users={users}
          total={total}
          searchText={searchText}
          setSearchText={setSearchText}
          setUsers={setUsers}
        ></AddUser>
        {/**Content */}
      </div>
    </>
  );
}
