(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    XXXT: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return M;
      });
      var r = n('rePB'),
        a = n('o0o1'),
        i = n.n(a),
        o = n('q1tI'),
        l = n.n(o),
        c = n('nP3w'),
        u = n('pVnL'),
        s = n.n(u),
        f = n('8OQS'),
        d = n.n(f),
        p = n('86yx');
      var m = function(e, t) {
        return (
          e === t ||
          (Array.isArray(e) &&
            Array.isArray(t) &&
            e.length === t.length &&
            !e.some(function(e, n) {
              return e !== t[n];
            }))
        );
      };
      function b(e) {
        var t = l.a.useRef();
        return t.current || (t.current = e()), t.current;
      }
      var v = p.c.reduce(function(e, t) {
          return (e[t] = !0), e;
        }, {}),
        h = {
          'final-form': p.e,
          'react-final-form': c.e,
          'react-final-form-arrays': '3.1.1',
        },
        g = function(e) {
          var t = e.name,
            n = e.subscription,
            r = e.defaultValue,
            a = e.initialValue,
            i = e.isEqual,
            l = e.validate,
            u = d()(e, [
              'name',
              'subscription',
              'defaultValue',
              'initialValue',
              'isEqual',
              'validate',
            ]),
            f = (function(e, t) {
              var n = void 0 === t ? {} : t,
                r = n.subscription,
                a = void 0 === r ? v : r,
                i = n.defaultValue,
                o = n.initialValue,
                l = n.isEqual,
                u = void 0 === l ? m : l,
                f = n.validate,
                h = Object(c.d)('useFieldArray').mutators;
              if (!!!(h && h.push && h.pop))
                throw new Error(
                  'Array mutators not found. You need to provide the mutators from final-form-arrays to your form',
                );
              var g = b(function() {
                  return Object.keys(h).reduce(function(t, n) {
                    return (
                      (t[n] = function() {
                        for (
                          var t = arguments.length, r = new Array(t), a = 0;
                          a < t;
                          a++
                        )
                          r[a] = arguments[a];
                        return h[n].apply(h, [e].concat(r));
                      }),
                      t
                    );
                  }, {});
                }),
                w = b(function() {
                  return function(e, t, n) {
                    if (f) {
                      var r = f(e, t, n);
                      if (!r || Array.isArray(r)) return r;
                      var a = [];
                      return (a[p.a] = r), a;
                    }
                  };
                }),
                y = Object(c.c)(e, {
                  subscription: s()({}, a, { length: !0 }),
                  defaultValue: i,
                  initialValue: o,
                  isEqual: u,
                  validate: w,
                  format: function(e) {
                    return e;
                  },
                }),
                O = y.meta,
                x = O.length,
                k = d()(O, ['length']),
                j = y.input,
                N = d()(y, ['meta', 'input']);
              return {
                fields: s()(
                  {
                    name: e,
                    forEach: function(t) {
                      for (var n = x || 0, r = 0; r < n; r++)
                        t(e + '[' + r + ']', r);
                    },
                    length: x || 0,
                    map: function(t) {
                      for (var n = x || 0, r = [], a = 0; a < n; a++)
                        r.push(t(e + '[' + a + ']', a));
                      return r;
                    },
                  },
                  g,
                  {},
                  N,
                  { value: j.value },
                ),
                meta: k,
              };
            })(t, {
              subscription: n,
              defaultValue: r,
              initialValue: a,
              isEqual: i,
              validate: l,
            }),
            g = f.fields,
            w = f.meta;
          return (function(e, t) {
            var n = e.render,
              r = e.children,
              a = e.component,
              i = d()(e, ['render', 'children', 'component']);
            if (a)
              return Object(o.createElement)(
                a,
                s()({}, i, { children: r, render: n }),
              );
            if (n) return n(void 0 === r ? i : s()({}, i, { children: r }));
            if ('function' !== typeof r)
              throw new Error(
                'Must specify either a render prop, a render function as children, or a component prop to ' +
                  t,
              );
            return r(i);
          })(
            s()({ fields: g, meta: s()({}, w, { __versions: h }) }, u),
            'FieldArray(' + t + ')',
          );
        };
      function w() {
        return (w =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function y(e, t, n, r) {
        void 0 === r && (r = e),
          delete e.fields[t.name],
          (e.fields[n] = w({}, t, {
            name: n,
            change: r.fields[n] && r.fields[n].change,
            blur: r.fields[n] && r.fields[n].blur,
            focus: r.fields[n] && r.fields[n].focus,
            lastFieldState: void 0,
          })),
          e.fields[n].change || delete e.fields[n].change,
          e.fields[n].blur || delete e.fields[n].blur,
          e.fields[n].focus || delete e.fields[n].focus;
      }
      var O = function(e) {
          return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        x = function(e, t, n) {
          var r = e[0],
            a = e[1],
            i = e[2],
            o = n.changeValue;
          n.resetFieldState;
          o(t, r, function(e) {
            var t = [].concat(e || []);
            return t.splice(a, 0, i), t;
          });
          var l = w({}, t.fields),
            c = new RegExp('^' + O(r) + '\\[(\\d+)\\](.*)');
          Object.keys(t.fields)
            .sort()
            .reverse()
            .forEach(function(e) {
              var n = c.exec(e);
              if (n) {
                var i = Number(n[1]);
                if (i >= a) {
                  var o = r + '[' + (i + 1) + ']' + n[2];
                  y(t, l[e], o);
                }
              }
            });
        };
      function k(e, t, n, r) {
        Object.keys(r.fields).forEach(function(a) {
          if (a.substring(0, t.length) === t) {
            var i = a.substring(t.length),
              o = e + '[' + n + ']' + i;
            y(r, r.fields[a], o);
          }
        });
      }
      function j(e, t) {
        Object.keys(e.fields).forEach(function(n) {
          (e.fields[n] = w({}, e.fields[n], {
            change: e.fields[n].change || (t.fields[n] && t.fields[n].change),
            blur: e.fields[n].blur || (t.fields[n] && t.fields[n].blur),
            focus: e.fields[n].focus || (t.fields[n] && t.fields[n].focus),
          })),
            e.fields[n].change || delete e.fields[n].change,
            e.fields[n].blur || delete e.fields[n].blur,
            e.fields[n].focus || delete e.fields[n].focus;
        });
      }
      var N = function(e, t, n) {
          var r,
            a = e[0],
            i = e[1],
            o = n.changeValue,
            l = n.renameField;
          o(t, a, function(e) {
            var t = [].concat(e || []);
            return (r = t[i]), t.splice(i, 1), t;
          });
          var c = new RegExp('^' + O(a) + '\\[(\\d+)\\](.*)'),
            u = w({}, t, { fields: w({}, t.fields) });
          return (
            Object.keys(t.fields).forEach(function(e) {
              var n = c.exec(e);
              if (n) {
                var r = Number(n[1]);
                if (r === i) delete t.fields[e];
                else if (r > i) {
                  delete t.fields[e];
                  var o = a + '[' + (r - 1) + ']' + n[2];
                  u.fields[o] ? y(t, u.fields[e], o, u) : l(t, e, o);
                }
              }
            }),
            r
          );
        },
        E = {
          insert: x,
          concat: function(e, t, n) {
            var r = e[0],
              a = e[1];
            (0, n.changeValue)(t, r, function(e) {
              return e ? [].concat(e, a) : a;
            });
          },
          move: function(e, t, n) {
            var r = e[0],
              a = e[1],
              i = e[2],
              o = n.changeValue;
            if (a !== i) {
              o(t, r, function(e) {
                var t = [].concat(e || []),
                  n = t[a];
                return t.splice(a, 1), t.splice(i, 0, n), t;
              });
              var l = w({}, t, { fields: w({}, t.fields) });
              if ((k(r, r + '[' + a + ']', 'tmp', t), a < i))
                for (var c = a + 1; c <= i; c++) {
                  k(r, r + '[' + c + ']', '' + (c - 1), t);
                }
              else
                for (var u = a - 1; u >= i; u--) {
                  k(r, r + '[' + u + ']', '' + (u + 1), t);
                }
              k(r, r + '[tmp]', i, t), j(t, l);
            }
          },
          pop: function(e, t, n) {
            var r,
              a,
              i = e[0];
            if (
              ((0, n.changeValue)(t, i, function(e) {
                if (e)
                  return e.length
                    ? ((a = e.length - 1), (r = e[a]), e.slice(0, a))
                    : [];
              }),
              void 0 !== a)
            ) {
              var o = new RegExp('^' + O(i) + '\\[' + a + '].*');
              Object.keys(t.fields).forEach(function(e) {
                o.test(e) && delete t.fields[e];
              });
            }
            return r;
          },
          push: function(e, t, n) {
            var r = e[0],
              a = e[1];
            (0, n.changeValue)(t, r, function(e) {
              return e ? [].concat(e, [a]) : [a];
            });
          },
          remove: N,
          removeBatch: function(e, t, n) {
            var r = e[0],
              a = e[1],
              i = n.changeValue,
              o = [].concat(a);
            o.sort();
            for (var l = 0; l < o.length; l++)
              l > 0 && o[l] === o[l - 1] && o.splice(l--, 1);
            var c = [];
            i(t, r, function(e) {
              if (
                ((c = a.map(function(t) {
                  return e && e[t];
                })),
                !e || !o.length)
              )
                return e;
              var t = [].concat(e),
                n = [];
              return (
                o.forEach(function(r) {
                  t.splice(r - n.length, 1), n.push(e && e[r]);
                }),
                t
              );
            });
            var u = new RegExp('^' + O(r) + '\\[(\\d+)\\](.*)'),
              s = w({}, t, { fields: {} });
            return (
              Object.keys(t.fields).forEach(function(e) {
                var n,
                  a = u.exec(e);
                if (a) {
                  var i = Number(a[1]);
                  if (!~o.indexOf(i)) {
                    var l =
                      r +
                      '[' +
                      (i -
                        ((n = i),
                        o.reduce(function(e, t) {
                          return t < n ? e + 1 : e;
                        }, 0))) +
                      ']' +
                      a[2];
                    y(s, t.fields[e], l, t);
                  }
                } else s.fields[e] = t.fields[e];
              }),
              (t.fields = s.fields),
              c
            );
          },
          shift: function(e, t, n) {
            var r = e[0];
            return N([r, 0], t, n);
          },
          swap: function(e, t, n) {
            var r = e[0],
              a = e[1],
              i = e[2],
              o = n.changeValue;
            if (a !== i) {
              o(t, r, function(e) {
                var t = [].concat(e || []),
                  n = t[a];
                return (t[a] = t[i]), (t[i] = n), t;
              });
              var l = w({}, t, { fields: w({}, t.fields) }),
                c = r + '[' + i + ']',
                u = r + '[tmp]';
              k(r, r + '[' + a + ']', 'tmp', t),
                k(r, c, a, t),
                k(r, u, i, t),
                j(t, l);
            }
          },
          unshift: function(e, t, n) {
            var r = e[0],
              a = e[1];
            return x([r, 0, a], t, n);
          },
          update: function(e, t, n) {
            var r = e[0],
              a = e[1],
              i = e[2];
            (0, n.changeValue)(t, r, function(e) {
              var t = [].concat(e || []);
              return t.splice(a, 1, i), t;
            });
          },
        },
        V = l.a.createElement;
      function z(e) {
        var t = e.children;
        return V(
          'div',
          {
            className:
              'flex flex-wrap -mx-1 overflow-hidden max-w-3xl ml-auto mr-auto',
          },
          V(
            'div',
            {
              className:
                'py-4 px-4 bg-gray-800 my-1 px-1 w-full rounded sm:rounded-r-none overflow-hidden sm:w-3/4 bg-pink_bg',
            },
            t,
          ),
          V(
            'div',
            {
              className:
                'hidden bg-yellow-800 my-1 px-1 w-full sm:rounded-r overflow-hidden sm:block sm:w-1/4 bg-gradient-navbar relative',
            },
            V('img', {
              src: '/static/images/object.svg',
              alt: 'object',
              className: 'absolute right-0 min-w-full',
              style: { top: '50px' },
            }),
          ),
        );
      }
      var P = n('71IU');
      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function D(e) {
        var t, n;
        return (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? C(Object(n), !0).forEach(function(t) {
                  Object(r.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : C(Object(n)).forEach(function(t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
          }
          return e;
        })({}, e, {
          tips: (null === (t = e.tips) || void 0 === t
          ? void 0
          : t.length)
            ? e.tips.map(function(e) {
                return e.tip;
              })
            : [],
          images: (null === (n = e.images) || void 0 === n
          ? void 0
          : n.length)
            ? e.images.map(function(e) {
                return e.image;
              })
            : [],
          tags: e.tags
            ? e.tags.split(',').map(function(e) {
                return e.trim();
              })
            : [],
        });
      }
      var A = n('/EVp'),
        S = l.a.createElement;
      function L(e) {
        var t = e.children;
        return S(
          A.a,
          {
            CustomTag: 'h2',
            orientation: 'left',
            size: '2xl',
            font: 'thin',
            tracking: 'wide',
          },
          t,
        );
      }
      var B = l.a.createElement;
      function H(e) {
        var t = e.recordName,
          n = e.label,
          a = e.fields,
          i = e.placeholder;
        return B(
          'div',
          { className: 'mb-4' },
          B(
            'label',
            {
              className:
                'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
            },
            n,
          ),
          a.map(function(e, n) {
            return B(
              'div',
              { key: e },
              B(c.a, {
                name: ''.concat(e, '.').concat(t),
                label: '',
                component: P.a,
                placeholder: i,
                inputButton: B(
                  'button',
                  {
                    type: 'button',
                    className:
                      'h-full pl-1 w-16 max-w-full rounded-r  text-white text-xs font-semibold',
                    onClick: function() {
                      return a.remove(n);
                    },
                  },
                  B(
                    'svg',
                    {
                      className: 'text-white',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      width: '32',
                      height: '32',
                    },
                    B('path', {
                      className: 'heroicon-ui',
                      d:
                        'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm11 7a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1z',
                    }),
                  ),
                ),
              }),
            );
          }),
          B(
            'button',
            {
              title: 'dodaj wskaz\xf3wk\u0119',
              type: 'button',
              onClick: function() {
                return a.push(Object(r.a)({}, t, ''));
              },
            },
            B(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                width: '32',
                height: '32',
              },
              B('path', {
                className: 'heroicon-ui',
                d:
                  'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm8 6h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z',
              }),
            ),
          ),
        );
      }
      var I = n('wx14'),
        F = l.a.createElement;
      function R(e) {
        var t = e.input,
          n = e.placeholder,
          r = e.label,
          a = l.a.createRef(),
          i = {
            BOLD: { open: '**', close: '**' },
            ITALIC: { open: '_', close: '_' },
            HEADING: { open: '# ', close: '' },
            CODEBLOCK: { open: '```javascript\n', close: '\n```' },
            UL: { open: '* ', close: '' },
            OL: { open: '1. ', close: '' },
          },
          o = function(e) {
            return function(n) {
              var r;
              n.preventDefault();
              var o = a.current;
              if (o) {
                !(function(e, t) {
                  var n = e.selectionStart,
                    r = e.selectionEnd,
                    a = e.value,
                    i = t.open.length,
                    o = a;
                  (o =
                    (o = o.substring(0, r) + t.close + o.substr(r)).substring(
                      0,
                      n,
                    ) +
                    t.open +
                    o.substr(n)),
                    (e.value = o),
                    e.setSelectionRange(n + i, r + i);
                })(o, i[e]);
                var l = (null === a || void 0 === a
                ? void 0
                : null === (r = a.current) || void 0 === r
                ? void 0
                : r.value)
                  ? a.current.value
                  : '';
                t.onChange(l);
              }
            };
          };
        return F(
          'div',
          { className: 'mb-3' },
          F(
            'label',
            {
              className:
                'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
              htmlFor: t.name,
            },
            r,
          ),
          F(
            'button',
            {
              className: 'px-2 bg-white w-12',
              type: 'button',
              onClick: o('BOLD'),
              'aria-label': 'wstaw pogrubienie',
              title: 'wstaw pogrubienie',
            },
            'B',
          ),
          F(
            'button',
            {
              className: 'px-2 bg-white w-12 ml-2',
              type: 'button',
              onClick: o('ITALIC'),
              'aria-label': 'wstaw italik',
              title: 'wstaw italik',
            },
            'I',
          ),
          F(
            'button',
            {
              className: 'px-2 bg-white w-12 ml-2',
              type: 'button',
              onClick: o('HEADING'),
              'aria-label': 'wstaw nag\u0142\xf3wek',
              title: 'wstaw nag\u0142\xf3wek',
            },
            'H',
          ),
          F('span', { className: 'ml-2' }, '|'),
          F(
            'button',
            {
              className: 'px-2 bg-white w-12 ml-2',
              type: 'button',
              onClick: o('CODEBLOCK'),
              'aria-label': 'wstaw blok kodu',
              title: 'wstaw blok kodu',
            },
            'code',
          ),
          F(
            'button',
            {
              className: 'px-2 bg-white w-12 ml-2',
              type: 'button',
              onClick: o('UL'),
              'aria-label': 'wstaw list\u0119 nieuporz\u0105dkowan\u0105',
              title: 'wstaw list\u0119 nieuporz\u0105dkowan\u0105',
            },
            'li',
          ),
          F(
            'button',
            {
              className: 'px-2 bg-white w-12 ml-2',
              type: 'button',
              onClick: o('OL'),
              'aria-label': 'wstaw list\u0119 uporz\u0105dkowan\u0105',
              title: 'wstaw list\u0119 uporz\u0105dkowan\u0105',
            },
            'ol',
          ),
          F(
            'div',
            { className: 'mt-2 flex items-stretch' },
            F(
              'textarea',
              Object(I.a)({ placeholder: n }, t, {
                className:
                  'font-mono appearance-none block w-full h-80 bg-white text-gray-700 rounded-l py-3 px-4 leading-tight border-transparent border focus:outline-none focus:border-violet_primary',
                ref: a,
              }),
            ),
          ),
        );
      }
      var T = n('iOK0');
      function q(e) {
        return {
          content: e.content,
          repo: e.repo,
          images: e.images.map(function(e) {
            return { image: e };
          }),
          tips: e.tips.map(function(e) {
            return { tip: e };
          }),
          title: e.title,
          tags: e.tags.join(','),
        };
      }
      var _ = l.a.createElement;
      function K(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(n), !0).forEach(function(t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function M(e) {
        var t = e.task,
          n = e.onSubmit;
        return _(
          l.a.Fragment,
          null,
          _(L, null, 'Kreator zada\u0144'),
          _(
            z,
            null,
            _(c.b, {
              onSubmit: function(e) {
                return i.a.async(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          n && n(D(e));
                        case 1:
                        case 'end':
                          return t.stop();
                      }
                  },
                  null,
                  null,
                  null,
                  Promise,
                );
              },
              mutators: G({}, E),
              initialValues: t ? q(t) : {},
              render: function(e) {
                var t = e.handleSubmit,
                  n = e.values;
                return _(
                  'form',
                  { onSubmit: t },
                  _(c.a, {
                    name: 'title',
                    label: 'Tytu\u0142',
                    component: P.a,
                    placeholder: 'np. Super cool formularz',
                  }),
                  _(c.a, {
                    name: 'repo',
                    label: 'Link do zadania na Github',
                    component: P.a,
                    placeholder: 'https://github.com/kodifaj',
                  }),
                  _(c.a, {
                    name: 'tags',
                    label: 'Tagi',
                    component: P.a,
                    placeholder: 'html, js, css',
                  }),
                  _(g, { name: 'tips' }, function(e) {
                    var t = e.fields,
                      n = e.meta;
                    return _(H, {
                      fields: t,
                      meta: n,
                      recordName: 'tip',
                      label: 'Wskaz\xf3wki',
                      placeholder: 'Nowa wskaz\xf3wka',
                    });
                  }),
                  _(g, { name: 'images' }, function(e) {
                    var t = e.fields,
                      n = e.meta;
                    return _(H, {
                      fields: t,
                      meta: n,
                      recordName: 'image',
                      label: 'Obrazy',
                      placeholder: 'Nowy obraz max 10kb',
                    });
                  }),
                  _(c.a, {
                    name: 'content',
                    label: 'Tre\u015b\u0107',
                    component: R,
                    placeholder: 'Na czym polega zadanie?',
                  }),
                  _(
                    'span',
                    {
                      className:
                        'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
                    },
                    'Preview',
                  ),
                  _(
                    'div',
                    { className: 'bg-white p-2 my-2 rounded' },
                    _(T.a, { source: n.content }),
                  ),
                  _(
                    'div',
                    { className: 'mt-6 flex flex-row-reverse' },
                    _(
                      'button',
                      {
                        className:
                          'bg-gradient-button text-white px-4 py-2 rounded tracking-wide',
                        type: 'submit',
                      },
                      'zapisz zadanie',
                    ),
                  ),
                );
              },
            }),
          ),
        );
      }
    },
  },
]);
