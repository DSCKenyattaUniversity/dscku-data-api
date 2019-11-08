// get firebase
var firebase = require('firebase')
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDD5mQxiGQ9RQwfYTKgLUzaCIChAZPem40",
    authDomain: "dscku-register.firebaseapp.com",
    databaseURL: "https://dscku-register.firebaseio.com",
    projectId: "dscku-register",
    storageBucket: "dscku-register.appspot.com",
    messagingSenderId: "715362670942",
    appId: "1:715362670942:web:21a9fb10d5a8c25bca57cf",
    measurementId: "G-T770V851NE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

const members = []

var usersRef = database.ref('members');
usersRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var fetchedMembers = childSnapshot.val();
        members.push(fetchedMembers)
    });
});

// export data through a module
const exportedMembers = () => (members)
module.exports = exportedMembers