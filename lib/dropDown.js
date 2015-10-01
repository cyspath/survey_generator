(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var DropDown = window.Survey.DropDown = function(args) {

    Survey.SurveyObject.call(this, args)
  };

  Survey.Utils.inherits(DropDown, Survey.SurveyObject);


})();
