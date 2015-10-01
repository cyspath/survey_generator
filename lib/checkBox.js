(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var CheckBox = window.Survey.CheckBox = function(args) {

    Survey.SurveyObject.call(this, args)
  };

  Survey.Utils.inherits(CheckBox, Survey.SurveyObject);

  CheckBox.prototype.printSelections = function () {
    this.selections.forEach(function(selection) {
      if (selection != "") {
        var option = "<label><input type='checkbox' name='"+ this.surveyId + "' value='" + selection + "'>" + selection
        $('.survey-items-container').append(option)
      }
    }.bind(this));
    $('.survey-items-container').append("<br><br>")
  };

})();
