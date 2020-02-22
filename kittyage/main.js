const DATE_TYPE = {
    DAYS: 2,
    MONTHS: 1,
    YEARS: 0
};

const ageInput = document.getElementById("age-input");
const metricSelect = document.getElementById("metrics");
const result = document.getElementById("result");
const resultAge = document.getElementById("result-age");

/**
 * Calculates cat's age from human age
 * 
 * Linearly interpolates between 0 and 79 years
 * (which is average of humans maximum age) by current cat's age 
 * and 14 years of maximum average cat's life years
 * 
 * @param {Number} days Age in days
 */
function CALCULATE_AGE(days) {
    const H_MAX = 28854;			// Average of maximum humans age in days
    const C_MAX = 5113;				// Average of cat's maximum age in days
    
 				console.log(days);
 
    return H_MAX * (days / C_MAX);
}

function getFormattedAge(calculation) {
 const milliseconds = calculation * 24 * 60 * 60 * 1000;
 const age = new Date(milliseconds);
 
 const y = age.getYear() - new Date(0).getYear();
 const d = age.getDay();
 const m = age.getMonth();
 
 let years = "";
 let days = "";
 let months = "";
 
 if (y > 0) {
  years = y + ((y != 1)? " years": " year");
 }
 
 if (m > 0) {
  months = m + ((m != 1)? " months": " month");
 }
 
 if (d > 0) {
  days = d + ((d != 1)? " days": " day");
  
  if (d == 1 && months != "") {
   days = "a day";
  }
  
  if (months != "") {
   days = "and " + days;
  }
 }
 
 return years + " " + months + " " + days;
}

function setResult(days) {
    
    if (days == 0) {
        
        result.style.opacity = 0;
        
        return;
    }
    
    const finalAge = CALCULATE_AGE(days);
 				
 				resultAge.innerHTML = getFormattedAge(finalAge);
 
    result.style.opacity = 1;
}

function applyCalculations() {
 let value = ageInput.value;
 
 console.log(metricSelect.selectedIndex);
 
 switch (metricSelect.selectedIndex) {
  case DATE_TYPE.DAYS:
   setResult(value);
   break;
  case DATE_TYPE.MONTHS:
   setResult(value*30);
   break;
  case DATE_TYPE.YEARS:
   setResult(value*365);
   break;
 }
 
}
