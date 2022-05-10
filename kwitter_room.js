var firebaseConfig = {
    apiKey: "AIzaSyDc227f9FD5qOUePheX1HaR9GB-lR-qPRw",
    authDomain: "project-94-e554d.firebaseapp.com",
    databaseURL: "https://project-94-e554d-default-rtdb.firebaseio.com",
    projectId: "project-94-e554d",
    storageBucket: "project-94-e554d.appspot.com",
    messagingSenderId: "869896204173",
    appId: "1:869896204173:web:ad6d39c29a01c8bf64d7c4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addRoom(){
      username = document.getElementById("username").value
      firebase.database().ref("/").child(username).update({
          me : "hello"
      })
  }