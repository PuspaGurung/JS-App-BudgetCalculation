import '../scss/style.scss';
import DOMcontrol from './components/DOMcontrol';
import UIcontrol from './components/UIcontrol';
import budgetControl from './components/budgetControl';
import updateBudget from './components/updateBudget';





//WHOLE APPLICATION CONTROLLER
let systemControl = ((budgetCTRL, uiCTRL) => {

    // CONTROL ADD ITEMS
    let addItemControl = () => {
        let input, newItem;

        // 1. Get the filed input data
        input = UIcontrol.getInput();
        console.log(input.inputType);
        if (input.inputDescription !== "" && !isNaN(input.inputValue) && input.inputValue > 0) {

            // 2. Add the item to the budget controller
            newItem = budgetCTRL.addItem(input.inputType, input.inputDescription, input.inputValue);
            console.log(newItem);

            // 3. Add the item to User interface
            UIcontrol.addItemList(newItem, input.inputType);

            // 4. Clear the fields
            UIcontrol.clearInputFields();

            // 5. Calculate and update the budget
            updateBudget();

            // 6. Display the items in the User Interface
        }
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
    };

    return {
        initialization: () => {
            console.log('the application started');
            eventListenerCTRL();
        }
    }


})(budgetControl, UIcontrol);

systemControl.initialization();
