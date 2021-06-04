import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAsJNbJ7STzrJTc2NZ7p14uSnoRJHr6h5A",
    authDomain: "prueba3-6647d.firebaseapp.com",
    databaseURL: "https://prueba3-6647d-default-rtdb.firebaseio.com",
    projectId: "prueba3-6647d",
    storageBucket: "prueba3-6647d.appspot.com",
    messagingSenderId: "388872948599",
    appId: "1:388872948599:web:49bbafff5cf6edcd3fef72"
};
var fireDB=firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
  
