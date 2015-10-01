(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var YourSurvey = window.Survey.YourSurvey = function() {
    this.list = [];

  };

  YourSurvey.prototype.add = function (type, question, selections) {
    args = { question: question, selections: selections }
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

})();
