'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["AM", "PM"],
      "DAY": ["domingo", "segunda-feira", "ter\xE7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xE1bado"],
      "ERANAMES": ["Antes de Cristo", "Ano do Senhor"],
      "ERAS": ["a.C.", "d.C."],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
      "SHORTDAY": ["dom", "seg", "ter", "qua", "qui", "sex", "s\xE1b"],
      "SHORTMONTH": ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
      "STANDALONEMONTH": ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE, d 'de' MMMM 'de' y",
      "longDate": "d 'de' MMMM 'de' y",
      "medium": "d 'de' MMM 'de' y HH:mm:ss",
      "mediumDate": "d 'de' MMM 'de' y",
      "mediumTime": "HH:mm:ss",
      "short": "dd/MM/yy HH:mm",
      "shortDate": "dd/MM/yy",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "R$",
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
    "id": "pt",
    "localeID": "pt",
    "pluralCat": function pluralCat(n, opt_precision) {
      if (n >= 0 && n <= 2 && n != 2) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_pt-compiled.js.map