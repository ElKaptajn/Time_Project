// DOM TAGS
const xBirthDayWrapper = document.getElementById("result-wrapper");
const result = document.createElement("h1");

// DATE ARRAYS
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthWritten = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function calculateDate(){

    const birthDay = new Date(document.getElementById("userInputBirthDay").value);
    const name = document.getElementById("userInputName").value;
    const ageToFind = Number(document.getElementById("userInputAge").value);

    const xBirthDay = calculateYearWhenTurnX(birthDay, ageToFind);

    //Variable for storing the number ending 
    let numberEnding = "";

    //Switch statement for finding the correct number ending
   switch (xBirthDay.getDate()) {
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

   //Contructing the result string to be displayed
    result.innerText =
        name + " will be " + ageToFind + " years old on " + 
        weekday[xBirthDay.getDay()] + " the " + xBirthDay.getDate() + "" + numberEnding + " of " +
        monthWritten[xBirthDay.getMonth()] + " " + xBirthDay.getFullYear();

   //If statement for checking if the result is already on the page
    if (xBirthDayWrapper.hasChildNodes()) {
        xBirthDayWrapper.removeChild(xBirthDayWrapper.firstChild);
        xBirthDayWrapper.appendChild(result);
      } else {
        xBirthDayWrapper.appendChild(result);
      }
      event.preventDefault();

};

function calculateYearWhenTurnX(dateOfBirth, ageToFind) {
    event.preventDefault();
    const yearWhenTurnX = (dateOfBirth.getFullYear() + ageToFind);
    return new Date(yearWhenTurnX, dateOfBirth.getMonth(), dateOfBirth.getDate());
  }
