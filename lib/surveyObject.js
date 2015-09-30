(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var SurveyObject = window.Survey.SurveyObject = function(args) {
    this.alert = function() { alert(args); }
  };

})();
