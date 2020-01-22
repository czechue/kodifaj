(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    jUjS: function(t, e, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/views/tasks',
        function() {
          return a('yKmG');
        },
      ]);
    },
    oF7s: function(t, e, a) {
      'use strict';
      var n = a('p0XB'),
        s = a.n(n);
      var r = a('d04V'),
        i = a.n(r),
        l = a('yLu3'),
        o = a.n(l);
      function c(t) {
        return (
          (function(t) {
            if (s()(t)) {
              for (var e = 0, a = new Array(t.length); e < t.length; e++)
                a[e] = t[e];
              return a;
            }
          })(t) ||
          (function(t) {
            if (
              o()(Object(t)) ||
              '[object Arguments]' === Object.prototype.toString.call(t)
            )
              return i()(t);
          })(t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance',
            );
          })()
        );
      }
      var u = a('q1tI'),
        d = a.n(u),
        m = a('YFqc'),
        p = a.n(m);
      a.d(e, 'a', function() {
        return g;
      });
      var w = d.a.createElement;
      function v(t) {
        var e = t.children;
        return w(
          'span',
          {
            className:
              'inline-block mr-1 bg-pink-200 text-pink-700 text-xs px-1 rounded',
          },
          '#',
          e,
        );
      }
      function f(t) {
        var e = t.id;
        return w(
          p.a,
          {
            href: '/tasks/[id]/edit',
            as: '/tasks/'.concat(e.toString(), '/edit'),
          },
          w('span', { className: 'text-blue-300' }, 'Edit'),
        );
      }
      function g(t) {
        var e = t.task,
          a = t.admin,
          n = void 0 !== a && a;
        return w(
          'div',
          { className: 'w-full my-4 sm:px-2 sm:w-1/2 md:w-1/3 lg:w-1/3' },
          w(
            p.a,
            { href: '/tasks/[id]', as: '/tasks/'.concat(e._id.toString()) },
            w(
              'a',
              null,
              w(
                'div',
                { className: 'relative pb-5/12 sm:pb-2/3 md:pb-5/6' },
                w('img', {
                  className:
                    'absolute h-full w-full object-cover rounded-lg overflow-hidden shadow-md',
                  src: e.images[0],
                  alt: e.title,
                }),
              ),
              w(
                'div',
                { className: 'relative -mt-16' },
                w(
                  'div',
                  { className: 'bg-white p-6 rounded-lg shadow-lg' },
                  n && w(f, { id: e._id.toString() }),
                  w(
                    'div',
                    {
                      className:
                        'text-gray-600 text-xs font-semibold uppercase tracking-widest',
                    },
                    e._user.login,
                  ),
                  w(
                    'h4',
                    { className: 'font-semibold text-lg leading-tight' },
                    e.title,
                  ),
                  e.tags &&
                    w(
                      'div',
                      { className: 'mt-1' },
                      e.tags.map(function(t, e) {
                        return w(v, { key: e }, t);
                      }),
                    ),
                  w(
                    'div',
                    { className: 'mt-4 flex items-center text-xs' },
                    c(Array(5)).map(function(t, e) {
                      return w(
                        'svg',
                        {
                          key: e,
                          className: 'w-4 h4 fill-current text-pink__accent',
                          xmlns: 'http://www.w3.org/2000/svg',
                          viewBox: '0 0 20 20',
                        },
                        w('path', {
                          d:
                            'M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z',
                        }),
                      );
                    }),
                    ' ',
                    e.reviewCount &&
                      w(
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
    yKmG: function(t, e, a) {
      'use strict';
      a.r(e);
      var n = a('ln6h'),
        s = a.n(n),
        r = a('q1tI'),
        i = a.n(r),
        l = a('vcXL'),
        o = a.n(l),
        c = a('JaQg'),
        u = a('w68O'),
        d = a('oF7s'),
        m = a('/EVp'),
        p = i.a.createElement;
      function w(t) {
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
      var v = a('WxVa'),
        f = (a('Aio7'), i.a.createElement),
        g = function(t) {
          var e = t.tasks,
            a = Object(r.useContext)(u.a).user;
          return f(
            v.a,
            { user: a, withHero: !0 },
            f('div', { className: 'py-8 px-4' }, f(w, { tasks: e })),
          );
        };
      g.getInitialProps = function() {
        var t, e;
        return s.a.async(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    s.a.awrap(o()(''.concat(c.a, '/api/tasks')))
                  );
                case 3:
                  return (t = a.sent), (a.next = 6), s.a.awrap(t.json());
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
        );
      };
      e.default = g;
    },
  },
  [['jUjS', 0, 1]],
]);
