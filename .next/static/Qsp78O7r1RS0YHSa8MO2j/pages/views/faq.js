(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    Hb4V: function(e, t, r) {
      'use strict';
      r.r(t);
      var i = r('q1tI'),
        n = r.n(i),
        s = r('WxVa'),
        o = r('/EVp'),
        l = r('ma3e'),
        a = r('Lnxd'),
        u = n.a.createElement,
        c = function(e) {
          var t = e.isOpen;
          return u(
            'span',
            null,
            u(
              a.b.Provider,
              { value: { className: 'text-red-400' } },
              u(t ? l.a : l.b, null),
            ),
          );
        };
      function m(e) {
        var t = e.title,
          r = e.description,
          n = Object(i.useState)(!1),
          s = n[0],
          o = n[1];
        return u(
          'div',
          { className: 'mb-4 pb-4 border-b border-gray-300' },
          u(
            'div',
            { className: 'w-full' },
            u(
              'button',
              {
                onClick: function() {
                  return o(!s);
                },
                className: 'flex items-center w-full justify-between ',
              },
              u(
                'span',
                { className: 'text-purple-600 text-xl font-medium' },
                t,
              ),
              u(c, { isOpen: s }),
            ),
          ),
          s && u('p', { className: 'mt-5 text-purple-800' }, r),
        );
      }
      var d = n.a.createElement;
      function p(e) {
        var t = e.title,
          r = e.description,
          i = e.textLink,
          n = e.urlLink;
        return d(
          'div',
          null,
          d('p', { className: 'mb-3 text-purple-700 font-bold text-2xl' }, t),
          d('p', { className: 'mb-8 text-purple-800' }, r),
          d(
            'a',
            {
              className:
                'px-5 py-3 bg-red-500 rounded font-medium text-white inline-block',
              href: n || '#',
            },
            i,
          ),
        );
      }
      var f = n.a.createElement;
      t.default = function(e) {
        var t = e.user;
        return f(
          s.a,
          { user: t },
          f(
            'div',
            { className: 'w-full md:w-10/12 m-auto py-8 px-4' },
            f(
              'div',
              { className: 'mb-10' },
              f(
                o.a,
                { CustomTag: 'span', size: 'xsm', color: 'pink_primary' },
                'Masz jakie\u015b pytanie?',
              ),
              f(o.a, { CustomTag: 'h2' }, 'FAQ'),
            ),
            f(
              'div',
              {
                className:
                  'w-full flex flex-col sm:flex-row m-auto justify-between',
              },
              f(
                'div',
                { className: 'w-full md:w-7/12' },
                f(m, {
                  title: 'Where is my order?',
                  description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Pellentesque vitae eros quis orci venenatis aliquam. Aliquam in libero eget est porta tempus id non urna. Praesent et felis faucibus, ',
                }),
                f(m, {
                  title: 'Lorem ipsum dolo',
                  description:
                    'Duis lectus tortor, molestie et porttitor in, pretium non ante. Morbi tellus lectus, sodales nec massa vel, mattis consectetur enim',
                }),
                f(m, {
                  title: 'Lorem ipsum dolo',
                  description:
                    'Duis lectus tortor, molestie et porttitor in, pretium non ante. Morbi tellus lectus, sodales nec massa vel, mattis consectetur enim',
                }),
                f(m, {
                  title: 'Lorem ipsum dolo',
                  description:
                    'Duis lectus tortor, molestie et porttitor in, pretium non ante. Morbi tellus lectus, sodales nec massa vel, mattis consectetur enim',
                }),
                f(m, {
                  title: 'Lorem ipsum dolo',
                  description:
                    'Duis lectus tortor, molestie et porttitor in, pretium non ante. Morbi tellus lectus, sodales nec massa vel, mattis consectetur enim',
                }),
              ),
              f(
                'div',
                {
                  className:
                    'flex flex-col items-end self-start w-full md:w-5/12 mt-10 sm:mt-0 sm:pl-20',
                },
                f(p, {
                  title: 'Kodifaj.pl',
                  description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius ultricies est, id fermentum mi. Praesent sit amet tincidunt lorem. Sed cursus, nisl consequat vulputate pretium',
                  textLink: 'Opis buttona',
                }),
              ),
            ),
          ),
        );
      };
    },
    Lnxd: function(e, t, r) {
      'use strict';
      r.d(t, 'a', function() {
        return a;
      }),
        r.d(t, 'b', function() {
          return s;
        });
      var i = r('q1tI'),
        n = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = i.createContext && i.createContext(n),
        o = function() {
          return (o =
            Object.assign ||
            function(e) {
              for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
        l = function(e, t) {
          var r = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              t.indexOf(i) < 0 &&
              (r[i] = e[i]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
              t.indexOf(i[n]) < 0 && (r[i[n]] = e[i[n]]);
          }
          return r;
        };
      function a(e) {
        return function(t) {
          return i.createElement(
            u,
            o({ attr: o({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function(t, r) {
                  return i.createElement(
                    t.tag,
                    o({ key: r }, t.attr),
                    e(t.child),
                  );
                })
              );
            })(e.child),
          );
        };
      }
      function u(e) {
        var t = function(t) {
          var r,
            n = e.size || t.size || '1em';
          t.className && (r = t.className),
            e.className && (r = (r ? r + ' ' : '') + e.className);
          var s = e.attr,
            a = e.title,
            u = l(e, ['attr', 'title']);
          return i.createElement(
            'svg',
            o(
              {
                stroke: 'currentColor',
                fill: 'currentColor',
                strokeWidth: '0',
              },
              t.attr,
              s,
              u,
              {
                className: r,
                style: o({ color: e.color || t.color }, t.style, e.style),
                height: n,
                width: n,
                xmlns: 'http://www.w3.org/2000/svg',
              },
            ),
            a && i.createElement('title', null, a),
            e.children,
          );
        };
        return void 0 !== s
          ? i.createElement(s.Consumer, null, function(e) {
              return t(e);
            })
          : t(n);
      }
    },
    WmrJ: function(e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/views/faq',
        function() {
          return r('Hb4V');
        },
      ]);
    },
  },
  [['WmrJ', 0, 2, 4, 9, 1, 3, 5]],
]);
