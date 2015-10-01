(function(){
  if (window.Survey == undefined) { window.Survey = {}; }

  var DropDown = window.Survey.DropDown = function(args) {

    Survey.SurveyObject.call(this, args)
  };

  Survey.Utils.inherits(DropDown, Survey.SurveyObject);

  DropDown.prototype.printSelections = function () {
    var select = $("<select name='result'></select>")
    $('.survey-items-container').append(select)
    $('.survey-items-container').append("<br><br>")

    this.selections.forEach(function(selection) {
      if (selection != "") {
        var option = "<option value='" + selection + "'>" + selection + "</option>"
        select.append(option);
      }
    })
  };

})();
