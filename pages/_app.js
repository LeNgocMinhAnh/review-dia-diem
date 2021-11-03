import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/src/sweetalert2.scss";
import { AuthProvider } from "../services/auth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </AuthProvider>
  );
}

export default MyApp;
