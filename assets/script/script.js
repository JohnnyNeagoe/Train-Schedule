var config = {
    apiKey: "AIzaSyBEAxUReKIqpRIgWUmIQyfRtjchxxKrFeU",
    authDomain: "train-tracks-2a8ea.firebaseapp.com",
    databaseURL: "https://train-tracks-2a8ea.firebaseio.com",
    projectId: "train-tracks-2a8ea",
    storageBucket: "train-tracks-2a8ea.appspot.com",
    messagingSenderId: "44624294694"
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
    event.preventDefault();
        var empName = nextTrain.val().train;
        var empDest = nextTrain.val().destination;
        var empTime = nextTrain.val().time;
        var empFreq = nextTrain.val().frequency;
console.log(empName);
console.log(empDest);
console.log(empTime);
console.log(empFreq);

        var empTimeNice = moment(empTime, "hh:mm").subtract(1, "day");
        var empMins = moment().diff(moment(empTimeNice), "minutes");
        var tRemainder = empMins % empFreq;
        console.log(empMins);
        console.log(tRemainder);
        var empMinsAway = empFreq - tRemainder;
        var empNextArrival = moment().add(empMinsAway, "minutes");
        var empNextArrivalNice = moment(empNextArrival).format("hh:mm");
        var newRow = $("<tr>").append(
            $("<td>").text(empName),
            $("<td>").text(empDest),
            $("<td>").text(empFreq),
            $("<td>").text(empNextArrivalNice),
            $("<td>").text(empMinsAway),
        );
        $(".table > tbody").append(newRow);
});
