(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var CheckBox = window.Survey.CheckBox = function(args) {

    Survey.SurveyObject.call(this, args)
  };

  Survey.Utils.inherits(CheckBox, Survey.SurveyObject);


})();
