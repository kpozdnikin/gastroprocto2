'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8", "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8"],
      "DAY": ["\u0CAD\u0CBE\u0CA8\u0CC1\u0CB5\u0CBE\u0CB0", "\u0CB8\u0CCB\u0CAE\u0CB5\u0CBE\u0CB0", "\u0CAE\u0C82\u0C97\u0CB3\u0CB5\u0CBE\u0CB0", "\u0CAC\u0CC1\u0CA7\u0CB5\u0CBE\u0CB0", "\u0C97\u0CC1\u0CB0\u0CC1\u0CB5\u0CBE\u0CB0", "\u0CB6\u0CC1\u0C95\u0CCD\u0CB0\u0CB5\u0CBE\u0CB0", "\u0CB6\u0CA8\u0CBF\u0CB5\u0CBE\u0CB0"],
      "ERANAMES": ["\u0C95\u0CCD\u0CB0\u0CBF\u0CB8\u0CCD\u0CA4 \u0CAA\u0CC2\u0CB0\u0CCD\u0CB5", "\u0C95\u0CCD\u0CB0\u0CBF\u0CB8\u0CCD\u0CA4 \u0CB6\u0C95"],
      "ERAS": ["\u0C95\u0CCD\u0CB0\u0CBF.\u0CAA\u0CC2", "\u0C95\u0CCD\u0CB0\u0CBF.\u0CB6"],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["\u0C9C\u0CA8\u0CB5\u0CB0\u0CBF", "\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0\u0CB5\u0CB0\u0CBF", "\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD", "\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF\u0CB2\u0CCD", "\u0CAE\u0CC7", "\u0C9C\u0CC2\u0CA8\u0CCD", "\u0C9C\u0CC1\u0CB2\u0CC8", "\u0C86\u0C97\u0CB8\u0CCD\u0C9F\u0CCD", "\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82\u0CAC\u0CB0\u0CCD", "\u0C85\u0C95\u0CCD\u0C9F\u0CCB\u0CAC\u0CB0\u0CCD", "\u0CA8\u0CB5\u0CC6\u0C82\u0CAC\u0CB0\u0CCD", "\u0CA1\u0CBF\u0CB8\u0CC6\u0C82\u0CAC\u0CB0\u0CCD"],
      "SHORTDAY": ["\u0CAD\u0CBE\u0CA8\u0CC1", "\u0CB8\u0CCB\u0CAE", "\u0CAE\u0C82\u0C97\u0CB3", "\u0CAC\u0CC1\u0CA7", "\u0C97\u0CC1\u0CB0\u0CC1", "\u0CB6\u0CC1\u0C95\u0CCD\u0CB0", "\u0CB6\u0CA8\u0CBF"],
      "SHORTMONTH": ["\u0C9C\u0CA8", "\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0", "\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD", "\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF", "\u0CAE\u0CC7", "\u0C9C\u0CC2\u0CA8\u0CCD", "\u0C9C\u0CC1\u0CB2\u0CC8", "\u0C86\u0C97", "\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82", "\u0C85\u0C95\u0CCD\u0C9F\u0CCB", "\u0CA8\u0CB5\u0CC6\u0C82", "\u0CA1\u0CBF\u0CB8\u0CC6\u0C82"],
      "STANDALONEMONTH": ["\u0C9C\u0CA8\u0CB5\u0CB0\u0CBF", "\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0\u0CB5\u0CB0\u0CBF", "\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD", "\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF\u0CB2\u0CCD", "\u0CAE\u0CC7", "\u0C9C\u0CC2\u0CA8\u0CCD", "\u0C9C\u0CC1\u0CB2\u0CC8", "\u0C86\u0C97\u0CB8\u0CCD\u0C9F\u0CCD", "\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82\u0CAC\u0CB0\u0CCD", "\u0C85\u0C95\u0CCD\u0C9F\u0CCB\u0CAC\u0CB0\u0CCD", "\u0CA8\u0CB5\u0CC6\u0C82\u0CAC\u0CB0\u0CCD", "\u0CA1\u0CBF\u0CB8\u0CC6\u0C82\u0CAC\u0CB0\u0CCD"],
      "WEEKENDRANGE": [6, 6],
      "fullDate": "EEEE, MMMM d, y",
      "longDate": "MMMM d, y",
      "medium": "MMM d, y hh:mm:ss a",
      "mediumDate": "MMM d, y",
      "mediumTime": "hh:mm:ss a",
      "short": "M/d/yy hh:mm a",
      "shortDate": "M/d/yy",
      "shortTime": "hh:mm a"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "\u20B9",
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
        "negPre": "-\xA4",
        "negSuf": "",
        "posPre": "\xA4",
        "posSuf": ""
      }]
    },
    "id": "kn",
    "localeID": "kn",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;if (i == 0 || n == 1) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_kn-compiled.js.map