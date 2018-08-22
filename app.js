document.getElementById('KFA-Eingaben').addEventListener('submit', ergebnis);


function ergebnis(e) {
    // Mann oder Frau
    let gender = document.querySelector('input[name = "gender"]:checked').value;

    // Alle Werte erhalten
    let wert1 = document.getElementById('wert1');
    let wert2 = document.getElementById('wert2');
    let wert3 = document.getElementById('wert3');
    let alter = document.getElementById('alter');
    let kfaErgebnis = document.getElementById('kfaErgebnis');

    alter.value = parseInt(alter);    

    switch (gender.value) {
        case 'Male':
        brust.value = parseInt(wert1);
        bauch.value = parseInt(wert2);
        bein.value = parseInt(wert3);

        summe = brust+bauch+bein;

        return kfa = (4.95 / (1.10938-(0.0008267*summe) + (0.0000016 * Math.pow(summe,2) - (0.0002574 * alter))) -4.5)*100;
            break;
        case 'Female':
        return kfa = (4.95 / (1.0994921-(0.0009929*summe) + (0.0000023 * Math.pow(summe,2) - (0.0001392 * alter))) -4.5)*100;
    }
    console.log(kfa)

    if (isFinite(kfa)) {
        alert('lol')
        kfaErgebnis.value = parseFloat(kfa).toFixed(1);
    }else{
        errorMessage('bitte alle Felder ausfüllen!')
    }
    
    e.preventDefault();
}

function errorMessage(error) {
    // Get heading to insert div here
    const heading = document.querySelector('.heading');

    // Card erstellen
    const card = document.querySelector('.card');

    const errorDIV = document.createElement('div');
    errorDIV.className = ('alert alert-danger');
    errorDIV.appendChild(document.createTextNode(error));

    card.insertBefore(errorDIV, heading);

}


function clearError() {
    document.querySelector('.alert').remove();
}