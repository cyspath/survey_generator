(function () {
  if (window.Survey == undefined) { window.Survey = {}; }
  if (window.Survey.Utils == undefined) { window.Survey.Utils = {}; }

  Survey.Utils.inherits = function (ChildClass, ParentClass) {
    function Surrogate() {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Survey.Utils.renderInputs = function (type, domElement) {
    domElement.empty();
    this.modifyDom(type, domElement)
  };

  Survey.Utils.modifyDom = function (type, domElement) {
    var question = "<input class='question' type='text' placeholder='Enter a Question...'><br><br>"
    domElement.append(question)

    var button = '<br><button class="add-option"> + Add an option</button>'


    switch (type) {
    case "Open Ended":
      //only text field for question is already sufficient
      break;
    case "Drop Down":
      var option = "<input class='option' type='text' placeholder='Drop Down Option'>"
      domElement.append(option, button)
      break;
    case "Radio Button":
      var option = "<input class='option' type='text' placeholder='Radio Button Item'>"
      domElement.append(option, button)
      break;
    case "Check Box":
      var option = "<input class='option' type='text' placeholder='Check Box Item'>"
      domElement.append(option, button)
      break;
    }

  };

})();
