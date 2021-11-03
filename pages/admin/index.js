import Dasboard from "../../components/tab/dasboard";
import AdminLayout from "../../components/admin/admin-layout";
import { useAuth } from "../../services/auth";

export default function AdminIndex() {
  const { user } = useAuth();
  return (
    <AdminLayout user={user}>
      <Dasboard user={user}></Dasboard>
    </AdminLayout>
  );
}
