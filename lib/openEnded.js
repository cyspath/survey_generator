(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var OpenEnded = window.Survey.OpenEnded = function(args) {

    Survey.SurveyObject.call(this, args)
  };

  Survey.Utils.inherits(OpenEnded, Survey.SurveyObject);


  OpenEnded.prototype.printSelections = function () {
    //There is no selections, we print textfield
    var input = "<input type='text' name='" + this.surveyId + "' placeholder=''><br><br>"
    $('.survey-items-container').append(input)
  };

  OpenEnded.prototype.answered = function () {
    var element = "[name='" + this.surveyId + "']"
    if ($(element).val() != "") {
      return true;
    } else {
      return false;
    }
  };


})();
