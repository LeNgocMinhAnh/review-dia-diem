import NavbarAdmin from "../../components/navbar/nav-admin";
import AddPlace from "../../components/tab/addPlace";
import { getPlace } from "../../services/api";
import { useDebounce } from "../../services/hooks";
import PlaceForm from "../../components/admin/place-form";
import Sidebar from "../../components/admin/sidebar";
import { useEffect, useState, useCallback } from "react";
import SidebarMobile from "../../components/admin/sidebar-mobile";
import { useAuth } from "../../services/auth";

export default function PlaceManage() {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log("you're at the bottom of the page");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = useCallback(
    () => setSidebarOpen((prevState) => !prevState),
    []
  );

  const [places, setPlaces] = useState([]);
  const [total, setTotal] = useState(0);

  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText, 300);

  useEffect(() => {
    if (!!user) {
      const data = { search: debouncedValue };
      getPlace(data).then(({ data, status }) => {
        if (status === 200) {
          setPlaces(data.results);
          setTotal(data.total);
        }
      });
    }
  }, [user, debouncedValue]);

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
      <NavbarAdmin user={user} toggleSidebar={toggleSidebar}></NavbarAdmin>
      <div className="flex flex-row pt-20 bg-gray-50">
        {/**Sidebar */}
        <SidebarMobile sidebarOpen={sidebarOpen}></SidebarMobile>

        {/**Content */}

        <AddPlace
          total={total}
          places={places}
          setPlaces={setPlaces}
          searchText={searchText}
          setSearchText={setSearchText}
        ></AddPlace>
      </div>
    </div>
  );
}
