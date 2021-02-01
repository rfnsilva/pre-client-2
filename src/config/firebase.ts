import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCI5cpheURFtIT8gY5OcNcYwZ3G_K2Ss_Q',
  authDomain: 'preparo-8836b.firebaseapp.com',
  projectId: 'preparo-8836b',
  storageBucket: 'preparo-8836b.appspot.com',
  messagingSenderId: '220285738626',
  appId: '1:220285738626:web:90a61a066e7e255531de9b',
  measurementId: 'G-SWC8F1277Q'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const storage = firebaseApp.storage()
