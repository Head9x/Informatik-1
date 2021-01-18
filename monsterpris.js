var firebaseConfig = {
    databaseURL: "https://discordbot-304c4-default-rtdb.europe-west1.firebasedatabase.app/",
  };
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  
  firebase.database().ref('monster').orderByChild("pris").once('value',function(snapshot){
    console.log(snapshot.val());
          snapshot.forEach(
            function(ChildSnapshot){
                let sted = ChildSnapshot.val().sted;
                let pris = ChildSnapshot.val().pris;
               $("#list").append("<tr><td>" + sted + "</td><td>" + pris + "</td></tr>");
            }
          );
  });