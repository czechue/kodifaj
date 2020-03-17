(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    '/b2n': function(t, e, a) {
      'use strict';
      a.r(e);
      var n = a('yKmG');
      e.default = n.default;
    },
    '8Mkq': function(t, e, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/views/Index',
        function() {
          return a('/b2n');
        },
      ]);
    },
    oF7s: function(t, e, a) {
      'use strict';
      function n(t) {
        return (
          (function(t) {
            if (Array.isArray(t)) {
              for (var e = 0, a = new Array(t.length); e < t.length; e++)
                a[e] = t[e];
              return a;
            }
          })(t) ||
          (function(t) {
            if (
              Symbol.iterator in Object(t) ||
              '[object Arguments]' === Object.prototype.toString.call(t)
            )
              return Array.from(t);
          })(t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance',
            );
          })()
        );
      }
      a.d(e, 'a', function() {
        return d;
      });
      var r = a('q1tI'),
        s = a.n(r),
        i = a('YFqc'),
        o = a.n(i),
        c = s.a.createElement;
      function l(t) {
        var e = t.children;
        return c(
          'span',
          {
            className:
              'inline-block mr-1 bg-pink-200 text-pink-700 text-xs px-1 rounded',
          },
          '#',
          e,
        );
      }
      function u(t) {
        var e = t.id;
        return c(
          o.a,
          {
            href: '/tasks/[id]/edit',
            as: '/tasks/'.concat(e.toString(), '/edit'),
          },
          c('span', { className: 'text-blue-300' }, 'Edit'),
        );
      }
      function d(t) {
        var e = t.task,
          a = t.admin,
          r = void 0 !== a && a;
        return c(
          'div',
          { className: 'w-full my-4 sm:px-2 sm:w-1/2 md:w-1/3 lg:w-1/3' },
          c(
            o.a,
            { href: '/tasks/[id]', as: '/tasks/'.concat(e._id.toString()) },
            c(
              'a',
              null,
              c(
                'div',
                { className: 'relative pb-5/12 sm:pb-2/3 md:pb-5/6' },
                c('img', {
                  className:
                    'absolute h-full w-full object-cover rounded-lg overflow-hidden shadow-md',
                  src: e.images[0],
                  alt: e.title,
                }),
              ),
              c(
                'div',
                { className: 'relative -mt-16' },
                c(
                  'div',
                  { className: 'bg-white p-6 rounded-lg shadow-lg' },
                  r && c(u, { id: e._id.toString() }),
                  c(
                    'div',
                    {
                      className:
                        'text-gray-600 text-xs font-semibold uppercase tracking-widest',
                    },
                    e._user.login,
                  ),
                  c(
                    'h4',
                    { className: 'font-semibold text-lg leading-tight' },
                    e.title,
                  ),
                  e.tags &&
                    c(
                      'div',
                      { className: 'mt-1' },
                      e.tags.map(function(t, e) {
                        return c(l, { key: e }, t);
                      }),
                    ),
                  c(
                    'div',
                    { className: 'mt-4 flex items-center text-xs' },
                    n(Array(5)).map(function(t, e) {
                      return c(
                        'svg',
                        {
                          key: e,
                          className: 'w-4 h4 fill-current text-pink__accent',
                          xmlns: 'http://www.w3.org/2000/svg',
                          viewBox: '0 0 20 20',
                        },
                        c('path', {
                          d:
                            'M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z',
                        }),
                      );
                    }),
                    ' ',
                    e.reviewCount &&
                      c(
                        'span',
                        { className: 'text-xs text-gray-600 ml-2' },
                        '(',
                        e.reviewCount,
                        ' g\u0142os\xf3w)',
                      ),
                  ),
                ),
              ),
            ),
          ),
        );
      }
    },
    vcXL: function(t, e, a) {
      'use strict';
      var n = self.fetch.bind(self);
      (t.exports = n), (t.exports.default = t.exports);
    },
    yKmG: function(t, e, a) {
      'use strict';
      a.r(e);
      var n = a('o0o1'),
        r = a.n(n),
        s = a('q1tI'),
        i = a.n(s),
        o = a('vcXL'),
        c = a.n(o),
        l = a('JaQg'),
        u = a('w68O'),
        d = a('oF7s'),
        m = a('/EVp'),
        p = i.a.createElement;
      function f(t) {
        var e = t.tasks;
        return e && 0 === e.length
          ? null
          : p(
              i.a.Fragment,
              null,
              p(
                'div',
                { className: 'mb-4' },
                p(
                  m.a,
                  { CustomTag: 'span', size: 'xsm', color: 'pink_primary' },
                  'Sprawd\u017a i rozwi\u0105\u017c...',
                ),
                p(m.a, { CustomTag: 'h2' }, 'Najnowsze Zadania'),
              ),
              p(
                'div',
                { className: 'flex flex-wrap md:-mx-2 flex-list__container' },
                null === e || void 0 === e
                  ? void 0
                  : e.map(function(t) {
                      return p(d.a, { key: t._id, task: t });
                    }),
              ),
            );
      }
      var w = a('WxVa'),
        v = (a('Aio7'), i.a.createElement),
        g = function(t) {
          var e = t.tasks,
            a = Object(s.useContext)(u.a).user;
          return v(
            w.a,
            { user: a, withHero: !0 },
            v('div', { className: 'py-8 px-4' }, v(f, { tasks: e })),
          );
        };
      g.getInitialProps = function() {
        var t, e;
        return r.a.async(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    r.a.awrap(c()(''.concat(l.a, '/api/tasks')))
                  );
                case 3:
                  return (t = a.sent), (a.next = 6), r.a.awrap(t.json());
                case 6:
                  return (e = a.sent), a.abrupt('return', { tasks: e });
                case 10:
                  return (
                    (a.prev = 10),
                    (a.t0 = a.catch(0)),
                    a.abrupt('return', { tasks: [] })
                  );
                case 13:
                case 'end':
                  return a.stop();
              }
          },
          null,
          null,
          [[0, 10]],
          Promise,
        );
      };
      e.default = g;
    },
  },
  [['8Mkq', 0, 2, 4, 1, 3, 6, 5]],
]);
