import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp=firebase.initializeApp({

    
        apiKey: "AIzaSyBDJWZpoHhMOWtztgPYDeY-lWDRv0sUUvE",
        authDomain: "clone-4ddda.firebaseapp.com",
        projectId: "clone-4ddda",
        storageBucket: "clone-4ddda.appspot.com",
        messagingSenderId: "157774659683",
        appId: "1:157774659683:web:007da3c7d195833dfcb856",
        measurementId: "G-CLD26FQVQ6"
      
})


  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();
  export {db, auth}