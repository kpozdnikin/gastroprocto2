'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  function getDecimals(n) {
    n = n + '';
    var i = n.indexOf('.');
    return i == -1 ? 0 : n.length - i - 1;
  }

  function getVF(n, opt_precision) {
    var v = opt_precision;

    if (undefined === v) {
      v = Math.min(getDecimals(n), 3);
    }

    var base = Math.pow(10, v);
    var f = (n * base | 0) % base;
    return { v: v, f: f };
  }

  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\u0F66\u0F94\u0F0B\u0F46\u0F0B", "\u0F55\u0FB1\u0F72\u0F0B\u0F46\u0F0B"],
      "DAY": ["\u0F42\u0F5F\u0F60\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F0B", "\u0F42\u0F5F\u0F60\u0F0B\u0F58\u0F72\u0F42\u0F0B\u0F51\u0F58\u0F62\u0F0B", "\u0F42\u0F5F\u0F60\u0F0B\u0F63\u0FB7\u0F42\u0F0B\u0F54\u0F0B", "\u0F42\u0F5F\u0F60\u0F0B\u0F55\u0F74\u0F62\u0F0B\u0F56\u0F74\u0F0B", "\u0F42\u0F5F\u0F60\u0F0B\u0F54\u0F0B\u0F66\u0F44\u0F66\u0F0B", "\u0F42\u0F5F\u0F60\u0F0B\u0F66\u0FA4\u0F7A\u0F53\u0F0B\u0F54\u0F0B", "\u0F42\u0F5F\u0F60\u0F0B\u0F49\u0F72\u0F0B\u0F58\u0F0B"],
      "ERANAMES": ["BCE", "CE"],
      "ERAS": ["BCE", "CE"],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["\u0F5F\u0FB3\u0F0B\u0F51\u0F44\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F42\u0F66\u0F74\u0F58\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F56\u0F5E\u0F72\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F63\u0F94\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F51\u0FB2\u0F74\u0F42\u0F0B\u0F54", "\u0F5F\u0FB3\u0F0B\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F56\u0F62\u0F92\u0FB1\u0F51\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F51\u0F42\u0F74\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F45\u0F72\u0F42\u0F0B\u0F54\u0F0B", "\u0F5F\u0FB3\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54\u0F0B"],
      "SHORTDAY": ["\u0F5F\u0FB3\u0F0B", "\u0F58\u0F72\u0F62\u0F0B", "\u0F63\u0FB7\u0F42\u0F0B", "\u0F55\u0F74\u0F62\u0F0B", "\u0F66\u0F44\u0F66\u0F0B", "\u0F66\u0FA4\u0F7A\u0F53\u0F0B", "\u0F49\u0F72\u0F0B"],
      "SHORTMONTH": ["\u0F21", "\u0F22", "\u0F23", "\u0F24", "\u0F25", "\u0F26", "\u0F27", "\u0F28", "\u0F29", "\u0F21\u0F20", "\u0F21\u0F21", "12"],
      "STANDALONEMONTH": ["\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F51\u0F44\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F42\u0F66\u0F74\u0F58\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F5E\u0F72\u0F0B\u0F54", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F63\u0F94\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F51\u0FB2\u0F74\u0F42\u0F0B\u0F54", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F51\u0F74\u0F53\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F62\u0F92\u0FB1\u0F51\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F51\u0F42\u0F74\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F45\u0F72\u0F42\u0F0B\u0F54\u0F0B", "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F5F\u0FB3\u0F0B\u0F56\u0F45\u0F74\u0F0B\u0F42\u0F49\u0F72\u0F66\u0F0B\u0F54\u0F0B"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE, \u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F63\u0F7C\u0F0By MMMM \u0F5A\u0F7A\u0F66\u0F0Bdd",
      "longDate": "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F63\u0F7C\u0F0By MMMM \u0F5A\u0F7A\u0F66\u0F0B dd",
      "medium": "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F63\u0F7C\u0F0By \u0F5F\u0FB3\u0F0BMMM \u0F5A\u0F7A\u0F66\u0F0Bdd \u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0Bh:mm:ss a",
      "mediumDate": "\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F63\u0F7C\u0F0By \u0F5F\u0FB3\u0F0BMMM \u0F5A\u0F7A\u0F66\u0F0Bdd",
      "mediumTime": "\u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0Bh:mm:ss a",
      "short": "y-MM-dd \u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0B h \u0F66\u0F90\u0F62\u0F0B\u0F58\u0F0B mm a",
      "shortDate": "y-MM-dd",
      "shortTime": "\u0F46\u0F74\u0F0B\u0F5A\u0F7C\u0F51\u0F0B h \u0F66\u0F90\u0F62\u0F0B\u0F58\u0F0B mm a"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "Nu.",
      "DECIMAL_SEP": ".",
      "GROUP_SEP": ",",
      "PATTERNS": [{
        "gSize": 2,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      }, {
        "gSize": 2,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-\xA4",
        "negSuf": "",
        "posPre": "\xA4",
        "posSuf": ""
      }]
    },
    "id": "dz",
    "localeID": "dz",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;var vf = getVF(n, opt_precision);if (i == 1 && vf.v == 0) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_dz-compiled.js.map