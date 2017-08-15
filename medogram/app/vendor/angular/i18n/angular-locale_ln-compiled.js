'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["nt\u0254\u0301ng\u0254\u0301", "mp\xF3kwa"],
      "DAY": ["eyenga", "mok\u0254l\u0254 mwa yambo", "mok\u0254l\u0254 mwa m\xEDbal\xE9", "mok\u0254l\u0254 mwa m\xEDs\xE1to", "mok\u0254l\u0254 ya m\xEDn\xE9i", "mok\u0254l\u0254 ya m\xEDt\xE1no", "mp\u0254\u0301s\u0254"],
      "ERANAMES": ["Yambo ya Y\xE9zu Kr\xEDs", "Nsima ya Y\xE9zu Kr\xEDs"],
      "ERAS": ["lib\xF3so ya", "nsima ya Y"],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["s\xE1nz\xE1 ya yambo", "s\xE1nz\xE1 ya m\xEDbal\xE9", "s\xE1nz\xE1 ya m\xEDs\xE1to", "s\xE1nz\xE1 ya m\xEDnei", "s\xE1nz\xE1 ya m\xEDt\xE1no", "s\xE1nz\xE1 ya mot\xF3b\xE1", "s\xE1nz\xE1 ya nsambo", "s\xE1nz\xE1 ya mwambe", "s\xE1nz\xE1 ya libwa", "s\xE1nz\xE1 ya z\xF3mi", "s\xE1nz\xE1 ya z\xF3mi na m\u0254\u030Ck\u0254\u0301", "s\xE1nz\xE1 ya z\xF3mi na m\xEDbal\xE9"],
      "SHORTDAY": ["eye", "ybo", "mbl", "mst", "min", "mtn", "mps"],
      "SHORTMONTH": ["yan", "fbl", "msi", "apl", "mai", "yun", "yul", "agt", "stb", "\u0254tb", "nvb", "dsb"],
      "STANDALONEMONTH": ["s\xE1nz\xE1 ya yambo", "s\xE1nz\xE1 ya m\xEDbal\xE9", "s\xE1nz\xE1 ya m\xEDs\xE1to", "s\xE1nz\xE1 ya m\xEDnei", "s\xE1nz\xE1 ya m\xEDt\xE1no", "s\xE1nz\xE1 ya mot\xF3b\xE1", "s\xE1nz\xE1 ya nsambo", "s\xE1nz\xE1 ya mwambe", "s\xE1nz\xE1 ya libwa", "s\xE1nz\xE1 ya z\xF3mi", "s\xE1nz\xE1 ya z\xF3mi na m\u0254\u030Ck\u0254\u0301", "s\xE1nz\xE1 ya z\xF3mi na m\xEDbal\xE9"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE d MMMM y",
      "longDate": "d MMMM y",
      "medium": "d MMM y HH:mm:ss",
      "mediumDate": "d MMM y",
      "mediumTime": "HH:mm:ss",
      "short": "d/M/y HH:mm",
      "shortDate": "d/M/y",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "FrCD",
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
        "negPre": "-",
        "negSuf": "\xA0\xA4",
        "posPre": "",
        "posSuf": "\xA0\xA4"
      }]
    },
    "id": "ln",
    "localeID": "ln",
    "pluralCat": function pluralCat(n, opt_precision) {
      if (n >= 0 && n <= 1) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_ln-compiled.js.map