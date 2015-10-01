(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var SurveyObject = window.Survey.SurveyObject = function(args) {
    this.args = args
  };

  SurveyObject.prototype.print = function () {
    console.log("this is printing form class SurveyObject");
  };
})();
