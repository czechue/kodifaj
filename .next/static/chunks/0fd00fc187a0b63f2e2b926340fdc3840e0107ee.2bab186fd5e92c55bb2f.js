(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    '/EVp': function(e, t, r) {
      'use strict';
      r.d(t, 'a', function() {
        return i;
      });
      var a = r('q1tI'),
        n = r.n(a),
        o = r('iuhU'),
        s = n.a.createElement;
      function i(e) {
        var t = e.CustomTag,
          r = void 0 === t ? 'h1' : t,
          a = e.color,
          n = void 0 === a ? 'violet_primary' : a,
          i = e.orientation,
          l = void 0 === i ? 'center' : i,
          c = e.size,
          u = void 0 === c ? 'lg' : c,
          f = e.font,
          m = void 0 === f ? 'normal' : f,
          h = e.tracking,
          p = void 0 === h ? 'normal' : h,
          d = e.classNames,
          v = e.children,
          b = Object(o.a)(
            'block',
            {
              'text-base': 'xsm' === u,
              'text-lg': 'normal' === u,
              'text-2xl': '2xl' === u,
              'text-4xl': 'lg' === u,
              'text-6xl': 'xlg' === u,
              'text-center': 'center' === l,
              'text-left': 'left' === l,
              'text-violet_primary': 'violet_primary' === n,
              'text-pink_primary': 'pink_primary' === n,
              'text-white': 'white' === n,
              'font-bold': 'bold' === m,
              'font-thin': 'thin' === m,
              'tracking-wide': 'wide' === p,
            },
            d,
          );
        return s(r, { className: b }, v);
      }
    },
    Aio7: function(e, t, r) {},
    WxVa: function(e, t, r) {
      'use strict';
      r.d(t, 'a', function() {
        return y;
      });
      var a = r('q1tI'),
        n = r.n(a),
        o = r('iuhU'),
        s = n.a.createElement;
      function i(e) {
        var t = e.isOpen,
          r = e.onToggle;
        return s(
          'button',
          {
            className:
              'block text-gray-300 hover:text-white focus:text-white focus:outline-none',
            onClick: r,
          },
          s(
            'svg',
            {
              className: 'fill-current w-6 h-6',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 20 20',
            },
            s(
              'path',
              t
                ? {
                    d:
                      'M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z',
                  }
                : { d: 'M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' },
            ),
          ),
        );
      }
      var l = r('YFqc'),
        c = r.n(l),
        u = n.a.createElement;
      function f(e) {
        var t = e.children,
          r = e.url,
          a = e.routerLink,
          n = void 0 !== a && a,
          o = e.classNames,
          s = 'block mb-1 px-2 py-1 text-gray-200 font-semibold hover:bg-violet_primary sm:uppercase sm:font-normal sm:text-xs sm:mb-0 '.concat(
            void 0 === o ? '' : o,
          ),
          i = u('a', { href: r, className: s }, t),
          l = u(c.a, { href: r }, u('a', { className: s }, t));
        return n ? l : i;
      }
      r('Aio7');
      var m = n.a.createElement;
      function h(e) {
        var t = e.user,
          r = e.classNames,
          n = Object(a.useState)(!1),
          o = n[0],
          s = n[1],
          i = Object(a.useCallback)(function(e) {
            ('Escape' !== e.key && 'Esc' !== e.key) || s(!1);
          }, []);
        return (
          Object(a.useEffect)(function() {
            return (
              document.addEventListener('keydown', i, !1),
              function() {
                document.removeEventListener('keydown', i, !1);
              }
            );
          }, []),
          m(
            'div',
            { className: 'relative ml-1 '.concat(r) },
            m(
              'button',
              {
                onClick: function() {
                  return s(!o);
                },
                className:
                  'relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-violet_primary focus:outline-none focus:border-white',
              },
              m('img', {
                className: 'h-full w-full object-cover',
                src: t.photo,
                alt: 'user photo',
              }),
            ),
            m('button', {
              onClick: function() {
                return s(!1);
              },
              tabIndex: -1,
              className: 'fixed inset-0 w-full h-full bg-black opacity-50 cursor-default z-10 '.concat(
                o ? 'block' : 'hidden',
              ),
            }),
            o &&
              m(
                'div',
                {
                  className:
                    'absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20',
                },
                m(
                  c.a,
                  { href: '/users/'.concat(t._id) },
                  m(
                    'a',
                    {
                      className:
                        'block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white',
                    },
                    'Twoje konto',
                  ),
                ),
                m(
                  c.a,
                  { href: '/tasks/new' },
                  m(
                    'a',
                    {
                      className:
                        'block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white',
                    },
                    'Dodaj zadanie',
                  ),
                ),
                m(
                  'a',
                  {
                    href: '/auth/logout',
                    className:
                      'block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white',
                  },
                  'Wyloguj si\u0119',
                ),
              ),
          )
        );
      }
      var p = r('/EVp'),
        d = n.a.createElement,
        v = {
          backgroundImage: 'url(/static/images/Objects.svg)',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        };
      function b() {
        return d(
          'div',
          {
            className: 'hidden sm:flex justify-center flex-col h-100 bg-local',
            style: v,
          },
          d(
            p.a,
            { color: 'white', size: 'normal', classNames: 'opacity-50' },
            'Najlepsze zadania z web dev',
          ),
          d(
            p.a,
            { color: 'white', font: 'bold', size: 'xlg' },
            'od Juniora do Mentora',
          ),
        );
      }
      var g = n.a.createElement;
      function x(e) {
        var t = e.user,
          r = e.withHero,
          s = void 0 !== r && r,
          l = Object(a.useState)(!1),
          u = l[0],
          m = l[1],
          p = Object(o.a)({ block: u, hidden: !u }, 'sm:flex'),
          d = g(
            n.a.Fragment,
            null,
            g(
              f,
              { classNames: 'sm:mr-4', url: '/tasks', routerLink: !0 },
              'Zadania',
            ),
            g(
              f,
              { classNames: 'sm:mr-4', url: '/ranking', routerLink: !0 },
              'Ranking',
            ),
            g(
              f,
              { classNames: 'sm:mr-4', url: '/faq', routerLink: !0 },
              'Pomoc',
            ),
            g('span', { className: 'hidden sm:block sm:mr-4 text-white' }, '|'),
          );
        return g(
          'div',
          { className: 'bg-gradient-navbar' },
          g(
            'header',
            {
              className:
                'sm:flex sm:justify-between sm:items-center sm:max-w-6xl sm:ml-auto sm:mr-auto',
            },
            g(
              'div',
              { className: 'flex items-center justify-between p-4 h-20' },
              g('span', null),
              g(
                c.a,
                { href: '/' },
                g(
                  'a',
                  null,
                  g('span', { className: 'text-white text-2xl' }, 'Kodifaj'),
                ),
              ),
              g(
                'div',
                { className: 'sm:hidden' },
                g(i, {
                  isOpen: u,
                  onToggle: function() {
                    return m(!u);
                  },
                }),
              ),
            ),
            !t &&
              g(
                'nav',
                { className: p },
                g(
                  'div',
                  {
                    className:
                      'px-2 pb-2 sm:flex sm:items-center sm:bg-transparent sm:pb-0',
                  },
                  d,
                  g(
                    f,
                    { url: '/auth/github' },
                    g(
                      'button',
                      { className: 'flex items-center' },
                      g(
                        'span',
                        {
                          className:
                            'pr-2 font-semibold sm:uppercase sm:font-normal sm:text-xs',
                        },
                        'Rejestracja',
                      ),
                      g('img', {
                        src: '/static/images/github-icon.svg',
                        alt: 'github icon',
                        className: 'w-5 opacity-50',
                      }),
                    ),
                  ),
                ),
              ),
            t &&
              g(
                'nav',
                { className: p },
                g(
                  'div',
                  {
                    className:
                      'px-2 pb-2 sm:flex sm:items-center sm:bg-transparent sm:pb-0',
                  },
                  d,
                  g(h, { classNames: 'hidden sm:block sm:ml-6', user: t }),
                ),
                g(
                  'div',
                  {
                    className:
                      'px-4 py-5 border-t border-pink__accent sm:hidden',
                  },
                  g(
                    'div',
                    { className: 'flex justify-center items-center' },
                    g('img', {
                      className: 'h-8 w-8 border-2 rounded-full object-cover',
                      src: t.photo,
                      alt: 'user photo',
                    }),
                    g(
                      'span',
                      { className: 'ml-3 font-semibold text-white' },
                      t.login,
                    ),
                  ),
                  g(
                    'div',
                    { className: 'mt-4' },
                    g(
                      c.a,
                      { href: '/users/'.concat(t._id) },
                      g(
                        'a',
                        {
                          className:
                            'block text-white hover:text-violet_primary',
                        },
                        'Twoje konto',
                      ),
                    ),
                    g(
                      c.a,
                      { href: '/tasks/new' },
                      g(
                        'a',
                        {
                          href: '#',
                          className:
                            'mt-2 block text-white hover:text-violet_primary',
                        },
                        'Dodaj zadanie',
                      ),
                    ),
                    g(
                      'a',
                      {
                        href: '/auth/logout',
                        className:
                          'mt-2 block text-white hover:text-violet_primary',
                      },
                      'Wyloguj si\u0119',
                    ),
                  ),
                ),
              ),
          ),
          s && g(b, null),
        );
      }
      var w = n.a.createElement;
      function y(e) {
        var t = e.user,
          r = e.withHero,
          a = e.children;
        return w(
          'div',
          { className: 'antialiased text-gray-900' },
          w(x, { user: t, withHero: r }),
          w('main', { className: 'container mx-auto' }, a),
        );
      }
    },
    YFqc: function(e, t, r) {
      e.exports = r('cTJO');
    },
    cTJO: function(e, t, r) {
      'use strict';
      var a = r('/GRZ'),
        n = r('i2R6'),
        o = r('tCBg'),
        s = r('T0f4'),
        i = r('48fX'),
        l = r('AroE'),
        c = r('7KCV');
      (t.__esModule = !0), (t.default = void 0);
      var u,
        f = c(r('q1tI')),
        m = r('QmWs'),
        h = r('g/15'),
        p = l(r('nOHt'));
      function d(e) {
        return e && 'object' === typeof e ? (0, h.formatWithValidation)(e) : e;
      }
      var v = new Map(),
        b = window.IntersectionObserver,
        g = {};
      function x() {
        return (
          u ||
          (b
            ? (u = new b(
                function(e) {
                  e.forEach(function(e) {
                    if (v.has(e.target)) {
                      var t = v.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (u.unobserve(e.target), v.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: '200px' },
              ))
            : void 0)
        );
      }
      var w = (function(e) {
        function t(e) {
          var r;
          return (
            a(this, t),
            ((r = o(this, s(t).call(this, e))).p = void 0),
            (r.cleanUpListeners = function() {}),
            (r.formatUrls = (function(e) {
              var t = null,
                r = null,
                a = null;
              return function(n, o) {
                if (a && n === t && o === r) return a;
                var s = e(n, o);
                return (t = n), (r = o), (a = s), s;
              };
            })(function(e, t) {
              return { href: d(e), as: t ? d(t) : t };
            })),
            (r.linkClicked = function(e) {
              var t = e.currentTarget,
                a = t.nodeName,
                n = t.target;
              if (
                'A' !== a ||
                !(
                  (n && '_self' !== n) ||
                  e.metaKey ||
                  e.ctrlKey ||
                  e.shiftKey ||
                  (e.nativeEvent && 2 === e.nativeEvent.which)
                )
              ) {
                var o = r.formatUrls(r.props.href, r.props.as),
                  s = o.href,
                  i = o.as;
                if (
                  (function(e) {
                    var t = (0, m.parse)(e, !1, !0),
                      r = (0, m.parse)((0, h.getLocationOrigin)(), !1, !0);
                    return (
                      !t.host ||
                      (t.protocol === r.protocol && t.host === r.host)
                    );
                  })(s)
                ) {
                  var l = window.location.pathname;
                  (s = (0, m.resolve)(l, s)),
                    (i = i ? (0, m.resolve)(l, i) : s),
                    e.preventDefault();
                  var c = r.props.scroll;
                  null == c && (c = i.indexOf('#') < 0),
                    p.default[r.props.replace ? 'replace' : 'push'](s, i, {
                      shallow: r.props.shallow,
                    }).then(function(e) {
                      e && c && (window.scrollTo(0, 0), document.body.focus());
                    });
                }
              }
            }),
            (r.p = !1 !== e.prefetch),
            r
          );
        }
        return (
          i(t, e),
          n(t, [
            {
              key: 'componentWillUnmount',
              value: function() {
                this.cleanUpListeners();
              },
            },
            {
              key: 'getPaths',
              value: function() {
                var e = window.location.pathname,
                  t = this.formatUrls(this.props.href, this.props.as),
                  r = t.href,
                  a = t.as,
                  n = (0, m.resolve)(e, r);
                return [n, a ? (0, m.resolve)(e, a) : n];
              },
            },
            {
              key: 'handleRef',
              value: function(e) {
                var t = this;
                this.p &&
                  b &&
                  e &&
                  e.tagName &&
                  (this.cleanUpListeners(),
                  g[this.getPaths().join('%')] ||
                    (this.cleanUpListeners = (function(e, t) {
                      var r = x();
                      return r
                        ? (r.observe(e),
                          v.set(e, t),
                          function() {
                            try {
                              r.unobserve(e);
                            } catch (t) {
                              console.error(t);
                            }
                            v.delete(e);
                          })
                        : function() {};
                    })(e, function() {
                      t.prefetch();
                    })));
              },
            },
            {
              key: 'prefetch',
              value: function(e) {
                if (this.p) {
                  var t = this.getPaths();
                  p.default.prefetch(t[0], t[1], e).catch(function(e) {
                    0;
                  }),
                    (g[t.join('%')] = !0);
                }
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props.children,
                  r = this.formatUrls(this.props.href, this.props.as),
                  a = r.href,
                  n = r.as;
                'string' === typeof t &&
                  (t = f.default.createElement('a', null, t));
                var o = f.Children.only(t),
                  s = {
                    ref: function(t) {
                      e.handleRef(t),
                        o &&
                          'object' === typeof o &&
                          o.ref &&
                          ('function' === typeof o.ref
                            ? o.ref(t)
                            : 'object' === typeof o.ref && (o.ref.current = t));
                    },
                    onMouseEnter: function(t) {
                      o.props &&
                        'function' === typeof o.props.onMouseEnter &&
                        o.props.onMouseEnter(t),
                        e.prefetch({ priority: !0 });
                    },
                    onClick: function(t) {
                      o.props &&
                        'function' === typeof o.props.onClick &&
                        o.props.onClick(t),
                        t.defaultPrevented || e.linkClicked(t);
                    },
                  };
                return (
                  (!this.props.passHref &&
                    ('a' !== o.type || 'href' in o.props)) ||
                    (s.href = n || a),
                  f.default.cloneElement(o, s)
                );
              },
            },
          ]),
          t
        );
      })(f.Component);
      t.default = w;
    },
    iuhU: function(e, t, r) {
      'use strict';
      function a(e) {
        var t,
          r,
          n = '';
        if (e)
          if ('object' === typeof e)
            if (Array.isArray(e))
              for (t = 0; t < e.length; t++)
                e[t] && (r = a(e[t])) && (n && (n += ' '), (n += r));
            else for (t in e) e[t] && (r = a(t)) && (n && (n += ' '), (n += r));
          else 'boolean' === typeof e || e.call || (n && (n += ' '), (n += e));
        return n;
      }
      t.a = function() {
        for (var e, t = 0, r = ''; t < arguments.length; )
          (e = a(arguments[t++])) && (r && (r += ' '), (r += e));
        return r;
      };
    },
  },
]);
