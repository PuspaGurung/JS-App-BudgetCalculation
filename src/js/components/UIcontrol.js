//UI CONTROLLER
import DOMcontrol from './DOMcontrol';
let UIcontrol = (() => {
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
            newHtmlElement = newHtmlElement.replace(`%amount%`, obj.value);

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

            DOMcontrol.availableBudget.textContent = obj.budget;
            DOMcontrol.totalIncome.textContent = obj.totIncome;
            DOMcontrol.totalExpense.textContent = obj.totExpense;


            if (obj.percentage > 0) {
                DOMcontrol.totalExpensePercentage.textContent = obj.percentage + '%';
            }
            else {
                DOMcontrol.totalExpensePercentage.textContent = '--';
            }

        }
    }

})();

export default UIcontrol;