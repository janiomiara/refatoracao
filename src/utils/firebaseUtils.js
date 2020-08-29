import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDPF2S0_itV_q3oWzj6Jh3uqcY0XmjEjWA",
    authDomain: "bots-d6b34.firebaseapp.com",
    databaseURL: "https://bots-d6b34.firebaseio.com",
    projectId: "bots-d6b34",
    storageBucket: "bots-d6b34.appspot.com",
    messagingSenderId: "517827241300",
    appId: "1:517827241300:web:83636cb306ae73b5"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();


