// input field will only take number type value
// emply input field will show error message
// negative number will show error message


// input field value processing
function getInputValue(id) {
    const inputFieldValue = document.getElementById(id);

    if((inputFieldValue.value).length == 0){
        document.getElementById(id + '-alert').style.display = "block";
        return;
    }
    else{
        var inputValue = parseFloat(inputFieldValue.value);

        if(inputValue>=0){
            document.getElementById(id + '-alert').style.display = "none";
            return inputValue;
        }
        else{
            document.getElementById(id + '-alert').style.display = "block";
            document.getElementById(id + '-alert').innerText = "Negative input not supported";
            return;
        }
    }
}

// income calculation
function incomeCalculation() {
    const incomeAmount = getInputValue('income-input');
    return incomeAmount;
}

// total expense calculation
function expenseCalculation() {
    const foodExpense = getInputValue('food-expense');
    const rentxpense = getInputValue('rent-expense');
    const clothExpense = getInputValue('cloth-expense');
    const totalExpense = foodExpense + rentxpense + clothExpense;
    return totalExpense;
}

// balance calculation
function balanceCalculation() {
    console.log("balanceCalc function called");
    const income = incomeCalculation();
    const expense = expenseCalculation();

    // checking if expense is greater than income
    if(expense <= income){
        document.getElementById('total-expense').innerText = expense;
        document.getElementById('expense-error-alert').style.display = "none";
        const balanceAmount = income - expense;
        document.getElementById('balance-amount').innerText = balanceAmount;
        return balanceAmount;
    }
    else if(expense > income){
        document.getElementById('expense-error-alert').style.display = "block";
    }
}

// saving calculation
function savingCalculation() {
    const savingPercentage = getInputValue('saving-input');
    const savingAmount = (incomeCalculation() / 100) * savingPercentage;
    const balanceAmount = balanceCalculation();
    if (savingAmount > balanceAmount) {
        document.getElementById('saving-exceed-alert').style.display = "block";
    }
    else if(savingAmount < balanceAmount){
        document.getElementById('saving-exceed-alert').style.display = "none";
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('remaining-balance').innerText = balanceCalculation() - savingAmount;
        return savingAmount;
    }

}
// calculate button function
function calculateBalance() {
    balanceCalculation(); 
}

// save button function
function calculateSaving() {
    savingCalculation();
}

