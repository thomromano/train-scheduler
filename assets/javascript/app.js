"use strict"

//Initialize firebase
var config = {
    apiKey: "AIzaSyBf-RRTMGdxJNWguY0KlSg09SFQm-IMyMY",
    authDomain: "thomproject-e6ae1.firebaseapp.com",
    databaseURL: "https://thomproject-e6ae1.firebaseio.com",
    projectId: "thomproject-e6ae1",
    storageBucket: "thomproject-e6ae1.appspot.com",
    messagingSenderId: "631388206573"
};

firebase.initializeApp(config);

const database = firebase.database();


//Button to add new trains
$("#add-train-button").on("click", function (e) {
    e.preventDefault();

    //grab user input
    let train = $("#train-name-input").val().trim();
    let line = $("#line-input").val().trim();
    let destination = $("#destination-input").val().trim();
    let trainTime = moment($("#time-input").val().trim(), "HH:mm");
    let frequency = $("#frequency-input").val().trim();

    
//create local object for holding train data
    let newTrain = {
        name: train,
        line: line,
        destination: destination,
        trainTime: trainTime,
        frequency: frequency,
    };

    //upload train data to database
    database.ref().push(newTrain);

    //log to console
console.log(newTrain.train);
    console.log(newTrain.line);
    console.log(newTrain.destination);
    console.log(newTrain.trainTime);
    console.log(newTrain.frequency);


//Clear textboxes
    $("#trainName").val("");
    $("#line").val("");
    $("#destination").val("");
    $("#trainTime").val("");
    $("#frequency").val("");

});

//Creates firebase event for adding train to database and a row in html
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    //Store everything into a variable 

})