'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\u0434\u0430 \u043F\u0430\u043B\u0443\u0434\u043D\u044F", "\u043F\u0430\u0441\u043B\u044F \u043F\u0430\u043B\u0443\u0434\u043D\u044F"],
      "DAY": ["\u043D\u044F\u0434\u0437\u0435\u043B\u044F", "\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A", "\u0430\u045E\u0442\u043E\u0440\u0430\u043A", "\u0441\u0435\u0440\u0430\u0434\u0430", "\u0447\u0430\u0446\u0432\u0435\u0440", "\u043F\u044F\u0442\u043D\u0456\u0446\u0430", "\u0441\u0443\u0431\u043E\u0442\u0430"],
      "ERANAMES": ["\u0434\u0430 \u043D.\u044D.", "\u043D.\u044D."],
      "ERAS": ["\u0434\u0430 \u043D.\u044D.", "\u043D.\u044D."],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044F", "\u043B\u044E\u0442\u0430\u0433\u0430", "\u0441\u0430\u043A\u0430\u0432\u0456\u043A\u0430", "\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A\u0430", "\u043C\u0430\u044F", "\u0447\u044D\u0440\u0432\u0435\u043D\u044F", "\u043B\u0456\u043F\u0435\u043D\u044F", "\u0436\u043D\u0456\u045E\u043D\u044F", "\u0432\u0435\u0440\u0430\u0441\u043D\u044F", "\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A\u0430", "\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434\u0430", "\u0441\u043D\u0435\u0436\u043D\u044F"],
      "SHORTDAY": ["\u043D\u0434", "\u043F\u043D", "\u0430\u045E", "\u0441\u0440", "\u0447\u0446", "\u043F\u0442", "\u0441\u0431"],
      "SHORTMONTH": ["\u0441\u0442\u0443", "\u043B\u044E\u0442", "\u0441\u0430\u043A", "\u043A\u0440\u0430", "\u043C\u0430\u044F", "\u0447\u044D\u0440", "\u043B\u0456\u043F", "\u0436\u043D\u0456", "\u0432\u0435\u0440", "\u043A\u0430\u0441", "\u043B\u0456\u0441", "\u0441\u043D\u0435"],
      "STANDALONEMONTH": ["\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044C", "\u043B\u044E\u0442\u044B", "\u0441\u0430\u043A\u0430\u0432\u0456\u043A", "\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A", "\u043C\u0430\u0439", "\u0447\u044D\u0440\u0432\u0435\u043D\u044C", "\u043B\u0456\u043F\u0435\u043D\u044C", "\u0436\u043D\u0456\u0432\u0435\u043D\u044C", "\u0432\u0435\u0440\u0430\u0441\u0435\u043D\u044C", "\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A", "\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434", "\u0441\u043D\u0435\u0436\u0430\u043D\u044C"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE, d MMMM y",
      "longDate": "d MMMM y",
      "medium": "d.M.y HH.mm.ss",
      "mediumDate": "d.M.y",
      "mediumTime": "HH.mm.ss",
      "short": "d.M.yy HH.mm",
      "shortDate": "d.M.yy",
      "shortTime": "HH.mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "BYR",
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
        "negPre": "-\xA4",
        "negSuf": "",
        "posPre": "\xA4",
        "posSuf": ""
      }]
    },
    "id": "be",
    "localeID": "be",
    "pluralCat": function pluralCat(n, opt_precision) {
      if (n % 10 == 1 && n % 100 != 11) {
        return PLURAL_CATEGORY.ONE;
      }if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) {
        return PLURAL_CATEGORY.FEW;
      }if (n % 10 == 0 || n % 10 >= 5 && n % 10 <= 9 || n % 100 >= 11 && n % 100 <= 14) {
        return PLURAL_CATEGORY.MANY;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_be-compiled.js.map