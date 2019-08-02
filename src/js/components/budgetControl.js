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
        }
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

        testing: () => {
            console.log(data);
        }
    };

})();

export default budgetControl;
console.log(budgetControl.testing());
