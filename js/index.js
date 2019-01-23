// Variable Declarations
var firstName = "";
var secondName = "";
var fatesComment = "I am Fate! <br> If you suddenly change your mind, click my picture and enter another person\'s name. Now, if you are ready to find out what FLAMES have in store for both of you, press \"Continue\"";


$(document).ready(function () {
    $(".jumbotron").fadeIn("slow");
    $(".panel-body").fadeIn("slow");
    $(".panel-footer").fadeIn("slow");
    console.log("Document Ready!");
});

// Input Validation
var invalidNameflag = 0;

function inputPolice(name) {
    var patt = /[^.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVEXYZ ]/gi;
    if (patt.test(name) || (name === "")) {
        invalidNameflag = invalidNameflag + 1;
        $("#resetinputbtn").fadeIn("slow");
        return "Ooops Please enter a valid name that does not have a digit, a period, or weird characters.";
    } else {
        return name;
    }
}

/* Algorithm: Counts the common letters from each names
The number of common numbers for each name and the sum should correspond to a value that falls being on of each:
F = Friends
L = Lovers 
A = Angry 
M = Married 
E = Enemies 
S = Sweet 
 */
function processFlames(name1, name2) {
    var name1L = name1.toLowerCase();
    var name2L = name2.toLowerCase();
    var pattNoSpace = / /g;
    var pattNoPeriod = /\./g;
    var name1Lwospace = name1L.replace(pattNoSpace, "");
    var name2Lwospace = name2L.replace(pattNoSpace, "");
    var name1LwospaceNperiod = name1Lwospace.replace(pattNoPeriod, "");
    var name2LwospaceNperiod = name2Lwospace.replace(pattNoPeriod, "");

    var name1U = name1LwospaceNperiod.split('').filter(function (item, i, ar) {
        return ar.indexOf(item) === i;
    }).join('');
    var name2U = name2LwospaceNperiod.split('').filter(function (item, i, ar) {
        return ar.indexOf(item) === i;
    }).join('');

    var nameboth = "";
    for (var x = 0; x < name1U.length; x++) {

        for (var y = 0; y < name2U.length; y++) {

            if (name1U[x] === name2U[y]) {
                nameboth += name2U[y];

            }

        }

    }


    var namebothU = nameboth.split('').filter(function (item, i, ar) {
        return ar.indexOf(item) === i;
    }).join('');

    var name1Counter = 0;
    var name2Counter = 0;
    var namebCounter = 0;
    var name1x, name2y, namebz;


    for (name1x = 0; name1x < name1LwospaceNperiod.length; name1x++) {

        for (namebz = 0; namebz < namebothU.length; namebz++) {

            if (name1LwospaceNperiod[name1x] === namebothU[namebz]) {
                name1Counter += 1;

            }

        }

    }

    for (name2y = 0; name2y < name2LwospaceNperiod.length; name2y++) {

        for (namebz = 0; namebz < namebothU.length; namebz++) {

            if (name2LwospaceNperiod[name2y] === namebothU[namebz]) {
                name2Counter += 1;

            }

        }

    }


    namebCounter = name1Counter + name2Counter;
    var name1CounterEvaluated = "";
    var name2CounterEvaluated = "";
    var nameBCounterEvaluated = "";


    if (namebCounter + name1Counter + name2Counter == 0) {
        name1CounterEvaluated = name2CounterEvaluated = nameBCounterEvaluated = "Oh No! I am sorry that there is definitely <strong class=\"bigLetter\">NO FLAME</strong> between the two of you.";
    } else {

        switch (name1Counter % 6) {
            case 1:
                name1CounterEvaluated = "<strong class=\"bigLetter\">F</strong>LAMES for <strong class=\"bigLetter\">Friends</strong>";
                break;
            case 2:
                name1CounterEvaluated = "F<strong class=\"bigLetter\">L</strong>AMES for <strong class=\"bigLetter\">Love</strong>";
                break;
            case 3:
                name1CounterEvaluated = "FL<strong class=\"bigLetter\">A</strong>MES for <strong class=\"bigLetter\">Affair</strong>";
                break;
            case 4:
                name1CounterEvaluated = "FLA<strong class=\"bigLetter\">M</strong>ES for <strong class=\"bigLetter\">Marriage</strong>";
                break;
            case 5:
                name1CounterEvaluated = "FLAM<strong class=\"bigLetter\">E</strong>S for <strong class=\"bigLetter\">Enemies</strong>";
                break;
            case 0:
                name1CounterEvaluated = "FLAME<strong class=\"bigLetter\">S</strong> for <strong class=\"bigLetter\">Social</strong>";
                break;
        }

        switch (name2Counter % 6) {
            case 1:
                name2CounterEvaluated = "<strong class=\"bigLetter\">F</strong>LAMES for <strong class=\"bigLetter\">Friends</strong>";
                break;
            case 2:
                name2CounterEvaluated = "F<strong class=\"bigLetter\">L</strong>AMES for <strong class=\"bigLetter\">Love</strong>";
                break;
            case 3:
                name2CounterEvaluated = "FL<strong class=\"bigLetter\">A</strong>MES for <strong class=\"bigLetter\">Affair</strong>";
                break;
            case 4:
                name2CounterEvaluated = "FLA<strong class=\"bigLetter\">M</strong>ES for <strong class=\"bigLetter\">Marriage</strong>";
                break;
            case 5:
                name2CounterEvaluated = "FLAM<strong class=\"bigLetter\">E</strong>S for <strong class=\"bigLetter\">Enemies</strong>";
                break;
            case 0:
                name2CounterEvaluated = "FLAME<strong class=\"bigLetter\">S</strong> for <strong class=\"bigLetter\">Social</strong>";
                break;
        }
        switch ((name1Counter + name2Counter) % 6) {
            case 1:
                nameBCounterEvaluated = "<strong class=\"bigLetter\">Friends</strong>. <strong class=\"bigLetter\">F</strong>LAMES ";
                break;
            case 2:
                nameBCounterEvaluated = "<strong class=\"bigLetter\">Love</strong>. F<strong class=\"bigLetter\">L</strong>AMES ";
                break;
            case 3:
                nameBCounterEvaluated = "<strong class=\"bigLetter\">Affair</strong>. FL<strong class=\"bigLetter\">A</strong>MES ";
                break;
            case 4:
                nameBCounterEvaluated = "<strong class=\"bigLetter\">Marriage</strong>. FLA<strong class=\"bigLetter\">M</strong>ES ";
                break;
            case 5:
                nameBCounterEvaluated = "<strong class=\"bigLetter\">Enemies</strong>. FLAM<strong class=\"bigLetter\">E</strong>S ";
                break;
            case 0:
                nameBCounterEvaluated = "<strong class=\"bigLetter\">Social</strong>. FLAME<strong class=\"bigLetter\">S</strong> ";
                break;
        }


    }


    // construct the text outputs for the result page
    document.getElementById("fatesComment").innerHTML = name1 + " and " + name2 + ". Results " + nameBCounterEvaluated + ". Common Letters: " + namebCounter;
    document.getElementById("yourname").innerHTML = name1;
    document.getElementById("lover1").innerHTML = '<br>' + 'Common ' + (name1Counter > 1 ? 'Letters: ' :
        'Letter: ') + name1Counter + '<br>' + "result: " + name1CounterEvaluated + '<br>';
    document.getElementById("person2").innerHTML = name2;
    document.getElementById("lover2").innerHTML = '<br>' + 'Common ' + (name2Counter > 1 ? 'Letters: ' :
        'Letter: ') + name2Counter + '<br>' + "result: " + name2CounterEvaluated + '<br>';

}




