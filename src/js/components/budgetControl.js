//BUDGET CONTROLLER
import DOMcontrol from './DOMcontrol';
import UIcontrol from './UIcontrol';

let budgetControl = (() => {
    let Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let data = {
        allItems: {
            expense: [],
            income: []
        },
        totals: {
            expense: 0,
            income: 0
        },
        budget: 0,
        percentage: -1
    };
    let calcualteTotal = (type) => {
        let sum = 0;
        data.allItems[type].forEach(curElement => {
            sum = sum + curElement.value;

        });
        data.totals[type] = sum;

    };
    return {
        addItem: (type, des, val) => {

            let ID, newItem;
            // generate ID for new item

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

            }
            else {
                ID = 0;
            }

            // create new item based on 'inc' and 'exp'
            if (type === 'expense') {
                newItem = new Expense(ID, des, val);
            }
            else if (type === 'income') {
                newItem = new Income(ID, des, val);
            }

            // Push new item to array
            data.allItems[type].push(newItem);

            // return 
            return newItem;
        },

        calculateBudget: () => {
            // 1. Calculate total income and expenses
            calcualteTotal('income');
            calcualteTotal('expense');

            // 2. Calculate the budget :: income-expenses
            data.budget = data.totals.income - data.totals.expense;


            // 3. Calcualte the percentage of income that we  spent
            if (data.totals.income > 0) {
                data.percentage = Math.round((data.totals.expense / data.totals.income) * 100);
            }
            else {
                data.percentage = -1;
            }

        },
        getBudget: () => {
            return {
                budget: data.budget,
                percentage: data.percentage,
                totIncome: data.totals.income,
                totExpense: data.totals.expense
            }

        },

        deleteItem: (type, id) => {
            let allID, index;
            allID = data.allItems[type].map((cur) => {
                return cur.id;
            });
            index = allID.indexOf(id);
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }

        },

        testing: () => {
            console.log(data.allItems);

        }
    };
})();

export default budgetControl;
budgetControl.testing();

