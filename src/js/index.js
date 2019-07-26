import '../scss/style.scss';
import DOMcontrol from './components/DOMcontrol';
import UIcontrol from './components/UIcontrol';
import budgetControl from './components/budgetControl';





//WHOLE SYSTEM CONTROLLER
let systemControl = ((budgetCTRL, uiCTRL) => {

    // Control add items
    let addItemControl = () => {

        // 1. Get the filed input data
        let input = UIcontrol.getInput();
        console.log(input);
        // 2. Add the item to the budget controller
        // 3. Add the item to User interface
        // 4. Calculate the budget
        // 5. Display the items in the User Interface
    };



    // Mouse click
    DOMcontrol.addButton.addEventListener('click', addItemControl);

    // Handle Enter key press
    document.addEventListener('keypress', (e) => {
        let enterKeycode = 13; // default keycode of Enter key
        if (e.keyCode === enterKeycode || e.which === enterKeycode) {
            // do the same function as like click addButton 
            addItemControl();
        }
    });
})(budgetControl, UIcontrol);


