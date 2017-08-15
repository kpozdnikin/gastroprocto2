'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928", "\u0905\u092A\u0930\u093E\u0939\u094D\u0928"],
      "DAY": ["\u0906\u0907\u0924\u092C\u093E\u0930", "\u0938\u094B\u092E\u092C\u093E\u0930", "\u092E\u0919\u094D\u0917\u0932\u092C\u093E\u0930", "\u092C\u0941\u0927\u092C\u093E\u0930", "\u092C\u093F\u0939\u093F\u092C\u093E\u0930", "\u0936\u0941\u0915\u094D\u0930\u092C\u093E\u0930", "\u0936\u0928\u093F\u092C\u093E\u0930"],
      "ERANAMES": ["\u0908\u0938\u093E \u092A\u0942\u0930\u094D\u0935", "\u0938\u0928\u094D"],
      "ERAS": ["\u0908\u0938\u093E \u092A\u0942\u0930\u094D\u0935", "\u0938\u0928\u094D"],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["\u091C\u0928\u0935\u0930\u0940", "\u092B\u0947\u092C\u094D\u0930\u0941\u0905\u0930\u0940", "\u092E\u093E\u0930\u094D\u091A", "\u0905\u092A\u094D\u0930\u093F\u0932", "\u092E\u0908", "\u091C\u0941\u0928", "\u091C\u0941\u0932\u093E\u0908", "\u0905\u0917\u0938\u094D\u091F", "\u0938\u0947\u092A\u094D\u091F\u0947\u092E\u094D\u092C\u0930", "\u0905\u0915\u094D\u091F\u094B\u092C\u0930", "\u0928\u094B\u092D\u0947\u092E\u094D\u092C\u0930", "\u0921\u093F\u0938\u0947\u092E\u094D\u092C\u0930"],
      "SHORTDAY": ["\u0906\u0907\u0924", "\u0938\u094B\u092E", "\u092E\u0919\u094D\u0917\u0932", "\u092C\u0941\u0927", "\u092C\u093F\u0939\u0940", "\u0936\u0941\u0915\u094D\u0930", "\u0936\u0928\u093F"],
      "SHORTMONTH": ["\u091C\u0928\u0935\u0930\u0940", "\u092B\u0947\u092C\u094D\u0930\u0941\u0905\u0930\u0940", "\u092E\u093E\u0930\u094D\u091A", "\u0905\u092A\u094D\u0930\u093F\u0932", "\u092E\u0947", "\u091C\u0941\u0928", "\u091C\u0941\u0932\u093E\u0908", "\u0905\u0917\u0938\u094D\u091F", "\u0938\u0947\u092A\u094D\u091F\u0947\u092E\u094D\u092C\u0930", "\u0905\u0915\u094D\u091F\u094B\u092C\u0930", "\u0928\u094B\u092D\u0947\u092E\u094D\u092C\u0930", "\u0921\u093F\u0938\u0947\u092E\u094D\u092C\u0930"],
      "STANDALONEMONTH": ["\u091C\u0928\u0935\u0930\u0940", "\u092B\u0947\u092C\u094D\u0930\u0941\u0905\u0930\u0940", "\u092E\u093E\u0930\u094D\u091A", "\u0905\u092A\u094D\u0930\u093F\u0932", "\u092E\u0947", "\u091C\u0941\u0928", "\u091C\u0941\u0932\u093E\u0908", "\u0905\u0917\u0938\u094D\u091F", "\u0938\u0947\u092A\u094D\u091F\u0947\u092E\u094D\u092C\u0930", "\u0905\u0915\u094D\u091F\u094B\u092C\u0930", "\u0928\u094B\u092D\u0947\u092E\u094D\u092C\u0930", "\u0921\u093F\u0938\u0947\u092E\u094D\u092C\u0930"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "y MMMM d, EEEE",
      "longDate": "y MMMM d",
      "medium": "y MMM d HH:mm:ss",
      "mediumDate": "y MMM d",
      "mediumTime": "HH:mm:ss",
      "short": "y-MM-dd HH:mm",
      "shortDate": "y-MM-dd",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "Rs",
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
        "negPre": "-\xA4\xA0",
        "negSuf": "",
        "posPre": "\xA4\xA0",
        "posSuf": ""
      }]
    },
    "id": "ne",
    "localeID": "ne",
    "pluralCat": function pluralCat(n, opt_precision) {
      if (n == 1) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_ne-compiled.js.map