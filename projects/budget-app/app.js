// Budget Controller
var budgetController = (function() {

    //some code

})();

// UI Controller
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    return {
        getInput: function() {
            return {
            type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
            };
            
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListener = function () {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }   
        });
    };
    
    

    var ctrlAddItem = function() {
        //1. Get the filled input data
        var input = UICtrl.getInput();
        console.log(input);

        //2. Add the item to the budget controller

        //3. Add the item to the UI

        //4. Calculate the budget

        //5. Display the budget on the UI
      
    };

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListener();
        }
    };

})(budgetController, UIController);

controller.init();
