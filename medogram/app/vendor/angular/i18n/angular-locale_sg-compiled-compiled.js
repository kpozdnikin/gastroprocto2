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
      "AMPMS": ["ND", "LK"],
      "DAY": ["Bikua-\xF4ko", "B\xEFkua-\xFBse", "B\xEFkua-pt\xE2", "B\xEFkua-us\xEF\xF6", "B\xEFkua-ok\xFC", "L\xE2p\xF4s\xF6", "L\xE2yenga"],
      "ERANAMES": ["K\xF4zo na Kr\xEEstu", "Na pek\xF4 t\xEE Kr\xEEstu"],
      "ERAS": ["KnK", "NpK"],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["Nyenye", "Fulund\xEFgi", "Mb\xE4ng\xFC", "Ngub\xF9e", "B\xEAl\xE4w\xFC", "F\xF6ndo", "Lengua", "K\xFCk\xFCr\xFC", "Mvuka", "Ngberere", "Nab\xE4nd\xFCru", "Kakauka"],
      "SHORTDAY": ["Bk1", "Bk2", "Bk3", "Bk4", "Bk5", "L\xE2p", "L\xE2y"],
      "SHORTMONTH": ["Nye", "Ful", "Mb\xE4", "Ngu", "B\xEAl", "F\xF6n", "Len", "K\xFCk", "Mvu", "Ngb", "Nab", "Kak"],
      "STANDALONEMONTH": ["Nyenye", "Fulund\xEFgi", "Mb\xE4ng\xFC", "Ngub\xF9e", "B\xEAl\xE4w\xFC", "F\xF6ndo", "Lengua", "K\xFCk\xFCr\xFC", "Mvuka", "Ngberere", "Nab\xE4nd\xFCru", "Kakauka"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE d MMMM y",
      "longDate": "d MMMM y",
      "medium": "d MMM, y HH:mm:ss",
      "mediumDate": "d MMM, y",
      "mediumTime": "HH:mm:ss",
      "short": "d/M/y HH:mm",
      "shortDate": "d/M/y",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "FCFA",
      "DECIMAL_SEP": ",",
      "GROUP_SEP": ".",
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
        "negPre": "\xA4-",
        "negSuf": "",
        "posPre": "\xA4",
        "posSuf": ""
      }]
    },
    "id": "sg",
    "localeID": "sg",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;var vf = getVF(n, opt_precision);if (i == 1 && vf.v == 0) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_sg-compiled.js.map

//# sourceMappingURL=angular-locale_sg-compiled-compiled.js.map