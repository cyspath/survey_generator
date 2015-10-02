(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var SurveyObject = window.Survey.SurveyObject = function(args) {
    this.question = args.question;
    this.selections = args.selections;
    this.surveyId = id;
    this.answer = "";
  };


  SurveyObject.prototype.printQuestion = function () {
    var question = "<span class='item-question'>" + this.question + "</span><br>"
    $('.survey-items-container').append(question)
  };

  SurveyObject.prototype.printSelections = function () {
    return null;
  };

  SurveyObject.prototype.answered = function () {
    return null;
  };

  SurveyObject.prototype.setAnswer = function () {
    var element = "[name='" + this.surveyId + "']"
    this.answer = $(element).val();
  };

  SurveyObject.prototype.printAnswers = function () {
    var question = "<div class='answer-question'>" + this.question + "</div>";
    var answer = "<div class='answer-answer'>" + this.answer + "</div><br>";
    $('.answers').append(question);
    $('.answers').append(answer);
  };

})();
