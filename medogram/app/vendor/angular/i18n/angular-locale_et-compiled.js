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
      "DAY": ["p\xFChap\xE4ev", "esmasp\xE4ev", "teisip\xE4ev", "kolmap\xE4ev", "neljap\xE4ev", "reede", "laup\xE4ev"],
      "ERANAMES": ["enne meie aega", "meie aja j\xE4rgi"],
      "ERAS": ["e.m.a.", "m.a.j."],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["jaanuar", "veebruar", "m\xE4rts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"],
      "SHORTDAY": ["P", "E", "T", "K", "N", "R", "L"],
      "SHORTMONTH": ["jaan", "veebr", "m\xE4rts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets"],
      "STANDALONEMONTH": ["jaanuar", "veebruar", "m\xE4rts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE, d. MMMM y",
      "longDate": "d. MMMM y",
      "medium": "d. MMM y H:mm.ss",
      "mediumDate": "d. MMM y",
      "mediumTime": "H:mm.ss",
      "short": "dd.MM.yy H:mm",
      "shortDate": "dd.MM.yy",
      "shortTime": "H:mm"
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
    "id": "et",
    "localeID": "et",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;var vf = getVF(n, opt_precision);if (i == 1 && vf.v == 0) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_et-compiled.js.map