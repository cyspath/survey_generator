(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var DropDown = window.Survey.DropDown = function(args) {

    Survey.SurveyObject.call(this, args)
  };

  Survey.Utils.inherits(DropDown, Survey.SurveyObject);

  DropDown.prototype.printSelections = function () {
    var string = "<select name='" + this.surveyId + "'></select>"
    var select = $(string)
    $('.survey-items-container').append(select)
    $('.survey-items-container').append("<br><br>")

    this.selections.forEach(function(selection) {
      if (selection != "") {
        var option = "<option name='" + this.surveyId + "' value='" + selection + "'>" + selection + "</option>"
        select.append(option);
      }
    }.bind(this))
  };

})();
