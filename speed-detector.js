//Challenge 2: Speed Detector

function inputSpeed(){
    let carSpeed = prompt ('Enter car speed')
    let counter = 0;
    if (carSpeed <= 70){
        alert ('Ok')
    } else if (carSpeed > 70){
        if (carSpeed >= 140){
            alert ("Licesnse Suspended")
        }
        for (let i = 0; i < (carSpeed % 70); i+=5){
            counter ++
        } alert(`${counter} Points`)
        if (counter > 12){
            alert("LICENSE SUSPENDED!!!!!!")
        }
    }
}
inputSpeed()
