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
      "AMPMS": ["\u04D5\u043C\u0431\u0438\u0441\u0431\u043E\u043D\u044B \u0440\u0430\u0437\u043C\u04D5", "\u04D5\u043C\u0431\u0438\u0441\u0431\u043E\u043D\u044B \u0444\u04D5\u0441\u0442\u04D5"],
      "DAY": ["\u0445\u0443\u044B\u0446\u0430\u0443\u0431\u043E\u043D", "\u043A\u044A\u0443\u044B\u0440\u0438\u0441\u04D5\u0440", "\u0434\u044B\u0446\u0446\u04D5\u0433", "\u04D5\u0440\u0442\u044B\u0446\u0446\u04D5\u0433", "\u0446\u044B\u043F\u043F\u04D5\u0440\u04D5\u043C", "\u043C\u0430\u0439\u0440\u04D5\u043C\u0431\u043E\u043D", "\u0441\u0430\u0431\u0430\u0442"],
      "ERANAMES": ["\u043D.\u0434.\u0430.", "\u043D.\u0434."],
      "ERAS": ["\u043D.\u0434.\u0430.", "\u043D.\u0434."],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["\u044F\u043D\u0432\u0430\u0440\u044B", "\u0444\u0435\u0432\u0440\u0430\u043B\u044B", "\u043C\u0430\u0440\u0442\u044A\u0438\u0439\u044B", "\u0430\u043F\u0440\u0435\u043B\u044B", "\u043C\u0430\u0439\u044B", "\u0438\u044E\u043D\u044B", "\u0438\u044E\u043B\u044B", "\u0430\u0432\u0433\u0443\u0441\u0442\u044B", "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044B", "\u043E\u043A\u0442\u044F\u0431\u0440\u044B", "\u043D\u043E\u044F\u0431\u0440\u044B", "\u0434\u0435\u043A\u0430\u0431\u0440\u044B"],
      "SHORTDAY": ["\u0445\u0446\u0431", "\u043A\u0440\u0441", "\u0434\u0446\u0433", "\u04D5\u0440\u0442", "\u0446\u043F\u0440", "\u043C\u0440\u0431", "\u0441\u0431\u0442"],
      "SHORTMONTH": ["\u044F\u043D\u0432.", "\u0444\u0435\u0432.", "\u043C\u0430\u0440.", "\u0430\u043F\u0440.", "\u043C\u0430\u044F", "\u0438\u044E\u043D\u044B", "\u0438\u044E\u043B\u044B", "\u0430\u0432\u0433.", "\u0441\u0435\u043D.", "\u043E\u043A\u0442.", "\u043D\u043E\u044F.", "\u0434\u0435\u043A."],
      "STANDALONEMONTH": ["\u042F\u043D\u0432\u0430\u0440\u044C", "\u0424\u0435\u0432\u0440\u0430\u043B\u044C", "\u041C\u0430\u0440\u0442\u044A\u0438", "\u0410\u043F\u0440\u0435\u043B\u044C", "\u041C\u0430\u0439", "\u0418\u044E\u043D\u044C", "\u0418\u044E\u043B\u044C", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C", "\u041E\u043A\u0442\u044F\u0431\u0440\u044C", "\u041D\u043E\u044F\u0431\u0440\u044C", "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE, d MMMM, y '\u0430\u0437'",
      "longDate": "d MMMM, y '\u0430\u0437'",
      "medium": "dd MMM y '\u0430\u0437' HH:mm:ss",
      "mediumDate": "dd MMM y '\u0430\u0437'",
      "mediumTime": "HH:mm:ss",
      "short": "dd.MM.yy HH:mm",
      "shortDate": "dd.MM.yy",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "GEL",
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
        "negPre": "-\xA4\xA0",
        "negSuf": "",
        "posPre": "\xA4\xA0",
        "posSuf": ""
      }]
    },
    "id": "os",
    "localeID": "os",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;var vf = getVF(n, opt_precision);if (i == 1 && vf.v == 0) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_os-compiled.js.map