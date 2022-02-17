function getInputValue(id) {
    const inputFieldValue = document.getElementById(id);
    var inputValue = parseInt(inputFieldValue.value);
    return inputValue;

    // document.getElementById(id).style.border = "2px solid red";
}

function incomeCalculation() {
    const incomeAmount = getInputValue('income-input');
    return incomeAmount;
}

function expenseCalculation() {
    const foodExpense = getInputValue('food-expense');
    const rentxpense = getInputValue('rent-expense');
    const clothExpense = getInputValue('cloth-expense');
    const totalExpense = foodExpense + rentxpense + clothExpense;
    document.getElementById('total-expense').innerText = totalExpense;
    return totalExpense;
}

function balanceCalculation() {
    const income = incomeCalculation();
    const expense = expenseCalculation();

    if(expense > income){
        document.getElementById('expense-alert').style.display = "block";
    }
    else{
        document.getElementById('expense-alert').style.display = "none";
        const balanceAmount = incomeCalculation() - expenseCalculation();
        document.getElementById('balance-amount').innerText = balanceAmount;
        return balanceAmount;
    }
}



function calculateBalance() {
    
    expenseCalculation(); 
    balanceCalculation(); 
    
}

