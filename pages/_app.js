import { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import firebase from '../services/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/src/sweetalert2.scss'


function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    return firebase.auth().onAuthStateChanged(setUser);
  }, [])
  return <>
    <Component user={user} {...pageProps} />
    <ToastContainer />
  </>
}

export default MyApp
