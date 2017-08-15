'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\u1325\u12CB\u1275", "\u12A8\u1230\u12D3\u1275"],
      "DAY": ["\u12A5\u1211\u12F5", "\u1230\u129E", "\u121B\u12AD\u1230\u129E", "\u1228\u1261\u12D5", "\u1210\u1219\u1235", "\u12D3\u122D\u1265", "\u1245\u12F3\u121C"],
      "ERANAMES": ["\u12D3\u1218\u1270 \u12D3\u1208\u121D", "\u12D3\u1218\u1270 \u121D\u1215\u1228\u1275"],
      "ERAS": ["\u12D3/\u12D3", "\u12D3/\u121D"],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["\u1303\u1295\u12E9\u12C8\u122A", "\u134C\u1265\u1229\u12C8\u122A", "\u121B\u122D\u127D", "\u12A4\u1355\u122A\u120D", "\u121C\u12ED", "\u1301\u1295", "\u1301\u120B\u12ED", "\u12A6\u1308\u1235\u1275", "\u1234\u1355\u1274\u121D\u1260\u122D", "\u12A6\u12AD\u1276\u1260\u122D", "\u1296\u126C\u121D\u1260\u122D", "\u12F2\u1234\u121D\u1260\u122D"],
      "SHORTDAY": ["\u12A5\u1211\u12F5", "\u1230\u129E", "\u121B\u12AD\u1230", "\u1228\u1261\u12D5", "\u1210\u1219\u1235", "\u12D3\u122D\u1265", "\u1245\u12F3\u121C"],
      "SHORTMONTH": ["\u1303\u1295\u12E9", "\u134C\u1265\u1229", "\u121B\u122D\u127D", "\u12A4\u1355\u122A", "\u121C\u12ED", "\u1301\u1295", "\u1301\u120B\u12ED", "\u12A6\u1308\u1235", "\u1234\u1355\u1274", "\u12A6\u12AD\u1276", "\u1296\u126C\u121D", "\u12F2\u1234\u121D"],
      "STANDALONEMONTH": ["\u1303\u1295\u12E9\u12C8\u122A", "\u134C\u1265\u1229\u12C8\u122A", "\u121B\u122D\u127D", "\u12A4\u1355\u122A\u120D", "\u121C\u12ED", "\u1301\u1295", "\u1301\u120B\u12ED", "\u12A6\u1308\u1235\u1275", "\u1234\u1355\u1274\u121D\u1260\u122D", "\u12A6\u12AD\u1276\u1260\u122D", "\u1296\u126C\u121D\u1260\u122D", "\u12F2\u1234\u121D\u1260\u122D"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE, d MMMM y",
      "longDate": "d MMMM y",
      "medium": "d MMM y h:mm:ss a",
      "mediumDate": "d MMM y",
      "mediumTime": "h:mm:ss a",
      "short": "dd/MM/y h:mm a",
      "shortDate": "dd/MM/y",
      "shortTime": "h:mm a"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "Birr",
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
    "id": "am",
    "localeID": "am",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;if (i == 0 || n == 1) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_am-compiled.js.map