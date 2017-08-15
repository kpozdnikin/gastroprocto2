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
      "AMPMS": ["AM", "PM"],
      "DAY": ["\u0627\u064E\u062A\u06BE\u0648\u0627\u0631", "\u0698\u0654\u0646\u065B\u062F\u0631\u0655\u0631\u0648\u0627\u0631", "\u0628\u0648\u065A\u0645\u0648\u0627\u0631", "\u0628\u0648\u062F\u0648\u0627\u0631", "\u0628\u0631\u065B\u066E\u06EA\u0633\u0648\u0627\u0631", "\u062C\u064F\u0645\u06C1", "\u0628\u0679\u0648\u0627\u0631"],
      "ERANAMES": ["\u0642\u0628\u0655\u0644 \u0645\u0633\u06CC\u0656\u062D", "\u0639\u06CC\u0656\u0633\u0648\u06CC \u0633\u0646\u06C1\u0655"],
      "ERAS": ["\u0628\u06CC \u0633\u06CC", "\u0627\u06D2 \u0688\u06CC"],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["\u062C\u0646\u0624\u0631\u06CC", "\u0641\u0631\u0624\u0631\u06CC", "\u0645\u0627\u0631\u0655\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC\u0654", "\u062C\u0648\u0657\u0646", "\u062C\u0648\u0657\u0644\u0627\u06CC\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0657\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"],
      "SHORTDAY": ["\u0622\u062A\u06BE\u0648\u0627\u0631", "\u0698\u0654\u0646\u065B\u062F\u0655\u0631\u0648\u0627\u0631", "\u0628\u0648\u065A\u0645\u0648\u0627\u0631", "\u0628\u0648\u062F\u0648\u0627\u0631", "\u0628\u0631\u065B\u066E\u06EA\u0633\u0648\u0627\u0631", "\u062C\u064F\u0645\u06C1", "\u0628\u0679\u0648\u0627\u0631"],
      "SHORTMONTH": ["\u062C\u0646\u0624\u0631\u06CC", "\u0641\u0631\u0624\u0631\u06CC", "\u0645\u0627\u0631\u0655\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC\u0654", "\u062C\u0648\u0657\u0646", "\u062C\u0648\u0657\u0644\u0627\u06CC\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0657\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"],
      "STANDALONEMONTH": ["\u062C\u0646\u0624\u0631\u06CC", "\u0641\u0631\u0624\u0631\u06CC", "\u0645\u0627\u0631\u0655\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC\u0654", "\u062C\u0648\u0657\u0646", "\u062C\u0648\u0657\u0644\u0627\u06CC\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0657\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"],
      "WEEKENDRANGE": [6, 6],
      "fullDate": "EEEE, MMMM d, y",
      "longDate": "MMMM d, y",
      "medium": "MMM d, y h:mm:ss a",
      "mediumDate": "MMM d, y",
      "mediumTime": "h:mm:ss a",
      "short": "M/d/yy h:mm a",
      "shortDate": "M/d/yy",
      "shortTime": "h:mm a"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "\u20B9",
      "DECIMAL_SEP": "\u066B",
      "GROUP_SEP": "\u066C",
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
        "negPre": "-\xA4\xA0",
        "negSuf": "",
        "posPre": "\xA4\xA0",
        "posSuf": ""
      }]
    },
    "id": "ks",
    "localeID": "ks",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;var vf = getVF(n, opt_precision);if (i == 1 && vf.v == 0) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_ks-compiled.js.map