(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    '3URJ': function(e, t, s) {
      'use strict';
      s.r(t);
      var n = s('q1tI'),
        a = s.n(n),
        i = (s('Aio7'), s('WxVa')),
        l = s('nOHt'),
        r = s.n(l),
        c = a.a.createElement,
        o = { backgroundImage: 'url(/static/images/bg-login.png)' };
      function u() {
        return c(
          'div',
          null,
          c(
            'div',
            { className: 'container flex m-auto w-full lg:w-3/5 ' },
            c(
              'div',
              {
                className:
                  'sm:w-1/2 flex flex-col justify-between w-full bg-purple-100',
              },
              c(
                'div',
                {
                  className:
                    'flex-1 pb-5 sm:pb-0 text-xl text-purple-600 text-center font-bold',
                },
                c('p', { className: 'pt-5' }, 'Logowanie'),
              ),
              c(
                'a',
                {
                  href: '/auth/github',
                  className:
                    'flex self-center mb-10 sm:mb-0 px-5 py-2 bg-gray-1000 font-medium text-white rounded',
                },
                c('img', {
                  src: '/static/images/github-icon-white.svg',
                  className: 'px-2 ',
                  alt: 'github icon',
                }),
                'Zaloguj si\u0119 przez GitHub',
              ),
              c(
                'div',
                {
                  className:
                    'flex flex-1 items-center justify-end pb-12 sm:pb-0',
                },
                c(
                  'span',
                  { className: 'pr-5 text-purple-900' },
                  'wr\xf3\u0107 do poprzedniej',
                  c(
                    'span',
                    {
                      className: 'text-indigo-800 font-bold cursor-pointer',
                      onClick: function() {
                        return r.a.back();
                      },
                    },
                    ' ',
                    'strony',
                  ),
                ),
              ),
            ),
            c(
              'div',
              {
                className:
                  'sm:w-1/2 sm:flex justify-center flex-col items-center bg-repeat-round h-100 hidden',
                style: o,
              },
              c('h2', { className: ' text-5xl text-white' }, 'Kodifaj'),
            ),
          ),
        );
      }
      var m = a.a.createElement;
      t.default = function(e) {
        var t = e.user;
        return m(
          i.a,
          { user: t },
          m(
            'div',
            { className: 'flex flex-col sm:justify-center h-max' },
            m(u, null),
          ),
        );
      };
    },
    Qrsp: function(e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/views/login',
        function() {
          return s('3URJ');
        },
      ]);
    },
  },
  [['Qrsp', 0, 1]],
]);
