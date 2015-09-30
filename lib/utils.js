(function () {
  if (window.Survey == undefined) { window.Survey = {}; }
  if (window.Survey.Utils == undefined) { window.Survey.Utils = {}; }

  Survey.Utils.inherits = function (ChildClass, ParentClass) {
    function Surrogate() {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

})();
