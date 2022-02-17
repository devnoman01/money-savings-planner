// input field will only take number type value
// emply input field will show error message
// negative number will show error message


// input field value processing
function getInputValue(id) {

    const inputFieldValue = document.getElementById(id);
    document.getElementById(id + '-negative').style.display = "none";

    // checking if input field is empty or not
    if((inputFieldValue.value).length == 0){
        document.getElementById(id + '-alert').style.display = "block";
        return;
    }
    else{

        var inputValue = parseFloat(inputFieldValue.value);
        // checking if input field have negative number or not
        if(inputValue>=0){
            
            document.getElementById(id + '-alert').style.display = "none";
            return inputValue;
        }
        else if(inputValue<0){

            document.getElementById(id + '-alert').style.display = "none";
            document.getElementById(id + '-negative').style.display = "block";
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

    document.getElementById('total-expense').innerText = "";
    document.getElementById('balance-amount').innerText = "";

    const income = incomeCalculation();
    const expense = expenseCalculation();

    // checking if expense is less than income
    if(expense <= income){

        // updating expense amount
        document.getElementById('total-expense').innerText = expense;
        document.getElementById('expense-error-alert').style.display = "none";
        const balanceAmount = income - expense;
        // updating balance amount
        document.getElementById('balance-amount').innerText = balanceAmount;
        return balanceAmount;
    }

    // checking if expense is more than income
    else if(expense > income){

        document.getElementById('expense-error-alert').style.display = "block";
    }
}

// saving calculation
function savingCalculation() {

    document.getElementById('saving-amount').innerText = "";
    document.getElementById('remaining-balance').innerText = "";
    document.getElementById('saving-input-alert').style.display = "none";
    document.getElementById('saving-exceed-alert').style.display = "none";

    const savingPercentage = getInputValue('saving-input');
    const savingAmount = (incomeCalculation() / 100) * savingPercentage;
    const balanceAmount = balanceCalculation();
    // checking if saving amount is more than balance amount
    if (savingAmount > balanceAmount) {

        document.getElementById('saving-exceed-alert').style.display = "block";
        
    }
    // checking if saving amount is more than balance
    else if(savingAmount <= balanceAmount){

        document.getElementById('saving-exceed-alert').style.display = "none";
        // updating saving amount
        document.getElementById('saving-amount').innerText = savingAmount;
        // updating remaining balance
        document.getElementById('remaining-balance').innerText = balanceCalculation() - savingAmount;
        return savingAmount;
    }
}

// calculate button eventlistener
document.getElementById('calculate-btn').addEventListener('click', function() {

    balanceCalculation(); 
});

// save button eventlistener
document.getElementById('save-btn').addEventListener('click', function(){

    savingCalculation();
});
