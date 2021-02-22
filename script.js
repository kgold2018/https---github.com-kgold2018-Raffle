function validation() {
    if (checkWinnersInput()) {
        if (checkParticipantsInput()) {
            if (checkNoOfParticipants()){
                raffle();
            }
        }
    } 
    
}

function checkWinnersInput() {
    let noWinnersInput = document.getElementById('no-winners').value;
        if (noWinnersInput.length === 0) {
        document.getElementById('error-message').innerText = 'Please specify the number of winners';
    } else {
        return true;
    }
}

function checkParticipantsInput() {
    let participantsInput = document.getElementById('participants').value;
    if (participantsInput.length === 0) {
        document.getElementById('error-message').innerText = 'Please specify the participants';
    } else {
        return true;
    }
}

function checkNoOfParticipants() {
    let noWinnersInput = document.getElementById('no-winners').value;
    let participantsInput = document.getElementById('participants').value;
    let participantsArray = participantsInput.split(",");
    if (participantsArray.length <= parseInt(noWinnersInput)) {
        document.getElementById('error-message').innerText = 'Number of participants should be greater than the number of winners';
    } else {
        return true;
    }
}
 function raffle() {
     let noWinnersInput = parseInt(document.getElementById('no-winners').value);
     let participantsInput = document.getElementById('participants').value;
     let participantsArray = participantsInput.split(",");
     let result = [];

     for (let i = 0; i < noWinnersInput; i++){
         let randomElement = participantsArray[Math.floor(Math.random() * participantsArray.length)];
         result.push(randomElement);
     }
     document.getElementById('winners').innerText = result.join(',');

 }

 

