const btnbasket = document.querySelector('#btnbasket')
const bodybasket = document.querySelector('#bodybasket')
const clickersbody = document.querySelector('.clickersbody')

    bodybasket.style.display = 'none'

function opening(){
    btnbasket.onclick = () => {
        bodybasket.style.display = 'flex'
        clickersbody.style.display = 'none'
    }
}
opening();


const btnbasket2 = document.querySelector('#btnbasket2')
function closes(){
    btnbasket2.onclick = ()=> {
        bodybasket.style.display = 'none'
        clickersbody.style.display = 'flex'
    }
}

closes();



