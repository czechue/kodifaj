(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    '+oT+': function(n, t, e) {
      var r = e('eVuF');
      function o(n, t, e, o, u, a, i) {
        try {
          var c = n[a](i),
            s = c.value;
        } catch (f) {
          return void e(f);
        }
        c.done ? t(s) : r.resolve(s).then(o, u);
      }
      n.exports = function(n) {
        return function() {
          var t = this,
            e = arguments;
          return new r(function(r, u) {
            var a = n.apply(t, e);
            function i(n) {
              o(a, r, u, i, c, 'next', n);
            }
            function c(n) {
              o(a, r, u, i, c, 'throw', n);
            }
            i(void 0);
          });
        };
      };
    },
    '0iUn': function(n, t, e) {
      'use strict';
      function r(n, t) {
        if (!(n instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      e.d(t, 'a', function() {
        return r;
      });
    },
    '74v/': function(n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function() {
          return e('cha2');
        },
      ]);
    },
    '8Bbg': function(n, t, e) {
      n.exports = e('B5Ud');
    },
    'AT/M': function(n, t, e) {
      'use strict';
      function r(n) {
        if (void 0 === n)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return n;
      }
      e.d(t, 'a', function() {
        return r;
      });
    },
    B5Ud: function(n, t, e) {
      'use strict';
      var r = e('/HRN'),
        o = e('WaGi'),
        u = e('ZDA2'),
        a = e('/+P4'),
        i = e('N9n2'),
        c = e('ln6h'),
        s = e('KI45');
      (t.__esModule = !0),
        (t.Container = function(n) {
          0;
          return n.children;
        }),
        (t.createUrl = y),
        (t.default = void 0);
      var f = s(e('htGi')),
        p = s(e('+oT+')),
        l = s(e('q1tI')),
        h = e('g/15');
      function v(n) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = (0, p.default)(
          c.mark(function n(t) {
            var e, r, o;
            return c.wrap(function(n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (e = t.Component),
                      (r = t.ctx),
                      (n.next = 3),
                      (0, h.loadGetInitialProps)(e, r)
                    );
                  case 3:
                    return (o = n.sent), n.abrupt('return', { pageProps: o });
                  case 5:
                  case 'end':
                    return n.stop();
                }
            }, n);
          }),
        )).apply(this, arguments);
      }
      t.AppInitialProps = h.AppInitialProps;
      var d = (function(n) {
        function t() {
          return r(this, t), u(this, a(t).apply(this, arguments));
        }
        return (
          i(t, n),
          o(t, [
            {
              key: 'componentDidCatch',
              value: function(n, t) {
                throw n;
              },
            },
            {
              key: 'render',
              value: function() {
                var n = this.props,
                  t = n.router,
                  e = n.Component,
                  r = n.pageProps,
                  o = y(t);
                return l.default.createElement(
                  e,
                  (0, f.default)({}, r, { url: o }),
                );
              },
            },
          ]),
          t
        );
      })(l.default.Component);
      function y(n) {
        var t = n.pathname,
          e = n.asPath,
          r = n.query;
        return {
          get query() {
            return r;
          },
          get pathname() {
            return t;
          },
          get asPath() {
            return e;
          },
          back: function() {
            n.back();
          },
          push: function(t, e) {
            return n.push(t, e);
          },
          pushTo: function(t, e) {
            var r = e ? t : '',
              o = e || t;
            return n.push(r, o);
          },
          replace: function(t, e) {
            return n.replace(t, e);
          },
          replaceTo: function(t, e) {
            var r = e ? t : '',
              o = e || t;
            return n.replace(r, o);
          },
        };
      }
      (t.default = d), (d.origGetInitialProps = v), (d.getInitialProps = v);
    },
    MI3g: function(n, t, e) {
      'use strict';
      var r = e('XVgq'),
        o = e.n(r),
        u = e('Z7t5'),
        a = e.n(u);
      function i(n) {
        return (i =
          'function' === typeof a.a && 'symbol' === typeof o.a
            ? function(n) {
                return typeof n;
              }
            : function(n) {
                return n &&
                  'function' === typeof a.a &&
                  n.constructor === a.a &&
                  n !== a.a.prototype
                  ? 'symbol'
                  : typeof n;
              })(n);
      }
      function c(n) {
        return (c =
          'function' === typeof a.a && 'symbol' === i(o.a)
            ? function(n) {
                return i(n);
              }
            : function(n) {
                return n &&
                  'function' === typeof a.a &&
                  n.constructor === a.a &&
                  n !== a.a.prototype
                  ? 'symbol'
                  : i(n);
              })(n);
      }
      var s = e('AT/M');
      function f(n, t) {
        return !t || ('object' !== c(t) && 'function' !== typeof t)
          ? Object(s.a)(n)
          : t;
      }
      e.d(t, 'a', function() {
        return f;
      });
    },
    Tit0: function(n, t, e) {
      'use strict';
      var r = e('SqZg'),
        o = e.n(r),
        u = e('TRZx'),
        a = e.n(u);
      function i(n, t) {
        return (i =
          a.a ||
          function(n, t) {
            return (n.__proto__ = t), n;
          })(n, t);
      }
      function c(n, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (n.prototype = o()(t && t.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 },
        })),
          t && i(n, t);
      }
      e.d(t, 'a', function() {
        return c;
      });
    },
    a7VT: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return i;
      });
      var r = e('Bhuq'),
        o = e.n(r),
        u = e('TRZx'),
        a = e.n(u);
      function i(n) {
        return (i = a.a
          ? o.a
          : function(n) {
              return n.__proto__ || o()(n);
            })(n);
      }
    },
    cha2: function(n, t, e) {
      'use strict';
      e.r(t);
      var r = e('ln6h'),
        o = e.n(r),
        u = e('0iUn'),
        a = e('sLSF'),
        i = e('MI3g'),
        c = e('a7VT'),
        s = e('Tit0'),
        f = e('q1tI'),
        p = e.n(f),
        l = e('8Bbg'),
        h = e.n(l),
        v = e('w68O'),
        b = e('AT/M'),
        d = e('vYYK'),
        y = p.a.createElement,
        w = (function(n) {
          function t() {
            var n, e;
            Object(u.a)(this, t);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              (e = Object(i.a)(
                this,
                (n = Object(c.a)(t)).call.apply(n, [this].concat(o)),
              )),
              Object(d.a)(Object(b.a)(e), 'state', { hasError: !1 }),
              e
            );
          }
          return (
            Object(s.a)(t, n),
            Object(a.a)(t, [
              {
                key: 'componentDidCatch',
                value: function(n, t) {
                  this.setState({ hasError: !0 }), console.warn(n, t);
                },
              },
              {
                key: 'render',
                value: function() {
                  return this.state.hasError
                    ? y(
                        'h1',
                        null,
                        'Dziwne, wcze\u015bniej dzia\u0142a\u0142o...',
                      )
                    : this.props.children;
                },
              },
            ]),
            t
          );
        })(p.a.Component),
        g = p.a.createElement,
        m = (function(n) {
          function t() {
            return (
              Object(u.a)(this, t),
              Object(i.a)(this, Object(c.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(t, n),
            Object(a.a)(
              t,
              [
                {
                  key: 'render',
                  value: function() {
                    var n = this.props,
                      t = n.Component,
                      e = n.pageProps;
                    return g(w, null, g(v.b, { user: e.user }, g(t, e)));
                  },
                },
              ],
              [
                {
                  key: 'getInitialProps',
                  value: function(n) {
                    var t, e, r, u;
                    return o.a.async(function(a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (
                              ((t = n.Component),
                              (e = n.ctx),
                              (r = { user: '' }),
                              !t.getInitialProps)
                            ) {
                              a.next = 6;
                              break;
                            }
                            return (
                              (a.next = 5), o.a.awrap(t.getInitialProps(e))
                            );
                          case 5:
                            r = a.sent;
                          case 6:
                            return (
                              e.req &&
                                (u = e.req) &&
                                u.session &&
                                u.session.passport &&
                                (r.user = u.session._ctx.user),
                              a.abrupt('return', { pageProps: r })
                            );
                          case 8:
                          case 'end':
                            return a.stop();
                        }
                    });
                  },
                },
              ],
            ),
            t
          );
        })(h.a);
      t.default = m;
    },
    sLSF: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return a;
      });
      var r = e('hfKm'),
        o = e.n(r);
      function u(n, t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            o()(n, r.key, r);
        }
      }
      function a(n, t, e) {
        return t && u(n.prototype, t), e && u(n, e), n;
      }
    },
    vYYK: function(n, t, e) {
      'use strict';
      e.d(t, 'a', function() {
        return u;
      });
      var r = e('hfKm'),
        o = e.n(r);
      function u(n, t, e) {
        return (
          t in n
            ? o()(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
    },
  },
  [['74v/', 0, 1]],
]);
