//UI CONTROLLER
import DOMcontrol from "./DOMcontrol";
import {
    sign
} from "crypto";
let UIcontrol = (() => {
    let formatNumber = (num, type) => {
        let numSplit, numInt, numDec, sign;
        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split(".");

        numInt = numSplit[0];

        if (numInt.length > 3) {
            numInt = `${numInt.substr(0, numInt.length - 3)}, ${numInt.substr(
        numInt.length - 3,
        3
      )}`;
        }
        numDec = numSplit[1];
        type === "expense" ? (sign = "-") : (sign = "+");
        return `${sign}  ${numInt}.${numDec}`;
    };

    let nodeListForEach = function (list, callback) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
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
                     <i class = "del_icon fa fa-trash" name="trash"> </i>
                   
                </li>`;
            } else if (type === "expense") {
                listContainer = DOMcontrol.expenseListContainer;
                htmlElement = ` 
                <li class="budget__list" id = "expense-%id%">
                    <span class="budget__list-title" >%description%</span>
                  
                    <span class="expense__amount-wrapper">
                        <span class="budget__list-amount"> %amount%</span>
                        <span class="budget__list-percentage"> 25%</span>
                    </span>
                 <i class ="del_icon fa fa-trash" name="trash"> </i>
                   
            </li>`;
            }

            //replace the Placeholder text wit actula items
            newHtmlElement = htmlElement.replace(`%id%`, obj.id);
            newHtmlElement = newHtmlElement.replace(`%description%`, obj.description);
            newHtmlElement = newHtmlElement.replace(
                `%amount%`,
                formatNumber(obj.value, type)
            );

            // Insert the HTML into the DOM

            listContainer.insertAdjacentHTML("beforeend", newHtmlElement);
        },

        // DELETE ITEM
        deleteList: selectedID => {
            let element = document.getElementById(selectedID);
            element.parentElement.removeChild(element);
        },
        clearInputFields: () => {
            let fields, fieldArray;
            fields = DOMcontrol.inputFields;

            fieldArray = Array.prototype.slice.call(fields);

            fieldArray.forEach((curVlue, index, array) => {
                curVlue.value = "";
            });
            fieldArray[0].focus();
        },
        displayBudget: obj => {
            let type;
            obj.budget > 0 ? (type = "income") : (type = "expense");
            DOMcontrol.availableBudget.textContent = formatNumber(obj.budget, type);
            DOMcontrol.totalIncome.textContent = formatNumber(
                obj.totIncome,
                "income"
            );
            DOMcontrol.totalExpense.textContent = formatNumber(
                obj.totExpense,
                "expense"
            );

            if (obj.percentage > 0) {
                DOMcontrol.totalExpensePercentage.textContent = obj.percentage + "%";
            } else {
                DOMcontrol.totalExpensePercentage.textContent = "--";
            }
        },
        displayPercentages: percentages => {
            let perElement;
            perElement = document.querySelectorAll(DOMcontrol.expensePercentageLabel);

            // nodeListForEach = function (list, callback) {
            //     for (let i = 0; i < list.length; i++) {
            //         callback(list[i], i);
            //     }

            // };
            nodeListForEach(perElement, function (cur, index) {
                if (percentages[index] > 0) {
                    cur.textContent = percentages[index] + "%";
                } else {
                    cur.textContent = "--";
                }
            });
        },
        displayDate: () => {
            let monthList, curDate, curYear, curMonth;
            monthList = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];

            curDate = new Date();
            curMonth = monthList[curDate.getMonth()];
            curYear = curDate.getFullYear();
            DOMcontrol.budgetMonth.textContent = `${curMonth}, ${curYear}`;
        },
        changeInputFieldOutline: () => {
            let inputFields;
            inputFields = DOMcontrol.allInputFields;

            nodeListForEach(inputFields, function (cur) {
                cur.classList.toggle("expense-focus");
            });
        }
    };
})();

export default UIcontrol;