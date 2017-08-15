'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\u1796\u17D2\u179A\u17B9\u1780", "\u179B\u17D2\u1784\u17B6\u1785"],
      "DAY": ["\u17A2\u17B6\u1791\u17B7\u178F\u17D2\u1799", "\u1785\u1793\u17D2\u1791", "\u17A2\u1784\u17D2\u1782\u17B6\u179A", "\u1796\u17BB\u1792", "\u1796\u17D2\u179A\u17A0\u179F\u17D2\u1794\u178F\u17B7\u17CD", "\u179F\u17BB\u1780\u17D2\u179A", "\u179F\u17C5\u179A\u17CD"],
      "ERANAMES": ["\u1798\u17BB\u1793\u200B\u1782\u17D2\u179A\u17B7\u179F\u17D2\u178F\u179F\u1780\u179A\u17B6\u1787", "\u1782\u17D2\u179A\u17B7\u179F\u17D2\u178F\u179F\u1780\u179A\u17B6\u1787"],
      "ERAS": ["\u1798\u17BB\u1793 \u1782.\u179F.", "\u1782.\u179F."],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["\u1798\u1780\u179A\u17B6", "\u1780\u17BB\u1798\u17D2\u1797\u17C8", "\u1798\u17B8\u1793\u17B6", "\u1798\u17C1\u179F\u17B6", "\u17A7\u179F\u1797\u17B6", "\u1798\u17B7\u1790\u17BB\u1793\u17B6", "\u1780\u1780\u17D2\u1780\u178A\u17B6", "\u179F\u17B8\u17A0\u17B6", "\u1780\u1789\u17D2\u1789\u17B6", "\u178F\u17BB\u179B\u17B6", "\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6", "\u1792\u17D2\u1793\u17BC"],
      "SHORTDAY": ["\u17A2\u17B6\u1791\u17B7\u178F\u17D2\u1799", "\u1785\u1793\u17D2\u1791", "\u17A2\u1784\u17D2\u1782\u17B6\u179A", "\u1796\u17BB\u1792", "\u1796\u17D2\u179A\u17A0\u179F\u17D2\u1794\u178F\u17B7\u17CD", "\u179F\u17BB\u1780\u17D2\u179A", "\u179F\u17C5\u179A\u17CD"],
      "SHORTMONTH": ["\u1798\u1780\u179A\u17B6", "\u1780\u17BB\u1798\u17D2\u1797\u17C8", "\u1798\u17B8\u1793\u17B6", "\u1798\u17C1\u179F\u17B6", "\u17A7\u179F\u1797\u17B6", "\u1798\u17B7\u1790\u17BB\u1793\u17B6", "\u1780\u1780\u17D2\u1780\u178A\u17B6", "\u179F\u17B8\u17A0\u17B6", "\u1780\u1789\u17D2\u1789\u17B6", "\u178F\u17BB\u179B\u17B6", "\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6", "\u1792\u17D2\u1793\u17BC"],
      "STANDALONEMONTH": ["\u1798\u1780\u179A\u17B6", "\u1780\u17BB\u1798\u17D2\u1797\u17C8", "\u1798\u17B8\u1793\u17B6", "\u1798\u17C1\u179F\u17B6", "\u17A7\u179F\u1797\u17B6", "\u1798\u17B7\u1790\u17BB\u1793\u17B6", "\u1780\u1780\u17D2\u1780\u178A\u17B6", "\u179F\u17B8\u17A0\u17B6", "\u1780\u1789\u17D2\u1789\u17B6", "\u178F\u17BB\u179B\u17B6", "\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6", "\u1792\u17D2\u1793\u17BC"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE d MMMM y",
      "longDate": "d MMMM y",
      "medium": "d MMM y h:mm:ss a",
      "mediumDate": "d MMM y",
      "mediumTime": "h:mm:ss a",
      "short": "d/M/yy h:mm a",
      "shortDate": "d/M/yy",
      "shortTime": "h:mm a"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "Riel",
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
        "negPre": "-\xA4",
        "negSuf": "",
        "posPre": "\xA4",
        "posSuf": ""
      }]
    },
    "id": "km",
    "localeID": "km",
    "pluralCat": function pluralCat(n, opt_precision) {
      return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_km-compiled.js.map