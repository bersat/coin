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

    mexsik.onclick = () => {document.querySelector('#maincoin1').src = "imageredact/мексиканский-coin.png";
    document.querySelector('#maincoin2').src = "imageredact/мексиканский-coin.png";
}

    classic.onclick = () => {
        document.querySelector('#maincoin1').src = "imageredact/классик.png";
    document.querySelector('#maincoin2').src = "imageredact/классик.png";
    }
    
