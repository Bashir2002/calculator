let buffer = "0";
let runningTotal = 0;
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value) ){
    calcSymbol(value);
    }else{
        calcNumber(value);
    }
    screen.innerText = buffer

}
function calcNumber(number){
    if(buffer=== "0"){
        buffer = number
    }else{
        buffer += number
    }
}
function calcSymbol(symbol){
    console.log('calcSymbol')
 switch(symbol){
     case 'c':
     buffer= "0";
     runningTotal= 0;
    break;
    case "=":
        if(previousOperator === 'null'){
        return;
        }
        operator(parseInt(buffer))
        previousOperator = 'null'
        buffer=runningTotal;
        runningTotal = 0; 
    break;
    case '←':
        if (buffer.length === 1){
            buffer = "0"
        }else{
            buffer = buffer.slice(0,buffer.length - 1)
        }
    break;
    case '+':
    case '−':
    case '×':
    case '÷':
        handleMath(symbol);
    break;


 }
}
function handleMath(symbol){
    if (buffer === "0"){
        return;
    }

    const noBuffer = parseInt(buffer);
    if(runningTotal === 0){
        runningTotal = noBuffer;
    }else{
        operator(noBuffer)
    }
    previousOperator = symbol;
    buffer = "0";
}

function operator(noBuffer){
    if(previousOperator === '+'){
        runningTotal+=noBuffer;
    }else if(previousOperator === '−'){
        runningTotal-=noBuffer;
    }else if(previousOperator === '×'){
        runningTotal*=noBuffer;
    }
    else{
        runningTotal /= noBuffer
    }
}

function start(){
    document.querySelector('.calc-buttons').
    addEventListener('click', (even) => {
    buttonClick(even.target.innerText);
    })

}
start()