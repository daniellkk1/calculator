const result = document.getElementById('resultado');

function insert(num){
    let number = result.innerHTML;
    result.innerHTML = number + num;
}

function back(){
    let text = result.innerHTML;
    result.innerHTML = text.substring(0, text.length-1);
}

function cleanOne(){
    result.innerHTML = '';
}

function equal(){
    let equacao = result.innerHTML;
    result.innerHTML = eval(equacao);
        
}