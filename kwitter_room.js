//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBhMX-GkC083F2wEyeWLZdVaxBPULbXmFc",
      authDomain: "kwitter-4b7ca.firebaseapp.com",
      databaseURL: "https://kwitter-4b7ca-default-rtdb.firebaseio.com",
      projectId: "kwitter-4b7ca",
      storageBucket: "kwitter-4b7ca.appspot.com",
      messagingSenderId: "166781515004",
      appId: "1:166781515004:web:dc9ea1918581d0153e9379",
      measurementId: "G-MEYVSSKKBH"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
