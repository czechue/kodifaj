(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    '3+wp': function(n, t, a) {
      'use strict';
      a.r(t);
      var e = a('vDqi'),
        u = a.n(e),
        o = a('q1tI'),
        s = a.n(o),
        w = a('w68O'),
        i = a('WxVa'),
        r = a('XXXT'),
        c = a('JaQg'),
        p = s.a.createElement;
      t.default = function() {
        var n = Object(o.useContext)(w.a).user;
        return p(
          i.a,
          { user: n },
          p(r.a, {
            onSubmit: function(n) {
              return u.a.post(''.concat(c.a, '/api/tasks'), n);
            },
          }),
        );
      };
    },
    '63nP': function(n, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/views/tasks/new',
        function() {
          return a('3+wp');
        },
      ]);
    },
  },
  [['63nP', 0, 2, 4, 1, 3, 6, 7, 8, 5]],
]);
