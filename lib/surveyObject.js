(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var SurveyObject = window.Survey.SurveyObject = function(args) {
    this.question = args.question;
    this.selections = args.selections;
    this.surveyId = id;
  };


  SurveyObject.prototype.printQuestion = function () {
    var question = "<span class='item-question'>" + this.question + "</span><br>"
    $('.survey-items-container').append(question)
  };

  SurveyObject.prototype.printSelections = function () {
    return null;
  };

})();
