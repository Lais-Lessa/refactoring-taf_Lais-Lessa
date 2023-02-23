
function testHeight (gender, height){
    if(gender == "male" && height >= 1.70){
        return true;
    } else if (gender == "female" && height >= 1.60){
        return true;
    } else{
        return false;
    }     
}

function testBar (gender, barReps, barSeconds){
    if(gender == "male" && (barReps >= 6 || barSeconds <=15)){
        return true;
    } else if (gender == "female" && (barReps >= 5 || barSeconds <=12)){
        return true;
    } else {
        return false;
    }
}

function testAbs (abs){
    if(abs >= 41){
        return true;
} else {
    return false;
}
}

function testRun (gender, runDistance, runTime){
    if((gender == "male" && (runDistance >= 3000 && runTime <= 720)) || (runDistance >= 5000 && runTime <= 1200)){
        return true;
    } else if(gender == "female" && (runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)){
        return true;
    } else {
        return false;
    }
}
    
function testSwin (swimDistance, swimTime, diveTime){
    if((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30){
        return true;
    } else {
        return false;
    }
}
   

function areCandidateResultsValid(gender, height, barReps, barSeconds,abs, runDistance,runTime,swimDistance, swimTime, diveTime) {
   
   if(testHeight(gender, height) && testBar(gender, barReps, barSeconds) &&  testAbs(abs) && testRun(gender, runDistance, runTime) && testSwin( swimDistance, swimTime, diveTime)){
    return true;
   } else {
    return false;
   }
}


const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);

function showMessage (message){
    let str = message.toString();
    console.log(str.toUpperCase());

}
showMessage(areCandidateValid);
