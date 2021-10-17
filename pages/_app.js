import { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import firebase from '../services/firebase'

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    return firebase.auth().onAuthStateChanged(setUser);
  }, [])
  return <Component user={user} {...pageProps} />
}

export default MyApp
