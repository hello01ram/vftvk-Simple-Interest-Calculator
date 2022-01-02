function compute()
{
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rates').value;
    var year = document.getElementById('year').value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
   
}

function updateRate() {
    var rateVal = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rateVal;
}