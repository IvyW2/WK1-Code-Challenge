//Challenge 1: Student Grade Generator

// The function created below is a grade generator which helps us generate a grade dependent on the input score of the student.


 let score = prompt("Enter your score ") 
// User should input score be 0-100 as conditioned below anything else other than an integer then the user will be promted to give valid values.
// If the above condition is met then the else if statements below will be executed.
// A grade will be genareted after the below condition statement have been executed. Depending on the score a grade will be outputted and the page will reload.
 if (score <= 100 && score >= 80){
    alert("You scored an A")
}
 else if (score>=60 && score <= 79){
    alert("You scored a B")
}
 else if (score >=50 && score <= 59){
    alert("You scored a C")
}
 else if (score >=40 && score <= 49){
    alert("You scored a D")
}
 else if (score < 40 && score >= 0){
     alert(" You scored an E")
    }
else {
    alert ('Kindly give valid values ')
}

window.location.reload();