"use strict";

/*
 AngularJS v1.5.7
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (R, C) {
  'use strict';
  function Aa(a, b, c) {
    if (!a) throw Ma("areq", b || "?", c || "required");return a;
  }function Ba(a, b) {
    if (!a && !b) return "";if (!a) return b;if (!b) return a;ca(a) && (a = a.join(" "));ca(b) && (b = b.join(" "));return a + " " + b;
  }function Na(a) {
    var b = {};a && (a.to || a.from) && (b.to = a.to, b.from = a.from);return b;
  }function Y(a, b, c) {
    var d = "";a = ca(a) ? a : a && O(a) && a.length ? a.split(/\s+/) : [];s(a, function (a, l) {
      a && 0 < a.length && (d += 0 < l ? " " : "", d += c ? b + a : a + b);
    });return d;
  }function Oa(a) {
    if (a instanceof G) switch (a.length) {case 0:
        return a;
      case 1:
        if (1 === a[0].nodeType) return a;break;default:
        return G(da(a));}if (1 === a.nodeType) return G(a);
  }function da(a) {
    if (!a[0]) return a;for (var b = 0; b < a.length; b++) {
      var c = a[b];if (1 == c.nodeType) return c;
    }
  }function Pa(a, b, c) {
    s(b, function (b) {
      a.addClass(b, c);
    });
  }function Qa(a, b, c) {
    s(b, function (b) {
      a.removeClass(b, c);
    });
  }function V(a) {
    return function (b, c) {
      c.addClass && (Pa(a, b, c.addClass), c.addClass = null);c.removeClass && (Qa(a, b, c.removeClass), c.removeClass = null);
    };
  }function oa(a) {
    a = a || {};if (!a.$$prepared) {
      var b = a.domOperation || Q;a.domOperation = function () {
        a.$$domOperationFired = !0;b();b = Q;
      };a.$$prepared = !0;
    }return a;
  }function ha(a, b) {
    Ca(a, b);Da(a, b);
  }function Ca(a, b) {
    b.from && (a.css(b.from), b.from = null);
  }function Da(a, b) {
    b.to && (a.css(b.to), b.to = null);
  }function W(a, b, c) {
    var d = b.options || {};c = c.options || {};var e = (d.addClass || "") + " " + (c.addClass || ""),
        l = (d.removeClass || "") + " " + (c.removeClass || "");a = Ra(a.attr("class"), e, l);c.preparationClasses && (d.preparationClasses = Z(c.preparationClasses, d.preparationClasses), delete c.preparationClasses);
    e = d.domOperation !== Q ? d.domOperation : null;Ea(d, c);e && (d.domOperation = e);d.addClass = a.addClass ? a.addClass : null;d.removeClass = a.removeClass ? a.removeClass : null;b.addClass = d.addClass;b.removeClass = d.removeClass;return d;
  }function Ra(a, b, c) {
    function d(a) {
      O(a) && (a = a.split(" "));var b = {};s(a, function (a) {
        a.length && (b[a] = !0);
      });return b;
    }var e = {};a = d(a);b = d(b);s(b, function (a, b) {
      e[b] = 1;
    });c = d(c);s(c, function (a, b) {
      e[b] = 1 === e[b] ? null : -1;
    });var l = { addClass: "", removeClass: "" };s(e, function (b, c) {
      var d, e;1 === b ? (d = "addClass", e = !a[c]) : -1 === b && (d = "removeClass", e = a[c]);e && (l[d].length && (l[d] += " "), l[d] += c);
    });return l;
  }function z(a) {
    return a instanceof C.element ? a[0] : a;
  }function Sa(a, b, c) {
    var d = "";b && (d = Y(b, "ng-", !0));c.addClass && (d = Z(d, Y(c.addClass, "-add")));c.removeClass && (d = Z(d, Y(c.removeClass, "-remove")));d.length && (c.preparationClasses = d, a.addClass(d));
  }function pa(a, b) {
    var c = b ? "-" + b + "s" : "";la(a, [ma, c]);return [ma, c];
  }function ta(a, b) {
    var c = b ? "paused" : "",
        d = $ + "PlayState";la(a, [d, c]);return [d, c];
  }function la(a, b) {
    a.style[b[0]] = b[1];
  }function Z(a, b) {
    return a ? b ? a + " " + b : a : b;
  }function Fa(a, b, c) {
    var d = Object.create(null),
        e = a.getComputedStyle(b) || {};s(c, function (a, b) {
      var c = e[a];if (c) {
        var g = c.charAt(0);if ("-" === g || "+" === g || 0 <= g) c = Ta(c);0 === c && (c = null);d[b] = c;
      }
    });return d;
  }function Ta(a) {
    var b = 0;a = a.split(/\s*,\s*/);s(a, function (a) {
      "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));a = parseFloat(a) || 0;b = b ? Math.max(a, b) : a;
    });return b;
  }function ua(a) {
    return 0 === a || null != a;
  }function Ga(a, b) {
    var c = S,
        d = a + "s";b ? c += "Duration" : d += " linear all";
    return [c, d];
  }function Ha() {
    var a = Object.create(null);return { flush: function flush() {
        a = Object.create(null);
      }, count: function count(b) {
        return (b = a[b]) ? b.total : 0;
      }, get: function get(b) {
        return (b = a[b]) && b.value;
      }, put: function put(b, c) {
        a[b] ? a[b].total++ : a[b] = { total: 1, value: c };
      } };
  }function Ia(a, b, c) {
    s(c, function (c) {
      a[c] = ea(a[c]) ? a[c] : b.style.getPropertyValue(c);
    });
  }var Q = C.noop,
      Ja = C.copy,
      Ea = C.extend,
      G = C.element,
      s = C.forEach,
      ca = C.isArray,
      O = C.isString,
      va = C.isObject,
      I = C.isUndefined,
      ea = C.isDefined,
      Ka = C.isFunction,
      wa = C.isElement,
      S,
      xa,
      $,
      ya;I(R.ontransitionend) && ea(R.onwebkittransitionend) ? (S = "WebkitTransition", xa = "webkitTransitionEnd transitionend") : (S = "transition", xa = "transitionend");I(R.onanimationend) && ea(R.onwebkitanimationend) ? ($ = "WebkitAnimation", ya = "webkitAnimationEnd animationend") : ($ = "animation", ya = "animationend");var qa = $ + "Delay",
      za = $ + "Duration",
      ma = S + "Delay",
      La = S + "Duration",
      Ma = C.$$minErr("ng"),
      Ua = { transitionDuration: La, transitionDelay: ma, transitionProperty: S + "Property", animationDuration: za, animationDelay: qa, animationIterationCount: $ + "IterationCount" },
      Va = { transitionDuration: La, transitionDelay: ma, animationDuration: za, animationDelay: qa };C.module("ngAnimate", []).directive("ngAnimateSwap", ["$animate", "$rootScope", function (a, b) {
    return { restrict: "A", transclude: "element", terminal: !0, priority: 600, link: function link(b, d, e, l, n) {
        var H, g;b.$watchCollection(e.ngAnimateSwap || e["for"], function (e) {
          H && a.leave(H);g && (g.$destroy(), g = null);if (e || 0 === e) g = b.$new(), n(g, function (b) {
            H = b;a.enter(b, null, d);
          });
        });
      } };
  }]).directive("ngAnimateChildren", ["$interpolate", function (a) {
    return { link: function link(b, c, d) {
        function e(a) {
          c.data("$$ngAnimateChildren", "on" === a || "true" === a);
        }var l = d.ngAnimateChildren;C.isString(l) && 0 === l.length ? c.data("$$ngAnimateChildren", !0) : (e(a(l)(b)), d.$observe("ngAnimateChildren", e));
      } };
  }]).factory("$$rAFScheduler", ["$$rAF", function (a) {
    function b(a) {
      d = d.concat(a);c();
    }function c() {
      if (d.length) {
        for (var b = d.shift(), n = 0; n < b.length; n++) {
          b[n]();
        }e || a(function () {
          e || c();
        });
      }
    }var d, e;d = b.queue = [];b.waitUntilQuiet = function (b) {
      e && e();e = a(function () {
        e = null;b();c();
      });
    };return b;
  }]).provider("$$animateQueue", ["$animateProvider", function (a) {
    function b(a) {
      if (!a) return null;a = a.split(" ");var b = Object.create(null);s(a, function (a) {
        b[a] = !0;
      });return b;
    }function c(a, c) {
      if (a && c) {
        var d = b(c);return a.split(" ").some(function (a) {
          return d[a];
        });
      }
    }function d(a, b, c, d) {
      return l[a].some(function (a) {
        return a(b, c, d);
      });
    }function e(a, b) {
      var c = 0 < (a.addClass || "").length,
          d = 0 < (a.removeClass || "").length;return b ? c && d : c || d;
    }var l = this.rules = { skip: [], cancel: [], join: [] };l.join.push(function (a, b, c) {
      return !b.structural && e(b);
    });l.skip.push(function (a, b, c) {
      return !b.structural && !e(b);
    });l.skip.push(function (a, b, c) {
      return "leave" == c.event && b.structural;
    });l.skip.push(function (a, b, c) {
      return c.structural && 2 === c.state && !b.structural;
    });l.cancel.push(function (a, b, c) {
      return c.structural && b.structural;
    });l.cancel.push(function (a, b, c) {
      return 2 === c.state && b.structural;
    });l.cancel.push(function (a, b, d) {
      if (d.structural) return !1;a = b.addClass;b = b.removeClass;var e = d.addClass;d = d.removeClass;return I(a) && I(b) || I(e) && I(d) ? !1 : c(a, d) || c(b, e);
    });this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function (b, c, g, l, v, Wa, P, t, F, T) {
      function J() {
        var a = !1;return function (b) {
          a ? b() : c.$$postDigest(function () {
            a = !0;b();
          });
        };
      }function y(a, b, c) {
        var f = z(b),
            d = z(a),
            N = [];(a = h[c]) && s(a, function (a) {
          x.call(a.node, f) ? N.push(a.callback) : "leave" === c && x.call(a.node, d) && N.push(a.callback);
        });return N;
      }function r(a, b, c) {
        var f = da(b);return a.filter(function (a) {
          return !(a.node === f && (!c || a.callback === c));
        });
      }function p(a, h, w) {
        function r(c, f, d, h) {
          sa(function () {
            var c = y(T, a, f);c.length ? b(function () {
              s(c, function (b) {
                b(a, d, h);
              });"close" !== d || a[0].parentNode || ra.off(a);
            }) : "close" !== d || a[0].parentNode || ra.off(a);
          });c.progress(f, d, h);
        }function k(b) {
          var c = a,
              f = m;f.preparationClasses && (c.removeClass(f.preparationClasses), f.preparationClasses = null);f.activeClasses && (c.removeClass(f.activeClasses), f.activeClasses = null);E(a, m);ha(a, m);m.domOperation();B.complete(!b);
        }var m = Ja(w),
            p,
            T;if (a = Oa(a)) p = z(a), T = a.parent();var m = oa(m),
            B = new P(),
            sa = J();ca(m.addClass) && (m.addClass = m.addClass.join(" "));m.addClass && !O(m.addClass) && (m.addClass = null);ca(m.removeClass) && (m.removeClass = m.removeClass.join(" "));m.removeClass && !O(m.removeClass) && (m.removeClass = null);m.from && !va(m.from) && (m.from = null);m.to && !va(m.to) && (m.to = null);if (!p) return k(), B;w = [p.className, m.addClass, m.removeClass].join(" ");if (!Xa(w)) return k(), B;var g = 0 <= ["enter", "move", "leave"].indexOf(h),
            x = l[0].hidden,
            t = !f || x || N.get(p);w = !t && A.get(p) || {};var F = !!w.state;t || F && 1 == w.state || (t = !M(a, T, h));if (t) return x && r(B, h, "start"), k(), x && r(B, h, "close"), B;g && K(a);x = { structural: g, element: a, event: h, addClass: m.addClass, removeClass: m.removeClass, close: k, options: m, runner: B };if (F) {
          if (d("skip", a, x, w)) {
            if (2 === w.state) return k(), B;W(a, w, x);return w.runner;
          }if (d("cancel", a, x, w)) {
            if (2 === w.state) w.runner.end();else if (w.structural) w.close();else return W(a, w, x), w.runner;
          } else if (d("join", a, x, w)) if (2 === w.state) W(a, x, {});else return Sa(a, g ? h : null, m), h = x.event = w.event, m = W(a, w, x), w.runner;
        } else W(a, x, {});(F = x.structural) || (F = "animate" === x.event && 0 < Object.keys(x.options.to || {}).length || e(x));if (!F) return k(), ka(a), B;var v = (w.counter || 0) + 1;x.counter = v;L(a, 1, x);c.$$postDigest(function () {
          var b = A.get(p),
              c = !b,
              b = b || {},
              f = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || e(b));if (c || b.counter !== v || !f) {
            c && (E(a, m), ha(a, m));if (c || g && b.event !== h) m.domOperation(), B.end();f || ka(a);
          } else h = !b.structural && e(b, !0) ? "setClass" : b.event, L(a, 2), b = Wa(a, h, b.options), B.setHost(b), r(B, h, "start", {}), b.done(function (b) {
            k(!b);
            (b = A.get(p)) && b.counter === v && ka(z(a));r(B, h, "close", {});
          });
        });return B;
      }function K(a) {
        a = z(a).querySelectorAll("[data-ng-animate]");s(a, function (a) {
          var b = parseInt(a.getAttribute("data-ng-animate")),
              c = A.get(a);if (c) switch (b) {case 2:
              c.runner.end();case 1:
              A.remove(a);}
        });
      }function ka(a) {
        a = z(a);a.removeAttribute("data-ng-animate");A.remove(a);
      }function k(a, b) {
        return z(a) === z(b);
      }function M(a, b, c) {
        c = G(l[0].body);var f = k(a, c) || "HTML" === a[0].nodeName,
            d = k(a, g),
            h = !1,
            r,
            e = N.get(z(a));(a = G.data(a[0], "$ngAnimatePin")) && (b = a);for (b = z(b); b;) {
          d || (d = k(b, g));if (1 !== b.nodeType) break;a = A.get(b) || {};if (!h) {
            var p = N.get(b);if (!0 === p && !1 !== e) {
              e = !0;break;
            } else !1 === p && (e = !1);h = a.structural;
          }if (I(r) || !0 === r) a = G.data(b, "$$ngAnimateChildren"), ea(a) && (r = a);if (h && !1 === r) break;f || (f = k(b, c));if (f && d) break;if (!d && (a = G.data(b, "$ngAnimatePin"))) {
            b = z(a);continue;
          }b = b.parentNode;
        }return (!h || r) && !0 !== e && d && f;
      }function L(a, b, c) {
        c = c || {};c.state = b;a = z(a);a.setAttribute("data-ng-animate", b);c = (b = A.get(a)) ? Ea(b, c) : c;A.put(a, c);
      }var A = new v(),
          N = new v(),
          f = null,
          B = c.$watch(function () {
        return 0 === t.totalPendingRequests;
      }, function (a) {
        a && (B(), c.$$postDigest(function () {
          c.$$postDigest(function () {
            null === f && (f = !0);
          });
        }));
      }),
          h = {},
          sa = a.classNameFilter(),
          Xa = sa ? function (a) {
        return sa.test(a);
      } : function () {
        return !0;
      },
          E = V(F),
          x = R.Node.prototype.contains || function (a) {
        return this === a || !!(this.compareDocumentPosition(a) & 16);
      },
          ra = { on: function on(a, b, c) {
          var f = da(b);h[a] = h[a] || [];h[a].push({ node: f, callback: c });G(b).on("$destroy", function () {
            A.get(f) || ra.off(a, b, c);
          });
        }, off: function off(a, b, c) {
          if (1 !== arguments.length || C.isString(arguments[0])) {
            var f = h[a];f && (h[a] = 1 === arguments.length ? null : r(f, b, c));
          } else for (f in b = arguments[0], h) {
            h[f] = r(h[f], b);
          }
        }, pin: function pin(a, b) {
          Aa(wa(a), "element", "not an element");Aa(wa(b), "parentElement", "not an element");a.data("$ngAnimatePin", b);
        }, push: function push(a, b, c, f) {
          c = c || {};c.domOperation = f;return p(a, b, c);
        }, enabled: function enabled(a, b) {
          var c = arguments.length;if (0 === c) b = !!f;else if (wa(a)) {
            var d = z(a),
                h = N.get(d);1 === c ? b = !h : N.put(d, !b);
          } else b = f = !!a;return b;
        } };return ra;
    }];
  }]).provider("$$animation", ["$animateProvider", function (a) {
    var b = this.drivers = [];this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (a, d, e, l, n, H) {
      function g(a) {
        function b(a) {
          if (a.processed) return a;a.processed = !0;var d = a.domNode,
              p = d.parentNode;e.put(d, a);for (var K; p;) {
            if (K = e.get(p)) {
              K.processed || (K = b(K));break;
            }p = p.parentNode;
          }(K || c).children.push(a);return a;
        }var c = { children: [] },
            d,
            e = new n();for (d = 0; d < a.length; d++) {
          var g = a[d];e.put(g.domNode, a[d] = { domNode: g.domNode, fn: g.fn, children: [] });
        }for (d = 0; d < a.length; d++) {
          b(a[d]);
        }return function (a) {
          var b = [],
              c = [],
              d;for (d = 0; d < a.children.length; d++) {
            c.push(a.children[d]);
          }a = c.length;var e = 0,
              k = [];for (d = 0; d < c.length; d++) {
            var g = c[d];0 >= a && (a = e, e = 0, b.push(k), k = []);k.push(g.fn);g.children.forEach(function (a) {
              e++;c.push(a);
            });a--;
          }k.length && b.push(k);return b;
        }(c);
      }var u = [],
          v = V(a);return function (n, P, t) {
        function F(a) {
          a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");var b = [];s(a, function (a) {
            var c = a.getAttribute("ng-animate-ref");c && c.length && b.push(a);
          });return b;
        }function T(a) {
          var b = [],
              c = {};s(a, function (a, d) {
            var h = z(a.element),
                e = 0 <= ["enter", "move"].indexOf(a.event),
                h = a.structural ? F(h) : [];if (h.length) {
              var k = e ? "to" : "from";s(h, function (a) {
                var b = a.getAttribute("ng-animate-ref");c[b] = c[b] || {};c[b][k] = { animationID: d, element: G(a) };
              });
            } else b.push(a);
          });var d = {},
              e = {};s(c, function (c, k) {
            var r = c.from,
                p = c.to;if (r && p) {
              var A = a[r.animationID],
                  g = a[p.animationID],
                  B = r.animationID.toString();if (!e[B]) {
                var n = e[B] = { structural: !0, beforeStart: function beforeStart() {
                    A.beforeStart();
                    g.beforeStart();
                  }, close: function close() {
                    A.close();g.close();
                  }, classes: J(A.classes, g.classes), from: A, to: g, anchors: [] };n.classes.length ? b.push(n) : (b.push(A), b.push(g));
              }e[B].anchors.push({ out: r.element, "in": p.element });
            } else r = r ? r.animationID : p.animationID, p = r.toString(), d[p] || (d[p] = !0, b.push(a[r]));
          });return b;
        }function J(a, b) {
          a = a.split(" ");b = b.split(" ");for (var c = [], d = 0; d < a.length; d++) {
            var e = a[d];if ("ng-" !== e.substring(0, 3)) for (var r = 0; r < b.length; r++) {
              if (e === b[r]) {
                c.push(e);break;
              }
            }
          }return c.join(" ");
        }function y(a) {
          for (var c = b.length - 1; 0 <= c; c--) {
            var d = e.get(b[c])(a);if (d) return d;
          }
        }function r(a, b) {
          function c(a) {
            (a = a.data("$$animationRunner")) && a.setHost(b);
          }a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element);
        }function p() {
          var a = n.data("$$animationRunner");!a || "leave" === P && t.$$domOperationFired || a.end();
        }function K(b) {
          n.off("$destroy", p);n.removeData("$$animationRunner");v(n, t);ha(n, t);t.domOperation();L && a.removeClass(n, L);n.removeClass("ng-animate");k.complete(!b);
        }t = oa(t);var ka = 0 <= ["enter", "move", "leave"].indexOf(P),
            k = new l({ end: function end() {
            K();
          }, cancel: function cancel() {
            K(!0);
          } });if (!b.length) return K(), k;n.data("$$animationRunner", k);var M = Ba(n.attr("class"), Ba(t.addClass, t.removeClass)),
            L = t.tempClasses;L && (M += " " + L, t.tempClasses = null);var A;ka && (A = "ng-" + P + "-prepare", a.addClass(n, A));u.push({ element: n, classes: M, event: P, structural: ka, options: t, beforeStart: function beforeStart() {
            n.addClass("ng-animate");L && a.addClass(n, L);A && (a.removeClass(n, A), A = null);
          }, close: K });n.on("$destroy", p);if (1 < u.length) return k;d.$$postDigest(function () {
          var a = [];s(u, function (b) {
            b.element.data("$$animationRunner") ? a.push(b) : b.close();
          });u.length = 0;var b = T(a),
              c = [];s(b, function (a) {
            c.push({ domNode: z(a.from ? a.from.element : a.element), fn: function fn() {
                a.beforeStart();var b,
                    c = a.close;if ((a.anchors ? a.from.element || a.to.element : a.element).data("$$animationRunner")) {
                  var d = y(a);d && (b = d.start);
                }b ? (b = b(), b.done(function (a) {
                  c(!a);
                }), r(a, b)) : c();
              } });
          });H(g(c));
        });return k;
      };
    }];
  }]).provider("$animateCss", ["$animateProvider", function (a) {
    var b = Ha(),
        c = Ha();this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (a, e, l, n, H, g, u, v) {
      function C(a, b) {
        var c = a.parentNode;return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++J)) + "-" + a.getAttribute("class") + "-" + b;
      }function P(r, p, g, n) {
        var k;0 < b.count(g) && (k = c.get(g), k || (p = Y(p, "-stagger"), e.addClass(r, p), k = Fa(a, r, n), k.animationDuration = Math.max(k.animationDuration, 0), k.transitionDuration = Math.max(k.transitionDuration, 0), e.removeClass(r, p), c.put(g, k)));return k || {};
      }function t(a) {
        y.push(a);
        u.waitUntilQuiet(function () {
          b.flush();c.flush();for (var a = H(), d = 0; d < y.length; d++) {
            y[d](a);
          }y.length = 0;
        });
      }function F(c, e, g) {
        e = b.get(g);e || (e = Fa(a, c, Ua), "infinite" === e.animationIterationCount && (e.animationIterationCount = 1));b.put(g, e);c = e;g = c.animationDelay;e = c.transitionDelay;c.maxDelay = g && e ? Math.max(g, e) : g || e;c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration);return c;
      }var T = V(e),
          J = 0,
          y = [];return function (a, c) {
        function d() {
          k();
        }function u() {
          k(!0);
        }function k(b) {
          if (!(x || G && J)) {
            x = !0;J = !1;f.$$skipPreparationClasses || e.removeClass(a, ga);e.removeClass(a, ea);ta(h, !1);pa(h, !1);s(y, function (a) {
              h.style[a[0]] = "";
            });T(a, f);ha(a, f);Object.keys(B).length && s(B, function (a, b) {
              a ? h.style.setProperty(b, a) : h.style.removeProperty(b);
            });if (f.onDone) f.onDone();fa && fa.length && a.off(fa.join(" "), A);var c = a.data("$$animateCss");c && (n.cancel(c[0].timer), a.removeData("$$animateCss"));I && I.complete(!b);
          }
        }function M(a) {
          q.blockTransition && pa(h, a);q.blockKeyframeAnimation && ta(h, !!a);
        }function L() {
          I = new l({ end: d, cancel: u });t(Q);k();return { $$willAnimate: !1, start: function start() {
              return I;
            }, end: d };
        }function A(a) {
          a.stopPropagation();var b = a.originalEvent || a;a = b.$manualTimeStamp || Date.now();b = parseFloat(b.elapsedTime.toFixed(3));Math.max(a - W, 0) >= R && b >= m && (G = !0, k());
        }function N() {
          function b() {
            if (!x) {
              M(!1);s(y, function (a) {
                h.style[a[0]] = a[1];
              });T(a, f);e.addClass(a, ea);if (q.recalculateTimingStyles) {
                na = h.className + " " + ga;ia = C(h, na);D = F(h, na, ia);aa = D.maxDelay;O = Math.max(aa, 0);m = D.maxDuration;if (0 === m) {
                  k();return;
                }q.hasTransitions = 0 < D.transitionDuration;q.hasAnimations = 0 < D.animationDuration;
              }q.applyAnimationDelay && (aa = "boolean" !== typeof f.delay && ua(f.delay) ? parseFloat(f.delay) : aa, O = Math.max(aa, 0), D.animationDelay = aa, ba = [qa, aa + "s"], y.push(ba), h.style[ba[0]] = ba[1]);R = 1E3 * O;V = 1E3 * m;if (f.easing) {
                var d,
                    g = f.easing;q.hasTransitions && (d = S + "TimingFunction", y.push([d, g]), h.style[d] = g);q.hasAnimations && (d = $ + "TimingFunction", y.push([d, g]), h.style[d] = g);
              }D.transitionDuration && fa.push(xa);D.animationDuration && fa.push(ya);W = Date.now();var p = R + 1.5 * V;d = W + p;var g = a.data("$$animateCss") || [],
                  N = !0;if (g.length) {
                var l = g[0];(N = d > l.expectedEndTime) ? n.cancel(l.timer) : g.push(k);
              }N && (p = n(c, p, !1), g[0] = { timer: p, expectedEndTime: d }, g.push(k), a.data("$$animateCss", g));if (fa.length) a.on(fa.join(" "), A);f.to && (f.cleanupStyles && Ia(B, h, Object.keys(f.to)), Da(a, f));
            }
          }function c() {
            var b = a.data("$$animateCss");if (b) {
              for (var d = 1; d < b.length; d++) {
                b[d]();
              }a.removeData("$$animateCss");
            }
          }if (!x) if (h.parentNode) {
            var d = function d(a) {
              if (G) J && a && (J = !1, k());else if (J = !a, D.animationDuration) if (a = ta(h, J), J) y.push(a);else {
                var b = y,
                    c = b.indexOf(a);0 <= a && b.splice(c, 1);
              }
            },
                g = 0 < da && (D.transitionDuration && 0 === X.transitionDuration || D.animationDuration && 0 === X.animationDuration) && Math.max(X.animationDelay, X.transitionDelay);g ? n(b, Math.floor(g * da * 1E3), !1) : b();w.resume = function () {
              d(!0);
            };w.pause = function () {
              d(!1);
            };
          } else k();
        }var f = c || {};f.$$prepared || (f = oa(Ja(f)));var B = {},
            h = z(a);if (!h || !h.parentNode || !v.enabled()) return L();var y = [],
            H = a.attr("class"),
            E = Na(f),
            x,
            J,
            G,
            I,
            w,
            O,
            R,
            m,
            V,
            W,
            fa = [];if (0 === f.duration || !g.animations && !g.transitions) return L();var ja = f.event && ca(f.event) ? f.event.join(" ") : f.event,
            Z = "",
            U = "";ja && f.structural ? Z = Y(ja, "ng-", !0) : ja && (Z = ja);f.addClass && (U += Y(f.addClass, "-add"));f.removeClass && (U.length && (U += " "), U += Y(f.removeClass, "-remove"));f.applyClassesEarly && U.length && T(a, f);var ga = [Z, U].join(" ").trim(),
            na = H + " " + ga,
            ea = Y(ga, "-active"),
            H = E.to && 0 < Object.keys(E.to).length;if (!(0 < (f.keyframeStyle || "").length || H || ga)) return L();var ia, X;0 < f.stagger ? (E = parseFloat(f.stagger), X = { transitionDelay: E, animationDelay: E,
          transitionDuration: 0, animationDuration: 0 }) : (ia = C(h, na), X = P(h, ga, ia, Va));f.$$skipPreparationClasses || e.addClass(a, ga);f.transitionStyle && (E = [S, f.transitionStyle], la(h, E), y.push(E));0 <= f.duration && (E = 0 < h.style[S].length, E = Ga(f.duration, E), la(h, E), y.push(E));f.keyframeStyle && (E = [$, f.keyframeStyle], la(h, E), y.push(E));var da = X ? 0 <= f.staggerIndex ? f.staggerIndex : b.count(ia) : 0;(ja = 0 === da) && !f.skipBlocking && pa(h, 9999);var D = F(h, na, ia),
            aa = D.maxDelay;O = Math.max(aa, 0);m = D.maxDuration;var q = {};q.hasTransitions = 0 < D.transitionDuration;q.hasAnimations = 0 < D.animationDuration;q.hasTransitionAll = q.hasTransitions && "all" == D.transitionProperty;q.applyTransitionDuration = H && (q.hasTransitions && !q.hasTransitionAll || q.hasAnimations && !q.hasTransitions);q.applyAnimationDuration = f.duration && q.hasAnimations;q.applyTransitionDelay = ua(f.delay) && (q.applyTransitionDuration || q.hasTransitions);q.applyAnimationDelay = ua(f.delay) && q.hasAnimations;q.recalculateTimingStyles = 0 < U.length;if (q.applyTransitionDuration || q.applyAnimationDuration) m = f.duration ? parseFloat(f.duration) : m, q.applyTransitionDuration && (q.hasTransitions = !0, D.transitionDuration = m, E = 0 < h.style[S + "Property"].length, y.push(Ga(m, E))), q.applyAnimationDuration && (q.hasAnimations = !0, D.animationDuration = m, y.push([za, m + "s"]));if (0 === m && !q.recalculateTimingStyles) return L();if (null != f.delay) {
          var ba;"boolean" !== typeof f.delay && (ba = parseFloat(f.delay), O = Math.max(ba, 0));q.applyTransitionDelay && y.push([ma, ba + "s"]);q.applyAnimationDelay && y.push([qa, ba + "s"]);
        }null == f.duration && 0 < D.transitionDuration && (q.recalculateTimingStyles = q.recalculateTimingStyles || ja);R = 1E3 * O;V = 1E3 * m;f.skipBlocking || (q.blockTransition = 0 < D.transitionDuration, q.blockKeyframeAnimation = 0 < D.animationDuration && 0 < X.animationDelay && 0 === X.animationDuration);f.from && (f.cleanupStyles && Ia(B, h, Object.keys(f.from)), Ca(a, f));q.blockTransition || q.blockKeyframeAnimation ? M(m) : f.skipBlocking || pa(h, !1);return { $$willAnimate: !0, end: d, start: function start() {
            if (!x) return w = { end: d, cancel: u, resume: null, pause: null }, I = new l(w), t(N), I;
          } };
      };
    }];
  }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
    a.drivers.push("$$animateCssDriver");this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, c, d, e, l, n, H) {
      function g(a) {
        return a.replace(/\bng-\S+\b/g, "");
      }function u(a, b) {
        O(a) && (a = a.split(" "));O(b) && (b = b.split(" "));return a.filter(function (a) {
          return -1 === b.indexOf(a);
        }).join(" ");
      }function v(c, e, n) {
        function l(a) {
          var b = {},
              c = z(a).getBoundingClientRect();s(["width", "height", "top", "left"], function (a) {
            var d = c[a];
            switch (a) {case "top":
                d += t.scrollTop;break;case "left":
                d += t.scrollLeft;}b[a] = Math.floor(d) + "px";
          });return b;
        }function p() {
          var c = g(n.attr("class") || ""),
              d = u(c, k),
              c = u(k, c),
              d = a(v, { to: l(n), addClass: "ng-anchor-in " + d, removeClass: "ng-anchor-out " + c, delay: !0 });return d.$$willAnimate ? d : null;
        }function H() {
          v.remove();e.removeClass("ng-animate-shim");n.removeClass("ng-animate-shim");
        }var v = G(z(e).cloneNode(!0)),
            k = g(v.attr("class") || "");e.addClass("ng-animate-shim");n.addClass("ng-animate-shim");v.addClass("ng-anchor");
        F.append(v);var M;c = function () {
          var c = a(v, { addClass: "ng-anchor-out", delay: !0, from: l(e) });return c.$$willAnimate ? c : null;
        }();if (!c && (M = p(), !M)) return H();var L = c || M;return { start: function start() {
            function a() {
              c && c.end();
            }var b,
                c = L.start();c.done(function () {
              c = null;if (!M && (M = p())) return c = M.start(), c.done(function () {
                c = null;H();b.complete();
              }), c;H();b.complete();
            });return b = new d({ end: a, cancel: a });
          } };
      }function C(a, b, c, e) {
        var g = P(a, Q),
            n = P(b, Q),
            l = [];s(e, function (a) {
          (a = v(c, a.out, a["in"])) && l.push(a);
        });if (g || n || 0 !== l.length) return { start: function start() {
            function a() {
              s(b, function (a) {
                a.end();
              });
            }var b = [];g && b.push(g.start());n && b.push(n.start());s(l, function (a) {
              b.push(a.start());
            });var c = new d({ end: a, cancel: a });d.all(b, function (a) {
              c.complete(a);
            });return c;
          } };
      }function P(c) {
        var d = c.element,
            e = c.options || {};c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone = e.domOperation));e.preparationClasses && (e.event = Z(e.event, e.preparationClasses));c = a(d, e);return c.$$willAnimate ? c : null;
      }if (!l.animations && !l.transitions) return Q;var t = H[0].body;
      c = z(e);var F = G(c.parentNode && 11 === c.parentNode.nodeType || t.contains(c) ? c : t);V(n);return function (a) {
        return a.from && a.to ? C(a.from, a.to, a.classes, a.anchors) : P(a);
      };
    }];
  }]).provider("$$animateJs", ["$animateProvider", function (a) {
    this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
      function e(c) {
        c = ca(c) ? c : c.split(" ");for (var d = [], e = {}, l = 0; l < c.length; l++) {
          var v = c[l],
              s = a.$$registeredAnimations[v];s && !e[v] && (d.push(b.get(s)), e[v] = !0);
        }return d;
      }var l = V(d);return function (a, b, d, u) {
        function v() {
          u.domOperation();
          l(a, u);
        }function C(a, b, d, e, f) {
          switch (d) {case "animate":
              b = [b, e.from, e.to, f];break;case "setClass":
              b = [b, G, J, f];break;case "addClass":
              b = [b, G, f];break;case "removeClass":
              b = [b, J, f];break;default:
              b = [b, f];}b.push(e);if (a = a.apply(a, b)) if (Ka(a.start) && (a = a.start()), a instanceof c) a.done(f);else if (Ka(a)) return a;return Q;
        }function z(a, b, d, e, f) {
          var g = [];s(e, function (e) {
            var k = e[f];k && g.push(function () {
              var e,
                  f,
                  g = !1,
                  h = function h(a) {
                g || (g = !0, (f || Q)(a), e.complete(!a));
              };e = new c({ end: function end() {
                  h();
                }, cancel: function cancel() {
                  h(!0);
                } });
              f = C(k, a, b, d, function (a) {
                h(!1 === a);
              });return e;
            });
          });return g;
        }function t(a, b, d, e, f) {
          var g = z(a, b, d, e, f);if (0 === g.length) {
            var h, k;"beforeSetClass" === f ? (h = z(a, "removeClass", d, e, "beforeRemoveClass"), k = z(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = z(a, "removeClass", d, e, "removeClass"), k = z(a, "addClass", d, e, "addClass"));h && (g = g.concat(h));k && (g = g.concat(k));
          }if (0 !== g.length) return function (a) {
            var b = [];g.length && s(g, function (a) {
              b.push(a());
            });b.length ? c.all(b, a) : a();return function (a) {
              s(b, function (b) {
                a ? b.cancel() : b.end();
              });
            };
          };
        }var F = !1;3 === arguments.length && va(d) && (u = d, d = null);u = oa(u);d || (d = a.attr("class") || "", u.addClass && (d += " " + u.addClass), u.removeClass && (d += " " + u.removeClass));var G = u.addClass,
            J = u.removeClass,
            y = e(d),
            r,
            p;if (y.length) {
          var K, I;"leave" == b ? (I = "leave", K = "afterLeave") : (I = "before" + b.charAt(0).toUpperCase() + b.substr(1), K = b);"enter" !== b && "move" !== b && (r = t(a, b, u, y, I));p = t(a, b, u, y, K);
        }if (r || p) {
          var k;return { $$willAnimate: !0, end: function end() {
              k ? k.end() : (F = !0, v(), ha(a, u), k = new c(), k.complete(!0));return k;
            },
            start: function start() {
              function b(c) {
                F = !0;v();ha(a, u);k.complete(c);
              }if (k) return k;k = new c();var d,
                  e = [];r && e.push(function (a) {
                d = r(a);
              });e.length ? e.push(function (a) {
                v();a(!0);
              }) : v();p && e.push(function (a) {
                d = p(a);
              });k.setHost({ end: function end() {
                  F || ((d || Q)(void 0), b(void 0));
                }, cancel: function cancel() {
                  F || ((d || Q)(!0), b(!0));
                } });c.chain(e, b);return k;
            } };
        }
      };
    }];
  }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
    a.drivers.push("$$animateJsDriver");this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) {
      function d(c) {
        return a(c.element, c.event, c.classes, c.options);
      }return function (a) {
        if (a.from && a.to) {
          var b = d(a.from),
              n = d(a.to);if (b || n) return { start: function start() {
              function a() {
                return function () {
                  s(d, function (a) {
                    a.end();
                  });
                };
              }var d = [];b && d.push(b.start());n && d.push(n.start());c.all(d, function (a) {
                e.complete(a);
              });var e = new c({ end: a(), cancel: a() });return e;
            } };
        } else return d(a);
      };
    }];
  }]);
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map

//# sourceMappingURL=angular-animate.min-compiled.js.map