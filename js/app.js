const inputNumber = document.querySelector('#getNumber')
const btnResult = document.querySelector('#setResult')
const btnClear = document.querySelector('#clear')
const showResult = document.querySelector('[data-show-result]')

const setSum = (number) => {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

btnResult.addEventListener("click", ()=>{
  
    let number = parseInt(inputNumber.value)
    if (Number.isInteger(number) && number > 0) {
        showResult.innerHTML=`
        <div class="result">
                    <spam>${setSum(number)}</spam>
        </div>`
    }
    else{
        showResult.innerHTML=`
        <spam class="error-text">Por favor, o número escolhido deve ser um número inteiro e positivo!</spam>
        `
    }
    btnResult.classList.remove('show')
    btnResult.classList.add('hidden')

    btnClear.classList.remove('hidden')
    btnClear.classList.add('show')
})
btnClear.addEventListener('click',()=>{
    inputNumber.value = '',

    btnClear.classList.remove('show')
    btnClear.classList.add('hidden')

    btnResult.classList.remove('hidden')
    btnResult.classList.add('show')

    showResult.innerHTML=`
    <spam class="error-text"></spam>
    `
})