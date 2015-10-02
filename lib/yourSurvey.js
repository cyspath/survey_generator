(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var YourSurvey = window.Survey.YourSurvey = function() {
    this.list = [];

  };

  YourSurvey.prototype.add = function (type, question, selections, id) {
    args = { question: question, selections: selections, id: id }
    var item = this.checkType(type, args);
    this.list.push(item)
  };

  YourSurvey.prototype.checkType = function (type, args) {
    switch (type) {
    case "Open Ended":
      return new Survey.OpenEnded(args)
    case "Drop Down":
      return new Survey.DropDown(args)
    case "Radio Button":
      return new Survey.RadioButton(args)
    case "Check Box":
      return new Survey.CheckBox(args)
    }
  };

  YourSurvey.prototype.generateSurvey = function () {
    this.list.forEach(function(item) {
      item.printQuestion();
      item.printSelections();
    })
  };

})();
