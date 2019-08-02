//UI CONTROLLER
import DOMcontrol from './DOMcontrol';
let UIcontrol = (() => {
    return {
        getInput: () => {
            return {
                inputType: DOMcontrol.inputType.value,
                inputDescription: DOMcontrol.inputDescription.value,
                inputValue: DOMcontrol.inputValue.value
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
                <li class="budget__list">
                    <span class="budget__list-title" id = "expense-%id%">%description%</span>
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

        }
    }

})();

export default UIcontrol;