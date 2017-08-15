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
      "AMPMS": ["AN", "EW"],
      "DAY": ["Kwesida", "Dwowda", "Benada", "Wukuda", "Yawda", "Fida", "Memeneda"],
      "ERANAMES": ["Ansa Kristo", "Kristo Ekyiri"],
      "ERAS": ["AK", "KE"],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["Sanda-\u0186p\u025Bp\u0254n", "Kwakwar-\u0186gyefuo", "Eb\u0254w-\u0186benem", "Eb\u0254bira-Oforisuo", "Esusow Aketseaba-K\u0254t\u0254nimba", "Obirade-Ay\u025Bwohomumu", "Ay\u025Bwoho-Kitawonsa", "Difuu-\u0186sandaa", "Fankwa-\u0190b\u0254", "\u0186b\u025Bs\u025B-Ahinime", "\u0186ber\u025Bf\u025Bw-Obubuo", "Mumu-\u0186p\u025Bnimba"],
      "SHORTDAY": ["Kwe", "Dwo", "Ben", "Wuk", "Yaw", "Fia", "Mem"],
      "SHORTMONTH": ["S-\u0186", "K-\u0186", "E-\u0186", "E-O", "E-K", "O-A", "A-K", "D-\u0186", "F-\u0190", "\u0186-A", "\u0186-O", "M-\u0186"],
      "STANDALONEMONTH": ["Sanda-\u0186p\u025Bp\u0254n", "Kwakwar-\u0186gyefuo", "Eb\u0254w-\u0186benem", "Eb\u0254bira-Oforisuo", "Esusow Aketseaba-K\u0254t\u0254nimba", "Obirade-Ay\u025Bwohomumu", "Ay\u025Bwoho-Kitawonsa", "Difuu-\u0186sandaa", "Fankwa-\u0190b\u0254", "\u0186b\u025Bs\u025B-Ahinime", "\u0186ber\u025Bf\u025Bw-Obubuo", "Mumu-\u0186p\u025Bnimba"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE, y MMMM dd",
      "longDate": "y MMMM d",
      "medium": "y MMM d HH:mm:ss",
      "mediumDate": "y MMM d",
      "mediumTime": "HH:mm:ss",
      "short": "yy/MM/dd HH:mm",
      "shortDate": "yy/MM/dd",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "GHS",
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
    "id": "ak",
    "localeID": "ak",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;var vf = getVF(n, opt_precision);if (i == 1 && vf.v == 0) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_ak-compiled.js.map