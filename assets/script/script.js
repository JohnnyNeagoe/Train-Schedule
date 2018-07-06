var config = {
    apiKey: "AIzaSyBSMeXdOGX4x6bZgpC8ZEmy6cM7JSTDaBo",
    authDomain: "train-tracks-63944.firebaseapp.com",
    databaseURL: "https://train-tracks-63944.firebaseio.com",
    projectId: "train-tracks-63944",
    storageBucket: "",
    messagingSenderId: "1006104699786"
};

firebase.initializeApp(config);
var database = firebase.database();

$("#buttonSubmit").on("click", function(event) {
    event.preventDefault();

    var empName = $("#name-input").val().trim();
    var empDest = $("#destination-input").val().trim();
    var empTime = $("#time-input").val().trim();
    var empFreq = $("#frequency-input").val().trim();

    var newTrain = {
        train: empName,
        destination: empDest,
        time: empTime,
        frequency: empFreq
    }
    database.ref().push(newTrain);
    console.log(newTrain.train);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.frequency);
});