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
      "AMPMS": ["dopoledne", "odpoledne"],
      "DAY": ["ned\u011Ble", "pond\u011Bl\xED", "\xFAter\xFD", "st\u0159eda", "\u010Dtvrtek", "p\xE1tek", "sobota"],
      "ERANAMES": ["p\u0159. n. l.", "n. l."],
      "ERAS": ["p\u0159. n. l.", "n. l."],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["ledna", "\xFAnora", "b\u0159ezna", "dubna", "kv\u011Btna", "\u010Dervna", "\u010Dervence", "srpna", "z\xE1\u0159\xED", "\u0159\xEDjna", "listopadu", "prosince"],
      "SHORTDAY": ["ne", "po", "\xFAt", "st", "\u010Dt", "p\xE1", "so"],
      "SHORTMONTH": ["led", "\xFAno", "b\u0159e", "dub", "kv\u011B", "\u010Dvn", "\u010Dvc", "srp", "z\xE1\u0159", "\u0159\xEDj", "lis", "pro"],
      "STANDALONEMONTH": ["leden", "\xFAnor", "b\u0159ezen", "duben", "kv\u011Bten", "\u010Derven", "\u010Dervenec", "srpen", "z\xE1\u0159\xED", "\u0159\xEDjen", "listopad", "prosinec"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE d. MMMM y",
      "longDate": "d. MMMM y",
      "medium": "d. M. y H:mm:ss",
      "mediumDate": "d. M. y",
      "mediumTime": "H:mm:ss",
      "short": "dd.MM.yy H:mm",
      "shortDate": "dd.MM.yy",
      "shortTime": "H:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "K\u010D",
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
    "id": "cs",
    "localeID": "cs",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;var vf = getVF(n, opt_precision);if (i == 1 && vf.v == 0) {
        return PLURAL_CATEGORY.ONE;
      }if (i >= 2 && i <= 4 && vf.v == 0) {
        return PLURAL_CATEGORY.FEW;
      }if (vf.v != 0) {
        return PLURAL_CATEGORY.MANY;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_cs-compiled.js.map