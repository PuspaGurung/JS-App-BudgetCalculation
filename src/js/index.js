import '../scss/style.scss';
import DOMcontrol from './components/DOMcontrol';
import UIcontrol from './components/UIcontrol';
import budgetControl from './components/budgetControl';





//WHOLE APPLICATION CONTROLLER
let systemControl = ((budgetCTRL, uiCTRL) => {

    // CONTROL ADD ITEMS
    let addItemControl = () => {
        let input, newItem;

        // 1. Get the filed input data
        input = UIcontrol.getInput();
        console.log(input.inputType);

        // 2. Add the item to the budget controller
        newItem = budgetCTRL.addItem(input.inputType, input.inputDescription, input.inputValue);


        // 3. Add the item to User interface
        // 4. Calculate the budget
        // 5. Display the items in the User Interface
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
