(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var RadioButton = window.Survey.RadioButton = function(args) {

    Survey.SurveyObject.call(this, args)
  };

  Survey.Utils.inherits(RadioButton, Survey.SurveyObject);

  RadioButton.prototype.printSelections = function () {

    this.selections.forEach(function(selection) {
      if (selection != "") {
        var option = "<input type='radio' name='"+ this.surveyId + "' value='" + selection + "'>" + selection
        $('.survey-items-container').append(option)
      }
    }.bind(this));
    $('.survey-items-container').append("<br><br>")
  };

  RadioButton.prototype.answered = function () {
    var element = "[name='" + this.surveyId + "']"
    var questionAnswered = false;
    $(element).each(function(i, el) {
      if ($(el).is(':checked')) {
        questionAnswered = true;
      }
    })
    return questionAnswered;
  };

  RadioButton.prototype.setAnswer = function () {
    var element = "[name='" + this.surveyId + "']"
    $(element).each(function(i, el) {
      if ($(el).is(':checked')) {
        this.answer = $(el).val();
      }
    }.bind(this))
  };


})();
