'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\u056F\u0565\u057D\u0585\u0580\u056B\u0581 \u0561\u057C\u0561\u057B", "\u056F\u0565\u057D\u0585\u0580\u056B\u0581 \u0570\u0565\u057F\u0578"],
      "DAY": ["\u056F\u056B\u0580\u0561\u056F\u056B", "\u0565\u0580\u056F\u0578\u0582\u0577\u0561\u0562\u0569\u056B", "\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B", "\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B", "\u0570\u056B\u0576\u0563\u0577\u0561\u0562\u0569\u056B", "\u0578\u0582\u0580\u0562\u0561\u0569", "\u0577\u0561\u0562\u0561\u0569"],
      "ERANAMES": ["\u0574.\u0569.\u0561.", "\u0574.\u0569."],
      "ERAS": ["\u0574.\u0569.\u0561.", "\u0574.\u0569."],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["\u0570\u0578\u0582\u0576\u057E\u0561\u0580\u056B", "\u0583\u0565\u057F\u0580\u057E\u0561\u0580\u056B", "\u0574\u0561\u0580\u057F\u056B", "\u0561\u057A\u0580\u056B\u056C\u056B", "\u0574\u0561\u0575\u056B\u057D\u056B", "\u0570\u0578\u0582\u0576\u056B\u057D\u056B", "\u0570\u0578\u0582\u056C\u056B\u057D\u056B", "\u0585\u0563\u0578\u057D\u057F\u0578\u057D\u056B", "\u057D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580\u056B", "\u0570\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580\u056B", "\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056B", "\u0564\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580\u056B"],
      "SHORTDAY": ["\u056F\u056B\u0580", "\u0565\u0580\u056F", "\u0565\u0580\u0584", "\u0579\u0580\u0584", "\u0570\u0576\u0563", "\u0578\u0582\u0580", "\u0577\u0562\u0569"],
      "SHORTMONTH": ["\u0570\u0576\u057E", "\u0583\u057F\u057E", "\u0574\u0580\u057F", "\u0561\u057A\u0580", "\u0574\u0575\u057D", "\u0570\u0576\u057D", "\u0570\u056C\u057D", "\u0585\u0563\u057D", "\u057D\u0565\u057A", "\u0570\u0578\u056F", "\u0576\u0578\u0575", "\u0564\u0565\u056F"],
      "STANDALONEMONTH": ["\u0570\u0578\u0582\u0576\u057E\u0561\u0580", "\u0583\u0565\u057F\u0580\u057E\u0561\u0580", "\u0574\u0561\u0580\u057F", "\u0561\u057A\u0580\u056B\u056C", "\u0574\u0561\u0575\u056B\u057D", "\u0570\u0578\u0582\u0576\u056B\u057D", "\u0570\u0578\u0582\u056C\u056B\u057D", "\u0585\u0563\u0578\u057D\u057F\u0578\u057D", "\u057D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580", "\u0570\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580", "\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580", "\u0564\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "y\u0569. MMMM d, EEEE",
      "longDate": "dd MMMM, y\u0569.",
      "medium": "dd MMM, y\u0569. H:mm:ss",
      "mediumDate": "dd MMM, y\u0569.",
      "mediumTime": "H:mm:ss",
      "short": "dd.MM.yy H:mm",
      "shortDate": "dd.MM.yy",
      "shortTime": "H:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "Dram",
      "DECIMAL_SEP": ",",
      "GROUP_SEP": ".",
      "PATTERNS": [{
        "gSize": 0,
        "lgSize": 0,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      }, {
        "gSize": 0,
        "lgSize": 0,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "\xA0\xA4",
        "posPre": "",
        "posSuf": "\xA0\xA4"
      }]
    },
    "id": "hy",
    "localeID": "hy",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;if (i == 0 || i == 1) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_hy-compiled.js.map