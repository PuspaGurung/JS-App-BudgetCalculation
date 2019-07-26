//UI CONTROLLER
import DOMcontrol from './DOMcontrol';
let UIcontrol = (() => {
    return {
        getInput: () => {
            return {
                inputType: DOMcontrol.inputType.value,
                inputDescription: DOMcontrol.inputDescription.value,
                inputValue: DOMcontrol.inputValue.value
            }
        }
    }
})();

export default UIcontrol;