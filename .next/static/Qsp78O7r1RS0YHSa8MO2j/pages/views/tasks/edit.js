(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    OVa4: function(t, n, a) {
      'use strict';
      a.r(n);
      var e = a('o0o1'),
        s = a.n(e),
        r = a('q1tI'),
        u = a.n(r),
        c = a('vcXL'),
        o = a.n(c),
        i = a('w68O'),
        p = a('JaQg'),
        w = a('WxVa'),
        d = (a('Aio7'), a('XXXT')),
        f = a('vDqi'),
        k = a.n(f),
        l = u.a.createElement,
        v = function(t) {
          var n = t.task,
            a = t.taskId,
            e = Object(r.useContext)(i.a).user;
          return l(
            w.a,
            { user: e },
            l(d.a, {
              task: n,
              onSubmit: function(t) {
                return k.a.put(''.concat(p.a, '/api/tasks/').concat(a), t);
              },
            }),
          );
        };
      (v.getInitialProps = function(t) {
        var n, a, e, r;
        return s.a.async(
          function(u) {
            for (;;)
              switch ((u.prev = u.next)) {
                case 0:
                  return (
                    (n = t.query.id),
                    (a = n),
                    (u.next = 4),
                    s.a.awrap(o()(''.concat(p.a, '/api/tasks/').concat(n)))
                  );
                case 4:
                  return (e = u.sent), (u.next = 7), s.a.awrap(e.json());
                case 7:
                  return (
                    (r = u.sent), u.abrupt('return', { task: r, taskId: a })
                  );
                case 9:
                case 'end':
                  return u.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      }),
        (n.default = v);
    },
    kdnT: function(t, n, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/views/tasks/edit',
        function() {
          return a('OVa4');
        },
      ]);
    },
    vcXL: function(t, n, a) {
      'use strict';
      var e = self.fetch.bind(self);
      (t.exports = e), (t.exports.default = t.exports);
    },
  },
  [['kdnT', 0, 2, 4, 1, 3, 6, 7, 8, 5]],
]);
