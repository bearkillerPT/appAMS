import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'api-key',
    authDomain: 'project-id.firebaseapp.com',
    databaseURL: 'https://project-id.firebaseio.com',
    projectId: 'project-id',
    storageBucket: 'project-id.appspot.com',
    messagingSenderId: 'sender-id',
    appId: 'app-id',
    measurementId: 'G-measurement-id',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database;
export function storeCart(userId, cart) {
    firebase
        .database()
        .ref('users/' + userId)
        .set({
            highscore: cart,
        });
}


function setupHighscoreListener(userId) {
    firebase.database().ref('users/' + userId).on('value', (snapshot) => {
        const highscore = snapshot.val().cart;
        console.log("New cart: " + cart);
    });
}