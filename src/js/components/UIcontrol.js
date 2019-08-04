//UI CONTROLLER
import DOMcontrol from './DOMcontrol';
import { sign } from 'crypto';
let UIcontrol = (() => {

    let formatNumber = (num, type) => {
        let numSplit, numInt, numDec;
        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        numInt = numSplit[0];

        if (numInt.length > 3) {
            numInt = `${numInt.substr(0, numInt.length - 3)}, ${numInt.substr(numInt.length - 3, 3)}`;
        }
        numDec = numSplit[1];

        return (type === 'expense' ? '-' : '+') + ' ' + numInt + '.' + numDec;
    };

    return {
        getInput: () => {



            return {
                inputType: DOMcontrol.inputType.value,
                inputDescription: DOMcontrol.inputDescription.value,
                inputValue: parseFloat(DOMcontrol.inputValue.value)
            };
        },
        addItemList: (obj, type) => {
            let htmlElement, newHtmlElement, listContainer;
            // create HTML elements with the placeholder text items 
            if (type === "income") {
                listContainer = DOMcontrol.incomeListContainer;

                htmlElement = `
                <li class="budget__list" id="income-%id%">
                    <span class="budget__list-title">%description%</span>
                    <span class="budget__list-amount"> %amount%</span>
                     <ion-icon class="del_icon" name="trash"></ion-icon>
                </li>`

            }
            else if (type === "expense") {
                listContainer = DOMcontrol.expenseListContainer;
                htmlElement = ` 
                <li class="budget__list" id = "expense-%id%">
                    <span class="budget__list-title" >%description%</span>
                    <span class="expense__amount-wrapper">
                        <span class="budget__list-amount"> %amount%</span>
                        <span class="budget__list-percentage"> 25%</span>
                    </span>
                <ion-icon class="del_icon" name="trash"></ion-icon>
            </li>`
            }

            //replace the Placeholder text wit actula items
            newHtmlElement = htmlElement.replace(`%id%`, obj.id)
            newHtmlElement = newHtmlElement.replace(`%description%`, obj.description);
            newHtmlElement = newHtmlElement.replace(`%amount%`, formatNumber(obj.value, type));

            // Insert the HTML into the DOM


            listContainer.insertAdjacentHTML('beforeend', newHtmlElement);


        },

        // DELETE ITEM
        deleteList: (selectedID) => {
            let element = document.getElementById(selectedID);
            element.parentNode.removeChild(element);

        },
        clearInputFields: () => {
            let fields, fieldArray;
            fields = DOMcontrol.allInputFields;

            fieldArray = Array.prototype.slice.call(fields);

            fieldArray.forEach((curVlue, index, array) => {
                curVlue.value = "";

            });
            fieldArray[0].focus();
        },
        displayBudget: (obj) => {
            let type;
            obj.budget > 0 ? type = 'income' : type = 'expense';
            DOMcontrol.availableBudget.textContent = formatNumber(obj.budget, type);
            DOMcontrol.totalIncome.textContent = formatNumber(obj.totIncome, 'income');
            DOMcontrol.totalExpense.textContent = formatNumber(obj.totExpense, 'expense');


            if (obj.percentage > 0) {
                DOMcontrol.totalExpensePercentage.textContent = obj.percentage + '%';
            }
            else {
                DOMcontrol.totalExpensePercentage.textContent = '--';
            }

        },
        displayPercentages: (percentages) => {
            let perElement, nodeListForEach;
            perElement = document.querySelectorAll(DOMcontrol.expensePercentageLabel);
            console.log(perElement);

            nodeListForEach = function (list, callback) {
                for (let i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }

            };
            nodeListForEach(perElement, function (cur, index) {
                if (percentages[index] > 0) {
                    cur.textContent = percentages[index] + '%';
                }
                else {
                    cur.textContent = '--';
                }
            });

        }
    }

})();

export default UIcontrol;
