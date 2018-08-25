document.getElementById('KFA-Eingaben').addEventListener('submit', ergebnis);

function ergebnis(e) {
    // Mann oder Frau
    //let gender = document.querySelector('input[name = "gender"]:checked').value;

    // Alle Werte erhalten
    let wert1 = document.getElementById('wert1');
    let wert2 = document.getElementById('wert2');
    let wert3 = document.getElementById('wert3');
    let alter = document.getElementById('alter');
    let formular = document.getElementById('KFA-Eingaben');

    // Fehlermeldung verschwinden lassen, falls in das Formular geklickt wird.
    formular.addEventListener("click",function () {
        let error = document.querySelector('#errorMsg');
        if (error != null) {
            error.remove();
        }
    })

    let kfaErgebnis = document.getElementById('kfaErgebnis');
        alter = parseInt(alter.value);    

        brust = parseInt(wert1.value);
        bauch = parseInt(wert2.value);
        bein = parseInt(wert3.value);
        summe = brust+bauch+bein;

        kfa = (4.95 / (1.10938-(0.0008267*summe) + (0.0000016 * Math.pow(summe,2) - (0.0002574 * alter))) -4.5)*100;
        //     break;
        // case 'Female':
        // return kfa = (4.95 / (1.0994921-(0.0009929*summe) + (0.0000023 * Math.pow(summe,2) - (0.0001392 * alter))) -4.5)*100;

    if (isFinite(kfa)) {
        kfaErgebnis.value = parseFloat(kfa).toFixed(1);
        // Wurde das Ergebnis berechnet, erscheint ein Button, um das Ergebnis neu zu berechnen
         neuStart();

        let neuberec = document.getElementById('KFA-Eingaben-Neu');
        neuberec.addEventListener('submit', function () {
            let recalc = document.querySelector('.btn');
            recalc.className = ('btn btn-dark btn-block');
            recalc.value = 'Berechnen';

            formReset = document.getElementById('KFA-Eingaben-Neu');
            formReset.reset();
            formReset.id = 'KFA-Eingaben'
            console.log(formReset);
        })

    }else{
        errorMessage('bitte alle Felder ausfüllen!')
    }

    e.preventDefault();
}



// neuberec.addEventListener("click", neuberec);

function neuberec(e) {
    alert('test')
    formReset = document.getElementById('KFA-Eingaben');
    formReset.reset();
    neuberec.value = 'Berechnen';
}


function errorMessage(error) {
    // Get heading to insert div here
    const heading = document.querySelector('.heading');

    // Card erstellen
    const card = document.querySelector('.card');
    const errorDIV = document.createElement('div');
    errorDIV.id = "errorMsg";
    errorDIV.className = ('alert alert-danger');
    errorDIV.appendChild(document.createTextNode(error));
    card.insertBefore(errorDIV, heading);
}


function neuStart() {
    // Get heading to insert div here
    let recalc = document.querySelector('.btn');
    recalc.className = ('neuberechnen btn btn-primary btn-block');
    recalc.value = 'Neuberechnen';

    let neuberec = document.getElementById('KFA-Eingaben');
    neuberec.id = 'KFA-Eingaben-Neu'
}