var date = document.querySelector("#date");
var luckyNumber = document.querySelector("#lucky-number");
var btnSubmit = document.querySelector("#btn-submit");
var btnReset = document.querySelector("#btn-reset");
var output = document.querySelector("#output");
var happyOutputImage = document.querySelector("#happy-output-img");
var sadOutputImage = document.querySelector("#sad-output-img");
btnSubmit.addEventListener("click",clickHandler);

function clickHandler(e){
    e.preventDefault();

    happyOutputImage.style.display = "none";
    sadOutputImage.style.display = "none";
    output.innerText = "";

    const lucky = Number(luckyNumber.value);
    const dateInput = date.value.split("-").join("");
    let sum = 0;

    if(date.value === "")
    {
        output.innerText = "Please enter your birth date";
    }
    else
    {
        if(lucky <= 0 || lucky === "")
        {
            output.innerText = "Please enter valid lucky number.";
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
                output.innerText = "🎉🎉Hurray! Your birthdate is a lucky number.";
                happyOutputImage.style.display = "block";
                
            }
            else
            {
             output.innerText = "😥😥Aah! Your birthday is not a lucky number.";
             sadOutputImage.style.display = "block";             
            }
        }
    }
    
}

btnReset.addEventListener("click",function (){
   date.value = "";
   output.innerText = "";
   luckyNumber.value = "";
   happyOutputImage.style.display = "none";
   sadOutputImage.style.display = "none"; 
   
});

