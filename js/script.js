
//INICIANDO SCRIPT
    console.log('Waiting for a number');

//ADD FUNCIONALIDADE BOTÃO - CALCULAR E REFRESH
    const generate = document.getElementById('generate')
    const clear = document.querySelector('#clear')
    generate.addEventListener('click', calculate)
    clear.addEventListener('click', refresh)
    

function calculate(){
//DEFININDO REGEX PARA NUMBER
    let numberInput = (document.getElementById('numberInput').value)
    const regexExp = /[0-9]/g

    if (regexExp.test(numberInput)){ 
//REALIZANDO IDENTIFICAÇÃO DOS CAMPOS E DEFININDO O LOOP
        let allresults = document.getElementById('allresults')
        let result = document.getElementById('results')

        for (i=1; i<=10; i++){
            result.innerHTML="RESULTS"
            let addresult = document.createElement('option')

//ADICIONANDO OPTIONS A CADA FOR REALIZADO NA SECTION            
            addresult.appendChild(document.createTextNode(`${i} x ${numberInput} = ${(i*numberInput)}`))
            allresults.appendChild(addresult)
            console.log(addresult);  }} 
    else {
        alert('OPS, check the fields and try again 👍')}
}

//FUNÇÃO DE REFRESH PARA LIMPAR CAMPOS
function refresh (){
    location.reload(true);
}