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
      "AMPMS": ["m", "f"],
      "DAY": ["DiD\xF2mhnaich", "DiLuain", "DiM\xE0irt", "DiCiadain", "DiarDaoin", "DihAoine", "DiSathairne"],
      "ERANAMES": ["Ro Chr\xECosta", "An d\xE8idh Chr\xECosta"],
      "ERAS": ["RC", "AD"],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["dhen Fhaoilleach", "dhen Ghearran", "dhen Mh\xE0rt", "dhen Ghiblean", "dhen Ch\xE8itean", "dhen \xD2gmhios", "dhen Iuchar", "dhen L\xF9nastal", "dhen t-Sultain", "dhen D\xE0mhair", "dhen t-Samhain", "dhen D\xF9bhlachd"],
      "SHORTDAY": ["DiD", "DiL", "DiM", "DiC", "Dia", "Dih", "DiS"],
      "SHORTMONTH": ["Faoi", "Gearr", "M\xE0rt", "Gibl", "C\xE8it", "\xD2gmh", "Iuch", "L\xF9na", "Sult", "D\xE0mh", "Samh", "D\xF9bh"],
      "STANDALONEMONTH": ["Am Faoilleach", "An Gearran", "Am M\xE0rt", "An Giblean", "An C\xE8itean", "An t-\xD2gmhios", "An t-Iuchar", "An L\xF9nastal", "An t-Sultain", "An D\xE0mhair", "An t-Samhain", "An D\xF9bhlachd"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE, d'mh' MMMM y",
      "longDate": "d'mh' MMMM y",
      "medium": "d MMM y HH:mm:ss",
      "mediumDate": "d MMM y",
      "mediumTime": "HH:mm:ss",
      "short": "dd/MM/y HH:mm",
      "shortDate": "dd/MM/y",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "\xA3",
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
    "id": "gd",
    "localeID": "gd",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;var vf = getVF(n, opt_precision);if (i == 1 && vf.v == 0) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_gd-compiled.js.map