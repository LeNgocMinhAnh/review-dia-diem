import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../services/auth";
import NavbarAdmin from "../navbar/nav-admin";
import Sidebar from "./sidebar";
import SidebarMobile from "./sidebar-mobile";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();
  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const toggleSidebar = useCallback(
    () => setSidebarOpen((prevState) => !prevState),
    []
  );
  useEffect(() => {
    console.log("Sidebar is", sidebarOpen ? "open" : "close");
  }, [sidebarOpen]);

  return (
    <>
      <NavbarAdmin
        user={user}
        toggleSidebar={toggleSidebar}
        //  openSidebar={openSidebar}
      ></NavbarAdmin>
      <div className="flex flex-row pt-20 bg-gray-50">
        {/*<Sidebar></Sidebar>*/}
        <SidebarMobile sidebarOpen={sidebarOpen}></SidebarMobile>
        {children}
      </div>
    </>
  );
}
