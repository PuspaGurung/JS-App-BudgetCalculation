import '../scss/style.scss';
import DOMcontrol from './components/DOMcontrol';
import UIcontrol from './components/UIcontrol';
import budgetControl from './components/budgetControl';
//import updateBudget from './components/updateBudget';





//WHOLE APPLICATION CONTROLLER
let systemControl = ((budgetCTRL, uiCTRL) => {

    // CONTROL ADD ITEMS
    let addItemControl = () => {
        let input, newItem;

        // 1. Get the filed input data
        input = UIcontrol.getInput();

        if (input.inputDescription !== "" && !isNaN(input.inputValue) && input.inputValue > 0) {

            // 2. Add the item to the budget controller
            newItem = budgetCTRL.addItem(input.inputType, input.inputDescription, input.inputValue);

            // 3. Add the item to User interface
            UIcontrol.addItemList(newItem, input.inputType);

            // 4. Clear the fields
            UIcontrol.clearInputFields();

            // 5. Calculate and update the budget
            updateBudget();

            // 6. Display the items in the User Interface

        }
    };


    //DELETE ITEM
    let ctrlDeleteItem = (event) => {
        let itemID, splitID, type, ID;
        itemID = event.target.parentNode.id;
        console.log(itemID);
        if (itemID) {
            splitID = itemID.split('-');

            console.log(`hello ${splitID}`);
            type = splitID[0];
            ID = parseInt(splitID[1]); // convert "1" to 1 :: string to number


            // 1. Delete the item from data structure
            budgetControl.deleteItem(type, ID);

            // 2. Delete the item from UI
            UIcontrol.deleteList(itemID);

            // 3. Update and show the budget
            updateBudget();
        }

    };

    //UPDATE BUDGET
    let updateBudget = () => {
        // 1. Calculate the budget
        budgetCTRL.calculateBudget();
        // 2. Return the budget
        let budget = budgetCTRL.getBudget();
        // 3. Display the budget in UI
        UIcontrol.displayBudget(budget);
    };


    // CONTROL EVENT LISTENER (MOUSE CLICK, PRESS ENTER KEY)
    let eventListenerCTRL = () => {
        // Mouse click
        DOMcontrol.addButton.addEventListener('click', addItemControl);

        // Press Enter key
        document.addEventListener('keypress', (e) => {
            let enterKeycode = 13; // default keycode of Enter key
            if (e.keyCode === enterKeycode || e.which === enterKeycode) {
                // do the same function as like click addButton 
                addItemControl();
            }
        });
        DOMcontrol.listWrapper.addEventListener('click', ctrlDeleteItem);
    };

    return {
        initialization: () => {
            console.log('the application started');
            eventListenerCTRL();
            UIcontrol.displayBudget({
                budget: 0,
                percentage: 0,
                totIncome: 0,
                totExpense: -1
            });

        }
    }


})(budgetControl, UIcontrol);

systemControl.initialization();
