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
      "AMPMS": ["\u063A.\u0645.", "\u063A.\u0648."],
      "DAY": ["\u06CC\u06A9\u0634\u0646\u0628\u0647", "\u062F\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647\u200C\u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067E\u0646\u062C\u0634\u0646\u0628\u0647", "\u062C\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647"],
      "ERANAMES": ["\u0642.\u0645.", "\u0645."],
      "ERAS": ["\u0642.\u0645.", "\u0645."],
      "FIRSTDAYOFWEEK": 5,
      "MONTH": ["\u062C\u0646\u0648\u0631\u064A", "\u0641\u0628\u0631\u0648\u0631\u064A", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u06CC", "\u0627\u06AB\u0633\u062A", "\u0633\u067E\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"],
      "SHORTDAY": ["\u06CC\u06A9\u0634\u0646\u0628\u0647", "\u062F\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647\u200C\u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067E\u0646\u062C\u0634\u0646\u0628\u0647", "\u062C\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647"],
      "SHORTMONTH": ["\u062C\u0646\u0648\u0631\u064A", "\u0641\u0628\u0631\u0648\u0631\u064A", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u06CC", "\u0627\u06AB\u0633\u062A", "\u0633\u067E\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"],
      "STANDALONEMONTH": ["\u062C\u0646\u0648\u0631\u064A", "\u0641\u0628\u0631\u0648\u0631\u064A", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u06CC", "\u0627\u06AB\u0633\u062A", "\u0633\u067E\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"],
      "WEEKENDRANGE": [3, 4],
      "fullDate": "EEEE \u062F y \u062F MMMM d",
      "longDate": "\u062F y \u062F MMMM d",
      "medium": "d MMM y H:mm:ss",
      "mediumDate": "d MMM y",
      "mediumTime": "H:mm:ss",
      "short": "y/M/d H:mm",
      "shortDate": "y/M/d",
      "shortTime": "H:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "Af.",
      "DECIMAL_SEP": "\u066B",
      "GROUP_SEP": "\u066C",
      "PATTERNS": [{
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      }, {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "\xA0\xA4",
        "posPre": "",
        "posSuf": "\xA0\xA4"
      }]
    },
    "id": "ps",
    "localeID": "ps",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;var vf = getVF(n, opt_precision);if (i == 1 && vf.v == 0) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_ps-compiled.js.map