'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\u0442\u0430\u04A3\u043A\u044B", "\u0442\u04AF\u0448\u0442\u04E9\u043D \u043A\u0438\u0439\u0438\u043D"],
      "DAY": ["\u0436\u0435\u043A\u0448\u0435\u043C\u0431\u0438", "\u0434\u04AF\u0439\u0448\u04E9\u043C\u0431\u04AF", "\u0448\u0435\u0439\u0448\u0435\u043C\u0431\u0438", "\u0448\u0430\u0440\u0448\u0435\u043C\u0431\u0438", "\u0431\u0435\u0439\u0448\u0435\u043C\u0431\u0438", "\u0436\u0443\u043C\u0430", "\u0438\u0448\u0435\u043C\u0431\u0438"],
      "ERANAMES": ["\u0431\u0438\u0437\u0434\u0438\u043D \u0437\u0430\u043C\u0430\u043D\u0433\u0430 \u0447\u0435\u0439\u0438\u043D", "\u0431\u0438\u0437\u0434\u0438\u043D \u0437\u0430\u043C\u0430\u043D"],
      "ERAS": ["\u0431.\u0437.\u0447.", "\u0431.\u0437."],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["\u044F\u043D\u0432\u0430\u0440\u044C", "\u0444\u0435\u0432\u0440\u0430\u043B\u044C", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0435\u043B\u044C", "\u043C\u0430\u0439", "\u0438\u044E\u043D\u044C", "\u0438\u044E\u043B\u044C", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C", "\u043E\u043A\u0442\u044F\u0431\u0440\u044C", "\u043D\u043E\u044F\u0431\u0440\u044C", "\u0434\u0435\u043A\u0430\u0431\u0440\u044C"],
      "SHORTDAY": ["\u0436\u0435\u043A.", "\u0434\u04AF\u0439.", "\u0448\u0435\u0439\u0448.", "\u0448\u0430\u0440\u0448.", "\u0431\u0435\u0439\u0448.", "\u0436\u0443\u043C\u0430", "\u0438\u0448\u043C."],
      "SHORTMONTH": ["\u044F\u043D\u0432.", "\u0444\u0435\u0432.", "\u043C\u0430\u0440.", "\u0430\u043F\u0440.", "\u043C\u0430\u0439", "\u0438\u044E\u043D.", "\u0438\u044E\u043B.", "\u0430\u0432\u0433.", "\u0441\u0435\u043D.", "\u043E\u043A\u0442.", "\u043D\u043E\u044F.", "\u0434\u0435\u043A."],
      "STANDALONEMONTH": ["\u042F\u043D\u0432\u0430\u0440\u044C", "\u0424\u0435\u0432\u0440\u0430\u043B\u044C", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440\u0435\u043B\u044C", "\u041C\u0430\u0439", "\u0418\u044E\u043D\u044C", "\u0418\u044E\u043B\u044C", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C", "\u041E\u043A\u0442\u044F\u0431\u0440\u044C", "\u041D\u043E\u044F\u0431\u0440\u044C", "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE, d-MMMM, y-'\u0436'.",
      "longDate": "y MMMM d",
      "medium": "y MMM d HH:mm:ss",
      "mediumDate": "y MMM d",
      "mediumTime": "HH:mm:ss",
      "short": "dd.MM.yy HH:mm",
      "shortDate": "dd.MM.yy",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "KGS",
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
    "id": "ky",
    "localeID": "ky",
    "pluralCat": function pluralCat(n, opt_precision) {
      if (n == 1) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_ky-compiled.js.map