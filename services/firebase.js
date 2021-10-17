import firebase from 'firebase/app';
import 'firebase/auth';

if(firebase.apps.length ===0) {
    firebase.initializeApp({
    apiKey: 'AIzaSyBDgE3nGzN9dRmUNSYYatbhEdR2YBUSvkY',
    authDomain: 'sv-net.firebaseapp.com',
    projectId: 'sv-net',
    })
}

export default firebase;