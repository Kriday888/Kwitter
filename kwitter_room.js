
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC4mZWzmCVSY1Mg1nuvl1mO3c7bf0uhGSA",
      authDomain: "kwitter-f3602.firebaseapp.com",
      databaseURL: "https://kwitter-f3602-default-rtdb.firebaseio.com",
      projectId: "kwitter-f3602",
      storageBucket: "kwitter-f3602.appspot.com",
      messagingSenderId: "843393316839",
      appId: "1:843393316839:web:e9b5a7bb8827e32aea6f42"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

     function addRoom(){
           room_name=document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
           localStorage.setItem("room_name", room_name);
           window.location="kwitter_page.html";
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}