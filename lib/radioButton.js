(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var RadioButton = window.Survey.RadioButton = function(args) {

    Survey.SurveyObject.call(this, args)
  };

  Survey.Utils.inherits(RadioButton, Survey.SurveyObject);



})();
