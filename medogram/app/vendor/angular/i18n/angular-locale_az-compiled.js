'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["AM", "PM"],
      "DAY": ["bazar", "bazar ert\u0259si", "\xE7\u0259r\u015F\u0259nb\u0259 ax\u015Fam\u0131", "\xE7\u0259r\u015F\u0259nb\u0259", "c\xFCm\u0259 ax\u015Fam\u0131", "c\xFCm\u0259", "\u015F\u0259nb\u0259"],
      "ERANAMES": ["eram\u0131zdan \u0259vv\u0259l", "bizim eram\u0131z\u0131n"],
      "ERAS": ["e.\u0259.", "b.e."],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"],
      "SHORTDAY": ["B.", "B.E.", "\xC7.A.", "\xC7.", "C.A.", "C.", "\u015E."],
      "SHORTMONTH": ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avq", "sen", "okt", "noy", "dek"],
      "STANDALONEMONTH": ["Yanvar", "Fevral", "Mart", "Aprel", "May", "\u0130yun", "\u0130yul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "d MMMM y, EEEE",
      "longDate": "d MMMM y",
      "medium": "d MMM y HH:mm:ss",
      "mediumDate": "d MMM y",
      "mediumTime": "HH:mm:ss",
      "short": "dd.MM.yy HH:mm",
      "shortDate": "dd.MM.yy",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "man.",
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
        "negPre": "-\xA4\xA0",
        "negSuf": "",
        "posPre": "\xA4\xA0",
        "posSuf": ""
      }]
    },
    "id": "az",
    "localeID": "az",
    "pluralCat": function pluralCat(n, opt_precision) {
      if (n == 1) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_az-compiled.js.map