import NavBar from "../../components/navbar/Navbar";
import AddPlace from "../../components/tab/addPlace";
import { getPlace } from "../../services/api";
import { useDebounce } from "../../services/hooks";
import PlaceForm from "../../components/admin/place-form";
import Sidebar from "../../components/admin/side-bar";
import { useEffect, useState } from "react";
import Dasboard from "../../components/tab/dasboard";

export default function AdminIndex({ user }) {
  return (
    <>
      <NavBar user={user}></NavBar>
      <div className="flex flex-row pt-20 bg-gray-50">
        <Sidebar></Sidebar>
        <Dasboard user={user}></Dasboard>
      </div>
    </>
  );
}
