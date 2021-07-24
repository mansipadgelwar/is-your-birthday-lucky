const form = document.forms[0];

var date = document.querySelector("#date");
var luckyNumber = document.querySelector("#lucky-number");
var btnSubmit = document.querySelector("#btn-submit");

btnSubmit.addEventListener("click",clickHandler);

function clickHandler(e){
    e.preventDefault();
    date = date.value.split("-").join("");
    //console.log(date);
    let sum = 0;
    if(luckyNumber.value <= 0){
        output.innerHTML = "Please enter the number greater the 0."
    }
    for(let i = 0;i < date.length; i++){
        let num = date[i];
        sum = sum + parseInt(num);
    }    
    //console.log(sum);
    if(sum % luckyNumber.value === 0){
        output.innerHTML = "🎉🎉Hurray! Your birthdate is a lucky number.";
    }
    else{
        output.innerHTML = "😥😥Aah! Your birthday is not a lucky number.";
    }
}