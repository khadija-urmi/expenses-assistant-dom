
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


    const totalExpenseElement = document.getElementById("total-expenses");
    totalExpenseElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById("results");
    result.classList.remove('hidden');

    //adding expense history

    const historyItem = document.createElement("div");
    historyItem.className = "bg-white p-3 rounded-md border-1-2 border-indigo";
    historyItem.innerHTML = `
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500">Income : $${income.toFixed(2)}
    <p class="text-xs text-gray-500">Expenses : $${totalExpenses.toFixed(2)}
    <p class="text-xs text-gray-500">Balance : $${balance.toFixed(2)}
    `
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    document.getElementById("history-section").classList.add("hidden");

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

// history tab functionality

const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function () {
    historyTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    historyTab.classList.remove("text-gray-600");

    assistantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    assistantTab.classList.add("text-gray-600");

    // remove expense form
    document.getElementById("expense-form").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");

})
// assistant tab functionality

assistantTab.addEventListener('click', function () {
    assistantTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    assistantTab.classList.remove("text-gray-600");

    historyTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    historyTab.classList.add("text-gray-600");

    // add expense form & remove  history-section
    document.getElementById("history-section").classList.add("hidden");
    document.getElementById("expense-form").classList.remove("hidden");

})

