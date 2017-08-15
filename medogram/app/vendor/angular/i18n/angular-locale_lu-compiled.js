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
      "AMPMS": ["Dinda", "Dilolo"],
      "DAY": ["Lumingu", "Nkodya", "Nd\xE0ay\xE0", "Ndang\xF9", "Nj\xF2wa", "Ng\xF2vya", "Lubingu"],
      "ERANAMES": ["Kumpala kwa Yezu Kli", "Kunyima kwa Yezu Kli"],
      "ERAS": ["kmp. Y.K.", "kny. Y. K."],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["Ciongo", "L\xF9ishi", "Lus\xF2lo", "M\xF9uy\xE0", "Lum\xF9ng\xF9l\xF9", "Lufuimi", "Kab\xE0l\xE0sh\xECp\xF9", "L\xF9sh\xECk\xE0", "Lutongolo", "Lung\xF9di", "Kasw\xE8k\xE8s\xE8", "Cisw\xE0"],
      "SHORTDAY": ["Lum", "Nko", "Ndy", "Ndg", "Njw", "Ngv", "Lub"],
      "SHORTMONTH": ["Cio", "Lui", "Lus", "Muu", "Lum", "Luf", "Kab", "Lush", "Lut", "Lun", "Kas", "Cis"],
      "STANDALONEMONTH": ["Ciongo", "L\xF9ishi", "Lus\xF2lo", "M\xF9uy\xE0", "Lum\xF9ng\xF9l\xF9", "Lufuimi", "Kab\xE0l\xE0sh\xECp\xF9", "L\xF9sh\xECk\xE0", "Lutongolo", "Lung\xF9di", "Kasw\xE8k\xE8s\xE8", "Cisw\xE0"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE d MMMM y",
      "longDate": "d MMMM y",
      "medium": "d MMM y HH:mm:ss",
      "mediumDate": "d MMM y",
      "mediumTime": "HH:mm:ss",
      "short": "d/M/y HH:mm",
      "shortDate": "d/M/y",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "FrCD",
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
        "negPre": "-",
        "negSuf": "\xA4",
        "posPre": "",
        "posSuf": "\xA4"
      }]
    },
    "id": "lu",
    "localeID": "lu",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;var vf = getVF(n, opt_precision);if (i == 1 && vf.v == 0) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_lu-compiled.js.map