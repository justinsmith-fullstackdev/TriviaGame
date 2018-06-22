
// variable to store begining time
var counter = 2;

//defintion for timer count down function
function timer() {
    counter --;
    $('#counter').text(counter);
}
//Calling function at begining of program
setInterval("timer()",1000);

//If statments that will be used to validate the anwsers selected by the user

function score () {

    //refferencing values for questions
    var q1 = document.forms.form.q1.value;
    var q2 = document.forms.form.q2.value;
    var q3 = document.forms.form.q3.value;

    //an array for the questions
    var questions =[q1, q2, q3];

    //an array to hold the anwsers for each question
    var answers = ["b","a", "d"];

    //Variables to keep track of points
    var points = 0;
    var wrong = 0;
    var none = 3

    //maizmum score
    var total = 3;

    //for loop to iterate over te questinos and anwsers arrays
    for (var i = 0; i < total; i++)
    {
        //if the index i for questions match index i for answers than we increase the points as correct
        if (questions[i] === answers[i]){
            points = points + 1;
        }
        //if wrong add to the wrong counter 
        else if (questions[i] !== answers[i]) {
            wrong = wrong + 1;
        }
        //if no anwser selected decrease by 1
        else {
            none = none - 1;
        }

    }

}

if (counter === 0){
    $("#h1").empty();
}
