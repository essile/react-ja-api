const tuoteurl = "http://localhost:51327/api/tuote";

export function haeLista(callback) {
    console.log("Noudetaan json-filea:");
    fetch(tuoteurl, {
        headers: { 'Content-Type': 'application/json' },
    })
        .then(function (vastaus) {
            if (!vastaus.ok) {
                const errorviesti = {
                    status: vastaus.status,
                    statusText: vastaus.statusText,
                    viesti: "Listan haku"
                };
                throw errorviesti;
            }
            console.log(vastaus);
            return vastaus.json();
        })
        .then(function (lista) {
            callback(lista)
        });
}

export function haeHaetutTuotteet(tuote, callback) {
    fetch(tuoteurl + "?hakuehto=" + tuote.lomake, {
        headers: { 'Content-Type': 'application/json' },
    })
        .then(function (vastaus) {
            if (!vastaus.ok) {
                const errorviesti = {
                    status: vastaus.status,
                    statusText: vastaus.statusText,
                    viesti: "Listan haku"
                };
                throw errorviesti;
            }
            console.log("Haetaan json-filesta:");
            console.log(vastaus);
            return vastaus.json();
        })
        .then(function (hakutulos) {
            callback(hakutulos)
        });
}