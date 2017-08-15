"use strict";

/*
 AngularJS v1.5.7
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (z, l) {
  'use strict';
  function w() {
    return ["$animate", function (t) {
      return { restrict: "AE", transclude: "element", priority: 1, terminal: !0, require: "^^ngMessages", link: function link(p, n, a, c, f) {
          var e = n[0],
              d,
              q = a.ngMessage || a.when;a = a.ngMessageExp || a.whenExp;var k = function k(a) {
            d = a ? x(a) ? a : a.split(/[\s,]+/) : null;c.reRender();
          };a ? (k(p.$eval(a)), p.$watchCollection(a, k)) : k(q);var g, r;c.register(e, r = { test: function test(a) {
              var m = d;a = m ? x(m) ? 0 <= m.indexOf(a) : m.hasOwnProperty(a) : void 0;return a;
            }, attach: function attach() {
              g || f(function (a, m) {
                t.enter(a, null, n);g = a;var d = g.$$attachId = c.getAttachId();g.on("$destroy", function () {
                  g && g.$$attachId === d && (c.deregister(e), r.detach());m.$destroy();
                });
              });
            }, detach: function detach() {
              if (g) {
                var a = g;g = null;t.leave(a);
              }
            } });
        } };
    }];
  }var x = l.isArray,
      u = l.forEach,
      s = l.isString,
      y = l.element;l.module("ngMessages", []).directive("ngMessages", ["$animate", function (t) {
    function p(a, c) {
      return s(c) && 0 === c.length || n(a.$eval(c));
    }function n(a) {
      return s(a) ? a.length : !!a;
    }return { require: "ngMessages", restrict: "AE", controller: ["$element", "$scope", "$attrs", function (a, c, f) {
        function e(a, c) {
          for (var b = c, d = []; b && b !== a;) {
            var h = b.$$ngMessageNode;if (h && h.length) return g[h];b.childNodes.length && -1 === d.indexOf(b) ? (d.push(b), b = b.childNodes[b.childNodes.length - 1]) : b.previousSibling ? b = b.previousSibling : (b = b.parentNode, d.push(b));
          }
        }var d = this,
            q = 0,
            k = 0;this.getAttachId = function () {
          return k++;
        };var g = this.messages = {},
            r,
            l;this.render = function (m) {
          m = m || {};r = !1;l = m;for (var g = p(c, f.ngMessagesMultiple) || p(c, f.multiple), b = [], e = {}, h = d.head, q = !1, k = 0; null != h;) {
            k++;var s = h.message,
                v = !1;q || u(m, function (a, b) {
              !v && n(a) && s.test(b) && !e[b] && (v = e[b] = !0, s.attach());
            });v ? q = !g : b.push(s);h = h.next;
          }u(b, function (a) {
            a.detach();
          });b.length !== k ? t.setClass(a, "ng-active", "ng-inactive") : t.setClass(a, "ng-inactive", "ng-active");
        };c.$watchCollection(f.ngMessages || f["for"], d.render);a.on("$destroy", function () {
          u(g, function (a) {
            a.message.detach();
          });
        });this.reRender = function () {
          r || (r = !0, c.$evalAsync(function () {
            r && l && d.render(l);
          }));
        };this.register = function (c, f) {
          var b = q.toString();g[b] = { message: f };var k = a[0],
              h = g[b];d.head ? (k = e(k, c)) ? (h.next = k.next, k.next = h) : (h.next = d.head, d.head = h) : d.head = h;c.$$ngMessageNode = b;q++;d.reRender();
        };this.deregister = function (c) {
          var f = c.$$ngMessageNode;delete c.$$ngMessageNode;var b = g[f];(c = e(a[0], c)) ? c.next = b.next : d.head = b.next;delete g[f];d.reRender();
        };
      }] };
  }]).directive("ngMessagesInclude", ["$templateRequest", "$document", "$compile", function (l, p, n) {
    function a(a, f) {
      var e = n.$$createComment ? n.$$createComment("ngMessagesInclude", f) : p[0].createComment(" ngMessagesInclude: " + f + " "),
          e = y(e);a.after(e);a.remove();
    }return { restrict: "AE", require: "^^ngMessages", link: function link(c, f, e) {
        var d = e.ngMessagesInclude || e.src;l(d).then(function (e) {
          c.$$destroyed || (s(e) && !e.trim() ? a(f, d) : n(e)(c, function (c) {
            f.after(c);a(f, d);
          }));
        });
      } };
  }]).directive("ngMessage", w()).directive("ngMessageExp", w());
})(window, window.angular);
//# sourceMappingURL=angular-messages.min.js.map

//# sourceMappingURL=angular-messages.min-compiled.js.map