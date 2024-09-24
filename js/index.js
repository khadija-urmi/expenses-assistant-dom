
// first traditional way 
console.log(" connection")
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function () {
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const course = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);

    const totalExpenses = software + course + internet;
    const balance = income - totalExpenses;
    console.log(balance);

    const totalExpenseElement = document.getElementById("total-expenses");
    totalExpenseElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById("results");
    result.classList.remove('hidden');

});
// add event for saving button

const calculateSavingButton = document.getElementById("calculate-savings");
calculateSavingButton.addEventListener("click", function () {
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const course = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);

    const savings = parseFloat(document.getElementById("savings").value);
    const totalExpenses = software + course + internet;
    const balance = income - totalExpenses;
    const savingAmount = (savings * balance) / 100;

    const savingElement = document.getElementById('savings-amount');
    savingElement.innerText = savingAmount.toFixed(2);

    const remainingBalance = balance - savingAmount;

    // remaining-balance
    const remainingBalanceElement = document.getElementById('remaining-balance');
    remainingBalanceElement.innerText = remainingBalance.toFixed(2);
});