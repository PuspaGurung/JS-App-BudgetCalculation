let DOMcontrol = {
    container: document.querySelector('.container'),

    budgetMonth: document.querySelector('.available-budget__title-month'),
    availableBudget: document.querySelector('.available-budget__amount'),

    totalIncome: document.querySelector('.budget-summary__income-amount'),
    totalExpense: document.querySelector('.budget-summary__expense-amount'),
    totalExpensePercentage: document.querySelector('.budget-summary__expense-percentage'),

    inputType: document.querySelector('.budget-entry__type'),
    inputDescription: document.querySelector('.budget-entry__description'),
    inputValue: document.querySelector('.budget-entry__value'),
    addButton: document.querySelector('.budget-entry__button'),

    // All input fields :: use for the purpose of clear the fields
    allInputFields: document.querySelectorAll(`.budget-entry__description, .budget-entry__value`),




    incomeListContainer: document.querySelector('.budget__income-list'),
    expenseListContainer: document.querySelector('.budget__expense-list'),



    budgetListTitle: document.querySelector('.budget__list-title'),
    budgetListAmount: document.querySelector('.budget__list-title'),

    // Expense percentage list
    expensePercentageLabel: '.budget__list-percentage',



    // Items list
    listWrapper: document.querySelector('.budget-wrapper'),

    // Delete button
    deleteList: document.querySelector('.del_icon')
}

export default DOMcontrol;
console.log(DOMcontrol.inputDescription);