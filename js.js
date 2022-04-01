// get the users score
function numberWangle(){
    var array = []
    var n = 0
    var checkboxesChecked = document.querySelectorAll('input[type=checkbox]:checked')
    
    for (var i = 0; i < checkboxesChecked.length; i++){    
        n = parseFloat(checkboxesChecked[i].value)
        array.push(n)
    }
    var score = sumArray(array)
    var total = allBoxesVal()
    var userScore = 100 - ((score/total) * 100)

    return userScore.toFixed(2);
}

// get the value of the total pure score
function allBoxesVal(){
    var checkboxesAll = document.querySelectorAll('input[type=checkbox]')
    var array = []
    var n = 0

    for (var i = 0; i < checkboxesAll.length; i++){    
        n = parseFloat(checkboxesAll[i].value)
        array.push(n)
    }
    return sumArray(array)
}

// func to sum an array
function sumArray(array){
    var sum = 0;
    for (var i in array){
        sum += array[i] 
    }
    return sum;
}

// the function called, gives the html userscore
function calculate(){
    var x = 0;
    var elm = document.getElementById("final_score");
    if (elm.style.display === "none") {
        x = String(numberWangle());
        x += "%"
        document.getElementById("your_score").innerHTML = x;
        elm.style.display = "block";
    } else {
        elm.style.display = "none";
    }
}




//this is a for loop going through all the checkboxes
//y is the id and then the value the actual score we gave
 //insert into array 
 //loop through array of supposedly numbers and add together all that are checked 
 // we count the x first before next page 
 // make the for loop

 // precentage = their score / total * 100 = xx.x% 