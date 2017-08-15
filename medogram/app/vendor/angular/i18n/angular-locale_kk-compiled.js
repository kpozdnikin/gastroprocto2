'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\u0442\u0430\u04A3\u0435\u0440\u0442\u0435\u04A3\u0433\u0456", "\u0442\u04AF\u0441\u0442\u0435\u043D \u043A\u0435\u0439\u0456\u043D\u0433\u0456"],
      "DAY": ["\u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456", "\u0434\u04AF\u0439\u0441\u0435\u043D\u0431\u0456", "\u0441\u0435\u0439\u0441\u0435\u043D\u0431\u0456", "\u0441\u04D9\u0440\u0441\u0435\u043D\u0431\u0456", "\u0431\u0435\u0439\u0441\u0435\u043D\u0431\u0456", "\u0436\u04B1\u043C\u0430", "\u0441\u0435\u043D\u0431\u0456"],
      "ERANAMES": ["\u0411\u0456\u0437\u0434\u0456\u04A3 \u0437\u0430\u043C\u0430\u043D\u044B\u043C\u044B\u0437\u0493\u0430 \u0434\u0435\u0439\u0456\u043D", "\u0411\u0456\u0437\u0434\u0456\u04A3 \u0437\u0430\u043C\u0430\u043D\u044B\u043C\u044B\u0437"],
      "ERAS": ["\u0431.\u0437.\u0434.", "\u0431.\u0437."],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["\u049B\u0430\u04A3\u0442\u0430\u0440", "\u0430\u049B\u043F\u0430\u043D", "\u043D\u0430\u0443\u0440\u044B\u0437", "\u0441\u04D9\u0443\u0456\u0440", "\u043C\u0430\u043C\u044B\u0440", "\u043C\u0430\u0443\u0441\u044B\u043C", "\u0448\u0456\u043B\u0434\u0435", "\u0442\u0430\u043C\u044B\u0437", "\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A", "\u049B\u0430\u0437\u0430\u043D", "\u049B\u0430\u0440\u0430\u0448\u0430", "\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D"],
      "SHORTDAY": ["\u0436\u0435\u043A", "\u0434\u04AF\u0439", "\u0441\u0435\u0439", "\u0441\u04D9\u0440", "\u0431\u0435\u0439", "\u0436\u04B1\u043C\u0430", "\u0441\u0435\u043D"],
      "SHORTMONTH": ["\u049B\u0430\u04A3.", "\u0430\u049B\u043F.", "\u043D\u0430\u0443.", "\u0441\u04D9\u0443.", "\u043C\u0430\u043C.", "\u043C\u0430\u0443.", "\u0448\u0456\u043B.", "\u0442\u0430\u043C.", "\u049B\u044B\u0440.", "\u049B\u0430\u0437.", "\u049B\u0430\u0440.", "\u0436\u0435\u043B\u0442."],
      "STANDALONEMONTH": ["\u049B\u0430\u04A3\u0442\u0430\u0440", "\u0430\u049B\u043F\u0430\u043D", "\u043D\u0430\u0443\u0440\u044B\u0437", "\u0441\u04D9\u0443\u0456\u0440", "\u043C\u0430\u043C\u044B\u0440", "\u043C\u0430\u0443\u0441\u044B\u043C", "\u0448\u0456\u043B\u0434\u0435", "\u0442\u0430\u043C\u044B\u0437", "\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A", "\u049B\u0430\u0437\u0430\u043D", "\u049B\u0430\u0440\u0430\u0448\u0430", "\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE, d MMMM y",
      "longDate": "d MMMM y",
      "medium": "y, dd-MMM HH:mm:ss",
      "mediumDate": "y, dd-MMM",
      "mediumTime": "HH:mm:ss",
      "short": "dd/MM/yy HH:mm",
      "shortDate": "dd/MM/yy",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "\u20B8",
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
    "id": "kk",
    "localeID": "kk",
    "pluralCat": function pluralCat(n, opt_precision) {
      if (n == 1) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_kk-compiled.js.map