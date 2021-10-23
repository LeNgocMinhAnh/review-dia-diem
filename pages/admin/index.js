import NavBar from "../../components/navbar/Navbar";
import AddPlace from "../../components/tab/addPlace";
import { getPlace } from "../../services/api";
import PlaceForm from "../../components/admin/place-form";
import Sidebar from "../../components/admin/side-bar";
import { useEffect, useState } from "react";


export default function AdminIndex({ user }) {

  const [places, setPlaces] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getPlace()
      .then(({ data, status }) => {
        if (status === 200){
          setPlaces(data.results)
          setTotal(data.total)
        }
      })    
  }, [])


  if (user == undefined) {
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
    <>
      <NavBar user={user}></NavBar>
      <div className="flex flex-row bg-xanhlo pt-20 ">
        {/**Sidebar */}
        <Sidebar></Sidebar>
        {/**Content */}
        
          <AddPlace total={total} places={places} setPlaces={setPlaces}></AddPlace>         
        
      </div>
    </>
  );
}
