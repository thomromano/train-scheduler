"use strict"

$(document).ready(function () {


    // Initialize firebase
    let config = {
        apiKey: "AIzaSyBf-RRTMGdxJNWguY0KlSg09SFQm-IMyMY",
        authDomain: "thomproject-e6ae1.firebaseapp.com",
        databaseURL: "https://thomproject-e6ae1.firebaseio.com",
        projectId: "thomproject-e6ae1",
        storageBucket: "thomproject-e6ae1.appspot.com",
        messagingSenderId: "631388206573"
    };

    firebase.initializeApp(config);

    let database = firebase.database();

      // Button to add train
  $("#addTrainBtn").on("click", function () {

    // Grab user input and assign to variables
    const trainName = $("#trainNameInput").val().trim();
    const destination = $("#destinationInput").val().trim();
    let trainTimeInput = moment($("#trainTimeInput").val().trim(), "HH:mm").subtract(10, "years").format("X");;
    const frequencyInput = $("#frequencyInput").val().trim();

    let newTrain = {
      name: trainName,
      destination: destination,
      trainTime: trainTimeInput,
      frequency: frequencyInput,
    }

    // push to Firebase
    database.ref().push(newTrain);
    
    // clear textboxes
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#frequencyInput").val("");
    $("#trainTimeInput").val("");

    // Prevent page from refreshing
    return false;
  });

  database.ref().on("child_added", function (childSnapshot, prevChildKey) {

    // assign firebase variables to snapshots
    let firebaseName = childSnapshot.val().name;
    let firebaseDestination = childSnapshot.val().destination;
    let firebaseTrainTimeInput = childSnapshot.val().trainTime;
    let firebaseFrequency = childSnapshot.val().frequency;

    let diffTime = moment().diff(moment.unix(firebaseTrainTimeInput), "minutes");
    let timeRemainder = moment().diff(moment.unix(firebaseTrainTimeInput), "minutes") % firebaseFrequency;
    let minutes = firebaseFrequency - timeRemainder;

    let nextTrainArrival = moment().add(minutes, "m").format("hh:mm A");

    // Append train info 
    $("#trainTable > tbody").append(`<tr><td> ${firebaseName} </td><td>  ${firebaseDestination}  </td><td>  ${firebaseFrequency}    </td><td>  ${nextTrainArrival}  </td><td>  ${minutes}  </td></tr>`);
  });
       
});