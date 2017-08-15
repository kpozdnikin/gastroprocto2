'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\u0A2A\u0A42.\u0A26\u0A41.", "\u0A2C\u0A3E.\u0A26\u0A41."],
      "DAY": ["\u0A10\u0A24\u0A35\u0A3E\u0A30", "\u0A38\u0A4B\u0A2E\u0A35\u0A3E\u0A30", "\u0A2E\u0A70\u0A17\u0A32\u0A35\u0A3E\u0A30", "\u0A2C\u0A41\u0A71\u0A27\u0A35\u0A3E\u0A30", "\u0A35\u0A40\u0A30\u0A35\u0A3E\u0A30", "\u0A38\u0A3C\u0A41\u0A71\u0A15\u0A30\u0A35\u0A3E\u0A30", "\u0A38\u0A3C\u0A28\u0A3F\u0A71\u0A1A\u0A30\u0A35\u0A3E\u0A30"],
      "ERANAMES": ["\u0A08\u0A38\u0A35\u0A40 \u0A2A\u0A42\u0A30\u0A35", "\u0A08\u0A38\u0A35\u0A40 \u0A38\u0A70\u0A28"],
      "ERAS": ["\u0A08. \u0A2A\u0A42.", "\u0A38\u0A70\u0A28"],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["\u0A1C\u0A28\u0A35\u0A30\u0A40", "\u0A2B\u0A3C\u0A30\u0A35\u0A30\u0A40", "\u0A2E\u0A3E\u0A30\u0A1A", "\u0A05\u0A2A\u0A4D\u0A30\u0A48\u0A32", "\u0A2E\u0A08", "\u0A1C\u0A42\u0A28", "\u0A1C\u0A41\u0A32\u0A3E\u0A08", "\u0A05\u0A17\u0A38\u0A24", "\u0A38\u0A24\u0A70\u0A2C\u0A30", "\u0A05\u0A15\u0A24\u0A42\u0A2C\u0A30", "\u0A28\u0A35\u0A70\u0A2C\u0A30", "\u0A26\u0A38\u0A70\u0A2C\u0A30"],
      "SHORTDAY": ["\u0A10\u0A24", "\u0A38\u0A4B\u0A2E", "\u0A2E\u0A70\u0A17\u0A32", "\u0A2C\u0A41\u0A71\u0A27", "\u0A35\u0A40\u0A30", "\u0A38\u0A3C\u0A41\u0A71\u0A15\u0A30", "\u0A38\u0A3C\u0A28\u0A3F\u0A71\u0A1A\u0A30"],
      "SHORTMONTH": ["\u0A1C\u0A28", "\u0A2B\u0A3C\u0A30", "\u0A2E\u0A3E\u0A30\u0A1A", "\u0A05\u0A2A\u0A4D\u0A30\u0A48", "\u0A2E\u0A08", "\u0A1C\u0A42\u0A28", "\u0A1C\u0A41\u0A32\u0A3E", "\u0A05\u0A17", "\u0A38\u0A24\u0A70", "\u0A05\u0A15\u0A24\u0A42", "\u0A28\u0A35\u0A70", "\u0A26\u0A38\u0A70"],
      "STANDALONEMONTH": ["\u0A1C\u0A28\u0A35\u0A30\u0A40", "\u0A2B\u0A3C\u0A30\u0A35\u0A30\u0A40", "\u0A2E\u0A3E\u0A30\u0A1A", "\u0A05\u0A2A\u0A4D\u0A30\u0A48\u0A32", "\u0A2E\u0A08", "\u0A1C\u0A42\u0A28", "\u0A1C\u0A41\u0A32\u0A3E\u0A08", "\u0A05\u0A17\u0A38\u0A24", "\u0A38\u0A24\u0A70\u0A2C\u0A30", "\u0A05\u0A15\u0A24\u0A42\u0A2C\u0A30", "\u0A28\u0A35\u0A70\u0A2C\u0A30", "\u0A26\u0A38\u0A70\u0A2C\u0A30"],
      "WEEKENDRANGE": [6, 6],
      "fullDate": "EEEE, d MMMM y",
      "longDate": "d MMMM y",
      "medium": "d MMM y h:mm:ss a",
      "mediumDate": "d MMM y",
      "mediumTime": "h:mm:ss a",
      "short": "d/M/yy h:mm a",
      "shortDate": "d/M/yy",
      "shortTime": "h:mm a"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "\u20B9",
      "DECIMAL_SEP": ".",
      "GROUP_SEP": ",",
      "PATTERNS": [{
        "gSize": 2,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      }, {
        "gSize": 2,
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
    "id": "pa",
    "localeID": "pa",
    "pluralCat": function pluralCat(n, opt_precision) {
      if (n >= 0 && n <= 1) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_pa-compiled.js.map