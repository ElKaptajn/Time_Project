const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthWritten = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const hundredthBirthdayWrapper = document.getElementById("result-wrapper");

function calculateDate(){

    const birthDay = new Date(document.getElementById("userInputBirthDay").value);
    const name = document.getElementById("userInputName").value;

    const hundredthBirthdayYear = birthDay.getFullYear() + 100;
    const hundredthBirthday = new Date(hundredthBirthdayYear, birthDay.getMonth(), birthDay.getDate());

    const hundredthBirthdayDate = hundredthBirthday.getDay();
    let numberEnding = "";

   switch (hundredthBirthdayDate) {
    case 1: 
        numberEnding = "st";
        break;
    case 2:
        numberEnding = "nd";
        break;
    case 3: 
        numberEnding = "rd";
        break;
    default:
        numberEnding = "th";
   }

    const result = document.createElement("h1");
    result.innerText =
        name + " will be 100 years old on " + 
        weekday[hundredthBirthday.getDay()] + " the " + hundredthBirthday.getDay() + numberEnding + " of " +
        monthWritten[hundredthBirthday.getMonth()] + " " + hundredthBirthday.getFullYear();

    if (hundredthBirthdayWrapper.hasChildNodes()) {
        hundredthBirthdayWrapper.removeChild(hundredthBirthdayWrapper.firstChild);
        hundredthBirthdayWrapper.appendChild(result);
      } else {
        hundredthBirthdayWrapper.appendChild(result);
      }

    event.preventDefault();
};