$("#submit").on("click", function () {
    $(".container").show("slow");
    $(".panel-default").hide("slow");
    document.getElementById("fatesComment").innerHTML = fatesComment;
    firstName = document.getElementById("p1Name").value;
    secondName = document.getElementById("p2Name").value;
    invalidNameflag = 0;
    document.getElementById("lover1").innerHTML = inputPolice(firstName);
    document.getElementById("lover2").innerHTML = inputPolice(secondName);
    if (invalidNameflag > 0) {
        $("#continuebtn").prop("disabled", true);
        $("#resetinputbtn").fadeIn("slow");
    } else {
        $("#continuebtn").prop("disabled", false);
        $("#resetinputbtn").hide("slow");
    }

});




$("#continuebtn").on("click", function () {
    document.getElementById("fatesComment").innerHTML = "Here is your future.. ";
    document.getElementById("lover1").innerHTML = firstName;
    document.getElementById("lover2").innerHTML = secondName;
    $("#finishbtn").fadeIn("slow");
    $("#continuebtn").hide("slow");
    $("#cupid").hide("slow");
    processFlames(firstName, secondName);
});


function correctInput() {
    $(".container").hide("slow");
    $(".panel-default").show("slow");
    document.getElementById("demo").innerHTML = fatesComment;
    document.getElementById("p1Name").innerHTML = "";
    document.getElementById("p2Name").innerHTML = "";
    document.getElementById("lover1").innerHTML = "";
    document.getElementById("lover2").innerHTML = "";
}


$("#resetinputbtn").on("click", function () {
    correctInput();
})


$("#cupid").on("click", function () {
    correctInput();
});
