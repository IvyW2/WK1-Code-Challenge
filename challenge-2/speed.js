//Challenge 2: Speed Detector

 //This is a function that is called Speed detector that have the various conditions that must be met for the input to meet the valid conditions according to the instructions needed for the challenge.      

function inputSpeed(){
    let carSpeed = prompt ('Enter car speed')
    let counter = 0;
    if (carSpeed < 0){
        alert ('Kindly enter value above 0')
    }
    else if (carSpeed <= 70){
        alert ('Ok')
    //If the above condition is truthy then the an 'OK' alert will pop up if otherwise then the conditions statements will be executed.
    // if the speed input is greater or equal to 140 then an alert "License Suspended" will pop up otherwise the condition below will be executed. 
    //Points will be generated depending on the speed input above 70.
    } else if (carSpeed > 70){
        if (carSpeed >= 135){
            alert ("License Suspended")
        }
        else if (carSpeed <135){
        for (let i = 0; i < (carSpeed % 70); i+=5){
            counter ++
        } alert(`${counter} Points`)
        if (counter > 12){
            alert("LICENSE SUSPENDED!!!!!!")
        }
    }
    }else {
        alert ('Kindly give a valid value')
    }
}
inputSpeed()
window.location.reload();