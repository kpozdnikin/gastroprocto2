'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["AM", "PM"],
      "DAY": ["\u0D1E\u0D3E\u0D2F\u0D31\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D24\u0D3F\u0D19\u0D4D\u0D15\u0D33\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D1A\u0D4A\u0D35\u0D4D\u0D35\u0D3E\u0D34\u0D4D\u0D1A", "\u0D2C\u0D41\u0D27\u0D28\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D35\u0D4D\u0D2F\u0D3E\u0D34\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D35\u0D46\u0D33\u0D4D\u0D33\u0D3F\u0D2F\u0D3E\u0D34\u0D4D\u200C\u0D1A", "\u0D36\u0D28\u0D3F\u0D2F\u0D3E\u0D34\u0D4D\u200C\u0D1A"],
      "ERANAMES": ["\u0D15\u0D4D\u0D30\u0D3F\u0D38\u0D4D\u200C\u0D24\u0D41\u0D35\u0D3F\u0D28\u0D4D \u0D2E\u0D41\u0D2E\u0D4D\u0D2A\u0D4D", "\u0D06\u0D28\u0D4D\u0D28\u0D4B \u0D21\u0D4A\u0D2E\u0D3F\u0D28\u0D3F"],
      "ERAS": ["\u0D15\u0D4D\u0D30\u0D3F.\u0D2E\u0D41.", "\u0D0E\u0D21\u0D3F"],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["\u0D1C\u0D28\u0D41\u0D35\u0D30\u0D3F", "\u0D2B\u0D46\u0D2C\u0D4D\u0D30\u0D41\u0D35\u0D30\u0D3F", "\u0D2E\u0D3E\u0D7C\u0D1A\u0D4D\u0D1A\u0D4D", "\u0D0F\u0D2A\u0D4D\u0D30\u0D3F\u0D7D", "\u0D2E\u0D47\u0D2F\u0D4D", "\u0D1C\u0D42\u0D7A", "\u0D1C\u0D42\u0D32\u0D48", "\u0D06\u0D17\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D", "\u0D38\u0D46\u0D2A\u0D4D\u0D31\u0D4D\u0D31\u0D02\u0D2C\u0D7C", "\u0D12\u0D15\u0D4D\u200C\u0D1F\u0D4B\u0D2C\u0D7C", "\u0D28\u0D35\u0D02\u0D2C\u0D7C", "\u0D21\u0D3F\u0D38\u0D02\u0D2C\u0D7C"],
      "SHORTDAY": ["\u0D1E\u0D3E\u0D2F\u0D7C", "\u0D24\u0D3F\u0D19\u0D4D\u0D15\u0D7E", "\u0D1A\u0D4A\u0D35\u0D4D\u0D35", "\u0D2C\u0D41\u0D27\u0D7B", "\u0D35\u0D4D\u0D2F\u0D3E\u0D34\u0D02", "\u0D35\u0D46\u0D33\u0D4D\u0D33\u0D3F", "\u0D36\u0D28\u0D3F"],
      "SHORTMONTH": ["\u0D1C\u0D28\u0D41", "\u0D2B\u0D46\u0D2C\u0D4D\u0D30\u0D41", "\u0D2E\u0D3E\u0D7C", "\u0D0F\u0D2A\u0D4D\u0D30\u0D3F", "\u0D2E\u0D47\u0D2F\u0D4D", "\u0D1C\u0D42\u0D7A", "\u0D1C\u0D42\u0D32\u0D48", "\u0D13\u0D17", "\u0D38\u0D46\u0D2A\u0D4D\u0D31\u0D4D\u0D31\u0D02", "\u0D12\u0D15\u0D4D\u0D1F\u0D4B", "\u0D28\u0D35\u0D02", "\u0D21\u0D3F\u0D38\u0D02"],
      "STANDALONEMONTH": ["\u0D1C\u0D28\u0D41\u0D35\u0D30\u0D3F", "\u0D2B\u0D46\u0D2C\u0D4D\u0D30\u0D41\u0D35\u0D30\u0D3F", "\u0D2E\u0D3E\u0D7C\u0D1A\u0D4D\u0D1A\u0D4D", "\u0D0F\u0D2A\u0D4D\u0D30\u0D3F\u0D7D", "\u0D2E\u0D47\u0D2F\u0D4D", "\u0D1C\u0D42\u0D7A", "\u0D1C\u0D42\u0D32\u0D48", "\u0D06\u0D17\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D", "\u0D38\u0D46\u0D2A\u0D4D\u0D31\u0D4D\u0D31\u0D02\u0D2C\u0D7C", "\u0D12\u0D15\u0D4D\u200C\u0D1F\u0D4B\u0D2C\u0D7C", "\u0D28\u0D35\u0D02\u0D2C\u0D7C", "\u0D21\u0D3F\u0D38\u0D02\u0D2C\u0D7C"],
      "WEEKENDRANGE": [6, 6],
      "fullDate": "y, MMMM d, EEEE",
      "longDate": "y, MMMM d",
      "medium": "y, MMM d h:mm:ss a",
      "mediumDate": "y, MMM d",
      "mediumTime": "h:mm:ss a",
      "short": "dd/MM/yy h:mm a",
      "shortDate": "dd/MM/yy",
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
    "id": "ml",
    "localeID": "ml",
    "pluralCat": function pluralCat(n, opt_precision) {
      if (n == 1) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_ml-compiled.js.map