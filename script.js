let Btnsub = document.getElementById("Convert");
let toFahrenheit = document.getElementById("toFahrenheit");
let toCelsius = document.getElementById("toCelsius");
let rsult = document.getElementById("result");
let textBox = document.getElementById("textBox")

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value)
        temp =  temp * 9 / 5 + 32;
        rsult.textContent = `Result :${temp} °F`
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value)
        temp =  (temp - 32) * (5/9);
        rsult.textContent = "Result "+ temp.toFixed(1) +"°C";
    }
    else{
        rsult.textContent = `Please Select an Unit`
    }
}
Btnsub.addEventListener("click",convert)