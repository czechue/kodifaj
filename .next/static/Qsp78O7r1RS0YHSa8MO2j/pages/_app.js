(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    0: function(t, n, e) {
      e('74v/'), (t.exports = e('nOHt'));
    },
    '1OyB': function(t, n, e) {
      'use strict';
      function r(t, n) {
        if (!(t instanceof n))
          throw new TypeError('Cannot call a class as a function');
      }
      e.d(n, 'a', function() {
        return r;
      });
    },
    '74v/': function(t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function() {
          return e('cha2');
        },
      ]);
    },
    '8Bbg': function(t, n, e) {
      t.exports = e('B5Ud');
    },
    B5Ud: function(t, n, e) {
      'use strict';
      var r = e('/GRZ'),
        o = e('i2R6'),
        u = e('tCBg'),
        a = e('T0f4'),
        i = e('48fX'),
        c = e('vJKn'),
        s = e('AroE');
      (n.__esModule = !0),
        (n.Container = function(t) {
          0;
          return t.children;
        }),
        (n.createUrl = h),
        (n.default = void 0);
      var p = s(e('q1tI')),
        f = e('g/15');
      function l(t) {
        var n, e, r;
        return c.async(
          function(o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (
                    (n = t.Component),
                    (e = t.ctx),
                    (o.next = 3),
                    c.awrap((0, f.loadGetInitialProps)(n, e))
                  );
                case 3:
                  return (r = o.sent), o.abrupt('return', { pageProps: r });
                case 5:
                case 'end':
                  return o.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }
      n.AppInitialProps = f.AppInitialProps;
      var b = (function(t) {
        function n() {
          return r(this, n), u(this, a(n).apply(this, arguments));
        }
        return (
          i(n, t),
          o(n, [
            {
              key: 'componentDidCatch',
              value: function(t, n) {
                throw t;
              },
            },
            {
              key: 'render',
              value: function() {
                var t = this.props,
                  n = t.router,
                  e = t.Component,
                  r = t.pageProps,
                  o = t.__N_SSG,
                  u = t.__N_SSP;
                return p.default.createElement(
                  e,
                  Object.assign({}, r, o || u ? {} : { url: h(n) }),
                );
              },
            },
          ]),
          n
        );
      })(p.default.Component);
      function h(t) {
        var n = t.pathname,
          e = t.asPath,
          r = t.query;
        return {
          get query() {
            return r;
          },
          get pathname() {
            return n;
          },
          get asPath() {
            return e;
          },
          back: function() {
            t.back();
          },
          push: function(n, e) {
            return t.push(n, e);
          },
          pushTo: function(n, e) {
            var r = e ? n : '',
              o = e || n;
            return t.push(r, o);
          },
          replace: function(n, e) {
            return t.replace(n, e);
          },
          replaceTo: function(n, e) {
            var r = e ? n : '',
              o = e || n;
            return t.replace(r, o);
          },
        };
      }
      (n.default = b), (b.origGetInitialProps = l), (b.getInitialProps = l);
    },
    JX7q: function(t, n, e) {
      'use strict';
      function r(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      e.d(n, 'a', function() {
        return r;
      });
    },
    Ji7U: function(t, n, e) {
      'use strict';
      function r(t, n) {
        return (r =
          Object.setPrototypeOf ||
          function(t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function o(t, n) {
        if ('function' !== typeof n && null !== n)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (t.prototype = Object.create(n && n.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          n && r(t, n);
      }
      e.d(n, 'a', function() {
        return o;
      });
    },
    cha2: function(t, n, e) {
      'use strict';
      e.r(n);
      var r = e('o0o1'),
        o = e.n(r),
        u = e('1OyB'),
        a = e('vuIU'),
        i = e('md7G'),
        c = e('foSv'),
        s = e('Ji7U'),
        p = e('q1tI'),
        f = e.n(p),
        l = e('8Bbg'),
        b = e.n(l),
        h = e('w68O'),
        y = e('JX7q'),
        d = e('rePB'),
        v = f.a.createElement,
        w = (function(t) {
          function n() {
            var t, e;
            Object(u.a)(this, n);
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              (e = Object(i.a)(
                this,
                (t = Object(c.a)(n)).call.apply(t, [this].concat(o)),
              )),
              Object(d.a)(Object(y.a)(e), 'state', { hasError: !1 }),
              e
            );
          }
          return (
            Object(s.a)(n, t),
            Object(a.a)(n, [
              {
                key: 'componentDidCatch',
                value: function(t, n) {
                  this.setState({ hasError: !0 }), console.warn(t, n);
                },
              },
              {
                key: 'render',
                value: function() {
                  return this.state.hasError
                    ? v(
                        'h1',
                        null,
                        'Dziwne, wcze\u015bniej dzia\u0142a\u0142o...',
                      )
                    : this.props.children;
                },
              },
            ]),
            n
          );
        })(f.a.Component),
        O = f.a.createElement,
        m = (function(t) {
          function n() {
            return (
              Object(u.a)(this, n),
              Object(i.a)(this, Object(c.a)(n).apply(this, arguments))
            );
          }
          return (
            Object(s.a)(n, t),
            Object(a.a)(
              n,
              [
                {
                  key: 'render',
                  value: function() {
                    var t = this.props,
                      n = t.Component,
                      e = t.pageProps;
                    return O(w, null, O(h.b, { user: e.user }, O(n, e)));
                  },
                },
              ],
              [
                {
                  key: 'getInitialProps',
                  value: function(t) {
                    var n, e, r, u;
                    return o.a.async(
                      function(a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              if (
                                ((n = t.Component),
                                (e = t.ctx),
                                (r = { user: '' }),
                                !n.getInitialProps)
                              ) {
                                a.next = 6;
                                break;
                              }
                              return (
                                (a.next = 5), o.a.awrap(n.getInitialProps(e))
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
                      },
                      null,
                      null,
                      null,
                      Promise,
                    );
                  },
                },
              ],
            ),
            n
          );
        })(b.a);
      n.default = m;
    },
    foSv: function(t, n, e) {
      'use strict';
      function r(t) {
        return (r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      e.d(n, 'a', function() {
        return r;
      });
    },
    md7G: function(t, n, e) {
      'use strict';
      function r(t) {
        return (r =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      e.d(n, 'a', function() {
        return u;
      });
      var o = e('JX7q');
      function u(t, n) {
        return !n || ('object' !== r(n) && 'function' !== typeof n)
          ? Object(o.a)(t)
          : n;
      }
    },
    rePB: function(t, n, e) {
      'use strict';
      function r(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      e.d(n, 'a', function() {
        return r;
      });
    },
    vuIU: function(t, n, e) {
      'use strict';
      function r(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function o(t, n, e) {
        return n && r(t.prototype, n), e && r(t, e), t;
      }
      e.d(n, 'a', function() {
        return o;
      });
    },
  },
  [[0, 0, 2, 1, 6]],
]);
