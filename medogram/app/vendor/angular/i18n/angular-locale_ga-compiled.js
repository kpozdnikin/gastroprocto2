'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["a.m.", "p.m."],
      "DAY": ["D\xE9 Domhnaigh", "D\xE9 Luain", "D\xE9 M\xE1irt", "D\xE9 C\xE9adaoin", "D\xE9ardaoin", "D\xE9 hAoine", "D\xE9 Sathairn"],
      "ERANAMES": ["Roimh Chr\xEDost", "Anno Domini"],
      "ERAS": ["RC", "AD"],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["Ean\xE1ir", "Feabhra", "M\xE1rta", "Aibre\xE1n", "Bealtaine", "Meitheamh", "I\xFAil", "L\xFAnasa", "Me\xE1n F\xF3mhair", "Deireadh F\xF3mhair", "Samhain", "Nollaig"],
      "SHORTDAY": ["Domh", "Luan", "M\xE1irt", "C\xE9ad", "D\xE9ar", "Aoine", "Sath"],
      "SHORTMONTH": ["Ean", "Feabh", "M\xE1rta", "Aib", "Beal", "Meith", "I\xFAil", "L\xFAn", "MF\xF3mh", "DF\xF3mh", "Samh", "Noll"],
      "STANDALONEMONTH": ["Ean\xE1ir", "Feabhra", "M\xE1rta", "Aibre\xE1n", "Bealtaine", "Meitheamh", "I\xFAil", "L\xFAnasa", "Me\xE1n F\xF3mhair", "Deireadh F\xF3mhair", "Samhain", "Nollaig"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE d MMMM y",
      "longDate": "d MMMM y",
      "medium": "d MMM y HH:mm:ss",
      "mediumDate": "d MMM y",
      "mediumTime": "HH:mm:ss",
      "short": "dd/MM/y HH:mm",
      "shortDate": "dd/MM/y",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "\u20AC",
      "DECIMAL_SEP": ".",
      "GROUP_SEP": ",",
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
        "negPre": "-\xA4",
        "negSuf": "",
        "posPre": "\xA4",
        "posSuf": ""
      }]
    },
    "id": "ga",
    "localeID": "ga",
    "pluralCat": function pluralCat(n, opt_precision) {
      if (n == 1) {
        return PLURAL_CATEGORY.ONE;
      }if (n == 2) {
        return PLURAL_CATEGORY.TWO;
      }if (n >= 3 && n <= 6) {
        return PLURAL_CATEGORY.FEW;
      }if (n >= 7 && n <= 10) {
        return PLURAL_CATEGORY.MANY;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_ga-compiled.js.map