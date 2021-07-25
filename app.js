var date = document.querySelector("#date");
var luckyNumber = document.querySelector("#lucky-number");
var btnSubmit = document.querySelector("#btn-submit");
var btnReset = document.querySelector("#btn-reset");
btnSubmit.addEventListener("click",clickHandler);

function clickHandler(e){
    e.preventDefault();
    const lucky = Number(luckyNumber.value);
    const dateInput = date.value.split("-").join("");
    let sum = 0;

    if(date.value === "")
    {
        output.innerHTML = "Please enter your birth date";
    }
    else
    {
        if(lucky <= 0 || lucky === "")
        {
            output.innerHTML = "Please enter valid lucky number.";
        }
        else
        {
            for(let i = 0;i < dateInput.length; i++)
            {
                let num = dateInput[i];
                sum = sum + parseInt(num);
            }      
            if(sum % lucky === 0)
            {
                output.innerHTML = "🎉🎉Hurray! Your birthdate is a lucky number.";
            }
            else
            {
             output.innerHTML = "😥😥Aah! Your birthday is not a lucky number.";
            }
        }
    }
    
}

btnReset.addEventListener("click",function (){
   date.value = "";
   output.innerText = "";
   luckyNumber.value = ""; 
});

