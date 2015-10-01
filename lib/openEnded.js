(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var OpenEnded = window.Survey.OpenEnded = function(args) {

    Survey.SurveyObject.call(this, args)
  };

  Survey.Utils.inherits(OpenEnded, Survey.SurveyObject);



})();
