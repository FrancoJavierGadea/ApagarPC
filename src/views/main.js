
const {shutdownIn, cancel} = require('../services/ShutdownService');

const $Buttons = document.getElementById('Buttons');

[...$Buttons.children].forEach(button => {

    button.addEventListener('click', ({target}) => {

        shutdownIn(Number(target.value) * 3600);
    });
});


const $Cancel = document.getElementById('cancel');

$Cancel.addEventListener('click', () => {

    cancel();
});


const $Time = document.getElementById('time');

const $ShutdownAt = document.getElementById('shutdownAt');

$ShutdownAt.addEventListener('click', () => {

    const [hh, mm] = $Time.value.split(':').map(v => Number(v));

    shutdownIn(hh * 3600 + mm * 60);
});

