// Budget controller

let budgetController = (function () {
  let Expense = function (ID, description, value) {
    this.ID = ID;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function (totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  };

  let Income = function (ID, description, value) {
    this.ID = ID;
    this.description = description;
    this.value = value;
  };

  let calculateBudget = function (type) {
    let sum = 0;
    data.allItems[type].forEach(function (cur) {
      sum += cur.value;
    });

    data.totals[type] = sum;
  };

  let data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1,
  };

  return {
    addItem: function (type, des, val) {
      var newItem, ID;
      // create a new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].ID + 1;
      } else {
        ID = 0;
      }
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      data.allItems[type].push(newItem);
      console.log(newItem);
      return newItem;
    },
    calculatePercentages: function () {
      /*
            a=20
            b=10
            c=40
            income = 100
            a=20/100=20%
            b=10/100=10%
            c=40/100=40%
            */

      data.allItems.exp.forEach(function (cur) {
        cur.calcPercentage(data.totals.inc);
      });
    },
    getPercentages: function () {
      var allPerc = data.allItems.exp.map(function (cur) {
        return cur.getPercentage();
      });
      return allPerc;
    },
    calculateBudget: function () {
      // calculate total income and expenses
      calculateBudget("inc");
      calculateBudget("exp");
      // calculate the budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp;
      // calculate the percentage of income that we spent
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percent = -1;
      }
      return {
        budget: data.budget,
        income: data.totals.inc,
        expenses: data.totals.exp,
        percentage: data.percentage,
      };
    },
    deleteItem: function (type, id) {
      let ids = data.allItems[type].map(function (current, index) {
        return current.ID;
      });

      let index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },
    testing: function () {
      return data;
    },
  };
})();

// Ui controller
let UIController = (function () {
  let domString = {
    type: ".add__type",
    description: ".add__description",
    value: ".add__value",
    addBtn: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
    budgetValue: ".budget__value",
    budgetIncome: ".budget__income--value",
    budgetExpenses: ".budget__expenses--value",
    budgetPercentage: ".budget__expenses--percentage",
    container: ".container",
    expensesPercLabel: ".item__percentage",
    dateLabel: ".budget__title--month",
    inputBtn: ".add__type",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(domString.type).value,
        description: document.querySelector(domString.description).value,
        value: parseFloat(document.querySelector(domString.value).value),
      };
    },
    domString: domString,

    addListItem: function (obj, type) {
      var html, newHtml, element;
      // create HTML string with placeholder text
      if (type === "inc") {
        element = domString.incomeContainer;

        console.log(obj.ID);
        html = `<div class="item clearfix" id="inc-${obj.ID}"> <div class="item__description">${obj.description}</div><div class="right clearfix"><div class="item__value">${obj.value}</div><div class="item__delete"><button class="item__delete--btn"><ion-icon name="close-circle-outline"></ion-icon></button></div></div></div>`;
      } else if (type === "exp") {
        element = domString.expensesContainer;

        html = `<div class="item clearfix" id="exp-${obj.ID}"><div class="item__description">${obj.description}</div><div class="right clearfix"><div class="item__value">${obj.value}</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><ion-icon name="close-circle-outline"></ion-icon></button></div></div></div>`;
      }

      // Replace the placeholder text with some actual data
      newHtml = html;
      // Replace the placeholder text with some actual data.allItems[type]

      //insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
    },
    deleteListItem: function (id) {
      let elem = document.getElementById(id);
      elem.parentNode.removeChild(elem);
    },
    clearFields: function () {
      let inputFields;
      inputFields = document.querySelectorAll(
        `${domString.description} , ${domString.value}`
      );
      newArray = Array.prototype.slice.call(inputFields);

      newArray.forEach(function (current, index, value) {
        current.value = "";
      });

      newArray[0].focus();
    },
    displayBudget: function (data) {
      const { income, expenses, budget, percentage } = data;

      console.log(income);
      document.querySelector(domString.budgetIncome).textContent = income;
      document.querySelector(domString.budgetExpenses).textContent = expenses;
      document.querySelector(domString.budgetValue).textContent =
        " + " + budget;
      document.querySelector(domString.budgetPercentage).textContent =
        percentage + "%";
    },
    displayPercentages: function (percentages) {
      var fields = document.querySelectorAll(domString.expensesPercLabel);

      var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
          callback(list[i], i);
        }
      };

      nodeListForEach(fields, function (current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + "%";
        } else {
          current.textContent = "---";
        }
      });
    },

    displayMonth: function () {
      var now, months, month, year;

      //var christmas = new Date(2016, 11, 25);
      now = new Date();
      year = now.getFullYear();
      month = now.getMonth();
      months = [
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
        "December",
      ];

      document.querySelector(domString.dateLabel).textContent =
        months[month] + " , " + year;
    },

    changedType: function () {
      let fields = document.querySelectorAll(
        `${domString.type},${domString.description},${domString.value}`
      );
      var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
          callback(list[i], i);
        }
      };

      nodeListForEach(fields, function (current, index) {
        current.classList.toggle("red-focus");
      });
      document.querySelector(domString.addBtn).classList.toggle("red");
    },
    formatNumber: function (num, type) {
      let numSplit, int;
      num = Math.abs(num);
      num = num.toFixed(2);
      numSplit = num.split(".");
      int = numSplit[0];
      if (int.length > 3) {
        int =
          int.substr(0, int.length - 3) +
          "," +
          int.substr(int.length - 3, int.length);
      }
    },
  };
})();

// App controller
let controller = (function (budgetCtrl, UICtrl) {
  let DOM = UICtrl.domString;
  let setupEventListeners = function () {
    document.querySelector(DOM.addBtn).addEventListener("click", addItem);

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        addItem();
      }
    });
    document
      .querySelector(DOM.container)
      .addEventListener("click", ctrlDeleteItem);
    document
      .querySelector(DOM.inputBtn)
      .addEventListener("change", UICtrl.changedType);
  };

  let updateBudget = function () {
    // 4. Calculate the budget
    let data = budgetCtrl.calculateBudget();
    // 5. Display the budget on the Ui
    UICtrl.displayBudget(data);
  };
  var updatePercentages = function () {
    // 1. Calculate percentages
    budgetCtrl.calculatePercentages();

    // 2. Read percentages from the budget controller
    var percentages = budgetCtrl.getPercentages();

    // 3. Update the UI with the new percentages
    UICtrl.displayPercentages(percentages);
  };
  let ctrlDeleteItem = function (event) {
    let itemId, splitID, type, ID;
    itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
    if (itemId) {
      splitID = itemId.split("-");
      type = splitID[0];
      ID = splitID[1];
      // delete item from data
      budgetCtrl.deleteItem(type, parseInt(ID));
      //updating the budget ui
      console.log(itemId);
      UICtrl.deleteListItem(itemId);
      updateBudget();

      // 6. Calculate and update percentages
      updatePercentages();
    }
  };

  let addItem = function () {
    let input, newItem;
    // 1. Get the input value

    input = UICtrl.getInput();
    // 2. add the item to the budget controller
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      const { type, description, value } = input;
      newItem = budgetCtrl.addItem(type, description, value);
      UICtrl.addListItem(newItem, type);

      //3 . clear input fields
      UICtrl.clearFields();
      // 4. Calculate the budget
      updateBudget();
      // 6. Calculate and update percentages
      updatePercentages();
    }
  };

  return {
    init: function () {
      console.log("Application has Started");
      setupEventListeners();
      UICtrl.displayMonth();
    },
  };
})(budgetController, UIController);

controller.init();
