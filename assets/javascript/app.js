"use strict"


$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyBf-RRTMGdxJNWguY0KlSg09SFQm-IMyMY",
        authDomain: "thomproject-e6ae1.firebaseapp.com",
        databaseURL: "https://thomproject-e6ae1.firebaseio.com",
        projectId: "thomproject-e6ae1",
        storageBucket: "thomproject-e6ae1.appspot.com",
        messagingSenderId: "631388206573"
      };
      firebase.initializeApp(config);

    $("#addButton").on("click", function() {
        
        let train = $("#trainName").val().trim();
        let line = $("#line").val().trim();
        let destination = $("#destination").val().trim();
        let trainTime = moment($("#trainTime").val().trim(), "HH:mm");
        let frequency = $("#frequency").val().trim();

        console.log(train);
        console.log(line);
        console.log(destination);
        console.log(trainTime);
        console.log(frequency);

        let newTrain = {
            name: train,
            line: line,
            destination: destination,
            trainTime: trainTime,
            frequency: frequency,
        }

        config.push(newTrain);

        $("#trainName").val("");
        $("#line").val("");
        $("#destination").val("");
        $("#trainTime").val("");
        $("#frequency").val("");

        return false;

    });
    
}
