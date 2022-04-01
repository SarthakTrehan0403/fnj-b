const firebaseConfig = {
    apiKey: "AIzaSyCzPftj53Aai8RP89mY9x_Ui3S9eTuYbYM",
    authDomain: "c-94project.firebaseapp.com",
    databaseURL: "https://c-94project-default-rtdb.firebaseio.com",
    projectId: "c-94project",
    storageBucket: "c-94project.appspot.com",
    messagingSenderId: "168127861578",
    appId: "1:168127861578:web:4586dd262c524fadc127b3"
  };
  
    

  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref ("/").child(user_name).update({
          purpose:"adding user"
      })
  }