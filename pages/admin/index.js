import NavbarAdmin from "../../components/navbar/nav-admin";
import AddPlace from "../../components/tab/addPlace";
import { getPlace } from "../../services/api";
import { useDebounce } from "../../services/hooks";
import PlaceForm from "../../components/admin/place-form";
import Sidebar from "../../components/admin/sidebar";
import { useEffect, useState } from "react";
import Dasboard from "../../components/tab/dasboard";
import AdminLayout from "../../components/admin/admin-layout";

export default function AdminIndex({ user }) {
  return (
    <AdminLayout user={user}>
      <Dasboard user={user}></Dasboard>
    </AdminLayout>
  );
}
