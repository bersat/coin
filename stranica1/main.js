const timeout = 5000;
let x = 0;

const display = document.querySelector('#display')
const btn = document.querySelector('#btn')
const bank = document.querySelector('#bank')



function start() {
    btn.onclick = () => bank.textContent = ++x; 
}
start();




    const mexsik = document.querySelector('.mexsik')
const classic = document.querySelector('#classic')
<<<<<<< HEAD



    mexsik.onclick = () => {document.querySelector('#maincoin1').src = "imageredact/мексиканский-coin.png";
    document.querySelector('#maincoin2').src = "imageredact/мексиканский-coin.png";
    };
=======

    mexsik.onclick = () => {document.querySelector('#maincoin1').src = "imageredact/мексиканский-coin.png";
    document.querySelector('#maincoin2').src = "imageredact/мексиканский-coin.png";
}
>>>>>>> 2c6cd89399b3859576b01c32095393f7a7138749

    classic.onclick = () => {
        document.querySelector('#maincoin1').src = "imageredact/классик.png";
    document.querySelector('#maincoin2').src = "imageredact/классик.png";
<<<<<<< HEAD
    } ;
=======
    }
    
>>>>>>> 2c6cd89399b3859576b01c32095393f7a7138749
