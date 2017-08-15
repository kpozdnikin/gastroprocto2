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
      "AMPMS": ["prie\u0161piet", "popiet"],
      "DAY": ["sekmadienis", "pirmadienis", "antradienis", "tre\u010Diadienis", "ketvirtadienis", "penktadienis", "\u0161e\u0161tadienis"],
      "ERANAMES": ["prie\u0161 Krist\u0173", "po Kristaus"],
      "ERAS": ["pr. Kr.", "po Kr."],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["sausio", "vasario", "kovo", "baland\u017Eio", "gegu\u017E\u0117s", "bir\u017Eelio", "liepos", "rugpj\u016B\u010Dio", "rugs\u0117jo", "spalio", "lapkri\u010Dio", "gruod\u017Eio"],
      "SHORTDAY": ["sk", "pr", "an", "tr", "kt", "pn", "\u0161t"],
      "SHORTMONTH": ["saus.", "vas.", "kov.", "bal.", "geg.", "bir\u017E.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."],
      "STANDALONEMONTH": ["sausis", "vasaris", "kovas", "balandis", "gegu\u017E\u0117", "bir\u017Eelis", "liepa", "rugpj\u016Btis", "rugs\u0117jis", "spalis", "lapkritis", "gruodis"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "y 'm'. MMMM d 'd'., EEEE",
      "longDate": "y 'm'. MMMM d 'd'.",
      "medium": "y-MM-dd HH:mm:ss",
      "mediumDate": "y-MM-dd",
      "mediumTime": "HH:mm:ss",
      "short": "y-MM-dd HH:mm",
      "shortDate": "y-MM-dd",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "\u20AC",
      "DECIMAL_SEP": ",",
      "GROUP_SEP": "\xA0",
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
    "id": "lt",
    "localeID": "lt",
    "pluralCat": function pluralCat(n, opt_precision) {
      var vf = getVF(n, opt_precision);if (n % 10 == 1 && (n % 100 < 11 || n % 100 > 19)) {
        return PLURAL_CATEGORY.ONE;
      }if (n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19)) {
        return PLURAL_CATEGORY.FEW;
      }if (vf.f != 0) {
        return PLURAL_CATEGORY.MANY;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_lt-compiled.js.map