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
    $("#name-input").val("");
    $("#destination-input").val(""); 
    $("#time-input").val(""); 
    $("#frequency-input").val(""); 
});

database.ref().on("child_added", function(nextTrain){
console.log(nextTrain.val());
    nextTrain.preventDefault();
        var empName = nextTrain.val().train;
        var empDest = nextTrain.val().destination;
        var empTime = nextTrain.val().time;
        var empFreq = nextTrain.val().frequency;
console.log(empName);
console.log(empDest);
console.log(empTime);
console.log(empFreq);

        var newRow = $("<tr>").append(
            $("<td>").text(empName),
            $("<td>").text(empDest),
            $("<td>").text(empFreq),
            $("<td>").text(empNextArrival),
            $("<td>").text(empMinAway),
        );
        $(".table > tbody").append(newRow);
});
