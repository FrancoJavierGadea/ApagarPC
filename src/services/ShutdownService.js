
const NodeConsole = require('console');
const { exec } = require('child_process');



const cancel = () => {

    exec(`shutdown /a`, (error, out) => {

        if(error){

            NodeConsole.log('Ocurrio un Error : O', error);
        }
        else {

            NodeConsole.log('El Apagado se ha cancelado : )');
        }
    });
}

const shutdownIn = (seconds = 3600) => {

    exec(`shutdown /s /f /t ${seconds}`, (error, out) => {

        if(error){

            NodeConsole.log('Ocurrio un Error : O', error);
        }
        else {

            NodeConsole.log('El sistema se apagara en ' + seconds + ' segundos');
        }
    });
}



module.exports = { shutdownIn, cancel }