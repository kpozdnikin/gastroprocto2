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
      "AMPMS": ["\u043F\u0440\u0435\u0442\u043F\u043B\u0430\u0434\u043D\u0435", "\u043F\u043E\u043F\u043B\u0430\u0434\u043D\u0435"],
      "DAY": ["\u043D\u0435\u0434\u0435\u043B\u0430", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0440\u0442\u043E\u043A", "\u043F\u0435\u0442\u043E\u043A", "\u0441\u0430\u0431\u043E\u0442\u0430"],
      "ERANAMES": ["\u043F\u0440\u0435\u0434 \u043D\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430", "\u043E\u0434 \u043D\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430"],
      "ERAS": ["\u043F\u0440.\u043D.\u0435.", "\u043D.\u0435."],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["\u0458\u0430\u043D\u0443\u0430\u0440\u0438", "\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0438\u043B", "\u043C\u0430\u0458", "\u0458\u0443\u043D\u0438", "\u0458\u0443\u043B\u0438", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438", "\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438", "\u043D\u043E\u0435\u043C\u0432\u0440\u0438", "\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438"],
      "SHORTDAY": ["\u043D\u0435\u0434.", "\u043F\u043E\u043D.", "\u0432\u0442.", "\u0441\u0440\u0435.", "\u0447\u0435\u0442.", "\u043F\u0435\u0442.", "\u0441\u0430\u0431."],
      "SHORTMONTH": ["\u0458\u0430\u043D.", "\u0444\u0435\u0432.", "\u043C\u0430\u0440.", "\u0430\u043F\u0440.", "\u043C\u0430\u0458", "\u0458\u0443\u043D.", "\u0458\u0443\u043B.", "\u0430\u0432\u0433.", "\u0441\u0435\u043F\u0442.", "\u043E\u043A\u0442.", "\u043D\u043E\u0435\u043C.", "\u0434\u0435\u043A."],
      "STANDALONEMONTH": ["\u0458\u0430\u043D\u0443\u0430\u0440\u0438", "\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0438\u043B", "\u043C\u0430\u0458", "\u0458\u0443\u043D\u0438", "\u0458\u0443\u043B\u0438", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438", "\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438", "\u043D\u043E\u0435\u043C\u0432\u0440\u0438", "\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE, dd MMMM y",
      "longDate": "dd MMMM y",
      "medium": "dd.M.y HH:mm:ss",
      "mediumDate": "dd.M.y",
      "mediumTime": "HH:mm:ss",
      "short": "dd.M.yy HH:mm",
      "shortDate": "dd.M.yy",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "din",
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
    "id": "mk",
    "localeID": "mk",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;var vf = getVF(n, opt_precision);if (vf.v == 0 && i % 10 == 1 || vf.f % 10 == 1) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_mk-compiled.js.map