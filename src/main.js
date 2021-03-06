// Generated by CoffeeScript 1.3.3
(function() {
  var xl;

  require('./core');

  require('./ExcelFormulaUtilities');

  xl = excelFormulaUtilities;

  module.exports = {
    getTokens: function(f) {
      return xl.getTokens(f).items;
    },
    formatFormula: function(f, opts) {
      return xl.formatFormula(f, opts);
    },
    toJavaScript: xl.formula2JavaScript,
    toCSharp: xl.formula2CSharp
  };

}).call(this);
