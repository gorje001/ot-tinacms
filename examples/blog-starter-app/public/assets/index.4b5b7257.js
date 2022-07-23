function DO(i, o) {
  for (var s = 0; s < o.length; s++) {
    const m = o[s]
    if (typeof m != 'string' && !Array.isArray(m)) {
      for (const d in m)
        if (d !== 'default' && !(d in i)) {
          const y = Object.getOwnPropertyDescriptor(m, d)
          y &&
            Object.defineProperty(
              i,
              d,
              y.get ? y : { enumerable: !0, get: () => m[d] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' })
  )
}
const _O = function () {
  const o = document.createElement('link').relList
  if (o && o.supports && o.supports('modulepreload')) return
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) m(d)
  new MutationObserver((d) => {
    for (const y of d)
      if (y.type === 'childList')
        for (const f of y.addedNodes)
          f.tagName === 'LINK' && f.rel === 'modulepreload' && m(f)
  }).observe(document, { childList: !0, subtree: !0 })
  function s(d) {
    const y = {}
    return (
      d.integrity && (y.integrity = d.integrity),
      d.referrerpolicy && (y.referrerPolicy = d.referrerpolicy),
      d.crossorigin === 'use-credentials'
        ? (y.credentials = 'include')
        : d.crossorigin === 'anonymous'
        ? (y.credentials = 'omit')
        : (y.credentials = 'same-origin'),
      y
    )
  }
  function m(d) {
    if (d.ep) return
    d.ep = !0
    const y = s(d)
    fetch(d.href, y)
  }
}
_O()
function OO(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default')
    ? i.default
    : i
}
var R = { exports: {} },
  qh = { exports: {} }
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (i, o) {
  ;(function () {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
        'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error())
    var s = '18.2.0',
      m = Symbol.for('react.element'),
      d = Symbol.for('react.portal'),
      y = Symbol.for('react.fragment'),
      f = Symbol.for('react.strict_mode'),
      N = Symbol.for('react.profiler'),
      x = Symbol.for('react.provider'),
      T = Symbol.for('react.context'),
      E = Symbol.for('react.forward_ref'),
      M = Symbol.for('react.suspense'),
      B = Symbol.for('react.suspense_list'),
      j = Symbol.for('react.memo'),
      z = Symbol.for('react.lazy'),
      O = Symbol.for('react.offscreen'),
      de = Symbol.iterator,
      Y = '@@iterator'
    function X(p) {
      if (p === null || typeof p != 'object') return null
      var S = (de && p[de]) || p[Y]
      return typeof S == 'function' ? S : null
    }
    var ve = { current: null },
      ye = { transition: null },
      Z = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
      Ee = { current: null },
      ne = {},
      st = null
    function ee(p) {
      st = p
    }
    ;(ne.setExtraStackFrame = function (p) {
      st = p
    }),
      (ne.getCurrentStack = null),
      (ne.getStackAddendum = function () {
        var p = ''
        st && (p += st)
        var S = ne.getCurrentStack
        return S && (p += S() || ''), p
      })
    var Ce = !1,
      Te = !1,
      at = !1,
      ge = !1,
      He = !1,
      ht = {
        ReactCurrentDispatcher: ve,
        ReactCurrentBatchConfig: ye,
        ReactCurrentOwner: Ee,
      }
    ;(ht.ReactDebugCurrentFrame = ne), (ht.ReactCurrentActQueue = Z)
    function $e(p) {
      {
        for (
          var S = arguments.length, F = new Array(S > 1 ? S - 1 : 0), H = 1;
          H < S;
          H++
        )
          F[H - 1] = arguments[H]
        Fe('warn', p, F)
      }
    }
    function ue(p) {
      {
        for (
          var S = arguments.length, F = new Array(S > 1 ? S - 1 : 0), H = 1;
          H < S;
          H++
        )
          F[H - 1] = arguments[H]
        Fe('error', p, F)
      }
    }
    function Fe(p, S, F) {
      {
        var H = ht.ReactDebugCurrentFrame,
          J = H.getStackAddendum()
        J !== '' && ((S += '%s'), (F = F.concat([J])))
        var Oe = F.map(function (pe) {
          return String(pe)
        })
        Oe.unshift('Warning: ' + S),
          Function.prototype.apply.call(console[p], console, Oe)
      }
    }
    var tn = {}
    function Pn(p, S) {
      {
        var F = p.constructor,
          H = (F && (F.displayName || F.name)) || 'ReactClass',
          J = H + '.' + S
        if (tn[J]) return
        ue(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          S,
          H
        ),
          (tn[J] = !0)
      }
    }
    var nn = {
        isMounted: function (p) {
          return !1
        },
        enqueueForceUpdate: function (p, S, F) {
          Pn(p, 'forceUpdate')
        },
        enqueueReplaceState: function (p, S, F, H) {
          Pn(p, 'replaceState')
        },
        enqueueSetState: function (p, S, F, H) {
          Pn(p, 'setState')
        },
      },
      Pt = Object.assign,
      bn = {}
    Object.freeze(bn)
    function Nn(p, S, F) {
      ;(this.props = p),
        (this.context = S),
        (this.refs = bn),
        (this.updater = F || nn)
    }
    ;(Nn.prototype.isReactComponent = {}),
      (Nn.prototype.setState = function (p, S) {
        if (typeof p != 'object' && typeof p != 'function' && p != null)
          throw new Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
          )
        this.updater.enqueueSetState(this, p, S, 'setState')
      }),
      (Nn.prototype.forceUpdate = function (p) {
        this.updater.enqueueForceUpdate(this, p, 'forceUpdate')
      })
    {
      var Mr = {
          isMounted: [
            'isMounted',
            'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
          ],
          replaceState: [
            'replaceState',
            'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).',
          ],
        },
        yr = function (p, S) {
          Object.defineProperty(Nn.prototype, p, {
            get: function () {
              $e(
                '%s(...) is deprecated in plain JavaScript React classes. %s',
                S[0],
                S[1]
              )
            },
          })
        }
      for (var gr in Mr) Mr.hasOwnProperty(gr) && yr(gr, Mr[gr])
    }
    function xn() {}
    xn.prototype = Nn.prototype
    function rn(p, S, F) {
      ;(this.props = p),
        (this.context = S),
        (this.refs = bn),
        (this.updater = F || nn)
    }
    var Sn = (rn.prototype = new xn())
    ;(Sn.constructor = rn), Pt(Sn, Nn.prototype), (Sn.isPureReactComponent = !0)
    function Mn() {
      var p = { current: null }
      return Object.seal(p), p
    }
    var sn = Array.isArray
    function Bt(p) {
      return sn(p)
    }
    function En(p) {
      {
        var S = typeof Symbol == 'function' && Symbol.toStringTag,
          F = (S && p[Symbol.toStringTag]) || p.constructor.name || 'Object'
        return F
      }
    }
    function Kt(p) {
      try {
        return Ht(p), !1
      } catch {
        return !0
      }
    }
    function Ht(p) {
      return '' + p
    }
    function Xt(p) {
      if (Kt(p))
        return (
          ue(
            'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
            En(p)
          ),
          Ht(p)
        )
    }
    function Jn(p, S, F) {
      var H = p.displayName
      if (H) return H
      var J = S.displayName || S.name || ''
      return J !== '' ? F + '(' + J + ')' : F
    }
    function Zn(p) {
      return p.displayName || 'Context'
    }
    function V(p) {
      if (p == null) return null
      if (
        (typeof p.tag == 'number' &&
          ue(
            'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
          ),
        typeof p == 'function')
      )
        return p.displayName || p.name || null
      if (typeof p == 'string') return p
      switch (p) {
        case y:
          return 'Fragment'
        case d:
          return 'Portal'
        case N:
          return 'Profiler'
        case f:
          return 'StrictMode'
        case M:
          return 'Suspense'
        case B:
          return 'SuspenseList'
      }
      if (typeof p == 'object')
        switch (p.$$typeof) {
          case T:
            var S = p
            return Zn(S) + '.Consumer'
          case x:
            var F = p
            return Zn(F._context) + '.Provider'
          case E:
            return Jn(p, p.render, 'ForwardRef')
          case j:
            var H = p.displayName || null
            return H !== null ? H : V(p.type) || 'Memo'
          case z: {
            var J = p,
              Oe = J._payload,
              pe = J._init
            try {
              return V(pe(Oe))
            } catch {
              return null
            }
          }
        }
      return null
    }
    var Q = Object.prototype.hasOwnProperty,
      K = { key: !0, ref: !0, __self: !0, __source: !0 },
      be,
      Ve,
      Ye
    Ye = {}
    function je(p) {
      if (Q.call(p, 'ref')) {
        var S = Object.getOwnPropertyDescriptor(p, 'ref').get
        if (S && S.isReactWarning) return !1
      }
      return p.ref !== void 0
    }
    function Re(p) {
      if (Q.call(p, 'key')) {
        var S = Object.getOwnPropertyDescriptor(p, 'key').get
        if (S && S.isReactWarning) return !1
      }
      return p.key !== void 0
    }
    function Ge(p, S) {
      var F = function () {
        be ||
          ((be = !0),
          ue(
            '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            S
          ))
      }
      ;(F.isReactWarning = !0),
        Object.defineProperty(p, 'key', { get: F, configurable: !0 })
    }
    function ot(p, S) {
      var F = function () {
        Ve ||
          ((Ve = !0),
          ue(
            '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            S
          ))
      }
      ;(F.isReactWarning = !0),
        Object.defineProperty(p, 'ref', { get: F, configurable: !0 })
    }
    function wt(p) {
      if (
        typeof p.ref == 'string' &&
        Ee.current &&
        p.__self &&
        Ee.current.stateNode !== p.__self
      ) {
        var S = V(Ee.current.type)
        Ye[S] ||
          (ue(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            S,
            p.ref
          ),
          (Ye[S] = !0))
      }
    }
    var te = function (p, S, F, H, J, Oe, pe) {
      var ke = { $$typeof: m, type: p, key: S, ref: F, props: pe, _owner: Oe }
      return (
        (ke._store = {}),
        Object.defineProperty(ke._store, 'validated', {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(ke, '_self', {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H,
        }),
        Object.defineProperty(ke, '_source', {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J,
        }),
        Object.freeze && (Object.freeze(ke.props), Object.freeze(ke)),
        ke
      )
    }
    function fe(p, S, F) {
      var H,
        J = {},
        Oe = null,
        pe = null,
        ke = null,
        et = null
      if (S != null) {
        je(S) && ((pe = S.ref), wt(S)),
          Re(S) && (Xt(S.key), (Oe = '' + S.key)),
          (ke = S.__self === void 0 ? null : S.__self),
          (et = S.__source === void 0 ? null : S.__source)
        for (H in S) Q.call(S, H) && !K.hasOwnProperty(H) && (J[H] = S[H])
      }
      var Nt = arguments.length - 2
      if (Nt === 1) J.children = F
      else if (Nt > 1) {
        for (var Dt = Array(Nt), _t = 0; _t < Nt; _t++)
          Dt[_t] = arguments[_t + 2]
        Object.freeze && Object.freeze(Dt), (J.children = Dt)
      }
      if (p && p.defaultProps) {
        var Ut = p.defaultProps
        for (H in Ut) J[H] === void 0 && (J[H] = Ut[H])
      }
      if (Oe || pe) {
        var Gt =
          typeof p == 'function' ? p.displayName || p.name || 'Unknown' : p
        Oe && Ge(J, Gt), pe && ot(J, Gt)
      }
      return te(p, Oe, pe, ke, et, Ee.current, J)
    }
    function Le(p, S) {
      var F = te(p.type, S, p.ref, p._self, p._source, p._owner, p.props)
      return F
    }
    function Qe(p, S, F) {
      if (p == null)
        throw new Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            p +
            '.'
        )
      var H,
        J = Pt({}, p.props),
        Oe = p.key,
        pe = p.ref,
        ke = p._self,
        et = p._source,
        Nt = p._owner
      if (S != null) {
        je(S) && ((pe = S.ref), (Nt = Ee.current)),
          Re(S) && (Xt(S.key), (Oe = '' + S.key))
        var Dt
        p.type && p.type.defaultProps && (Dt = p.type.defaultProps)
        for (H in S)
          Q.call(S, H) &&
            !K.hasOwnProperty(H) &&
            (S[H] === void 0 && Dt !== void 0 ? (J[H] = Dt[H]) : (J[H] = S[H]))
      }
      var _t = arguments.length - 2
      if (_t === 1) J.children = F
      else if (_t > 1) {
        for (var Ut = Array(_t), Gt = 0; Gt < _t; Gt++)
          Ut[Gt] = arguments[Gt + 2]
        J.children = Ut
      }
      return te(p.type, Oe, pe, ke, et, Nt, J)
    }
    function ut(p) {
      return typeof p == 'object' && p !== null && p.$$typeof === m
    }
    var Mt = '.',
      At = ':'
    function yt(p) {
      var S = /[=:]/g,
        F = { '=': '=0', ':': '=2' },
        H = p.replace(S, function (J) {
          return F[J]
        })
      return '$' + H
    }
    var Pe = !1,
      Yt = /\/+/g
    function bt(p) {
      return p.replace(Yt, '$&/')
    }
    function Tt(p, S) {
      return typeof p == 'object' && p !== null && p.key != null
        ? (Xt(p.key), yt('' + p.key))
        : S.toString(36)
    }
    function Lr(p, S, F, H, J) {
      var Oe = typeof p
      ;(Oe === 'undefined' || Oe === 'boolean') && (p = null)
      var pe = !1
      if (p === null) pe = !0
      else
        switch (Oe) {
          case 'string':
          case 'number':
            pe = !0
            break
          case 'object':
            switch (p.$$typeof) {
              case m:
              case d:
                pe = !0
            }
        }
      if (pe) {
        var ke = p,
          et = J(ke),
          Nt = H === '' ? Mt + Tt(ke, 0) : H
        if (Bt(et)) {
          var Dt = ''
          Nt != null && (Dt = bt(Nt) + '/'),
            Lr(et, S, Dt, '', function (Ld) {
              return Ld
            })
        } else
          et != null &&
            (ut(et) &&
              (et.key && (!ke || ke.key !== et.key) && Xt(et.key),
              (et = Le(
                et,
                F +
                  (et.key && (!ke || ke.key !== et.key)
                    ? bt('' + et.key) + '/'
                    : '') +
                  Nt
              ))),
            S.push(et))
        return 1
      }
      var _t,
        Ut,
        Gt = 0,
        vt = H === '' ? Mt : H + At
      if (Bt(p))
        for (var fi = 0; fi < p.length; fi++)
          (_t = p[fi]), (Ut = vt + Tt(_t, fi)), (Gt += Lr(_t, S, F, Ut, J))
      else {
        var kl = X(p)
        if (typeof kl == 'function') {
          var Zo = p
          kl === Zo.entries &&
            (Pe ||
              $e(
                'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
              ),
            (Pe = !0))
          for (var Md = kl.call(Zo), Oa, eu = 0; !(Oa = Md.next()).done; )
            (_t = Oa.value),
              (Ut = vt + Tt(_t, eu++)),
              (Gt += Lr(_t, S, F, Ut, J))
        } else if (Oe === 'object') {
          var tu = String(p)
          throw new Error(
            'Objects are not valid as a React child (found: ' +
              (tu === '[object Object]'
                ? 'object with keys {' + Object.keys(p).join(', ') + '}'
                : tu) +
              '). If you meant to render a collection of children, use an array instead.'
          )
        }
      }
      return Gt
    }
    function br(p, S, F) {
      if (p == null) return p
      var H = [],
        J = 0
      return (
        Lr(p, H, '', '', function (Oe) {
          return S.call(F, Oe, J++)
        }),
        H
      )
    }
    function na(p) {
      var S = 0
      return (
        br(p, function () {
          S++
        }),
        S
      )
    }
    function cn(p, S, F) {
      br(
        p,
        function () {
          S.apply(this, arguments)
        },
        F
      )
    }
    function Cn(p) {
      return (
        br(p, function (S) {
          return S
        }) || []
      )
    }
    function ra(p) {
      if (!ut(p))
        throw new Error(
          'React.Children.only expected to receive a single React element child.'
        )
      return p
    }
    function Ta(p) {
      var S = {
        $$typeof: T,
        _currentValue: p,
        _currentValue2: p,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }
      S.Provider = { $$typeof: x, _context: S }
      var F = !1,
        H = !1,
        J = !1
      {
        var Oe = { $$typeof: T, _context: S }
        Object.defineProperties(Oe, {
          Provider: {
            get: function () {
              return (
                H ||
                  ((H = !0),
                  ue(
                    'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
                  )),
                S.Provider
              )
            },
            set: function (pe) {
              S.Provider = pe
            },
          },
          _currentValue: {
            get: function () {
              return S._currentValue
            },
            set: function (pe) {
              S._currentValue = pe
            },
          },
          _currentValue2: {
            get: function () {
              return S._currentValue2
            },
            set: function (pe) {
              S._currentValue2 = pe
            },
          },
          _threadCount: {
            get: function () {
              return S._threadCount
            },
            set: function (pe) {
              S._threadCount = pe
            },
          },
          Consumer: {
            get: function () {
              return (
                F ||
                  ((F = !0),
                  ue(
                    'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
                  )),
                S.Consumer
              )
            },
          },
          displayName: {
            get: function () {
              return S.displayName
            },
            set: function (pe) {
              J ||
                ($e(
                  "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                  pe
                ),
                (J = !0))
            },
          },
        }),
          (S.Consumer = Oe)
      }
      return (S._currentRenderer = null), (S._currentRenderer2 = null), S
    }
    var wa = -1,
      ni = 0,
      ri = 1,
      aa = 2
    function C(p) {
      if (p._status === wa) {
        var S = p._result,
          F = S()
        if (
          (F.then(
            function (Oe) {
              if (p._status === ni || p._status === wa) {
                var pe = p
                ;(pe._status = ri), (pe._result = Oe)
              }
            },
            function (Oe) {
              if (p._status === ni || p._status === wa) {
                var pe = p
                ;(pe._status = aa), (pe._result = Oe)
              }
            }
          ),
          p._status === wa)
        ) {
          var H = p
          ;(H._status = ni), (H._result = F)
        }
      }
      if (p._status === ri) {
        var J = p._result
        return (
          J === void 0 &&
            ue(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
              J
            ),
          'default' in J ||
            ue(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
              J
            ),
          J.default
        )
      } else throw p._result
    }
    function G(p) {
      var S = { _status: wa, _result: p },
        F = { $$typeof: z, _payload: S, _init: C }
      {
        var H, J
        Object.defineProperties(F, {
          defaultProps: {
            configurable: !0,
            get: function () {
              return H
            },
            set: function (Oe) {
              ue(
                'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
              ),
                (H = Oe),
                Object.defineProperty(F, 'defaultProps', { enumerable: !0 })
            },
          },
          propTypes: {
            configurable: !0,
            get: function () {
              return J
            },
            set: function (Oe) {
              ue(
                'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
              ),
                (J = Oe),
                Object.defineProperty(F, 'propTypes', { enumerable: !0 })
            },
          },
        })
      }
      return F
    }
    function ae(p) {
      p != null && p.$$typeof === j
        ? ue(
            'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
          )
        : typeof p != 'function'
        ? ue(
            'forwardRef requires a render function but was given %s.',
            p === null ? 'null' : typeof p
          )
        : p.length !== 0 &&
          p.length !== 2 &&
          ue(
            'forwardRef render functions accept exactly two parameters: props and ref. %s',
            p.length === 1
              ? 'Did you forget to use the ref parameter?'
              : 'Any additional parameter will be undefined.'
          ),
        p != null &&
          (p.defaultProps != null || p.propTypes != null) &&
          ue(
            'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
          )
      var S = { $$typeof: E, render: p }
      {
        var F
        Object.defineProperty(S, 'displayName', {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return F
          },
          set: function (H) {
            ;(F = H), !p.name && !p.displayName && (p.displayName = H)
          },
        })
      }
      return S
    }
    var we
    we = Symbol.for('react.module.reference')
    function Ke(p) {
      return !!(
        typeof p == 'string' ||
        typeof p == 'function' ||
        p === y ||
        p === N ||
        He ||
        p === f ||
        p === M ||
        p === B ||
        ge ||
        p === O ||
        Ce ||
        Te ||
        at ||
        (typeof p == 'object' &&
          p !== null &&
          (p.$$typeof === z ||
            p.$$typeof === j ||
            p.$$typeof === x ||
            p.$$typeof === T ||
            p.$$typeof === E ||
            p.$$typeof === we ||
            p.getModuleId !== void 0))
      )
    }
    function dt(p, S) {
      Ke(p) ||
        ue(
          'memo: The first argument must be a component. Instead received: %s',
          p === null ? 'null' : typeof p
        )
      var F = { $$typeof: j, type: p, compare: S === void 0 ? null : S }
      {
        var H
        Object.defineProperty(F, 'displayName', {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return H
          },
          set: function (J) {
            ;(H = J), !p.name && !p.displayName && (p.displayName = J)
          },
        })
      }
      return F
    }
    function xe() {
      var p = ve.current
      return (
        p === null &&
          ue(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),
        p
      )
    }
    function Ie(p) {
      var S = xe()
      if (p._context !== void 0) {
        var F = p._context
        F.Consumer === p
          ? ue(
              'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
            )
          : F.Provider === p &&
            ue(
              'Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?'
            )
      }
      return S.useContext(p)
    }
    function Wt(p) {
      var S = xe()
      return S.useState(p)
    }
    function Ct(p, S, F) {
      var H = xe()
      return H.useReducer(p, S, F)
    }
    function Xe(p) {
      var S = xe()
      return S.useRef(p)
    }
    function Bn(p, S) {
      var F = xe()
      return F.useEffect(p, S)
    }
    function ia(p, S) {
      var F = xe()
      return F.useInsertionEffect(p, S)
    }
    function $i(p, S) {
      var F = xe()
      return F.useLayoutEffect(p, S)
    }
    function Nr(p, S) {
      var F = xe()
      return F.useCallback(p, S)
    }
    function Cd(p, S) {
      var F = xe()
      return F.useMemo(p, S)
    }
    function Rd(p, S, F) {
      var H = xe()
      return H.useImperativeHandle(p, S, F)
    }
    function Ps(p, S) {
      {
        var F = xe()
        return F.useDebugValue(p, S)
      }
    }
    function Td() {
      var p = xe()
      return p.useTransition()
    }
    function Da(p) {
      var S = xe()
      return S.useDeferredValue(p)
    }
    function Je() {
      var p = xe()
      return p.useId()
    }
    function Pi(p, S, F) {
      var H = xe()
      return H.useSyncExternalStore(p, S, F)
    }
    var ai = 0,
      $o,
      Po,
      Bo,
      Vo,
      Io,
      Yo,
      Wo
    function Bs() {}
    Bs.__reactDisabledLog = !0
    function wd() {
      {
        if (ai === 0) {
          ;($o = console.log),
            (Po = console.info),
            (Bo = console.warn),
            (Vo = console.error),
            (Io = console.group),
            (Yo = console.groupCollapsed),
            (Wo = console.groupEnd)
          var p = { configurable: !0, enumerable: !0, value: Bs, writable: !0 }
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p,
          })
        }
        ai++
      }
    }
    function Go() {
      {
        if ((ai--, ai === 0)) {
          var p = { configurable: !0, enumerable: !0, writable: !0 }
          Object.defineProperties(console, {
            log: Pt({}, p, { value: $o }),
            info: Pt({}, p, { value: Po }),
            warn: Pt({}, p, { value: Bo }),
            error: Pt({}, p, { value: Vo }),
            group: Pt({}, p, { value: Io }),
            groupCollapsed: Pt({}, p, { value: Yo }),
            groupEnd: Pt({}, p, { value: Wo }),
          })
        }
        ai < 0 &&
          ue(
            'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
          )
      }
    }
    var Bi = ht.ReactCurrentDispatcher,
      kr
    function ii(p, S, F) {
      {
        if (kr === void 0)
          try {
            throw Error()
          } catch (J) {
            var H = J.stack.trim().match(/\n( *(at )?)/)
            kr = (H && H[1]) || ''
          }
        return (
          `
` +
          kr +
          p
        )
      }
    }
    var li = !1,
      Dl
    {
      var qo = typeof WeakMap == 'function' ? WeakMap : Map
      Dl = new qo()
    }
    function Vs(p, S) {
      if (!p || li) return ''
      {
        var F = Dl.get(p)
        if (F !== void 0) return F
      }
      var H
      li = !0
      var J = Error.prepareStackTrace
      Error.prepareStackTrace = void 0
      var Oe
      ;(Oe = Bi.current), (Bi.current = null), wd()
      try {
        if (S) {
          var pe = function () {
            throw Error()
          }
          if (
            (Object.defineProperty(pe.prototype, 'props', {
              set: function () {
                throw Error()
              },
            }),
            typeof Reflect == 'object' && Reflect.construct)
          ) {
            try {
              Reflect.construct(pe, [])
            } catch (vt) {
              H = vt
            }
            Reflect.construct(p, [], pe)
          } else {
            try {
              pe.call()
            } catch (vt) {
              H = vt
            }
            p.call(pe.prototype)
          }
        } else {
          try {
            throw Error()
          } catch (vt) {
            H = vt
          }
          p()
        }
      } catch (vt) {
        if (vt && H && typeof vt.stack == 'string') {
          for (
            var ke = vt.stack.split(`
`),
              et = H.stack.split(`
`),
              Nt = ke.length - 1,
              Dt = et.length - 1;
            Nt >= 1 && Dt >= 0 && ke[Nt] !== et[Dt];

          )
            Dt--
          for (; Nt >= 1 && Dt >= 0; Nt--, Dt--)
            if (ke[Nt] !== et[Dt]) {
              if (Nt !== 1 || Dt !== 1)
                do
                  if ((Nt--, Dt--, Dt < 0 || ke[Nt] !== et[Dt])) {
                    var _t =
                      `
` + ke[Nt].replace(' at new ', ' at ')
                    return (
                      p.displayName &&
                        _t.includes('<anonymous>') &&
                        (_t = _t.replace('<anonymous>', p.displayName)),
                      typeof p == 'function' && Dl.set(p, _t),
                      _t
                    )
                  }
                while (Nt >= 1 && Dt >= 0)
              break
            }
        }
      } finally {
        ;(li = !1), (Bi.current = Oe), Go(), (Error.prepareStackTrace = J)
      }
      var Ut = p ? p.displayName || p.name : '',
        Gt = Ut ? ii(Ut) : ''
      return typeof p == 'function' && Dl.set(p, Gt), Gt
    }
    function Qo(p, S, F) {
      return Vs(p, !1)
    }
    function Dd(p) {
      var S = p.prototype
      return !!(S && S.isReactComponent)
    }
    function oi(p, S, F) {
      if (p == null) return ''
      if (typeof p == 'function') return Vs(p, Dd(p))
      if (typeof p == 'string') return ii(p)
      switch (p) {
        case M:
          return ii('Suspense')
        case B:
          return ii('SuspenseList')
      }
      if (typeof p == 'object')
        switch (p.$$typeof) {
          case E:
            return Qo(p.render)
          case j:
            return oi(p.type, S, F)
          case z: {
            var H = p,
              J = H._payload,
              Oe = H._init
            try {
              return oi(Oe(J), S, F)
            } catch {}
          }
        }
      return ''
    }
    var Is = {},
      Ko = ht.ReactDebugCurrentFrame
    function _l(p) {
      if (p) {
        var S = p._owner,
          F = oi(p.type, p._source, S ? S.type : null)
        Ko.setExtraStackFrame(F)
      } else Ko.setExtraStackFrame(null)
    }
    function Ys(p, S, F, H, J) {
      {
        var Oe = Function.call.bind(Q)
        for (var pe in p)
          if (Oe(p, pe)) {
            var ke = void 0
            try {
              if (typeof p[pe] != 'function') {
                var et = Error(
                  (H || 'React class') +
                    ': ' +
                    F +
                    ' type `' +
                    pe +
                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                    typeof p[pe] +
                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                )
                throw ((et.name = 'Invariant Violation'), et)
              }
              ke = p[pe](
                S,
                pe,
                H,
                F,
                null,
                'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
              )
            } catch (Nt) {
              ke = Nt
            }
            ke &&
              !(ke instanceof Error) &&
              (_l(J),
              ue(
                '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                H || 'React class',
                F,
                pe,
                typeof ke
              ),
              _l(null)),
              ke instanceof Error &&
                !(ke.message in Is) &&
                ((Is[ke.message] = !0),
                _l(J),
                ue('Failed %s type: %s', F, ke.message),
                _l(null))
          }
      }
    }
    function mt(p) {
      if (p) {
        var S = p._owner,
          F = oi(p.type, p._source, S ? S.type : null)
        ee(F)
      } else ee(null)
    }
    var Xo
    Xo = !1
    function Jo() {
      if (Ee.current) {
        var p = V(Ee.current.type)
        if (p)
          return (
            `

Check the render method of \`` +
            p +
            '`.'
          )
      }
      return ''
    }
    function Be(p) {
      if (p !== void 0) {
        var S = p.fileName.replace(/^.*[\\\/]/, ''),
          F = p.lineNumber
        return (
          `

Check your code at ` +
          S +
          ':' +
          F +
          '.'
        )
      }
      return ''
    }
    function Ws(p) {
      return p != null ? Be(p.__source) : ''
    }
    var Vn = {}
    function Vi(p) {
      var S = Jo()
      if (!S) {
        var F = typeof p == 'string' ? p : p.displayName || p.name
        F &&
          (S =
            `

Check the top-level render call using <` +
            F +
            '>.')
      }
      return S
    }
    function ui(p, S) {
      if (!(!p._store || p._store.validated || p.key != null)) {
        p._store.validated = !0
        var F = Vi(S)
        if (!Vn[F]) {
          Vn[F] = !0
          var H = ''
          p &&
            p._owner &&
            p._owner !== Ee.current &&
            (H = ' It was passed a child from ' + V(p._owner.type) + '.'),
            mt(p),
            ue(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              F,
              H
            ),
            mt(null)
        }
      }
    }
    function Gs(p, S) {
      if (typeof p == 'object') {
        if (Bt(p))
          for (var F = 0; F < p.length; F++) {
            var H = p[F]
            ut(H) && ui(H, S)
          }
        else if (ut(p)) p._store && (p._store.validated = !0)
        else if (p) {
          var J = X(p)
          if (typeof J == 'function' && J !== p.entries)
            for (var Oe = J.call(p), pe; !(pe = Oe.next()).done; )
              ut(pe.value) && ui(pe.value, S)
        }
      }
    }
    function Rn(p) {
      {
        var S = p.type
        if (S == null || typeof S == 'string') return
        var F
        if (typeof S == 'function') F = S.propTypes
        else if (typeof S == 'object' && (S.$$typeof === E || S.$$typeof === j))
          F = S.propTypes
        else return
        if (F) {
          var H = V(S)
          Ys(F, p.props, 'prop', H, p)
        } else if (S.PropTypes !== void 0 && !Xo) {
          Xo = !0
          var J = V(S)
          ue(
            'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
            J || 'Unknown'
          )
        }
        typeof S.getDefaultProps == 'function' &&
          !S.getDefaultProps.isReactClassApproved &&
          ue(
            'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
          )
      }
    }
    function Vt(p) {
      {
        for (var S = Object.keys(p.props), F = 0; F < S.length; F++) {
          var H = S[F]
          if (H !== 'children' && H !== 'key') {
            mt(p),
              ue(
                'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                H
              ),
              mt(null)
            break
          }
        }
        p.ref !== null &&
          (mt(p),
          ue('Invalid attribute `ref` supplied to `React.Fragment`.'),
          mt(null))
      }
    }
    function qs(p, S, F) {
      var H = Ke(p)
      if (!H) {
        var J = ''
        ;(p === void 0 ||
          (typeof p == 'object' &&
            p !== null &&
            Object.keys(p).length === 0)) &&
          (J +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.")
        var Oe = Ws(S)
        Oe ? (J += Oe) : (J += Jo())
        var pe
        p === null
          ? (pe = 'null')
          : Bt(p)
          ? (pe = 'array')
          : p !== void 0 && p.$$typeof === m
          ? ((pe = '<' + (V(p.type) || 'Unknown') + ' />'),
            (J =
              ' Did you accidentally export a JSX literal instead of a component?'))
          : (pe = typeof p),
          ue(
            'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            pe,
            J
          )
      }
      var ke = fe.apply(this, arguments)
      if (ke == null) return ke
      if (H) for (var et = 2; et < arguments.length; et++) Gs(arguments[et], p)
      return p === y ? Vt(ke) : Rn(ke), ke
    }
    var xr = !1
    function ur(p) {
      var S = qs.bind(null, p)
      return (
        (S.type = p),
        xr ||
          ((xr = !0),
          $e(
            'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
          )),
        Object.defineProperty(S, 'type', {
          enumerable: !1,
          get: function () {
            return (
              $e(
                'Factory.type is deprecated. Access the class directly before passing it to createFactory.'
              ),
              Object.defineProperty(this, 'type', { value: p }),
              p
            )
          },
        }),
        S
      )
    }
    function la(p, S, F) {
      for (var H = Qe.apply(this, arguments), J = 2; J < arguments.length; J++)
        Gs(arguments[J], H.type)
      return Rn(H), H
    }
    function _d(p, S) {
      var F = ye.transition
      ye.transition = {}
      var H = ye.transition
      ye.transition._updatedFibers = new Set()
      try {
        p()
      } finally {
        if (((ye.transition = F), F === null && H._updatedFibers)) {
          var J = H._updatedFibers.size
          J > 10 &&
            $e(
              'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
            ),
            H._updatedFibers.clear()
        }
      }
    }
    var Ol = !1,
      Ii = null
    function Qs(p) {
      if (Ii === null)
        try {
          var S = ('require' + Math.random()).slice(0, 7),
            F = i && i[S]
          Ii = F.call(i, 'timers').setImmediate
        } catch {
          Ii = function (J) {
            Ol === !1 &&
              ((Ol = !0),
              typeof MessageChannel > 'u' &&
                ue(
                  'This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.'
                ))
            var Oe = new MessageChannel()
            ;(Oe.port1.onmessage = J), Oe.port2.postMessage(void 0)
          }
        }
      return Ii(p)
    }
    var si = 0,
      Ks = !1
    function Od(p) {
      {
        var S = si
        si++, Z.current === null && (Z.current = [])
        var F = Z.isBatchingLegacy,
          H
        try {
          if (
            ((Z.isBatchingLegacy = !0),
            (H = p()),
            !F && Z.didScheduleLegacyUpdate)
          ) {
            var J = Z.current
            J !== null && ((Z.didScheduleLegacyUpdate = !1), Ll(J))
          }
        } catch (Ut) {
          throw (_a(S), Ut)
        } finally {
          Z.isBatchingLegacy = F
        }
        if (H !== null && typeof H == 'object' && typeof H.then == 'function') {
          var Oe = H,
            pe = !1,
            ke = {
              then: function (Ut, Gt) {
                ;(pe = !0),
                  Oe.then(
                    function (vt) {
                      _a(S), si === 0 ? Ml(vt, Ut, Gt) : Ut(vt)
                    },
                    function (vt) {
                      _a(S), Gt(vt)
                    }
                  )
              },
            }
          return (
            !Ks &&
              typeof Promise < 'u' &&
              Promise.resolve()
                .then(function () {})
                .then(function () {
                  pe ||
                    ((Ks = !0),
                    ue(
                      'You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);'
                    ))
                }),
            ke
          )
        } else {
          var et = H
          if ((_a(S), si === 0)) {
            var Nt = Z.current
            Nt !== null && (Ll(Nt), (Z.current = null))
            var Dt = {
              then: function (Ut, Gt) {
                Z.current === null ? ((Z.current = []), Ml(et, Ut, Gt)) : Ut(et)
              },
            }
            return Dt
          } else {
            var _t = {
              then: function (Ut, Gt) {
                Ut(et)
              },
            }
            return _t
          }
        }
      }
    }
    function _a(p) {
      p !== si - 1 &&
        ue(
          'You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. '
        ),
        (si = p)
    }
    function Ml(p, S, F) {
      {
        var H = Z.current
        if (H !== null)
          try {
            Ll(H),
              Qs(function () {
                H.length === 0 ? ((Z.current = null), S(p)) : Ml(p, S, F)
              })
          } catch (J) {
            F(J)
          }
        else S(p)
      }
    }
    var ci = !1
    function Ll(p) {
      if (!ci) {
        ci = !0
        var S = 0
        try {
          for (; S < p.length; S++) {
            var F = p[S]
            do F = F(!0)
            while (F !== null)
          }
          p.length = 0
        } catch (H) {
          throw ((p = p.slice(S + 1)), H)
        } finally {
          ci = !1
        }
      }
    }
    var Xs = qs,
      Js = la,
      Zs = ur,
      ec = { map: br, forEach: cn, count: na, toArray: Cn, only: ra }
    ;(o.Children = ec),
      (o.Component = Nn),
      (o.Fragment = y),
      (o.Profiler = N),
      (o.PureComponent = rn),
      (o.StrictMode = f),
      (o.Suspense = M),
      (o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ht),
      (o.cloneElement = Js),
      (o.createContext = Ta),
      (o.createElement = Xs),
      (o.createFactory = Zs),
      (o.createRef = Mn),
      (o.forwardRef = ae),
      (o.isValidElement = ut),
      (o.lazy = G),
      (o.memo = dt),
      (o.startTransition = _d),
      (o.unstable_act = Od),
      (o.useCallback = Nr),
      (o.useContext = Ie),
      (o.useDebugValue = Ps),
      (o.useDeferredValue = Da),
      (o.useEffect = Bn),
      (o.useId = Je),
      (o.useImperativeHandle = Rd),
      (o.useInsertionEffect = ia),
      (o.useLayoutEffect = $i),
      (o.useMemo = Cd),
      (o.useReducer = Ct),
      (o.useRef = Xe),
      (o.useState = Wt),
      (o.useSyncExternalStore = Pi),
      (o.useTransition = Td),
      (o.version = s),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          'function' &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error())
  })()
})(qh, qh.exports)
;(function (i) {
  i.exports = qh.exports
})(R)
const $t = OO(R.exports),
  ud = DO({ __proto__: null, default: $t }, [R.exports])
var Qh = {},
  sy = { exports: {} },
  Or = {},
  _S = { exports: {} },
  OS = {}
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (i) {
  ;(function () {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
        'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error())
    var o = !1,
      s = !1,
      m = 5
    function d(te, fe) {
      var Le = te.length
      te.push(fe), N(te, fe, Le)
    }
    function y(te) {
      return te.length === 0 ? null : te[0]
    }
    function f(te) {
      if (te.length === 0) return null
      var fe = te[0],
        Le = te.pop()
      return Le !== fe && ((te[0] = Le), x(te, Le, 0)), fe
    }
    function N(te, fe, Le) {
      for (var Qe = Le; Qe > 0; ) {
        var ut = (Qe - 1) >>> 1,
          Mt = te[ut]
        if (T(Mt, fe) > 0) (te[ut] = fe), (te[Qe] = Mt), (Qe = ut)
        else return
      }
    }
    function x(te, fe, Le) {
      for (var Qe = Le, ut = te.length, Mt = ut >>> 1; Qe < Mt; ) {
        var At = (Qe + 1) * 2 - 1,
          yt = te[At],
          Pe = At + 1,
          Yt = te[Pe]
        if (T(yt, fe) < 0)
          Pe < ut && T(Yt, yt) < 0
            ? ((te[Qe] = Yt), (te[Pe] = fe), (Qe = Pe))
            : ((te[Qe] = yt), (te[At] = fe), (Qe = At))
        else if (Pe < ut && T(Yt, fe) < 0)
          (te[Qe] = Yt), (te[Pe] = fe), (Qe = Pe)
        else return
      }
    }
    function T(te, fe) {
      var Le = te.sortIndex - fe.sortIndex
      return Le !== 0 ? Le : te.id - fe.id
    }
    var E = 1,
      M = 2,
      B = 3,
      j = 4,
      z = 5
    function O(te, fe) {}
    var de =
      typeof performance == 'object' && typeof performance.now == 'function'
    if (de) {
      var Y = performance
      i.unstable_now = function () {
        return Y.now()
      }
    } else {
      var X = Date,
        ve = X.now()
      i.unstable_now = function () {
        return X.now() - ve
      }
    }
    var ye = 1073741823,
      Z = -1,
      Ee = 250,
      ne = 5e3,
      st = 1e4,
      ee = ye,
      Ce = [],
      Te = [],
      at = 1,
      ge = null,
      He = B,
      ht = !1,
      $e = !1,
      ue = !1,
      Fe = typeof setTimeout == 'function' ? setTimeout : null,
      tn = typeof clearTimeout == 'function' ? clearTimeout : null,
      Pn = typeof setImmediate < 'u' ? setImmediate : null
    typeof navigator < 'u' &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling)
    function nn(te) {
      for (var fe = y(Te); fe !== null; ) {
        if (fe.callback === null) f(Te)
        else if (fe.startTime <= te)
          f(Te), (fe.sortIndex = fe.expirationTime), d(Ce, fe)
        else return
        fe = y(Te)
      }
    }
    function Pt(te) {
      if (((ue = !1), nn(te), !$e))
        if (y(Ce) !== null) ($e = !0), je(bn)
        else {
          var fe = y(Te)
          fe !== null && Re(Pt, fe.startTime - te)
        }
    }
    function bn(te, fe) {
      ;($e = !1), ue && ((ue = !1), Ge()), (ht = !0)
      var Le = He
      try {
        var Qe
        if (!s) return Nn(te, fe)
      } finally {
        ;(ge = null), (He = Le), (ht = !1)
      }
    }
    function Nn(te, fe) {
      var Le = fe
      for (
        nn(Le), ge = y(Ce);
        ge !== null && !o && !(ge.expirationTime > Le && (!te || Zn()));

      ) {
        var Qe = ge.callback
        if (typeof Qe == 'function') {
          ;(ge.callback = null), (He = ge.priorityLevel)
          var ut = ge.expirationTime <= Le,
            Mt = Qe(ut)
          ;(Le = i.unstable_now()),
            typeof Mt == 'function'
              ? (ge.callback = Mt)
              : ge === y(Ce) && f(Ce),
            nn(Le)
        } else f(Ce)
        ge = y(Ce)
      }
      if (ge !== null) return !0
      var At = y(Te)
      return At !== null && Re(Pt, At.startTime - Le), !1
    }
    function Mr(te, fe) {
      switch (te) {
        case E:
        case M:
        case B:
        case j:
        case z:
          break
        default:
          te = B
      }
      var Le = He
      He = te
      try {
        return fe()
      } finally {
        He = Le
      }
    }
    function yr(te) {
      var fe
      switch (He) {
        case E:
        case M:
        case B:
          fe = B
          break
        default:
          fe = He
          break
      }
      var Le = He
      He = fe
      try {
        return te()
      } finally {
        He = Le
      }
    }
    function gr(te) {
      var fe = He
      return function () {
        var Le = He
        He = fe
        try {
          return te.apply(this, arguments)
        } finally {
          He = Le
        }
      }
    }
    function xn(te, fe, Le) {
      var Qe = i.unstable_now(),
        ut
      if (typeof Le == 'object' && Le !== null) {
        var Mt = Le.delay
        typeof Mt == 'number' && Mt > 0 ? (ut = Qe + Mt) : (ut = Qe)
      } else ut = Qe
      var At
      switch (te) {
        case E:
          At = Z
          break
        case M:
          At = Ee
          break
        case z:
          At = ee
          break
        case j:
          At = st
          break
        case B:
        default:
          At = ne
          break
      }
      var yt = ut + At,
        Pe = {
          id: at++,
          callback: fe,
          priorityLevel: te,
          startTime: ut,
          expirationTime: yt,
          sortIndex: -1,
        }
      return (
        ut > Qe
          ? ((Pe.sortIndex = ut),
            d(Te, Pe),
            y(Ce) === null &&
              Pe === y(Te) &&
              (ue ? Ge() : (ue = !0), Re(Pt, ut - Qe)))
          : ((Pe.sortIndex = yt), d(Ce, Pe), !$e && !ht && (($e = !0), je(bn))),
        Pe
      )
    }
    function rn() {}
    function Sn() {
      !$e && !ht && (($e = !0), je(bn))
    }
    function Mn() {
      return y(Ce)
    }
    function sn(te) {
      te.callback = null
    }
    function Bt() {
      return He
    }
    var En = !1,
      Kt = null,
      Ht = -1,
      Xt = m,
      Jn = -1
    function Zn() {
      var te = i.unstable_now() - Jn
      return !(te < Xt)
    }
    function V() {}
    function Q(te) {
      if (te < 0 || te > 125) {
        console.error(
          'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
        )
        return
      }
      te > 0 ? (Xt = Math.floor(1e3 / te)) : (Xt = m)
    }
    var K = function () {
        if (Kt !== null) {
          var te = i.unstable_now()
          Jn = te
          var fe = !0,
            Le = !0
          try {
            Le = Kt(fe, te)
          } finally {
            Le ? be() : ((En = !1), (Kt = null))
          }
        } else En = !1
      },
      be
    if (typeof Pn == 'function')
      be = function () {
        Pn(K)
      }
    else if (typeof MessageChannel < 'u') {
      var Ve = new MessageChannel(),
        Ye = Ve.port2
      ;(Ve.port1.onmessage = K),
        (be = function () {
          Ye.postMessage(null)
        })
    } else
      be = function () {
        Fe(K, 0)
      }
    function je(te) {
      ;(Kt = te), En || ((En = !0), be())
    }
    function Re(te, fe) {
      Ht = Fe(function () {
        te(i.unstable_now())
      }, fe)
    }
    function Ge() {
      tn(Ht), (Ht = -1)
    }
    var ot = V,
      wt = null
    ;(i.unstable_IdlePriority = z),
      (i.unstable_ImmediatePriority = E),
      (i.unstable_LowPriority = j),
      (i.unstable_NormalPriority = B),
      (i.unstable_Profiling = wt),
      (i.unstable_UserBlockingPriority = M),
      (i.unstable_cancelCallback = sn),
      (i.unstable_continueExecution = Sn),
      (i.unstable_forceFrameRate = Q),
      (i.unstable_getCurrentPriorityLevel = Bt),
      (i.unstable_getFirstCallbackNode = Mn),
      (i.unstable_next = yr),
      (i.unstable_pauseExecution = rn),
      (i.unstable_requestPaint = ot),
      (i.unstable_runWithPriority = Mr),
      (i.unstable_scheduleCallback = xn),
      (i.unstable_shouldYield = Zn),
      (i.unstable_wrapCallback = gr),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          'function' &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error())
  })()
})(OS)
;(function (i) {
  i.exports = OS
})(_S)
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function () {
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
      'function' &&
    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error())
  var i = R.exports,
    o = _S.exports,
    s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    m = !1
  function d(e) {
    m = e
  }
  function y(e) {
    if (!m) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r]
      N('warn', e, n)
    }
  }
  function f(e) {
    if (!m) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r]
      N('error', e, n)
    }
  }
  function N(e, t, n) {
    {
      var r = s.ReactDebugCurrentFrame,
        a = r.getStackAddendum()
      a !== '' && ((t += '%s'), (n = n.concat([a])))
      var l = n.map(function (u) {
        return String(u)
      })
      l.unshift('Warning: ' + t),
        Function.prototype.apply.call(console[e], console, l)
    }
  }
  var x = 0,
    T = 1,
    E = 2,
    M = 3,
    B = 4,
    j = 5,
    z = 6,
    O = 7,
    de = 8,
    Y = 9,
    X = 10,
    ve = 11,
    ye = 12,
    Z = 13,
    Ee = 14,
    ne = 15,
    st = 16,
    ee = 17,
    Ce = 18,
    Te = 19,
    at = 21,
    ge = 22,
    He = 23,
    ht = 24,
    $e = 25,
    ue = !0,
    Fe = !1,
    tn = !1,
    Pn = !1,
    nn = !1,
    Pt = !0,
    bn = !1,
    Nn = !1,
    Mr = !0,
    yr = !0,
    gr = !0,
    xn = new Set(),
    rn = {},
    Sn = {}
  function Mn(e, t) {
    sn(e, t), sn(e + 'Capture', t)
  }
  function sn(e, t) {
    rn[e] &&
      f(
        'EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.',
        e
      ),
      (rn[e] = t)
    {
      var n = e.toLowerCase()
      ;(Sn[n] = e), e === 'onDoubleClick' && (Sn.ondblclick = e)
    }
    for (var r = 0; r < t.length; r++) xn.add(t[r])
  }
  var Bt =
      typeof window < 'u' &&
      typeof window.document < 'u' &&
      typeof window.document.createElement < 'u',
    En = Object.prototype.hasOwnProperty
  function Kt(e) {
    {
      var t = typeof Symbol == 'function' && Symbol.toStringTag,
        n = (t && e[Symbol.toStringTag]) || e.constructor.name || 'Object'
      return n
    }
  }
  function Ht(e) {
    try {
      return Xt(e), !1
    } catch {
      return !0
    }
  }
  function Xt(e) {
    return '' + e
  }
  function Jn(e, t) {
    if (Ht(e))
      return (
        f(
          'The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Kt(e)
        ),
        Xt(e)
      )
  }
  function Zn(e) {
    if (Ht(e))
      return (
        f(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          Kt(e)
        ),
        Xt(e)
      )
  }
  function V(e, t) {
    if (Ht(e))
      return (
        f(
          'The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Kt(e)
        ),
        Xt(e)
      )
  }
  function Q(e, t) {
    if (Ht(e))
      return (
        f(
          'The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Kt(e)
        ),
        Xt(e)
      )
  }
  function K(e) {
    if (Ht(e))
      return (
        f(
          'The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.',
          Kt(e)
        ),
        Xt(e)
      )
  }
  function be(e) {
    if (Ht(e))
      return (
        f(
          'Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.',
          Kt(e)
        ),
        Xt(e)
      )
  }
  var Ve = 0,
    Ye = 1,
    je = 2,
    Re = 3,
    Ge = 4,
    ot = 5,
    wt = 6,
    te =
      ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
    fe = te + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
    Le = new RegExp('^[' + te + '][' + fe + ']*$'),
    Qe = {},
    ut = {}
  function Mt(e) {
    return En.call(ut, e)
      ? !0
      : En.call(Qe, e)
      ? !1
      : Le.test(e)
      ? ((ut[e] = !0), !0)
      : ((Qe[e] = !0), f('Invalid attribute name: `%s`', e), !1)
  }
  function At(e, t, n) {
    return t !== null
      ? t.type === Ve
      : n
      ? !1
      : e.length > 2 &&
        (e[0] === 'o' || e[0] === 'O') &&
        (e[1] === 'n' || e[1] === 'N')
  }
  function yt(e, t, n, r) {
    if (n !== null && n.type === Ve) return !1
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0
      case 'boolean': {
        if (r) return !1
        if (n !== null) return !n.acceptsBooleans
        var a = e.toLowerCase().slice(0, 5)
        return a !== 'data-' && a !== 'aria-'
      }
      default:
        return !1
    }
  }
  function Pe(e, t, n, r) {
    if (t === null || typeof t > 'u' || yt(e, t, n, r)) return !0
    if (r) return !1
    if (n !== null)
      switch (n.type) {
        case Re:
          return !t
        case Ge:
          return t === !1
        case ot:
          return isNaN(t)
        case wt:
          return isNaN(t) || t < 1
      }
    return !1
  }
  function Yt(e) {
    return Tt.hasOwnProperty(e) ? Tt[e] : null
  }
  function bt(e, t, n, r, a, l, u) {
    ;(this.acceptsBooleans = t === je || t === Re || t === Ge),
      (this.attributeName = r),
      (this.attributeNamespace = a),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = l),
      (this.removeEmptyString = u)
  }
  var Tt = {},
    Lr = [
      'children',
      'dangerouslySetInnerHTML',
      'defaultValue',
      'defaultChecked',
      'innerHTML',
      'suppressContentEditableWarning',
      'suppressHydrationWarning',
      'style',
    ]
  Lr.forEach(function (e) {
    Tt[e] = new bt(e, Ve, !1, e, null, !1, !1)
  }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0],
        n = e[1]
      Tt[t] = new bt(t, Ye, !1, n, null, !1, !1)
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (
      e
    ) {
      Tt[e] = new bt(e, je, !1, e.toLowerCase(), null, !1, !1)
    }),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      Tt[e] = new bt(e, je, !1, e, null, !1, !1)
    }),
    [
      'allowFullScreen',
      'async',
      'autoFocus',
      'autoPlay',
      'controls',
      'default',
      'defer',
      'disabled',
      'disablePictureInPicture',
      'disableRemotePlayback',
      'formNoValidate',
      'hidden',
      'loop',
      'noModule',
      'noValidate',
      'open',
      'playsInline',
      'readOnly',
      'required',
      'reversed',
      'scoped',
      'seamless',
      'itemScope',
    ].forEach(function (e) {
      Tt[e] = new bt(e, Re, !1, e.toLowerCase(), null, !1, !1)
    }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      Tt[e] = new bt(e, Re, !0, e, null, !1, !1)
    }),
    ['capture', 'download'].forEach(function (e) {
      Tt[e] = new bt(e, Ge, !1, e, null, !1, !1)
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      Tt[e] = new bt(e, wt, !1, e, null, !1, !1)
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      Tt[e] = new bt(e, ot, !1, e.toLowerCase(), null, !1, !1)
    })
  var br = /[\-\:]([a-z])/g,
    na = function (e) {
      return e[1].toUpperCase()
    }
  ;[
    'accent-height',
    'alignment-baseline',
    'arabic-form',
    'baseline-shift',
    'cap-height',
    'clip-path',
    'clip-rule',
    'color-interpolation',
    'color-interpolation-filters',
    'color-profile',
    'color-rendering',
    'dominant-baseline',
    'enable-background',
    'fill-opacity',
    'fill-rule',
    'flood-color',
    'flood-opacity',
    'font-family',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-variant',
    'font-weight',
    'glyph-name',
    'glyph-orientation-horizontal',
    'glyph-orientation-vertical',
    'horiz-adv-x',
    'horiz-origin-x',
    'image-rendering',
    'letter-spacing',
    'lighting-color',
    'marker-end',
    'marker-mid',
    'marker-start',
    'overline-position',
    'overline-thickness',
    'paint-order',
    'panose-1',
    'pointer-events',
    'rendering-intent',
    'shape-rendering',
    'stop-color',
    'stop-opacity',
    'strikethrough-position',
    'strikethrough-thickness',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke-width',
    'text-anchor',
    'text-decoration',
    'text-rendering',
    'underline-position',
    'underline-thickness',
    'unicode-bidi',
    'unicode-range',
    'units-per-em',
    'v-alphabetic',
    'v-hanging',
    'v-ideographic',
    'v-mathematical',
    'vector-effect',
    'vert-adv-y',
    'vert-origin-x',
    'vert-origin-y',
    'word-spacing',
    'writing-mode',
    'xmlns:xlink',
    'x-height',
  ].forEach(function (e) {
    var t = e.replace(br, na)
    Tt[t] = new bt(t, Ye, !1, e, null, !1, !1)
  }),
    [
      'xlink:actuate',
      'xlink:arcrole',
      'xlink:role',
      'xlink:show',
      'xlink:title',
      'xlink:type',
    ].forEach(function (e) {
      var t = e.replace(br, na)
      Tt[t] = new bt(t, Ye, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(br, na)
      Tt[t] = new bt(
        t,
        Ye,
        !1,
        e,
        'http://www.w3.org/XML/1998/namespace',
        !1,
        !1
      )
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      Tt[e] = new bt(e, Ye, !1, e.toLowerCase(), null, !1, !1)
    })
  var cn = 'xlinkHref'
  ;(Tt[cn] = new bt(
    'xlinkHref',
    Ye,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
  )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      Tt[e] = new bt(e, Ye, !1, e.toLowerCase(), null, !0, !0)
    })
  var Cn =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
    ra = !1
  function Ta(e) {
    !ra &&
      Cn.test(e) &&
      ((ra = !0),
      f(
        'A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.',
        JSON.stringify(e)
      ))
  }
  function wa(e, t, n, r) {
    if (r.mustUseProperty) {
      var a = r.propertyName
      return e[a]
    } else {
      Jn(n, t), r.sanitizeURL && Ta('' + n)
      var l = r.attributeName,
        u = null
      if (r.type === Ge) {
        if (e.hasAttribute(l)) {
          var c = e.getAttribute(l)
          return c === '' ? !0 : Pe(t, n, r, !1) ? c : c === '' + n ? n : c
        }
      } else if (e.hasAttribute(l)) {
        if (Pe(t, n, r, !1)) return e.getAttribute(l)
        if (r.type === Re) return n
        u = e.getAttribute(l)
      }
      return Pe(t, n, r, !1) ? (u === null ? n : u) : u === '' + n ? n : u
    }
  }
  function ni(e, t, n, r) {
    {
      if (!Mt(t)) return
      if (!e.hasAttribute(t)) return n === void 0 ? void 0 : null
      var a = e.getAttribute(t)
      return Jn(n, t), a === '' + n ? n : a
    }
  }
  function ri(e, t, n, r) {
    var a = Yt(t)
    if (!At(t, a, r)) {
      if ((Pe(t, n, a, r) && (n = null), r || a === null)) {
        if (Mt(t)) {
          var l = t
          n === null
            ? e.removeAttribute(l)
            : (Jn(n, t), e.setAttribute(l, '' + n))
        }
        return
      }
      var u = a.mustUseProperty
      if (u) {
        var c = a.propertyName
        if (n === null) {
          var v = a.type
          e[c] = v === Re ? !1 : ''
        } else e[c] = n
        return
      }
      var g = a.attributeName,
        b = a.attributeNamespace
      if (n === null) e.removeAttribute(g)
      else {
        var D = a.type,
          w
        D === Re || (D === Ge && n === !0)
          ? (w = '')
          : (Jn(n, g), (w = '' + n), a.sanitizeURL && Ta(w.toString())),
          b ? e.setAttributeNS(b, g, w) : e.setAttribute(g, w)
      }
    }
  }
  var aa = Symbol.for('react.element'),
    C = Symbol.for('react.portal'),
    G = Symbol.for('react.fragment'),
    ae = Symbol.for('react.strict_mode'),
    we = Symbol.for('react.profiler'),
    Ke = Symbol.for('react.provider'),
    dt = Symbol.for('react.context'),
    xe = Symbol.for('react.forward_ref'),
    Ie = Symbol.for('react.suspense'),
    Wt = Symbol.for('react.suspense_list'),
    Ct = Symbol.for('react.memo'),
    Xe = Symbol.for('react.lazy'),
    Bn = Symbol.for('react.scope'),
    ia = Symbol.for('react.debug_trace_mode'),
    $i = Symbol.for('react.offscreen'),
    Nr = Symbol.for('react.legacy_hidden'),
    Cd = Symbol.for('react.cache'),
    Rd = Symbol.for('react.tracing_marker'),
    Ps = Symbol.iterator,
    Td = '@@iterator'
  function Da(e) {
    if (e === null || typeof e != 'object') return null
    var t = (Ps && e[Ps]) || e[Td]
    return typeof t == 'function' ? t : null
  }
  var Je = Object.assign,
    Pi = 0,
    ai,
    $o,
    Po,
    Bo,
    Vo,
    Io,
    Yo
  function Wo() {}
  Wo.__reactDisabledLog = !0
  function Bs() {
    {
      if (Pi === 0) {
        ;(ai = console.log),
          ($o = console.info),
          (Po = console.warn),
          (Bo = console.error),
          (Vo = console.group),
          (Io = console.groupCollapsed),
          (Yo = console.groupEnd)
        var e = { configurable: !0, enumerable: !0, value: Wo, writable: !0 }
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e,
        })
      }
      Pi++
    }
  }
  function wd() {
    {
      if ((Pi--, Pi === 0)) {
        var e = { configurable: !0, enumerable: !0, writable: !0 }
        Object.defineProperties(console, {
          log: Je({}, e, { value: ai }),
          info: Je({}, e, { value: $o }),
          warn: Je({}, e, { value: Po }),
          error: Je({}, e, { value: Bo }),
          group: Je({}, e, { value: Vo }),
          groupCollapsed: Je({}, e, { value: Io }),
          groupEnd: Je({}, e, { value: Yo }),
        })
      }
      Pi < 0 &&
        f(
          'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
        )
    }
  }
  var Go = s.ReactCurrentDispatcher,
    Bi
  function kr(e, t, n) {
    {
      if (Bi === void 0)
        try {
          throw Error()
        } catch (a) {
          var r = a.stack.trim().match(/\n( *(at )?)/)
          Bi = (r && r[1]) || ''
        }
      return (
        `
` +
        Bi +
        e
      )
    }
  }
  var ii = !1,
    li
  {
    var Dl = typeof WeakMap == 'function' ? WeakMap : Map
    li = new Dl()
  }
  function qo(e, t) {
    if (!e || ii) return ''
    {
      var n = li.get(e)
      if (n !== void 0) return n
    }
    var r
    ii = !0
    var a = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    var l
    ;(l = Go.current), (Go.current = null), Bs()
    try {
      if (t) {
        var u = function () {
          throw Error()
        }
        if (
          (Object.defineProperty(u.prototype, 'props', {
            set: function () {
              throw Error()
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(u, [])
          } catch (U) {
            r = U
          }
          Reflect.construct(e, [], u)
        } else {
          try {
            u.call()
          } catch (U) {
            r = U
          }
          e.call(u.prototype)
        }
      } else {
        try {
          throw Error()
        } catch (U) {
          r = U
        }
        e()
      }
    } catch (U) {
      if (U && r && typeof U.stack == 'string') {
        for (
          var c = U.stack.split(`
`),
            v = r.stack.split(`
`),
            g = c.length - 1,
            b = v.length - 1;
          g >= 1 && b >= 0 && c[g] !== v[b];

        )
          b--
        for (; g >= 1 && b >= 0; g--, b--)
          if (c[g] !== v[b]) {
            if (g !== 1 || b !== 1)
              do
                if ((g--, b--, b < 0 || c[g] !== v[b])) {
                  var D =
                    `
` + c[g].replace(' at new ', ' at ')
                  return (
                    e.displayName &&
                      D.includes('<anonymous>') &&
                      (D = D.replace('<anonymous>', e.displayName)),
                    typeof e == 'function' && li.set(e, D),
                    D
                  )
                }
              while (g >= 1 && b >= 0)
            break
          }
      }
    } finally {
      ;(ii = !1), (Go.current = l), wd(), (Error.prepareStackTrace = a)
    }
    var w = e ? e.displayName || e.name : '',
      A = w ? kr(w) : ''
    return typeof e == 'function' && li.set(e, A), A
  }
  function Vs(e, t, n) {
    return qo(e, !0)
  }
  function Qo(e, t, n) {
    return qo(e, !1)
  }
  function Dd(e) {
    var t = e.prototype
    return !!(t && t.isReactComponent)
  }
  function oi(e, t, n) {
    if (e == null) return ''
    if (typeof e == 'function') return qo(e, Dd(e))
    if (typeof e == 'string') return kr(e)
    switch (e) {
      case Ie:
        return kr('Suspense')
      case Wt:
        return kr('SuspenseList')
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case xe:
          return Qo(e.render)
        case Ct:
          return oi(e.type, t, n)
        case Xe: {
          var r = e,
            a = r._payload,
            l = r._init
          try {
            return oi(l(a), t, n)
          } catch {}
        }
      }
    return ''
  }
  function Is(e) {
    switch ((e._debugOwner && e._debugOwner.type, e._debugSource, e.tag)) {
      case j:
        return kr(e.type)
      case st:
        return kr('Lazy')
      case Z:
        return kr('Suspense')
      case Te:
        return kr('SuspenseList')
      case x:
      case E:
      case ne:
        return Qo(e.type)
      case ve:
        return Qo(e.type.render)
      case T:
        return Vs(e.type)
      default:
        return ''
    }
  }
  function Ko(e) {
    try {
      var t = '',
        n = e
      do (t += Is(n)), (n = n.return)
      while (n)
      return t
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      )
    }
  }
  function _l(e, t, n) {
    var r = e.displayName
    if (r) return r
    var a = t.displayName || t.name || ''
    return a !== '' ? n + '(' + a + ')' : n
  }
  function Ys(e) {
    return e.displayName || 'Context'
  }
  function mt(e) {
    if (e == null) return null
    if (
      (typeof e.tag == 'number' &&
        f(
          'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
        ),
      typeof e == 'function')
    )
      return e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
      case G:
        return 'Fragment'
      case C:
        return 'Portal'
      case we:
        return 'Profiler'
      case ae:
        return 'StrictMode'
      case Ie:
        return 'Suspense'
      case Wt:
        return 'SuspenseList'
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case dt:
          var t = e
          return Ys(t) + '.Consumer'
        case Ke:
          var n = e
          return Ys(n._context) + '.Provider'
        case xe:
          return _l(e, e.render, 'ForwardRef')
        case Ct:
          var r = e.displayName || null
          return r !== null ? r : mt(e.type) || 'Memo'
        case Xe: {
          var a = e,
            l = a._payload,
            u = a._init
          try {
            return mt(u(l))
          } catch {
            return null
          }
        }
      }
    return null
  }
  function Xo(e, t, n) {
    var r = t.displayName || t.name || ''
    return e.displayName || (r !== '' ? n + '(' + r + ')' : n)
  }
  function Jo(e) {
    return e.displayName || 'Context'
  }
  function Be(e) {
    var t = e.tag,
      n = e.type
    switch (t) {
      case ht:
        return 'Cache'
      case Y:
        var r = n
        return Jo(r) + '.Consumer'
      case X:
        var a = n
        return Jo(a._context) + '.Provider'
      case Ce:
        return 'DehydratedFragment'
      case ve:
        return Xo(n, n.render, 'ForwardRef')
      case O:
        return 'Fragment'
      case j:
        return n
      case B:
        return 'Portal'
      case M:
        return 'Root'
      case z:
        return 'Text'
      case st:
        return mt(n)
      case de:
        return n === ae ? 'StrictMode' : 'Mode'
      case ge:
        return 'Offscreen'
      case ye:
        return 'Profiler'
      case at:
        return 'Scope'
      case Z:
        return 'Suspense'
      case Te:
        return 'SuspenseList'
      case $e:
        return 'TracingMarker'
      case T:
      case x:
      case ee:
      case E:
      case Ee:
      case ne:
        if (typeof n == 'function') return n.displayName || n.name || null
        if (typeof n == 'string') return n
        break
    }
    return null
  }
  var Ws = s.ReactDebugCurrentFrame,
    Vn = null,
    Vi = !1
  function ui() {
    {
      if (Vn === null) return null
      var e = Vn._debugOwner
      if (e !== null && typeof e < 'u') return Be(e)
    }
    return null
  }
  function Gs() {
    return Vn === null ? '' : Ko(Vn)
  }
  function Rn() {
    ;(Ws.getCurrentStack = null), (Vn = null), (Vi = !1)
  }
  function Vt(e) {
    ;(Ws.getCurrentStack = e === null ? null : Gs), (Vn = e), (Vi = !1)
  }
  function qs() {
    return Vn
  }
  function xr(e) {
    Vi = e
  }
  function ur(e) {
    return '' + e
  }
  function la(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e
      case 'object':
        return be(e), e
      default:
        return ''
    }
  }
  var _d = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0,
  }
  function Ol(e, t) {
    _d[t.type] ||
      t.onChange ||
      t.onInput ||
      t.readOnly ||
      t.disabled ||
      t.value == null ||
      f(
        'You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.'
      ),
      t.onChange ||
        t.readOnly ||
        t.disabled ||
        t.checked == null ||
        f(
          'You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.'
        )
  }
  function Ii(e) {
    var t = e.type,
      n = e.nodeName
    return (
      n && n.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
    )
  }
  function Qs(e) {
    return e._valueTracker
  }
  function si(e) {
    e._valueTracker = null
  }
  function Ks(e) {
    var t = ''
    return e && (Ii(e) ? (t = e.checked ? 'true' : 'false') : (t = e.value)), t
  }
  function Od(e) {
    var t = Ii(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
    be(e[t])
    var r = '' + e[t]
    if (
      !(
        e.hasOwnProperty(t) ||
        typeof n > 'u' ||
        typeof n.get != 'function' ||
        typeof n.set != 'function'
      )
    ) {
      var a = n.get,
        l = n.set
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return a.call(this)
        },
        set: function (c) {
          be(c), (r = '' + c), l.call(this, c)
        },
      }),
        Object.defineProperty(e, t, { enumerable: n.enumerable })
      var u = {
        getValue: function () {
          return r
        },
        setValue: function (c) {
          be(c), (r = '' + c)
        },
        stopTracking: function () {
          si(e), delete e[t]
        },
      }
      return u
    }
  }
  function _a(e) {
    Qs(e) || (e._valueTracker = Od(e))
  }
  function Ml(e) {
    if (!e) return !1
    var t = Qs(e)
    if (!t) return !0
    var n = t.getValue(),
      r = Ks(e)
    return r !== n ? (t.setValue(r), !0) : !1
  }
  function ci(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  var Ll = !1,
    Xs = !1,
    Js = !1,
    Zs = !1
  function ec(e) {
    var t = e.type === 'checkbox' || e.type === 'radio'
    return t ? e.checked != null : e.value != null
  }
  function p(e, t) {
    var n = e,
      r = t.checked,
      a = Je({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r != null ? r : n._wrapperState.initialChecked,
      })
    return a
  }
  function S(e, t) {
    Ol('input', t),
      t.checked !== void 0 &&
        t.defaultChecked !== void 0 &&
        !Xs &&
        (f(
          '%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          ui() || 'A component',
          t.type
        ),
        (Xs = !0)),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !Ll &&
        (f(
          '%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          ui() || 'A component',
          t.type
        ),
        (Ll = !0))
    var n = e,
      r = t.defaultValue == null ? '' : t.defaultValue
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: la(t.value != null ? t.value : r),
      controlled: ec(t),
    }
  }
  function F(e, t) {
    var n = e,
      r = t.checked
    r != null && ri(n, 'checked', r, !1)
  }
  function H(e, t) {
    var n = e
    {
      var r = ec(t)
      !n._wrapperState.controlled &&
        r &&
        !Zs &&
        (f(
          'A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
        ),
        (Zs = !0)),
        n._wrapperState.controlled &&
          !r &&
          !Js &&
          (f(
            'A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
          ),
          (Js = !0))
    }
    F(e, t)
    var a = la(t.value),
      l = t.type
    if (a != null)
      l === 'number'
        ? ((a === 0 && n.value === '') || n.value != a) && (n.value = ur(a))
        : n.value !== ur(a) && (n.value = ur(a))
    else if (l === 'submit' || l === 'reset') {
      n.removeAttribute('value')
      return
    }
    t.hasOwnProperty('value')
      ? ke(n, t.type, a)
      : t.hasOwnProperty('defaultValue') && ke(n, t.type, la(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (n.defaultChecked = !!t.defaultChecked)
  }
  function J(e, t, n) {
    var r = e
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var a = t.type,
        l = a === 'submit' || a === 'reset'
      if (l && (t.value === void 0 || t.value === null)) return
      var u = ur(r._wrapperState.initialValue)
      n || (u !== r.value && (r.value = u)), (r.defaultValue = u)
    }
    var c = r.name
    c !== '' && (r.name = ''),
      (r.defaultChecked = !r.defaultChecked),
      (r.defaultChecked = !!r._wrapperState.initialChecked),
      c !== '' && (r.name = c)
  }
  function Oe(e, t) {
    var n = e
    H(n, t), pe(n, t)
  }
  function pe(e, t) {
    var n = t.name
    if (t.type === 'radio' && n != null) {
      for (var r = e; r.parentNode; ) r = r.parentNode
      Jn(n, 'name')
      for (
        var a = r.querySelectorAll(
            'input[name=' + JSON.stringify('' + n) + '][type="radio"]'
          ),
          l = 0;
        l < a.length;
        l++
      ) {
        var u = a[l]
        if (!(u === e || u.form !== e.form)) {
          var c = $c(u)
          if (!c)
            throw new Error(
              'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.'
            )
          Ml(u), H(u, c)
        }
      }
    }
  }
  function ke(e, t, n) {
    ;(t !== 'number' || ci(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = ur(e._wrapperState.initialValue))
        : e.defaultValue !== ur(n) && (e.defaultValue = ur(n)))
  }
  var et = !1,
    Nt = !1,
    Dt = !1
  function _t(e, t) {
    t.value == null &&
      (typeof t.children == 'object' && t.children !== null
        ? i.Children.forEach(t.children, function (n) {
            n != null &&
              (typeof n == 'string' ||
                typeof n == 'number' ||
                Nt ||
                ((Nt = !0),
                f(
                  'Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.'
                )))
          })
        : t.dangerouslySetInnerHTML != null &&
          (Dt ||
            ((Dt = !0),
            f(
              'Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.'
            )))),
      t.selected != null &&
        !et &&
        (f(
          'Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.'
        ),
        (et = !0))
  }
  function Ut(e, t) {
    t.value != null && e.setAttribute('value', ur(la(t.value)))
  }
  var Gt = Array.isArray
  function vt(e) {
    return Gt(e)
  }
  var fi
  fi = !1
  function kl() {
    var e = ui()
    return e
      ? `

Check the render method of \`` +
          e +
          '`.'
      : ''
  }
  var Zo = ['value', 'defaultValue']
  function Md(e) {
    {
      Ol('select', e)
      for (var t = 0; t < Zo.length; t++) {
        var n = Zo[t]
        if (e[n] != null) {
          var r = vt(e[n])
          e.multiple && !r
            ? f(
                'The `%s` prop supplied to <select> must be an array if `multiple` is true.%s',
                n,
                kl()
              )
            : !e.multiple &&
              r &&
              f(
                'The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s',
                n,
                kl()
              )
        }
      }
    }
  }
  function Oa(e, t, n, r) {
    var a = e.options
    if (t) {
      for (var l = n, u = {}, c = 0; c < l.length; c++) u['$' + l[c]] = !0
      for (var v = 0; v < a.length; v++) {
        var g = u.hasOwnProperty('$' + a[v].value)
        a[v].selected !== g && (a[v].selected = g),
          g && r && (a[v].defaultSelected = !0)
      }
    } else {
      for (var b = ur(la(n)), D = null, w = 0; w < a.length; w++) {
        if (a[w].value === b) {
          ;(a[w].selected = !0), r && (a[w].defaultSelected = !0)
          return
        }
        D === null && !a[w].disabled && (D = a[w])
      }
      D !== null && (D.selected = !0)
    }
  }
  function eu(e, t) {
    return Je({}, t, { value: void 0 })
  }
  function tu(e, t) {
    var n = e
    Md(t),
      (n._wrapperState = { wasMultiple: !!t.multiple }),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !fi &&
        (f(
          'Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components'
        ),
        (fi = !0))
  }
  function Ld(e, t) {
    var n = e
    n.multiple = !!t.multiple
    var r = t.value
    r != null
      ? Oa(n, !!t.multiple, r, !1)
      : t.defaultValue != null && Oa(n, !!t.multiple, t.defaultValue, !0)
  }
  function m1(e, t) {
    var n = e,
      r = n._wrapperState.wasMultiple
    n._wrapperState.wasMultiple = !!t.multiple
    var a = t.value
    a != null
      ? Oa(n, !!t.multiple, a, !1)
      : r !== !!t.multiple &&
        (t.defaultValue != null
          ? Oa(n, !!t.multiple, t.defaultValue, !0)
          : Oa(n, !!t.multiple, t.multiple ? [] : '', !1))
  }
  function v1(e, t) {
    var n = e,
      r = t.value
    r != null && Oa(n, !!t.multiple, r, !1)
  }
  var _y = !1
  function kd(e, t) {
    var n = e
    if (t.dangerouslySetInnerHTML != null)
      throw new Error(
        '`dangerouslySetInnerHTML` does not make sense on <textarea>.'
      )
    var r = Je({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: ur(n._wrapperState.initialValue),
    })
    return r
  }
  function Oy(e, t) {
    var n = e
    Ol('textarea', t),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !_y &&
        (f(
          '%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          ui() || 'A component'
        ),
        (_y = !0))
    var r = t.value
    if (r == null) {
      var a = t.children,
        l = t.defaultValue
      if (a != null) {
        f(
          'Use the `defaultValue` or `value` props instead of setting children on <textarea>.'
        )
        {
          if (l != null)
            throw new Error(
              'If you supply `defaultValue` on a <textarea>, do not pass children.'
            )
          if (vt(a)) {
            if (a.length > 1)
              throw new Error('<textarea> can only have at most one child.')
            a = a[0]
          }
          l = a
        }
      }
      l == null && (l = ''), (r = l)
    }
    n._wrapperState = { initialValue: la(r) }
  }
  function My(e, t) {
    var n = e,
      r = la(t.value),
      a = la(t.defaultValue)
    if (r != null) {
      var l = ur(r)
      l !== n.value && (n.value = l),
        t.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)
    }
    a != null && (n.defaultValue = ur(a))
  }
  function Ly(e, t) {
    var n = e,
      r = n.textContent
    r === n._wrapperState.initialValue &&
      r !== '' &&
      r !== null &&
      (n.value = r)
  }
  function p1(e, t) {
    My(e, t)
  }
  var Ma = 'http://www.w3.org/1999/xhtml',
    h1 = 'http://www.w3.org/1998/Math/MathML',
    Ad = 'http://www.w3.org/2000/svg'
  function Ud(e) {
    switch (e) {
      case 'svg':
        return Ad
      case 'math':
        return h1
      default:
        return Ma
    }
  }
  function Fd(e, t) {
    return e == null || e === Ma
      ? Ud(t)
      : e === Ad && t === 'foreignObject'
      ? Ma
      : e
  }
  var y1 = function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, a)
            })
          }
        : e
    },
    tc,
    ky = y1(function (e, t) {
      if (e.namespaceURI === Ad && !('innerHTML' in e)) {
        ;(tc = tc || document.createElement('div')),
          (tc.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>')
        for (var n = tc.firstChild; e.firstChild; ) e.removeChild(e.firstChild)
        for (; n.firstChild; ) e.appendChild(n.firstChild)
        return
      }
      e.innerHTML = t
    }),
    sr = 1,
    La = 3,
    an = 8,
    ka = 9,
    jd = 11,
    nc = function (e, t) {
      if (t) {
        var n = e.firstChild
        if (n && n === e.lastChild && n.nodeType === La) {
          n.nodeValue = t
          return
        }
      }
      e.textContent = t
    },
    g1 = {
      animation: [
        'animationDelay',
        'animationDirection',
        'animationDuration',
        'animationFillMode',
        'animationIterationCount',
        'animationName',
        'animationPlayState',
        'animationTimingFunction',
      ],
      background: [
        'backgroundAttachment',
        'backgroundClip',
        'backgroundColor',
        'backgroundImage',
        'backgroundOrigin',
        'backgroundPositionX',
        'backgroundPositionY',
        'backgroundRepeat',
        'backgroundSize',
      ],
      backgroundPosition: ['backgroundPositionX', 'backgroundPositionY'],
      border: [
        'borderBottomColor',
        'borderBottomStyle',
        'borderBottomWidth',
        'borderImageOutset',
        'borderImageRepeat',
        'borderImageSlice',
        'borderImageSource',
        'borderImageWidth',
        'borderLeftColor',
        'borderLeftStyle',
        'borderLeftWidth',
        'borderRightColor',
        'borderRightStyle',
        'borderRightWidth',
        'borderTopColor',
        'borderTopStyle',
        'borderTopWidth',
      ],
      borderBlockEnd: [
        'borderBlockEndColor',
        'borderBlockEndStyle',
        'borderBlockEndWidth',
      ],
      borderBlockStart: [
        'borderBlockStartColor',
        'borderBlockStartStyle',
        'borderBlockStartWidth',
      ],
      borderBottom: [
        'borderBottomColor',
        'borderBottomStyle',
        'borderBottomWidth',
      ],
      borderColor: [
        'borderBottomColor',
        'borderLeftColor',
        'borderRightColor',
        'borderTopColor',
      ],
      borderImage: [
        'borderImageOutset',
        'borderImageRepeat',
        'borderImageSlice',
        'borderImageSource',
        'borderImageWidth',
      ],
      borderInlineEnd: [
        'borderInlineEndColor',
        'borderInlineEndStyle',
        'borderInlineEndWidth',
      ],
      borderInlineStart: [
        'borderInlineStartColor',
        'borderInlineStartStyle',
        'borderInlineStartWidth',
      ],
      borderLeft: ['borderLeftColor', 'borderLeftStyle', 'borderLeftWidth'],
      borderRadius: [
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
        'borderTopLeftRadius',
        'borderTopRightRadius',
      ],
      borderRight: ['borderRightColor', 'borderRightStyle', 'borderRightWidth'],
      borderStyle: [
        'borderBottomStyle',
        'borderLeftStyle',
        'borderRightStyle',
        'borderTopStyle',
      ],
      borderTop: ['borderTopColor', 'borderTopStyle', 'borderTopWidth'],
      borderWidth: [
        'borderBottomWidth',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
      ],
      columnRule: ['columnRuleColor', 'columnRuleStyle', 'columnRuleWidth'],
      columns: ['columnCount', 'columnWidth'],
      flex: ['flexBasis', 'flexGrow', 'flexShrink'],
      flexFlow: ['flexDirection', 'flexWrap'],
      font: [
        'fontFamily',
        'fontFeatureSettings',
        'fontKerning',
        'fontLanguageOverride',
        'fontSize',
        'fontSizeAdjust',
        'fontStretch',
        'fontStyle',
        'fontVariant',
        'fontVariantAlternates',
        'fontVariantCaps',
        'fontVariantEastAsian',
        'fontVariantLigatures',
        'fontVariantNumeric',
        'fontVariantPosition',
        'fontWeight',
        'lineHeight',
      ],
      fontVariant: [
        'fontVariantAlternates',
        'fontVariantCaps',
        'fontVariantEastAsian',
        'fontVariantLigatures',
        'fontVariantNumeric',
        'fontVariantPosition',
      ],
      gap: ['columnGap', 'rowGap'],
      grid: [
        'gridAutoColumns',
        'gridAutoFlow',
        'gridAutoRows',
        'gridTemplateAreas',
        'gridTemplateColumns',
        'gridTemplateRows',
      ],
      gridArea: [
        'gridColumnEnd',
        'gridColumnStart',
        'gridRowEnd',
        'gridRowStart',
      ],
      gridColumn: ['gridColumnEnd', 'gridColumnStart'],
      gridColumnGap: ['columnGap'],
      gridGap: ['columnGap', 'rowGap'],
      gridRow: ['gridRowEnd', 'gridRowStart'],
      gridRowGap: ['rowGap'],
      gridTemplate: [
        'gridTemplateAreas',
        'gridTemplateColumns',
        'gridTemplateRows',
      ],
      listStyle: ['listStyleImage', 'listStylePosition', 'listStyleType'],
      margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
      marker: ['markerEnd', 'markerMid', 'markerStart'],
      mask: [
        'maskClip',
        'maskComposite',
        'maskImage',
        'maskMode',
        'maskOrigin',
        'maskPositionX',
        'maskPositionY',
        'maskRepeat',
        'maskSize',
      ],
      maskPosition: ['maskPositionX', 'maskPositionY'],
      outline: ['outlineColor', 'outlineStyle', 'outlineWidth'],
      overflow: ['overflowX', 'overflowY'],
      padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
      placeContent: ['alignContent', 'justifyContent'],
      placeItems: ['alignItems', 'justifyItems'],
      placeSelf: ['alignSelf', 'justifySelf'],
      textDecoration: [
        'textDecorationColor',
        'textDecorationLine',
        'textDecorationStyle',
      ],
      textEmphasis: ['textEmphasisColor', 'textEmphasisStyle'],
      transition: [
        'transitionDelay',
        'transitionDuration',
        'transitionProperty',
        'transitionTimingFunction',
      ],
      wordWrap: ['overflowWrap'],
    },
    nu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    }
  function b1(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1)
  }
  var N1 = ['Webkit', 'ms', 'Moz', 'O']
  Object.keys(nu).forEach(function (e) {
    N1.forEach(function (t) {
      nu[b1(t, e)] = nu[e]
    })
  })
  function zd(e, t, n) {
    var r = t == null || typeof t == 'boolean' || t === ''
    return r
      ? ''
      : !n &&
        typeof t == 'number' &&
        t !== 0 &&
        !(nu.hasOwnProperty(e) && nu[e])
      ? t + 'px'
      : (Q(t, e), ('' + t).trim())
  }
  var x1 = /([A-Z])/g,
    S1 = /^ms-/
  function E1(e) {
    return e.replace(x1, '-$1').toLowerCase().replace(S1, '-ms-')
  }
  var Ay = function () {}
  {
    var C1 = /^(?:webkit|moz|o)[A-Z]/,
      R1 = /^-ms-/,
      T1 = /-(.)/g,
      Uy = /;\s*$/,
      Al = {},
      Hd = {},
      Fy = !1,
      jy = !1,
      w1 = function (e) {
        return e.replace(T1, function (t, n) {
          return n.toUpperCase()
        })
      },
      D1 = function (e) {
        ;(Al.hasOwnProperty(e) && Al[e]) ||
          ((Al[e] = !0),
          f(
            'Unsupported style property %s. Did you mean %s?',
            e,
            w1(e.replace(R1, 'ms-'))
          ))
      },
      _1 = function (e) {
        ;(Al.hasOwnProperty(e) && Al[e]) ||
          ((Al[e] = !0),
          f(
            'Unsupported vendor-prefixed style property %s. Did you mean %s?',
            e,
            e.charAt(0).toUpperCase() + e.slice(1)
          ))
      },
      O1 = function (e, t) {
        ;(Hd.hasOwnProperty(t) && Hd[t]) ||
          ((Hd[t] = !0),
          f(
            `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
            e,
            t.replace(Uy, '')
          ))
      },
      M1 = function (e, t) {
        Fy ||
          ((Fy = !0),
          f('`NaN` is an invalid value for the `%s` css style property.', e))
      },
      L1 = function (e, t) {
        jy ||
          ((jy = !0),
          f(
            '`Infinity` is an invalid value for the `%s` css style property.',
            e
          ))
      }
    Ay = function (e, t) {
      e.indexOf('-') > -1 ? D1(e) : C1.test(e) ? _1(e) : Uy.test(t) && O1(e, t),
        typeof t == 'number' && (isNaN(t) ? M1(e, t) : isFinite(t) || L1(e, t))
    }
  }
  var k1 = Ay
  function A1(e) {
    {
      var t = '',
        n = ''
      for (var r in e)
        if (!!e.hasOwnProperty(r)) {
          var a = e[r]
          if (a != null) {
            var l = r.indexOf('--') === 0
            ;(t += n + (l ? r : E1(r)) + ':'), (t += zd(r, a, l)), (n = ';')
          }
        }
      return t || null
    }
  }
  function zy(e, t) {
    var n = e.style
    for (var r in t)
      if (!!t.hasOwnProperty(r)) {
        var a = r.indexOf('--') === 0
        a || k1(r, t[r])
        var l = zd(r, t[r], a)
        r === 'float' && (r = 'cssFloat'), a ? n.setProperty(r, l) : (n[r] = l)
      }
  }
  function U1(e) {
    return e == null || typeof e == 'boolean' || e === ''
  }
  function Hy(e) {
    var t = {}
    for (var n in e)
      for (var r = g1[n] || [n], a = 0; a < r.length; a++) t[r[a]] = n
    return t
  }
  function F1(e, t) {
    {
      if (!t) return
      var n = Hy(e),
        r = Hy(t),
        a = {}
      for (var l in n) {
        var u = n[l],
          c = r[l]
        if (c && u !== c) {
          var v = u + ',' + c
          if (a[v]) continue
          ;(a[v] = !0),
            f(
              "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
              U1(e[u]) ? 'Removing' : 'Updating',
              u,
              c
            )
        }
      }
    }
  }
  var j1 = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
    z1 = Je({ menuitem: !0 }, j1),
    H1 = '__html'
  function $d(e, t) {
    if (!!t) {
      if (z1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw new Error(
          e +
            ' is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.'
        )
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw new Error(
            'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'
          )
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !(H1 in t.dangerouslySetInnerHTML)
        )
          throw new Error(
            '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.'
          )
      }
      if (
        (!t.suppressContentEditableWarning &&
          t.contentEditable &&
          t.children != null &&
          f(
            'A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.'
          ),
        t.style != null && typeof t.style != 'object')
      )
        throw new Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        )
    }
  }
  function Yi(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string'
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var rc = {
      accept: 'accept',
      acceptcharset: 'acceptCharset',
      'accept-charset': 'acceptCharset',
      accesskey: 'accessKey',
      action: 'action',
      allowfullscreen: 'allowFullScreen',
      alt: 'alt',
      as: 'as',
      async: 'async',
      autocapitalize: 'autoCapitalize',
      autocomplete: 'autoComplete',
      autocorrect: 'autoCorrect',
      autofocus: 'autoFocus',
      autoplay: 'autoPlay',
      autosave: 'autoSave',
      capture: 'capture',
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing',
      challenge: 'challenge',
      charset: 'charSet',
      checked: 'checked',
      children: 'children',
      cite: 'cite',
      class: 'className',
      classid: 'classID',
      classname: 'className',
      cols: 'cols',
      colspan: 'colSpan',
      content: 'content',
      contenteditable: 'contentEditable',
      contextmenu: 'contextMenu',
      controls: 'controls',
      controlslist: 'controlsList',
      coords: 'coords',
      crossorigin: 'crossOrigin',
      dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
      data: 'data',
      datetime: 'dateTime',
      default: 'default',
      defaultchecked: 'defaultChecked',
      defaultvalue: 'defaultValue',
      defer: 'defer',
      dir: 'dir',
      disabled: 'disabled',
      disablepictureinpicture: 'disablePictureInPicture',
      disableremoteplayback: 'disableRemotePlayback',
      download: 'download',
      draggable: 'draggable',
      enctype: 'encType',
      enterkeyhint: 'enterKeyHint',
      for: 'htmlFor',
      form: 'form',
      formmethod: 'formMethod',
      formaction: 'formAction',
      formenctype: 'formEncType',
      formnovalidate: 'formNoValidate',
      formtarget: 'formTarget',
      frameborder: 'frameBorder',
      headers: 'headers',
      height: 'height',
      hidden: 'hidden',
      high: 'high',
      href: 'href',
      hreflang: 'hrefLang',
      htmlfor: 'htmlFor',
      httpequiv: 'httpEquiv',
      'http-equiv': 'httpEquiv',
      icon: 'icon',
      id: 'id',
      imagesizes: 'imageSizes',
      imagesrcset: 'imageSrcSet',
      innerhtml: 'innerHTML',
      inputmode: 'inputMode',
      integrity: 'integrity',
      is: 'is',
      itemid: 'itemID',
      itemprop: 'itemProp',
      itemref: 'itemRef',
      itemscope: 'itemScope',
      itemtype: 'itemType',
      keyparams: 'keyParams',
      keytype: 'keyType',
      kind: 'kind',
      label: 'label',
      lang: 'lang',
      list: 'list',
      loop: 'loop',
      low: 'low',
      manifest: 'manifest',
      marginwidth: 'marginWidth',
      marginheight: 'marginHeight',
      max: 'max',
      maxlength: 'maxLength',
      media: 'media',
      mediagroup: 'mediaGroup',
      method: 'method',
      min: 'min',
      minlength: 'minLength',
      multiple: 'multiple',
      muted: 'muted',
      name: 'name',
      nomodule: 'noModule',
      nonce: 'nonce',
      novalidate: 'noValidate',
      open: 'open',
      optimum: 'optimum',
      pattern: 'pattern',
      placeholder: 'placeholder',
      playsinline: 'playsInline',
      poster: 'poster',
      preload: 'preload',
      profile: 'profile',
      radiogroup: 'radioGroup',
      readonly: 'readOnly',
      referrerpolicy: 'referrerPolicy',
      rel: 'rel',
      required: 'required',
      reversed: 'reversed',
      role: 'role',
      rows: 'rows',
      rowspan: 'rowSpan',
      sandbox: 'sandbox',
      scope: 'scope',
      scoped: 'scoped',
      scrolling: 'scrolling',
      seamless: 'seamless',
      selected: 'selected',
      shape: 'shape',
      size: 'size',
      sizes: 'sizes',
      span: 'span',
      spellcheck: 'spellCheck',
      src: 'src',
      srcdoc: 'srcDoc',
      srclang: 'srcLang',
      srcset: 'srcSet',
      start: 'start',
      step: 'step',
      style: 'style',
      summary: 'summary',
      tabindex: 'tabIndex',
      target: 'target',
      title: 'title',
      type: 'type',
      usemap: 'useMap',
      value: 'value',
      width: 'width',
      wmode: 'wmode',
      wrap: 'wrap',
      about: 'about',
      accentheight: 'accentHeight',
      'accent-height': 'accentHeight',
      accumulate: 'accumulate',
      additive: 'additive',
      alignmentbaseline: 'alignmentBaseline',
      'alignment-baseline': 'alignmentBaseline',
      allowreorder: 'allowReorder',
      alphabetic: 'alphabetic',
      amplitude: 'amplitude',
      arabicform: 'arabicForm',
      'arabic-form': 'arabicForm',
      ascent: 'ascent',
      attributename: 'attributeName',
      attributetype: 'attributeType',
      autoreverse: 'autoReverse',
      azimuth: 'azimuth',
      basefrequency: 'baseFrequency',
      baselineshift: 'baselineShift',
      'baseline-shift': 'baselineShift',
      baseprofile: 'baseProfile',
      bbox: 'bbox',
      begin: 'begin',
      bias: 'bias',
      by: 'by',
      calcmode: 'calcMode',
      capheight: 'capHeight',
      'cap-height': 'capHeight',
      clip: 'clip',
      clippath: 'clipPath',
      'clip-path': 'clipPath',
      clippathunits: 'clipPathUnits',
      cliprule: 'clipRule',
      'clip-rule': 'clipRule',
      color: 'color',
      colorinterpolation: 'colorInterpolation',
      'color-interpolation': 'colorInterpolation',
      colorinterpolationfilters: 'colorInterpolationFilters',
      'color-interpolation-filters': 'colorInterpolationFilters',
      colorprofile: 'colorProfile',
      'color-profile': 'colorProfile',
      colorrendering: 'colorRendering',
      'color-rendering': 'colorRendering',
      contentscripttype: 'contentScriptType',
      contentstyletype: 'contentStyleType',
      cursor: 'cursor',
      cx: 'cx',
      cy: 'cy',
      d: 'd',
      datatype: 'datatype',
      decelerate: 'decelerate',
      descent: 'descent',
      diffuseconstant: 'diffuseConstant',
      direction: 'direction',
      display: 'display',
      divisor: 'divisor',
      dominantbaseline: 'dominantBaseline',
      'dominant-baseline': 'dominantBaseline',
      dur: 'dur',
      dx: 'dx',
      dy: 'dy',
      edgemode: 'edgeMode',
      elevation: 'elevation',
      enablebackground: 'enableBackground',
      'enable-background': 'enableBackground',
      end: 'end',
      exponent: 'exponent',
      externalresourcesrequired: 'externalResourcesRequired',
      fill: 'fill',
      fillopacity: 'fillOpacity',
      'fill-opacity': 'fillOpacity',
      fillrule: 'fillRule',
      'fill-rule': 'fillRule',
      filter: 'filter',
      filterres: 'filterRes',
      filterunits: 'filterUnits',
      floodopacity: 'floodOpacity',
      'flood-opacity': 'floodOpacity',
      floodcolor: 'floodColor',
      'flood-color': 'floodColor',
      focusable: 'focusable',
      fontfamily: 'fontFamily',
      'font-family': 'fontFamily',
      fontsize: 'fontSize',
      'font-size': 'fontSize',
      fontsizeadjust: 'fontSizeAdjust',
      'font-size-adjust': 'fontSizeAdjust',
      fontstretch: 'fontStretch',
      'font-stretch': 'fontStretch',
      fontstyle: 'fontStyle',
      'font-style': 'fontStyle',
      fontvariant: 'fontVariant',
      'font-variant': 'fontVariant',
      fontweight: 'fontWeight',
      'font-weight': 'fontWeight',
      format: 'format',
      from: 'from',
      fx: 'fx',
      fy: 'fy',
      g1: 'g1',
      g2: 'g2',
      glyphname: 'glyphName',
      'glyph-name': 'glyphName',
      glyphorientationhorizontal: 'glyphOrientationHorizontal',
      'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
      glyphorientationvertical: 'glyphOrientationVertical',
      'glyph-orientation-vertical': 'glyphOrientationVertical',
      glyphref: 'glyphRef',
      gradienttransform: 'gradientTransform',
      gradientunits: 'gradientUnits',
      hanging: 'hanging',
      horizadvx: 'horizAdvX',
      'horiz-adv-x': 'horizAdvX',
      horizoriginx: 'horizOriginX',
      'horiz-origin-x': 'horizOriginX',
      ideographic: 'ideographic',
      imagerendering: 'imageRendering',
      'image-rendering': 'imageRendering',
      in2: 'in2',
      in: 'in',
      inlist: 'inlist',
      intercept: 'intercept',
      k1: 'k1',
      k2: 'k2',
      k3: 'k3',
      k4: 'k4',
      k: 'k',
      kernelmatrix: 'kernelMatrix',
      kernelunitlength: 'kernelUnitLength',
      kerning: 'kerning',
      keypoints: 'keyPoints',
      keysplines: 'keySplines',
      keytimes: 'keyTimes',
      lengthadjust: 'lengthAdjust',
      letterspacing: 'letterSpacing',
      'letter-spacing': 'letterSpacing',
      lightingcolor: 'lightingColor',
      'lighting-color': 'lightingColor',
      limitingconeangle: 'limitingConeAngle',
      local: 'local',
      markerend: 'markerEnd',
      'marker-end': 'markerEnd',
      markerheight: 'markerHeight',
      markermid: 'markerMid',
      'marker-mid': 'markerMid',
      markerstart: 'markerStart',
      'marker-start': 'markerStart',
      markerunits: 'markerUnits',
      markerwidth: 'markerWidth',
      mask: 'mask',
      maskcontentunits: 'maskContentUnits',
      maskunits: 'maskUnits',
      mathematical: 'mathematical',
      mode: 'mode',
      numoctaves: 'numOctaves',
      offset: 'offset',
      opacity: 'opacity',
      operator: 'operator',
      order: 'order',
      orient: 'orient',
      orientation: 'orientation',
      origin: 'origin',
      overflow: 'overflow',
      overlineposition: 'overlinePosition',
      'overline-position': 'overlinePosition',
      overlinethickness: 'overlineThickness',
      'overline-thickness': 'overlineThickness',
      paintorder: 'paintOrder',
      'paint-order': 'paintOrder',
      panose1: 'panose1',
      'panose-1': 'panose1',
      pathlength: 'pathLength',
      patterncontentunits: 'patternContentUnits',
      patterntransform: 'patternTransform',
      patternunits: 'patternUnits',
      pointerevents: 'pointerEvents',
      'pointer-events': 'pointerEvents',
      points: 'points',
      pointsatx: 'pointsAtX',
      pointsaty: 'pointsAtY',
      pointsatz: 'pointsAtZ',
      prefix: 'prefix',
      preservealpha: 'preserveAlpha',
      preserveaspectratio: 'preserveAspectRatio',
      primitiveunits: 'primitiveUnits',
      property: 'property',
      r: 'r',
      radius: 'radius',
      refx: 'refX',
      refy: 'refY',
      renderingintent: 'renderingIntent',
      'rendering-intent': 'renderingIntent',
      repeatcount: 'repeatCount',
      repeatdur: 'repeatDur',
      requiredextensions: 'requiredExtensions',
      requiredfeatures: 'requiredFeatures',
      resource: 'resource',
      restart: 'restart',
      result: 'result',
      results: 'results',
      rotate: 'rotate',
      rx: 'rx',
      ry: 'ry',
      scale: 'scale',
      security: 'security',
      seed: 'seed',
      shaperendering: 'shapeRendering',
      'shape-rendering': 'shapeRendering',
      slope: 'slope',
      spacing: 'spacing',
      specularconstant: 'specularConstant',
      specularexponent: 'specularExponent',
      speed: 'speed',
      spreadmethod: 'spreadMethod',
      startoffset: 'startOffset',
      stddeviation: 'stdDeviation',
      stemh: 'stemh',
      stemv: 'stemv',
      stitchtiles: 'stitchTiles',
      stopcolor: 'stopColor',
      'stop-color': 'stopColor',
      stopopacity: 'stopOpacity',
      'stop-opacity': 'stopOpacity',
      strikethroughposition: 'strikethroughPosition',
      'strikethrough-position': 'strikethroughPosition',
      strikethroughthickness: 'strikethroughThickness',
      'strikethrough-thickness': 'strikethroughThickness',
      string: 'string',
      stroke: 'stroke',
      strokedasharray: 'strokeDasharray',
      'stroke-dasharray': 'strokeDasharray',
      strokedashoffset: 'strokeDashoffset',
      'stroke-dashoffset': 'strokeDashoffset',
      strokelinecap: 'strokeLinecap',
      'stroke-linecap': 'strokeLinecap',
      strokelinejoin: 'strokeLinejoin',
      'stroke-linejoin': 'strokeLinejoin',
      strokemiterlimit: 'strokeMiterlimit',
      'stroke-miterlimit': 'strokeMiterlimit',
      strokewidth: 'strokeWidth',
      'stroke-width': 'strokeWidth',
      strokeopacity: 'strokeOpacity',
      'stroke-opacity': 'strokeOpacity',
      suppresscontenteditablewarning: 'suppressContentEditableWarning',
      suppresshydrationwarning: 'suppressHydrationWarning',
      surfacescale: 'surfaceScale',
      systemlanguage: 'systemLanguage',
      tablevalues: 'tableValues',
      targetx: 'targetX',
      targety: 'targetY',
      textanchor: 'textAnchor',
      'text-anchor': 'textAnchor',
      textdecoration: 'textDecoration',
      'text-decoration': 'textDecoration',
      textlength: 'textLength',
      textrendering: 'textRendering',
      'text-rendering': 'textRendering',
      to: 'to',
      transform: 'transform',
      typeof: 'typeof',
      u1: 'u1',
      u2: 'u2',
      underlineposition: 'underlinePosition',
      'underline-position': 'underlinePosition',
      underlinethickness: 'underlineThickness',
      'underline-thickness': 'underlineThickness',
      unicode: 'unicode',
      unicodebidi: 'unicodeBidi',
      'unicode-bidi': 'unicodeBidi',
      unicoderange: 'unicodeRange',
      'unicode-range': 'unicodeRange',
      unitsperem: 'unitsPerEm',
      'units-per-em': 'unitsPerEm',
      unselectable: 'unselectable',
      valphabetic: 'vAlphabetic',
      'v-alphabetic': 'vAlphabetic',
      values: 'values',
      vectoreffect: 'vectorEffect',
      'vector-effect': 'vectorEffect',
      version: 'version',
      vertadvy: 'vertAdvY',
      'vert-adv-y': 'vertAdvY',
      vertoriginx: 'vertOriginX',
      'vert-origin-x': 'vertOriginX',
      vertoriginy: 'vertOriginY',
      'vert-origin-y': 'vertOriginY',
      vhanging: 'vHanging',
      'v-hanging': 'vHanging',
      videographic: 'vIdeographic',
      'v-ideographic': 'vIdeographic',
      viewbox: 'viewBox',
      viewtarget: 'viewTarget',
      visibility: 'visibility',
      vmathematical: 'vMathematical',
      'v-mathematical': 'vMathematical',
      vocab: 'vocab',
      widths: 'widths',
      wordspacing: 'wordSpacing',
      'word-spacing': 'wordSpacing',
      writingmode: 'writingMode',
      'writing-mode': 'writingMode',
      x1: 'x1',
      x2: 'x2',
      x: 'x',
      xchannelselector: 'xChannelSelector',
      xheight: 'xHeight',
      'x-height': 'xHeight',
      xlinkactuate: 'xlinkActuate',
      'xlink:actuate': 'xlinkActuate',
      xlinkarcrole: 'xlinkArcrole',
      'xlink:arcrole': 'xlinkArcrole',
      xlinkhref: 'xlinkHref',
      'xlink:href': 'xlinkHref',
      xlinkrole: 'xlinkRole',
      'xlink:role': 'xlinkRole',
      xlinkshow: 'xlinkShow',
      'xlink:show': 'xlinkShow',
      xlinktitle: 'xlinkTitle',
      'xlink:title': 'xlinkTitle',
      xlinktype: 'xlinkType',
      'xlink:type': 'xlinkType',
      xmlbase: 'xmlBase',
      'xml:base': 'xmlBase',
      xmllang: 'xmlLang',
      'xml:lang': 'xmlLang',
      xmlns: 'xmlns',
      'xml:space': 'xmlSpace',
      xmlnsxlink: 'xmlnsXlink',
      'xmlns:xlink': 'xmlnsXlink',
      xmlspace: 'xmlSpace',
      y1: 'y1',
      y2: 'y2',
      y: 'y',
      ychannelselector: 'yChannelSelector',
      z: 'z',
      zoomandpan: 'zoomAndPan',
    },
    $y = {
      'aria-current': 0,
      'aria-description': 0,
      'aria-details': 0,
      'aria-disabled': 0,
      'aria-hidden': 0,
      'aria-invalid': 0,
      'aria-keyshortcuts': 0,
      'aria-label': 0,
      'aria-roledescription': 0,
      'aria-autocomplete': 0,
      'aria-checked': 0,
      'aria-expanded': 0,
      'aria-haspopup': 0,
      'aria-level': 0,
      'aria-modal': 0,
      'aria-multiline': 0,
      'aria-multiselectable': 0,
      'aria-orientation': 0,
      'aria-placeholder': 0,
      'aria-pressed': 0,
      'aria-readonly': 0,
      'aria-required': 0,
      'aria-selected': 0,
      'aria-sort': 0,
      'aria-valuemax': 0,
      'aria-valuemin': 0,
      'aria-valuenow': 0,
      'aria-valuetext': 0,
      'aria-atomic': 0,
      'aria-busy': 0,
      'aria-live': 0,
      'aria-relevant': 0,
      'aria-dropeffect': 0,
      'aria-grabbed': 0,
      'aria-activedescendant': 0,
      'aria-colcount': 0,
      'aria-colindex': 0,
      'aria-colspan': 0,
      'aria-controls': 0,
      'aria-describedby': 0,
      'aria-errormessage': 0,
      'aria-flowto': 0,
      'aria-labelledby': 0,
      'aria-owns': 0,
      'aria-posinset': 0,
      'aria-rowcount': 0,
      'aria-rowindex': 0,
      'aria-rowspan': 0,
      'aria-setsize': 0,
    },
    Ul = {},
    $1 = new RegExp('^(aria)-[' + fe + ']*$'),
    P1 = new RegExp('^(aria)[A-Z][' + fe + ']*$')
  function B1(e, t) {
    {
      if (En.call(Ul, t) && Ul[t]) return !0
      if (P1.test(t)) {
        var n = 'aria-' + t.slice(4).toLowerCase(),
          r = $y.hasOwnProperty(n) ? n : null
        if (r == null)
          return (
            f(
              'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',
              t
            ),
            (Ul[t] = !0),
            !0
          )
        if (t !== r)
          return (
            f('Invalid ARIA attribute `%s`. Did you mean `%s`?', t, r),
            (Ul[t] = !0),
            !0
          )
      }
      if ($1.test(t)) {
        var a = t.toLowerCase(),
          l = $y.hasOwnProperty(a) ? a : null
        if (l == null) return (Ul[t] = !0), !1
        if (t !== l)
          return (
            f('Unknown ARIA attribute `%s`. Did you mean `%s`?', t, l),
            (Ul[t] = !0),
            !0
          )
      }
    }
    return !0
  }
  function V1(e, t) {
    {
      var n = []
      for (var r in t) {
        var a = B1(e, r)
        a || n.push(r)
      }
      var l = n
        .map(function (u) {
          return '`' + u + '`'
        })
        .join(', ')
      n.length === 1
        ? f(
            'Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
            l,
            e
          )
        : n.length > 1 &&
          f(
            'Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
            l,
            e
          )
    }
  }
  function I1(e, t) {
    Yi(e, t) || V1(e, t)
  }
  var Py = !1
  function Y1(e, t) {
    {
      if (e !== 'input' && e !== 'textarea' && e !== 'select') return
      t != null &&
        t.value === null &&
        !Py &&
        ((Py = !0),
        e === 'select' && t.multiple
          ? f(
              '`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.',
              e
            )
          : f(
              '`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.',
              e
            ))
    }
  }
  var By = function () {}
  {
    var er = {},
      Vy = /^on./,
      W1 = /^on[^A-Z]/,
      G1 = new RegExp('^(aria)-[' + fe + ']*$'),
      q1 = new RegExp('^(aria)[A-Z][' + fe + ']*$')
    By = function (e, t, n, r) {
      if (En.call(er, t) && er[t]) return !0
      var a = t.toLowerCase()
      if (a === 'onfocusin' || a === 'onfocusout')
        return (
          f(
            'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.'
          ),
          (er[t] = !0),
          !0
        )
      if (r != null) {
        var l = r.registrationNameDependencies,
          u = r.possibleRegistrationNames
        if (l.hasOwnProperty(t)) return !0
        var c = u.hasOwnProperty(a) ? u[a] : null
        if (c != null)
          return (
            f('Invalid event handler property `%s`. Did you mean `%s`?', t, c),
            (er[t] = !0),
            !0
          )
        if (Vy.test(t))
          return (
            f('Unknown event handler property `%s`. It will be ignored.', t),
            (er[t] = !0),
            !0
          )
      } else if (Vy.test(t))
        return (
          W1.test(t) &&
            f(
              'Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.',
              t
            ),
          (er[t] = !0),
          !0
        )
      if (G1.test(t) || q1.test(t)) return !0
      if (a === 'innerhtml')
        return (
          f(
            'Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.'
          ),
          (er[t] = !0),
          !0
        )
      if (a === 'aria')
        return (
          f(
            'The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.'
          ),
          (er[t] = !0),
          !0
        )
      if (a === 'is' && n !== null && n !== void 0 && typeof n != 'string')
        return (
          f(
            'Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.',
            typeof n
          ),
          (er[t] = !0),
          !0
        )
      if (typeof n == 'number' && isNaN(n))
        return (
          f(
            'Received NaN for the `%s` attribute. If this is expected, cast the value to a string.',
            t
          ),
          (er[t] = !0),
          !0
        )
      var v = Yt(t),
        g = v !== null && v.type === Ve
      if (rc.hasOwnProperty(a)) {
        var b = rc[a]
        if (b !== t)
          return (
            f('Invalid DOM property `%s`. Did you mean `%s`?', t, b),
            (er[t] = !0),
            !0
          )
      } else if (!g && t !== a)
        return (
          f(
            'React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.',
            t,
            a
          ),
          (er[t] = !0),
          !0
        )
      return typeof n == 'boolean' && yt(t, n, v, !1)
        ? (n
            ? f(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                n,
                t,
                t,
                n,
                t
              )
            : f(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                n,
                t,
                t,
                n,
                t,
                t,
                t
              ),
          (er[t] = !0),
          !0)
        : g
        ? !0
        : yt(t, n, v, !1)
        ? ((er[t] = !0), !1)
        : ((n === 'false' || n === 'true') &&
            v !== null &&
            v.type === Re &&
            (f(
              'Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?',
              n,
              t,
              n === 'false'
                ? 'The browser will interpret it as a truthy value.'
                : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              n
            ),
            (er[t] = !0)),
          !0)
    }
  }
  var Q1 = function (e, t, n) {
    {
      var r = []
      for (var a in t) {
        var l = By(e, a, t[a], n)
        l || r.push(a)
      }
      var u = r
        .map(function (c) {
          return '`' + c + '`'
        })
        .join(', ')
      r.length === 1
        ? f(
            'Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
            u,
            e
          )
        : r.length > 1 &&
          f(
            'Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
            u,
            e
          )
    }
  }
  function K1(e, t, n) {
    Yi(e, t) || Q1(e, t, n)
  }
  var Iy = 1,
    Pd = 1 << 1,
    ru = 1 << 2,
    X1 = Iy | Pd | ru,
    au = null
  function J1(e) {
    au !== null &&
      f(
        'Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.'
      ),
      (au = e)
  }
  function Z1() {
    au === null &&
      f(
        'Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.'
      ),
      (au = null)
  }
  function eE(e) {
    return e === au
  }
  function Bd(e) {
    var t = e.target || e.srcElement || window
    return (
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === La ? t.parentNode : t
    )
  }
  var Vd = null,
    Fl = null,
    jl = null
  function Yy(e) {
    var t = bi(e)
    if (!!t) {
      if (typeof Vd != 'function')
        throw new Error(
          'setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.'
        )
      var n = t.stateNode
      if (n) {
        var r = $c(n)
        Vd(t.stateNode, t.type, r)
      }
    }
  }
  function tE(e) {
    Vd = e
  }
  function Wy(e) {
    Fl ? (jl ? jl.push(e) : (jl = [e])) : (Fl = e)
  }
  function nE() {
    return Fl !== null || jl !== null
  }
  function Gy() {
    if (!!Fl) {
      var e = Fl,
        t = jl
      if (((Fl = null), (jl = null), Yy(e), t))
        for (var n = 0; n < t.length; n++) Yy(t[n])
    }
  }
  var qy = function (e, t) {
      return e(t)
    },
    Qy = function () {},
    Id = !1
  function rE() {
    var e = nE()
    e && (Qy(), Gy())
  }
  function Ky(e, t, n) {
    if (Id) return e(t, n)
    Id = !0
    try {
      return qy(e, t, n)
    } finally {
      ;(Id = !1), rE()
    }
  }
  function aE(e, t, n) {
    ;(qy = e), (Qy = n)
  }
  function iE(e) {
    return e === 'button' || e === 'input' || e === 'select' || e === 'textarea'
  }
  function lE(e, t, n) {
    switch (e) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        return !!(n.disabled && iE(t))
      default:
        return !1
    }
  }
  function iu(e, t) {
    var n = e.stateNode
    if (n === null) return null
    var r = $c(n)
    if (r === null) return null
    var a = r[t]
    if (lE(t, e.type, r)) return null
    if (a && typeof a != 'function')
      throw new Error(
        'Expected `' +
          t +
          '` listener to be a function, instead got a value of `' +
          typeof a +
          '` type.'
      )
    return a
  }
  var Yd = !1
  if (Bt)
    try {
      var lu = {}
      Object.defineProperty(lu, 'passive', {
        get: function () {
          Yd = !0
        },
      }),
        window.addEventListener('test', lu, lu),
        window.removeEventListener('test', lu, lu)
    } catch {
      Yd = !1
    }
  function Xy(e, t, n, r, a, l, u, c, v) {
    var g = Array.prototype.slice.call(arguments, 3)
    try {
      t.apply(n, g)
    } catch (b) {
      this.onError(b)
    }
  }
  var Jy = Xy
  if (
    typeof window < 'u' &&
    typeof window.dispatchEvent == 'function' &&
    typeof document < 'u' &&
    typeof document.createEvent == 'function'
  ) {
    var Wd = document.createElement('react')
    Jy = function (t, n, r, a, l, u, c, v, g) {
      if (typeof document > 'u' || document === null)
        throw new Error(
          'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.'
        )
      var b = document.createEvent('Event'),
        D = !1,
        w = !0,
        A = window.event,
        U = Object.getOwnPropertyDescriptor(window, 'event')
      function $() {
        Wd.removeEventListener(P, Se, !1),
          typeof window.event < 'u' &&
            window.hasOwnProperty('event') &&
            (window.event = A)
      }
      var se = Array.prototype.slice.call(arguments, 3)
      function Se() {
        ;(D = !0), $(), n.apply(r, se), (w = !1)
      }
      var Ne,
        rt = !1,
        qe = !1
      function L(k) {
        if (
          ((Ne = k.error),
          (rt = !0),
          Ne === null && k.colno === 0 && k.lineno === 0 && (qe = !0),
          k.defaultPrevented && Ne != null && typeof Ne == 'object')
        )
          try {
            Ne._suppressLogging = !0
          } catch {}
      }
      var P = 'react-' + (t || 'invokeguardedcallback')
      if (
        (window.addEventListener('error', L),
        Wd.addEventListener(P, Se, !1),
        b.initEvent(P, !1, !1),
        Wd.dispatchEvent(b),
        U && Object.defineProperty(window, 'event', U),
        D &&
          w &&
          (rt
            ? qe &&
              (Ne = new Error(
                "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information."
              ))
            : (Ne = new Error(
                `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`
              )),
          this.onError(Ne)),
        window.removeEventListener('error', L),
        !D)
      )
        return $(), Xy.apply(this, arguments)
    }
  }
  var oE = Jy,
    zl = !1,
    ac = null,
    ic = !1,
    Gd = null,
    uE = {
      onError: function (e) {
        ;(zl = !0), (ac = e)
      },
    }
  function qd(e, t, n, r, a, l, u, c, v) {
    ;(zl = !1), (ac = null), oE.apply(uE, arguments)
  }
  function sE(e, t, n, r, a, l, u, c, v) {
    if ((qd.apply(this, arguments), zl)) {
      var g = Qd()
      ic || ((ic = !0), (Gd = g))
    }
  }
  function cE() {
    if (ic) {
      var e = Gd
      throw ((ic = !1), (Gd = null), e)
    }
  }
  function fE() {
    return zl
  }
  function Qd() {
    if (zl) {
      var e = ac
      return (zl = !1), (ac = null), e
    } else
      throw new Error(
        'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.'
      )
  }
  function Hl(e) {
    return e._reactInternals
  }
  function dE(e) {
    return e._reactInternals !== void 0
  }
  function mE(e, t) {
    e._reactInternals = t
  }
  var De = 0,
    $l = 1,
    ln = 2,
    it = 4,
    Wi = 16,
    ou = 32,
    Kd = 64,
    pt = 128,
    Aa = 256,
    di = 512,
    Gi = 1024,
    Pr = 2048,
    Ua = 4096,
    qi = 8192,
    lc = 16384,
    vE = Pr | it | Kd | di | Gi | lc,
    pE = 32767,
    uu = 32768,
    tr = 65536,
    Xd = 131072,
    Zy = 1048576,
    Jd = 2097152,
    Qi = 4194304,
    Zd = 8388608,
    Fa = 16777216,
    oc = 33554432,
    em = it | Gi | 0,
    tm = ln | it | Wi | ou | di | Ua | qi,
    su = it | Kd | di | qi,
    Pl = Pr | Wi,
    ja = Qi | Zd | Jd,
    hE = s.ReactCurrentOwner
  function Ki(e) {
    var t = e,
      n = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      var r = t
      do (t = r), (t.flags & (ln | Ua)) !== De && (n = t.return), (r = t.return)
      while (r)
    }
    return t.tag === M ? n : null
  }
  function eg(e) {
    if (e.tag === Z) {
      var t = e.memoizedState
      if (t === null) {
        var n = e.alternate
        n !== null && (t = n.memoizedState)
      }
      if (t !== null) return t.dehydrated
    }
    return null
  }
  function tg(e) {
    return e.tag === M ? e.stateNode.containerInfo : null
  }
  function yE(e) {
    return Ki(e) === e
  }
  function gE(e) {
    {
      var t = hE.current
      if (t !== null && t.tag === T) {
        var n = t,
          r = n.stateNode
        r._warnedAboutRefsInRender ||
          f(
            '%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
            Be(n) || 'A component'
          ),
          (r._warnedAboutRefsInRender = !0)
      }
    }
    var a = Hl(e)
    return a ? Ki(a) === a : !1
  }
  function ng(e) {
    if (Ki(e) !== e)
      throw new Error('Unable to find node on an unmounted component.')
  }
  function rg(e) {
    var t = e.alternate
    if (!t) {
      var n = Ki(e)
      if (n === null)
        throw new Error('Unable to find node on an unmounted component.')
      return n !== e ? null : e
    }
    for (var r = e, a = t; ; ) {
      var l = r.return
      if (l === null) break
      var u = l.alternate
      if (u === null) {
        var c = l.return
        if (c !== null) {
          r = a = c
          continue
        }
        break
      }
      if (l.child === u.child) {
        for (var v = l.child; v; ) {
          if (v === r) return ng(l), e
          if (v === a) return ng(l), t
          v = v.sibling
        }
        throw new Error('Unable to find node on an unmounted component.')
      }
      if (r.return !== a.return) (r = l), (a = u)
      else {
        for (var g = !1, b = l.child; b; ) {
          if (b === r) {
            ;(g = !0), (r = l), (a = u)
            break
          }
          if (b === a) {
            ;(g = !0), (a = l), (r = u)
            break
          }
          b = b.sibling
        }
        if (!g) {
          for (b = u.child; b; ) {
            if (b === r) {
              ;(g = !0), (r = u), (a = l)
              break
            }
            if (b === a) {
              ;(g = !0), (a = u), (r = l)
              break
            }
            b = b.sibling
          }
          if (!g)
            throw new Error(
              'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.'
            )
        }
      }
      if (r.alternate !== a)
        throw new Error(
          "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
        )
    }
    if (r.tag !== M)
      throw new Error('Unable to find node on an unmounted component.')
    return r.stateNode.current === r ? e : t
  }
  function ag(e) {
    var t = rg(e)
    return t !== null ? ig(t) : null
  }
  function ig(e) {
    if (e.tag === j || e.tag === z) return e
    for (var t = e.child; t !== null; ) {
      var n = ig(t)
      if (n !== null) return n
      t = t.sibling
    }
    return null
  }
  function bE(e) {
    var t = rg(e)
    return t !== null ? lg(t) : null
  }
  function lg(e) {
    if (e.tag === j || e.tag === z) return e
    for (var t = e.child; t !== null; ) {
      if (t.tag !== B) {
        var n = lg(t)
        if (n !== null) return n
      }
      t = t.sibling
    }
    return null
  }
  var og = o.unstable_scheduleCallback,
    NE = o.unstable_cancelCallback,
    xE = o.unstable_shouldYield,
    SE = o.unstable_requestPaint,
    Tn = o.unstable_now,
    EE = o.unstable_getCurrentPriorityLevel,
    uc = o.unstable_ImmediatePriority,
    nm = o.unstable_UserBlockingPriority,
    Xi = o.unstable_NormalPriority,
    CE = o.unstable_LowPriority,
    rm = o.unstable_IdlePriority,
    RE = o.unstable_yieldValue,
    TE = o.unstable_setDisableYieldValue,
    Bl = null,
    In = null,
    le = null,
    oa = !1,
    Br = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u'
  function wE(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u') return !1
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (t.isDisabled) return !0
    if (!t.supportsFiber)
      return (
        f(
          'The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools'
        ),
        !0
      )
    try {
      Mr && (e = Je({}, e, { getLaneLabelMap: kE, injectProfilingHooks: LE })),
        (Bl = t.inject(e)),
        (In = t)
    } catch (n) {
      f('React instrumentation encountered an error: %s.', n)
    }
    return !!t.checkDCE
  }
  function DE(e, t) {
    if (In && typeof In.onScheduleFiberRoot == 'function')
      try {
        In.onScheduleFiberRoot(Bl, e, t)
      } catch (n) {
        oa ||
          ((oa = !0), f('React instrumentation encountered an error: %s', n))
      }
  }
  function _E(e, t) {
    if (In && typeof In.onCommitFiberRoot == 'function')
      try {
        var n = (e.current.flags & pt) === pt
        if (yr) {
          var r
          switch (t) {
            case Cr:
              r = uc
              break
            case Ha:
              r = nm
              break
            case $a:
              r = Xi
              break
            case pc:
              r = rm
              break
            default:
              r = Xi
              break
          }
          In.onCommitFiberRoot(Bl, e, r, n)
        }
      } catch (a) {
        oa ||
          ((oa = !0), f('React instrumentation encountered an error: %s', a))
      }
  }
  function OE(e) {
    if (In && typeof In.onPostCommitFiberRoot == 'function')
      try {
        In.onPostCommitFiberRoot(Bl, e)
      } catch (t) {
        oa ||
          ((oa = !0), f('React instrumentation encountered an error: %s', t))
      }
  }
  function ME(e) {
    if (In && typeof In.onCommitFiberUnmount == 'function')
      try {
        In.onCommitFiberUnmount(Bl, e)
      } catch (t) {
        oa ||
          ((oa = !0), f('React instrumentation encountered an error: %s', t))
      }
  }
  function wn(e) {
    if (
      (typeof RE == 'function' && (TE(e), d(e)),
      In && typeof In.setStrictMode == 'function')
    )
      try {
        In.setStrictMode(Bl, e)
      } catch (t) {
        oa ||
          ((oa = !0), f('React instrumentation encountered an error: %s', t))
      }
  }
  function LE(e) {
    le = e
  }
  function kE() {
    {
      for (var e = new Map(), t = 1, n = 0; n < im; n++) {
        var r = ZE(t)
        e.set(t, r), (t *= 2)
      }
      return e
    }
  }
  function AE(e) {
    le !== null &&
      typeof le.markCommitStarted == 'function' &&
      le.markCommitStarted(e)
  }
  function ug() {
    le !== null &&
      typeof le.markCommitStopped == 'function' &&
      le.markCommitStopped()
  }
  function cu(e) {
    le !== null &&
      typeof le.markComponentRenderStarted == 'function' &&
      le.markComponentRenderStarted(e)
  }
  function Vl() {
    le !== null &&
      typeof le.markComponentRenderStopped == 'function' &&
      le.markComponentRenderStopped()
  }
  function UE(e) {
    le !== null &&
      typeof le.markComponentPassiveEffectMountStarted == 'function' &&
      le.markComponentPassiveEffectMountStarted(e)
  }
  function FE() {
    le !== null &&
      typeof le.markComponentPassiveEffectMountStopped == 'function' &&
      le.markComponentPassiveEffectMountStopped()
  }
  function jE(e) {
    le !== null &&
      typeof le.markComponentPassiveEffectUnmountStarted == 'function' &&
      le.markComponentPassiveEffectUnmountStarted(e)
  }
  function zE() {
    le !== null &&
      typeof le.markComponentPassiveEffectUnmountStopped == 'function' &&
      le.markComponentPassiveEffectUnmountStopped()
  }
  function HE(e) {
    le !== null &&
      typeof le.markComponentLayoutEffectMountStarted == 'function' &&
      le.markComponentLayoutEffectMountStarted(e)
  }
  function $E() {
    le !== null &&
      typeof le.markComponentLayoutEffectMountStopped == 'function' &&
      le.markComponentLayoutEffectMountStopped()
  }
  function sg(e) {
    le !== null &&
      typeof le.markComponentLayoutEffectUnmountStarted == 'function' &&
      le.markComponentLayoutEffectUnmountStarted(e)
  }
  function cg() {
    le !== null &&
      typeof le.markComponentLayoutEffectUnmountStopped == 'function' &&
      le.markComponentLayoutEffectUnmountStopped()
  }
  function PE(e, t, n) {
    le !== null &&
      typeof le.markComponentErrored == 'function' &&
      le.markComponentErrored(e, t, n)
  }
  function BE(e, t, n) {
    le !== null &&
      typeof le.markComponentSuspended == 'function' &&
      le.markComponentSuspended(e, t, n)
  }
  function VE(e) {
    le !== null &&
      typeof le.markLayoutEffectsStarted == 'function' &&
      le.markLayoutEffectsStarted(e)
  }
  function IE() {
    le !== null &&
      typeof le.markLayoutEffectsStopped == 'function' &&
      le.markLayoutEffectsStopped()
  }
  function YE(e) {
    le !== null &&
      typeof le.markPassiveEffectsStarted == 'function' &&
      le.markPassiveEffectsStarted(e)
  }
  function WE() {
    le !== null &&
      typeof le.markPassiveEffectsStopped == 'function' &&
      le.markPassiveEffectsStopped()
  }
  function fg(e) {
    le !== null &&
      typeof le.markRenderStarted == 'function' &&
      le.markRenderStarted(e)
  }
  function GE() {
    le !== null &&
      typeof le.markRenderYielded == 'function' &&
      le.markRenderYielded()
  }
  function dg() {
    le !== null &&
      typeof le.markRenderStopped == 'function' &&
      le.markRenderStopped()
  }
  function qE(e) {
    le !== null &&
      typeof le.markRenderScheduled == 'function' &&
      le.markRenderScheduled(e)
  }
  function QE(e, t) {
    le !== null &&
      typeof le.markForceUpdateScheduled == 'function' &&
      le.markForceUpdateScheduled(e, t)
  }
  function am(e, t) {
    le !== null &&
      typeof le.markStateUpdateScheduled == 'function' &&
      le.markStateUpdateScheduled(e, t)
  }
  var _e = 0,
    tt = 1,
    xt = 2,
    on = 8,
    ua = 16,
    mg = Math.clz32 ? Math.clz32 : JE,
    KE = Math.log,
    XE = Math.LN2
  function JE(e) {
    var t = e >>> 0
    return t === 0 ? 32 : (31 - ((KE(t) / XE) | 0)) | 0
  }
  var im = 31,
    W = 0,
    Dn = 0,
    Ae = 1,
    Il = 2,
    za = 4,
    Ji = 8,
    sa = 16,
    fu = 32,
    Yl = 4194240,
    du = 64,
    lm = 128,
    om = 256,
    um = 512,
    sm = 1024,
    cm = 2048,
    fm = 4096,
    dm = 8192,
    mm = 16384,
    vm = 32768,
    pm = 65536,
    hm = 131072,
    ym = 262144,
    gm = 524288,
    bm = 1048576,
    Nm = 2097152,
    sc = 130023424,
    Wl = 4194304,
    xm = 8388608,
    Sm = 16777216,
    Em = 33554432,
    Cm = 67108864,
    vg = Wl,
    mu = 134217728,
    pg = 268435455,
    vu = 268435456,
    Zi = 536870912,
    Sr = 1073741824
  function ZE(e) {
    {
      if (e & Ae) return 'Sync'
      if (e & Il) return 'InputContinuousHydration'
      if (e & za) return 'InputContinuous'
      if (e & Ji) return 'DefaultHydration'
      if (e & sa) return 'Default'
      if (e & fu) return 'TransitionHydration'
      if (e & Yl) return 'Transition'
      if (e & sc) return 'Retry'
      if (e & mu) return 'SelectiveHydration'
      if (e & vu) return 'IdleHydration'
      if (e & Zi) return 'Idle'
      if (e & Sr) return 'Offscreen'
    }
  }
  var Lt = -1,
    cc = du,
    fc = Wl
  function pu(e) {
    switch (el(e)) {
      case Ae:
        return Ae
      case Il:
        return Il
      case za:
        return za
      case Ji:
        return Ji
      case sa:
        return sa
      case fu:
        return fu
      case du:
      case lm:
      case om:
      case um:
      case sm:
      case cm:
      case fm:
      case dm:
      case mm:
      case vm:
      case pm:
      case hm:
      case ym:
      case gm:
      case bm:
      case Nm:
        return e & Yl
      case Wl:
      case xm:
      case Sm:
      case Em:
      case Cm:
        return e & sc
      case mu:
        return mu
      case vu:
        return vu
      case Zi:
        return Zi
      case Sr:
        return Sr
      default:
        return f('Should have found matching lanes. This is a bug in React.'), e
    }
  }
  function dc(e, t) {
    var n = e.pendingLanes
    if (n === W) return W
    var r = W,
      a = e.suspendedLanes,
      l = e.pingedLanes,
      u = n & pg
    if (u !== W) {
      var c = u & ~a
      if (c !== W) r = pu(c)
      else {
        var v = u & l
        v !== W && (r = pu(v))
      }
    } else {
      var g = n & ~a
      g !== W ? (r = pu(g)) : l !== W && (r = pu(l))
    }
    if (r === W) return W
    if (t !== W && t !== r && (t & a) === W) {
      var b = el(r),
        D = el(t)
      if (b >= D || (b === sa && (D & Yl) !== W)) return t
    }
    ;(r & za) !== W && (r |= n & sa)
    var w = e.entangledLanes
    if (w !== W)
      for (var A = e.entanglements, U = r & w; U > 0; ) {
        var $ = tl(U),
          se = 1 << $
        ;(r |= A[$]), (U &= ~se)
      }
    return r
  }
  function eC(e, t) {
    for (var n = e.eventTimes, r = Lt; t > 0; ) {
      var a = tl(t),
        l = 1 << a,
        u = n[a]
      u > r && (r = u), (t &= ~l)
    }
    return r
  }
  function tC(e, t) {
    switch (e) {
      case Ae:
      case Il:
      case za:
        return t + 250
      case Ji:
      case sa:
      case fu:
      case du:
      case lm:
      case om:
      case um:
      case sm:
      case cm:
      case fm:
      case dm:
      case mm:
      case vm:
      case pm:
      case hm:
      case ym:
      case gm:
      case bm:
      case Nm:
        return t + 5e3
      case Wl:
      case xm:
      case Sm:
      case Em:
      case Cm:
        return Lt
      case mu:
      case vu:
      case Zi:
      case Sr:
        return Lt
      default:
        return (
          f('Should have found matching lanes. This is a bug in React.'), Lt
        )
    }
  }
  function nC(e, t) {
    for (
      var n = e.pendingLanes,
        r = e.suspendedLanes,
        a = e.pingedLanes,
        l = e.expirationTimes,
        u = n;
      u > 0;

    ) {
      var c = tl(u),
        v = 1 << c,
        g = l[c]
      g === Lt
        ? ((v & r) === W || (v & a) !== W) && (l[c] = tC(v, t))
        : g <= t && (e.expiredLanes |= v),
        (u &= ~v)
    }
  }
  function rC(e) {
    return pu(e.pendingLanes)
  }
  function Rm(e) {
    var t = e.pendingLanes & ~Sr
    return t !== W ? t : t & Sr ? Sr : W
  }
  function aC(e) {
    return (e & Ae) !== W
  }
  function Tm(e) {
    return (e & pg) !== W
  }
  function hg(e) {
    return (e & sc) === e
  }
  function iC(e) {
    var t = Ae | za | sa
    return (e & t) === W
  }
  function lC(e) {
    return (e & Yl) === e
  }
  function mc(e, t) {
    var n = Il | za | Ji | sa
    return (t & n) !== W
  }
  function oC(e, t) {
    return (t & e.expiredLanes) !== W
  }
  function yg(e) {
    return (e & Yl) !== W
  }
  function gg() {
    var e = cc
    return (cc <<= 1), (cc & Yl) === W && (cc = du), e
  }
  function uC() {
    var e = fc
    return (fc <<= 1), (fc & sc) === W && (fc = Wl), e
  }
  function el(e) {
    return e & -e
  }
  function hu(e) {
    return el(e)
  }
  function tl(e) {
    return 31 - mg(e)
  }
  function wm(e) {
    return tl(e)
  }
  function Er(e, t) {
    return (e & t) !== W
  }
  function Gl(e, t) {
    return (e & t) === t
  }
  function We(e, t) {
    return e | t
  }
  function vc(e, t) {
    return e & ~t
  }
  function bg(e, t) {
    return e & t
  }
  function HA(e) {
    return e
  }
  function sC(e, t) {
    return e !== Dn && e < t ? e : t
  }
  function Dm(e) {
    for (var t = [], n = 0; n < im; n++) t.push(e)
    return t
  }
  function yu(e, t, n) {
    ;(e.pendingLanes |= t),
      t !== Zi && ((e.suspendedLanes = W), (e.pingedLanes = W))
    var r = e.eventTimes,
      a = wm(t)
    r[a] = n
  }
  function cC(e, t) {
    ;(e.suspendedLanes |= t), (e.pingedLanes &= ~t)
    for (var n = e.expirationTimes, r = t; r > 0; ) {
      var a = tl(r),
        l = 1 << a
      ;(n[a] = Lt), (r &= ~l)
    }
  }
  function Ng(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t
  }
  function fC(e, t) {
    var n = e.pendingLanes & ~t
    ;(e.pendingLanes = t),
      (e.suspendedLanes = W),
      (e.pingedLanes = W),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t)
    for (
      var r = e.entanglements, a = e.eventTimes, l = e.expirationTimes, u = n;
      u > 0;

    ) {
      var c = tl(u),
        v = 1 << c
      ;(r[c] = W), (a[c] = Lt), (l[c] = Lt), (u &= ~v)
    }
  }
  function _m(e, t) {
    for (var n = (e.entangledLanes |= t), r = e.entanglements, a = n; a; ) {
      var l = tl(a),
        u = 1 << l
      ;(u & t) | (r[l] & t) && (r[l] |= t), (a &= ~u)
    }
  }
  function dC(e, t) {
    var n = el(t),
      r
    switch (n) {
      case za:
        r = Il
        break
      case sa:
        r = Ji
        break
      case du:
      case lm:
      case om:
      case um:
      case sm:
      case cm:
      case fm:
      case dm:
      case mm:
      case vm:
      case pm:
      case hm:
      case ym:
      case gm:
      case bm:
      case Nm:
      case Wl:
      case xm:
      case Sm:
      case Em:
      case Cm:
        r = fu
        break
      case Zi:
        r = vu
        break
      default:
        r = Dn
        break
    }
    return (r & (e.suspendedLanes | t)) !== Dn ? Dn : r
  }
  function xg(e, t, n) {
    if (!!Br)
      for (var r = e.pendingUpdatersLaneMap; n > 0; ) {
        var a = wm(n),
          l = 1 << a,
          u = r[a]
        u.add(t), (n &= ~l)
      }
  }
  function Sg(e, t) {
    if (!!Br)
      for (var n = e.pendingUpdatersLaneMap, r = e.memoizedUpdaters; t > 0; ) {
        var a = wm(t),
          l = 1 << a,
          u = n[a]
        u.size > 0 &&
          (u.forEach(function (c) {
            var v = c.alternate
            ;(v === null || !r.has(v)) && r.add(c)
          }),
          u.clear()),
          (t &= ~l)
      }
  }
  function Eg(e, t) {
    return null
  }
  var Cr = Ae,
    Ha = za,
    $a = sa,
    pc = Zi,
    gu = Dn
  function Vr() {
    return gu
  }
  function _n(e) {
    gu = e
  }
  function mC(e, t) {
    var n = gu
    try {
      return (gu = e), t()
    } finally {
      gu = n
    }
  }
  function vC(e, t) {
    return e !== 0 && e < t ? e : t
  }
  function pC(e, t) {
    return e === 0 || e > t ? e : t
  }
  function Om(e, t) {
    return e !== 0 && e < t
  }
  function Cg(e) {
    var t = el(e)
    return Om(Cr, t) ? (Om(Ha, t) ? (Tm(t) ? $a : pc) : Ha) : Cr
  }
  function hc(e) {
    var t = e.current.memoizedState
    return t.isDehydrated
  }
  var Rg
  function hC(e) {
    Rg = e
  }
  function yC(e) {
    Rg(e)
  }
  var Mm
  function gC(e) {
    Mm = e
  }
  var Tg
  function bC(e) {
    Tg = e
  }
  var wg
  function NC(e) {
    wg = e
  }
  var Dg
  function xC(e) {
    Dg = e
  }
  var Lm = !1,
    yc = [],
    mi = null,
    vi = null,
    pi = null,
    bu = new Map(),
    Nu = new Map(),
    hi = [],
    SC = [
      'mousedown',
      'mouseup',
      'touchcancel',
      'touchend',
      'touchstart',
      'auxclick',
      'dblclick',
      'pointercancel',
      'pointerdown',
      'pointerup',
      'dragend',
      'dragstart',
      'drop',
      'compositionend',
      'compositionstart',
      'keydown',
      'keypress',
      'keyup',
      'input',
      'textInput',
      'copy',
      'cut',
      'paste',
      'click',
      'change',
      'contextmenu',
      'reset',
      'submit',
    ]
  function EC(e) {
    return SC.indexOf(e) > -1
  }
  function CC(e, t, n, r, a) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: a,
      targetContainers: [r],
    }
  }
  function _g(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        mi = null
        break
      case 'dragenter':
      case 'dragleave':
        vi = null
        break
      case 'mouseover':
      case 'mouseout':
        pi = null
        break
      case 'pointerover':
      case 'pointerout': {
        var n = t.pointerId
        bu.delete(n)
        break
      }
      case 'gotpointercapture':
      case 'lostpointercapture': {
        var r = t.pointerId
        Nu.delete(r)
        break
      }
    }
  }
  function xu(e, t, n, r, a, l) {
    if (e === null || e.nativeEvent !== l) {
      var u = CC(t, n, r, a, l)
      if (t !== null) {
        var c = bi(t)
        c !== null && Mm(c)
      }
      return u
    }
    e.eventSystemFlags |= r
    var v = e.targetContainers
    return a !== null && v.indexOf(a) === -1 && v.push(a), e
  }
  function RC(e, t, n, r, a) {
    switch (t) {
      case 'focusin': {
        var l = a
        return (mi = xu(mi, e, t, n, r, l)), !0
      }
      case 'dragenter': {
        var u = a
        return (vi = xu(vi, e, t, n, r, u)), !0
      }
      case 'mouseover': {
        var c = a
        return (pi = xu(pi, e, t, n, r, c)), !0
      }
      case 'pointerover': {
        var v = a,
          g = v.pointerId
        return bu.set(g, xu(bu.get(g) || null, e, t, n, r, v)), !0
      }
      case 'gotpointercapture': {
        var b = a,
          D = b.pointerId
        return Nu.set(D, xu(Nu.get(D) || null, e, t, n, r, b)), !0
      }
    }
    return !1
  }
  function Og(e) {
    var t = al(e.target)
    if (t !== null) {
      var n = Ki(t)
      if (n !== null) {
        var r = n.tag
        if (r === Z) {
          var a = eg(n)
          if (a !== null) {
            ;(e.blockedOn = a),
              Dg(e.priority, function () {
                Tg(n)
              })
            return
          }
        } else if (r === M) {
          var l = n.stateNode
          if (hc(l)) {
            e.blockedOn = tg(n)
            return
          }
        }
      }
    }
    e.blockedOn = null
  }
  function TC(e) {
    for (
      var t = wg(), n = { blockedOn: null, target: e, priority: t }, r = 0;
      r < hi.length && Om(t, hi[r].priority);
      r++
    );
    hi.splice(r, 0, n), r === 0 && Og(n)
  }
  function gc(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0],
        r = Um(e.domEventName, e.eventSystemFlags, n, e.nativeEvent)
      if (r === null) {
        var a = e.nativeEvent,
          l = new a.constructor(a.type, a)
        J1(l), a.target.dispatchEvent(l), Z1()
      } else {
        var u = bi(r)
        return u !== null && Mm(u), (e.blockedOn = r), !1
      }
      t.shift()
    }
    return !0
  }
  function Mg(e, t, n) {
    gc(e) && n.delete(t)
  }
  function wC() {
    ;(Lm = !1),
      mi !== null && gc(mi) && (mi = null),
      vi !== null && gc(vi) && (vi = null),
      pi !== null && gc(pi) && (pi = null),
      bu.forEach(Mg),
      Nu.forEach(Mg)
  }
  function Su(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Lm ||
        ((Lm = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, wC)))
  }
  function Eu(e) {
    if (yc.length > 0) {
      Su(yc[0], e)
      for (var t = 1; t < yc.length; t++) {
        var n = yc[t]
        n.blockedOn === e && (n.blockedOn = null)
      }
    }
    mi !== null && Su(mi, e), vi !== null && Su(vi, e), pi !== null && Su(pi, e)
    var r = function (c) {
      return Su(c, e)
    }
    bu.forEach(r), Nu.forEach(r)
    for (var a = 0; a < hi.length; a++) {
      var l = hi[a]
      l.blockedOn === e && (l.blockedOn = null)
    }
    for (; hi.length > 0; ) {
      var u = hi[0]
      if (u.blockedOn !== null) break
      Og(u), u.blockedOn === null && hi.shift()
    }
  }
  var ql = s.ReactCurrentBatchConfig,
    km = !0
  function Lg(e) {
    km = !!e
  }
  function DC() {
    return km
  }
  function _C(e, t, n) {
    var r = kg(t),
      a
    switch (r) {
      case Cr:
        a = OC
        break
      case Ha:
        a = MC
        break
      case $a:
      default:
        a = Am
        break
    }
    return a.bind(null, t, n, e)
  }
  function OC(e, t, n, r) {
    var a = Vr(),
      l = ql.transition
    ql.transition = null
    try {
      _n(Cr), Am(e, t, n, r)
    } finally {
      _n(a), (ql.transition = l)
    }
  }
  function MC(e, t, n, r) {
    var a = Vr(),
      l = ql.transition
    ql.transition = null
    try {
      _n(Ha), Am(e, t, n, r)
    } finally {
      _n(a), (ql.transition = l)
    }
  }
  function Am(e, t, n, r) {
    !km || LC(e, t, n, r)
  }
  function LC(e, t, n, r) {
    var a = Um(e, t, n, r)
    if (a === null) {
      Qm(e, t, r, bc, n), _g(e, r)
      return
    }
    if (RC(a, e, t, n, r)) {
      r.stopPropagation()
      return
    }
    if ((_g(e, r), t & ru && EC(e))) {
      for (; a !== null; ) {
        var l = bi(a)
        l !== null && yC(l)
        var u = Um(e, t, n, r)
        if ((u === null && Qm(e, t, r, bc, n), u === a)) break
        a = u
      }
      a !== null && r.stopPropagation()
      return
    }
    Qm(e, t, r, null, n)
  }
  var bc = null
  function Um(e, t, n, r) {
    bc = null
    var a = Bd(r),
      l = al(a)
    if (l !== null) {
      var u = Ki(l)
      if (u === null) l = null
      else {
        var c = u.tag
        if (c === Z) {
          var v = eg(u)
          if (v !== null) return v
          l = null
        } else if (c === M) {
          var g = u.stateNode
          if (hc(g)) return tg(u)
          l = null
        } else u !== l && (l = null)
      }
    }
    return (bc = l), null
  }
  function kg(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return Cr
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return Ha
      case 'message': {
        var t = EE()
        switch (t) {
          case uc:
            return Cr
          case nm:
            return Ha
          case Xi:
          case CE:
            return $a
          case rm:
            return pc
          default:
            return $a
        }
      }
      default:
        return $a
    }
  }
  function kC(e, t, n) {
    return e.addEventListener(t, n, !1), n
  }
  function AC(e, t, n) {
    return e.addEventListener(t, n, !0), n
  }
  function UC(e, t, n, r) {
    return e.addEventListener(t, n, { capture: !0, passive: r }), n
  }
  function FC(e, t, n, r) {
    return e.addEventListener(t, n, { passive: r }), n
  }
  var Cu = null,
    Fm = null,
    Ru = null
  function jC(e) {
    return (Cu = e), (Fm = Ug()), !0
  }
  function zC() {
    ;(Cu = null), (Fm = null), (Ru = null)
  }
  function Ag() {
    if (Ru) return Ru
    var e,
      t = Fm,
      n = t.length,
      r,
      a = Ug(),
      l = a.length
    for (e = 0; e < n && t[e] === a[e]; e++);
    var u = n - e
    for (r = 1; r <= u && t[n - r] === a[l - r]; r++);
    var c = r > 1 ? 1 - r : void 0
    return (Ru = a.slice(e, c)), Ru
  }
  function Ug() {
    return 'value' in Cu ? Cu.value : Cu.textContent
  }
  function Nc(e) {
    var t,
      n = e.keyCode
    return (
      'charCode' in e
        ? ((t = e.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      t >= 32 || t === 13 ? t : 0
    )
  }
  function xc() {
    return !0
  }
  function Fg() {
    return !1
  }
  function Rr(e) {
    function t(n, r, a, l, u) {
      ;(this._reactName = n),
        (this._targetInst = a),
        (this.type = r),
        (this.nativeEvent = l),
        (this.target = u),
        (this.currentTarget = null)
      for (var c in e)
        if (!!e.hasOwnProperty(c)) {
          var v = e[c]
          v ? (this[c] = v(l)) : (this[c] = l[c])
        }
      var g =
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      return (
        g ? (this.isDefaultPrevented = xc) : (this.isDefaultPrevented = Fg),
        (this.isPropagationStopped = Fg),
        this
      )
    }
    return (
      Je(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var n = this.nativeEvent
          !n ||
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = xc))
        },
        stopPropagation: function () {
          var n = this.nativeEvent
          !n ||
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = xc))
        },
        persist: function () {},
        isPersistent: xc,
      }),
      t
    )
  }
  var Ql = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    jm = Rr(Ql),
    Tu = Je({}, Ql, { view: 0, detail: 0 }),
    HC = Rr(Tu),
    zm,
    Hm,
    wu
  function $C(e) {
    e !== wu &&
      (wu && e.type === 'mousemove'
        ? ((zm = e.screenX - wu.screenX), (Hm = e.screenY - wu.screenY))
        : ((zm = 0), (Hm = 0)),
      (wu = e))
  }
  var Sc = Je({}, Tu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Pm,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget
      },
      movementX: function (e) {
        return 'movementX' in e ? e.movementX : ($C(e), zm)
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Hm
      },
    }),
    jg = Rr(Sc),
    PC = Je({}, Sc, { dataTransfer: 0 }),
    BC = Rr(PC),
    VC = Je({}, Tu, { relatedTarget: 0 }),
    $m = Rr(VC),
    IC = Je({}, Ql, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    YC = Rr(IC),
    WC = Je({}, Ql, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData
      },
    }),
    GC = Rr(WC),
    qC = Je({}, Ql, { data: 0 }),
    zg = Rr(qC),
    QC = zg,
    KC = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    XC = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    }
  function JC(e) {
    if (e.key) {
      var t = KC[e.key] || e.key
      if (t !== 'Unidentified') return t
    }
    if (e.type === 'keypress') {
      var n = Nc(e)
      return n === 13 ? 'Enter' : String.fromCharCode(n)
    }
    return e.type === 'keydown' || e.type === 'keyup'
      ? XC[e.keyCode] || 'Unidentified'
      : ''
  }
  var ZC = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  }
  function eR(e) {
    var t = this,
      n = t.nativeEvent
    if (n.getModifierState) return n.getModifierState(e)
    var r = ZC[e]
    return r ? !!n[r] : !1
  }
  function Pm(e) {
    return eR
  }
  var tR = Je({}, Tu, {
      key: JC,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Pm,
      charCode: function (e) {
        return e.type === 'keypress' ? Nc(e) : 0
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Nc(e)
          : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
      },
    }),
    nR = Rr(tR),
    rR = Je({}, Sc, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Hg = Rr(rR),
    aR = Je({}, Tu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Pm,
    }),
    iR = Rr(aR),
    lR = Je({}, Ql, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    oR = Rr(lR),
    uR = Je({}, Sc, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
          ? -e.wheelDeltaX
          : 0
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    sR = Rr(uR),
    cR = [9, 13, 27, 32],
    $g = 229,
    Bm = Bt && 'CompositionEvent' in window,
    Du = null
  Bt && 'documentMode' in document && (Du = document.documentMode)
  var fR = Bt && 'TextEvent' in window && !Du,
    Pg = Bt && (!Bm || (Du && Du > 8 && Du <= 11)),
    Bg = 32,
    Vg = String.fromCharCode(Bg)
  function dR() {
    Mn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
      Mn('onCompositionEnd', [
        'compositionend',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ]),
      Mn('onCompositionStart', [
        'compositionstart',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ]),
      Mn('onCompositionUpdate', [
        'compositionupdate',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ])
  }
  var Ig = !1
  function mR(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey)
  }
  function vR(e) {
    switch (e) {
      case 'compositionstart':
        return 'onCompositionStart'
      case 'compositionend':
        return 'onCompositionEnd'
      case 'compositionupdate':
        return 'onCompositionUpdate'
    }
  }
  function pR(e, t) {
    return e === 'keydown' && t.keyCode === $g
  }
  function Yg(e, t) {
    switch (e) {
      case 'keyup':
        return cR.indexOf(t.keyCode) !== -1
      case 'keydown':
        return t.keyCode !== $g
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function Wg(e) {
    var t = e.detail
    return typeof t == 'object' && 'data' in t ? t.data : null
  }
  function Gg(e) {
    return e.locale === 'ko'
  }
  var Kl = !1
  function hR(e, t, n, r, a) {
    var l, u
    if (
      (Bm
        ? (l = vR(t))
        : Kl
        ? Yg(t, r) && (l = 'onCompositionEnd')
        : pR(t, r) && (l = 'onCompositionStart'),
      !l)
    )
      return null
    Pg &&
      !Gg(r) &&
      (!Kl && l === 'onCompositionStart'
        ? (Kl = jC(a))
        : l === 'onCompositionEnd' && Kl && (u = Ag()))
    var c = wc(n, l)
    if (c.length > 0) {
      var v = new zg(l, t, null, r, a)
      if ((e.push({ event: v, listeners: c }), u)) v.data = u
      else {
        var g = Wg(r)
        g !== null && (v.data = g)
      }
    }
  }
  function yR(e, t) {
    switch (e) {
      case 'compositionend':
        return Wg(t)
      case 'keypress':
        var n = t.which
        return n !== Bg ? null : ((Ig = !0), Vg)
      case 'textInput':
        var r = t.data
        return r === Vg && Ig ? null : r
      default:
        return null
    }
  }
  function gR(e, t) {
    if (Kl) {
      if (e === 'compositionend' || (!Bm && Yg(e, t))) {
        var n = Ag()
        return zC(), (Kl = !1), n
      }
      return null
    }
    switch (e) {
      case 'paste':
        return null
      case 'keypress':
        if (!mR(t)) {
          if (t.char && t.char.length > 1) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case 'compositionend':
        return Pg && !Gg(t) ? null : t.data
      default:
        return null
    }
  }
  function bR(e, t, n, r, a) {
    var l
    if ((fR ? (l = yR(t, r)) : (l = gR(t, r)), !l)) return null
    var u = wc(n, 'onBeforeInput')
    if (u.length > 0) {
      var c = new QC('onBeforeInput', 'beforeinput', null, r, a)
      e.push({ event: c, listeners: u }), (c.data = l)
    }
  }
  function NR(e, t, n, r, a, l, u) {
    hR(e, t, n, r, a), bR(e, t, n, r, a)
  }
  var xR = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  }
  function qg(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!xR[e.type] : t === 'textarea'
  }
  /**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */ function SR(e) {
    if (!Bt) return !1
    var t = 'on' + e,
      n = t in document
    if (!n) {
      var r = document.createElement('div')
      r.setAttribute(t, 'return;'), (n = typeof r[t] == 'function')
    }
    return n
  }
  function ER() {
    Mn('onChange', [
      'change',
      'click',
      'focusin',
      'focusout',
      'input',
      'keydown',
      'keyup',
      'selectionchange',
    ])
  }
  function Qg(e, t, n, r) {
    Wy(r)
    var a = wc(t, 'onChange')
    if (a.length > 0) {
      var l = new jm('onChange', 'change', null, n, r)
      e.push({ event: l, listeners: a })
    }
  }
  var _u = null,
    Ou = null
  function CR(e) {
    var t = e.nodeName && e.nodeName.toLowerCase()
    return t === 'select' || (t === 'input' && e.type === 'file')
  }
  function RR(e) {
    var t = []
    Qg(t, Ou, e, Bd(e)), Ky(TR, t)
  }
  function TR(e) {
    mb(e, 0)
  }
  function Ec(e) {
    var t = no(e)
    if (Ml(t)) return e
  }
  function wR(e, t) {
    if (e === 'change') return t
  }
  var Kg = !1
  Bt &&
    (Kg = SR('input') && (!document.documentMode || document.documentMode > 9))
  function DR(e, t) {
    ;(_u = e), (Ou = t), _u.attachEvent('onpropertychange', Jg)
  }
  function Xg() {
    !_u || (_u.detachEvent('onpropertychange', Jg), (_u = null), (Ou = null))
  }
  function Jg(e) {
    e.propertyName === 'value' && Ec(Ou) && RR(e)
  }
  function _R(e, t, n) {
    e === 'focusin' ? (Xg(), DR(t, n)) : e === 'focusout' && Xg()
  }
  function OR(e, t) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Ec(Ou)
  }
  function MR(e) {
    var t = e.nodeName
    return (
      t &&
      t.toLowerCase() === 'input' &&
      (e.type === 'checkbox' || e.type === 'radio')
    )
  }
  function LR(e, t) {
    if (e === 'click') return Ec(t)
  }
  function kR(e, t) {
    if (e === 'input' || e === 'change') return Ec(t)
  }
  function AR(e) {
    var t = e._wrapperState
    !t || !t.controlled || e.type !== 'number' || ke(e, 'number', e.value)
  }
  function UR(e, t, n, r, a, l, u) {
    var c = n ? no(n) : window,
      v,
      g
    if (
      (CR(c)
        ? (v = wR)
        : qg(c)
        ? Kg
          ? (v = kR)
          : ((v = OR), (g = _R))
        : MR(c) && (v = LR),
      v)
    ) {
      var b = v(t, n)
      if (b) {
        Qg(e, b, r, a)
        return
      }
    }
    g && g(t, c, n), t === 'focusout' && AR(c)
  }
  function FR() {
    sn('onMouseEnter', ['mouseout', 'mouseover']),
      sn('onMouseLeave', ['mouseout', 'mouseover']),
      sn('onPointerEnter', ['pointerout', 'pointerover']),
      sn('onPointerLeave', ['pointerout', 'pointerover'])
  }
  function jR(e, t, n, r, a, l, u) {
    var c = t === 'mouseover' || t === 'pointerover',
      v = t === 'mouseout' || t === 'pointerout'
    if (c && !eE(r)) {
      var g = r.relatedTarget || r.fromElement
      if (g && (al(g) || Yu(g))) return
    }
    if (!(!v && !c)) {
      var b
      if (a.window === a) b = a
      else {
        var D = a.ownerDocument
        D ? (b = D.defaultView || D.parentWindow) : (b = window)
      }
      var w, A
      if (v) {
        var U = r.relatedTarget || r.toElement
        if (((w = n), (A = U ? al(U) : null), A !== null)) {
          var $ = Ki(A)
          ;(A !== $ || (A.tag !== j && A.tag !== z)) && (A = null)
        }
      } else (w = null), (A = n)
      if (w !== A) {
        var se = jg,
          Se = 'onMouseLeave',
          Ne = 'onMouseEnter',
          rt = 'mouse'
        ;(t === 'pointerout' || t === 'pointerover') &&
          ((se = Hg),
          (Se = 'onPointerLeave'),
          (Ne = 'onPointerEnter'),
          (rt = 'pointer'))
        var qe = w == null ? b : no(w),
          L = A == null ? b : no(A),
          P = new se(Se, rt + 'leave', w, r, a)
        ;(P.target = qe), (P.relatedTarget = L)
        var k = null,
          q = al(a)
        if (q === n) {
          var ce = new se(Ne, rt + 'enter', A, r, a)
          ;(ce.target = L), (ce.relatedTarget = qe), (k = ce)
        }
        oT(e, P, k, w, A)
      }
    }
  }
  function zR(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var Tr = typeof Object.is == 'function' ? Object.is : zR
  function Mu(e, t) {
    if (Tr(e, t)) return !0
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1
    var n = Object.keys(e),
      r = Object.keys(t)
    if (n.length !== r.length) return !1
    for (var a = 0; a < n.length; a++) {
      var l = n[a]
      if (!En.call(t, l) || !Tr(e[l], t[l])) return !1
    }
    return !0
  }
  function Zg(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function HR(e) {
    for (; e; ) {
      if (e.nextSibling) return e.nextSibling
      e = e.parentNode
    }
  }
  function eb(e, t) {
    for (var n = Zg(e), r = 0, a = 0; n; ) {
      if (n.nodeType === La) {
        if (((a = r + n.textContent.length), r <= t && a >= t))
          return { node: n, offset: t - r }
        r = a
      }
      n = Zg(HR(n))
    }
  }
  function $R(e) {
    var t = e.ownerDocument,
      n = (t && t.defaultView) || window,
      r = n.getSelection && n.getSelection()
    if (!r || r.rangeCount === 0) return null
    var a = r.anchorNode,
      l = r.anchorOffset,
      u = r.focusNode,
      c = r.focusOffset
    try {
      a.nodeType, u.nodeType
    } catch {
      return null
    }
    return PR(e, a, l, u, c)
  }
  function PR(e, t, n, r, a) {
    var l = 0,
      u = -1,
      c = -1,
      v = 0,
      g = 0,
      b = e,
      D = null
    e: for (;;) {
      for (
        var w = null;
        b === t && (n === 0 || b.nodeType === La) && (u = l + n),
          b === r && (a === 0 || b.nodeType === La) && (c = l + a),
          b.nodeType === La && (l += b.nodeValue.length),
          (w = b.firstChild) !== null;

      )
        (D = b), (b = w)
      for (;;) {
        if (b === e) break e
        if (
          (D === t && ++v === n && (u = l),
          D === r && ++g === a && (c = l),
          (w = b.nextSibling) !== null)
        )
          break
        ;(b = D), (D = b.parentNode)
      }
      b = w
    }
    return u === -1 || c === -1 ? null : { start: u, end: c }
  }
  function BR(e, t) {
    var n = e.ownerDocument || document,
      r = (n && n.defaultView) || window
    if (!!r.getSelection) {
      var a = r.getSelection(),
        l = e.textContent.length,
        u = Math.min(t.start, l),
        c = t.end === void 0 ? u : Math.min(t.end, l)
      if (!a.extend && u > c) {
        var v = c
        ;(c = u), (u = v)
      }
      var g = eb(e, u),
        b = eb(e, c)
      if (g && b) {
        if (
          a.rangeCount === 1 &&
          a.anchorNode === g.node &&
          a.anchorOffset === g.offset &&
          a.focusNode === b.node &&
          a.focusOffset === b.offset
        )
          return
        var D = n.createRange()
        D.setStart(g.node, g.offset),
          a.removeAllRanges(),
          u > c
            ? (a.addRange(D), a.extend(b.node, b.offset))
            : (D.setEnd(b.node, b.offset), a.addRange(D))
      }
    }
  }
  function tb(e) {
    return e && e.nodeType === La
  }
  function nb(e, t) {
    return !e || !t
      ? !1
      : e === t
      ? !0
      : tb(e)
      ? !1
      : tb(t)
      ? nb(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
  }
  function VR(e) {
    return e && e.ownerDocument && nb(e.ownerDocument.documentElement, e)
  }
  function IR(e) {
    try {
      return typeof e.contentWindow.location.href == 'string'
    } catch {
      return !1
    }
  }
  function rb() {
    for (var e = window, t = ci(); t instanceof e.HTMLIFrameElement; ) {
      if (IR(t)) e = t.contentWindow
      else return t
      t = ci(e.document)
    }
    return t
  }
  function Vm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    )
  }
  function YR() {
    var e = rb()
    return { focusedElem: e, selectionRange: Vm(e) ? GR(e) : null }
  }
  function WR(e) {
    var t = rb(),
      n = e.focusedElem,
      r = e.selectionRange
    if (t !== n && VR(n)) {
      r !== null && Vm(n) && qR(n, r)
      for (var a = [], l = n; (l = l.parentNode); )
        l.nodeType === sr &&
          a.push({ element: l, left: l.scrollLeft, top: l.scrollTop })
      typeof n.focus == 'function' && n.focus()
      for (var u = 0; u < a.length; u++) {
        var c = a[u]
        ;(c.element.scrollLeft = c.left), (c.element.scrollTop = c.top)
      }
    }
  }
  function GR(e) {
    var t
    return (
      'selectionStart' in e
        ? (t = { start: e.selectionStart, end: e.selectionEnd })
        : (t = $R(e)),
      t || { start: 0, end: 0 }
    )
  }
  function qR(e, t) {
    var n = t.start,
      r = t.end
    r === void 0 && (r = n),
      'selectionStart' in e
        ? ((e.selectionStart = n),
          (e.selectionEnd = Math.min(r, e.value.length)))
        : BR(e, t)
  }
  var QR = Bt && 'documentMode' in document && document.documentMode <= 11
  function KR() {
    Mn('onSelect', [
      'focusout',
      'contextmenu',
      'dragend',
      'focusin',
      'keydown',
      'keyup',
      'mousedown',
      'mouseup',
      'selectionchange',
    ])
  }
  var Xl = null,
    Im = null,
    Lu = null,
    Ym = !1
  function XR(e) {
    if ('selectionStart' in e && Vm(e))
      return { start: e.selectionStart, end: e.selectionEnd }
    var t = (e.ownerDocument && e.ownerDocument.defaultView) || window,
      n = t.getSelection()
    return {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset,
    }
  }
  function JR(e) {
    return e.window === e ? e.document : e.nodeType === ka ? e : e.ownerDocument
  }
  function ab(e, t, n) {
    var r = JR(n)
    if (!(Ym || Xl == null || Xl !== ci(r))) {
      var a = XR(Xl)
      if (!Lu || !Mu(Lu, a)) {
        Lu = a
        var l = wc(Im, 'onSelect')
        if (l.length > 0) {
          var u = new jm('onSelect', 'select', null, t, n)
          e.push({ event: u, listeners: l }), (u.target = Xl)
        }
      }
    }
  }
  function ZR(e, t, n, r, a, l, u) {
    var c = n ? no(n) : window
    switch (t) {
      case 'focusin':
        ;(qg(c) || c.contentEditable === 'true') &&
          ((Xl = c), (Im = n), (Lu = null))
        break
      case 'focusout':
        ;(Xl = null), (Im = null), (Lu = null)
        break
      case 'mousedown':
        Ym = !0
        break
      case 'contextmenu':
      case 'mouseup':
      case 'dragend':
        ;(Ym = !1), ab(e, r, a)
        break
      case 'selectionchange':
        if (QR) break
      case 'keydown':
      case 'keyup':
        ab(e, r, a)
    }
  }
  function Cc(e, t) {
    var n = {}
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    )
  }
  var Jl = {
      animationend: Cc('Animation', 'AnimationEnd'),
      animationiteration: Cc('Animation', 'AnimationIteration'),
      animationstart: Cc('Animation', 'AnimationStart'),
      transitionend: Cc('Transition', 'TransitionEnd'),
    },
    Wm = {},
    ib = {}
  Bt &&
    ((ib = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Jl.animationend.animation,
      delete Jl.animationiteration.animation,
      delete Jl.animationstart.animation),
    'TransitionEvent' in window || delete Jl.transitionend.transition)
  function Rc(e) {
    if (Wm[e]) return Wm[e]
    if (!Jl[e]) return e
    var t = Jl[e]
    for (var n in t) if (t.hasOwnProperty(n) && n in ib) return (Wm[e] = t[n])
    return e
  }
  var lb = Rc('animationend'),
    ob = Rc('animationiteration'),
    ub = Rc('animationstart'),
    sb = Rc('transitionend'),
    cb = new Map(),
    fb = [
      'abort',
      'auxClick',
      'cancel',
      'canPlay',
      'canPlayThrough',
      'click',
      'close',
      'contextMenu',
      'copy',
      'cut',
      'drag',
      'dragEnd',
      'dragEnter',
      'dragExit',
      'dragLeave',
      'dragOver',
      'dragStart',
      'drop',
      'durationChange',
      'emptied',
      'encrypted',
      'ended',
      'error',
      'gotPointerCapture',
      'input',
      'invalid',
      'keyDown',
      'keyPress',
      'keyUp',
      'load',
      'loadedData',
      'loadedMetadata',
      'loadStart',
      'lostPointerCapture',
      'mouseDown',
      'mouseMove',
      'mouseOut',
      'mouseOver',
      'mouseUp',
      'paste',
      'pause',
      'play',
      'playing',
      'pointerCancel',
      'pointerDown',
      'pointerMove',
      'pointerOut',
      'pointerOver',
      'pointerUp',
      'progress',
      'rateChange',
      'reset',
      'resize',
      'seeked',
      'seeking',
      'stalled',
      'submit',
      'suspend',
      'timeUpdate',
      'touchCancel',
      'touchEnd',
      'touchStart',
      'volumeChange',
      'scroll',
      'toggle',
      'touchMove',
      'waiting',
      'wheel',
    ]
  function yi(e, t) {
    cb.set(e, t), Mn(t, [e])
  }
  function eT() {
    for (var e = 0; e < fb.length; e++) {
      var t = fb[e],
        n = t.toLowerCase(),
        r = t[0].toUpperCase() + t.slice(1)
      yi(n, 'on' + r)
    }
    yi(lb, 'onAnimationEnd'),
      yi(ob, 'onAnimationIteration'),
      yi(ub, 'onAnimationStart'),
      yi('dblclick', 'onDoubleClick'),
      yi('focusin', 'onFocus'),
      yi('focusout', 'onBlur'),
      yi(sb, 'onTransitionEnd')
  }
  function tT(e, t, n, r, a, l, u) {
    var c = cb.get(t)
    if (c !== void 0) {
      var v = jm,
        g = t
      switch (t) {
        case 'keypress':
          if (Nc(r) === 0) return
        case 'keydown':
        case 'keyup':
          v = nR
          break
        case 'focusin':
          ;(g = 'focus'), (v = $m)
          break
        case 'focusout':
          ;(g = 'blur'), (v = $m)
          break
        case 'beforeblur':
        case 'afterblur':
          v = $m
          break
        case 'click':
          if (r.button === 2) return
        case 'auxclick':
        case 'dblclick':
        case 'mousedown':
        case 'mousemove':
        case 'mouseup':
        case 'mouseout':
        case 'mouseover':
        case 'contextmenu':
          v = jg
          break
        case 'drag':
        case 'dragend':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'dragstart':
        case 'drop':
          v = BC
          break
        case 'touchcancel':
        case 'touchend':
        case 'touchmove':
        case 'touchstart':
          v = iR
          break
        case lb:
        case ob:
        case ub:
          v = YC
          break
        case sb:
          v = oR
          break
        case 'scroll':
          v = HC
          break
        case 'wheel':
          v = sR
          break
        case 'copy':
        case 'cut':
        case 'paste':
          v = GC
          break
        case 'gotpointercapture':
        case 'lostpointercapture':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'pointerup':
          v = Hg
          break
      }
      var b = (l & ru) !== 0
      {
        var D = !b && t === 'scroll',
          w = iT(n, c, r.type, b, D)
        if (w.length > 0) {
          var A = new v(c, g, null, r, a)
          e.push({ event: A, listeners: w })
        }
      }
    }
  }
  eT(), FR(), ER(), KR(), dR()
  function nT(e, t, n, r, a, l, u) {
    tT(e, t, n, r, a, l)
    var c = (l & X1) === 0
    c &&
      (jR(e, t, n, r, a),
      UR(e, t, n, r, a),
      ZR(e, t, n, r, a),
      NR(e, t, n, r, a))
  }
  var ku = [
      'abort',
      'canplay',
      'canplaythrough',
      'durationchange',
      'emptied',
      'encrypted',
      'ended',
      'error',
      'loadeddata',
      'loadedmetadata',
      'loadstart',
      'pause',
      'play',
      'playing',
      'progress',
      'ratechange',
      'resize',
      'seeked',
      'seeking',
      'stalled',
      'suspend',
      'timeupdate',
      'volumechange',
      'waiting',
    ],
    Gm = new Set(
      ['cancel', 'close', 'invalid', 'load', 'scroll', 'toggle'].concat(ku)
    )
  function db(e, t, n) {
    var r = e.type || 'unknown-event'
    ;(e.currentTarget = n), sE(r, t, void 0, e), (e.currentTarget = null)
  }
  function rT(e, t, n) {
    var r
    if (n)
      for (var a = t.length - 1; a >= 0; a--) {
        var l = t[a],
          u = l.instance,
          c = l.currentTarget,
          v = l.listener
        if (u !== r && e.isPropagationStopped()) return
        db(e, v, c), (r = u)
      }
    else
      for (var g = 0; g < t.length; g++) {
        var b = t[g],
          D = b.instance,
          w = b.currentTarget,
          A = b.listener
        if (D !== r && e.isPropagationStopped()) return
        db(e, A, w), (r = D)
      }
  }
  function mb(e, t) {
    for (var n = (t & ru) !== 0, r = 0; r < e.length; r++) {
      var a = e[r],
        l = a.event,
        u = a.listeners
      rT(l, u, n)
    }
    cE()
  }
  function aT(e, t, n, r, a) {
    var l = Bd(n),
      u = []
    nT(u, e, r, n, l, t), mb(u, t)
  }
  function Ft(e, t) {
    Gm.has(e) ||
      f(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      )
    var n = !1,
      r = Aw(t),
      a = uT(e, n)
    r.has(a) || (vb(t, e, Pd, n), r.add(a))
  }
  function qm(e, t, n) {
    Gm.has(e) &&
      !t &&
      f(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      )
    var r = 0
    t && (r |= ru), vb(n, e, r, t)
  }
  var Tc = '_reactListening' + Math.random().toString(36).slice(2)
  function Au(e) {
    if (!e[Tc]) {
      ;(e[Tc] = !0),
        xn.forEach(function (n) {
          n !== 'selectionchange' && (Gm.has(n) || qm(n, !1, e), qm(n, !0, e))
        })
      var t = e.nodeType === ka ? e : e.ownerDocument
      t !== null && (t[Tc] || ((t[Tc] = !0), qm('selectionchange', !1, t)))
    }
  }
  function vb(e, t, n, r, a) {
    var l = _C(e, t, n),
      u = void 0
    Yd &&
      (t === 'touchstart' || t === 'touchmove' || t === 'wheel') &&
      (u = !0),
      (e = e),
      r
        ? u !== void 0
          ? UC(e, t, l, u)
          : AC(e, t, l)
        : u !== void 0
        ? FC(e, t, l, u)
        : kC(e, t, l)
  }
  function pb(e, t) {
    return e === t || (e.nodeType === an && e.parentNode === t)
  }
  function Qm(e, t, n, r, a) {
    var l = r
    if ((t & Iy) === 0 && (t & Pd) === 0) {
      var u = a
      if (r !== null) {
        var c = r
        e: for (;;) {
          if (c === null) return
          var v = c.tag
          if (v === M || v === B) {
            var g = c.stateNode.containerInfo
            if (pb(g, u)) break
            if (v === B)
              for (var b = c.return; b !== null; ) {
                var D = b.tag
                if (D === M || D === B) {
                  var w = b.stateNode.containerInfo
                  if (pb(w, u)) return
                }
                b = b.return
              }
            for (; g !== null; ) {
              var A = al(g)
              if (A === null) return
              var U = A.tag
              if (U === j || U === z) {
                c = l = A
                continue e
              }
              g = g.parentNode
            }
          }
          c = c.return
        }
      }
    }
    Ky(function () {
      return aT(e, t, n, l)
    })
  }
  function Uu(e, t, n) {
    return { instance: e, listener: t, currentTarget: n }
  }
  function iT(e, t, n, r, a, l) {
    for (
      var u = t !== null ? t + 'Capture' : null,
        c = r ? u : t,
        v = [],
        g = e,
        b = null;
      g !== null;

    ) {
      var D = g,
        w = D.stateNode,
        A = D.tag
      if (A === j && w !== null && ((b = w), c !== null)) {
        var U = iu(g, c)
        U != null && v.push(Uu(g, U, b))
      }
      if (a) break
      g = g.return
    }
    return v
  }
  function wc(e, t) {
    for (var n = t + 'Capture', r = [], a = e; a !== null; ) {
      var l = a,
        u = l.stateNode,
        c = l.tag
      if (c === j && u !== null) {
        var v = u,
          g = iu(a, n)
        g != null && r.unshift(Uu(a, g, v))
        var b = iu(a, t)
        b != null && r.push(Uu(a, b, v))
      }
      a = a.return
    }
    return r
  }
  function Zl(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== j)
    return e || null
  }
  function lT(e, t) {
    for (var n = e, r = t, a = 0, l = n; l; l = Zl(l)) a++
    for (var u = 0, c = r; c; c = Zl(c)) u++
    for (; a - u > 0; ) (n = Zl(n)), a--
    for (; u - a > 0; ) (r = Zl(r)), u--
    for (var v = a; v--; ) {
      if (n === r || (r !== null && n === r.alternate)) return n
      ;(n = Zl(n)), (r = Zl(r))
    }
    return null
  }
  function hb(e, t, n, r, a) {
    for (var l = t._reactName, u = [], c = n; c !== null && c !== r; ) {
      var v = c,
        g = v.alternate,
        b = v.stateNode,
        D = v.tag
      if (g !== null && g === r) break
      if (D === j && b !== null) {
        var w = b
        if (a) {
          var A = iu(c, l)
          A != null && u.unshift(Uu(c, A, w))
        } else if (!a) {
          var U = iu(c, l)
          U != null && u.push(Uu(c, U, w))
        }
      }
      c = c.return
    }
    u.length !== 0 && e.push({ event: t, listeners: u })
  }
  function oT(e, t, n, r, a) {
    var l = r && a ? lT(r, a) : null
    r !== null && hb(e, t, r, l, !1),
      a !== null && n !== null && hb(e, n, a, l, !0)
  }
  function uT(e, t) {
    return e + '__' + (t ? 'capture' : 'bubble')
  }
  var cr = !1,
    Fu = 'dangerouslySetInnerHTML',
    Dc = 'suppressContentEditableWarning',
    gi = 'suppressHydrationWarning',
    yb = 'autoFocus',
    nl = 'children',
    rl = 'style',
    _c = '__html',
    Km,
    Oc,
    ju,
    gb,
    Mc,
    bb,
    Nb
  ;(Km = { dialog: !0, webview: !0 }),
    (Oc = function (e, t) {
      I1(e, t),
        Y1(e, t),
        K1(e, t, {
          registrationNameDependencies: rn,
          possibleRegistrationNames: Sn,
        })
    }),
    (bb = Bt && !document.documentMode),
    (ju = function (e, t, n) {
      if (!cr) {
        var r = Lc(n),
          a = Lc(t)
        a !== r &&
          ((cr = !0),
          f(
            'Prop `%s` did not match. Server: %s Client: %s',
            e,
            JSON.stringify(a),
            JSON.stringify(r)
          ))
      }
    }),
    (gb = function (e) {
      if (!cr) {
        cr = !0
        var t = []
        e.forEach(function (n) {
          t.push(n)
        }),
          f('Extra attributes from the server: %s', t)
      }
    }),
    (Mc = function (e, t) {
      t === !1
        ? f(
            'Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
            e,
            e,
            e
          )
        : f(
            'Expected `%s` listener to be a function, instead got a value of `%s` type.',
            e,
            typeof t
          )
    }),
    (Nb = function (e, t) {
      var n =
        e.namespaceURI === Ma
          ? e.ownerDocument.createElement(e.tagName)
          : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName)
      return (n.innerHTML = t), n.innerHTML
    })
  var sT = /\r\n?/g,
    cT = /\u0000|\uFFFD/g
  function Lc(e) {
    K(e)
    var t = typeof e == 'string' ? e : '' + e
    return t
      .replace(
        sT,
        `
`
      )
      .replace(cT, '')
  }
  function kc(e, t, n, r) {
    var a = Lc(t),
      l = Lc(e)
    if (
      l !== a &&
      (r &&
        (cr ||
          ((cr = !0),
          f('Text content did not match. Server: "%s" Client: "%s"', l, a))),
      n && ue)
    )
      throw new Error('Text content does not match server-rendered HTML.')
  }
  function xb(e) {
    return e.nodeType === ka ? e : e.ownerDocument
  }
  function fT() {}
  function Ac(e) {
    e.onclick = fT
  }
  function dT(e, t, n, r, a) {
    for (var l in r)
      if (!!r.hasOwnProperty(l)) {
        var u = r[l]
        if (l === rl) u && Object.freeze(u), zy(t, u)
        else if (l === Fu) {
          var c = u ? u[_c] : void 0
          c != null && ky(t, c)
        } else if (l === nl)
          if (typeof u == 'string') {
            var v = e !== 'textarea' || u !== ''
            v && nc(t, u)
          } else typeof u == 'number' && nc(t, '' + u)
        else
          l === Dc ||
            l === gi ||
            l === yb ||
            (rn.hasOwnProperty(l)
              ? u != null &&
                (typeof u != 'function' && Mc(l, u),
                l === 'onScroll' && Ft('scroll', t))
              : u != null && ri(t, l, u, a))
      }
  }
  function mT(e, t, n, r) {
    for (var a = 0; a < t.length; a += 2) {
      var l = t[a],
        u = t[a + 1]
      l === rl
        ? zy(e, u)
        : l === Fu
        ? ky(e, u)
        : l === nl
        ? nc(e, u)
        : ri(e, l, u, r)
    }
  }
  function vT(e, t, n, r) {
    var a,
      l = xb(n),
      u,
      c = r
    if ((c === Ma && (c = Ud(e)), c === Ma)) {
      if (
        ((a = Yi(e, t)),
        !a &&
          e !== e.toLowerCase() &&
          f(
            '<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.',
            e
          ),
        e === 'script')
      ) {
        var v = l.createElement('div')
        v.innerHTML = '<script></script>'
        var g = v.firstChild
        u = v.removeChild(g)
      } else if (typeof t.is == 'string') u = l.createElement(e, { is: t.is })
      else if (((u = l.createElement(e)), e === 'select')) {
        var b = u
        t.multiple ? (b.multiple = !0) : t.size && (b.size = t.size)
      }
    } else u = l.createElementNS(c, e)
    return (
      c === Ma &&
        !a &&
        Object.prototype.toString.call(u) === '[object HTMLUnknownElement]' &&
        !En.call(Km, e) &&
        ((Km[e] = !0),
        f(
          'The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.',
          e
        )),
      u
    )
  }
  function pT(e, t) {
    return xb(t).createTextNode(e)
  }
  function hT(e, t, n, r) {
    var a = Yi(t, n)
    Oc(t, n)
    var l
    switch (t) {
      case 'dialog':
        Ft('cancel', e), Ft('close', e), (l = n)
        break
      case 'iframe':
      case 'object':
      case 'embed':
        Ft('load', e), (l = n)
        break
      case 'video':
      case 'audio':
        for (var u = 0; u < ku.length; u++) Ft(ku[u], e)
        l = n
        break
      case 'source':
        Ft('error', e), (l = n)
        break
      case 'img':
      case 'image':
      case 'link':
        Ft('error', e), Ft('load', e), (l = n)
        break
      case 'details':
        Ft('toggle', e), (l = n)
        break
      case 'input':
        S(e, n), (l = p(e, n)), Ft('invalid', e)
        break
      case 'option':
        _t(e, n), (l = n)
        break
      case 'select':
        tu(e, n), (l = eu(e, n)), Ft('invalid', e)
        break
      case 'textarea':
        Oy(e, n), (l = kd(e, n)), Ft('invalid', e)
        break
      default:
        l = n
    }
    switch (($d(t, l), dT(t, e, r, l, a), t)) {
      case 'input':
        _a(e), J(e, n, !1)
        break
      case 'textarea':
        _a(e), Ly(e)
        break
      case 'option':
        Ut(e, n)
        break
      case 'select':
        Ld(e, n)
        break
      default:
        typeof l.onClick == 'function' && Ac(e)
        break
    }
  }
  function yT(e, t, n, r, a) {
    Oc(t, r)
    var l = null,
      u,
      c
    switch (t) {
      case 'input':
        ;(u = p(e, n)), (c = p(e, r)), (l = [])
        break
      case 'select':
        ;(u = eu(e, n)), (c = eu(e, r)), (l = [])
        break
      case 'textarea':
        ;(u = kd(e, n)), (c = kd(e, r)), (l = [])
        break
      default:
        ;(u = n),
          (c = r),
          typeof u.onClick != 'function' &&
            typeof c.onClick == 'function' &&
            Ac(e)
        break
    }
    $d(t, c)
    var v,
      g,
      b = null
    for (v in u)
      if (!(c.hasOwnProperty(v) || !u.hasOwnProperty(v) || u[v] == null))
        if (v === rl) {
          var D = u[v]
          for (g in D) D.hasOwnProperty(g) && (b || (b = {}), (b[g] = ''))
        } else
          v === Fu ||
            v === nl ||
            v === Dc ||
            v === gi ||
            v === yb ||
            (rn.hasOwnProperty(v) ? l || (l = []) : (l = l || []).push(v, null))
    for (v in c) {
      var w = c[v],
        A = u != null ? u[v] : void 0
      if (!(!c.hasOwnProperty(v) || w === A || (w == null && A == null)))
        if (v === rl)
          if ((w && Object.freeze(w), A)) {
            for (g in A)
              A.hasOwnProperty(g) &&
                (!w || !w.hasOwnProperty(g)) &&
                (b || (b = {}), (b[g] = ''))
            for (g in w)
              w.hasOwnProperty(g) &&
                A[g] !== w[g] &&
                (b || (b = {}), (b[g] = w[g]))
          } else b || (l || (l = []), l.push(v, b)), (b = w)
        else if (v === Fu) {
          var U = w ? w[_c] : void 0,
            $ = A ? A[_c] : void 0
          U != null && $ !== U && (l = l || []).push(v, U)
        } else
          v === nl
            ? (typeof w == 'string' || typeof w == 'number') &&
              (l = l || []).push(v, '' + w)
            : v === Dc ||
              v === gi ||
              (rn.hasOwnProperty(v)
                ? (w != null &&
                    (typeof w != 'function' && Mc(v, w),
                    v === 'onScroll' && Ft('scroll', e)),
                  !l && A !== w && (l = []))
                : (l = l || []).push(v, w))
    }
    return b && (F1(b, c[rl]), (l = l || []).push(rl, b)), l
  }
  function gT(e, t, n, r, a) {
    n === 'input' && a.type === 'radio' && a.name != null && F(e, a)
    var l = Yi(n, r),
      u = Yi(n, a)
    switch ((mT(e, t, l, u), n)) {
      case 'input':
        H(e, a)
        break
      case 'textarea':
        My(e, a)
        break
      case 'select':
        m1(e, a)
        break
    }
  }
  function bT(e) {
    {
      var t = e.toLowerCase()
      return (rc.hasOwnProperty(t) && rc[t]) || null
    }
  }
  function NT(e, t, n, r, a, l, u) {
    var c, v
    switch (((c = Yi(t, n)), Oc(t, n), t)) {
      case 'dialog':
        Ft('cancel', e), Ft('close', e)
        break
      case 'iframe':
      case 'object':
      case 'embed':
        Ft('load', e)
        break
      case 'video':
      case 'audio':
        for (var g = 0; g < ku.length; g++) Ft(ku[g], e)
        break
      case 'source':
        Ft('error', e)
        break
      case 'img':
      case 'image':
      case 'link':
        Ft('error', e), Ft('load', e)
        break
      case 'details':
        Ft('toggle', e)
        break
      case 'input':
        S(e, n), Ft('invalid', e)
        break
      case 'option':
        _t(e, n)
        break
      case 'select':
        tu(e, n), Ft('invalid', e)
        break
      case 'textarea':
        Oy(e, n), Ft('invalid', e)
        break
    }
    $d(t, n)
    {
      v = new Set()
      for (var b = e.attributes, D = 0; D < b.length; D++) {
        var w = b[D].name.toLowerCase()
        switch (w) {
          case 'value':
            break
          case 'checked':
            break
          case 'selected':
            break
          default:
            v.add(b[D].name)
        }
      }
    }
    var A = null
    for (var U in n)
      if (!!n.hasOwnProperty(U)) {
        var $ = n[U]
        if (U === nl)
          typeof $ == 'string'
            ? e.textContent !== $ &&
              (n[gi] !== !0 && kc(e.textContent, $, l, u), (A = [nl, $]))
            : typeof $ == 'number' &&
              e.textContent !== '' + $ &&
              (n[gi] !== !0 && kc(e.textContent, $, l, u), (A = [nl, '' + $]))
        else if (rn.hasOwnProperty(U))
          $ != null &&
            (typeof $ != 'function' && Mc(U, $),
            U === 'onScroll' && Ft('scroll', e))
        else if (u && !0 && typeof c == 'boolean') {
          var se = void 0,
            Se = c && bn ? null : Yt(U)
          if (n[gi] !== !0) {
            if (
              !(
                U === Dc ||
                U === gi ||
                U === 'value' ||
                U === 'checked' ||
                U === 'selected'
              )
            ) {
              if (U === Fu) {
                var Ne = e.innerHTML,
                  rt = $ ? $[_c] : void 0
                if (rt != null) {
                  var qe = Nb(e, rt)
                  qe !== Ne && ju(U, Ne, qe)
                }
              } else if (U === rl) {
                if ((v.delete(U), bb)) {
                  var L = A1($)
                  ;(se = e.getAttribute('style')), L !== se && ju(U, se, L)
                }
              } else if (c && !bn)
                v.delete(U.toLowerCase()),
                  (se = ni(e, U, $)),
                  $ !== se && ju(U, se, $)
              else if (!At(U, Se, c) && !Pe(U, $, Se, c)) {
                var P = !1
                if (Se !== null)
                  v.delete(Se.attributeName), (se = wa(e, U, $, Se))
                else {
                  var k = r
                  if ((k === Ma && (k = Ud(t)), k === Ma))
                    v.delete(U.toLowerCase())
                  else {
                    var q = bT(U)
                    q !== null && q !== U && ((P = !0), v.delete(q)),
                      v.delete(U)
                  }
                  se = ni(e, U, $)
                }
                var ce = bn
                !ce && $ !== se && !P && ju(U, se, $)
              }
            }
          }
        }
      }
    switch ((u && v.size > 0 && n[gi] !== !0 && gb(v), t)) {
      case 'input':
        _a(e), J(e, n, !0)
        break
      case 'textarea':
        _a(e), Ly(e)
        break
      case 'select':
      case 'option':
        break
      default:
        typeof n.onClick == 'function' && Ac(e)
        break
    }
    return A
  }
  function xT(e, t, n) {
    var r = e.nodeValue !== t
    return r
  }
  function Xm(e, t) {
    {
      if (cr) return
      ;(cr = !0),
        f(
          'Did not expect server HTML to contain a <%s> in <%s>.',
          t.nodeName.toLowerCase(),
          e.nodeName.toLowerCase()
        )
    }
  }
  function Jm(e, t) {
    {
      if (cr) return
      ;(cr = !0),
        f(
          'Did not expect server HTML to contain the text node "%s" in <%s>.',
          t.nodeValue,
          e.nodeName.toLowerCase()
        )
    }
  }
  function Zm(e, t, n) {
    {
      if (cr) return
      ;(cr = !0),
        f(
          'Expected server HTML to contain a matching <%s> in <%s>.',
          t,
          e.nodeName.toLowerCase()
        )
    }
  }
  function ev(e, t) {
    {
      if (t === '' || cr) return
      ;(cr = !0),
        f(
          'Expected server HTML to contain a matching text node for "%s" in <%s>.',
          t,
          e.nodeName.toLowerCase()
        )
    }
  }
  function ST(e, t, n) {
    switch (t) {
      case 'input':
        Oe(e, n)
        return
      case 'textarea':
        p1(e, n)
        return
      case 'select':
        v1(e, n)
        return
    }
  }
  var zu = function () {},
    Hu = function () {}
  {
    var ET = [
        'address',
        'applet',
        'area',
        'article',
        'aside',
        'base',
        'basefont',
        'bgsound',
        'blockquote',
        'body',
        'br',
        'button',
        'caption',
        'center',
        'col',
        'colgroup',
        'dd',
        'details',
        'dir',
        'div',
        'dl',
        'dt',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'frame',
        'frameset',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'iframe',
        'img',
        'input',
        'isindex',
        'li',
        'link',
        'listing',
        'main',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'nav',
        'noembed',
        'noframes',
        'noscript',
        'object',
        'ol',
        'p',
        'param',
        'plaintext',
        'pre',
        'script',
        'section',
        'select',
        'source',
        'style',
        'summary',
        'table',
        'tbody',
        'td',
        'template',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'title',
        'tr',
        'track',
        'ul',
        'wbr',
        'xmp',
      ],
      Sb = [
        'applet',
        'caption',
        'html',
        'table',
        'td',
        'th',
        'marquee',
        'object',
        'template',
        'foreignObject',
        'desc',
        'title',
      ],
      CT = Sb.concat(['button']),
      RT = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'],
      Eb = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null,
      }
    Hu = function (e, t) {
      var n = Je({}, e || Eb),
        r = { tag: t }
      return (
        Sb.indexOf(t) !== -1 &&
          ((n.aTagInScope = null),
          (n.buttonTagInScope = null),
          (n.nobrTagInScope = null)),
        CT.indexOf(t) !== -1 && (n.pTagInButtonScope = null),
        ET.indexOf(t) !== -1 &&
          t !== 'address' &&
          t !== 'div' &&
          t !== 'p' &&
          ((n.listItemTagAutoclosing = null), (n.dlItemTagAutoclosing = null)),
        (n.current = r),
        t === 'form' && (n.formTag = r),
        t === 'a' && (n.aTagInScope = r),
        t === 'button' && (n.buttonTagInScope = r),
        t === 'nobr' && (n.nobrTagInScope = r),
        t === 'p' && (n.pTagInButtonScope = r),
        t === 'li' && (n.listItemTagAutoclosing = r),
        (t === 'dd' || t === 'dt') && (n.dlItemTagAutoclosing = r),
        n
      )
    }
    var TT = function (e, t) {
        switch (t) {
          case 'select':
            return e === 'option' || e === 'optgroup' || e === '#text'
          case 'optgroup':
            return e === 'option' || e === '#text'
          case 'option':
            return e === '#text'
          case 'tr':
            return (
              e === 'th' ||
              e === 'td' ||
              e === 'style' ||
              e === 'script' ||
              e === 'template'
            )
          case 'tbody':
          case 'thead':
          case 'tfoot':
            return (
              e === 'tr' || e === 'style' || e === 'script' || e === 'template'
            )
          case 'colgroup':
            return e === 'col' || e === 'template'
          case 'table':
            return (
              e === 'caption' ||
              e === 'colgroup' ||
              e === 'tbody' ||
              e === 'tfoot' ||
              e === 'thead' ||
              e === 'style' ||
              e === 'script' ||
              e === 'template'
            )
          case 'head':
            return (
              e === 'base' ||
              e === 'basefont' ||
              e === 'bgsound' ||
              e === 'link' ||
              e === 'meta' ||
              e === 'title' ||
              e === 'noscript' ||
              e === 'noframes' ||
              e === 'style' ||
              e === 'script' ||
              e === 'template'
            )
          case 'html':
            return e === 'head' || e === 'body' || e === 'frameset'
          case 'frameset':
            return e === 'frame'
          case '#document':
            return e === 'html'
        }
        switch (e) {
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            return (
              t !== 'h1' &&
              t !== 'h2' &&
              t !== 'h3' &&
              t !== 'h4' &&
              t !== 'h5' &&
              t !== 'h6'
            )
          case 'rp':
          case 'rt':
            return RT.indexOf(t) === -1
          case 'body':
          case 'caption':
          case 'col':
          case 'colgroup':
          case 'frameset':
          case 'frame':
          case 'head':
          case 'html':
          case 'tbody':
          case 'td':
          case 'tfoot':
          case 'th':
          case 'thead':
          case 'tr':
            return t == null
        }
        return !0
      },
      wT = function (e, t) {
        switch (e) {
          case 'address':
          case 'article':
          case 'aside':
          case 'blockquote':
          case 'center':
          case 'details':
          case 'dialog':
          case 'dir':
          case 'div':
          case 'dl':
          case 'fieldset':
          case 'figcaption':
          case 'figure':
          case 'footer':
          case 'header':
          case 'hgroup':
          case 'main':
          case 'menu':
          case 'nav':
          case 'ol':
          case 'p':
          case 'section':
          case 'summary':
          case 'ul':
          case 'pre':
          case 'listing':
          case 'table':
          case 'hr':
          case 'xmp':
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            return t.pTagInButtonScope
          case 'form':
            return t.formTag || t.pTagInButtonScope
          case 'li':
            return t.listItemTagAutoclosing
          case 'dd':
          case 'dt':
            return t.dlItemTagAutoclosing
          case 'button':
            return t.buttonTagInScope
          case 'a':
            return t.aTagInScope
          case 'nobr':
            return t.nobrTagInScope
        }
        return null
      },
      Cb = {}
    zu = function (e, t, n) {
      n = n || Eb
      var r = n.current,
        a = r && r.tag
      t != null &&
        (e != null &&
          f(
            'validateDOMNesting: when childText is passed, childTag should be null'
          ),
        (e = '#text'))
      var l = TT(e, a) ? null : r,
        u = l ? null : wT(e, n),
        c = l || u
      if (!!c) {
        var v = c.tag,
          g = !!l + '|' + e + '|' + v
        if (!Cb[g]) {
          Cb[g] = !0
          var b = e,
            D = ''
          if (
            (e === '#text'
              ? /\S/.test(t)
                ? (b = 'Text nodes')
                : ((b = 'Whitespace text nodes'),
                  (D =
                    " Make sure you don't have any extra whitespace between tags on each line of your source code."))
              : (b = '<' + e + '>'),
            l)
          ) {
            var w = ''
            v === 'table' &&
              e === 'tr' &&
              (w +=
                ' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.'),
              f(
                'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s',
                b,
                v,
                D,
                w
              )
          } else
            f(
              'validateDOMNesting(...): %s cannot appear as a descendant of <%s>.',
              b,
              v
            )
        }
      }
    }
  }
  var Uc = 'suppressHydrationWarning',
    Fc = '$',
    jc = '/$',
    $u = '$?',
    Pu = '$!',
    DT = 'style',
    tv = null,
    nv = null
  function _T(e) {
    var t,
      n,
      r = e.nodeType
    switch (r) {
      case ka:
      case jd: {
        t = r === ka ? '#document' : '#fragment'
        var a = e.documentElement
        n = a ? a.namespaceURI : Fd(null, '')
        break
      }
      default: {
        var l = r === an ? e.parentNode : e,
          u = l.namespaceURI || null
        ;(t = l.tagName), (n = Fd(u, t))
        break
      }
    }
    {
      var c = t.toLowerCase(),
        v = Hu(null, c)
      return { namespace: n, ancestorInfo: v }
    }
  }
  function OT(e, t, n) {
    {
      var r = e,
        a = Fd(r.namespace, t),
        l = Hu(r.ancestorInfo, t)
      return { namespace: a, ancestorInfo: l }
    }
  }
  function $A(e) {
    return e
  }
  function MT(e) {
    ;(tv = DC()), (nv = YR())
    var t = null
    return Lg(!1), t
  }
  function LT(e) {
    WR(nv), Lg(tv), (tv = null), (nv = null)
  }
  function kT(e, t, n, r, a) {
    var l
    {
      var u = r
      if (
        (zu(e, null, u.ancestorInfo),
        typeof t.children == 'string' || typeof t.children == 'number')
      ) {
        var c = '' + t.children,
          v = Hu(u.ancestorInfo, e)
        zu(null, c, v)
      }
      l = u.namespace
    }
    var g = vT(e, t, n, l)
    return Iu(a, g), cv(g, t), g
  }
  function AT(e, t) {
    e.appendChild(t)
  }
  function UT(e, t, n, r, a) {
    switch ((hT(e, t, n, r), t)) {
      case 'button':
      case 'input':
      case 'select':
      case 'textarea':
        return !!n.autoFocus
      case 'img':
        return !0
      default:
        return !1
    }
  }
  function FT(e, t, n, r, a, l) {
    {
      var u = l
      if (
        typeof r.children != typeof n.children &&
        (typeof r.children == 'string' || typeof r.children == 'number')
      ) {
        var c = '' + r.children,
          v = Hu(u.ancestorInfo, t)
        zu(null, c, v)
      }
    }
    return yT(e, t, n, r)
  }
  function rv(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    )
  }
  function jT(e, t, n, r) {
    {
      var a = n
      zu(null, e, a.ancestorInfo)
    }
    var l = pT(e, t)
    return Iu(r, l), l
  }
  function zT() {
    var e = window.event
    return e === void 0 ? $a : kg(e.type)
  }
  var av = typeof setTimeout == 'function' ? setTimeout : void 0,
    HT = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    iv = -1,
    Rb = typeof Promise == 'function' ? Promise : void 0,
    $T =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Rb < 'u'
        ? function (e) {
            return Rb.resolve(null).then(e).catch(PT)
          }
        : av
  function PT(e) {
    setTimeout(function () {
      throw e
    })
  }
  function BT(e, t, n, r) {
    switch (t) {
      case 'button':
      case 'input':
      case 'select':
      case 'textarea':
        n.autoFocus && e.focus()
        return
      case 'img': {
        n.src && (e.src = n.src)
        return
      }
    }
  }
  function VT(e, t, n, r, a, l) {
    gT(e, t, n, r, a), cv(e, a)
  }
  function Tb(e) {
    nc(e, '')
  }
  function IT(e, t, n) {
    e.nodeValue = n
  }
  function YT(e, t) {
    e.appendChild(t)
  }
  function WT(e, t) {
    var n
    e.nodeType === an
      ? ((n = e.parentNode), n.insertBefore(t, e))
      : ((n = e), n.appendChild(t))
    var r = e._reactRootContainer
    r == null && n.onclick === null && Ac(n)
  }
  function GT(e, t, n) {
    e.insertBefore(t, n)
  }
  function qT(e, t, n) {
    e.nodeType === an ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n)
  }
  function QT(e, t) {
    e.removeChild(t)
  }
  function KT(e, t) {
    e.nodeType === an ? e.parentNode.removeChild(t) : e.removeChild(t)
  }
  function lv(e, t) {
    var n = t,
      r = 0
    do {
      var a = n.nextSibling
      if ((e.removeChild(n), a && a.nodeType === an)) {
        var l = a.data
        if (l === jc)
          if (r === 0) {
            e.removeChild(a), Eu(t)
            return
          } else r--
        else (l === Fc || l === $u || l === Pu) && r++
      }
      n = a
    } while (n)
    Eu(t)
  }
  function XT(e, t) {
    e.nodeType === an ? lv(e.parentNode, t) : e.nodeType === sr && lv(e, t),
      Eu(e)
  }
  function JT(e) {
    e = e
    var t = e.style
    typeof t.setProperty == 'function'
      ? t.setProperty('display', 'none', 'important')
      : (t.display = 'none')
  }
  function ZT(e) {
    e.nodeValue = ''
  }
  function ew(e, t) {
    e = e
    var n = t[DT],
      r = n != null && n.hasOwnProperty('display') ? n.display : null
    e.style.display = zd('display', r)
  }
  function tw(e, t) {
    e.nodeValue = t
  }
  function nw(e) {
    e.nodeType === sr
      ? (e.textContent = '')
      : e.nodeType === ka &&
        e.documentElement &&
        e.removeChild(e.documentElement)
  }
  function rw(e, t, n) {
    return e.nodeType !== sr || t.toLowerCase() !== e.nodeName.toLowerCase()
      ? null
      : e
  }
  function aw(e, t) {
    return t === '' || e.nodeType !== La ? null : e
  }
  function iw(e) {
    return e.nodeType !== an ? null : e
  }
  function wb(e) {
    return e.data === $u
  }
  function ov(e) {
    return e.data === Pu
  }
  function lw(e) {
    var t = e.nextSibling && e.nextSibling.dataset,
      n,
      r,
      a
    return (
      t && ((n = t.dgst), (r = t.msg), (a = t.stck)),
      { message: r, digest: n, stack: a }
    )
  }
  function ow(e, t) {
    e._reactRetry = t
  }
  function zc(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === sr || t === La) break
      if (t === an) {
        var n = e.data
        if (n === Fc || n === Pu || n === $u) break
        if (n === jc) return null
      }
    }
    return e
  }
  function Bu(e) {
    return zc(e.nextSibling)
  }
  function uw(e) {
    return zc(e.firstChild)
  }
  function sw(e) {
    return zc(e.firstChild)
  }
  function cw(e) {
    return zc(e.nextSibling)
  }
  function fw(e, t, n, r, a, l, u) {
    Iu(l, e), cv(e, n)
    var c
    {
      var v = a
      c = v.namespace
    }
    var g = (l.mode & tt) !== _e
    return NT(e, t, n, c, r, g, u)
  }
  function dw(e, t, n, r) {
    return Iu(n, e), n.mode & tt, xT(e, t)
  }
  function mw(e, t) {
    Iu(t, e)
  }
  function vw(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === an) {
        var r = t.data
        if (r === jc) {
          if (n === 0) return Bu(t)
          n--
        } else (r === Fc || r === Pu || r === $u) && n++
      }
      t = t.nextSibling
    }
    return null
  }
  function Db(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === an) {
        var r = t.data
        if (r === Fc || r === Pu || r === $u) {
          if (n === 0) return t
          n--
        } else r === jc && n++
      }
      t = t.previousSibling
    }
    return null
  }
  function pw(e) {
    Eu(e)
  }
  function hw(e) {
    Eu(e)
  }
  function yw(e) {
    return e !== 'head' && e !== 'body'
  }
  function gw(e, t, n, r) {
    var a = !0
    kc(t.nodeValue, n, r, a)
  }
  function bw(e, t, n, r, a, l) {
    if (t[Uc] !== !0) {
      var u = !0
      kc(r.nodeValue, a, l, u)
    }
  }
  function Nw(e, t) {
    t.nodeType === sr ? Xm(e, t) : t.nodeType === an || Jm(e, t)
  }
  function xw(e, t) {
    {
      var n = e.parentNode
      n !== null &&
        (t.nodeType === sr ? Xm(n, t) : t.nodeType === an || Jm(n, t))
    }
  }
  function Sw(e, t, n, r, a) {
    ;(a || t[Uc] !== !0) &&
      (r.nodeType === sr ? Xm(n, r) : r.nodeType === an || Jm(n, r))
  }
  function Ew(e, t, n) {
    Zm(e, t)
  }
  function Cw(e, t) {
    ev(e, t)
  }
  function Rw(e, t, n) {
    {
      var r = e.parentNode
      r !== null && Zm(r, t)
    }
  }
  function Tw(e, t) {
    {
      var n = e.parentNode
      n !== null && ev(n, t)
    }
  }
  function ww(e, t, n, r, a, l) {
    ;(l || t[Uc] !== !0) && Zm(n, r)
  }
  function Dw(e, t, n, r, a) {
    ;(a || t[Uc] !== !0) && ev(n, r)
  }
  function _w(e) {
    f(
      'An error occurred during hydration. The server HTML was replaced with client content in <%s>.',
      e.nodeName.toLowerCase()
    )
  }
  function Ow(e) {
    Au(e)
  }
  var eo = Math.random().toString(36).slice(2),
    to = '__reactFiber$' + eo,
    uv = '__reactProps$' + eo,
    Vu = '__reactContainer$' + eo,
    sv = '__reactEvents$' + eo,
    Mw = '__reactListeners$' + eo,
    Lw = '__reactHandles$' + eo
  function kw(e) {
    delete e[to], delete e[uv], delete e[sv], delete e[Mw], delete e[Lw]
  }
  function Iu(e, t) {
    t[to] = e
  }
  function Hc(e, t) {
    t[Vu] = e
  }
  function _b(e) {
    e[Vu] = null
  }
  function Yu(e) {
    return !!e[Vu]
  }
  function al(e) {
    var t = e[to]
    if (t) return t
    for (var n = e.parentNode; n; ) {
      if (((t = n[Vu] || n[to]), t)) {
        var r = t.alternate
        if (t.child !== null || (r !== null && r.child !== null))
          for (var a = Db(e); a !== null; ) {
            var l = a[to]
            if (l) return l
            a = Db(a)
          }
        return t
      }
      ;(e = n), (n = e.parentNode)
    }
    return null
  }
  function bi(e) {
    var t = e[to] || e[Vu]
    return t && (t.tag === j || t.tag === z || t.tag === Z || t.tag === M)
      ? t
      : null
  }
  function no(e) {
    if (e.tag === j || e.tag === z) return e.stateNode
    throw new Error('getNodeFromInstance: Invalid argument.')
  }
  function $c(e) {
    return e[uv] || null
  }
  function cv(e, t) {
    e[uv] = t
  }
  function Aw(e) {
    var t = e[sv]
    return t === void 0 && (t = e[sv] = new Set()), t
  }
  var Ob = {},
    Mb = s.ReactDebugCurrentFrame
  function Pc(e) {
    if (e) {
      var t = e._owner,
        n = oi(e.type, e._source, t ? t.type : null)
      Mb.setExtraStackFrame(n)
    } else Mb.setExtraStackFrame(null)
  }
  function Ir(e, t, n, r, a) {
    {
      var l = Function.call.bind(En)
      for (var u in e)
        if (l(e, u)) {
          var c = void 0
          try {
            if (typeof e[u] != 'function') {
              var v = Error(
                (r || 'React class') +
                  ': ' +
                  n +
                  ' type `' +
                  u +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof e[u] +
                  '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
              )
              throw ((v.name = 'Invariant Violation'), v)
            }
            c = e[u](
              t,
              u,
              r,
              n,
              null,
              'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
            )
          } catch (g) {
            c = g
          }
          c &&
            !(c instanceof Error) &&
            (Pc(a),
            f(
              '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
              r || 'React class',
              n,
              u,
              typeof c
            ),
            Pc(null)),
            c instanceof Error &&
              !(c.message in Ob) &&
              ((Ob[c.message] = !0),
              Pc(a),
              f('Failed %s type: %s', n, c.message),
              Pc(null))
        }
    }
  }
  var fv = [],
    Bc
  Bc = []
  var Pa = -1
  function Ni(e) {
    return { current: e }
  }
  function Yn(e, t) {
    if (Pa < 0) {
      f('Unexpected pop.')
      return
    }
    t !== Bc[Pa] && f('Unexpected Fiber popped.'),
      (e.current = fv[Pa]),
      (fv[Pa] = null),
      (Bc[Pa] = null),
      Pa--
  }
  function Wn(e, t, n) {
    Pa++, (fv[Pa] = e.current), (Bc[Pa] = n), (e.current = t)
  }
  var dv
  dv = {}
  var wr = {}
  Object.freeze(wr)
  var Ba = Ni(wr),
    ca = Ni(!1),
    mv = wr
  function ro(e, t, n) {
    return n && fa(t) ? mv : Ba.current
  }
  function Lb(e, t, n) {
    {
      var r = e.stateNode
      ;(r.__reactInternalMemoizedUnmaskedChildContext = t),
        (r.__reactInternalMemoizedMaskedChildContext = n)
    }
  }
  function ao(e, t) {
    {
      var n = e.type,
        r = n.contextTypes
      if (!r) return wr
      var a = e.stateNode
      if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
        return a.__reactInternalMemoizedMaskedChildContext
      var l = {}
      for (var u in r) l[u] = t[u]
      {
        var c = Be(e) || 'Unknown'
        Ir(r, l, 'context', c)
      }
      return a && Lb(e, t, l), l
    }
  }
  function Vc() {
    return ca.current
  }
  function fa(e) {
    {
      var t = e.childContextTypes
      return t != null
    }
  }
  function Ic(e) {
    Yn(ca, e), Yn(Ba, e)
  }
  function vv(e) {
    Yn(ca, e), Yn(Ba, e)
  }
  function kb(e, t, n) {
    {
      if (Ba.current !== wr)
        throw new Error(
          'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.'
        )
      Wn(Ba, t, e), Wn(ca, n, e)
    }
  }
  function Ab(e, t, n) {
    {
      var r = e.stateNode,
        a = t.childContextTypes
      if (typeof r.getChildContext != 'function') {
        {
          var l = Be(e) || 'Unknown'
          dv[l] ||
            ((dv[l] = !0),
            f(
              '%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.',
              l,
              l
            ))
        }
        return n
      }
      var u = r.getChildContext()
      for (var c in u)
        if (!(c in a))
          throw new Error(
            (Be(e) || 'Unknown') +
              '.getChildContext(): key "' +
              c +
              '" is not defined in childContextTypes.'
          )
      {
        var v = Be(e) || 'Unknown'
        Ir(a, u, 'child context', v)
      }
      return Je({}, n, u)
    }
  }
  function Yc(e) {
    {
      var t = e.stateNode,
        n = (t && t.__reactInternalMemoizedMergedChildContext) || wr
      return (mv = Ba.current), Wn(Ba, n, e), Wn(ca, ca.current, e), !0
    }
  }
  function Ub(e, t, n) {
    {
      var r = e.stateNode
      if (!r)
        throw new Error(
          'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.'
        )
      if (n) {
        var a = Ab(e, t, mv)
        ;(r.__reactInternalMemoizedMergedChildContext = a),
          Yn(ca, e),
          Yn(Ba, e),
          Wn(Ba, a, e),
          Wn(ca, n, e)
      } else Yn(ca, e), Wn(ca, n, e)
    }
  }
  function Uw(e) {
    {
      if (!yE(e) || e.tag !== T)
        throw new Error(
          'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.'
        )
      var t = e
      do {
        switch (t.tag) {
          case M:
            return t.stateNode.context
          case T: {
            var n = t.type
            if (fa(n))
              return t.stateNode.__reactInternalMemoizedMergedChildContext
            break
          }
        }
        t = t.return
      } while (t !== null)
      throw new Error(
        'Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.'
      )
    }
  }
  var xi = 0,
    Wc = 1,
    Va = null,
    pv = !1,
    hv = !1
  function Fb(e) {
    Va === null ? (Va = [e]) : Va.push(e)
  }
  function Fw(e) {
    ;(pv = !0), Fb(e)
  }
  function jb() {
    pv && Si()
  }
  function Si() {
    if (!hv && Va !== null) {
      hv = !0
      var e = 0,
        t = Vr()
      try {
        var n = !0,
          r = Va
        for (_n(Cr); e < r.length; e++) {
          var a = r[e]
          do a = a(n)
          while (a !== null)
        }
        ;(Va = null), (pv = !1)
      } catch (l) {
        throw (Va !== null && (Va = Va.slice(e + 1)), og(uc, Si), l)
      } finally {
        _n(t), (hv = !1)
      }
    }
    return null
  }
  var io = [],
    lo = 0,
    Gc = null,
    qc = 0,
    Ar = [],
    Ur = 0,
    il = null,
    Ia = 1,
    Ya = ''
  function jw(e) {
    return ol(), (e.flags & Zy) !== De
  }
  function zw(e) {
    return ol(), qc
  }
  function Hw() {
    var e = Ya,
      t = Ia,
      n = t & ~$w(t)
    return n.toString(32) + e
  }
  function ll(e, t) {
    ol(), (io[lo++] = qc), (io[lo++] = Gc), (Gc = e), (qc = t)
  }
  function zb(e, t, n) {
    ol(), (Ar[Ur++] = Ia), (Ar[Ur++] = Ya), (Ar[Ur++] = il), (il = e)
    var r = Ia,
      a = Ya,
      l = Qc(r) - 1,
      u = r & ~(1 << l),
      c = n + 1,
      v = Qc(t) + l
    if (v > 30) {
      var g = l - (l % 5),
        b = (1 << g) - 1,
        D = (u & b).toString(32),
        w = u >> g,
        A = l - g,
        U = Qc(t) + A,
        $ = c << A,
        se = $ | w,
        Se = D + a
      ;(Ia = (1 << U) | se), (Ya = Se)
    } else {
      var Ne = c << l,
        rt = Ne | u,
        qe = a
      ;(Ia = (1 << v) | rt), (Ya = qe)
    }
  }
  function yv(e) {
    ol()
    var t = e.return
    if (t !== null) {
      var n = 1,
        r = 0
      ll(e, n), zb(e, n, r)
    }
  }
  function Qc(e) {
    return 32 - mg(e)
  }
  function $w(e) {
    return 1 << (Qc(e) - 1)
  }
  function gv(e) {
    for (; e === Gc; )
      (Gc = io[--lo]), (io[lo] = null), (qc = io[--lo]), (io[lo] = null)
    for (; e === il; )
      (il = Ar[--Ur]),
        (Ar[Ur] = null),
        (Ya = Ar[--Ur]),
        (Ar[Ur] = null),
        (Ia = Ar[--Ur]),
        (Ar[Ur] = null)
  }
  function Pw() {
    return ol(), il !== null ? { id: Ia, overflow: Ya } : null
  }
  function Bw(e, t) {
    ol(),
      (Ar[Ur++] = Ia),
      (Ar[Ur++] = Ya),
      (Ar[Ur++] = il),
      (Ia = t.id),
      (Ya = t.overflow),
      (il = e)
  }
  function ol() {
    kn() ||
      f(
        'Expected to be hydrating. This is a bug in React. Please file an issue.'
      )
  }
  var Ln = null,
    Fr = null,
    Yr = !1,
    ul = !1,
    Ei = null
  function Vw() {
    Yr &&
      f(
        'We should not be hydrating here. This is a bug in React. Please file a bug.'
      )
  }
  function Hb() {
    ul = !0
  }
  function Iw() {
    return ul
  }
  function Yw(e) {
    var t = e.stateNode.containerInfo
    return (Fr = sw(t)), (Ln = e), (Yr = !0), (Ei = null), (ul = !1), !0
  }
  function Ww(e, t, n) {
    return (
      (Fr = cw(t)),
      (Ln = e),
      (Yr = !0),
      (Ei = null),
      (ul = !1),
      n !== null && Bw(e, n),
      !0
    )
  }
  function $b(e, t) {
    switch (e.tag) {
      case M: {
        Nw(e.stateNode.containerInfo, t)
        break
      }
      case j: {
        var n = (e.mode & tt) !== _e
        Sw(e.type, e.memoizedProps, e.stateNode, t, n)
        break
      }
      case Z: {
        var r = e.memoizedState
        r.dehydrated !== null && xw(r.dehydrated, t)
        break
      }
    }
  }
  function Pb(e, t) {
    $b(e, t)
    var n = Q_()
    ;(n.stateNode = t), (n.return = e)
    var r = e.deletions
    r === null ? ((e.deletions = [n]), (e.flags |= Wi)) : r.push(n)
  }
  function bv(e, t) {
    {
      if (ul) return
      switch (e.tag) {
        case M: {
          var n = e.stateNode.containerInfo
          switch (t.tag) {
            case j:
              var r = t.type
              t.pendingProps, Ew(n, r)
              break
            case z:
              var a = t.pendingProps
              Cw(n, a)
              break
          }
          break
        }
        case j: {
          var l = e.type,
            u = e.memoizedProps,
            c = e.stateNode
          switch (t.tag) {
            case j: {
              var v = t.type,
                g = t.pendingProps,
                b = (e.mode & tt) !== _e
              ww(l, u, c, v, g, b)
              break
            }
            case z: {
              var D = t.pendingProps,
                w = (e.mode & tt) !== _e
              Dw(l, u, c, D, w)
              break
            }
          }
          break
        }
        case Z: {
          var A = e.memoizedState,
            U = A.dehydrated
          if (U !== null)
            switch (t.tag) {
              case j:
                var $ = t.type
                t.pendingProps, Rw(U, $)
                break
              case z:
                var se = t.pendingProps
                Tw(U, se)
                break
            }
          break
        }
        default:
          return
      }
    }
  }
  function Bb(e, t) {
    ;(t.flags = (t.flags & ~Ua) | ln), bv(e, t)
  }
  function Vb(e, t) {
    switch (e.tag) {
      case j: {
        var n = e.type
        e.pendingProps
        var r = rw(t, n)
        return r !== null ? ((e.stateNode = r), (Ln = e), (Fr = uw(r)), !0) : !1
      }
      case z: {
        var a = e.pendingProps,
          l = aw(t, a)
        return l !== null ? ((e.stateNode = l), (Ln = e), (Fr = null), !0) : !1
      }
      case Z: {
        var u = iw(t)
        if (u !== null) {
          var c = { dehydrated: u, treeContext: Pw(), retryLane: Sr }
          e.memoizedState = c
          var v = K_(u)
          return (v.return = e), (e.child = v), (Ln = e), (Fr = null), !0
        }
        return !1
      }
      default:
        return !1
    }
  }
  function Nv(e) {
    return (e.mode & tt) !== _e && (e.flags & pt) === De
  }
  function xv(e) {
    throw new Error(
      'Hydration failed because the initial UI does not match what was rendered on the server.'
    )
  }
  function Sv(e) {
    if (!!Yr) {
      var t = Fr
      if (!t) {
        Nv(e) && (bv(Ln, e), xv()), Bb(Ln, e), (Yr = !1), (Ln = e)
        return
      }
      var n = t
      if (!Vb(e, t)) {
        Nv(e) && (bv(Ln, e), xv()), (t = Bu(n))
        var r = Ln
        if (!t || !Vb(e, t)) {
          Bb(Ln, e), (Yr = !1), (Ln = e)
          return
        }
        Pb(r, n)
      }
    }
  }
  function Gw(e, t, n) {
    var r = e.stateNode,
      a = !ul,
      l = fw(r, e.type, e.memoizedProps, t, n, e, a)
    return (e.updateQueue = l), l !== null
  }
  function qw(e) {
    var t = e.stateNode,
      n = e.memoizedProps,
      r = dw(t, n, e)
    if (r) {
      var a = Ln
      if (a !== null)
        switch (a.tag) {
          case M: {
            var l = a.stateNode.containerInfo,
              u = (a.mode & tt) !== _e
            gw(l, t, n, u)
            break
          }
          case j: {
            var c = a.type,
              v = a.memoizedProps,
              g = a.stateNode,
              b = (a.mode & tt) !== _e
            bw(c, v, g, t, n, b)
            break
          }
        }
    }
    return r
  }
  function Qw(e) {
    var t = e.memoizedState,
      n = t !== null ? t.dehydrated : null
    if (!n)
      throw new Error(
        'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
      )
    mw(n, e)
  }
  function Kw(e) {
    var t = e.memoizedState,
      n = t !== null ? t.dehydrated : null
    if (!n)
      throw new Error(
        'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
      )
    return vw(n)
  }
  function Ib(e) {
    for (
      var t = e.return;
      t !== null && t.tag !== j && t.tag !== M && t.tag !== Z;

    )
      t = t.return
    Ln = t
  }
  function Kc(e) {
    if (e !== Ln) return !1
    if (!Yr) return Ib(e), (Yr = !0), !1
    if (
      e.tag !== M &&
      (e.tag !== j || (yw(e.type) && !rv(e.type, e.memoizedProps)))
    ) {
      var t = Fr
      if (t)
        if (Nv(e)) Yb(e), xv()
        else for (; t; ) Pb(e, t), (t = Bu(t))
    }
    return (
      Ib(e), e.tag === Z ? (Fr = Kw(e)) : (Fr = Ln ? Bu(e.stateNode) : null), !0
    )
  }
  function Xw() {
    return Yr && Fr !== null
  }
  function Yb(e) {
    for (var t = Fr; t; ) $b(e, t), (t = Bu(t))
  }
  function oo() {
    ;(Ln = null), (Fr = null), (Yr = !1), (ul = !1)
  }
  function Wb() {
    Ei !== null && ($N(Ei), (Ei = null))
  }
  function kn() {
    return Yr
  }
  function Ev(e) {
    Ei === null ? (Ei = [e]) : Ei.push(e)
  }
  var Jw = s.ReactCurrentBatchConfig,
    Zw = null
  function eD() {
    return Jw.transition
  }
  var Wr = {
    recordUnsafeLifecycleWarnings: function (e, t) {},
    flushPendingUnsafeLifecycleWarnings: function () {},
    recordLegacyContextWarning: function (e, t) {},
    flushLegacyContextWarning: function () {},
    discardPendingWarnings: function () {},
  }
  {
    var tD = function (e) {
        for (var t = null, n = e; n !== null; )
          n.mode & on && (t = n), (n = n.return)
        return t
      },
      sl = function (e) {
        var t = []
        return (
          e.forEach(function (n) {
            t.push(n)
          }),
          t.sort().join(', ')
        )
      },
      Wu = [],
      Gu = [],
      qu = [],
      Qu = [],
      Ku = [],
      Xu = [],
      cl = new Set()
    ;(Wr.recordUnsafeLifecycleWarnings = function (e, t) {
      cl.has(e.type) ||
        (typeof t.componentWillMount == 'function' &&
          t.componentWillMount.__suppressDeprecationWarning !== !0 &&
          Wu.push(e),
        e.mode & on &&
          typeof t.UNSAFE_componentWillMount == 'function' &&
          Gu.push(e),
        typeof t.componentWillReceiveProps == 'function' &&
          t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 &&
          qu.push(e),
        e.mode & on &&
          typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
          Qu.push(e),
        typeof t.componentWillUpdate == 'function' &&
          t.componentWillUpdate.__suppressDeprecationWarning !== !0 &&
          Ku.push(e),
        e.mode & on &&
          typeof t.UNSAFE_componentWillUpdate == 'function' &&
          Xu.push(e))
    }),
      (Wr.flushPendingUnsafeLifecycleWarnings = function () {
        var e = new Set()
        Wu.length > 0 &&
          (Wu.forEach(function (w) {
            e.add(Be(w) || 'Component'), cl.add(w.type)
          }),
          (Wu = []))
        var t = new Set()
        Gu.length > 0 &&
          (Gu.forEach(function (w) {
            t.add(Be(w) || 'Component'), cl.add(w.type)
          }),
          (Gu = []))
        var n = new Set()
        qu.length > 0 &&
          (qu.forEach(function (w) {
            n.add(Be(w) || 'Component'), cl.add(w.type)
          }),
          (qu = []))
        var r = new Set()
        Qu.length > 0 &&
          (Qu.forEach(function (w) {
            r.add(Be(w) || 'Component'), cl.add(w.type)
          }),
          (Qu = []))
        var a = new Set()
        Ku.length > 0 &&
          (Ku.forEach(function (w) {
            a.add(Be(w) || 'Component'), cl.add(w.type)
          }),
          (Ku = []))
        var l = new Set()
        if (
          (Xu.length > 0 &&
            (Xu.forEach(function (w) {
              l.add(Be(w) || 'Component'), cl.add(w.type)
            }),
            (Xu = [])),
          t.size > 0)
        ) {
          var u = sl(t)
          f(
            `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
            u
          )
        }
        if (r.size > 0) {
          var c = sl(r)
          f(
            `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,
            c
          )
        }
        if (l.size > 0) {
          var v = sl(l)
          f(
            `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
            v
          )
        }
        if (e.size > 0) {
          var g = sl(e)
          y(
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            g
          )
        }
        if (n.size > 0) {
          var b = sl(n)
          y(
            `componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            b
          )
        }
        if (a.size > 0) {
          var D = sl(a)
          y(
            `componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            D
          )
        }
      })
    var Xc = new Map(),
      Gb = new Set()
    ;(Wr.recordLegacyContextWarning = function (e, t) {
      var n = tD(e)
      if (n === null) {
        f(
          'Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.'
        )
        return
      }
      if (!Gb.has(e.type)) {
        var r = Xc.get(n)
        ;(e.type.contextTypes != null ||
          e.type.childContextTypes != null ||
          (t !== null && typeof t.getChildContext == 'function')) &&
          (r === void 0 && ((r = []), Xc.set(n, r)), r.push(e))
      }
    }),
      (Wr.flushLegacyContextWarning = function () {
        Xc.forEach(function (e, t) {
          if (e.length !== 0) {
            var n = e[0],
              r = new Set()
            e.forEach(function (l) {
              r.add(Be(l) || 'Component'), Gb.add(l.type)
            })
            var a = sl(r)
            try {
              Vt(n),
                f(
                  `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                  a
                )
            } finally {
              Rn()
            }
          }
        })
      }),
      (Wr.discardPendingWarnings = function () {
        ;(Wu = []),
          (Gu = []),
          (qu = []),
          (Qu = []),
          (Ku = []),
          (Xu = []),
          (Xc = new Map())
      })
  }
  function Gr(e, t) {
    if (e && e.defaultProps) {
      var n = Je({}, t),
        r = e.defaultProps
      for (var a in r) n[a] === void 0 && (n[a] = r[a])
      return n
    }
    return t
  }
  var Cv = Ni(null),
    Rv
  Rv = {}
  var Jc = null,
    uo = null,
    Tv = null,
    Zc = !1
  function ef() {
    ;(Jc = null), (uo = null), (Tv = null), (Zc = !1)
  }
  function qb() {
    Zc = !0
  }
  function Qb() {
    Zc = !1
  }
  function Kb(e, t, n) {
    Wn(Cv, t._currentValue, e),
      (t._currentValue = n),
      t._currentRenderer !== void 0 &&
        t._currentRenderer !== null &&
        t._currentRenderer !== Rv &&
        f(
          'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.'
        ),
      (t._currentRenderer = Rv)
  }
  function wv(e, t) {
    var n = Cv.current
    Yn(Cv, t), (e._currentValue = n)
  }
  function Dv(e, t, n) {
    for (var r = e; r !== null; ) {
      var a = r.alternate
      if (
        (Gl(r.childLanes, t)
          ? a !== null &&
            !Gl(a.childLanes, t) &&
            (a.childLanes = We(a.childLanes, t))
          : ((r.childLanes = We(r.childLanes, t)),
            a !== null && (a.childLanes = We(a.childLanes, t))),
        r === n)
      )
        break
      r = r.return
    }
    r !== n &&
      f(
        'Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.'
      )
  }
  function nD(e, t, n) {
    rD(e, t, n)
  }
  function rD(e, t, n) {
    var r = e.child
    for (r !== null && (r.return = e); r !== null; ) {
      var a = void 0,
        l = r.dependencies
      if (l !== null) {
        a = r.child
        for (var u = l.firstContext; u !== null; ) {
          if (u.context === t) {
            if (r.tag === T) {
              var c = hu(n),
                v = Wa(Lt, c)
              v.tag = nf
              var g = r.updateQueue
              if (g !== null) {
                var b = g.shared,
                  D = b.pending
                D === null ? (v.next = v) : ((v.next = D.next), (D.next = v)),
                  (b.pending = v)
              }
            }
            r.lanes = We(r.lanes, n)
            var w = r.alternate
            w !== null && (w.lanes = We(w.lanes, n)),
              Dv(r.return, n, e),
              (l.lanes = We(l.lanes, n))
            break
          }
          u = u.next
        }
      } else if (r.tag === X) a = r.type === e.type ? null : r.child
      else if (r.tag === Ce) {
        var A = r.return
        if (A === null)
          throw new Error(
            'We just came from a parent so we must have had a parent. This is a bug in React.'
          )
        A.lanes = We(A.lanes, n)
        var U = A.alternate
        U !== null && (U.lanes = We(U.lanes, n)), Dv(A, n, e), (a = r.sibling)
      } else a = r.child
      if (a !== null) a.return = r
      else
        for (a = r; a !== null; ) {
          if (a === e) {
            a = null
            break
          }
          var $ = a.sibling
          if ($ !== null) {
            ;($.return = a.return), (a = $)
            break
          }
          a = a.return
        }
      r = a
    }
  }
  function so(e, t) {
    ;(Jc = e), (uo = null), (Tv = null)
    var n = e.dependencies
    if (n !== null) {
      var r = n.firstContext
      r !== null && (Er(n.lanes, t) && fs(), (n.firstContext = null))
    }
  }
  function un(e) {
    Zc &&
      f(
        'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
      )
    var t = e._currentValue
    if (Tv !== e) {
      var n = { context: e, memoizedValue: t, next: null }
      if (uo === null) {
        if (Jc === null)
          throw new Error(
            'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
          )
        ;(uo = n), (Jc.dependencies = { lanes: W, firstContext: n })
      } else uo = uo.next = n
    }
    return t
  }
  var fl = null
  function _v(e) {
    fl === null ? (fl = [e]) : fl.push(e)
  }
  function aD() {
    if (fl !== null) {
      for (var e = 0; e < fl.length; e++) {
        var t = fl[e],
          n = t.interleaved
        if (n !== null) {
          t.interleaved = null
          var r = n.next,
            a = t.pending
          if (a !== null) {
            var l = a.next
            ;(a.next = r), (n.next = l)
          }
          t.pending = n
        }
      }
      fl = null
    }
  }
  function Xb(e, t, n, r) {
    var a = t.interleaved
    return (
      a === null ? ((n.next = n), _v(t)) : ((n.next = a.next), (a.next = n)),
      (t.interleaved = n),
      tf(e, r)
    )
  }
  function iD(e, t, n, r) {
    var a = t.interleaved
    a === null ? ((n.next = n), _v(t)) : ((n.next = a.next), (a.next = n)),
      (t.interleaved = n)
  }
  function lD(e, t, n, r) {
    var a = t.interleaved
    return (
      a === null ? ((n.next = n), _v(t)) : ((n.next = a.next), (a.next = n)),
      (t.interleaved = n),
      tf(e, r)
    )
  }
  function fr(e, t) {
    return tf(e, t)
  }
  var oD = tf
  function tf(e, t) {
    e.lanes = We(e.lanes, t)
    var n = e.alternate
    n !== null && (n.lanes = We(n.lanes, t)),
      n === null && (e.flags & (ln | Ua)) !== De && JN(e)
    for (var r = e, a = e.return; a !== null; )
      (a.childLanes = We(a.childLanes, t)),
        (n = a.alternate),
        n !== null
          ? (n.childLanes = We(n.childLanes, t))
          : (a.flags & (ln | Ua)) !== De && JN(e),
        (r = a),
        (a = a.return)
    if (r.tag === M) {
      var l = r.stateNode
      return l
    } else return null
  }
  var Jb = 0,
    Zb = 1,
    nf = 2,
    Ov = 3,
    rf = !1,
    Mv,
    af
  ;(Mv = !1), (af = null)
  function Lv(e) {
    var t = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: W },
      effects: null,
    }
    e.updateQueue = t
  }
  function e0(e, t) {
    var n = t.updateQueue,
      r = e.updateQueue
    if (n === r) {
      var a = {
        baseState: r.baseState,
        firstBaseUpdate: r.firstBaseUpdate,
        lastBaseUpdate: r.lastBaseUpdate,
        shared: r.shared,
        effects: r.effects,
      }
      t.updateQueue = a
    }
  }
  function Wa(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: Jb,
      payload: null,
      callback: null,
      next: null,
    }
    return n
  }
  function Ci(e, t, n) {
    var r = e.updateQueue
    if (r === null) return null
    var a = r.shared
    if (
      (af === a &&
        !Mv &&
        (f(
          'An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.'
        ),
        (Mv = !0)),
      o_())
    ) {
      var l = a.pending
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (a.pending = t),
        oD(e, n)
      )
    } else return lD(e, a, t, n)
  }
  function lf(e, t, n) {
    var r = t.updateQueue
    if (r !== null) {
      var a = r.shared
      if (yg(n)) {
        var l = a.lanes
        l = bg(l, e.pendingLanes)
        var u = We(l, n)
        ;(a.lanes = u), _m(e, u)
      }
    }
  }
  function kv(e, t) {
    var n = e.updateQueue,
      r = e.alternate
    if (r !== null) {
      var a = r.updateQueue
      if (n === a) {
        var l = null,
          u = null,
          c = n.firstBaseUpdate
        if (c !== null) {
          var v = c
          do {
            var g = {
              eventTime: v.eventTime,
              lane: v.lane,
              tag: v.tag,
              payload: v.payload,
              callback: v.callback,
              next: null,
            }
            u === null ? (l = u = g) : ((u.next = g), (u = g)), (v = v.next)
          } while (v !== null)
          u === null ? (l = u = t) : ((u.next = t), (u = t))
        } else l = u = t
        ;(n = {
          baseState: a.baseState,
          firstBaseUpdate: l,
          lastBaseUpdate: u,
          shared: a.shared,
          effects: a.effects,
        }),
          (e.updateQueue = n)
        return
      }
    }
    var b = n.lastBaseUpdate
    b === null ? (n.firstBaseUpdate = t) : (b.next = t), (n.lastBaseUpdate = t)
  }
  function uD(e, t, n, r, a, l) {
    switch (n.tag) {
      case Zb: {
        var u = n.payload
        if (typeof u == 'function') {
          qb()
          var c = u.call(l, r, a)
          {
            if (e.mode & on) {
              wn(!0)
              try {
                u.call(l, r, a)
              } finally {
                wn(!1)
              }
            }
            Qb()
          }
          return c
        }
        return u
      }
      case Ov:
        e.flags = (e.flags & ~tr) | pt
      case Jb: {
        var v = n.payload,
          g
        if (typeof v == 'function') {
          qb(), (g = v.call(l, r, a))
          {
            if (e.mode & on) {
              wn(!0)
              try {
                v.call(l, r, a)
              } finally {
                wn(!1)
              }
            }
            Qb()
          }
        } else g = v
        return g == null ? r : Je({}, r, g)
      }
      case nf:
        return (rf = !0), r
    }
    return r
  }
  function of(e, t, n, r) {
    var a = e.updateQueue
    ;(rf = !1), (af = a.shared)
    var l = a.firstBaseUpdate,
      u = a.lastBaseUpdate,
      c = a.shared.pending
    if (c !== null) {
      a.shared.pending = null
      var v = c,
        g = v.next
      ;(v.next = null), u === null ? (l = g) : (u.next = g), (u = v)
      var b = e.alternate
      if (b !== null) {
        var D = b.updateQueue,
          w = D.lastBaseUpdate
        w !== u &&
          (w === null ? (D.firstBaseUpdate = g) : (w.next = g),
          (D.lastBaseUpdate = v))
      }
    }
    if (l !== null) {
      var A = a.baseState,
        U = W,
        $ = null,
        se = null,
        Se = null,
        Ne = l
      do {
        var rt = Ne.lane,
          qe = Ne.eventTime
        if (Gl(r, rt)) {
          if (Se !== null) {
            var P = {
              eventTime: qe,
              lane: Dn,
              tag: Ne.tag,
              payload: Ne.payload,
              callback: Ne.callback,
              next: null,
            }
            Se = Se.next = P
          }
          A = uD(e, a, Ne, A, t, n)
          var k = Ne.callback
          if (k !== null && Ne.lane !== Dn) {
            e.flags |= Kd
            var q = a.effects
            q === null ? (a.effects = [Ne]) : q.push(Ne)
          }
        } else {
          var L = {
            eventTime: qe,
            lane: rt,
            tag: Ne.tag,
            payload: Ne.payload,
            callback: Ne.callback,
            next: null,
          }
          Se === null ? ((se = Se = L), ($ = A)) : (Se = Se.next = L),
            (U = We(U, rt))
        }
        if (((Ne = Ne.next), Ne === null)) {
          if (((c = a.shared.pending), c === null)) break
          var ce = c,
            ie = ce.next
          ;(ce.next = null),
            (Ne = ie),
            (a.lastBaseUpdate = ce),
            (a.shared.pending = null)
        }
      } while (!0)
      Se === null && ($ = A),
        (a.baseState = $),
        (a.firstBaseUpdate = se),
        (a.lastBaseUpdate = Se)
      var Me = a.shared.interleaved
      if (Me !== null) {
        var ze = Me
        do (U = We(U, ze.lane)), (ze = ze.next)
        while (ze !== Me)
      } else l === null && (a.shared.lanes = W)
      Es(U), (e.lanes = U), (e.memoizedState = A)
    }
    af = null
  }
  function sD(e, t) {
    if (typeof e != 'function')
      throw new Error(
        'Invalid argument passed as callback. Expected a function. Instead ' +
          ('received: ' + e)
      )
    e.call(t)
  }
  function t0() {
    rf = !1
  }
  function uf() {
    return rf
  }
  function n0(e, t, n) {
    var r = t.effects
    if (((t.effects = null), r !== null))
      for (var a = 0; a < r.length; a++) {
        var l = r[a],
          u = l.callback
        u !== null && ((l.callback = null), sD(u, n))
      }
  }
  var Av = {},
    r0 = new i.Component().refs,
    Uv,
    Fv,
    jv,
    zv,
    Hv,
    a0,
    sf,
    $v,
    Pv,
    Bv
  {
    ;(Uv = new Set()),
      (Fv = new Set()),
      (jv = new Set()),
      (zv = new Set()),
      ($v = new Set()),
      (Hv = new Set()),
      (Pv = new Set()),
      (Bv = new Set())
    var i0 = new Set()
    ;(sf = function (e, t) {
      if (!(e === null || typeof e == 'function')) {
        var n = t + '_' + e
        i0.has(n) ||
          (i0.add(n),
          f(
            '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
            t,
            e
          ))
      }
    }),
      (a0 = function (e, t) {
        if (t === void 0) {
          var n = mt(e) || 'Component'
          Hv.has(n) ||
            (Hv.add(n),
            f(
              '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.',
              n
            ))
        }
      }),
      Object.defineProperty(Av, '_processChildContext', {
        enumerable: !1,
        value: function () {
          throw new Error(
            "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."
          )
        },
      }),
      Object.freeze(Av)
  }
  function Vv(e, t, n, r) {
    var a = e.memoizedState,
      l = n(r, a)
    {
      if (e.mode & on) {
        wn(!0)
        try {
          l = n(r, a)
        } finally {
          wn(!1)
        }
      }
      a0(t, l)
    }
    var u = l == null ? a : Je({}, a, l)
    if (((e.memoizedState = u), e.lanes === W)) {
      var c = e.updateQueue
      c.baseState = u
    }
  }
  var Iv = {
    isMounted: gE,
    enqueueSetState: function (e, t, n) {
      var r = Hl(e),
        a = ar(),
        l = Li(r),
        u = Wa(a, l)
      ;(u.payload = t), n != null && (sf(n, 'setState'), (u.callback = n))
      var c = Ci(r, u, l)
      c !== null && (gn(c, r, l, a), lf(c, r, l)), am(r, l)
    },
    enqueueReplaceState: function (e, t, n) {
      var r = Hl(e),
        a = ar(),
        l = Li(r),
        u = Wa(a, l)
      ;(u.tag = Zb),
        (u.payload = t),
        n != null && (sf(n, 'replaceState'), (u.callback = n))
      var c = Ci(r, u, l)
      c !== null && (gn(c, r, l, a), lf(c, r, l)), am(r, l)
    },
    enqueueForceUpdate: function (e, t) {
      var n = Hl(e),
        r = ar(),
        a = Li(n),
        l = Wa(r, a)
      ;(l.tag = nf), t != null && (sf(t, 'forceUpdate'), (l.callback = t))
      var u = Ci(n, l, a)
      u !== null && (gn(u, n, a, r), lf(u, n, a)), QE(n, a)
    },
  }
  function l0(e, t, n, r, a, l, u) {
    var c = e.stateNode
    if (typeof c.shouldComponentUpdate == 'function') {
      var v = c.shouldComponentUpdate(r, l, u)
      {
        if (e.mode & on) {
          wn(!0)
          try {
            v = c.shouldComponentUpdate(r, l, u)
          } finally {
            wn(!1)
          }
        }
        v === void 0 &&
          f(
            '%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.',
            mt(t) || 'Component'
          )
      }
      return v
    }
    return t.prototype && t.prototype.isPureReactComponent
      ? !Mu(n, r) || !Mu(a, l)
      : !0
  }
  function cD(e, t, n) {
    var r = e.stateNode
    {
      var a = mt(t) || 'Component',
        l = r.render
      l ||
        (t.prototype && typeof t.prototype.render == 'function'
          ? f(
              '%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?',
              a
            )
          : f(
              '%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.',
              a
            )),
        r.getInitialState &&
          !r.getInitialState.isReactClassApproved &&
          !r.state &&
          f(
            'getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?',
            a
          ),
        r.getDefaultProps &&
          !r.getDefaultProps.isReactClassApproved &&
          f(
            'getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.',
            a
          ),
        r.propTypes &&
          f(
            'propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.',
            a
          ),
        r.contextType &&
          f(
            'contextType was defined as an instance property on %s. Use a static property to define contextType instead.',
            a
          ),
        r.contextTypes &&
          f(
            'contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.',
            a
          ),
        t.contextType &&
          t.contextTypes &&
          !Pv.has(t) &&
          (Pv.add(t),
          f(
            '%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.',
            a
          )),
        typeof r.componentShouldUpdate == 'function' &&
          f(
            '%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.',
            a
          ),
        t.prototype &&
          t.prototype.isPureReactComponent &&
          typeof r.shouldComponentUpdate < 'u' &&
          f(
            '%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.',
            mt(t) || 'A pure component'
          ),
        typeof r.componentDidUnmount == 'function' &&
          f(
            '%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?',
            a
          ),
        typeof r.componentDidReceiveProps == 'function' &&
          f(
            '%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().',
            a
          ),
        typeof r.componentWillRecieveProps == 'function' &&
          f(
            '%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
            a
          ),
        typeof r.UNSAFE_componentWillRecieveProps == 'function' &&
          f(
            '%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',
            a
          )
      var u = r.props !== n
      r.props !== void 0 &&
        u &&
        f(
          "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          a,
          a
        ),
        r.defaultProps &&
          f(
            'Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.',
            a,
            a
          ),
        typeof r.getSnapshotBeforeUpdate == 'function' &&
          typeof r.componentDidUpdate != 'function' &&
          !jv.has(t) &&
          (jv.add(t),
          f(
            '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.',
            mt(t)
          )),
        typeof r.getDerivedStateFromProps == 'function' &&
          f(
            '%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
            a
          ),
        typeof r.getDerivedStateFromError == 'function' &&
          f(
            '%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
            a
          ),
        typeof t.getSnapshotBeforeUpdate == 'function' &&
          f(
            '%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.',
            a
          )
      var c = r.state
      c &&
        (typeof c != 'object' || vt(c)) &&
        f('%s.state: must be set to an object or null', a),
        typeof r.getChildContext == 'function' &&
          typeof t.childContextTypes != 'object' &&
          f(
            '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',
            a
          )
    }
  }
  function o0(e, t) {
    ;(t.updater = Iv),
      (e.stateNode = t),
      mE(t, e),
      (t._reactInternalInstance = Av)
  }
  function u0(e, t, n) {
    var r = !1,
      a = wr,
      l = wr,
      u = t.contextType
    if ('contextType' in t) {
      var c =
        u === null ||
        (u !== void 0 && u.$$typeof === dt && u._context === void 0)
      if (!c && !Bv.has(t)) {
        Bv.add(t)
        var v = ''
        u === void 0
          ? (v =
              ' However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.')
          : typeof u != 'object'
          ? (v = ' However, it is set to a ' + typeof u + '.')
          : u.$$typeof === Ke
          ? (v = ' Did you accidentally pass the Context.Provider instead?')
          : u._context !== void 0
          ? (v = ' Did you accidentally pass the Context.Consumer instead?')
          : (v =
              ' However, it is set to an object with keys {' +
              Object.keys(u).join(', ') +
              '}.'),
          f(
            '%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s',
            mt(t) || 'Component',
            v
          )
      }
    }
    if (typeof u == 'object' && u !== null) l = un(u)
    else {
      a = ro(e, t, !0)
      var g = t.contextTypes
      ;(r = g != null), (l = r ? ao(e, a) : wr)
    }
    var b = new t(n, l)
    if (e.mode & on) {
      wn(!0)
      try {
        b = new t(n, l)
      } finally {
        wn(!1)
      }
    }
    var D = (e.memoizedState =
      b.state !== null && b.state !== void 0 ? b.state : null)
    o0(e, b)
    {
      if (typeof t.getDerivedStateFromProps == 'function' && D === null) {
        var w = mt(t) || 'Component'
        Fv.has(w) ||
          (Fv.add(w),
          f(
            '`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',
            w,
            b.state === null ? 'null' : 'undefined',
            w
          ))
      }
      if (
        typeof t.getDerivedStateFromProps == 'function' ||
        typeof b.getSnapshotBeforeUpdate == 'function'
      ) {
        var A = null,
          U = null,
          $ = null
        if (
          (typeof b.componentWillMount == 'function' &&
          b.componentWillMount.__suppressDeprecationWarning !== !0
            ? (A = 'componentWillMount')
            : typeof b.UNSAFE_componentWillMount == 'function' &&
              (A = 'UNSAFE_componentWillMount'),
          typeof b.componentWillReceiveProps == 'function' &&
          b.componentWillReceiveProps.__suppressDeprecationWarning !== !0
            ? (U = 'componentWillReceiveProps')
            : typeof b.UNSAFE_componentWillReceiveProps == 'function' &&
              (U = 'UNSAFE_componentWillReceiveProps'),
          typeof b.componentWillUpdate == 'function' &&
          b.componentWillUpdate.__suppressDeprecationWarning !== !0
            ? ($ = 'componentWillUpdate')
            : typeof b.UNSAFE_componentWillUpdate == 'function' &&
              ($ = 'UNSAFE_componentWillUpdate'),
          A !== null || U !== null || $ !== null)
        ) {
          var se = mt(t) || 'Component',
            Se =
              typeof t.getDerivedStateFromProps == 'function'
                ? 'getDerivedStateFromProps()'
                : 'getSnapshotBeforeUpdate()'
          zv.has(se) ||
            (zv.add(se),
            f(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
              se,
              Se,
              A !== null
                ? `
  ` + A
                : '',
              U !== null
                ? `
  ` + U
                : '',
              $ !== null
                ? `
  ` + $
                : ''
            ))
        }
      }
    }
    return r && Lb(e, a, l), b
  }
  function fD(e, t) {
    var n = t.state
    typeof t.componentWillMount == 'function' && t.componentWillMount(),
      typeof t.UNSAFE_componentWillMount == 'function' &&
        t.UNSAFE_componentWillMount(),
      n !== t.state &&
        (f(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          Be(e) || 'Component'
        ),
        Iv.enqueueReplaceState(t, t.state, null))
  }
  function s0(e, t, n, r) {
    var a = t.state
    if (
      (typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== a)
    ) {
      {
        var l = Be(e) || 'Component'
        Uv.has(l) ||
          (Uv.add(l),
          f(
            "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
            l
          ))
      }
      Iv.enqueueReplaceState(t, t.state, null)
    }
  }
  function Yv(e, t, n, r) {
    cD(e, t, n)
    var a = e.stateNode
    ;(a.props = n), (a.state = e.memoizedState), (a.refs = r0), Lv(e)
    var l = t.contextType
    if (typeof l == 'object' && l !== null) a.context = un(l)
    else {
      var u = ro(e, t, !0)
      a.context = ao(e, u)
    }
    {
      if (a.state === n) {
        var c = mt(t) || 'Component'
        $v.has(c) ||
          ($v.add(c),
          f(
            "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
            c
          ))
      }
      e.mode & on && Wr.recordLegacyContextWarning(e, a),
        Wr.recordUnsafeLifecycleWarnings(e, a)
    }
    a.state = e.memoizedState
    var v = t.getDerivedStateFromProps
    if (
      (typeof v == 'function' && (Vv(e, t, v, n), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps != 'function' &&
        typeof a.getSnapshotBeforeUpdate != 'function' &&
        (typeof a.UNSAFE_componentWillMount == 'function' ||
          typeof a.componentWillMount == 'function') &&
        (fD(e, a), of(e, n, a, r), (a.state = e.memoizedState)),
      typeof a.componentDidMount == 'function')
    ) {
      var g = it
      ;(g |= Qi), (e.mode & ua) !== _e && (g |= Fa), (e.flags |= g)
    }
  }
  function dD(e, t, n, r) {
    var a = e.stateNode,
      l = e.memoizedProps
    a.props = l
    var u = a.context,
      c = t.contextType,
      v = wr
    if (typeof c == 'object' && c !== null) v = un(c)
    else {
      var g = ro(e, t, !0)
      v = ao(e, g)
    }
    var b = t.getDerivedStateFromProps,
      D =
        typeof b == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    !D &&
      (typeof a.UNSAFE_componentWillReceiveProps == 'function' ||
        typeof a.componentWillReceiveProps == 'function') &&
      (l !== n || u !== v) &&
      s0(e, a, n, v),
      t0()
    var w = e.memoizedState,
      A = (a.state = w)
    if (
      (of(e, n, a, r),
      (A = e.memoizedState),
      l === n && w === A && !Vc() && !uf())
    ) {
      if (typeof a.componentDidMount == 'function') {
        var U = it
        ;(U |= Qi), (e.mode & ua) !== _e && (U |= Fa), (e.flags |= U)
      }
      return !1
    }
    typeof b == 'function' && (Vv(e, t, b, n), (A = e.memoizedState))
    var $ = uf() || l0(e, t, l, n, w, A, v)
    if ($) {
      if (
        (!D &&
          (typeof a.UNSAFE_componentWillMount == 'function' ||
            typeof a.componentWillMount == 'function') &&
          (typeof a.componentWillMount == 'function' && a.componentWillMount(),
          typeof a.UNSAFE_componentWillMount == 'function' &&
            a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == 'function')
      ) {
        var se = it
        ;(se |= Qi), (e.mode & ua) !== _e && (se |= Fa), (e.flags |= se)
      }
    } else {
      if (typeof a.componentDidMount == 'function') {
        var Se = it
        ;(Se |= Qi), (e.mode & ua) !== _e && (Se |= Fa), (e.flags |= Se)
      }
      ;(e.memoizedProps = n), (e.memoizedState = A)
    }
    return (a.props = n), (a.state = A), (a.context = v), $
  }
  function mD(e, t, n, r, a) {
    var l = t.stateNode
    e0(e, t)
    var u = t.memoizedProps,
      c = t.type === t.elementType ? u : Gr(t.type, u)
    l.props = c
    var v = t.pendingProps,
      g = l.context,
      b = n.contextType,
      D = wr
    if (typeof b == 'object' && b !== null) D = un(b)
    else {
      var w = ro(t, n, !0)
      D = ao(t, w)
    }
    var A = n.getDerivedStateFromProps,
      U =
        typeof A == 'function' || typeof l.getSnapshotBeforeUpdate == 'function'
    !U &&
      (typeof l.UNSAFE_componentWillReceiveProps == 'function' ||
        typeof l.componentWillReceiveProps == 'function') &&
      (u !== v || g !== D) &&
      s0(t, l, r, D),
      t0()
    var $ = t.memoizedState,
      se = (l.state = $)
    if (
      (of(t, r, l, a),
      (se = t.memoizedState),
      u === v && $ === se && !Vc() && !uf() && !tn)
    )
      return (
        typeof l.componentDidUpdate == 'function' &&
          (u !== e.memoizedProps || $ !== e.memoizedState) &&
          (t.flags |= it),
        typeof l.getSnapshotBeforeUpdate == 'function' &&
          (u !== e.memoizedProps || $ !== e.memoizedState) &&
          (t.flags |= Gi),
        !1
      )
    typeof A == 'function' && (Vv(t, n, A, r), (se = t.memoizedState))
    var Se = uf() || l0(t, n, c, r, $, se, D) || tn
    return (
      Se
        ? (!U &&
            (typeof l.UNSAFE_componentWillUpdate == 'function' ||
              typeof l.componentWillUpdate == 'function') &&
            (typeof l.componentWillUpdate == 'function' &&
              l.componentWillUpdate(r, se, D),
            typeof l.UNSAFE_componentWillUpdate == 'function' &&
              l.UNSAFE_componentWillUpdate(r, se, D)),
          typeof l.componentDidUpdate == 'function' && (t.flags |= it),
          typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= Gi))
        : (typeof l.componentDidUpdate == 'function' &&
            (u !== e.memoizedProps || $ !== e.memoizedState) &&
            (t.flags |= it),
          typeof l.getSnapshotBeforeUpdate == 'function' &&
            (u !== e.memoizedProps || $ !== e.memoizedState) &&
            (t.flags |= Gi),
          (t.memoizedProps = r),
          (t.memoizedState = se)),
      (l.props = r),
      (l.state = se),
      (l.context = D),
      Se
    )
  }
  var Wv,
    Gv,
    qv,
    Qv,
    Kv,
    c0 = function (e, t) {}
  ;(Wv = !1),
    (Gv = !1),
    (qv = {}),
    (Qv = {}),
    (Kv = {}),
    (c0 = function (e, t) {
      if (
        !(e === null || typeof e != 'object') &&
        !(!e._store || e._store.validated || e.key != null)
      ) {
        if (typeof e._store != 'object')
          throw new Error(
            'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.'
          )
        e._store.validated = !0
        var n = Be(t) || 'Component'
        Qv[n] ||
          ((Qv[n] = !0),
          f(
            'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'
          ))
      }
    })
  function Ju(e, t, n) {
    var r = n.ref
    if (r !== null && typeof r != 'function' && typeof r != 'object') {
      if (
        (e.mode & on || Nn) &&
        !(n._owner && n._self && n._owner.stateNode !== n._self)
      ) {
        var a = Be(e) || 'Component'
        qv[a] ||
          (f(
            'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            r
          ),
          (qv[a] = !0))
      }
      if (n._owner) {
        var l = n._owner,
          u
        if (l) {
          var c = l
          if (c.tag !== T)
            throw new Error(
              'Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref'
            )
          u = c.stateNode
        }
        if (!u)
          throw new Error(
            'Missing owner for string ref ' +
              r +
              '. This error is likely caused by a bug in React. Please file an issue.'
          )
        var v = u
        V(r, 'ref')
        var g = '' + r
        if (
          t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === g
        )
          return t.ref
        var b = function (D) {
          var w = v.refs
          w === r0 && (w = v.refs = {}), D === null ? delete w[g] : (w[g] = D)
        }
        return (b._stringRef = g), b
      } else {
        if (typeof r != 'string')
          throw new Error(
            'Expected ref to be a function, a string, an object returned by React.createRef(), or null.'
          )
        if (!n._owner)
          throw new Error(
            'Element ref was specified as a string (' +
              r +
              `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`
          )
      }
    }
    return r
  }
  function cf(e, t) {
    var n = Object.prototype.toString.call(t)
    throw new Error(
      'Objects are not valid as a React child (found: ' +
        (n === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : n) +
        '). If you meant to render a collection of children, use an array instead.'
    )
  }
  function ff(e) {
    {
      var t = Be(e) || 'Component'
      if (Kv[t]) return
      ;(Kv[t] = !0),
        f(
          'Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.'
        )
    }
  }
  function f0(e) {
    var t = e._payload,
      n = e._init
    return n(t)
  }
  function d0(e) {
    function t(L, P) {
      if (!!e) {
        var k = L.deletions
        k === null ? ((L.deletions = [P]), (L.flags |= Wi)) : k.push(P)
      }
    }
    function n(L, P) {
      if (!e) return null
      for (var k = P; k !== null; ) t(L, k), (k = k.sibling)
      return null
    }
    function r(L, P) {
      for (var k = new Map(), q = P; q !== null; )
        q.key !== null ? k.set(q.key, q) : k.set(q.index, q), (q = q.sibling)
      return k
    }
    function a(L, P) {
      var k = bl(L, P)
      return (k.index = 0), (k.sibling = null), k
    }
    function l(L, P, k) {
      if (((L.index = k), !e)) return (L.flags |= Zy), P
      var q = L.alternate
      if (q !== null) {
        var ce = q.index
        return ce < P ? ((L.flags |= ln), P) : ce
      } else return (L.flags |= ln), P
    }
    function u(L) {
      return e && L.alternate === null && (L.flags |= ln), L
    }
    function c(L, P, k, q) {
      if (P === null || P.tag !== z) {
        var ce = Eh(k, L.mode, q)
        return (ce.return = L), ce
      } else {
        var ie = a(P, k)
        return (ie.return = L), ie
      }
    }
    function v(L, P, k, q) {
      var ce = k.type
      if (ce === G) return b(L, P, k.props.children, q, k.key)
      if (
        P !== null &&
        (P.elementType === ce ||
          nx(P, k) ||
          (typeof ce == 'object' &&
            ce !== null &&
            ce.$$typeof === Xe &&
            f0(ce) === P.type))
      ) {
        var ie = a(P, k.props)
        return (
          (ie.ref = Ju(L, P, k)),
          (ie.return = L),
          (ie._debugSource = k._source),
          (ie._debugOwner = k._owner),
          ie
        )
      }
      var Me = Sh(k, L.mode, q)
      return (Me.ref = Ju(L, P, k)), (Me.return = L), Me
    }
    function g(L, P, k, q) {
      if (
        P === null ||
        P.tag !== B ||
        P.stateNode.containerInfo !== k.containerInfo ||
        P.stateNode.implementation !== k.implementation
      ) {
        var ce = Ch(k, L.mode, q)
        return (ce.return = L), ce
      } else {
        var ie = a(P, k.children || [])
        return (ie.return = L), ie
      }
    }
    function b(L, P, k, q, ce) {
      if (P === null || P.tag !== O) {
        var ie = Ai(k, L.mode, q, ce)
        return (ie.return = L), ie
      } else {
        var Me = a(P, k)
        return (Me.return = L), Me
      }
    }
    function D(L, P, k) {
      if ((typeof P == 'string' && P !== '') || typeof P == 'number') {
        var q = Eh('' + P, L.mode, k)
        return (q.return = L), q
      }
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case aa: {
            var ce = Sh(P, L.mode, k)
            return (ce.ref = Ju(L, null, P)), (ce.return = L), ce
          }
          case C: {
            var ie = Ch(P, L.mode, k)
            return (ie.return = L), ie
          }
          case Xe: {
            var Me = P._payload,
              ze = P._init
            return D(L, ze(Me), k)
          }
        }
        if (vt(P) || Da(P)) {
          var Et = Ai(P, L.mode, k, null)
          return (Et.return = L), Et
        }
        cf(L, P)
      }
      return typeof P == 'function' && ff(L), null
    }
    function w(L, P, k, q) {
      var ce = P !== null ? P.key : null
      if ((typeof k == 'string' && k !== '') || typeof k == 'number')
        return ce !== null ? null : c(L, P, '' + k, q)
      if (typeof k == 'object' && k !== null) {
        switch (k.$$typeof) {
          case aa:
            return k.key === ce ? v(L, P, k, q) : null
          case C:
            return k.key === ce ? g(L, P, k, q) : null
          case Xe: {
            var ie = k._payload,
              Me = k._init
            return w(L, P, Me(ie), q)
          }
        }
        if (vt(k) || Da(k)) return ce !== null ? null : b(L, P, k, q, null)
        cf(L, k)
      }
      return typeof k == 'function' && ff(L), null
    }
    function A(L, P, k, q, ce) {
      if ((typeof q == 'string' && q !== '') || typeof q == 'number') {
        var ie = L.get(k) || null
        return c(P, ie, '' + q, ce)
      }
      if (typeof q == 'object' && q !== null) {
        switch (q.$$typeof) {
          case aa: {
            var Me = L.get(q.key === null ? k : q.key) || null
            return v(P, Me, q, ce)
          }
          case C: {
            var ze = L.get(q.key === null ? k : q.key) || null
            return g(P, ze, q, ce)
          }
          case Xe:
            var Et = q._payload,
              ct = q._init
            return A(L, P, k, ct(Et), ce)
        }
        if (vt(q) || Da(q)) {
          var Jt = L.get(k) || null
          return b(P, Jt, q, ce, null)
        }
        cf(P, q)
      }
      return typeof q == 'function' && ff(P), null
    }
    function U(L, P, k) {
      {
        if (typeof L != 'object' || L === null) return P
        switch (L.$$typeof) {
          case aa:
          case C:
            c0(L, k)
            var q = L.key
            if (typeof q != 'string') break
            if (P === null) {
              ;(P = new Set()), P.add(q)
              break
            }
            if (!P.has(q)) {
              P.add(q)
              break
            }
            f(
              'Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.',
              q
            )
            break
          case Xe:
            var ce = L._payload,
              ie = L._init
            U(ie(ce), P, k)
            break
        }
      }
      return P
    }
    function $(L, P, k, q) {
      for (var ce = null, ie = 0; ie < k.length; ie++) {
        var Me = k[ie]
        ce = U(Me, ce, L)
      }
      for (
        var ze = null, Et = null, ct = P, Jt = 0, ft = 0, qt = null;
        ct !== null && ft < k.length;
        ft++
      ) {
        ct.index > ft ? ((qt = ct), (ct = null)) : (qt = ct.sibling)
        var qn = w(L, ct, k[ft], q)
        if (qn === null) {
          ct === null && (ct = qt)
          break
        }
        e && ct && qn.alternate === null && t(L, ct),
          (Jt = l(qn, Jt, ft)),
          Et === null ? (ze = qn) : (Et.sibling = qn),
          (Et = qn),
          (ct = qt)
      }
      if (ft === k.length) {
        if ((n(L, ct), kn())) {
          var $n = ft
          ll(L, $n)
        }
        return ze
      }
      if (ct === null) {
        for (; ft < k.length; ft++) {
          var _r = D(L, k[ft], q)
          _r !== null &&
            ((Jt = l(_r, Jt, ft)),
            Et === null ? (ze = _r) : (Et.sibling = _r),
            (Et = _r))
        }
        if (kn()) {
          var ir = ft
          ll(L, ir)
        }
        return ze
      }
      for (var lr = r(L, ct); ft < k.length; ft++) {
        var Qn = A(lr, L, ft, k[ft], q)
        Qn !== null &&
          (e &&
            Qn.alternate !== null &&
            lr.delete(Qn.key === null ? ft : Qn.key),
          (Jt = l(Qn, Jt, ft)),
          Et === null ? (ze = Qn) : (Et.sibling = Qn),
          (Et = Qn))
      }
      if (
        (e &&
          lr.forEach(function (wo) {
            return t(L, wo)
          }),
        kn())
      ) {
        var Ja = ft
        ll(L, Ja)
      }
      return ze
    }
    function se(L, P, k, q) {
      var ce = Da(k)
      if (typeof ce != 'function')
        throw new Error(
          'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.'
        )
      {
        typeof Symbol == 'function' &&
          k[Symbol.toStringTag] === 'Generator' &&
          (Gv ||
            f(
              'Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.'
            ),
          (Gv = !0)),
          k.entries === ce &&
            (Wv ||
              f(
                'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
              ),
            (Wv = !0))
        var ie = ce.call(k)
        if (ie)
          for (var Me = null, ze = ie.next(); !ze.done; ze = ie.next()) {
            var Et = ze.value
            Me = U(Et, Me, L)
          }
      }
      var ct = ce.call(k)
      if (ct == null)
        throw new Error('An iterable object provided no iterator.')
      for (
        var Jt = null,
          ft = null,
          qt = P,
          qn = 0,
          $n = 0,
          _r = null,
          ir = ct.next();
        qt !== null && !ir.done;
        $n++, ir = ct.next()
      ) {
        qt.index > $n ? ((_r = qt), (qt = null)) : (_r = qt.sibling)
        var lr = w(L, qt, ir.value, q)
        if (lr === null) {
          qt === null && (qt = _r)
          break
        }
        e && qt && lr.alternate === null && t(L, qt),
          (qn = l(lr, qn, $n)),
          ft === null ? (Jt = lr) : (ft.sibling = lr),
          (ft = lr),
          (qt = _r)
      }
      if (ir.done) {
        if ((n(L, qt), kn())) {
          var Qn = $n
          ll(L, Qn)
        }
        return Jt
      }
      if (qt === null) {
        for (; !ir.done; $n++, ir = ct.next()) {
          var Ja = D(L, ir.value, q)
          Ja !== null &&
            ((qn = l(Ja, qn, $n)),
            ft === null ? (Jt = Ja) : (ft.sibling = Ja),
            (ft = Ja))
        }
        if (kn()) {
          var wo = $n
          ll(L, wo)
        }
        return Jt
      }
      for (var Ds = r(L, qt); !ir.done; $n++, ir = ct.next()) {
        var ba = A(Ds, L, $n, ir.value, q)
        ba !== null &&
          (e &&
            ba.alternate !== null &&
            Ds.delete(ba.key === null ? $n : ba.key),
          (qn = l(ba, qn, $n)),
          ft === null ? (Jt = ba) : (ft.sibling = ba),
          (ft = ba))
      }
      if (
        (e &&
          Ds.forEach(function (wO) {
            return t(L, wO)
          }),
        kn())
      ) {
        var TO = $n
        ll(L, TO)
      }
      return Jt
    }
    function Se(L, P, k, q) {
      if (P !== null && P.tag === z) {
        n(L, P.sibling)
        var ce = a(P, k)
        return (ce.return = L), ce
      }
      n(L, P)
      var ie = Eh(k, L.mode, q)
      return (ie.return = L), ie
    }
    function Ne(L, P, k, q) {
      for (var ce = k.key, ie = P; ie !== null; ) {
        if (ie.key === ce) {
          var Me = k.type
          if (Me === G) {
            if (ie.tag === O) {
              n(L, ie.sibling)
              var ze = a(ie, k.props.children)
              return (
                (ze.return = L),
                (ze._debugSource = k._source),
                (ze._debugOwner = k._owner),
                ze
              )
            }
          } else if (
            ie.elementType === Me ||
            nx(ie, k) ||
            (typeof Me == 'object' &&
              Me !== null &&
              Me.$$typeof === Xe &&
              f0(Me) === ie.type)
          ) {
            n(L, ie.sibling)
            var Et = a(ie, k.props)
            return (
              (Et.ref = Ju(L, ie, k)),
              (Et.return = L),
              (Et._debugSource = k._source),
              (Et._debugOwner = k._owner),
              Et
            )
          }
          n(L, ie)
          break
        } else t(L, ie)
        ie = ie.sibling
      }
      if (k.type === G) {
        var ct = Ai(k.props.children, L.mode, q, k.key)
        return (ct.return = L), ct
      } else {
        var Jt = Sh(k, L.mode, q)
        return (Jt.ref = Ju(L, P, k)), (Jt.return = L), Jt
      }
    }
    function rt(L, P, k, q) {
      for (var ce = k.key, ie = P; ie !== null; ) {
        if (ie.key === ce)
          if (
            ie.tag === B &&
            ie.stateNode.containerInfo === k.containerInfo &&
            ie.stateNode.implementation === k.implementation
          ) {
            n(L, ie.sibling)
            var Me = a(ie, k.children || [])
            return (Me.return = L), Me
          } else {
            n(L, ie)
            break
          }
        else t(L, ie)
        ie = ie.sibling
      }
      var ze = Ch(k, L.mode, q)
      return (ze.return = L), ze
    }
    function qe(L, P, k, q) {
      var ce =
        typeof k == 'object' && k !== null && k.type === G && k.key === null
      if ((ce && (k = k.props.children), typeof k == 'object' && k !== null)) {
        switch (k.$$typeof) {
          case aa:
            return u(Ne(L, P, k, q))
          case C:
            return u(rt(L, P, k, q))
          case Xe:
            var ie = k._payload,
              Me = k._init
            return qe(L, P, Me(ie), q)
        }
        if (vt(k)) return $(L, P, k, q)
        if (Da(k)) return se(L, P, k, q)
        cf(L, k)
      }
      return (typeof k == 'string' && k !== '') || typeof k == 'number'
        ? u(Se(L, P, '' + k, q))
        : (typeof k == 'function' && ff(L), n(L, P))
    }
    return qe
  }
  var co = d0(!0),
    m0 = d0(!1)
  function vD(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error('Resuming work not yet implemented.')
    if (t.child !== null) {
      var n = t.child,
        r = bl(n, n.pendingProps)
      for (t.child = r, r.return = t; n.sibling !== null; )
        (n = n.sibling), (r = r.sibling = bl(n, n.pendingProps)), (r.return = t)
      r.sibling = null
    }
  }
  function pD(e, t) {
    for (var n = e.child; n !== null; ) I_(n, t), (n = n.sibling)
  }
  var Zu = {},
    Ri = Ni(Zu),
    es = Ni(Zu),
    df = Ni(Zu)
  function mf(e) {
    if (e === Zu)
      throw new Error(
        'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.'
      )
    return e
  }
  function v0() {
    var e = mf(df.current)
    return e
  }
  function Xv(e, t) {
    Wn(df, t, e), Wn(es, e, e), Wn(Ri, Zu, e)
    var n = _T(t)
    Yn(Ri, e), Wn(Ri, n, e)
  }
  function fo(e) {
    Yn(Ri, e), Yn(es, e), Yn(df, e)
  }
  function Jv() {
    var e = mf(Ri.current)
    return e
  }
  function p0(e) {
    mf(df.current)
    var t = mf(Ri.current),
      n = OT(t, e.type)
    t !== n && (Wn(es, e, e), Wn(Ri, n, e))
  }
  function Zv(e) {
    es.current === e && (Yn(Ri, e), Yn(es, e))
  }
  var hD = 0,
    h0 = 1,
    y0 = 1,
    ts = 2,
    qr = Ni(hD)
  function ep(e, t) {
    return (e & t) !== 0
  }
  function mo(e) {
    return e & h0
  }
  function tp(e, t) {
    return (e & h0) | t
  }
  function yD(e, t) {
    return e | t
  }
  function Ti(e, t) {
    Wn(qr, t, e)
  }
  function vo(e) {
    Yn(qr, e)
  }
  function gD(e, t) {
    var n = e.memoizedState
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0)
  }
  function vf(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === Z) {
        var n = t.memoizedState
        if (n !== null) {
          var r = n.dehydrated
          if (r === null || wb(r) || ov(r)) return t
        }
      } else if (t.tag === Te && t.memoizedProps.revealOrder !== void 0) {
        var a = (t.flags & pt) !== De
        if (a) return t
      } else if (t.child !== null) {
        ;(t.child.return = t), (t = t.child)
        continue
      }
      if (t === e) return null
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
  }
  var dr = 0,
    fn = 1,
    da = 2,
    dn = 4,
    An = 8,
    np = []
  function rp() {
    for (var e = 0; e < np.length; e++) {
      var t = np[e]
      t._workInProgressVersionPrimary = null
    }
    np.length = 0
  }
  function bD(e, t) {
    var n = t._getVersion,
      r = n(t._source)
    e.mutableSourceEagerHydrationData == null
      ? (e.mutableSourceEagerHydrationData = [t, r])
      : e.mutableSourceEagerHydrationData.push(t, r)
  }
  var oe = s.ReactCurrentDispatcher,
    ns = s.ReactCurrentBatchConfig,
    ap,
    po
  ap = new Set()
  var dl = W,
    St = null,
    mn = null,
    vn = null,
    pf = !1,
    rs = !1,
    as = 0,
    ND = 0,
    xD = 25,
    I = null,
    jr = null,
    wi = -1,
    ip = !1
  function gt() {
    {
      var e = I
      jr === null ? (jr = [e]) : jr.push(e)
    }
  }
  function re() {
    {
      var e = I
      jr !== null && (wi++, jr[wi] !== e && SD(e))
    }
  }
  function ho(e) {
    e != null &&
      !vt(e) &&
      f(
        '%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.',
        I,
        typeof e
      )
  }
  function SD(e) {
    {
      var t = Be(St)
      if (!ap.has(t) && (ap.add(t), jr !== null)) {
        for (var n = '', r = 30, a = 0; a <= wi; a++) {
          for (
            var l = jr[a], u = a === wi ? e : l, c = a + 1 + '. ' + l;
            c.length < r;

          )
            c += ' '
          ;(c +=
            u +
            `
`),
            (n += c)
        }
        f(
          `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
          t,
          n
        )
      }
    }
  }
  function Gn() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`)
  }
  function lp(e, t) {
    if (ip) return !1
    if (t === null)
      return (
        f(
          '%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.',
          I
        ),
        !1
      )
    e.length !== t.length &&
      f(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        I,
        '[' + t.join(', ') + ']',
        '[' + e.join(', ') + ']'
      )
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Tr(e[n], t[n])) return !1
    return !0
  }
  function yo(e, t, n, r, a, l) {
    ;(dl = l),
      (St = t),
      (jr = e !== null ? e._debugHookTypes : null),
      (wi = -1),
      (ip = e !== null && e.type !== t.type),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = W),
      e !== null && e.memoizedState !== null
        ? (oe.current = H0)
        : jr !== null
        ? (oe.current = z0)
        : (oe.current = j0)
    var u = n(r, a)
    if (rs) {
      var c = 0
      do {
        if (((rs = !1), (as = 0), c >= xD))
          throw new Error(
            'Too many re-renders. React limits the number of renders to prevent an infinite loop.'
          )
        ;(c += 1),
          (ip = !1),
          (mn = null),
          (vn = null),
          (t.updateQueue = null),
          (wi = -1),
          (oe.current = $0),
          (u = n(r, a))
      } while (rs)
    }
    ;(oe.current = Df), (t._debugHookTypes = jr)
    var v = mn !== null && mn.next !== null
    if (
      ((dl = W),
      (St = null),
      (mn = null),
      (vn = null),
      (I = null),
      (jr = null),
      (wi = -1),
      e !== null &&
        (e.flags & ja) !== (t.flags & ja) &&
        (e.mode & tt) !== _e &&
        f(
          'Internal React error: Expected static flag was missing. Please notify the React team.'
        ),
      (pf = !1),
      v)
    )
      throw new Error(
        'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.'
      )
    return u
  }
  function go() {
    var e = as !== 0
    return (as = 0), e
  }
  function g0(e, t, n) {
    ;(t.updateQueue = e.updateQueue),
      (t.mode & ua) !== _e
        ? (t.flags &= ~(oc | Fa | Pr | it))
        : (t.flags &= ~(Pr | it)),
      (e.lanes = vc(e.lanes, n))
  }
  function b0() {
    if (((oe.current = Df), pf)) {
      for (var e = St.memoizedState; e !== null; ) {
        var t = e.queue
        t !== null && (t.pending = null), (e = e.next)
      }
      pf = !1
    }
    ;(dl = W),
      (St = null),
      (mn = null),
      (vn = null),
      (jr = null),
      (wi = -1),
      (I = null),
      (L0 = !1),
      (rs = !1),
      (as = 0)
  }
  function ma() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    }
    return vn === null ? (St.memoizedState = vn = e) : (vn = vn.next = e), vn
  }
  function zr() {
    var e
    if (mn === null) {
      var t = St.alternate
      t !== null ? (e = t.memoizedState) : (e = null)
    } else e = mn.next
    var n
    if ((vn === null ? (n = St.memoizedState) : (n = vn.next), n !== null))
      (vn = n), (n = vn.next), (mn = e)
    else {
      if (e === null)
        throw new Error('Rendered more hooks than during the previous render.')
      mn = e
      var r = {
        memoizedState: mn.memoizedState,
        baseState: mn.baseState,
        baseQueue: mn.baseQueue,
        queue: mn.queue,
        next: null,
      }
      vn === null ? (St.memoizedState = vn = r) : (vn = vn.next = r)
    }
    return vn
  }
  function N0() {
    return { lastEffect: null, stores: null }
  }
  function op(e, t) {
    return typeof t == 'function' ? t(e) : t
  }
  function up(e, t, n) {
    var r = ma(),
      a
    n !== void 0 ? (a = n(t)) : (a = t), (r.memoizedState = r.baseState = a)
    var l = {
      pending: null,
      interleaved: null,
      lanes: W,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: a,
    }
    r.queue = l
    var u = (l.dispatch = TD.bind(null, St, l))
    return [r.memoizedState, u]
  }
  function sp(e, t, n) {
    var r = zr(),
      a = r.queue
    if (a === null)
      throw new Error(
        'Should have a queue. This is likely a bug in React. Please file an issue.'
      )
    a.lastRenderedReducer = e
    var l = mn,
      u = l.baseQueue,
      c = a.pending
    if (c !== null) {
      if (u !== null) {
        var v = u.next,
          g = c.next
        ;(u.next = g), (c.next = v)
      }
      l.baseQueue !== u &&
        f(
          'Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.'
        ),
        (l.baseQueue = u = c),
        (a.pending = null)
    }
    if (u !== null) {
      var b = u.next,
        D = l.baseState,
        w = null,
        A = null,
        U = null,
        $ = b
      do {
        var se = $.lane
        if (Gl(dl, se)) {
          if (U !== null) {
            var Ne = {
              lane: Dn,
              action: $.action,
              hasEagerState: $.hasEagerState,
              eagerState: $.eagerState,
              next: null,
            }
            U = U.next = Ne
          }
          if ($.hasEagerState) D = $.eagerState
          else {
            var rt = $.action
            D = e(D, rt)
          }
        } else {
          var Se = {
            lane: se,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null,
          }
          U === null ? ((A = U = Se), (w = D)) : (U = U.next = Se),
            (St.lanes = We(St.lanes, se)),
            Es(se)
        }
        $ = $.next
      } while ($ !== null && $ !== b)
      U === null ? (w = D) : (U.next = A),
        Tr(D, r.memoizedState) || fs(),
        (r.memoizedState = D),
        (r.baseState = w),
        (r.baseQueue = U),
        (a.lastRenderedState = D)
    }
    var qe = a.interleaved
    if (qe !== null) {
      var L = qe
      do {
        var P = L.lane
        ;(St.lanes = We(St.lanes, P)), Es(P), (L = L.next)
      } while (L !== qe)
    } else u === null && (a.lanes = W)
    var k = a.dispatch
    return [r.memoizedState, k]
  }
  function cp(e, t, n) {
    var r = zr(),
      a = r.queue
    if (a === null)
      throw new Error(
        'Should have a queue. This is likely a bug in React. Please file an issue.'
      )
    a.lastRenderedReducer = e
    var l = a.dispatch,
      u = a.pending,
      c = r.memoizedState
    if (u !== null) {
      a.pending = null
      var v = u.next,
        g = v
      do {
        var b = g.action
        ;(c = e(c, b)), (g = g.next)
      } while (g !== v)
      Tr(c, r.memoizedState) || fs(),
        (r.memoizedState = c),
        r.baseQueue === null && (r.baseState = c),
        (a.lastRenderedState = c)
    }
    return [c, l]
  }
  function PA(e, t, n) {}
  function BA(e, t, n) {}
  function fp(e, t, n) {
    var r = St,
      a = ma(),
      l,
      u = kn()
    if (u) {
      if (n === void 0)
        throw new Error(
          'Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.'
        )
      ;(l = n()),
        po ||
          (l !== n() &&
            (f(
              'The result of getServerSnapshot should be cached to avoid an infinite loop'
            ),
            (po = !0)))
    } else {
      if (((l = t()), !po)) {
        var c = t()
        Tr(l, c) ||
          (f(
            'The result of getSnapshot should be cached to avoid an infinite loop'
          ),
          (po = !0))
      }
      var v = Wf()
      if (v === null)
        throw new Error(
          'Expected a work-in-progress root. This is a bug in React. Please file an issue.'
        )
      mc(v, dl) || x0(r, t, l)
    }
    a.memoizedState = l
    var g = { value: l, getSnapshot: t }
    return (
      (a.queue = g),
      Nf(E0.bind(null, r, g, e), [e]),
      (r.flags |= Pr),
      is(fn | An, S0.bind(null, r, g, l, t), void 0, null),
      l
    )
  }
  function hf(e, t, n) {
    var r = St,
      a = zr(),
      l = t()
    if (!po) {
      var u = t()
      Tr(l, u) ||
        (f(
          'The result of getSnapshot should be cached to avoid an infinite loop'
        ),
        (po = !0))
    }
    var c = a.memoizedState,
      v = !Tr(c, l)
    v && ((a.memoizedState = l), fs())
    var g = a.queue
    if (
      (os(E0.bind(null, r, g, e), [e]),
      g.getSnapshot !== t || v || (vn !== null && vn.memoizedState.tag & fn))
    ) {
      ;(r.flags |= Pr), is(fn | An, S0.bind(null, r, g, l, t), void 0, null)
      var b = Wf()
      if (b === null)
        throw new Error(
          'Expected a work-in-progress root. This is a bug in React. Please file an issue.'
        )
      mc(b, dl) || x0(r, t, l)
    }
    return l
  }
  function x0(e, t, n) {
    e.flags |= lc
    var r = { getSnapshot: t, value: n },
      a = St.updateQueue
    if (a === null) (a = N0()), (St.updateQueue = a), (a.stores = [r])
    else {
      var l = a.stores
      l === null ? (a.stores = [r]) : l.push(r)
    }
  }
  function S0(e, t, n, r) {
    ;(t.value = n), (t.getSnapshot = r), C0(t) && R0(e)
  }
  function E0(e, t, n) {
    var r = function () {
      C0(t) && R0(e)
    }
    return n(r)
  }
  function C0(e) {
    var t = e.getSnapshot,
      n = e.value
    try {
      var r = t()
      return !Tr(n, r)
    } catch {
      return !0
    }
  }
  function R0(e) {
    var t = fr(e, Ae)
    t !== null && gn(t, e, Ae, Lt)
  }
  function yf(e) {
    var t = ma()
    typeof e == 'function' && (e = e()), (t.memoizedState = t.baseState = e)
    var n = {
      pending: null,
      interleaved: null,
      lanes: W,
      dispatch: null,
      lastRenderedReducer: op,
      lastRenderedState: e,
    }
    t.queue = n
    var r = (n.dispatch = wD.bind(null, St, n))
    return [t.memoizedState, r]
  }
  function dp(e) {
    return sp(op)
  }
  function mp(e) {
    return cp(op)
  }
  function is(e, t, n, r) {
    var a = { tag: e, create: t, destroy: n, deps: r, next: null },
      l = St.updateQueue
    if (l === null)
      (l = N0()), (St.updateQueue = l), (l.lastEffect = a.next = a)
    else {
      var u = l.lastEffect
      if (u === null) l.lastEffect = a.next = a
      else {
        var c = u.next
        ;(u.next = a), (a.next = c), (l.lastEffect = a)
      }
    }
    return a
  }
  function vp(e) {
    var t = ma()
    {
      var n = { current: e }
      return (t.memoizedState = n), n
    }
  }
  function gf(e) {
    var t = zr()
    return t.memoizedState
  }
  function ls(e, t, n, r) {
    var a = ma(),
      l = r === void 0 ? null : r
    ;(St.flags |= e), (a.memoizedState = is(fn | t, n, void 0, l))
  }
  function bf(e, t, n, r) {
    var a = zr(),
      l = r === void 0 ? null : r,
      u = void 0
    if (mn !== null) {
      var c = mn.memoizedState
      if (((u = c.destroy), l !== null)) {
        var v = c.deps
        if (lp(l, v)) {
          a.memoizedState = is(t, n, u, l)
          return
        }
      }
    }
    ;(St.flags |= e), (a.memoizedState = is(fn | t, n, u, l))
  }
  function Nf(e, t) {
    return (St.mode & ua) !== _e
      ? ls(oc | Pr | Zd, An, e, t)
      : ls(Pr | Zd, An, e, t)
  }
  function os(e, t) {
    return bf(Pr, An, e, t)
  }
  function pp(e, t) {
    return ls(it, da, e, t)
  }
  function xf(e, t) {
    return bf(it, da, e, t)
  }
  function hp(e, t) {
    var n = it
    return (n |= Qi), (St.mode & ua) !== _e && (n |= Fa), ls(n, dn, e, t)
  }
  function Sf(e, t) {
    return bf(it, dn, e, t)
  }
  function T0(e, t) {
    if (typeof t == 'function') {
      var n = t,
        r = e()
      return (
        n(r),
        function () {
          n(null)
        }
      )
    } else if (t != null) {
      var a = t
      a.hasOwnProperty('current') ||
        f(
          'Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.',
          'an object with keys {' + Object.keys(a).join(', ') + '}'
        )
      var l = e()
      return (
        (a.current = l),
        function () {
          a.current = null
        }
      )
    }
  }
  function yp(e, t, n) {
    typeof t != 'function' &&
      f(
        'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
        t !== null ? typeof t : 'null'
      )
    var r = n != null ? n.concat([e]) : null,
      a = it
    return (
      (a |= Qi),
      (St.mode & ua) !== _e && (a |= Fa),
      ls(a, dn, T0.bind(null, t, e), r)
    )
  }
  function Ef(e, t, n) {
    typeof t != 'function' &&
      f(
        'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
        t !== null ? typeof t : 'null'
      )
    var r = n != null ? n.concat([e]) : null
    return bf(it, dn, T0.bind(null, t, e), r)
  }
  function ED(e, t) {}
  var Cf = ED
  function gp(e, t) {
    var n = ma(),
      r = t === void 0 ? null : t
    return (n.memoizedState = [e, r]), e
  }
  function Rf(e, t) {
    var n = zr(),
      r = t === void 0 ? null : t,
      a = n.memoizedState
    if (a !== null && r !== null) {
      var l = a[1]
      if (lp(r, l)) return a[0]
    }
    return (n.memoizedState = [e, r]), e
  }
  function bp(e, t) {
    var n = ma(),
      r = t === void 0 ? null : t,
      a = e()
    return (n.memoizedState = [a, r]), a
  }
  function Tf(e, t) {
    var n = zr(),
      r = t === void 0 ? null : t,
      a = n.memoizedState
    if (a !== null && r !== null) {
      var l = a[1]
      if (lp(r, l)) return a[0]
    }
    var u = e()
    return (n.memoizedState = [u, r]), u
  }
  function Np(e) {
    var t = ma()
    return (t.memoizedState = e), e
  }
  function w0(e) {
    var t = zr(),
      n = mn,
      r = n.memoizedState
    return _0(t, r, e)
  }
  function D0(e) {
    var t = zr()
    if (mn === null) return (t.memoizedState = e), e
    var n = mn.memoizedState
    return _0(t, n, e)
  }
  function _0(e, t, n) {
    var r = !iC(dl)
    if (r) {
      if (!Tr(n, t)) {
        var a = gg()
        ;(St.lanes = We(St.lanes, a)), Es(a), (e.baseState = !0)
      }
      return t
    } else
      return e.baseState && ((e.baseState = !1), fs()), (e.memoizedState = n), n
  }
  function CD(e, t, n) {
    var r = Vr()
    _n(vC(r, Ha)), e(!0)
    var a = ns.transition
    ns.transition = {}
    var l = ns.transition
    ns.transition._updatedFibers = new Set()
    try {
      e(!1), t()
    } finally {
      if ((_n(r), (ns.transition = a), a === null && l._updatedFibers)) {
        var u = l._updatedFibers.size
        u > 10 &&
          y(
            'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
          ),
          l._updatedFibers.clear()
      }
    }
  }
  function xp() {
    var e = yf(!1),
      t = e[0],
      n = e[1],
      r = CD.bind(null, n),
      a = ma()
    return (a.memoizedState = r), [t, r]
  }
  function O0() {
    var e = dp(),
      t = e[0],
      n = zr(),
      r = n.memoizedState
    return [t, r]
  }
  function M0() {
    var e = mp(),
      t = e[0],
      n = zr(),
      r = n.memoizedState
    return [t, r]
  }
  var L0 = !1
  function RD() {
    return L0
  }
  function Sp() {
    var e = ma(),
      t = Wf(),
      n = t.identifierPrefix,
      r
    if (kn()) {
      var a = Hw()
      r = ':' + n + 'R' + a
      var l = as++
      l > 0 && (r += 'H' + l.toString(32)), (r += ':')
    } else {
      var u = ND++
      r = ':' + n + 'r' + u.toString(32) + ':'
    }
    return (e.memoizedState = r), r
  }
  function wf() {
    var e = zr(),
      t = e.memoizedState
    return t
  }
  function TD(e, t, n) {
    typeof arguments[3] == 'function' &&
      f(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      )
    var r = Li(e),
      a = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }
    if (k0(e)) A0(t, a)
    else {
      var l = Xb(e, t, a, r)
      if (l !== null) {
        var u = ar()
        gn(l, e, r, u), U0(l, t, r)
      }
    }
    F0(e, r)
  }
  function wD(e, t, n) {
    typeof arguments[3] == 'function' &&
      f(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      )
    var r = Li(e),
      a = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }
    if (k0(e)) A0(t, a)
    else {
      var l = e.alternate
      if (e.lanes === W && (l === null || l.lanes === W)) {
        var u = t.lastRenderedReducer
        if (u !== null) {
          var c
          ;(c = oe.current), (oe.current = Qr)
          try {
            var v = t.lastRenderedState,
              g = u(v, n)
            if (((a.hasEagerState = !0), (a.eagerState = g), Tr(g, v))) {
              iD(e, t, a, r)
              return
            }
          } catch {
          } finally {
            oe.current = c
          }
        }
      }
      var b = Xb(e, t, a, r)
      if (b !== null) {
        var D = ar()
        gn(b, e, r, D), U0(b, t, r)
      }
    }
    F0(e, r)
  }
  function k0(e) {
    var t = e.alternate
    return e === St || (t !== null && t === St)
  }
  function A0(e, t) {
    rs = pf = !0
    var n = e.pending
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t)
  }
  function U0(e, t, n) {
    if (yg(n)) {
      var r = t.lanes
      r = bg(r, e.pendingLanes)
      var a = We(r, n)
      ;(t.lanes = a), _m(e, a)
    }
  }
  function F0(e, t, n) {
    am(e, t)
  }
  var Df = {
      readContext: un,
      useCallback: Gn,
      useContext: Gn,
      useEffect: Gn,
      useImperativeHandle: Gn,
      useInsertionEffect: Gn,
      useLayoutEffect: Gn,
      useMemo: Gn,
      useReducer: Gn,
      useRef: Gn,
      useState: Gn,
      useDebugValue: Gn,
      useDeferredValue: Gn,
      useTransition: Gn,
      useMutableSource: Gn,
      useSyncExternalStore: Gn,
      useId: Gn,
      unstable_isNewReconciler: Fe,
    },
    j0 = null,
    z0 = null,
    H0 = null,
    $0 = null,
    va = null,
    Qr = null,
    _f = null
  {
    var Ep = function () {
        f(
          'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
        )
      },
      Ue = function () {
        f(
          'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks'
        )
      }
    ;(j0 = {
      readContext: function (e) {
        return un(e)
      },
      useCallback: function (e, t) {
        return (I = 'useCallback'), gt(), ho(t), gp(e, t)
      },
      useContext: function (e) {
        return (I = 'useContext'), gt(), un(e)
      },
      useEffect: function (e, t) {
        return (I = 'useEffect'), gt(), ho(t), Nf(e, t)
      },
      useImperativeHandle: function (e, t, n) {
        return (I = 'useImperativeHandle'), gt(), ho(n), yp(e, t, n)
      },
      useInsertionEffect: function (e, t) {
        return (I = 'useInsertionEffect'), gt(), ho(t), pp(e, t)
      },
      useLayoutEffect: function (e, t) {
        return (I = 'useLayoutEffect'), gt(), ho(t), hp(e, t)
      },
      useMemo: function (e, t) {
        ;(I = 'useMemo'), gt(), ho(t)
        var n = oe.current
        oe.current = va
        try {
          return bp(e, t)
        } finally {
          oe.current = n
        }
      },
      useReducer: function (e, t, n) {
        ;(I = 'useReducer'), gt()
        var r = oe.current
        oe.current = va
        try {
          return up(e, t, n)
        } finally {
          oe.current = r
        }
      },
      useRef: function (e) {
        return (I = 'useRef'), gt(), vp(e)
      },
      useState: function (e) {
        ;(I = 'useState'), gt()
        var t = oe.current
        oe.current = va
        try {
          return yf(e)
        } finally {
          oe.current = t
        }
      },
      useDebugValue: function (e, t) {
        return (I = 'useDebugValue'), gt(), void 0
      },
      useDeferredValue: function (e) {
        return (I = 'useDeferredValue'), gt(), Np(e)
      },
      useTransition: function () {
        return (I = 'useTransition'), gt(), xp()
      },
      useMutableSource: function (e, t, n) {
        return (I = 'useMutableSource'), gt(), void 0
      },
      useSyncExternalStore: function (e, t, n) {
        return (I = 'useSyncExternalStore'), gt(), fp(e, t, n)
      },
      useId: function () {
        return (I = 'useId'), gt(), Sp()
      },
      unstable_isNewReconciler: Fe,
    }),
      (z0 = {
        readContext: function (e) {
          return un(e)
        },
        useCallback: function (e, t) {
          return (I = 'useCallback'), re(), gp(e, t)
        },
        useContext: function (e) {
          return (I = 'useContext'), re(), un(e)
        },
        useEffect: function (e, t) {
          return (I = 'useEffect'), re(), Nf(e, t)
        },
        useImperativeHandle: function (e, t, n) {
          return (I = 'useImperativeHandle'), re(), yp(e, t, n)
        },
        useInsertionEffect: function (e, t) {
          return (I = 'useInsertionEffect'), re(), pp(e, t)
        },
        useLayoutEffect: function (e, t) {
          return (I = 'useLayoutEffect'), re(), hp(e, t)
        },
        useMemo: function (e, t) {
          ;(I = 'useMemo'), re()
          var n = oe.current
          oe.current = va
          try {
            return bp(e, t)
          } finally {
            oe.current = n
          }
        },
        useReducer: function (e, t, n) {
          ;(I = 'useReducer'), re()
          var r = oe.current
          oe.current = va
          try {
            return up(e, t, n)
          } finally {
            oe.current = r
          }
        },
        useRef: function (e) {
          return (I = 'useRef'), re(), vp(e)
        },
        useState: function (e) {
          ;(I = 'useState'), re()
          var t = oe.current
          oe.current = va
          try {
            return yf(e)
          } finally {
            oe.current = t
          }
        },
        useDebugValue: function (e, t) {
          return (I = 'useDebugValue'), re(), void 0
        },
        useDeferredValue: function (e) {
          return (I = 'useDeferredValue'), re(), Np(e)
        },
        useTransition: function () {
          return (I = 'useTransition'), re(), xp()
        },
        useMutableSource: function (e, t, n) {
          return (I = 'useMutableSource'), re(), void 0
        },
        useSyncExternalStore: function (e, t, n) {
          return (I = 'useSyncExternalStore'), re(), fp(e, t, n)
        },
        useId: function () {
          return (I = 'useId'), re(), Sp()
        },
        unstable_isNewReconciler: Fe,
      }),
      (H0 = {
        readContext: function (e) {
          return un(e)
        },
        useCallback: function (e, t) {
          return (I = 'useCallback'), re(), Rf(e, t)
        },
        useContext: function (e) {
          return (I = 'useContext'), re(), un(e)
        },
        useEffect: function (e, t) {
          return (I = 'useEffect'), re(), os(e, t)
        },
        useImperativeHandle: function (e, t, n) {
          return (I = 'useImperativeHandle'), re(), Ef(e, t, n)
        },
        useInsertionEffect: function (e, t) {
          return (I = 'useInsertionEffect'), re(), xf(e, t)
        },
        useLayoutEffect: function (e, t) {
          return (I = 'useLayoutEffect'), re(), Sf(e, t)
        },
        useMemo: function (e, t) {
          ;(I = 'useMemo'), re()
          var n = oe.current
          oe.current = Qr
          try {
            return Tf(e, t)
          } finally {
            oe.current = n
          }
        },
        useReducer: function (e, t, n) {
          ;(I = 'useReducer'), re()
          var r = oe.current
          oe.current = Qr
          try {
            return sp(e, t, n)
          } finally {
            oe.current = r
          }
        },
        useRef: function (e) {
          return (I = 'useRef'), re(), gf()
        },
        useState: function (e) {
          ;(I = 'useState'), re()
          var t = oe.current
          oe.current = Qr
          try {
            return dp(e)
          } finally {
            oe.current = t
          }
        },
        useDebugValue: function (e, t) {
          return (I = 'useDebugValue'), re(), Cf()
        },
        useDeferredValue: function (e) {
          return (I = 'useDeferredValue'), re(), w0(e)
        },
        useTransition: function () {
          return (I = 'useTransition'), re(), O0()
        },
        useMutableSource: function (e, t, n) {
          return (I = 'useMutableSource'), re(), void 0
        },
        useSyncExternalStore: function (e, t, n) {
          return (I = 'useSyncExternalStore'), re(), hf(e, t)
        },
        useId: function () {
          return (I = 'useId'), re(), wf()
        },
        unstable_isNewReconciler: Fe,
      }),
      ($0 = {
        readContext: function (e) {
          return un(e)
        },
        useCallback: function (e, t) {
          return (I = 'useCallback'), re(), Rf(e, t)
        },
        useContext: function (e) {
          return (I = 'useContext'), re(), un(e)
        },
        useEffect: function (e, t) {
          return (I = 'useEffect'), re(), os(e, t)
        },
        useImperativeHandle: function (e, t, n) {
          return (I = 'useImperativeHandle'), re(), Ef(e, t, n)
        },
        useInsertionEffect: function (e, t) {
          return (I = 'useInsertionEffect'), re(), xf(e, t)
        },
        useLayoutEffect: function (e, t) {
          return (I = 'useLayoutEffect'), re(), Sf(e, t)
        },
        useMemo: function (e, t) {
          ;(I = 'useMemo'), re()
          var n = oe.current
          oe.current = _f
          try {
            return Tf(e, t)
          } finally {
            oe.current = n
          }
        },
        useReducer: function (e, t, n) {
          ;(I = 'useReducer'), re()
          var r = oe.current
          oe.current = _f
          try {
            return cp(e, t, n)
          } finally {
            oe.current = r
          }
        },
        useRef: function (e) {
          return (I = 'useRef'), re(), gf()
        },
        useState: function (e) {
          ;(I = 'useState'), re()
          var t = oe.current
          oe.current = _f
          try {
            return mp(e)
          } finally {
            oe.current = t
          }
        },
        useDebugValue: function (e, t) {
          return (I = 'useDebugValue'), re(), Cf()
        },
        useDeferredValue: function (e) {
          return (I = 'useDeferredValue'), re(), D0(e)
        },
        useTransition: function () {
          return (I = 'useTransition'), re(), M0()
        },
        useMutableSource: function (e, t, n) {
          return (I = 'useMutableSource'), re(), void 0
        },
        useSyncExternalStore: function (e, t, n) {
          return (I = 'useSyncExternalStore'), re(), hf(e, t)
        },
        useId: function () {
          return (I = 'useId'), re(), wf()
        },
        unstable_isNewReconciler: Fe,
      }),
      (va = {
        readContext: function (e) {
          return Ep(), un(e)
        },
        useCallback: function (e, t) {
          return (I = 'useCallback'), Ue(), gt(), gp(e, t)
        },
        useContext: function (e) {
          return (I = 'useContext'), Ue(), gt(), un(e)
        },
        useEffect: function (e, t) {
          return (I = 'useEffect'), Ue(), gt(), Nf(e, t)
        },
        useImperativeHandle: function (e, t, n) {
          return (I = 'useImperativeHandle'), Ue(), gt(), yp(e, t, n)
        },
        useInsertionEffect: function (e, t) {
          return (I = 'useInsertionEffect'), Ue(), gt(), pp(e, t)
        },
        useLayoutEffect: function (e, t) {
          return (I = 'useLayoutEffect'), Ue(), gt(), hp(e, t)
        },
        useMemo: function (e, t) {
          ;(I = 'useMemo'), Ue(), gt()
          var n = oe.current
          oe.current = va
          try {
            return bp(e, t)
          } finally {
            oe.current = n
          }
        },
        useReducer: function (e, t, n) {
          ;(I = 'useReducer'), Ue(), gt()
          var r = oe.current
          oe.current = va
          try {
            return up(e, t, n)
          } finally {
            oe.current = r
          }
        },
        useRef: function (e) {
          return (I = 'useRef'), Ue(), gt(), vp(e)
        },
        useState: function (e) {
          ;(I = 'useState'), Ue(), gt()
          var t = oe.current
          oe.current = va
          try {
            return yf(e)
          } finally {
            oe.current = t
          }
        },
        useDebugValue: function (e, t) {
          return (I = 'useDebugValue'), Ue(), gt(), void 0
        },
        useDeferredValue: function (e) {
          return (I = 'useDeferredValue'), Ue(), gt(), Np(e)
        },
        useTransition: function () {
          return (I = 'useTransition'), Ue(), gt(), xp()
        },
        useMutableSource: function (e, t, n) {
          return (I = 'useMutableSource'), Ue(), gt(), void 0
        },
        useSyncExternalStore: function (e, t, n) {
          return (I = 'useSyncExternalStore'), Ue(), gt(), fp(e, t, n)
        },
        useId: function () {
          return (I = 'useId'), Ue(), gt(), Sp()
        },
        unstable_isNewReconciler: Fe,
      }),
      (Qr = {
        readContext: function (e) {
          return Ep(), un(e)
        },
        useCallback: function (e, t) {
          return (I = 'useCallback'), Ue(), re(), Rf(e, t)
        },
        useContext: function (e) {
          return (I = 'useContext'), Ue(), re(), un(e)
        },
        useEffect: function (e, t) {
          return (I = 'useEffect'), Ue(), re(), os(e, t)
        },
        useImperativeHandle: function (e, t, n) {
          return (I = 'useImperativeHandle'), Ue(), re(), Ef(e, t, n)
        },
        useInsertionEffect: function (e, t) {
          return (I = 'useInsertionEffect'), Ue(), re(), xf(e, t)
        },
        useLayoutEffect: function (e, t) {
          return (I = 'useLayoutEffect'), Ue(), re(), Sf(e, t)
        },
        useMemo: function (e, t) {
          ;(I = 'useMemo'), Ue(), re()
          var n = oe.current
          oe.current = Qr
          try {
            return Tf(e, t)
          } finally {
            oe.current = n
          }
        },
        useReducer: function (e, t, n) {
          ;(I = 'useReducer'), Ue(), re()
          var r = oe.current
          oe.current = Qr
          try {
            return sp(e, t, n)
          } finally {
            oe.current = r
          }
        },
        useRef: function (e) {
          return (I = 'useRef'), Ue(), re(), gf()
        },
        useState: function (e) {
          ;(I = 'useState'), Ue(), re()
          var t = oe.current
          oe.current = Qr
          try {
            return dp(e)
          } finally {
            oe.current = t
          }
        },
        useDebugValue: function (e, t) {
          return (I = 'useDebugValue'), Ue(), re(), Cf()
        },
        useDeferredValue: function (e) {
          return (I = 'useDeferredValue'), Ue(), re(), w0(e)
        },
        useTransition: function () {
          return (I = 'useTransition'), Ue(), re(), O0()
        },
        useMutableSource: function (e, t, n) {
          return (I = 'useMutableSource'), Ue(), re(), void 0
        },
        useSyncExternalStore: function (e, t, n) {
          return (I = 'useSyncExternalStore'), Ue(), re(), hf(e, t)
        },
        useId: function () {
          return (I = 'useId'), Ue(), re(), wf()
        },
        unstable_isNewReconciler: Fe,
      }),
      (_f = {
        readContext: function (e) {
          return Ep(), un(e)
        },
        useCallback: function (e, t) {
          return (I = 'useCallback'), Ue(), re(), Rf(e, t)
        },
        useContext: function (e) {
          return (I = 'useContext'), Ue(), re(), un(e)
        },
        useEffect: function (e, t) {
          return (I = 'useEffect'), Ue(), re(), os(e, t)
        },
        useImperativeHandle: function (e, t, n) {
          return (I = 'useImperativeHandle'), Ue(), re(), Ef(e, t, n)
        },
        useInsertionEffect: function (e, t) {
          return (I = 'useInsertionEffect'), Ue(), re(), xf(e, t)
        },
        useLayoutEffect: function (e, t) {
          return (I = 'useLayoutEffect'), Ue(), re(), Sf(e, t)
        },
        useMemo: function (e, t) {
          ;(I = 'useMemo'), Ue(), re()
          var n = oe.current
          oe.current = Qr
          try {
            return Tf(e, t)
          } finally {
            oe.current = n
          }
        },
        useReducer: function (e, t, n) {
          ;(I = 'useReducer'), Ue(), re()
          var r = oe.current
          oe.current = Qr
          try {
            return cp(e, t, n)
          } finally {
            oe.current = r
          }
        },
        useRef: function (e) {
          return (I = 'useRef'), Ue(), re(), gf()
        },
        useState: function (e) {
          ;(I = 'useState'), Ue(), re()
          var t = oe.current
          oe.current = Qr
          try {
            return mp(e)
          } finally {
            oe.current = t
          }
        },
        useDebugValue: function (e, t) {
          return (I = 'useDebugValue'), Ue(), re(), Cf()
        },
        useDeferredValue: function (e) {
          return (I = 'useDeferredValue'), Ue(), re(), D0(e)
        },
        useTransition: function () {
          return (I = 'useTransition'), Ue(), re(), M0()
        },
        useMutableSource: function (e, t, n) {
          return (I = 'useMutableSource'), Ue(), re(), void 0
        },
        useSyncExternalStore: function (e, t, n) {
          return (I = 'useSyncExternalStore'), Ue(), re(), hf(e, t)
        },
        useId: function () {
          return (I = 'useId'), Ue(), re(), wf()
        },
        unstable_isNewReconciler: Fe,
      })
  }
  var Di = o.unstable_now,
    P0 = 0,
    Of = -1,
    us = -1,
    Mf = -1,
    Cp = !1,
    Lf = !1
  function B0() {
    return Cp
  }
  function DD() {
    Lf = !0
  }
  function _D() {
    ;(Cp = !1), (Lf = !1)
  }
  function OD() {
    ;(Cp = Lf), (Lf = !1)
  }
  function V0() {
    return P0
  }
  function I0() {
    P0 = Di()
  }
  function Rp(e) {
    ;(us = Di()), e.actualStartTime < 0 && (e.actualStartTime = Di())
  }
  function Y0(e) {
    us = -1
  }
  function kf(e, t) {
    if (us >= 0) {
      var n = Di() - us
      ;(e.actualDuration += n), t && (e.selfBaseDuration = n), (us = -1)
    }
  }
  function pa(e) {
    if (Of >= 0) {
      var t = Di() - Of
      Of = -1
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case M:
            var r = n.stateNode
            r.effectDuration += t
            return
          case ye:
            var a = n.stateNode
            a.effectDuration += t
            return
        }
        n = n.return
      }
    }
  }
  function Tp(e) {
    if (Mf >= 0) {
      var t = Di() - Mf
      Mf = -1
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case M:
            var r = n.stateNode
            r !== null && (r.passiveEffectDuration += t)
            return
          case ye:
            var a = n.stateNode
            a !== null && (a.passiveEffectDuration += t)
            return
        }
        n = n.return
      }
    }
  }
  function ha() {
    Of = Di()
  }
  function wp() {
    Mf = Di()
  }
  function Dp(e) {
    for (var t = e.child; t; )
      (e.actualDuration += t.actualDuration), (t = t.sibling)
  }
  function ml(e, t) {
    return { value: e, source: t, stack: Ko(t), digest: null }
  }
  function _p(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n != null ? n : null,
      digest: t != null ? t : null,
    }
  }
  function MD(e, t) {
    return !0
  }
  function Op(e, t) {
    try {
      var n = MD(e, t)
      if (n === !1) return
      var r = t.value,
        a = t.source,
        l = t.stack,
        u = l !== null ? l : ''
      if (r != null && r._suppressLogging) {
        if (e.tag === T) return
        console.error(r)
      }
      var c = a ? Be(a) : null,
        v = c
          ? 'The above error occurred in the <' + c + '> component:'
          : 'The above error occurred in one of your React components:',
        g
      if (e.tag === M)
        g = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`
      else {
        var b = Be(e) || 'Anonymous'
        g =
          'React will try to recreate this component tree from scratch ' +
          ('using the error boundary you provided, ' + b + '.')
      }
      var D =
        v +
        `
` +
        u +
        `

` +
        ('' + g)
      console.error(D)
    } catch (w) {
      setTimeout(function () {
        throw w
      })
    }
  }
  var LD = typeof WeakMap == 'function' ? WeakMap : Map
  function W0(e, t, n) {
    var r = Wa(Lt, n)
    ;(r.tag = Ov), (r.payload = { element: null })
    var a = t.value
    return (
      (r.callback = function () {
        C_(a), Op(e, t)
      }),
      r
    )
  }
  function Mp(e, t, n) {
    var r = Wa(Lt, n)
    r.tag = Ov
    var a = e.type.getDerivedStateFromError
    if (typeof a == 'function') {
      var l = t.value
      ;(r.payload = function () {
        return a(l)
      }),
        (r.callback = function () {
          rx(e), Op(e, t)
        })
    }
    var u = e.stateNode
    return (
      u !== null &&
        typeof u.componentDidCatch == 'function' &&
        (r.callback = function () {
          rx(e), Op(e, t), typeof a != 'function' && S_(this)
          var v = t.value,
            g = t.stack
          this.componentDidCatch(v, { componentStack: g !== null ? g : '' }),
            typeof a != 'function' &&
              (Er(e.lanes, Ae) ||
                f(
                  '%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.',
                  Be(e) || 'Unknown'
                ))
        }),
      r
    )
  }
  function G0(e, t, n) {
    var r = e.pingCache,
      a
    if (
      (r === null
        ? ((r = e.pingCache = new LD()), (a = new Set()), r.set(t, a))
        : ((a = r.get(t)), a === void 0 && ((a = new Set()), r.set(t, a))),
      !a.has(n))
    ) {
      a.add(n)
      var l = R_.bind(null, e, t, n)
      Br && Cs(e, n), t.then(l, l)
    }
  }
  function kD(e, t, n, r) {
    var a = e.updateQueue
    if (a === null) {
      var l = new Set()
      l.add(n), (e.updateQueue = l)
    } else a.add(n)
  }
  function AD(e, t) {
    var n = e.tag
    if ((e.mode & tt) === _e && (n === x || n === ve || n === ne)) {
      var r = e.alternate
      r
        ? ((e.updateQueue = r.updateQueue),
          (e.memoizedState = r.memoizedState),
          (e.lanes = r.lanes))
        : ((e.updateQueue = null), (e.memoizedState = null))
    }
  }
  function q0(e) {
    var t = e
    do {
      if (t.tag === Z && gD(t)) return t
      t = t.return
    } while (t !== null)
    return null
  }
  function Q0(e, t, n, r, a) {
    if ((e.mode & tt) === _e) {
      if (e === t) e.flags |= tr
      else {
        if (
          ((e.flags |= pt),
          (n.flags |= Xd),
          (n.flags &= ~(vE | uu)),
          n.tag === T)
        ) {
          var l = n.alternate
          if (l === null) n.tag = ee
          else {
            var u = Wa(Lt, Ae)
            ;(u.tag = nf), Ci(n, u, Ae)
          }
        }
        n.lanes = We(n.lanes, Ae)
      }
      return e
    }
    return (e.flags |= tr), (e.lanes = a), e
  }
  function UD(e, t, n, r, a) {
    if (
      ((n.flags |= uu),
      Br && Cs(e, a),
      r !== null && typeof r == 'object' && typeof r.then == 'function')
    ) {
      var l = r
      AD(n), kn() && n.mode & tt && Hb()
      var u = q0(t)
      if (u !== null) {
        ;(u.flags &= ~Aa),
          Q0(u, t, n, e, a),
          u.mode & tt && G0(e, l, a),
          kD(u, e, l)
        return
      } else {
        if (!aC(a)) {
          G0(e, l, a), ch()
          return
        }
        var c = new Error(
          'A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.'
        )
        r = c
      }
    } else if (kn() && n.mode & tt) {
      Hb()
      var v = q0(t)
      if (v !== null) {
        ;(v.flags & tr) === De && (v.flags |= Aa),
          Q0(v, t, n, e, a),
          Ev(ml(r, n))
        return
      }
    }
    ;(r = ml(r, n)), v_(r)
    var g = t
    do {
      switch (g.tag) {
        case M: {
          var b = r
          g.flags |= tr
          var D = hu(a)
          g.lanes = We(g.lanes, D)
          var w = W0(g, b, D)
          kv(g, w)
          return
        }
        case T:
          var A = r,
            U = g.type,
            $ = g.stateNode
          if (
            (g.flags & pt) === De &&
            (typeof U.getDerivedStateFromError == 'function' ||
              ($ !== null &&
                typeof $.componentDidCatch == 'function' &&
                !qN($)))
          ) {
            g.flags |= tr
            var se = hu(a)
            g.lanes = We(g.lanes, se)
            var Se = Mp(g, A, se)
            kv(g, Se)
            return
          }
          break
      }
      g = g.return
    } while (g !== null)
  }
  function FD() {
    return null
  }
  var ss = s.ReactCurrentOwner,
    Kr = !1,
    Lp,
    cs,
    kp,
    Ap,
    Up,
    vl,
    Fp,
    Af
  ;(Lp = {}),
    (cs = {}),
    (kp = {}),
    (Ap = {}),
    (Up = {}),
    (vl = !1),
    (Fp = {}),
    (Af = {})
  function nr(e, t, n, r) {
    e === null
      ? (t.child = m0(t, null, n, r))
      : (t.child = co(t, e.child, n, r))
  }
  function jD(e, t, n, r) {
    ;(t.child = co(t, e.child, null, r)), (t.child = co(t, null, n, r))
  }
  function K0(e, t, n, r, a) {
    if (t.type !== t.elementType) {
      var l = n.propTypes
      l && Ir(l, r, 'prop', mt(n))
    }
    var u = n.render,
      c = t.ref,
      v,
      g
    so(t, a), cu(t)
    {
      if (
        ((ss.current = t),
        xr(!0),
        (v = yo(e, t, u, r, c, a)),
        (g = go()),
        t.mode & on)
      ) {
        wn(!0)
        try {
          ;(v = yo(e, t, u, r, c, a)), (g = go())
        } finally {
          wn(!1)
        }
      }
      xr(!1)
    }
    return (
      Vl(),
      e !== null && !Kr
        ? (g0(e, t, a), Ga(e, t, a))
        : (kn() && g && yv(t), (t.flags |= $l), nr(e, t, v, a), t.child)
    )
  }
  function X0(e, t, n, r, a) {
    if (e === null) {
      var l = n.type
      if (B_(l) && n.compare === null && n.defaultProps === void 0) {
        var u = l
        return (
          (u = To(l)), (t.tag = ne), (t.type = u), Hp(t, l), J0(e, t, u, r, a)
        )
      }
      {
        var c = l.propTypes
        c && Ir(c, r, 'prop', mt(l))
      }
      var v = xh(n.type, null, r, t, t.mode, a)
      return (v.ref = t.ref), (v.return = t), (t.child = v), v
    }
    {
      var g = n.type,
        b = g.propTypes
      b && Ir(b, r, 'prop', mt(g))
    }
    var D = e.child,
      w = Yp(e, a)
    if (!w) {
      var A = D.memoizedProps,
        U = n.compare
      if (((U = U !== null ? U : Mu), U(A, r) && e.ref === t.ref))
        return Ga(e, t, a)
    }
    t.flags |= $l
    var $ = bl(D, r)
    return ($.ref = t.ref), ($.return = t), (t.child = $), $
  }
  function J0(e, t, n, r, a) {
    if (t.type !== t.elementType) {
      var l = t.elementType
      if (l.$$typeof === Xe) {
        var u = l,
          c = u._payload,
          v = u._init
        try {
          l = v(c)
        } catch {
          l = null
        }
        var g = l && l.propTypes
        g && Ir(g, r, 'prop', mt(l))
      }
    }
    if (e !== null) {
      var b = e.memoizedProps
      if (Mu(b, r) && e.ref === t.ref && t.type === e.type)
        if (((Kr = !1), (t.pendingProps = r = b), Yp(e, a)))
          (e.flags & Xd) !== De && (Kr = !0)
        else return (t.lanes = e.lanes), Ga(e, t, a)
    }
    return jp(e, t, n, r, a)
  }
  function Z0(e, t, n) {
    var r = t.pendingProps,
      a = r.children,
      l = e !== null ? e.memoizedState : null
    if (r.mode === 'hidden' || Pn)
      if ((t.mode & tt) === _e) {
        var u = { baseLanes: W, cachePool: null, transitions: null }
        ;(t.memoizedState = u), Gf(t, n)
      } else if (Er(n, Sr)) {
        var D = { baseLanes: W, cachePool: null, transitions: null }
        t.memoizedState = D
        var w = l !== null ? l.baseLanes : n
        Gf(t, w)
      } else {
        var c = null,
          v
        if (l !== null) {
          var g = l.baseLanes
          v = We(g, n)
        } else v = n
        t.lanes = t.childLanes = Sr
        var b = { baseLanes: v, cachePool: c, transitions: null }
        return (t.memoizedState = b), (t.updateQueue = null), Gf(t, v), null
      }
    else {
      var A
      l !== null
        ? ((A = We(l.baseLanes, n)), (t.memoizedState = null))
        : (A = n),
        Gf(t, A)
    }
    return nr(e, t, a, n), t.child
  }
  function zD(e, t, n) {
    var r = t.pendingProps
    return nr(e, t, r, n), t.child
  }
  function HD(e, t, n) {
    var r = t.pendingProps.children
    return nr(e, t, r, n), t.child
  }
  function $D(e, t, n) {
    {
      t.flags |= it
      {
        var r = t.stateNode
        ;(r.effectDuration = 0), (r.passiveEffectDuration = 0)
      }
    }
    var a = t.pendingProps,
      l = a.children
    return nr(e, t, l, n), t.child
  }
  function eN(e, t) {
    var n = t.ref
    ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= di), (t.flags |= Jd))
  }
  function jp(e, t, n, r, a) {
    if (t.type !== t.elementType) {
      var l = n.propTypes
      l && Ir(l, r, 'prop', mt(n))
    }
    var u
    {
      var c = ro(t, n, !0)
      u = ao(t, c)
    }
    var v, g
    so(t, a), cu(t)
    {
      if (
        ((ss.current = t),
        xr(!0),
        (v = yo(e, t, n, r, u, a)),
        (g = go()),
        t.mode & on)
      ) {
        wn(!0)
        try {
          ;(v = yo(e, t, n, r, u, a)), (g = go())
        } finally {
          wn(!1)
        }
      }
      xr(!1)
    }
    return (
      Vl(),
      e !== null && !Kr
        ? (g0(e, t, a), Ga(e, t, a))
        : (kn() && g && yv(t), (t.flags |= $l), nr(e, t, v, a), t.child)
    )
  }
  function tN(e, t, n, r, a) {
    {
      switch (rO(t)) {
        case !1: {
          var l = t.stateNode,
            u = t.type,
            c = new u(t.memoizedProps, l.context),
            v = c.state
          l.updater.enqueueSetState(l, v, null)
          break
        }
        case !0: {
          ;(t.flags |= pt), (t.flags |= tr)
          var g = new Error('Simulated error coming from DevTools'),
            b = hu(a)
          t.lanes = We(t.lanes, b)
          var D = Mp(t, ml(g, t), b)
          kv(t, D)
          break
        }
      }
      if (t.type !== t.elementType) {
        var w = n.propTypes
        w && Ir(w, r, 'prop', mt(n))
      }
    }
    var A
    fa(n) ? ((A = !0), Yc(t)) : (A = !1), so(t, a)
    var U = t.stateNode,
      $
    U === null
      ? (Ff(e, t), u0(t, n, r), Yv(t, n, r, a), ($ = !0))
      : e === null
      ? ($ = dD(t, n, r, a))
      : ($ = mD(e, t, n, r, a))
    var se = zp(e, t, n, $, A, a)
    {
      var Se = t.stateNode
      $ &&
        Se.props !== r &&
        (vl ||
          f(
            'It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.',
            Be(t) || 'a component'
          ),
        (vl = !0))
    }
    return se
  }
  function zp(e, t, n, r, a, l) {
    eN(e, t)
    var u = (t.flags & pt) !== De
    if (!r && !u) return a && Ub(t, n, !1), Ga(e, t, l)
    var c = t.stateNode
    ss.current = t
    var v
    if (u && typeof n.getDerivedStateFromError != 'function') (v = null), Y0()
    else {
      cu(t)
      {
        if ((xr(!0), (v = c.render()), t.mode & on)) {
          wn(!0)
          try {
            c.render()
          } finally {
            wn(!1)
          }
        }
        xr(!1)
      }
      Vl()
    }
    return (
      (t.flags |= $l),
      e !== null && u ? jD(e, t, v, l) : nr(e, t, v, l),
      (t.memoizedState = c.state),
      a && Ub(t, n, !0),
      t.child
    )
  }
  function nN(e) {
    var t = e.stateNode
    t.pendingContext
      ? kb(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && kb(e, t.context, !1),
      Xv(e, t.containerInfo)
  }
  function PD(e, t, n) {
    if ((nN(t), e === null))
      throw new Error('Should have a current fiber. This is a bug in React.')
    var r = t.pendingProps,
      a = t.memoizedState,
      l = a.element
    e0(e, t), of(t, r, null, n)
    var u = t.memoizedState
    t.stateNode
    var c = u.element
    if (a.isDehydrated) {
      var v = {
          element: c,
          isDehydrated: !1,
          cache: u.cache,
          pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
          transitions: u.transitions,
        },
        g = t.updateQueue
      if (((g.baseState = v), (t.memoizedState = v), t.flags & Aa)) {
        var b = ml(
          new Error(
            'There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.'
          ),
          t
        )
        return rN(e, t, c, n, b)
      } else if (c !== l) {
        var D = ml(
          new Error(
            'This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.'
          ),
          t
        )
        return rN(e, t, c, n, D)
      } else {
        Yw(t)
        var w = m0(t, null, c, n)
        t.child = w
        for (var A = w; A; ) (A.flags = (A.flags & ~ln) | Ua), (A = A.sibling)
      }
    } else {
      if ((oo(), c === l)) return Ga(e, t, n)
      nr(e, t, c, n)
    }
    return t.child
  }
  function rN(e, t, n, r, a) {
    return oo(), Ev(a), (t.flags |= Aa), nr(e, t, n, r), t.child
  }
  function BD(e, t, n) {
    p0(t), e === null && Sv(t)
    var r = t.type,
      a = t.pendingProps,
      l = e !== null ? e.memoizedProps : null,
      u = a.children,
      c = rv(r, a)
    return (
      c ? (u = null) : l !== null && rv(r, l) && (t.flags |= ou),
      eN(e, t),
      nr(e, t, u, n),
      t.child
    )
  }
  function VD(e, t) {
    return e === null && Sv(t), null
  }
  function ID(e, t, n, r) {
    Ff(e, t)
    var a = t.pendingProps,
      l = n,
      u = l._payload,
      c = l._init,
      v = c(u)
    t.type = v
    var g = (t.tag = V_(v)),
      b = Gr(v, a),
      D
    switch (g) {
      case x:
        return Hp(t, v), (t.type = v = To(v)), (D = jp(null, t, v, b, r)), D
      case T:
        return (t.type = v = ph(v)), (D = tN(null, t, v, b, r)), D
      case ve:
        return (t.type = v = hh(v)), (D = K0(null, t, v, b, r)), D
      case Ee: {
        if (t.type !== t.elementType) {
          var w = v.propTypes
          w && Ir(w, b, 'prop', mt(v))
        }
        return (D = X0(null, t, v, Gr(v.type, b), r)), D
      }
    }
    var A = ''
    throw (
      (v !== null &&
        typeof v == 'object' &&
        v.$$typeof === Xe &&
        (A = ' Did you wrap a component in React.lazy() more than once?'),
      new Error(
        'Element type is invalid. Received a promise that resolves to: ' +
          v +
          '. ' +
          ('Lazy element type must resolve to a class or function.' + A)
      ))
    )
  }
  function YD(e, t, n, r, a) {
    Ff(e, t), (t.tag = T)
    var l
    return (
      fa(n) ? ((l = !0), Yc(t)) : (l = !1),
      so(t, a),
      u0(t, n, r),
      Yv(t, n, r, a),
      zp(null, t, n, !0, l, a)
    )
  }
  function WD(e, t, n, r) {
    Ff(e, t)
    var a = t.pendingProps,
      l
    {
      var u = ro(t, n, !1)
      l = ao(t, u)
    }
    so(t, r)
    var c, v
    cu(t)
    {
      if (n.prototype && typeof n.prototype.render == 'function') {
        var g = mt(n) || 'Unknown'
        Lp[g] ||
          (f(
            "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
            g,
            g
          ),
          (Lp[g] = !0))
      }
      t.mode & on && Wr.recordLegacyContextWarning(t, null),
        xr(!0),
        (ss.current = t),
        (c = yo(null, t, n, a, l, r)),
        (v = go()),
        xr(!1)
    }
    if (
      (Vl(),
      (t.flags |= $l),
      typeof c == 'object' &&
        c !== null &&
        typeof c.render == 'function' &&
        c.$$typeof === void 0)
    ) {
      var b = mt(n) || 'Unknown'
      cs[b] ||
        (f(
          "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
          b,
          b,
          b
        ),
        (cs[b] = !0))
    }
    if (
      typeof c == 'object' &&
      c !== null &&
      typeof c.render == 'function' &&
      c.$$typeof === void 0
    ) {
      {
        var D = mt(n) || 'Unknown'
        cs[D] ||
          (f(
            "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
            D,
            D,
            D
          ),
          (cs[D] = !0))
      }
      ;(t.tag = T), (t.memoizedState = null), (t.updateQueue = null)
      var w = !1
      return (
        fa(n) ? ((w = !0), Yc(t)) : (w = !1),
        (t.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        Lv(t),
        o0(t, c),
        Yv(t, n, a, r),
        zp(null, t, n, !0, w, r)
      )
    } else {
      if (((t.tag = x), t.mode & on)) {
        wn(!0)
        try {
          ;(c = yo(null, t, n, a, l, r)), (v = go())
        } finally {
          wn(!1)
        }
      }
      return kn() && v && yv(t), nr(null, t, c, r), Hp(t, n), t.child
    }
  }
  function Hp(e, t) {
    {
      if (
        (t &&
          t.childContextTypes &&
          f(
            '%s(...): childContextTypes cannot be defined on a function component.',
            t.displayName || t.name || 'Component'
          ),
        e.ref !== null)
      ) {
        var n = '',
          r = ui()
        r &&
          (n +=
            `

Check the render method of \`` +
            r +
            '`.')
        var a = r || '',
          l = e._debugSource
        l && (a = l.fileName + ':' + l.lineNumber),
          Up[a] ||
            ((Up[a] = !0),
            f(
              'Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s',
              n
            ))
      }
      if (typeof t.getDerivedStateFromProps == 'function') {
        var u = mt(t) || 'Unknown'
        Ap[u] ||
          (f(
            '%s: Function components do not support getDerivedStateFromProps.',
            u
          ),
          (Ap[u] = !0))
      }
      if (typeof t.contextType == 'object' && t.contextType !== null) {
        var c = mt(t) || 'Unknown'
        kp[c] ||
          (f('%s: Function components do not support contextType.', c),
          (kp[c] = !0))
      }
    }
  }
  var $p = { dehydrated: null, treeContext: null, retryLane: Dn }
  function Pp(e) {
    return { baseLanes: e, cachePool: FD(), transitions: null }
  }
  function GD(e, t) {
    var n = null
    return {
      baseLanes: We(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions,
    }
  }
  function qD(e, t, n, r) {
    if (t !== null) {
      var a = t.memoizedState
      if (a === null) return !1
    }
    return ep(e, ts)
  }
  function QD(e, t) {
    return vc(e.childLanes, t)
  }
  function aN(e, t, n) {
    var r = t.pendingProps
    aO(t) && (t.flags |= pt)
    var a = qr.current,
      l = !1,
      u = (t.flags & pt) !== De
    if (
      (u || qD(a, e)
        ? ((l = !0), (t.flags &= ~pt))
        : (e === null || e.memoizedState !== null) && (a = yD(a, y0)),
      (a = mo(a)),
      Ti(t, a),
      e === null)
    ) {
      Sv(t)
      var c = t.memoizedState
      if (c !== null) {
        var v = c.dehydrated
        if (v !== null) return e2(t, v)
      }
      var g = r.children,
        b = r.fallback
      if (l) {
        var D = KD(t, g, b, n),
          w = t.child
        return (w.memoizedState = Pp(n)), (t.memoizedState = $p), D
      } else return Bp(t, g)
    } else {
      var A = e.memoizedState
      if (A !== null) {
        var U = A.dehydrated
        if (U !== null) return t2(e, t, u, r, U, A, n)
      }
      if (l) {
        var $ = r.fallback,
          se = r.children,
          Se = JD(e, t, se, $, n),
          Ne = t.child,
          rt = e.child.memoizedState
        return (
          (Ne.memoizedState = rt === null ? Pp(n) : GD(rt, n)),
          (Ne.childLanes = QD(e, n)),
          (t.memoizedState = $p),
          Se
        )
      } else {
        var qe = r.children,
          L = XD(e, t, qe, n)
        return (t.memoizedState = null), L
      }
    }
  }
  function Bp(e, t, n) {
    var r = e.mode,
      a = { mode: 'visible', children: t },
      l = Vp(a, r)
    return (l.return = e), (e.child = l), l
  }
  function KD(e, t, n, r) {
    var a = e.mode,
      l = e.child,
      u = { mode: 'hidden', children: t },
      c,
      v
    return (
      (a & tt) === _e && l !== null
        ? ((c = l),
          (c.childLanes = W),
          (c.pendingProps = u),
          e.mode & xt &&
            ((c.actualDuration = 0),
            (c.actualStartTime = -1),
            (c.selfBaseDuration = 0),
            (c.treeBaseDuration = 0)),
          (v = Ai(n, a, r, null)))
        : ((c = Vp(u, a)), (v = Ai(n, a, r, null))),
      (c.return = e),
      (v.return = e),
      (c.sibling = v),
      (e.child = c),
      v
    )
  }
  function Vp(e, t, n) {
    return ix(e, t, W, null)
  }
  function iN(e, t) {
    return bl(e, t)
  }
  function XD(e, t, n, r) {
    var a = e.child,
      l = a.sibling,
      u = iN(a, { mode: 'visible', children: n })
    if (
      ((t.mode & tt) === _e && (u.lanes = r),
      (u.return = t),
      (u.sibling = null),
      l !== null)
    ) {
      var c = t.deletions
      c === null ? ((t.deletions = [l]), (t.flags |= Wi)) : c.push(l)
    }
    return (t.child = u), u
  }
  function JD(e, t, n, r, a) {
    var l = t.mode,
      u = e.child,
      c = u.sibling,
      v = { mode: 'hidden', children: n },
      g
    if ((l & tt) === _e && t.child !== u) {
      var b = t.child
      ;(g = b),
        (g.childLanes = W),
        (g.pendingProps = v),
        t.mode & xt &&
          ((g.actualDuration = 0),
          (g.actualStartTime = -1),
          (g.selfBaseDuration = u.selfBaseDuration),
          (g.treeBaseDuration = u.treeBaseDuration)),
        (t.deletions = null)
    } else (g = iN(u, v)), (g.subtreeFlags = u.subtreeFlags & ja)
    var D
    return (
      c !== null ? (D = bl(c, r)) : ((D = Ai(r, l, a, null)), (D.flags |= ln)),
      (D.return = t),
      (g.return = t),
      (g.sibling = D),
      (t.child = g),
      D
    )
  }
  function Uf(e, t, n, r) {
    r !== null && Ev(r), co(t, e.child, null, n)
    var a = t.pendingProps,
      l = a.children,
      u = Bp(t, l)
    return (u.flags |= ln), (t.memoizedState = null), u
  }
  function ZD(e, t, n, r, a) {
    var l = t.mode,
      u = { mode: 'visible', children: n },
      c = Vp(u, l),
      v = Ai(r, l, a, null)
    return (
      (v.flags |= ln),
      (c.return = t),
      (v.return = t),
      (c.sibling = v),
      (t.child = c),
      (t.mode & tt) !== _e && co(t, e.child, null, a),
      v
    )
  }
  function e2(e, t, n) {
    return (
      (e.mode & tt) === _e
        ? (f(
            'Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.'
          ),
          (e.lanes = Ae))
        : ov(t)
        ? (e.lanes = Ji)
        : (e.lanes = Sr),
      null
    )
  }
  function t2(e, t, n, r, a, l, u) {
    if (n)
      if (t.flags & Aa) {
        t.flags &= ~Aa
        var L = _p(
          new Error(
            'There was an error while hydrating this Suspense boundary. Switched to client rendering.'
          )
        )
        return Uf(e, t, u, L)
      } else {
        if (t.memoizedState !== null)
          return (t.child = e.child), (t.flags |= pt), null
        var P = r.children,
          k = r.fallback,
          q = ZD(e, t, P, k, u),
          ce = t.child
        return (ce.memoizedState = Pp(u)), (t.memoizedState = $p), q
      }
    else {
      if ((Vw(), (t.mode & tt) === _e)) return Uf(e, t, u, null)
      if (ov(a)) {
        var c, v, g
        {
          var b = lw(a)
          ;(c = b.digest), (v = b.message), (g = b.stack)
        }
        var D
        v
          ? (D = new Error(v))
          : (D = new Error(
              'The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.'
            ))
        var w = _p(D, c, g)
        return Uf(e, t, u, w)
      }
      var A = Er(u, e.childLanes)
      if (Kr || A) {
        var U = Wf()
        if (U !== null) {
          var $ = dC(U, u)
          if ($ !== Dn && $ !== l.retryLane) {
            l.retryLane = $
            var se = Lt
            fr(e, $), gn(U, e, $, se)
          }
        }
        ch()
        var Se = _p(
          new Error(
            'This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.'
          )
        )
        return Uf(e, t, u, Se)
      } else if (wb(a)) {
        ;(t.flags |= pt), (t.child = e.child)
        var Ne = T_.bind(null, e)
        return ow(a, Ne), null
      } else {
        Ww(t, a, l.treeContext)
        var rt = r.children,
          qe = Bp(t, rt)
        return (qe.flags |= Ua), qe
      }
    }
  }
  function lN(e, t, n) {
    e.lanes = We(e.lanes, t)
    var r = e.alternate
    r !== null && (r.lanes = We(r.lanes, t)), Dv(e.return, t, n)
  }
  function n2(e, t, n) {
    for (var r = t; r !== null; ) {
      if (r.tag === Z) {
        var a = r.memoizedState
        a !== null && lN(r, n, e)
      } else if (r.tag === Te) lN(r, n, e)
      else if (r.child !== null) {
        ;(r.child.return = r), (r = r.child)
        continue
      }
      if (r === e) return
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e) return
        r = r.return
      }
      ;(r.sibling.return = r.return), (r = r.sibling)
    }
  }
  function r2(e) {
    for (var t = e, n = null; t !== null; ) {
      var r = t.alternate
      r !== null && vf(r) === null && (n = t), (t = t.sibling)
    }
    return n
  }
  function a2(e) {
    if (
      e !== void 0 &&
      e !== 'forwards' &&
      e !== 'backwards' &&
      e !== 'together' &&
      !Fp[e]
    )
      if (((Fp[e] = !0), typeof e == 'string'))
        switch (e.toLowerCase()) {
          case 'together':
          case 'forwards':
          case 'backwards': {
            f(
              '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
              e,
              e.toLowerCase()
            )
            break
          }
          case 'forward':
          case 'backward': {
            f(
              '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
              e,
              e.toLowerCase()
            )
            break
          }
          default:
            f(
              '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
              e
            )
            break
        }
      else
        f(
          '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
          e
        )
  }
  function i2(e, t) {
    e !== void 0 &&
      !Af[e] &&
      (e !== 'collapsed' && e !== 'hidden'
        ? ((Af[e] = !0),
          f(
            '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
            e
          ))
        : t !== 'forwards' &&
          t !== 'backwards' &&
          ((Af[e] = !0),
          f(
            '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
            e
          )))
  }
  function oN(e, t) {
    {
      var n = vt(e),
        r = !n && typeof Da(e) == 'function'
      if (n || r) {
        var a = n ? 'array' : 'iterable'
        return (
          f(
            'A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>',
            a,
            t,
            a
          ),
          !1
        )
      }
    }
    return !0
  }
  function l2(e, t) {
    if (
      (t === 'forwards' || t === 'backwards') &&
      e !== void 0 &&
      e !== null &&
      e !== !1
    )
      if (vt(e)) {
        for (var n = 0; n < e.length; n++) if (!oN(e[n], n)) return
      } else {
        var r = Da(e)
        if (typeof r == 'function') {
          var a = r.call(e)
          if (a)
            for (var l = a.next(), u = 0; !l.done; l = a.next()) {
              if (!oN(l.value, u)) return
              u++
            }
        } else
          f(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            t
          )
      }
  }
  function Ip(e, t, n, r, a) {
    var l = e.memoizedState
    l === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: a,
        })
      : ((l.isBackwards = t),
        (l.rendering = null),
        (l.renderingStartTime = 0),
        (l.last = r),
        (l.tail = n),
        (l.tailMode = a))
  }
  function uN(e, t, n) {
    var r = t.pendingProps,
      a = r.revealOrder,
      l = r.tail,
      u = r.children
    a2(a), i2(l, a), l2(u, a), nr(e, t, u, n)
    var c = qr.current,
      v = ep(c, ts)
    if (v) (c = tp(c, ts)), (t.flags |= pt)
    else {
      var g = e !== null && (e.flags & pt) !== De
      g && n2(t, t.child, n), (c = mo(c))
    }
    if ((Ti(t, c), (t.mode & tt) === _e)) t.memoizedState = null
    else
      switch (a) {
        case 'forwards': {
          var b = r2(t.child),
            D
          b === null
            ? ((D = t.child), (t.child = null))
            : ((D = b.sibling), (b.sibling = null)),
            Ip(t, !1, D, b, l)
          break
        }
        case 'backwards': {
          var w = null,
            A = t.child
          for (t.child = null; A !== null; ) {
            var U = A.alternate
            if (U !== null && vf(U) === null) {
              t.child = A
              break
            }
            var $ = A.sibling
            ;(A.sibling = w), (w = A), (A = $)
          }
          Ip(t, !0, w, null, l)
          break
        }
        case 'together': {
          Ip(t, !1, null, null, void 0)
          break
        }
        default:
          t.memoizedState = null
      }
    return t.child
  }
  function o2(e, t, n) {
    Xv(t, t.stateNode.containerInfo)
    var r = t.pendingProps
    return e === null ? (t.child = co(t, null, r, n)) : nr(e, t, r, n), t.child
  }
  var sN = !1
  function u2(e, t, n) {
    var r = t.type,
      a = r._context,
      l = t.pendingProps,
      u = t.memoizedProps,
      c = l.value
    {
      'value' in l ||
        sN ||
        ((sN = !0),
        f(
          'The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?'
        ))
      var v = t.type.propTypes
      v && Ir(v, l, 'prop', 'Context.Provider')
    }
    if ((Kb(t, a, c), u !== null)) {
      var g = u.value
      if (Tr(g, c)) {
        if (u.children === l.children && !Vc()) return Ga(e, t, n)
      } else nD(t, a, n)
    }
    var b = l.children
    return nr(e, t, b, n), t.child
  }
  var cN = !1
  function s2(e, t, n) {
    var r = t.type
    r._context === void 0
      ? r !== r.Consumer &&
        (cN ||
          ((cN = !0),
          f(
            'Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
          )))
      : (r = r._context)
    var a = t.pendingProps,
      l = a.children
    typeof l != 'function' &&
      f(
        "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
      ),
      so(t, n)
    var u = un(r)
    cu(t)
    var c
    return (
      (ss.current = t),
      xr(!0),
      (c = l(u)),
      xr(!1),
      Vl(),
      (t.flags |= $l),
      nr(e, t, c, n),
      t.child
    )
  }
  function fs() {
    Kr = !0
  }
  function Ff(e, t) {
    ;(t.mode & tt) === _e &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= ln))
  }
  function Ga(e, t, n) {
    return (
      e !== null && (t.dependencies = e.dependencies),
      Y0(),
      Es(t.lanes),
      Er(n, t.childLanes) ? (vD(e, t), t.child) : null
    )
  }
  function c2(e, t, n) {
    {
      var r = t.return
      if (r === null) throw new Error('Cannot swap the root fiber.')
      if (
        ((e.alternate = null),
        (t.alternate = null),
        (n.index = t.index),
        (n.sibling = t.sibling),
        (n.return = t.return),
        (n.ref = t.ref),
        t === r.child)
      )
        r.child = n
      else {
        var a = r.child
        if (a === null) throw new Error('Expected parent to have a child.')
        for (; a.sibling !== t; )
          if (((a = a.sibling), a === null))
            throw new Error('Expected to find the previous sibling.')
        a.sibling = n
      }
      var l = r.deletions
      return (
        l === null ? ((r.deletions = [e]), (r.flags |= Wi)) : l.push(e),
        (n.flags |= ln),
        n
      )
    }
  }
  function Yp(e, t) {
    var n = e.lanes
    return !!Er(n, t)
  }
  function f2(e, t, n) {
    switch (t.tag) {
      case M:
        nN(t), t.stateNode, oo()
        break
      case j:
        p0(t)
        break
      case T: {
        var r = t.type
        fa(r) && Yc(t)
        break
      }
      case B:
        Xv(t, t.stateNode.containerInfo)
        break
      case X: {
        var a = t.memoizedProps.value,
          l = t.type._context
        Kb(t, l, a)
        break
      }
      case ye:
        {
          var u = Er(n, t.childLanes)
          u && (t.flags |= it)
          {
            var c = t.stateNode
            ;(c.effectDuration = 0), (c.passiveEffectDuration = 0)
          }
        }
        break
      case Z: {
        var v = t.memoizedState
        if (v !== null) {
          if (v.dehydrated !== null)
            return Ti(t, mo(qr.current)), (t.flags |= pt), null
          var g = t.child,
            b = g.childLanes
          if (Er(n, b)) return aN(e, t, n)
          Ti(t, mo(qr.current))
          var D = Ga(e, t, n)
          return D !== null ? D.sibling : null
        } else Ti(t, mo(qr.current))
        break
      }
      case Te: {
        var w = (e.flags & pt) !== De,
          A = Er(n, t.childLanes)
        if (w) {
          if (A) return uN(e, t, n)
          t.flags |= pt
        }
        var U = t.memoizedState
        if (
          (U !== null &&
            ((U.rendering = null), (U.tail = null), (U.lastEffect = null)),
          Ti(t, qr.current),
          A)
        )
          break
        return null
      }
      case ge:
      case He:
        return (t.lanes = W), Z0(e, t, n)
    }
    return Ga(e, t, n)
  }
  function fN(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return c2(
        e,
        t,
        xh(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        )
      )
    if (e !== null) {
      var r = e.memoizedProps,
        a = t.pendingProps
      if (r !== a || Vc() || t.type !== e.type) Kr = !0
      else {
        var l = Yp(e, n)
        if (!l && (t.flags & pt) === De) return (Kr = !1), f2(e, t, n)
        ;(e.flags & Xd) !== De ? (Kr = !0) : (Kr = !1)
      }
    } else if (((Kr = !1), kn() && jw(t))) {
      var u = t.index,
        c = zw()
      zb(t, c, u)
    }
    switch (((t.lanes = W), t.tag)) {
      case E:
        return WD(e, t, t.type, n)
      case st: {
        var v = t.elementType
        return ID(e, t, v, n)
      }
      case x: {
        var g = t.type,
          b = t.pendingProps,
          D = t.elementType === g ? b : Gr(g, b)
        return jp(e, t, g, D, n)
      }
      case T: {
        var w = t.type,
          A = t.pendingProps,
          U = t.elementType === w ? A : Gr(w, A)
        return tN(e, t, w, U, n)
      }
      case M:
        return PD(e, t, n)
      case j:
        return BD(e, t, n)
      case z:
        return VD(e, t)
      case Z:
        return aN(e, t, n)
      case B:
        return o2(e, t, n)
      case ve: {
        var $ = t.type,
          se = t.pendingProps,
          Se = t.elementType === $ ? se : Gr($, se)
        return K0(e, t, $, Se, n)
      }
      case O:
        return zD(e, t, n)
      case de:
        return HD(e, t, n)
      case ye:
        return $D(e, t, n)
      case X:
        return u2(e, t, n)
      case Y:
        return s2(e, t, n)
      case Ee: {
        var Ne = t.type,
          rt = t.pendingProps,
          qe = Gr(Ne, rt)
        if (t.type !== t.elementType) {
          var L = Ne.propTypes
          L && Ir(L, qe, 'prop', mt(Ne))
        }
        return (qe = Gr(Ne.type, qe)), X0(e, t, Ne, qe, n)
      }
      case ne:
        return J0(e, t, t.type, t.pendingProps, n)
      case ee: {
        var P = t.type,
          k = t.pendingProps,
          q = t.elementType === P ? k : Gr(P, k)
        return YD(e, t, P, q, n)
      }
      case Te:
        return uN(e, t, n)
      case at:
        break
      case ge:
        return Z0(e, t, n)
    }
    throw new Error(
      'Unknown unit of work tag (' +
        t.tag +
        '). This error is likely caused by a bug in React. Please file an issue.'
    )
  }
  function bo(e) {
    e.flags |= it
  }
  function dN(e) {
    ;(e.flags |= di), (e.flags |= Jd)
  }
  var mN, Wp, vN, pN
  ;(mN = function (e, t, n, r) {
    for (var a = t.child; a !== null; ) {
      if (a.tag === j || a.tag === z) AT(e, a.stateNode)
      else if (a.tag !== B) {
        if (a.child !== null) {
          ;(a.child.return = a), (a = a.child)
          continue
        }
      }
      if (a === t) return
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === t) return
        a = a.return
      }
      ;(a.sibling.return = a.return), (a = a.sibling)
    }
  }),
    (Wp = function (e, t) {}),
    (vN = function (e, t, n, r, a) {
      var l = e.memoizedProps
      if (l !== r) {
        var u = t.stateNode,
          c = Jv(),
          v = FT(u, n, l, r, a, c)
        ;(t.updateQueue = v), v && bo(t)
      }
    }),
    (pN = function (e, t, n, r) {
      n !== r && bo(t)
    })
  function ds(e, t) {
    if (!kn())
      switch (e.tailMode) {
        case 'hidden': {
          for (var n = e.tail, r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling)
          r === null ? (e.tail = null) : (r.sibling = null)
          break
        }
        case 'collapsed': {
          for (var a = e.tail, l = null; a !== null; )
            a.alternate !== null && (l = a), (a = a.sibling)
          l === null
            ? !t && e.tail !== null
              ? (e.tail.sibling = null)
              : (e.tail = null)
            : (l.sibling = null)
          break
        }
      }
  }
  function Un(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = W,
      r = De
    if (t) {
      if ((e.mode & xt) !== _e) {
        for (var v = e.selfBaseDuration, g = e.child; g !== null; )
          (n = We(n, We(g.lanes, g.childLanes))),
            (r |= g.subtreeFlags & ja),
            (r |= g.flags & ja),
            (v += g.treeBaseDuration),
            (g = g.sibling)
        e.treeBaseDuration = v
      } else
        for (var b = e.child; b !== null; )
          (n = We(n, We(b.lanes, b.childLanes))),
            (r |= b.subtreeFlags & ja),
            (r |= b.flags & ja),
            (b.return = e),
            (b = b.sibling)
      e.subtreeFlags |= r
    } else {
      if ((e.mode & xt) !== _e) {
        for (
          var a = e.actualDuration, l = e.selfBaseDuration, u = e.child;
          u !== null;

        )
          (n = We(n, We(u.lanes, u.childLanes))),
            (r |= u.subtreeFlags),
            (r |= u.flags),
            (a += u.actualDuration),
            (l += u.treeBaseDuration),
            (u = u.sibling)
        ;(e.actualDuration = a), (e.treeBaseDuration = l)
      } else
        for (var c = e.child; c !== null; )
          (n = We(n, We(c.lanes, c.childLanes))),
            (r |= c.subtreeFlags),
            (r |= c.flags),
            (c.return = e),
            (c = c.sibling)
      e.subtreeFlags |= r
    }
    return (e.childLanes = n), t
  }
  function d2(e, t, n) {
    if (Xw() && (t.mode & tt) !== _e && (t.flags & pt) === De)
      return Yb(t), oo(), (t.flags |= Aa | uu | tr), !1
    var r = Kc(t)
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!r)
          throw new Error(
            'A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.'
          )
        if ((Qw(t), Un(t), (t.mode & xt) !== _e)) {
          var a = n !== null
          if (a) {
            var l = t.child
            l !== null && (t.treeBaseDuration -= l.treeBaseDuration)
          }
        }
        return !1
      } else {
        if (
          (oo(),
          (t.flags & pt) === De && (t.memoizedState = null),
          (t.flags |= it),
          Un(t),
          (t.mode & xt) !== _e)
        ) {
          var u = n !== null
          if (u) {
            var c = t.child
            c !== null && (t.treeBaseDuration -= c.treeBaseDuration)
          }
        }
        return !1
      }
    else return Wb(), !0
  }
  function hN(e, t, n) {
    var r = t.pendingProps
    switch ((gv(t), t.tag)) {
      case E:
      case st:
      case ne:
      case x:
      case ve:
      case O:
      case de:
      case ye:
      case Y:
      case Ee:
        return Un(t), null
      case T: {
        var a = t.type
        return fa(a) && Ic(t), Un(t), null
      }
      case M: {
        var l = t.stateNode
        if (
          (fo(t),
          vv(t),
          rp(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          e === null || e.child === null)
        ) {
          var u = Kc(t)
          if (u) bo(t)
          else if (e !== null) {
            var c = e.memoizedState
            ;(!c.isDehydrated || (t.flags & Aa) !== De) &&
              ((t.flags |= Gi), Wb())
          }
        }
        return Wp(e, t), Un(t), null
      }
      case j: {
        Zv(t)
        var v = v0(),
          g = t.type
        if (e !== null && t.stateNode != null)
          vN(e, t, g, r, v), e.ref !== t.ref && dN(t)
        else {
          if (!r) {
            if (t.stateNode === null)
              throw new Error(
                'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
              )
            return Un(t), null
          }
          var b = Jv(),
            D = Kc(t)
          if (D) Gw(t, v, b) && bo(t)
          else {
            var w = kT(g, r, v, b, t)
            mN(w, t, !1, !1), (t.stateNode = w), UT(w, g, r, v) && bo(t)
          }
          t.ref !== null && dN(t)
        }
        return Un(t), null
      }
      case z: {
        var A = r
        if (e && t.stateNode != null) {
          var U = e.memoizedProps
          pN(e, t, U, A)
        } else {
          if (typeof A != 'string' && t.stateNode === null)
            throw new Error(
              'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
            )
          var $ = v0(),
            se = Jv(),
            Se = Kc(t)
          Se ? qw(t) && bo(t) : (t.stateNode = jT(A, $, se, t))
        }
        return Un(t), null
      }
      case Z: {
        vo(t)
        var Ne = t.memoizedState
        if (
          e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null)
        ) {
          var rt = d2(e, t, Ne)
          if (!rt) return t.flags & tr ? t : null
        }
        if ((t.flags & pt) !== De)
          return (t.lanes = n), (t.mode & xt) !== _e && Dp(t), t
        var qe = Ne !== null,
          L = e !== null && e.memoizedState !== null
        if (qe !== L && qe) {
          var P = t.child
          if (((P.flags |= qi), (t.mode & tt) !== _e)) {
            var k =
              e === null &&
              (t.memoizedProps.unstable_avoidThisFallback !== !0 || !nn)
            k || ep(qr.current, y0) ? m_() : ch()
          }
        }
        var q = t.updateQueue
        if (
          (q !== null && (t.flags |= it), Un(t), (t.mode & xt) !== _e && qe)
        ) {
          var ce = t.child
          ce !== null && (t.treeBaseDuration -= ce.treeBaseDuration)
        }
        return null
      }
      case B:
        return (
          fo(t),
          Wp(e, t),
          e === null && Ow(t.stateNode.containerInfo),
          Un(t),
          null
        )
      case X:
        var ie = t.type._context
        return wv(ie, t), Un(t), null
      case ee: {
        var Me = t.type
        return fa(Me) && Ic(t), Un(t), null
      }
      case Te: {
        vo(t)
        var ze = t.memoizedState
        if (ze === null) return Un(t), null
        var Et = (t.flags & pt) !== De,
          ct = ze.rendering
        if (ct === null)
          if (Et) ds(ze, !1)
          else {
            var Jt = p_() && (e === null || (e.flags & pt) === De)
            if (!Jt)
              for (var ft = t.child; ft !== null; ) {
                var qt = vf(ft)
                if (qt !== null) {
                  ;(Et = !0), (t.flags |= pt), ds(ze, !1)
                  var qn = qt.updateQueue
                  return (
                    qn !== null && ((t.updateQueue = qn), (t.flags |= it)),
                    (t.subtreeFlags = De),
                    pD(t, n),
                    Ti(t, tp(qr.current, ts)),
                    t.child
                  )
                }
                ft = ft.sibling
              }
            ze.tail !== null &&
              Tn() > jN() &&
              ((t.flags |= pt), (Et = !0), ds(ze, !1), (t.lanes = vg))
          }
        else {
          if (!Et) {
            var $n = vf(ct)
            if ($n !== null) {
              ;(t.flags |= pt), (Et = !0)
              var _r = $n.updateQueue
              if (
                (_r !== null && ((t.updateQueue = _r), (t.flags |= it)),
                ds(ze, !0),
                ze.tail === null &&
                  ze.tailMode === 'hidden' &&
                  !ct.alternate &&
                  !kn())
              )
                return Un(t), null
            } else
              Tn() * 2 - ze.renderingStartTime > jN() &&
                n !== Sr &&
                ((t.flags |= pt), (Et = !0), ds(ze, !1), (t.lanes = vg))
          }
          if (ze.isBackwards) (ct.sibling = t.child), (t.child = ct)
          else {
            var ir = ze.last
            ir !== null ? (ir.sibling = ct) : (t.child = ct), (ze.last = ct)
          }
        }
        if (ze.tail !== null) {
          var lr = ze.tail
          ;(ze.rendering = lr),
            (ze.tail = lr.sibling),
            (ze.renderingStartTime = Tn()),
            (lr.sibling = null)
          var Qn = qr.current
          return Et ? (Qn = tp(Qn, ts)) : (Qn = mo(Qn)), Ti(t, Qn), lr
        }
        return Un(t), null
      }
      case at:
        break
      case ge:
      case He: {
        sh(t)
        var Ja = t.memoizedState,
          wo = Ja !== null
        if (e !== null) {
          var Ds = e.memoizedState,
            ba = Ds !== null
          ba !== wo && !Pn && (t.flags |= qi)
        }
        return (
          !wo || (t.mode & tt) === _e
            ? Un(t)
            : Er(ga, Sr) &&
              (Un(t), t.subtreeFlags & (ln | it) && (t.flags |= qi)),
          null
        )
      }
      case ht:
        return null
      case $e:
        return null
    }
    throw new Error(
      'Unknown unit of work tag (' +
        t.tag +
        '). This error is likely caused by a bug in React. Please file an issue.'
    )
  }
  function m2(e, t, n) {
    switch ((gv(t), t.tag)) {
      case T: {
        var r = t.type
        fa(r) && Ic(t)
        var a = t.flags
        return a & tr
          ? ((t.flags = (a & ~tr) | pt), (t.mode & xt) !== _e && Dp(t), t)
          : null
      }
      case M: {
        t.stateNode, fo(t), vv(t), rp()
        var l = t.flags
        return (l & tr) !== De && (l & pt) === De
          ? ((t.flags = (l & ~tr) | pt), t)
          : null
      }
      case j:
        return Zv(t), null
      case Z: {
        vo(t)
        var u = t.memoizedState
        if (u !== null && u.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error(
              'Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.'
            )
          oo()
        }
        var c = t.flags
        return c & tr
          ? ((t.flags = (c & ~tr) | pt), (t.mode & xt) !== _e && Dp(t), t)
          : null
      }
      case Te:
        return vo(t), null
      case B:
        return fo(t), null
      case X:
        var v = t.type._context
        return wv(v, t), null
      case ge:
      case He:
        return sh(t), null
      case ht:
        return null
      default:
        return null
    }
  }
  function yN(e, t, n) {
    switch ((gv(t), t.tag)) {
      case T: {
        var r = t.type.childContextTypes
        r != null && Ic(t)
        break
      }
      case M: {
        t.stateNode, fo(t), vv(t), rp()
        break
      }
      case j: {
        Zv(t)
        break
      }
      case B:
        fo(t)
        break
      case Z:
        vo(t)
        break
      case Te:
        vo(t)
        break
      case X:
        var a = t.type._context
        wv(a, t)
        break
      case ge:
      case He:
        sh(t)
        break
    }
  }
  var gN = null
  gN = new Set()
  var jf = !1,
    Fn = !1,
    v2 = typeof WeakSet == 'function' ? WeakSet : Set,
    me = null,
    No = null,
    xo = null
  function p2(e) {
    qd(null, function () {
      throw e
    }),
      Qd()
  }
  var h2 = function (e, t) {
    if (((t.props = e.memoizedProps), (t.state = e.memoizedState), e.mode & xt))
      try {
        ha(), t.componentWillUnmount()
      } finally {
        pa(e)
      }
    else t.componentWillUnmount()
  }
  function bN(e, t) {
    try {
      _i(dn, e)
    } catch (n) {
      Ot(e, t, n)
    }
  }
  function Gp(e, t, n) {
    try {
      h2(e, n)
    } catch (r) {
      Ot(e, t, r)
    }
  }
  function y2(e, t, n) {
    try {
      n.componentDidMount()
    } catch (r) {
      Ot(e, t, r)
    }
  }
  function NN(e, t) {
    try {
      SN(e)
    } catch (n) {
      Ot(e, t, n)
    }
  }
  function So(e, t) {
    var n = e.ref
    if (n !== null)
      if (typeof n == 'function') {
        var r
        try {
          if (yr && gr && e.mode & xt)
            try {
              ha(), (r = n(null))
            } finally {
              pa(e)
            }
          else r = n(null)
        } catch (a) {
          Ot(e, t, a)
        }
        typeof r == 'function' &&
          f(
            'Unexpected return value from a callback ref in %s. A callback ref should not return a function.',
            Be(e)
          )
      } else n.current = null
  }
  function zf(e, t, n) {
    try {
      n()
    } catch (r) {
      Ot(e, t, r)
    }
  }
  var xN = !1
  function g2(e, t) {
    MT(e.containerInfo), (me = t), b2()
    var n = xN
    return (xN = !1), n
  }
  function b2() {
    for (; me !== null; ) {
      var e = me,
        t = e.child
      ;(e.subtreeFlags & em) !== De && t !== null
        ? ((t.return = e), (me = t))
        : N2()
    }
  }
  function N2() {
    for (; me !== null; ) {
      var e = me
      Vt(e)
      try {
        x2(e)
      } catch (n) {
        Ot(e, e.return, n)
      }
      Rn()
      var t = e.sibling
      if (t !== null) {
        ;(t.return = e.return), (me = t)
        return
      }
      me = e.return
    }
  }
  function x2(e) {
    var t = e.alternate,
      n = e.flags
    if ((n & Gi) !== De) {
      switch ((Vt(e), e.tag)) {
        case x:
        case ve:
        case ne:
          break
        case T: {
          if (t !== null) {
            var r = t.memoizedProps,
              a = t.memoizedState,
              l = e.stateNode
            e.type === e.elementType &&
              !vl &&
              (l.props !== e.memoizedProps &&
                f(
                  'Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                  Be(e) || 'instance'
                ),
              l.state !== e.memoizedState &&
                f(
                  'Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                  Be(e) || 'instance'
                ))
            var u = l.getSnapshotBeforeUpdate(
              e.elementType === e.type ? r : Gr(e.type, r),
              a
            )
            {
              var c = gN
              u === void 0 &&
                !c.has(e.type) &&
                (c.add(e.type),
                f(
                  '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.',
                  Be(e)
                ))
            }
            l.__reactInternalSnapshotBeforeUpdate = u
          }
          break
        }
        case M: {
          {
            var v = e.stateNode
            nw(v.containerInfo)
          }
          break
        }
        case j:
        case z:
        case B:
        case ee:
          break
        default:
          throw new Error(
            'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
          )
      }
      Rn()
    }
  }
  function Xr(e, t, n) {
    var r = t.updateQueue,
      a = r !== null ? r.lastEffect : null
    if (a !== null) {
      var l = a.next,
        u = l
      do {
        if ((u.tag & e) === e) {
          var c = u.destroy
          ;(u.destroy = void 0),
            c !== void 0 &&
              ((e & An) !== dr ? jE(t) : (e & dn) !== dr && sg(t),
              (e & da) !== dr && Rs(!0),
              zf(t, n, c),
              (e & da) !== dr && Rs(!1),
              (e & An) !== dr ? zE() : (e & dn) !== dr && cg())
        }
        u = u.next
      } while (u !== l)
    }
  }
  function _i(e, t) {
    var n = t.updateQueue,
      r = n !== null ? n.lastEffect : null
    if (r !== null) {
      var a = r.next,
        l = a
      do {
        if ((l.tag & e) === e) {
          ;(e & An) !== dr ? UE(t) : (e & dn) !== dr && HE(t)
          var u = l.create
          ;(e & da) !== dr && Rs(!0),
            (l.destroy = u()),
            (e & da) !== dr && Rs(!1),
            (e & An) !== dr ? FE() : (e & dn) !== dr && $E()
          {
            var c = l.destroy
            if (c !== void 0 && typeof c != 'function') {
              var v = void 0
              ;(l.tag & dn) !== De
                ? (v = 'useLayoutEffect')
                : (l.tag & da) !== De
                ? (v = 'useInsertionEffect')
                : (v = 'useEffect')
              var g = void 0
              c === null
                ? (g =
                    ' You returned null. If your effect does not require clean up, return undefined (or nothing).')
                : typeof c.then == 'function'
                ? (g =
                    `

It looks like you wrote ` +
                    v +
                    `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` +
                    v +
                    `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`)
                : (g = ' You returned: ' + c),
                f(
                  '%s must not return anything besides a function, which is used for clean-up.%s',
                  v,
                  g
                )
            }
          }
        }
        l = l.next
      } while (l !== a)
    }
  }
  function S2(e, t) {
    if ((t.flags & it) !== De)
      switch (t.tag) {
        case ye: {
          var n = t.stateNode.passiveEffectDuration,
            r = t.memoizedProps,
            a = r.id,
            l = r.onPostCommit,
            u = V0(),
            c = t.alternate === null ? 'mount' : 'update'
          B0() && (c = 'nested-update'), typeof l == 'function' && l(a, c, n, u)
          var v = t.return
          e: for (; v !== null; ) {
            switch (v.tag) {
              case M:
                var g = v.stateNode
                g.passiveEffectDuration += n
                break e
              case ye:
                var b = v.stateNode
                b.passiveEffectDuration += n
                break e
            }
            v = v.return
          }
          break
        }
      }
  }
  function E2(e, t, n, r) {
    if ((n.flags & su) !== De)
      switch (n.tag) {
        case x:
        case ve:
        case ne: {
          if (!Fn)
            if (n.mode & xt)
              try {
                ha(), _i(dn | fn, n)
              } finally {
                pa(n)
              }
            else _i(dn | fn, n)
          break
        }
        case T: {
          var a = n.stateNode
          if (n.flags & it && !Fn)
            if (t === null)
              if (
                (n.type === n.elementType &&
                  !vl &&
                  (a.props !== n.memoizedProps &&
                    f(
                      'Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                      Be(n) || 'instance'
                    ),
                  a.state !== n.memoizedState &&
                    f(
                      'Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                      Be(n) || 'instance'
                    )),
                n.mode & xt)
              )
                try {
                  ha(), a.componentDidMount()
                } finally {
                  pa(n)
                }
              else a.componentDidMount()
            else {
              var l =
                  n.elementType === n.type
                    ? t.memoizedProps
                    : Gr(n.type, t.memoizedProps),
                u = t.memoizedState
              if (
                (n.type === n.elementType &&
                  !vl &&
                  (a.props !== n.memoizedProps &&
                    f(
                      'Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                      Be(n) || 'instance'
                    ),
                  a.state !== n.memoizedState &&
                    f(
                      'Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                      Be(n) || 'instance'
                    )),
                n.mode & xt)
              )
                try {
                  ha(),
                    a.componentDidUpdate(
                      l,
                      u,
                      a.__reactInternalSnapshotBeforeUpdate
                    )
                } finally {
                  pa(n)
                }
              else
                a.componentDidUpdate(
                  l,
                  u,
                  a.__reactInternalSnapshotBeforeUpdate
                )
            }
          var c = n.updateQueue
          c !== null &&
            (n.type === n.elementType &&
              !vl &&
              (a.props !== n.memoizedProps &&
                f(
                  'Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                  Be(n) || 'instance'
                ),
              a.state !== n.memoizedState &&
                f(
                  'Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                  Be(n) || 'instance'
                )),
            n0(n, c, a))
          break
        }
        case M: {
          var v = n.updateQueue
          if (v !== null) {
            var g = null
            if (n.child !== null)
              switch (n.child.tag) {
                case j:
                  g = n.child.stateNode
                  break
                case T:
                  g = n.child.stateNode
                  break
              }
            n0(n, v, g)
          }
          break
        }
        case j: {
          var b = n.stateNode
          if (t === null && n.flags & it) {
            var D = n.type,
              w = n.memoizedProps
            BT(b, D, w)
          }
          break
        }
        case z:
          break
        case B:
          break
        case ye: {
          {
            var A = n.memoizedProps,
              U = A.onCommit,
              $ = A.onRender,
              se = n.stateNode.effectDuration,
              Se = V0(),
              Ne = t === null ? 'mount' : 'update'
            B0() && (Ne = 'nested-update'),
              typeof $ == 'function' &&
                $(
                  n.memoizedProps.id,
                  Ne,
                  n.actualDuration,
                  n.treeBaseDuration,
                  n.actualStartTime,
                  Se
                )
            {
              typeof U == 'function' && U(n.memoizedProps.id, Ne, se, Se), N_(n)
              var rt = n.return
              e: for (; rt !== null; ) {
                switch (rt.tag) {
                  case M:
                    var qe = rt.stateNode
                    qe.effectDuration += se
                    break e
                  case ye:
                    var L = rt.stateNode
                    L.effectDuration += se
                    break e
                }
                rt = rt.return
              }
            }
          }
          break
        }
        case Z: {
          M2(e, n)
          break
        }
        case Te:
        case ee:
        case at:
        case ge:
        case He:
        case $e:
          break
        default:
          throw new Error(
            'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
          )
      }
    Fn || (n.flags & di && SN(n))
  }
  function C2(e) {
    switch (e.tag) {
      case x:
      case ve:
      case ne: {
        if (e.mode & xt)
          try {
            ha(), bN(e, e.return)
          } finally {
            pa(e)
          }
        else bN(e, e.return)
        break
      }
      case T: {
        var t = e.stateNode
        typeof t.componentDidMount == 'function' && y2(e, e.return, t),
          NN(e, e.return)
        break
      }
      case j: {
        NN(e, e.return)
        break
      }
    }
  }
  function R2(e, t) {
    for (var n = null, r = e; ; ) {
      if (r.tag === j) {
        if (n === null) {
          n = r
          try {
            var a = r.stateNode
            t ? JT(a) : ew(r.stateNode, r.memoizedProps)
          } catch (u) {
            Ot(e, e.return, u)
          }
        }
      } else if (r.tag === z) {
        if (n === null)
          try {
            var l = r.stateNode
            t ? ZT(l) : tw(l, r.memoizedProps)
          } catch (u) {
            Ot(e, e.return, u)
          }
      } else if (
        !((r.tag === ge || r.tag === He) && r.memoizedState !== null && r !== e)
      ) {
        if (r.child !== null) {
          ;(r.child.return = r), (r = r.child)
          continue
        }
      }
      if (r === e) return
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e) return
        n === r && (n = null), (r = r.return)
      }
      n === r && (n = null), (r.sibling.return = r.return), (r = r.sibling)
    }
  }
  function SN(e) {
    var t = e.ref
    if (t !== null) {
      var n = e.stateNode,
        r
      switch (e.tag) {
        case j:
          r = n
          break
        default:
          r = n
      }
      if (typeof t == 'function') {
        var a
        if (e.mode & xt)
          try {
            ha(), (a = t(r))
          } finally {
            pa(e)
          }
        else a = t(r)
        typeof a == 'function' &&
          f(
            'Unexpected return value from a callback ref in %s. A callback ref should not return a function.',
            Be(e)
          )
      } else
        t.hasOwnProperty('current') ||
          f(
            'Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().',
            Be(e)
          ),
          (t.current = r)
    }
  }
  function T2(e) {
    var t = e.alternate
    t !== null && (t.return = null), (e.return = null)
  }
  function EN(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), EN(t))
    {
      if (
        ((e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === j)
      ) {
        var n = e.stateNode
        n !== null && kw(n)
      }
      ;(e.stateNode = null),
        (e._debugOwner = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null)
    }
  }
  function w2(e) {
    for (var t = e.return; t !== null; ) {
      if (CN(t)) return t
      t = t.return
    }
    throw new Error(
      'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
    )
  }
  function CN(e) {
    return e.tag === j || e.tag === M || e.tag === B
  }
  function RN(e) {
    var t = e
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || CN(t.return)) return null
        t = t.return
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== j && t.tag !== z && t.tag !== Ce;

      ) {
        if (t.flags & ln || t.child === null || t.tag === B) continue e
        ;(t.child.return = t), (t = t.child)
      }
      if (!(t.flags & ln)) return t.stateNode
    }
  }
  function D2(e) {
    var t = w2(e)
    switch (t.tag) {
      case j: {
        var n = t.stateNode
        t.flags & ou && (Tb(n), (t.flags &= ~ou))
        var r = RN(e)
        Qp(e, r, n)
        break
      }
      case M:
      case B: {
        var a = t.stateNode.containerInfo,
          l = RN(e)
        qp(e, l, a)
        break
      }
      default:
        throw new Error(
          'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.'
        )
    }
  }
  function qp(e, t, n) {
    var r = e.tag,
      a = r === j || r === z
    if (a) {
      var l = e.stateNode
      t ? qT(n, l, t) : WT(n, l)
    } else if (r !== B) {
      var u = e.child
      if (u !== null) {
        qp(u, t, n)
        for (var c = u.sibling; c !== null; ) qp(c, t, n), (c = c.sibling)
      }
    }
  }
  function Qp(e, t, n) {
    var r = e.tag,
      a = r === j || r === z
    if (a) {
      var l = e.stateNode
      t ? GT(n, l, t) : YT(n, l)
    } else if (r !== B) {
      var u = e.child
      if (u !== null) {
        Qp(u, t, n)
        for (var c = u.sibling; c !== null; ) Qp(c, t, n), (c = c.sibling)
      }
    }
  }
  var jn = null,
    Jr = !1
  function _2(e, t, n) {
    {
      var r = t
      e: for (; r !== null; ) {
        switch (r.tag) {
          case j: {
            ;(jn = r.stateNode), (Jr = !1)
            break e
          }
          case M: {
            ;(jn = r.stateNode.containerInfo), (Jr = !0)
            break e
          }
          case B: {
            ;(jn = r.stateNode.containerInfo), (Jr = !0)
            break e
          }
        }
        r = r.return
      }
      if (jn === null)
        throw new Error(
          'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
        )
      TN(e, t, n), (jn = null), (Jr = !1)
    }
    T2(n)
  }
  function Oi(e, t, n) {
    for (var r = n.child; r !== null; ) TN(e, t, r), (r = r.sibling)
  }
  function TN(e, t, n) {
    switch ((ME(n), n.tag)) {
      case j:
        Fn || So(n, t)
      case z: {
        {
          var r = jn,
            a = Jr
          ;(jn = null),
            Oi(e, t, n),
            (jn = r),
            (Jr = a),
            jn !== null && (Jr ? KT(jn, n.stateNode) : QT(jn, n.stateNode))
        }
        return
      }
      case Ce: {
        jn !== null && (Jr ? XT(jn, n.stateNode) : lv(jn, n.stateNode))
        return
      }
      case B: {
        {
          var l = jn,
            u = Jr
          ;(jn = n.stateNode.containerInfo),
            (Jr = !0),
            Oi(e, t, n),
            (jn = l),
            (Jr = u)
        }
        return
      }
      case x:
      case ve:
      case Ee:
      case ne: {
        if (!Fn) {
          var c = n.updateQueue
          if (c !== null) {
            var v = c.lastEffect
            if (v !== null) {
              var g = v.next,
                b = g
              do {
                var D = b,
                  w = D.destroy,
                  A = D.tag
                w !== void 0 &&
                  ((A & da) !== dr
                    ? zf(n, t, w)
                    : (A & dn) !== dr &&
                      (sg(n),
                      n.mode & xt ? (ha(), zf(n, t, w), pa(n)) : zf(n, t, w),
                      cg())),
                  (b = b.next)
              } while (b !== g)
            }
          }
        }
        Oi(e, t, n)
        return
      }
      case T: {
        if (!Fn) {
          So(n, t)
          var U = n.stateNode
          typeof U.componentWillUnmount == 'function' && Gp(n, t, U)
        }
        Oi(e, t, n)
        return
      }
      case at: {
        Oi(e, t, n)
        return
      }
      case ge: {
        if (n.mode & tt) {
          var $ = Fn
          ;(Fn = $ || n.memoizedState !== null), Oi(e, t, n), (Fn = $)
        } else Oi(e, t, n)
        break
      }
      default: {
        Oi(e, t, n)
        return
      }
    }
  }
  function O2(e) {
    e.memoizedState
  }
  function M2(e, t) {
    var n = t.memoizedState
    if (n === null) {
      var r = t.alternate
      if (r !== null) {
        var a = r.memoizedState
        if (a !== null) {
          var l = a.dehydrated
          l !== null && hw(l)
        }
      }
    }
  }
  function wN(e) {
    var t = e.updateQueue
    if (t !== null) {
      e.updateQueue = null
      var n = e.stateNode
      n === null && (n = e.stateNode = new v2()),
        t.forEach(function (r) {
          var a = w_.bind(null, e, r)
          if (!n.has(r)) {
            if ((n.add(r), Br))
              if (No !== null && xo !== null) Cs(xo, No)
              else
                throw Error(
                  'Expected finished root and lanes to be set. This is a bug in React.'
                )
            r.then(a, a)
          }
        })
    }
  }
  function L2(e, t, n) {
    ;(No = n), (xo = e), Vt(t), DN(t, e), Vt(t), (No = null), (xo = null)
  }
  function Zr(e, t, n) {
    var r = t.deletions
    if (r !== null)
      for (var a = 0; a < r.length; a++) {
        var l = r[a]
        try {
          _2(e, t, l)
        } catch (v) {
          Ot(l, t, v)
        }
      }
    var u = qs()
    if (t.subtreeFlags & tm)
      for (var c = t.child; c !== null; ) Vt(c), DN(c, e), (c = c.sibling)
    Vt(u)
  }
  function DN(e, t, n) {
    var r = e.alternate,
      a = e.flags
    switch (e.tag) {
      case x:
      case ve:
      case Ee:
      case ne: {
        if ((Zr(t, e), ya(e), a & it)) {
          try {
            Xr(da | fn, e, e.return), _i(da | fn, e)
          } catch (Me) {
            Ot(e, e.return, Me)
          }
          if (e.mode & xt) {
            try {
              ha(), Xr(dn | fn, e, e.return)
            } catch (Me) {
              Ot(e, e.return, Me)
            }
            pa(e)
          } else
            try {
              Xr(dn | fn, e, e.return)
            } catch (Me) {
              Ot(e, e.return, Me)
            }
        }
        return
      }
      case T: {
        Zr(t, e), ya(e), a & di && r !== null && So(r, r.return)
        return
      }
      case j: {
        Zr(t, e), ya(e), a & di && r !== null && So(r, r.return)
        {
          if (e.flags & ou) {
            var l = e.stateNode
            try {
              Tb(l)
            } catch (Me) {
              Ot(e, e.return, Me)
            }
          }
          if (a & it) {
            var u = e.stateNode
            if (u != null) {
              var c = e.memoizedProps,
                v = r !== null ? r.memoizedProps : c,
                g = e.type,
                b = e.updateQueue
              if (((e.updateQueue = null), b !== null))
                try {
                  VT(u, b, g, v, c, e)
                } catch (Me) {
                  Ot(e, e.return, Me)
                }
            }
          }
        }
        return
      }
      case z: {
        if ((Zr(t, e), ya(e), a & it)) {
          if (e.stateNode === null)
            throw new Error(
              'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.'
            )
          var D = e.stateNode,
            w = e.memoizedProps,
            A = r !== null ? r.memoizedProps : w
          try {
            IT(D, A, w)
          } catch (Me) {
            Ot(e, e.return, Me)
          }
        }
        return
      }
      case M: {
        if ((Zr(t, e), ya(e), a & it && r !== null)) {
          var U = r.memoizedState
          if (U.isDehydrated)
            try {
              pw(t.containerInfo)
            } catch (Me) {
              Ot(e, e.return, Me)
            }
        }
        return
      }
      case B: {
        Zr(t, e), ya(e)
        return
      }
      case Z: {
        Zr(t, e), ya(e)
        var $ = e.child
        if ($.flags & qi) {
          var se = $.stateNode,
            Se = $.memoizedState,
            Ne = Se !== null
          if (((se.isHidden = Ne), Ne)) {
            var rt = $.alternate !== null && $.alternate.memoizedState !== null
            rt || d_()
          }
        }
        if (a & it) {
          try {
            O2(e)
          } catch (Me) {
            Ot(e, e.return, Me)
          }
          wN(e)
        }
        return
      }
      case ge: {
        var qe = r !== null && r.memoizedState !== null
        if (e.mode & tt) {
          var L = Fn
          ;(Fn = L || qe), Zr(t, e), (Fn = L)
        } else Zr(t, e)
        if ((ya(e), a & qi)) {
          var P = e.stateNode,
            k = e.memoizedState,
            q = k !== null,
            ce = e
          if (((P.isHidden = q), q && !qe && (ce.mode & tt) !== _e)) {
            me = ce
            for (var ie = ce.child; ie !== null; )
              (me = ie), A2(ie), (ie = ie.sibling)
          }
          R2(ce, q)
        }
        return
      }
      case Te: {
        Zr(t, e), ya(e), a & it && wN(e)
        return
      }
      case at:
        return
      default: {
        Zr(t, e), ya(e)
        return
      }
    }
  }
  function ya(e) {
    var t = e.flags
    if (t & ln) {
      try {
        D2(e)
      } catch (n) {
        Ot(e, e.return, n)
      }
      e.flags &= ~ln
    }
    t & Ua && (e.flags &= ~Ua)
  }
  function k2(e, t, n) {
    ;(No = n), (xo = t), (me = e), _N(e, t, n), (No = null), (xo = null)
  }
  function _N(e, t, n) {
    for (var r = (e.mode & tt) !== _e; me !== null; ) {
      var a = me,
        l = a.child
      if (a.tag === ge && r) {
        var u = a.memoizedState !== null,
          c = u || jf
        if (c) {
          Kp(e, t, n)
          continue
        } else {
          var v = a.alternate,
            g = v !== null && v.memoizedState !== null,
            b = g || Fn,
            D = jf,
            w = Fn
          ;(jf = c), (Fn = b), Fn && !w && ((me = a), U2(a))
          for (var A = l; A !== null; ) (me = A), _N(A, t, n), (A = A.sibling)
          ;(me = a), (jf = D), (Fn = w), Kp(e, t, n)
          continue
        }
      }
      ;(a.subtreeFlags & su) !== De && l !== null
        ? ((l.return = a), (me = l))
        : Kp(e, t, n)
    }
  }
  function Kp(e, t, n) {
    for (; me !== null; ) {
      var r = me
      if ((r.flags & su) !== De) {
        var a = r.alternate
        Vt(r)
        try {
          E2(t, a, r, n)
        } catch (u) {
          Ot(r, r.return, u)
        }
        Rn()
      }
      if (r === e) {
        me = null
        return
      }
      var l = r.sibling
      if (l !== null) {
        ;(l.return = r.return), (me = l)
        return
      }
      me = r.return
    }
  }
  function A2(e) {
    for (; me !== null; ) {
      var t = me,
        n = t.child
      switch (t.tag) {
        case x:
        case ve:
        case Ee:
        case ne: {
          if (t.mode & xt)
            try {
              ha(), Xr(dn, t, t.return)
            } finally {
              pa(t)
            }
          else Xr(dn, t, t.return)
          break
        }
        case T: {
          So(t, t.return)
          var r = t.stateNode
          typeof r.componentWillUnmount == 'function' && Gp(t, t.return, r)
          break
        }
        case j: {
          So(t, t.return)
          break
        }
        case ge: {
          var a = t.memoizedState !== null
          if (a) {
            ON(e)
            continue
          }
          break
        }
      }
      n !== null ? ((n.return = t), (me = n)) : ON(e)
    }
  }
  function ON(e) {
    for (; me !== null; ) {
      var t = me
      if (t === e) {
        me = null
        return
      }
      var n = t.sibling
      if (n !== null) {
        ;(n.return = t.return), (me = n)
        return
      }
      me = t.return
    }
  }
  function U2(e) {
    for (; me !== null; ) {
      var t = me,
        n = t.child
      if (t.tag === ge) {
        var r = t.memoizedState !== null
        if (r) {
          MN(e)
          continue
        }
      }
      n !== null ? ((n.return = t), (me = n)) : MN(e)
    }
  }
  function MN(e) {
    for (; me !== null; ) {
      var t = me
      Vt(t)
      try {
        C2(t)
      } catch (r) {
        Ot(t, t.return, r)
      }
      if ((Rn(), t === e)) {
        me = null
        return
      }
      var n = t.sibling
      if (n !== null) {
        ;(n.return = t.return), (me = n)
        return
      }
      me = t.return
    }
  }
  function F2(e, t, n, r) {
    ;(me = t), j2(t, e, n, r)
  }
  function j2(e, t, n, r) {
    for (; me !== null; ) {
      var a = me,
        l = a.child
      ;(a.subtreeFlags & Pl) !== De && l !== null
        ? ((l.return = a), (me = l))
        : z2(e, t, n, r)
    }
  }
  function z2(e, t, n, r) {
    for (; me !== null; ) {
      var a = me
      if ((a.flags & Pr) !== De) {
        Vt(a)
        try {
          H2(t, a, n, r)
        } catch (u) {
          Ot(a, a.return, u)
        }
        Rn()
      }
      if (a === e) {
        me = null
        return
      }
      var l = a.sibling
      if (l !== null) {
        ;(l.return = a.return), (me = l)
        return
      }
      me = a.return
    }
  }
  function H2(e, t, n, r) {
    switch (t.tag) {
      case x:
      case ve:
      case ne: {
        if (t.mode & xt) {
          wp()
          try {
            _i(An | fn, t)
          } finally {
            Tp(t)
          }
        } else _i(An | fn, t)
        break
      }
    }
  }
  function $2(e) {
    ;(me = e), P2()
  }
  function P2() {
    for (; me !== null; ) {
      var e = me,
        t = e.child
      if ((me.flags & Wi) !== De) {
        var n = e.deletions
        if (n !== null) {
          for (var r = 0; r < n.length; r++) {
            var a = n[r]
            ;(me = a), I2(a, e)
          }
          {
            var l = e.alternate
            if (l !== null) {
              var u = l.child
              if (u !== null) {
                l.child = null
                do {
                  var c = u.sibling
                  ;(u.sibling = null), (u = c)
                } while (u !== null)
              }
            }
          }
          me = e
        }
      }
      ;(e.subtreeFlags & Pl) !== De && t !== null
        ? ((t.return = e), (me = t))
        : B2()
    }
  }
  function B2() {
    for (; me !== null; ) {
      var e = me
      ;(e.flags & Pr) !== De && (Vt(e), V2(e), Rn())
      var t = e.sibling
      if (t !== null) {
        ;(t.return = e.return), (me = t)
        return
      }
      me = e.return
    }
  }
  function V2(e) {
    switch (e.tag) {
      case x:
      case ve:
      case ne: {
        e.mode & xt
          ? (wp(), Xr(An | fn, e, e.return), Tp(e))
          : Xr(An | fn, e, e.return)
        break
      }
    }
  }
  function I2(e, t) {
    for (; me !== null; ) {
      var n = me
      Vt(n), W2(n, t), Rn()
      var r = n.child
      r !== null ? ((r.return = n), (me = r)) : Y2(e)
    }
  }
  function Y2(e) {
    for (; me !== null; ) {
      var t = me,
        n = t.sibling,
        r = t.return
      if ((EN(t), t === e)) {
        me = null
        return
      }
      if (n !== null) {
        ;(n.return = r), (me = n)
        return
      }
      me = r
    }
  }
  function W2(e, t) {
    switch (e.tag) {
      case x:
      case ve:
      case ne: {
        e.mode & xt ? (wp(), Xr(An, e, t), Tp(e)) : Xr(An, e, t)
        break
      }
    }
  }
  function G2(e) {
    switch (e.tag) {
      case x:
      case ve:
      case ne: {
        try {
          _i(dn | fn, e)
        } catch (n) {
          Ot(e, e.return, n)
        }
        break
      }
      case T: {
        var t = e.stateNode
        try {
          t.componentDidMount()
        } catch (n) {
          Ot(e, e.return, n)
        }
        break
      }
    }
  }
  function q2(e) {
    switch (e.tag) {
      case x:
      case ve:
      case ne: {
        try {
          _i(An | fn, e)
        } catch (t) {
          Ot(e, e.return, t)
        }
        break
      }
    }
  }
  function Q2(e) {
    switch (e.tag) {
      case x:
      case ve:
      case ne: {
        try {
          Xr(dn | fn, e, e.return)
        } catch (n) {
          Ot(e, e.return, n)
        }
        break
      }
      case T: {
        var t = e.stateNode
        typeof t.componentWillUnmount == 'function' && Gp(e, e.return, t)
        break
      }
    }
  }
  function K2(e) {
    switch (e.tag) {
      case x:
      case ve:
      case ne:
        try {
          Xr(An | fn, e, e.return)
        } catch (t) {
          Ot(e, e.return, t)
        }
    }
  }
  if (typeof Symbol == 'function' && Symbol.for) {
    var ms = Symbol.for
    ms('selector.component'),
      ms('selector.has_pseudo_class'),
      ms('selector.role'),
      ms('selector.test_id'),
      ms('selector.text')
  }
  var X2 = []
  function J2() {
    X2.forEach(function (e) {
      return e()
    })
  }
  var Z2 = s.ReactCurrentActQueue
  function e_(e) {
    {
      var t =
          typeof IS_REACT_ACT_ENVIRONMENT < 'u'
            ? IS_REACT_ACT_ENVIRONMENT
            : void 0,
        n = typeof jest < 'u'
      return n && t !== !1
    }
  }
  function LN() {
    {
      var e =
        typeof IS_REACT_ACT_ENVIRONMENT < 'u'
          ? IS_REACT_ACT_ENVIRONMENT
          : void 0
      return (
        !e &&
          Z2.current !== null &&
          f(
            'The current testing environment is not configured to support act(...)'
          ),
        e
      )
    }
  }
  var t_ = Math.ceil,
    Xp = s.ReactCurrentDispatcher,
    Jp = s.ReactCurrentOwner,
    zn = s.ReactCurrentBatchConfig,
    ea = s.ReactCurrentActQueue,
    pn = 0,
    kN = 1,
    Hn = 2,
    Hr = 4,
    qa = 0,
    vs = 1,
    pl = 2,
    Hf = 3,
    ps = 4,
    AN = 5,
    Zp = 6,
    nt = pn,
    rr = null,
    It = null,
    hn = W,
    ga = W,
    eh = Ni(W),
    yn = qa,
    hs = null,
    $f = W,
    ys = W,
    Pf = W,
    gs = null,
    mr = null,
    th = 0,
    UN = 500,
    FN = 1 / 0,
    n_ = 500,
    Qa = null
  function bs() {
    FN = Tn() + n_
  }
  function jN() {
    return FN
  }
  var Bf = !1,
    nh = null,
    Eo = null,
    hl = !1,
    Mi = null,
    Ns = W,
    rh = [],
    ah = null,
    r_ = 50,
    xs = 0,
    ih = null,
    lh = !1,
    Vf = !1,
    a_ = 50,
    Co = 0,
    If = null,
    Ss = Lt,
    Yf = W,
    zN = !1
  function Wf() {
    return rr
  }
  function ar() {
    return (nt & (Hn | Hr)) !== pn ? Tn() : (Ss !== Lt || (Ss = Tn()), Ss)
  }
  function Li(e) {
    var t = e.mode
    if ((t & tt) === _e) return Ae
    if ((nt & Hn) !== pn && hn !== W) return hu(hn)
    var n = eD() !== Zw
    if (n) {
      if (zn.transition !== null) {
        var r = zn.transition
        r._updatedFibers || (r._updatedFibers = new Set()),
          r._updatedFibers.add(e)
      }
      return Yf === Dn && (Yf = gg()), Yf
    }
    var a = Vr()
    if (a !== Dn) return a
    var l = zT()
    return l
  }
  function i_(e) {
    var t = e.mode
    return (t & tt) === _e ? Ae : uC()
  }
  function gn(e, t, n, r) {
    __(),
      zN && f('useInsertionEffect must not schedule updates.'),
      lh && (Vf = !0),
      yu(e, n, r),
      (nt & Hn) !== W && e === rr
        ? L_(t)
        : (Br && xg(e, t, n),
          k_(t),
          e === rr &&
            ((nt & Hn) === pn && (ys = We(ys, n)), yn === ps && ki(e, hn)),
          vr(e, r),
          n === Ae &&
            nt === pn &&
            (t.mode & tt) === _e &&
            !ea.isBatchingLegacy &&
            (bs(), jb()))
  }
  function l_(e, t, n) {
    var r = e.current
    ;(r.lanes = t), yu(e, t, n), vr(e, n)
  }
  function o_(e) {
    return (nt & Hn) !== pn
  }
  function vr(e, t) {
    var n = e.callbackNode
    nC(e, t)
    var r = dc(e, e === rr ? hn : W)
    if (r === W) {
      n !== null && ex(n), (e.callbackNode = null), (e.callbackPriority = Dn)
      return
    }
    var a = el(r),
      l = e.callbackPriority
    if (l === a && !(ea.current !== null && n !== mh)) {
      n == null &&
        l !== Ae &&
        f(
          'Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.'
        )
      return
    }
    n != null && ex(n)
    var u
    if (a === Ae)
      e.tag === xi
        ? (ea.isBatchingLegacy !== null && (ea.didScheduleLegacyUpdate = !0),
          Fw(PN.bind(null, e)))
        : Fb(PN.bind(null, e)),
        ea.current !== null
          ? ea.current.push(Si)
          : $T(function () {
              ;(nt & (Hn | Hr)) === pn && Si()
            }),
        (u = null)
    else {
      var c
      switch (Cg(r)) {
        case Cr:
          c = uc
          break
        case Ha:
          c = nm
          break
        case $a:
          c = Xi
          break
        case pc:
          c = rm
          break
        default:
          c = Xi
          break
      }
      u = vh(c, HN.bind(null, e))
    }
    ;(e.callbackPriority = a), (e.callbackNode = u)
  }
  function HN(e, t) {
    if ((_D(), (Ss = Lt), (Yf = W), (nt & (Hn | Hr)) !== pn))
      throw new Error('Should not already be working.')
    var n = e.callbackNode,
      r = Xa()
    if (r && e.callbackNode !== n) return null
    var a = dc(e, e === rr ? hn : W)
    if (a === W) return null
    var l = !mc(e, a) && !oC(e, a) && !t,
      u = l ? y_(e, a) : qf(e, a)
    if (u !== qa) {
      if (u === pl) {
        var c = Rm(e)
        c !== W && ((a = c), (u = oh(e, c)))
      }
      if (u === vs) {
        var v = hs
        throw (yl(e, W), ki(e, a), vr(e, Tn()), v)
      }
      if (u === Zp) ki(e, a)
      else {
        var g = !mc(e, a),
          b = e.current.alternate
        if (g && !s_(b)) {
          if (((u = qf(e, a)), u === pl)) {
            var D = Rm(e)
            D !== W && ((a = D), (u = oh(e, D)))
          }
          if (u === vs) {
            var w = hs
            throw (yl(e, W), ki(e, a), vr(e, Tn()), w)
          }
        }
        ;(e.finishedWork = b), (e.finishedLanes = a), u_(e, u, a)
      }
    }
    return vr(e, Tn()), e.callbackNode === n ? HN.bind(null, e) : null
  }
  function oh(e, t) {
    var n = gs
    if (hc(e)) {
      var r = yl(e, t)
      ;(r.flags |= Aa), _w(e.containerInfo)
    }
    var a = qf(e, t)
    if (a !== pl) {
      var l = mr
      ;(mr = n), l !== null && $N(l)
    }
    return a
  }
  function $N(e) {
    mr === null ? (mr = e) : mr.push.apply(mr, e)
  }
  function u_(e, t, n) {
    switch (t) {
      case qa:
      case vs:
        throw new Error('Root did not complete. This is a bug in React.')
      case pl: {
        gl(e, mr, Qa)
        break
      }
      case Hf: {
        if ((ki(e, n), hg(n) && !tx())) {
          var r = th + UN - Tn()
          if (r > 10) {
            var a = dc(e, W)
            if (a !== W) break
            var l = e.suspendedLanes
            if (!Gl(l, n)) {
              ar(), Ng(e, l)
              break
            }
            e.timeoutHandle = av(gl.bind(null, e, mr, Qa), r)
            break
          }
        }
        gl(e, mr, Qa)
        break
      }
      case ps: {
        if ((ki(e, n), lC(n))) break
        if (!tx()) {
          var u = eC(e, n),
            c = u,
            v = Tn() - c,
            g = D_(v) - v
          if (g > 10) {
            e.timeoutHandle = av(gl.bind(null, e, mr, Qa), g)
            break
          }
        }
        gl(e, mr, Qa)
        break
      }
      case AN: {
        gl(e, mr, Qa)
        break
      }
      default:
        throw new Error('Unknown root exit status.')
    }
  }
  function s_(e) {
    for (var t = e; ; ) {
      if (t.flags & lc) {
        var n = t.updateQueue
        if (n !== null) {
          var r = n.stores
          if (r !== null)
            for (var a = 0; a < r.length; a++) {
              var l = r[a],
                u = l.getSnapshot,
                c = l.value
              try {
                if (!Tr(u(), c)) return !1
              } catch {
                return !1
              }
            }
        }
      }
      var v = t.child
      if (t.subtreeFlags & lc && v !== null) {
        ;(v.return = t), (t = v)
        continue
      }
      if (t === e) return !0
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return !0
  }
  function ki(e, t) {
    ;(t = vc(t, Pf)), (t = vc(t, ys)), cC(e, t)
  }
  function PN(e) {
    if ((OD(), (nt & (Hn | Hr)) !== pn))
      throw new Error('Should not already be working.')
    Xa()
    var t = dc(e, W)
    if (!Er(t, Ae)) return vr(e, Tn()), null
    var n = qf(e, t)
    if (e.tag !== xi && n === pl) {
      var r = Rm(e)
      r !== W && ((t = r), (n = oh(e, r)))
    }
    if (n === vs) {
      var a = hs
      throw (yl(e, W), ki(e, t), vr(e, Tn()), a)
    }
    if (n === Zp)
      throw new Error('Root did not complete. This is a bug in React.')
    var l = e.current.alternate
    return (
      (e.finishedWork = l),
      (e.finishedLanes = t),
      gl(e, mr, Qa),
      vr(e, Tn()),
      null
    )
  }
  function c_(e, t) {
    t !== W &&
      (_m(e, We(t, Ae)), vr(e, Tn()), (nt & (Hn | Hr)) === pn && (bs(), Si()))
  }
  function uh(e, t) {
    var n = nt
    nt |= kN
    try {
      return e(t)
    } finally {
      ;(nt = n), nt === pn && !ea.isBatchingLegacy && (bs(), jb())
    }
  }
  function f_(e, t, n, r, a) {
    var l = Vr(),
      u = zn.transition
    try {
      return (zn.transition = null), _n(Cr), e(t, n, r, a)
    } finally {
      _n(l), (zn.transition = u), nt === pn && bs()
    }
  }
  function Ka(e) {
    Mi !== null && Mi.tag === xi && (nt & (Hn | Hr)) === pn && Xa()
    var t = nt
    nt |= kN
    var n = zn.transition,
      r = Vr()
    try {
      return (zn.transition = null), _n(Cr), e ? e() : void 0
    } finally {
      _n(r), (zn.transition = n), (nt = t), (nt & (Hn | Hr)) === pn && Si()
    }
  }
  function BN() {
    return (nt & (Hn | Hr)) !== pn
  }
  function Gf(e, t) {
    Wn(eh, ga, e), (ga = We(ga, t))
  }
  function sh(e) {
    ;(ga = eh.current), Yn(eh, e)
  }
  function yl(e, t) {
    ;(e.finishedWork = null), (e.finishedLanes = W)
    var n = e.timeoutHandle
    if ((n !== iv && ((e.timeoutHandle = iv), HT(n)), It !== null))
      for (var r = It.return; r !== null; ) {
        var a = r.alternate
        yN(a, r), (r = r.return)
      }
    rr = e
    var l = bl(e.current, null)
    return (
      (It = l),
      (hn = ga = t),
      (yn = qa),
      (hs = null),
      ($f = W),
      (ys = W),
      (Pf = W),
      (gs = null),
      (mr = null),
      aD(),
      Wr.discardPendingWarnings(),
      l
    )
  }
  function VN(e, t) {
    do {
      var n = It
      try {
        if (
          (ef(),
          b0(),
          Rn(),
          (Jp.current = null),
          n === null || n.return === null)
        ) {
          ;(yn = vs), (hs = t), (It = null)
          return
        }
        if ((yr && n.mode & xt && kf(n, !0), Mr))
          if (
            (Vl(),
            t !== null && typeof t == 'object' && typeof t.then == 'function')
          ) {
            var r = t
            BE(n, r, hn)
          } else PE(n, t, hn)
        UD(e, n.return, n, t, hn), GN(n)
      } catch (a) {
        ;(t = a), It === n && n !== null ? ((n = n.return), (It = n)) : (n = It)
        continue
      }
      return
    } while (!0)
  }
  function IN() {
    var e = Xp.current
    return (Xp.current = Df), e === null ? Df : e
  }
  function YN(e) {
    Xp.current = e
  }
  function d_() {
    th = Tn()
  }
  function Es(e) {
    $f = We(e, $f)
  }
  function m_() {
    yn === qa && (yn = Hf)
  }
  function ch() {
    ;(yn === qa || yn === Hf || yn === pl) && (yn = ps),
      rr !== null && (Tm($f) || Tm(ys)) && ki(rr, hn)
  }
  function v_(e) {
    yn !== ps && (yn = pl), gs === null ? (gs = [e]) : gs.push(e)
  }
  function p_() {
    return yn === qa
  }
  function qf(e, t) {
    var n = nt
    nt |= Hn
    var r = IN()
    if (rr !== e || hn !== t) {
      if (Br) {
        var a = e.memoizedUpdaters
        a.size > 0 && (Cs(e, hn), a.clear()), Sg(e, t)
      }
      ;(Qa = Eg()), yl(e, t)
    }
    fg(t)
    do
      try {
        h_()
        break
      } catch (l) {
        VN(e, l)
      }
    while (!0)
    if ((ef(), (nt = n), YN(r), It !== null))
      throw new Error(
        'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.'
      )
    return dg(), (rr = null), (hn = W), yn
  }
  function h_() {
    for (; It !== null; ) WN(It)
  }
  function y_(e, t) {
    var n = nt
    nt |= Hn
    var r = IN()
    if (rr !== e || hn !== t) {
      if (Br) {
        var a = e.memoizedUpdaters
        a.size > 0 && (Cs(e, hn), a.clear()), Sg(e, t)
      }
      ;(Qa = Eg()), bs(), yl(e, t)
    }
    fg(t)
    do
      try {
        g_()
        break
      } catch (l) {
        VN(e, l)
      }
    while (!0)
    return (
      ef(),
      YN(r),
      (nt = n),
      It !== null ? (GE(), qa) : (dg(), (rr = null), (hn = W), yn)
    )
  }
  function g_() {
    for (; It !== null && !xE(); ) WN(It)
  }
  function WN(e) {
    var t = e.alternate
    Vt(e)
    var n
    ;(e.mode & xt) !== _e
      ? (Rp(e), (n = fh(t, e, ga)), kf(e, !0))
      : (n = fh(t, e, ga)),
      Rn(),
      (e.memoizedProps = e.pendingProps),
      n === null ? GN(e) : (It = n),
      (Jp.current = null)
  }
  function GN(e) {
    var t = e
    do {
      var n = t.alternate,
        r = t.return
      if ((t.flags & uu) === De) {
        Vt(t)
        var a = void 0
        if (
          ((t.mode & xt) === _e
            ? (a = hN(n, t, ga))
            : (Rp(t), (a = hN(n, t, ga)), kf(t, !1)),
          Rn(),
          a !== null)
        ) {
          It = a
          return
        }
      } else {
        var l = m2(n, t)
        if (l !== null) {
          ;(l.flags &= pE), (It = l)
          return
        }
        if ((t.mode & xt) !== _e) {
          kf(t, !1)
          for (var u = t.actualDuration, c = t.child; c !== null; )
            (u += c.actualDuration), (c = c.sibling)
          t.actualDuration = u
        }
        if (r !== null)
          (r.flags |= uu), (r.subtreeFlags = De), (r.deletions = null)
        else {
          ;(yn = Zp), (It = null)
          return
        }
      }
      var v = t.sibling
      if (v !== null) {
        It = v
        return
      }
      ;(t = r), (It = t)
    } while (t !== null)
    yn === qa && (yn = AN)
  }
  function gl(e, t, n) {
    var r = Vr(),
      a = zn.transition
    try {
      ;(zn.transition = null), _n(Cr), b_(e, t, n, r)
    } finally {
      ;(zn.transition = a), _n(r)
    }
    return null
  }
  function b_(e, t, n, r) {
    do Xa()
    while (Mi !== null)
    if ((O_(), (nt & (Hn | Hr)) !== pn))
      throw new Error('Should not already be working.')
    var a = e.finishedWork,
      l = e.finishedLanes
    if ((AE(l), a === null)) return ug(), null
    if (
      (l === W &&
        f(
          'root.finishedLanes should not be empty during a commit. This is a bug in React.'
        ),
      (e.finishedWork = null),
      (e.finishedLanes = W),
      a === e.current)
    )
      throw new Error(
        'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.'
      )
    ;(e.callbackNode = null), (e.callbackPriority = Dn)
    var u = We(a.lanes, a.childLanes)
    fC(e, u),
      e === rr && ((rr = null), (It = null), (hn = W)),
      ((a.subtreeFlags & Pl) !== De || (a.flags & Pl) !== De) &&
        (hl ||
          ((hl = !0),
          (ah = n),
          vh(Xi, function () {
            return Xa(), null
          })))
    var c = (a.subtreeFlags & (em | tm | su | Pl)) !== De,
      v = (a.flags & (em | tm | su | Pl)) !== De
    if (c || v) {
      var g = zn.transition
      zn.transition = null
      var b = Vr()
      _n(Cr)
      var D = nt
      ;(nt |= Hr),
        (Jp.current = null),
        g2(e, a),
        I0(),
        L2(e, a, l),
        LT(e.containerInfo),
        (e.current = a),
        VE(l),
        k2(a, e, l),
        IE(),
        SE(),
        (nt = D),
        _n(b),
        (zn.transition = g)
    } else (e.current = a), I0()
    var w = hl
    if (
      (hl ? ((hl = !1), (Mi = e), (Ns = l)) : ((Co = 0), (If = null)),
      (u = e.pendingLanes),
      u === W && (Eo = null),
      w || XN(e.current, !1),
      _E(a.stateNode, r),
      Br && e.memoizedUpdaters.clear(),
      J2(),
      vr(e, Tn()),
      t !== null)
    )
      for (var A = e.onRecoverableError, U = 0; U < t.length; U++) {
        var $ = t[U],
          se = $.stack,
          Se = $.digest
        A($.value, { componentStack: se, digest: Se })
      }
    if (Bf) {
      Bf = !1
      var Ne = nh
      throw ((nh = null), Ne)
    }
    return (
      Er(Ns, Ae) && e.tag !== xi && Xa(),
      (u = e.pendingLanes),
      Er(u, Ae) ? (DD(), e === ih ? xs++ : ((xs = 0), (ih = e))) : (xs = 0),
      Si(),
      ug(),
      null
    )
  }
  function Xa() {
    if (Mi !== null) {
      var e = Cg(Ns),
        t = pC($a, e),
        n = zn.transition,
        r = Vr()
      try {
        return (zn.transition = null), _n(t), x_()
      } finally {
        _n(r), (zn.transition = n)
      }
    }
    return !1
  }
  function N_(e) {
    rh.push(e),
      hl ||
        ((hl = !0),
        vh(Xi, function () {
          return Xa(), null
        }))
  }
  function x_() {
    if (Mi === null) return !1
    var e = ah
    ah = null
    var t = Mi,
      n = Ns
    if (((Mi = null), (Ns = W), (nt & (Hn | Hr)) !== pn))
      throw new Error('Cannot flush passive effects while already rendering.')
    ;(lh = !0), (Vf = !1), YE(n)
    var r = nt
    ;(nt |= Hr), $2(t.current), F2(t, t.current, n, e)
    {
      var a = rh
      rh = []
      for (var l = 0; l < a.length; l++) {
        var u = a[l]
        S2(t, u)
      }
    }
    WE(),
      XN(t.current, !0),
      (nt = r),
      Si(),
      Vf ? (t === If ? Co++ : ((Co = 0), (If = t))) : (Co = 0),
      (lh = !1),
      (Vf = !1),
      OE(t)
    {
      var c = t.current.stateNode
      ;(c.effectDuration = 0), (c.passiveEffectDuration = 0)
    }
    return !0
  }
  function qN(e) {
    return Eo !== null && Eo.has(e)
  }
  function S_(e) {
    Eo === null ? (Eo = new Set([e])) : Eo.add(e)
  }
  function E_(e) {
    Bf || ((Bf = !0), (nh = e))
  }
  var C_ = E_
  function QN(e, t, n) {
    var r = ml(n, t),
      a = W0(e, r, Ae),
      l = Ci(e, a, Ae),
      u = ar()
    l !== null && (yu(l, Ae, u), vr(l, u))
  }
  function Ot(e, t, n) {
    if ((p2(n), Rs(!1), e.tag === M)) {
      QN(e, e, n)
      return
    }
    var r = null
    for (r = t; r !== null; ) {
      if (r.tag === M) {
        QN(r, e, n)
        return
      } else if (r.tag === T) {
        var a = r.type,
          l = r.stateNode
        if (
          typeof a.getDerivedStateFromError == 'function' ||
          (typeof l.componentDidCatch == 'function' && !qN(l))
        ) {
          var u = ml(n, e),
            c = Mp(r, u, Ae),
            v = Ci(r, c, Ae),
            g = ar()
          v !== null && (yu(v, Ae, g), vr(v, g))
          return
        }
      }
      r = r.return
    }
    f(
      `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
      n
    )
  }
  function R_(e, t, n) {
    var r = e.pingCache
    r !== null && r.delete(t)
    var a = ar()
    Ng(e, n),
      A_(e),
      rr === e &&
        Gl(hn, n) &&
        (yn === ps || (yn === Hf && hg(hn) && Tn() - th < UN)
          ? yl(e, W)
          : (Pf = We(Pf, n))),
      vr(e, a)
  }
  function KN(e, t) {
    t === Dn && (t = i_(e))
    var n = ar(),
      r = fr(e, t)
    r !== null && (yu(r, t, n), vr(r, n))
  }
  function T_(e) {
    var t = e.memoizedState,
      n = Dn
    t !== null && (n = t.retryLane), KN(e, n)
  }
  function w_(e, t) {
    var n = Dn,
      r
    switch (e.tag) {
      case Z:
        r = e.stateNode
        var a = e.memoizedState
        a !== null && (n = a.retryLane)
        break
      case Te:
        r = e.stateNode
        break
      default:
        throw new Error(
          'Pinged unknown suspense boundary type. This is probably a bug in React.'
        )
    }
    r !== null && r.delete(t), KN(e, n)
  }
  function D_(e) {
    return e < 120
      ? 120
      : e < 480
      ? 480
      : e < 1080
      ? 1080
      : e < 1920
      ? 1920
      : e < 3e3
      ? 3e3
      : e < 4320
      ? 4320
      : t_(e / 1960) * 1960
  }
  function __() {
    if (xs > r_)
      throw (
        ((xs = 0),
        (ih = null),
        new Error(
          'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.'
        ))
      )
    Co > a_ &&
      ((Co = 0),
      (If = null),
      f(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      ))
  }
  function O_() {
    Wr.flushLegacyContextWarning(), Wr.flushPendingUnsafeLifecycleWarnings()
  }
  function XN(e, t) {
    Vt(e),
      Qf(e, Fa, Q2),
      t && Qf(e, oc, K2),
      Qf(e, Fa, G2),
      t && Qf(e, oc, q2),
      Rn()
  }
  function Qf(e, t, n) {
    for (var r = e, a = null; r !== null; ) {
      var l = r.subtreeFlags & t
      r !== a && r.child !== null && l !== De
        ? (r = r.child)
        : ((r.flags & t) !== De && n(r),
          r.sibling !== null ? (r = r.sibling) : (r = a = r.return))
    }
  }
  var Kf = null
  function JN(e) {
    {
      if ((nt & Hn) !== pn || !(e.mode & tt)) return
      var t = e.tag
      if (
        t !== E &&
        t !== M &&
        t !== T &&
        t !== x &&
        t !== ve &&
        t !== Ee &&
        t !== ne
      )
        return
      var n = Be(e) || 'ReactComponent'
      if (Kf !== null) {
        if (Kf.has(n)) return
        Kf.add(n)
      } else Kf = new Set([n])
      var r = Vn
      try {
        Vt(e),
          f(
            "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
          )
      } finally {
        r ? Vt(e) : Rn()
      }
    }
  }
  var fh
  {
    var M_ = null
    fh = function (e, t, n) {
      var r = lx(M_, t)
      try {
        return fN(e, t, n)
      } catch (l) {
        if (
          Iw() ||
          (l !== null && typeof l == 'object' && typeof l.then == 'function')
        )
          throw l
        if (
          (ef(),
          b0(),
          yN(e, t),
          lx(t, r),
          t.mode & xt && Rp(t),
          qd(null, fN, null, e, t, n),
          fE())
        ) {
          var a = Qd()
          typeof a == 'object' &&
            a !== null &&
            a._suppressLogging &&
            typeof l == 'object' &&
            l !== null &&
            !l._suppressLogging &&
            (l._suppressLogging = !0)
        }
        throw l
      }
    }
  }
  var ZN = !1,
    dh
  dh = new Set()
  function L_(e) {
    if (Vi && !RD())
      switch (e.tag) {
        case x:
        case ve:
        case ne: {
          var t = (It && Be(It)) || 'Unknown',
            n = t
          if (!dh.has(n)) {
            dh.add(n)
            var r = Be(e) || 'Unknown'
            f(
              'Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render',
              r,
              t,
              t
            )
          }
          break
        }
        case T: {
          ZN ||
            (f(
              'Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.'
            ),
            (ZN = !0))
          break
        }
      }
  }
  function Cs(e, t) {
    if (Br) {
      var n = e.memoizedUpdaters
      n.forEach(function (r) {
        xg(e, r, t)
      })
    }
  }
  var mh = {}
  function vh(e, t) {
    {
      var n = ea.current
      return n !== null ? (n.push(t), mh) : og(e, t)
    }
  }
  function ex(e) {
    if (e !== mh) return NE(e)
  }
  function tx() {
    return ea.current !== null
  }
  function k_(e) {
    {
      if (e.mode & tt) {
        if (!LN()) return
      } else if (
        !e_() ||
        nt !== pn ||
        (e.tag !== x && e.tag !== ve && e.tag !== ne)
      )
        return
      if (ea.current === null) {
        var t = Vn
        try {
          Vt(e),
            f(
              `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,
              Be(e)
            )
        } finally {
          t ? Vt(e) : Rn()
        }
      }
    }
  }
  function A_(e) {
    e.tag !== xi &&
      LN() &&
      ea.current === null &&
      f(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`)
  }
  function Rs(e) {
    zN = e
  }
  var $r = null,
    Ro = null,
    U_ = function (e) {
      $r = e
    }
  function To(e) {
    {
      if ($r === null) return e
      var t = $r(e)
      return t === void 0 ? e : t.current
    }
  }
  function ph(e) {
    return To(e)
  }
  function hh(e) {
    {
      if ($r === null) return e
      var t = $r(e)
      if (t === void 0) {
        if (e != null && typeof e.render == 'function') {
          var n = To(e.render)
          if (e.render !== n) {
            var r = { $$typeof: xe, render: n }
            return (
              e.displayName !== void 0 && (r.displayName = e.displayName), r
            )
          }
        }
        return e
      }
      return t.current
    }
  }
  function nx(e, t) {
    {
      if ($r === null) return !1
      var n = e.elementType,
        r = t.type,
        a = !1,
        l = typeof r == 'object' && r !== null ? r.$$typeof : null
      switch (e.tag) {
        case T: {
          typeof r == 'function' && (a = !0)
          break
        }
        case x: {
          ;(typeof r == 'function' || l === Xe) && (a = !0)
          break
        }
        case ve: {
          ;(l === xe || l === Xe) && (a = !0)
          break
        }
        case Ee:
        case ne: {
          ;(l === Ct || l === Xe) && (a = !0)
          break
        }
        default:
          return !1
      }
      if (a) {
        var u = $r(n)
        if (u !== void 0 && u === $r(r)) return !0
      }
      return !1
    }
  }
  function rx(e) {
    {
      if ($r === null || typeof WeakSet != 'function') return
      Ro === null && (Ro = new WeakSet()), Ro.add(e)
    }
  }
  var F_ = function (e, t) {
      {
        if ($r === null) return
        var n = t.staleFamilies,
          r = t.updatedFamilies
        Xa(),
          Ka(function () {
            yh(e.current, r, n)
          })
      }
    },
    j_ = function (e, t) {
      {
        if (e.context !== wr) return
        Xa(),
          Ka(function () {
            Ts(t, e, null, null)
          })
      }
    }
  function yh(e, t, n) {
    {
      var r = e.alternate,
        a = e.child,
        l = e.sibling,
        u = e.tag,
        c = e.type,
        v = null
      switch (u) {
        case x:
        case ne:
        case T:
          v = c
          break
        case ve:
          v = c.render
          break
      }
      if ($r === null)
        throw new Error('Expected resolveFamily to be set during hot reload.')
      var g = !1,
        b = !1
      if (v !== null) {
        var D = $r(v)
        D !== void 0 &&
          (n.has(D) ? (b = !0) : t.has(D) && (u === T ? (b = !0) : (g = !0)))
      }
      if (
        (Ro !== null && (Ro.has(e) || (r !== null && Ro.has(r))) && (b = !0),
        b && (e._debugNeedsRemount = !0),
        b || g)
      ) {
        var w = fr(e, Ae)
        w !== null && gn(w, e, Ae, Lt)
      }
      a !== null && !b && yh(a, t, n), l !== null && yh(l, t, n)
    }
  }
  var z_ = function (e, t) {
    {
      var n = new Set(),
        r = new Set(
          t.map(function (a) {
            return a.current
          })
        )
      return gh(e.current, r, n), n
    }
  }
  function gh(e, t, n) {
    {
      var r = e.child,
        a = e.sibling,
        l = e.tag,
        u = e.type,
        c = null
      switch (l) {
        case x:
        case ne:
        case T:
          c = u
          break
        case ve:
          c = u.render
          break
      }
      var v = !1
      c !== null && t.has(c) && (v = !0),
        v ? H_(e, n) : r !== null && gh(r, t, n),
        a !== null && gh(a, t, n)
    }
  }
  function H_(e, t) {
    {
      var n = $_(e, t)
      if (n) return
      for (var r = e; ; ) {
        switch (r.tag) {
          case j:
            t.add(r.stateNode)
            return
          case B:
            t.add(r.stateNode.containerInfo)
            return
          case M:
            t.add(r.stateNode.containerInfo)
            return
        }
        if (r.return === null) throw new Error('Expected to reach root first.')
        r = r.return
      }
    }
  }
  function $_(e, t) {
    for (var n = e, r = !1; ; ) {
      if (n.tag === j) (r = !0), t.add(n.stateNode)
      else if (n.child !== null) {
        ;(n.child.return = n), (n = n.child)
        continue
      }
      if (n === e) return r
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return r
        n = n.return
      }
      ;(n.sibling.return = n.return), (n = n.sibling)
    }
    return !1
  }
  var bh
  {
    bh = !1
    try {
      var ax = Object.preventExtensions({})
    } catch {
      bh = !0
    }
  }
  function P_(e, t, n, r) {
    ;(this.tag = e),
      (this.key = n),
      (this.elementType = null),
      (this.type = null),
      (this.stateNode = null),
      (this.return = null),
      (this.child = null),
      (this.sibling = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.memoizedProps = null),
      (this.updateQueue = null),
      (this.memoizedState = null),
      (this.dependencies = null),
      (this.mode = r),
      (this.flags = De),
      (this.subtreeFlags = De),
      (this.deletions = null),
      (this.lanes = W),
      (this.childLanes = W),
      (this.alternate = null),
      (this.actualDuration = Number.NaN),
      (this.actualStartTime = Number.NaN),
      (this.selfBaseDuration = Number.NaN),
      (this.treeBaseDuration = Number.NaN),
      (this.actualDuration = 0),
      (this.actualStartTime = -1),
      (this.selfBaseDuration = 0),
      (this.treeBaseDuration = 0),
      (this._debugSource = null),
      (this._debugOwner = null),
      (this._debugNeedsRemount = !1),
      (this._debugHookTypes = null),
      !bh &&
        typeof Object.preventExtensions == 'function' &&
        Object.preventExtensions(this)
  }
  var Dr = function (e, t, n, r) {
    return new P_(e, t, n, r)
  }
  function Nh(e) {
    var t = e.prototype
    return !!(t && t.isReactComponent)
  }
  function B_(e) {
    return typeof e == 'function' && !Nh(e) && e.defaultProps === void 0
  }
  function V_(e) {
    if (typeof e == 'function') return Nh(e) ? T : x
    if (e != null) {
      var t = e.$$typeof
      if (t === xe) return ve
      if (t === Ct) return Ee
    }
    return E
  }
  function bl(e, t) {
    var n = e.alternate
    n === null
      ? ((n = Dr(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n._debugSource = e._debugSource),
        (n._debugOwner = e._debugOwner),
        (n._debugHookTypes = e._debugHookTypes),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = De),
        (n.subtreeFlags = De),
        (n.deletions = null),
        (n.actualDuration = 0),
        (n.actualStartTime = -1)),
      (n.flags = e.flags & ja),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue)
    var r = e.dependencies
    switch (
      ((n.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.selfBaseDuration = e.selfBaseDuration),
      (n.treeBaseDuration = e.treeBaseDuration),
      (n._debugNeedsRemount = e._debugNeedsRemount),
      n.tag)
    ) {
      case E:
      case x:
      case ne:
        n.type = To(e.type)
        break
      case T:
        n.type = ph(e.type)
        break
      case ve:
        n.type = hh(e.type)
        break
    }
    return n
  }
  function I_(e, t) {
    e.flags &= ja | ln
    var n = e.alternate
    if (n === null)
      (e.childLanes = W),
        (e.lanes = t),
        (e.child = null),
        (e.subtreeFlags = De),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.stateNode = null),
        (e.selfBaseDuration = 0),
        (e.treeBaseDuration = 0)
    else {
      ;(e.childLanes = n.childLanes),
        (e.lanes = n.lanes),
        (e.child = n.child),
        (e.subtreeFlags = De),
        (e.deletions = null),
        (e.memoizedProps = n.memoizedProps),
        (e.memoizedState = n.memoizedState),
        (e.updateQueue = n.updateQueue),
        (e.type = n.type)
      var r = n.dependencies
      ;(e.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
        (e.selfBaseDuration = n.selfBaseDuration),
        (e.treeBaseDuration = n.treeBaseDuration)
    }
    return e
  }
  function Y_(e, t, n) {
    var r
    return (
      e === Wc ? ((r = tt), t === !0 && ((r |= on), (r |= ua))) : (r = _e),
      Br && (r |= xt),
      Dr(M, null, null, r)
    )
  }
  function xh(e, t, n, r, a, l) {
    var u = E,
      c = e
    if (typeof e == 'function') Nh(e) ? ((u = T), (c = ph(c))) : (c = To(c))
    else if (typeof e == 'string') u = j
    else {
      e: switch (e) {
        case G:
          return Ai(n.children, a, l, t)
        case ae:
          ;(u = de), (a |= on), (a & tt) !== _e && (a |= ua)
          break
        case we:
          return W_(n, a, l, t)
        case Ie:
          return G_(n, a, l, t)
        case Wt:
          return q_(n, a, l, t)
        case $i:
          return ix(n, a, l, t)
        case Nr:
        case Bn:
        case Cd:
        case Rd:
        case ia:
        default: {
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Ke:
                u = X
                break e
              case dt:
                u = Y
                break e
              case xe:
                ;(u = ve), (c = hh(c))
                break e
              case Ct:
                u = Ee
                break e
              case Xe:
                ;(u = st), (c = null)
                break e
            }
          var v = ''
          {
            ;(e === void 0 ||
              (typeof e == 'object' &&
                e !== null &&
                Object.keys(e).length === 0)) &&
              (v +=
                " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.")
            var g = r ? Be(r) : null
            g &&
              (v +=
                `

Check the render method of \`` +
                g +
                '`.')
          }
          throw new Error(
            'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) ' +
              ('but got: ' + (e == null ? e : typeof e) + '.' + v)
          )
        }
      }
    }
    var b = Dr(u, n, t, a)
    return (
      (b.elementType = e), (b.type = c), (b.lanes = l), (b._debugOwner = r), b
    )
  }
  function Sh(e, t, n) {
    var r = null
    r = e._owner
    var a = e.type,
      l = e.key,
      u = e.props,
      c = xh(a, l, u, r, t, n)
    return (c._debugSource = e._source), (c._debugOwner = e._owner), c
  }
  function Ai(e, t, n, r) {
    var a = Dr(O, e, r, t)
    return (a.lanes = n), a
  }
  function W_(e, t, n, r) {
    typeof e.id != 'string' &&
      f(
        'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
        typeof e.id
      )
    var a = Dr(ye, e, r, t | xt)
    return (
      (a.elementType = we),
      (a.lanes = n),
      (a.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
      a
    )
  }
  function G_(e, t, n, r) {
    var a = Dr(Z, e, r, t)
    return (a.elementType = Ie), (a.lanes = n), a
  }
  function q_(e, t, n, r) {
    var a = Dr(Te, e, r, t)
    return (a.elementType = Wt), (a.lanes = n), a
  }
  function ix(e, t, n, r) {
    var a = Dr(ge, e, r, t)
    ;(a.elementType = $i), (a.lanes = n)
    var l = { isHidden: !1 }
    return (a.stateNode = l), a
  }
  function Eh(e, t, n) {
    var r = Dr(z, e, null, t)
    return (r.lanes = n), r
  }
  function Q_() {
    var e = Dr(j, null, null, _e)
    return (e.elementType = 'DELETED'), e
  }
  function K_(e) {
    var t = Dr(Ce, null, null, _e)
    return (t.stateNode = e), t
  }
  function Ch(e, t, n) {
    var r = e.children !== null ? e.children : [],
      a = Dr(B, r, e.key, t)
    return (
      (a.lanes = n),
      (a.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      a
    )
  }
  function lx(e, t) {
    return (
      e === null && (e = Dr(E, null, null, _e)),
      (e.tag = t.tag),
      (e.key = t.key),
      (e.elementType = t.elementType),
      (e.type = t.type),
      (e.stateNode = t.stateNode),
      (e.return = t.return),
      (e.child = t.child),
      (e.sibling = t.sibling),
      (e.index = t.index),
      (e.ref = t.ref),
      (e.pendingProps = t.pendingProps),
      (e.memoizedProps = t.memoizedProps),
      (e.updateQueue = t.updateQueue),
      (e.memoizedState = t.memoizedState),
      (e.dependencies = t.dependencies),
      (e.mode = t.mode),
      (e.flags = t.flags),
      (e.subtreeFlags = t.subtreeFlags),
      (e.deletions = t.deletions),
      (e.lanes = t.lanes),
      (e.childLanes = t.childLanes),
      (e.alternate = t.alternate),
      (e.actualDuration = t.actualDuration),
      (e.actualStartTime = t.actualStartTime),
      (e.selfBaseDuration = t.selfBaseDuration),
      (e.treeBaseDuration = t.treeBaseDuration),
      (e._debugSource = t._debugSource),
      (e._debugOwner = t._debugOwner),
      (e._debugNeedsRemount = t._debugNeedsRemount),
      (e._debugHookTypes = t._debugHookTypes),
      e
    )
  }
  function X_(e, t, n, r, a) {
    ;(this.tag = t),
      (this.containerInfo = e),
      (this.pendingChildren = null),
      (this.current = null),
      (this.pingCache = null),
      (this.finishedWork = null),
      (this.timeoutHandle = iv),
      (this.context = null),
      (this.pendingContext = null),
      (this.callbackNode = null),
      (this.callbackPriority = Dn),
      (this.eventTimes = Dm(W)),
      (this.expirationTimes = Dm(Lt)),
      (this.pendingLanes = W),
      (this.suspendedLanes = W),
      (this.pingedLanes = W),
      (this.expiredLanes = W),
      (this.mutableReadLanes = W),
      (this.finishedLanes = W),
      (this.entangledLanes = W),
      (this.entanglements = Dm(W)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null),
      (this.effectDuration = 0),
      (this.passiveEffectDuration = 0)
    {
      this.memoizedUpdaters = new Set()
      for (var l = (this.pendingUpdatersLaneMap = []), u = 0; u < im; u++)
        l.push(new Set())
    }
    switch (t) {
      case Wc:
        this._debugRootType = n ? 'hydrateRoot()' : 'createRoot()'
        break
      case xi:
        this._debugRootType = n ? 'hydrate()' : 'render()'
        break
    }
  }
  function ox(e, t, n, r, a, l, u, c, v, g) {
    var b = new X_(e, t, n, c, v),
      D = Y_(t, l)
    ;(b.current = D), (D.stateNode = b)
    {
      var w = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }
      D.memoizedState = w
    }
    return Lv(D), b
  }
  var Rh = '18.2.0'
  function J_(e, t, n) {
    var r =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null
    return (
      Zn(r),
      {
        $$typeof: C,
        key: r == null ? null : '' + r,
        children: e,
        containerInfo: t,
        implementation: n,
      }
    )
  }
  var Th, wh
  ;(Th = !1), (wh = {})
  function ux(e) {
    if (!e) return wr
    var t = Hl(e),
      n = Uw(t)
    if (t.tag === T) {
      var r = t.type
      if (fa(r)) return Ab(t, r, n)
    }
    return n
  }
  function Z_(e, t) {
    {
      var n = Hl(e)
      if (n === void 0) {
        if (typeof e.render == 'function')
          throw new Error('Unable to find node on an unmounted component.')
        var r = Object.keys(e).join(',')
        throw new Error(
          'Argument appears to not be a ReactComponent. Keys: ' + r
        )
      }
      var a = ag(n)
      if (a === null) return null
      if (a.mode & on) {
        var l = Be(n) || 'Component'
        if (!wh[l]) {
          wh[l] = !0
          var u = Vn
          try {
            Vt(a),
              n.mode & on
                ? f(
                    '%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node',
                    t,
                    t,
                    l
                  )
                : f(
                    '%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node',
                    t,
                    t,
                    l
                  )
          } finally {
            u ? Vt(u) : Rn()
          }
        }
      }
      return a.stateNode
    }
  }
  function sx(e, t, n, r, a, l, u, c) {
    var v = !1,
      g = null
    return ox(e, t, v, g, n, r, a, l, u)
  }
  function cx(e, t, n, r, a, l, u, c, v, g) {
    var b = !0,
      D = ox(n, r, b, e, a, l, u, c, v)
    D.context = ux(null)
    var w = D.current,
      A = ar(),
      U = Li(w),
      $ = Wa(A, U)
    return ($.callback = t != null ? t : null), Ci(w, $, U), l_(D, U, A), D
  }
  function Ts(e, t, n, r) {
    DE(t, e)
    var a = t.current,
      l = ar(),
      u = Li(a)
    qE(u)
    var c = ux(n)
    t.context === null ? (t.context = c) : (t.pendingContext = c),
      Vi &&
        Vn !== null &&
        !Th &&
        ((Th = !0),
        f(
          `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
          Be(Vn) || 'Unknown'
        ))
    var v = Wa(l, u)
    ;(v.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null &&
        (typeof r != 'function' &&
          f(
            'render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
            r
          ),
        (v.callback = r))
    var g = Ci(a, v, u)
    return g !== null && (gn(g, a, u, l), lf(g, a, u)), u
  }
  function Xf(e) {
    var t = e.current
    if (!t.child) return null
    switch (t.child.tag) {
      case j:
        return t.child.stateNode
      default:
        return t.child.stateNode
    }
  }
  function eO(e) {
    switch (e.tag) {
      case M: {
        var t = e.stateNode
        if (hc(t)) {
          var n = rC(t)
          c_(t, n)
        }
        break
      }
      case Z: {
        Ka(function () {
          var a = fr(e, Ae)
          if (a !== null) {
            var l = ar()
            gn(a, e, Ae, l)
          }
        })
        var r = Ae
        Dh(e, r)
        break
      }
    }
  }
  function fx(e, t) {
    var n = e.memoizedState
    n !== null && n.dehydrated !== null && (n.retryLane = sC(n.retryLane, t))
  }
  function Dh(e, t) {
    fx(e, t)
    var n = e.alternate
    n && fx(n, t)
  }
  function tO(e) {
    if (e.tag === Z) {
      var t = mu,
        n = fr(e, t)
      if (n !== null) {
        var r = ar()
        gn(n, e, t, r)
      }
      Dh(e, t)
    }
  }
  function nO(e) {
    if (e.tag === Z) {
      var t = Li(e),
        n = fr(e, t)
      if (n !== null) {
        var r = ar()
        gn(n, e, t, r)
      }
      Dh(e, t)
    }
  }
  function dx(e) {
    var t = bE(e)
    return t === null ? null : t.stateNode
  }
  var mx = function (e) {
    return null
  }
  function rO(e) {
    return mx(e)
  }
  var vx = function (e) {
    return !1
  }
  function aO(e) {
    return vx(e)
  }
  var px = null,
    hx = null,
    yx = null,
    gx = null,
    bx = null,
    Nx = null,
    xx = null,
    Sx = null,
    Ex = null
  {
    var Cx = function (e, t, n) {
        var r = t[n],
          a = vt(e) ? e.slice() : Je({}, e)
        return n + 1 === t.length
          ? (vt(a) ? a.splice(r, 1) : delete a[r], a)
          : ((a[r] = Cx(e[r], t, n + 1)), a)
      },
      Rx = function (e, t) {
        return Cx(e, t, 0)
      },
      Tx = function (e, t, n, r) {
        var a = t[r],
          l = vt(e) ? e.slice() : Je({}, e)
        if (r + 1 === t.length) {
          var u = n[r]
          ;(l[u] = l[a]), vt(l) ? l.splice(a, 1) : delete l[a]
        } else l[a] = Tx(e[a], t, n, r + 1)
        return l
      },
      wx = function (e, t, n) {
        if (t.length !== n.length) {
          y('copyWithRename() expects paths of the same length')
          return
        } else
          for (var r = 0; r < n.length - 1; r++)
            if (t[r] !== n[r]) {
              y(
                'copyWithRename() expects paths to be the same except for the deepest key'
              )
              return
            }
        return Tx(e, t, n, 0)
      },
      Dx = function (e, t, n, r) {
        if (n >= t.length) return r
        var a = t[n],
          l = vt(e) ? e.slice() : Je({}, e)
        return (l[a] = Dx(e[a], t, n + 1, r)), l
      },
      _x = function (e, t, n) {
        return Dx(e, t, 0, n)
      },
      _h = function (e, t) {
        for (var n = e.memoizedState; n !== null && t > 0; ) (n = n.next), t--
        return n
      }
    ;(px = function (e, t, n, r) {
      var a = _h(e, t)
      if (a !== null) {
        var l = _x(a.memoizedState, n, r)
        ;(a.memoizedState = l),
          (a.baseState = l),
          (e.memoizedProps = Je({}, e.memoizedProps))
        var u = fr(e, Ae)
        u !== null && gn(u, e, Ae, Lt)
      }
    }),
      (hx = function (e, t, n) {
        var r = _h(e, t)
        if (r !== null) {
          var a = Rx(r.memoizedState, n)
          ;(r.memoizedState = a),
            (r.baseState = a),
            (e.memoizedProps = Je({}, e.memoizedProps))
          var l = fr(e, Ae)
          l !== null && gn(l, e, Ae, Lt)
        }
      }),
      (yx = function (e, t, n, r) {
        var a = _h(e, t)
        if (a !== null) {
          var l = wx(a.memoizedState, n, r)
          ;(a.memoizedState = l),
            (a.baseState = l),
            (e.memoizedProps = Je({}, e.memoizedProps))
          var u = fr(e, Ae)
          u !== null && gn(u, e, Ae, Lt)
        }
      }),
      (gx = function (e, t, n) {
        ;(e.pendingProps = _x(e.memoizedProps, t, n)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps)
        var r = fr(e, Ae)
        r !== null && gn(r, e, Ae, Lt)
      }),
      (bx = function (e, t) {
        ;(e.pendingProps = Rx(e.memoizedProps, t)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps)
        var n = fr(e, Ae)
        n !== null && gn(n, e, Ae, Lt)
      }),
      (Nx = function (e, t, n) {
        ;(e.pendingProps = wx(e.memoizedProps, t, n)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps)
        var r = fr(e, Ae)
        r !== null && gn(r, e, Ae, Lt)
      }),
      (xx = function (e) {
        var t = fr(e, Ae)
        t !== null && gn(t, e, Ae, Lt)
      }),
      (Sx = function (e) {
        mx = e
      }),
      (Ex = function (e) {
        vx = e
      })
  }
  function iO(e) {
    var t = ag(e)
    return t === null ? null : t.stateNode
  }
  function lO(e) {
    return null
  }
  function oO() {
    return Vn
  }
  function uO(e) {
    var t = e.findFiberByHostInstance,
      n = s.ReactCurrentDispatcher
    return wE({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: px,
      overrideHookStateDeletePath: hx,
      overrideHookStateRenamePath: yx,
      overrideProps: gx,
      overridePropsDeletePath: bx,
      overridePropsRenamePath: Nx,
      setErrorHandler: Sx,
      setSuspenseHandler: Ex,
      scheduleUpdate: xx,
      currentDispatcherRef: n,
      findHostInstanceByFiber: iO,
      findFiberByHostInstance: t || lO,
      findHostInstancesForRefresh: z_,
      scheduleRefresh: F_,
      scheduleRoot: j_,
      setRefreshHandler: U_,
      getCurrentFiber: oO,
      reconcilerVersion: Rh,
    })
  }
  var Ox =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e)
        }
  function Oh(e) {
    this._internalRoot = e
  }
  ;(Jf.prototype.render = Oh.prototype.render =
    function (e) {
      var t = this._internalRoot
      if (t === null) throw new Error('Cannot update an unmounted root.')
      {
        typeof arguments[1] == 'function'
          ? f(
              'render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
            )
          : Zf(arguments[1])
          ? f(
              "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
            )
          : typeof arguments[1] < 'u' &&
            f(
              'You passed a second argument to root.render(...) but it only accepts one argument.'
            )
        var n = t.containerInfo
        if (n.nodeType !== an) {
          var r = dx(t.current)
          r &&
            r.parentNode !== n &&
            f(
              "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container."
            )
        }
      }
      Ts(e, t, null, null)
    }),
    (Jf.prototype.unmount = Oh.prototype.unmount =
      function () {
        typeof arguments[0] == 'function' &&
          f(
            'unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
          )
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var t = e.containerInfo
          BN() &&
            f(
              'Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.'
            ),
            Ka(function () {
              Ts(null, e, null, null)
            }),
            _b(t)
        }
      })
  function sO(e, t) {
    if (!Zf(e))
      throw new Error('createRoot(...): Target container is not a DOM element.')
    Mx(e)
    var n = !1,
      r = !1,
      a = '',
      l = Ox
    t != null &&
      (t.hydrate
        ? y(
            'hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.'
          )
        : typeof t == 'object' &&
          t !== null &&
          t.$$typeof === aa &&
          f(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),
      t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError),
      t.transitionCallbacks !== void 0 && t.transitionCallbacks)
    var u = sx(e, Wc, null, n, r, a, l)
    Hc(u.current, e)
    var c = e.nodeType === an ? e.parentNode : e
    return Au(c), new Oh(u)
  }
  function Jf(e) {
    this._internalRoot = e
  }
  function cO(e) {
    e && TC(e)
  }
  Jf.prototype.unstable_scheduleHydration = cO
  function fO(e, t, n) {
    if (!Zf(e))
      throw new Error(
        'hydrateRoot(...): Target container is not a DOM element.'
      )
    Mx(e),
      t === void 0 &&
        f(
          'Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)'
        )
    var r = n != null ? n : null,
      a = (n != null && n.hydratedSources) || null,
      l = !1,
      u = !1,
      c = '',
      v = Ox
    n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (c = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (v = n.onRecoverableError))
    var g = cx(t, null, e, Wc, r, l, u, c, v)
    if ((Hc(g.current, e), Au(e), a))
      for (var b = 0; b < a.length; b++) {
        var D = a[b]
        bD(g, D)
      }
    return new Jf(g)
  }
  function Zf(e) {
    return !!(
      e &&
      (e.nodeType === sr || e.nodeType === ka || e.nodeType === jd || !Pt)
    )
  }
  function ws(e) {
    return !!(
      e &&
      (e.nodeType === sr ||
        e.nodeType === ka ||
        e.nodeType === jd ||
        (e.nodeType === an && e.nodeValue === ' react-mount-point-unstable '))
    )
  }
  function Mx(e) {
    e.nodeType === sr &&
      e.tagName &&
      e.tagName.toUpperCase() === 'BODY' &&
      f(
        'createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.'
      ),
      Yu(e) &&
        (e._reactRootContainer
          ? f(
              'You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.'
            )
          : f(
              'You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.'
            ))
  }
  var dO = s.ReactCurrentOwner,
    Lx
  Lx = function (e) {
    if (e._reactRootContainer && e.nodeType !== an) {
      var t = dx(e._reactRootContainer.current)
      t &&
        t.parentNode !== e &&
        f(
          'render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.'
        )
    }
    var n = !!e._reactRootContainer,
      r = Mh(e),
      a = !!(r && bi(r))
    a &&
      !n &&
      f(
        'render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.'
      ),
      e.nodeType === sr &&
        e.tagName &&
        e.tagName.toUpperCase() === 'BODY' &&
        f(
          'render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.'
        )
  }
  function Mh(e) {
    return e ? (e.nodeType === ka ? e.documentElement : e.firstChild) : null
  }
  function kx() {}
  function mO(e, t, n, r, a) {
    if (a) {
      if (typeof r == 'function') {
        var l = r
        r = function () {
          var w = Xf(u)
          l.call(w)
        }
      }
      var u = cx(t, r, e, xi, null, !1, !1, '', kx)
      ;(e._reactRootContainer = u), Hc(u.current, e)
      var c = e.nodeType === an ? e.parentNode : e
      return Au(c), Ka(), u
    } else {
      for (var v; (v = e.lastChild); ) e.removeChild(v)
      if (typeof r == 'function') {
        var g = r
        r = function () {
          var w = Xf(b)
          g.call(w)
        }
      }
      var b = sx(e, xi, null, !1, !1, '', kx)
      ;(e._reactRootContainer = b), Hc(b.current, e)
      var D = e.nodeType === an ? e.parentNode : e
      return (
        Au(D),
        Ka(function () {
          Ts(t, b, n, r)
        }),
        b
      )
    }
  }
  function vO(e, t) {
    e !== null &&
      typeof e != 'function' &&
      f(
        '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
        t,
        e
      )
  }
  function ed(e, t, n, r, a) {
    Lx(n), vO(a === void 0 ? null : a, 'render')
    var l = n._reactRootContainer,
      u
    if (!l) u = mO(n, t, e, a, r)
    else {
      if (((u = l), typeof a == 'function')) {
        var c = a
        a = function () {
          var v = Xf(u)
          c.call(v)
        }
      }
      Ts(t, u, e, a)
    }
    return Xf(u)
  }
  function pO(e) {
    {
      var t = dO.current
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender
        n ||
          f(
            '%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
            mt(t.type) || 'A component'
          ),
          (t.stateNode._warnedAboutRefsInRender = !0)
      }
    }
    return e == null ? null : e.nodeType === sr ? e : Z_(e, 'findDOMNode')
  }
  function hO(e, t, n) {
    if (
      (f(
        "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !ws(t))
    )
      throw new Error('Target container is not a DOM element.')
    {
      var r = Yu(t) && t._reactRootContainer === void 0
      r &&
        f(
          'You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?'
        )
    }
    return ed(null, e, t, !0, n)
  }
  function yO(e, t, n) {
    if (
      (f(
        "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !ws(t))
    )
      throw new Error('Target container is not a DOM element.')
    {
      var r = Yu(t) && t._reactRootContainer === void 0
      r &&
        f(
          'You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?'
        )
    }
    return ed(null, e, t, !1, n)
  }
  function gO(e, t, n, r) {
    if (
      (f(
        "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !ws(n))
    )
      throw new Error('Target container is not a DOM element.')
    if (e == null || !dE(e))
      throw new Error('parentComponent must be a valid React Component')
    return ed(e, t, n, !1, r)
  }
  function bO(e) {
    if (!ws(e))
      throw new Error(
        'unmountComponentAtNode(...): Target container is not a DOM element.'
      )
    {
      var t = Yu(e) && e._reactRootContainer === void 0
      t &&
        f(
          'You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?'
        )
    }
    if (e._reactRootContainer) {
      {
        var n = Mh(e),
          r = n && !bi(n)
        r &&
          f(
            "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."
          )
      }
      return (
        Ka(function () {
          ed(null, null, e, !1, function () {
            ;(e._reactRootContainer = null), _b(e)
          })
        }),
        !0
      )
    } else {
      {
        var a = Mh(e),
          l = !!(a && bi(a)),
          u =
            e.nodeType === sr &&
            ws(e.parentNode) &&
            !!e.parentNode._reactRootContainer
        l &&
          f(
            "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
            u
              ? 'You may have accidentally passed in a React root node instead of its container.'
              : 'Instead, have the parent component update its state and rerender in order to remove this component.'
          )
      }
      return !1
    }
  }
  hC(eO),
    gC(tO),
    bC(nO),
    NC(Vr),
    xC(mC),
    (typeof Map != 'function' ||
      Map.prototype == null ||
      typeof Map.prototype.forEach != 'function' ||
      typeof Set != 'function' ||
      Set.prototype == null ||
      typeof Set.prototype.clear != 'function' ||
      typeof Set.prototype.forEach != 'function') &&
      f(
        'React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills'
      ),
    tE(ST),
    aE(uh, f_, Ka)
  function NO(e, t) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null
    if (!Zf(t)) throw new Error('Target container is not a DOM element.')
    return J_(e, t, null, n)
  }
  function xO(e, t, n, r) {
    return gO(e, t, n, r)
  }
  var Lh = { usingClientEntryPoint: !1, Events: [bi, no, $c, Wy, Gy, uh] }
  function SO(e, t) {
    return (
      Lh.usingClientEntryPoint ||
        f(
          'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
        ),
      sO(e, t)
    )
  }
  function EO(e, t, n) {
    return (
      Lh.usingClientEntryPoint ||
        f(
          'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
        ),
      fO(e, t, n)
    )
  }
  function CO(e) {
    return (
      BN() &&
        f(
          'flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.'
        ),
      Ka(e)
    )
  }
  var RO = uO({
    findFiberByHostInstance: al,
    bundleType: 1,
    version: Rh,
    rendererPackageName: 'react-dom',
  })
  if (
    !RO &&
    Bt &&
    window.top === window.self &&
    ((navigator.userAgent.indexOf('Chrome') > -1 &&
      navigator.userAgent.indexOf('Edge') === -1) ||
      navigator.userAgent.indexOf('Firefox') > -1)
  ) {
    var Ax = window.location.protocol
    ;/^(https?|file):$/.test(Ax) &&
      console.info(
        '%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools' +
          (Ax === 'file:'
            ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`
            : ''),
        'font-weight:bold'
      )
  }
  ;(Or.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lh),
    (Or.createPortal = NO),
    (Or.createRoot = SO),
    (Or.findDOMNode = pO),
    (Or.flushSync = CO),
    (Or.hydrate = hO),
    (Or.hydrateRoot = EO),
    (Or.render = yO),
    (Or.unmountComponentAtNode = bO),
    (Or.unstable_batchedUpdates = uh),
    (Or.unstable_renderSubtreeIntoContainer = xO),
    (Or.version = Rh),
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
        'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error())
})()
;(function (i) {
  i.exports = Or
})(sy)
var kh = sy.exports
{
  var td = kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  ;(Qh.createRoot = function (i, o) {
    td.usingClientEntryPoint = !0
    try {
      return kh.createRoot(i, o)
    } finally {
      td.usingClientEntryPoint = !1
    }
  }),
    (Qh.hydrateRoot = function (i, o, s) {
      td.usingClientEntryPoint = !0
      try {
        return kh.hydrateRoot(i, o, s)
      } finally {
        td.usingClientEntryPoint = !1
      }
    })
}
/**
 * @remix-run/router v0.2.0-pre.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jt() {
  return (
    (jt = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var o = 1; o < arguments.length; o++) {
            var s = arguments[o]
            for (var m in s)
              Object.prototype.hasOwnProperty.call(s, m) && (i[m] = s[m])
          }
          return i
        }),
    jt.apply(this, arguments)
  )
}
function MO(i, o) {
  if (i == null) return {}
  var s = {},
    m = Object.keys(i),
    d,
    y
  for (y = 0; y < m.length; y++)
    (d = m[y]), !(o.indexOf(d) >= 0) && (s[d] = i[d])
  return s
}
var or
;(function (i) {
  ;(i.Pop = 'POP'), (i.Push = 'PUSH'), (i.Replace = 'REPLACE')
})(or || (or = {}))
const Ux = 'popstate'
function LO(i) {
  i === void 0 && (i = {})
  function o(d, y) {
    var f, N
    let {
      pathname: x = '/',
      search: T = '',
      hash: E = '',
    } = Ea(d.location.hash.substr(1))
    return Cl(
      '',
      { pathname: x, search: T, hash: E },
      ((f = y.state) == null ? void 0 : f.usr) || null,
      ((N = y.state) == null ? void 0 : N.key) || 'default'
    )
  }
  function s(d, y) {
    let f = d.document.querySelector('base'),
      N = ''
    if (f && f.getAttribute('href')) {
      let x = d.location.href,
        T = x.indexOf('#')
      N = T === -1 ? x : x.slice(0, T)
    }
    return N + '#' + (typeof y == 'string' ? y : Us(y))
  }
  function m(d, y) {
    kO(
      d.pathname.charAt(0) === '/',
      'relative pathnames are not supported in hash history.push(' +
        JSON.stringify(y) +
        ')'
    )
  }
  return UO(o, s, m, i)
}
function kO(i, o) {
  if (!i) {
    typeof console < 'u' && console.warn(o)
    try {
      throw new Error(o)
    } catch {}
  }
}
function AO() {
  return Math.random().toString(36).substr(2, 8)
}
function Fx(i) {
  return { usr: i.state, key: i.key }
}
function Cl(i, o, s, m) {
  return (
    s === void 0 && (s = null),
    jt(
      { pathname: typeof i == 'string' ? i : i.pathname, search: '', hash: '' },
      typeof o == 'string' ? Ea(o) : o,
      { state: s, key: (o == null ? void 0 : o.key) || m || AO() }
    )
  )
}
function Us(i) {
  let { pathname: o = '/', search: s = '', hash: m = '' } = i
  return (
    s && s !== '?' && (o += s.charAt(0) === '?' ? s : '?' + s),
    m && m !== '#' && (o += m.charAt(0) === '#' ? m : '#' + m),
    o
  )
}
function Ea(i) {
  let o = {}
  if (i) {
    let s = i.indexOf('#')
    s >= 0 && ((o.hash = i.substr(s)), (i = i.substr(0, s)))
    let m = i.indexOf('?')
    m >= 0 && ((o.search = i.substr(m)), (i = i.substr(0, m))),
      i && (o.pathname = i)
  }
  return o
}
function UO(i, o, s, m) {
  m === void 0 && (m = {})
  let { window: d = document.defaultView, v5Compat: y = !1 } = m,
    f = d.history,
    N = or.Pop,
    x = null
  function T() {
    ;(N = or.Pop), x && x({ action: N, location: B.location })
  }
  function E(j, z) {
    N = or.Push
    let O = Cl(B.location, j, z)
    s == null || s(O, j)
    let de = Fx(O),
      Y = B.createHref(O)
    try {
      f.pushState(de, '', Y)
    } catch {
      d.location.assign(Y)
    }
    y && x && x({ action: N, location: O })
  }
  function M(j, z) {
    N = or.Replace
    let O = Cl(B.location, j, z)
    s == null || s(O, j)
    let de = Fx(O),
      Y = B.createHref(O)
    f.replaceState(de, '', Y), y && x && x({ action: N, location: O })
  }
  let B = {
    get action() {
      return N
    },
    get location() {
      return i(d, f)
    },
    listen(j) {
      if (x) throw new Error('A history only accepts one active listener')
      return (
        d.addEventListener(Ux, T),
        (x = j),
        () => {
          d.removeEventListener(Ux, T), (x = null)
        }
      )
    },
    createHref(j) {
      return o(d, j)
    },
    push: E,
    replace: M,
    go(j) {
      return f.go(j)
    },
  }
  return B
}
var pr
;(function (i) {
  ;(i.data = 'data'),
    (i.deferred = 'deferred'),
    (i.redirect = 'redirect'),
    (i.error = 'error')
})(pr || (pr = {}))
function MS(i, o, s) {
  return (
    o === void 0 && (o = []),
    s === void 0 && (s = new Set()),
    i.map((m, d) => {
      let y = [...o, d],
        f = typeof m.id == 'string' ? m.id : y.join('-')
      return (
        lt(
          !s.has(f),
          'Found a route id collision on id "' +
            f +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        s.add(f),
        jt({}, m, {
          id: f,
          children: m.children ? MS(m.children, y, s) : void 0,
        })
      )
    })
  )
}
function Ls(i, o, s) {
  s === void 0 && (s = '/')
  let m = typeof o == 'string' ? Ea(o) : o,
    d = kS(m.pathname || '/', s)
  if (d == null) return null
  let y = LS(i)
  FO(y)
  let f = null
  for (let N = 0; f == null && N < y.length; ++N) f = YO(y[N], d)
  return f
}
function LS(i, o, s, m) {
  return (
    o === void 0 && (o = []),
    s === void 0 && (s = []),
    m === void 0 && (m = ''),
    i.forEach((d, y) => {
      let f = {
        relativePath: d.path || '',
        caseSensitive: d.caseSensitive === !0,
        childrenIndex: y,
        route: d,
      }
      f.relativePath.startsWith('/') &&
        (lt(
          f.relativePath.startsWith(m),
          'Absolute route path "' +
            f.relativePath +
            '" nested under path ' +
            ('"' + m + '" is not valid. An absolute child route path ') +
            'must start with the combined path of all its parent routes.'
        ),
        (f.relativePath = f.relativePath.slice(m.length)))
      let N = Fi([m, f.relativePath]),
        x = s.concat(f)
      d.children &&
        d.children.length > 0 &&
        (lt(
          d.index !== !0,
          'Index routes must not have child routes. Please remove ' +
            ('all child routes from route path "' + N + '".')
        ),
        LS(d.children, o, x, N)),
        !(d.path == null && !d.index) &&
          o.push({ path: N, score: VO(N, d.index), routesMeta: x })
    }),
    o
  )
}
function FO(i) {
  i.sort((o, s) =>
    o.score !== s.score
      ? s.score - o.score
      : IO(
          o.routesMeta.map((m) => m.childrenIndex),
          s.routesMeta.map((m) => m.childrenIndex)
        )
  )
}
const jO = /^:\w+$/,
  zO = 3,
  HO = 2,
  $O = 1,
  PO = 10,
  BO = -2,
  jx = (i) => i === '*'
function VO(i, o) {
  let s = i.split('/'),
    m = s.length
  return (
    s.some(jx) && (m += BO),
    o && (m += HO),
    s
      .filter((d) => !jx(d))
      .reduce((d, y) => d + (jO.test(y) ? zO : y === '' ? $O : PO), m)
  )
}
function IO(i, o) {
  return i.length === o.length && i.slice(0, -1).every((m, d) => m === o[d])
    ? i[i.length - 1] - o[o.length - 1]
    : 0
}
function YO(i, o) {
  let { routesMeta: s } = i,
    m = {},
    d = '/',
    y = []
  for (let f = 0; f < s.length; ++f) {
    let N = s[f],
      x = f === s.length - 1,
      T = d === '/' ? o : o.slice(d.length) || '/',
      E = cy(
        { path: N.relativePath, caseSensitive: N.caseSensitive, end: x },
        T
      )
    if (!E) return null
    Object.assign(m, E.params)
    let M = N.route
    y.push({
      params: m,
      pathname: Fi([d, E.pathname]),
      pathnameBase: KO(Fi([d, E.pathnameBase])),
      route: M,
    }),
      E.pathnameBase !== '/' && (d = Fi([d, E.pathnameBase]))
  }
  return y
}
function cy(i, o) {
  typeof i == 'string' && (i = { path: i, caseSensitive: !1, end: !0 })
  let [s, m] = WO(i.path, i.caseSensitive, i.end),
    d = o.match(s)
  if (!d) return null
  let y = d[0],
    f = y.replace(/(.)\/+$/, '$1'),
    N = d.slice(1)
  return {
    params: m.reduce((T, E, M) => {
      if (E === '*') {
        let B = N[M] || ''
        f = y.slice(0, y.length - B.length).replace(/(.)\/+$/, '$1')
      }
      return (T[E] = GO(N[M] || '', E)), T
    }, {}),
    pathname: y,
    pathnameBase: f,
    pattern: i,
  }
}
function WO(i, o, s) {
  o === void 0 && (o = !1),
    s === void 0 && (s = !0),
    Rl(
      i === '*' || !i.endsWith('*') || i.endsWith('/*'),
      'Route path "' +
        i +
        '" will be treated as if it were ' +
        ('"' + i.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + i.replace(/\*$/, '/*') + '".')
    )
  let m = [],
    d =
      '^' +
      i
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/:(\w+)/g, (f, N) => (m.push(N), '([^\\/]+)'))
  return (
    i.endsWith('*')
      ? (m.push('*'),
        (d += i === '*' || i === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : (d += s ? '\\/*$' : '(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)'),
    [new RegExp(d, o ? void 0 : 'i'), m]
  )
}
function GO(i, o) {
  try {
    return decodeURIComponent(i)
  } catch (s) {
    return (
      Rl(
        !1,
        'The value for the URL param "' +
          o +
          '" will not be decoded because' +
          (' the string "' +
            i +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + s + ').')
      ),
      i
    )
  }
}
function kS(i, o) {
  if (o === '/') return i
  if (!i.toLowerCase().startsWith(o.toLowerCase())) return null
  let s = o.endsWith('/') ? o.length - 1 : o.length,
    m = i.charAt(s)
  return m && m !== '/' ? null : i.slice(s) || '/'
}
function lt(i, o) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(o)
}
function Rl(i, o) {
  if (!i) {
    typeof console < 'u' && console.warn(o)
    try {
      throw new Error(o)
    } catch {}
  }
}
function qO(i, o) {
  o === void 0 && (o = '/')
  let {
    pathname: s,
    search: m = '',
    hash: d = '',
  } = typeof i == 'string' ? Ea(i) : i
  return {
    pathname: s ? (s.startsWith('/') ? s : QO(s, o)) : o,
    search: XO(m),
    hash: JO(d),
  }
}
function QO(i, o) {
  let s = o.replace(/\/+$/, '').split('/')
  return (
    i.split('/').forEach((d) => {
      d === '..' ? s.length > 1 && s.pop() : d !== '.' && s.push(d)
    }),
    s.length > 1 ? s.join('/') : '/'
  )
}
function AS(i, o, s) {
  let m = typeof i == 'string' ? Ea(i) : jt({}, i),
    d = i === '' || m.pathname === '',
    y = d ? '/' : m.pathname,
    f
  if (y == null) f = s
  else {
    let E = o.length - 1
    if (y.startsWith('..')) {
      let M = y.split('/')
      for (; M[0] === '..'; ) M.shift(), (E -= 1)
      m.pathname = M.join('/')
    }
    f = E >= 0 ? o[E] : '/'
  }
  let N = qO(m, f),
    x = y && y !== '/' && y.endsWith('/'),
    T = (d || y === '.') && s.endsWith('/')
  return !N.pathname.endsWith('/') && (x || T) && (N.pathname += '/'), N
}
const Fi = (i) => i.join('/').replace(/\/\/+/g, '/'),
  KO = (i) => i.replace(/\/+$/, '').replace(/^\/*/, '/'),
  XO = (i) => (!i || i === '?' ? '' : i.startsWith('?') ? i : '?' + i),
  JO = (i) => (!i || i === '#' ? '' : i.startsWith('#') ? i : '#' + i)
class ZO {
  constructor(o) {
    ;(this.pendingKeys = new Set()),
      (this.cancelled = !1),
      (this.subscriber = void 0),
      o instanceof Promise
        ? ((this.data = o), this.trackPromise('__single__', o))
        : Array.isArray(o)
        ? ((this.data = [...o]), o.forEach((s, m) => this.trackPromise(m, s)))
        : typeof o == 'object'
        ? ((this.data = jt({}, o)),
          Object.entries(o).forEach((s) => {
            let [m, d] = s
            return this.trackPromise(m, d)
          }))
        : lt(!1, 'Incorrect data type passed to deferred()')
  }
  trackPromise(o, s) {
    s instanceof Promise &&
      (this.pendingKeys.add(o),
      s.then(
        (m) => this.onSettle(o, null, m),
        (m) => this.onSettle(o, m)
      ))
  }
  onSettle(o, s, m) {
    var d
    if (this.cancelled) return
    this.pendingKeys.delete(o)
    let y = s ? new eM(s) : m
    if (this.data instanceof Promise) this.data = y
    else if (Array.isArray(this.data)) {
      lt(typeof o == 'number', 'expected key to be a number')
      let f = [...this.data]
      ;(f[o] = y), (this.data = f)
    } else
      typeof this.data == 'object'
        ? (this.data = jt({}, this.data, { [o]: y }))
        : lt(!1, 'Incorrect data type on DeferredData')
    ;(d = this.subscriber) == null || d.call(this, !1)
  }
  subscribe(o) {
    this.subscriber = o
  }
  cancel() {
    var o
    ;(this.cancelled = !0),
      this.pendingKeys.forEach((s, m) => this.pendingKeys.delete(m)),
      (o = this.subscriber) == null || o.call(this, !0)
  }
  get done() {
    return this.pendingKeys.size === 0
  }
}
class eM extends Error {}
class Uo {
  constructor(o, s, m) {
    ;(this.status = o), (this.statusText = s || ''), (this.data = m)
  }
}
function US(i) {
  return i instanceof Uo
}
const Ah = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  tM = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  }
function nM(i) {
  var o, s, m
  lt(
    i.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  )
  let d = MS(i.routes),
    y = null,
    f = null,
    N = null,
    x = null,
    T = null,
    E = !1,
    M = Ls(d, i.history.location, i.basename),
    B = null
  if (M == null) {
    let { matches: V, route: Q, error: K } = Bx(d)
    ;(M = V), (B = { [Q.id]: K })
  }
  let j = !M.some((V) => V.route.loader) || i.hydrationData != null,
    z,
    O = {
      historyAction: i.history.action,
      location: i.history.location,
      matches: M,
      initialized: j,
      navigation: Ah,
      restoreScrollPosition: null,
      resetScrollPosition: !0,
      revalidation: 'idle',
      loaderData: ((o = i.hydrationData) == null ? void 0 : o.loaderData) || {},
      actionData:
        ((s = i.hydrationData) == null ? void 0 : s.actionData) || null,
      errors: ((m = i.hydrationData) == null ? void 0 : m.errors) || B,
      fetchers: new Map(),
    },
    de = null,
    Y = !0,
    X,
    ve = !1,
    ye = !1,
    Z = [],
    Ee = [],
    ne = new Map(),
    st = 0,
    ee = -1,
    Ce = new Map(),
    Te = new Set(),
    at = new Map(),
    ge = new Map()
  function He() {
    return (
      (y = i.history.listen((V) => {
        let { action: Q, location: K } = V
        return nn(Q, K)
      })),
      O.initialized || nn(or.Pop, O.location),
      z
    )
  }
  function ht() {
    var V
    y && y(),
      (f = null),
      (V = X) == null || V.abort(),
      O.fetchers.forEach((Q, K) => Mn(K))
  }
  function $e(V) {
    if (f) throw new Error('A router only accepts one active subscriber')
    return (
      (f = V),
      () => {
        f = null
      }
    )
  }
  function ue(V) {
    ;(O = jt({}, O, V)), f == null || f(O)
  }
  function Fe(V, Q, K) {
    let be =
        O.actionData != null &&
        O.navigation.formMethod != null &&
        O.navigation.state === 'loading',
      Ve = K.loaderData
        ? { loaderData: Fh(O.loaderData, K.loaderData, K.matches || []) }
        : {}
    ue(
      jt({}, be ? {} : { actionData: null }, K, Ve, {
        historyAction: V,
        location: Q,
        initialized: !0,
        navigation: Ah,
        revalidation: 'idle',
        restoreScrollPosition: O.navigation.formData
          ? !1
          : Zn(Q, K.matches || O.matches),
        resetScrollPosition: Y,
      })
    ),
      ve ||
        V === or.Pop ||
        (V === or.Push
          ? i.history.push(Q, Q.state)
          : V === or.Replace && i.history.replace(Q, Q.state)),
      (de = null),
      (Y = !0),
      (ve = !1),
      (ye = !1),
      (Z = []),
      (Ee = [])
  }
  async function tn(V, Q) {
    if (typeof V == 'number') {
      i.history.go(V)
      return
    }
    let { path: K, submission: be, error: Ve } = zx(V, Q),
      Ye = Cl(O.location, K, Q == null ? void 0 : Q.state),
      je =
        (Q == null ? void 0 : Q.replace) === !0 || be != null
          ? or.Replace
          : or.Push,
      Re = Q && 'resetScroll' in Q ? Q.resetScroll : void 0
    return await nn(je, Ye, {
      submission: be,
      pendingError: Ve,
      resetScroll: Re,
      replace: Q == null ? void 0 : Q.replace,
    })
  }
  function Pn() {
    if (
      ((ye = !0),
      Z.push(...Ht()),
      ue({ revalidation: 'loading' }),
      O.navigation.state !== 'submitting')
    ) {
      if (O.navigation.state === 'idle') {
        nn(O.historyAction, O.location, { startUninterruptedRevalidation: !0 })
        return
      }
      nn(de || O.historyAction, O.navigation.location, {
        overrideNavigation: O.navigation,
      })
    }
  }
  async function nn(V, Q, K) {
    var be
    ;(be = X) == null || be.abort(),
      (X = null),
      (de = V),
      (ve = (K == null ? void 0 : K.startUninterruptedRevalidation) === !0),
      Jn(O.location, O.matches),
      (Y = (K == null ? void 0 : K.resetScroll) !== !1)
    let Ve = K == null ? void 0 : K.overrideNavigation,
      Ye = Ls(d, Q, i.basename)
    if (!Ye) {
      let { matches: fe, route: Le, error: Qe } = Bx(d)
      Ht(), Fe(V, Q, { matches: fe, loaderData: {}, errors: { [Le.id]: Qe } })
      return
    }
    if (lM(O.location, Q)) {
      Fe(V, Q, { matches: Ye })
      return
    }
    X = new AbortController()
    let je = Os(Q, X.signal, K == null ? void 0 : K.submission),
      Re,
      Ge
    if (K != null && K.pendingError) Ge = { [_o(Ye).route.id]: K.pendingError }
    else if (K != null && K.submission) {
      let fe = await Pt(je, Q, K.submission, Ye, { replace: K.replace })
      if (fe.shortCircuited) return
      ;(Re = fe.pendingActionData),
        (Ge = fe.pendingActionError),
        (Ve = jt({ state: 'loading', location: Q }, K.submission))
    }
    let {
      shortCircuited: ot,
      loaderData: wt,
      errors: te,
    } = await bn(je, V, Q, Ye, Ve, K == null ? void 0 : K.submission, Re, Ge)
    ot || ((X = null), Fe(V, Q, { matches: Ye, loaderData: wt, errors: te }))
  }
  async function Pt(V, Q, K, be, Ve) {
    ;(ye = !0),
      Z.push(...Ht()),
      at.forEach((Ge, ot) => {
        ne.has(ot) && (Ee.push(ot), sn(ot))
      })
    let Ye = jt({ state: 'submitting', location: Q }, K)
    ue({ navigation: Ye })
    let je,
      Re = Wx(be, Q)
    if (!Re.route.action) je = Vx(Q)
    else if (((je = await _s('action', V, Re)), V.signal.aborted))
      return { shortCircuited: !0 }
    if (Mo(je)) {
      let Ge = jt(
          { state: 'loading', location: Cl(O.location, je.location) },
          K
        ),
        ot = (Ve == null ? void 0 : Ve.replace) !== !0
      return await xn(je, Ge, ot), { shortCircuited: !0 }
    }
    if (ks(je))
      return {
        pendingActionError: { [_o(be, Re.route.id).route.id]: je.error },
      }
    if (El(je)) throw new Error('deferred() is not supported in actions')
    return { pendingActionData: { [Re.route.id]: je.data } }
  }
  async function bn(V, Q, K, be, Ve, Ye, je, Re) {
    let Ge = Ve
    Ge ||
      (Ge = {
        state: 'loading',
        location: K,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      })
    let [ot, wt] = Hx(O, be, Ye, K, ye, Z, Ee, je, Re, at)
    if (
      (Ht(
        (yt) =>
          !(be != null && be.some((Pe) => Pe.route.id === yt)) ||
          (ot == null ? void 0 : ot.some((Pe) => Pe.route.id === yt))
      ),
      ot.length === 0 && wt.length === 0)
    )
      return (
        Fe(Q, K, {
          matches: be,
          loaderData: Fh(O.loaderData, {}, be),
          errors: Re || null,
          actionData: je || null,
        }),
        { shortCircuited: !0 }
      )
    ve ||
      (wt.forEach((yt) => {
        var Pe
        let [Yt] = yt,
          bt = {
            state: 'loading',
            data: (Pe = O.fetchers.get(Yt)) == null ? void 0 : Pe.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          }
        O.fetchers.set(Yt, bt)
      }),
      ue(
        jt(
          { navigation: Ge, actionData: je || O.actionData || null },
          wt.length > 0 ? { fetchers: new Map(O.fetchers) } : {}
        )
      )),
      (ee = ++st),
      wt.forEach((yt) => {
        let [Pe] = yt
        return ne.set(Pe, X)
      })
    let {
      results: te,
      loaderResults: fe,
      fetcherResults: Le,
    } = await rn(ot, wt, V)
    if (V.signal.aborted) return { shortCircuited: !0 }
    wt.forEach((yt) => {
      let [Pe] = yt
      return ne.delete(Pe)
    })
    let Qe = Ix(te)
    if (Qe) {
      let yt = Uh(O, Qe)
      return await xn(Qe, yt), { shortCircuited: !0 }
    }
    let { loaderData: ut, errors: Mt } = Px(O, be, ot, fe, Re, wt, Le, ge)
    ge.forEach((yt, Pe) => {
      yt.subscribe((Yt) => {
        if (Yt) {
          ge.delete(Pe)
          return
        }
        ue({ loaderData: jt({}, O.loaderData, { [Pe]: yt.data }) }),
          yt.done && ge.delete(Pe)
      })
    }),
      En()
    let At = Kt(ee)
    return jt(
      { loaderData: ut, errors: Mt },
      At || wt.length > 0 ? { fetchers: new Map(O.fetchers) } : {}
    )
  }
  function Nn(V) {
    return O.fetchers.get(V) || tM
  }
  function Mr(V, Q, K, be) {
    if (typeof AbortController > 'u')
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      )
    ne.has(V) && sn(V)
    let Ve = Ls(d, K, i.basename)
    if (!Ve) {
      Sn(V, Q, new Uo(404, 'Not Found', null))
      return
    }
    let { path: Ye, submission: je } = zx(K, be),
      Re = Wx(Ve, Ye)
    if (je) {
      yr(V, Q, Ye, Re, je)
      return
    }
    at.set(V, [Ye, Re]), gr(V, Q, Ye, Re)
  }
  async function yr(V, Q, K, be, Ve) {
    var Ye
    if (
      ((ye = !0),
      at.delete(V),
      Z.push(...Ht()),
      at.forEach((cn, Cn) => {
        ne.has(Cn) && (Ee.push(Cn), sn(Cn))
      }),
      !be.route.action)
    ) {
      let { error: cn } = Vx(K)
      Sn(V, Q, cn)
      return
    }
    let je = jt({ state: 'submitting' }, Ve, {
      data: ((Ye = O.fetchers.get(V)) == null ? void 0 : Ye.data) || void 0,
    })
    O.fetchers.set(V, je), ue({ fetchers: new Map(O.fetchers) })
    let Re = new AbortController(),
      Ge = Os(K, Re.signal, Ve)
    ne.set(V, Re)
    let ot = await _s('action', Ge, be)
    if (Ge.signal.aborted) {
      ne.get(V) === Re && ne.delete(V)
      return
    }
    if (Mo(ot)) {
      ne.delete(V), Te.add(V)
      let cn = jt({ state: 'loading' }, Ve, { data: void 0 })
      O.fetchers.set(V, cn), ue({ fetchers: new Map(O.fetchers) })
      let Cn = jt(
        { state: 'loading', location: Cl(O.location, ot.location) },
        Ve
      )
      await xn(ot, Cn)
      return
    }
    if (ks(ot)) {
      Sn(V, Q, ot.error)
      return
    }
    El(ot) && lt(!1, 'deferred() is not supported in actions')
    let wt = O.navigation.location || O.location,
      te = Os(wt, Re.signal),
      fe =
        O.navigation.state !== 'idle'
          ? Ls(d, O.navigation.location, i.basename)
          : O.matches
    lt(fe, "Didn't find any matches after fetcher action")
    let Le = ++st
    Ce.set(V, Le)
    let Qe = jt({ state: 'loading', data: ot.data }, Ve)
    O.fetchers.set(V, Qe)
    let [ut, Mt] = Hx(
      O,
      fe,
      Ve,
      wt,
      ye,
      Z,
      Ee,
      { [be.route.id]: ot.data },
      void 0,
      at
    )
    Mt.filter((cn) => {
      let [Cn] = cn
      return Cn !== V
    }).forEach((cn) => {
      var Cn
      let [ra] = cn,
        Ta = {
          state: 'loading',
          data: (Cn = O.fetchers.get(V)) == null ? void 0 : Cn.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        }
      O.fetchers.set(ra, Ta), ne.set(ra, Re)
    }),
      ue({ fetchers: new Map(O.fetchers) })
    let {
      results: At,
      loaderResults: yt,
      fetcherResults: Pe,
    } = await rn(ut, Mt, te)
    if (Re.signal.aborted) return
    Ce.delete(V),
      ne.delete(V),
      Mt.forEach((cn) => {
        let [Cn] = cn
        return ne.delete(Cn)
      })
    let Yt = Ix(At)
    if (Yt) {
      let cn = Uh(O, Yt)
      await xn(Yt, cn)
      return
    }
    let { loaderData: bt, errors: Tt } = Px(
        O,
        O.matches,
        ut,
        yt,
        void 0,
        Mt,
        Pe,
        ge
      ),
      Lr = {
        state: 'idle',
        data: ot.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      }
    O.fetchers.set(V, Lr)
    let br = Kt(Le)
    if (O.navigation.state === 'loading' && Le > ee) {
      var na
      lt(de, 'Expected pending action'),
        (na = X) == null || na.abort(),
        Fe(de, O.navigation.location, {
          matches: fe,
          loaderData: bt,
          errors: Tt,
          fetchers: new Map(O.fetchers),
        })
    } else
      ue(
        jt(
          { errors: Tt, loaderData: Fh(O.loaderData, bt, fe) },
          br ? { fetchers: new Map(O.fetchers) } : {}
        )
      ),
        (ye = !1)
  }
  async function gr(V, Q, K, be) {
    var Ve
    let Ye = {
      state: 'loading',
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      data: ((Ve = O.fetchers.get(V)) == null ? void 0 : Ve.data) || void 0,
    }
    O.fetchers.set(V, Ye), ue({ fetchers: new Map(O.fetchers) })
    let je = new AbortController(),
      Re = Os(K, je.signal)
    ne.set(V, je)
    let Ge = await _s('loader', Re, be)
    if (
      (El(Ge) && (Ge = (await jS(Ge, Re.signal)) || Ge),
      ne.get(V) === je && ne.delete(V),
      Re.signal.aborted)
    )
      return
    if (Mo(Ge)) {
      let wt = Uh(O, Ge)
      await xn(Ge, wt)
      return
    }
    if (ks(Ge)) {
      let wt = _o(O.matches, Q)
      O.fetchers.delete(V),
        ue({
          fetchers: new Map(O.fetchers),
          errors: { [wt.route.id]: Ge.error },
        })
      return
    }
    lt(!El(Ge), 'Unhandled fetcher deferred data')
    let ot = {
      state: 'idle',
      data: Ge.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
    }
    O.fetchers.set(V, ot), ue({ fetchers: new Map(O.fetchers) })
  }
  async function xn(V, Q, K) {
    K === void 0 && (K = !1),
      V.revalidate && (ye = !0),
      lt(Q.location, 'Expected a location on the redirect navigation'),
      (X = null),
      await nn(K ? or.Push : or.Replace, Q.location, { overrideNavigation: Q })
  }
  async function rn(V, Q, K) {
    let be = await Promise.all([
        ...V.map((je) => _s('loader', K, je)),
        ...Q.map((je) => {
          let [, Re, Ge] = je
          return _s('loader', Os(Re, K.signal), Ge)
        }),
      ]),
      Ve = be.slice(0, V.length),
      Ye = be.slice(V.length)
    return (
      await Yx(V, Ve, K.signal, O.loaderData, ge),
      await Yx(
        Q.map((je) => {
          let [, , Re] = je
          return Re
        }),
        Ye,
        K.signal
      ),
      { results: be, loaderResults: Ve, fetcherResults: Ye }
    )
  }
  function Sn(V, Q, K) {
    let be = _o(O.matches, Q)
    Mn(V), ue({ errors: { [be.route.id]: K }, fetchers: new Map(O.fetchers) })
  }
  function Mn(V) {
    ne.has(V) && sn(V),
      at.delete(V),
      Ce.delete(V),
      Te.delete(V),
      O.fetchers.delete(V)
  }
  function sn(V) {
    let Q = ne.get(V)
    lt(Q, 'Expected fetch controller: ' + V), Q.abort(), ne.delete(V)
  }
  function Bt(V) {
    for (let Q of V) {
      let K = Nn(Q),
        be = {
          state: 'idle',
          data: K.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        }
      O.fetchers.set(Q, be)
    }
  }
  function En() {
    let V = []
    for (let Q of Te) {
      let K = O.fetchers.get(Q)
      lt(K, 'Expected fetcher: ' + Q),
        K.state === 'loading' && (Te.delete(Q), V.push(Q))
    }
    Bt(V)
  }
  function Kt(V) {
    let Q = []
    for (let [K, be] of Ce)
      if (be < V) {
        let Ve = O.fetchers.get(K)
        lt(Ve, 'Expected fetcher: ' + K),
          Ve.state === 'loading' && (sn(K), Ce.delete(K), Q.push(K))
      }
    return Bt(Q), Q.length > 0
  }
  function Ht(V) {
    let Q = []
    return (
      ge.forEach((K, be) => {
        ;(!V || V(be)) && (K.cancel(), Q.push(be))
      }),
      Q
    )
  }
  function Xt(V, Q, K) {
    if (
      ((N = V), (T = Q), (x = K || ((be) => be.key)), !E && O.navigation === Ah)
    ) {
      E = !0
      let be = Zn(O.location, O.matches)
      be != null && ue({ restoreScrollPosition: be })
    }
    return () => {
      ;(N = null), (T = null), (x = null)
    }
  }
  function Jn(V, Q) {
    if (N && x && T) {
      let K = x(V, Q) || V.key
      N[K] = T()
    }
  }
  function Zn(V, Q) {
    if (N && x && T) {
      let K = x(V, Q) || V.key,
        be = N[K]
      if (typeof be == 'number') return be
    }
    return null
  }
  return (
    (z = {
      get state() {
        return O
      },
      get routes() {
        return d
      },
      initialize: He,
      subscribe: $e,
      enableScrollRestoration: Xt,
      navigate: tn,
      fetch: Mr,
      revalidate: Pn,
      createHref: dd,
      getFetcher: Nn,
      deleteFetcher: Mn,
      dispose: ht,
      _internalFetchControllers: ne,
      _internalActiveDeferreds: ge,
    }),
    z
  )
}
function zx(i, o) {
  let s = typeof i == 'string' ? i : Us(i)
  if (!o || (!('formMethod' in o) && !('formData' in o))) return { path: s }
  if (o.formMethod != null && o.formMethod !== 'get')
    return {
      path: s,
      submission: {
        formMethod: o.formMethod,
        formAction: dd(Ea(s)),
        formEncType:
          (o == null ? void 0 : o.formEncType) ||
          'application/x-www-form-urlencoded',
        formData: o.formData,
      },
    }
  if (!o.formData) return { path: s }
  let m = Ea(s),
    d
  try {
    d = FS(o.formData, m.search)
  } catch {
    return {
      path: s,
      error: new Uo(
        400,
        'Bad Request',
        'Cannot submit binary form data using GET'
      ),
    }
  }
  return { path: Us(jt({}, m, { search: '?' + d })) }
}
function Uh(i, o) {
  let {
    formMethod: s,
    formAction: m,
    formEncType: d,
    formData: y,
  } = i.navigation
  return {
    state: 'loading',
    location: Cl(i.location, o.location),
    formMethod: s || void 0,
    formAction: m || void 0,
    formEncType: d || void 0,
    formData: y || void 0,
  }
}
function rM(i, o) {
  let s = i
  if (o) {
    let m = i.findIndex((d) => d.route.id === o)
    m >= 0 && (s = i.slice(0, m))
  }
  return s
}
function Hx(i, o, s, m, d, y, f, N, x, T) {
  let E = x ? Object.values(x)[0] : N ? Object.values(N)[0] : null,
    M = x ? Object.keys(x)[0] : void 0,
    j = rM(o, M).filter(
      (O, de) =>
        O.route.loader != null &&
        (aM(i.loaderData, i.matches[de], O) ||
          y.some((Y) => Y === O.route.id) ||
          $x(i.location, i.matches[de], s, m, O, d, E))
    ),
    z = []
  return (
    T == null ||
      T.forEach((O, de) => {
        let [Y, X] = O
        f.includes(de)
          ? z.push([de, Y, X])
          : d && $x(Y, X, s, Y, X, d, E) && z.push([de, Y, X])
      }),
    [j, z]
  )
}
function aM(i, o, s) {
  let m = !o || s.route.id !== o.route.id,
    d = i[s.route.id] === void 0
  return m || d
}
function $x(i, o, s, m, d, y, f) {
  var N
  let x = Kh(i),
    T = o.params,
    E = Kh(m),
    M = d.params,
    B =
      o.pathname !== d.pathname ||
      (((N = o.route.path) == null ? void 0 : N.endsWith('*')) &&
        o.params['*'] !== d.params['*']) ||
      x.toString() === E.toString() ||
      x.search !== E.search ||
      y
  if (d.route.shouldRevalidate) {
    let j = d.route.shouldRevalidate(
      jt({ currentUrl: x, currentParams: T, nextUrl: E, nextParams: M }, s, {
        actionResult: f,
        defaultShouldRevalidate: B,
      })
    )
    if (typeof j == 'boolean') return j
  }
  return B
}
async function _s(i, o, s, m, d) {
  m === void 0 && (m = !1), d === void 0 && (d = !1)
  let y,
    f,
    N,
    x = new Promise((M, B) => (N = B)),
    T = () => N()
  o.signal.addEventListener('abort', T)
  try {
    let M = s.route[i]
    lt(
      M,
      'Could not find the ' + i + ' to run on the "' + s.route.id + '" route'
    ),
      (f = await Promise.race([M({ request: o, params: s.params }), x]))
  } catch (M) {
    ;(y = pr.error), (f = M)
  } finally {
    o.signal.removeEventListener('abort', T)
  }
  if (f instanceof Response) {
    var E
    let M = f.status,
      B = f.headers.get('Location')
    if (d) throw f
    if (M >= 300 && M <= 399 && B != null) {
      if (m) throw f
      return {
        type: pr.redirect,
        status: M,
        location: B,
        revalidate: f.headers.get('X-Remix-Revalidate') !== null,
      }
    }
    let j
    return (
      (E = f.headers.get('Content-Type')) != null &&
      E.startsWith('application/json')
        ? (j = await f.json())
        : (j = await f.text()),
      y === pr.error
        ? { type: y, error: new Uo(M, f.statusText, j) }
        : { type: pr.data, data: j, statusCode: f.status, headers: f.headers }
    )
  }
  return y === pr.error
    ? { type: y, error: f }
    : f instanceof ZO
    ? { type: pr.deferred, deferredData: f }
    : { type: pr.data, data: f }
}
function Os(i, o, s) {
  let m = Kh(i).toString(),
    d = { signal: o }
  if (s) {
    let { formMethod: y, formEncType: f, formData: N } = s
    ;(d.method = y.toUpperCase()),
      (d.body = f === 'application/x-www-form-urlencoded' ? FS(N) : N)
  }
  return new Request(m, d)
}
function FS(i, o) {
  let s = new URLSearchParams(o)
  for (let [m, d] of i.entries())
    lt(
      typeof d == 'string',
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
    ),
      s.append(m, d)
  return s
}
function iM(i, o, s, m, d) {
  let y = {},
    f = null,
    N,
    x = !1,
    T = {}
  return (
    s.forEach((E, M) => {
      let B = o[M].route.id
      if (
        (lt(!Mo(E), 'Cannot handle redirect results in processLoaderData'),
        ks(E))
      ) {
        let j = _o(i, B),
          z = E.error
        m && ((z = Object.values(m)[0]), (m = void 0)),
          (f = Object.assign(f || {}, { [j.route.id]: z })),
          x || ((x = !0), (N = US(E.error) ? E.error.status : 500))
      } else
        El(E)
          ? (d == null || d.set(B, E.deferredData),
            (y[B] = E.deferredData.data))
          : ((y[B] = E.data),
            E.statusCode !== 200 && !x && (N = E.statusCode),
            E.headers && (T[B] = E.headers))
    }),
    m && (f = m),
    { loaderData: y, errors: f, statusCode: N || 200, loaderHeaders: T }
  )
}
function Px(i, o, s, m, d, y, f, N) {
  let { loaderData: x, errors: T } = iM(o, s, m, d, N)
  for (let M = 0; M < y.length; M++) {
    let [B, , j] = y[M]
    lt(
      f !== void 0 && f[M] !== void 0,
      'Did not find corresponding fetcher result'
    )
    let z = f[M]
    if (ks(z)) {
      var E
      let O = _o(i.matches, j.route.id)
      ;((E = T) != null && E[O.route.id]) ||
        (T = jt({}, T, { [O.route.id]: z.error })),
        i.fetchers.delete(B)
    } else {
      if (Mo(z)) throw new Error('Unhandled fetcher revalidation redirect')
      if (El(z)) throw new Error('Unhandled fetcher deferred data')
      {
        let O = {
          state: 'idle',
          data: z.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        }
        i.fetchers.set(B, O)
      }
    }
  }
  return { loaderData: x, errors: T }
}
function Fh(i, o, s) {
  let m = jt({}, o)
  return (
    s.forEach((d) => {
      let y = d.route.id
      o[y] === void 0 && i[y] !== void 0 && (m[y] = i[y])
    }),
    m
  )
}
function _o(i, o) {
  return (
    (o ? i.slice(0, i.findIndex((m) => m.route.id === o) + 1) : [...i])
      .reverse()
      .find((m) => m.route.errorElement) || i[0]
  )
}
function Bx(i) {
  let o = i.find((s) => s.index || s.path === '' || s.path === '/') || {
    id: '__shim-404-route__',
  }
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: o }],
    route: o,
    error: new Uo(404, 'Not Found', null),
  }
}
function Vx(i) {
  let o = typeof i == 'string' ? i : dd(i)
  return (
    console.warn(
      "You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for " +
        ('[' + o + ']')
    ),
    {
      type: pr.error,
      error: new Uo(
        405,
        'Method Not Allowed',
        'No action found for [' + o + ']'
      ),
    }
  )
}
function Ix(i) {
  for (let o = i.length - 1; o >= 0; o--) {
    let s = i[o]
    if (Mo(s)) return s
  }
}
function dd(i) {
  return (i.pathname || '') + (i.search || '')
}
function lM(i, o) {
  return i.pathname === o.pathname && i.search === o.search && i.hash !== o.hash
}
function El(i) {
  return i.type === pr.deferred
}
function ks(i) {
  return i.type === pr.error
}
function Mo(i) {
  return (i == null ? void 0 : i.type) === pr.redirect
}
async function Yx(i, o, s, m, d) {
  for (let y = 0; y < o.length; y++) {
    let f = o[y],
      N = i[y].route.id
    El(f) &&
      (!m || m[N] !== void 0) &&
      (d == null || d.set(N, f.deferredData),
      await jS(f, s).then((x) => {
        d == null || d.delete(N), x && (o[y] = x)
      }))
  }
}
async function jS(i, o) {
  if (!i.deferredData.done) {
    let s = () => i.deferredData.cancel()
    if (
      (o.addEventListener('abort', s),
      await new Promise((d) => {
        i.deferredData.subscribe((y) => {
          o.removeEventListener('abort', s), (y || i.deferredData.done) && d(y)
        })
      }))
    )
      return
  }
  return { type: pr.data, data: i.deferredData.data }
}
function oM(i) {
  return new URLSearchParams(i).getAll('index').some((o) => o === '')
}
function Wx(i, o) {
  let s = typeof o == 'string' ? Ea(o).search : o.search
  return i[i.length - 1].route.index && !oM(s || '')
    ? i.slice(-2)[0]
    : i.slice(-1)[0]
}
function Kh(i) {
  let o =
      typeof window < 'u' && typeof window.location < 'u'
        ? window.location.origin
        : 'unknown://unknown',
    s = typeof i == 'string' ? i : dd(i)
  return new URL(s, o)
}
const uM = ['window']
function sM(i) {
  let { window: o } = i,
    s = MO(i, uM),
    m = LO({ window: o })
  return nM(jt({ history: m }, s))
}
var fy = { exports: {} },
  Xh = {}
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function () {
  var i = R.exports,
    o = Symbol.for('react.element'),
    s = Symbol.for('react.portal'),
    m = Symbol.for('react.fragment'),
    d = Symbol.for('react.strict_mode'),
    y = Symbol.for('react.profiler'),
    f = Symbol.for('react.provider'),
    N = Symbol.for('react.context'),
    x = Symbol.for('react.forward_ref'),
    T = Symbol.for('react.suspense'),
    E = Symbol.for('react.suspense_list'),
    M = Symbol.for('react.memo'),
    B = Symbol.for('react.lazy'),
    j = Symbol.for('react.offscreen'),
    z = Symbol.iterator,
    O = '@@iterator'
  function de(C) {
    if (C === null || typeof C != 'object') return null
    var G = (z && C[z]) || C[O]
    return typeof G == 'function' ? G : null
  }
  var Y = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  function X(C) {
    {
      for (
        var G = arguments.length, ae = new Array(G > 1 ? G - 1 : 0), we = 1;
        we < G;
        we++
      )
        ae[we - 1] = arguments[we]
      ve('error', C, ae)
    }
  }
  function ve(C, G, ae) {
    {
      var we = Y.ReactDebugCurrentFrame,
        Ke = we.getStackAddendum()
      Ke !== '' && ((G += '%s'), (ae = ae.concat([Ke])))
      var dt = ae.map(function (xe) {
        return String(xe)
      })
      dt.unshift('Warning: ' + G),
        Function.prototype.apply.call(console[C], console, dt)
    }
  }
  var ye = !1,
    Z = !1,
    Ee = !1,
    ne = !1,
    st = !1,
    ee
  ee = Symbol.for('react.module.reference')
  function Ce(C) {
    return !!(
      typeof C == 'string' ||
      typeof C == 'function' ||
      C === m ||
      C === y ||
      st ||
      C === d ||
      C === T ||
      C === E ||
      ne ||
      C === j ||
      ye ||
      Z ||
      Ee ||
      (typeof C == 'object' &&
        C !== null &&
        (C.$$typeof === B ||
          C.$$typeof === M ||
          C.$$typeof === f ||
          C.$$typeof === N ||
          C.$$typeof === x ||
          C.$$typeof === ee ||
          C.getModuleId !== void 0))
    )
  }
  function Te(C, G, ae) {
    var we = C.displayName
    if (we) return we
    var Ke = G.displayName || G.name || ''
    return Ke !== '' ? ae + '(' + Ke + ')' : ae
  }
  function at(C) {
    return C.displayName || 'Context'
  }
  function ge(C) {
    if (C == null) return null
    if (
      (typeof C.tag == 'number' &&
        X(
          'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
        ),
      typeof C == 'function')
    )
      return C.displayName || C.name || null
    if (typeof C == 'string') return C
    switch (C) {
      case m:
        return 'Fragment'
      case s:
        return 'Portal'
      case y:
        return 'Profiler'
      case d:
        return 'StrictMode'
      case T:
        return 'Suspense'
      case E:
        return 'SuspenseList'
    }
    if (typeof C == 'object')
      switch (C.$$typeof) {
        case N:
          var G = C
          return at(G) + '.Consumer'
        case f:
          var ae = C
          return at(ae._context) + '.Provider'
        case x:
          return Te(C, C.render, 'ForwardRef')
        case M:
          var we = C.displayName || null
          return we !== null ? we : ge(C.type) || 'Memo'
        case B: {
          var Ke = C,
            dt = Ke._payload,
            xe = Ke._init
          try {
            return ge(xe(dt))
          } catch {
            return null
          }
        }
      }
    return null
  }
  var He = Object.assign,
    ht = 0,
    $e,
    ue,
    Fe,
    tn,
    Pn,
    nn,
    Pt
  function bn() {}
  bn.__reactDisabledLog = !0
  function Nn() {
    {
      if (ht === 0) {
        ;($e = console.log),
          (ue = console.info),
          (Fe = console.warn),
          (tn = console.error),
          (Pn = console.group),
          (nn = console.groupCollapsed),
          (Pt = console.groupEnd)
        var C = { configurable: !0, enumerable: !0, value: bn, writable: !0 }
        Object.defineProperties(console, {
          info: C,
          log: C,
          warn: C,
          error: C,
          group: C,
          groupCollapsed: C,
          groupEnd: C,
        })
      }
      ht++
    }
  }
  function Mr() {
    {
      if ((ht--, ht === 0)) {
        var C = { configurable: !0, enumerable: !0, writable: !0 }
        Object.defineProperties(console, {
          log: He({}, C, { value: $e }),
          info: He({}, C, { value: ue }),
          warn: He({}, C, { value: Fe }),
          error: He({}, C, { value: tn }),
          group: He({}, C, { value: Pn }),
          groupCollapsed: He({}, C, { value: nn }),
          groupEnd: He({}, C, { value: Pt }),
        })
      }
      ht < 0 &&
        X(
          'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
        )
    }
  }
  var yr = Y.ReactCurrentDispatcher,
    gr
  function xn(C, G, ae) {
    {
      if (gr === void 0)
        try {
          throw Error()
        } catch (Ke) {
          var we = Ke.stack.trim().match(/\n( *(at )?)/)
          gr = (we && we[1]) || ''
        }
      return (
        `
` +
        gr +
        C
      )
    }
  }
  var rn = !1,
    Sn
  {
    var Mn = typeof WeakMap == 'function' ? WeakMap : Map
    Sn = new Mn()
  }
  function sn(C, G) {
    if (!C || rn) return ''
    {
      var ae = Sn.get(C)
      if (ae !== void 0) return ae
    }
    var we
    rn = !0
    var Ke = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    var dt
    ;(dt = yr.current), (yr.current = null), Nn()
    try {
      if (G) {
        var xe = function () {
          throw Error()
        }
        if (
          (Object.defineProperty(xe.prototype, 'props', {
            set: function () {
              throw Error()
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(xe, [])
          } catch (Nr) {
            we = Nr
          }
          Reflect.construct(C, [], xe)
        } else {
          try {
            xe.call()
          } catch (Nr) {
            we = Nr
          }
          C.call(xe.prototype)
        }
      } else {
        try {
          throw Error()
        } catch (Nr) {
          we = Nr
        }
        C()
      }
    } catch (Nr) {
      if (Nr && we && typeof Nr.stack == 'string') {
        for (
          var Ie = Nr.stack.split(`
`),
            Wt = we.stack.split(`
`),
            Ct = Ie.length - 1,
            Xe = Wt.length - 1;
          Ct >= 1 && Xe >= 0 && Ie[Ct] !== Wt[Xe];

        )
          Xe--
        for (; Ct >= 1 && Xe >= 0; Ct--, Xe--)
          if (Ie[Ct] !== Wt[Xe]) {
            if (Ct !== 1 || Xe !== 1)
              do
                if ((Ct--, Xe--, Xe < 0 || Ie[Ct] !== Wt[Xe])) {
                  var Bn =
                    `
` + Ie[Ct].replace(' at new ', ' at ')
                  return (
                    C.displayName &&
                      Bn.includes('<anonymous>') &&
                      (Bn = Bn.replace('<anonymous>', C.displayName)),
                    typeof C == 'function' && Sn.set(C, Bn),
                    Bn
                  )
                }
              while (Ct >= 1 && Xe >= 0)
            break
          }
      }
    } finally {
      ;(rn = !1), (yr.current = dt), Mr(), (Error.prepareStackTrace = Ke)
    }
    var ia = C ? C.displayName || C.name : '',
      $i = ia ? xn(ia) : ''
    return typeof C == 'function' && Sn.set(C, $i), $i
  }
  function Bt(C, G, ae) {
    return sn(C, !1)
  }
  function En(C) {
    var G = C.prototype
    return !!(G && G.isReactComponent)
  }
  function Kt(C, G, ae) {
    if (C == null) return ''
    if (typeof C == 'function') return sn(C, En(C))
    if (typeof C == 'string') return xn(C)
    switch (C) {
      case T:
        return xn('Suspense')
      case E:
        return xn('SuspenseList')
    }
    if (typeof C == 'object')
      switch (C.$$typeof) {
        case x:
          return Bt(C.render)
        case M:
          return Kt(C.type, G, ae)
        case B: {
          var we = C,
            Ke = we._payload,
            dt = we._init
          try {
            return Kt(dt(Ke), G, ae)
          } catch {}
        }
      }
    return ''
  }
  var Ht = Object.prototype.hasOwnProperty,
    Xt = {},
    Jn = Y.ReactDebugCurrentFrame
  function Zn(C) {
    if (C) {
      var G = C._owner,
        ae = Kt(C.type, C._source, G ? G.type : null)
      Jn.setExtraStackFrame(ae)
    } else Jn.setExtraStackFrame(null)
  }
  function V(C, G, ae, we, Ke) {
    {
      var dt = Function.call.bind(Ht)
      for (var xe in C)
        if (dt(C, xe)) {
          var Ie = void 0
          try {
            if (typeof C[xe] != 'function') {
              var Wt = Error(
                (we || 'React class') +
                  ': ' +
                  ae +
                  ' type `' +
                  xe +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof C[xe] +
                  '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
              )
              throw ((Wt.name = 'Invariant Violation'), Wt)
            }
            Ie = C[xe](
              G,
              xe,
              we,
              ae,
              null,
              'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
            )
          } catch (Ct) {
            Ie = Ct
          }
          Ie &&
            !(Ie instanceof Error) &&
            (Zn(Ke),
            X(
              '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
              we || 'React class',
              ae,
              xe,
              typeof Ie
            ),
            Zn(null)),
            Ie instanceof Error &&
              !(Ie.message in Xt) &&
              ((Xt[Ie.message] = !0),
              Zn(Ke),
              X('Failed %s type: %s', ae, Ie.message),
              Zn(null))
        }
    }
  }
  var Q = Array.isArray
  function K(C) {
    return Q(C)
  }
  function be(C) {
    {
      var G = typeof Symbol == 'function' && Symbol.toStringTag,
        ae = (G && C[Symbol.toStringTag]) || C.constructor.name || 'Object'
      return ae
    }
  }
  function Ve(C) {
    try {
      return Ye(C), !1
    } catch {
      return !0
    }
  }
  function Ye(C) {
    return '' + C
  }
  function je(C) {
    if (Ve(C))
      return (
        X(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          be(C)
        ),
        Ye(C)
      )
  }
  var Re = Y.ReactCurrentOwner,
    Ge = { key: !0, ref: !0, __self: !0, __source: !0 },
    ot,
    wt,
    te
  te = {}
  function fe(C) {
    if (Ht.call(C, 'ref')) {
      var G = Object.getOwnPropertyDescriptor(C, 'ref').get
      if (G && G.isReactWarning) return !1
    }
    return C.ref !== void 0
  }
  function Le(C) {
    if (Ht.call(C, 'key')) {
      var G = Object.getOwnPropertyDescriptor(C, 'key').get
      if (G && G.isReactWarning) return !1
    }
    return C.key !== void 0
  }
  function Qe(C, G) {
    if (
      typeof C.ref == 'string' &&
      Re.current &&
      G &&
      Re.current.stateNode !== G
    ) {
      var ae = ge(Re.current.type)
      te[ae] ||
        (X(
          'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
          ge(Re.current.type),
          C.ref
        ),
        (te[ae] = !0))
    }
  }
  function ut(C, G) {
    {
      var ae = function () {
        ot ||
          ((ot = !0),
          X(
            '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            G
          ))
      }
      ;(ae.isReactWarning = !0),
        Object.defineProperty(C, 'key', { get: ae, configurable: !0 })
    }
  }
  function Mt(C, G) {
    {
      var ae = function () {
        wt ||
          ((wt = !0),
          X(
            '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            G
          ))
      }
      ;(ae.isReactWarning = !0),
        Object.defineProperty(C, 'ref', { get: ae, configurable: !0 })
    }
  }
  var At = function (C, G, ae, we, Ke, dt, xe) {
    var Ie = { $$typeof: o, type: C, key: G, ref: ae, props: xe, _owner: dt }
    return (
      (Ie._store = {}),
      Object.defineProperty(Ie._store, 'validated', {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(Ie, '_self', {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we,
      }),
      Object.defineProperty(Ie, '_source', {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ke,
      }),
      Object.freeze && (Object.freeze(Ie.props), Object.freeze(Ie)),
      Ie
    )
  }
  function yt(C, G, ae, we, Ke) {
    {
      var dt,
        xe = {},
        Ie = null,
        Wt = null
      ae !== void 0 && (je(ae), (Ie = '' + ae)),
        Le(G) && (je(G.key), (Ie = '' + G.key)),
        fe(G) && ((Wt = G.ref), Qe(G, Ke))
      for (dt in G) Ht.call(G, dt) && !Ge.hasOwnProperty(dt) && (xe[dt] = G[dt])
      if (C && C.defaultProps) {
        var Ct = C.defaultProps
        for (dt in Ct) xe[dt] === void 0 && (xe[dt] = Ct[dt])
      }
      if (Ie || Wt) {
        var Xe =
          typeof C == 'function' ? C.displayName || C.name || 'Unknown' : C
        Ie && ut(xe, Xe), Wt && Mt(xe, Xe)
      }
      return At(C, Ie, Wt, Ke, we, Re.current, xe)
    }
  }
  var Pe = Y.ReactCurrentOwner,
    Yt = Y.ReactDebugCurrentFrame
  function bt(C) {
    if (C) {
      var G = C._owner,
        ae = Kt(C.type, C._source, G ? G.type : null)
      Yt.setExtraStackFrame(ae)
    } else Yt.setExtraStackFrame(null)
  }
  var Tt
  Tt = !1
  function Lr(C) {
    return typeof C == 'object' && C !== null && C.$$typeof === o
  }
  function br() {
    {
      if (Pe.current) {
        var C = ge(Pe.current.type)
        if (C)
          return (
            `

Check the render method of \`` +
            C +
            '`.'
          )
      }
      return ''
    }
  }
  function na(C) {
    {
      if (C !== void 0) {
        var G = C.fileName.replace(/^.*[\\\/]/, ''),
          ae = C.lineNumber
        return (
          `

Check your code at ` +
          G +
          ':' +
          ae +
          '.'
        )
      }
      return ''
    }
  }
  var cn = {}
  function Cn(C) {
    {
      var G = br()
      if (!G) {
        var ae = typeof C == 'string' ? C : C.displayName || C.name
        ae &&
          (G =
            `

Check the top-level render call using <` +
            ae +
            '>.')
      }
      return G
    }
  }
  function ra(C, G) {
    {
      if (!C._store || C._store.validated || C.key != null) return
      C._store.validated = !0
      var ae = Cn(G)
      if (cn[ae]) return
      cn[ae] = !0
      var we = ''
      C &&
        C._owner &&
        C._owner !== Pe.current &&
        (we = ' It was passed a child from ' + ge(C._owner.type) + '.'),
        bt(C),
        X(
          'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
          ae,
          we
        ),
        bt(null)
    }
  }
  function Ta(C, G) {
    {
      if (typeof C != 'object') return
      if (K(C))
        for (var ae = 0; ae < C.length; ae++) {
          var we = C[ae]
          Lr(we) && ra(we, G)
        }
      else if (Lr(C)) C._store && (C._store.validated = !0)
      else if (C) {
        var Ke = de(C)
        if (typeof Ke == 'function' && Ke !== C.entries)
          for (var dt = Ke.call(C), xe; !(xe = dt.next()).done; )
            Lr(xe.value) && ra(xe.value, G)
      }
    }
  }
  function wa(C) {
    {
      var G = C.type
      if (G == null || typeof G == 'string') return
      var ae
      if (typeof G == 'function') ae = G.propTypes
      else if (typeof G == 'object' && (G.$$typeof === x || G.$$typeof === M))
        ae = G.propTypes
      else return
      if (ae) {
        var we = ge(G)
        V(ae, C.props, 'prop', we, C)
      } else if (G.PropTypes !== void 0 && !Tt) {
        Tt = !0
        var Ke = ge(G)
        X(
          'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
          Ke || 'Unknown'
        )
      }
      typeof G.getDefaultProps == 'function' &&
        !G.getDefaultProps.isReactClassApproved &&
        X(
          'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
        )
    }
  }
  function ni(C) {
    {
      for (var G = Object.keys(C.props), ae = 0; ae < G.length; ae++) {
        var we = G[ae]
        if (we !== 'children' && we !== 'key') {
          bt(C),
            X(
              'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
              we
            ),
            bt(null)
          break
        }
      }
      C.ref !== null &&
        (bt(C),
        X('Invalid attribute `ref` supplied to `React.Fragment`.'),
        bt(null))
    }
  }
  function ri(C, G, ae, we, Ke, dt) {
    {
      var xe = Ce(C)
      if (!xe) {
        var Ie = ''
        ;(C === void 0 ||
          (typeof C == 'object' &&
            C !== null &&
            Object.keys(C).length === 0)) &&
          (Ie +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.")
        var Wt = na(Ke)
        Wt ? (Ie += Wt) : (Ie += br())
        var Ct
        C === null
          ? (Ct = 'null')
          : K(C)
          ? (Ct = 'array')
          : C !== void 0 && C.$$typeof === o
          ? ((Ct = '<' + (ge(C.type) || 'Unknown') + ' />'),
            (Ie =
              ' Did you accidentally export a JSX literal instead of a component?'))
          : (Ct = typeof C),
          X(
            'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            Ct,
            Ie
          )
      }
      var Xe = yt(C, G, ae, Ke, dt)
      if (Xe == null) return Xe
      if (xe) {
        var Bn = G.children
        if (Bn !== void 0)
          if (we)
            if (K(Bn)) {
              for (var ia = 0; ia < Bn.length; ia++) Ta(Bn[ia], C)
              Object.freeze && Object.freeze(Bn)
            } else
              X(
                'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
              )
          else Ta(Bn, C)
      }
      return C === m ? ni(Xe) : wa(Xe), Xe
    }
  }
  var aa = ri
  ;(Xh.Fragment = m), (Xh.jsxDEV = aa)
})()
;(function (i) {
  i.exports = Xh
})(fy)
const Ca = fy.exports.Fragment,
  h = fy.exports.jsxDEV
var On =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/react-router@6.4.0-pre.10_react@18.2.0/node_modules/react-router/dist/index.js'
function cM(i, o) {
  return (i === o && (i !== 0 || 1 / i === 1 / o)) || (i !== i && o !== o)
}
const zS = typeof Object.is == 'function' ? Object.is : cM,
  { useState: fM, useEffect: dM, useLayoutEffect: mM, useDebugValue: vM } = ud
let Gx = !1,
  qx = !1
function pM(i, o, s) {
  Gx ||
    ('startTransition' in ud &&
      ((Gx = !0),
      console.error(
        'You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.'
      )))
  const m = o()
  if (!qx) {
    const f = o()
    zS(m, f) ||
      (console.error(
        'The result of getSnapshot should be cached to avoid an infinite loop'
      ),
      (qx = !0))
  }
  const [{ inst: d }, y] = fM({ inst: { value: m, getSnapshot: o } })
  return (
    mM(() => {
      ;(d.value = m), (d.getSnapshot = o), jh(d) && y({ inst: d })
    }, [i, m, o]),
    dM(
      () => (
        jh(d) && y({ inst: d }),
        i(() => {
          jh(d) && y({ inst: d })
        })
      ),
      [i]
    ),
    vM(m),
    m
  )
}
function jh(i) {
  const o = i.getSnapshot,
    s = i.value
  try {
    const m = o()
    return !zS(s, m)
  } catch {
    return !0
  }
}
function hM(i, o, s) {
  return o()
}
const yM =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  gM = !yM,
  bM = gM ? hM : pM,
  NM = 'useSyncExternalStore' in ud ? ((i) => i.useSyncExternalStore)(ud) : bM,
  HS = R.exports.createContext(null)
HS.displayName = 'DataStaticRouterContext'
const js = R.exports.createContext(null)
js.displayName = 'DataRouter'
const zs = R.exports.createContext(null)
zs.displayName = 'DataRouterState'
const $S = R.exports.createContext(null)
$S.displayName = 'Deferred'
const md = R.exports.createContext(null)
md.displayName = 'Navigation'
const vd = R.exports.createContext(null)
vd.displayName = 'Location'
const wl = R.exports.createContext({ outlet: null, matches: [] })
wl.displayName = 'Route'
const dy = R.exports.createContext(null)
dy.displayName = 'RouteError'
function xM(i) {
  Fo() ||
    lt(!1, 'useHref() may be used only in the context of a <Router> component.')
  let { basename: o, navigator: s } = R.exports.useContext(md),
    { hash: m, pathname: d, search: y } = Fs(i),
    f = d
  return (
    o !== '/' && (f = d === '/' ? o : Fi([o, d])),
    s.createHref({ pathname: f, search: y, hash: m })
  )
}
function Fo() {
  return R.exports.useContext(vd) != null
}
function Hs() {
  return (
    Fo() ||
      lt(
        !1,
        'useLocation() may be used only in the context of a <Router> component.'
      ),
    R.exports.useContext(vd).location
  )
}
function SM(i) {
  Fo() ||
    lt(
      !1,
      'useMatch() may be used only in the context of a <Router> component.'
    )
  let { pathname: o } = Hs()
  return R.exports.useMemo(() => cy(i, o), [o, i])
}
function PS(i) {
  return i.filter(
    (o, s) =>
      s === 0 || (!o.route.index && o.pathnameBase !== i[s - 1].pathnameBase)
  )
}
function EM() {
  Fo() ||
    lt(
      !1,
      'useNavigate() may be used only in the context of a <Router> component.'
    )
  let { basename: i, navigator: o } = R.exports.useContext(md),
    { matches: s } = R.exports.useContext(wl),
    { pathname: m } = Hs(),
    d = JSON.stringify(PS(s).map((N) => N.pathnameBase)),
    y = R.exports.useRef(!1)
  return (
    R.exports.useEffect(() => {
      y.current = !0
    }),
    R.exports.useCallback(
      function (N, x) {
        if (
          (x === void 0 && (x = {}),
          Rl(
            y.current,
            'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
          ),
          !y.current)
        )
          return
        if (typeof N == 'number') {
          o.go(N)
          return
        }
        let T = AS(N, JSON.parse(d), m)
        i !== '/' &&
          (T.pathname = T.pathname === '/' ? i : Fi([i, T.pathname])),
          (x.replace ? o.replace : o.push)(T, x.state, x)
      },
      [i, o, d, m]
    )
  )
}
function Fs(i) {
  let { matches: o } = R.exports.useContext(wl),
    { pathname: s } = Hs(),
    m = JSON.stringify(PS(o).map((d) => d.pathnameBase))
  return R.exports.useMemo(() => AS(i, JSON.parse(m), s), [i, m, s])
}
function CM(i, o) {
  Fo() ||
    lt(
      !1,
      'useRoutes() may be used only in the context of a <Router> component.'
    )
  let s = R.exports.useContext(zs),
    { matches: m } = R.exports.useContext(wl),
    d = m[m.length - 1],
    y = d ? d.params : {},
    f = d ? d.pathname : '/',
    N = d ? d.pathnameBase : '/',
    x = d && d.route
  {
    let O = (x && x.path) || ''
    MM(
      f,
      !x || O.endsWith('*'),
      'You rendered descendant <Routes> (or called `useRoutes()`) at ' +
        ('"' + f + '" (under <Route path="' + O + '">) but the ') +
        `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` +
        ('Please change the parent <Route path="' + O + '"> to <Route ') +
        ('path="' + (O === '/' ? '*' : O + '/*') + '">.')
    )
  }
  let T = Hs(),
    E
  if (o) {
    var M
    let O = typeof o == 'string' ? Ea(o) : o
    N === '/' ||
      ((M = O.pathname) == null ? void 0 : M.startsWith(N)) ||
      lt(
        !1,
        'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was ' +
          ('matched by all parent routes. The current pathname base is "' +
            N +
            '" ') +
          ('but pathname "' +
            O.pathname +
            '" was given in the `location` prop.')
      ),
      (E = O)
  } else E = T
  let B = E.pathname || '/',
    j = N === '/' ? B : B.slice(N.length) || '/',
    z = Ls(i, { pathname: j })
  return (
    Rl(
      x || z != null,
      'No routes matched location "' + E.pathname + E.search + E.hash + '" '
    ),
    Rl(
      z == null || z[z.length - 1].route.element !== void 0,
      'Matched leaf route at location "' +
        E.pathname +
        E.search +
        E.hash +
        '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'
    ),
    DM(
      z &&
        z.map((O) =>
          Object.assign({}, O, {
            params: Object.assign({}, y, O.params),
            pathname: Fi([N, O.pathname]),
            pathnameBase: O.pathnameBase === '/' ? N : Fi([N, O.pathnameBase]),
          })
        ),
      m,
      s || void 0
    )
  )
}
function RM() {
  let i = OM(),
    o = US(i)
      ? i.status + ' ' + i.statusText
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    s = i instanceof Error ? i.stack : null,
    m = 'rgba(200,200,200, 0.5)',
    d = { padding: '0.5rem', backgroundColor: m },
    y = { padding: '2px 4px', backgroundColor: m }
  return h(
    Ca,
    {
      children: [
        h(
          'h2',
          { children: 'Unhandled Thrown Error!' },
          void 0,
          !1,
          { fileName: On, lineNumber: 565, columnNumber: 78 },
          this
        ),
        h(
          'h3',
          { style: { fontStyle: 'italic' }, children: o },
          void 0,
          !1,
          { fileName: On, lineNumber: 565, columnNumber: 151 },
          this
        ),
        s
          ? h(
              'pre',
              { style: d, children: s },
              void 0,
              !1,
              { fileName: On, lineNumber: 569, columnNumber: 37 },
              this
            )
          : null,
        h(
          'p',
          { children: '\u{1F4BF} Hey developer \u{1F44B}' },
          void 0,
          !1,
          { fileName: On, lineNumber: 571, columnNumber: 34 },
          this
        ),
        h(
          'p',
          {
            children: [
              'You can provide a way better UX than this when your app throws errors by providing your own\xA0',
              h(
                'code',
                { style: y, children: 'errorElement' },
                void 0,
                !1,
                { fileName: On, lineNumber: 571, columnNumber: 265 },
                this
              ),
              ' props on\xA0',
              h(
                'code',
                { style: y, children: '<Route>' },
                void 0,
                !1,
                { fileName: On, lineNumber: 573, columnNumber: 53 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: On, lineNumber: 571, columnNumber: 122 },
          this
        ),
      ],
    },
    void 0,
    !0
  )
}
class TM extends R.exports.Component {
  constructor(o) {
    super(o), (this.state = { location: o.location, error: o.error })
  }
  static getDerivedStateFromError(o) {
    return { error: o }
  }
  static getDerivedStateFromProps(o, s) {
    return s.location !== o.location
      ? { error: o.error, location: o.location }
      : { error: o.error || s.error, location: s.location }
  }
  componentDidCatch(o, s) {
    console.error('React Router caught the following error during render', o, s)
  }
  render() {
    return this.state.error
      ? h(
          dy.Provider,
          { value: this.state.error, children: this.props.component },
          void 0,
          !1,
          { fileName: On, lineNumber: 624, columnNumber: 44 },
          this
        )
      : this.props.children
  }
}
function wM(i) {
  let { routeContext: o, match: s, children: m } = i,
    d = R.exports.useContext(HS)
  return (
    d && s.route.errorElement && (d._deepestRenderedBoundaryId = s.route.id),
    h(
      wl.Provider,
      { value: o, children: m },
      void 0,
      !1,
      { fileName: On, lineNumber: 645, columnNumber: 23 },
      this
    )
  )
}
function DM(i, o, s) {
  if ((o === void 0 && (o = []), i == null))
    if (s != null && s.errors) i = s.matches
    else return null
  let m = i,
    d = s == null ? void 0 : s.errors
  if (d != null) {
    let y = m.findIndex(
      (f) => f.route.id && (d == null ? void 0 : d[f.route.id])
    )
    y >= 0 ||
      lt(!1, 'Could not find a matching route for the current errors: ' + d),
      (m = m.slice(0, Math.min(m.length, y + 1)))
  }
  return m.reduceRight((y, f, N) => {
    let x = f.route.id ? (d == null ? void 0 : d[f.route.id]) : null,
      T = s
        ? f.route.errorElement ||
          h(
            RM,
            {},
            void 0,
            !1,
            { fileName: On, lineNumber: 678, columnNumber: 83 },
            this
          )
        : null,
      E = () =>
        h(
          wM,
          {
            match: f,
            routeContext: { outlet: y, matches: o.concat(m.slice(0, N + 1)) },
            children: x ? T : f.route.element !== void 0 ? f.route.element : y,
          },
          void 0,
          !1,
          { fileName: On, lineNumber: 680, columnNumber: 42 },
          this
        )
    return s && (f.route.errorElement || N === 0)
      ? h(
          TM,
          { location: s.location, component: T, error: x, children: E() },
          void 0,
          !1,
          { fileName: On, lineNumber: 691, columnNumber: 88 },
          this
        )
      : E()
  }, null)
}
var Jh
;(function (i) {
  ;(i.UseLoaderData = 'useLoaderData'),
    (i.UseActionData = 'useActionData'),
    (i.UseRouteError = 'useRouteError'),
    (i.UseNavigation = 'useNavigation'),
    (i.UseRouteLoaderData = 'useRouteLoaderData'),
    (i.UseMatches = 'useMatches'),
    (i.UseRevalidator = 'useRevalidator')
})(Jh || (Jh = {}))
function _M(i) {
  let o = R.exports.useContext(zs)
  return o || lt(!1, i + ' must be used within a DataRouterStateContext'), o
}
function OM() {
  var i
  let o = R.exports.useContext(dy),
    s = _M(Jh.UseRouteError),
    m = R.exports.useContext(wl),
    d = m.matches[m.matches.length - 1],
    y = R.exports.useContext($S)
  return y && y instanceof Error
    ? y
    : o ||
        (m || lt(!1, 'useRouteError must be used inside a RouteContext'),
        d.route.id ||
          lt(
            !1,
            'useRouteError can only be used on routes that contain a unique "id"'
          ),
        (i = s.errors) == null ? void 0 : i[d.route.id])
}
const Qx = {}
function MM(i, o, s) {
  !o && !Qx[i] && ((Qx[i] = !0), Rl(!1, s))
}
function LM(i) {
  let { basename: o, children: s, fallbackElement: m, router: d } = i,
    y = NM(
      d.subscribe,
      () => d.state,
      () => d.state
    ),
    f = R.exports.useMemo(
      () => ({
        createHref: d.createHref,
        go: (x) => d.navigate(x),
        push: (x, T, E) =>
          d.navigate(x, {
            state: T,
            resetScroll: E == null ? void 0 : E.resetScroll,
          }),
        replace: (x, T, E) =>
          d.navigate(x, {
            replace: !0,
            state: T,
            resetScroll: E == null ? void 0 : E.resetScroll,
          }),
      }),
      [d]
    ),
    N = { router: d, navigator: f, static: !1, basename: o || '/' }
  return y.initialized
    ? h(
        js.Provider,
        {
          value: N,
          children: h(
            zs.Provider,
            { value: y, children: s },
            void 0,
            !1,
            { fileName: On, lineNumber: 891, columnNumber: 19 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: On, lineNumber: 889, columnNumber: 23 },
        this
      )
    : h(Ca, { children: m }, void 0, !1)
}
function kM() {
  let i = R.exports.useContext(js)
  i || lt(!1, '<DataRouter> may only be rendered within a DataRouterContext')
  let { router: o, navigator: s, basename: m } = i
  return h(
    AM,
    {
      basename: m,
      location: o.state.location,
      navigationType: o.state.historyAction,
      navigator: s,
      children: h(
        UM,
        {},
        void 0,
        !1,
        { fileName: On, lineNumber: 914, columnNumber: 19 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: On, lineNumber: 909, columnNumber: 23 },
    this
  )
}
function Zh(i) {
  lt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  )
}
function AM(i) {
  let {
    basename: o = '/',
    children: s = null,
    location: m,
    navigationType: d = or.Pop,
    navigator: y,
    static: f = !1,
  } = i
  Fo() &&
    lt(
      !1,
      'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
    )
  let N = o.replace(/^\/*/, '/'),
    x = R.exports.useMemo(
      () => ({ basename: N, navigator: y, static: f }),
      [N, y, f]
    )
  typeof m == 'string' && (m = Ea(m))
  let {
      pathname: T = '/',
      search: E = '',
      hash: M = '',
      state: B = null,
      key: j = 'default',
    } = m,
    z = R.exports.useMemo(() => {
      let O = kS(T, N)
      return O == null
        ? null
        : { pathname: O, search: E, hash: M, state: B, key: j }
    }, [N, T, E, M, B, j])
  return (
    Rl(
      z != null,
      '<Router basename="' +
        N +
        '"> is not able to match the URL ' +
        ('"' + T + E + M + '" because it does not start with the ') +
        "basename, so the <Router> won't render anything."
    ),
    z == null
      ? null
      : h(
          md.Provider,
          {
            value: x,
            children: h(
              vd.Provider,
              { children: s, value: { location: z, navigationType: d } },
              void 0,
              !1,
              { fileName: On, lineNumber: 1091, columnNumber: 19 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: On, lineNumber: 1089, columnNumber: 23 },
          this
        )
  )
}
function UM(i) {
  let { children: o, location: s } = i,
    m = R.exports.useContext(js),
    d = m && !o ? m.router.routes : sd(o)
  return CM(d, s)
}
function sd(i, o) {
  o === void 0 && (o = [])
  let s = []
  return (
    R.exports.Children.forEach(i, (m, d) => {
      if (!R.exports.isValidElement(m)) return
      if (m.type === R.exports.Fragment) {
        s.push.apply(s, sd(m.props.children, o))
        return
      }
      m.type !== Zh &&
        lt(
          !1,
          '[' +
            (typeof m.type == 'string' ? m.type : m.type.name) +
            '] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>'
        )
      let y = [...o, d],
        f = {
          id: m.props.id || y.join('-'),
          caseSensitive: m.props.caseSensitive,
          element: m.props.element,
          index: m.props.index,
          path: m.props.path,
          loader: m.props.loader,
          action: m.props.action,
          errorElement: m.props.errorElement,
          shouldRevalidate: m.props.shouldRevalidate,
          handle: m.props.handle,
        }
      m.props.children && (f.children = sd(m.props.children, y)), s.push(f)
    }),
    s
  )
}
var ko =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/react-router-dom@6.4.0-pre.10_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js'
function my(i, o) {
  if (i == null) return {}
  var s = {},
    m = Object.keys(i),
    d,
    y
  for (y = 0; y < m.length; y++)
    (d = m[y]), !(o.indexOf(d) >= 0) && (s[d] = i[d])
  return s
}
const od = 'get',
  zh = 'application/x-www-form-urlencoded'
function pd(i) {
  return i != null && typeof i.tagName == 'string'
}
function FM(i) {
  return pd(i) && i.tagName.toLowerCase() === 'button'
}
function jM(i) {
  return pd(i) && i.tagName.toLowerCase() === 'form'
}
function zM(i) {
  return pd(i) && i.tagName.toLowerCase() === 'input'
}
function HM(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)
}
function $M(i, o) {
  return i.button === 0 && (!o || o === '_self') && !HM(i)
}
function PM(i, o, s) {
  let m, d, y, f
  if (jM(i)) {
    let E = s.submissionTrigger
    ;(m = s.method || i.getAttribute('method') || od),
      (d = s.action || i.getAttribute('action') || o),
      (y = s.encType || i.getAttribute('enctype') || zh),
      (f = new FormData(i)),
      E && E.name && f.append(E.name, E.value)
  } else if (FM(i) || (zM(i) && (i.type === 'submit' || i.type === 'image'))) {
    let E = i.form
    if (E == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      )
    ;(m =
      s.method ||
      i.getAttribute('formmethod') ||
      E.getAttribute('method') ||
      od),
      (d =
        s.action ||
        i.getAttribute('formaction') ||
        E.getAttribute('action') ||
        o),
      (y =
        s.encType ||
        i.getAttribute('formenctype') ||
        E.getAttribute('enctype') ||
        zh),
      (f = new FormData(E)),
      i.name && f.set(i.name, i.value)
  } else {
    if (pd(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      )
    if (
      ((m = s.method || od),
      (d = s.action || o),
      (y = s.encType || zh),
      i instanceof FormData)
    )
      f = i
    else if (((f = new FormData()), i instanceof URLSearchParams))
      for (let [E, M] of i) f.append(E, M)
    else if (i != null) for (let E of Object.keys(i)) f.append(E, i[E])
  }
  let { protocol: N, host: x } = window.location
  return { url: new URL(d, N + '//' + x), method: m, encType: y, formData: f }
}
const BM = [
    'onClick',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'resetScroll',
  ],
  VM = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'children',
  ],
  IM = [
    'reloadDocument',
    'replace',
    'method',
    'action',
    'onSubmit',
    'fetcherKey',
    'routeId',
  ]
let Hh
function YM(i) {
  let {
    basename: o,
    children: s,
    hydrationData: m,
    fallbackElement: d,
    routes: y,
    window: f,
  } = i
  return (
    Hh ||
      (Hh = sM({
        basename: o,
        hydrationData: m || window.__staticRouterHydrationData,
        window: f,
        routes: y || sd(s),
      }).initialize()),
    h(
      LM,
      {
        router: Hh,
        basename: o,
        fallbackElement: d,
        children: h(
          kM,
          {},
          void 0,
          !1,
          { fileName: ko, lineNumber: 254, columnNumber: 19 },
          this
        ),
      },
      void 0,
      !1,
      { fileName: ko, lineNumber: 250, columnNumber: 23 },
      this
    )
  )
}
const BS = R.exports.forwardRef(function (o, s) {
  let {
      onClick: m,
      reloadDocument: d,
      replace: y,
      state: f,
      target: N,
      to: x,
      resetScroll: T,
    } = o,
    E = my(o, BM),
    M = xM(x),
    B = qM(x, { replace: y, state: f, target: N, resetScroll: T })
  function j(z) {
    m && m(z), z.defaultPrevented || B(z)
  }
  return h(
    'a',
    { ...E, href: M, onClick: d ? m : j, ref: s, target: N },
    void 0,
    !1,
    { fileName: ko, lineNumber: 388, columnNumber: 5 },
    this
  )
})
BS.displayName = 'Link'
const WM = R.exports.forwardRef(function (o, s) {
  let {
      'aria-current': m = 'page',
      caseSensitive: d = !1,
      className: y = '',
      end: f = !1,
      style: N,
      to: x,
      children: T,
    } = o,
    E = my(o, VM),
    M = Fs(x),
    B = SM({ path: M.pathname, end: f, caseSensitive: d }),
    j = R.exports.useContext(zs),
    z = j == null ? void 0 : j.navigation.location,
    O = Fs(z || ''),
    Y =
      R.exports.useMemo(
        () =>
          z
            ? cy({ path: M.pathname, end: f, caseSensitive: d }, O.pathname)
            : null,
        [z, M.pathname, d, f, O.pathname]
      ) != null,
    X = B != null,
    ve = X ? m : void 0,
    ye
  typeof y == 'function'
    ? (ye = y({ isActive: X, isPending: Y }))
    : (ye = [y, X ? 'active' : null, Y ? 'pending' : null]
        .filter(Boolean)
        .join(' '))
  let Z = typeof N == 'function' ? N({ isActive: X, isPending: Y }) : N
  return h(
    BS,
    {
      ...E,
      'aria-current': ve,
      className: ye,
      ref: s,
      style: Z,
      to: x,
      children: typeof T == 'function' ? T({ isActive: X, isPending: Y }) : T,
    },
    void 0,
    !1,
    { fileName: ko, lineNumber: 454, columnNumber: 23 },
    this
  )
})
WM.displayName = 'NavLink'
const VS = R.exports.forwardRef((i, o) =>
  h(
    GM,
    { ...i, ref: o },
    void 0,
    !1,
    { fileName: ko, lineNumber: 478, columnNumber: 23 },
    globalThis
  )
)
VS.displayName = 'Form'
const GM = R.exports.forwardRef((i, o) => {
  let {
      reloadDocument: s,
      replace: m,
      method: d = od,
      action: y = '.',
      onSubmit: f,
      fetcherKey: N,
      routeId: x,
    } = i,
    T = my(i, IM),
    E = QM(N, x),
    M = d.toLowerCase() === 'get' ? 'get' : 'post',
    B = IS(y)
  return h(
    'form',
    {
      ref: o,
      method: M,
      action: B,
      onSubmit: s
        ? f
        : (z) => {
            if ((f && f(z), z.defaultPrevented)) return
            z.preventDefault()
            let O = z.nativeEvent.submitter
            E(O || z.currentTarget, { method: d, replace: m })
          },
      ...T,
    },
    void 0,
    !1,
    { fileName: ko, lineNumber: 514, columnNumber: 23 },
    globalThis
  )
})
VS.displayName = 'Form'
function qM(i, o) {
  let {
      target: s,
      replace: m,
      state: d,
      resetScroll: y,
    } = o === void 0 ? {} : o,
    f = EM(),
    N = Hs(),
    x = Fs(i)
  return R.exports.useCallback(
    (T) => {
      if ($M(T, s)) {
        T.preventDefault()
        let E = m !== void 0 ? m : Us(N) === Us(x)
        f(i, { replace: E, state: d, resetScroll: y })
      }
    },
    [N, f, x, m, d, s, i, y]
  )
}
function QM(i, o) {
  let s = R.exports.useContext(js)
  s || lt(!1, 'useSubmitImpl must be used within a Data Router')
  let { router: m } = s,
    d = IS()
  return R.exports.useCallback(
    function (y, f) {
      if ((f === void 0 && (f = {}), typeof document > 'u'))
        throw new Error(
          'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
        )
      let { method: N, encType: x, formData: T, url: E } = PM(y, d, f),
        M = E.pathname + E.search,
        B = { replace: f.replace, formData: T, formMethod: N, formEncType: x }
      i
        ? (o == null && lt(!1, 'No routeId available for useFetcher()'),
          m.fetch(i, o, M, B))
        : m.navigate(M, B)
    },
    [d, m, i, o]
  )
}
function IS(i) {
  i === void 0 && (i = '.')
  let o = R.exports.useContext(wl)
  o || lt(!1, 'useFormAction must be used inside a RouteContext')
  let [s] = o.matches.slice(-1),
    { pathname: m, search: d } = Fs(i)
  return (
    i === '.' &&
      s.route.index &&
      (d = d ? d.replace(/^\?/, '?index&') : '?index'),
    m + d
  )
}
let Kn = typeof window < 'u' ? R.exports.useLayoutEffect : R.exports.useEffect
function ji(i) {
  let o = R.exports.useRef(i)
  return (
    Kn(() => {
      o.current = i
    }, [i]),
    o
  )
}
function zi() {
  let i = [],
    o = [],
    s = {
      enqueue(m) {
        o.push(m)
      },
      addEventListener(m, d, y, f) {
        return (
          m.addEventListener(d, y, f),
          s.add(() => m.removeEventListener(d, y, f))
        )
      },
      requestAnimationFrame(...m) {
        let d = requestAnimationFrame(...m)
        return s.add(() => cancelAnimationFrame(d))
      },
      nextFrame(...m) {
        return s.requestAnimationFrame(() => s.requestAnimationFrame(...m))
      },
      setTimeout(...m) {
        let d = setTimeout(...m)
        return s.add(() => clearTimeout(d))
      },
      add(m) {
        return (
          i.push(m),
          () => {
            let d = i.indexOf(m)
            if (d >= 0) {
              let [y] = i.splice(d, 1)
              y()
            }
          }
        )
      },
      dispose() {
        for (let m of i.splice(0)) m()
      },
      async workQueue() {
        for (let m of o.splice(0)) await m()
      },
    }
  return s
}
function vy() {
  let [i] = R.exports.useState(zi)
  return R.exports.useEffect(() => () => i.dispose(), [i]), i
}
let Ze = function (i) {
    let o = ji(i)
    return $t.useCallback((...s) => o.current(...s), [o])
  },
  $h = { serverHandoffComplete: !1 }
function jo() {
  let [i, o] = R.exports.useState($h.serverHandoffComplete)
  return (
    R.exports.useEffect(() => {
      i !== !0 && o(!0)
    }, [i]),
    R.exports.useEffect(() => {
      $h.serverHandoffComplete === !1 && ($h.serverHandoffComplete = !0)
    }, []),
    i
  )
}
var Kx
let KM = 0
function Xx() {
  return ++KM
}
let Xn =
  (Kx = $t.useId) != null
    ? Kx
    : function () {
        let i = jo(),
          [o, s] = $t.useState(i ? Xx : null)
        return (
          Kn(() => {
            o === null && s(Xx())
          }, [o]),
          o != null ? '' + o : void 0
        )
      }
function kt(i, o, ...s) {
  if (i in o) {
    let d = o[i]
    return typeof d == 'function' ? d(...s) : d
  }
  let m = new Error(
    `Tried to handle "${i}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      o
    )
      .map((d) => `"${d}"`)
      .join(', ')}.`
  )
  throw (Error.captureStackTrace && Error.captureStackTrace(m, kt), m)
}
function zo(i) {
  return typeof window > 'u'
    ? null
    : i instanceof Node
    ? i.ownerDocument
    : i != null && i.hasOwnProperty('current') && i.current instanceof Node
    ? i.current.ownerDocument
    : document
}
let ey = [
  '[contentEditable=true]',
  '[tabindex]',
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'iframe',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
]
  .map((i) => `${i}:not([tabindex='-1'])`)
  .join(',')
var Sa = ((i) => (
    (i[(i.First = 1)] = 'First'),
    (i[(i.Previous = 2)] = 'Previous'),
    (i[(i.Next = 4)] = 'Next'),
    (i[(i.Last = 8)] = 'Last'),
    (i[(i.WrapAround = 16)] = 'WrapAround'),
    (i[(i.NoScroll = 32)] = 'NoScroll'),
    i
  ))(Sa || {}),
  YS = ((i) => (
    (i[(i.Error = 0)] = 'Error'),
    (i[(i.Overflow = 1)] = 'Overflow'),
    (i[(i.Success = 2)] = 'Success'),
    (i[(i.Underflow = 3)] = 'Underflow'),
    i
  ))(YS || {}),
  XM = ((i) => (
    (i[(i.Previous = -1)] = 'Previous'), (i[(i.Next = 1)] = 'Next'), i
  ))(XM || {})
function WS(i = document.body) {
  return i == null ? [] : Array.from(i.querySelectorAll(ey))
}
var hd = ((i) => (
  (i[(i.Strict = 0)] = 'Strict'), (i[(i.Loose = 1)] = 'Loose'), i
))(hd || {})
function py(i, o = 0) {
  var s
  return i === ((s = zo(i)) == null ? void 0 : s.body)
    ? !1
    : kt(o, {
        [0]() {
          return i.matches(ey)
        },
        [1]() {
          let m = i
          for (; m !== null; ) {
            if (m.matches(ey)) return !0
            m = m.parentElement
          }
          return !1
        },
      })
}
function Lo(i) {
  i == null || i.focus({ preventScroll: !0 })
}
let JM = ['textarea', 'input'].join(',')
function ZM(i) {
  var o, s
  return (s =
    (o = i == null ? void 0 : i.matches) == null ? void 0 : o.call(i, JM)) !=
    null
    ? s
    : !1
}
function GS(i, o = (s) => s) {
  return i.slice().sort((s, m) => {
    let d = o(s),
      y = o(m)
    if (d === null || y === null) return 0
    let f = d.compareDocumentPosition(y)
    return f & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : f & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0
  })
}
function Za(i, o, s = !0) {
  let m = Array.isArray(i)
      ? i.length > 0
        ? i[0].ownerDocument
        : document
      : i.ownerDocument,
    d = Array.isArray(i) ? (s ? GS(i) : i) : WS(i),
    y = m.activeElement,
    f = (() => {
      if (o & 5) return 1
      if (o & 10) return -1
      throw new Error(
        'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
      )
    })(),
    N = (() => {
      if (o & 1) return 0
      if (o & 2) return Math.max(0, d.indexOf(y)) - 1
      if (o & 4) return Math.max(0, d.indexOf(y)) + 1
      if (o & 8) return d.length - 1
      throw new Error(
        'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
      )
    })(),
    x = o & 32 ? { preventScroll: !0 } : {},
    T = 0,
    E = d.length,
    M
  do {
    if (T >= E || T + E <= 0) return 0
    let B = N + T
    if (o & 16) B = (B + E) % E
    else {
      if (B < 0) return 3
      if (B >= E) return 1
    }
    ;(M = d[B]), M == null || M.focus(x), (T += f)
  } while (M !== m.activeElement)
  return (
    o & 6 && ZM(M) && M.select(),
    M.hasAttribute('tabindex') || M.setAttribute('tabindex', '0'),
    2
  )
}
function ty(i, o, s) {
  let m = ji(o)
  R.exports.useEffect(() => {
    function d(y) {
      m.current(y)
    }
    return (
      window.addEventListener(i, d, s),
      () => window.removeEventListener(i, d, s)
    )
  }, [i, s])
}
function hy(i, o, s = !0) {
  let m = R.exports.useRef(!1)
  R.exports.useEffect(() => {
    requestAnimationFrame(() => {
      m.current = s
    })
  }, [s])
  function d(y, f) {
    if (!m.current || y.defaultPrevented) return
    let N = (function T(E) {
        return typeof E == 'function'
          ? T(E())
          : Array.isArray(E) || E instanceof Set
          ? E
          : [E]
      })(i),
      x = f(y)
    if (x !== null && !!x.ownerDocument.documentElement.contains(x)) {
      for (let T of N) {
        if (T === null) continue
        let E = T instanceof HTMLElement ? T : T.current
        if (E != null && E.contains(x)) return
      }
      return (
        !py(x, hd.Loose) && x.tabIndex !== -1 && y.preventDefault(), o(y, x)
      )
    }
  }
  ty('click', (y) => d(y, (f) => f.target), !0),
    ty(
      'blur',
      (y) =>
        d(y, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    )
}
function Jx(i) {
  var o
  if (i.type) return i.type
  let s = (o = i.as) != null ? o : 'button'
  if (typeof s == 'string' && s.toLowerCase() === 'button') return 'button'
}
function qS(i, o) {
  let [s, m] = R.exports.useState(() => Jx(i))
  return (
    Kn(() => {
      m(Jx(i))
    }, [i.type, i.as]),
    Kn(() => {
      s ||
        !o.current ||
        (o.current instanceof HTMLButtonElement &&
          !o.current.hasAttribute('type') &&
          m('button'))
    }, [s, o]),
    s
  )
}
let QS = Symbol()
function KS(i, o = !0) {
  return Object.assign(i, { [QS]: o })
}
function Zt(...i) {
  let o = R.exports.useRef(i)
  R.exports.useEffect(() => {
    o.current = i
  }, [i])
  let s = Ze((m) => {
    for (let d of o.current)
      d != null && (typeof d == 'function' ? d(m) : (d.current = m))
  })
  return i.every((m) => m == null || (m == null ? void 0 : m[QS])) ? void 0 : s
}
function eL({ container: i, accept: o, walk: s, enabled: m = !0 }) {
  let d = R.exports.useRef(o),
    y = R.exports.useRef(s)
  R.exports.useEffect(() => {
    ;(d.current = o), (y.current = s)
  }, [o, s]),
    Kn(() => {
      if (!i || !m) return
      let f = zo(i)
      if (!f) return
      let N = d.current,
        x = y.current,
        T = Object.assign((M) => N(M), { acceptNode: N }),
        E = f.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, T, !1)
      for (; E.nextNode(); ) x(E.currentNode)
    }, [i, m, d, y])
}
function tL(i) {
  throw new Error('Unexpected object: ' + i)
}
var ta = ((i) => (
  (i[(i.First = 0)] = 'First'),
  (i[(i.Previous = 1)] = 'Previous'),
  (i[(i.Next = 2)] = 'Next'),
  (i[(i.Last = 3)] = 'Last'),
  (i[(i.Specific = 4)] = 'Specific'),
  (i[(i.Nothing = 5)] = 'Nothing'),
  i
))(ta || {})
function nL(i, o) {
  let s = o.resolveItems()
  if (s.length <= 0) return null
  let m = o.resolveActiveIndex(),
    d = m != null ? m : -1,
    y = (() => {
      switch (i.focus) {
        case 0:
          return s.findIndex((f) => !o.resolveDisabled(f))
        case 1: {
          let f = s
            .slice()
            .reverse()
            .findIndex((N, x, T) =>
              d !== -1 && T.length - x - 1 >= d ? !1 : !o.resolveDisabled(N)
            )
          return f === -1 ? f : s.length - 1 - f
        }
        case 2:
          return s.findIndex((f, N) => (N <= d ? !1 : !o.resolveDisabled(f)))
        case 3: {
          let f = s
            .slice()
            .reverse()
            .findIndex((N) => !o.resolveDisabled(N))
          return f === -1 ? f : s.length - 1 - f
        }
        case 4:
          return s.findIndex((f) => o.resolveId(f) === i.id)
        case 5:
          return null
        default:
          tL(i)
      }
    })()
  return y === -1 ? m : y
}
var Ra = ((i) => (
    (i[(i.None = 0)] = 'None'),
    (i[(i.RenderStrategy = 1)] = 'RenderStrategy'),
    (i[(i.Static = 2)] = 'Static'),
    i
  ))(Ra || {}),
  ei = ((i) => (
    (i[(i.Unmount = 0)] = 'Unmount'), (i[(i.Hidden = 1)] = 'Hidden'), i
  ))(ei || {})
function en({
  ourProps: i,
  theirProps: o,
  slot: s,
  defaultTag: m,
  features: d,
  visible: y = !0,
  name: f,
}) {
  let N = XS(o, i)
  if (y) return nd(N, s, m, f)
  let x = d != null ? d : 0
  if (x & 2) {
    let { static: T = !1, ...E } = N
    if (T) return nd(E, s, m, f)
  }
  if (x & 1) {
    let { unmount: T = !0, ...E } = N
    return kt(T ? 0 : 1, {
      [0]() {
        return null
      },
      [1]() {
        return nd({ ...E, hidden: !0, style: { display: 'none' } }, s, m, f)
      },
    })
  }
  return nd(N, s, m, f)
}
function nd(i, o = {}, s, m) {
  let {
      as: d = s,
      children: y,
      refName: f = 'ref',
      ...N
    } = Ph(i, ['unmount', 'static']),
    x = i.ref !== void 0 ? { [f]: i.ref } : {},
    T = typeof y == 'function' ? y(o) : y
  N.className &&
    typeof N.className == 'function' &&
    (N.className = N.className(o))
  let E = {}
  if (d === R.exports.Fragment && Object.keys(Zx(N)).length > 0) {
    if (!R.exports.isValidElement(T) || (Array.isArray(T) && T.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          '',
          `The current component <${m} /> is rendering a "Fragment".`,
          'However we need to passthrough the following props:',
          Object.keys(N).map((M) => `  - ${M}`).join(`
`),
          '',
          'You can apply a few solutions:',
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            'Render a single element as the child so that we can forward the props onto that element.',
          ].map((M) => `  - ${M}`).join(`
`),
        ].join(`
`)
      )
    return R.exports.cloneElement(
      T,
      Object.assign({}, XS(T.props, Zx(Ph(N, ['ref']))), E, x)
    )
  }
  return R.exports.createElement(
    d,
    Object.assign(
      {},
      Ph(N, ['ref']),
      d !== R.exports.Fragment && x,
      d !== R.exports.Fragment && E
    ),
    T
  )
}
function XS(...i) {
  if (i.length === 0) return {}
  if (i.length === 1) return i[0]
  let o = {},
    s = {}
  for (let m of i)
    for (let d in m)
      d.startsWith('on') && typeof m[d] == 'function'
        ? (s[d] != null || (s[d] = []), s[d].push(m[d]))
        : (o[d] = m[d])
  if (o.disabled || o['aria-disabled'])
    return Object.assign(
      o,
      Object.fromEntries(Object.keys(s).map((m) => [m, void 0]))
    )
  for (let m in s)
    Object.assign(o, {
      [m](d, ...y) {
        let f = s[m]
        for (let N of f) {
          if (d.defaultPrevented) return
          N(d, ...y)
        }
      },
    })
  return o
}
function Qt(i) {
  var o
  return Object.assign(R.exports.forwardRef(i), {
    displayName: (o = i.displayName) != null ? o : i.name,
  })
}
function Zx(i) {
  let o = Object.assign({}, i)
  for (let s in o) o[s] === void 0 && delete o[s]
  return o
}
function Ph(i, o = []) {
  let s = Object.assign({}, i)
  for (let m of o) m in s && delete s[m]
  return s
}
function yd(i) {
  let o = i.parentElement,
    s = null
  for (; o && !(o instanceof HTMLFieldSetElement); )
    o instanceof HTMLLegendElement && (s = o), (o = o.parentElement)
  let m = (o == null ? void 0 : o.getAttribute('disabled')) === ''
  return m && rL(s) ? !1 : m
}
function rL(i) {
  if (!i) return !1
  let o = i.previousElementSibling
  for (; o !== null; ) {
    if (o instanceof HTMLLegendElement) return !1
    o = o.previousElementSibling
  }
  return !0
}
let aL = 'div'
var Tl = ((i) => (
  (i[(i.None = 1)] = 'None'),
  (i[(i.Focusable = 2)] = 'Focusable'),
  (i[(i.Hidden = 4)] = 'Hidden'),
  i
))(Tl || {})
let Ao = Qt(function (i, o) {
    let { features: s = 1, ...m } = i,
      d = {
        ref: o,
        'aria-hidden': (s & 2) === 2 ? !0 : void 0,
        style: {
          position: 'absolute',
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
          ...((s & 4) === 4 && (s & 2) !== 2 && { display: 'none' }),
        },
      }
    return en({
      ourProps: d,
      theirProps: m,
      slot: {},
      defaultTag: aL,
      name: 'Hidden',
    })
  }),
  yy = R.exports.createContext(null)
yy.displayName = 'OpenClosedContext'
var hr = ((i) => (
  (i[(i.Open = 0)] = 'Open'), (i[(i.Closed = 1)] = 'Closed'), i
))(hr || {})
function Ho() {
  return R.exports.useContext(yy)
}
function gy({ value: i, children: o }) {
  return $t.createElement(yy.Provider, { value: i }, o)
}
var zt = ((i) => (
    (i.Space = ' '),
    (i.Enter = 'Enter'),
    (i.Escape = 'Escape'),
    (i.Backspace = 'Backspace'),
    (i.Delete = 'Delete'),
    (i.ArrowLeft = 'ArrowLeft'),
    (i.ArrowUp = 'ArrowUp'),
    (i.ArrowRight = 'ArrowRight'),
    (i.ArrowDown = 'ArrowDown'),
    (i.Home = 'Home'),
    (i.End = 'End'),
    (i.PageUp = 'PageUp'),
    (i.PageDown = 'PageDown'),
    (i.Tab = 'Tab'),
    i
  ))(zt || {}),
  ti = ((i) => (
    (i[(i.Forwards = 0)] = 'Forwards'), (i[(i.Backwards = 1)] = 'Backwards'), i
  ))(ti || {})
function by() {
  let i = R.exports.useRef(0)
  return (
    ty(
      'keydown',
      (o) => {
        o.key === 'Tab' && (i.current = o.shiftKey ? 1 : 0)
      },
      !0
    ),
    i
  )
}
function Ny() {
  let i = R.exports.useRef(!1)
  return (
    Kn(
      () => (
        (i.current = !0),
        () => {
          i.current = !1
        }
      ),
      []
    ),
    i
  )
}
function Hi(...i) {
  return R.exports.useMemo(() => zo(...i), [...i])
}
function gd(i, o, s, m) {
  let d = ji(s)
  R.exports.useEffect(() => {
    i = i != null ? i : window
    function y(f) {
      d.current(f)
    }
    return i.addEventListener(o, y, m), () => i.removeEventListener(o, y, m)
  }, [i, o, m])
}
function xy(i) {
  typeof queueMicrotask == 'function'
    ? queueMicrotask(i)
    : Promise.resolve()
        .then(i)
        .catch((o) =>
          setTimeout(() => {
            throw o
          })
        )
}
function JS(i, o) {
  let s = R.exports.useRef([]),
    m = Ze(i)
  R.exports.useEffect(() => {
    for (let [d, y] of o.entries())
      if (s.current[d] !== y) {
        let f = m(o)
        return (s.current = o), f
      }
  }, [m, ...o])
}
var eS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@headlessui+react@1.6.6_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js'
let iL = 'div'
var ZS = ((i) => (
  (i[(i.None = 1)] = 'None'),
  (i[(i.InitialFocus = 2)] = 'InitialFocus'),
  (i[(i.TabLock = 4)] = 'TabLock'),
  (i[(i.FocusLock = 8)] = 'FocusLock'),
  (i[(i.RestoreFocus = 16)] = 'RestoreFocus'),
  (i[(i.All = 30)] = 'All'),
  i
))(ZS || {})
let Ms = Object.assign(
  Qt(function (i, o) {
    let s = R.exports.useRef(null),
      m = Zt(s, o),
      { initialFocus: d, containers: y, features: f = 30, ...N } = i
    jo() || (f = 1)
    let x = Hi(s)
    lL({ ownerDocument: x }, Boolean(f & 16))
    let T = oL(
      { ownerDocument: x, container: s, initialFocus: d },
      Boolean(f & 2)
    )
    uL(
      {
        ownerDocument: x,
        container: s,
        containers: y,
        previousActiveElement: T,
      },
      Boolean(f & 8)
    )
    let E = by(),
      M = Ze(() => {
        let j = s.current
        !j ||
          kt(E.current, {
            [ti.Forwards]: () => Za(j, Sa.First),
            [ti.Backwards]: () => Za(j, Sa.Last),
          })
      }),
      B = { ref: m }
    return h(
      Ca,
      {
        children: [
          Boolean(f & 4) &&
            h(
              Ao,
              {
                as: 'button',
                type: 'button',
                onFocus: M,
                features: Tl.Focusable,
              },
              void 0,
              !1,
              { fileName: eS, lineNumber: 1, columnNumber: 1608 },
              this
            ),
          en({ ourProps: B, theirProps: N, defaultTag: iL, name: 'FocusTrap' }),
          Boolean(f & 4) &&
            h(
              Ao,
              {
                as: 'button',
                type: 'button',
                onFocus: M,
                features: Tl.Focusable,
              },
              void 0,
              !1,
              { fileName: eS, lineNumber: 1, columnNumber: 1763 },
              this
            ),
        ],
      },
      void 0,
      !0
    )
  }),
  { features: ZS }
)
function lL({ ownerDocument: i }, o) {
  let s = R.exports.useRef(null)
  gd(
    i == null ? void 0 : i.defaultView,
    'focusout',
    (d) => {
      !o || s.current || (s.current = d.target)
    },
    !0
  ),
    JS(() => {
      o ||
        ((i == null ? void 0 : i.activeElement) ===
          (i == null ? void 0 : i.body) && Lo(s.current),
        (s.current = null))
    }, [o])
  let m = R.exports.useRef(!1)
  R.exports.useEffect(
    () => (
      (m.current = !1),
      () => {
        ;(m.current = !0),
          xy(() => {
            !m.current || (Lo(s.current), (s.current = null))
          })
      }
    ),
    []
  )
}
function oL({ ownerDocument: i, container: o, initialFocus: s }, m) {
  let d = R.exports.useRef(null)
  return (
    JS(() => {
      if (!m) return
      let y = o.current
      if (!y) return
      let f = i == null ? void 0 : i.activeElement
      if (s != null && s.current) {
        if ((s == null ? void 0 : s.current) === f) {
          d.current = f
          return
        }
      } else if (y.contains(f)) {
        d.current = f
        return
      }
      s != null && s.current
        ? Lo(s.current)
        : Za(y, Sa.First) === YS.Error &&
          console.warn(
            'There are no focusable elements inside the <FocusTrap />'
          ),
        (d.current = i == null ? void 0 : i.activeElement)
    }, [m]),
    d
  )
}
function uL(
  { ownerDocument: i, container: o, containers: s, previousActiveElement: m },
  d
) {
  let y = Ny()
  gd(
    i == null ? void 0 : i.defaultView,
    'focus',
    (f) => {
      if (!d || !y.current) return
      let N = new Set(s == null ? void 0 : s.current)
      N.add(o)
      let x = m.current
      if (!x) return
      let T = f.target
      T && T instanceof HTMLElement
        ? sL(N, T)
          ? ((m.current = T), Lo(T))
          : (f.preventDefault(), f.stopPropagation(), Lo(x))
        : Lo(m.current)
    },
    !0
  )
}
function sL(i, o) {
  var s
  for (let m of i) if ((s = m.current) != null && s.contains(o)) return !0
  return !1
}
let Do = new Set(),
  Ui = new Map()
function tS(i) {
  i.setAttribute('aria-hidden', 'true'), (i.inert = !0)
}
function nS(i) {
  let o = Ui.get(i)
  !o ||
    (o['aria-hidden'] === null
      ? i.removeAttribute('aria-hidden')
      : i.setAttribute('aria-hidden', o['aria-hidden']),
    (i.inert = o.inert))
}
function cL(i, o = !0) {
  Kn(() => {
    if (!o || !i.current) return
    let s = i.current,
      m = zo(s)
    if (m) {
      Do.add(s)
      for (let d of Ui.keys()) d.contains(s) && (nS(d), Ui.delete(d))
      return (
        m.querySelectorAll('body > *').forEach((d) => {
          if (d instanceof HTMLElement) {
            for (let y of Do) if (d.contains(y)) return
            Do.size === 1 &&
              (Ui.set(d, {
                'aria-hidden': d.getAttribute('aria-hidden'),
                inert: d.inert,
              }),
              tS(d))
          }
        }),
        () => {
          if ((Do.delete(s), Do.size > 0))
            m.querySelectorAll('body > *').forEach((d) => {
              if (d instanceof HTMLElement && !Ui.has(d)) {
                for (let y of Do) if (d.contains(y)) return
                Ui.set(d, {
                  'aria-hidden': d.getAttribute('aria-hidden'),
                  inert: d.inert,
                }),
                  tS(d)
              }
            })
          else for (let d of Ui.keys()) nS(d), Ui.delete(d)
        }
      )
    }
  }, [o])
}
let e1 = R.exports.createContext(!1)
function fL() {
  return R.exports.useContext(e1)
}
function ny(i) {
  return $t.createElement(e1.Provider, { value: i.force }, i.children)
}
var dL =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@headlessui+react@1.6.6_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/portal/portal.js'
function mL(i) {
  let o = fL(),
    s = R.exports.useContext(t1),
    m = Hi(i),
    [d, y] = R.exports.useState(() => {
      if ((!o && s !== null) || typeof window > 'u') return null
      let f = m == null ? void 0 : m.getElementById('headlessui-portal-root')
      if (f) return f
      if (m === null) return null
      let N = m.createElement('div')
      return (
        N.setAttribute('id', 'headlessui-portal-root'), m.body.appendChild(N)
      )
    })
  return (
    R.exports.useEffect(() => {
      d !== null &&
        ((m != null && m.body.contains(d)) ||
          m == null ||
          m.body.appendChild(d))
    }, [d, m]),
    R.exports.useEffect(() => {
      o || (s !== null && y(s.current))
    }, [s, y, o]),
    d
  )
}
let vL = R.exports.Fragment,
  pL = Qt(function (i, o) {
    let s = i,
      m = R.exports.useRef(null),
      d = Zt(
        KS((E) => {
          m.current = E
        }),
        o
      ),
      y = Hi(m),
      f = mL(m),
      [N] = R.exports.useState(() => {
        var E
        return typeof window > 'u'
          ? null
          : (E = y == null ? void 0 : y.createElement('div')) != null
          ? E
          : null
      }),
      x = jo(),
      T = R.exports.useRef(!1)
    return (
      Kn(() => {
        if (((T.current = !1), !(!f || !N)))
          return (
            f.contains(N) ||
              (N.setAttribute('data-headlessui-portal', ''), f.appendChild(N)),
            () => {
              ;(T.current = !0),
                xy(() => {
                  var E
                  !T.current ||
                    !f ||
                    !N ||
                    (f.removeChild(N),
                    f.childNodes.length <= 0 &&
                      ((E = f.parentElement) == null || E.removeChild(f)))
                })
            }
          )
      }, [f, N]),
      x
        ? !f || !N
          ? null
          : sy.exports.createPortal(
              en({
                ourProps: { ref: d },
                theirProps: s,
                defaultTag: vL,
                name: 'Portal',
              }),
              N
            )
        : null
    )
  }),
  hL = R.exports.Fragment,
  t1 = R.exports.createContext(null),
  yL = Qt(function (i, o) {
    let { target: s, ...m } = i,
      d = { ref: Zt(o) }
    return h(
      t1.Provider,
      {
        value: s,
        children: en({
          ourProps: d,
          theirProps: m,
          defaultTag: hL,
          name: 'Popover.Group',
        }),
      },
      void 0,
      !1,
      { fileName: dL, lineNumber: 1, columnNumber: 1746 },
      this
    )
  }),
  ry = Object.assign(pL, { Group: yL }),
  n1 = R.exports.createContext(null)
function r1() {
  let i = R.exports.useContext(n1)
  if (i === null) {
    let o = new Error(
      'You used a <Description /> component, but it is not inside a relevant parent.'
    )
    throw (Error.captureStackTrace && Error.captureStackTrace(o, r1), o)
  }
  return i
}
function gL() {
  let [i, o] = R.exports.useState([])
  return [
    i.length > 0 ? i.join(' ') : void 0,
    R.exports.useMemo(
      () =>
        function (s) {
          let m = Ze(
              (y) => (
                o((f) => [...f, y]),
                () =>
                  o((f) => {
                    let N = f.slice(),
                      x = N.indexOf(y)
                    return x !== -1 && N.splice(x, 1), N
                  })
              )
            ),
            d = R.exports.useMemo(
              () => ({
                register: m,
                slot: s.slot,
                name: s.name,
                props: s.props,
              }),
              [m, s.slot, s.name, s.props]
            )
          return $t.createElement(n1.Provider, { value: d }, s.children)
        },
      [o]
    ),
  ]
}
let bL = 'p',
  NL = Qt(function (i, o) {
    let s = r1(),
      m = `headlessui-description-${Xn()}`,
      d = Zt(o)
    Kn(() => s.register(m), [m, s.register])
    let y = i,
      f = { ref: d, ...s.props, id: m }
    return en({
      ourProps: f,
      theirProps: y,
      slot: s.slot || {},
      defaultTag: bL,
      name: s.name || 'Description',
    })
  }),
  Sy = R.exports.createContext(() => {})
Sy.displayName = 'StackContext'
var ay = ((i) => ((i[(i.Add = 0)] = 'Add'), (i[(i.Remove = 1)] = 'Remove'), i))(
  ay || {}
)
function xL() {
  return R.exports.useContext(Sy)
}
function SL({ children: i, onUpdate: o, type: s, element: m }) {
  let d = xL(),
    y = Ze((...f) => {
      o == null || o(...f), d(...f)
    })
  return (
    Kn(() => (y(0, s, m), () => y(1, s, m)), [y, s, m]),
    $t.createElement(Sy.Provider, { value: y }, i)
  )
}
var Sl =
    '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@headlessui+react@1.6.6_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/dialog/dialog.js',
  EL = ((i) => ((i[(i.Open = 0)] = 'Open'), (i[(i.Closed = 1)] = 'Closed'), i))(
    EL || {}
  ),
  CL = ((i) => ((i[(i.SetTitleId = 0)] = 'SetTitleId'), i))(CL || {})
let RL = {
    [0](i, o) {
      return i.titleId === o.id ? i : { ...i, titleId: o.id }
    },
  },
  cd = R.exports.createContext(null)
cd.displayName = 'DialogContext'
function $s(i) {
  let o = R.exports.useContext(cd)
  if (o === null) {
    let s = new Error(`<${i} /> is missing a parent <Dialog /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(s, $s), s)
  }
  return o
}
function TL(i, o) {
  return kt(o.type, RL, i, o)
}
let wL = 'div',
  DL = Ra.RenderStrategy | Ra.Static,
  _L = Qt(function (i, o) {
    let { open: s, onClose: m, initialFocus: d, __demoMode: y = !1, ...f } = i,
      [N, x] = R.exports.useState(0),
      T = Ho()
    s === void 0 &&
      T !== null &&
      (s = kt(T, { [hr.Open]: !0, [hr.Closed]: !1 }))
    let E = R.exports.useRef(new Set()),
      M = R.exports.useRef(null),
      B = Zt(M, o),
      j = R.exports.useRef(null),
      z = Hi(M),
      O = i.hasOwnProperty('open') || T !== null,
      de = i.hasOwnProperty('onClose')
    if (!O && !de)
      throw new Error(
        'You have to provide an `open` and an `onClose` prop to the `Dialog` component.'
      )
    if (!O)
      throw new Error(
        'You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.'
      )
    if (!de)
      throw new Error(
        'You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.'
      )
    if (typeof s != 'boolean')
      throw new Error(
        `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s}`
      )
    if (typeof m != 'function')
      throw new Error(
        `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${m}`
      )
    let Y = s ? 0 : 1,
      [X, ve] = R.exports.useReducer(TL, {
        titleId: null,
        descriptionId: null,
        panelRef: R.exports.createRef(),
      }),
      ye = Ze(() => m(!1)),
      Z = Ze(($e) => ve({ type: 0, id: $e })),
      Ee = jo() ? (y ? !1 : Y === 0) : !1,
      ne = N > 1,
      st = R.exports.useContext(cd) !== null,
      ee = ne ? 'parent' : 'leaf'
    cL(M, ne ? Ee : !1),
      hy(
        () => {
          var $e, ue
          return [
            ...Array.from(
              ($e =
                z == null
                  ? void 0
                  : z.querySelectorAll('body > *, [data-headlessui-portal]')) !=
                null
                ? $e
                : []
            ).filter(
              (Fe) =>
                !(
                  !(Fe instanceof HTMLElement) ||
                  Fe.contains(j.current) ||
                  (X.panelRef.current && Fe.contains(X.panelRef.current))
                )
            ),
            (ue = X.panelRef.current) != null ? ue : M.current,
          ]
        },
        ye,
        Ee && !ne
      ),
      gd(z == null ? void 0 : z.defaultView, 'keydown', ($e) => {
        $e.defaultPrevented ||
          ($e.key === zt.Escape &&
            Y === 0 &&
            (ne || ($e.preventDefault(), $e.stopPropagation(), ye())))
      }),
      R.exports.useEffect(() => {
        var $e
        if (Y !== 0 || st) return
        let ue = zo(M)
        if (!ue) return
        let Fe = ue.documentElement,
          tn = ($e = ue.defaultView) != null ? $e : window,
          Pn = Fe.style.overflow,
          nn = Fe.style.paddingRight,
          Pt = tn.innerWidth - Fe.clientWidth
        if (((Fe.style.overflow = 'hidden'), Pt > 0)) {
          let bn = Fe.clientWidth - Fe.offsetWidth,
            Nn = Pt - bn
          Fe.style.paddingRight = `${Nn}px`
        }
        return () => {
          ;(Fe.style.overflow = Pn), (Fe.style.paddingRight = nn)
        }
      }, [Y, st]),
      R.exports.useEffect(() => {
        if (Y !== 0 || !M.current) return
        let $e = new IntersectionObserver((ue) => {
          for (let Fe of ue)
            Fe.boundingClientRect.x === 0 &&
              Fe.boundingClientRect.y === 0 &&
              Fe.boundingClientRect.width === 0 &&
              Fe.boundingClientRect.height === 0 &&
              ye()
        })
        return $e.observe(M.current), () => $e.disconnect()
      }, [Y, M, ye])
    let [Ce, Te] = gL(),
      at = `headlessui-dialog-${Xn()}`,
      ge = R.exports.useMemo(
        () => [{ dialogState: Y, close: ye, setTitleId: Z }, X],
        [Y, X, ye, Z]
      ),
      He = R.exports.useMemo(() => ({ open: Y === 0 }), [Y]),
      ht = {
        ref: B,
        id: at,
        role: 'dialog',
        'aria-modal': Y === 0 ? !0 : void 0,
        'aria-labelledby': X.titleId,
        'aria-describedby': Ce,
      }
    return h(
      SL,
      {
        type: 'Dialog',
        element: M,
        onUpdate: Ze(($e, ue, Fe) => {
          ue === 'Dialog' &&
            kt($e, {
              [ay.Add]() {
                E.current.add(Fe), x((tn) => tn + 1)
              },
              [ay.Remove]() {
                E.current.add(Fe), x((tn) => tn - 1)
              },
            })
        }),
        children: [
          h(
            ny,
            {
              force: !0,
              children: $t.createElement(
                ry,
                null,
                h(
                  cd.Provider,
                  {
                    value: ge,
                    children: $t.createElement(
                      ry.Group,
                      { target: M },
                      h(
                        ny,
                        {
                          force: !1,
                          children: $t.createElement(
                            Te,
                            { slot: He, name: 'Dialog.Description' },
                            h(
                              Ms,
                              {
                                initialFocus: d,
                                containers: E,
                                features: Ee
                                  ? kt(ee, {
                                      parent: Ms.features.RestoreFocus,
                                      leaf:
                                        Ms.features.All &
                                        ~Ms.features.FocusLock,
                                    })
                                  : Ms.features.None,
                                children: en({
                                  ourProps: ht,
                                  theirProps: f,
                                  slot: He,
                                  defaultTag: wL,
                                  features: DL,
                                  visible: Y === 0,
                                  name: 'Dialog',
                                }),
                              },
                              void 0,
                              !1,
                              {
                                fileName: Sl,
                                lineNumber: 1,
                                columnNumber: 4696,
                              },
                              this
                            )
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: Sl, lineNumber: 1, columnNumber: 4609 },
                        this
                      )
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: Sl, lineNumber: 1, columnNumber: 4532 },
                  this
                )
              ),
            },
            void 0,
            !1,
            { fileName: Sl, lineNumber: 1, columnNumber: 4476 },
            this
          ),
          h(
            Ao,
            { features: Tl.Hidden, ref: j },
            void 0,
            !1,
            { fileName: Sl, lineNumber: 1, columnNumber: 4953 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: Sl, lineNumber: 1, columnNumber: 4304 },
      this
    )
  }),
  OL = 'div',
  ML = Qt(function (i, o) {
    let [{ dialogState: s, close: m }] = $s('Dialog.Overlay'),
      d = Zt(o),
      y = `headlessui-dialog-overlay-${Xn()}`,
      f = Ze((x) => {
        if (x.target === x.currentTarget) {
          if (yd(x.currentTarget)) return x.preventDefault()
          x.preventDefault(), x.stopPropagation(), m()
        }
      }),
      N = R.exports.useMemo(() => ({ open: s === 0 }), [s])
    return en({
      ourProps: { ref: d, id: y, 'aria-hidden': !0, onClick: f },
      theirProps: i,
      slot: N,
      defaultTag: OL,
      name: 'Dialog.Overlay',
    })
  }),
  LL = 'div',
  kL = Qt(function (i, o) {
    let [{ dialogState: s }, m] = $s('Dialog.Backdrop'),
      d = Zt(o),
      y = `headlessui-dialog-backdrop-${Xn()}`
    R.exports.useEffect(() => {
      if (m.panelRef.current === null)
        throw new Error(
          'A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.'
        )
    }, [m.panelRef])
    let f = R.exports.useMemo(() => ({ open: s === 0 }), [s])
    return h(
      ny,
      {
        force: !0,
        children: $t.createElement(
          ry,
          null,
          en({
            ourProps: { ref: d, id: y, 'aria-hidden': !0 },
            theirProps: i,
            slot: f,
            defaultTag: LL,
            name: 'Dialog.Backdrop',
          })
        ),
      },
      void 0,
      !1,
      { fileName: Sl, lineNumber: 1, columnNumber: 5727 },
      this
    )
  }),
  AL = 'div',
  UL = Qt(function (i, o) {
    let [{ dialogState: s }, m] = $s('Dialog.Panel'),
      d = Zt(o, m.panelRef),
      y = `headlessui-dialog-panel-${Xn()}`,
      f = R.exports.useMemo(() => ({ open: s === 0 }), [s]),
      N = Ze((x) => {
        x.stopPropagation()
      })
    return en({
      ourProps: { ref: d, id: y, onClick: N },
      theirProps: i,
      slot: f,
      defaultTag: AL,
      name: 'Dialog.Panel',
    })
  }),
  FL = 'h2',
  jL = Qt(function (i, o) {
    let [{ dialogState: s, setTitleId: m }] = $s('Dialog.Title'),
      d = `headlessui-dialog-title-${Xn()}`,
      y = Zt(o)
    R.exports.useEffect(() => (m(d), () => m(null)), [d, m])
    let f = R.exports.useMemo(() => ({ open: s === 0 }), [s])
    return en({
      ourProps: { ref: y, id: d },
      theirProps: i,
      slot: f,
      defaultTag: FL,
      name: 'Dialog.Title',
    })
  }),
  rS = Object.assign(_L, {
    Backdrop: kL,
    Panel: UL,
    Overlay: ML,
    Title: jL,
    Description: NL,
  })
var zL = ((i) => (
    (i[(i.Open = 0)] = 'Open'), (i[(i.Closed = 1)] = 'Closed'), i
  ))(zL || {}),
  HL = ((i) => (
    (i[(i.Pointer = 0)] = 'Pointer'), (i[(i.Other = 1)] = 'Other'), i
  ))(HL || {}),
  $L = ((i) => (
    (i[(i.OpenMenu = 0)] = 'OpenMenu'),
    (i[(i.CloseMenu = 1)] = 'CloseMenu'),
    (i[(i.GoToItem = 2)] = 'GoToItem'),
    (i[(i.Search = 3)] = 'Search'),
    (i[(i.ClearSearch = 4)] = 'ClearSearch'),
    (i[(i.RegisterItem = 5)] = 'RegisterItem'),
    (i[(i.UnregisterItem = 6)] = 'UnregisterItem'),
    i
  ))($L || {})
function Bh(i, o = (s) => s) {
  let s = i.activeItemIndex !== null ? i.items[i.activeItemIndex] : null,
    m = GS(o(i.items.slice()), (y) => y.dataRef.current.domRef.current),
    d = s ? m.indexOf(s) : null
  return d === -1 && (d = null), { items: m, activeItemIndex: d }
}
let PL = {
    [1](i) {
      return i.menuState === 1
        ? i
        : { ...i, activeItemIndex: null, menuState: 1 }
    },
    [0](i) {
      return i.menuState === 0 ? i : { ...i, menuState: 0 }
    },
    [2]: (i, o) => {
      var s
      let m = Bh(i),
        d = nL(o, {
          resolveItems: () => m.items,
          resolveActiveIndex: () => m.activeItemIndex,
          resolveId: (y) => y.id,
          resolveDisabled: (y) => y.dataRef.current.disabled,
        })
      return {
        ...i,
        ...m,
        searchQuery: '',
        activeItemIndex: d,
        activationTrigger: (s = o.trigger) != null ? s : 1,
      }
    },
    [3]: (i, o) => {
      let s = i.searchQuery !== '' ? 0 : 1,
        m = i.searchQuery + o.value.toLowerCase(),
        d = (
          i.activeItemIndex !== null
            ? i.items
                .slice(i.activeItemIndex + s)
                .concat(i.items.slice(0, i.activeItemIndex + s))
            : i.items
        ).find((f) => {
          var N
          return (
            ((N = f.dataRef.current.textValue) == null
              ? void 0
              : N.startsWith(m)) && !f.dataRef.current.disabled
          )
        }),
        y = d ? i.items.indexOf(d) : -1
      return y === -1 || y === i.activeItemIndex
        ? { ...i, searchQuery: m }
        : { ...i, searchQuery: m, activeItemIndex: y, activationTrigger: 1 }
    },
    [4](i) {
      return i.searchQuery === ''
        ? i
        : { ...i, searchQuery: '', searchActiveItemIndex: null }
    },
    [5]: (i, o) => {
      let s = Bh(i, (m) => [...m, { id: o.id, dataRef: o.dataRef }])
      return { ...i, ...s }
    },
    [6]: (i, o) => {
      let s = Bh(i, (m) => {
        let d = m.findIndex((y) => y.id === o.id)
        return d !== -1 && m.splice(d, 1), m
      })
      return { ...i, ...s, activationTrigger: 1 }
    },
  },
  Ey = R.exports.createContext(null)
Ey.displayName = 'MenuContext'
function bd(i) {
  let o = R.exports.useContext(Ey)
  if (o === null) {
    let s = new Error(`<${i} /> is missing a parent <Menu /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(s, bd), s)
  }
  return o
}
function BL(i, o) {
  return kt(o.type, PL, i, o)
}
let VL = R.exports.Fragment,
  IL = Qt(function (i, o) {
    let s = R.exports.useReducer(BL, {
        menuState: 1,
        buttonRef: R.exports.createRef(),
        itemsRef: R.exports.createRef(),
        items: [],
        searchQuery: '',
        activeItemIndex: null,
        activationTrigger: 1,
      }),
      [{ menuState: m, itemsRef: d, buttonRef: y }, f] = s,
      N = Zt(o)
    hy(
      [y, d],
      (M, B) => {
        var j
        f({ type: 1 }),
          py(B, hd.Loose) ||
            (M.preventDefault(), (j = y.current) == null || j.focus())
      },
      m === 0
    )
    let x = R.exports.useMemo(() => ({ open: m === 0 }), [m]),
      T = i,
      E = { ref: N }
    return $t.createElement(
      Ey.Provider,
      { value: s },
      $t.createElement(
        gy,
        { value: kt(m, { [0]: hr.Open, [1]: hr.Closed }) },
        en({
          ourProps: E,
          theirProps: T,
          slot: x,
          defaultTag: VL,
          name: 'Menu',
        })
      )
    )
  }),
  YL = 'button',
  WL = Qt(function (i, o) {
    var s
    let [m, d] = bd('Menu.Button'),
      y = Zt(m.buttonRef, o),
      f = `headlessui-menu-button-${Xn()}`,
      N = vy(),
      x = Ze((z) => {
        switch (z.key) {
          case zt.Space:
          case zt.Enter:
          case zt.ArrowDown:
            z.preventDefault(),
              z.stopPropagation(),
              d({ type: 0 }),
              N.nextFrame(() => d({ type: 2, focus: ta.First }))
            break
          case zt.ArrowUp:
            z.preventDefault(),
              z.stopPropagation(),
              d({ type: 0 }),
              N.nextFrame(() => d({ type: 2, focus: ta.Last }))
            break
        }
      }),
      T = Ze((z) => {
        switch (z.key) {
          case zt.Space:
            z.preventDefault()
            break
        }
      }),
      E = Ze((z) => {
        if (yd(z.currentTarget)) return z.preventDefault()
        i.disabled ||
          (m.menuState === 0
            ? (d({ type: 1 }),
              N.nextFrame(() => {
                var O
                return (O = m.buttonRef.current) == null
                  ? void 0
                  : O.focus({ preventScroll: !0 })
              }))
            : (z.preventDefault(), d({ type: 0 })))
      }),
      M = R.exports.useMemo(() => ({ open: m.menuState === 0 }), [m]),
      B = i,
      j = {
        ref: y,
        id: f,
        type: qS(i, m.buttonRef),
        'aria-haspopup': !0,
        'aria-controls': (s = m.itemsRef.current) == null ? void 0 : s.id,
        'aria-expanded': i.disabled ? void 0 : m.menuState === 0,
        onKeyDown: x,
        onKeyUp: T,
        onClick: E,
      }
    return en({
      ourProps: j,
      theirProps: B,
      slot: M,
      defaultTag: YL,
      name: 'Menu.Button',
    })
  }),
  GL = 'div',
  qL = Ra.RenderStrategy | Ra.Static,
  QL = Qt(function (i, o) {
    var s, m
    let [d, y] = bd('Menu.Items'),
      f = Zt(d.itemsRef, o),
      N = Hi(d.itemsRef),
      x = `headlessui-menu-items-${Xn()}`,
      T = vy(),
      E = Ho(),
      M = (() => (E !== null ? E === hr.Open : d.menuState === 0))()
    R.exports.useEffect(() => {
      let Y = d.itemsRef.current
      !Y ||
        (d.menuState === 0 &&
          Y !== (N == null ? void 0 : N.activeElement) &&
          Y.focus({ preventScroll: !0 }))
    }, [d.menuState, d.itemsRef, N]),
      eL({
        container: d.itemsRef.current,
        enabled: d.menuState === 0,
        accept(Y) {
          return Y.getAttribute('role') === 'menuitem'
            ? NodeFilter.FILTER_REJECT
            : Y.hasAttribute('role')
            ? NodeFilter.FILTER_SKIP
            : NodeFilter.FILTER_ACCEPT
        },
        walk(Y) {
          Y.setAttribute('role', 'none')
        },
      })
    let B = Ze((Y) => {
        var X, ve
        switch ((T.dispose(), Y.key)) {
          case zt.Space:
            if (d.searchQuery !== '')
              return (
                Y.preventDefault(),
                Y.stopPropagation(),
                y({ type: 3, value: Y.key })
              )
          case zt.Enter:
            if (
              (Y.preventDefault(),
              Y.stopPropagation(),
              y({ type: 1 }),
              d.activeItemIndex !== null)
            ) {
              let { dataRef: ye } = d.items[d.activeItemIndex]
              ;(ve = (X = ye.current) == null ? void 0 : X.domRef.current) ==
                null || ve.click()
            }
            zi().nextFrame(() => {
              var ye
              return (ye = d.buttonRef.current) == null
                ? void 0
                : ye.focus({ preventScroll: !0 })
            })
            break
          case zt.ArrowDown:
            return (
              Y.preventDefault(),
              Y.stopPropagation(),
              y({ type: 2, focus: ta.Next })
            )
          case zt.ArrowUp:
            return (
              Y.preventDefault(),
              Y.stopPropagation(),
              y({ type: 2, focus: ta.Previous })
            )
          case zt.Home:
          case zt.PageUp:
            return (
              Y.preventDefault(),
              Y.stopPropagation(),
              y({ type: 2, focus: ta.First })
            )
          case zt.End:
          case zt.PageDown:
            return (
              Y.preventDefault(),
              Y.stopPropagation(),
              y({ type: 2, focus: ta.Last })
            )
          case zt.Escape:
            Y.preventDefault(),
              Y.stopPropagation(),
              y({ type: 1 }),
              zi().nextFrame(() => {
                var ye
                return (ye = d.buttonRef.current) == null
                  ? void 0
                  : ye.focus({ preventScroll: !0 })
              })
            break
          case zt.Tab:
            Y.preventDefault(), Y.stopPropagation()
            break
          default:
            Y.key.length === 1 &&
              (y({ type: 3, value: Y.key }),
              T.setTimeout(() => y({ type: 4 }), 350))
            break
        }
      }),
      j = Ze((Y) => {
        switch (Y.key) {
          case zt.Space:
            Y.preventDefault()
            break
        }
      }),
      z = R.exports.useMemo(() => ({ open: d.menuState === 0 }), [d]),
      O = i,
      de = {
        'aria-activedescendant':
          d.activeItemIndex === null || (s = d.items[d.activeItemIndex]) == null
            ? void 0
            : s.id,
        'aria-labelledby': (m = d.buttonRef.current) == null ? void 0 : m.id,
        id: x,
        onKeyDown: B,
        onKeyUp: j,
        role: 'menu',
        tabIndex: 0,
        ref: f,
      }
    return en({
      ourProps: de,
      theirProps: O,
      slot: z,
      defaultTag: GL,
      features: qL,
      visible: M,
      name: 'Menu.Items',
    })
  }),
  KL = R.exports.Fragment,
  XL = Qt(function (i, o) {
    let { disabled: s = !1, ...m } = i,
      [d, y] = bd('Menu.Item'),
      f = `headlessui-menu-item-${Xn()}`,
      N = d.activeItemIndex !== null ? d.items[d.activeItemIndex].id === f : !1,
      x = R.exports.useRef(null),
      T = Zt(o, x)
    Kn(() => {
      if (d.menuState !== 0 || !N || d.activationTrigger === 0) return
      let de = zi()
      return (
        de.requestAnimationFrame(() => {
          var Y, X
          ;(X = (Y = x.current) == null ? void 0 : Y.scrollIntoView) == null ||
            X.call(Y, { block: 'nearest' })
        }),
        de.dispose
      )
    }, [x, N, d.menuState, d.activationTrigger, d.activeItemIndex])
    let E = R.exports.useRef({ disabled: s, domRef: x })
    Kn(() => {
      E.current.disabled = s
    }, [E, s]),
      Kn(() => {
        var de, Y
        E.current.textValue =
          (Y = (de = x.current) == null ? void 0 : de.textContent) == null
            ? void 0
            : Y.toLowerCase()
      }, [E, x]),
      Kn(
        () => (y({ type: 5, id: f, dataRef: E }), () => y({ type: 6, id: f })),
        [E, f]
      )
    let M = Ze((de) => {
        if (s) return de.preventDefault()
        y({ type: 1 }),
          zi().nextFrame(() => {
            var Y
            return (Y = d.buttonRef.current) == null
              ? void 0
              : Y.focus({ preventScroll: !0 })
          })
      }),
      B = Ze(() => {
        if (s) return y({ type: 2, focus: ta.Nothing })
        y({ type: 2, focus: ta.Specific, id: f })
      }),
      j = Ze(() => {
        s || N || y({ type: 2, focus: ta.Specific, id: f, trigger: 0 })
      }),
      z = Ze(() => {
        s || !N || y({ type: 2, focus: ta.Nothing })
      }),
      O = R.exports.useMemo(() => ({ active: N, disabled: s }), [N, s])
    return en({
      ourProps: {
        id: f,
        ref: T,
        role: 'menuitem',
        tabIndex: s === !0 ? void 0 : -1,
        'aria-disabled': s === !0 ? !0 : void 0,
        disabled: void 0,
        onClick: M,
        onFocus: B,
        onPointerMove: j,
        onMouseMove: j,
        onPointerLeave: z,
        onMouseLeave: z,
      },
      theirProps: m,
      slot: O,
      defaultTag: KL,
      name: 'Menu.Item',
    })
  }),
  Na = Object.assign(IL, { Button: WL, Items: QL, Item: XL })
var iy =
    '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@headlessui+react@1.6.6_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/popover/popover.js',
  JL = ((i) => ((i[(i.Open = 0)] = 'Open'), (i[(i.Closed = 1)] = 'Closed'), i))(
    JL || {}
  ),
  ZL = ((i) => (
    (i[(i.TogglePopover = 0)] = 'TogglePopover'),
    (i[(i.ClosePopover = 1)] = 'ClosePopover'),
    (i[(i.SetButton = 2)] = 'SetButton'),
    (i[(i.SetButtonId = 3)] = 'SetButtonId'),
    (i[(i.SetPanel = 4)] = 'SetPanel'),
    (i[(i.SetPanelId = 5)] = 'SetPanelId'),
    i
  ))(ZL || {})
let ek = {
    [0]: (i) => ({
      ...i,
      popoverState: kt(i.popoverState, { [0]: 1, [1]: 0 }),
    }),
    [1](i) {
      return i.popoverState === 1 ? i : { ...i, popoverState: 1 }
    },
    [2](i, o) {
      return i.button === o.button ? i : { ...i, button: o.button }
    },
    [3](i, o) {
      return i.buttonId === o.buttonId ? i : { ...i, buttonId: o.buttonId }
    },
    [4](i, o) {
      return i.panel === o.panel ? i : { ...i, panel: o.panel }
    },
    [5](i, o) {
      return i.panelId === o.panelId ? i : { ...i, panelId: o.panelId }
    },
  },
  Cy = R.exports.createContext(null)
Cy.displayName = 'PopoverContext'
function Nd(i) {
  let o = R.exports.useContext(Cy)
  if (o === null) {
    let s = new Error(`<${i} /> is missing a parent <Popover /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(s, Nd), s)
  }
  return o
}
let Ry = R.exports.createContext(null)
Ry.displayName = 'PopoverAPIContext'
function Ty(i) {
  let o = R.exports.useContext(Ry)
  if (o === null) {
    let s = new Error(`<${i} /> is missing a parent <Popover /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(s, Ty), s)
  }
  return o
}
let wy = R.exports.createContext(null)
wy.displayName = 'PopoverGroupContext'
function a1() {
  return R.exports.useContext(wy)
}
let Dy = R.exports.createContext(null)
Dy.displayName = 'PopoverPanelContext'
function tk() {
  return R.exports.useContext(Dy)
}
function nk(i, o) {
  return kt(o.type, ek, i, o)
}
let rk = 'div',
  ak = Qt(function (i, o) {
    var s
    let m = `headlessui-popover-button-${Xn()}`,
      d = `headlessui-popover-panel-${Xn()}`,
      y = R.exports.useRef(null),
      f = Zt(
        o,
        KS((ee) => {
          y.current = ee
        })
      ),
      N = R.exports.useReducer(nk, {
        popoverState: 1,
        button: null,
        buttonId: m,
        panel: null,
        panelId: d,
        beforePanelSentinel: R.exports.createRef(),
        afterPanelSentinel: R.exports.createRef(),
      }),
      [
        {
          popoverState: x,
          button: T,
          panel: E,
          beforePanelSentinel: M,
          afterPanelSentinel: B,
        },
        j,
      ] = N,
      z = Hi((s = y.current) != null ? s : T)
    R.exports.useEffect(() => j({ type: 3, buttonId: m }), [m, j]),
      R.exports.useEffect(() => j({ type: 5, panelId: d }), [d, j])
    let O = R.exports.useMemo(() => {
        if (!T || !E) return !1
        for (let ee of document.querySelectorAll('body > *'))
          if (
            Number(ee == null ? void 0 : ee.contains(T)) ^
            Number(ee == null ? void 0 : ee.contains(E))
          )
            return !0
        return !1
      }, [T, E]),
      de = R.exports.useMemo(
        () => ({ buttonId: m, panelId: d, close: () => j({ type: 1 }) }),
        [m, d, j]
      ),
      Y = a1(),
      X = Y == null ? void 0 : Y.registerPopover,
      ve = Ze(() => {
        var ee
        return (ee = Y == null ? void 0 : Y.isFocusWithinPopoverGroup()) != null
          ? ee
          : (z == null ? void 0 : z.activeElement) &&
              ((T == null ? void 0 : T.contains(z.activeElement)) ||
                (E == null ? void 0 : E.contains(z.activeElement)))
      })
    R.exports.useEffect(() => (X == null ? void 0 : X(de)), [X, de]),
      gd(
        z == null ? void 0 : z.defaultView,
        'focus',
        (ee) => {
          var Ce, Te, at, ge
          x === 0 &&
            (ve() ||
              !T ||
              !E ||
              ((Te = (Ce = M.current) == null ? void 0 : Ce.contains) != null &&
                Te.call(Ce, ee.target)) ||
              ((ge = (at = B.current) == null ? void 0 : at.contains) != null &&
                ge.call(at, ee.target)) ||
              j({ type: 1 }))
        },
        !0
      ),
      hy(
        [T, E],
        (ee, Ce) => {
          j({ type: 1 }),
            py(Ce, hd.Loose) || (ee.preventDefault(), T == null || T.focus())
        },
        x === 0
      )
    let ye = Ze((ee) => {
        j({ type: 1 })
        let Ce = (() =>
          ee
            ? ee instanceof HTMLElement
              ? ee
              : ee.current instanceof HTMLElement
              ? ee.current
              : T
            : T)()
        Ce == null || Ce.focus()
      }),
      Z = R.exports.useMemo(() => ({ close: ye, isPortalled: O }), [ye, O]),
      Ee = R.exports.useMemo(() => ({ open: x === 0, close: ye }), [x, ye]),
      ne = i,
      st = { ref: f }
    return $t.createElement(
      Cy.Provider,
      { value: N },
      $t.createElement(
        Ry.Provider,
        { value: Z },
        $t.createElement(
          gy,
          { value: kt(x, { [0]: hr.Open, [1]: hr.Closed }) },
          en({
            ourProps: st,
            theirProps: ne,
            slot: Ee,
            defaultTag: rk,
            name: 'Popover',
          })
        )
      )
    )
  }),
  ik = 'button',
  lk = Qt(function (i, o) {
    let [s, m] = Nd('Popover.Button'),
      { isPortalled: d } = Ty('Popover.Button'),
      y = R.exports.useRef(null),
      f = `headlessui-focus-sentinel-${Xn()}`,
      N = a1(),
      x = N == null ? void 0 : N.closeOthers,
      T = tk(),
      E = T === null ? !1 : T === s.panelId,
      M = Zt(y, o, E ? null : (ee) => m({ type: 2, button: ee })),
      B = Zt(y, o),
      j = Hi(y),
      z = Ze((ee) => {
        var Ce, Te, at
        if (E) {
          if (s.popoverState === 1) return
          switch (ee.key) {
            case zt.Space:
            case zt.Enter:
              ee.preventDefault(),
                (Te = (Ce = ee.target).click) == null || Te.call(Ce),
                m({ type: 1 }),
                (at = s.button) == null || at.focus()
              break
          }
        } else
          switch (ee.key) {
            case zt.Space:
            case zt.Enter:
              ee.preventDefault(),
                ee.stopPropagation(),
                s.popoverState === 1 && (x == null || x(s.buttonId)),
                m({ type: 0 })
              break
            case zt.Escape:
              if (s.popoverState !== 0)
                return x == null ? void 0 : x(s.buttonId)
              if (
                !y.current ||
                ((j == null ? void 0 : j.activeElement) &&
                  !y.current.contains(j.activeElement))
              )
                return
              ee.preventDefault(), ee.stopPropagation(), m({ type: 1 })
              break
          }
      }),
      O = Ze((ee) => {
        E || (ee.key === zt.Space && ee.preventDefault())
      }),
      de = Ze((ee) => {
        var Ce, Te
        yd(ee.currentTarget) ||
          i.disabled ||
          (E
            ? (m({ type: 1 }), (Ce = s.button) == null || Ce.focus())
            : (ee.preventDefault(),
              ee.stopPropagation(),
              s.popoverState === 1 && (x == null || x(s.buttonId)),
              m({ type: 0 }),
              (Te = s.button) == null || Te.focus()))
      }),
      Y = Ze((ee) => {
        ee.preventDefault(), ee.stopPropagation()
      }),
      X = s.popoverState === 0,
      ve = R.exports.useMemo(() => ({ open: X }), [X]),
      ye = qS(i, y),
      Z = i,
      Ee = E
        ? { ref: B, type: ye, onKeyDown: z, onClick: de }
        : {
            ref: M,
            id: s.buttonId,
            type: ye,
            'aria-expanded': i.disabled ? void 0 : s.popoverState === 0,
            'aria-controls': s.panel ? s.panelId : void 0,
            onKeyDown: z,
            onKeyUp: O,
            onClick: de,
            onMouseDown: Y,
          },
      ne = by(),
      st = Ze(() => {
        let ee = s.panel
        if (!ee) return
        function Ce() {
          kt(ne.current, {
            [ti.Forwards]: () => Za(ee, Sa.First),
            [ti.Backwards]: () => Za(ee, Sa.Last),
          })
        }
        Ce()
      })
    return h(
      Ca,
      {
        children: [
          en({
            ourProps: Ee,
            theirProps: Z,
            slot: ve,
            defaultTag: ik,
            name: 'Popover.Button',
          }),
          X &&
            !E &&
            d &&
            h(
              Ao,
              {
                id: f,
                features: Tl.Focusable,
                as: 'button',
                type: 'button',
                onFocus: st,
              },
              void 0,
              !1,
              { fileName: iy, lineNumber: 1, columnNumber: 6082 },
              this
            ),
        ],
      },
      void 0,
      !0
    )
  }),
  ok = 'div',
  uk = Ra.RenderStrategy | Ra.Static,
  sk = Qt(function (i, o) {
    let [{ popoverState: s }, m] = Nd('Popover.Overlay'),
      d = Zt(o),
      y = `headlessui-popover-overlay-${Xn()}`,
      f = Ho(),
      N = (() => (f !== null ? f === hr.Open : s === 0))(),
      x = Ze((E) => {
        if (yd(E.currentTarget)) return E.preventDefault()
        m({ type: 1 })
      }),
      T = R.exports.useMemo(() => ({ open: s === 0 }), [s])
    return en({
      ourProps: { ref: d, id: y, 'aria-hidden': !0, onClick: x },
      theirProps: i,
      slot: T,
      defaultTag: ok,
      features: uk,
      visible: N,
      name: 'Popover.Overlay',
    })
  }),
  ck = 'div',
  fk = Ra.RenderStrategy | Ra.Static,
  dk = Qt(function (i, o) {
    let { focus: s = !1, ...m } = i,
      [d, y] = Nd('Popover.Panel'),
      { close: f, isPortalled: N } = Ty('Popover.Panel'),
      x = `headlessui-focus-sentinel-before-${Xn()}`,
      T = `headlessui-focus-sentinel-after-${Xn()}`,
      E = R.exports.useRef(null),
      M = Zt(E, o, (Z) => {
        y({ type: 4, panel: Z })
      }),
      B = Hi(E),
      j = Ho(),
      z = (() => (j !== null ? j === hr.Open : d.popoverState === 0))(),
      O = Ze((Z) => {
        var Ee
        switch (Z.key) {
          case zt.Escape:
            if (
              d.popoverState !== 0 ||
              !E.current ||
              ((B == null ? void 0 : B.activeElement) &&
                !E.current.contains(B.activeElement))
            )
              return
            Z.preventDefault(),
              Z.stopPropagation(),
              y({ type: 1 }),
              (Ee = d.button) == null || Ee.focus()
            break
        }
      })
    R.exports.useEffect(() => {
      var Z
      i.static ||
        (d.popoverState === 1 &&
          ((Z = i.unmount) != null ? Z : !0) &&
          y({ type: 4, panel: null }))
    }, [d.popoverState, i.unmount, i.static, y]),
      R.exports.useEffect(() => {
        if (!s || d.popoverState !== 0 || !E.current) return
        let Z = B == null ? void 0 : B.activeElement
        E.current.contains(Z) || Za(E.current, Sa.First)
      }, [s, E, d.popoverState])
    let de = R.exports.useMemo(
        () => ({ open: d.popoverState === 0, close: f }),
        [d, f]
      ),
      Y = {
        ref: M,
        id: d.panelId,
        onKeyDown: O,
        onBlur:
          s && d.popoverState === 0
            ? (Z) => {
                var Ee, ne, st, ee, Ce
                let Te = Z.relatedTarget
                !Te ||
                  !E.current ||
                  ((Ee = E.current) != null && Ee.contains(Te)) ||
                  (y({ type: 1 }),
                  (((st =
                    (ne = d.beforePanelSentinel.current) == null
                      ? void 0
                      : ne.contains) == null
                    ? void 0
                    : st.call(ne, Te)) ||
                    ((Ce =
                      (ee = d.afterPanelSentinel.current) == null
                        ? void 0
                        : ee.contains) == null
                      ? void 0
                      : Ce.call(ee, Te))) &&
                    Te.focus({ preventScroll: !0 }))
              }
            : void 0,
        tabIndex: -1,
      },
      X = by(),
      ve = Ze(() => {
        let Z = E.current
        if (!Z) return
        function Ee() {
          kt(X.current, {
            [ti.Forwards]: () => {
              Za(Z, Sa.First)
            },
            [ti.Backwards]: () => {
              var ne
              ;(ne = d.button) == null || ne.focus({ preventScroll: !0 })
            },
          })
        }
        Ee()
      }),
      ye = Ze(() => {
        let Z = E.current
        if (!Z) return
        function Ee() {
          kt(X.current, {
            [ti.Forwards]: () => {
              var ne, st, ee
              if (!d.button) return
              let Ce = WS(),
                Te = Ce.indexOf(d.button),
                at = Ce.slice(0, Te + 1),
                ge = [...Ce.slice(Te + 1), ...at]
              for (let He of ge.slice())
                if (
                  ((st =
                    (ne = He == null ? void 0 : He.id) == null
                      ? void 0
                      : ne.startsWith) == null
                    ? void 0
                    : st.call(ne, 'headlessui-focus-sentinel-')) ||
                  ((ee = d.panel) == null ? void 0 : ee.contains(He))
                ) {
                  let ht = ge.indexOf(He)
                  ht !== -1 && ge.splice(ht, 1)
                }
              Za(ge, Sa.First, !1)
            },
            [ti.Backwards]: () => Za(Z, Sa.Last),
          })
        }
        Ee()
      })
    return $t.createElement(
      Dy.Provider,
      { value: d.panelId },
      z &&
        N &&
        h(
          Ao,
          {
            id: x,
            ref: d.beforePanelSentinel,
            features: Tl.Focusable,
            as: 'button',
            type: 'button',
            onFocus: ve,
          },
          void 0,
          !1,
          { fileName: iy, lineNumber: 1, columnNumber: 8645 },
          this
        ),
      en({
        ourProps: Y,
        theirProps: m,
        slot: de,
        defaultTag: ck,
        features: fk,
        visible: z,
        name: 'Popover.Panel',
      }),
      z &&
        N &&
        h(
          Ao,
          {
            id: T,
            ref: d.afterPanelSentinel,
            features: Tl.Focusable,
            as: 'button',
            type: 'button',
            onFocus: ye,
          },
          void 0,
          !1,
          { fileName: iy, lineNumber: 1, columnNumber: 8857 },
          this
        )
    )
  }),
  mk = 'div',
  vk = Qt(function (i, o) {
    let s = R.exports.useRef(null),
      m = Zt(s, o),
      [d, y] = R.exports.useState([]),
      f = Ze((z) => {
        y((O) => {
          let de = O.indexOf(z)
          if (de !== -1) {
            let Y = O.slice()
            return Y.splice(de, 1), Y
          }
          return O
        })
      }),
      N = Ze((z) => (y((O) => [...O, z]), () => f(z))),
      x = Ze(() => {
        var z
        let O = zo(s)
        if (!O) return !1
        let de = O.activeElement
        return (z = s.current) != null && z.contains(de)
          ? !0
          : d.some((Y) => {
              var X, ve
              return (
                ((X = O.getElementById(Y.buttonId)) == null
                  ? void 0
                  : X.contains(de)) ||
                ((ve = O.getElementById(Y.panelId)) == null
                  ? void 0
                  : ve.contains(de))
              )
            })
      }),
      T = Ze((z) => {
        for (let O of d) O.buttonId !== z && O.close()
      }),
      E = R.exports.useMemo(
        () => ({
          registerPopover: N,
          unregisterPopover: f,
          isFocusWithinPopoverGroup: x,
          closeOthers: T,
        }),
        [N, f, x, T]
      ),
      M = R.exports.useMemo(() => ({}), []),
      B = i,
      j = { ref: m }
    return $t.createElement(
      wy.Provider,
      { value: E },
      en({
        ourProps: j,
        theirProps: B,
        slot: M,
        defaultTag: mk,
        name: 'Popover.Group',
      })
    )
  }),
  As = Object.assign(ak, { Button: lk, Overlay: sk, Panel: dk, Group: vk })
function pk(i) {
  let o = { called: !1 }
  return (...s) => {
    if (!o.called) return (o.called = !0), i(...s)
  }
}
function Vh(i, ...o) {
  i && o.length > 0 && i.classList.add(...o)
}
function Ih(i, ...o) {
  i && o.length > 0 && i.classList.remove(...o)
}
var ly = ((i) => ((i.Ended = 'ended'), (i.Cancelled = 'cancelled'), i))(
  ly || {}
)
function hk(i, o) {
  let s = zi()
  if (!i) return s.dispose
  let { transitionDuration: m, transitionDelay: d } = getComputedStyle(i),
    [y, f] = [m, d].map((N) => {
      let [x = 0] = N.split(',')
        .filter(Boolean)
        .map((T) => (T.includes('ms') ? parseFloat(T) : parseFloat(T) * 1e3))
        .sort((T, E) => E - T)
      return x
    })
  if (y + f !== 0) {
    let N = []
    N.push(
      s.addEventListener(i, 'transitionrun', (x) => {
        x.target === x.currentTarget &&
          (N.splice(0).forEach((T) => T()),
          N.push(
            s.addEventListener(i, 'transitionend', (T) => {
              T.target === T.currentTarget &&
                (o('ended'), N.splice(0).forEach((E) => E()))
            }),
            s.addEventListener(i, 'transitioncancel', (T) => {
              T.target === T.currentTarget &&
                (o('cancelled'), N.splice(0).forEach((E) => E()))
            })
          ))
      })
    )
  } else o('ended')
  return s.add(() => o('cancelled')), s.dispose
}
function yk(i, o, s, m) {
  let d = s ? 'enter' : 'leave',
    y = zi(),
    f = m !== void 0 ? pk(m) : () => {},
    N = kt(d, { enter: () => o.enter, leave: () => o.leave }),
    x = kt(d, { enter: () => o.enterTo, leave: () => o.leaveTo }),
    T = kt(d, { enter: () => o.enterFrom, leave: () => o.leaveFrom })
  return (
    Ih(
      i,
      ...o.enter,
      ...o.enterTo,
      ...o.enterFrom,
      ...o.leave,
      ...o.leaveFrom,
      ...o.leaveTo,
      ...o.entered
    ),
    Vh(i, ...N, ...T),
    y.nextFrame(() => {
      Ih(i, ...T),
        Vh(i, ...x),
        hk(
          i,
          (E) => (E === 'ended' && (Ih(i, ...N), Vh(i, ...o.entered)), f(E))
        )
    }),
    y.dispose
  )
}
function gk({
  container: i,
  direction: o,
  classes: s,
  events: m,
  onStart: d,
  onStop: y,
}) {
  let f = Ny(),
    N = vy(),
    x = ji(o),
    T = Ze(() =>
      kt(x.current, {
        enter: () => m.current.beforeEnter(),
        leave: () => m.current.beforeLeave(),
        idle: () => {},
      })
    ),
    E = Ze(() =>
      kt(x.current, {
        enter: () => m.current.afterEnter(),
        leave: () => m.current.afterLeave(),
        idle: () => {},
      })
    )
  Kn(() => {
    let M = zi()
    N.add(M.dispose)
    let B = i.current
    if (!!B && x.current !== 'idle' && !!f.current)
      return (
        M.dispose(),
        T(),
        d.current(x.current),
        M.add(
          yk(B, s.current, x.current === 'enter', (j) => {
            M.dispose(),
              kt(j, {
                [ly.Ended]() {
                  E(), y.current(x.current)
                },
                [ly.Cancelled]: () => {},
              })
          })
        ),
        M.dispose
      )
  }, [o])
}
var fd =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@headlessui+react@1.6.6_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/transitions/transition.js'
function Nl(i = '') {
  return i.split(' ').filter((o) => o.trim().length > 1)
}
let xd = R.exports.createContext(null)
xd.displayName = 'TransitionContext'
var bk = ((i) => ((i.Visible = 'visible'), (i.Hidden = 'hidden'), i))(bk || {})
function Nk() {
  let i = R.exports.useContext(xd)
  if (i === null)
    throw new Error(
      'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
    )
  return i
}
function xk() {
  let i = R.exports.useContext(Sd)
  if (i === null)
    throw new Error(
      'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
    )
  return i
}
let Sd = R.exports.createContext(null)
Sd.displayName = 'NestingContext'
function Ed(i) {
  return 'children' in i
    ? Ed(i.children)
    : i.current.filter(({ state: o }) => o === 'visible').length > 0
}
function i1(i) {
  let o = ji(i),
    s = R.exports.useRef([]),
    m = Ny(),
    d = Ze((f, N = ei.Hidden) => {
      let x = s.current.findIndex(({ id: T }) => T === f)
      x !== -1 &&
        (kt(N, {
          [ei.Unmount]() {
            s.current.splice(x, 1)
          },
          [ei.Hidden]() {
            s.current[x].state = 'hidden'
          },
        }),
        xy(() => {
          var T
          !Ed(s) && m.current && ((T = o.current) == null || T.call(o))
        }))
    }),
    y = Ze((f) => {
      let N = s.current.find(({ id: x }) => x === f)
      return (
        N
          ? N.state !== 'visible' && (N.state = 'visible')
          : s.current.push({ id: f, state: 'visible' }),
        () => d(f, ei.Unmount)
      )
    })
  return R.exports.useMemo(
    () => ({ children: s, register: y, unregister: d }),
    [y, d, s]
  )
}
function Sk() {}
let Ek = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave']
function aS(i) {
  var o
  let s = {}
  for (let m of Ek) s[m] = (o = i[m]) != null ? o : Sk
  return s
}
function Ck(i) {
  let o = R.exports.useRef(aS(i))
  return (
    R.exports.useEffect(() => {
      o.current = aS(i)
    }, [i]),
    o
  )
}
let Rk = 'div',
  l1 = Ra.RenderStrategy,
  o1 = Qt(function (i, o) {
    let {
        beforeEnter: s,
        afterEnter: m,
        beforeLeave: d,
        afterLeave: y,
        enter: f,
        enterFrom: N,
        enterTo: x,
        entered: T,
        leave: E,
        leaveFrom: M,
        leaveTo: B,
        ...j
      } = i,
      z = R.exports.useRef(null),
      O = Zt(z, o),
      [de, Y] = R.exports.useState('visible'),
      X = j.unmount ? ei.Unmount : ei.Hidden,
      { show: ve, appear: ye, initial: Z } = Nk(),
      { register: Ee, unregister: ne } = xk(),
      st = R.exports.useRef(null),
      ee = Xn()
    R.exports.useEffect(() => {
      if (ee) return Ee(ee)
    }, [Ee, ee]),
      R.exports.useEffect(() => {
        if (X === ei.Hidden && !!ee) {
          if (ve && de !== 'visible') {
            Y('visible')
            return
          }
          kt(de, { hidden: () => ne(ee), visible: () => Ee(ee) })
        }
      }, [de, ee, Ee, ne, ve, X])
    let Ce = ji({
        enter: Nl(f),
        enterFrom: Nl(N),
        enterTo: Nl(x),
        entered: Nl(T),
        leave: Nl(E),
        leaveFrom: Nl(M),
        leaveTo: Nl(B),
      }),
      Te = Ck({ beforeEnter: s, afterEnter: m, beforeLeave: d, afterLeave: y }),
      at = jo()
    R.exports.useEffect(() => {
      if (at && de === 'visible' && z.current === null)
        throw new Error(
          'Did you forget to passthrough the `ref` to the actual DOM node?'
        )
    }, [z, de, at])
    let ge = Z && !ye,
      He = (() =>
        !at || ge || st.current === ve ? 'idle' : ve ? 'enter' : 'leave')(),
      ht = R.exports.useRef(!1),
      $e = i1(() => {
        ht.current || (Y('hidden'), ne(ee))
      })
    gk({
      container: z,
      classes: Ce,
      events: Te,
      direction: He,
      onStart: ji(() => {
        ht.current = !0
      }),
      onStop: ji((tn) => {
        ;(ht.current = !1), tn === 'leave' && !Ed($e) && (Y('hidden'), ne(ee))
      }),
    }),
      R.exports.useEffect(() => {
        !ge || (X === ei.Hidden ? (st.current = null) : (st.current = ve))
      }, [ve, ge, de])
    let ue = j,
      Fe = { ref: O }
    return h(
      Sd.Provider,
      {
        value: $e,
        children: $t.createElement(
          gy,
          { value: kt(de, { visible: hr.Open, hidden: hr.Closed }) },
          en({
            ourProps: Fe,
            theirProps: ue,
            defaultTag: Rk,
            features: l1,
            visible: de === 'visible',
            name: 'Transition.Child',
          })
        ),
      },
      void 0,
      !1,
      { fileName: fd, lineNumber: 1, columnNumber: 3477 },
      this
    )
  }),
  oy = Qt(function (i, o) {
    let { show: s, appear: m = !1, unmount: d, ...y } = i,
      f = R.exports.useRef(null),
      N = Zt(f, o)
    jo()
    let x = Ho()
    if (
      (s === void 0 &&
        x !== null &&
        (s = kt(x, { [hr.Open]: !0, [hr.Closed]: !1 })),
      ![!0, !1].includes(s))
    )
      throw new Error(
        'A <Transition /> is used but it is missing a `show={true | false}` prop.'
      )
    let [T, E] = R.exports.useState(s ? 'visible' : 'hidden'),
      M = i1(() => {
        E('hidden')
      }),
      [B, j] = R.exports.useState(!0),
      z = R.exports.useRef([s])
    Kn(() => {
      B !== !1 &&
        z.current[z.current.length - 1] !== s &&
        (z.current.push(s), j(!1))
    }, [z, s])
    let O = R.exports.useMemo(
      () => ({ show: s, appear: m, initial: B }),
      [s, m, B]
    )
    R.exports.useEffect(() => {
      if (s) E('visible')
      else if (!Ed(M)) E('hidden')
      else {
        let Y = f.current
        if (!Y) return
        let X = Y.getBoundingClientRect()
        X.x === 0 && X.y === 0 && X.width === 0 && X.height === 0 && E('hidden')
      }
    }, [s, M])
    let de = { unmount: d }
    return h(
      Sd.Provider,
      {
        value: M,
        children: h(
          xd.Provider,
          {
            value: O,
            children: en({
              ourProps: {
                ...de,
                as: R.exports.Fragment,
                children: $t.createElement(o1, { ref: N, ...de, ...y }),
              },
              theirProps: {},
              defaultTag: R.exports.Fragment,
              features: l1,
              visible: T === 'visible',
              name: 'Transition',
            }),
          },
          void 0,
          !1,
          { fileName: fd, lineNumber: 1, columnNumber: 4427 },
          this
        ),
      },
      void 0,
      !1,
      { fileName: fd, lineNumber: 1, columnNumber: 4386 },
      this
    )
  }),
  Tk = Qt(function (i, o) {
    let s = R.exports.useContext(xd) !== null,
      m = Ho() !== null
    return h(
      Ca,
      {
        children:
          !s && m
            ? h(
                oy,
                { ref: o, ...i },
                void 0,
                !1,
                { fileName: fd, lineNumber: 1, columnNumber: 4727 },
                this
              )
            : $t.createElement(o1, { ref: o, ...i }),
      },
      void 0,
      !1
    )
  }),
  Oo = Object.assign(oy, { Child: Tk, Root: oy })
var iS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/ChatAltIcon.js'
function wk(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          fillRule: 'evenodd',
          d: 'M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z',
          clipRule: 'evenodd',
        },
        void 0,
        !1,
        { fileName: iS, lineNumber: 10, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: iS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const Dk = R.exports.forwardRef(wk),
  lS = Dk
var oS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/CodeIcon.js'
function _k(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          fillRule: 'evenodd',
          d: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z',
          clipRule: 'evenodd',
        },
        void 0,
        !1,
        { fileName: oS, lineNumber: 10, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: oS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const Ok = R.exports.forwardRef(_k),
  Mk = Ok
var uS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/DotsVerticalIcon.js'
function Lk(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          d: 'M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z',
        },
        void 0,
        !1,
        { fileName: uS, lineNumber: 10, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: uS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const kk = R.exports.forwardRef(Lk),
  Ak = kk
var Yh =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/EyeIcon.js'
function Uk(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: [
        h(
          'path',
          { d: 'M10 12a2 2 0 100-4 2 2 0 000 4z' },
          void 0,
          !1,
          { fileName: Yh, lineNumber: 10, columnNumber: 27 },
          this
        ),
        h(
          'path',
          {
            fillRule: 'evenodd',
            d: 'M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z',
            clipRule: 'evenodd',
          },
          void 0,
          !1,
          { fileName: Yh, lineNumber: 12, columnNumber: 20 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: Yh, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const Fk = R.exports.forwardRef(Uk),
  jk = Fk
var sS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/FlagIcon.js'
function zk(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          fillRule: 'evenodd',
          d: 'M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z',
          clipRule: 'evenodd',
        },
        void 0,
        !1,
        { fileName: sS, lineNumber: 10, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: sS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const Hk = R.exports.forwardRef(zk),
  $k = Hk
var cS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/PlusSmIcon.js'
function Pk(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          fillRule: 'evenodd',
          d: 'M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z',
          clipRule: 'evenodd',
        },
        void 0,
        !1,
        { fileName: cS, lineNumber: 10, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: cS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const Bk = R.exports.forwardRef(Pk),
  Vk = Bk
var fS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/SearchIcon.js'
function Ik(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          fillRule: 'evenodd',
          d: 'M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z',
          clipRule: 'evenodd',
        },
        void 0,
        !1,
        { fileName: fS, lineNumber: 10, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: fS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const Yk = R.exports.forwardRef(Ik),
  u1 = Yk
var dS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/ShareIcon.js'
function Wk(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          d: 'M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z',
        },
        void 0,
        !1,
        { fileName: dS, lineNumber: 10, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: dS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const Gk = R.exports.forwardRef(Wk),
  qk = Gk
var mS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/StarIcon.js'
function Qk(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
        },
        void 0,
        !1,
        { fileName: mS, lineNumber: 10, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: mS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const Kk = R.exports.forwardRef(Qk),
  Xk = Kk
var vS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/ThumbUpIcon.js'
function Jk(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          d: 'M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z',
        },
        void 0,
        !1,
        { fileName: vS, lineNumber: 10, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: vS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const Zk = R.exports.forwardRef(Jk),
  eA = Zk
var pS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/BellIcon.js'
function tA(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 2,
          stroke: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
        },
        void 0,
        !1,
        { fileName: pS, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: pS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const nA = R.exports.forwardRef(tA),
  uy = nA
var hS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/CalendarIcon.js'
function rA(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 2,
          stroke: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        },
        void 0,
        !1,
        { fileName: hS, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: hS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const aA = R.exports.forwardRef(rA),
  iA = aA
var Wh =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/FireIcon.js'
function lA(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 2,
          stroke: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: [
        h(
          'path',
          {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
          },
          void 0,
          !1,
          { fileName: Wh, lineNumber: 12, columnNumber: 27 },
          this
        ),
        h(
          'path',
          {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z',
          },
          void 0,
          !1,
          { fileName: Wh, lineNumber: 16, columnNumber: 20 },
          this
        ),
      ],
    },
    void 0,
    !0,
    { fileName: Wh, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const oA = R.exports.forwardRef(lA),
  uA = oA
var yS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/HomeIcon.js'
function sA(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 2,
          stroke: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
        },
        void 0,
        !1,
        { fileName: yS, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: yS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const cA = R.exports.forwardRef(sA),
  s1 = cA
var gS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/MapIcon.js'
function fA(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 2,
          stroke: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
        },
        void 0,
        !1,
        { fileName: gS, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: gS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const dA = R.exports.forwardRef(fA),
  mA = dA
var bS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/MenuIcon.js'
function vA(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 2,
          stroke: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M4 6h16M4 12h16M4 18h16',
        },
        void 0,
        !1,
        { fileName: bS, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: bS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const pA = R.exports.forwardRef(vA),
  c1 = pA
var NS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/SearchCircleIcon.js'
function hA(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 2,
          stroke: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        void 0,
        !1,
        { fileName: NS, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: NS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const yA = R.exports.forwardRef(hA),
  gA = yA
var xS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/SpeakerphoneIcon.js'
function bA(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 2,
          stroke: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
        },
        void 0,
        !1,
        { fileName: xS, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: xS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const NA = R.exports.forwardRef(bA),
  xA = NA
var SS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/TrendingUpIcon.js'
function SA(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 2,
          stroke: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
        },
        void 0,
        !1,
        { fileName: SS, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: SS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const EA = R.exports.forwardRef(SA),
  CA = EA
var ES =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/UserGroupIcon.js'
function RA(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 2,
          stroke: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        },
        void 0,
        !1,
        { fileName: ES, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: ES, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const TA = R.exports.forwardRef(RA),
  f1 = TA
var CS =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/XIcon.js'
function wA(i, o) {
  return h(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 2,
          stroke: 'currentColor',
          'aria-hidden': 'true',
          ref: o,
        },
        i
      ),
      children: h(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M6 18L18 6M6 6l12 12',
        },
        void 0,
        !1,
        { fileName: CS, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: CS, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const DA = R.exports.forwardRef(wA),
  d1 = DA
var _ = '/Users/jeffsee/code/tinacms/packages/@tinacms/app/src/admin/list.tsx'
const rd = {
    name: 'Chelsea Hagon',
    email: 'chelsea.hagon@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  RS = [
    { name: 'Home', href: '#', icon: s1, current: !0 },
    { name: 'Popular', href: '#', icon: uA, current: !1 },
    { name: 'Communities', href: '#', icon: f1, current: !1 },
    { name: 'Trending', href: '#', icon: CA, current: !1 },
  ],
  TS = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ],
  _A = [
    { name: 'Movies', href: '#' },
    { name: 'Food', href: '#' },
    { name: 'Sports', href: '#' },
    { name: 'Animals', href: '#' },
    { name: 'Science', href: '#' },
    { name: 'Dinosaurs', href: '#' },
    { name: 'Talents', href: '#' },
    { name: 'Gaming', href: '#' },
  ],
  ad = [
    { name: 'Recent', href: '#', current: !0 },
    { name: 'Most Liked', href: '#', current: !1 },
    { name: 'Most Answers', href: '#', current: !1 },
  ],
  OA = [
    {
      id: '81614',
      likes: '29',
      replies: '11',
      views: '2.7k',
      author: {
        name: 'Dries Vincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        href: '#',
      },
      date: 'December 9 at 11:43 AM',
      datetime: '2020-12-09T11:43:00',
      href: '#',
      title: 'What would you have done differently if you ran Jurassic Park?',
      body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
    },
  ],
  MA = [
    {
      name: 'Leonard Krasner',
      handle: 'leonardkrasner',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  LA = [
    {
      id: 1,
      user: {
        name: 'Floyd Miles',
        imageUrl:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
      comments: 291,
    },
  ]
function xa(...i) {
  return i.filter(Boolean).join(' ')
}
function kA() {
  return h(
    Ca,
    {
      children: h(
        'div',
        {
          className: 'min-h-full',
          children: [
            h(
              As,
              {
                as: 'header',
                className: ({ open: i }) =>
                  xa(
                    i ? 'fixed inset-0 z-40 overflow-y-auto' : '',
                    'bg-white shadow-sm lg:static lg:overflow-y-visible'
                  ),
                children: ({ open: i }) =>
                  h(
                    Ca,
                    {
                      children: [
                        h(
                          'div',
                          {
                            className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
                            children: h(
                              'div',
                              {
                                className:
                                  'relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8',
                                children: [
                                  h(
                                    'div',
                                    {
                                      className:
                                        'flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2',
                                      children: h(
                                        'div',
                                        {
                                          className:
                                            'flex-shrink-0 flex items-center',
                                          children: h(
                                            'a',
                                            {
                                              href: '#',
                                              children: h(
                                                'img',
                                                {
                                                  className: 'block h-8 w-auto',
                                                  src: 'https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500',
                                                  alt: 'Workflow',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: _,
                                                  lineNumber: 162,
                                                  columnNumber: 25,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: _,
                                              lineNumber: 161,
                                              columnNumber: 23,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: _,
                                          lineNumber: 160,
                                          columnNumber: 21,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: _,
                                      lineNumber: 159,
                                      columnNumber: 19,
                                    },
                                    this
                                  ),
                                  h(
                                    'div',
                                    {
                                      className:
                                        'min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6',
                                      children: h(
                                        'div',
                                        {
                                          className:
                                            'flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0',
                                          children: h(
                                            'div',
                                            {
                                              className: 'w-full',
                                              children: [
                                                h(
                                                  'label',
                                                  {
                                                    htmlFor: 'search',
                                                    className: 'sr-only',
                                                    children: 'Search',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: _,
                                                    lineNumber: 173,
                                                    columnNumber: 25,
                                                  },
                                                  this
                                                ),
                                                h(
                                                  'div',
                                                  {
                                                    className: 'relative',
                                                    children: [
                                                      h(
                                                        'div',
                                                        {
                                                          className:
                                                            'pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center',
                                                          children: h(
                                                            u1,
                                                            {
                                                              className:
                                                                'h-5 w-5 text-gray-400',
                                                              'aria-hidden':
                                                                'true',
                                                            },
                                                            void 0,
                                                            !1,
                                                            {
                                                              fileName: _,
                                                              lineNumber: 178,
                                                              columnNumber: 29,
                                                            },
                                                            this
                                                          ),
                                                        },
                                                        void 0,
                                                        !1,
                                                        {
                                                          fileName: _,
                                                          lineNumber: 177,
                                                          columnNumber: 27,
                                                        },
                                                        this
                                                      ),
                                                      h(
                                                        'input',
                                                        {
                                                          id: 'search',
                                                          name: 'search',
                                                          className:
                                                            'block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm',
                                                          placeholder: 'Search',
                                                          type: 'search',
                                                        },
                                                        void 0,
                                                        !1,
                                                        {
                                                          fileName: _,
                                                          lineNumber: 183,
                                                          columnNumber: 27,
                                                        },
                                                        this
                                                      ),
                                                    ],
                                                  },
                                                  void 0,
                                                  !0,
                                                  {
                                                    fileName: _,
                                                    lineNumber: 176,
                                                    columnNumber: 25,
                                                  },
                                                  this
                                                ),
                                              ],
                                            },
                                            void 0,
                                            !0,
                                            {
                                              fileName: _,
                                              lineNumber: 172,
                                              columnNumber: 23,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: _,
                                          lineNumber: 171,
                                          columnNumber: 21,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: _,
                                      lineNumber: 170,
                                      columnNumber: 19,
                                    },
                                    this
                                  ),
                                  h(
                                    'div',
                                    {
                                      className:
                                        'flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden',
                                      children: h(
                                        As.Button,
                                        {
                                          className:
                                            '-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500',
                                          children: [
                                            h(
                                              'span',
                                              {
                                                className: 'sr-only',
                                                children: 'Open menu',
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: _,
                                                lineNumber: 197,
                                                columnNumber: 23,
                                              },
                                              this
                                            ),
                                            i
                                              ? h(
                                                  d1,
                                                  {
                                                    className: 'block h-6 w-6',
                                                    'aria-hidden': 'true',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: _,
                                                    lineNumber: 199,
                                                    columnNumber: 25,
                                                  },
                                                  this
                                                )
                                              : h(
                                                  c1,
                                                  {
                                                    className: 'block h-6 w-6',
                                                    'aria-hidden': 'true',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: _,
                                                    lineNumber: 201,
                                                    columnNumber: 25,
                                                  },
                                                  this
                                                ),
                                          ],
                                        },
                                        void 0,
                                        !0,
                                        {
                                          fileName: _,
                                          lineNumber: 196,
                                          columnNumber: 21,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: _,
                                      lineNumber: 194,
                                      columnNumber: 19,
                                    },
                                    this
                                  ),
                                  h(
                                    'div',
                                    {
                                      className:
                                        'hidden lg:flex lg:items-center lg:justify-end xl:col-span-4',
                                      children: [
                                        h(
                                          'a',
                                          {
                                            href: '#',
                                            className:
                                              'text-sm font-medium text-gray-900 hover:underline',
                                            children: 'Go Premium',
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: _,
                                            lineNumber: 209,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                        h(
                                          'a',
                                          {
                                            href: '#',
                                            className:
                                              'ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500',
                                            children: [
                                              h(
                                                'span',
                                                {
                                                  className: 'sr-only',
                                                  children:
                                                    'View notifications',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: _,
                                                  lineNumber: 219,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                              h(
                                                uy,
                                                {
                                                  className: 'h-6 w-6',
                                                  'aria-hidden': 'true',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: _,
                                                  lineNumber: 220,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName: _,
                                            lineNumber: 215,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                        h(
                                          Na,
                                          {
                                            as: 'div',
                                            className:
                                              'flex-shrink-0 relative ml-5',
                                            children: [
                                              h(
                                                'div',
                                                {
                                                  children: h(
                                                    Na.Button,
                                                    {
                                                      className:
                                                        'bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500',
                                                      children: [
                                                        h(
                                                          'span',
                                                          {
                                                            className:
                                                              'sr-only',
                                                            children:
                                                              'Open user menu',
                                                          },
                                                          void 0,
                                                          !1,
                                                          {
                                                            fileName: _,
                                                            lineNumber: 227,
                                                            columnNumber: 27,
                                                          },
                                                          this
                                                        ),
                                                        h(
                                                          'img',
                                                          {
                                                            className:
                                                              'h-8 w-8 rounded-full',
                                                            src: rd.imageUrl,
                                                            alt: '',
                                                          },
                                                          void 0,
                                                          !1,
                                                          {
                                                            fileName: _,
                                                            lineNumber: 228,
                                                            columnNumber: 27,
                                                          },
                                                          this
                                                        ),
                                                      ],
                                                    },
                                                    void 0,
                                                    !0,
                                                    {
                                                      fileName: _,
                                                      lineNumber: 226,
                                                      columnNumber: 25,
                                                    },
                                                    this
                                                  ),
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: _,
                                                  lineNumber: 225,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                              h(
                                                Oo,
                                                {
                                                  as: R.exports.Fragment,
                                                  enter:
                                                    'transition ease-out duration-100',
                                                  enterFrom:
                                                    'transform opacity-0 scale-95',
                                                  enterTo:
                                                    'transform opacity-100 scale-100',
                                                  leave:
                                                    'transition ease-in duration-75',
                                                  leaveFrom:
                                                    'transform opacity-100 scale-100',
                                                  leaveTo:
                                                    'transform opacity-0 scale-95',
                                                  children: h(
                                                    Na.Items,
                                                    {
                                                      className:
                                                        'origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none',
                                                      children: TS.map((o) =>
                                                        h(
                                                          Na.Item,
                                                          {
                                                            children: ({
                                                              active: s,
                                                            }) =>
                                                              h(
                                                                'a',
                                                                {
                                                                  href: o.href,
                                                                  className: xa(
                                                                    s
                                                                      ? 'bg-gray-100'
                                                                      : '',
                                                                    'block py-2 px-4 text-sm text-gray-700'
                                                                  ),
                                                                  children:
                                                                    o.name,
                                                                },
                                                                void 0,
                                                                !1,
                                                                {
                                                                  fileName: _,
                                                                  lineNumber: 248,
                                                                  columnNumber: 33,
                                                                },
                                                                this
                                                              ),
                                                          },
                                                          o.name,
                                                          !1,
                                                          {
                                                            fileName: _,
                                                            lineNumber: 246,
                                                            columnNumber: 29,
                                                          },
                                                          this
                                                        )
                                                      ),
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: _,
                                                      lineNumber: 244,
                                                      columnNumber: 25,
                                                    },
                                                    this
                                                  ),
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: _,
                                                  lineNumber: 235,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName: _,
                                            lineNumber: 224,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                        h(
                                          'a',
                                          {
                                            href: '#',
                                            className:
                                              'ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500',
                                            children: 'New Post',
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: _,
                                            lineNumber: 264,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    !0,
                                    {
                                      fileName: _,
                                      lineNumber: 208,
                                      columnNumber: 19,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              !0,
                              {
                                fileName: _,
                                lineNumber: 158,
                                columnNumber: 17,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: _, lineNumber: 157, columnNumber: 15 },
                          this
                        ),
                        h(
                          As.Panel,
                          {
                            as: 'nav',
                            className: 'lg:hidden',
                            'aria-label': 'Global',
                            children: [
                              h(
                                'div',
                                {
                                  className:
                                    'max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4',
                                  children: RS.map((o) =>
                                    h(
                                      'a',
                                      {
                                        href: o.href,
                                        'aria-current': o.current
                                          ? 'page'
                                          : void 0,
                                        className: xa(
                                          o.current
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'hover:bg-gray-50',
                                          'block rounded-md py-2 px-3 text-base font-medium'
                                        ),
                                        children: o.name,
                                      },
                                      o.name,
                                      !1,
                                      {
                                        fileName: _,
                                        lineNumber: 277,
                                        columnNumber: 21,
                                      },
                                      this
                                    )
                                  ),
                                },
                                void 0,
                                !1,
                                {
                                  fileName: _,
                                  lineNumber: 275,
                                  columnNumber: 17,
                                },
                                this
                              ),
                              h(
                                'div',
                                {
                                  className: 'border-t border-gray-200 pt-4',
                                  children: [
                                    h(
                                      'div',
                                      {
                                        className:
                                          'max-w-3xl mx-auto px-4 flex items-center sm:px-6',
                                        children: [
                                          h(
                                            'div',
                                            {
                                              className: 'flex-shrink-0',
                                              children: h(
                                                'img',
                                                {
                                                  className:
                                                    'h-10 w-10 rounded-full',
                                                  src: rd.imageUrl,
                                                  alt: '',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: _,
                                                  lineNumber: 295,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: _,
                                              lineNumber: 294,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          h(
                                            'div',
                                            {
                                              className: 'ml-3',
                                              children: [
                                                h(
                                                  'div',
                                                  {
                                                    className:
                                                      'text-base font-medium text-gray-800',
                                                    children: rd.name,
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: _,
                                                    lineNumber: 302,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                                h(
                                                  'div',
                                                  {
                                                    className:
                                                      'text-sm font-medium text-gray-500',
                                                    children: rd.email,
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: _,
                                                    lineNumber: 305,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              ],
                                            },
                                            void 0,
                                            !0,
                                            {
                                              fileName: _,
                                              lineNumber: 301,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          h(
                                            'button',
                                            {
                                              type: 'button',
                                              className:
                                                'ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500',
                                              children: [
                                                h(
                                                  'span',
                                                  {
                                                    className: 'sr-only',
                                                    children:
                                                      'View notifications',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: _,
                                                    lineNumber: 313,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                                h(
                                                  uy,
                                                  {
                                                    className: 'h-6 w-6',
                                                    'aria-hidden': 'true',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: _,
                                                    lineNumber: 314,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              ],
                                            },
                                            void 0,
                                            !0,
                                            {
                                              fileName: _,
                                              lineNumber: 309,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName: _,
                                        lineNumber: 293,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                    h(
                                      'div',
                                      {
                                        className:
                                          'mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4',
                                        children: TS.map((o) =>
                                          h(
                                            'a',
                                            {
                                              href: o.href,
                                              className:
                                                'block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900',
                                              children: o.name,
                                            },
                                            o.name,
                                            !1,
                                            {
                                              fileName: _,
                                              lineNumber: 319,
                                              columnNumber: 23,
                                            },
                                            this
                                          )
                                        ),
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: _,
                                        lineNumber: 317,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName: _,
                                  lineNumber: 292,
                                  columnNumber: 17,
                                },
                                this
                              ),
                              h(
                                'div',
                                {
                                  className:
                                    'mt-6 max-w-3xl mx-auto px-4 sm:px-6',
                                  children: [
                                    h(
                                      'a',
                                      {
                                        href: '#',
                                        className:
                                          'w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700',
                                        children: 'New Post',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: _,
                                        lineNumber: 331,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                    h(
                                      'div',
                                      {
                                        className: 'mt-6 flex justify-center',
                                        children: h(
                                          'a',
                                          {
                                            href: '#',
                                            className:
                                              'text-base font-medium text-gray-900 hover:underline',
                                            children: 'Go Premium',
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: _,
                                            lineNumber: 339,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: _,
                                        lineNumber: 338,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName: _,
                                  lineNumber: 330,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          { fileName: _, lineNumber: 274, columnNumber: 15 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0
                  ),
              },
              void 0,
              !1,
              { fileName: _, lineNumber: 146, columnNumber: 9 },
              this
            ),
            h(
              'div',
              {
                className: 'py-10',
                children: h(
                  'div',
                  {
                    className:
                      'max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8',
                    children: [
                      h(
                        'div',
                        {
                          className:
                            'hidden lg:block lg:col-span-3 xl:col-span-2',
                          children: h(
                            'nav',
                            {
                              'aria-label': 'Sidebar',
                              className:
                                'sticky top-4 divide-y divide-gray-300',
                              children: [
                                h(
                                  'div',
                                  {
                                    className: 'pb-8 space-y-1',
                                    children: RS.map((i) =>
                                      h(
                                        'a',
                                        {
                                          href: i.href,
                                          className: xa(
                                            i.current
                                              ? 'bg-gray-200 text-gray-900'
                                              : 'text-gray-600 hover:bg-gray-50',
                                            'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                                          ),
                                          'aria-current': i.current
                                            ? 'page'
                                            : void 0,
                                          children: [
                                            h(
                                              i.icon,
                                              {
                                                className: xa(
                                                  i.current
                                                    ? 'text-gray-500'
                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                  'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                                                ),
                                                'aria-hidden': 'true',
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: _,
                                                lineNumber: 372,
                                                columnNumber: 23,
                                              },
                                              this
                                            ),
                                            h(
                                              'span',
                                              {
                                                className: 'truncate',
                                                children: i.name,
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: _,
                                                lineNumber: 381,
                                                columnNumber: 23,
                                              },
                                              this
                                            ),
                                          ],
                                        },
                                        i.name,
                                        !0,
                                        {
                                          fileName: _,
                                          lineNumber: 361,
                                          columnNumber: 21,
                                        },
                                        this
                                      )
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: _,
                                    lineNumber: 359,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                                h(
                                  'div',
                                  {
                                    className: 'pt-10',
                                    children: [
                                      h(
                                        'p',
                                        {
                                          className:
                                            'px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider',
                                          id: 'communities-headline',
                                          children: 'My communities',
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: _,
                                          lineNumber: 386,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                      h(
                                        'div',
                                        {
                                          className: 'mt-3 space-y-2',
                                          'aria-labelledby':
                                            'communities-headline',
                                          children: _A.map((i) =>
                                            h(
                                              'a',
                                              {
                                                href: i.href,
                                                className:
                                                  'group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50',
                                                children: h(
                                                  'span',
                                                  {
                                                    className: 'truncate',
                                                    children: i.name,
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: _,
                                                    lineNumber: 402,
                                                    columnNumber: 25,
                                                  },
                                                  this
                                                ),
                                              },
                                              i.name,
                                              !1,
                                              {
                                                fileName: _,
                                                lineNumber: 397,
                                                columnNumber: 23,
                                              },
                                              this
                                            )
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: _,
                                          lineNumber: 392,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    ],
                                  },
                                  void 0,
                                  !0,
                                  {
                                    fileName: _,
                                    lineNumber: 385,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: _, lineNumber: 355, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: _, lineNumber: 354, columnNumber: 13 },
                        this
                      ),
                      h(
                        'main',
                        {
                          className: 'lg:col-span-9 xl:col-span-6',
                          children: [
                            h(
                              'div',
                              {
                                className: 'px-4 sm:px-0',
                                children: [
                                  h(
                                    'div',
                                    {
                                      className: 'sm:hidden',
                                      children: [
                                        h(
                                          'label',
                                          {
                                            htmlFor: 'question-tabs',
                                            className: 'sr-only',
                                            children: 'Select a tab',
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: _,
                                            lineNumber: 412,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                        h(
                                          'select',
                                          {
                                            id: 'question-tabs',
                                            className:
                                              'block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500',
                                            defaultValue: ad.find(
                                              (i) => i.current
                                            ).name,
                                            children: ad.map((i) =>
                                              h(
                                                'option',
                                                { children: i.name },
                                                i.name,
                                                !1,
                                                {
                                                  fileName: _,
                                                  lineNumber: 421,
                                                  columnNumber: 23,
                                                },
                                                this
                                              )
                                            ),
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: _,
                                            lineNumber: 415,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    !0,
                                    {
                                      fileName: _,
                                      lineNumber: 411,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                  h(
                                    'div',
                                    {
                                      className: 'hidden sm:block',
                                      children: h(
                                        'nav',
                                        {
                                          className:
                                            'relative z-0 rounded-lg shadow flex divide-x divide-gray-200',
                                          'aria-label': 'Tabs',
                                          children: ad.map((i, o) =>
                                            h(
                                              'a',
                                              {
                                                href: i.href,
                                                'aria-current': i.current
                                                  ? 'page'
                                                  : void 0,
                                                className: xa(
                                                  i.current
                                                    ? 'text-gray-900'
                                                    : 'text-gray-500 hover:text-gray-700',
                                                  o === 0 ? 'rounded-l-lg' : '',
                                                  o === ad.length - 1
                                                    ? 'rounded-r-lg'
                                                    : '',
                                                  'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                                                ),
                                                children: [
                                                  h(
                                                    'span',
                                                    { children: i.name },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: _,
                                                      lineNumber: 444,
                                                      columnNumber: 25,
                                                    },
                                                    this
                                                  ),
                                                  h(
                                                    'span',
                                                    {
                                                      'aria-hidden': 'true',
                                                      className: xa(
                                                        i.current
                                                          ? 'bg-rose-500'
                                                          : 'bg-transparent',
                                                        'absolute inset-x-0 bottom-0 h-0.5'
                                                      ),
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: _,
                                                      lineNumber: 445,
                                                      columnNumber: 25,
                                                    },
                                                    this
                                                  ),
                                                ],
                                              },
                                              i.name,
                                              !0,
                                              {
                                                fileName: _,
                                                lineNumber: 431,
                                                columnNumber: 23,
                                              },
                                              this
                                            )
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: _,
                                          lineNumber: 426,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: _,
                                      lineNumber: 425,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              !0,
                              {
                                fileName: _,
                                lineNumber: 410,
                                columnNumber: 15,
                              },
                              this
                            ),
                            h(
                              'div',
                              {
                                className: 'mt-4',
                                children: [
                                  h(
                                    'h1',
                                    {
                                      className: 'sr-only',
                                      children: 'Recent questions',
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: _,
                                      lineNumber: 458,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                  h(
                                    'ul',
                                    {
                                      role: 'list',
                                      className: 'space-y-4',
                                      children: OA.map((i) =>
                                        h(
                                          'li',
                                          {
                                            className:
                                              'bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg',
                                            children: h(
                                              'article',
                                              {
                                                'aria-labelledby':
                                                  'question-title-' + i.id,
                                                children: [
                                                  h(
                                                    'div',
                                                    {
                                                      children: [
                                                        h(
                                                          'div',
                                                          {
                                                            className:
                                                              'flex space-x-3',
                                                            children: [
                                                              h(
                                                                'div',
                                                                {
                                                                  className:
                                                                    'flex-shrink-0',
                                                                  children: h(
                                                                    'img',
                                                                    {
                                                                      className:
                                                                        'h-10 w-10 rounded-full',
                                                                      src: i
                                                                        .author
                                                                        .imageUrl,
                                                                      alt: '',
                                                                    },
                                                                    void 0,
                                                                    !1,
                                                                    {
                                                                      fileName:
                                                                        _,
                                                                      lineNumber: 471,
                                                                      columnNumber: 31,
                                                                    },
                                                                    this
                                                                  ),
                                                                },
                                                                void 0,
                                                                !1,
                                                                {
                                                                  fileName: _,
                                                                  lineNumber: 470,
                                                                  columnNumber: 29,
                                                                },
                                                                this
                                                              ),
                                                              h(
                                                                'div',
                                                                {
                                                                  className:
                                                                    'min-w-0 flex-1',
                                                                  children: [
                                                                    h(
                                                                      'p',
                                                                      {
                                                                        className:
                                                                          'text-sm font-medium text-gray-900',
                                                                        children:
                                                                          h(
                                                                            'a',
                                                                            {
                                                                              href: i
                                                                                .author
                                                                                .href,
                                                                              className:
                                                                                'hover:underline',
                                                                              children:
                                                                                i
                                                                                  .author
                                                                                  .name,
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 479,
                                                                              columnNumber: 33,
                                                                            },
                                                                            this
                                                                          ),
                                                                      },
                                                                      void 0,
                                                                      !1,
                                                                      {
                                                                        fileName:
                                                                          _,
                                                                        lineNumber: 478,
                                                                        columnNumber: 31,
                                                                      },
                                                                      this
                                                                    ),
                                                                    h(
                                                                      'p',
                                                                      {
                                                                        className:
                                                                          'text-sm text-gray-500',
                                                                        children:
                                                                          h(
                                                                            'a',
                                                                            {
                                                                              href: i.href,
                                                                              className:
                                                                                'hover:underline',
                                                                              children:
                                                                                h(
                                                                                  'time',
                                                                                  {
                                                                                    dateTime:
                                                                                      i.datetime,
                                                                                    children:
                                                                                      i.date,
                                                                                  },
                                                                                  void 0,
                                                                                  !1,
                                                                                  {
                                                                                    fileName:
                                                                                      _,
                                                                                    lineNumber: 491,
                                                                                    columnNumber: 35,
                                                                                  },
                                                                                  this
                                                                                ),
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 487,
                                                                              columnNumber: 33,
                                                                            },
                                                                            this
                                                                          ),
                                                                      },
                                                                      void 0,
                                                                      !1,
                                                                      {
                                                                        fileName:
                                                                          _,
                                                                        lineNumber: 486,
                                                                        columnNumber: 31,
                                                                      },
                                                                      this
                                                                    ),
                                                                  ],
                                                                },
                                                                void 0,
                                                                !0,
                                                                {
                                                                  fileName: _,
                                                                  lineNumber: 477,
                                                                  columnNumber: 29,
                                                                },
                                                                this
                                                              ),
                                                              h(
                                                                'div',
                                                                {
                                                                  className:
                                                                    'flex-shrink-0 self-center flex',
                                                                  children: h(
                                                                    Na,
                                                                    {
                                                                      as: 'div',
                                                                      className:
                                                                        'relative inline-block text-left',
                                                                      children:
                                                                        [
                                                                          h(
                                                                            'div',
                                                                            {
                                                                              children:
                                                                                h(
                                                                                  Na.Button,
                                                                                  {
                                                                                    className:
                                                                                      '-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600',
                                                                                    children:
                                                                                      [
                                                                                        h(
                                                                                          'span',
                                                                                          {
                                                                                            className:
                                                                                              'sr-only',
                                                                                            children:
                                                                                              'Open options',
                                                                                          },
                                                                                          void 0,
                                                                                          !1,
                                                                                          {
                                                                                            fileName:
                                                                                              _,
                                                                                            lineNumber: 504,
                                                                                            columnNumber: 37,
                                                                                          },
                                                                                          this
                                                                                        ),
                                                                                        h(
                                                                                          Ak,
                                                                                          {
                                                                                            className:
                                                                                              'h-5 w-5',
                                                                                            'aria-hidden':
                                                                                              'true',
                                                                                          },
                                                                                          void 0,
                                                                                          !1,
                                                                                          {
                                                                                            fileName:
                                                                                              _,
                                                                                            lineNumber: 507,
                                                                                            columnNumber: 37,
                                                                                          },
                                                                                          this
                                                                                        ),
                                                                                      ],
                                                                                  },
                                                                                  void 0,
                                                                                  !0,
                                                                                  {
                                                                                    fileName:
                                                                                      _,
                                                                                    lineNumber: 503,
                                                                                    columnNumber: 35,
                                                                                  },
                                                                                  this
                                                                                ),
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 502,
                                                                              columnNumber: 33,
                                                                            },
                                                                            this
                                                                          ),
                                                                          h(
                                                                            Oo,
                                                                            {
                                                                              as: R
                                                                                .exports
                                                                                .Fragment,
                                                                              enter:
                                                                                'transition ease-out duration-100',
                                                                              enterFrom:
                                                                                'transform opacity-0 scale-95',
                                                                              enterTo:
                                                                                'transform opacity-100 scale-100',
                                                                              leave:
                                                                                'transition ease-in duration-75',
                                                                              leaveFrom:
                                                                                'transform opacity-100 scale-100',
                                                                              leaveTo:
                                                                                'transform opacity-0 scale-95',
                                                                              children:
                                                                                h(
                                                                                  Na.Items,
                                                                                  {
                                                                                    className:
                                                                                      'origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none',
                                                                                    children:
                                                                                      h(
                                                                                        'div',
                                                                                        {
                                                                                          className:
                                                                                            'py-1',
                                                                                          children:
                                                                                            [
                                                                                              h(
                                                                                                Na.Item,
                                                                                                {
                                                                                                  children:
                                                                                                    ({
                                                                                                      active:
                                                                                                        o,
                                                                                                    }) =>
                                                                                                      h(
                                                                                                        'a',
                                                                                                        {
                                                                                                          href: '#',
                                                                                                          className:
                                                                                                            xa(
                                                                                                              o
                                                                                                                ? 'bg-gray-100 text-gray-900'
                                                                                                                : 'text-gray-700',
                                                                                                              'flex px-4 py-2 text-sm'
                                                                                                            ),
                                                                                                          children:
                                                                                                            [
                                                                                                              h(
                                                                                                                Xk,
                                                                                                                {
                                                                                                                  className:
                                                                                                                    'mr-3 h-5 w-5 text-gray-400',
                                                                                                                  'aria-hidden':
                                                                                                                    'true',
                                                                                                                },
                                                                                                                void 0,
                                                                                                                !1,
                                                                                                                {
                                                                                                                  fileName:
                                                                                                                    _,
                                                                                                                  lineNumber: 536,
                                                                                                                  columnNumber: 45,
                                                                                                                },
                                                                                                                this
                                                                                                              ),
                                                                                                              h(
                                                                                                                'span',
                                                                                                                {
                                                                                                                  children:
                                                                                                                    'Add to favorites',
                                                                                                                },
                                                                                                                void 0,
                                                                                                                !1,
                                                                                                                {
                                                                                                                  fileName:
                                                                                                                    _,
                                                                                                                  lineNumber: 540,
                                                                                                                  columnNumber: 45,
                                                                                                                },
                                                                                                                this
                                                                                                              ),
                                                                                                            ],
                                                                                                        },
                                                                                                        void 0,
                                                                                                        !0,
                                                                                                        {
                                                                                                          fileName:
                                                                                                            _,
                                                                                                          lineNumber: 527,
                                                                                                          columnNumber: 43,
                                                                                                        },
                                                                                                        this
                                                                                                      ),
                                                                                                },
                                                                                                void 0,
                                                                                                !1,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _,
                                                                                                  lineNumber: 525,
                                                                                                  columnNumber: 39,
                                                                                                },
                                                                                                this
                                                                                              ),
                                                                                              h(
                                                                                                Na.Item,
                                                                                                {
                                                                                                  children:
                                                                                                    ({
                                                                                                      active:
                                                                                                        o,
                                                                                                    }) =>
                                                                                                      h(
                                                                                                        'a',
                                                                                                        {
                                                                                                          href: '#',
                                                                                                          className:
                                                                                                            xa(
                                                                                                              o
                                                                                                                ? 'bg-gray-100 text-gray-900'
                                                                                                                : 'text-gray-700',
                                                                                                              'flex px-4 py-2 text-sm'
                                                                                                            ),
                                                                                                          children:
                                                                                                            [
                                                                                                              h(
                                                                                                                Mk,
                                                                                                                {
                                                                                                                  className:
                                                                                                                    'mr-3 h-5 w-5 text-gray-400',
                                                                                                                  'aria-hidden':
                                                                                                                    'true',
                                                                                                                },
                                                                                                                void 0,
                                                                                                                !1,
                                                                                                                {
                                                                                                                  fileName:
                                                                                                                    _,
                                                                                                                  lineNumber: 555,
                                                                                                                  columnNumber: 45,
                                                                                                                },
                                                                                                                this
                                                                                                              ),
                                                                                                              h(
                                                                                                                'span',
                                                                                                                {
                                                                                                                  children:
                                                                                                                    'Embed',
                                                                                                                },
                                                                                                                void 0,
                                                                                                                !1,
                                                                                                                {
                                                                                                                  fileName:
                                                                                                                    _,
                                                                                                                  lineNumber: 559,
                                                                                                                  columnNumber: 45,
                                                                                                                },
                                                                                                                this
                                                                                                              ),
                                                                                                            ],
                                                                                                        },
                                                                                                        void 0,
                                                                                                        !0,
                                                                                                        {
                                                                                                          fileName:
                                                                                                            _,
                                                                                                          lineNumber: 546,
                                                                                                          columnNumber: 43,
                                                                                                        },
                                                                                                        this
                                                                                                      ),
                                                                                                },
                                                                                                void 0,
                                                                                                !1,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _,
                                                                                                  lineNumber: 544,
                                                                                                  columnNumber: 39,
                                                                                                },
                                                                                                this
                                                                                              ),
                                                                                              h(
                                                                                                Na.Item,
                                                                                                {
                                                                                                  children:
                                                                                                    ({
                                                                                                      active:
                                                                                                        o,
                                                                                                    }) =>
                                                                                                      h(
                                                                                                        'a',
                                                                                                        {
                                                                                                          href: '#',
                                                                                                          className:
                                                                                                            xa(
                                                                                                              o
                                                                                                                ? 'bg-gray-100 text-gray-900'
                                                                                                                : 'text-gray-700',
                                                                                                              'flex px-4 py-2 text-sm'
                                                                                                            ),
                                                                                                          children:
                                                                                                            [
                                                                                                              h(
                                                                                                                $k,
                                                                                                                {
                                                                                                                  className:
                                                                                                                    'mr-3 h-5 w-5 text-gray-400',
                                                                                                                  'aria-hidden':
                                                                                                                    'true',
                                                                                                                },
                                                                                                                void 0,
                                                                                                                !1,
                                                                                                                {
                                                                                                                  fileName:
                                                                                                                    _,
                                                                                                                  lineNumber: 574,
                                                                                                                  columnNumber: 45,
                                                                                                                },
                                                                                                                this
                                                                                                              ),
                                                                                                              h(
                                                                                                                'span',
                                                                                                                {
                                                                                                                  children:
                                                                                                                    'Report content',
                                                                                                                },
                                                                                                                void 0,
                                                                                                                !1,
                                                                                                                {
                                                                                                                  fileName:
                                                                                                                    _,
                                                                                                                  lineNumber: 578,
                                                                                                                  columnNumber: 45,
                                                                                                                },
                                                                                                                this
                                                                                                              ),
                                                                                                            ],
                                                                                                        },
                                                                                                        void 0,
                                                                                                        !0,
                                                                                                        {
                                                                                                          fileName:
                                                                                                            _,
                                                                                                          lineNumber: 565,
                                                                                                          columnNumber: 43,
                                                                                                        },
                                                                                                        this
                                                                                                      ),
                                                                                                },
                                                                                                void 0,
                                                                                                !1,
                                                                                                {
                                                                                                  fileName:
                                                                                                    _,
                                                                                                  lineNumber: 563,
                                                                                                  columnNumber: 39,
                                                                                                },
                                                                                                this
                                                                                              ),
                                                                                            ],
                                                                                        },
                                                                                        void 0,
                                                                                        !0,
                                                                                        {
                                                                                          fileName:
                                                                                            _,
                                                                                          lineNumber: 524,
                                                                                          columnNumber: 37,
                                                                                        },
                                                                                        this
                                                                                      ),
                                                                                  },
                                                                                  void 0,
                                                                                  !1,
                                                                                  {
                                                                                    fileName:
                                                                                      _,
                                                                                    lineNumber: 523,
                                                                                    columnNumber: 35,
                                                                                  },
                                                                                  this
                                                                                ),
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 514,
                                                                              columnNumber: 33,
                                                                            },
                                                                            this
                                                                          ),
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    !0,
                                                                    {
                                                                      fileName:
                                                                        _,
                                                                      lineNumber: 498,
                                                                      columnNumber: 31,
                                                                    },
                                                                    this
                                                                  ),
                                                                },
                                                                void 0,
                                                                !1,
                                                                {
                                                                  fileName: _,
                                                                  lineNumber: 497,
                                                                  columnNumber: 29,
                                                                },
                                                                this
                                                              ),
                                                            ],
                                                          },
                                                          void 0,
                                                          !0,
                                                          {
                                                            fileName: _,
                                                            lineNumber: 469,
                                                            columnNumber: 27,
                                                          },
                                                          this
                                                        ),
                                                        h(
                                                          'h2',
                                                          {
                                                            id:
                                                              'question-title-' +
                                                              i.id,
                                                            className:
                                                              'mt-4 text-base font-medium text-gray-900',
                                                            children: i.title,
                                                          },
                                                          void 0,
                                                          !1,
                                                          {
                                                            fileName: _,
                                                            lineNumber: 588,
                                                            columnNumber: 27,
                                                          },
                                                          this
                                                        ),
                                                      ],
                                                    },
                                                    void 0,
                                                    !0,
                                                    {
                                                      fileName: _,
                                                      lineNumber: 468,
                                                      columnNumber: 25,
                                                    },
                                                    this
                                                  ),
                                                  h(
                                                    'div',
                                                    {
                                                      className:
                                                        'mt-2 text-sm text-gray-700 space-y-4',
                                                      dangerouslySetInnerHTML: {
                                                        __html: i.body,
                                                      },
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: _,
                                                      lineNumber: 595,
                                                      columnNumber: 25,
                                                    },
                                                    this
                                                  ),
                                                  h(
                                                    'div',
                                                    {
                                                      className:
                                                        'mt-6 flex justify-between space-x-8',
                                                      children: [
                                                        h(
                                                          'div',
                                                          {
                                                            className:
                                                              'flex space-x-6',
                                                            children: [
                                                              h(
                                                                'span',
                                                                {
                                                                  className:
                                                                    'inline-flex items-center text-sm',
                                                                  children: h(
                                                                    'button',
                                                                    {
                                                                      type: 'button',
                                                                      className:
                                                                        'inline-flex space-x-2 text-gray-400 hover:text-gray-500',
                                                                      children:
                                                                        [
                                                                          h(
                                                                            eA,
                                                                            {
                                                                              className:
                                                                                'h-5 w-5',
                                                                              'aria-hidden':
                                                                                'true',
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 606,
                                                                              columnNumber: 33,
                                                                            },
                                                                            this
                                                                          ),
                                                                          h(
                                                                            'span',
                                                                            {
                                                                              className:
                                                                                'font-medium text-gray-900',
                                                                              children:
                                                                                i.likes,
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 610,
                                                                              columnNumber: 33,
                                                                            },
                                                                            this
                                                                          ),
                                                                          h(
                                                                            'span',
                                                                            {
                                                                              className:
                                                                                'sr-only',
                                                                              children:
                                                                                'likes',
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 613,
                                                                              columnNumber: 33,
                                                                            },
                                                                            this
                                                                          ),
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    !0,
                                                                    {
                                                                      fileName:
                                                                        _,
                                                                      lineNumber: 602,
                                                                      columnNumber: 31,
                                                                    },
                                                                    this
                                                                  ),
                                                                },
                                                                void 0,
                                                                !1,
                                                                {
                                                                  fileName: _,
                                                                  lineNumber: 601,
                                                                  columnNumber: 29,
                                                                },
                                                                this
                                                              ),
                                                              h(
                                                                'span',
                                                                {
                                                                  className:
                                                                    'inline-flex items-center text-sm',
                                                                  children: h(
                                                                    'button',
                                                                    {
                                                                      type: 'button',
                                                                      className:
                                                                        'inline-flex space-x-2 text-gray-400 hover:text-gray-500',
                                                                      children:
                                                                        [
                                                                          h(
                                                                            lS,
                                                                            {
                                                                              className:
                                                                                'h-5 w-5',
                                                                              'aria-hidden':
                                                                                'true',
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 621,
                                                                              columnNumber: 33,
                                                                            },
                                                                            this
                                                                          ),
                                                                          h(
                                                                            'span',
                                                                            {
                                                                              className:
                                                                                'font-medium text-gray-900',
                                                                              children:
                                                                                i.replies,
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 625,
                                                                              columnNumber: 33,
                                                                            },
                                                                            this
                                                                          ),
                                                                          h(
                                                                            'span',
                                                                            {
                                                                              className:
                                                                                'sr-only',
                                                                              children:
                                                                                'replies',
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 628,
                                                                              columnNumber: 33,
                                                                            },
                                                                            this
                                                                          ),
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    !0,
                                                                    {
                                                                      fileName:
                                                                        _,
                                                                      lineNumber: 617,
                                                                      columnNumber: 31,
                                                                    },
                                                                    this
                                                                  ),
                                                                },
                                                                void 0,
                                                                !1,
                                                                {
                                                                  fileName: _,
                                                                  lineNumber: 616,
                                                                  columnNumber: 29,
                                                                },
                                                                this
                                                              ),
                                                              h(
                                                                'span',
                                                                {
                                                                  className:
                                                                    'inline-flex items-center text-sm',
                                                                  children: h(
                                                                    'button',
                                                                    {
                                                                      type: 'button',
                                                                      className:
                                                                        'inline-flex space-x-2 text-gray-400 hover:text-gray-500',
                                                                      children:
                                                                        [
                                                                          h(
                                                                            jk,
                                                                            {
                                                                              className:
                                                                                'h-5 w-5',
                                                                              'aria-hidden':
                                                                                'true',
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 636,
                                                                              columnNumber: 33,
                                                                            },
                                                                            this
                                                                          ),
                                                                          h(
                                                                            'span',
                                                                            {
                                                                              className:
                                                                                'font-medium text-gray-900',
                                                                              children:
                                                                                i.views,
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 640,
                                                                              columnNumber: 33,
                                                                            },
                                                                            this
                                                                          ),
                                                                          h(
                                                                            'span',
                                                                            {
                                                                              className:
                                                                                'sr-only',
                                                                              children:
                                                                                'views',
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 643,
                                                                              columnNumber: 33,
                                                                            },
                                                                            this
                                                                          ),
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    !0,
                                                                    {
                                                                      fileName:
                                                                        _,
                                                                      lineNumber: 632,
                                                                      columnNumber: 31,
                                                                    },
                                                                    this
                                                                  ),
                                                                },
                                                                void 0,
                                                                !1,
                                                                {
                                                                  fileName: _,
                                                                  lineNumber: 631,
                                                                  columnNumber: 29,
                                                                },
                                                                this
                                                              ),
                                                            ],
                                                          },
                                                          void 0,
                                                          !0,
                                                          {
                                                            fileName: _,
                                                            lineNumber: 600,
                                                            columnNumber: 27,
                                                          },
                                                          this
                                                        ),
                                                        h(
                                                          'div',
                                                          {
                                                            className:
                                                              'flex text-sm',
                                                            children: h(
                                                              'span',
                                                              {
                                                                className:
                                                                  'inline-flex items-center text-sm',
                                                                children: h(
                                                                  'button',
                                                                  {
                                                                    type: 'button',
                                                                    className:
                                                                      'inline-flex space-x-2 text-gray-400 hover:text-gray-500',
                                                                    children: [
                                                                      h(
                                                                        qk,
                                                                        {
                                                                          className:
                                                                            'h-5 w-5',
                                                                          'aria-hidden':
                                                                            'true',
                                                                        },
                                                                        void 0,
                                                                        !1,
                                                                        {
                                                                          fileName:
                                                                            _,
                                                                          lineNumber: 653,
                                                                          columnNumber: 33,
                                                                        },
                                                                        this
                                                                      ),
                                                                      h(
                                                                        'span',
                                                                        {
                                                                          className:
                                                                            'font-medium text-gray-900',
                                                                          children:
                                                                            'Share',
                                                                        },
                                                                        void 0,
                                                                        !1,
                                                                        {
                                                                          fileName:
                                                                            _,
                                                                          lineNumber: 657,
                                                                          columnNumber: 33,
                                                                        },
                                                                        this
                                                                      ),
                                                                    ],
                                                                  },
                                                                  void 0,
                                                                  !0,
                                                                  {
                                                                    fileName: _,
                                                                    lineNumber: 649,
                                                                    columnNumber: 31,
                                                                  },
                                                                  this
                                                                ),
                                                              },
                                                              void 0,
                                                              !1,
                                                              {
                                                                fileName: _,
                                                                lineNumber: 648,
                                                                columnNumber: 29,
                                                              },
                                                              this
                                                            ),
                                                          },
                                                          void 0,
                                                          !1,
                                                          {
                                                            fileName: _,
                                                            lineNumber: 647,
                                                            columnNumber: 27,
                                                          },
                                                          this
                                                        ),
                                                      ],
                                                    },
                                                    void 0,
                                                    !0,
                                                    {
                                                      fileName: _,
                                                      lineNumber: 599,
                                                      columnNumber: 25,
                                                    },
                                                    this
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              !0,
                                              {
                                                fileName: _,
                                                lineNumber: 465,
                                                columnNumber: 23,
                                              },
                                              this
                                            ),
                                          },
                                          i.id,
                                          !1,
                                          {
                                            fileName: _,
                                            lineNumber: 461,
                                            columnNumber: 21,
                                          },
                                          this
                                        )
                                      ),
                                    },
                                    void 0,
                                    !1,
                                    {
                                      fileName: _,
                                      lineNumber: 459,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              !0,
                              {
                                fileName: _,
                                lineNumber: 457,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: _, lineNumber: 409, columnNumber: 13 },
                        this
                      ),
                      h(
                        'aside',
                        {
                          className: 'hidden xl:block xl:col-span-4',
                          children: h(
                            'div',
                            {
                              className: 'sticky top-4 space-y-4',
                              children: [
                                h(
                                  'section',
                                  {
                                    'aria-labelledby': 'who-to-follow-heading',
                                    children: h(
                                      'div',
                                      {
                                        className: 'bg-white rounded-lg shadow',
                                        children: h(
                                          'div',
                                          {
                                            className: 'p-6',
                                            children: [
                                              h(
                                                'h2',
                                                {
                                                  id: 'who-to-follow-heading',
                                                  className:
                                                    'text-base font-medium text-gray-900',
                                                  children: 'Who to follow',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: _,
                                                  lineNumber: 675,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                              h(
                                                'div',
                                                {
                                                  className: 'mt-6 flow-root',
                                                  children: h(
                                                    'ul',
                                                    {
                                                      role: 'list',
                                                      className:
                                                        '-my-4 divide-y divide-gray-200',
                                                      children: MA.map((i) =>
                                                        h(
                                                          'li',
                                                          {
                                                            className:
                                                              'flex items-center py-4 space-x-3',
                                                            children: [
                                                              h(
                                                                'div',
                                                                {
                                                                  className:
                                                                    'flex-shrink-0',
                                                                  children: h(
                                                                    'img',
                                                                    {
                                                                      className:
                                                                        'h-8 w-8 rounded-full',
                                                                      src: i.imageUrl,
                                                                      alt: '',
                                                                    },
                                                                    void 0,
                                                                    !1,
                                                                    {
                                                                      fileName:
                                                                        _,
                                                                      lineNumber: 692,
                                                                      columnNumber: 33,
                                                                    },
                                                                    this
                                                                  ),
                                                                },
                                                                void 0,
                                                                !1,
                                                                {
                                                                  fileName: _,
                                                                  lineNumber: 691,
                                                                  columnNumber: 31,
                                                                },
                                                                this
                                                              ),
                                                              h(
                                                                'div',
                                                                {
                                                                  className:
                                                                    'min-w-0 flex-1',
                                                                  children: [
                                                                    h(
                                                                      'p',
                                                                      {
                                                                        className:
                                                                          'text-sm font-medium text-gray-900',
                                                                        children:
                                                                          h(
                                                                            'a',
                                                                            {
                                                                              href: i.href,
                                                                              children:
                                                                                i.name,
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 700,
                                                                              columnNumber: 35,
                                                                            },
                                                                            this
                                                                          ),
                                                                      },
                                                                      void 0,
                                                                      !1,
                                                                      {
                                                                        fileName:
                                                                          _,
                                                                        lineNumber: 699,
                                                                        columnNumber: 33,
                                                                      },
                                                                      this
                                                                    ),
                                                                    h(
                                                                      'p',
                                                                      {
                                                                        className:
                                                                          'text-sm text-gray-500',
                                                                        children:
                                                                          h(
                                                                            'a',
                                                                            {
                                                                              href: i.href,
                                                                              children:
                                                                                '@' +
                                                                                i.handle,
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 703,
                                                                              columnNumber: 35,
                                                                            },
                                                                            this
                                                                          ),
                                                                      },
                                                                      void 0,
                                                                      !1,
                                                                      {
                                                                        fileName:
                                                                          _,
                                                                        lineNumber: 702,
                                                                        columnNumber: 33,
                                                                      },
                                                                      this
                                                                    ),
                                                                  ],
                                                                },
                                                                void 0,
                                                                !0,
                                                                {
                                                                  fileName: _,
                                                                  lineNumber: 698,
                                                                  columnNumber: 31,
                                                                },
                                                                this
                                                              ),
                                                              h(
                                                                'div',
                                                                {
                                                                  className:
                                                                    'flex-shrink-0',
                                                                  children: h(
                                                                    'button',
                                                                    {
                                                                      type: 'button',
                                                                      className:
                                                                        'inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100',
                                                                      children:
                                                                        [
                                                                          h(
                                                                            Vk,
                                                                            {
                                                                              className:
                                                                                '-ml-1 mr-0.5 h-5 w-5 text-rose-400',
                                                                              'aria-hidden':
                                                                                'true',
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 711,
                                                                              columnNumber: 35,
                                                                            },
                                                                            this
                                                                          ),
                                                                          h(
                                                                            'span',
                                                                            {
                                                                              children:
                                                                                'Follow',
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 715,
                                                                              columnNumber: 35,
                                                                            },
                                                                            this
                                                                          ),
                                                                        ],
                                                                    },
                                                                    void 0,
                                                                    !0,
                                                                    {
                                                                      fileName:
                                                                        _,
                                                                      lineNumber: 707,
                                                                      columnNumber: 33,
                                                                    },
                                                                    this
                                                                  ),
                                                                },
                                                                void 0,
                                                                !1,
                                                                {
                                                                  fileName: _,
                                                                  lineNumber: 706,
                                                                  columnNumber: 31,
                                                                },
                                                                this
                                                              ),
                                                            ],
                                                          },
                                                          i.handle,
                                                          !0,
                                                          {
                                                            fileName: _,
                                                            lineNumber: 687,
                                                            columnNumber: 29,
                                                          },
                                                          this
                                                        )
                                                      ),
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: _,
                                                      lineNumber: 682,
                                                      columnNumber: 25,
                                                    },
                                                    this
                                                  ),
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: _,
                                                  lineNumber: 681,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                              h(
                                                'div',
                                                {
                                                  className: 'mt-6',
                                                  children: h(
                                                    'a',
                                                    {
                                                      href: '#',
                                                      className:
                                                        'w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50',
                                                      children: 'View all',
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: _,
                                                      lineNumber: 723,
                                                      columnNumber: 25,
                                                    },
                                                    this
                                                  ),
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: _,
                                                  lineNumber: 722,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName: _,
                                            lineNumber: 674,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: _,
                                        lineNumber: 673,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: _,
                                    lineNumber: 672,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                                h(
                                  'section',
                                  {
                                    'aria-labelledby': 'trending-heading',
                                    children: h(
                                      'div',
                                      {
                                        className: 'bg-white rounded-lg shadow',
                                        children: h(
                                          'div',
                                          {
                                            className: 'p-6',
                                            children: [
                                              h(
                                                'h2',
                                                {
                                                  id: 'trending-heading',
                                                  className:
                                                    'text-base font-medium text-gray-900',
                                                  children: 'Trending',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: _,
                                                  lineNumber: 736,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                              h(
                                                'div',
                                                {
                                                  className: 'mt-6 flow-root',
                                                  children: h(
                                                    'ul',
                                                    {
                                                      role: 'list',
                                                      className:
                                                        '-my-4 divide-y divide-gray-200',
                                                      children: LA.map((i) =>
                                                        h(
                                                          'li',
                                                          {
                                                            className:
                                                              'flex py-4 space-x-3',
                                                            children: [
                                                              h(
                                                                'div',
                                                                {
                                                                  className:
                                                                    'flex-shrink-0',
                                                                  children: h(
                                                                    'img',
                                                                    {
                                                                      className:
                                                                        'h-8 w-8 rounded-full',
                                                                      src: i
                                                                        .user
                                                                        .imageUrl,
                                                                      alt: i
                                                                        .user
                                                                        .name,
                                                                    },
                                                                    void 0,
                                                                    !1,
                                                                    {
                                                                      fileName:
                                                                        _,
                                                                      lineNumber: 750,
                                                                      columnNumber: 33,
                                                                    },
                                                                    this
                                                                  ),
                                                                },
                                                                void 0,
                                                                !1,
                                                                {
                                                                  fileName: _,
                                                                  lineNumber: 749,
                                                                  columnNumber: 31,
                                                                },
                                                                this
                                                              ),
                                                              h(
                                                                'div',
                                                                {
                                                                  className:
                                                                    'min-w-0 flex-1',
                                                                  children: [
                                                                    h(
                                                                      'p',
                                                                      {
                                                                        className:
                                                                          'text-sm text-gray-800',
                                                                        children:
                                                                          i.body,
                                                                      },
                                                                      void 0,
                                                                      !1,
                                                                      {
                                                                        fileName:
                                                                          _,
                                                                        lineNumber: 757,
                                                                        columnNumber: 33,
                                                                      },
                                                                      this
                                                                    ),
                                                                    h(
                                                                      'div',
                                                                      {
                                                                        className:
                                                                          'mt-2 flex',
                                                                        children:
                                                                          h(
                                                                            'span',
                                                                            {
                                                                              className:
                                                                                'inline-flex items-center text-sm',
                                                                              children:
                                                                                h(
                                                                                  'button',
                                                                                  {
                                                                                    type: 'button',
                                                                                    className:
                                                                                      'inline-flex space-x-2 text-gray-400 hover:text-gray-500',
                                                                                    children:
                                                                                      [
                                                                                        h(
                                                                                          lS,
                                                                                          {
                                                                                            className:
                                                                                              'h-5 w-5',
                                                                                            'aria-hidden':
                                                                                              'true',
                                                                                          },
                                                                                          void 0,
                                                                                          !1,
                                                                                          {
                                                                                            fileName:
                                                                                              _,
                                                                                            lineNumber: 766,
                                                                                            columnNumber: 39,
                                                                                          },
                                                                                          this
                                                                                        ),
                                                                                        h(
                                                                                          'span',
                                                                                          {
                                                                                            className:
                                                                                              'font-medium text-gray-900',
                                                                                            children:
                                                                                              i.comments,
                                                                                          },
                                                                                          void 0,
                                                                                          !1,
                                                                                          {
                                                                                            fileName:
                                                                                              _,
                                                                                            lineNumber: 770,
                                                                                            columnNumber: 39,
                                                                                          },
                                                                                          this
                                                                                        ),
                                                                                      ],
                                                                                  },
                                                                                  void 0,
                                                                                  !0,
                                                                                  {
                                                                                    fileName:
                                                                                      _,
                                                                                    lineNumber: 762,
                                                                                    columnNumber: 37,
                                                                                  },
                                                                                  this
                                                                                ),
                                                                            },
                                                                            void 0,
                                                                            !1,
                                                                            {
                                                                              fileName:
                                                                                _,
                                                                              lineNumber: 761,
                                                                              columnNumber: 35,
                                                                            },
                                                                            this
                                                                          ),
                                                                      },
                                                                      void 0,
                                                                      !1,
                                                                      {
                                                                        fileName:
                                                                          _,
                                                                        lineNumber: 760,
                                                                        columnNumber: 33,
                                                                      },
                                                                      this
                                                                    ),
                                                                  ],
                                                                },
                                                                void 0,
                                                                !0,
                                                                {
                                                                  fileName: _,
                                                                  lineNumber: 756,
                                                                  columnNumber: 31,
                                                                },
                                                                this
                                                              ),
                                                            ],
                                                          },
                                                          i.id,
                                                          !0,
                                                          {
                                                            fileName: _,
                                                            lineNumber: 748,
                                                            columnNumber: 29,
                                                          },
                                                          this
                                                        )
                                                      ),
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: _,
                                                      lineNumber: 743,
                                                      columnNumber: 25,
                                                    },
                                                    this
                                                  ),
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: _,
                                                  lineNumber: 742,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                              h(
                                                'div',
                                                {
                                                  className: 'mt-6',
                                                  children: h(
                                                    'a',
                                                    {
                                                      href: '#',
                                                      className:
                                                        'w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50',
                                                      children: 'View all',
                                                    },
                                                    void 0,
                                                    !1,
                                                    {
                                                      fileName: _,
                                                      lineNumber: 782,
                                                      columnNumber: 25,
                                                    },
                                                    this
                                                  ),
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: _,
                                                  lineNumber: 781,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName: _,
                                            lineNumber: 735,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: _,
                                        lineNumber: 734,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: _,
                                    lineNumber: 733,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: _, lineNumber: 671, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: _, lineNumber: 670, columnNumber: 13 },
                        this
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  { fileName: _, lineNumber: 353, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: _, lineNumber: 352, columnNumber: 9 },
              this
            ),
          ],
        },
        void 0,
        !0,
        { fileName: _, lineNumber: 144, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1
  )
}
var he =
  '/Users/jeffsee/code/tinacms/packages/@tinacms/app/src/admin/layout.tsx'
const wS = [
  { name: 'Dashboard', href: '#', icon: s1, current: !0 },
  { name: 'Calendar', href: '#', icon: iA, current: !1 },
  { name: 'Teams', href: '#', icon: f1, current: !1 },
  { name: 'Directory', href: '#', icon: gA, current: !1 },
  { name: 'Announcements', href: '#', icon: xA, current: !1 },
  { name: 'Office Map', href: '#', icon: mA, current: !1 },
]
function id(...i) {
  return i.filter(Boolean).join(' ')
}
function AA({ status: i, children: o }) {
  const [s, m] = R.exports.useState(!1)
  return h(
    Ca,
    {
      children: h(
        'div',
        {
          className: 'h-screen flex',
          children: [
            h(
              Oo.Root,
              {
                show: s,
                as: R.exports.Fragment,
                children: h(
                  rS,
                  {
                    as: 'div',
                    className: 'relative z-40 sm:hidden',
                    onClose: m,
                    children: [
                      h(
                        Oo.Child,
                        {
                          as: R.exports.Fragment,
                          enter: 'transition-opacity ease-linear duration-300',
                          enterFrom: 'opacity-0',
                          enterTo: 'opacity-100',
                          leave: 'transition-opacity ease-linear duration-300',
                          leaveFrom: 'opacity-100',
                          leaveTo: 'opacity-0',
                          children: h(
                            'div',
                            {
                              className:
                                'fixed inset-0 bg-gray-600 bg-opacity-75',
                            },
                            void 0,
                            !1,
                            { fileName: he, lineNumber: 57, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: he, lineNumber: 48, columnNumber: 13 },
                        this
                      ),
                      h(
                        'div',
                        {
                          className: 'fixed inset-0 flex z-40',
                          children: [
                            h(
                              Oo.Child,
                              {
                                as: R.exports.Fragment,
                                enter:
                                  'transition ease-in-out duration-300 transform',
                                enterFrom: '-translate-x-full',
                                enterTo: 'translate-x-0',
                                leave:
                                  'transition ease-in-out duration-300 transform',
                                leaveFrom: 'translate-x-0',
                                leaveTo: '-translate-x-full',
                                children: h(
                                  rS.Panel,
                                  {
                                    className:
                                      'relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none',
                                    children: [
                                      h(
                                        Oo.Child,
                                        {
                                          as: R.exports.Fragment,
                                          enter: 'ease-in-out duration-300',
                                          enterFrom: 'opacity-0',
                                          enterTo: 'opacity-100',
                                          leave: 'ease-in-out duration-300',
                                          leaveFrom: 'opacity-100',
                                          leaveTo: 'opacity-0',
                                          children: h(
                                            'div',
                                            {
                                              className:
                                                'absolute top-0 right-0 -mr-12 pt-2',
                                              children: h(
                                                'button',
                                                {
                                                  type: 'button',
                                                  className:
                                                    'ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white',
                                                  onClick: () => m(!1),
                                                  children: [
                                                    h(
                                                      'span',
                                                      {
                                                        className: 'sr-only',
                                                        children:
                                                          'Close sidebar',
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: he,
                                                        lineNumber: 86,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                    h(
                                                      d1,
                                                      {
                                                        className:
                                                          'h-6 w-6 text-white',
                                                        'aria-hidden': 'true',
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: he,
                                                        lineNumber: 87,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                !0,
                                                {
                                                  fileName: he,
                                                  lineNumber: 81,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: he,
                                              lineNumber: 80,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: he,
                                          lineNumber: 71,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                      h(
                                        'div',
                                        {
                                          className:
                                            'flex-1 h-0 pt-5 pb-4 overflow-y-auto',
                                          children: [
                                            h(
                                              'div',
                                              {
                                                className:
                                                  'flex-shrink-0 flex items-center px-4',
                                                children: h(
                                                  'img',
                                                  {
                                                    className: 'h-8 w-auto',
                                                    src: 'https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-900-text.svg',
                                                    alt: 'Workflow',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: he,
                                                    lineNumber: 96,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: he,
                                                lineNumber: 95,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                            h(
                                              'nav',
                                              {
                                                'aria-label': 'Sidebar',
                                                className: 'mt-5',
                                                children: h(
                                                  'div',
                                                  {
                                                    className: 'px-2 space-y-1',
                                                    children: wS.map((d) =>
                                                      h(
                                                        'a',
                                                        {
                                                          href: d.href,
                                                          className: id(
                                                            d.current
                                                              ? 'bg-gray-100 text-gray-900'
                                                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                          ),
                                                          children: [
                                                            h(
                                                              d.icon,
                                                              {
                                                                className: id(
                                                                  d.current
                                                                    ? 'text-gray-500'
                                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                                  'mr-4 h-6 w-6'
                                                                ),
                                                                'aria-hidden':
                                                                  'true',
                                                              },
                                                              void 0,
                                                              !1,
                                                              {
                                                                fileName: he,
                                                                lineNumber: 115,
                                                                columnNumber: 29,
                                                              },
                                                              this
                                                            ),
                                                            d.name,
                                                          ],
                                                        },
                                                        d.name,
                                                        !0,
                                                        {
                                                          fileName: he,
                                                          lineNumber: 105,
                                                          columnNumber: 27,
                                                        },
                                                        this
                                                      )
                                                    ),
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: he,
                                                    lineNumber: 103,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: he,
                                                lineNumber: 102,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                          ],
                                        },
                                        void 0,
                                        !0,
                                        {
                                          fileName: he,
                                          lineNumber: 94,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                      h(
                                        'div',
                                        {
                                          className:
                                            'flex-shrink-0 flex border-t border-gray-200 p-4',
                                          children: h(
                                            'a',
                                            {
                                              href: '#',
                                              className:
                                                'flex-shrink-0 group block',
                                              children: h(
                                                'div',
                                                {
                                                  className:
                                                    'flex items-center',
                                                  children: [
                                                    h(
                                                      'div',
                                                      {
                                                        children: h(
                                                          'img',
                                                          {
                                                            className:
                                                              'inline-block h-10 w-10 rounded-full',
                                                            src: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
                                                            alt: '',
                                                          },
                                                          void 0,
                                                          !1,
                                                          {
                                                            fileName: he,
                                                            lineNumber: 134,
                                                            columnNumber: 27,
                                                          },
                                                          this
                                                        ),
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: he,
                                                        lineNumber: 133,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                    h(
                                                      'div',
                                                      {
                                                        className: 'ml-3',
                                                        children: [
                                                          h(
                                                            'p',
                                                            {
                                                              className:
                                                                'text-base font-medium text-gray-700 group-hover:text-gray-900',
                                                              children:
                                                                'Whitney Francis',
                                                            },
                                                            void 0,
                                                            !1,
                                                            {
                                                              fileName: he,
                                                              lineNumber: 141,
                                                              columnNumber: 27,
                                                            },
                                                            this
                                                          ),
                                                          h(
                                                            'p',
                                                            {
                                                              className:
                                                                'text-sm font-medium text-gray-500 group-hover:text-gray-700',
                                                              children:
                                                                'View profile',
                                                            },
                                                            void 0,
                                                            !1,
                                                            {
                                                              fileName: he,
                                                              lineNumber: 144,
                                                              columnNumber: 27,
                                                            },
                                                            this
                                                          ),
                                                        ],
                                                      },
                                                      void 0,
                                                      !0,
                                                      {
                                                        fileName: he,
                                                        lineNumber: 140,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                !0,
                                                {
                                                  fileName: he,
                                                  lineNumber: 132,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: he,
                                              lineNumber: 131,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: he,
                                          lineNumber: 130,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    ],
                                  },
                                  void 0,
                                  !0,
                                  {
                                    fileName: he,
                                    lineNumber: 70,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: he,
                                lineNumber: 61,
                                columnNumber: 15,
                              },
                              this
                            ),
                            h(
                              'div',
                              {
                                className: 'flex-shrink-0 w-14',
                                'aria-hidden': 'true',
                              },
                              void 0,
                              !1,
                              {
                                fileName: he,
                                lineNumber: 153,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: he, lineNumber: 60, columnNumber: 13 },
                        this
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  { fileName: he, lineNumber: 43, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: he, lineNumber: 42, columnNumber: 9 },
              this
            ),
            h(
              'div',
              {
                className: `sm:flex-shrink-0 ${
                  i === 'hidden' ? 'hidden' : 'flex'
                }`,
                children: h(
                  'div',
                  {
                    className: 'flex flex-col w-64',
                    children: h(
                      'div',
                      {
                        className:
                          'flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100',
                        children: [
                          h(
                            'div',
                            {
                              className:
                                'flex-1 flex flex-col pt-5 pb-4 overflow-y-auto',
                              children: [
                                h(
                                  'div',
                                  {
                                    className:
                                      'flex items-center flex-shrink-0 px-4',
                                    children: h(
                                      'img',
                                      {
                                        className: 'h-8 w-auto',
                                        src: 'https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-900-text.svg',
                                        alt: 'Workflow',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: he,
                                        lineNumber: 171,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: he,
                                    lineNumber: 170,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                                h(
                                  'nav',
                                  {
                                    className: 'mt-5 flex-1',
                                    'aria-label': 'Sidebar',
                                    children: h(
                                      'div',
                                      {
                                        className: 'px-2 space-y-1',
                                        children: wS.map((d) =>
                                          h(
                                            'a',
                                            {
                                              href: d.href,
                                              className: id(
                                                d.current
                                                  ? 'bg-gray-200 text-gray-900'
                                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                              ),
                                              children: [
                                                h(
                                                  d.icon,
                                                  {
                                                    className: id(
                                                      d.current
                                                        ? 'text-gray-500'
                                                        : 'text-gray-400 group-hover:text-gray-500',
                                                      'mr-3 h-6 w-6'
                                                    ),
                                                    'aria-hidden': 'true',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: he,
                                                    lineNumber: 190,
                                                    columnNumber: 25,
                                                  },
                                                  this
                                                ),
                                                d.name,
                                              ],
                                            },
                                            d.name,
                                            !0,
                                            {
                                              fileName: he,
                                              lineNumber: 180,
                                              columnNumber: 23,
                                            },
                                            this
                                          )
                                        ),
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: he,
                                        lineNumber: 178,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: he,
                                    lineNumber: 177,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: he, lineNumber: 169, columnNumber: 15 },
                            this
                          ),
                          h(
                            'div',
                            {
                              className:
                                'flex-shrink-0 flex border-t border-gray-200 p-4',
                              children: h(
                                'a',
                                {
                                  href: '#',
                                  className: 'flex-shrink-0 w-full group block',
                                  children: h(
                                    'div',
                                    {
                                      className: 'flex items-center',
                                      children: [
                                        h(
                                          'div',
                                          {
                                            children: h(
                                              'img',
                                              {
                                                className:
                                                  'inline-block h-9 w-9 rounded-full',
                                                src: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
                                                alt: '',
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: he,
                                                lineNumber: 209,
                                                columnNumber: 23,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: he,
                                            lineNumber: 208,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                        h(
                                          'div',
                                          {
                                            className: 'ml-3',
                                            children: [
                                              h(
                                                'p',
                                                {
                                                  className:
                                                    'text-sm font-medium text-gray-700 group-hover:text-gray-900',
                                                  children: 'Whitney Francis',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: he,
                                                  lineNumber: 216,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                              h(
                                                'p',
                                                {
                                                  className:
                                                    'text-xs font-medium text-gray-500 group-hover:text-gray-700',
                                                  children: 'View profile',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: he,
                                                  lineNumber: 219,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          !0,
                                          {
                                            fileName: he,
                                            lineNumber: 215,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    !0,
                                    {
                                      fileName: he,
                                      lineNumber: 207,
                                      columnNumber: 19,
                                    },
                                    this
                                  ),
                                },
                                void 0,
                                !1,
                                {
                                  fileName: he,
                                  lineNumber: 206,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: he, lineNumber: 205, columnNumber: 15 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: he, lineNumber: 168, columnNumber: 13 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: he, lineNumber: 166, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: he, lineNumber: 161, columnNumber: 9 },
              this
            ),
            h(
              'div',
              {
                className: 'flex flex-col min-w-0 flex-1 overflow-hidden',
                children: [
                  h(
                    'div',
                    {
                      className: 'sm:hidden',
                      children: h(
                        'div',
                        {
                          className:
                            'flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5',
                          children: [
                            h(
                              'div',
                              {
                                children: h(
                                  'img',
                                  {
                                    className: 'h-8 w-auto',
                                    src: 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg',
                                    alt: 'Workflow',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: he,
                                    lineNumber: 233,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: he,
                                lineNumber: 232,
                                columnNumber: 15,
                              },
                              this
                            ),
                            h(
                              'div',
                              {
                                children: h(
                                  'button',
                                  {
                                    type: 'button',
                                    className:
                                      '-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900',
                                    onClick: () => m(!0),
                                    children: [
                                      h(
                                        'span',
                                        {
                                          className: 'sr-only',
                                          children: 'Open sidebar',
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: he,
                                          lineNumber: 245,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                      h(
                                        c1,
                                        {
                                          className: 'h-6 w-6',
                                          'aria-hidden': 'true',
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: he,
                                          lineNumber: 246,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    ],
                                  },
                                  void 0,
                                  !0,
                                  {
                                    fileName: he,
                                    lineNumber: 240,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: he,
                                lineNumber: 239,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: he, lineNumber: 231, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: he, lineNumber: 230, columnNumber: 11 },
                    this
                  ),
                  h(
                    'div',
                    {
                      className: 'flex-1 relative z-0 flex overflow-hidden',
                      children: [
                        h(
                          'main',
                          {
                            className:
                              'flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last',
                            children: h(
                              'div',
                              {
                                className: 'absolute inset-0',
                                children: h(
                                  'div',
                                  { className: 'h-full', children: o },
                                  void 0,
                                  !1,
                                  {
                                    fileName: he,
                                    lineNumber: 255,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: he,
                                lineNumber: 254,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: he, lineNumber: 252, columnNumber: 13 },
                          this
                        ),
                        h(
                          'aside',
                          {
                            className: `${
                              i === 'hidden' ? 'hidden' : 'flex'
                            } relative xl:order-first xl:flex-col flex-shrink-0 w-96 border-r border-gray-200 overflow-y-auto`,
                            children: h(
                              'div',
                              {
                                className: 'absolute inset-0 py-6 px-4 sm:px-6',
                                children: h(
                                  'div',
                                  {
                                    className:
                                      'h-full border-2 border-gray-200 border-dashed rounded-lg',
                                    children: 'Hi there',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: he,
                                    lineNumber: 269,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: he,
                                lineNumber: 268,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: he, lineNumber: 262, columnNumber: 13 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: he, lineNumber: 251, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: he, lineNumber: 229, columnNumber: 9 },
              this
            ),
          ],
        },
        void 0,
        !0,
        { fileName: he, lineNumber: 41, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1
  )
}
var Rt = '/Users/jeffsee/code/tinacms/packages/@tinacms/app/src/admin/nav.tsx'
const Gh = {
    name: 'Chelsea Hagon',
    email: 'chelsea.hagon@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  UA = [
    { name: 'Dashboard', href: '#', current: !0 },
    { name: 'Calendar', href: '#', current: !1 },
    { name: 'Teams', href: '#', current: !1 },
    { name: 'Directory', href: '#', current: !1 },
  ],
  FA = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
function DS(...i) {
  return i.filter(Boolean).join(' ')
}
function jA({ setStatus: i, value: o, setValue: s }) {
  return h(
    Ca,
    {
      children: h(
        As,
        {
          as: 'header',
          className: ({ open: m }) =>
            DS(
              m ? 'fixed inset-0 z-40 overflow-y-auto' : '',
              'bg-white shadow-sm lg:static lg:overflow-y-visible border-b border-gray-200'
            ),
          children: ({ open: m }) =>
            h(
              Ca,
              {
                children: [
                  h(
                    'div',
                    {
                      className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
                      children: h(
                        'div',
                        {
                          className:
                            'relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8',
                          children: [
                            h(
                              'div',
                              {
                                className:
                                  'flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2',
                                children: h(
                                  'div',
                                  {
                                    className:
                                      'flex-shrink-0 flex items-center',
                                    children: h(
                                      'button',
                                      {
                                        type: 'button',
                                        onClick: () =>
                                          i((d) =>
                                            d === 'full' ? 'hidden' : 'full'
                                          ),
                                        children: 'Edit',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: Rt,
                                        lineNumber: 48,
                                        columnNumber: 21,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: Rt,
                                    lineNumber: 47,
                                    columnNumber: 19,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: Rt,
                                lineNumber: 46,
                                columnNumber: 17,
                              },
                              this
                            ),
                            h(
                              'div',
                              {
                                className:
                                  'min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-8',
                                children: h(
                                  'div',
                                  {
                                    className:
                                      'flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0',
                                    children: h(
                                      'div',
                                      {
                                        className: 'w-full',
                                        children: [
                                          h(
                                            'label',
                                            {
                                              htmlFor: 'search',
                                              className: 'sr-only',
                                              children: 'Search',
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: Rt,
                                              lineNumber: 63,
                                              columnNumber: 23,
                                            },
                                            this
                                          ),
                                          h(
                                            'div',
                                            {
                                              className: 'relative',
                                              children: [
                                                h(
                                                  'div',
                                                  {
                                                    className:
                                                      'pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center',
                                                    children: h(
                                                      u1,
                                                      {
                                                        className:
                                                          'h-5 w-5 text-gray-400',
                                                        'aria-hidden': 'true',
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: Rt,
                                                        lineNumber: 68,
                                                        columnNumber: 27,
                                                      },
                                                      this
                                                    ),
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: Rt,
                                                    lineNumber: 67,
                                                    columnNumber: 25,
                                                  },
                                                  this
                                                ),
                                                h(
                                                  'input',
                                                  {
                                                    id: 'search',
                                                    name: 'search',
                                                    value: o,
                                                    onChange: (d) =>
                                                      s(d.target.value),
                                                    className:
                                                      'block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                                                    placeholder: 'Search',
                                                    type: 'search',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: Rt,
                                                    lineNumber: 73,
                                                    columnNumber: 25,
                                                  },
                                                  this
                                                ),
                                              ],
                                            },
                                            void 0,
                                            !0,
                                            {
                                              fileName: Rt,
                                              lineNumber: 66,
                                              columnNumber: 23,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName: Rt,
                                        lineNumber: 62,
                                        columnNumber: 21,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: Rt,
                                    lineNumber: 61,
                                    columnNumber: 19,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: Rt,
                                lineNumber: 60,
                                columnNumber: 17,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: Rt, lineNumber: 45, columnNumber: 15 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: Rt, lineNumber: 44, columnNumber: 13 },
                    this
                  ),
                  h(
                    As.Panel,
                    {
                      as: 'nav',
                      className: 'lg:hidden',
                      'aria-label': 'Global',
                      children: [
                        h(
                          'div',
                          {
                            className:
                              'max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4',
                            children: UA.map((d) =>
                              h(
                                'a',
                                {
                                  href: d.href,
                                  'aria-current': d.current ? 'page' : void 0,
                                  className: DS(
                                    d.current
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'hover:bg-gray-50',
                                    'block rounded-md py-2 px-3 text-base font-medium'
                                  ),
                                  children: d.name,
                                },
                                d.name,
                                !1,
                                {
                                  fileName: Rt,
                                  lineNumber: 92,
                                  columnNumber: 19,
                                },
                                this
                              )
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: Rt, lineNumber: 90, columnNumber: 15 },
                          this
                        ),
                        h(
                          'div',
                          {
                            className: 'border-t border-gray-200 pt-4 pb-3',
                            children: [
                              h(
                                'div',
                                {
                                  className:
                                    'max-w-3xl mx-auto px-4 flex items-center sm:px-6',
                                  children: [
                                    h(
                                      'div',
                                      {
                                        className: 'flex-shrink-0',
                                        children: h(
                                          'img',
                                          {
                                            className: 'h-10 w-10 rounded-full',
                                            src: Gh.imageUrl,
                                            alt: '',
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: Rt,
                                            lineNumber: 110,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: Rt,
                                        lineNumber: 109,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                    h(
                                      'div',
                                      {
                                        className: 'ml-3',
                                        children: [
                                          h(
                                            'div',
                                            {
                                              className:
                                                'text-base font-medium text-gray-800',
                                              children: Gh.name,
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: Rt,
                                              lineNumber: 117,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          h(
                                            'div',
                                            {
                                              className:
                                                'text-sm font-medium text-gray-500',
                                              children: Gh.email,
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: Rt,
                                              lineNumber: 120,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName: Rt,
                                        lineNumber: 116,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                    h(
                                      'button',
                                      {
                                        type: 'button',
                                        className:
                                          'ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                                        children: [
                                          h(
                                            'span',
                                            {
                                              className: 'sr-only',
                                              children: 'View notifications',
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: Rt,
                                              lineNumber: 128,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          h(
                                            uy,
                                            {
                                              className: 'h-6 w-6',
                                              'aria-hidden': 'true',
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: Rt,
                                              lineNumber: 129,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName: Rt,
                                        lineNumber: 124,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                !0,
                                {
                                  fileName: Rt,
                                  lineNumber: 108,
                                  columnNumber: 17,
                                },
                                this
                              ),
                              h(
                                'div',
                                {
                                  className:
                                    'mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4',
                                  children: FA.map((d) =>
                                    h(
                                      'a',
                                      {
                                        href: d.href,
                                        className:
                                          'block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900',
                                        children: d.name,
                                      },
                                      d.name,
                                      !1,
                                      {
                                        fileName: Rt,
                                        lineNumber: 134,
                                        columnNumber: 21,
                                      },
                                      this
                                    )
                                  ),
                                },
                                void 0,
                                !1,
                                {
                                  fileName: Rt,
                                  lineNumber: 132,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          !0,
                          { fileName: Rt, lineNumber: 107, columnNumber: 15 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: Rt, lineNumber: 89, columnNumber: 13 },
                    this
                  ),
                ],
              },
              void 0,
              !0
            ),
        },
        void 0,
        !1,
        { fileName: Rt, lineNumber: 33, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1
  )
}
var ld = '/Users/jeffsee/code/tinacms/packages/@tinacms/app/src/admin/index.tsx'
const zA = () => {
  const i = R.exports.useRef(null),
    [o, s] = $t.useState('hidden'),
    [m, d] = R.exports.useState('/')
  return (
    R.exports.useEffect(() => {
      setInterval(() => {
        i.current && d(i.current.contentWindow.location.pathname)
      }, 500)
    }, [i.current]),
    h(
      'div',
      {
        children: h(
          AA,
          {
            status: o,
            children: [
              h(
                jA,
                { status: o, setStatus: s, value: m, setValue: d },
                void 0,
                !1,
                { fileName: ld, lineNumber: 20, columnNumber: 9 },
                void 0
              ),
              h(
                'iframe',
                {
                  onLoad: (y) => console.log('loaded', y),
                  ref: i,
                  className: 'h-full w-full',
                  src: '/',
                },
                void 0,
                !1,
                { fileName: ld, lineNumber: 26, columnNumber: 9 },
                void 0
              ),
            ],
          },
          void 0,
          !0,
          { fileName: ld, lineNumber: 19, columnNumber: 7 },
          void 0
        ),
      },
      void 0,
      !1,
      { fileName: ld, lineNumber: 18, columnNumber: 5 },
      void 0
    )
  )
}
var xl = '/Users/jeffsee/code/tinacms/packages/@tinacms/app/src/main.tsx'
Qh.createRoot(document.getElementById('root')).render(
  h(
    $t.StrictMode,
    {
      children: h(
        'div',
        {
          className: 'tina-tailwind',
          children: h(
            YM,
            {
              children: [
                h(
                  Zh,
                  {
                    path: '/',
                    element: h(
                      kA,
                      {},
                      void 0,
                      !1,
                      { fileName: xl, lineNumber: 14, columnNumber: 34 },
                      globalThis
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: xl, lineNumber: 14, columnNumber: 9 },
                  globalThis
                ),
                h(
                  Zh,
                  {
                    path: 'admin',
                    element: h(
                      zA,
                      {},
                      void 0,
                      !1,
                      { fileName: xl, lineNumber: 15, columnNumber: 38 },
                      globalThis
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: xl, lineNumber: 15, columnNumber: 9 },
                  globalThis
                ),
              ],
            },
            void 0,
            !0,
            { fileName: xl, lineNumber: 13, columnNumber: 7 },
            globalThis
          ),
        },
        void 0,
        !1,
        { fileName: xl, lineNumber: 12, columnNumber: 5 },
        globalThis
      ),
    },
    void 0,
    !1,
    { fileName: xl, lineNumber: 11, columnNumber: 3 },
    globalThis
  )
)
//# sourceMappingURL=index.4b5b7257.js.map
