(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var CheckBox = window.Survey.CheckBox = function(args) {
    Survey.SurveyObject.call(this, args);
  };

  Survey.Utils.inherits(CheckBox, Survey.SurveyObject);

  CheckBox.prototype.printSelections = function () {
    this.selections.forEach(function(selection) {
      if (selection != "") {
        var option = "<input type='checkbox' name='"+ this.surveyId + "' value='" + selection + "'>" + selection
        $('.survey-items-container').append(option)
      }
    }.bind(this));
    $('.survey-items-container').append("<br><br>")
  };

  CheckBox.prototype.answered = function () {
    var element = "[name='" + this.surveyId + "']"
    var answered = false;
    $(element).each(function(i, el) {
      if ($(el).is(':checked')) {
        answered = true
      }
    })
    return answered;
  };

  CheckBox.prototype.setAnswer = function () {
    this.answer = [];
    var element = "[name='" + this.surveyId + "']"
    $(element).each(function(i, el) {
      if ($(el).is(':checked')) {
        this.answer.push($(el).val());
      }
    }.bind(this))
    this.answer = this.answer.join();
  };

})();
