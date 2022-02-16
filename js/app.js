function getInputValue(id) {
    const inputFieldValue = document.getElementById(id);
    const inputValue = parseInt(inputFieldValue.value);

    if(inputValue < 0){
        document.getElementById(id).style.border = "2px solid red";
        if(id == 'income-input'){
            document.getElementById('income-alert').style.display = "block";
        }
    }
    else{
        return inputValue;
    }

}

function incomeCalculation() {
    const incomeAmount = getInputValue('income-input');
}

function expenseCalc() {
    const income = incomeCalculation();
}

