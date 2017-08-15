'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\u092E.\u092A\u0942.", "\u092E.\u0909."],
      "DAY": ["\u0930\u0935\u093F\u0935\u093E\u0930", "\u0938\u094B\u092E\u0935\u093E\u0930", "\u092E\u0902\u0917\u0933\u0935\u093E\u0930", "\u092C\u0941\u0927\u0935\u093E\u0930", "\u0917\u0941\u0930\u0941\u0935\u093E\u0930", "\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930", "\u0936\u0928\u093F\u0935\u093E\u0930"],
      "ERANAMES": ["\u0908\u0938\u0935\u0940\u0938\u0928\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u0935\u0940\u0938\u0928"],
      "ERAS": ["\u0907. \u0938. \u092A\u0942.", "\u0907. \u0938."],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["\u091C\u093E\u0928\u0947\u0935\u093E\u0930\u0940", "\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u093E\u0930\u0940", "\u092E\u093E\u0930\u094D\u091A", "\u090F\u092A\u094D\u0930\u093F\u0932", "\u092E\u0947", "\u091C\u0942\u0928", "\u091C\u0941\u0932\u0948", "\u0911\u0917\u0938\u094D\u091F", "\u0938\u092A\u094D\u091F\u0947\u0902\u092C\u0930", "\u0911\u0915\u094D\u091F\u094B\u092C\u0930", "\u0928\u094B\u0935\u094D\u0939\u0947\u0902\u092C\u0930", "\u0921\u093F\u0938\u0947\u0902\u092C\u0930"],
      "SHORTDAY": ["\u0930\u0935\u093F", "\u0938\u094B\u092E", "\u092E\u0902\u0917\u0933", "\u092C\u0941\u0927", "\u0917\u0941\u0930\u0941", "\u0936\u0941\u0915\u094D\u0930", "\u0936\u0928\u093F"],
      "SHORTMONTH": ["\u091C\u093E\u0928\u0947", "\u092B\u0947\u092C\u094D\u0930\u0941", "\u092E\u093E\u0930\u094D\u091A", "\u090F\u092A\u094D\u0930\u093F", "\u092E\u0947", "\u091C\u0942\u0928", "\u091C\u0941\u0932\u0948", "\u0911\u0917", "\u0938\u092A\u094D\u091F\u0947\u0902", "\u0911\u0915\u094D\u091F\u094B", "\u0928\u094B\u0935\u094D\u0939\u0947\u0902", "\u0921\u093F\u0938\u0947\u0902"],
      "STANDALONEMONTH": ["\u091C\u093E\u0928\u0947\u0935\u093E\u0930\u0940", "\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u093E\u0930\u0940", "\u092E\u093E\u0930\u094D\u091A", "\u090F\u092A\u094D\u0930\u093F\u0932", "\u092E\u0947", "\u091C\u0942\u0928", "\u091C\u0941\u0932\u0948", "\u0911\u0917\u0938\u094D\u091F", "\u0938\u092A\u094D\u091F\u0947\u0902\u092C\u0930", "\u0911\u0915\u094D\u091F\u094B\u092C\u0930", "\u0928\u094B\u0935\u094D\u0939\u0947\u0902\u092C\u0930", "\u0921\u093F\u0938\u0947\u0902\u092C\u0930"],
      "WEEKENDRANGE": [6, 6],
      "fullDate": "EEEE, d MMMM, y",
      "longDate": "d MMMM, y",
      "medium": "d MMM, y h:mm:ss a",
      "mediumDate": "d MMM, y",
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
    "id": "mr",
    "localeID": "mr",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;if (i == 0 || n == 1) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_mr-compiled.js.map