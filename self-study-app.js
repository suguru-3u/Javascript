var bugetController = (function(){

  var Expense = function(id,description,value){
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id,description,value){
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var allExpenses = [];
  var allIncomes = [];
  var totalExpenses = [];

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp:0,
      inc:0
    }
  }

  return {
    addItem: function(type,des,val){
      var newItem,ID;

      //create new ID
      if (data.allItems[type].length > 0){
        ID = data.allItems[type][data.allItems[type].length -1].id + 1 ;
      } else{
        ID = 0 ;
      }

      //create new item based on 'inc' or 'exp' type
      if(type === 'exp'){
        newItem = new Expense(ID, des,val);
      }else if (type === 'inc'){
        newItem = new Income(ID, des,val);
      }

      //push it into  our data structure
      data.allItems[type].push(newItem);

      //return the new element
      return newItem;

    },
    testing: function(){
      console.log(data);
    }
  };

})();

var UIController = (function(){

    var DOMstring = {
      inputType: '.add__type',
      inputDescription: '.add__description',
      inputValue: '.add__value',
      inputBtn: '.add__btn',
      incomeContainer: '.income__list',
      expensesContainer: '.expenses__list'
    };

    return {
      getinput: function(){
        return{
          type: document.querySelector(DOMstring.inputType).value,
          description: document.querySelector(DOMstring.inputDescription).value,
          value: document.querySelector(DOMstring.inputValue).value
        };
      },
      addListItem: function(obj,type){
        var html,newHtml,element;

        //create HTML string with placeholder text
        if (type === 'inc'){
          element = DOMstring.incomeContainer;
          html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        } else if (type === 'exp'){
          element = DOMstring.expensesContainer;
          html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- 900.00</div><div class="item__percentage">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }

        // Replace the placeholder text with some actual data
        newHtml = html.replace('%id%',obj.id);
        newHtml = newHtml.replace('%description%',obj.description);
        newHtml = newHtml.replace('%value%',obj.value);

        // Inser the HTML into the DOM
        document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
      },
      clearFields: function(){
        var fields,fieldsArr;

        fields = document.querySelectorAll(DOMstring.inputDescription + ',' + DOMstring.inputValue);

        fieldsArr = Array.prototype.slice.call(fields);

        fieldsArr.forEach(function(current,index,array){
          current.value = "";
        });
        fieldsArr[0].focus();
      },
      getDOMstring: function(){
        return DOMstring;
      }
    };
})();

var cntroller = (function(budgetCtrl,UICtrl){

    //click action
    var setupEventListeners = function(){
      //click data get
      var DOM = UICtrl.getDOMstring();
      document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);
      document.addEventListener('keypress',function(event){
        if (event.keyCode === 13 && event.which === 13){
          ctrlAddItem();
        }
      });
    };

    var ctrlAddItem = function(){
      var input,newItem;

      //1 get the filed input data
      input = UICtrl.getinput();
      console.log(input);

      //2 add the item to the budgetcontroller
      newItem =  budgetCtrl.addItem(input.type,input.description,input.value);

      //3 add the item to the UI
      UICtrl.addListItem(newItem, input.type);

      //4 clear the fields
      UICtrl.clearFields();

      //4 caluclate the budget


      //5 display the budget on the UI


    };

    return {
      init: function(){
        console.log('Application has startes.');
        setupEventListeners();
      }
    }


})(bugetController,UIController);

cntroller.init();
