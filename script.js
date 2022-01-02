/**
 * Compute and display the interest a user could get given their input (principal, no of years, rate)
 * 
 * @returns undefined
 */
function compute() {
  const principalElement = document.getElementById('principal');
  var principal = Number(principalElement.value);
  const valid = validateUserInput(principal);
  if (!valid) { 
    alert('Enter a positive number');
    principalElement.focus();
    return;
  }
  var rate = document.getElementById('rate').value;
  var years = document.getElementById('years').value;
  var interest = principal * years * rate / 100;
  var year = new Date().getFullYear() + parseInt(years);
  var resultElement = document.getElementById('result');
  const resultText = `
    If you deposit <mark>${principal}</mark>,<br>
    at an interest rate of <mark>${rate}%</mark>.<br>
    You will receive an amount of <mark>${interest}</mark>,<br>
    in the year <mark>${year}</mark>`;
  resultElement.innerHTML = resultText;
}

/**
 * validate user input and return result of validation (true/false)
 * 
 * can add more validation as needed
 * @param {number} amount 
 * @returns boolean
 */
function validateUserInput(amount) {
  return !amount || amount < 0 ? false : true;
}

/**
 * Display the results of the rate range input as the user change 
 * the value
 * 
 * @returns undefined
 */
function updateRate() {
  var rateVal = document.getElementById('rate').value;
  document.getElementById('rate_val').innerText = rateVal;
}