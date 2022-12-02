//This is a function that calculates an individual’s Net Salary by getting the input of gross salary (basic salary + benefits). 
//It calculates the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
// This same code is in line with the html file. Use the html file to run the code.
//This file is just a clear presentation of the source code itself without much "noise"

function getNetSalary() {
            
    var gross_salary = document.form.gross_salary.value;
    //check if input string is a number
    if (isNaN(gross_salary)) {
        alert("input should only include numbers");
        return false;
    }
    //check whether input string is empty
    //the length function here is used to check whether the object in the input is empty
    if (gross_salary.length == "") {
        alert("messagebox is empty");
        return false;
    }

    //convert the input string to float- a decimal value
   var gross = parseFloat(gross_salary);
    // calculate the net salary from the input string.
    //the tax rate and nhifDeduction functions will be expounded on outside this function
    var net_salary = gross-nssfDeduction-(gross*taxRate(gross))-(nhifDeduction(gross));


   //an alert pops up of the calculated net salary
    alert('net salary: '+net_salary)
    return false;
}

//the taxrate function takes the gross salary as a parameter which we passed from the getNetsalary function
function taxRate(gross) {
    //this if check returns the appropriate tax rate
    if (gross <= 24000) {
        // .1 could be written as 0.1 or 10/100
        return .1;
    }
    else if (gross > 24000 && gross <= 32333) {
        return .25;
    }
    else {
        return .3;
    }

}
// since the nssf deduction is a fixed value. we decalre a constant value for it
const nssfDeduction = 400;
function nhifDeduction(gross) {
    //same if check  to return appropriate deduction according to basic the gross salary
    if (gross <= 5999) {
        return 150;
    }
    else if (gross <= 7999) {
        return 300;
    }
    else if (gross <= 11999) {
        return 400;
    }
    else if (gross <= 14999) {
        return 500;
    }
    else if (gross <= 19999) {
        return 600;
    }
    else if (gross <= 24999) {
        return 750;
    }
    else if (gross <= 29999) {
        return 850;
    }
    else if (gross <= 34999) {
        return 900;
    }
    else if (gross <= 39999) {
        return 950;
    }
    else if (gross <= 44999) {
        return 1000;
    }
    else if (gross <= 49999) {
        return 1100;
    }
    else if (gross <= 59999) {
        return 1200;
    }
    else if (gross <= 69999) {
        return 1300;
    }
    else if (gross <= 79999) {
        return 1400;
    }
    else if (gross <= 89999) {
        return 1500;
    }
    else if (gross <= 99999) {
        return 1600;
    }
    else {
        return 1700;
    }

}
