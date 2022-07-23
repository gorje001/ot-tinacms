function XO(i, u) {
  for (var c = 0; c < u.length; c++) {
    const v = u[c]
    if (typeof v != 'string' && !Array.isArray(v)) {
      for (const d in v)
        if (d !== 'default' && !(d in i)) {
          const y = Object.getOwnPropertyDescriptor(v, d)
          y &&
            Object.defineProperty(
              i,
              d,
              y.get ? y : { enumerable: !0, get: () => v[d] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' })
  )
}
const JO = function () {
  const u = document.createElement('link').relList
  if (u && u.supports && u.supports('modulepreload')) return
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) v(d)
  new MutationObserver((d) => {
    for (const y of d)
      if (y.type === 'childList')
        for (const f of y.addedNodes)
          f.tagName === 'LINK' && f.rel === 'modulepreload' && v(f)
  }).observe(document, { childList: !0, subtree: !0 })
  function c(d) {
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
  function v(d) {
    if (d.ep) return
    d.ep = !0
    const y = c(d)
    fetch(d.href, y)
  }
}
JO()
function ZO(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default')
    ? i.default
    : i
}
var w = { exports: {} },
  Um = { exports: {} }
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (i, u) {
  ;(function () {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
        'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error())
    var c = '18.2.0',
      v = Symbol.for('react.element'),
      d = Symbol.for('react.portal'),
      y = Symbol.for('react.fragment'),
      f = Symbol.for('react.strict_mode'),
      x = Symbol.for('react.profiler'),
      E = Symbol.for('react.provider'),
      C = Symbol.for('react.context'),
      R = Symbol.for('react.forward_ref'),
      L = Symbol.for('react.suspense'),
      V = Symbol.for('react.suspense_list'),
      F = Symbol.for('react.memo'),
      $ = Symbol.for('react.lazy'),
      _ = Symbol.for('react.offscreen'),
      ge = Symbol.iterator,
      oe = '@@iterator'
    function Z(h) {
      if (h === null || typeof h != 'object') return null
      var b = (ge && h[ge]) || h[oe]
      return typeof b == 'function' ? b : null
    }
    var me = { current: null },
      Ee = { transition: null },
      K = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 },
      Ce = { current: null },
      ee = {},
      lt = null
    function X(h) {
      lt = h
    }
    ;(ee.setExtraStackFrame = function (h) {
      lt = h
    }),
      (ee.getCurrentStack = null),
      (ee.getStackAddendum = function () {
        var h = ''
        lt && (h += lt)
        var b = ee.getCurrentStack
        return b && (h += b() || ''), h
      })
    var Re = !1,
      Te = !1,
      nt = !1,
      ve = !1,
      He = !1,
      vt = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: Ee,
        ReactCurrentOwner: Ce,
      }
    ;(vt.ReactDebugCurrentFrame = ee), (vt.ReactCurrentActQueue = K)
    function ze(h) {
      {
        for (
          var b = arguments.length, U = new Array(b > 1 ? b - 1 : 0), j = 1;
          j < b;
          j++
        )
          U[j - 1] = arguments[j]
        Ue('warn', h, U)
      }
    }
    function le(h) {
      {
        for (
          var b = arguments.length, U = new Array(b > 1 ? b - 1 : 0), j = 1;
          j < b;
          j++
        )
          U[j - 1] = arguments[j]
        Ue('error', h, U)
      }
    }
    function Ue(h, b, U) {
      {
        var j = vt.ReactDebugCurrentFrame,
          Q = j.getStackAddendum()
        Q !== '' && ((b += '%s'), (U = U.concat([Q])))
        var _e = U.map(function (de) {
          return String(de)
        })
        _e.unshift('Warning: ' + b),
          Function.prototype.apply.call(console[h], console, _e)
      }
    }
    var Kt = {}
    function zn(h, b) {
      {
        var U = h.constructor,
          j = (U && (U.displayName || U.name)) || 'ReactClass',
          Q = j + '.' + b
        if (Kt[Q]) return
        le(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          b,
          j
        ),
          (Kt[Q] = !0)
      }
    }
    var Xt = {
        isMounted: function (h) {
          return !1
        },
        enqueueForceUpdate: function (h, b, U) {
          zn(h, 'forceUpdate')
        },
        enqueueReplaceState: function (h, b, U, j) {
          zn(h, 'replaceState')
        },
        enqueueSetState: function (h, b, U, j) {
          zn(h, 'setState')
        },
      },
      Ht = Object.assign,
      vn = {}
    Object.freeze(vn)
    function hn(h, b, U) {
      ;(this.props = h),
        (this.context = b),
        (this.refs = vn),
        (this.updater = U || Xt)
    }
    ;(hn.prototype.isReactComponent = {}),
      (hn.prototype.setState = function (h, b) {
        if (typeof h != 'object' && typeof h != 'function' && h != null)
          throw new Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
          )
        this.updater.enqueueSetState(this, h, b, 'setState')
      }),
      (hn.prototype.forceUpdate = function (h) {
        this.updater.enqueueForceUpdate(this, h, 'forceUpdate')
      })
    {
      var wr = {
          isMounted: [
            'isMounted',
            'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
          ],
          replaceState: [
            'replaceState',
            'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).',
          ],
        },
        dr = function (h, b) {
          Object.defineProperty(hn.prototype, h, {
            get: function () {
              ze(
                '%s(...) is deprecated in plain JavaScript React classes. %s',
                b[0],
                b[1]
              )
            },
          })
        }
      for (var pr in wr) wr.hasOwnProperty(pr) && dr(pr, wr[pr])
    }
    function mn() {}
    mn.prototype = hn.prototype
    function Jt(h, b, U) {
      ;(this.props = h),
        (this.context = b),
        (this.refs = vn),
        (this.updater = U || Xt)
    }
    var yn = (Jt.prototype = new mn())
    ;(yn.constructor = Jt), Ht(yn, hn.prototype), (yn.isPureReactComponent = !0)
    function wn() {
      var h = { current: null }
      return Object.seal(h), h
    }
    var rn = Array.isArray
    function zt(h) {
      return rn(h)
    }
    function gn(h) {
      {
        var b = typeof Symbol == 'function' && Symbol.toStringTag,
          U = (b && h[Symbol.toStringTag]) || h.constructor.name || 'Object'
        return U
      }
    }
    function Gt(h) {
      try {
        return Ft(h), !1
      } catch {
        return !0
      }
    }
    function Ft(h) {
      return '' + h
    }
    function qt(h) {
      if (Gt(h))
        return (
          le(
            'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
            gn(h)
          ),
          Ft(h)
        )
    }
    function qn(h, b, U) {
      var j = h.displayName
      if (j) return j
      var Q = b.displayName || b.name || ''
      return Q !== '' ? U + '(' + Q + ')' : U
    }
    function Qn(h) {
      return h.displayName || 'Context'
    }
    function P(h) {
      if (h == null) return null
      if (
        (typeof h.tag == 'number' &&
          le(
            'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
          ),
        typeof h == 'function')
      )
        return h.displayName || h.name || null
      if (typeof h == 'string') return h
      switch (h) {
        case y:
          return 'Fragment'
        case d:
          return 'Portal'
        case x:
          return 'Profiler'
        case f:
          return 'StrictMode'
        case L:
          return 'Suspense'
        case V:
          return 'SuspenseList'
      }
      if (typeof h == 'object')
        switch (h.$$typeof) {
          case C:
            var b = h
            return Qn(b) + '.Consumer'
          case E:
            var U = h
            return Qn(U._context) + '.Provider'
          case R:
            return qn(h, h.render, 'ForwardRef')
          case F:
            var j = h.displayName || null
            return j !== null ? j : P(h.type) || 'Memo'
          case $: {
            var Q = h,
              _e = Q._payload,
              de = Q._init
            try {
              return P(de(_e))
            } catch {
              return null
            }
          }
        }
      return null
    }
    var G = Object.prototype.hasOwnProperty,
      q = { key: !0, ref: !0, __self: !0, __source: !0 },
      he,
      Be,
      Ye
    Ye = {}
    function Fe(h) {
      if (G.call(h, 'ref')) {
        var b = Object.getOwnPropertyDescriptor(h, 'ref').get
        if (b && b.isReactWarning) return !1
      }
      return h.ref !== void 0
    }
    function xe(h) {
      if (G.call(h, 'key')) {
        var b = Object.getOwnPropertyDescriptor(h, 'key').get
        if (b && b.isReactWarning) return !1
      }
      return h.key !== void 0
    }
    function We(h, b) {
      var U = function () {
        he ||
          ((he = !0),
          le(
            '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            b
          ))
      }
      ;(U.isReactWarning = !0),
        Object.defineProperty(h, 'key', { get: U, configurable: !0 })
    }
    function it(h, b) {
      var U = function () {
        Be ||
          ((Be = !0),
          le(
            '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            b
          ))
      }
      ;(U.isReactWarning = !0),
        Object.defineProperty(h, 'ref', { get: U, configurable: !0 })
    }
    function Nt(h) {
      if (
        typeof h.ref == 'string' &&
        Ce.current &&
        h.__self &&
        Ce.current.stateNode !== h.__self
      ) {
        var b = P(Ce.current.type)
        Ye[b] ||
          (le(
            'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            b,
            h.ref
          ),
          (Ye[b] = !0))
      }
    }
    var J = function (h, b, U, j, Q, _e, de) {
      var Le = { $$typeof: v, type: h, key: b, ref: U, props: de, _owner: _e }
      return (
        (Le._store = {}),
        Object.defineProperty(Le._store, 'validated', {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1,
        }),
        Object.defineProperty(Le, '_self', {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j,
        }),
        Object.defineProperty(Le, '_source', {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Q,
        }),
        Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)),
        Le
      )
    }
    function ce(h, b, U) {
      var j,
        Q = {},
        _e = null,
        de = null,
        Le = null,
        Je = null
      if (b != null) {
        Fe(b) && ((de = b.ref), Nt(b)),
          xe(b) && (qt(b.key), (_e = '' + b.key)),
          (Le = b.__self === void 0 ? null : b.__self),
          (Je = b.__source === void 0 ? null : b.__source)
        for (j in b) G.call(b, j) && !q.hasOwnProperty(j) && (Q[j] = b[j])
      }
      var gt = arguments.length - 2
      if (gt === 1) Q.children = U
      else if (gt > 1) {
        for (var wt = Array(gt), Dt = 0; Dt < gt; Dt++)
          wt[Dt] = arguments[Dt + 2]
        Object.freeze && Object.freeze(wt), (Q.children = wt)
      }
      if (h && h.defaultProps) {
        var At = h.defaultProps
        for (j in At) Q[j] === void 0 && (Q[j] = At[j])
      }
      if (_e || de) {
        var Yt =
          typeof h == 'function' ? h.displayName || h.name || 'Unknown' : h
        _e && We(Q, Yt), de && it(Q, Yt)
      }
      return J(h, _e, de, Le, Je, Ce.current, Q)
    }
    function Me(h, b) {
      var U = J(h.type, b, h.ref, h._self, h._source, h._owner, h.props)
      return U
    }
    function qe(h, b, U) {
      if (h == null)
        throw new Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            h +
            '.'
        )
      var j,
        Q = Ht({}, h.props),
        _e = h.key,
        de = h.ref,
        Le = h._self,
        Je = h._source,
        gt = h._owner
      if (b != null) {
        Fe(b) && ((de = b.ref), (gt = Ce.current)),
          xe(b) && (qt(b.key), (_e = '' + b.key))
        var wt
        h.type && h.type.defaultProps && (wt = h.type.defaultProps)
        for (j in b)
          G.call(b, j) &&
            !q.hasOwnProperty(j) &&
            (b[j] === void 0 && wt !== void 0 ? (Q[j] = wt[j]) : (Q[j] = b[j]))
      }
      var Dt = arguments.length - 2
      if (Dt === 1) Q.children = U
      else if (Dt > 1) {
        for (var At = Array(Dt), Yt = 0; Yt < Dt; Yt++)
          At[Yt] = arguments[Yt + 2]
        Q.children = At
      }
      return J(h.type, _e, de, Le, Je, gt, Q)
    }
    function ot(h) {
      return typeof h == 'object' && h !== null && h.$$typeof === v
    }
    var Ot = '.',
      Lt = ':'
    function ht(h) {
      var b = /[=:]/g,
        U = { '=': '=0', ':': '=2' },
        j = h.replace(b, function (Q) {
          return U[Q]
        })
      return '$' + j
    }
    var $e = !1,
      Bt = /\/+/g
    function yt(h) {
      return h.replace(Bt, '$&/')
    }
    function Tt(h, b) {
      return typeof h == 'object' && h !== null && h.key != null
        ? (qt(h.key), ht('' + h.key))
        : b.toString(36)
    }
    function Dr(h, b, U, j, Q) {
      var _e = typeof h
      ;(_e === 'undefined' || _e === 'boolean') && (h = null)
      var de = !1
      if (h === null) de = !0
      else
        switch (_e) {
          case 'string':
          case 'number':
            de = !0
            break
          case 'object':
            switch (h.$$typeof) {
              case v:
              case d:
                de = !0
            }
        }
      if (de) {
        var Le = h,
          Je = Q(Le),
          gt = j === '' ? Ot + Tt(Le, 0) : j
        if (zt(Je)) {
          var wt = ''
          gt != null && (wt = yt(gt) + '/'),
            Dr(Je, b, wt, '', function (Cd) {
              return Cd
            })
        } else
          Je != null &&
            (ot(Je) &&
              (Je.key && (!Le || Le.key !== Je.key) && qt(Je.key),
              (Je = Me(
                Je,
                U +
                  (Je.key && (!Le || Le.key !== Je.key)
                    ? yt('' + Je.key) + '/'
                    : '') +
                  gt
              ))),
            b.push(Je))
        return 1
      }
      var Dt,
        At,
        Yt = 0,
        dt = j === '' ? Ot : j + Lt
      if (zt(h))
        for (var ii = 0; ii < h.length; ii++)
          (Dt = h[ii]), (At = dt + Tt(Dt, ii)), (Yt += Dr(Dt, b, U, At, Q))
      else {
        var _o = Z(h)
        if (typeof _o == 'function') {
          var Il = h
          _o === Il.entries &&
            ($e ||
              ze(
                'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
              ),
            ($e = !0))
          for (var Ed = _o.call(Il), Ra, Wl = 0; !(Ra = Ed.next()).done; )
            (Dt = Ra.value),
              (At = dt + Tt(Dt, Wl++)),
              (Yt += Dr(Dt, b, U, At, Q))
        } else if (_e === 'object') {
          var Gl = String(h)
          throw new Error(
            'Objects are not valid as a React child (found: ' +
              (Gl === '[object Object]'
                ? 'object with keys {' + Object.keys(h).join(', ') + '}'
                : Gl) +
              '). If you meant to render a collection of children, use an array instead.'
          )
        }
      }
      return Yt
    }
    function vr(h, b, U) {
      if (h == null) return h
      var j = [],
        Q = 0
      return (
        Dr(h, j, '', '', function (_e) {
          return b.call(U, _e, Q++)
        }),
        j
      )
    }
    function Zr(h) {
      var b = 0
      return (
        vr(h, function () {
          b++
        }),
        b
      )
    }
    function an(h, b, U) {
      vr(
        h,
        function () {
          b.apply(this, arguments)
        },
        U
      )
    }
    function bn(h) {
      return (
        vr(h, function (b) {
          return b
        }) || []
      )
    }
    function ea(h) {
      if (!ot(h))
        throw new Error(
          'React.Children.only expected to receive a single React element child.'
        )
      return h
    }
    function ba(h) {
      var b = {
        $$typeof: C,
        _currentValue: h,
        _currentValue2: h,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }
      b.Provider = { $$typeof: E, _context: b }
      var U = !1,
        j = !1,
        Q = !1
      {
        var _e = { $$typeof: C, _context: b }
        Object.defineProperties(_e, {
          Provider: {
            get: function () {
              return (
                j ||
                  ((j = !0),
                  le(
                    'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
                  )),
                b.Provider
              )
            },
            set: function (de) {
              b.Provider = de
            },
          },
          _currentValue: {
            get: function () {
              return b._currentValue
            },
            set: function (de) {
              b._currentValue = de
            },
          },
          _currentValue2: {
            get: function () {
              return b._currentValue2
            },
            set: function (de) {
              b._currentValue2 = de
            },
          },
          _threadCount: {
            get: function () {
              return b._threadCount
            },
            set: function (de) {
              b._threadCount = de
            },
          },
          Consumer: {
            get: function () {
              return (
                U ||
                  ((U = !0),
                  le(
                    'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
                  )),
                b.Consumer
              )
            },
          },
          displayName: {
            get: function () {
              return b.displayName
            },
            set: function (de) {
              Q ||
                (ze(
                  "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                  de
                ),
                (Q = !0))
            },
          },
        }),
          (b.Consumer = _e)
      }
      return (b._currentRenderer = null), (b._currentRenderer2 = null), b
    }
    var Sa = -1,
      Ka = 0,
      Xa = 1,
      ta = 2
    function S(h) {
      if (h._status === Sa) {
        var b = h._result,
          U = b()
        if (
          (U.then(
            function (_e) {
              if (h._status === Ka || h._status === Sa) {
                var de = h
                ;(de._status = Xa), (de._result = _e)
              }
            },
            function (_e) {
              if (h._status === Ka || h._status === Sa) {
                var de = h
                ;(de._status = ta), (de._result = _e)
              }
            }
          ),
          h._status === Sa)
        ) {
          var j = h
          ;(j._status = Ka), (j._result = U)
        }
      }
      if (h._status === Xa) {
        var Q = h._result
        return (
          Q === void 0 &&
            le(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
              Q
            ),
          'default' in Q ||
            le(
              `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
              Q
            ),
          Q.default
        )
      } else throw h._result
    }
    function I(h) {
      var b = { _status: Sa, _result: h },
        U = { $$typeof: $, _payload: b, _init: S }
      {
        var j, Q
        Object.defineProperties(U, {
          defaultProps: {
            configurable: !0,
            get: function () {
              return j
            },
            set: function (_e) {
              le(
                'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
              ),
                (j = _e),
                Object.defineProperty(U, 'defaultProps', { enumerable: !0 })
            },
          },
          propTypes: {
            configurable: !0,
            get: function () {
              return Q
            },
            set: function (_e) {
              le(
                'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
              ),
                (Q = _e),
                Object.defineProperty(U, 'propTypes', { enumerable: !0 })
            },
          },
        })
      }
      return U
    }
    function ne(h) {
      h != null && h.$$typeof === F
        ? le(
            'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
          )
        : typeof h != 'function'
        ? le(
            'forwardRef requires a render function but was given %s.',
            h === null ? 'null' : typeof h
          )
        : h.length !== 0 &&
          h.length !== 2 &&
          le(
            'forwardRef render functions accept exactly two parameters: props and ref. %s',
            h.length === 1
              ? 'Did you forget to use the ref parameter?'
              : 'Any additional parameter will be undefined.'
          ),
        h != null &&
          (h.defaultProps != null || h.propTypes != null) &&
          le(
            'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
          )
      var b = { $$typeof: R, render: h }
      {
        var U
        Object.defineProperty(b, 'displayName', {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return U
          },
          set: function (j) {
            ;(U = j), !h.name && !h.displayName && (h.displayName = j)
          },
        })
      }
      return b
    }
    var Ne
    Ne = Symbol.for('react.module.reference')
    function Qe(h) {
      return !!(
        typeof h == 'string' ||
        typeof h == 'function' ||
        h === y ||
        h === x ||
        He ||
        h === f ||
        h === L ||
        h === V ||
        ve ||
        h === _ ||
        Re ||
        Te ||
        nt ||
        (typeof h == 'object' &&
          h !== null &&
          (h.$$typeof === $ ||
            h.$$typeof === F ||
            h.$$typeof === E ||
            h.$$typeof === C ||
            h.$$typeof === R ||
            h.$$typeof === Ne ||
            h.getModuleId !== void 0))
      )
    }
    function ct(h, b) {
      Qe(h) ||
        le(
          'memo: The first argument must be a component. Instead received: %s',
          h === null ? 'null' : typeof h
        )
      var U = { $$typeof: F, type: h, compare: b === void 0 ? null : b }
      {
        var j
        Object.defineProperty(U, 'displayName', {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return j
          },
          set: function (Q) {
            ;(j = Q), !h.name && !h.displayName && (h.displayName = Q)
          },
        })
      }
      return U
    }
    function be() {
      var h = me.current
      return (
        h === null &&
          le(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),
        h
      )
    }
    function Ve(h) {
      var b = be()
      if (h._context !== void 0) {
        var U = h._context
        U.Consumer === h
          ? le(
              'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
            )
          : U.Provider === h &&
            le(
              'Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?'
            )
      }
      return b.useContext(h)
    }
    function Vt(h) {
      var b = be()
      return b.useState(h)
    }
    function Ct(h, b, U) {
      var j = be()
      return j.useReducer(h, b, U)
    }
    function Ke(h) {
      var b = be()
      return b.useRef(h)
    }
    function $n(h, b) {
      var U = be()
      return U.useEffect(h, b)
    }
    function na(h, b) {
      var U = be()
      return U.useInsertionEffect(h, b)
    }
    function ki(h, b) {
      var U = be()
      return U.useLayoutEffect(h, b)
    }
    function hr(h, b) {
      var U = be()
      return U.useCallback(h, b)
    }
    function vd(h, b) {
      var U = be()
      return U.useMemo(h, b)
    }
    function hd(h, b, U) {
      var j = be()
      return j.useImperativeHandle(h, b, U)
    }
    function ks(h, b) {
      {
        var U = be()
        return U.useDebugValue(h, b)
      }
    }
    function md() {
      var h = be()
      return h.useTransition()
    }
    function Ea(h) {
      var b = be()
      return b.useDeferredValue(h)
    }
    function Xe() {
      var h = be()
      return h.useId()
    }
    function Ui(h, b, U) {
      var j = be()
      return j.useSyncExternalStore(h, b, U)
    }
    var Ja = 0,
      Ll,
      Al,
      kl,
      Ul,
      Fl,
      jl,
      Hl
    function Us() {}
    Us.__reactDisabledLog = !0
    function yd() {
      {
        if (Ja === 0) {
          ;(Ll = console.log),
            (Al = console.info),
            (kl = console.warn),
            (Ul = console.error),
            (Fl = console.group),
            (jl = console.groupCollapsed),
            (Hl = console.groupEnd)
          var h = { configurable: !0, enumerable: !0, value: Us, writable: !0 }
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h,
          })
        }
        Ja++
      }
    }
    function zl() {
      {
        if ((Ja--, Ja === 0)) {
          var h = { configurable: !0, enumerable: !0, writable: !0 }
          Object.defineProperties(console, {
            log: Ht({}, h, { value: Ll }),
            info: Ht({}, h, { value: Al }),
            warn: Ht({}, h, { value: kl }),
            error: Ht({}, h, { value: Ul }),
            group: Ht({}, h, { value: Fl }),
            groupCollapsed: Ht({}, h, { value: jl }),
            groupEnd: Ht({}, h, { value: Hl }),
          })
        }
        Ja < 0 &&
          le(
            'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
          )
      }
    }
    var Fi = vt.ReactCurrentDispatcher,
      _r
    function Za(h, b, U) {
      {
        if (_r === void 0)
          try {
            throw Error()
          } catch (Q) {
            var j = Q.stack.trim().match(/\n( *(at )?)/)
            _r = (j && j[1]) || ''
          }
        return (
          `
` +
          _r +
          h
        )
      }
    }
    var ei = !1,
      xo
    {
      var $l = typeof WeakMap == 'function' ? WeakMap : Map
      xo = new $l()
    }
    function Fs(h, b) {
      if (!h || ei) return ''
      {
        var U = xo.get(h)
        if (U !== void 0) return U
      }
      var j
      ei = !0
      var Q = Error.prepareStackTrace
      Error.prepareStackTrace = void 0
      var _e
      ;(_e = Fi.current), (Fi.current = null), yd()
      try {
        if (b) {
          var de = function () {
            throw Error()
          }
          if (
            (Object.defineProperty(de.prototype, 'props', {
              set: function () {
                throw Error()
              },
            }),
            typeof Reflect == 'object' && Reflect.construct)
          ) {
            try {
              Reflect.construct(de, [])
            } catch (dt) {
              j = dt
            }
            Reflect.construct(h, [], de)
          } else {
            try {
              de.call()
            } catch (dt) {
              j = dt
            }
            h.call(de.prototype)
          }
        } else {
          try {
            throw Error()
          } catch (dt) {
            j = dt
          }
          h()
        }
      } catch (dt) {
        if (dt && j && typeof dt.stack == 'string') {
          for (
            var Le = dt.stack.split(`
`),
              Je = j.stack.split(`
`),
              gt = Le.length - 1,
              wt = Je.length - 1;
            gt >= 1 && wt >= 0 && Le[gt] !== Je[wt];

          )
            wt--
          for (; gt >= 1 && wt >= 0; gt--, wt--)
            if (Le[gt] !== Je[wt]) {
              if (gt !== 1 || wt !== 1)
                do
                  if ((gt--, wt--, wt < 0 || Le[gt] !== Je[wt])) {
                    var Dt =
                      `
` + Le[gt].replace(' at new ', ' at ')
                    return (
                      h.displayName &&
                        Dt.includes('<anonymous>') &&
                        (Dt = Dt.replace('<anonymous>', h.displayName)),
                      typeof h == 'function' && xo.set(h, Dt),
                      Dt
                    )
                  }
                while (gt >= 1 && wt >= 0)
              break
            }
        }
      } finally {
        ;(ei = !1), (Fi.current = _e), zl(), (Error.prepareStackTrace = Q)
      }
      var At = h ? h.displayName || h.name : '',
        Yt = At ? Za(At) : ''
      return typeof h == 'function' && xo.set(h, Yt), Yt
    }
    function Pl(h, b, U) {
      return Fs(h, !1)
    }
    function gd(h) {
      var b = h.prototype
      return !!(b && b.isReactComponent)
    }
    function ti(h, b, U) {
      if (h == null) return ''
      if (typeof h == 'function') return Fs(h, gd(h))
      if (typeof h == 'string') return Za(h)
      switch (h) {
        case L:
          return Za('Suspense')
        case V:
          return Za('SuspenseList')
      }
      if (typeof h == 'object')
        switch (h.$$typeof) {
          case R:
            return Pl(h.render)
          case F:
            return ti(h.type, b, U)
          case $: {
            var j = h,
              Q = j._payload,
              _e = j._init
            try {
              return ti(_e(Q), b, U)
            } catch {}
          }
        }
      return ''
    }
    var js = {},
      Bl = vt.ReactDebugCurrentFrame
    function To(h) {
      if (h) {
        var b = h._owner,
          U = ti(h.type, h._source, b ? b.type : null)
        Bl.setExtraStackFrame(U)
      } else Bl.setExtraStackFrame(null)
    }
    function Hs(h, b, U, j, Q) {
      {
        var _e = Function.call.bind(G)
        for (var de in h)
          if (_e(h, de)) {
            var Le = void 0
            try {
              if (typeof h[de] != 'function') {
                var Je = Error(
                  (j || 'React class') +
                    ': ' +
                    U +
                    ' type `' +
                    de +
                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                    typeof h[de] +
                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                )
                throw ((Je.name = 'Invariant Violation'), Je)
              }
              Le = h[de](
                b,
                de,
                j,
                U,
                null,
                'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
              )
            } catch (gt) {
              Le = gt
            }
            Le &&
              !(Le instanceof Error) &&
              (To(Q),
              le(
                '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                j || 'React class',
                U,
                de,
                typeof Le
              ),
              To(null)),
              Le instanceof Error &&
                !(Le.message in js) &&
                ((js[Le.message] = !0),
                To(Q),
                le('Failed %s type: %s', U, Le.message),
                To(null))
          }
      }
    }
    function ft(h) {
      if (h) {
        var b = h._owner,
          U = ti(h.type, h._source, b ? b.type : null)
        X(U)
      } else X(null)
    }
    var Vl
    Vl = !1
    function Yl() {
      if (Ce.current) {
        var h = P(Ce.current.type)
        if (h)
          return (
            `

Check the render method of \`` +
            h +
            '`.'
          )
      }
      return ''
    }
    function Pe(h) {
      if (h !== void 0) {
        var b = h.fileName.replace(/^.*[\\\/]/, ''),
          U = h.lineNumber
        return (
          `

Check your code at ` +
          b +
          ':' +
          U +
          '.'
        )
      }
      return ''
    }
    function zs(h) {
      return h != null ? Pe(h.__source) : ''
    }
    var Pn = {}
    function ji(h) {
      var b = Yl()
      if (!b) {
        var U = typeof h == 'string' ? h : h.displayName || h.name
        U &&
          (b =
            `

Check the top-level render call using <` +
            U +
            '>.')
      }
      return b
    }
    function ni(h, b) {
      if (!(!h._store || h._store.validated || h.key != null)) {
        h._store.validated = !0
        var U = ji(b)
        if (!Pn[U]) {
          Pn[U] = !0
          var j = ''
          h &&
            h._owner &&
            h._owner !== Ce.current &&
            (j = ' It was passed a child from ' + P(h._owner.type) + '.'),
            ft(h),
            le(
              'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
              U,
              j
            ),
            ft(null)
        }
      }
    }
    function $s(h, b) {
      if (typeof h == 'object') {
        if (zt(h))
          for (var U = 0; U < h.length; U++) {
            var j = h[U]
            ot(j) && ni(j, b)
          }
        else if (ot(h)) h._store && (h._store.validated = !0)
        else if (h) {
          var Q = Z(h)
          if (typeof Q == 'function' && Q !== h.entries)
            for (var _e = Q.call(h), de; !(de = _e.next()).done; )
              ot(de.value) && ni(de.value, b)
        }
      }
    }
    function Sn(h) {
      {
        var b = h.type
        if (b == null || typeof b == 'string') return
        var U
        if (typeof b == 'function') U = b.propTypes
        else if (typeof b == 'object' && (b.$$typeof === R || b.$$typeof === F))
          U = b.propTypes
        else return
        if (U) {
          var j = P(b)
          Hs(U, h.props, 'prop', j, h)
        } else if (b.PropTypes !== void 0 && !Vl) {
          Vl = !0
          var Q = P(b)
          le(
            'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
            Q || 'Unknown'
          )
        }
        typeof b.getDefaultProps == 'function' &&
          !b.getDefaultProps.isReactClassApproved &&
          le(
            'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
          )
      }
    }
    function $t(h) {
      {
        for (var b = Object.keys(h.props), U = 0; U < b.length; U++) {
          var j = b[U]
          if (j !== 'children' && j !== 'key') {
            ft(h),
              le(
                'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                j
              ),
              ft(null)
            break
          }
        }
        h.ref !== null &&
          (ft(h),
          le('Invalid attribute `ref` supplied to `React.Fragment`.'),
          ft(null))
      }
    }
    function Ps(h, b, U) {
      var j = Qe(h)
      if (!j) {
        var Q = ''
        ;(h === void 0 ||
          (typeof h == 'object' &&
            h !== null &&
            Object.keys(h).length === 0)) &&
          (Q +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.")
        var _e = zs(b)
        _e ? (Q += _e) : (Q += Yl())
        var de
        h === null
          ? (de = 'null')
          : zt(h)
          ? (de = 'array')
          : h !== void 0 && h.$$typeof === v
          ? ((de = '<' + (P(h.type) || 'Unknown') + ' />'),
            (Q =
              ' Did you accidentally export a JSX literal instead of a component?'))
          : (de = typeof h),
          le(
            'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            de,
            Q
          )
      }
      var Le = ce.apply(this, arguments)
      if (Le == null) return Le
      if (j) for (var Je = 2; Je < arguments.length; Je++) $s(arguments[Je], h)
      return h === y ? $t(Le) : Sn(Le), Le
    }
    var mr = !1
    function ar(h) {
      var b = Ps.bind(null, h)
      return (
        (b.type = h),
        mr ||
          ((mr = !0),
          ze(
            'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
          )),
        Object.defineProperty(b, 'type', {
          enumerable: !1,
          get: function () {
            return (
              ze(
                'Factory.type is deprecated. Access the class directly before passing it to createFactory.'
              ),
              Object.defineProperty(this, 'type', { value: h }),
              h
            )
          },
        }),
        b
      )
    }
    function ra(h, b, U) {
      for (var j = qe.apply(this, arguments), Q = 2; Q < arguments.length; Q++)
        $s(arguments[Q], j.type)
      return Sn(j), j
    }
    function bd(h, b) {
      var U = Ee.transition
      Ee.transition = {}
      var j = Ee.transition
      Ee.transition._updatedFibers = new Set()
      try {
        h()
      } finally {
        if (((Ee.transition = U), U === null && j._updatedFibers)) {
          var Q = j._updatedFibers.size
          Q > 10 &&
            ze(
              'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
            ),
            j._updatedFibers.clear()
        }
      }
    }
    var No = !1,
      Hi = null
    function Bs(h) {
      if (Hi === null)
        try {
          var b = ('require' + Math.random()).slice(0, 7),
            U = i && i[b]
          Hi = U.call(i, 'timers').setImmediate
        } catch {
          Hi = function (Q) {
            No === !1 &&
              ((No = !0),
              typeof MessageChannel > 'u' &&
                le(
                  'This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.'
                ))
            var _e = new MessageChannel()
            ;(_e.port1.onmessage = Q), _e.port2.postMessage(void 0)
          }
        }
      return Hi(h)
    }
    var ri = 0,
      Vs = !1
    function Sd(h) {
      {
        var b = ri
        ri++, K.current === null && (K.current = [])
        var U = K.isBatchingLegacy,
          j
        try {
          if (
            ((K.isBatchingLegacy = !0),
            (j = h()),
            !U && K.didScheduleLegacyUpdate)
          ) {
            var Q = K.current
            Q !== null && ((K.didScheduleLegacyUpdate = !1), Do(Q))
          }
        } catch (At) {
          throw (Ca(b), At)
        } finally {
          K.isBatchingLegacy = U
        }
        if (j !== null && typeof j == 'object' && typeof j.then == 'function') {
          var _e = j,
            de = !1,
            Le = {
              then: function (At, Yt) {
                ;(de = !0),
                  _e.then(
                    function (dt) {
                      Ca(b), ri === 0 ? wo(dt, At, Yt) : At(dt)
                    },
                    function (dt) {
                      Ca(b), Yt(dt)
                    }
                  )
              },
            }
          return (
            !Vs &&
              typeof Promise < 'u' &&
              Promise.resolve()
                .then(function () {})
                .then(function () {
                  de ||
                    ((Vs = !0),
                    le(
                      'You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);'
                    ))
                }),
            Le
          )
        } else {
          var Je = j
          if ((Ca(b), ri === 0)) {
            var gt = K.current
            gt !== null && (Do(gt), (K.current = null))
            var wt = {
              then: function (At, Yt) {
                K.current === null ? ((K.current = []), wo(Je, At, Yt)) : At(Je)
              },
            }
            return wt
          } else {
            var Dt = {
              then: function (At, Yt) {
                At(Je)
              },
            }
            return Dt
          }
        }
      }
    }
    function Ca(h) {
      h !== ri - 1 &&
        le(
          'You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. '
        ),
        (ri = h)
    }
    function wo(h, b, U) {
      {
        var j = K.current
        if (j !== null)
          try {
            Do(j),
              Bs(function () {
                j.length === 0 ? ((K.current = null), b(h)) : wo(h, b, U)
              })
          } catch (Q) {
            U(Q)
          }
        else b(h)
      }
    }
    var ai = !1
    function Do(h) {
      if (!ai) {
        ai = !0
        var b = 0
        try {
          for (; b < h.length; b++) {
            var U = h[b]
            do U = U(!0)
            while (U !== null)
          }
          h.length = 0
        } catch (j) {
          throw ((h = h.slice(b + 1)), j)
        } finally {
          ai = !1
        }
      }
    }
    var Ys = Ps,
      Is = ra,
      Ws = ar,
      Gs = { map: vr, forEach: an, count: Zr, toArray: bn, only: ea }
    ;(u.Children = Gs),
      (u.Component = hn),
      (u.Fragment = y),
      (u.Profiler = x),
      (u.PureComponent = Jt),
      (u.StrictMode = f),
      (u.Suspense = L),
      (u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vt),
      (u.cloneElement = Is),
      (u.createContext = ba),
      (u.createElement = Ys),
      (u.createFactory = Ws),
      (u.createRef = wn),
      (u.forwardRef = ne),
      (u.isValidElement = ot),
      (u.lazy = I),
      (u.memo = ct),
      (u.startTransition = bd),
      (u.unstable_act = Sd),
      (u.useCallback = hr),
      (u.useContext = Ve),
      (u.useDebugValue = ks),
      (u.useDeferredValue = Ea),
      (u.useEffect = $n),
      (u.useId = Xe),
      (u.useImperativeHandle = hd),
      (u.useInsertionEffect = na),
      (u.useLayoutEffect = ki),
      (u.useMemo = vd),
      (u.useReducer = Ct),
      (u.useRef = Ke),
      (u.useState = Vt),
      (u.useSyncExternalStore = Ui),
      (u.useTransition = md),
      (u.version = c),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          'function' &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error())
  })()
})(Um, Um.exports)
;(function (i) {
  i.exports = Um.exports
})(w)
const Wt = ZO(w.exports),
  ed = XO({ __proto__: null, default: Wt }, [w.exports])
var Fm = {},
  Qm = { exports: {} },
  Tr = {},
  nC = { exports: {} },
  rC = {}
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
    var u = !1,
      c = !1,
      v = 5
    function d(J, ce) {
      var Me = J.length
      J.push(ce), x(J, ce, Me)
    }
    function y(J) {
      return J.length === 0 ? null : J[0]
    }
    function f(J) {
      if (J.length === 0) return null
      var ce = J[0],
        Me = J.pop()
      return Me !== ce && ((J[0] = Me), E(J, Me, 0)), ce
    }
    function x(J, ce, Me) {
      for (var qe = Me; qe > 0; ) {
        var ot = (qe - 1) >>> 1,
          Ot = J[ot]
        if (C(Ot, ce) > 0) (J[ot] = ce), (J[qe] = Ot), (qe = ot)
        else return
      }
    }
    function E(J, ce, Me) {
      for (var qe = Me, ot = J.length, Ot = ot >>> 1; qe < Ot; ) {
        var Lt = (qe + 1) * 2 - 1,
          ht = J[Lt],
          $e = Lt + 1,
          Bt = J[$e]
        if (C(ht, ce) < 0)
          $e < ot && C(Bt, ht) < 0
            ? ((J[qe] = Bt), (J[$e] = ce), (qe = $e))
            : ((J[qe] = ht), (J[Lt] = ce), (qe = Lt))
        else if ($e < ot && C(Bt, ce) < 0) (J[qe] = Bt), (J[$e] = ce), (qe = $e)
        else return
      }
    }
    function C(J, ce) {
      var Me = J.sortIndex - ce.sortIndex
      return Me !== 0 ? Me : J.id - ce.id
    }
    var R = 1,
      L = 2,
      V = 3,
      F = 4,
      $ = 5
    function _(J, ce) {}
    var ge =
      typeof performance == 'object' && typeof performance.now == 'function'
    if (ge) {
      var oe = performance
      i.unstable_now = function () {
        return oe.now()
      }
    } else {
      var Z = Date,
        me = Z.now()
      i.unstable_now = function () {
        return Z.now() - me
      }
    }
    var Ee = 1073741823,
      K = -1,
      Ce = 250,
      ee = 5e3,
      lt = 1e4,
      X = Ee,
      Re = [],
      Te = [],
      nt = 1,
      ve = null,
      He = V,
      vt = !1,
      ze = !1,
      le = !1,
      Ue = typeof setTimeout == 'function' ? setTimeout : null,
      Kt = typeof clearTimeout == 'function' ? clearTimeout : null,
      zn = typeof setImmediate < 'u' ? setImmediate : null
    typeof navigator < 'u' &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling)
    function Xt(J) {
      for (var ce = y(Te); ce !== null; ) {
        if (ce.callback === null) f(Te)
        else if (ce.startTime <= J)
          f(Te), (ce.sortIndex = ce.expirationTime), d(Re, ce)
        else return
        ce = y(Te)
      }
    }
    function Ht(J) {
      if (((le = !1), Xt(J), !ze))
        if (y(Re) !== null) (ze = !0), Fe(vn)
        else {
          var ce = y(Te)
          ce !== null && xe(Ht, ce.startTime - J)
        }
    }
    function vn(J, ce) {
      ;(ze = !1), le && ((le = !1), We()), (vt = !0)
      var Me = He
      try {
        var qe
        if (!c) return hn(J, ce)
      } finally {
        ;(ve = null), (He = Me), (vt = !1)
      }
    }
    function hn(J, ce) {
      var Me = ce
      for (
        Xt(Me), ve = y(Re);
        ve !== null && !u && !(ve.expirationTime > Me && (!J || Qn()));

      ) {
        var qe = ve.callback
        if (typeof qe == 'function') {
          ;(ve.callback = null), (He = ve.priorityLevel)
          var ot = ve.expirationTime <= Me,
            Ot = qe(ot)
          ;(Me = i.unstable_now()),
            typeof Ot == 'function'
              ? (ve.callback = Ot)
              : ve === y(Re) && f(Re),
            Xt(Me)
        } else f(Re)
        ve = y(Re)
      }
      if (ve !== null) return !0
      var Lt = y(Te)
      return Lt !== null && xe(Ht, Lt.startTime - Me), !1
    }
    function wr(J, ce) {
      switch (J) {
        case R:
        case L:
        case V:
        case F:
        case $:
          break
        default:
          J = V
      }
      var Me = He
      He = J
      try {
        return ce()
      } finally {
        He = Me
      }
    }
    function dr(J) {
      var ce
      switch (He) {
        case R:
        case L:
        case V:
          ce = V
          break
        default:
          ce = He
          break
      }
      var Me = He
      He = ce
      try {
        return J()
      } finally {
        He = Me
      }
    }
    function pr(J) {
      var ce = He
      return function () {
        var Me = He
        He = ce
        try {
          return J.apply(this, arguments)
        } finally {
          He = Me
        }
      }
    }
    function mn(J, ce, Me) {
      var qe = i.unstable_now(),
        ot
      if (typeof Me == 'object' && Me !== null) {
        var Ot = Me.delay
        typeof Ot == 'number' && Ot > 0 ? (ot = qe + Ot) : (ot = qe)
      } else ot = qe
      var Lt
      switch (J) {
        case R:
          Lt = K
          break
        case L:
          Lt = Ce
          break
        case $:
          Lt = X
          break
        case F:
          Lt = lt
          break
        case V:
        default:
          Lt = ee
          break
      }
      var ht = ot + Lt,
        $e = {
          id: nt++,
          callback: ce,
          priorityLevel: J,
          startTime: ot,
          expirationTime: ht,
          sortIndex: -1,
        }
      return (
        ot > qe
          ? (($e.sortIndex = ot),
            d(Te, $e),
            y(Re) === null &&
              $e === y(Te) &&
              (le ? We() : (le = !0), xe(Ht, ot - qe)))
          : (($e.sortIndex = ht), d(Re, $e), !ze && !vt && ((ze = !0), Fe(vn))),
        $e
      )
    }
    function Jt() {}
    function yn() {
      !ze && !vt && ((ze = !0), Fe(vn))
    }
    function wn() {
      return y(Re)
    }
    function rn(J) {
      J.callback = null
    }
    function zt() {
      return He
    }
    var gn = !1,
      Gt = null,
      Ft = -1,
      qt = v,
      qn = -1
    function Qn() {
      var J = i.unstable_now() - qn
      return !(J < qt)
    }
    function P() {}
    function G(J) {
      if (J < 0 || J > 125) {
        console.error(
          'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
        )
        return
      }
      J > 0 ? (qt = Math.floor(1e3 / J)) : (qt = v)
    }
    var q = function () {
        if (Gt !== null) {
          var J = i.unstable_now()
          qn = J
          var ce = !0,
            Me = !0
          try {
            Me = Gt(ce, J)
          } finally {
            Me ? he() : ((gn = !1), (Gt = null))
          }
        } else gn = !1
      },
      he
    if (typeof zn == 'function')
      he = function () {
        zn(q)
      }
    else if (typeof MessageChannel < 'u') {
      var Be = new MessageChannel(),
        Ye = Be.port2
      ;(Be.port1.onmessage = q),
        (he = function () {
          Ye.postMessage(null)
        })
    } else
      he = function () {
        Ue(q, 0)
      }
    function Fe(J) {
      ;(Gt = J), gn || ((gn = !0), he())
    }
    function xe(J, ce) {
      Ft = Ue(function () {
        J(i.unstable_now())
      }, ce)
    }
    function We() {
      Kt(Ft), (Ft = -1)
    }
    var it = P,
      Nt = null
    ;(i.unstable_IdlePriority = $),
      (i.unstable_ImmediatePriority = R),
      (i.unstable_LowPriority = F),
      (i.unstable_NormalPriority = V),
      (i.unstable_Profiling = Nt),
      (i.unstable_UserBlockingPriority = L),
      (i.unstable_cancelCallback = rn),
      (i.unstable_continueExecution = yn),
      (i.unstable_forceFrameRate = G),
      (i.unstable_getCurrentPriorityLevel = zt),
      (i.unstable_getFirstCallbackNode = wn),
      (i.unstable_next = dr),
      (i.unstable_pauseExecution = Jt),
      (i.unstable_requestPaint = it),
      (i.unstable_runWithPriority = wr),
      (i.unstable_scheduleCallback = mn),
      (i.unstable_shouldYield = Qn),
      (i.unstable_wrapCallback = pr),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
          'function' &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error())
  })()
})(rC)
;(function (i) {
  i.exports = rC
})(nC)
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
  var i = w.exports,
    u = nC.exports,
    c = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    v = !1
  function d(e) {
    v = e
  }
  function y(e) {
    if (!v) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r]
      x('warn', e, n)
    }
  }
  function f(e) {
    if (!v) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r]
      x('error', e, n)
    }
  }
  function x(e, t, n) {
    {
      var r = c.ReactDebugCurrentFrame,
        a = r.getStackAddendum()
      a !== '' && ((t += '%s'), (n = n.concat([a])))
      var o = n.map(function (l) {
        return String(l)
      })
      o.unshift('Warning: ' + t),
        Function.prototype.apply.call(console[e], console, o)
    }
  }
  var E = 0,
    C = 1,
    R = 2,
    L = 3,
    V = 4,
    F = 5,
    $ = 6,
    _ = 7,
    ge = 8,
    oe = 9,
    Z = 10,
    me = 11,
    Ee = 12,
    K = 13,
    Ce = 14,
    ee = 15,
    lt = 16,
    X = 17,
    Re = 18,
    Te = 19,
    nt = 21,
    ve = 22,
    He = 23,
    vt = 24,
    ze = 25,
    le = !0,
    Ue = !1,
    Kt = !1,
    zn = !1,
    Xt = !1,
    Ht = !0,
    vn = !1,
    hn = !1,
    wr = !0,
    dr = !0,
    pr = !0,
    mn = new Set(),
    Jt = {},
    yn = {}
  function wn(e, t) {
    rn(e, t), rn(e + 'Capture', t)
  }
  function rn(e, t) {
    Jt[e] &&
      f(
        'EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.',
        e
      ),
      (Jt[e] = t)
    {
      var n = e.toLowerCase()
      ;(yn[n] = e), e === 'onDoubleClick' && (yn.ondblclick = e)
    }
    for (var r = 0; r < t.length; r++) mn.add(t[r])
  }
  var zt =
      typeof window < 'u' &&
      typeof window.document < 'u' &&
      typeof window.document.createElement < 'u',
    gn = Object.prototype.hasOwnProperty
  function Gt(e) {
    {
      var t = typeof Symbol == 'function' && Symbol.toStringTag,
        n = (t && e[Symbol.toStringTag]) || e.constructor.name || 'Object'
      return n
    }
  }
  function Ft(e) {
    try {
      return qt(e), !1
    } catch {
      return !0
    }
  }
  function qt(e) {
    return '' + e
  }
  function qn(e, t) {
    if (Ft(e))
      return (
        f(
          'The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Gt(e)
        ),
        qt(e)
      )
  }
  function Qn(e) {
    if (Ft(e))
      return (
        f(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          Gt(e)
        ),
        qt(e)
      )
  }
  function P(e, t) {
    if (Ft(e))
      return (
        f(
          'The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Gt(e)
        ),
        qt(e)
      )
  }
  function G(e, t) {
    if (Ft(e))
      return (
        f(
          'The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.',
          t,
          Gt(e)
        ),
        qt(e)
      )
  }
  function q(e) {
    if (Ft(e))
      return (
        f(
          'The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.',
          Gt(e)
        ),
        qt(e)
      )
  }
  function he(e) {
    if (Ft(e))
      return (
        f(
          'Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.',
          Gt(e)
        ),
        qt(e)
      )
  }
  var Be = 0,
    Ye = 1,
    Fe = 2,
    xe = 3,
    We = 4,
    it = 5,
    Nt = 6,
    J =
      ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
    ce = J + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
    Me = new RegExp('^[' + J + '][' + ce + ']*$'),
    qe = {},
    ot = {}
  function Ot(e) {
    return gn.call(ot, e)
      ? !0
      : gn.call(qe, e)
      ? !1
      : Me.test(e)
      ? ((ot[e] = !0), !0)
      : ((qe[e] = !0), f('Invalid attribute name: `%s`', e), !1)
  }
  function Lt(e, t, n) {
    return t !== null
      ? t.type === Be
      : n
      ? !1
      : e.length > 2 &&
        (e[0] === 'o' || e[0] === 'O') &&
        (e[1] === 'n' || e[1] === 'N')
  }
  function ht(e, t, n, r) {
    if (n !== null && n.type === Be) return !1
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
  function $e(e, t, n, r) {
    if (t === null || typeof t > 'u' || ht(e, t, n, r)) return !0
    if (r) return !1
    if (n !== null)
      switch (n.type) {
        case xe:
          return !t
        case We:
          return t === !1
        case it:
          return isNaN(t)
        case Nt:
          return isNaN(t) || t < 1
      }
    return !1
  }
  function Bt(e) {
    return Tt.hasOwnProperty(e) ? Tt[e] : null
  }
  function yt(e, t, n, r, a, o, l) {
    ;(this.acceptsBooleans = t === Fe || t === xe || t === We),
      (this.attributeName = r),
      (this.attributeNamespace = a),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = l)
  }
  var Tt = {},
    Dr = [
      'children',
      'dangerouslySetInnerHTML',
      'defaultValue',
      'defaultChecked',
      'innerHTML',
      'suppressContentEditableWarning',
      'suppressHydrationWarning',
      'style',
    ]
  Dr.forEach(function (e) {
    Tt[e] = new yt(e, Be, !1, e, null, !1, !1)
  }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0],
        n = e[1]
      Tt[t] = new yt(t, Ye, !1, n, null, !1, !1)
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (
      e
    ) {
      Tt[e] = new yt(e, Fe, !1, e.toLowerCase(), null, !1, !1)
    }),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      Tt[e] = new yt(e, Fe, !1, e, null, !1, !1)
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
      Tt[e] = new yt(e, xe, !1, e.toLowerCase(), null, !1, !1)
    }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      Tt[e] = new yt(e, xe, !0, e, null, !1, !1)
    }),
    ['capture', 'download'].forEach(function (e) {
      Tt[e] = new yt(e, We, !1, e, null, !1, !1)
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      Tt[e] = new yt(e, Nt, !1, e, null, !1, !1)
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      Tt[e] = new yt(e, it, !1, e.toLowerCase(), null, !1, !1)
    })
  var vr = /[\-\:]([a-z])/g,
    Zr = function (e) {
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
    var t = e.replace(vr, Zr)
    Tt[t] = new yt(t, Ye, !1, e, null, !1, !1)
  }),
    [
      'xlink:actuate',
      'xlink:arcrole',
      'xlink:role',
      'xlink:show',
      'xlink:title',
      'xlink:type',
    ].forEach(function (e) {
      var t = e.replace(vr, Zr)
      Tt[t] = new yt(t, Ye, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(vr, Zr)
      Tt[t] = new yt(
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
      Tt[e] = new yt(e, Ye, !1, e.toLowerCase(), null, !1, !1)
    })
  var an = 'xlinkHref'
  ;(Tt[an] = new yt(
    'xlinkHref',
    Ye,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
  )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      Tt[e] = new yt(e, Ye, !1, e.toLowerCase(), null, !0, !0)
    })
  var bn =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,
    ea = !1
  function ba(e) {
    !ea &&
      bn.test(e) &&
      ((ea = !0),
      f(
        'A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.',
        JSON.stringify(e)
      ))
  }
  function Sa(e, t, n, r) {
    if (r.mustUseProperty) {
      var a = r.propertyName
      return e[a]
    } else {
      qn(n, t), r.sanitizeURL && ba('' + n)
      var o = r.attributeName,
        l = null
      if (r.type === We) {
        if (e.hasAttribute(o)) {
          var s = e.getAttribute(o)
          return s === '' ? !0 : $e(t, n, r, !1) ? s : s === '' + n ? n : s
        }
      } else if (e.hasAttribute(o)) {
        if ($e(t, n, r, !1)) return e.getAttribute(o)
        if (r.type === xe) return n
        l = e.getAttribute(o)
      }
      return $e(t, n, r, !1) ? (l === null ? n : l) : l === '' + n ? n : l
    }
  }
  function Ka(e, t, n, r) {
    {
      if (!Ot(t)) return
      if (!e.hasAttribute(t)) return n === void 0 ? void 0 : null
      var a = e.getAttribute(t)
      return qn(n, t), a === '' + n ? n : a
    }
  }
  function Xa(e, t, n, r) {
    var a = Bt(t)
    if (!Lt(t, a, r)) {
      if (($e(t, n, a, r) && (n = null), r || a === null)) {
        if (Ot(t)) {
          var o = t
          n === null
            ? e.removeAttribute(o)
            : (qn(n, t), e.setAttribute(o, '' + n))
        }
        return
      }
      var l = a.mustUseProperty
      if (l) {
        var s = a.propertyName
        if (n === null) {
          var p = a.type
          e[s] = p === xe ? !1 : ''
        } else e[s] = n
        return
      }
      var m = a.attributeName,
        g = a.attributeNamespace
      if (n === null) e.removeAttribute(m)
      else {
        var N = a.type,
          T
        N === xe || (N === We && n === !0)
          ? (T = '')
          : (qn(n, m), (T = '' + n), a.sanitizeURL && ba(T.toString())),
          g ? e.setAttributeNS(g, m, T) : e.setAttribute(m, T)
      }
    }
  }
  var ta = Symbol.for('react.element'),
    S = Symbol.for('react.portal'),
    I = Symbol.for('react.fragment'),
    ne = Symbol.for('react.strict_mode'),
    Ne = Symbol.for('react.profiler'),
    Qe = Symbol.for('react.provider'),
    ct = Symbol.for('react.context'),
    be = Symbol.for('react.forward_ref'),
    Ve = Symbol.for('react.suspense'),
    Vt = Symbol.for('react.suspense_list'),
    Ct = Symbol.for('react.memo'),
    Ke = Symbol.for('react.lazy'),
    $n = Symbol.for('react.scope'),
    na = Symbol.for('react.debug_trace_mode'),
    ki = Symbol.for('react.offscreen'),
    hr = Symbol.for('react.legacy_hidden'),
    vd = Symbol.for('react.cache'),
    hd = Symbol.for('react.tracing_marker'),
    ks = Symbol.iterator,
    md = '@@iterator'
  function Ea(e) {
    if (e === null || typeof e != 'object') return null
    var t = (ks && e[ks]) || e[md]
    return typeof t == 'function' ? t : null
  }
  var Xe = Object.assign,
    Ui = 0,
    Ja,
    Ll,
    Al,
    kl,
    Ul,
    Fl,
    jl
  function Hl() {}
  Hl.__reactDisabledLog = !0
  function Us() {
    {
      if (Ui === 0) {
        ;(Ja = console.log),
          (Ll = console.info),
          (Al = console.warn),
          (kl = console.error),
          (Ul = console.group),
          (Fl = console.groupCollapsed),
          (jl = console.groupEnd)
        var e = { configurable: !0, enumerable: !0, value: Hl, writable: !0 }
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
      Ui++
    }
  }
  function yd() {
    {
      if ((Ui--, Ui === 0)) {
        var e = { configurable: !0, enumerable: !0, writable: !0 }
        Object.defineProperties(console, {
          log: Xe({}, e, { value: Ja }),
          info: Xe({}, e, { value: Ll }),
          warn: Xe({}, e, { value: Al }),
          error: Xe({}, e, { value: kl }),
          group: Xe({}, e, { value: Ul }),
          groupCollapsed: Xe({}, e, { value: Fl }),
          groupEnd: Xe({}, e, { value: jl }),
        })
      }
      Ui < 0 &&
        f(
          'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
        )
    }
  }
  var zl = c.ReactCurrentDispatcher,
    Fi
  function _r(e, t, n) {
    {
      if (Fi === void 0)
        try {
          throw Error()
        } catch (a) {
          var r = a.stack.trim().match(/\n( *(at )?)/)
          Fi = (r && r[1]) || ''
        }
      return (
        `
` +
        Fi +
        e
      )
    }
  }
  var Za = !1,
    ei
  {
    var xo = typeof WeakMap == 'function' ? WeakMap : Map
    ei = new xo()
  }
  function $l(e, t) {
    if (!e || Za) return ''
    {
      var n = ei.get(e)
      if (n !== void 0) return n
    }
    var r
    Za = !0
    var a = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    var o
    ;(o = zl.current), (zl.current = null), Us()
    try {
      if (t) {
        var l = function () {
          throw Error()
        }
        if (
          (Object.defineProperty(l.prototype, 'props', {
            set: function () {
              throw Error()
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(l, [])
          } catch (k) {
            r = k
          }
          Reflect.construct(e, [], l)
        } else {
          try {
            l.call()
          } catch (k) {
            r = k
          }
          e.call(l.prototype)
        }
      } else {
        try {
          throw Error()
        } catch (k) {
          r = k
        }
        e()
      }
    } catch (k) {
      if (k && r && typeof k.stack == 'string') {
        for (
          var s = k.stack.split(`
`),
            p = r.stack.split(`
`),
            m = s.length - 1,
            g = p.length - 1;
          m >= 1 && g >= 0 && s[m] !== p[g];

        )
          g--
        for (; m >= 1 && g >= 0; m--, g--)
          if (s[m] !== p[g]) {
            if (m !== 1 || g !== 1)
              do
                if ((m--, g--, g < 0 || s[m] !== p[g])) {
                  var N =
                    `
` + s[m].replace(' at new ', ' at ')
                  return (
                    e.displayName &&
                      N.includes('<anonymous>') &&
                      (N = N.replace('<anonymous>', e.displayName)),
                    typeof e == 'function' && ei.set(e, N),
                    N
                  )
                }
              while (m >= 1 && g >= 0)
            break
          }
      }
    } finally {
      ;(Za = !1), (zl.current = o), yd(), (Error.prepareStackTrace = a)
    }
    var T = e ? e.displayName || e.name : '',
      A = T ? _r(T) : ''
    return typeof e == 'function' && ei.set(e, A), A
  }
  function Fs(e, t, n) {
    return $l(e, !0)
  }
  function Pl(e, t, n) {
    return $l(e, !1)
  }
  function gd(e) {
    var t = e.prototype
    return !!(t && t.isReactComponent)
  }
  function ti(e, t, n) {
    if (e == null) return ''
    if (typeof e == 'function') return $l(e, gd(e))
    if (typeof e == 'string') return _r(e)
    switch (e) {
      case Ve:
        return _r('Suspense')
      case Vt:
        return _r('SuspenseList')
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case be:
          return Pl(e.render)
        case Ct:
          return ti(e.type, t, n)
        case Ke: {
          var r = e,
            a = r._payload,
            o = r._init
          try {
            return ti(o(a), t, n)
          } catch {}
        }
      }
    return ''
  }
  function js(e) {
    switch ((e._debugOwner && e._debugOwner.type, e._debugSource, e.tag)) {
      case F:
        return _r(e.type)
      case lt:
        return _r('Lazy')
      case K:
        return _r('Suspense')
      case Te:
        return _r('SuspenseList')
      case E:
      case R:
      case ee:
        return Pl(e.type)
      case me:
        return Pl(e.type.render)
      case C:
        return Fs(e.type)
      default:
        return ''
    }
  }
  function Bl(e) {
    try {
      var t = '',
        n = e
      do (t += js(n)), (n = n.return)
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
  function To(e, t, n) {
    var r = e.displayName
    if (r) return r
    var a = t.displayName || t.name || ''
    return a !== '' ? n + '(' + a + ')' : n
  }
  function Hs(e) {
    return e.displayName || 'Context'
  }
  function ft(e) {
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
      case I:
        return 'Fragment'
      case S:
        return 'Portal'
      case Ne:
        return 'Profiler'
      case ne:
        return 'StrictMode'
      case Ve:
        return 'Suspense'
      case Vt:
        return 'SuspenseList'
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case ct:
          var t = e
          return Hs(t) + '.Consumer'
        case Qe:
          var n = e
          return Hs(n._context) + '.Provider'
        case be:
          return To(e, e.render, 'ForwardRef')
        case Ct:
          var r = e.displayName || null
          return r !== null ? r : ft(e.type) || 'Memo'
        case Ke: {
          var a = e,
            o = a._payload,
            l = a._init
          try {
            return ft(l(o))
          } catch {
            return null
          }
        }
      }
    return null
  }
  function Vl(e, t, n) {
    var r = t.displayName || t.name || ''
    return e.displayName || (r !== '' ? n + '(' + r + ')' : n)
  }
  function Yl(e) {
    return e.displayName || 'Context'
  }
  function Pe(e) {
    var t = e.tag,
      n = e.type
    switch (t) {
      case vt:
        return 'Cache'
      case oe:
        var r = n
        return Yl(r) + '.Consumer'
      case Z:
        var a = n
        return Yl(a._context) + '.Provider'
      case Re:
        return 'DehydratedFragment'
      case me:
        return Vl(n, n.render, 'ForwardRef')
      case _:
        return 'Fragment'
      case F:
        return n
      case V:
        return 'Portal'
      case L:
        return 'Root'
      case $:
        return 'Text'
      case lt:
        return ft(n)
      case ge:
        return n === ne ? 'StrictMode' : 'Mode'
      case ve:
        return 'Offscreen'
      case Ee:
        return 'Profiler'
      case nt:
        return 'Scope'
      case K:
        return 'Suspense'
      case Te:
        return 'SuspenseList'
      case ze:
        return 'TracingMarker'
      case C:
      case E:
      case X:
      case R:
      case Ce:
      case ee:
        if (typeof n == 'function') return n.displayName || n.name || null
        if (typeof n == 'string') return n
        break
    }
    return null
  }
  var zs = c.ReactDebugCurrentFrame,
    Pn = null,
    ji = !1
  function ni() {
    {
      if (Pn === null) return null
      var e = Pn._debugOwner
      if (e !== null && typeof e < 'u') return Pe(e)
    }
    return null
  }
  function $s() {
    return Pn === null ? '' : Bl(Pn)
  }
  function Sn() {
    ;(zs.getCurrentStack = null), (Pn = null), (ji = !1)
  }
  function $t(e) {
    ;(zs.getCurrentStack = e === null ? null : $s), (Pn = e), (ji = !1)
  }
  function Ps() {
    return Pn
  }
  function mr(e) {
    ji = e
  }
  function ar(e) {
    return '' + e
  }
  function ra(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e
      case 'object':
        return he(e), e
      default:
        return ''
    }
  }
  var bd = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0,
  }
  function No(e, t) {
    bd[t.type] ||
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
  function Hi(e) {
    var t = e.type,
      n = e.nodeName
    return (
      n && n.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
    )
  }
  function Bs(e) {
    return e._valueTracker
  }
  function ri(e) {
    e._valueTracker = null
  }
  function Vs(e) {
    var t = ''
    return e && (Hi(e) ? (t = e.checked ? 'true' : 'false') : (t = e.value)), t
  }
  function Sd(e) {
    var t = Hi(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
    he(e[t])
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
        o = n.set
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return a.call(this)
        },
        set: function (s) {
          he(s), (r = '' + s), o.call(this, s)
        },
      }),
        Object.defineProperty(e, t, { enumerable: n.enumerable })
      var l = {
        getValue: function () {
          return r
        },
        setValue: function (s) {
          he(s), (r = '' + s)
        },
        stopTracking: function () {
          ri(e), delete e[t]
        },
      }
      return l
    }
  }
  function Ca(e) {
    Bs(e) || (e._valueTracker = Sd(e))
  }
  function wo(e) {
    if (!e) return !1
    var t = Bs(e)
    if (!t) return !0
    var n = t.getValue(),
      r = Vs(e)
    return r !== n ? (t.setValue(r), !0) : !1
  }
  function ai(e) {
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
  var Do = !1,
    Ys = !1,
    Is = !1,
    Ws = !1
  function Gs(e) {
    var t = e.type === 'checkbox' || e.type === 'radio'
    return t ? e.checked != null : e.value != null
  }
  function h(e, t) {
    var n = e,
      r = t.checked,
      a = Xe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r != null ? r : n._wrapperState.initialChecked,
      })
    return a
  }
  function b(e, t) {
    No('input', t),
      t.checked !== void 0 &&
        t.defaultChecked !== void 0 &&
        !Ys &&
        (f(
          '%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          ni() || 'A component',
          t.type
        ),
        (Ys = !0)),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !Do &&
        (f(
          '%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          ni() || 'A component',
          t.type
        ),
        (Do = !0))
    var n = e,
      r = t.defaultValue == null ? '' : t.defaultValue
    n._wrapperState = {
      initialChecked: t.checked != null ? t.checked : t.defaultChecked,
      initialValue: ra(t.value != null ? t.value : r),
      controlled: Gs(t),
    }
  }
  function U(e, t) {
    var n = e,
      r = t.checked
    r != null && Xa(n, 'checked', r, !1)
  }
  function j(e, t) {
    var n = e
    {
      var r = Gs(t)
      !n._wrapperState.controlled &&
        r &&
        !Ws &&
        (f(
          'A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
        ),
        (Ws = !0)),
        n._wrapperState.controlled &&
          !r &&
          !Is &&
          (f(
            'A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components'
          ),
          (Is = !0))
    }
    U(e, t)
    var a = ra(t.value),
      o = t.type
    if (a != null)
      o === 'number'
        ? ((a === 0 && n.value === '') || n.value != a) && (n.value = ar(a))
        : n.value !== ar(a) && (n.value = ar(a))
    else if (o === 'submit' || o === 'reset') {
      n.removeAttribute('value')
      return
    }
    t.hasOwnProperty('value')
      ? Le(n, t.type, a)
      : t.hasOwnProperty('defaultValue') && Le(n, t.type, ra(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (n.defaultChecked = !!t.defaultChecked)
  }
  function Q(e, t, n) {
    var r = e
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var a = t.type,
        o = a === 'submit' || a === 'reset'
      if (o && (t.value === void 0 || t.value === null)) return
      var l = ar(r._wrapperState.initialValue)
      n || (l !== r.value && (r.value = l)), (r.defaultValue = l)
    }
    var s = r.name
    s !== '' && (r.name = ''),
      (r.defaultChecked = !r.defaultChecked),
      (r.defaultChecked = !!r._wrapperState.initialChecked),
      s !== '' && (r.name = s)
  }
  function _e(e, t) {
    var n = e
    j(n, t), de(n, t)
  }
  function de(e, t) {
    var n = t.name
    if (t.type === 'radio' && n != null) {
      for (var r = e; r.parentNode; ) r = r.parentNode
      qn(n, 'name')
      for (
        var a = r.querySelectorAll(
            'input[name=' + JSON.stringify('' + n) + '][type="radio"]'
          ),
          o = 0;
        o < a.length;
        o++
      ) {
        var l = a[o]
        if (!(l === e || l.form !== e.form)) {
          var s = Ac(l)
          if (!s)
            throw new Error(
              'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.'
            )
          wo(l), j(l, s)
        }
      }
    }
  }
  function Le(e, t, n) {
    ;(t !== 'number' || ai(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = ar(e._wrapperState.initialValue))
        : e.defaultValue !== ar(n) && (e.defaultValue = ar(n)))
  }
  var Je = !1,
    gt = !1,
    wt = !1
  function Dt(e, t) {
    t.value == null &&
      (typeof t.children == 'object' && t.children !== null
        ? i.Children.forEach(t.children, function (n) {
            n != null &&
              (typeof n == 'string' ||
                typeof n == 'number' ||
                gt ||
                ((gt = !0),
                f(
                  'Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.'
                )))
          })
        : t.dangerouslySetInnerHTML != null &&
          (wt ||
            ((wt = !0),
            f(
              'Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.'
            )))),
      t.selected != null &&
        !Je &&
        (f(
          'Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.'
        ),
        (Je = !0))
  }
  function At(e, t) {
    t.value != null && e.setAttribute('value', ar(ra(t.value)))
  }
  var Yt = Array.isArray
  function dt(e) {
    return Yt(e)
  }
  var ii
  ii = !1
  function _o() {
    var e = ni()
    return e
      ? `

Check the render method of \`` +
          e +
          '`.'
      : ''
  }
  var Il = ['value', 'defaultValue']
  function Ed(e) {
    {
      No('select', e)
      for (var t = 0; t < Il.length; t++) {
        var n = Il[t]
        if (e[n] != null) {
          var r = dt(e[n])
          e.multiple && !r
            ? f(
                'The `%s` prop supplied to <select> must be an array if `multiple` is true.%s',
                n,
                _o()
              )
            : !e.multiple &&
              r &&
              f(
                'The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s',
                n,
                _o()
              )
        }
      }
    }
  }
  function Ra(e, t, n, r) {
    var a = e.options
    if (t) {
      for (var o = n, l = {}, s = 0; s < o.length; s++) l['$' + o[s]] = !0
      for (var p = 0; p < a.length; p++) {
        var m = l.hasOwnProperty('$' + a[p].value)
        a[p].selected !== m && (a[p].selected = m),
          m && r && (a[p].defaultSelected = !0)
      }
    } else {
      for (var g = ar(ra(n)), N = null, T = 0; T < a.length; T++) {
        if (a[T].value === g) {
          ;(a[T].selected = !0), r && (a[T].defaultSelected = !0)
          return
        }
        N === null && !a[T].disabled && (N = a[T])
      }
      N !== null && (N.selected = !0)
    }
  }
  function Wl(e, t) {
    return Xe({}, t, { value: void 0 })
  }
  function Gl(e, t) {
    var n = e
    Ed(t),
      (n._wrapperState = { wasMultiple: !!t.multiple }),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !ii &&
        (f(
          'Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components'
        ),
        (ii = !0))
  }
  function Cd(e, t) {
    var n = e
    n.multiple = !!t.multiple
    var r = t.value
    r != null
      ? Ra(n, !!t.multiple, r, !1)
      : t.defaultValue != null && Ra(n, !!t.multiple, t.defaultValue, !0)
  }
  function FC(e, t) {
    var n = e,
      r = n._wrapperState.wasMultiple
    n._wrapperState.wasMultiple = !!t.multiple
    var a = t.value
    a != null
      ? Ra(n, !!t.multiple, a, !1)
      : r !== !!t.multiple &&
        (t.defaultValue != null
          ? Ra(n, !!t.multiple, t.defaultValue, !0)
          : Ra(n, !!t.multiple, t.multiple ? [] : '', !1))
  }
  function jC(e, t) {
    var n = e,
      r = t.value
    r != null && Ra(n, !!t.multiple, r, !1)
  }
  var dy = !1
  function Rd(e, t) {
    var n = e
    if (t.dangerouslySetInnerHTML != null)
      throw new Error(
        '`dangerouslySetInnerHTML` does not make sense on <textarea>.'
      )
    var r = Xe({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: ar(n._wrapperState.initialValue),
    })
    return r
  }
  function py(e, t) {
    var n = e
    No('textarea', t),
      t.value !== void 0 &&
        t.defaultValue !== void 0 &&
        !dy &&
        (f(
          '%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components',
          ni() || 'A component'
        ),
        (dy = !0))
    var r = t.value
    if (r == null) {
      var a = t.children,
        o = t.defaultValue
      if (a != null) {
        f(
          'Use the `defaultValue` or `value` props instead of setting children on <textarea>.'
        )
        {
          if (o != null)
            throw new Error(
              'If you supply `defaultValue` on a <textarea>, do not pass children.'
            )
          if (dt(a)) {
            if (a.length > 1)
              throw new Error('<textarea> can only have at most one child.')
            a = a[0]
          }
          o = a
        }
      }
      o == null && (o = ''), (r = o)
    }
    n._wrapperState = { initialValue: ra(r) }
  }
  function vy(e, t) {
    var n = e,
      r = ra(t.value),
      a = ra(t.defaultValue)
    if (r != null) {
      var o = ar(r)
      o !== n.value && (n.value = o),
        t.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)
    }
    a != null && (n.defaultValue = ar(a))
  }
  function hy(e, t) {
    var n = e,
      r = n.textContent
    r === n._wrapperState.initialValue &&
      r !== '' &&
      r !== null &&
      (n.value = r)
  }
  function HC(e, t) {
    vy(e, t)
  }
  var xa = 'http://www.w3.org/1999/xhtml',
    zC = 'http://www.w3.org/1998/Math/MathML',
    xd = 'http://www.w3.org/2000/svg'
  function Td(e) {
    switch (e) {
      case 'svg':
        return xd
      case 'math':
        return zC
      default:
        return xa
    }
  }
  function Nd(e, t) {
    return e == null || e === xa
      ? Td(t)
      : e === xd && t === 'foreignObject'
      ? xa
      : e
  }
  var $C = function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, a) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, a)
            })
          }
        : e
    },
    qs,
    my = $C(function (e, t) {
      if (e.namespaceURI === xd && !('innerHTML' in e)) {
        ;(qs = qs || document.createElement('div')),
          (qs.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>')
        for (var n = qs.firstChild; e.firstChild; ) e.removeChild(e.firstChild)
        for (; n.firstChild; ) e.appendChild(n.firstChild)
        return
      }
      e.innerHTML = t
    }),
    ir = 1,
    Ta = 3,
    Zt = 8,
    Na = 9,
    wd = 11,
    Qs = function (e, t) {
      if (t) {
        var n = e.firstChild
        if (n && n === e.lastChild && n.nodeType === Ta) {
          n.nodeValue = t
          return
        }
      }
      e.textContent = t
    },
    PC = {
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
    ql = {
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
  function BC(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1)
  }
  var VC = ['Webkit', 'ms', 'Moz', 'O']
  Object.keys(ql).forEach(function (e) {
    VC.forEach(function (t) {
      ql[BC(t, e)] = ql[e]
    })
  })
  function Dd(e, t, n) {
    var r = t == null || typeof t == 'boolean' || t === ''
    return r
      ? ''
      : !n &&
        typeof t == 'number' &&
        t !== 0 &&
        !(ql.hasOwnProperty(e) && ql[e])
      ? t + 'px'
      : (G(t, e), ('' + t).trim())
  }
  var YC = /([A-Z])/g,
    IC = /^ms-/
  function WC(e) {
    return e.replace(YC, '-$1').toLowerCase().replace(IC, '-ms-')
  }
  var yy = function () {}
  {
    var GC = /^(?:webkit|moz|o)[A-Z]/,
      qC = /^-ms-/,
      QC = /-(.)/g,
      gy = /;\s*$/,
      Oo = {},
      _d = {},
      by = !1,
      Sy = !1,
      KC = function (e) {
        return e.replace(QC, function (t, n) {
          return n.toUpperCase()
        })
      },
      XC = function (e) {
        ;(Oo.hasOwnProperty(e) && Oo[e]) ||
          ((Oo[e] = !0),
          f(
            'Unsupported style property %s. Did you mean %s?',
            e,
            KC(e.replace(qC, 'ms-'))
          ))
      },
      JC = function (e) {
        ;(Oo.hasOwnProperty(e) && Oo[e]) ||
          ((Oo[e] = !0),
          f(
            'Unsupported vendor-prefixed style property %s. Did you mean %s?',
            e,
            e.charAt(0).toUpperCase() + e.slice(1)
          ))
      },
      ZC = function (e, t) {
        ;(_d.hasOwnProperty(t) && _d[t]) ||
          ((_d[t] = !0),
          f(
            `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
            e,
            t.replace(gy, '')
          ))
      },
      eR = function (e, t) {
        by ||
          ((by = !0),
          f('`NaN` is an invalid value for the `%s` css style property.', e))
      },
      tR = function (e, t) {
        Sy ||
          ((Sy = !0),
          f(
            '`Infinity` is an invalid value for the `%s` css style property.',
            e
          ))
      }
    yy = function (e, t) {
      e.indexOf('-') > -1 ? XC(e) : GC.test(e) ? JC(e) : gy.test(t) && ZC(e, t),
        typeof t == 'number' && (isNaN(t) ? eR(e, t) : isFinite(t) || tR(e, t))
    }
  }
  var nR = yy
  function rR(e) {
    {
      var t = '',
        n = ''
      for (var r in e)
        if (!!e.hasOwnProperty(r)) {
          var a = e[r]
          if (a != null) {
            var o = r.indexOf('--') === 0
            ;(t += n + (o ? r : WC(r)) + ':'), (t += Dd(r, a, o)), (n = ';')
          }
        }
      return t || null
    }
  }
  function Ey(e, t) {
    var n = e.style
    for (var r in t)
      if (!!t.hasOwnProperty(r)) {
        var a = r.indexOf('--') === 0
        a || nR(r, t[r])
        var o = Dd(r, t[r], a)
        r === 'float' && (r = 'cssFloat'), a ? n.setProperty(r, o) : (n[r] = o)
      }
  }
  function aR(e) {
    return e == null || typeof e == 'boolean' || e === ''
  }
  function Cy(e) {
    var t = {}
    for (var n in e)
      for (var r = PC[n] || [n], a = 0; a < r.length; a++) t[r[a]] = n
    return t
  }
  function iR(e, t) {
    {
      if (!t) return
      var n = Cy(e),
        r = Cy(t),
        a = {}
      for (var o in n) {
        var l = n[o],
          s = r[o]
        if (s && l !== s) {
          var p = l + ',' + s
          if (a[p]) continue
          ;(a[p] = !0),
            f(
              "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
              aR(e[l]) ? 'Removing' : 'Updating',
              l,
              s
            )
        }
      }
    }
  }
  var oR = {
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
    lR = Xe({ menuitem: !0 }, oR),
    uR = '__html'
  function Od(e, t) {
    if (!!t) {
      if (lR[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
          !(uR in t.dangerouslySetInnerHTML)
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
  function zi(e, t) {
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
  var Ks = {
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
    Ry = {
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
    Mo = {},
    sR = new RegExp('^(aria)-[' + ce + ']*$'),
    cR = new RegExp('^(aria)[A-Z][' + ce + ']*$')
  function fR(e, t) {
    {
      if (gn.call(Mo, t) && Mo[t]) return !0
      if (cR.test(t)) {
        var n = 'aria-' + t.slice(4).toLowerCase(),
          r = Ry.hasOwnProperty(n) ? n : null
        if (r == null)
          return (
            f(
              'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',
              t
            ),
            (Mo[t] = !0),
            !0
          )
        if (t !== r)
          return (
            f('Invalid ARIA attribute `%s`. Did you mean `%s`?', t, r),
            (Mo[t] = !0),
            !0
          )
      }
      if (sR.test(t)) {
        var a = t.toLowerCase(),
          o = Ry.hasOwnProperty(a) ? a : null
        if (o == null) return (Mo[t] = !0), !1
        if (t !== o)
          return (
            f('Unknown ARIA attribute `%s`. Did you mean `%s`?', t, o),
            (Mo[t] = !0),
            !0
          )
      }
    }
    return !0
  }
  function dR(e, t) {
    {
      var n = []
      for (var r in t) {
        var a = fR(e, r)
        a || n.push(r)
      }
      var o = n
        .map(function (l) {
          return '`' + l + '`'
        })
        .join(', ')
      n.length === 1
        ? f(
            'Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
            o,
            e
          )
        : n.length > 1 &&
          f(
            'Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props',
            o,
            e
          )
    }
  }
  function pR(e, t) {
    zi(e, t) || dR(e, t)
  }
  var xy = !1
  function vR(e, t) {
    {
      if (e !== 'input' && e !== 'textarea' && e !== 'select') return
      t != null &&
        t.value === null &&
        !xy &&
        ((xy = !0),
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
  var Ty = function () {}
  {
    var Kn = {},
      Ny = /^on./,
      hR = /^on[^A-Z]/,
      mR = new RegExp('^(aria)-[' + ce + ']*$'),
      yR = new RegExp('^(aria)[A-Z][' + ce + ']*$')
    Ty = function (e, t, n, r) {
      if (gn.call(Kn, t) && Kn[t]) return !0
      var a = t.toLowerCase()
      if (a === 'onfocusin' || a === 'onfocusout')
        return (
          f(
            'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.'
          ),
          (Kn[t] = !0),
          !0
        )
      if (r != null) {
        var o = r.registrationNameDependencies,
          l = r.possibleRegistrationNames
        if (o.hasOwnProperty(t)) return !0
        var s = l.hasOwnProperty(a) ? l[a] : null
        if (s != null)
          return (
            f('Invalid event handler property `%s`. Did you mean `%s`?', t, s),
            (Kn[t] = !0),
            !0
          )
        if (Ny.test(t))
          return (
            f('Unknown event handler property `%s`. It will be ignored.', t),
            (Kn[t] = !0),
            !0
          )
      } else if (Ny.test(t))
        return (
          hR.test(t) &&
            f(
              'Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.',
              t
            ),
          (Kn[t] = !0),
          !0
        )
      if (mR.test(t) || yR.test(t)) return !0
      if (a === 'innerhtml')
        return (
          f(
            'Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.'
          ),
          (Kn[t] = !0),
          !0
        )
      if (a === 'aria')
        return (
          f(
            'The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.'
          ),
          (Kn[t] = !0),
          !0
        )
      if (a === 'is' && n !== null && n !== void 0 && typeof n != 'string')
        return (
          f(
            'Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.',
            typeof n
          ),
          (Kn[t] = !0),
          !0
        )
      if (typeof n == 'number' && isNaN(n))
        return (
          f(
            'Received NaN for the `%s` attribute. If this is expected, cast the value to a string.',
            t
          ),
          (Kn[t] = !0),
          !0
        )
      var p = Bt(t),
        m = p !== null && p.type === Be
      if (Ks.hasOwnProperty(a)) {
        var g = Ks[a]
        if (g !== t)
          return (
            f('Invalid DOM property `%s`. Did you mean `%s`?', t, g),
            (Kn[t] = !0),
            !0
          )
      } else if (!m && t !== a)
        return (
          f(
            'React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.',
            t,
            a
          ),
          (Kn[t] = !0),
          !0
        )
      return typeof n == 'boolean' && ht(t, n, p, !1)
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
          (Kn[t] = !0),
          !0)
        : m
        ? !0
        : ht(t, n, p, !1)
        ? ((Kn[t] = !0), !1)
        : ((n === 'false' || n === 'true') &&
            p !== null &&
            p.type === xe &&
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
            (Kn[t] = !0)),
          !0)
    }
  }
  var gR = function (e, t, n) {
    {
      var r = []
      for (var a in t) {
        var o = Ty(e, a, t[a], n)
        o || r.push(a)
      }
      var l = r
        .map(function (s) {
          return '`' + s + '`'
        })
        .join(', ')
      r.length === 1
        ? f(
            'Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
            l,
            e
          )
        : r.length > 1 &&
          f(
            'Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ',
            l,
            e
          )
    }
  }
  function bR(e, t, n) {
    zi(e, t) || gR(e, t, n)
  }
  var wy = 1,
    Md = 1 << 1,
    Ql = 1 << 2,
    SR = wy | Md | Ql,
    Kl = null
  function ER(e) {
    Kl !== null &&
      f(
        'Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.'
      ),
      (Kl = e)
  }
  function CR() {
    Kl === null &&
      f(
        'Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.'
      ),
      (Kl = null)
  }
  function RR(e) {
    return e === Kl
  }
  function Ld(e) {
    var t = e.target || e.srcElement || window
    return (
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === Ta ? t.parentNode : t
    )
  }
  var Ad = null,
    Lo = null,
    Ao = null
  function Dy(e) {
    var t = pi(e)
    if (!!t) {
      if (typeof Ad != 'function')
        throw new Error(
          'setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.'
        )
      var n = t.stateNode
      if (n) {
        var r = Ac(n)
        Ad(t.stateNode, t.type, r)
      }
    }
  }
  function xR(e) {
    Ad = e
  }
  function _y(e) {
    Lo ? (Ao ? Ao.push(e) : (Ao = [e])) : (Lo = e)
  }
  function TR() {
    return Lo !== null || Ao !== null
  }
  function Oy() {
    if (!!Lo) {
      var e = Lo,
        t = Ao
      if (((Lo = null), (Ao = null), Dy(e), t))
        for (var n = 0; n < t.length; n++) Dy(t[n])
    }
  }
  var My = function (e, t) {
      return e(t)
    },
    Ly = function () {},
    kd = !1
  function NR() {
    var e = TR()
    e && (Ly(), Oy())
  }
  function Ay(e, t, n) {
    if (kd) return e(t, n)
    kd = !0
    try {
      return My(e, t, n)
    } finally {
      ;(kd = !1), NR()
    }
  }
  function wR(e, t, n) {
    ;(My = e), (Ly = n)
  }
  function DR(e) {
    return e === 'button' || e === 'input' || e === 'select' || e === 'textarea'
  }
  function _R(e, t, n) {
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
        return !!(n.disabled && DR(t))
      default:
        return !1
    }
  }
  function Xl(e, t) {
    var n = e.stateNode
    if (n === null) return null
    var r = Ac(n)
    if (r === null) return null
    var a = r[t]
    if (_R(t, e.type, r)) return null
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
  var Ud = !1
  if (zt)
    try {
      var Jl = {}
      Object.defineProperty(Jl, 'passive', {
        get: function () {
          Ud = !0
        },
      }),
        window.addEventListener('test', Jl, Jl),
        window.removeEventListener('test', Jl, Jl)
    } catch {
      Ud = !1
    }
  function ky(e, t, n, r, a, o, l, s, p) {
    var m = Array.prototype.slice.call(arguments, 3)
    try {
      t.apply(n, m)
    } catch (g) {
      this.onError(g)
    }
  }
  var Uy = ky
  if (
    typeof window < 'u' &&
    typeof window.dispatchEvent == 'function' &&
    typeof document < 'u' &&
    typeof document.createEvent == 'function'
  ) {
    var Fd = document.createElement('react')
    Uy = function (t, n, r, a, o, l, s, p, m) {
      if (typeof document > 'u' || document === null)
        throw new Error(
          'The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.'
        )
      var g = document.createEvent('Event'),
        N = !1,
        T = !0,
        A = window.event,
        k = Object.getOwnPropertyDescriptor(window, 'event')
      function H() {
        Fd.removeEventListener(z, Se, !1),
          typeof window.event < 'u' &&
            window.hasOwnProperty('event') &&
            (window.event = A)
      }
      var ue = Array.prototype.slice.call(arguments, 3)
      function Se() {
        ;(N = !0), H(), n.apply(r, ue), (T = !1)
      }
      var ye,
        tt = !1,
        Ge = !1
      function O(M) {
        if (
          ((ye = M.error),
          (tt = !0),
          ye === null && M.colno === 0 && M.lineno === 0 && (Ge = !0),
          M.defaultPrevented && ye != null && typeof ye == 'object')
        )
          try {
            ye._suppressLogging = !0
          } catch {}
      }
      var z = 'react-' + (t || 'invokeguardedcallback')
      if (
        (window.addEventListener('error', O),
        Fd.addEventListener(z, Se, !1),
        g.initEvent(z, !1, !1),
        Fd.dispatchEvent(g),
        k && Object.defineProperty(window, 'event', k),
        N &&
          T &&
          (tt
            ? Ge &&
              (ye = new Error(
                "A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information."
              ))
            : (ye = new Error(
                `An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`
              )),
          this.onError(ye)),
        window.removeEventListener('error', O),
        !N)
      )
        return H(), ky.apply(this, arguments)
    }
  }
  var OR = Uy,
    ko = !1,
    Xs = null,
    Js = !1,
    jd = null,
    MR = {
      onError: function (e) {
        ;(ko = !0), (Xs = e)
      },
    }
  function Hd(e, t, n, r, a, o, l, s, p) {
    ;(ko = !1), (Xs = null), OR.apply(MR, arguments)
  }
  function LR(e, t, n, r, a, o, l, s, p) {
    if ((Hd.apply(this, arguments), ko)) {
      var m = zd()
      Js || ((Js = !0), (jd = m))
    }
  }
  function AR() {
    if (Js) {
      var e = jd
      throw ((Js = !1), (jd = null), e)
    }
  }
  function kR() {
    return ko
  }
  function zd() {
    if (ko) {
      var e = Xs
      return (ko = !1), (Xs = null), e
    } else
      throw new Error(
        'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.'
      )
  }
  function Uo(e) {
    return e._reactInternals
  }
  function UR(e) {
    return e._reactInternals !== void 0
  }
  function FR(e, t) {
    e._reactInternals = t
  }
  var we = 0,
    Fo = 1,
    en = 2,
    rt = 4,
    $i = 16,
    Zl = 32,
    $d = 64,
    pt = 128,
    wa = 256,
    oi = 512,
    Pi = 1024,
    jr = 2048,
    Da = 4096,
    Bi = 8192,
    Zs = 16384,
    jR = jr | rt | $d | oi | Pi | Zs,
    HR = 32767,
    eu = 32768,
    Xn = 65536,
    Pd = 131072,
    Fy = 1048576,
    Bd = 2097152,
    Vi = 4194304,
    Vd = 8388608,
    _a = 16777216,
    ec = 33554432,
    Yd = rt | Pi | 0,
    Id = en | rt | $i | Zl | oi | Da | Bi,
    tu = rt | $d | oi | Bi,
    jo = jr | $i,
    Oa = Vi | Vd | Bd,
    zR = c.ReactCurrentOwner
  function Yi(e) {
    var t = e,
      n = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      var r = t
      do (t = r), (t.flags & (en | Da)) !== we && (n = t.return), (r = t.return)
      while (r)
    }
    return t.tag === L ? n : null
  }
  function jy(e) {
    if (e.tag === K) {
      var t = e.memoizedState
      if (t === null) {
        var n = e.alternate
        n !== null && (t = n.memoizedState)
      }
      if (t !== null) return t.dehydrated
    }
    return null
  }
  function Hy(e) {
    return e.tag === L ? e.stateNode.containerInfo : null
  }
  function $R(e) {
    return Yi(e) === e
  }
  function PR(e) {
    {
      var t = zR.current
      if (t !== null && t.tag === C) {
        var n = t,
          r = n.stateNode
        r._warnedAboutRefsInRender ||
          f(
            '%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
            Pe(n) || 'A component'
          ),
          (r._warnedAboutRefsInRender = !0)
      }
    }
    var a = Uo(e)
    return a ? Yi(a) === a : !1
  }
  function zy(e) {
    if (Yi(e) !== e)
      throw new Error('Unable to find node on an unmounted component.')
  }
  function $y(e) {
    var t = e.alternate
    if (!t) {
      var n = Yi(e)
      if (n === null)
        throw new Error('Unable to find node on an unmounted component.')
      return n !== e ? null : e
    }
    for (var r = e, a = t; ; ) {
      var o = r.return
      if (o === null) break
      var l = o.alternate
      if (l === null) {
        var s = o.return
        if (s !== null) {
          r = a = s
          continue
        }
        break
      }
      if (o.child === l.child) {
        for (var p = o.child; p; ) {
          if (p === r) return zy(o), e
          if (p === a) return zy(o), t
          p = p.sibling
        }
        throw new Error('Unable to find node on an unmounted component.')
      }
      if (r.return !== a.return) (r = o), (a = l)
      else {
        for (var m = !1, g = o.child; g; ) {
          if (g === r) {
            ;(m = !0), (r = o), (a = l)
            break
          }
          if (g === a) {
            ;(m = !0), (a = o), (r = l)
            break
          }
          g = g.sibling
        }
        if (!m) {
          for (g = l.child; g; ) {
            if (g === r) {
              ;(m = !0), (r = l), (a = o)
              break
            }
            if (g === a) {
              ;(m = !0), (a = l), (r = o)
              break
            }
            g = g.sibling
          }
          if (!m)
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
    if (r.tag !== L)
      throw new Error('Unable to find node on an unmounted component.')
    return r.stateNode.current === r ? e : t
  }
  function Py(e) {
    var t = $y(e)
    return t !== null ? By(t) : null
  }
  function By(e) {
    if (e.tag === F || e.tag === $) return e
    for (var t = e.child; t !== null; ) {
      var n = By(t)
      if (n !== null) return n
      t = t.sibling
    }
    return null
  }
  function BR(e) {
    var t = $y(e)
    return t !== null ? Vy(t) : null
  }
  function Vy(e) {
    if (e.tag === F || e.tag === $) return e
    for (var t = e.child; t !== null; ) {
      if (t.tag !== V) {
        var n = Vy(t)
        if (n !== null) return n
      }
      t = t.sibling
    }
    return null
  }
  var Yy = u.unstable_scheduleCallback,
    VR = u.unstable_cancelCallback,
    YR = u.unstable_shouldYield,
    IR = u.unstable_requestPaint,
    En = u.unstable_now,
    WR = u.unstable_getCurrentPriorityLevel,
    tc = u.unstable_ImmediatePriority,
    Wd = u.unstable_UserBlockingPriority,
    Ii = u.unstable_NormalPriority,
    GR = u.unstable_LowPriority,
    Gd = u.unstable_IdlePriority,
    qR = u.unstable_yieldValue,
    QR = u.unstable_setDisableYieldValue,
    Ho = null,
    Bn = null,
    ae = null,
    aa = !1,
    Hr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u'
  function KR(e) {
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
      wr && (e = Xe({}, e, { getLaneLabelMap: nx, injectProfilingHooks: tx })),
        (Ho = t.inject(e)),
        (Bn = t)
    } catch (n) {
      f('React instrumentation encountered an error: %s.', n)
    }
    return !!t.checkDCE
  }
  function XR(e, t) {
    if (Bn && typeof Bn.onScheduleFiberRoot == 'function')
      try {
        Bn.onScheduleFiberRoot(Ho, e, t)
      } catch (n) {
        aa ||
          ((aa = !0), f('React instrumentation encountered an error: %s', n))
      }
  }
  function JR(e, t) {
    if (Bn && typeof Bn.onCommitFiberRoot == 'function')
      try {
        var n = (e.current.flags & pt) === pt
        if (dr) {
          var r
          switch (t) {
            case br:
              r = tc
              break
            case La:
              r = Wd
              break
            case Aa:
              r = Ii
              break
            case uc:
              r = Gd
              break
            default:
              r = Ii
              break
          }
          Bn.onCommitFiberRoot(Ho, e, r, n)
        }
      } catch (a) {
        aa ||
          ((aa = !0), f('React instrumentation encountered an error: %s', a))
      }
  }
  function ZR(e) {
    if (Bn && typeof Bn.onPostCommitFiberRoot == 'function')
      try {
        Bn.onPostCommitFiberRoot(Ho, e)
      } catch (t) {
        aa ||
          ((aa = !0), f('React instrumentation encountered an error: %s', t))
      }
  }
  function ex(e) {
    if (Bn && typeof Bn.onCommitFiberUnmount == 'function')
      try {
        Bn.onCommitFiberUnmount(Ho, e)
      } catch (t) {
        aa ||
          ((aa = !0), f('React instrumentation encountered an error: %s', t))
      }
  }
  function Cn(e) {
    if (
      (typeof qR == 'function' && (QR(e), d(e)),
      Bn && typeof Bn.setStrictMode == 'function')
    )
      try {
        Bn.setStrictMode(Ho, e)
      } catch (t) {
        aa ||
          ((aa = !0), f('React instrumentation encountered an error: %s', t))
      }
  }
  function tx(e) {
    ae = e
  }
  function nx() {
    {
      for (var e = new Map(), t = 1, n = 0; n < Qd; n++) {
        var r = Cx(t)
        e.set(t, r), (t *= 2)
      }
      return e
    }
  }
  function rx(e) {
    ae !== null &&
      typeof ae.markCommitStarted == 'function' &&
      ae.markCommitStarted(e)
  }
  function Iy() {
    ae !== null &&
      typeof ae.markCommitStopped == 'function' &&
      ae.markCommitStopped()
  }
  function nu(e) {
    ae !== null &&
      typeof ae.markComponentRenderStarted == 'function' &&
      ae.markComponentRenderStarted(e)
  }
  function zo() {
    ae !== null &&
      typeof ae.markComponentRenderStopped == 'function' &&
      ae.markComponentRenderStopped()
  }
  function ax(e) {
    ae !== null &&
      typeof ae.markComponentPassiveEffectMountStarted == 'function' &&
      ae.markComponentPassiveEffectMountStarted(e)
  }
  function ix() {
    ae !== null &&
      typeof ae.markComponentPassiveEffectMountStopped == 'function' &&
      ae.markComponentPassiveEffectMountStopped()
  }
  function ox(e) {
    ae !== null &&
      typeof ae.markComponentPassiveEffectUnmountStarted == 'function' &&
      ae.markComponentPassiveEffectUnmountStarted(e)
  }
  function lx() {
    ae !== null &&
      typeof ae.markComponentPassiveEffectUnmountStopped == 'function' &&
      ae.markComponentPassiveEffectUnmountStopped()
  }
  function ux(e) {
    ae !== null &&
      typeof ae.markComponentLayoutEffectMountStarted == 'function' &&
      ae.markComponentLayoutEffectMountStarted(e)
  }
  function sx() {
    ae !== null &&
      typeof ae.markComponentLayoutEffectMountStopped == 'function' &&
      ae.markComponentLayoutEffectMountStopped()
  }
  function Wy(e) {
    ae !== null &&
      typeof ae.markComponentLayoutEffectUnmountStarted == 'function' &&
      ae.markComponentLayoutEffectUnmountStarted(e)
  }
  function Gy() {
    ae !== null &&
      typeof ae.markComponentLayoutEffectUnmountStopped == 'function' &&
      ae.markComponentLayoutEffectUnmountStopped()
  }
  function cx(e, t, n) {
    ae !== null &&
      typeof ae.markComponentErrored == 'function' &&
      ae.markComponentErrored(e, t, n)
  }
  function fx(e, t, n) {
    ae !== null &&
      typeof ae.markComponentSuspended == 'function' &&
      ae.markComponentSuspended(e, t, n)
  }
  function dx(e) {
    ae !== null &&
      typeof ae.markLayoutEffectsStarted == 'function' &&
      ae.markLayoutEffectsStarted(e)
  }
  function px() {
    ae !== null &&
      typeof ae.markLayoutEffectsStopped == 'function' &&
      ae.markLayoutEffectsStopped()
  }
  function vx(e) {
    ae !== null &&
      typeof ae.markPassiveEffectsStarted == 'function' &&
      ae.markPassiveEffectsStarted(e)
  }
  function hx() {
    ae !== null &&
      typeof ae.markPassiveEffectsStopped == 'function' &&
      ae.markPassiveEffectsStopped()
  }
  function qy(e) {
    ae !== null &&
      typeof ae.markRenderStarted == 'function' &&
      ae.markRenderStarted(e)
  }
  function mx() {
    ae !== null &&
      typeof ae.markRenderYielded == 'function' &&
      ae.markRenderYielded()
  }
  function Qy() {
    ae !== null &&
      typeof ae.markRenderStopped == 'function' &&
      ae.markRenderStopped()
  }
  function yx(e) {
    ae !== null &&
      typeof ae.markRenderScheduled == 'function' &&
      ae.markRenderScheduled(e)
  }
  function gx(e, t) {
    ae !== null &&
      typeof ae.markForceUpdateScheduled == 'function' &&
      ae.markForceUpdateScheduled(e, t)
  }
  function qd(e, t) {
    ae !== null &&
      typeof ae.markStateUpdateScheduled == 'function' &&
      ae.markStateUpdateScheduled(e, t)
  }
  var De = 0,
    Ze = 1,
    bt = 2,
    tn = 8,
    ia = 16,
    Ky = Math.clz32 ? Math.clz32 : Ex,
    bx = Math.log,
    Sx = Math.LN2
  function Ex(e) {
    var t = e >>> 0
    return t === 0 ? 32 : (31 - ((bx(t) / Sx) | 0)) | 0
  }
  var Qd = 31,
    Y = 0,
    Rn = 0,
    Ae = 1,
    $o = 2,
    Ma = 4,
    Wi = 8,
    oa = 16,
    ru = 32,
    Po = 4194240,
    au = 64,
    Kd = 128,
    Xd = 256,
    Jd = 512,
    Zd = 1024,
    ep = 2048,
    tp = 4096,
    np = 8192,
    rp = 16384,
    ap = 32768,
    ip = 65536,
    op = 131072,
    lp = 262144,
    up = 524288,
    sp = 1048576,
    cp = 2097152,
    nc = 130023424,
    Bo = 4194304,
    fp = 8388608,
    dp = 16777216,
    pp = 33554432,
    vp = 67108864,
    Xy = Bo,
    iu = 134217728,
    Jy = 268435455,
    ou = 268435456,
    Gi = 536870912,
    yr = 1073741824
  function Cx(e) {
    {
      if (e & Ae) return 'Sync'
      if (e & $o) return 'InputContinuousHydration'
      if (e & Ma) return 'InputContinuous'
      if (e & Wi) return 'DefaultHydration'
      if (e & oa) return 'Default'
      if (e & ru) return 'TransitionHydration'
      if (e & Po) return 'Transition'
      if (e & nc) return 'Retry'
      if (e & iu) return 'SelectiveHydration'
      if (e & ou) return 'IdleHydration'
      if (e & Gi) return 'Idle'
      if (e & yr) return 'Offscreen'
    }
  }
  var Mt = -1,
    rc = au,
    ac = Bo
  function lu(e) {
    switch (qi(e)) {
      case Ae:
        return Ae
      case $o:
        return $o
      case Ma:
        return Ma
      case Wi:
        return Wi
      case oa:
        return oa
      case ru:
        return ru
      case au:
      case Kd:
      case Xd:
      case Jd:
      case Zd:
      case ep:
      case tp:
      case np:
      case rp:
      case ap:
      case ip:
      case op:
      case lp:
      case up:
      case sp:
      case cp:
        return e & Po
      case Bo:
      case fp:
      case dp:
      case pp:
      case vp:
        return e & nc
      case iu:
        return iu
      case ou:
        return ou
      case Gi:
        return Gi
      case yr:
        return yr
      default:
        return f('Should have found matching lanes. This is a bug in React.'), e
    }
  }
  function ic(e, t) {
    var n = e.pendingLanes
    if (n === Y) return Y
    var r = Y,
      a = e.suspendedLanes,
      o = e.pingedLanes,
      l = n & Jy
    if (l !== Y) {
      var s = l & ~a
      if (s !== Y) r = lu(s)
      else {
        var p = l & o
        p !== Y && (r = lu(p))
      }
    } else {
      var m = n & ~a
      m !== Y ? (r = lu(m)) : o !== Y && (r = lu(o))
    }
    if (r === Y) return Y
    if (t !== Y && t !== r && (t & a) === Y) {
      var g = qi(r),
        N = qi(t)
      if (g >= N || (g === oa && (N & Po) !== Y)) return t
    }
    ;(r & Ma) !== Y && (r |= n & oa)
    var T = e.entangledLanes
    if (T !== Y)
      for (var A = e.entanglements, k = r & T; k > 0; ) {
        var H = Qi(k),
          ue = 1 << H
        ;(r |= A[H]), (k &= ~ue)
      }
    return r
  }
  function Rx(e, t) {
    for (var n = e.eventTimes, r = Mt; t > 0; ) {
      var a = Qi(t),
        o = 1 << a,
        l = n[a]
      l > r && (r = l), (t &= ~o)
    }
    return r
  }
  function xx(e, t) {
    switch (e) {
      case Ae:
      case $o:
      case Ma:
        return t + 250
      case Wi:
      case oa:
      case ru:
      case au:
      case Kd:
      case Xd:
      case Jd:
      case Zd:
      case ep:
      case tp:
      case np:
      case rp:
      case ap:
      case ip:
      case op:
      case lp:
      case up:
      case sp:
      case cp:
        return t + 5e3
      case Bo:
      case fp:
      case dp:
      case pp:
      case vp:
        return Mt
      case iu:
      case ou:
      case Gi:
      case yr:
        return Mt
      default:
        return (
          f('Should have found matching lanes. This is a bug in React.'), Mt
        )
    }
  }
  function Tx(e, t) {
    for (
      var n = e.pendingLanes,
        r = e.suspendedLanes,
        a = e.pingedLanes,
        o = e.expirationTimes,
        l = n;
      l > 0;

    ) {
      var s = Qi(l),
        p = 1 << s,
        m = o[s]
      m === Mt
        ? ((p & r) === Y || (p & a) !== Y) && (o[s] = xx(p, t))
        : m <= t && (e.expiredLanes |= p),
        (l &= ~p)
    }
  }
  function Nx(e) {
    return lu(e.pendingLanes)
  }
  function hp(e) {
    var t = e.pendingLanes & ~yr
    return t !== Y ? t : t & yr ? yr : Y
  }
  function wx(e) {
    return (e & Ae) !== Y
  }
  function mp(e) {
    return (e & Jy) !== Y
  }
  function Zy(e) {
    return (e & nc) === e
  }
  function Dx(e) {
    var t = Ae | Ma | oa
    return (e & t) === Y
  }
  function _x(e) {
    return (e & Po) === e
  }
  function oc(e, t) {
    var n = $o | Ma | Wi | oa
    return (t & n) !== Y
  }
  function Ox(e, t) {
    return (t & e.expiredLanes) !== Y
  }
  function eg(e) {
    return (e & Po) !== Y
  }
  function tg() {
    var e = rc
    return (rc <<= 1), (rc & Po) === Y && (rc = au), e
  }
  function Mx() {
    var e = ac
    return (ac <<= 1), (ac & nc) === Y && (ac = Bo), e
  }
  function qi(e) {
    return e & -e
  }
  function uu(e) {
    return qi(e)
  }
  function Qi(e) {
    return 31 - Ky(e)
  }
  function yp(e) {
    return Qi(e)
  }
  function gr(e, t) {
    return (e & t) !== Y
  }
  function Vo(e, t) {
    return (e & t) === t
  }
  function Ie(e, t) {
    return e | t
  }
  function lc(e, t) {
    return e & ~t
  }
  function ng(e, t) {
    return e & t
  }
  function mk(e) {
    return e
  }
  function Lx(e, t) {
    return e !== Rn && e < t ? e : t
  }
  function gp(e) {
    for (var t = [], n = 0; n < Qd; n++) t.push(e)
    return t
  }
  function su(e, t, n) {
    ;(e.pendingLanes |= t),
      t !== Gi && ((e.suspendedLanes = Y), (e.pingedLanes = Y))
    var r = e.eventTimes,
      a = yp(t)
    r[a] = n
  }
  function Ax(e, t) {
    ;(e.suspendedLanes |= t), (e.pingedLanes &= ~t)
    for (var n = e.expirationTimes, r = t; r > 0; ) {
      var a = Qi(r),
        o = 1 << a
      ;(n[a] = Mt), (r &= ~o)
    }
  }
  function rg(e, t, n) {
    e.pingedLanes |= e.suspendedLanes & t
  }
  function kx(e, t) {
    var n = e.pendingLanes & ~t
    ;(e.pendingLanes = t),
      (e.suspendedLanes = Y),
      (e.pingedLanes = Y),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t)
    for (
      var r = e.entanglements, a = e.eventTimes, o = e.expirationTimes, l = n;
      l > 0;

    ) {
      var s = Qi(l),
        p = 1 << s
      ;(r[s] = Y), (a[s] = Mt), (o[s] = Mt), (l &= ~p)
    }
  }
  function bp(e, t) {
    for (var n = (e.entangledLanes |= t), r = e.entanglements, a = n; a; ) {
      var o = Qi(a),
        l = 1 << o
      ;(l & t) | (r[o] & t) && (r[o] |= t), (a &= ~l)
    }
  }
  function Ux(e, t) {
    var n = qi(t),
      r
    switch (n) {
      case Ma:
        r = $o
        break
      case oa:
        r = Wi
        break
      case au:
      case Kd:
      case Xd:
      case Jd:
      case Zd:
      case ep:
      case tp:
      case np:
      case rp:
      case ap:
      case ip:
      case op:
      case lp:
      case up:
      case sp:
      case cp:
      case Bo:
      case fp:
      case dp:
      case pp:
      case vp:
        r = ru
        break
      case Gi:
        r = ou
        break
      default:
        r = Rn
        break
    }
    return (r & (e.suspendedLanes | t)) !== Rn ? Rn : r
  }
  function ag(e, t, n) {
    if (!!Hr)
      for (var r = e.pendingUpdatersLaneMap; n > 0; ) {
        var a = yp(n),
          o = 1 << a,
          l = r[a]
        l.add(t), (n &= ~o)
      }
  }
  function ig(e, t) {
    if (!!Hr)
      for (var n = e.pendingUpdatersLaneMap, r = e.memoizedUpdaters; t > 0; ) {
        var a = yp(t),
          o = 1 << a,
          l = n[a]
        l.size > 0 &&
          (l.forEach(function (s) {
            var p = s.alternate
            ;(p === null || !r.has(p)) && r.add(s)
          }),
          l.clear()),
          (t &= ~o)
      }
  }
  function og(e, t) {
    return null
  }
  var br = Ae,
    La = Ma,
    Aa = oa,
    uc = Gi,
    cu = Rn
  function zr() {
    return cu
  }
  function xn(e) {
    cu = e
  }
  function Fx(e, t) {
    var n = cu
    try {
      return (cu = e), t()
    } finally {
      cu = n
    }
  }
  function jx(e, t) {
    return e !== 0 && e < t ? e : t
  }
  function Hx(e, t) {
    return e === 0 || e > t ? e : t
  }
  function Sp(e, t) {
    return e !== 0 && e < t
  }
  function lg(e) {
    var t = qi(e)
    return Sp(br, t) ? (Sp(La, t) ? (mp(t) ? Aa : uc) : La) : br
  }
  function sc(e) {
    var t = e.current.memoizedState
    return t.isDehydrated
  }
  var ug
  function zx(e) {
    ug = e
  }
  function $x(e) {
    ug(e)
  }
  var Ep
  function Px(e) {
    Ep = e
  }
  var sg
  function Bx(e) {
    sg = e
  }
  var cg
  function Vx(e) {
    cg = e
  }
  var fg
  function Yx(e) {
    fg = e
  }
  var Cp = !1,
    cc = [],
    li = null,
    ui = null,
    si = null,
    fu = new Map(),
    du = new Map(),
    ci = [],
    Ix = [
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
  function Wx(e) {
    return Ix.indexOf(e) > -1
  }
  function Gx(e, t, n, r, a) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n,
      nativeEvent: a,
      targetContainers: [r],
    }
  }
  function dg(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        li = null
        break
      case 'dragenter':
      case 'dragleave':
        ui = null
        break
      case 'mouseover':
      case 'mouseout':
        si = null
        break
      case 'pointerover':
      case 'pointerout': {
        var n = t.pointerId
        fu.delete(n)
        break
      }
      case 'gotpointercapture':
      case 'lostpointercapture': {
        var r = t.pointerId
        du.delete(r)
        break
      }
    }
  }
  function pu(e, t, n, r, a, o) {
    if (e === null || e.nativeEvent !== o) {
      var l = Gx(t, n, r, a, o)
      if (t !== null) {
        var s = pi(t)
        s !== null && Ep(s)
      }
      return l
    }
    e.eventSystemFlags |= r
    var p = e.targetContainers
    return a !== null && p.indexOf(a) === -1 && p.push(a), e
  }
  function qx(e, t, n, r, a) {
    switch (t) {
      case 'focusin': {
        var o = a
        return (li = pu(li, e, t, n, r, o)), !0
      }
      case 'dragenter': {
        var l = a
        return (ui = pu(ui, e, t, n, r, l)), !0
      }
      case 'mouseover': {
        var s = a
        return (si = pu(si, e, t, n, r, s)), !0
      }
      case 'pointerover': {
        var p = a,
          m = p.pointerId
        return fu.set(m, pu(fu.get(m) || null, e, t, n, r, p)), !0
      }
      case 'gotpointercapture': {
        var g = a,
          N = g.pointerId
        return du.set(N, pu(du.get(N) || null, e, t, n, r, g)), !0
      }
    }
    return !1
  }
  function pg(e) {
    var t = Ji(e.target)
    if (t !== null) {
      var n = Yi(t)
      if (n !== null) {
        var r = n.tag
        if (r === K) {
          var a = jy(n)
          if (a !== null) {
            ;(e.blockedOn = a),
              fg(e.priority, function () {
                sg(n)
              })
            return
          }
        } else if (r === L) {
          var o = n.stateNode
          if (sc(o)) {
            e.blockedOn = Hy(n)
            return
          }
        }
      }
    }
    e.blockedOn = null
  }
  function Qx(e) {
    for (
      var t = cg(), n = { blockedOn: null, target: e, priority: t }, r = 0;
      r < ci.length && Sp(t, ci[r].priority);
      r++
    );
    ci.splice(r, 0, n), r === 0 && pg(n)
  }
  function fc(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; t.length > 0; ) {
      var n = t[0],
        r = Tp(e.domEventName, e.eventSystemFlags, n, e.nativeEvent)
      if (r === null) {
        var a = e.nativeEvent,
          o = new a.constructor(a.type, a)
        ER(o), a.target.dispatchEvent(o), CR()
      } else {
        var l = pi(r)
        return l !== null && Ep(l), (e.blockedOn = r), !1
      }
      t.shift()
    }
    return !0
  }
  function vg(e, t, n) {
    fc(e) && n.delete(t)
  }
  function Kx() {
    ;(Cp = !1),
      li !== null && fc(li) && (li = null),
      ui !== null && fc(ui) && (ui = null),
      si !== null && fc(si) && (si = null),
      fu.forEach(vg),
      du.forEach(vg)
  }
  function vu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Cp ||
        ((Cp = !0), u.unstable_scheduleCallback(u.unstable_NormalPriority, Kx)))
  }
  function hu(e) {
    if (cc.length > 0) {
      vu(cc[0], e)
      for (var t = 1; t < cc.length; t++) {
        var n = cc[t]
        n.blockedOn === e && (n.blockedOn = null)
      }
    }
    li !== null && vu(li, e), ui !== null && vu(ui, e), si !== null && vu(si, e)
    var r = function (s) {
      return vu(s, e)
    }
    fu.forEach(r), du.forEach(r)
    for (var a = 0; a < ci.length; a++) {
      var o = ci[a]
      o.blockedOn === e && (o.blockedOn = null)
    }
    for (; ci.length > 0; ) {
      var l = ci[0]
      if (l.blockedOn !== null) break
      pg(l), l.blockedOn === null && ci.shift()
    }
  }
  var Yo = c.ReactCurrentBatchConfig,
    Rp = !0
  function hg(e) {
    Rp = !!e
  }
  function Xx() {
    return Rp
  }
  function Jx(e, t, n) {
    var r = mg(t),
      a
    switch (r) {
      case br:
        a = Zx
        break
      case La:
        a = eT
        break
      case Aa:
      default:
        a = xp
        break
    }
    return a.bind(null, t, n, e)
  }
  function Zx(e, t, n, r) {
    var a = zr(),
      o = Yo.transition
    Yo.transition = null
    try {
      xn(br), xp(e, t, n, r)
    } finally {
      xn(a), (Yo.transition = o)
    }
  }
  function eT(e, t, n, r) {
    var a = zr(),
      o = Yo.transition
    Yo.transition = null
    try {
      xn(La), xp(e, t, n, r)
    } finally {
      xn(a), (Yo.transition = o)
    }
  }
  function xp(e, t, n, r) {
    !Rp || tT(e, t, n, r)
  }
  function tT(e, t, n, r) {
    var a = Tp(e, t, n, r)
    if (a === null) {
      zp(e, t, r, dc, n), dg(e, r)
      return
    }
    if (qx(a, e, t, n, r)) {
      r.stopPropagation()
      return
    }
    if ((dg(e, r), t & Ql && Wx(e))) {
      for (; a !== null; ) {
        var o = pi(a)
        o !== null && $x(o)
        var l = Tp(e, t, n, r)
        if ((l === null && zp(e, t, r, dc, n), l === a)) break
        a = l
      }
      a !== null && r.stopPropagation()
      return
    }
    zp(e, t, r, null, n)
  }
  var dc = null
  function Tp(e, t, n, r) {
    dc = null
    var a = Ld(r),
      o = Ji(a)
    if (o !== null) {
      var l = Yi(o)
      if (l === null) o = null
      else {
        var s = l.tag
        if (s === K) {
          var p = jy(l)
          if (p !== null) return p
          o = null
        } else if (s === L) {
          var m = l.stateNode
          if (sc(m)) return Hy(l)
          o = null
        } else l !== o && (o = null)
      }
    }
    return (dc = o), null
  }
  function mg(e) {
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
        return br
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
        return La
      case 'message': {
        var t = WR()
        switch (t) {
          case tc:
            return br
          case Wd:
            return La
          case Ii:
          case GR:
            return Aa
          case Gd:
            return uc
          default:
            return Aa
        }
      }
      default:
        return Aa
    }
  }
  function nT(e, t, n) {
    return e.addEventListener(t, n, !1), n
  }
  function rT(e, t, n) {
    return e.addEventListener(t, n, !0), n
  }
  function aT(e, t, n, r) {
    return e.addEventListener(t, n, { capture: !0, passive: r }), n
  }
  function iT(e, t, n, r) {
    return e.addEventListener(t, n, { passive: r }), n
  }
  var mu = null,
    Np = null,
    yu = null
  function oT(e) {
    return (mu = e), (Np = gg()), !0
  }
  function lT() {
    ;(mu = null), (Np = null), (yu = null)
  }
  function yg() {
    if (yu) return yu
    var e,
      t = Np,
      n = t.length,
      r,
      a = gg(),
      o = a.length
    for (e = 0; e < n && t[e] === a[e]; e++);
    var l = n - e
    for (r = 1; r <= l && t[n - r] === a[o - r]; r++);
    var s = r > 1 ? 1 - r : void 0
    return (yu = a.slice(e, s)), yu
  }
  function gg() {
    return 'value' in mu ? mu.value : mu.textContent
  }
  function pc(e) {
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
  function vc() {
    return !0
  }
  function bg() {
    return !1
  }
  function Sr(e) {
    function t(n, r, a, o, l) {
      ;(this._reactName = n),
        (this._targetInst = a),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = l),
        (this.currentTarget = null)
      for (var s in e)
        if (!!e.hasOwnProperty(s)) {
          var p = e[s]
          p ? (this[s] = p(o)) : (this[s] = o[s])
        }
      var m =
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      return (
        m ? (this.isDefaultPrevented = vc) : (this.isDefaultPrevented = bg),
        (this.isPropagationStopped = bg),
        this
      )
    }
    return (
      Xe(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var n = this.nativeEvent
          !n ||
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = vc))
        },
        stopPropagation: function () {
          var n = this.nativeEvent
          !n ||
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = vc))
        },
        persist: function () {},
        isPersistent: vc,
      }),
      t
    )
  }
  var Io = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    wp = Sr(Io),
    gu = Xe({}, Io, { view: 0, detail: 0 }),
    uT = Sr(gu),
    Dp,
    _p,
    bu
  function sT(e) {
    e !== bu &&
      (bu && e.type === 'mousemove'
        ? ((Dp = e.screenX - bu.screenX), (_p = e.screenY - bu.screenY))
        : ((Dp = 0), (_p = 0)),
      (bu = e))
  }
  var hc = Xe({}, gu, {
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
      getModifierState: Mp,
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
        return 'movementX' in e ? e.movementX : (sT(e), Dp)
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : _p
      },
    }),
    Sg = Sr(hc),
    cT = Xe({}, hc, { dataTransfer: 0 }),
    fT = Sr(cT),
    dT = Xe({}, gu, { relatedTarget: 0 }),
    Op = Sr(dT),
    pT = Xe({}, Io, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    vT = Sr(pT),
    hT = Xe({}, Io, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData
      },
    }),
    mT = Sr(hT),
    yT = Xe({}, Io, { data: 0 }),
    Eg = Sr(yT),
    gT = Eg,
    bT = {
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
    ST = {
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
  function ET(e) {
    if (e.key) {
      var t = bT[e.key] || e.key
      if (t !== 'Unidentified') return t
    }
    if (e.type === 'keypress') {
      var n = pc(e)
      return n === 13 ? 'Enter' : String.fromCharCode(n)
    }
    return e.type === 'keydown' || e.type === 'keyup'
      ? ST[e.keyCode] || 'Unidentified'
      : ''
  }
  var CT = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  }
  function RT(e) {
    var t = this,
      n = t.nativeEvent
    if (n.getModifierState) return n.getModifierState(e)
    var r = CT[e]
    return r ? !!n[r] : !1
  }
  function Mp(e) {
    return RT
  }
  var xT = Xe({}, gu, {
      key: ET,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Mp,
      charCode: function (e) {
        return e.type === 'keypress' ? pc(e) : 0
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === 'keypress'
          ? pc(e)
          : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
      },
    }),
    TT = Sr(xT),
    NT = Xe({}, hc, {
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
    Cg = Sr(NT),
    wT = Xe({}, gu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Mp,
    }),
    DT = Sr(wT),
    _T = Xe({}, Io, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    OT = Sr(_T),
    MT = Xe({}, hc, {
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
    LT = Sr(MT),
    AT = [9, 13, 27, 32],
    Rg = 229,
    Lp = zt && 'CompositionEvent' in window,
    Su = null
  zt && 'documentMode' in document && (Su = document.documentMode)
  var kT = zt && 'TextEvent' in window && !Su,
    xg = zt && (!Lp || (Su && Su > 8 && Su <= 11)),
    Tg = 32,
    Ng = String.fromCharCode(Tg)
  function UT() {
    wn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
      wn('onCompositionEnd', [
        'compositionend',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ]),
      wn('onCompositionStart', [
        'compositionstart',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ]),
      wn('onCompositionUpdate', [
        'compositionupdate',
        'focusout',
        'keydown',
        'keypress',
        'keyup',
        'mousedown',
      ])
  }
  var wg = !1
  function FT(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey)
  }
  function jT(e) {
    switch (e) {
      case 'compositionstart':
        return 'onCompositionStart'
      case 'compositionend':
        return 'onCompositionEnd'
      case 'compositionupdate':
        return 'onCompositionUpdate'
    }
  }
  function HT(e, t) {
    return e === 'keydown' && t.keyCode === Rg
  }
  function Dg(e, t) {
    switch (e) {
      case 'keyup':
        return AT.indexOf(t.keyCode) !== -1
      case 'keydown':
        return t.keyCode !== Rg
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function _g(e) {
    var t = e.detail
    return typeof t == 'object' && 'data' in t ? t.data : null
  }
  function Og(e) {
    return e.locale === 'ko'
  }
  var Wo = !1
  function zT(e, t, n, r, a) {
    var o, l
    if (
      (Lp
        ? (o = jT(t))
        : Wo
        ? Dg(t, r) && (o = 'onCompositionEnd')
        : HT(t, r) && (o = 'onCompositionStart'),
      !o)
    )
      return null
    xg &&
      !Og(r) &&
      (!Wo && o === 'onCompositionStart'
        ? (Wo = oT(a))
        : o === 'onCompositionEnd' && Wo && (l = yg()))
    var s = Sc(n, o)
    if (s.length > 0) {
      var p = new Eg(o, t, null, r, a)
      if ((e.push({ event: p, listeners: s }), l)) p.data = l
      else {
        var m = _g(r)
        m !== null && (p.data = m)
      }
    }
  }
  function $T(e, t) {
    switch (e) {
      case 'compositionend':
        return _g(t)
      case 'keypress':
        var n = t.which
        return n !== Tg ? null : ((wg = !0), Ng)
      case 'textInput':
        var r = t.data
        return r === Ng && wg ? null : r
      default:
        return null
    }
  }
  function PT(e, t) {
    if (Wo) {
      if (e === 'compositionend' || (!Lp && Dg(e, t))) {
        var n = yg()
        return lT(), (Wo = !1), n
      }
      return null
    }
    switch (e) {
      case 'paste':
        return null
      case 'keypress':
        if (!FT(t)) {
          if (t.char && t.char.length > 1) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case 'compositionend':
        return xg && !Og(t) ? null : t.data
      default:
        return null
    }
  }
  function BT(e, t, n, r, a) {
    var o
    if ((kT ? (o = $T(t, r)) : (o = PT(t, r)), !o)) return null
    var l = Sc(n, 'onBeforeInput')
    if (l.length > 0) {
      var s = new gT('onBeforeInput', 'beforeinput', null, r, a)
      e.push({ event: s, listeners: l }), (s.data = o)
    }
  }
  function VT(e, t, n, r, a, o, l) {
    zT(e, t, n, r, a), BT(e, t, n, r, a)
  }
  var YT = {
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
  function Mg(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!YT[e.type] : t === 'textarea'
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
   */ function IT(e) {
    if (!zt) return !1
    var t = 'on' + e,
      n = t in document
    if (!n) {
      var r = document.createElement('div')
      r.setAttribute(t, 'return;'), (n = typeof r[t] == 'function')
    }
    return n
  }
  function WT() {
    wn('onChange', [
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
  function Lg(e, t, n, r) {
    _y(r)
    var a = Sc(t, 'onChange')
    if (a.length > 0) {
      var o = new wp('onChange', 'change', null, n, r)
      e.push({ event: o, listeners: a })
    }
  }
  var Eu = null,
    Cu = null
  function GT(e) {
    var t = e.nodeName && e.nodeName.toLowerCase()
    return t === 'select' || (t === 'input' && e.type === 'file')
  }
  function qT(e) {
    var t = []
    Lg(t, Cu, e, Ld(e)), Ay(QT, t)
  }
  function QT(e) {
    Kg(e, 0)
  }
  function mc(e) {
    var t = Jo(e)
    if (wo(t)) return e
  }
  function KT(e, t) {
    if (e === 'change') return t
  }
  var Ag = !1
  zt &&
    (Ag = IT('input') && (!document.documentMode || document.documentMode > 9))
  function XT(e, t) {
    ;(Eu = e), (Cu = t), Eu.attachEvent('onpropertychange', Ug)
  }
  function kg() {
    !Eu || (Eu.detachEvent('onpropertychange', Ug), (Eu = null), (Cu = null))
  }
  function Ug(e) {
    e.propertyName === 'value' && mc(Cu) && qT(e)
  }
  function JT(e, t, n) {
    e === 'focusin' ? (kg(), XT(t, n)) : e === 'focusout' && kg()
  }
  function ZT(e, t) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return mc(Cu)
  }
  function eN(e) {
    var t = e.nodeName
    return (
      t &&
      t.toLowerCase() === 'input' &&
      (e.type === 'checkbox' || e.type === 'radio')
    )
  }
  function tN(e, t) {
    if (e === 'click') return mc(t)
  }
  function nN(e, t) {
    if (e === 'input' || e === 'change') return mc(t)
  }
  function rN(e) {
    var t = e._wrapperState
    !t || !t.controlled || e.type !== 'number' || Le(e, 'number', e.value)
  }
  function aN(e, t, n, r, a, o, l) {
    var s = n ? Jo(n) : window,
      p,
      m
    if (
      (GT(s)
        ? (p = KT)
        : Mg(s)
        ? Ag
          ? (p = nN)
          : ((p = ZT), (m = JT))
        : eN(s) && (p = tN),
      p)
    ) {
      var g = p(t, n)
      if (g) {
        Lg(e, g, r, a)
        return
      }
    }
    m && m(t, s, n), t === 'focusout' && rN(s)
  }
  function iN() {
    rn('onMouseEnter', ['mouseout', 'mouseover']),
      rn('onMouseLeave', ['mouseout', 'mouseover']),
      rn('onPointerEnter', ['pointerout', 'pointerover']),
      rn('onPointerLeave', ['pointerout', 'pointerover'])
  }
  function oN(e, t, n, r, a, o, l) {
    var s = t === 'mouseover' || t === 'pointerover',
      p = t === 'mouseout' || t === 'pointerout'
    if (s && !RR(r)) {
      var m = r.relatedTarget || r.fromElement
      if (m && (Ji(m) || ju(m))) return
    }
    if (!(!p && !s)) {
      var g
      if (a.window === a) g = a
      else {
        var N = a.ownerDocument
        N ? (g = N.defaultView || N.parentWindow) : (g = window)
      }
      var T, A
      if (p) {
        var k = r.relatedTarget || r.toElement
        if (((T = n), (A = k ? Ji(k) : null), A !== null)) {
          var H = Yi(A)
          ;(A !== H || (A.tag !== F && A.tag !== $)) && (A = null)
        }
      } else (T = null), (A = n)
      if (T !== A) {
        var ue = Sg,
          Se = 'onMouseLeave',
          ye = 'onMouseEnter',
          tt = 'mouse'
        ;(t === 'pointerout' || t === 'pointerover') &&
          ((ue = Cg),
          (Se = 'onPointerLeave'),
          (ye = 'onPointerEnter'),
          (tt = 'pointer'))
        var Ge = T == null ? g : Jo(T),
          O = A == null ? g : Jo(A),
          z = new ue(Se, tt + 'leave', T, r, a)
        ;(z.target = Ge), (z.relatedTarget = O)
        var M = null,
          W = Ji(a)
        if (W === n) {
          var se = new ue(ye, tt + 'enter', A, r, a)
          ;(se.target = O), (se.relatedTarget = Ge), (M = se)
        }
        ON(e, z, M, T, A)
      }
    }
  }
  function lN(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var Er = typeof Object.is == 'function' ? Object.is : lN
  function Ru(e, t) {
    if (Er(e, t)) return !0
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
      var o = n[a]
      if (!gn.call(t, o) || !Er(e[o], t[o])) return !1
    }
    return !0
  }
  function Fg(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function uN(e) {
    for (; e; ) {
      if (e.nextSibling) return e.nextSibling
      e = e.parentNode
    }
  }
  function jg(e, t) {
    for (var n = Fg(e), r = 0, a = 0; n; ) {
      if (n.nodeType === Ta) {
        if (((a = r + n.textContent.length), r <= t && a >= t))
          return { node: n, offset: t - r }
        r = a
      }
      n = Fg(uN(n))
    }
  }
  function sN(e) {
    var t = e.ownerDocument,
      n = (t && t.defaultView) || window,
      r = n.getSelection && n.getSelection()
    if (!r || r.rangeCount === 0) return null
    var a = r.anchorNode,
      o = r.anchorOffset,
      l = r.focusNode,
      s = r.focusOffset
    try {
      a.nodeType, l.nodeType
    } catch {
      return null
    }
    return cN(e, a, o, l, s)
  }
  function cN(e, t, n, r, a) {
    var o = 0,
      l = -1,
      s = -1,
      p = 0,
      m = 0,
      g = e,
      N = null
    e: for (;;) {
      for (
        var T = null;
        g === t && (n === 0 || g.nodeType === Ta) && (l = o + n),
          g === r && (a === 0 || g.nodeType === Ta) && (s = o + a),
          g.nodeType === Ta && (o += g.nodeValue.length),
          (T = g.firstChild) !== null;

      )
        (N = g), (g = T)
      for (;;) {
        if (g === e) break e
        if (
          (N === t && ++p === n && (l = o),
          N === r && ++m === a && (s = o),
          (T = g.nextSibling) !== null)
        )
          break
        ;(g = N), (N = g.parentNode)
      }
      g = T
    }
    return l === -1 || s === -1 ? null : { start: l, end: s }
  }
  function fN(e, t) {
    var n = e.ownerDocument || document,
      r = (n && n.defaultView) || window
    if (!!r.getSelection) {
      var a = r.getSelection(),
        o = e.textContent.length,
        l = Math.min(t.start, o),
        s = t.end === void 0 ? l : Math.min(t.end, o)
      if (!a.extend && l > s) {
        var p = s
        ;(s = l), (l = p)
      }
      var m = jg(e, l),
        g = jg(e, s)
      if (m && g) {
        if (
          a.rangeCount === 1 &&
          a.anchorNode === m.node &&
          a.anchorOffset === m.offset &&
          a.focusNode === g.node &&
          a.focusOffset === g.offset
        )
          return
        var N = n.createRange()
        N.setStart(m.node, m.offset),
          a.removeAllRanges(),
          l > s
            ? (a.addRange(N), a.extend(g.node, g.offset))
            : (N.setEnd(g.node, g.offset), a.addRange(N))
      }
    }
  }
  function Hg(e) {
    return e && e.nodeType === Ta
  }
  function zg(e, t) {
    return !e || !t
      ? !1
      : e === t
      ? !0
      : Hg(e)
      ? !1
      : Hg(t)
      ? zg(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
  }
  function dN(e) {
    return e && e.ownerDocument && zg(e.ownerDocument.documentElement, e)
  }
  function pN(e) {
    try {
      return typeof e.contentWindow.location.href == 'string'
    } catch {
      return !1
    }
  }
  function $g() {
    for (var e = window, t = ai(); t instanceof e.HTMLIFrameElement; ) {
      if (pN(t)) e = t.contentWindow
      else return t
      t = ai(e.document)
    }
    return t
  }
  function Ap(e) {
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
  function vN() {
    var e = $g()
    return { focusedElem: e, selectionRange: Ap(e) ? mN(e) : null }
  }
  function hN(e) {
    var t = $g(),
      n = e.focusedElem,
      r = e.selectionRange
    if (t !== n && dN(n)) {
      r !== null && Ap(n) && yN(n, r)
      for (var a = [], o = n; (o = o.parentNode); )
        o.nodeType === ir &&
          a.push({ element: o, left: o.scrollLeft, top: o.scrollTop })
      typeof n.focus == 'function' && n.focus()
      for (var l = 0; l < a.length; l++) {
        var s = a[l]
        ;(s.element.scrollLeft = s.left), (s.element.scrollTop = s.top)
      }
    }
  }
  function mN(e) {
    var t
    return (
      'selectionStart' in e
        ? (t = { start: e.selectionStart, end: e.selectionEnd })
        : (t = sN(e)),
      t || { start: 0, end: 0 }
    )
  }
  function yN(e, t) {
    var n = t.start,
      r = t.end
    r === void 0 && (r = n),
      'selectionStart' in e
        ? ((e.selectionStart = n),
          (e.selectionEnd = Math.min(r, e.value.length)))
        : fN(e, t)
  }
  var gN = zt && 'documentMode' in document && document.documentMode <= 11
  function bN() {
    wn('onSelect', [
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
  var Go = null,
    kp = null,
    xu = null,
    Up = !1
  function SN(e) {
    if ('selectionStart' in e && Ap(e))
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
  function EN(e) {
    return e.window === e ? e.document : e.nodeType === Na ? e : e.ownerDocument
  }
  function Pg(e, t, n) {
    var r = EN(n)
    if (!(Up || Go == null || Go !== ai(r))) {
      var a = SN(Go)
      if (!xu || !Ru(xu, a)) {
        xu = a
        var o = Sc(kp, 'onSelect')
        if (o.length > 0) {
          var l = new wp('onSelect', 'select', null, t, n)
          e.push({ event: l, listeners: o }), (l.target = Go)
        }
      }
    }
  }
  function CN(e, t, n, r, a, o, l) {
    var s = n ? Jo(n) : window
    switch (t) {
      case 'focusin':
        ;(Mg(s) || s.contentEditable === 'true') &&
          ((Go = s), (kp = n), (xu = null))
        break
      case 'focusout':
        ;(Go = null), (kp = null), (xu = null)
        break
      case 'mousedown':
        Up = !0
        break
      case 'contextmenu':
      case 'mouseup':
      case 'dragend':
        ;(Up = !1), Pg(e, r, a)
        break
      case 'selectionchange':
        if (gN) break
      case 'keydown':
      case 'keyup':
        Pg(e, r, a)
    }
  }
  function yc(e, t) {
    var n = {}
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    )
  }
  var qo = {
      animationend: yc('Animation', 'AnimationEnd'),
      animationiteration: yc('Animation', 'AnimationIteration'),
      animationstart: yc('Animation', 'AnimationStart'),
      transitionend: yc('Transition', 'TransitionEnd'),
    },
    Fp = {},
    Bg = {}
  zt &&
    ((Bg = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete qo.animationend.animation,
      delete qo.animationiteration.animation,
      delete qo.animationstart.animation),
    'TransitionEvent' in window || delete qo.transitionend.transition)
  function gc(e) {
    if (Fp[e]) return Fp[e]
    if (!qo[e]) return e
    var t = qo[e]
    for (var n in t) if (t.hasOwnProperty(n) && n in Bg) return (Fp[e] = t[n])
    return e
  }
  var Vg = gc('animationend'),
    Yg = gc('animationiteration'),
    Ig = gc('animationstart'),
    Wg = gc('transitionend'),
    Gg = new Map(),
    qg = [
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
  function fi(e, t) {
    Gg.set(e, t), wn(t, [e])
  }
  function RN() {
    for (var e = 0; e < qg.length; e++) {
      var t = qg[e],
        n = t.toLowerCase(),
        r = t[0].toUpperCase() + t.slice(1)
      fi(n, 'on' + r)
    }
    fi(Vg, 'onAnimationEnd'),
      fi(Yg, 'onAnimationIteration'),
      fi(Ig, 'onAnimationStart'),
      fi('dblclick', 'onDoubleClick'),
      fi('focusin', 'onFocus'),
      fi('focusout', 'onBlur'),
      fi(Wg, 'onTransitionEnd')
  }
  function xN(e, t, n, r, a, o, l) {
    var s = Gg.get(t)
    if (s !== void 0) {
      var p = wp,
        m = t
      switch (t) {
        case 'keypress':
          if (pc(r) === 0) return
        case 'keydown':
        case 'keyup':
          p = TT
          break
        case 'focusin':
          ;(m = 'focus'), (p = Op)
          break
        case 'focusout':
          ;(m = 'blur'), (p = Op)
          break
        case 'beforeblur':
        case 'afterblur':
          p = Op
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
          p = Sg
          break
        case 'drag':
        case 'dragend':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'dragstart':
        case 'drop':
          p = fT
          break
        case 'touchcancel':
        case 'touchend':
        case 'touchmove':
        case 'touchstart':
          p = DT
          break
        case Vg:
        case Yg:
        case Ig:
          p = vT
          break
        case Wg:
          p = OT
          break
        case 'scroll':
          p = uT
          break
        case 'wheel':
          p = LT
          break
        case 'copy':
        case 'cut':
        case 'paste':
          p = mT
          break
        case 'gotpointercapture':
        case 'lostpointercapture':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'pointerup':
          p = Cg
          break
      }
      var g = (o & Ql) !== 0
      {
        var N = !g && t === 'scroll',
          T = DN(n, s, r.type, g, N)
        if (T.length > 0) {
          var A = new p(s, m, null, r, a)
          e.push({ event: A, listeners: T })
        }
      }
    }
  }
  RN(), iN(), WT(), bN(), UT()
  function TN(e, t, n, r, a, o, l) {
    xN(e, t, n, r, a, o)
    var s = (o & SR) === 0
    s &&
      (oN(e, t, n, r, a),
      aN(e, t, n, r, a),
      CN(e, t, n, r, a),
      VT(e, t, n, r, a))
  }
  var Tu = [
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
    jp = new Set(
      ['cancel', 'close', 'invalid', 'load', 'scroll', 'toggle'].concat(Tu)
    )
  function Qg(e, t, n) {
    var r = e.type || 'unknown-event'
    ;(e.currentTarget = n), LR(r, t, void 0, e), (e.currentTarget = null)
  }
  function NN(e, t, n) {
    var r
    if (n)
      for (var a = t.length - 1; a >= 0; a--) {
        var o = t[a],
          l = o.instance,
          s = o.currentTarget,
          p = o.listener
        if (l !== r && e.isPropagationStopped()) return
        Qg(e, p, s), (r = l)
      }
    else
      for (var m = 0; m < t.length; m++) {
        var g = t[m],
          N = g.instance,
          T = g.currentTarget,
          A = g.listener
        if (N !== r && e.isPropagationStopped()) return
        Qg(e, A, T), (r = N)
      }
  }
  function Kg(e, t) {
    for (var n = (t & Ql) !== 0, r = 0; r < e.length; r++) {
      var a = e[r],
        o = a.event,
        l = a.listeners
      NN(o, l, n)
    }
    AR()
  }
  function wN(e, t, n, r, a) {
    var o = Ld(n),
      l = []
    TN(l, e, r, n, o, t), Kg(l, t)
  }
  function kt(e, t) {
    jp.has(e) ||
      f(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      )
    var n = !1,
      r = r1(t),
      a = MN(e, n)
    r.has(a) || (Xg(t, e, Md, n), r.add(a))
  }
  function Hp(e, t, n) {
    jp.has(e) &&
      !t &&
      f(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      )
    var r = 0
    t && (r |= Ql), Xg(n, e, r, t)
  }
  var bc = '_reactListening' + Math.random().toString(36).slice(2)
  function Nu(e) {
    if (!e[bc]) {
      ;(e[bc] = !0),
        mn.forEach(function (n) {
          n !== 'selectionchange' && (jp.has(n) || Hp(n, !1, e), Hp(n, !0, e))
        })
      var t = e.nodeType === Na ? e : e.ownerDocument
      t !== null && (t[bc] || ((t[bc] = !0), Hp('selectionchange', !1, t)))
    }
  }
  function Xg(e, t, n, r, a) {
    var o = Jx(e, t, n),
      l = void 0
    Ud &&
      (t === 'touchstart' || t === 'touchmove' || t === 'wheel') &&
      (l = !0),
      (e = e),
      r
        ? l !== void 0
          ? aT(e, t, o, l)
          : rT(e, t, o)
        : l !== void 0
        ? iT(e, t, o, l)
        : nT(e, t, o)
  }
  function Jg(e, t) {
    return e === t || (e.nodeType === Zt && e.parentNode === t)
  }
  function zp(e, t, n, r, a) {
    var o = r
    if ((t & wy) === 0 && (t & Md) === 0) {
      var l = a
      if (r !== null) {
        var s = r
        e: for (;;) {
          if (s === null) return
          var p = s.tag
          if (p === L || p === V) {
            var m = s.stateNode.containerInfo
            if (Jg(m, l)) break
            if (p === V)
              for (var g = s.return; g !== null; ) {
                var N = g.tag
                if (N === L || N === V) {
                  var T = g.stateNode.containerInfo
                  if (Jg(T, l)) return
                }
                g = g.return
              }
            for (; m !== null; ) {
              var A = Ji(m)
              if (A === null) return
              var k = A.tag
              if (k === F || k === $) {
                s = o = A
                continue e
              }
              m = m.parentNode
            }
          }
          s = s.return
        }
      }
    }
    Ay(function () {
      return wN(e, t, n, o)
    })
  }
  function wu(e, t, n) {
    return { instance: e, listener: t, currentTarget: n }
  }
  function DN(e, t, n, r, a, o) {
    for (
      var l = t !== null ? t + 'Capture' : null,
        s = r ? l : t,
        p = [],
        m = e,
        g = null;
      m !== null;

    ) {
      var N = m,
        T = N.stateNode,
        A = N.tag
      if (A === F && T !== null && ((g = T), s !== null)) {
        var k = Xl(m, s)
        k != null && p.push(wu(m, k, g))
      }
      if (a) break
      m = m.return
    }
    return p
  }
  function Sc(e, t) {
    for (var n = t + 'Capture', r = [], a = e; a !== null; ) {
      var o = a,
        l = o.stateNode,
        s = o.tag
      if (s === F && l !== null) {
        var p = l,
          m = Xl(a, n)
        m != null && r.unshift(wu(a, m, p))
        var g = Xl(a, t)
        g != null && r.push(wu(a, g, p))
      }
      a = a.return
    }
    return r
  }
  function Qo(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== F)
    return e || null
  }
  function _N(e, t) {
    for (var n = e, r = t, a = 0, o = n; o; o = Qo(o)) a++
    for (var l = 0, s = r; s; s = Qo(s)) l++
    for (; a - l > 0; ) (n = Qo(n)), a--
    for (; l - a > 0; ) (r = Qo(r)), l--
    for (var p = a; p--; ) {
      if (n === r || (r !== null && n === r.alternate)) return n
      ;(n = Qo(n)), (r = Qo(r))
    }
    return null
  }
  function Zg(e, t, n, r, a) {
    for (var o = t._reactName, l = [], s = n; s !== null && s !== r; ) {
      var p = s,
        m = p.alternate,
        g = p.stateNode,
        N = p.tag
      if (m !== null && m === r) break
      if (N === F && g !== null) {
        var T = g
        if (a) {
          var A = Xl(s, o)
          A != null && l.unshift(wu(s, A, T))
        } else if (!a) {
          var k = Xl(s, o)
          k != null && l.push(wu(s, k, T))
        }
      }
      s = s.return
    }
    l.length !== 0 && e.push({ event: t, listeners: l })
  }
  function ON(e, t, n, r, a) {
    var o = r && a ? _N(r, a) : null
    r !== null && Zg(e, t, r, o, !1),
      a !== null && n !== null && Zg(e, n, a, o, !0)
  }
  function MN(e, t) {
    return e + '__' + (t ? 'capture' : 'bubble')
  }
  var or = !1,
    Du = 'dangerouslySetInnerHTML',
    Ec = 'suppressContentEditableWarning',
    di = 'suppressHydrationWarning',
    eb = 'autoFocus',
    Ki = 'children',
    Xi = 'style',
    Cc = '__html',
    $p,
    Rc,
    _u,
    tb,
    xc,
    nb,
    rb
  ;($p = { dialog: !0, webview: !0 }),
    (Rc = function (e, t) {
      pR(e, t),
        vR(e, t),
        bR(e, t, {
          registrationNameDependencies: Jt,
          possibleRegistrationNames: yn,
        })
    }),
    (nb = zt && !document.documentMode),
    (_u = function (e, t, n) {
      if (!or) {
        var r = Tc(n),
          a = Tc(t)
        a !== r &&
          ((or = !0),
          f(
            'Prop `%s` did not match. Server: %s Client: %s',
            e,
            JSON.stringify(a),
            JSON.stringify(r)
          ))
      }
    }),
    (tb = function (e) {
      if (!or) {
        or = !0
        var t = []
        e.forEach(function (n) {
          t.push(n)
        }),
          f('Extra attributes from the server: %s', t)
      }
    }),
    (xc = function (e, t) {
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
    (rb = function (e, t) {
      var n =
        e.namespaceURI === xa
          ? e.ownerDocument.createElement(e.tagName)
          : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName)
      return (n.innerHTML = t), n.innerHTML
    })
  var LN = /\r\n?/g,
    AN = /\u0000|\uFFFD/g
  function Tc(e) {
    q(e)
    var t = typeof e == 'string' ? e : '' + e
    return t
      .replace(
        LN,
        `
`
      )
      .replace(AN, '')
  }
  function Nc(e, t, n, r) {
    var a = Tc(t),
      o = Tc(e)
    if (
      o !== a &&
      (r &&
        (or ||
          ((or = !0),
          f('Text content did not match. Server: "%s" Client: "%s"', o, a))),
      n && le)
    )
      throw new Error('Text content does not match server-rendered HTML.')
  }
  function ab(e) {
    return e.nodeType === Na ? e : e.ownerDocument
  }
  function kN() {}
  function wc(e) {
    e.onclick = kN
  }
  function UN(e, t, n, r, a) {
    for (var o in r)
      if (!!r.hasOwnProperty(o)) {
        var l = r[o]
        if (o === Xi) l && Object.freeze(l), Ey(t, l)
        else if (o === Du) {
          var s = l ? l[Cc] : void 0
          s != null && my(t, s)
        } else if (o === Ki)
          if (typeof l == 'string') {
            var p = e !== 'textarea' || l !== ''
            p && Qs(t, l)
          } else typeof l == 'number' && Qs(t, '' + l)
        else
          o === Ec ||
            o === di ||
            o === eb ||
            (Jt.hasOwnProperty(o)
              ? l != null &&
                (typeof l != 'function' && xc(o, l),
                o === 'onScroll' && kt('scroll', t))
              : l != null && Xa(t, o, l, a))
      }
  }
  function FN(e, t, n, r) {
    for (var a = 0; a < t.length; a += 2) {
      var o = t[a],
        l = t[a + 1]
      o === Xi
        ? Ey(e, l)
        : o === Du
        ? my(e, l)
        : o === Ki
        ? Qs(e, l)
        : Xa(e, o, l, r)
    }
  }
  function jN(e, t, n, r) {
    var a,
      o = ab(n),
      l,
      s = r
    if ((s === xa && (s = Td(e)), s === xa)) {
      if (
        ((a = zi(e, t)),
        !a &&
          e !== e.toLowerCase() &&
          f(
            '<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.',
            e
          ),
        e === 'script')
      ) {
        var p = o.createElement('div')
        p.innerHTML = '<script></script>'
        var m = p.firstChild
        l = p.removeChild(m)
      } else if (typeof t.is == 'string') l = o.createElement(e, { is: t.is })
      else if (((l = o.createElement(e)), e === 'select')) {
        var g = l
        t.multiple ? (g.multiple = !0) : t.size && (g.size = t.size)
      }
    } else l = o.createElementNS(s, e)
    return (
      s === xa &&
        !a &&
        Object.prototype.toString.call(l) === '[object HTMLUnknownElement]' &&
        !gn.call($p, e) &&
        (($p[e] = !0),
        f(
          'The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.',
          e
        )),
      l
    )
  }
  function HN(e, t) {
    return ab(t).createTextNode(e)
  }
  function zN(e, t, n, r) {
    var a = zi(t, n)
    Rc(t, n)
    var o
    switch (t) {
      case 'dialog':
        kt('cancel', e), kt('close', e), (o = n)
        break
      case 'iframe':
      case 'object':
      case 'embed':
        kt('load', e), (o = n)
        break
      case 'video':
      case 'audio':
        for (var l = 0; l < Tu.length; l++) kt(Tu[l], e)
        o = n
        break
      case 'source':
        kt('error', e), (o = n)
        break
      case 'img':
      case 'image':
      case 'link':
        kt('error', e), kt('load', e), (o = n)
        break
      case 'details':
        kt('toggle', e), (o = n)
        break
      case 'input':
        b(e, n), (o = h(e, n)), kt('invalid', e)
        break
      case 'option':
        Dt(e, n), (o = n)
        break
      case 'select':
        Gl(e, n), (o = Wl(e, n)), kt('invalid', e)
        break
      case 'textarea':
        py(e, n), (o = Rd(e, n)), kt('invalid', e)
        break
      default:
        o = n
    }
    switch ((Od(t, o), UN(t, e, r, o, a), t)) {
      case 'input':
        Ca(e), Q(e, n, !1)
        break
      case 'textarea':
        Ca(e), hy(e)
        break
      case 'option':
        At(e, n)
        break
      case 'select':
        Cd(e, n)
        break
      default:
        typeof o.onClick == 'function' && wc(e)
        break
    }
  }
  function $N(e, t, n, r, a) {
    Rc(t, r)
    var o = null,
      l,
      s
    switch (t) {
      case 'input':
        ;(l = h(e, n)), (s = h(e, r)), (o = [])
        break
      case 'select':
        ;(l = Wl(e, n)), (s = Wl(e, r)), (o = [])
        break
      case 'textarea':
        ;(l = Rd(e, n)), (s = Rd(e, r)), (o = [])
        break
      default:
        ;(l = n),
          (s = r),
          typeof l.onClick != 'function' &&
            typeof s.onClick == 'function' &&
            wc(e)
        break
    }
    Od(t, s)
    var p,
      m,
      g = null
    for (p in l)
      if (!(s.hasOwnProperty(p) || !l.hasOwnProperty(p) || l[p] == null))
        if (p === Xi) {
          var N = l[p]
          for (m in N) N.hasOwnProperty(m) && (g || (g = {}), (g[m] = ''))
        } else
          p === Du ||
            p === Ki ||
            p === Ec ||
            p === di ||
            p === eb ||
            (Jt.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null))
    for (p in s) {
      var T = s[p],
        A = l != null ? l[p] : void 0
      if (!(!s.hasOwnProperty(p) || T === A || (T == null && A == null)))
        if (p === Xi)
          if ((T && Object.freeze(T), A)) {
            for (m in A)
              A.hasOwnProperty(m) &&
                (!T || !T.hasOwnProperty(m)) &&
                (g || (g = {}), (g[m] = ''))
            for (m in T)
              T.hasOwnProperty(m) &&
                A[m] !== T[m] &&
                (g || (g = {}), (g[m] = T[m]))
          } else g || (o || (o = []), o.push(p, g)), (g = T)
        else if (p === Du) {
          var k = T ? T[Cc] : void 0,
            H = A ? A[Cc] : void 0
          k != null && H !== k && (o = o || []).push(p, k)
        } else
          p === Ki
            ? (typeof T == 'string' || typeof T == 'number') &&
              (o = o || []).push(p, '' + T)
            : p === Ec ||
              p === di ||
              (Jt.hasOwnProperty(p)
                ? (T != null &&
                    (typeof T != 'function' && xc(p, T),
                    p === 'onScroll' && kt('scroll', e)),
                  !o && A !== T && (o = []))
                : (o = o || []).push(p, T))
    }
    return g && (iR(g, s[Xi]), (o = o || []).push(Xi, g)), o
  }
  function PN(e, t, n, r, a) {
    n === 'input' && a.type === 'radio' && a.name != null && U(e, a)
    var o = zi(n, r),
      l = zi(n, a)
    switch ((FN(e, t, o, l), n)) {
      case 'input':
        j(e, a)
        break
      case 'textarea':
        vy(e, a)
        break
      case 'select':
        FC(e, a)
        break
    }
  }
  function BN(e) {
    {
      var t = e.toLowerCase()
      return (Ks.hasOwnProperty(t) && Ks[t]) || null
    }
  }
  function VN(e, t, n, r, a, o, l) {
    var s, p
    switch (((s = zi(t, n)), Rc(t, n), t)) {
      case 'dialog':
        kt('cancel', e), kt('close', e)
        break
      case 'iframe':
      case 'object':
      case 'embed':
        kt('load', e)
        break
      case 'video':
      case 'audio':
        for (var m = 0; m < Tu.length; m++) kt(Tu[m], e)
        break
      case 'source':
        kt('error', e)
        break
      case 'img':
      case 'image':
      case 'link':
        kt('error', e), kt('load', e)
        break
      case 'details':
        kt('toggle', e)
        break
      case 'input':
        b(e, n), kt('invalid', e)
        break
      case 'option':
        Dt(e, n)
        break
      case 'select':
        Gl(e, n), kt('invalid', e)
        break
      case 'textarea':
        py(e, n), kt('invalid', e)
        break
    }
    Od(t, n)
    {
      p = new Set()
      for (var g = e.attributes, N = 0; N < g.length; N++) {
        var T = g[N].name.toLowerCase()
        switch (T) {
          case 'value':
            break
          case 'checked':
            break
          case 'selected':
            break
          default:
            p.add(g[N].name)
        }
      }
    }
    var A = null
    for (var k in n)
      if (!!n.hasOwnProperty(k)) {
        var H = n[k]
        if (k === Ki)
          typeof H == 'string'
            ? e.textContent !== H &&
              (n[di] !== !0 && Nc(e.textContent, H, o, l), (A = [Ki, H]))
            : typeof H == 'number' &&
              e.textContent !== '' + H &&
              (n[di] !== !0 && Nc(e.textContent, H, o, l), (A = [Ki, '' + H]))
        else if (Jt.hasOwnProperty(k))
          H != null &&
            (typeof H != 'function' && xc(k, H),
            k === 'onScroll' && kt('scroll', e))
        else if (l && !0 && typeof s == 'boolean') {
          var ue = void 0,
            Se = s && vn ? null : Bt(k)
          if (n[di] !== !0) {
            if (
              !(
                k === Ec ||
                k === di ||
                k === 'value' ||
                k === 'checked' ||
                k === 'selected'
              )
            ) {
              if (k === Du) {
                var ye = e.innerHTML,
                  tt = H ? H[Cc] : void 0
                if (tt != null) {
                  var Ge = rb(e, tt)
                  Ge !== ye && _u(k, ye, Ge)
                }
              } else if (k === Xi) {
                if ((p.delete(k), nb)) {
                  var O = rR(H)
                  ;(ue = e.getAttribute('style')), O !== ue && _u(k, ue, O)
                }
              } else if (s && !vn)
                p.delete(k.toLowerCase()),
                  (ue = Ka(e, k, H)),
                  H !== ue && _u(k, ue, H)
              else if (!Lt(k, Se, s) && !$e(k, H, Se, s)) {
                var z = !1
                if (Se !== null)
                  p.delete(Se.attributeName), (ue = Sa(e, k, H, Se))
                else {
                  var M = r
                  if ((M === xa && (M = Td(t)), M === xa))
                    p.delete(k.toLowerCase())
                  else {
                    var W = BN(k)
                    W !== null && W !== k && ((z = !0), p.delete(W)),
                      p.delete(k)
                  }
                  ue = Ka(e, k, H)
                }
                var se = vn
                !se && H !== ue && !z && _u(k, ue, H)
              }
            }
          }
        }
      }
    switch ((l && p.size > 0 && n[di] !== !0 && tb(p), t)) {
      case 'input':
        Ca(e), Q(e, n, !0)
        break
      case 'textarea':
        Ca(e), hy(e)
        break
      case 'select':
      case 'option':
        break
      default:
        typeof n.onClick == 'function' && wc(e)
        break
    }
    return A
  }
  function YN(e, t, n) {
    var r = e.nodeValue !== t
    return r
  }
  function Pp(e, t) {
    {
      if (or) return
      ;(or = !0),
        f(
          'Did not expect server HTML to contain a <%s> in <%s>.',
          t.nodeName.toLowerCase(),
          e.nodeName.toLowerCase()
        )
    }
  }
  function Bp(e, t) {
    {
      if (or) return
      ;(or = !0),
        f(
          'Did not expect server HTML to contain the text node "%s" in <%s>.',
          t.nodeValue,
          e.nodeName.toLowerCase()
        )
    }
  }
  function Vp(e, t, n) {
    {
      if (or) return
      ;(or = !0),
        f(
          'Expected server HTML to contain a matching <%s> in <%s>.',
          t,
          e.nodeName.toLowerCase()
        )
    }
  }
  function Yp(e, t) {
    {
      if (t === '' || or) return
      ;(or = !0),
        f(
          'Expected server HTML to contain a matching text node for "%s" in <%s>.',
          t,
          e.nodeName.toLowerCase()
        )
    }
  }
  function IN(e, t, n) {
    switch (t) {
      case 'input':
        _e(e, n)
        return
      case 'textarea':
        HC(e, n)
        return
      case 'select':
        jC(e, n)
        return
    }
  }
  var Ou = function () {},
    Mu = function () {}
  {
    var WN = [
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
      ib = [
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
      GN = ib.concat(['button']),
      qN = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'],
      ob = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null,
      }
    Mu = function (e, t) {
      var n = Xe({}, e || ob),
        r = { tag: t }
      return (
        ib.indexOf(t) !== -1 &&
          ((n.aTagInScope = null),
          (n.buttonTagInScope = null),
          (n.nobrTagInScope = null)),
        GN.indexOf(t) !== -1 && (n.pTagInButtonScope = null),
        WN.indexOf(t) !== -1 &&
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
    var QN = function (e, t) {
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
            return qN.indexOf(t) === -1
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
      KN = function (e, t) {
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
      lb = {}
    Ou = function (e, t, n) {
      n = n || ob
      var r = n.current,
        a = r && r.tag
      t != null &&
        (e != null &&
          f(
            'validateDOMNesting: when childText is passed, childTag should be null'
          ),
        (e = '#text'))
      var o = QN(e, a) ? null : r,
        l = o ? null : KN(e, n),
        s = o || l
      if (!!s) {
        var p = s.tag,
          m = !!o + '|' + e + '|' + p
        if (!lb[m]) {
          lb[m] = !0
          var g = e,
            N = ''
          if (
            (e === '#text'
              ? /\S/.test(t)
                ? (g = 'Text nodes')
                : ((g = 'Whitespace text nodes'),
                  (N =
                    " Make sure you don't have any extra whitespace between tags on each line of your source code."))
              : (g = '<' + e + '>'),
            o)
          ) {
            var T = ''
            p === 'table' &&
              e === 'tr' &&
              (T +=
                ' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.'),
              f(
                'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s',
                g,
                p,
                N,
                T
              )
          } else
            f(
              'validateDOMNesting(...): %s cannot appear as a descendant of <%s>.',
              g,
              p
            )
        }
      }
    }
  }
  var Dc = 'suppressHydrationWarning',
    _c = '$',
    Oc = '/$',
    Lu = '$?',
    Au = '$!',
    XN = 'style',
    Ip = null,
    Wp = null
  function JN(e) {
    var t,
      n,
      r = e.nodeType
    switch (r) {
      case Na:
      case wd: {
        t = r === Na ? '#document' : '#fragment'
        var a = e.documentElement
        n = a ? a.namespaceURI : Nd(null, '')
        break
      }
      default: {
        var o = r === Zt ? e.parentNode : e,
          l = o.namespaceURI || null
        ;(t = o.tagName), (n = Nd(l, t))
        break
      }
    }
    {
      var s = t.toLowerCase(),
        p = Mu(null, s)
      return { namespace: n, ancestorInfo: p }
    }
  }
  function ZN(e, t, n) {
    {
      var r = e,
        a = Nd(r.namespace, t),
        o = Mu(r.ancestorInfo, t)
      return { namespace: a, ancestorInfo: o }
    }
  }
  function yk(e) {
    return e
  }
  function ew(e) {
    ;(Ip = Xx()), (Wp = vN())
    var t = null
    return hg(!1), t
  }
  function tw(e) {
    hN(Wp), hg(Ip), (Ip = null), (Wp = null)
  }
  function nw(e, t, n, r, a) {
    var o
    {
      var l = r
      if (
        (Ou(e, null, l.ancestorInfo),
        typeof t.children == 'string' || typeof t.children == 'number')
      ) {
        var s = '' + t.children,
          p = Mu(l.ancestorInfo, e)
        Ou(null, s, p)
      }
      o = l.namespace
    }
    var m = jN(e, t, n, o)
    return Fu(a, m), ev(m, t), m
  }
  function rw(e, t) {
    e.appendChild(t)
  }
  function aw(e, t, n, r, a) {
    switch ((zN(e, t, n, r), t)) {
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
  function iw(e, t, n, r, a, o) {
    {
      var l = o
      if (
        typeof r.children != typeof n.children &&
        (typeof r.children == 'string' || typeof r.children == 'number')
      ) {
        var s = '' + r.children,
          p = Mu(l.ancestorInfo, t)
        Ou(null, s, p)
      }
    }
    return $N(e, t, n, r)
  }
  function Gp(e, t) {
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
  function ow(e, t, n, r) {
    {
      var a = n
      Ou(null, e, a.ancestorInfo)
    }
    var o = HN(e, t)
    return Fu(r, o), o
  }
  function lw() {
    var e = window.event
    return e === void 0 ? Aa : mg(e.type)
  }
  var qp = typeof setTimeout == 'function' ? setTimeout : void 0,
    uw = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Qp = -1,
    ub = typeof Promise == 'function' ? Promise : void 0,
    sw =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof ub < 'u'
        ? function (e) {
            return ub.resolve(null).then(e).catch(cw)
          }
        : qp
  function cw(e) {
    setTimeout(function () {
      throw e
    })
  }
  function fw(e, t, n, r) {
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
  function dw(e, t, n, r, a, o) {
    PN(e, t, n, r, a), ev(e, a)
  }
  function sb(e) {
    Qs(e, '')
  }
  function pw(e, t, n) {
    e.nodeValue = n
  }
  function vw(e, t) {
    e.appendChild(t)
  }
  function hw(e, t) {
    var n
    e.nodeType === Zt
      ? ((n = e.parentNode), n.insertBefore(t, e))
      : ((n = e), n.appendChild(t))
    var r = e._reactRootContainer
    r == null && n.onclick === null && wc(n)
  }
  function mw(e, t, n) {
    e.insertBefore(t, n)
  }
  function yw(e, t, n) {
    e.nodeType === Zt ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n)
  }
  function gw(e, t) {
    e.removeChild(t)
  }
  function bw(e, t) {
    e.nodeType === Zt ? e.parentNode.removeChild(t) : e.removeChild(t)
  }
  function Kp(e, t) {
    var n = t,
      r = 0
    do {
      var a = n.nextSibling
      if ((e.removeChild(n), a && a.nodeType === Zt)) {
        var o = a.data
        if (o === Oc)
          if (r === 0) {
            e.removeChild(a), hu(t)
            return
          } else r--
        else (o === _c || o === Lu || o === Au) && r++
      }
      n = a
    } while (n)
    hu(t)
  }
  function Sw(e, t) {
    e.nodeType === Zt ? Kp(e.parentNode, t) : e.nodeType === ir && Kp(e, t),
      hu(e)
  }
  function Ew(e) {
    e = e
    var t = e.style
    typeof t.setProperty == 'function'
      ? t.setProperty('display', 'none', 'important')
      : (t.display = 'none')
  }
  function Cw(e) {
    e.nodeValue = ''
  }
  function Rw(e, t) {
    e = e
    var n = t[XN],
      r = n != null && n.hasOwnProperty('display') ? n.display : null
    e.style.display = Dd('display', r)
  }
  function xw(e, t) {
    e.nodeValue = t
  }
  function Tw(e) {
    e.nodeType === ir
      ? (e.textContent = '')
      : e.nodeType === Na &&
        e.documentElement &&
        e.removeChild(e.documentElement)
  }
  function Nw(e, t, n) {
    return e.nodeType !== ir || t.toLowerCase() !== e.nodeName.toLowerCase()
      ? null
      : e
  }
  function ww(e, t) {
    return t === '' || e.nodeType !== Ta ? null : e
  }
  function Dw(e) {
    return e.nodeType !== Zt ? null : e
  }
  function cb(e) {
    return e.data === Lu
  }
  function Xp(e) {
    return e.data === Au
  }
  function _w(e) {
    var t = e.nextSibling && e.nextSibling.dataset,
      n,
      r,
      a
    return (
      t && ((n = t.dgst), (r = t.msg), (a = t.stck)),
      { message: r, digest: n, stack: a }
    )
  }
  function Ow(e, t) {
    e._reactRetry = t
  }
  function Mc(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === ir || t === Ta) break
      if (t === Zt) {
        var n = e.data
        if (n === _c || n === Au || n === Lu) break
        if (n === Oc) return null
      }
    }
    return e
  }
  function ku(e) {
    return Mc(e.nextSibling)
  }
  function Mw(e) {
    return Mc(e.firstChild)
  }
  function Lw(e) {
    return Mc(e.firstChild)
  }
  function Aw(e) {
    return Mc(e.nextSibling)
  }
  function kw(e, t, n, r, a, o, l) {
    Fu(o, e), ev(e, n)
    var s
    {
      var p = a
      s = p.namespace
    }
    var m = (o.mode & Ze) !== De
    return VN(e, t, n, s, r, m, l)
  }
  function Uw(e, t, n, r) {
    return Fu(n, e), n.mode & Ze, YN(e, t)
  }
  function Fw(e, t) {
    Fu(t, e)
  }
  function jw(e) {
    for (var t = e.nextSibling, n = 0; t; ) {
      if (t.nodeType === Zt) {
        var r = t.data
        if (r === Oc) {
          if (n === 0) return ku(t)
          n--
        } else (r === _c || r === Au || r === Lu) && n++
      }
      t = t.nextSibling
    }
    return null
  }
  function fb(e) {
    for (var t = e.previousSibling, n = 0; t; ) {
      if (t.nodeType === Zt) {
        var r = t.data
        if (r === _c || r === Au || r === Lu) {
          if (n === 0) return t
          n--
        } else r === Oc && n++
      }
      t = t.previousSibling
    }
    return null
  }
  function Hw(e) {
    hu(e)
  }
  function zw(e) {
    hu(e)
  }
  function $w(e) {
    return e !== 'head' && e !== 'body'
  }
  function Pw(e, t, n, r) {
    var a = !0
    Nc(t.nodeValue, n, r, a)
  }
  function Bw(e, t, n, r, a, o) {
    if (t[Dc] !== !0) {
      var l = !0
      Nc(r.nodeValue, a, o, l)
    }
  }
  function Vw(e, t) {
    t.nodeType === ir ? Pp(e, t) : t.nodeType === Zt || Bp(e, t)
  }
  function Yw(e, t) {
    {
      var n = e.parentNode
      n !== null &&
        (t.nodeType === ir ? Pp(n, t) : t.nodeType === Zt || Bp(n, t))
    }
  }
  function Iw(e, t, n, r, a) {
    ;(a || t[Dc] !== !0) &&
      (r.nodeType === ir ? Pp(n, r) : r.nodeType === Zt || Bp(n, r))
  }
  function Ww(e, t, n) {
    Vp(e, t)
  }
  function Gw(e, t) {
    Yp(e, t)
  }
  function qw(e, t, n) {
    {
      var r = e.parentNode
      r !== null && Vp(r, t)
    }
  }
  function Qw(e, t) {
    {
      var n = e.parentNode
      n !== null && Yp(n, t)
    }
  }
  function Kw(e, t, n, r, a, o) {
    ;(o || t[Dc] !== !0) && Vp(n, r)
  }
  function Xw(e, t, n, r, a) {
    ;(a || t[Dc] !== !0) && Yp(n, r)
  }
  function Jw(e) {
    f(
      'An error occurred during hydration. The server HTML was replaced with client content in <%s>.',
      e.nodeName.toLowerCase()
    )
  }
  function Zw(e) {
    Nu(e)
  }
  var Ko = Math.random().toString(36).slice(2),
    Xo = '__reactFiber$' + Ko,
    Jp = '__reactProps$' + Ko,
    Uu = '__reactContainer$' + Ko,
    Zp = '__reactEvents$' + Ko,
    e1 = '__reactListeners$' + Ko,
    t1 = '__reactHandles$' + Ko
  function n1(e) {
    delete e[Xo], delete e[Jp], delete e[Zp], delete e[e1], delete e[t1]
  }
  function Fu(e, t) {
    t[Xo] = e
  }
  function Lc(e, t) {
    t[Uu] = e
  }
  function db(e) {
    e[Uu] = null
  }
  function ju(e) {
    return !!e[Uu]
  }
  function Ji(e) {
    var t = e[Xo]
    if (t) return t
    for (var n = e.parentNode; n; ) {
      if (((t = n[Uu] || n[Xo]), t)) {
        var r = t.alternate
        if (t.child !== null || (r !== null && r.child !== null))
          for (var a = fb(e); a !== null; ) {
            var o = a[Xo]
            if (o) return o
            a = fb(a)
          }
        return t
      }
      ;(e = n), (n = e.parentNode)
    }
    return null
  }
  function pi(e) {
    var t = e[Xo] || e[Uu]
    return t && (t.tag === F || t.tag === $ || t.tag === K || t.tag === L)
      ? t
      : null
  }
  function Jo(e) {
    if (e.tag === F || e.tag === $) return e.stateNode
    throw new Error('getNodeFromInstance: Invalid argument.')
  }
  function Ac(e) {
    return e[Jp] || null
  }
  function ev(e, t) {
    e[Jp] = t
  }
  function r1(e) {
    var t = e[Zp]
    return t === void 0 && (t = e[Zp] = new Set()), t
  }
  var pb = {},
    vb = c.ReactDebugCurrentFrame
  function kc(e) {
    if (e) {
      var t = e._owner,
        n = ti(e.type, e._source, t ? t.type : null)
      vb.setExtraStackFrame(n)
    } else vb.setExtraStackFrame(null)
  }
  function $r(e, t, n, r, a) {
    {
      var o = Function.call.bind(gn)
      for (var l in e)
        if (o(e, l)) {
          var s = void 0
          try {
            if (typeof e[l] != 'function') {
              var p = Error(
                (r || 'React class') +
                  ': ' +
                  n +
                  ' type `' +
                  l +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof e[l] +
                  '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
              )
              throw ((p.name = 'Invariant Violation'), p)
            }
            s = e[l](
              t,
              l,
              r,
              n,
              null,
              'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
            )
          } catch (m) {
            s = m
          }
          s &&
            !(s instanceof Error) &&
            (kc(a),
            f(
              '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
              r || 'React class',
              n,
              l,
              typeof s
            ),
            kc(null)),
            s instanceof Error &&
              !(s.message in pb) &&
              ((pb[s.message] = !0),
              kc(a),
              f('Failed %s type: %s', n, s.message),
              kc(null))
        }
    }
  }
  var tv = [],
    Uc
  Uc = []
  var ka = -1
  function vi(e) {
    return { current: e }
  }
  function Vn(e, t) {
    if (ka < 0) {
      f('Unexpected pop.')
      return
    }
    t !== Uc[ka] && f('Unexpected Fiber popped.'),
      (e.current = tv[ka]),
      (tv[ka] = null),
      (Uc[ka] = null),
      ka--
  }
  function Yn(e, t, n) {
    ka++, (tv[ka] = e.current), (Uc[ka] = n), (e.current = t)
  }
  var nv
  nv = {}
  var Cr = {}
  Object.freeze(Cr)
  var Ua = vi(Cr),
    la = vi(!1),
    rv = Cr
  function Zo(e, t, n) {
    return n && ua(t) ? rv : Ua.current
  }
  function hb(e, t, n) {
    {
      var r = e.stateNode
      ;(r.__reactInternalMemoizedUnmaskedChildContext = t),
        (r.__reactInternalMemoizedMaskedChildContext = n)
    }
  }
  function el(e, t) {
    {
      var n = e.type,
        r = n.contextTypes
      if (!r) return Cr
      var a = e.stateNode
      if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
        return a.__reactInternalMemoizedMaskedChildContext
      var o = {}
      for (var l in r) o[l] = t[l]
      {
        var s = Pe(e) || 'Unknown'
        $r(r, o, 'context', s)
      }
      return a && hb(e, t, o), o
    }
  }
  function Fc() {
    return la.current
  }
  function ua(e) {
    {
      var t = e.childContextTypes
      return t != null
    }
  }
  function jc(e) {
    Vn(la, e), Vn(Ua, e)
  }
  function av(e) {
    Vn(la, e), Vn(Ua, e)
  }
  function mb(e, t, n) {
    {
      if (Ua.current !== Cr)
        throw new Error(
          'Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.'
        )
      Yn(Ua, t, e), Yn(la, n, e)
    }
  }
  function yb(e, t, n) {
    {
      var r = e.stateNode,
        a = t.childContextTypes
      if (typeof r.getChildContext != 'function') {
        {
          var o = Pe(e) || 'Unknown'
          nv[o] ||
            ((nv[o] = !0),
            f(
              '%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.',
              o,
              o
            ))
        }
        return n
      }
      var l = r.getChildContext()
      for (var s in l)
        if (!(s in a))
          throw new Error(
            (Pe(e) || 'Unknown') +
              '.getChildContext(): key "' +
              s +
              '" is not defined in childContextTypes.'
          )
      {
        var p = Pe(e) || 'Unknown'
        $r(a, l, 'child context', p)
      }
      return Xe({}, n, l)
    }
  }
  function Hc(e) {
    {
      var t = e.stateNode,
        n = (t && t.__reactInternalMemoizedMergedChildContext) || Cr
      return (rv = Ua.current), Yn(Ua, n, e), Yn(la, la.current, e), !0
    }
  }
  function gb(e, t, n) {
    {
      var r = e.stateNode
      if (!r)
        throw new Error(
          'Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.'
        )
      if (n) {
        var a = yb(e, t, rv)
        ;(r.__reactInternalMemoizedMergedChildContext = a),
          Vn(la, e),
          Vn(Ua, e),
          Yn(Ua, a, e),
          Yn(la, n, e)
      } else Vn(la, e), Yn(la, n, e)
    }
  }
  function a1(e) {
    {
      if (!$R(e) || e.tag !== C)
        throw new Error(
          'Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.'
        )
      var t = e
      do {
        switch (t.tag) {
          case L:
            return t.stateNode.context
          case C: {
            var n = t.type
            if (ua(n))
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
  var hi = 0,
    zc = 1,
    Fa = null,
    iv = !1,
    ov = !1
  function bb(e) {
    Fa === null ? (Fa = [e]) : Fa.push(e)
  }
  function i1(e) {
    ;(iv = !0), bb(e)
  }
  function Sb() {
    iv && mi()
  }
  function mi() {
    if (!ov && Fa !== null) {
      ov = !0
      var e = 0,
        t = zr()
      try {
        var n = !0,
          r = Fa
        for (xn(br); e < r.length; e++) {
          var a = r[e]
          do a = a(n)
          while (a !== null)
        }
        ;(Fa = null), (iv = !1)
      } catch (o) {
        throw (Fa !== null && (Fa = Fa.slice(e + 1)), Yy(tc, mi), o)
      } finally {
        xn(t), (ov = !1)
      }
    }
    return null
  }
  var tl = [],
    nl = 0,
    $c = null,
    Pc = 0,
    Or = [],
    Mr = 0,
    Zi = null,
    ja = 1,
    Ha = ''
  function o1(e) {
    return to(), (e.flags & Fy) !== we
  }
  function l1(e) {
    return to(), Pc
  }
  function u1() {
    var e = Ha,
      t = ja,
      n = t & ~s1(t)
    return n.toString(32) + e
  }
  function eo(e, t) {
    to(), (tl[nl++] = Pc), (tl[nl++] = $c), ($c = e), (Pc = t)
  }
  function Eb(e, t, n) {
    to(), (Or[Mr++] = ja), (Or[Mr++] = Ha), (Or[Mr++] = Zi), (Zi = e)
    var r = ja,
      a = Ha,
      o = Bc(r) - 1,
      l = r & ~(1 << o),
      s = n + 1,
      p = Bc(t) + o
    if (p > 30) {
      var m = o - (o % 5),
        g = (1 << m) - 1,
        N = (l & g).toString(32),
        T = l >> m,
        A = o - m,
        k = Bc(t) + A,
        H = s << A,
        ue = H | T,
        Se = N + a
      ;(ja = (1 << k) | ue), (Ha = Se)
    } else {
      var ye = s << o,
        tt = ye | l,
        Ge = a
      ;(ja = (1 << p) | tt), (Ha = Ge)
    }
  }
  function lv(e) {
    to()
    var t = e.return
    if (t !== null) {
      var n = 1,
        r = 0
      eo(e, n), Eb(e, n, r)
    }
  }
  function Bc(e) {
    return 32 - Ky(e)
  }
  function s1(e) {
    return 1 << (Bc(e) - 1)
  }
  function uv(e) {
    for (; e === $c; )
      ($c = tl[--nl]), (tl[nl] = null), (Pc = tl[--nl]), (tl[nl] = null)
    for (; e === Zi; )
      (Zi = Or[--Mr]),
        (Or[Mr] = null),
        (Ha = Or[--Mr]),
        (Or[Mr] = null),
        (ja = Or[--Mr]),
        (Or[Mr] = null)
  }
  function c1() {
    return to(), Zi !== null ? { id: ja, overflow: Ha } : null
  }
  function f1(e, t) {
    to(),
      (Or[Mr++] = ja),
      (Or[Mr++] = Ha),
      (Or[Mr++] = Zi),
      (ja = t.id),
      (Ha = t.overflow),
      (Zi = e)
  }
  function to() {
    _n() ||
      f(
        'Expected to be hydrating. This is a bug in React. Please file an issue.'
      )
  }
  var Dn = null,
    Lr = null,
    Pr = !1,
    no = !1,
    yi = null
  function d1() {
    Pr &&
      f(
        'We should not be hydrating here. This is a bug in React. Please file a bug.'
      )
  }
  function Cb() {
    no = !0
  }
  function p1() {
    return no
  }
  function v1(e) {
    var t = e.stateNode.containerInfo
    return (Lr = Lw(t)), (Dn = e), (Pr = !0), (yi = null), (no = !1), !0
  }
  function h1(e, t, n) {
    return (
      (Lr = Aw(t)),
      (Dn = e),
      (Pr = !0),
      (yi = null),
      (no = !1),
      n !== null && f1(e, n),
      !0
    )
  }
  function Rb(e, t) {
    switch (e.tag) {
      case L: {
        Vw(e.stateNode.containerInfo, t)
        break
      }
      case F: {
        var n = (e.mode & Ze) !== De
        Iw(e.type, e.memoizedProps, e.stateNode, t, n)
        break
      }
      case K: {
        var r = e.memoizedState
        r.dehydrated !== null && Yw(r.dehydrated, t)
        break
      }
    }
  }
  function xb(e, t) {
    Rb(e, t)
    var n = gO()
    ;(n.stateNode = t), (n.return = e)
    var r = e.deletions
    r === null ? ((e.deletions = [n]), (e.flags |= $i)) : r.push(n)
  }
  function sv(e, t) {
    {
      if (no) return
      switch (e.tag) {
        case L: {
          var n = e.stateNode.containerInfo
          switch (t.tag) {
            case F:
              var r = t.type
              t.pendingProps, Ww(n, r)
              break
            case $:
              var a = t.pendingProps
              Gw(n, a)
              break
          }
          break
        }
        case F: {
          var o = e.type,
            l = e.memoizedProps,
            s = e.stateNode
          switch (t.tag) {
            case F: {
              var p = t.type,
                m = t.pendingProps,
                g = (e.mode & Ze) !== De
              Kw(o, l, s, p, m, g)
              break
            }
            case $: {
              var N = t.pendingProps,
                T = (e.mode & Ze) !== De
              Xw(o, l, s, N, T)
              break
            }
          }
          break
        }
        case K: {
          var A = e.memoizedState,
            k = A.dehydrated
          if (k !== null)
            switch (t.tag) {
              case F:
                var H = t.type
                t.pendingProps, qw(k, H)
                break
              case $:
                var ue = t.pendingProps
                Qw(k, ue)
                break
            }
          break
        }
        default:
          return
      }
    }
  }
  function Tb(e, t) {
    ;(t.flags = (t.flags & ~Da) | en), sv(e, t)
  }
  function Nb(e, t) {
    switch (e.tag) {
      case F: {
        var n = e.type
        e.pendingProps
        var r = Nw(t, n)
        return r !== null ? ((e.stateNode = r), (Dn = e), (Lr = Mw(r)), !0) : !1
      }
      case $: {
        var a = e.pendingProps,
          o = ww(t, a)
        return o !== null ? ((e.stateNode = o), (Dn = e), (Lr = null), !0) : !1
      }
      case K: {
        var l = Dw(t)
        if (l !== null) {
          var s = { dehydrated: l, treeContext: c1(), retryLane: yr }
          e.memoizedState = s
          var p = bO(l)
          return (p.return = e), (e.child = p), (Dn = e), (Lr = null), !0
        }
        return !1
      }
      default:
        return !1
    }
  }
  function cv(e) {
    return (e.mode & Ze) !== De && (e.flags & pt) === we
  }
  function fv(e) {
    throw new Error(
      'Hydration failed because the initial UI does not match what was rendered on the server.'
    )
  }
  function dv(e) {
    if (!!Pr) {
      var t = Lr
      if (!t) {
        cv(e) && (sv(Dn, e), fv()), Tb(Dn, e), (Pr = !1), (Dn = e)
        return
      }
      var n = t
      if (!Nb(e, t)) {
        cv(e) && (sv(Dn, e), fv()), (t = ku(n))
        var r = Dn
        if (!t || !Nb(e, t)) {
          Tb(Dn, e), (Pr = !1), (Dn = e)
          return
        }
        xb(r, n)
      }
    }
  }
  function m1(e, t, n) {
    var r = e.stateNode,
      a = !no,
      o = kw(r, e.type, e.memoizedProps, t, n, e, a)
    return (e.updateQueue = o), o !== null
  }
  function y1(e) {
    var t = e.stateNode,
      n = e.memoizedProps,
      r = Uw(t, n, e)
    if (r) {
      var a = Dn
      if (a !== null)
        switch (a.tag) {
          case L: {
            var o = a.stateNode.containerInfo,
              l = (a.mode & Ze) !== De
            Pw(o, t, n, l)
            break
          }
          case F: {
            var s = a.type,
              p = a.memoizedProps,
              m = a.stateNode,
              g = (a.mode & Ze) !== De
            Bw(s, p, m, t, n, g)
            break
          }
        }
    }
    return r
  }
  function g1(e) {
    var t = e.memoizedState,
      n = t !== null ? t.dehydrated : null
    if (!n)
      throw new Error(
        'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
      )
    Fw(n, e)
  }
  function b1(e) {
    var t = e.memoizedState,
      n = t !== null ? t.dehydrated : null
    if (!n)
      throw new Error(
        'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.'
      )
    return jw(n)
  }
  function wb(e) {
    for (
      var t = e.return;
      t !== null && t.tag !== F && t.tag !== L && t.tag !== K;

    )
      t = t.return
    Dn = t
  }
  function Vc(e) {
    if (e !== Dn) return !1
    if (!Pr) return wb(e), (Pr = !0), !1
    if (
      e.tag !== L &&
      (e.tag !== F || ($w(e.type) && !Gp(e.type, e.memoizedProps)))
    ) {
      var t = Lr
      if (t)
        if (cv(e)) Db(e), fv()
        else for (; t; ) xb(e, t), (t = ku(t))
    }
    return (
      wb(e), e.tag === K ? (Lr = b1(e)) : (Lr = Dn ? ku(e.stateNode) : null), !0
    )
  }
  function S1() {
    return Pr && Lr !== null
  }
  function Db(e) {
    for (var t = Lr; t; ) Rb(e, t), (t = ku(t))
  }
  function rl() {
    ;(Dn = null), (Lr = null), (Pr = !1), (no = !1)
  }
  function _b() {
    yi !== null && (R0(yi), (yi = null))
  }
  function _n() {
    return Pr
  }
  function pv(e) {
    yi === null ? (yi = [e]) : yi.push(e)
  }
  var E1 = c.ReactCurrentBatchConfig,
    C1 = null
  function R1() {
    return E1.transition
  }
  var Br = {
    recordUnsafeLifecycleWarnings: function (e, t) {},
    flushPendingUnsafeLifecycleWarnings: function () {},
    recordLegacyContextWarning: function (e, t) {},
    flushLegacyContextWarning: function () {},
    discardPendingWarnings: function () {},
  }
  {
    var x1 = function (e) {
        for (var t = null, n = e; n !== null; )
          n.mode & tn && (t = n), (n = n.return)
        return t
      },
      ro = function (e) {
        var t = []
        return (
          e.forEach(function (n) {
            t.push(n)
          }),
          t.sort().join(', ')
        )
      },
      Hu = [],
      zu = [],
      $u = [],
      Pu = [],
      Bu = [],
      Vu = [],
      ao = new Set()
    ;(Br.recordUnsafeLifecycleWarnings = function (e, t) {
      ao.has(e.type) ||
        (typeof t.componentWillMount == 'function' &&
          t.componentWillMount.__suppressDeprecationWarning !== !0 &&
          Hu.push(e),
        e.mode & tn &&
          typeof t.UNSAFE_componentWillMount == 'function' &&
          zu.push(e),
        typeof t.componentWillReceiveProps == 'function' &&
          t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 &&
          $u.push(e),
        e.mode & tn &&
          typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
          Pu.push(e),
        typeof t.componentWillUpdate == 'function' &&
          t.componentWillUpdate.__suppressDeprecationWarning !== !0 &&
          Bu.push(e),
        e.mode & tn &&
          typeof t.UNSAFE_componentWillUpdate == 'function' &&
          Vu.push(e))
    }),
      (Br.flushPendingUnsafeLifecycleWarnings = function () {
        var e = new Set()
        Hu.length > 0 &&
          (Hu.forEach(function (T) {
            e.add(Pe(T) || 'Component'), ao.add(T.type)
          }),
          (Hu = []))
        var t = new Set()
        zu.length > 0 &&
          (zu.forEach(function (T) {
            t.add(Pe(T) || 'Component'), ao.add(T.type)
          }),
          (zu = []))
        var n = new Set()
        $u.length > 0 &&
          ($u.forEach(function (T) {
            n.add(Pe(T) || 'Component'), ao.add(T.type)
          }),
          ($u = []))
        var r = new Set()
        Pu.length > 0 &&
          (Pu.forEach(function (T) {
            r.add(Pe(T) || 'Component'), ao.add(T.type)
          }),
          (Pu = []))
        var a = new Set()
        Bu.length > 0 &&
          (Bu.forEach(function (T) {
            a.add(Pe(T) || 'Component'), ao.add(T.type)
          }),
          (Bu = []))
        var o = new Set()
        if (
          (Vu.length > 0 &&
            (Vu.forEach(function (T) {
              o.add(Pe(T) || 'Component'), ao.add(T.type)
            }),
            (Vu = [])),
          t.size > 0)
        ) {
          var l = ro(t)
          f(
            `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
            l
          )
        }
        if (r.size > 0) {
          var s = ro(r)
          f(
            `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,
            s
          )
        }
        if (o.size > 0) {
          var p = ro(o)
          f(
            `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
            p
          )
        }
        if (e.size > 0) {
          var m = ro(e)
          y(
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            m
          )
        }
        if (n.size > 0) {
          var g = ro(n)
          y(
            `componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            g
          )
        }
        if (a.size > 0) {
          var N = ro(a)
          y(
            `componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            N
          )
        }
      })
    var Yc = new Map(),
      Ob = new Set()
    ;(Br.recordLegacyContextWarning = function (e, t) {
      var n = x1(e)
      if (n === null) {
        f(
          'Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.'
        )
        return
      }
      if (!Ob.has(e.type)) {
        var r = Yc.get(n)
        ;(e.type.contextTypes != null ||
          e.type.childContextTypes != null ||
          (t !== null && typeof t.getChildContext == 'function')) &&
          (r === void 0 && ((r = []), Yc.set(n, r)), r.push(e))
      }
    }),
      (Br.flushLegacyContextWarning = function () {
        Yc.forEach(function (e, t) {
          if (e.length !== 0) {
            var n = e[0],
              r = new Set()
            e.forEach(function (o) {
              r.add(Pe(o) || 'Component'), Ob.add(o.type)
            })
            var a = ro(r)
            try {
              $t(n),
                f(
                  `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,
                  a
                )
            } finally {
              Sn()
            }
          }
        })
      }),
      (Br.discardPendingWarnings = function () {
        ;(Hu = []),
          (zu = []),
          ($u = []),
          (Pu = []),
          (Bu = []),
          (Vu = []),
          (Yc = new Map())
      })
  }
  function Vr(e, t) {
    if (e && e.defaultProps) {
      var n = Xe({}, t),
        r = e.defaultProps
      for (var a in r) n[a] === void 0 && (n[a] = r[a])
      return n
    }
    return t
  }
  var vv = vi(null),
    hv
  hv = {}
  var Ic = null,
    al = null,
    mv = null,
    Wc = !1
  function Gc() {
    ;(Ic = null), (al = null), (mv = null), (Wc = !1)
  }
  function Mb() {
    Wc = !0
  }
  function Lb() {
    Wc = !1
  }
  function Ab(e, t, n) {
    Yn(vv, t._currentValue, e),
      (t._currentValue = n),
      t._currentRenderer !== void 0 &&
        t._currentRenderer !== null &&
        t._currentRenderer !== hv &&
        f(
          'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.'
        ),
      (t._currentRenderer = hv)
  }
  function yv(e, t) {
    var n = vv.current
    Vn(vv, t), (e._currentValue = n)
  }
  function gv(e, t, n) {
    for (var r = e; r !== null; ) {
      var a = r.alternate
      if (
        (Vo(r.childLanes, t)
          ? a !== null &&
            !Vo(a.childLanes, t) &&
            (a.childLanes = Ie(a.childLanes, t))
          : ((r.childLanes = Ie(r.childLanes, t)),
            a !== null && (a.childLanes = Ie(a.childLanes, t))),
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
  function T1(e, t, n) {
    N1(e, t, n)
  }
  function N1(e, t, n) {
    var r = e.child
    for (r !== null && (r.return = e); r !== null; ) {
      var a = void 0,
        o = r.dependencies
      if (o !== null) {
        a = r.child
        for (var l = o.firstContext; l !== null; ) {
          if (l.context === t) {
            if (r.tag === C) {
              var s = uu(n),
                p = za(Mt, s)
              p.tag = Qc
              var m = r.updateQueue
              if (m !== null) {
                var g = m.shared,
                  N = g.pending
                N === null ? (p.next = p) : ((p.next = N.next), (N.next = p)),
                  (g.pending = p)
              }
            }
            r.lanes = Ie(r.lanes, n)
            var T = r.alternate
            T !== null && (T.lanes = Ie(T.lanes, n)),
              gv(r.return, n, e),
              (o.lanes = Ie(o.lanes, n))
            break
          }
          l = l.next
        }
      } else if (r.tag === Z) a = r.type === e.type ? null : r.child
      else if (r.tag === Re) {
        var A = r.return
        if (A === null)
          throw new Error(
            'We just came from a parent so we must have had a parent. This is a bug in React.'
          )
        A.lanes = Ie(A.lanes, n)
        var k = A.alternate
        k !== null && (k.lanes = Ie(k.lanes, n)), gv(A, n, e), (a = r.sibling)
      } else a = r.child
      if (a !== null) a.return = r
      else
        for (a = r; a !== null; ) {
          if (a === e) {
            a = null
            break
          }
          var H = a.sibling
          if (H !== null) {
            ;(H.return = a.return), (a = H)
            break
          }
          a = a.return
        }
      r = a
    }
  }
  function il(e, t) {
    ;(Ic = e), (al = null), (mv = null)
    var n = e.dependencies
    if (n !== null) {
      var r = n.firstContext
      r !== null && (gr(n.lanes, t) && rs(), (n.firstContext = null))
    }
  }
  function nn(e) {
    Wc &&
      f(
        'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
      )
    var t = e._currentValue
    if (mv !== e) {
      var n = { context: e, memoizedValue: t, next: null }
      if (al === null) {
        if (Ic === null)
          throw new Error(
            'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
          )
        ;(al = n), (Ic.dependencies = { lanes: Y, firstContext: n })
      } else al = al.next = n
    }
    return t
  }
  var io = null
  function bv(e) {
    io === null ? (io = [e]) : io.push(e)
  }
  function w1() {
    if (io !== null) {
      for (var e = 0; e < io.length; e++) {
        var t = io[e],
          n = t.interleaved
        if (n !== null) {
          t.interleaved = null
          var r = n.next,
            a = t.pending
          if (a !== null) {
            var o = a.next
            ;(a.next = r), (n.next = o)
          }
          t.pending = n
        }
      }
      io = null
    }
  }
  function kb(e, t, n, r) {
    var a = t.interleaved
    return (
      a === null ? ((n.next = n), bv(t)) : ((n.next = a.next), (a.next = n)),
      (t.interleaved = n),
      qc(e, r)
    )
  }
  function D1(e, t, n, r) {
    var a = t.interleaved
    a === null ? ((n.next = n), bv(t)) : ((n.next = a.next), (a.next = n)),
      (t.interleaved = n)
  }
  function _1(e, t, n, r) {
    var a = t.interleaved
    return (
      a === null ? ((n.next = n), bv(t)) : ((n.next = a.next), (a.next = n)),
      (t.interleaved = n),
      qc(e, r)
    )
  }
  function lr(e, t) {
    return qc(e, t)
  }
  var O1 = qc
  function qc(e, t) {
    e.lanes = Ie(e.lanes, t)
    var n = e.alternate
    n !== null && (n.lanes = Ie(n.lanes, t)),
      n === null && (e.flags & (en | Da)) !== we && U0(e)
    for (var r = e, a = e.return; a !== null; )
      (a.childLanes = Ie(a.childLanes, t)),
        (n = a.alternate),
        n !== null
          ? (n.childLanes = Ie(n.childLanes, t))
          : (a.flags & (en | Da)) !== we && U0(e),
        (r = a),
        (a = a.return)
    if (r.tag === L) {
      var o = r.stateNode
      return o
    } else return null
  }
  var Ub = 0,
    Fb = 1,
    Qc = 2,
    Sv = 3,
    Kc = !1,
    Ev,
    Xc
  ;(Ev = !1), (Xc = null)
  function Cv(e) {
    var t = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: Y },
      effects: null,
    }
    e.updateQueue = t
  }
  function jb(e, t) {
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
  function za(e, t) {
    var n = {
      eventTime: e,
      lane: t,
      tag: Ub,
      payload: null,
      callback: null,
      next: null,
    }
    return n
  }
  function gi(e, t, n) {
    var r = e.updateQueue
    if (r === null) return null
    var a = r.shared
    if (
      (Xc === a &&
        !Ev &&
        (f(
          'An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.'
        ),
        (Ev = !0)),
      O_())
    ) {
      var o = a.pending
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (a.pending = t),
        O1(e, n)
      )
    } else return _1(e, a, t, n)
  }
  function Jc(e, t, n) {
    var r = t.updateQueue
    if (r !== null) {
      var a = r.shared
      if (eg(n)) {
        var o = a.lanes
        o = ng(o, e.pendingLanes)
        var l = Ie(o, n)
        ;(a.lanes = l), bp(e, l)
      }
    }
  }
  function Rv(e, t) {
    var n = e.updateQueue,
      r = e.alternate
    if (r !== null) {
      var a = r.updateQueue
      if (n === a) {
        var o = null,
          l = null,
          s = n.firstBaseUpdate
        if (s !== null) {
          var p = s
          do {
            var m = {
              eventTime: p.eventTime,
              lane: p.lane,
              tag: p.tag,
              payload: p.payload,
              callback: p.callback,
              next: null,
            }
            l === null ? (o = l = m) : ((l.next = m), (l = m)), (p = p.next)
          } while (p !== null)
          l === null ? (o = l = t) : ((l.next = t), (l = t))
        } else o = l = t
        ;(n = {
          baseState: a.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: l,
          shared: a.shared,
          effects: a.effects,
        }),
          (e.updateQueue = n)
        return
      }
    }
    var g = n.lastBaseUpdate
    g === null ? (n.firstBaseUpdate = t) : (g.next = t), (n.lastBaseUpdate = t)
  }
  function M1(e, t, n, r, a, o) {
    switch (n.tag) {
      case Fb: {
        var l = n.payload
        if (typeof l == 'function') {
          Mb()
          var s = l.call(o, r, a)
          {
            if (e.mode & tn) {
              Cn(!0)
              try {
                l.call(o, r, a)
              } finally {
                Cn(!1)
              }
            }
            Lb()
          }
          return s
        }
        return l
      }
      case Sv:
        e.flags = (e.flags & ~Xn) | pt
      case Ub: {
        var p = n.payload,
          m
        if (typeof p == 'function') {
          Mb(), (m = p.call(o, r, a))
          {
            if (e.mode & tn) {
              Cn(!0)
              try {
                p.call(o, r, a)
              } finally {
                Cn(!1)
              }
            }
            Lb()
          }
        } else m = p
        return m == null ? r : Xe({}, r, m)
      }
      case Qc:
        return (Kc = !0), r
    }
    return r
  }
  function Zc(e, t, n, r) {
    var a = e.updateQueue
    ;(Kc = !1), (Xc = a.shared)
    var o = a.firstBaseUpdate,
      l = a.lastBaseUpdate,
      s = a.shared.pending
    if (s !== null) {
      a.shared.pending = null
      var p = s,
        m = p.next
      ;(p.next = null), l === null ? (o = m) : (l.next = m), (l = p)
      var g = e.alternate
      if (g !== null) {
        var N = g.updateQueue,
          T = N.lastBaseUpdate
        T !== l &&
          (T === null ? (N.firstBaseUpdate = m) : (T.next = m),
          (N.lastBaseUpdate = p))
      }
    }
    if (o !== null) {
      var A = a.baseState,
        k = Y,
        H = null,
        ue = null,
        Se = null,
        ye = o
      do {
        var tt = ye.lane,
          Ge = ye.eventTime
        if (Vo(r, tt)) {
          if (Se !== null) {
            var z = {
              eventTime: Ge,
              lane: Rn,
              tag: ye.tag,
              payload: ye.payload,
              callback: ye.callback,
              next: null,
            }
            Se = Se.next = z
          }
          A = M1(e, a, ye, A, t, n)
          var M = ye.callback
          if (M !== null && ye.lane !== Rn) {
            e.flags |= $d
            var W = a.effects
            W === null ? (a.effects = [ye]) : W.push(ye)
          }
        } else {
          var O = {
            eventTime: Ge,
            lane: tt,
            tag: ye.tag,
            payload: ye.payload,
            callback: ye.callback,
            next: null,
          }
          Se === null ? ((ue = Se = O), (H = A)) : (Se = Se.next = O),
            (k = Ie(k, tt))
        }
        if (((ye = ye.next), ye === null)) {
          if (((s = a.shared.pending), s === null)) break
          var se = s,
            re = se.next
          ;(se.next = null),
            (ye = re),
            (a.lastBaseUpdate = se),
            (a.shared.pending = null)
        }
      } while (!0)
      Se === null && (H = A),
        (a.baseState = H),
        (a.firstBaseUpdate = ue),
        (a.lastBaseUpdate = Se)
      var Oe = a.shared.interleaved
      if (Oe !== null) {
        var je = Oe
        do (k = Ie(k, je.lane)), (je = je.next)
        while (je !== Oe)
      } else o === null && (a.shared.lanes = Y)
      hs(k), (e.lanes = k), (e.memoizedState = A)
    }
    Xc = null
  }
  function L1(e, t) {
    if (typeof e != 'function')
      throw new Error(
        'Invalid argument passed as callback. Expected a function. Instead ' +
          ('received: ' + e)
      )
    e.call(t)
  }
  function Hb() {
    Kc = !1
  }
  function ef() {
    return Kc
  }
  function zb(e, t, n) {
    var r = t.effects
    if (((t.effects = null), r !== null))
      for (var a = 0; a < r.length; a++) {
        var o = r[a],
          l = o.callback
        l !== null && ((o.callback = null), L1(l, n))
      }
  }
  var xv = {},
    $b = new i.Component().refs,
    Tv,
    Nv,
    wv,
    Dv,
    _v,
    Pb,
    tf,
    Ov,
    Mv,
    Lv
  {
    ;(Tv = new Set()),
      (Nv = new Set()),
      (wv = new Set()),
      (Dv = new Set()),
      (Ov = new Set()),
      (_v = new Set()),
      (Mv = new Set()),
      (Lv = new Set())
    var Bb = new Set()
    ;(tf = function (e, t) {
      if (!(e === null || typeof e == 'function')) {
        var n = t + '_' + e
        Bb.has(n) ||
          (Bb.add(n),
          f(
            '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
            t,
            e
          ))
      }
    }),
      (Pb = function (e, t) {
        if (t === void 0) {
          var n = ft(e) || 'Component'
          _v.has(n) ||
            (_v.add(n),
            f(
              '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.',
              n
            ))
        }
      }),
      Object.defineProperty(xv, '_processChildContext', {
        enumerable: !1,
        value: function () {
          throw new Error(
            "_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."
          )
        },
      }),
      Object.freeze(xv)
  }
  function Av(e, t, n, r) {
    var a = e.memoizedState,
      o = n(r, a)
    {
      if (e.mode & tn) {
        Cn(!0)
        try {
          o = n(r, a)
        } finally {
          Cn(!1)
        }
      }
      Pb(t, o)
    }
    var l = o == null ? a : Xe({}, a, o)
    if (((e.memoizedState = l), e.lanes === Y)) {
      var s = e.updateQueue
      s.baseState = l
    }
  }
  var kv = {
    isMounted: PR,
    enqueueSetState: function (e, t, n) {
      var r = Uo(e),
        a = er(),
        o = Ni(r),
        l = za(a, o)
      ;(l.payload = t), n != null && (tf(n, 'setState'), (l.callback = n))
      var s = gi(r, l, o)
      s !== null && (pn(s, r, o, a), Jc(s, r, o)), qd(r, o)
    },
    enqueueReplaceState: function (e, t, n) {
      var r = Uo(e),
        a = er(),
        o = Ni(r),
        l = za(a, o)
      ;(l.tag = Fb),
        (l.payload = t),
        n != null && (tf(n, 'replaceState'), (l.callback = n))
      var s = gi(r, l, o)
      s !== null && (pn(s, r, o, a), Jc(s, r, o)), qd(r, o)
    },
    enqueueForceUpdate: function (e, t) {
      var n = Uo(e),
        r = er(),
        a = Ni(n),
        o = za(r, a)
      ;(o.tag = Qc), t != null && (tf(t, 'forceUpdate'), (o.callback = t))
      var l = gi(n, o, a)
      l !== null && (pn(l, n, a, r), Jc(l, n, a)), gx(n, a)
    },
  }
  function Vb(e, t, n, r, a, o, l) {
    var s = e.stateNode
    if (typeof s.shouldComponentUpdate == 'function') {
      var p = s.shouldComponentUpdate(r, o, l)
      {
        if (e.mode & tn) {
          Cn(!0)
          try {
            p = s.shouldComponentUpdate(r, o, l)
          } finally {
            Cn(!1)
          }
        }
        p === void 0 &&
          f(
            '%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.',
            ft(t) || 'Component'
          )
      }
      return p
    }
    return t.prototype && t.prototype.isPureReactComponent
      ? !Ru(n, r) || !Ru(a, o)
      : !0
  }
  function A1(e, t, n) {
    var r = e.stateNode
    {
      var a = ft(t) || 'Component',
        o = r.render
      o ||
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
          !Mv.has(t) &&
          (Mv.add(t),
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
            ft(t) || 'A pure component'
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
      var l = r.props !== n
      r.props !== void 0 &&
        l &&
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
          !wv.has(t) &&
          (wv.add(t),
          f(
            '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.',
            ft(t)
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
      var s = r.state
      s &&
        (typeof s != 'object' || dt(s)) &&
        f('%s.state: must be set to an object or null', a),
        typeof r.getChildContext == 'function' &&
          typeof t.childContextTypes != 'object' &&
          f(
            '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',
            a
          )
    }
  }
  function Yb(e, t) {
    ;(t.updater = kv),
      (e.stateNode = t),
      FR(t, e),
      (t._reactInternalInstance = xv)
  }
  function Ib(e, t, n) {
    var r = !1,
      a = Cr,
      o = Cr,
      l = t.contextType
    if ('contextType' in t) {
      var s =
        l === null ||
        (l !== void 0 && l.$$typeof === ct && l._context === void 0)
      if (!s && !Lv.has(t)) {
        Lv.add(t)
        var p = ''
        l === void 0
          ? (p =
              ' However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.')
          : typeof l != 'object'
          ? (p = ' However, it is set to a ' + typeof l + '.')
          : l.$$typeof === Qe
          ? (p = ' Did you accidentally pass the Context.Provider instead?')
          : l._context !== void 0
          ? (p = ' Did you accidentally pass the Context.Consumer instead?')
          : (p =
              ' However, it is set to an object with keys {' +
              Object.keys(l).join(', ') +
              '}.'),
          f(
            '%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s',
            ft(t) || 'Component',
            p
          )
      }
    }
    if (typeof l == 'object' && l !== null) o = nn(l)
    else {
      a = Zo(e, t, !0)
      var m = t.contextTypes
      ;(r = m != null), (o = r ? el(e, a) : Cr)
    }
    var g = new t(n, o)
    if (e.mode & tn) {
      Cn(!0)
      try {
        g = new t(n, o)
      } finally {
        Cn(!1)
      }
    }
    var N = (e.memoizedState =
      g.state !== null && g.state !== void 0 ? g.state : null)
    Yb(e, g)
    {
      if (typeof t.getDerivedStateFromProps == 'function' && N === null) {
        var T = ft(t) || 'Component'
        Nv.has(T) ||
          (Nv.add(T),
          f(
            '`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',
            T,
            g.state === null ? 'null' : 'undefined',
            T
          ))
      }
      if (
        typeof t.getDerivedStateFromProps == 'function' ||
        typeof g.getSnapshotBeforeUpdate == 'function'
      ) {
        var A = null,
          k = null,
          H = null
        if (
          (typeof g.componentWillMount == 'function' &&
          g.componentWillMount.__suppressDeprecationWarning !== !0
            ? (A = 'componentWillMount')
            : typeof g.UNSAFE_componentWillMount == 'function' &&
              (A = 'UNSAFE_componentWillMount'),
          typeof g.componentWillReceiveProps == 'function' &&
          g.componentWillReceiveProps.__suppressDeprecationWarning !== !0
            ? (k = 'componentWillReceiveProps')
            : typeof g.UNSAFE_componentWillReceiveProps == 'function' &&
              (k = 'UNSAFE_componentWillReceiveProps'),
          typeof g.componentWillUpdate == 'function' &&
          g.componentWillUpdate.__suppressDeprecationWarning !== !0
            ? (H = 'componentWillUpdate')
            : typeof g.UNSAFE_componentWillUpdate == 'function' &&
              (H = 'UNSAFE_componentWillUpdate'),
          A !== null || k !== null || H !== null)
        ) {
          var ue = ft(t) || 'Component',
            Se =
              typeof t.getDerivedStateFromProps == 'function'
                ? 'getDerivedStateFromProps()'
                : 'getSnapshotBeforeUpdate()'
          Dv.has(ue) ||
            (Dv.add(ue),
            f(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
              ue,
              Se,
              A !== null
                ? `
  ` + A
                : '',
              k !== null
                ? `
  ` + k
                : '',
              H !== null
                ? `
  ` + H
                : ''
            ))
        }
      }
    }
    return r && hb(e, a, o), g
  }
  function k1(e, t) {
    var n = t.state
    typeof t.componentWillMount == 'function' && t.componentWillMount(),
      typeof t.UNSAFE_componentWillMount == 'function' &&
        t.UNSAFE_componentWillMount(),
      n !== t.state &&
        (f(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          Pe(e) || 'Component'
        ),
        kv.enqueueReplaceState(t, t.state, null))
  }
  function Wb(e, t, n, r) {
    var a = t.state
    if (
      (typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== a)
    ) {
      {
        var o = Pe(e) || 'Component'
        Tv.has(o) ||
          (Tv.add(o),
          f(
            "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
            o
          ))
      }
      kv.enqueueReplaceState(t, t.state, null)
    }
  }
  function Uv(e, t, n, r) {
    A1(e, t, n)
    var a = e.stateNode
    ;(a.props = n), (a.state = e.memoizedState), (a.refs = $b), Cv(e)
    var o = t.contextType
    if (typeof o == 'object' && o !== null) a.context = nn(o)
    else {
      var l = Zo(e, t, !0)
      a.context = el(e, l)
    }
    {
      if (a.state === n) {
        var s = ft(t) || 'Component'
        Ov.has(s) ||
          (Ov.add(s),
          f(
            "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
            s
          ))
      }
      e.mode & tn && Br.recordLegacyContextWarning(e, a),
        Br.recordUnsafeLifecycleWarnings(e, a)
    }
    a.state = e.memoizedState
    var p = t.getDerivedStateFromProps
    if (
      (typeof p == 'function' && (Av(e, t, p, n), (a.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps != 'function' &&
        typeof a.getSnapshotBeforeUpdate != 'function' &&
        (typeof a.UNSAFE_componentWillMount == 'function' ||
          typeof a.componentWillMount == 'function') &&
        (k1(e, a), Zc(e, n, a, r), (a.state = e.memoizedState)),
      typeof a.componentDidMount == 'function')
    ) {
      var m = rt
      ;(m |= Vi), (e.mode & ia) !== De && (m |= _a), (e.flags |= m)
    }
  }
  function U1(e, t, n, r) {
    var a = e.stateNode,
      o = e.memoizedProps
    a.props = o
    var l = a.context,
      s = t.contextType,
      p = Cr
    if (typeof s == 'object' && s !== null) p = nn(s)
    else {
      var m = Zo(e, t, !0)
      p = el(e, m)
    }
    var g = t.getDerivedStateFromProps,
      N =
        typeof g == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    !N &&
      (typeof a.UNSAFE_componentWillReceiveProps == 'function' ||
        typeof a.componentWillReceiveProps == 'function') &&
      (o !== n || l !== p) &&
      Wb(e, a, n, p),
      Hb()
    var T = e.memoizedState,
      A = (a.state = T)
    if (
      (Zc(e, n, a, r),
      (A = e.memoizedState),
      o === n && T === A && !Fc() && !ef())
    ) {
      if (typeof a.componentDidMount == 'function') {
        var k = rt
        ;(k |= Vi), (e.mode & ia) !== De && (k |= _a), (e.flags |= k)
      }
      return !1
    }
    typeof g == 'function' && (Av(e, t, g, n), (A = e.memoizedState))
    var H = ef() || Vb(e, t, o, n, T, A, p)
    if (H) {
      if (
        (!N &&
          (typeof a.UNSAFE_componentWillMount == 'function' ||
            typeof a.componentWillMount == 'function') &&
          (typeof a.componentWillMount == 'function' && a.componentWillMount(),
          typeof a.UNSAFE_componentWillMount == 'function' &&
            a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == 'function')
      ) {
        var ue = rt
        ;(ue |= Vi), (e.mode & ia) !== De && (ue |= _a), (e.flags |= ue)
      }
    } else {
      if (typeof a.componentDidMount == 'function') {
        var Se = rt
        ;(Se |= Vi), (e.mode & ia) !== De && (Se |= _a), (e.flags |= Se)
      }
      ;(e.memoizedProps = n), (e.memoizedState = A)
    }
    return (a.props = n), (a.state = A), (a.context = p), H
  }
  function F1(e, t, n, r, a) {
    var o = t.stateNode
    jb(e, t)
    var l = t.memoizedProps,
      s = t.type === t.elementType ? l : Vr(t.type, l)
    o.props = s
    var p = t.pendingProps,
      m = o.context,
      g = n.contextType,
      N = Cr
    if (typeof g == 'object' && g !== null) N = nn(g)
    else {
      var T = Zo(t, n, !0)
      N = el(t, T)
    }
    var A = n.getDerivedStateFromProps,
      k =
        typeof A == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'
    !k &&
      (typeof o.UNSAFE_componentWillReceiveProps == 'function' ||
        typeof o.componentWillReceiveProps == 'function') &&
      (l !== p || m !== N) &&
      Wb(t, o, r, N),
      Hb()
    var H = t.memoizedState,
      ue = (o.state = H)
    if (
      (Zc(t, r, o, a),
      (ue = t.memoizedState),
      l === p && H === ue && !Fc() && !ef() && !Kt)
    )
      return (
        typeof o.componentDidUpdate == 'function' &&
          (l !== e.memoizedProps || H !== e.memoizedState) &&
          (t.flags |= rt),
        typeof o.getSnapshotBeforeUpdate == 'function' &&
          (l !== e.memoizedProps || H !== e.memoizedState) &&
          (t.flags |= Pi),
        !1
      )
    typeof A == 'function' && (Av(t, n, A, r), (ue = t.memoizedState))
    var Se = ef() || Vb(t, n, s, r, H, ue, N) || Kt
    return (
      Se
        ? (!k &&
            (typeof o.UNSAFE_componentWillUpdate == 'function' ||
              typeof o.componentWillUpdate == 'function') &&
            (typeof o.componentWillUpdate == 'function' &&
              o.componentWillUpdate(r, ue, N),
            typeof o.UNSAFE_componentWillUpdate == 'function' &&
              o.UNSAFE_componentWillUpdate(r, ue, N)),
          typeof o.componentDidUpdate == 'function' && (t.flags |= rt),
          typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= Pi))
        : (typeof o.componentDidUpdate == 'function' &&
            (l !== e.memoizedProps || H !== e.memoizedState) &&
            (t.flags |= rt),
          typeof o.getSnapshotBeforeUpdate == 'function' &&
            (l !== e.memoizedProps || H !== e.memoizedState) &&
            (t.flags |= Pi),
          (t.memoizedProps = r),
          (t.memoizedState = ue)),
      (o.props = r),
      (o.state = ue),
      (o.context = N),
      Se
    )
  }
  var Fv,
    jv,
    Hv,
    zv,
    $v,
    Gb = function (e, t) {}
  ;(Fv = !1),
    (jv = !1),
    (Hv = {}),
    (zv = {}),
    ($v = {}),
    (Gb = function (e, t) {
      if (
        !(e === null || typeof e != 'object') &&
        !(!e._store || e._store.validated || e.key != null)
      ) {
        if (typeof e._store != 'object')
          throw new Error(
            'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.'
          )
        e._store.validated = !0
        var n = Pe(t) || 'Component'
        zv[n] ||
          ((zv[n] = !0),
          f(
            'Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'
          ))
      }
    })
  function Yu(e, t, n) {
    var r = n.ref
    if (r !== null && typeof r != 'function' && typeof r != 'object') {
      if (
        (e.mode & tn || hn) &&
        !(n._owner && n._self && n._owner.stateNode !== n._self)
      ) {
        var a = Pe(e) || 'Component'
        Hv[a] ||
          (f(
            'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
            r
          ),
          (Hv[a] = !0))
      }
      if (n._owner) {
        var o = n._owner,
          l
        if (o) {
          var s = o
          if (s.tag !== C)
            throw new Error(
              'Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref'
            )
          l = s.stateNode
        }
        if (!l)
          throw new Error(
            'Missing owner for string ref ' +
              r +
              '. This error is likely caused by a bug in React. Please file an issue.'
          )
        var p = l
        P(r, 'ref')
        var m = '' + r
        if (
          t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === m
        )
          return t.ref
        var g = function (N) {
          var T = p.refs
          T === $b && (T = p.refs = {}), N === null ? delete T[m] : (T[m] = N)
        }
        return (g._stringRef = m), g
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
  function nf(e, t) {
    var n = Object.prototype.toString.call(t)
    throw new Error(
      'Objects are not valid as a React child (found: ' +
        (n === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : n) +
        '). If you meant to render a collection of children, use an array instead.'
    )
  }
  function rf(e) {
    {
      var t = Pe(e) || 'Component'
      if ($v[t]) return
      ;($v[t] = !0),
        f(
          'Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.'
        )
    }
  }
  function qb(e) {
    var t = e._payload,
      n = e._init
    return n(t)
  }
  function Qb(e) {
    function t(O, z) {
      if (!!e) {
        var M = O.deletions
        M === null ? ((O.deletions = [z]), (O.flags |= $i)) : M.push(z)
      }
    }
    function n(O, z) {
      if (!e) return null
      for (var M = z; M !== null; ) t(O, M), (M = M.sibling)
      return null
    }
    function r(O, z) {
      for (var M = new Map(), W = z; W !== null; )
        W.key !== null ? M.set(W.key, W) : M.set(W.index, W), (W = W.sibling)
      return M
    }
    function a(O, z) {
      var M = vo(O, z)
      return (M.index = 0), (M.sibling = null), M
    }
    function o(O, z, M) {
      if (((O.index = M), !e)) return (O.flags |= Fy), z
      var W = O.alternate
      if (W !== null) {
        var se = W.index
        return se < z ? ((O.flags |= en), z) : se
      } else return (O.flags |= en), z
    }
    function l(O) {
      return e && O.alternate === null && (O.flags |= en), O
    }
    function s(O, z, M, W) {
      if (z === null || z.tag !== $) {
        var se = pm(M, O.mode, W)
        return (se.return = O), se
      } else {
        var re = a(z, M)
        return (re.return = O), re
      }
    }
    function p(O, z, M, W) {
      var se = M.type
      if (se === I) return g(O, z, M.props.children, W, M.key)
      if (
        z !== null &&
        (z.elementType === se ||
          z0(z, M) ||
          (typeof se == 'object' &&
            se !== null &&
            se.$$typeof === Ke &&
            qb(se) === z.type))
      ) {
        var re = a(z, M.props)
        return (
          (re.ref = Yu(O, z, M)),
          (re.return = O),
          (re._debugSource = M._source),
          (re._debugOwner = M._owner),
          re
        )
      }
      var Oe = dm(M, O.mode, W)
      return (Oe.ref = Yu(O, z, M)), (Oe.return = O), Oe
    }
    function m(O, z, M, W) {
      if (
        z === null ||
        z.tag !== V ||
        z.stateNode.containerInfo !== M.containerInfo ||
        z.stateNode.implementation !== M.implementation
      ) {
        var se = vm(M, O.mode, W)
        return (se.return = O), se
      } else {
        var re = a(z, M.children || [])
        return (re.return = O), re
      }
    }
    function g(O, z, M, W, se) {
      if (z === null || z.tag !== _) {
        var re = Di(M, O.mode, W, se)
        return (re.return = O), re
      } else {
        var Oe = a(z, M)
        return (Oe.return = O), Oe
      }
    }
    function N(O, z, M) {
      if ((typeof z == 'string' && z !== '') || typeof z == 'number') {
        var W = pm('' + z, O.mode, M)
        return (W.return = O), W
      }
      if (typeof z == 'object' && z !== null) {
        switch (z.$$typeof) {
          case ta: {
            var se = dm(z, O.mode, M)
            return (se.ref = Yu(O, null, z)), (se.return = O), se
          }
          case S: {
            var re = vm(z, O.mode, M)
            return (re.return = O), re
          }
          case Ke: {
            var Oe = z._payload,
              je = z._init
            return N(O, je(Oe), M)
          }
        }
        if (dt(z) || Ea(z)) {
          var Et = Di(z, O.mode, M, null)
          return (Et.return = O), Et
        }
        nf(O, z)
      }
      return typeof z == 'function' && rf(O), null
    }
    function T(O, z, M, W) {
      var se = z !== null ? z.key : null
      if ((typeof M == 'string' && M !== '') || typeof M == 'number')
        return se !== null ? null : s(O, z, '' + M, W)
      if (typeof M == 'object' && M !== null) {
        switch (M.$$typeof) {
          case ta:
            return M.key === se ? p(O, z, M, W) : null
          case S:
            return M.key === se ? m(O, z, M, W) : null
          case Ke: {
            var re = M._payload,
              Oe = M._init
            return T(O, z, Oe(re), W)
          }
        }
        if (dt(M) || Ea(M)) return se !== null ? null : g(O, z, M, W, null)
        nf(O, M)
      }
      return typeof M == 'function' && rf(O), null
    }
    function A(O, z, M, W, se) {
      if ((typeof W == 'string' && W !== '') || typeof W == 'number') {
        var re = O.get(M) || null
        return s(z, re, '' + W, se)
      }
      if (typeof W == 'object' && W !== null) {
        switch (W.$$typeof) {
          case ta: {
            var Oe = O.get(W.key === null ? M : W.key) || null
            return p(z, Oe, W, se)
          }
          case S: {
            var je = O.get(W.key === null ? M : W.key) || null
            return m(z, je, W, se)
          }
          case Ke:
            var Et = W._payload,
              ut = W._init
            return A(O, z, M, ut(Et), se)
        }
        if (dt(W) || Ea(W)) {
          var Qt = O.get(M) || null
          return g(z, Qt, W, se, null)
        }
        nf(z, W)
      }
      return typeof W == 'function' && rf(z), null
    }
    function k(O, z, M) {
      {
        if (typeof O != 'object' || O === null) return z
        switch (O.$$typeof) {
          case ta:
          case S:
            Gb(O, M)
            var W = O.key
            if (typeof W != 'string') break
            if (z === null) {
              ;(z = new Set()), z.add(W)
              break
            }
            if (!z.has(W)) {
              z.add(W)
              break
            }
            f(
              'Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.',
              W
            )
            break
          case Ke:
            var se = O._payload,
              re = O._init
            k(re(se), z, M)
            break
        }
      }
      return z
    }
    function H(O, z, M, W) {
      for (var se = null, re = 0; re < M.length; re++) {
        var Oe = M[re]
        se = k(Oe, se, O)
      }
      for (
        var je = null, Et = null, ut = z, Qt = 0, st = 0, It = null;
        ut !== null && st < M.length;
        st++
      ) {
        ut.index > st ? ((It = ut), (ut = null)) : (It = ut.sibling)
        var Wn = T(O, ut, M[st], W)
        if (Wn === null) {
          ut === null && (ut = It)
          break
        }
        e && ut && Wn.alternate === null && t(O, ut),
          (Qt = o(Wn, Qt, st)),
          Et === null ? (je = Wn) : (Et.sibling = Wn),
          (Et = Wn),
          (ut = It)
      }
      if (st === M.length) {
        if ((n(O, ut), _n())) {
          var Fn = st
          eo(O, Fn)
        }
        return je
      }
      if (ut === null) {
        for (; st < M.length; st++) {
          var xr = N(O, M[st], W)
          xr !== null &&
            ((Qt = o(xr, Qt, st)),
            Et === null ? (je = xr) : (Et.sibling = xr),
            (Et = xr))
        }
        if (_n()) {
          var tr = st
          eo(O, tr)
        }
        return je
      }
      for (var nr = r(O, ut); st < M.length; st++) {
        var Gn = A(nr, O, st, M[st], W)
        Gn !== null &&
          (e &&
            Gn.alternate !== null &&
            nr.delete(Gn.key === null ? st : Gn.key),
          (Qt = o(Gn, Qt, st)),
          Et === null ? (je = Gn) : (Et.sibling = Gn),
          (Et = Gn))
      }
      if (
        (e &&
          nr.forEach(function (Cl) {
            return t(O, Cl)
          }),
        _n())
      ) {
        var Ia = st
        eo(O, Ia)
      }
      return je
    }
    function ue(O, z, M, W) {
      var se = Ea(M)
      if (typeof se != 'function')
        throw new Error(
          'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.'
        )
      {
        typeof Symbol == 'function' &&
          M[Symbol.toStringTag] === 'Generator' &&
          (jv ||
            f(
              'Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.'
            ),
          (jv = !0)),
          M.entries === se &&
            (Fv ||
              f(
                'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
              ),
            (Fv = !0))
        var re = se.call(M)
        if (re)
          for (var Oe = null, je = re.next(); !je.done; je = re.next()) {
            var Et = je.value
            Oe = k(Et, Oe, O)
          }
      }
      var ut = se.call(M)
      if (ut == null)
        throw new Error('An iterable object provided no iterator.')
      for (
        var Qt = null,
          st = null,
          It = z,
          Wn = 0,
          Fn = 0,
          xr = null,
          tr = ut.next();
        It !== null && !tr.done;
        Fn++, tr = ut.next()
      ) {
        It.index > Fn ? ((xr = It), (It = null)) : (xr = It.sibling)
        var nr = T(O, It, tr.value, W)
        if (nr === null) {
          It === null && (It = xr)
          break
        }
        e && It && nr.alternate === null && t(O, It),
          (Wn = o(nr, Wn, Fn)),
          st === null ? (Qt = nr) : (st.sibling = nr),
          (st = nr),
          (It = xr)
      }
      if (tr.done) {
        if ((n(O, It), _n())) {
          var Gn = Fn
          eo(O, Gn)
        }
        return Qt
      }
      if (It === null) {
        for (; !tr.done; Fn++, tr = ut.next()) {
          var Ia = N(O, tr.value, W)
          Ia !== null &&
            ((Wn = o(Ia, Wn, Fn)),
            st === null ? (Qt = Ia) : (st.sibling = Ia),
            (st = Ia))
        }
        if (_n()) {
          var Cl = Fn
          eo(O, Cl)
        }
        return Qt
      }
      for (var Ss = r(O, It); !tr.done; Fn++, tr = ut.next()) {
        var ma = A(Ss, O, Fn, tr.value, W)
        ma !== null &&
          (e &&
            ma.alternate !== null &&
            Ss.delete(ma.key === null ? Fn : ma.key),
          (Wn = o(ma, Wn, Fn)),
          st === null ? (Qt = ma) : (st.sibling = ma),
          (st = ma))
      }
      if (
        (e &&
          Ss.forEach(function (KO) {
            return t(O, KO)
          }),
        _n())
      ) {
        var QO = Fn
        eo(O, QO)
      }
      return Qt
    }
    function Se(O, z, M, W) {
      if (z !== null && z.tag === $) {
        n(O, z.sibling)
        var se = a(z, M)
        return (se.return = O), se
      }
      n(O, z)
      var re = pm(M, O.mode, W)
      return (re.return = O), re
    }
    function ye(O, z, M, W) {
      for (var se = M.key, re = z; re !== null; ) {
        if (re.key === se) {
          var Oe = M.type
          if (Oe === I) {
            if (re.tag === _) {
              n(O, re.sibling)
              var je = a(re, M.props.children)
              return (
                (je.return = O),
                (je._debugSource = M._source),
                (je._debugOwner = M._owner),
                je
              )
            }
          } else if (
            re.elementType === Oe ||
            z0(re, M) ||
            (typeof Oe == 'object' &&
              Oe !== null &&
              Oe.$$typeof === Ke &&
              qb(Oe) === re.type)
          ) {
            n(O, re.sibling)
            var Et = a(re, M.props)
            return (
              (Et.ref = Yu(O, re, M)),
              (Et.return = O),
              (Et._debugSource = M._source),
              (Et._debugOwner = M._owner),
              Et
            )
          }
          n(O, re)
          break
        } else t(O, re)
        re = re.sibling
      }
      if (M.type === I) {
        var ut = Di(M.props.children, O.mode, W, M.key)
        return (ut.return = O), ut
      } else {
        var Qt = dm(M, O.mode, W)
        return (Qt.ref = Yu(O, z, M)), (Qt.return = O), Qt
      }
    }
    function tt(O, z, M, W) {
      for (var se = M.key, re = z; re !== null; ) {
        if (re.key === se)
          if (
            re.tag === V &&
            re.stateNode.containerInfo === M.containerInfo &&
            re.stateNode.implementation === M.implementation
          ) {
            n(O, re.sibling)
            var Oe = a(re, M.children || [])
            return (Oe.return = O), Oe
          } else {
            n(O, re)
            break
          }
        else t(O, re)
        re = re.sibling
      }
      var je = vm(M, O.mode, W)
      return (je.return = O), je
    }
    function Ge(O, z, M, W) {
      var se =
        typeof M == 'object' && M !== null && M.type === I && M.key === null
      if ((se && (M = M.props.children), typeof M == 'object' && M !== null)) {
        switch (M.$$typeof) {
          case ta:
            return l(ye(O, z, M, W))
          case S:
            return l(tt(O, z, M, W))
          case Ke:
            var re = M._payload,
              Oe = M._init
            return Ge(O, z, Oe(re), W)
        }
        if (dt(M)) return H(O, z, M, W)
        if (Ea(M)) return ue(O, z, M, W)
        nf(O, M)
      }
      return (typeof M == 'string' && M !== '') || typeof M == 'number'
        ? l(Se(O, z, '' + M, W))
        : (typeof M == 'function' && rf(O), n(O, z))
    }
    return Ge
  }
  var ol = Qb(!0),
    Kb = Qb(!1)
  function j1(e, t) {
    if (e !== null && t.child !== e.child)
      throw new Error('Resuming work not yet implemented.')
    if (t.child !== null) {
      var n = t.child,
        r = vo(n, n.pendingProps)
      for (t.child = r, r.return = t; n.sibling !== null; )
        (n = n.sibling), (r = r.sibling = vo(n, n.pendingProps)), (r.return = t)
      r.sibling = null
    }
  }
  function H1(e, t) {
    for (var n = e.child; n !== null; ) pO(n, t), (n = n.sibling)
  }
  var Iu = {},
    bi = vi(Iu),
    Wu = vi(Iu),
    af = vi(Iu)
  function of(e) {
    if (e === Iu)
      throw new Error(
        'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.'
      )
    return e
  }
  function Xb() {
    var e = of(af.current)
    return e
  }
  function Pv(e, t) {
    Yn(af, t, e), Yn(Wu, e, e), Yn(bi, Iu, e)
    var n = JN(t)
    Vn(bi, e), Yn(bi, n, e)
  }
  function ll(e) {
    Vn(bi, e), Vn(Wu, e), Vn(af, e)
  }
  function Bv() {
    var e = of(bi.current)
    return e
  }
  function Jb(e) {
    of(af.current)
    var t = of(bi.current),
      n = ZN(t, e.type)
    t !== n && (Yn(Wu, e, e), Yn(bi, n, e))
  }
  function Vv(e) {
    Wu.current === e && (Vn(bi, e), Vn(Wu, e))
  }
  var z1 = 0,
    Zb = 1,
    eS = 1,
    Gu = 2,
    Yr = vi(z1)
  function Yv(e, t) {
    return (e & t) !== 0
  }
  function ul(e) {
    return e & Zb
  }
  function Iv(e, t) {
    return (e & Zb) | t
  }
  function $1(e, t) {
    return e | t
  }
  function Si(e, t) {
    Yn(Yr, t, e)
  }
  function sl(e) {
    Vn(Yr, e)
  }
  function P1(e, t) {
    var n = e.memoizedState
    return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0)
  }
  function lf(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === K) {
        var n = t.memoizedState
        if (n !== null) {
          var r = n.dehydrated
          if (r === null || cb(r) || Xp(r)) return t
        }
      } else if (t.tag === Te && t.memoizedProps.revealOrder !== void 0) {
        var a = (t.flags & pt) !== we
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
  var ur = 0,
    on = 1,
    sa = 2,
    ln = 4,
    On = 8,
    Wv = []
  function Gv() {
    for (var e = 0; e < Wv.length; e++) {
      var t = Wv[e]
      t._workInProgressVersionPrimary = null
    }
    Wv.length = 0
  }
  function B1(e, t) {
    var n = t._getVersion,
      r = n(t._source)
    e.mutableSourceEagerHydrationData == null
      ? (e.mutableSourceEagerHydrationData = [t, r])
      : e.mutableSourceEagerHydrationData.push(t, r)
  }
  var ie = c.ReactCurrentDispatcher,
    qu = c.ReactCurrentBatchConfig,
    qv,
    cl
  qv = new Set()
  var oo = Y,
    St = null,
    un = null,
    sn = null,
    uf = !1,
    Qu = !1,
    Ku = 0,
    V1 = 0,
    Y1 = 25,
    B = null,
    Ar = null,
    Ei = -1,
    Qv = !1
  function mt() {
    {
      var e = B
      Ar === null ? (Ar = [e]) : Ar.push(e)
    }
  }
  function te() {
    {
      var e = B
      Ar !== null && (Ei++, Ar[Ei] !== e && I1(e))
    }
  }
  function fl(e) {
    e != null &&
      !dt(e) &&
      f(
        '%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.',
        B,
        typeof e
      )
  }
  function I1(e) {
    {
      var t = Pe(St)
      if (!qv.has(t) && (qv.add(t), Ar !== null)) {
        for (var n = '', r = 30, a = 0; a <= Ei; a++) {
          for (
            var o = Ar[a], l = a === Ei ? e : o, s = a + 1 + '. ' + o;
            s.length < r;

          )
            s += ' '
          ;(s +=
            l +
            `
`),
            (n += s)
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
  function In() {
    throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`)
  }
  function Kv(e, t) {
    if (Qv) return !1
    if (t === null)
      return (
        f(
          '%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.',
          B
        ),
        !1
      )
    e.length !== t.length &&
      f(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        B,
        '[' + t.join(', ') + ']',
        '[' + e.join(', ') + ']'
      )
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Er(e[n], t[n])) return !1
    return !0
  }
  function dl(e, t, n, r, a, o) {
    ;(oo = o),
      (St = t),
      (Ar = e !== null ? e._debugHookTypes : null),
      (Ei = -1),
      (Qv = e !== null && e.type !== t.type),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = Y),
      e !== null && e.memoizedState !== null
        ? (ie.current = CS)
        : Ar !== null
        ? (ie.current = ES)
        : (ie.current = SS)
    var l = n(r, a)
    if (Qu) {
      var s = 0
      do {
        if (((Qu = !1), (Ku = 0), s >= Y1))
          throw new Error(
            'Too many re-renders. React limits the number of renders to prevent an infinite loop.'
          )
        ;(s += 1),
          (Qv = !1),
          (un = null),
          (sn = null),
          (t.updateQueue = null),
          (Ei = -1),
          (ie.current = RS),
          (l = n(r, a))
      } while (Qu)
    }
    ;(ie.current = Ef), (t._debugHookTypes = Ar)
    var p = un !== null && un.next !== null
    if (
      ((oo = Y),
      (St = null),
      (un = null),
      (sn = null),
      (B = null),
      (Ar = null),
      (Ei = -1),
      e !== null &&
        (e.flags & Oa) !== (t.flags & Oa) &&
        (e.mode & Ze) !== De &&
        f(
          'Internal React error: Expected static flag was missing. Please notify the React team.'
        ),
      (uf = !1),
      p)
    )
      throw new Error(
        'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.'
      )
    return l
  }
  function pl() {
    var e = Ku !== 0
    return (Ku = 0), e
  }
  function tS(e, t, n) {
    ;(t.updateQueue = e.updateQueue),
      (t.mode & ia) !== De
        ? (t.flags &= ~(ec | _a | jr | rt))
        : (t.flags &= ~(jr | rt)),
      (e.lanes = lc(e.lanes, n))
  }
  function nS() {
    if (((ie.current = Ef), uf)) {
      for (var e = St.memoizedState; e !== null; ) {
        var t = e.queue
        t !== null && (t.pending = null), (e = e.next)
      }
      uf = !1
    }
    ;(oo = Y),
      (St = null),
      (un = null),
      (sn = null),
      (Ar = null),
      (Ei = -1),
      (B = null),
      (hS = !1),
      (Qu = !1),
      (Ku = 0)
  }
  function ca() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    }
    return sn === null ? (St.memoizedState = sn = e) : (sn = sn.next = e), sn
  }
  function kr() {
    var e
    if (un === null) {
      var t = St.alternate
      t !== null ? (e = t.memoizedState) : (e = null)
    } else e = un.next
    var n
    if ((sn === null ? (n = St.memoizedState) : (n = sn.next), n !== null))
      (sn = n), (n = sn.next), (un = e)
    else {
      if (e === null)
        throw new Error('Rendered more hooks than during the previous render.')
      un = e
      var r = {
        memoizedState: un.memoizedState,
        baseState: un.baseState,
        baseQueue: un.baseQueue,
        queue: un.queue,
        next: null,
      }
      sn === null ? (St.memoizedState = sn = r) : (sn = sn.next = r)
    }
    return sn
  }
  function rS() {
    return { lastEffect: null, stores: null }
  }
  function Xv(e, t) {
    return typeof t == 'function' ? t(e) : t
  }
  function Jv(e, t, n) {
    var r = ca(),
      a
    n !== void 0 ? (a = n(t)) : (a = t), (r.memoizedState = r.baseState = a)
    var o = {
      pending: null,
      interleaved: null,
      lanes: Y,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: a,
    }
    r.queue = o
    var l = (o.dispatch = Q1.bind(null, St, o))
    return [r.memoizedState, l]
  }
  function Zv(e, t, n) {
    var r = kr(),
      a = r.queue
    if (a === null)
      throw new Error(
        'Should have a queue. This is likely a bug in React. Please file an issue.'
      )
    a.lastRenderedReducer = e
    var o = un,
      l = o.baseQueue,
      s = a.pending
    if (s !== null) {
      if (l !== null) {
        var p = l.next,
          m = s.next
        ;(l.next = m), (s.next = p)
      }
      o.baseQueue !== l &&
        f(
          'Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.'
        ),
        (o.baseQueue = l = s),
        (a.pending = null)
    }
    if (l !== null) {
      var g = l.next,
        N = o.baseState,
        T = null,
        A = null,
        k = null,
        H = g
      do {
        var ue = H.lane
        if (Vo(oo, ue)) {
          if (k !== null) {
            var ye = {
              lane: Rn,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null,
            }
            k = k.next = ye
          }
          if (H.hasEagerState) N = H.eagerState
          else {
            var tt = H.action
            N = e(N, tt)
          }
        } else {
          var Se = {
            lane: ue,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null,
          }
          k === null ? ((A = k = Se), (T = N)) : (k = k.next = Se),
            (St.lanes = Ie(St.lanes, ue)),
            hs(ue)
        }
        H = H.next
      } while (H !== null && H !== g)
      k === null ? (T = N) : (k.next = A),
        Er(N, r.memoizedState) || rs(),
        (r.memoizedState = N),
        (r.baseState = T),
        (r.baseQueue = k),
        (a.lastRenderedState = N)
    }
    var Ge = a.interleaved
    if (Ge !== null) {
      var O = Ge
      do {
        var z = O.lane
        ;(St.lanes = Ie(St.lanes, z)), hs(z), (O = O.next)
      } while (O !== Ge)
    } else l === null && (a.lanes = Y)
    var M = a.dispatch
    return [r.memoizedState, M]
  }
  function eh(e, t, n) {
    var r = kr(),
      a = r.queue
    if (a === null)
      throw new Error(
        'Should have a queue. This is likely a bug in React. Please file an issue.'
      )
    a.lastRenderedReducer = e
    var o = a.dispatch,
      l = a.pending,
      s = r.memoizedState
    if (l !== null) {
      a.pending = null
      var p = l.next,
        m = p
      do {
        var g = m.action
        ;(s = e(s, g)), (m = m.next)
      } while (m !== p)
      Er(s, r.memoizedState) || rs(),
        (r.memoizedState = s),
        r.baseQueue === null && (r.baseState = s),
        (a.lastRenderedState = s)
    }
    return [s, o]
  }
  function gk(e, t, n) {}
  function bk(e, t, n) {}
  function th(e, t, n) {
    var r = St,
      a = ca(),
      o,
      l = _n()
    if (l) {
      if (n === void 0)
        throw new Error(
          'Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.'
        )
      ;(o = n()),
        cl ||
          (o !== n() &&
            (f(
              'The result of getServerSnapshot should be cached to avoid an infinite loop'
            ),
            (cl = !0)))
    } else {
      if (((o = t()), !cl)) {
        var s = t()
        Er(o, s) ||
          (f(
            'The result of getSnapshot should be cached to avoid an infinite loop'
          ),
          (cl = !0))
      }
      var p = zf()
      if (p === null)
        throw new Error(
          'Expected a work-in-progress root. This is a bug in React. Please file an issue.'
        )
      oc(p, oo) || aS(r, t, o)
    }
    a.memoizedState = o
    var m = { value: o, getSnapshot: t }
    return (
      (a.queue = m),
      pf(oS.bind(null, r, m, e), [e]),
      (r.flags |= jr),
      Xu(on | On, iS.bind(null, r, m, o, t), void 0, null),
      o
    )
  }
  function sf(e, t, n) {
    var r = St,
      a = kr(),
      o = t()
    if (!cl) {
      var l = t()
      Er(o, l) ||
        (f(
          'The result of getSnapshot should be cached to avoid an infinite loop'
        ),
        (cl = !0))
    }
    var s = a.memoizedState,
      p = !Er(s, o)
    p && ((a.memoizedState = o), rs())
    var m = a.queue
    if (
      (Zu(oS.bind(null, r, m, e), [e]),
      m.getSnapshot !== t || p || (sn !== null && sn.memoizedState.tag & on))
    ) {
      ;(r.flags |= jr), Xu(on | On, iS.bind(null, r, m, o, t), void 0, null)
      var g = zf()
      if (g === null)
        throw new Error(
          'Expected a work-in-progress root. This is a bug in React. Please file an issue.'
        )
      oc(g, oo) || aS(r, t, o)
    }
    return o
  }
  function aS(e, t, n) {
    e.flags |= Zs
    var r = { getSnapshot: t, value: n },
      a = St.updateQueue
    if (a === null) (a = rS()), (St.updateQueue = a), (a.stores = [r])
    else {
      var o = a.stores
      o === null ? (a.stores = [r]) : o.push(r)
    }
  }
  function iS(e, t, n, r) {
    ;(t.value = n), (t.getSnapshot = r), lS(t) && uS(e)
  }
  function oS(e, t, n) {
    var r = function () {
      lS(t) && uS(e)
    }
    return n(r)
  }
  function lS(e) {
    var t = e.getSnapshot,
      n = e.value
    try {
      var r = t()
      return !Er(n, r)
    } catch {
      return !0
    }
  }
  function uS(e) {
    var t = lr(e, Ae)
    t !== null && pn(t, e, Ae, Mt)
  }
  function cf(e) {
    var t = ca()
    typeof e == 'function' && (e = e()), (t.memoizedState = t.baseState = e)
    var n = {
      pending: null,
      interleaved: null,
      lanes: Y,
      dispatch: null,
      lastRenderedReducer: Xv,
      lastRenderedState: e,
    }
    t.queue = n
    var r = (n.dispatch = K1.bind(null, St, n))
    return [t.memoizedState, r]
  }
  function nh(e) {
    return Zv(Xv)
  }
  function rh(e) {
    return eh(Xv)
  }
  function Xu(e, t, n, r) {
    var a = { tag: e, create: t, destroy: n, deps: r, next: null },
      o = St.updateQueue
    if (o === null)
      (o = rS()), (St.updateQueue = o), (o.lastEffect = a.next = a)
    else {
      var l = o.lastEffect
      if (l === null) o.lastEffect = a.next = a
      else {
        var s = l.next
        ;(l.next = a), (a.next = s), (o.lastEffect = a)
      }
    }
    return a
  }
  function ah(e) {
    var t = ca()
    {
      var n = { current: e }
      return (t.memoizedState = n), n
    }
  }
  function ff(e) {
    var t = kr()
    return t.memoizedState
  }
  function Ju(e, t, n, r) {
    var a = ca(),
      o = r === void 0 ? null : r
    ;(St.flags |= e), (a.memoizedState = Xu(on | t, n, void 0, o))
  }
  function df(e, t, n, r) {
    var a = kr(),
      o = r === void 0 ? null : r,
      l = void 0
    if (un !== null) {
      var s = un.memoizedState
      if (((l = s.destroy), o !== null)) {
        var p = s.deps
        if (Kv(o, p)) {
          a.memoizedState = Xu(t, n, l, o)
          return
        }
      }
    }
    ;(St.flags |= e), (a.memoizedState = Xu(on | t, n, l, o))
  }
  function pf(e, t) {
    return (St.mode & ia) !== De
      ? Ju(ec | jr | Vd, On, e, t)
      : Ju(jr | Vd, On, e, t)
  }
  function Zu(e, t) {
    return df(jr, On, e, t)
  }
  function ih(e, t) {
    return Ju(rt, sa, e, t)
  }
  function vf(e, t) {
    return df(rt, sa, e, t)
  }
  function oh(e, t) {
    var n = rt
    return (n |= Vi), (St.mode & ia) !== De && (n |= _a), Ju(n, ln, e, t)
  }
  function hf(e, t) {
    return df(rt, ln, e, t)
  }
  function sS(e, t) {
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
      var o = e()
      return (
        (a.current = o),
        function () {
          a.current = null
        }
      )
    }
  }
  function lh(e, t, n) {
    typeof t != 'function' &&
      f(
        'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
        t !== null ? typeof t : 'null'
      )
    var r = n != null ? n.concat([e]) : null,
      a = rt
    return (
      (a |= Vi),
      (St.mode & ia) !== De && (a |= _a),
      Ju(a, ln, sS.bind(null, t, e), r)
    )
  }
  function mf(e, t, n) {
    typeof t != 'function' &&
      f(
        'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
        t !== null ? typeof t : 'null'
      )
    var r = n != null ? n.concat([e]) : null
    return df(rt, ln, sS.bind(null, t, e), r)
  }
  function W1(e, t) {}
  var yf = W1
  function uh(e, t) {
    var n = ca(),
      r = t === void 0 ? null : t
    return (n.memoizedState = [e, r]), e
  }
  function gf(e, t) {
    var n = kr(),
      r = t === void 0 ? null : t,
      a = n.memoizedState
    if (a !== null && r !== null) {
      var o = a[1]
      if (Kv(r, o)) return a[0]
    }
    return (n.memoizedState = [e, r]), e
  }
  function sh(e, t) {
    var n = ca(),
      r = t === void 0 ? null : t,
      a = e()
    return (n.memoizedState = [a, r]), a
  }
  function bf(e, t) {
    var n = kr(),
      r = t === void 0 ? null : t,
      a = n.memoizedState
    if (a !== null && r !== null) {
      var o = a[1]
      if (Kv(r, o)) return a[0]
    }
    var l = e()
    return (n.memoizedState = [l, r]), l
  }
  function ch(e) {
    var t = ca()
    return (t.memoizedState = e), e
  }
  function cS(e) {
    var t = kr(),
      n = un,
      r = n.memoizedState
    return dS(t, r, e)
  }
  function fS(e) {
    var t = kr()
    if (un === null) return (t.memoizedState = e), e
    var n = un.memoizedState
    return dS(t, n, e)
  }
  function dS(e, t, n) {
    var r = !Dx(oo)
    if (r) {
      if (!Er(n, t)) {
        var a = tg()
        ;(St.lanes = Ie(St.lanes, a)), hs(a), (e.baseState = !0)
      }
      return t
    } else
      return e.baseState && ((e.baseState = !1), rs()), (e.memoizedState = n), n
  }
  function G1(e, t, n) {
    var r = zr()
    xn(jx(r, La)), e(!0)
    var a = qu.transition
    qu.transition = {}
    var o = qu.transition
    qu.transition._updatedFibers = new Set()
    try {
      e(!1), t()
    } finally {
      if ((xn(r), (qu.transition = a), a === null && o._updatedFibers)) {
        var l = o._updatedFibers.size
        l > 10 &&
          y(
            'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
          ),
          o._updatedFibers.clear()
      }
    }
  }
  function fh() {
    var e = cf(!1),
      t = e[0],
      n = e[1],
      r = G1.bind(null, n),
      a = ca()
    return (a.memoizedState = r), [t, r]
  }
  function pS() {
    var e = nh(),
      t = e[0],
      n = kr(),
      r = n.memoizedState
    return [t, r]
  }
  function vS() {
    var e = rh(),
      t = e[0],
      n = kr(),
      r = n.memoizedState
    return [t, r]
  }
  var hS = !1
  function q1() {
    return hS
  }
  function dh() {
    var e = ca(),
      t = zf(),
      n = t.identifierPrefix,
      r
    if (_n()) {
      var a = u1()
      r = ':' + n + 'R' + a
      var o = Ku++
      o > 0 && (r += 'H' + o.toString(32)), (r += ':')
    } else {
      var l = V1++
      r = ':' + n + 'r' + l.toString(32) + ':'
    }
    return (e.memoizedState = r), r
  }
  function Sf() {
    var e = kr(),
      t = e.memoizedState
    return t
  }
  function Q1(e, t, n) {
    typeof arguments[3] == 'function' &&
      f(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      )
    var r = Ni(e),
      a = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }
    if (mS(e)) yS(t, a)
    else {
      var o = kb(e, t, a, r)
      if (o !== null) {
        var l = er()
        pn(o, e, r, l), gS(o, t, r)
      }
    }
    bS(e, r)
  }
  function K1(e, t, n) {
    typeof arguments[3] == 'function' &&
      f(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      )
    var r = Ni(e),
      a = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }
    if (mS(e)) yS(t, a)
    else {
      var o = e.alternate
      if (e.lanes === Y && (o === null || o.lanes === Y)) {
        var l = t.lastRenderedReducer
        if (l !== null) {
          var s
          ;(s = ie.current), (ie.current = Ir)
          try {
            var p = t.lastRenderedState,
              m = l(p, n)
            if (((a.hasEagerState = !0), (a.eagerState = m), Er(m, p))) {
              D1(e, t, a, r)
              return
            }
          } catch {
          } finally {
            ie.current = s
          }
        }
      }
      var g = kb(e, t, a, r)
      if (g !== null) {
        var N = er()
        pn(g, e, r, N), gS(g, t, r)
      }
    }
    bS(e, r)
  }
  function mS(e) {
    var t = e.alternate
    return e === St || (t !== null && t === St)
  }
  function yS(e, t) {
    Qu = uf = !0
    var n = e.pending
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t)
  }
  function gS(e, t, n) {
    if (eg(n)) {
      var r = t.lanes
      r = ng(r, e.pendingLanes)
      var a = Ie(r, n)
      ;(t.lanes = a), bp(e, a)
    }
  }
  function bS(e, t, n) {
    qd(e, t)
  }
  var Ef = {
      readContext: nn,
      useCallback: In,
      useContext: In,
      useEffect: In,
      useImperativeHandle: In,
      useInsertionEffect: In,
      useLayoutEffect: In,
      useMemo: In,
      useReducer: In,
      useRef: In,
      useState: In,
      useDebugValue: In,
      useDeferredValue: In,
      useTransition: In,
      useMutableSource: In,
      useSyncExternalStore: In,
      useId: In,
      unstable_isNewReconciler: Ue,
    },
    SS = null,
    ES = null,
    CS = null,
    RS = null,
    fa = null,
    Ir = null,
    Cf = null
  {
    var ph = function () {
        f(
          'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().'
        )
      },
      ke = function () {
        f(
          'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks'
        )
      }
    ;(SS = {
      readContext: function (e) {
        return nn(e)
      },
      useCallback: function (e, t) {
        return (B = 'useCallback'), mt(), fl(t), uh(e, t)
      },
      useContext: function (e) {
        return (B = 'useContext'), mt(), nn(e)
      },
      useEffect: function (e, t) {
        return (B = 'useEffect'), mt(), fl(t), pf(e, t)
      },
      useImperativeHandle: function (e, t, n) {
        return (B = 'useImperativeHandle'), mt(), fl(n), lh(e, t, n)
      },
      useInsertionEffect: function (e, t) {
        return (B = 'useInsertionEffect'), mt(), fl(t), ih(e, t)
      },
      useLayoutEffect: function (e, t) {
        return (B = 'useLayoutEffect'), mt(), fl(t), oh(e, t)
      },
      useMemo: function (e, t) {
        ;(B = 'useMemo'), mt(), fl(t)
        var n = ie.current
        ie.current = fa
        try {
          return sh(e, t)
        } finally {
          ie.current = n
        }
      },
      useReducer: function (e, t, n) {
        ;(B = 'useReducer'), mt()
        var r = ie.current
        ie.current = fa
        try {
          return Jv(e, t, n)
        } finally {
          ie.current = r
        }
      },
      useRef: function (e) {
        return (B = 'useRef'), mt(), ah(e)
      },
      useState: function (e) {
        ;(B = 'useState'), mt()
        var t = ie.current
        ie.current = fa
        try {
          return cf(e)
        } finally {
          ie.current = t
        }
      },
      useDebugValue: function (e, t) {
        return (B = 'useDebugValue'), mt(), void 0
      },
      useDeferredValue: function (e) {
        return (B = 'useDeferredValue'), mt(), ch(e)
      },
      useTransition: function () {
        return (B = 'useTransition'), mt(), fh()
      },
      useMutableSource: function (e, t, n) {
        return (B = 'useMutableSource'), mt(), void 0
      },
      useSyncExternalStore: function (e, t, n) {
        return (B = 'useSyncExternalStore'), mt(), th(e, t, n)
      },
      useId: function () {
        return (B = 'useId'), mt(), dh()
      },
      unstable_isNewReconciler: Ue,
    }),
      (ES = {
        readContext: function (e) {
          return nn(e)
        },
        useCallback: function (e, t) {
          return (B = 'useCallback'), te(), uh(e, t)
        },
        useContext: function (e) {
          return (B = 'useContext'), te(), nn(e)
        },
        useEffect: function (e, t) {
          return (B = 'useEffect'), te(), pf(e, t)
        },
        useImperativeHandle: function (e, t, n) {
          return (B = 'useImperativeHandle'), te(), lh(e, t, n)
        },
        useInsertionEffect: function (e, t) {
          return (B = 'useInsertionEffect'), te(), ih(e, t)
        },
        useLayoutEffect: function (e, t) {
          return (B = 'useLayoutEffect'), te(), oh(e, t)
        },
        useMemo: function (e, t) {
          ;(B = 'useMemo'), te()
          var n = ie.current
          ie.current = fa
          try {
            return sh(e, t)
          } finally {
            ie.current = n
          }
        },
        useReducer: function (e, t, n) {
          ;(B = 'useReducer'), te()
          var r = ie.current
          ie.current = fa
          try {
            return Jv(e, t, n)
          } finally {
            ie.current = r
          }
        },
        useRef: function (e) {
          return (B = 'useRef'), te(), ah(e)
        },
        useState: function (e) {
          ;(B = 'useState'), te()
          var t = ie.current
          ie.current = fa
          try {
            return cf(e)
          } finally {
            ie.current = t
          }
        },
        useDebugValue: function (e, t) {
          return (B = 'useDebugValue'), te(), void 0
        },
        useDeferredValue: function (e) {
          return (B = 'useDeferredValue'), te(), ch(e)
        },
        useTransition: function () {
          return (B = 'useTransition'), te(), fh()
        },
        useMutableSource: function (e, t, n) {
          return (B = 'useMutableSource'), te(), void 0
        },
        useSyncExternalStore: function (e, t, n) {
          return (B = 'useSyncExternalStore'), te(), th(e, t, n)
        },
        useId: function () {
          return (B = 'useId'), te(), dh()
        },
        unstable_isNewReconciler: Ue,
      }),
      (CS = {
        readContext: function (e) {
          return nn(e)
        },
        useCallback: function (e, t) {
          return (B = 'useCallback'), te(), gf(e, t)
        },
        useContext: function (e) {
          return (B = 'useContext'), te(), nn(e)
        },
        useEffect: function (e, t) {
          return (B = 'useEffect'), te(), Zu(e, t)
        },
        useImperativeHandle: function (e, t, n) {
          return (B = 'useImperativeHandle'), te(), mf(e, t, n)
        },
        useInsertionEffect: function (e, t) {
          return (B = 'useInsertionEffect'), te(), vf(e, t)
        },
        useLayoutEffect: function (e, t) {
          return (B = 'useLayoutEffect'), te(), hf(e, t)
        },
        useMemo: function (e, t) {
          ;(B = 'useMemo'), te()
          var n = ie.current
          ie.current = Ir
          try {
            return bf(e, t)
          } finally {
            ie.current = n
          }
        },
        useReducer: function (e, t, n) {
          ;(B = 'useReducer'), te()
          var r = ie.current
          ie.current = Ir
          try {
            return Zv(e, t, n)
          } finally {
            ie.current = r
          }
        },
        useRef: function (e) {
          return (B = 'useRef'), te(), ff()
        },
        useState: function (e) {
          ;(B = 'useState'), te()
          var t = ie.current
          ie.current = Ir
          try {
            return nh(e)
          } finally {
            ie.current = t
          }
        },
        useDebugValue: function (e, t) {
          return (B = 'useDebugValue'), te(), yf()
        },
        useDeferredValue: function (e) {
          return (B = 'useDeferredValue'), te(), cS(e)
        },
        useTransition: function () {
          return (B = 'useTransition'), te(), pS()
        },
        useMutableSource: function (e, t, n) {
          return (B = 'useMutableSource'), te(), void 0
        },
        useSyncExternalStore: function (e, t, n) {
          return (B = 'useSyncExternalStore'), te(), sf(e, t)
        },
        useId: function () {
          return (B = 'useId'), te(), Sf()
        },
        unstable_isNewReconciler: Ue,
      }),
      (RS = {
        readContext: function (e) {
          return nn(e)
        },
        useCallback: function (e, t) {
          return (B = 'useCallback'), te(), gf(e, t)
        },
        useContext: function (e) {
          return (B = 'useContext'), te(), nn(e)
        },
        useEffect: function (e, t) {
          return (B = 'useEffect'), te(), Zu(e, t)
        },
        useImperativeHandle: function (e, t, n) {
          return (B = 'useImperativeHandle'), te(), mf(e, t, n)
        },
        useInsertionEffect: function (e, t) {
          return (B = 'useInsertionEffect'), te(), vf(e, t)
        },
        useLayoutEffect: function (e, t) {
          return (B = 'useLayoutEffect'), te(), hf(e, t)
        },
        useMemo: function (e, t) {
          ;(B = 'useMemo'), te()
          var n = ie.current
          ie.current = Cf
          try {
            return bf(e, t)
          } finally {
            ie.current = n
          }
        },
        useReducer: function (e, t, n) {
          ;(B = 'useReducer'), te()
          var r = ie.current
          ie.current = Cf
          try {
            return eh(e, t, n)
          } finally {
            ie.current = r
          }
        },
        useRef: function (e) {
          return (B = 'useRef'), te(), ff()
        },
        useState: function (e) {
          ;(B = 'useState'), te()
          var t = ie.current
          ie.current = Cf
          try {
            return rh(e)
          } finally {
            ie.current = t
          }
        },
        useDebugValue: function (e, t) {
          return (B = 'useDebugValue'), te(), yf()
        },
        useDeferredValue: function (e) {
          return (B = 'useDeferredValue'), te(), fS(e)
        },
        useTransition: function () {
          return (B = 'useTransition'), te(), vS()
        },
        useMutableSource: function (e, t, n) {
          return (B = 'useMutableSource'), te(), void 0
        },
        useSyncExternalStore: function (e, t, n) {
          return (B = 'useSyncExternalStore'), te(), sf(e, t)
        },
        useId: function () {
          return (B = 'useId'), te(), Sf()
        },
        unstable_isNewReconciler: Ue,
      }),
      (fa = {
        readContext: function (e) {
          return ph(), nn(e)
        },
        useCallback: function (e, t) {
          return (B = 'useCallback'), ke(), mt(), uh(e, t)
        },
        useContext: function (e) {
          return (B = 'useContext'), ke(), mt(), nn(e)
        },
        useEffect: function (e, t) {
          return (B = 'useEffect'), ke(), mt(), pf(e, t)
        },
        useImperativeHandle: function (e, t, n) {
          return (B = 'useImperativeHandle'), ke(), mt(), lh(e, t, n)
        },
        useInsertionEffect: function (e, t) {
          return (B = 'useInsertionEffect'), ke(), mt(), ih(e, t)
        },
        useLayoutEffect: function (e, t) {
          return (B = 'useLayoutEffect'), ke(), mt(), oh(e, t)
        },
        useMemo: function (e, t) {
          ;(B = 'useMemo'), ke(), mt()
          var n = ie.current
          ie.current = fa
          try {
            return sh(e, t)
          } finally {
            ie.current = n
          }
        },
        useReducer: function (e, t, n) {
          ;(B = 'useReducer'), ke(), mt()
          var r = ie.current
          ie.current = fa
          try {
            return Jv(e, t, n)
          } finally {
            ie.current = r
          }
        },
        useRef: function (e) {
          return (B = 'useRef'), ke(), mt(), ah(e)
        },
        useState: function (e) {
          ;(B = 'useState'), ke(), mt()
          var t = ie.current
          ie.current = fa
          try {
            return cf(e)
          } finally {
            ie.current = t
          }
        },
        useDebugValue: function (e, t) {
          return (B = 'useDebugValue'), ke(), mt(), void 0
        },
        useDeferredValue: function (e) {
          return (B = 'useDeferredValue'), ke(), mt(), ch(e)
        },
        useTransition: function () {
          return (B = 'useTransition'), ke(), mt(), fh()
        },
        useMutableSource: function (e, t, n) {
          return (B = 'useMutableSource'), ke(), mt(), void 0
        },
        useSyncExternalStore: function (e, t, n) {
          return (B = 'useSyncExternalStore'), ke(), mt(), th(e, t, n)
        },
        useId: function () {
          return (B = 'useId'), ke(), mt(), dh()
        },
        unstable_isNewReconciler: Ue,
      }),
      (Ir = {
        readContext: function (e) {
          return ph(), nn(e)
        },
        useCallback: function (e, t) {
          return (B = 'useCallback'), ke(), te(), gf(e, t)
        },
        useContext: function (e) {
          return (B = 'useContext'), ke(), te(), nn(e)
        },
        useEffect: function (e, t) {
          return (B = 'useEffect'), ke(), te(), Zu(e, t)
        },
        useImperativeHandle: function (e, t, n) {
          return (B = 'useImperativeHandle'), ke(), te(), mf(e, t, n)
        },
        useInsertionEffect: function (e, t) {
          return (B = 'useInsertionEffect'), ke(), te(), vf(e, t)
        },
        useLayoutEffect: function (e, t) {
          return (B = 'useLayoutEffect'), ke(), te(), hf(e, t)
        },
        useMemo: function (e, t) {
          ;(B = 'useMemo'), ke(), te()
          var n = ie.current
          ie.current = Ir
          try {
            return bf(e, t)
          } finally {
            ie.current = n
          }
        },
        useReducer: function (e, t, n) {
          ;(B = 'useReducer'), ke(), te()
          var r = ie.current
          ie.current = Ir
          try {
            return Zv(e, t, n)
          } finally {
            ie.current = r
          }
        },
        useRef: function (e) {
          return (B = 'useRef'), ke(), te(), ff()
        },
        useState: function (e) {
          ;(B = 'useState'), ke(), te()
          var t = ie.current
          ie.current = Ir
          try {
            return nh(e)
          } finally {
            ie.current = t
          }
        },
        useDebugValue: function (e, t) {
          return (B = 'useDebugValue'), ke(), te(), yf()
        },
        useDeferredValue: function (e) {
          return (B = 'useDeferredValue'), ke(), te(), cS(e)
        },
        useTransition: function () {
          return (B = 'useTransition'), ke(), te(), pS()
        },
        useMutableSource: function (e, t, n) {
          return (B = 'useMutableSource'), ke(), te(), void 0
        },
        useSyncExternalStore: function (e, t, n) {
          return (B = 'useSyncExternalStore'), ke(), te(), sf(e, t)
        },
        useId: function () {
          return (B = 'useId'), ke(), te(), Sf()
        },
        unstable_isNewReconciler: Ue,
      }),
      (Cf = {
        readContext: function (e) {
          return ph(), nn(e)
        },
        useCallback: function (e, t) {
          return (B = 'useCallback'), ke(), te(), gf(e, t)
        },
        useContext: function (e) {
          return (B = 'useContext'), ke(), te(), nn(e)
        },
        useEffect: function (e, t) {
          return (B = 'useEffect'), ke(), te(), Zu(e, t)
        },
        useImperativeHandle: function (e, t, n) {
          return (B = 'useImperativeHandle'), ke(), te(), mf(e, t, n)
        },
        useInsertionEffect: function (e, t) {
          return (B = 'useInsertionEffect'), ke(), te(), vf(e, t)
        },
        useLayoutEffect: function (e, t) {
          return (B = 'useLayoutEffect'), ke(), te(), hf(e, t)
        },
        useMemo: function (e, t) {
          ;(B = 'useMemo'), ke(), te()
          var n = ie.current
          ie.current = Ir
          try {
            return bf(e, t)
          } finally {
            ie.current = n
          }
        },
        useReducer: function (e, t, n) {
          ;(B = 'useReducer'), ke(), te()
          var r = ie.current
          ie.current = Ir
          try {
            return eh(e, t, n)
          } finally {
            ie.current = r
          }
        },
        useRef: function (e) {
          return (B = 'useRef'), ke(), te(), ff()
        },
        useState: function (e) {
          ;(B = 'useState'), ke(), te()
          var t = ie.current
          ie.current = Ir
          try {
            return rh(e)
          } finally {
            ie.current = t
          }
        },
        useDebugValue: function (e, t) {
          return (B = 'useDebugValue'), ke(), te(), yf()
        },
        useDeferredValue: function (e) {
          return (B = 'useDeferredValue'), ke(), te(), fS(e)
        },
        useTransition: function () {
          return (B = 'useTransition'), ke(), te(), vS()
        },
        useMutableSource: function (e, t, n) {
          return (B = 'useMutableSource'), ke(), te(), void 0
        },
        useSyncExternalStore: function (e, t, n) {
          return (B = 'useSyncExternalStore'), ke(), te(), sf(e, t)
        },
        useId: function () {
          return (B = 'useId'), ke(), te(), Sf()
        },
        unstable_isNewReconciler: Ue,
      })
  }
  var Ci = u.unstable_now,
    xS = 0,
    Rf = -1,
    es = -1,
    xf = -1,
    vh = !1,
    Tf = !1
  function TS() {
    return vh
  }
  function X1() {
    Tf = !0
  }
  function J1() {
    ;(vh = !1), (Tf = !1)
  }
  function Z1() {
    ;(vh = Tf), (Tf = !1)
  }
  function NS() {
    return xS
  }
  function wS() {
    xS = Ci()
  }
  function hh(e) {
    ;(es = Ci()), e.actualStartTime < 0 && (e.actualStartTime = Ci())
  }
  function DS(e) {
    es = -1
  }
  function Nf(e, t) {
    if (es >= 0) {
      var n = Ci() - es
      ;(e.actualDuration += n), t && (e.selfBaseDuration = n), (es = -1)
    }
  }
  function da(e) {
    if (Rf >= 0) {
      var t = Ci() - Rf
      Rf = -1
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case L:
            var r = n.stateNode
            r.effectDuration += t
            return
          case Ee:
            var a = n.stateNode
            a.effectDuration += t
            return
        }
        n = n.return
      }
    }
  }
  function mh(e) {
    if (xf >= 0) {
      var t = Ci() - xf
      xf = -1
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case L:
            var r = n.stateNode
            r !== null && (r.passiveEffectDuration += t)
            return
          case Ee:
            var a = n.stateNode
            a !== null && (a.passiveEffectDuration += t)
            return
        }
        n = n.return
      }
    }
  }
  function pa() {
    Rf = Ci()
  }
  function yh() {
    xf = Ci()
  }
  function gh(e) {
    for (var t = e.child; t; )
      (e.actualDuration += t.actualDuration), (t = t.sibling)
  }
  function lo(e, t) {
    return { value: e, source: t, stack: Bl(t), digest: null }
  }
  function bh(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n != null ? n : null,
      digest: t != null ? t : null,
    }
  }
  function eD(e, t) {
    return !0
  }
  function Sh(e, t) {
    try {
      var n = eD(e, t)
      if (n === !1) return
      var r = t.value,
        a = t.source,
        o = t.stack,
        l = o !== null ? o : ''
      if (r != null && r._suppressLogging) {
        if (e.tag === C) return
        console.error(r)
      }
      var s = a ? Pe(a) : null,
        p = s
          ? 'The above error occurred in the <' + s + '> component:'
          : 'The above error occurred in one of your React components:',
        m
      if (e.tag === L)
        m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`
      else {
        var g = Pe(e) || 'Anonymous'
        m =
          'React will try to recreate this component tree from scratch ' +
          ('using the error boundary you provided, ' + g + '.')
      }
      var N =
        p +
        `
` +
        l +
        `

` +
        ('' + m)
      console.error(N)
    } catch (T) {
      setTimeout(function () {
        throw T
      })
    }
  }
  var tD = typeof WeakMap == 'function' ? WeakMap : Map
  function _S(e, t, n) {
    var r = za(Mt, n)
    ;(r.tag = Sv), (r.payload = { element: null })
    var a = t.value
    return (
      (r.callback = function () {
        G_(a), Sh(e, t)
      }),
      r
    )
  }
  function Eh(e, t, n) {
    var r = za(Mt, n)
    r.tag = Sv
    var a = e.type.getDerivedStateFromError
    if (typeof a == 'function') {
      var o = t.value
      ;(r.payload = function () {
        return a(o)
      }),
        (r.callback = function () {
          $0(e), Sh(e, t)
        })
    }
    var l = e.stateNode
    return (
      l !== null &&
        typeof l.componentDidCatch == 'function' &&
        (r.callback = function () {
          $0(e), Sh(e, t), typeof a != 'function' && I_(this)
          var p = t.value,
            m = t.stack
          this.componentDidCatch(p, { componentStack: m !== null ? m : '' }),
            typeof a != 'function' &&
              (gr(e.lanes, Ae) ||
                f(
                  '%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.',
                  Pe(e) || 'Unknown'
                ))
        }),
      r
    )
  }
  function OS(e, t, n) {
    var r = e.pingCache,
      a
    if (
      (r === null
        ? ((r = e.pingCache = new tD()), (a = new Set()), r.set(t, a))
        : ((a = r.get(t)), a === void 0 && ((a = new Set()), r.set(t, a))),
      !a.has(n))
    ) {
      a.add(n)
      var o = q_.bind(null, e, t, n)
      Hr && ms(e, n), t.then(o, o)
    }
  }
  function nD(e, t, n, r) {
    var a = e.updateQueue
    if (a === null) {
      var o = new Set()
      o.add(n), (e.updateQueue = o)
    } else a.add(n)
  }
  function rD(e, t) {
    var n = e.tag
    if ((e.mode & Ze) === De && (n === E || n === me || n === ee)) {
      var r = e.alternate
      r
        ? ((e.updateQueue = r.updateQueue),
          (e.memoizedState = r.memoizedState),
          (e.lanes = r.lanes))
        : ((e.updateQueue = null), (e.memoizedState = null))
    }
  }
  function MS(e) {
    var t = e
    do {
      if (t.tag === K && P1(t)) return t
      t = t.return
    } while (t !== null)
    return null
  }
  function LS(e, t, n, r, a) {
    if ((e.mode & Ze) === De) {
      if (e === t) e.flags |= Xn
      else {
        if (
          ((e.flags |= pt),
          (n.flags |= Pd),
          (n.flags &= ~(jR | eu)),
          n.tag === C)
        ) {
          var o = n.alternate
          if (o === null) n.tag = X
          else {
            var l = za(Mt, Ae)
            ;(l.tag = Qc), gi(n, l, Ae)
          }
        }
        n.lanes = Ie(n.lanes, Ae)
      }
      return e
    }
    return (e.flags |= Xn), (e.lanes = a), e
  }
  function aD(e, t, n, r, a) {
    if (
      ((n.flags |= eu),
      Hr && ms(e, a),
      r !== null && typeof r == 'object' && typeof r.then == 'function')
    ) {
      var o = r
      rD(n), _n() && n.mode & Ze && Cb()
      var l = MS(t)
      if (l !== null) {
        ;(l.flags &= ~wa),
          LS(l, t, n, e, a),
          l.mode & Ze && OS(e, o, a),
          nD(l, e, o)
        return
      } else {
        if (!wx(a)) {
          OS(e, o, a), em()
          return
        }
        var s = new Error(
          'A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.'
        )
        r = s
      }
    } else if (_n() && n.mode & Ze) {
      Cb()
      var p = MS(t)
      if (p !== null) {
        ;(p.flags & Xn) === we && (p.flags |= wa),
          LS(p, t, n, e, a),
          pv(lo(r, n))
        return
      }
    }
    ;(r = lo(r, n)), j_(r)
    var m = t
    do {
      switch (m.tag) {
        case L: {
          var g = r
          m.flags |= Xn
          var N = uu(a)
          m.lanes = Ie(m.lanes, N)
          var T = _S(m, g, N)
          Rv(m, T)
          return
        }
        case C:
          var A = r,
            k = m.type,
            H = m.stateNode
          if (
            (m.flags & pt) === we &&
            (typeof k.getDerivedStateFromError == 'function' ||
              (H !== null &&
                typeof H.componentDidCatch == 'function' &&
                !M0(H)))
          ) {
            m.flags |= Xn
            var ue = uu(a)
            m.lanes = Ie(m.lanes, ue)
            var Se = Eh(m, A, ue)
            Rv(m, Se)
            return
          }
          break
      }
      m = m.return
    } while (m !== null)
  }
  function iD() {
    return null
  }
  var ts = c.ReactCurrentOwner,
    Wr = !1,
    Ch,
    ns,
    Rh,
    xh,
    Th,
    uo,
    Nh,
    wf
  ;(Ch = {}),
    (ns = {}),
    (Rh = {}),
    (xh = {}),
    (Th = {}),
    (uo = !1),
    (Nh = {}),
    (wf = {})
  function Jn(e, t, n, r) {
    e === null
      ? (t.child = Kb(t, null, n, r))
      : (t.child = ol(t, e.child, n, r))
  }
  function oD(e, t, n, r) {
    ;(t.child = ol(t, e.child, null, r)), (t.child = ol(t, null, n, r))
  }
  function AS(e, t, n, r, a) {
    if (t.type !== t.elementType) {
      var o = n.propTypes
      o && $r(o, r, 'prop', ft(n))
    }
    var l = n.render,
      s = t.ref,
      p,
      m
    il(t, a), nu(t)
    {
      if (
        ((ts.current = t),
        mr(!0),
        (p = dl(e, t, l, r, s, a)),
        (m = pl()),
        t.mode & tn)
      ) {
        Cn(!0)
        try {
          ;(p = dl(e, t, l, r, s, a)), (m = pl())
        } finally {
          Cn(!1)
        }
      }
      mr(!1)
    }
    return (
      zo(),
      e !== null && !Wr
        ? (tS(e, t, a), $a(e, t, a))
        : (_n() && m && lv(t), (t.flags |= Fo), Jn(e, t, p, a), t.child)
    )
  }
  function kS(e, t, n, r, a) {
    if (e === null) {
      var o = n.type
      if (fO(o) && n.compare === null && n.defaultProps === void 0) {
        var l = o
        return (
          (l = El(o)), (t.tag = ee), (t.type = l), _h(t, o), US(e, t, l, r, a)
        )
      }
      {
        var s = o.propTypes
        s && $r(s, r, 'prop', ft(o))
      }
      var p = fm(n.type, null, r, t, t.mode, a)
      return (p.ref = t.ref), (p.return = t), (t.child = p), p
    }
    {
      var m = n.type,
        g = m.propTypes
      g && $r(g, r, 'prop', ft(m))
    }
    var N = e.child,
      T = Uh(e, a)
    if (!T) {
      var A = N.memoizedProps,
        k = n.compare
      if (((k = k !== null ? k : Ru), k(A, r) && e.ref === t.ref))
        return $a(e, t, a)
    }
    t.flags |= Fo
    var H = vo(N, r)
    return (H.ref = t.ref), (H.return = t), (t.child = H), H
  }
  function US(e, t, n, r, a) {
    if (t.type !== t.elementType) {
      var o = t.elementType
      if (o.$$typeof === Ke) {
        var l = o,
          s = l._payload,
          p = l._init
        try {
          o = p(s)
        } catch {
          o = null
        }
        var m = o && o.propTypes
        m && $r(m, r, 'prop', ft(o))
      }
    }
    if (e !== null) {
      var g = e.memoizedProps
      if (Ru(g, r) && e.ref === t.ref && t.type === e.type)
        if (((Wr = !1), (t.pendingProps = r = g), Uh(e, a)))
          (e.flags & Pd) !== we && (Wr = !0)
        else return (t.lanes = e.lanes), $a(e, t, a)
    }
    return wh(e, t, n, r, a)
  }
  function FS(e, t, n) {
    var r = t.pendingProps,
      a = r.children,
      o = e !== null ? e.memoizedState : null
    if (r.mode === 'hidden' || zn)
      if ((t.mode & Ze) === De) {
        var l = { baseLanes: Y, cachePool: null, transitions: null }
        ;(t.memoizedState = l), $f(t, n)
      } else if (gr(n, yr)) {
        var N = { baseLanes: Y, cachePool: null, transitions: null }
        t.memoizedState = N
        var T = o !== null ? o.baseLanes : n
        $f(t, T)
      } else {
        var s = null,
          p
        if (o !== null) {
          var m = o.baseLanes
          p = Ie(m, n)
        } else p = n
        t.lanes = t.childLanes = yr
        var g = { baseLanes: p, cachePool: s, transitions: null }
        return (t.memoizedState = g), (t.updateQueue = null), $f(t, p), null
      }
    else {
      var A
      o !== null
        ? ((A = Ie(o.baseLanes, n)), (t.memoizedState = null))
        : (A = n),
        $f(t, A)
    }
    return Jn(e, t, a, n), t.child
  }
  function lD(e, t, n) {
    var r = t.pendingProps
    return Jn(e, t, r, n), t.child
  }
  function uD(e, t, n) {
    var r = t.pendingProps.children
    return Jn(e, t, r, n), t.child
  }
  function sD(e, t, n) {
    {
      t.flags |= rt
      {
        var r = t.stateNode
        ;(r.effectDuration = 0), (r.passiveEffectDuration = 0)
      }
    }
    var a = t.pendingProps,
      o = a.children
    return Jn(e, t, o, n), t.child
  }
  function jS(e, t) {
    var n = t.ref
    ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= oi), (t.flags |= Bd))
  }
  function wh(e, t, n, r, a) {
    if (t.type !== t.elementType) {
      var o = n.propTypes
      o && $r(o, r, 'prop', ft(n))
    }
    var l
    {
      var s = Zo(t, n, !0)
      l = el(t, s)
    }
    var p, m
    il(t, a), nu(t)
    {
      if (
        ((ts.current = t),
        mr(!0),
        (p = dl(e, t, n, r, l, a)),
        (m = pl()),
        t.mode & tn)
      ) {
        Cn(!0)
        try {
          ;(p = dl(e, t, n, r, l, a)), (m = pl())
        } finally {
          Cn(!1)
        }
      }
      mr(!1)
    }
    return (
      zo(),
      e !== null && !Wr
        ? (tS(e, t, a), $a(e, t, a))
        : (_n() && m && lv(t), (t.flags |= Fo), Jn(e, t, p, a), t.child)
    )
  }
  function HS(e, t, n, r, a) {
    {
      switch (NO(t)) {
        case !1: {
          var o = t.stateNode,
            l = t.type,
            s = new l(t.memoizedProps, o.context),
            p = s.state
          o.updater.enqueueSetState(o, p, null)
          break
        }
        case !0: {
          ;(t.flags |= pt), (t.flags |= Xn)
          var m = new Error('Simulated error coming from DevTools'),
            g = uu(a)
          t.lanes = Ie(t.lanes, g)
          var N = Eh(t, lo(m, t), g)
          Rv(t, N)
          break
        }
      }
      if (t.type !== t.elementType) {
        var T = n.propTypes
        T && $r(T, r, 'prop', ft(n))
      }
    }
    var A
    ua(n) ? ((A = !0), Hc(t)) : (A = !1), il(t, a)
    var k = t.stateNode,
      H
    k === null
      ? (_f(e, t), Ib(t, n, r), Uv(t, n, r, a), (H = !0))
      : e === null
      ? (H = U1(t, n, r, a))
      : (H = F1(e, t, n, r, a))
    var ue = Dh(e, t, n, H, A, a)
    {
      var Se = t.stateNode
      H &&
        Se.props !== r &&
        (uo ||
          f(
            'It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.',
            Pe(t) || 'a component'
          ),
        (uo = !0))
    }
    return ue
  }
  function Dh(e, t, n, r, a, o) {
    jS(e, t)
    var l = (t.flags & pt) !== we
    if (!r && !l) return a && gb(t, n, !1), $a(e, t, o)
    var s = t.stateNode
    ts.current = t
    var p
    if (l && typeof n.getDerivedStateFromError != 'function') (p = null), DS()
    else {
      nu(t)
      {
        if ((mr(!0), (p = s.render()), t.mode & tn)) {
          Cn(!0)
          try {
            s.render()
          } finally {
            Cn(!1)
          }
        }
        mr(!1)
      }
      zo()
    }
    return (
      (t.flags |= Fo),
      e !== null && l ? oD(e, t, p, o) : Jn(e, t, p, o),
      (t.memoizedState = s.state),
      a && gb(t, n, !0),
      t.child
    )
  }
  function zS(e) {
    var t = e.stateNode
    t.pendingContext
      ? mb(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && mb(e, t.context, !1),
      Pv(e, t.containerInfo)
  }
  function cD(e, t, n) {
    if ((zS(t), e === null))
      throw new Error('Should have a current fiber. This is a bug in React.')
    var r = t.pendingProps,
      a = t.memoizedState,
      o = a.element
    jb(e, t), Zc(t, r, null, n)
    var l = t.memoizedState
    t.stateNode
    var s = l.element
    if (a.isDehydrated) {
      var p = {
          element: s,
          isDehydrated: !1,
          cache: l.cache,
          pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
          transitions: l.transitions,
        },
        m = t.updateQueue
      if (((m.baseState = p), (t.memoizedState = p), t.flags & wa)) {
        var g = lo(
          new Error(
            'There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.'
          ),
          t
        )
        return $S(e, t, s, n, g)
      } else if (s !== o) {
        var N = lo(
          new Error(
            'This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.'
          ),
          t
        )
        return $S(e, t, s, n, N)
      } else {
        v1(t)
        var T = Kb(t, null, s, n)
        t.child = T
        for (var A = T; A; ) (A.flags = (A.flags & ~en) | Da), (A = A.sibling)
      }
    } else {
      if ((rl(), s === o)) return $a(e, t, n)
      Jn(e, t, s, n)
    }
    return t.child
  }
  function $S(e, t, n, r, a) {
    return rl(), pv(a), (t.flags |= wa), Jn(e, t, n, r), t.child
  }
  function fD(e, t, n) {
    Jb(t), e === null && dv(t)
    var r = t.type,
      a = t.pendingProps,
      o = e !== null ? e.memoizedProps : null,
      l = a.children,
      s = Gp(r, a)
    return (
      s ? (l = null) : o !== null && Gp(r, o) && (t.flags |= Zl),
      jS(e, t),
      Jn(e, t, l, n),
      t.child
    )
  }
  function dD(e, t) {
    return e === null && dv(t), null
  }
  function pD(e, t, n, r) {
    _f(e, t)
    var a = t.pendingProps,
      o = n,
      l = o._payload,
      s = o._init,
      p = s(l)
    t.type = p
    var m = (t.tag = dO(p)),
      g = Vr(p, a),
      N
    switch (m) {
      case E:
        return _h(t, p), (t.type = p = El(p)), (N = wh(null, t, p, g, r)), N
      case C:
        return (t.type = p = im(p)), (N = HS(null, t, p, g, r)), N
      case me:
        return (t.type = p = om(p)), (N = AS(null, t, p, g, r)), N
      case Ce: {
        if (t.type !== t.elementType) {
          var T = p.propTypes
          T && $r(T, g, 'prop', ft(p))
        }
        return (N = kS(null, t, p, Vr(p.type, g), r)), N
      }
    }
    var A = ''
    throw (
      (p !== null &&
        typeof p == 'object' &&
        p.$$typeof === Ke &&
        (A = ' Did you wrap a component in React.lazy() more than once?'),
      new Error(
        'Element type is invalid. Received a promise that resolves to: ' +
          p +
          '. ' +
          ('Lazy element type must resolve to a class or function.' + A)
      ))
    )
  }
  function vD(e, t, n, r, a) {
    _f(e, t), (t.tag = C)
    var o
    return (
      ua(n) ? ((o = !0), Hc(t)) : (o = !1),
      il(t, a),
      Ib(t, n, r),
      Uv(t, n, r, a),
      Dh(null, t, n, !0, o, a)
    )
  }
  function hD(e, t, n, r) {
    _f(e, t)
    var a = t.pendingProps,
      o
    {
      var l = Zo(t, n, !1)
      o = el(t, l)
    }
    il(t, r)
    var s, p
    nu(t)
    {
      if (n.prototype && typeof n.prototype.render == 'function') {
        var m = ft(n) || 'Unknown'
        Ch[m] ||
          (f(
            "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
            m,
            m
          ),
          (Ch[m] = !0))
      }
      t.mode & tn && Br.recordLegacyContextWarning(t, null),
        mr(!0),
        (ts.current = t),
        (s = dl(null, t, n, a, o, r)),
        (p = pl()),
        mr(!1)
    }
    if (
      (zo(),
      (t.flags |= Fo),
      typeof s == 'object' &&
        s !== null &&
        typeof s.render == 'function' &&
        s.$$typeof === void 0)
    ) {
      var g = ft(n) || 'Unknown'
      ns[g] ||
        (f(
          "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
          g,
          g,
          g
        ),
        (ns[g] = !0))
    }
    if (
      typeof s == 'object' &&
      s !== null &&
      typeof s.render == 'function' &&
      s.$$typeof === void 0
    ) {
      {
        var N = ft(n) || 'Unknown'
        ns[N] ||
          (f(
            "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
            N,
            N,
            N
          ),
          (ns[N] = !0))
      }
      ;(t.tag = C), (t.memoizedState = null), (t.updateQueue = null)
      var T = !1
      return (
        ua(n) ? ((T = !0), Hc(t)) : (T = !1),
        (t.memoizedState =
          s.state !== null && s.state !== void 0 ? s.state : null),
        Cv(t),
        Yb(t, s),
        Uv(t, n, a, r),
        Dh(null, t, n, !0, T, r)
      )
    } else {
      if (((t.tag = E), t.mode & tn)) {
        Cn(!0)
        try {
          ;(s = dl(null, t, n, a, o, r)), (p = pl())
        } finally {
          Cn(!1)
        }
      }
      return _n() && p && lv(t), Jn(null, t, s, r), _h(t, n), t.child
    }
  }
  function _h(e, t) {
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
          r = ni()
        r &&
          (n +=
            `

Check the render method of \`` +
            r +
            '`.')
        var a = r || '',
          o = e._debugSource
        o && (a = o.fileName + ':' + o.lineNumber),
          Th[a] ||
            ((Th[a] = !0),
            f(
              'Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s',
              n
            ))
      }
      if (typeof t.getDerivedStateFromProps == 'function') {
        var l = ft(t) || 'Unknown'
        xh[l] ||
          (f(
            '%s: Function components do not support getDerivedStateFromProps.',
            l
          ),
          (xh[l] = !0))
      }
      if (typeof t.contextType == 'object' && t.contextType !== null) {
        var s = ft(t) || 'Unknown'
        Rh[s] ||
          (f('%s: Function components do not support contextType.', s),
          (Rh[s] = !0))
      }
    }
  }
  var Oh = { dehydrated: null, treeContext: null, retryLane: Rn }
  function Mh(e) {
    return { baseLanes: e, cachePool: iD(), transitions: null }
  }
  function mD(e, t) {
    var n = null
    return {
      baseLanes: Ie(e.baseLanes, t),
      cachePool: n,
      transitions: e.transitions,
    }
  }
  function yD(e, t, n, r) {
    if (t !== null) {
      var a = t.memoizedState
      if (a === null) return !1
    }
    return Yv(e, Gu)
  }
  function gD(e, t) {
    return lc(e.childLanes, t)
  }
  function PS(e, t, n) {
    var r = t.pendingProps
    wO(t) && (t.flags |= pt)
    var a = Yr.current,
      o = !1,
      l = (t.flags & pt) !== we
    if (
      (l || yD(a, e)
        ? ((o = !0), (t.flags &= ~pt))
        : (e === null || e.memoizedState !== null) && (a = $1(a, eS)),
      (a = ul(a)),
      Si(t, a),
      e === null)
    ) {
      dv(t)
      var s = t.memoizedState
      if (s !== null) {
        var p = s.dehydrated
        if (p !== null) return RD(t, p)
      }
      var m = r.children,
        g = r.fallback
      if (o) {
        var N = bD(t, m, g, n),
          T = t.child
        return (T.memoizedState = Mh(n)), (t.memoizedState = Oh), N
      } else return Lh(t, m)
    } else {
      var A = e.memoizedState
      if (A !== null) {
        var k = A.dehydrated
        if (k !== null) return xD(e, t, l, r, k, A, n)
      }
      if (o) {
        var H = r.fallback,
          ue = r.children,
          Se = ED(e, t, ue, H, n),
          ye = t.child,
          tt = e.child.memoizedState
        return (
          (ye.memoizedState = tt === null ? Mh(n) : mD(tt, n)),
          (ye.childLanes = gD(e, n)),
          (t.memoizedState = Oh),
          Se
        )
      } else {
        var Ge = r.children,
          O = SD(e, t, Ge, n)
        return (t.memoizedState = null), O
      }
    }
  }
  function Lh(e, t, n) {
    var r = e.mode,
      a = { mode: 'visible', children: t },
      o = Ah(a, r)
    return (o.return = e), (e.child = o), o
  }
  function bD(e, t, n, r) {
    var a = e.mode,
      o = e.child,
      l = { mode: 'hidden', children: t },
      s,
      p
    return (
      (a & Ze) === De && o !== null
        ? ((s = o),
          (s.childLanes = Y),
          (s.pendingProps = l),
          e.mode & bt &&
            ((s.actualDuration = 0),
            (s.actualStartTime = -1),
            (s.selfBaseDuration = 0),
            (s.treeBaseDuration = 0)),
          (p = Di(n, a, r, null)))
        : ((s = Ah(l, a)), (p = Di(n, a, r, null))),
      (s.return = e),
      (p.return = e),
      (s.sibling = p),
      (e.child = s),
      p
    )
  }
  function Ah(e, t, n) {
    return B0(e, t, Y, null)
  }
  function BS(e, t) {
    return vo(e, t)
  }
  function SD(e, t, n, r) {
    var a = e.child,
      o = a.sibling,
      l = BS(a, { mode: 'visible', children: n })
    if (
      ((t.mode & Ze) === De && (l.lanes = r),
      (l.return = t),
      (l.sibling = null),
      o !== null)
    ) {
      var s = t.deletions
      s === null ? ((t.deletions = [o]), (t.flags |= $i)) : s.push(o)
    }
    return (t.child = l), l
  }
  function ED(e, t, n, r, a) {
    var o = t.mode,
      l = e.child,
      s = l.sibling,
      p = { mode: 'hidden', children: n },
      m
    if ((o & Ze) === De && t.child !== l) {
      var g = t.child
      ;(m = g),
        (m.childLanes = Y),
        (m.pendingProps = p),
        t.mode & bt &&
          ((m.actualDuration = 0),
          (m.actualStartTime = -1),
          (m.selfBaseDuration = l.selfBaseDuration),
          (m.treeBaseDuration = l.treeBaseDuration)),
        (t.deletions = null)
    } else (m = BS(l, p)), (m.subtreeFlags = l.subtreeFlags & Oa)
    var N
    return (
      s !== null ? (N = vo(s, r)) : ((N = Di(r, o, a, null)), (N.flags |= en)),
      (N.return = t),
      (m.return = t),
      (m.sibling = N),
      (t.child = m),
      N
    )
  }
  function Df(e, t, n, r) {
    r !== null && pv(r), ol(t, e.child, null, n)
    var a = t.pendingProps,
      o = a.children,
      l = Lh(t, o)
    return (l.flags |= en), (t.memoizedState = null), l
  }
  function CD(e, t, n, r, a) {
    var o = t.mode,
      l = { mode: 'visible', children: n },
      s = Ah(l, o),
      p = Di(r, o, a, null)
    return (
      (p.flags |= en),
      (s.return = t),
      (p.return = t),
      (s.sibling = p),
      (t.child = s),
      (t.mode & Ze) !== De && ol(t, e.child, null, a),
      p
    )
  }
  function RD(e, t, n) {
    return (
      (e.mode & Ze) === De
        ? (f(
            'Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.'
          ),
          (e.lanes = Ae))
        : Xp(t)
        ? (e.lanes = Wi)
        : (e.lanes = yr),
      null
    )
  }
  function xD(e, t, n, r, a, o, l) {
    if (n)
      if (t.flags & wa) {
        t.flags &= ~wa
        var O = bh(
          new Error(
            'There was an error while hydrating this Suspense boundary. Switched to client rendering.'
          )
        )
        return Df(e, t, l, O)
      } else {
        if (t.memoizedState !== null)
          return (t.child = e.child), (t.flags |= pt), null
        var z = r.children,
          M = r.fallback,
          W = CD(e, t, z, M, l),
          se = t.child
        return (se.memoizedState = Mh(l)), (t.memoizedState = Oh), W
      }
    else {
      if ((d1(), (t.mode & Ze) === De)) return Df(e, t, l, null)
      if (Xp(a)) {
        var s, p, m
        {
          var g = _w(a)
          ;(s = g.digest), (p = g.message), (m = g.stack)
        }
        var N
        p
          ? (N = new Error(p))
          : (N = new Error(
              'The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.'
            ))
        var T = bh(N, s, m)
        return Df(e, t, l, T)
      }
      var A = gr(l, e.childLanes)
      if (Wr || A) {
        var k = zf()
        if (k !== null) {
          var H = Ux(k, l)
          if (H !== Rn && H !== o.retryLane) {
            o.retryLane = H
            var ue = Mt
            lr(e, H), pn(k, e, H, ue)
          }
        }
        em()
        var Se = bh(
          new Error(
            'This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.'
          )
        )
        return Df(e, t, l, Se)
      } else if (cb(a)) {
        ;(t.flags |= pt), (t.child = e.child)
        var ye = Q_.bind(null, e)
        return Ow(a, ye), null
      } else {
        h1(t, a, o.treeContext)
        var tt = r.children,
          Ge = Lh(t, tt)
        return (Ge.flags |= Da), Ge
      }
    }
  }
  function VS(e, t, n) {
    e.lanes = Ie(e.lanes, t)
    var r = e.alternate
    r !== null && (r.lanes = Ie(r.lanes, t)), gv(e.return, t, n)
  }
  function TD(e, t, n) {
    for (var r = t; r !== null; ) {
      if (r.tag === K) {
        var a = r.memoizedState
        a !== null && VS(r, n, e)
      } else if (r.tag === Te) VS(r, n, e)
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
  function ND(e) {
    for (var t = e, n = null; t !== null; ) {
      var r = t.alternate
      r !== null && lf(r) === null && (n = t), (t = t.sibling)
    }
    return n
  }
  function wD(e) {
    if (
      e !== void 0 &&
      e !== 'forwards' &&
      e !== 'backwards' &&
      e !== 'together' &&
      !Nh[e]
    )
      if (((Nh[e] = !0), typeof e == 'string'))
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
  function DD(e, t) {
    e !== void 0 &&
      !wf[e] &&
      (e !== 'collapsed' && e !== 'hidden'
        ? ((wf[e] = !0),
          f(
            '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
            e
          ))
        : t !== 'forwards' &&
          t !== 'backwards' &&
          ((wf[e] = !0),
          f(
            '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
            e
          )))
  }
  function YS(e, t) {
    {
      var n = dt(e),
        r = !n && typeof Ea(e) == 'function'
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
  function _D(e, t) {
    if (
      (t === 'forwards' || t === 'backwards') &&
      e !== void 0 &&
      e !== null &&
      e !== !1
    )
      if (dt(e)) {
        for (var n = 0; n < e.length; n++) if (!YS(e[n], n)) return
      } else {
        var r = Ea(e)
        if (typeof r == 'function') {
          var a = r.call(e)
          if (a)
            for (var o = a.next(), l = 0; !o.done; o = a.next()) {
              if (!YS(o.value, l)) return
              l++
            }
        } else
          f(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            t
          )
      }
  }
  function kh(e, t, n, r, a) {
    var o = e.memoizedState
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: a,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = a))
  }
  function IS(e, t, n) {
    var r = t.pendingProps,
      a = r.revealOrder,
      o = r.tail,
      l = r.children
    wD(a), DD(o, a), _D(l, a), Jn(e, t, l, n)
    var s = Yr.current,
      p = Yv(s, Gu)
    if (p) (s = Iv(s, Gu)), (t.flags |= pt)
    else {
      var m = e !== null && (e.flags & pt) !== we
      m && TD(t, t.child, n), (s = ul(s))
    }
    if ((Si(t, s), (t.mode & Ze) === De)) t.memoizedState = null
    else
      switch (a) {
        case 'forwards': {
          var g = ND(t.child),
            N
          g === null
            ? ((N = t.child), (t.child = null))
            : ((N = g.sibling), (g.sibling = null)),
            kh(t, !1, N, g, o)
          break
        }
        case 'backwards': {
          var T = null,
            A = t.child
          for (t.child = null; A !== null; ) {
            var k = A.alternate
            if (k !== null && lf(k) === null) {
              t.child = A
              break
            }
            var H = A.sibling
            ;(A.sibling = T), (T = A), (A = H)
          }
          kh(t, !0, T, null, o)
          break
        }
        case 'together': {
          kh(t, !1, null, null, void 0)
          break
        }
        default:
          t.memoizedState = null
      }
    return t.child
  }
  function OD(e, t, n) {
    Pv(t, t.stateNode.containerInfo)
    var r = t.pendingProps
    return e === null ? (t.child = ol(t, null, r, n)) : Jn(e, t, r, n), t.child
  }
  var WS = !1
  function MD(e, t, n) {
    var r = t.type,
      a = r._context,
      o = t.pendingProps,
      l = t.memoizedProps,
      s = o.value
    {
      'value' in o ||
        WS ||
        ((WS = !0),
        f(
          'The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?'
        ))
      var p = t.type.propTypes
      p && $r(p, o, 'prop', 'Context.Provider')
    }
    if ((Ab(t, a, s), l !== null)) {
      var m = l.value
      if (Er(m, s)) {
        if (l.children === o.children && !Fc()) return $a(e, t, n)
      } else T1(t, a, n)
    }
    var g = o.children
    return Jn(e, t, g, n), t.child
  }
  var GS = !1
  function LD(e, t, n) {
    var r = t.type
    r._context === void 0
      ? r !== r.Consumer &&
        (GS ||
          ((GS = !0),
          f(
            'Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
          )))
      : (r = r._context)
    var a = t.pendingProps,
      o = a.children
    typeof o != 'function' &&
      f(
        "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
      ),
      il(t, n)
    var l = nn(r)
    nu(t)
    var s
    return (
      (ts.current = t),
      mr(!0),
      (s = o(l)),
      mr(!1),
      zo(),
      (t.flags |= Fo),
      Jn(e, t, s, n),
      t.child
    )
  }
  function rs() {
    Wr = !0
  }
  function _f(e, t) {
    ;(t.mode & Ze) === De &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= en))
  }
  function $a(e, t, n) {
    return (
      e !== null && (t.dependencies = e.dependencies),
      DS(),
      hs(t.lanes),
      gr(n, t.childLanes) ? (j1(e, t), t.child) : null
    )
  }
  function AD(e, t, n) {
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
      var o = r.deletions
      return (
        o === null ? ((r.deletions = [e]), (r.flags |= $i)) : o.push(e),
        (n.flags |= en),
        n
      )
    }
  }
  function Uh(e, t) {
    var n = e.lanes
    return !!gr(n, t)
  }
  function kD(e, t, n) {
    switch (t.tag) {
      case L:
        zS(t), t.stateNode, rl()
        break
      case F:
        Jb(t)
        break
      case C: {
        var r = t.type
        ua(r) && Hc(t)
        break
      }
      case V:
        Pv(t, t.stateNode.containerInfo)
        break
      case Z: {
        var a = t.memoizedProps.value,
          o = t.type._context
        Ab(t, o, a)
        break
      }
      case Ee:
        {
          var l = gr(n, t.childLanes)
          l && (t.flags |= rt)
          {
            var s = t.stateNode
            ;(s.effectDuration = 0), (s.passiveEffectDuration = 0)
          }
        }
        break
      case K: {
        var p = t.memoizedState
        if (p !== null) {
          if (p.dehydrated !== null)
            return Si(t, ul(Yr.current)), (t.flags |= pt), null
          var m = t.child,
            g = m.childLanes
          if (gr(n, g)) return PS(e, t, n)
          Si(t, ul(Yr.current))
          var N = $a(e, t, n)
          return N !== null ? N.sibling : null
        } else Si(t, ul(Yr.current))
        break
      }
      case Te: {
        var T = (e.flags & pt) !== we,
          A = gr(n, t.childLanes)
        if (T) {
          if (A) return IS(e, t, n)
          t.flags |= pt
        }
        var k = t.memoizedState
        if (
          (k !== null &&
            ((k.rendering = null), (k.tail = null), (k.lastEffect = null)),
          Si(t, Yr.current),
          A)
        )
          break
        return null
      }
      case ve:
      case He:
        return (t.lanes = Y), FS(e, t, n)
    }
    return $a(e, t, n)
  }
  function qS(e, t, n) {
    if (t._debugNeedsRemount && e !== null)
      return AD(
        e,
        t,
        fm(
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
      if (r !== a || Fc() || t.type !== e.type) Wr = !0
      else {
        var o = Uh(e, n)
        if (!o && (t.flags & pt) === we) return (Wr = !1), kD(e, t, n)
        ;(e.flags & Pd) !== we ? (Wr = !0) : (Wr = !1)
      }
    } else if (((Wr = !1), _n() && o1(t))) {
      var l = t.index,
        s = l1()
      Eb(t, s, l)
    }
    switch (((t.lanes = Y), t.tag)) {
      case R:
        return hD(e, t, t.type, n)
      case lt: {
        var p = t.elementType
        return pD(e, t, p, n)
      }
      case E: {
        var m = t.type,
          g = t.pendingProps,
          N = t.elementType === m ? g : Vr(m, g)
        return wh(e, t, m, N, n)
      }
      case C: {
        var T = t.type,
          A = t.pendingProps,
          k = t.elementType === T ? A : Vr(T, A)
        return HS(e, t, T, k, n)
      }
      case L:
        return cD(e, t, n)
      case F:
        return fD(e, t, n)
      case $:
        return dD(e, t)
      case K:
        return PS(e, t, n)
      case V:
        return OD(e, t, n)
      case me: {
        var H = t.type,
          ue = t.pendingProps,
          Se = t.elementType === H ? ue : Vr(H, ue)
        return AS(e, t, H, Se, n)
      }
      case _:
        return lD(e, t, n)
      case ge:
        return uD(e, t, n)
      case Ee:
        return sD(e, t, n)
      case Z:
        return MD(e, t, n)
      case oe:
        return LD(e, t, n)
      case Ce: {
        var ye = t.type,
          tt = t.pendingProps,
          Ge = Vr(ye, tt)
        if (t.type !== t.elementType) {
          var O = ye.propTypes
          O && $r(O, Ge, 'prop', ft(ye))
        }
        return (Ge = Vr(ye.type, Ge)), kS(e, t, ye, Ge, n)
      }
      case ee:
        return US(e, t, t.type, t.pendingProps, n)
      case X: {
        var z = t.type,
          M = t.pendingProps,
          W = t.elementType === z ? M : Vr(z, M)
        return vD(e, t, z, W, n)
      }
      case Te:
        return IS(e, t, n)
      case nt:
        break
      case ve:
        return FS(e, t, n)
    }
    throw new Error(
      'Unknown unit of work tag (' +
        t.tag +
        '). This error is likely caused by a bug in React. Please file an issue.'
    )
  }
  function vl(e) {
    e.flags |= rt
  }
  function QS(e) {
    ;(e.flags |= oi), (e.flags |= Bd)
  }
  var KS, Fh, XS, JS
  ;(KS = function (e, t, n, r) {
    for (var a = t.child; a !== null; ) {
      if (a.tag === F || a.tag === $) rw(e, a.stateNode)
      else if (a.tag !== V) {
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
    (Fh = function (e, t) {}),
    (XS = function (e, t, n, r, a) {
      var o = e.memoizedProps
      if (o !== r) {
        var l = t.stateNode,
          s = Bv(),
          p = iw(l, n, o, r, a, s)
        ;(t.updateQueue = p), p && vl(t)
      }
    }),
    (JS = function (e, t, n, r) {
      n !== r && vl(t)
    })
  function as(e, t) {
    if (!_n())
      switch (e.tailMode) {
        case 'hidden': {
          for (var n = e.tail, r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling)
          r === null ? (e.tail = null) : (r.sibling = null)
          break
        }
        case 'collapsed': {
          for (var a = e.tail, o = null; a !== null; )
            a.alternate !== null && (o = a), (a = a.sibling)
          o === null
            ? !t && e.tail !== null
              ? (e.tail.sibling = null)
              : (e.tail = null)
            : (o.sibling = null)
          break
        }
      }
  }
  function Mn(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = Y,
      r = we
    if (t) {
      if ((e.mode & bt) !== De) {
        for (var p = e.selfBaseDuration, m = e.child; m !== null; )
          (n = Ie(n, Ie(m.lanes, m.childLanes))),
            (r |= m.subtreeFlags & Oa),
            (r |= m.flags & Oa),
            (p += m.treeBaseDuration),
            (m = m.sibling)
        e.treeBaseDuration = p
      } else
        for (var g = e.child; g !== null; )
          (n = Ie(n, Ie(g.lanes, g.childLanes))),
            (r |= g.subtreeFlags & Oa),
            (r |= g.flags & Oa),
            (g.return = e),
            (g = g.sibling)
      e.subtreeFlags |= r
    } else {
      if ((e.mode & bt) !== De) {
        for (
          var a = e.actualDuration, o = e.selfBaseDuration, l = e.child;
          l !== null;

        )
          (n = Ie(n, Ie(l.lanes, l.childLanes))),
            (r |= l.subtreeFlags),
            (r |= l.flags),
            (a += l.actualDuration),
            (o += l.treeBaseDuration),
            (l = l.sibling)
        ;(e.actualDuration = a), (e.treeBaseDuration = o)
      } else
        for (var s = e.child; s !== null; )
          (n = Ie(n, Ie(s.lanes, s.childLanes))),
            (r |= s.subtreeFlags),
            (r |= s.flags),
            (s.return = e),
            (s = s.sibling)
      e.subtreeFlags |= r
    }
    return (e.childLanes = n), t
  }
  function UD(e, t, n) {
    if (S1() && (t.mode & Ze) !== De && (t.flags & pt) === we)
      return Db(t), rl(), (t.flags |= wa | eu | Xn), !1
    var r = Vc(t)
    if (n !== null && n.dehydrated !== null)
      if (e === null) {
        if (!r)
          throw new Error(
            'A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.'
          )
        if ((g1(t), Mn(t), (t.mode & bt) !== De)) {
          var a = n !== null
          if (a) {
            var o = t.child
            o !== null && (t.treeBaseDuration -= o.treeBaseDuration)
          }
        }
        return !1
      } else {
        if (
          (rl(),
          (t.flags & pt) === we && (t.memoizedState = null),
          (t.flags |= rt),
          Mn(t),
          (t.mode & bt) !== De)
        ) {
          var l = n !== null
          if (l) {
            var s = t.child
            s !== null && (t.treeBaseDuration -= s.treeBaseDuration)
          }
        }
        return !1
      }
    else return _b(), !0
  }
  function ZS(e, t, n) {
    var r = t.pendingProps
    switch ((uv(t), t.tag)) {
      case R:
      case lt:
      case ee:
      case E:
      case me:
      case _:
      case ge:
      case Ee:
      case oe:
      case Ce:
        return Mn(t), null
      case C: {
        var a = t.type
        return ua(a) && jc(t), Mn(t), null
      }
      case L: {
        var o = t.stateNode
        if (
          (ll(t),
          av(t),
          Gv(),
          o.pendingContext &&
            ((o.context = o.pendingContext), (o.pendingContext = null)),
          e === null || e.child === null)
        ) {
          var l = Vc(t)
          if (l) vl(t)
          else if (e !== null) {
            var s = e.memoizedState
            ;(!s.isDehydrated || (t.flags & wa) !== we) &&
              ((t.flags |= Pi), _b())
          }
        }
        return Fh(e, t), Mn(t), null
      }
      case F: {
        Vv(t)
        var p = Xb(),
          m = t.type
        if (e !== null && t.stateNode != null)
          XS(e, t, m, r, p), e.ref !== t.ref && QS(t)
        else {
          if (!r) {
            if (t.stateNode === null)
              throw new Error(
                'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
              )
            return Mn(t), null
          }
          var g = Bv(),
            N = Vc(t)
          if (N) m1(t, p, g) && vl(t)
          else {
            var T = nw(m, r, p, g, t)
            KS(T, t, !1, !1), (t.stateNode = T), aw(T, m, r, p) && vl(t)
          }
          t.ref !== null && QS(t)
        }
        return Mn(t), null
      }
      case $: {
        var A = r
        if (e && t.stateNode != null) {
          var k = e.memoizedProps
          JS(e, t, k, A)
        } else {
          if (typeof A != 'string' && t.stateNode === null)
            throw new Error(
              'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.'
            )
          var H = Xb(),
            ue = Bv(),
            Se = Vc(t)
          Se ? y1(t) && vl(t) : (t.stateNode = ow(A, H, ue, t))
        }
        return Mn(t), null
      }
      case K: {
        sl(t)
        var ye = t.memoizedState
        if (
          e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null)
        ) {
          var tt = UD(e, t, ye)
          if (!tt) return t.flags & Xn ? t : null
        }
        if ((t.flags & pt) !== we)
          return (t.lanes = n), (t.mode & bt) !== De && gh(t), t
        var Ge = ye !== null,
          O = e !== null && e.memoizedState !== null
        if (Ge !== O && Ge) {
          var z = t.child
          if (((z.flags |= Bi), (t.mode & Ze) !== De)) {
            var M =
              e === null &&
              (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Xt)
            M || Yv(Yr.current, eS) ? F_() : em()
          }
        }
        var W = t.updateQueue
        if (
          (W !== null && (t.flags |= rt), Mn(t), (t.mode & bt) !== De && Ge)
        ) {
          var se = t.child
          se !== null && (t.treeBaseDuration -= se.treeBaseDuration)
        }
        return null
      }
      case V:
        return (
          ll(t),
          Fh(e, t),
          e === null && Zw(t.stateNode.containerInfo),
          Mn(t),
          null
        )
      case Z:
        var re = t.type._context
        return yv(re, t), Mn(t), null
      case X: {
        var Oe = t.type
        return ua(Oe) && jc(t), Mn(t), null
      }
      case Te: {
        sl(t)
        var je = t.memoizedState
        if (je === null) return Mn(t), null
        var Et = (t.flags & pt) !== we,
          ut = je.rendering
        if (ut === null)
          if (Et) as(je, !1)
          else {
            var Qt = H_() && (e === null || (e.flags & pt) === we)
            if (!Qt)
              for (var st = t.child; st !== null; ) {
                var It = lf(st)
                if (It !== null) {
                  ;(Et = !0), (t.flags |= pt), as(je, !1)
                  var Wn = It.updateQueue
                  return (
                    Wn !== null && ((t.updateQueue = Wn), (t.flags |= rt)),
                    (t.subtreeFlags = we),
                    H1(t, n),
                    Si(t, Iv(Yr.current, Gu)),
                    t.child
                  )
                }
                st = st.sibling
              }
            je.tail !== null &&
              En() > S0() &&
              ((t.flags |= pt), (Et = !0), as(je, !1), (t.lanes = Xy))
          }
        else {
          if (!Et) {
            var Fn = lf(ut)
            if (Fn !== null) {
              ;(t.flags |= pt), (Et = !0)
              var xr = Fn.updateQueue
              if (
                (xr !== null && ((t.updateQueue = xr), (t.flags |= rt)),
                as(je, !0),
                je.tail === null &&
                  je.tailMode === 'hidden' &&
                  !ut.alternate &&
                  !_n())
              )
                return Mn(t), null
            } else
              En() * 2 - je.renderingStartTime > S0() &&
                n !== yr &&
                ((t.flags |= pt), (Et = !0), as(je, !1), (t.lanes = Xy))
          }
          if (je.isBackwards) (ut.sibling = t.child), (t.child = ut)
          else {
            var tr = je.last
            tr !== null ? (tr.sibling = ut) : (t.child = ut), (je.last = ut)
          }
        }
        if (je.tail !== null) {
          var nr = je.tail
          ;(je.rendering = nr),
            (je.tail = nr.sibling),
            (je.renderingStartTime = En()),
            (nr.sibling = null)
          var Gn = Yr.current
          return Et ? (Gn = Iv(Gn, Gu)) : (Gn = ul(Gn)), Si(t, Gn), nr
        }
        return Mn(t), null
      }
      case nt:
        break
      case ve:
      case He: {
        Zh(t)
        var Ia = t.memoizedState,
          Cl = Ia !== null
        if (e !== null) {
          var Ss = e.memoizedState,
            ma = Ss !== null
          ma !== Cl && !zn && (t.flags |= Bi)
        }
        return (
          !Cl || (t.mode & Ze) === De
            ? Mn(t)
            : gr(ha, yr) &&
              (Mn(t), t.subtreeFlags & (en | rt) && (t.flags |= Bi)),
          null
        )
      }
      case vt:
        return null
      case ze:
        return null
    }
    throw new Error(
      'Unknown unit of work tag (' +
        t.tag +
        '). This error is likely caused by a bug in React. Please file an issue.'
    )
  }
  function FD(e, t, n) {
    switch ((uv(t), t.tag)) {
      case C: {
        var r = t.type
        ua(r) && jc(t)
        var a = t.flags
        return a & Xn
          ? ((t.flags = (a & ~Xn) | pt), (t.mode & bt) !== De && gh(t), t)
          : null
      }
      case L: {
        t.stateNode, ll(t), av(t), Gv()
        var o = t.flags
        return (o & Xn) !== we && (o & pt) === we
          ? ((t.flags = (o & ~Xn) | pt), t)
          : null
      }
      case F:
        return Vv(t), null
      case K: {
        sl(t)
        var l = t.memoizedState
        if (l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw new Error(
              'Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.'
            )
          rl()
        }
        var s = t.flags
        return s & Xn
          ? ((t.flags = (s & ~Xn) | pt), (t.mode & bt) !== De && gh(t), t)
          : null
      }
      case Te:
        return sl(t), null
      case V:
        return ll(t), null
      case Z:
        var p = t.type._context
        return yv(p, t), null
      case ve:
      case He:
        return Zh(t), null
      case vt:
        return null
      default:
        return null
    }
  }
  function e0(e, t, n) {
    switch ((uv(t), t.tag)) {
      case C: {
        var r = t.type.childContextTypes
        r != null && jc(t)
        break
      }
      case L: {
        t.stateNode, ll(t), av(t), Gv()
        break
      }
      case F: {
        Vv(t)
        break
      }
      case V:
        ll(t)
        break
      case K:
        sl(t)
        break
      case Te:
        sl(t)
        break
      case Z:
        var a = t.type._context
        yv(a, t)
        break
      case ve:
      case He:
        Zh(t)
        break
    }
  }
  var t0 = null
  t0 = new Set()
  var Of = !1,
    Ln = !1,
    jD = typeof WeakSet == 'function' ? WeakSet : Set,
    fe = null,
    hl = null,
    ml = null
  function HD(e) {
    Hd(null, function () {
      throw e
    }),
      zd()
  }
  var zD = function (e, t) {
    if (((t.props = e.memoizedProps), (t.state = e.memoizedState), e.mode & bt))
      try {
        pa(), t.componentWillUnmount()
      } finally {
        da(e)
      }
    else t.componentWillUnmount()
  }
  function n0(e, t) {
    try {
      Ri(ln, e)
    } catch (n) {
      _t(e, t, n)
    }
  }
  function jh(e, t, n) {
    try {
      zD(e, n)
    } catch (r) {
      _t(e, t, r)
    }
  }
  function $D(e, t, n) {
    try {
      n.componentDidMount()
    } catch (r) {
      _t(e, t, r)
    }
  }
  function r0(e, t) {
    try {
      i0(e)
    } catch (n) {
      _t(e, t, n)
    }
  }
  function yl(e, t) {
    var n = e.ref
    if (n !== null)
      if (typeof n == 'function') {
        var r
        try {
          if (dr && pr && e.mode & bt)
            try {
              pa(), (r = n(null))
            } finally {
              da(e)
            }
          else r = n(null)
        } catch (a) {
          _t(e, t, a)
        }
        typeof r == 'function' &&
          f(
            'Unexpected return value from a callback ref in %s. A callback ref should not return a function.',
            Pe(e)
          )
      } else n.current = null
  }
  function Mf(e, t, n) {
    try {
      n()
    } catch (r) {
      _t(e, t, r)
    }
  }
  var a0 = !1
  function PD(e, t) {
    ew(e.containerInfo), (fe = t), BD()
    var n = a0
    return (a0 = !1), n
  }
  function BD() {
    for (; fe !== null; ) {
      var e = fe,
        t = e.child
      ;(e.subtreeFlags & Yd) !== we && t !== null
        ? ((t.return = e), (fe = t))
        : VD()
    }
  }
  function VD() {
    for (; fe !== null; ) {
      var e = fe
      $t(e)
      try {
        YD(e)
      } catch (n) {
        _t(e, e.return, n)
      }
      Sn()
      var t = e.sibling
      if (t !== null) {
        ;(t.return = e.return), (fe = t)
        return
      }
      fe = e.return
    }
  }
  function YD(e) {
    var t = e.alternate,
      n = e.flags
    if ((n & Pi) !== we) {
      switch (($t(e), e.tag)) {
        case E:
        case me:
        case ee:
          break
        case C: {
          if (t !== null) {
            var r = t.memoizedProps,
              a = t.memoizedState,
              o = e.stateNode
            e.type === e.elementType &&
              !uo &&
              (o.props !== e.memoizedProps &&
                f(
                  'Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                  Pe(e) || 'instance'
                ),
              o.state !== e.memoizedState &&
                f(
                  'Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                  Pe(e) || 'instance'
                ))
            var l = o.getSnapshotBeforeUpdate(
              e.elementType === e.type ? r : Vr(e.type, r),
              a
            )
            {
              var s = t0
              l === void 0 &&
                !s.has(e.type) &&
                (s.add(e.type),
                f(
                  '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.',
                  Pe(e)
                ))
            }
            o.__reactInternalSnapshotBeforeUpdate = l
          }
          break
        }
        case L: {
          {
            var p = e.stateNode
            Tw(p.containerInfo)
          }
          break
        }
        case F:
        case $:
        case V:
        case X:
          break
        default:
          throw new Error(
            'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
          )
      }
      Sn()
    }
  }
  function Gr(e, t, n) {
    var r = t.updateQueue,
      a = r !== null ? r.lastEffect : null
    if (a !== null) {
      var o = a.next,
        l = o
      do {
        if ((l.tag & e) === e) {
          var s = l.destroy
          ;(l.destroy = void 0),
            s !== void 0 &&
              ((e & On) !== ur ? ox(t) : (e & ln) !== ur && Wy(t),
              (e & sa) !== ur && ys(!0),
              Mf(t, n, s),
              (e & sa) !== ur && ys(!1),
              (e & On) !== ur ? lx() : (e & ln) !== ur && Gy())
        }
        l = l.next
      } while (l !== o)
    }
  }
  function Ri(e, t) {
    var n = t.updateQueue,
      r = n !== null ? n.lastEffect : null
    if (r !== null) {
      var a = r.next,
        o = a
      do {
        if ((o.tag & e) === e) {
          ;(e & On) !== ur ? ax(t) : (e & ln) !== ur && ux(t)
          var l = o.create
          ;(e & sa) !== ur && ys(!0),
            (o.destroy = l()),
            (e & sa) !== ur && ys(!1),
            (e & On) !== ur ? ix() : (e & ln) !== ur && sx()
          {
            var s = o.destroy
            if (s !== void 0 && typeof s != 'function') {
              var p = void 0
              ;(o.tag & ln) !== we
                ? (p = 'useLayoutEffect')
                : (o.tag & sa) !== we
                ? (p = 'useInsertionEffect')
                : (p = 'useEffect')
              var m = void 0
              s === null
                ? (m =
                    ' You returned null. If your effect does not require clean up, return undefined (or nothing).')
                : typeof s.then == 'function'
                ? (m =
                    `

It looks like you wrote ` +
                    p +
                    `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` +
                    p +
                    `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`)
                : (m = ' You returned: ' + s),
                f(
                  '%s must not return anything besides a function, which is used for clean-up.%s',
                  p,
                  m
                )
            }
          }
        }
        o = o.next
      } while (o !== a)
    }
  }
  function ID(e, t) {
    if ((t.flags & rt) !== we)
      switch (t.tag) {
        case Ee: {
          var n = t.stateNode.passiveEffectDuration,
            r = t.memoizedProps,
            a = r.id,
            o = r.onPostCommit,
            l = NS(),
            s = t.alternate === null ? 'mount' : 'update'
          TS() && (s = 'nested-update'), typeof o == 'function' && o(a, s, n, l)
          var p = t.return
          e: for (; p !== null; ) {
            switch (p.tag) {
              case L:
                var m = p.stateNode
                m.passiveEffectDuration += n
                break e
              case Ee:
                var g = p.stateNode
                g.passiveEffectDuration += n
                break e
            }
            p = p.return
          }
          break
        }
      }
  }
  function WD(e, t, n, r) {
    if ((n.flags & tu) !== we)
      switch (n.tag) {
        case E:
        case me:
        case ee: {
          if (!Ln)
            if (n.mode & bt)
              try {
                pa(), Ri(ln | on, n)
              } finally {
                da(n)
              }
            else Ri(ln | on, n)
          break
        }
        case C: {
          var a = n.stateNode
          if (n.flags & rt && !Ln)
            if (t === null)
              if (
                (n.type === n.elementType &&
                  !uo &&
                  (a.props !== n.memoizedProps &&
                    f(
                      'Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                      Pe(n) || 'instance'
                    ),
                  a.state !== n.memoizedState &&
                    f(
                      'Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                      Pe(n) || 'instance'
                    )),
                n.mode & bt)
              )
                try {
                  pa(), a.componentDidMount()
                } finally {
                  da(n)
                }
              else a.componentDidMount()
            else {
              var o =
                  n.elementType === n.type
                    ? t.memoizedProps
                    : Vr(n.type, t.memoizedProps),
                l = t.memoizedState
              if (
                (n.type === n.elementType &&
                  !uo &&
                  (a.props !== n.memoizedProps &&
                    f(
                      'Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                      Pe(n) || 'instance'
                    ),
                  a.state !== n.memoizedState &&
                    f(
                      'Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                      Pe(n) || 'instance'
                    )),
                n.mode & bt)
              )
                try {
                  pa(),
                    a.componentDidUpdate(
                      o,
                      l,
                      a.__reactInternalSnapshotBeforeUpdate
                    )
                } finally {
                  da(n)
                }
              else
                a.componentDidUpdate(
                  o,
                  l,
                  a.__reactInternalSnapshotBeforeUpdate
                )
            }
          var s = n.updateQueue
          s !== null &&
            (n.type === n.elementType &&
              !uo &&
              (a.props !== n.memoizedProps &&
                f(
                  'Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                  Pe(n) || 'instance'
                ),
              a.state !== n.memoizedState &&
                f(
                  'Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                  Pe(n) || 'instance'
                )),
            zb(n, s, a))
          break
        }
        case L: {
          var p = n.updateQueue
          if (p !== null) {
            var m = null
            if (n.child !== null)
              switch (n.child.tag) {
                case F:
                  m = n.child.stateNode
                  break
                case C:
                  m = n.child.stateNode
                  break
              }
            zb(n, p, m)
          }
          break
        }
        case F: {
          var g = n.stateNode
          if (t === null && n.flags & rt) {
            var N = n.type,
              T = n.memoizedProps
            fw(g, N, T)
          }
          break
        }
        case $:
          break
        case V:
          break
        case Ee: {
          {
            var A = n.memoizedProps,
              k = A.onCommit,
              H = A.onRender,
              ue = n.stateNode.effectDuration,
              Se = NS(),
              ye = t === null ? 'mount' : 'update'
            TS() && (ye = 'nested-update'),
              typeof H == 'function' &&
                H(
                  n.memoizedProps.id,
                  ye,
                  n.actualDuration,
                  n.treeBaseDuration,
                  n.actualStartTime,
                  Se
                )
            {
              typeof k == 'function' && k(n.memoizedProps.id, ye, ue, Se), V_(n)
              var tt = n.return
              e: for (; tt !== null; ) {
                switch (tt.tag) {
                  case L:
                    var Ge = tt.stateNode
                    Ge.effectDuration += ue
                    break e
                  case Ee:
                    var O = tt.stateNode
                    O.effectDuration += ue
                    break e
                }
                tt = tt.return
              }
            }
          }
          break
        }
        case K: {
          e_(e, n)
          break
        }
        case Te:
        case X:
        case nt:
        case ve:
        case He:
        case ze:
          break
        default:
          throw new Error(
            'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.'
          )
      }
    Ln || (n.flags & oi && i0(n))
  }
  function GD(e) {
    switch (e.tag) {
      case E:
      case me:
      case ee: {
        if (e.mode & bt)
          try {
            pa(), n0(e, e.return)
          } finally {
            da(e)
          }
        else n0(e, e.return)
        break
      }
      case C: {
        var t = e.stateNode
        typeof t.componentDidMount == 'function' && $D(e, e.return, t),
          r0(e, e.return)
        break
      }
      case F: {
        r0(e, e.return)
        break
      }
    }
  }
  function qD(e, t) {
    for (var n = null, r = e; ; ) {
      if (r.tag === F) {
        if (n === null) {
          n = r
          try {
            var a = r.stateNode
            t ? Ew(a) : Rw(r.stateNode, r.memoizedProps)
          } catch (l) {
            _t(e, e.return, l)
          }
        }
      } else if (r.tag === $) {
        if (n === null)
          try {
            var o = r.stateNode
            t ? Cw(o) : xw(o, r.memoizedProps)
          } catch (l) {
            _t(e, e.return, l)
          }
      } else if (
        !((r.tag === ve || r.tag === He) && r.memoizedState !== null && r !== e)
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
  function i0(e) {
    var t = e.ref
    if (t !== null) {
      var n = e.stateNode,
        r
      switch (e.tag) {
        case F:
          r = n
          break
        default:
          r = n
      }
      if (typeof t == 'function') {
        var a
        if (e.mode & bt)
          try {
            pa(), (a = t(r))
          } finally {
            da(e)
          }
        else a = t(r)
        typeof a == 'function' &&
          f(
            'Unexpected return value from a callback ref in %s. A callback ref should not return a function.',
            Pe(e)
          )
      } else
        t.hasOwnProperty('current') ||
          f(
            'Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().',
            Pe(e)
          ),
          (t.current = r)
    }
  }
  function QD(e) {
    var t = e.alternate
    t !== null && (t.return = null), (e.return = null)
  }
  function o0(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), o0(t))
    {
      if (
        ((e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === F)
      ) {
        var n = e.stateNode
        n !== null && n1(n)
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
  function KD(e) {
    for (var t = e.return; t !== null; ) {
      if (l0(t)) return t
      t = t.return
    }
    throw new Error(
      'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
    )
  }
  function l0(e) {
    return e.tag === F || e.tag === L || e.tag === V
  }
  function u0(e) {
    var t = e
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || l0(t.return)) return null
        t = t.return
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== F && t.tag !== $ && t.tag !== Re;

      ) {
        if (t.flags & en || t.child === null || t.tag === V) continue e
        ;(t.child.return = t), (t = t.child)
      }
      if (!(t.flags & en)) return t.stateNode
    }
  }
  function XD(e) {
    var t = KD(e)
    switch (t.tag) {
      case F: {
        var n = t.stateNode
        t.flags & Zl && (sb(n), (t.flags &= ~Zl))
        var r = u0(e)
        zh(e, r, n)
        break
      }
      case L:
      case V: {
        var a = t.stateNode.containerInfo,
          o = u0(e)
        Hh(e, o, a)
        break
      }
      default:
        throw new Error(
          'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.'
        )
    }
  }
  function Hh(e, t, n) {
    var r = e.tag,
      a = r === F || r === $
    if (a) {
      var o = e.stateNode
      t ? yw(n, o, t) : hw(n, o)
    } else if (r !== V) {
      var l = e.child
      if (l !== null) {
        Hh(l, t, n)
        for (var s = l.sibling; s !== null; ) Hh(s, t, n), (s = s.sibling)
      }
    }
  }
  function zh(e, t, n) {
    var r = e.tag,
      a = r === F || r === $
    if (a) {
      var o = e.stateNode
      t ? mw(n, o, t) : vw(n, o)
    } else if (r !== V) {
      var l = e.child
      if (l !== null) {
        zh(l, t, n)
        for (var s = l.sibling; s !== null; ) zh(s, t, n), (s = s.sibling)
      }
    }
  }
  var An = null,
    qr = !1
  function JD(e, t, n) {
    {
      var r = t
      e: for (; r !== null; ) {
        switch (r.tag) {
          case F: {
            ;(An = r.stateNode), (qr = !1)
            break e
          }
          case L: {
            ;(An = r.stateNode.containerInfo), (qr = !0)
            break e
          }
          case V: {
            ;(An = r.stateNode.containerInfo), (qr = !0)
            break e
          }
        }
        r = r.return
      }
      if (An === null)
        throw new Error(
          'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.'
        )
      s0(e, t, n), (An = null), (qr = !1)
    }
    QD(n)
  }
  function xi(e, t, n) {
    for (var r = n.child; r !== null; ) s0(e, t, r), (r = r.sibling)
  }
  function s0(e, t, n) {
    switch ((ex(n), n.tag)) {
      case F:
        Ln || yl(n, t)
      case $: {
        {
          var r = An,
            a = qr
          ;(An = null),
            xi(e, t, n),
            (An = r),
            (qr = a),
            An !== null && (qr ? bw(An, n.stateNode) : gw(An, n.stateNode))
        }
        return
      }
      case Re: {
        An !== null && (qr ? Sw(An, n.stateNode) : Kp(An, n.stateNode))
        return
      }
      case V: {
        {
          var o = An,
            l = qr
          ;(An = n.stateNode.containerInfo),
            (qr = !0),
            xi(e, t, n),
            (An = o),
            (qr = l)
        }
        return
      }
      case E:
      case me:
      case Ce:
      case ee: {
        if (!Ln) {
          var s = n.updateQueue
          if (s !== null) {
            var p = s.lastEffect
            if (p !== null) {
              var m = p.next,
                g = m
              do {
                var N = g,
                  T = N.destroy,
                  A = N.tag
                T !== void 0 &&
                  ((A & sa) !== ur
                    ? Mf(n, t, T)
                    : (A & ln) !== ur &&
                      (Wy(n),
                      n.mode & bt ? (pa(), Mf(n, t, T), da(n)) : Mf(n, t, T),
                      Gy())),
                  (g = g.next)
              } while (g !== m)
            }
          }
        }
        xi(e, t, n)
        return
      }
      case C: {
        if (!Ln) {
          yl(n, t)
          var k = n.stateNode
          typeof k.componentWillUnmount == 'function' && jh(n, t, k)
        }
        xi(e, t, n)
        return
      }
      case nt: {
        xi(e, t, n)
        return
      }
      case ve: {
        if (n.mode & Ze) {
          var H = Ln
          ;(Ln = H || n.memoizedState !== null), xi(e, t, n), (Ln = H)
        } else xi(e, t, n)
        break
      }
      default: {
        xi(e, t, n)
        return
      }
    }
  }
  function ZD(e) {
    e.memoizedState
  }
  function e_(e, t) {
    var n = t.memoizedState
    if (n === null) {
      var r = t.alternate
      if (r !== null) {
        var a = r.memoizedState
        if (a !== null) {
          var o = a.dehydrated
          o !== null && zw(o)
        }
      }
    }
  }
  function c0(e) {
    var t = e.updateQueue
    if (t !== null) {
      e.updateQueue = null
      var n = e.stateNode
      n === null && (n = e.stateNode = new jD()),
        t.forEach(function (r) {
          var a = K_.bind(null, e, r)
          if (!n.has(r)) {
            if ((n.add(r), Hr))
              if (hl !== null && ml !== null) ms(ml, hl)
              else
                throw Error(
                  'Expected finished root and lanes to be set. This is a bug in React.'
                )
            r.then(a, a)
          }
        })
    }
  }
  function t_(e, t, n) {
    ;(hl = n), (ml = e), $t(t), f0(t, e), $t(t), (hl = null), (ml = null)
  }
  function Qr(e, t, n) {
    var r = t.deletions
    if (r !== null)
      for (var a = 0; a < r.length; a++) {
        var o = r[a]
        try {
          JD(e, t, o)
        } catch (p) {
          _t(o, t, p)
        }
      }
    var l = Ps()
    if (t.subtreeFlags & Id)
      for (var s = t.child; s !== null; ) $t(s), f0(s, e), (s = s.sibling)
    $t(l)
  }
  function f0(e, t, n) {
    var r = e.alternate,
      a = e.flags
    switch (e.tag) {
      case E:
      case me:
      case Ce:
      case ee: {
        if ((Qr(t, e), va(e), a & rt)) {
          try {
            Gr(sa | on, e, e.return), Ri(sa | on, e)
          } catch (Oe) {
            _t(e, e.return, Oe)
          }
          if (e.mode & bt) {
            try {
              pa(), Gr(ln | on, e, e.return)
            } catch (Oe) {
              _t(e, e.return, Oe)
            }
            da(e)
          } else
            try {
              Gr(ln | on, e, e.return)
            } catch (Oe) {
              _t(e, e.return, Oe)
            }
        }
        return
      }
      case C: {
        Qr(t, e), va(e), a & oi && r !== null && yl(r, r.return)
        return
      }
      case F: {
        Qr(t, e), va(e), a & oi && r !== null && yl(r, r.return)
        {
          if (e.flags & Zl) {
            var o = e.stateNode
            try {
              sb(o)
            } catch (Oe) {
              _t(e, e.return, Oe)
            }
          }
          if (a & rt) {
            var l = e.stateNode
            if (l != null) {
              var s = e.memoizedProps,
                p = r !== null ? r.memoizedProps : s,
                m = e.type,
                g = e.updateQueue
              if (((e.updateQueue = null), g !== null))
                try {
                  dw(l, g, m, p, s, e)
                } catch (Oe) {
                  _t(e, e.return, Oe)
                }
            }
          }
        }
        return
      }
      case $: {
        if ((Qr(t, e), va(e), a & rt)) {
          if (e.stateNode === null)
            throw new Error(
              'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.'
            )
          var N = e.stateNode,
            T = e.memoizedProps,
            A = r !== null ? r.memoizedProps : T
          try {
            pw(N, A, T)
          } catch (Oe) {
            _t(e, e.return, Oe)
          }
        }
        return
      }
      case L: {
        if ((Qr(t, e), va(e), a & rt && r !== null)) {
          var k = r.memoizedState
          if (k.isDehydrated)
            try {
              Hw(t.containerInfo)
            } catch (Oe) {
              _t(e, e.return, Oe)
            }
        }
        return
      }
      case V: {
        Qr(t, e), va(e)
        return
      }
      case K: {
        Qr(t, e), va(e)
        var H = e.child
        if (H.flags & Bi) {
          var ue = H.stateNode,
            Se = H.memoizedState,
            ye = Se !== null
          if (((ue.isHidden = ye), ye)) {
            var tt = H.alternate !== null && H.alternate.memoizedState !== null
            tt || U_()
          }
        }
        if (a & rt) {
          try {
            ZD(e)
          } catch (Oe) {
            _t(e, e.return, Oe)
          }
          c0(e)
        }
        return
      }
      case ve: {
        var Ge = r !== null && r.memoizedState !== null
        if (e.mode & Ze) {
          var O = Ln
          ;(Ln = O || Ge), Qr(t, e), (Ln = O)
        } else Qr(t, e)
        if ((va(e), a & Bi)) {
          var z = e.stateNode,
            M = e.memoizedState,
            W = M !== null,
            se = e
          if (((z.isHidden = W), W && !Ge && (se.mode & Ze) !== De)) {
            fe = se
            for (var re = se.child; re !== null; )
              (fe = re), r_(re), (re = re.sibling)
          }
          qD(se, W)
        }
        return
      }
      case Te: {
        Qr(t, e), va(e), a & rt && c0(e)
        return
      }
      case nt:
        return
      default: {
        Qr(t, e), va(e)
        return
      }
    }
  }
  function va(e) {
    var t = e.flags
    if (t & en) {
      try {
        XD(e)
      } catch (n) {
        _t(e, e.return, n)
      }
      e.flags &= ~en
    }
    t & Da && (e.flags &= ~Da)
  }
  function n_(e, t, n) {
    ;(hl = n), (ml = t), (fe = e), d0(e, t, n), (hl = null), (ml = null)
  }
  function d0(e, t, n) {
    for (var r = (e.mode & Ze) !== De; fe !== null; ) {
      var a = fe,
        o = a.child
      if (a.tag === ve && r) {
        var l = a.memoizedState !== null,
          s = l || Of
        if (s) {
          $h(e, t, n)
          continue
        } else {
          var p = a.alternate,
            m = p !== null && p.memoizedState !== null,
            g = m || Ln,
            N = Of,
            T = Ln
          ;(Of = s), (Ln = g), Ln && !T && ((fe = a), a_(a))
          for (var A = o; A !== null; ) (fe = A), d0(A, t, n), (A = A.sibling)
          ;(fe = a), (Of = N), (Ln = T), $h(e, t, n)
          continue
        }
      }
      ;(a.subtreeFlags & tu) !== we && o !== null
        ? ((o.return = a), (fe = o))
        : $h(e, t, n)
    }
  }
  function $h(e, t, n) {
    for (; fe !== null; ) {
      var r = fe
      if ((r.flags & tu) !== we) {
        var a = r.alternate
        $t(r)
        try {
          WD(t, a, r, n)
        } catch (l) {
          _t(r, r.return, l)
        }
        Sn()
      }
      if (r === e) {
        fe = null
        return
      }
      var o = r.sibling
      if (o !== null) {
        ;(o.return = r.return), (fe = o)
        return
      }
      fe = r.return
    }
  }
  function r_(e) {
    for (; fe !== null; ) {
      var t = fe,
        n = t.child
      switch (t.tag) {
        case E:
        case me:
        case Ce:
        case ee: {
          if (t.mode & bt)
            try {
              pa(), Gr(ln, t, t.return)
            } finally {
              da(t)
            }
          else Gr(ln, t, t.return)
          break
        }
        case C: {
          yl(t, t.return)
          var r = t.stateNode
          typeof r.componentWillUnmount == 'function' && jh(t, t.return, r)
          break
        }
        case F: {
          yl(t, t.return)
          break
        }
        case ve: {
          var a = t.memoizedState !== null
          if (a) {
            p0(e)
            continue
          }
          break
        }
      }
      n !== null ? ((n.return = t), (fe = n)) : p0(e)
    }
  }
  function p0(e) {
    for (; fe !== null; ) {
      var t = fe
      if (t === e) {
        fe = null
        return
      }
      var n = t.sibling
      if (n !== null) {
        ;(n.return = t.return), (fe = n)
        return
      }
      fe = t.return
    }
  }
  function a_(e) {
    for (; fe !== null; ) {
      var t = fe,
        n = t.child
      if (t.tag === ve) {
        var r = t.memoizedState !== null
        if (r) {
          v0(e)
          continue
        }
      }
      n !== null ? ((n.return = t), (fe = n)) : v0(e)
    }
  }
  function v0(e) {
    for (; fe !== null; ) {
      var t = fe
      $t(t)
      try {
        GD(t)
      } catch (r) {
        _t(t, t.return, r)
      }
      if ((Sn(), t === e)) {
        fe = null
        return
      }
      var n = t.sibling
      if (n !== null) {
        ;(n.return = t.return), (fe = n)
        return
      }
      fe = t.return
    }
  }
  function i_(e, t, n, r) {
    ;(fe = t), o_(t, e, n, r)
  }
  function o_(e, t, n, r) {
    for (; fe !== null; ) {
      var a = fe,
        o = a.child
      ;(a.subtreeFlags & jo) !== we && o !== null
        ? ((o.return = a), (fe = o))
        : l_(e, t, n, r)
    }
  }
  function l_(e, t, n, r) {
    for (; fe !== null; ) {
      var a = fe
      if ((a.flags & jr) !== we) {
        $t(a)
        try {
          u_(t, a, n, r)
        } catch (l) {
          _t(a, a.return, l)
        }
        Sn()
      }
      if (a === e) {
        fe = null
        return
      }
      var o = a.sibling
      if (o !== null) {
        ;(o.return = a.return), (fe = o)
        return
      }
      fe = a.return
    }
  }
  function u_(e, t, n, r) {
    switch (t.tag) {
      case E:
      case me:
      case ee: {
        if (t.mode & bt) {
          yh()
          try {
            Ri(On | on, t)
          } finally {
            mh(t)
          }
        } else Ri(On | on, t)
        break
      }
    }
  }
  function s_(e) {
    ;(fe = e), c_()
  }
  function c_() {
    for (; fe !== null; ) {
      var e = fe,
        t = e.child
      if ((fe.flags & $i) !== we) {
        var n = e.deletions
        if (n !== null) {
          for (var r = 0; r < n.length; r++) {
            var a = n[r]
            ;(fe = a), p_(a, e)
          }
          {
            var o = e.alternate
            if (o !== null) {
              var l = o.child
              if (l !== null) {
                o.child = null
                do {
                  var s = l.sibling
                  ;(l.sibling = null), (l = s)
                } while (l !== null)
              }
            }
          }
          fe = e
        }
      }
      ;(e.subtreeFlags & jo) !== we && t !== null
        ? ((t.return = e), (fe = t))
        : f_()
    }
  }
  function f_() {
    for (; fe !== null; ) {
      var e = fe
      ;(e.flags & jr) !== we && ($t(e), d_(e), Sn())
      var t = e.sibling
      if (t !== null) {
        ;(t.return = e.return), (fe = t)
        return
      }
      fe = e.return
    }
  }
  function d_(e) {
    switch (e.tag) {
      case E:
      case me:
      case ee: {
        e.mode & bt
          ? (yh(), Gr(On | on, e, e.return), mh(e))
          : Gr(On | on, e, e.return)
        break
      }
    }
  }
  function p_(e, t) {
    for (; fe !== null; ) {
      var n = fe
      $t(n), h_(n, t), Sn()
      var r = n.child
      r !== null ? ((r.return = n), (fe = r)) : v_(e)
    }
  }
  function v_(e) {
    for (; fe !== null; ) {
      var t = fe,
        n = t.sibling,
        r = t.return
      if ((o0(t), t === e)) {
        fe = null
        return
      }
      if (n !== null) {
        ;(n.return = r), (fe = n)
        return
      }
      fe = r
    }
  }
  function h_(e, t) {
    switch (e.tag) {
      case E:
      case me:
      case ee: {
        e.mode & bt ? (yh(), Gr(On, e, t), mh(e)) : Gr(On, e, t)
        break
      }
    }
  }
  function m_(e) {
    switch (e.tag) {
      case E:
      case me:
      case ee: {
        try {
          Ri(ln | on, e)
        } catch (n) {
          _t(e, e.return, n)
        }
        break
      }
      case C: {
        var t = e.stateNode
        try {
          t.componentDidMount()
        } catch (n) {
          _t(e, e.return, n)
        }
        break
      }
    }
  }
  function y_(e) {
    switch (e.tag) {
      case E:
      case me:
      case ee: {
        try {
          Ri(On | on, e)
        } catch (t) {
          _t(e, e.return, t)
        }
        break
      }
    }
  }
  function g_(e) {
    switch (e.tag) {
      case E:
      case me:
      case ee: {
        try {
          Gr(ln | on, e, e.return)
        } catch (n) {
          _t(e, e.return, n)
        }
        break
      }
      case C: {
        var t = e.stateNode
        typeof t.componentWillUnmount == 'function' && jh(e, e.return, t)
        break
      }
    }
  }
  function b_(e) {
    switch (e.tag) {
      case E:
      case me:
      case ee:
        try {
          Gr(On | on, e, e.return)
        } catch (t) {
          _t(e, e.return, t)
        }
    }
  }
  if (typeof Symbol == 'function' && Symbol.for) {
    var is = Symbol.for
    is('selector.component'),
      is('selector.has_pseudo_class'),
      is('selector.role'),
      is('selector.test_id'),
      is('selector.text')
  }
  var S_ = []
  function E_() {
    S_.forEach(function (e) {
      return e()
    })
  }
  var C_ = c.ReactCurrentActQueue
  function R_(e) {
    {
      var t =
          typeof IS_REACT_ACT_ENVIRONMENT < 'u'
            ? IS_REACT_ACT_ENVIRONMENT
            : void 0,
        n = typeof jest < 'u'
      return n && t !== !1
    }
  }
  function h0() {
    {
      var e =
        typeof IS_REACT_ACT_ENVIRONMENT < 'u'
          ? IS_REACT_ACT_ENVIRONMENT
          : void 0
      return (
        !e &&
          C_.current !== null &&
          f(
            'The current testing environment is not configured to support act(...)'
          ),
        e
      )
    }
  }
  var x_ = Math.ceil,
    Ph = c.ReactCurrentDispatcher,
    Bh = c.ReactCurrentOwner,
    kn = c.ReactCurrentBatchConfig,
    Kr = c.ReactCurrentActQueue,
    cn = 0,
    m0 = 1,
    Un = 2,
    Ur = 4,
    Pa = 0,
    os = 1,
    so = 2,
    Lf = 3,
    ls = 4,
    y0 = 5,
    Vh = 6,
    et = cn,
    Zn = null,
    Pt = null,
    fn = Y,
    ha = Y,
    Yh = vi(Y),
    dn = Pa,
    us = null,
    Af = Y,
    ss = Y,
    kf = Y,
    cs = null,
    sr = null,
    Ih = 0,
    g0 = 500,
    b0 = 1 / 0,
    T_ = 500,
    Ba = null
  function fs() {
    b0 = En() + T_
  }
  function S0() {
    return b0
  }
  var Uf = !1,
    Wh = null,
    gl = null,
    co = !1,
    Ti = null,
    ds = Y,
    Gh = [],
    qh = null,
    N_ = 50,
    ps = 0,
    Qh = null,
    Kh = !1,
    Ff = !1,
    w_ = 50,
    bl = 0,
    jf = null,
    vs = Mt,
    Hf = Y,
    E0 = !1
  function zf() {
    return Zn
  }
  function er() {
    return (et & (Un | Ur)) !== cn ? En() : (vs !== Mt || (vs = En()), vs)
  }
  function Ni(e) {
    var t = e.mode
    if ((t & Ze) === De) return Ae
    if ((et & Un) !== cn && fn !== Y) return uu(fn)
    var n = R1() !== C1
    if (n) {
      if (kn.transition !== null) {
        var r = kn.transition
        r._updatedFibers || (r._updatedFibers = new Set()),
          r._updatedFibers.add(e)
      }
      return Hf === Rn && (Hf = tg()), Hf
    }
    var a = zr()
    if (a !== Rn) return a
    var o = lw()
    return o
  }
  function D_(e) {
    var t = e.mode
    return (t & Ze) === De ? Ae : Mx()
  }
  function pn(e, t, n, r) {
    J_(),
      E0 && f('useInsertionEffect must not schedule updates.'),
      Kh && (Ff = !0),
      su(e, n, r),
      (et & Un) !== Y && e === Zn
        ? tO(t)
        : (Hr && ag(e, t, n),
          nO(t),
          e === Zn &&
            ((et & Un) === cn && (ss = Ie(ss, n)), dn === ls && wi(e, fn)),
          cr(e, r),
          n === Ae &&
            et === cn &&
            (t.mode & Ze) === De &&
            !Kr.isBatchingLegacy &&
            (fs(), Sb()))
  }
  function __(e, t, n) {
    var r = e.current
    ;(r.lanes = t), su(e, t, n), cr(e, n)
  }
  function O_(e) {
    return (et & Un) !== cn
  }
  function cr(e, t) {
    var n = e.callbackNode
    Tx(e, t)
    var r = ic(e, e === Zn ? fn : Y)
    if (r === Y) {
      n !== null && j0(n), (e.callbackNode = null), (e.callbackPriority = Rn)
      return
    }
    var a = qi(r),
      o = e.callbackPriority
    if (o === a && !(Kr.current !== null && n !== rm)) {
      n == null &&
        o !== Ae &&
        f(
          'Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.'
        )
      return
    }
    n != null && j0(n)
    var l
    if (a === Ae)
      e.tag === hi
        ? (Kr.isBatchingLegacy !== null && (Kr.didScheduleLegacyUpdate = !0),
          i1(x0.bind(null, e)))
        : bb(x0.bind(null, e)),
        Kr.current !== null
          ? Kr.current.push(mi)
          : sw(function () {
              ;(et & (Un | Ur)) === cn && mi()
            }),
        (l = null)
    else {
      var s
      switch (lg(r)) {
        case br:
          s = tc
          break
        case La:
          s = Wd
          break
        case Aa:
          s = Ii
          break
        case uc:
          s = Gd
          break
        default:
          s = Ii
          break
      }
      l = am(s, C0.bind(null, e))
    }
    ;(e.callbackPriority = a), (e.callbackNode = l)
  }
  function C0(e, t) {
    if ((J1(), (vs = Mt), (Hf = Y), (et & (Un | Ur)) !== cn))
      throw new Error('Should not already be working.')
    var n = e.callbackNode,
      r = Ya()
    if (r && e.callbackNode !== n) return null
    var a = ic(e, e === Zn ? fn : Y)
    if (a === Y) return null
    var o = !oc(e, a) && !Ox(e, a) && !t,
      l = o ? $_(e, a) : Pf(e, a)
    if (l !== Pa) {
      if (l === so) {
        var s = hp(e)
        s !== Y && ((a = s), (l = Xh(e, s)))
      }
      if (l === os) {
        var p = us
        throw (fo(e, Y), wi(e, a), cr(e, En()), p)
      }
      if (l === Vh) wi(e, a)
      else {
        var m = !oc(e, a),
          g = e.current.alternate
        if (m && !L_(g)) {
          if (((l = Pf(e, a)), l === so)) {
            var N = hp(e)
            N !== Y && ((a = N), (l = Xh(e, N)))
          }
          if (l === os) {
            var T = us
            throw (fo(e, Y), wi(e, a), cr(e, En()), T)
          }
        }
        ;(e.finishedWork = g), (e.finishedLanes = a), M_(e, l, a)
      }
    }
    return cr(e, En()), e.callbackNode === n ? C0.bind(null, e) : null
  }
  function Xh(e, t) {
    var n = cs
    if (sc(e)) {
      var r = fo(e, t)
      ;(r.flags |= wa), Jw(e.containerInfo)
    }
    var a = Pf(e, t)
    if (a !== so) {
      var o = sr
      ;(sr = n), o !== null && R0(o)
    }
    return a
  }
  function R0(e) {
    sr === null ? (sr = e) : sr.push.apply(sr, e)
  }
  function M_(e, t, n) {
    switch (t) {
      case Pa:
      case os:
        throw new Error('Root did not complete. This is a bug in React.')
      case so: {
        po(e, sr, Ba)
        break
      }
      case Lf: {
        if ((wi(e, n), Zy(n) && !H0())) {
          var r = Ih + g0 - En()
          if (r > 10) {
            var a = ic(e, Y)
            if (a !== Y) break
            var o = e.suspendedLanes
            if (!Vo(o, n)) {
              er(), rg(e, o)
              break
            }
            e.timeoutHandle = qp(po.bind(null, e, sr, Ba), r)
            break
          }
        }
        po(e, sr, Ba)
        break
      }
      case ls: {
        if ((wi(e, n), _x(n))) break
        if (!H0()) {
          var l = Rx(e, n),
            s = l,
            p = En() - s,
            m = X_(p) - p
          if (m > 10) {
            e.timeoutHandle = qp(po.bind(null, e, sr, Ba), m)
            break
          }
        }
        po(e, sr, Ba)
        break
      }
      case y0: {
        po(e, sr, Ba)
        break
      }
      default:
        throw new Error('Unknown root exit status.')
    }
  }
  function L_(e) {
    for (var t = e; ; ) {
      if (t.flags & Zs) {
        var n = t.updateQueue
        if (n !== null) {
          var r = n.stores
          if (r !== null)
            for (var a = 0; a < r.length; a++) {
              var o = r[a],
                l = o.getSnapshot,
                s = o.value
              try {
                if (!Er(l(), s)) return !1
              } catch {
                return !1
              }
            }
        }
      }
      var p = t.child
      if (t.subtreeFlags & Zs && p !== null) {
        ;(p.return = t), (t = p)
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
  function wi(e, t) {
    ;(t = lc(t, kf)), (t = lc(t, ss)), Ax(e, t)
  }
  function x0(e) {
    if ((Z1(), (et & (Un | Ur)) !== cn))
      throw new Error('Should not already be working.')
    Ya()
    var t = ic(e, Y)
    if (!gr(t, Ae)) return cr(e, En()), null
    var n = Pf(e, t)
    if (e.tag !== hi && n === so) {
      var r = hp(e)
      r !== Y && ((t = r), (n = Xh(e, r)))
    }
    if (n === os) {
      var a = us
      throw (fo(e, Y), wi(e, t), cr(e, En()), a)
    }
    if (n === Vh)
      throw new Error('Root did not complete. This is a bug in React.')
    var o = e.current.alternate
    return (
      (e.finishedWork = o),
      (e.finishedLanes = t),
      po(e, sr, Ba),
      cr(e, En()),
      null
    )
  }
  function A_(e, t) {
    t !== Y &&
      (bp(e, Ie(t, Ae)), cr(e, En()), (et & (Un | Ur)) === cn && (fs(), mi()))
  }
  function Jh(e, t) {
    var n = et
    et |= m0
    try {
      return e(t)
    } finally {
      ;(et = n), et === cn && !Kr.isBatchingLegacy && (fs(), Sb())
    }
  }
  function k_(e, t, n, r, a) {
    var o = zr(),
      l = kn.transition
    try {
      return (kn.transition = null), xn(br), e(t, n, r, a)
    } finally {
      xn(o), (kn.transition = l), et === cn && fs()
    }
  }
  function Va(e) {
    Ti !== null && Ti.tag === hi && (et & (Un | Ur)) === cn && Ya()
    var t = et
    et |= m0
    var n = kn.transition,
      r = zr()
    try {
      return (kn.transition = null), xn(br), e ? e() : void 0
    } finally {
      xn(r), (kn.transition = n), (et = t), (et & (Un | Ur)) === cn && mi()
    }
  }
  function T0() {
    return (et & (Un | Ur)) !== cn
  }
  function $f(e, t) {
    Yn(Yh, ha, e), (ha = Ie(ha, t))
  }
  function Zh(e) {
    ;(ha = Yh.current), Vn(Yh, e)
  }
  function fo(e, t) {
    ;(e.finishedWork = null), (e.finishedLanes = Y)
    var n = e.timeoutHandle
    if ((n !== Qp && ((e.timeoutHandle = Qp), uw(n)), Pt !== null))
      for (var r = Pt.return; r !== null; ) {
        var a = r.alternate
        e0(a, r), (r = r.return)
      }
    Zn = e
    var o = vo(e.current, null)
    return (
      (Pt = o),
      (fn = ha = t),
      (dn = Pa),
      (us = null),
      (Af = Y),
      (ss = Y),
      (kf = Y),
      (cs = null),
      (sr = null),
      w1(),
      Br.discardPendingWarnings(),
      o
    )
  }
  function N0(e, t) {
    do {
      var n = Pt
      try {
        if (
          (Gc(),
          nS(),
          Sn(),
          (Bh.current = null),
          n === null || n.return === null)
        ) {
          ;(dn = os), (us = t), (Pt = null)
          return
        }
        if ((dr && n.mode & bt && Nf(n, !0), wr))
          if (
            (zo(),
            t !== null && typeof t == 'object' && typeof t.then == 'function')
          ) {
            var r = t
            fx(n, r, fn)
          } else cx(n, t, fn)
        aD(e, n.return, n, t, fn), O0(n)
      } catch (a) {
        ;(t = a), Pt === n && n !== null ? ((n = n.return), (Pt = n)) : (n = Pt)
        continue
      }
      return
    } while (!0)
  }
  function w0() {
    var e = Ph.current
    return (Ph.current = Ef), e === null ? Ef : e
  }
  function D0(e) {
    Ph.current = e
  }
  function U_() {
    Ih = En()
  }
  function hs(e) {
    Af = Ie(e, Af)
  }
  function F_() {
    dn === Pa && (dn = Lf)
  }
  function em() {
    ;(dn === Pa || dn === Lf || dn === so) && (dn = ls),
      Zn !== null && (mp(Af) || mp(ss)) && wi(Zn, fn)
  }
  function j_(e) {
    dn !== ls && (dn = so), cs === null ? (cs = [e]) : cs.push(e)
  }
  function H_() {
    return dn === Pa
  }
  function Pf(e, t) {
    var n = et
    et |= Un
    var r = w0()
    if (Zn !== e || fn !== t) {
      if (Hr) {
        var a = e.memoizedUpdaters
        a.size > 0 && (ms(e, fn), a.clear()), ig(e, t)
      }
      ;(Ba = og()), fo(e, t)
    }
    qy(t)
    do
      try {
        z_()
        break
      } catch (o) {
        N0(e, o)
      }
    while (!0)
    if ((Gc(), (et = n), D0(r), Pt !== null))
      throw new Error(
        'Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.'
      )
    return Qy(), (Zn = null), (fn = Y), dn
  }
  function z_() {
    for (; Pt !== null; ) _0(Pt)
  }
  function $_(e, t) {
    var n = et
    et |= Un
    var r = w0()
    if (Zn !== e || fn !== t) {
      if (Hr) {
        var a = e.memoizedUpdaters
        a.size > 0 && (ms(e, fn), a.clear()), ig(e, t)
      }
      ;(Ba = og()), fs(), fo(e, t)
    }
    qy(t)
    do
      try {
        P_()
        break
      } catch (o) {
        N0(e, o)
      }
    while (!0)
    return (
      Gc(),
      D0(r),
      (et = n),
      Pt !== null ? (mx(), Pa) : (Qy(), (Zn = null), (fn = Y), dn)
    )
  }
  function P_() {
    for (; Pt !== null && !YR(); ) _0(Pt)
  }
  function _0(e) {
    var t = e.alternate
    $t(e)
    var n
    ;(e.mode & bt) !== De
      ? (hh(e), (n = tm(t, e, ha)), Nf(e, !0))
      : (n = tm(t, e, ha)),
      Sn(),
      (e.memoizedProps = e.pendingProps),
      n === null ? O0(e) : (Pt = n),
      (Bh.current = null)
  }
  function O0(e) {
    var t = e
    do {
      var n = t.alternate,
        r = t.return
      if ((t.flags & eu) === we) {
        $t(t)
        var a = void 0
        if (
          ((t.mode & bt) === De
            ? (a = ZS(n, t, ha))
            : (hh(t), (a = ZS(n, t, ha)), Nf(t, !1)),
          Sn(),
          a !== null)
        ) {
          Pt = a
          return
        }
      } else {
        var o = FD(n, t)
        if (o !== null) {
          ;(o.flags &= HR), (Pt = o)
          return
        }
        if ((t.mode & bt) !== De) {
          Nf(t, !1)
          for (var l = t.actualDuration, s = t.child; s !== null; )
            (l += s.actualDuration), (s = s.sibling)
          t.actualDuration = l
        }
        if (r !== null)
          (r.flags |= eu), (r.subtreeFlags = we), (r.deletions = null)
        else {
          ;(dn = Vh), (Pt = null)
          return
        }
      }
      var p = t.sibling
      if (p !== null) {
        Pt = p
        return
      }
      ;(t = r), (Pt = t)
    } while (t !== null)
    dn === Pa && (dn = y0)
  }
  function po(e, t, n) {
    var r = zr(),
      a = kn.transition
    try {
      ;(kn.transition = null), xn(br), B_(e, t, n, r)
    } finally {
      ;(kn.transition = a), xn(r)
    }
    return null
  }
  function B_(e, t, n, r) {
    do Ya()
    while (Ti !== null)
    if ((Z_(), (et & (Un | Ur)) !== cn))
      throw new Error('Should not already be working.')
    var a = e.finishedWork,
      o = e.finishedLanes
    if ((rx(o), a === null)) return Iy(), null
    if (
      (o === Y &&
        f(
          'root.finishedLanes should not be empty during a commit. This is a bug in React.'
        ),
      (e.finishedWork = null),
      (e.finishedLanes = Y),
      a === e.current)
    )
      throw new Error(
        'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.'
      )
    ;(e.callbackNode = null), (e.callbackPriority = Rn)
    var l = Ie(a.lanes, a.childLanes)
    kx(e, l),
      e === Zn && ((Zn = null), (Pt = null), (fn = Y)),
      ((a.subtreeFlags & jo) !== we || (a.flags & jo) !== we) &&
        (co ||
          ((co = !0),
          (qh = n),
          am(Ii, function () {
            return Ya(), null
          })))
    var s = (a.subtreeFlags & (Yd | Id | tu | jo)) !== we,
      p = (a.flags & (Yd | Id | tu | jo)) !== we
    if (s || p) {
      var m = kn.transition
      kn.transition = null
      var g = zr()
      xn(br)
      var N = et
      ;(et |= Ur),
        (Bh.current = null),
        PD(e, a),
        wS(),
        t_(e, a, o),
        tw(e.containerInfo),
        (e.current = a),
        dx(o),
        n_(a, e, o),
        px(),
        IR(),
        (et = N),
        xn(g),
        (kn.transition = m)
    } else (e.current = a), wS()
    var T = co
    if (
      (co ? ((co = !1), (Ti = e), (ds = o)) : ((bl = 0), (jf = null)),
      (l = e.pendingLanes),
      l === Y && (gl = null),
      T || k0(e.current, !1),
      JR(a.stateNode, r),
      Hr && e.memoizedUpdaters.clear(),
      E_(),
      cr(e, En()),
      t !== null)
    )
      for (var A = e.onRecoverableError, k = 0; k < t.length; k++) {
        var H = t[k],
          ue = H.stack,
          Se = H.digest
        A(H.value, { componentStack: ue, digest: Se })
      }
    if (Uf) {
      Uf = !1
      var ye = Wh
      throw ((Wh = null), ye)
    }
    return (
      gr(ds, Ae) && e.tag !== hi && Ya(),
      (l = e.pendingLanes),
      gr(l, Ae) ? (X1(), e === Qh ? ps++ : ((ps = 0), (Qh = e))) : (ps = 0),
      mi(),
      Iy(),
      null
    )
  }
  function Ya() {
    if (Ti !== null) {
      var e = lg(ds),
        t = Hx(Aa, e),
        n = kn.transition,
        r = zr()
      try {
        return (kn.transition = null), xn(t), Y_()
      } finally {
        xn(r), (kn.transition = n)
      }
    }
    return !1
  }
  function V_(e) {
    Gh.push(e),
      co ||
        ((co = !0),
        am(Ii, function () {
          return Ya(), null
        }))
  }
  function Y_() {
    if (Ti === null) return !1
    var e = qh
    qh = null
    var t = Ti,
      n = ds
    if (((Ti = null), (ds = Y), (et & (Un | Ur)) !== cn))
      throw new Error('Cannot flush passive effects while already rendering.')
    ;(Kh = !0), (Ff = !1), vx(n)
    var r = et
    ;(et |= Ur), s_(t.current), i_(t, t.current, n, e)
    {
      var a = Gh
      Gh = []
      for (var o = 0; o < a.length; o++) {
        var l = a[o]
        ID(t, l)
      }
    }
    hx(),
      k0(t.current, !0),
      (et = r),
      mi(),
      Ff ? (t === jf ? bl++ : ((bl = 0), (jf = t))) : (bl = 0),
      (Kh = !1),
      (Ff = !1),
      ZR(t)
    {
      var s = t.current.stateNode
      ;(s.effectDuration = 0), (s.passiveEffectDuration = 0)
    }
    return !0
  }
  function M0(e) {
    return gl !== null && gl.has(e)
  }
  function I_(e) {
    gl === null ? (gl = new Set([e])) : gl.add(e)
  }
  function W_(e) {
    Uf || ((Uf = !0), (Wh = e))
  }
  var G_ = W_
  function L0(e, t, n) {
    var r = lo(n, t),
      a = _S(e, r, Ae),
      o = gi(e, a, Ae),
      l = er()
    o !== null && (su(o, Ae, l), cr(o, l))
  }
  function _t(e, t, n) {
    if ((HD(n), ys(!1), e.tag === L)) {
      L0(e, e, n)
      return
    }
    var r = null
    for (r = t; r !== null; ) {
      if (r.tag === L) {
        L0(r, e, n)
        return
      } else if (r.tag === C) {
        var a = r.type,
          o = r.stateNode
        if (
          typeof a.getDerivedStateFromError == 'function' ||
          (typeof o.componentDidCatch == 'function' && !M0(o))
        ) {
          var l = lo(n, e),
            s = Eh(r, l, Ae),
            p = gi(r, s, Ae),
            m = er()
          p !== null && (su(p, Ae, m), cr(p, m))
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
  function q_(e, t, n) {
    var r = e.pingCache
    r !== null && r.delete(t)
    var a = er()
    rg(e, n),
      rO(e),
      Zn === e &&
        Vo(fn, n) &&
        (dn === ls || (dn === Lf && Zy(fn) && En() - Ih < g0)
          ? fo(e, Y)
          : (kf = Ie(kf, n))),
      cr(e, a)
  }
  function A0(e, t) {
    t === Rn && (t = D_(e))
    var n = er(),
      r = lr(e, t)
    r !== null && (su(r, t, n), cr(r, n))
  }
  function Q_(e) {
    var t = e.memoizedState,
      n = Rn
    t !== null && (n = t.retryLane), A0(e, n)
  }
  function K_(e, t) {
    var n = Rn,
      r
    switch (e.tag) {
      case K:
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
    r !== null && r.delete(t), A0(e, n)
  }
  function X_(e) {
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
      : x_(e / 1960) * 1960
  }
  function J_() {
    if (ps > N_)
      throw (
        ((ps = 0),
        (Qh = null),
        new Error(
          'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.'
        ))
      )
    bl > w_ &&
      ((bl = 0),
      (jf = null),
      f(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      ))
  }
  function Z_() {
    Br.flushLegacyContextWarning(), Br.flushPendingUnsafeLifecycleWarnings()
  }
  function k0(e, t) {
    $t(e),
      Bf(e, _a, g_),
      t && Bf(e, ec, b_),
      Bf(e, _a, m_),
      t && Bf(e, ec, y_),
      Sn()
  }
  function Bf(e, t, n) {
    for (var r = e, a = null; r !== null; ) {
      var o = r.subtreeFlags & t
      r !== a && r.child !== null && o !== we
        ? (r = r.child)
        : ((r.flags & t) !== we && n(r),
          r.sibling !== null ? (r = r.sibling) : (r = a = r.return))
    }
  }
  var Vf = null
  function U0(e) {
    {
      if ((et & Un) !== cn || !(e.mode & Ze)) return
      var t = e.tag
      if (
        t !== R &&
        t !== L &&
        t !== C &&
        t !== E &&
        t !== me &&
        t !== Ce &&
        t !== ee
      )
        return
      var n = Pe(e) || 'ReactComponent'
      if (Vf !== null) {
        if (Vf.has(n)) return
        Vf.add(n)
      } else Vf = new Set([n])
      var r = Pn
      try {
        $t(e),
          f(
            "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
          )
      } finally {
        r ? $t(e) : Sn()
      }
    }
  }
  var tm
  {
    var eO = null
    tm = function (e, t, n) {
      var r = V0(eO, t)
      try {
        return qS(e, t, n)
      } catch (o) {
        if (
          p1() ||
          (o !== null && typeof o == 'object' && typeof o.then == 'function')
        )
          throw o
        if (
          (Gc(),
          nS(),
          e0(e, t),
          V0(t, r),
          t.mode & bt && hh(t),
          Hd(null, qS, null, e, t, n),
          kR())
        ) {
          var a = zd()
          typeof a == 'object' &&
            a !== null &&
            a._suppressLogging &&
            typeof o == 'object' &&
            o !== null &&
            !o._suppressLogging &&
            (o._suppressLogging = !0)
        }
        throw o
      }
    }
  }
  var F0 = !1,
    nm
  nm = new Set()
  function tO(e) {
    if (ji && !q1())
      switch (e.tag) {
        case E:
        case me:
        case ee: {
          var t = (Pt && Pe(Pt)) || 'Unknown',
            n = t
          if (!nm.has(n)) {
            nm.add(n)
            var r = Pe(e) || 'Unknown'
            f(
              'Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render',
              r,
              t,
              t
            )
          }
          break
        }
        case C: {
          F0 ||
            (f(
              'Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.'
            ),
            (F0 = !0))
          break
        }
      }
  }
  function ms(e, t) {
    if (Hr) {
      var n = e.memoizedUpdaters
      n.forEach(function (r) {
        ag(e, r, t)
      })
    }
  }
  var rm = {}
  function am(e, t) {
    {
      var n = Kr.current
      return n !== null ? (n.push(t), rm) : Yy(e, t)
    }
  }
  function j0(e) {
    if (e !== rm) return VR(e)
  }
  function H0() {
    return Kr.current !== null
  }
  function nO(e) {
    {
      if (e.mode & Ze) {
        if (!h0()) return
      } else if (
        !R_() ||
        et !== cn ||
        (e.tag !== E && e.tag !== me && e.tag !== ee)
      )
        return
      if (Kr.current === null) {
        var t = Pn
        try {
          $t(e),
            f(
              `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,
              Pe(e)
            )
        } finally {
          t ? $t(e) : Sn()
        }
      }
    }
  }
  function rO(e) {
    e.tag !== hi &&
      h0() &&
      Kr.current === null &&
      f(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`)
  }
  function ys(e) {
    E0 = e
  }
  var Fr = null,
    Sl = null,
    aO = function (e) {
      Fr = e
    }
  function El(e) {
    {
      if (Fr === null) return e
      var t = Fr(e)
      return t === void 0 ? e : t.current
    }
  }
  function im(e) {
    return El(e)
  }
  function om(e) {
    {
      if (Fr === null) return e
      var t = Fr(e)
      if (t === void 0) {
        if (e != null && typeof e.render == 'function') {
          var n = El(e.render)
          if (e.render !== n) {
            var r = { $$typeof: be, render: n }
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
  function z0(e, t) {
    {
      if (Fr === null) return !1
      var n = e.elementType,
        r = t.type,
        a = !1,
        o = typeof r == 'object' && r !== null ? r.$$typeof : null
      switch (e.tag) {
        case C: {
          typeof r == 'function' && (a = !0)
          break
        }
        case E: {
          ;(typeof r == 'function' || o === Ke) && (a = !0)
          break
        }
        case me: {
          ;(o === be || o === Ke) && (a = !0)
          break
        }
        case Ce:
        case ee: {
          ;(o === Ct || o === Ke) && (a = !0)
          break
        }
        default:
          return !1
      }
      if (a) {
        var l = Fr(n)
        if (l !== void 0 && l === Fr(r)) return !0
      }
      return !1
    }
  }
  function $0(e) {
    {
      if (Fr === null || typeof WeakSet != 'function') return
      Sl === null && (Sl = new WeakSet()), Sl.add(e)
    }
  }
  var iO = function (e, t) {
      {
        if (Fr === null) return
        var n = t.staleFamilies,
          r = t.updatedFamilies
        Ya(),
          Va(function () {
            lm(e.current, r, n)
          })
      }
    },
    oO = function (e, t) {
      {
        if (e.context !== Cr) return
        Ya(),
          Va(function () {
            gs(t, e, null, null)
          })
      }
    }
  function lm(e, t, n) {
    {
      var r = e.alternate,
        a = e.child,
        o = e.sibling,
        l = e.tag,
        s = e.type,
        p = null
      switch (l) {
        case E:
        case ee:
        case C:
          p = s
          break
        case me:
          p = s.render
          break
      }
      if (Fr === null)
        throw new Error('Expected resolveFamily to be set during hot reload.')
      var m = !1,
        g = !1
      if (p !== null) {
        var N = Fr(p)
        N !== void 0 &&
          (n.has(N) ? (g = !0) : t.has(N) && (l === C ? (g = !0) : (m = !0)))
      }
      if (
        (Sl !== null && (Sl.has(e) || (r !== null && Sl.has(r))) && (g = !0),
        g && (e._debugNeedsRemount = !0),
        g || m)
      ) {
        var T = lr(e, Ae)
        T !== null && pn(T, e, Ae, Mt)
      }
      a !== null && !g && lm(a, t, n), o !== null && lm(o, t, n)
    }
  }
  var lO = function (e, t) {
    {
      var n = new Set(),
        r = new Set(
          t.map(function (a) {
            return a.current
          })
        )
      return um(e.current, r, n), n
    }
  }
  function um(e, t, n) {
    {
      var r = e.child,
        a = e.sibling,
        o = e.tag,
        l = e.type,
        s = null
      switch (o) {
        case E:
        case ee:
        case C:
          s = l
          break
        case me:
          s = l.render
          break
      }
      var p = !1
      s !== null && t.has(s) && (p = !0),
        p ? uO(e, n) : r !== null && um(r, t, n),
        a !== null && um(a, t, n)
    }
  }
  function uO(e, t) {
    {
      var n = sO(e, t)
      if (n) return
      for (var r = e; ; ) {
        switch (r.tag) {
          case F:
            t.add(r.stateNode)
            return
          case V:
            t.add(r.stateNode.containerInfo)
            return
          case L:
            t.add(r.stateNode.containerInfo)
            return
        }
        if (r.return === null) throw new Error('Expected to reach root first.')
        r = r.return
      }
    }
  }
  function sO(e, t) {
    for (var n = e, r = !1; ; ) {
      if (n.tag === F) (r = !0), t.add(n.stateNode)
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
  var sm
  {
    sm = !1
    try {
      var P0 = Object.preventExtensions({})
    } catch {
      sm = !0
    }
  }
  function cO(e, t, n, r) {
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
      (this.flags = we),
      (this.subtreeFlags = we),
      (this.deletions = null),
      (this.lanes = Y),
      (this.childLanes = Y),
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
      !sm &&
        typeof Object.preventExtensions == 'function' &&
        Object.preventExtensions(this)
  }
  var Rr = function (e, t, n, r) {
    return new cO(e, t, n, r)
  }
  function cm(e) {
    var t = e.prototype
    return !!(t && t.isReactComponent)
  }
  function fO(e) {
    return typeof e == 'function' && !cm(e) && e.defaultProps === void 0
  }
  function dO(e) {
    if (typeof e == 'function') return cm(e) ? C : E
    if (e != null) {
      var t = e.$$typeof
      if (t === be) return me
      if (t === Ct) return Ce
    }
    return R
  }
  function vo(e, t) {
    var n = e.alternate
    n === null
      ? ((n = Rr(e.tag, t, e.key, e.mode)),
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
        (n.flags = we),
        (n.subtreeFlags = we),
        (n.deletions = null),
        (n.actualDuration = 0),
        (n.actualStartTime = -1)),
      (n.flags = e.flags & Oa),
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
      case R:
      case E:
      case ee:
        n.type = El(e.type)
        break
      case C:
        n.type = im(e.type)
        break
      case me:
        n.type = om(e.type)
        break
    }
    return n
  }
  function pO(e, t) {
    e.flags &= Oa | en
    var n = e.alternate
    if (n === null)
      (e.childLanes = Y),
        (e.lanes = t),
        (e.child = null),
        (e.subtreeFlags = we),
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
        (e.subtreeFlags = we),
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
  function vO(e, t, n) {
    var r
    return (
      e === zc ? ((r = Ze), t === !0 && ((r |= tn), (r |= ia))) : (r = De),
      Hr && (r |= bt),
      Rr(L, null, null, r)
    )
  }
  function fm(e, t, n, r, a, o) {
    var l = R,
      s = e
    if (typeof e == 'function') cm(e) ? ((l = C), (s = im(s))) : (s = El(s))
    else if (typeof e == 'string') l = F
    else {
      e: switch (e) {
        case I:
          return Di(n.children, a, o, t)
        case ne:
          ;(l = ge), (a |= tn), (a & Ze) !== De && (a |= ia)
          break
        case Ne:
          return hO(n, a, o, t)
        case Ve:
          return mO(n, a, o, t)
        case Vt:
          return yO(n, a, o, t)
        case ki:
          return B0(n, a, o, t)
        case hr:
        case $n:
        case vd:
        case hd:
        case na:
        default: {
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Qe:
                l = Z
                break e
              case ct:
                l = oe
                break e
              case be:
                ;(l = me), (s = om(s))
                break e
              case Ct:
                l = Ce
                break e
              case Ke:
                ;(l = lt), (s = null)
                break e
            }
          var p = ''
          {
            ;(e === void 0 ||
              (typeof e == 'object' &&
                e !== null &&
                Object.keys(e).length === 0)) &&
              (p +=
                " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.")
            var m = r ? Pe(r) : null
            m &&
              (p +=
                `

Check the render method of \`` +
                m +
                '`.')
          }
          throw new Error(
            'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) ' +
              ('but got: ' + (e == null ? e : typeof e) + '.' + p)
          )
        }
      }
    }
    var g = Rr(l, n, t, a)
    return (
      (g.elementType = e), (g.type = s), (g.lanes = o), (g._debugOwner = r), g
    )
  }
  function dm(e, t, n) {
    var r = null
    r = e._owner
    var a = e.type,
      o = e.key,
      l = e.props,
      s = fm(a, o, l, r, t, n)
    return (s._debugSource = e._source), (s._debugOwner = e._owner), s
  }
  function Di(e, t, n, r) {
    var a = Rr(_, e, r, t)
    return (a.lanes = n), a
  }
  function hO(e, t, n, r) {
    typeof e.id != 'string' &&
      f(
        'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
        typeof e.id
      )
    var a = Rr(Ee, e, r, t | bt)
    return (
      (a.elementType = Ne),
      (a.lanes = n),
      (a.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
      a
    )
  }
  function mO(e, t, n, r) {
    var a = Rr(K, e, r, t)
    return (a.elementType = Ve), (a.lanes = n), a
  }
  function yO(e, t, n, r) {
    var a = Rr(Te, e, r, t)
    return (a.elementType = Vt), (a.lanes = n), a
  }
  function B0(e, t, n, r) {
    var a = Rr(ve, e, r, t)
    ;(a.elementType = ki), (a.lanes = n)
    var o = { isHidden: !1 }
    return (a.stateNode = o), a
  }
  function pm(e, t, n) {
    var r = Rr($, e, null, t)
    return (r.lanes = n), r
  }
  function gO() {
    var e = Rr(F, null, null, De)
    return (e.elementType = 'DELETED'), e
  }
  function bO(e) {
    var t = Rr(Re, null, null, De)
    return (t.stateNode = e), t
  }
  function vm(e, t, n) {
    var r = e.children !== null ? e.children : [],
      a = Rr(V, r, e.key, t)
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
  function V0(e, t) {
    return (
      e === null && (e = Rr(R, null, null, De)),
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
  function SO(e, t, n, r, a) {
    ;(this.tag = t),
      (this.containerInfo = e),
      (this.pendingChildren = null),
      (this.current = null),
      (this.pingCache = null),
      (this.finishedWork = null),
      (this.timeoutHandle = Qp),
      (this.context = null),
      (this.pendingContext = null),
      (this.callbackNode = null),
      (this.callbackPriority = Rn),
      (this.eventTimes = gp(Y)),
      (this.expirationTimes = gp(Mt)),
      (this.pendingLanes = Y),
      (this.suspendedLanes = Y),
      (this.pingedLanes = Y),
      (this.expiredLanes = Y),
      (this.mutableReadLanes = Y),
      (this.finishedLanes = Y),
      (this.entangledLanes = Y),
      (this.entanglements = gp(Y)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null),
      (this.effectDuration = 0),
      (this.passiveEffectDuration = 0)
    {
      this.memoizedUpdaters = new Set()
      for (var o = (this.pendingUpdatersLaneMap = []), l = 0; l < Qd; l++)
        o.push(new Set())
    }
    switch (t) {
      case zc:
        this._debugRootType = n ? 'hydrateRoot()' : 'createRoot()'
        break
      case hi:
        this._debugRootType = n ? 'hydrate()' : 'render()'
        break
    }
  }
  function Y0(e, t, n, r, a, o, l, s, p, m) {
    var g = new SO(e, t, n, s, p),
      N = vO(t, o)
    ;(g.current = N), (N.stateNode = g)
    {
      var T = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }
      N.memoizedState = T
    }
    return Cv(N), g
  }
  var hm = '18.2.0'
  function EO(e, t, n) {
    var r =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null
    return (
      Qn(r),
      {
        $$typeof: S,
        key: r == null ? null : '' + r,
        children: e,
        containerInfo: t,
        implementation: n,
      }
    )
  }
  var mm, ym
  ;(mm = !1), (ym = {})
  function I0(e) {
    if (!e) return Cr
    var t = Uo(e),
      n = a1(t)
    if (t.tag === C) {
      var r = t.type
      if (ua(r)) return yb(t, r, n)
    }
    return n
  }
  function CO(e, t) {
    {
      var n = Uo(e)
      if (n === void 0) {
        if (typeof e.render == 'function')
          throw new Error('Unable to find node on an unmounted component.')
        var r = Object.keys(e).join(',')
        throw new Error(
          'Argument appears to not be a ReactComponent. Keys: ' + r
        )
      }
      var a = Py(n)
      if (a === null) return null
      if (a.mode & tn) {
        var o = Pe(n) || 'Component'
        if (!ym[o]) {
          ym[o] = !0
          var l = Pn
          try {
            $t(a),
              n.mode & tn
                ? f(
                    '%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node',
                    t,
                    t,
                    o
                  )
                : f(
                    '%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node',
                    t,
                    t,
                    o
                  )
          } finally {
            l ? $t(l) : Sn()
          }
        }
      }
      return a.stateNode
    }
  }
  function W0(e, t, n, r, a, o, l, s) {
    var p = !1,
      m = null
    return Y0(e, t, p, m, n, r, a, o, l)
  }
  function G0(e, t, n, r, a, o, l, s, p, m) {
    var g = !0,
      N = Y0(n, r, g, e, a, o, l, s, p)
    N.context = I0(null)
    var T = N.current,
      A = er(),
      k = Ni(T),
      H = za(A, k)
    return (H.callback = t != null ? t : null), gi(T, H, k), __(N, k, A), N
  }
  function gs(e, t, n, r) {
    XR(t, e)
    var a = t.current,
      o = er(),
      l = Ni(a)
    yx(l)
    var s = I0(n)
    t.context === null ? (t.context = s) : (t.pendingContext = s),
      ji &&
        Pn !== null &&
        !mm &&
        ((mm = !0),
        f(
          `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
          Pe(Pn) || 'Unknown'
        ))
    var p = za(o, l)
    ;(p.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null &&
        (typeof r != 'function' &&
          f(
            'render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
            r
          ),
        (p.callback = r))
    var m = gi(a, p, l)
    return m !== null && (pn(m, a, l, o), Jc(m, a, l)), l
  }
  function Yf(e) {
    var t = e.current
    if (!t.child) return null
    switch (t.child.tag) {
      case F:
        return t.child.stateNode
      default:
        return t.child.stateNode
    }
  }
  function RO(e) {
    switch (e.tag) {
      case L: {
        var t = e.stateNode
        if (sc(t)) {
          var n = Nx(t)
          A_(t, n)
        }
        break
      }
      case K: {
        Va(function () {
          var a = lr(e, Ae)
          if (a !== null) {
            var o = er()
            pn(a, e, Ae, o)
          }
        })
        var r = Ae
        gm(e, r)
        break
      }
    }
  }
  function q0(e, t) {
    var n = e.memoizedState
    n !== null && n.dehydrated !== null && (n.retryLane = Lx(n.retryLane, t))
  }
  function gm(e, t) {
    q0(e, t)
    var n = e.alternate
    n && q0(n, t)
  }
  function xO(e) {
    if (e.tag === K) {
      var t = iu,
        n = lr(e, t)
      if (n !== null) {
        var r = er()
        pn(n, e, t, r)
      }
      gm(e, t)
    }
  }
  function TO(e) {
    if (e.tag === K) {
      var t = Ni(e),
        n = lr(e, t)
      if (n !== null) {
        var r = er()
        pn(n, e, t, r)
      }
      gm(e, t)
    }
  }
  function Q0(e) {
    var t = BR(e)
    return t === null ? null : t.stateNode
  }
  var K0 = function (e) {
    return null
  }
  function NO(e) {
    return K0(e)
  }
  var X0 = function (e) {
    return !1
  }
  function wO(e) {
    return X0(e)
  }
  var J0 = null,
    Z0 = null,
    eE = null,
    tE = null,
    nE = null,
    rE = null,
    aE = null,
    iE = null,
    oE = null
  {
    var lE = function (e, t, n) {
        var r = t[n],
          a = dt(e) ? e.slice() : Xe({}, e)
        return n + 1 === t.length
          ? (dt(a) ? a.splice(r, 1) : delete a[r], a)
          : ((a[r] = lE(e[r], t, n + 1)), a)
      },
      uE = function (e, t) {
        return lE(e, t, 0)
      },
      sE = function (e, t, n, r) {
        var a = t[r],
          o = dt(e) ? e.slice() : Xe({}, e)
        if (r + 1 === t.length) {
          var l = n[r]
          ;(o[l] = o[a]), dt(o) ? o.splice(a, 1) : delete o[a]
        } else o[a] = sE(e[a], t, n, r + 1)
        return o
      },
      cE = function (e, t, n) {
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
        return sE(e, t, n, 0)
      },
      fE = function (e, t, n, r) {
        if (n >= t.length) return r
        var a = t[n],
          o = dt(e) ? e.slice() : Xe({}, e)
        return (o[a] = fE(e[a], t, n + 1, r)), o
      },
      dE = function (e, t, n) {
        return fE(e, t, 0, n)
      },
      bm = function (e, t) {
        for (var n = e.memoizedState; n !== null && t > 0; ) (n = n.next), t--
        return n
      }
    ;(J0 = function (e, t, n, r) {
      var a = bm(e, t)
      if (a !== null) {
        var o = dE(a.memoizedState, n, r)
        ;(a.memoizedState = o),
          (a.baseState = o),
          (e.memoizedProps = Xe({}, e.memoizedProps))
        var l = lr(e, Ae)
        l !== null && pn(l, e, Ae, Mt)
      }
    }),
      (Z0 = function (e, t, n) {
        var r = bm(e, t)
        if (r !== null) {
          var a = uE(r.memoizedState, n)
          ;(r.memoizedState = a),
            (r.baseState = a),
            (e.memoizedProps = Xe({}, e.memoizedProps))
          var o = lr(e, Ae)
          o !== null && pn(o, e, Ae, Mt)
        }
      }),
      (eE = function (e, t, n, r) {
        var a = bm(e, t)
        if (a !== null) {
          var o = cE(a.memoizedState, n, r)
          ;(a.memoizedState = o),
            (a.baseState = o),
            (e.memoizedProps = Xe({}, e.memoizedProps))
          var l = lr(e, Ae)
          l !== null && pn(l, e, Ae, Mt)
        }
      }),
      (tE = function (e, t, n) {
        ;(e.pendingProps = dE(e.memoizedProps, t, n)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps)
        var r = lr(e, Ae)
        r !== null && pn(r, e, Ae, Mt)
      }),
      (nE = function (e, t) {
        ;(e.pendingProps = uE(e.memoizedProps, t)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps)
        var n = lr(e, Ae)
        n !== null && pn(n, e, Ae, Mt)
      }),
      (rE = function (e, t, n) {
        ;(e.pendingProps = cE(e.memoizedProps, t, n)),
          e.alternate && (e.alternate.pendingProps = e.pendingProps)
        var r = lr(e, Ae)
        r !== null && pn(r, e, Ae, Mt)
      }),
      (aE = function (e) {
        var t = lr(e, Ae)
        t !== null && pn(t, e, Ae, Mt)
      }),
      (iE = function (e) {
        K0 = e
      }),
      (oE = function (e) {
        X0 = e
      })
  }
  function DO(e) {
    var t = Py(e)
    return t === null ? null : t.stateNode
  }
  function _O(e) {
    return null
  }
  function OO() {
    return Pn
  }
  function MO(e) {
    var t = e.findFiberByHostInstance,
      n = c.ReactCurrentDispatcher
    return KR({
      bundleType: e.bundleType,
      version: e.version,
      rendererPackageName: e.rendererPackageName,
      rendererConfig: e.rendererConfig,
      overrideHookState: J0,
      overrideHookStateDeletePath: Z0,
      overrideHookStateRenamePath: eE,
      overrideProps: tE,
      overridePropsDeletePath: nE,
      overridePropsRenamePath: rE,
      setErrorHandler: iE,
      setSuspenseHandler: oE,
      scheduleUpdate: aE,
      currentDispatcherRef: n,
      findHostInstanceByFiber: DO,
      findFiberByHostInstance: t || _O,
      findHostInstancesForRefresh: lO,
      scheduleRefresh: iO,
      scheduleRoot: oO,
      setRefreshHandler: aO,
      getCurrentFiber: OO,
      reconcilerVersion: hm,
    })
  }
  var pE =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e)
        }
  function Sm(e) {
    this._internalRoot = e
  }
  ;(If.prototype.render = Sm.prototype.render =
    function (e) {
      var t = this._internalRoot
      if (t === null) throw new Error('Cannot update an unmounted root.')
      {
        typeof arguments[1] == 'function'
          ? f(
              'render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
            )
          : Wf(arguments[1])
          ? f(
              "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
            )
          : typeof arguments[1] < 'u' &&
            f(
              'You passed a second argument to root.render(...) but it only accepts one argument.'
            )
        var n = t.containerInfo
        if (n.nodeType !== Zt) {
          var r = Q0(t.current)
          r &&
            r.parentNode !== n &&
            f(
              "render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container."
            )
        }
      }
      gs(e, t, null, null)
    }),
    (If.prototype.unmount = Sm.prototype.unmount =
      function () {
        typeof arguments[0] == 'function' &&
          f(
            'unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().'
          )
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var t = e.containerInfo
          T0() &&
            f(
              'Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.'
            ),
            Va(function () {
              gs(null, e, null, null)
            }),
            db(t)
        }
      })
  function LO(e, t) {
    if (!Wf(e))
      throw new Error('createRoot(...): Target container is not a DOM element.')
    vE(e)
    var n = !1,
      r = !1,
      a = '',
      o = pE
    t != null &&
      (t.hydrate
        ? y(
            'hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.'
          )
        : typeof t == 'object' &&
          t !== null &&
          t.$$typeof === ta &&
          f(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),
      t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError),
      t.transitionCallbacks !== void 0 && t.transitionCallbacks)
    var l = W0(e, zc, null, n, r, a, o)
    Lc(l.current, e)
    var s = e.nodeType === Zt ? e.parentNode : e
    return Nu(s), new Sm(l)
  }
  function If(e) {
    this._internalRoot = e
  }
  function AO(e) {
    e && Qx(e)
  }
  If.prototype.unstable_scheduleHydration = AO
  function kO(e, t, n) {
    if (!Wf(e))
      throw new Error(
        'hydrateRoot(...): Target container is not a DOM element.'
      )
    vE(e),
      t === void 0 &&
        f(
          'Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)'
        )
    var r = n != null ? n : null,
      a = (n != null && n.hydratedSources) || null,
      o = !1,
      l = !1,
      s = '',
      p = pE
    n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (p = n.onRecoverableError))
    var m = G0(t, null, e, zc, r, o, l, s, p)
    if ((Lc(m.current, e), Nu(e), a))
      for (var g = 0; g < a.length; g++) {
        var N = a[g]
        B1(m, N)
      }
    return new If(m)
  }
  function Wf(e) {
    return !!(
      e &&
      (e.nodeType === ir || e.nodeType === Na || e.nodeType === wd || !Ht)
    )
  }
  function bs(e) {
    return !!(
      e &&
      (e.nodeType === ir ||
        e.nodeType === Na ||
        e.nodeType === wd ||
        (e.nodeType === Zt && e.nodeValue === ' react-mount-point-unstable '))
    )
  }
  function vE(e) {
    e.nodeType === ir &&
      e.tagName &&
      e.tagName.toUpperCase() === 'BODY' &&
      f(
        'createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.'
      ),
      ju(e) &&
        (e._reactRootContainer
          ? f(
              'You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.'
            )
          : f(
              'You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.'
            ))
  }
  var UO = c.ReactCurrentOwner,
    hE
  hE = function (e) {
    if (e._reactRootContainer && e.nodeType !== Zt) {
      var t = Q0(e._reactRootContainer.current)
      t &&
        t.parentNode !== e &&
        f(
          'render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.'
        )
    }
    var n = !!e._reactRootContainer,
      r = Em(e),
      a = !!(r && pi(r))
    a &&
      !n &&
      f(
        'render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.'
      ),
      e.nodeType === ir &&
        e.tagName &&
        e.tagName.toUpperCase() === 'BODY' &&
        f(
          'render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.'
        )
  }
  function Em(e) {
    return e ? (e.nodeType === Na ? e.documentElement : e.firstChild) : null
  }
  function mE() {}
  function FO(e, t, n, r, a) {
    if (a) {
      if (typeof r == 'function') {
        var o = r
        r = function () {
          var T = Yf(l)
          o.call(T)
        }
      }
      var l = G0(t, r, e, hi, null, !1, !1, '', mE)
      ;(e._reactRootContainer = l), Lc(l.current, e)
      var s = e.nodeType === Zt ? e.parentNode : e
      return Nu(s), Va(), l
    } else {
      for (var p; (p = e.lastChild); ) e.removeChild(p)
      if (typeof r == 'function') {
        var m = r
        r = function () {
          var T = Yf(g)
          m.call(T)
        }
      }
      var g = W0(e, hi, null, !1, !1, '', mE)
      ;(e._reactRootContainer = g), Lc(g.current, e)
      var N = e.nodeType === Zt ? e.parentNode : e
      return (
        Nu(N),
        Va(function () {
          gs(t, g, n, r)
        }),
        g
      )
    }
  }
  function jO(e, t) {
    e !== null &&
      typeof e != 'function' &&
      f(
        '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',
        t,
        e
      )
  }
  function Gf(e, t, n, r, a) {
    hE(n), jO(a === void 0 ? null : a, 'render')
    var o = n._reactRootContainer,
      l
    if (!o) l = FO(n, t, e, a, r)
    else {
      if (((l = o), typeof a == 'function')) {
        var s = a
        a = function () {
          var p = Yf(l)
          s.call(p)
        }
      }
      gs(t, l, e, a)
    }
    return Yf(l)
  }
  function HO(e) {
    {
      var t = UO.current
      if (t !== null && t.stateNode !== null) {
        var n = t.stateNode._warnedAboutRefsInRender
        n ||
          f(
            '%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.',
            ft(t.type) || 'A component'
          ),
          (t.stateNode._warnedAboutRefsInRender = !0)
      }
    }
    return e == null ? null : e.nodeType === ir ? e : CO(e, 'findDOMNode')
  }
  function zO(e, t, n) {
    if (
      (f(
        "ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !bs(t))
    )
      throw new Error('Target container is not a DOM element.')
    {
      var r = ju(t) && t._reactRootContainer === void 0
      r &&
        f(
          'You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?'
        )
    }
    return Gf(null, e, t, !0, n)
  }
  function $O(e, t, n) {
    if (
      (f(
        "ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !bs(t))
    )
      throw new Error('Target container is not a DOM element.')
    {
      var r = ju(t) && t._reactRootContainer === void 0
      r &&
        f(
          'You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?'
        )
    }
    return Gf(null, e, t, !1, n)
  }
  function PO(e, t, n, r) {
    if (
      (f(
        "ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"
      ),
      !bs(n))
    )
      throw new Error('Target container is not a DOM element.')
    if (e == null || !UR(e))
      throw new Error('parentComponent must be a valid React Component')
    return Gf(e, t, n, !1, r)
  }
  function BO(e) {
    if (!bs(e))
      throw new Error(
        'unmountComponentAtNode(...): Target container is not a DOM element.'
      )
    {
      var t = ju(e) && e._reactRootContainer === void 0
      t &&
        f(
          'You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?'
        )
    }
    if (e._reactRootContainer) {
      {
        var n = Em(e),
          r = n && !pi(n)
        r &&
          f(
            "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."
          )
      }
      return (
        Va(function () {
          Gf(null, null, e, !1, function () {
            ;(e._reactRootContainer = null), db(e)
          })
        }),
        !0
      )
    } else {
      {
        var a = Em(e),
          o = !!(a && pi(a)),
          l =
            e.nodeType === ir &&
            bs(e.parentNode) &&
            !!e.parentNode._reactRootContainer
        o &&
          f(
            "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",
            l
              ? 'You may have accidentally passed in a React root node instead of its container.'
              : 'Instead, have the parent component update its state and rerender in order to remove this component.'
          )
      }
      return !1
    }
  }
  zx(RO),
    Px(xO),
    Bx(TO),
    Vx(zr),
    Yx(Fx),
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
    xR(IN),
    wR(Jh, k_, Va)
  function VO(e, t) {
    var n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null
    if (!Wf(t)) throw new Error('Target container is not a DOM element.')
    return EO(e, t, null, n)
  }
  function YO(e, t, n, r) {
    return PO(e, t, n, r)
  }
  var Cm = { usingClientEntryPoint: !1, Events: [pi, Jo, Ac, _y, Oy, Jh] }
  function IO(e, t) {
    return (
      Cm.usingClientEntryPoint ||
        f(
          'You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
        ),
      LO(e, t)
    )
  }
  function WO(e, t, n) {
    return (
      Cm.usingClientEntryPoint ||
        f(
          'You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'
        ),
      kO(e, t, n)
    )
  }
  function GO(e) {
    return (
      T0() &&
        f(
          'flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.'
        ),
      Va(e)
    )
  }
  var qO = MO({
    findFiberByHostInstance: Ji,
    bundleType: 1,
    version: hm,
    rendererPackageName: 'react-dom',
  })
  if (
    !qO &&
    zt &&
    window.top === window.self &&
    ((navigator.userAgent.indexOf('Chrome') > -1 &&
      navigator.userAgent.indexOf('Edge') === -1) ||
      navigator.userAgent.indexOf('Firefox') > -1)
  ) {
    var yE = window.location.protocol
    ;/^(https?|file):$/.test(yE) &&
      console.info(
        '%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools' +
          (yE === 'file:'
            ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`
            : ''),
        'font-weight:bold'
      )
  }
  ;(Tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cm),
    (Tr.createPortal = VO),
    (Tr.createRoot = IO),
    (Tr.findDOMNode = HO),
    (Tr.flushSync = GO),
    (Tr.hydrate = zO),
    (Tr.hydrateRoot = WO),
    (Tr.render = $O),
    (Tr.unmountComponentAtNode = BO),
    (Tr.unstable_batchedUpdates = Jh),
    (Tr.unstable_renderSubtreeIntoContainer = YO),
    (Tr.version = hm),
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
        'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error())
})()
;(function (i) {
  i.exports = Tr
})(Qm)
var Rm = Qm.exports
{
  var qf = Rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  ;(Fm.createRoot = function (i, u) {
    qf.usingClientEntryPoint = !0
    try {
      return Rm.createRoot(i, u)
    } finally {
      qf.usingClientEntryPoint = !1
    }
  }),
    (Fm.hydrateRoot = function (i, u, c) {
      qf.usingClientEntryPoint = !0
      try {
        return Rm.hydrateRoot(i, u, c)
      } finally {
        qf.usingClientEntryPoint = !1
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
 */ function Ut() {
  return (
    (Ut = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var u = 1; u < arguments.length; u++) {
            var c = arguments[u]
            for (var v in c)
              Object.prototype.hasOwnProperty.call(c, v) && (i[v] = c[v])
          }
          return i
        }),
    Ut.apply(this, arguments)
  )
}
function eM(i, u) {
  if (i == null) return {}
  var c = {},
    v = Object.keys(i),
    d,
    y
  for (y = 0; y < v.length; y++)
    (d = v[y]), !(u.indexOf(d) >= 0) && (c[d] = i[d])
  return c
}
var rr
;(function (i) {
  ;(i.Pop = 'POP'), (i.Push = 'PUSH'), (i.Replace = 'REPLACE')
})(rr || (rr = {}))
const gE = 'popstate'
function tM(i) {
  i === void 0 && (i = {})
  function u(d, y) {
    var f, x
    let {
      pathname: E = '/',
      search: C = '',
      hash: R = '',
    } = ga(d.location.hash.substr(1))
    return bo(
      '',
      { pathname: E, search: C, hash: R },
      ((f = y.state) == null ? void 0 : f.usr) || null,
      ((x = y.state) == null ? void 0 : x.key) || 'default'
    )
  }
  function c(d, y) {
    let f = d.document.querySelector('base'),
      x = ''
    if (f && f.getAttribute('href')) {
      let E = d.location.href,
        C = E.indexOf('#')
      x = C === -1 ? E : E.slice(0, C)
    }
    return x + '#' + (typeof y == 'string' ? y : Ns(y))
  }
  function v(d, y) {
    nM(
      d.pathname.charAt(0) === '/',
      'relative pathnames are not supported in hash history.push(' +
        JSON.stringify(y) +
        ')'
    )
  }
  return aM(u, c, v, i)
}
function nM(i, u) {
  if (!i) {
    typeof console < 'u' && console.warn(u)
    try {
      throw new Error(u)
    } catch {}
  }
}
function rM() {
  return Math.random().toString(36).substr(2, 8)
}
function bE(i) {
  return { usr: i.state, key: i.key }
}
function bo(i, u, c, v) {
  return (
    c === void 0 && (c = null),
    Ut(
      { pathname: typeof i == 'string' ? i : i.pathname, search: '', hash: '' },
      typeof u == 'string' ? ga(u) : u,
      { state: c, key: (u == null ? void 0 : u.key) || v || rM() }
    )
  )
}
function Ns(i) {
  let { pathname: u = '/', search: c = '', hash: v = '' } = i
  return (
    c && c !== '?' && (u += c.charAt(0) === '?' ? c : '?' + c),
    v && v !== '#' && (u += v.charAt(0) === '#' ? v : '#' + v),
    u
  )
}
function ga(i) {
  let u = {}
  if (i) {
    let c = i.indexOf('#')
    c >= 0 && ((u.hash = i.substr(c)), (i = i.substr(0, c)))
    let v = i.indexOf('?')
    v >= 0 && ((u.search = i.substr(v)), (i = i.substr(0, v))),
      i && (u.pathname = i)
  }
  return u
}
function aM(i, u, c, v) {
  v === void 0 && (v = {})
  let { window: d = document.defaultView, v5Compat: y = !1 } = v,
    f = d.history,
    x = rr.Pop,
    E = null
  function C() {
    ;(x = rr.Pop), E && E({ action: x, location: V.location })
  }
  function R(F, $) {
    x = rr.Push
    let _ = bo(V.location, F, $)
    c == null || c(_, F)
    let ge = bE(_),
      oe = V.createHref(_)
    try {
      f.pushState(ge, '', oe)
    } catch {
      d.location.assign(oe)
    }
    y && E && E({ action: x, location: _ })
  }
  function L(F, $) {
    x = rr.Replace
    let _ = bo(V.location, F, $)
    c == null || c(_, F)
    let ge = bE(_),
      oe = V.createHref(_)
    f.replaceState(ge, '', oe), y && E && E({ action: x, location: _ })
  }
  let V = {
    get action() {
      return x
    },
    get location() {
      return i(d, f)
    },
    listen(F) {
      if (E) throw new Error('A history only accepts one active listener')
      return (
        d.addEventListener(gE, C),
        (E = F),
        () => {
          d.removeEventListener(gE, C), (E = null)
        }
      )
    },
    createHref(F) {
      return u(d, F)
    },
    push: R,
    replace: L,
    go(F) {
      return f.go(F)
    },
  }
  return V
}
var fr
;(function (i) {
  ;(i.data = 'data'),
    (i.deferred = 'deferred'),
    (i.redirect = 'redirect'),
    (i.error = 'error')
})(fr || (fr = {}))
function aC(i, u, c) {
  return (
    u === void 0 && (u = []),
    c === void 0 && (c = new Set()),
    i.map((v, d) => {
      let y = [...u, d],
        f = typeof v.id == 'string' ? v.id : y.join('-')
      return (
        at(
          !c.has(f),
          'Found a route id collision on id "' +
            f +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        c.add(f),
        Ut({}, v, {
          id: f,
          children: v.children ? aC(v.children, y, c) : void 0,
        })
      )
    })
  )
}
function xs(i, u, c) {
  c === void 0 && (c = '/')
  let v = typeof u == 'string' ? ga(u) : u,
    d = oC(v.pathname || '/', c)
  if (d == null) return null
  let y = iC(i)
  iM(y)
  let f = null
  for (let x = 0; f == null && x < y.length; ++x) f = vM(y[x], d)
  return f
}
function iC(i, u, c, v) {
  return (
    u === void 0 && (u = []),
    c === void 0 && (c = []),
    v === void 0 && (v = ''),
    i.forEach((d, y) => {
      let f = {
        relativePath: d.path || '',
        caseSensitive: d.caseSensitive === !0,
        childrenIndex: y,
        route: d,
      }
      f.relativePath.startsWith('/') &&
        (at(
          f.relativePath.startsWith(v),
          'Absolute route path "' +
            f.relativePath +
            '" nested under path ' +
            ('"' + v + '" is not valid. An absolute child route path ') +
            'must start with the combined path of all its parent routes.'
        ),
        (f.relativePath = f.relativePath.slice(v.length)))
      let x = Oi([v, f.relativePath]),
        E = c.concat(f)
      d.children &&
        d.children.length > 0 &&
        (at(
          d.index !== !0,
          'Index routes must not have child routes. Please remove ' +
            ('all child routes from route path "' + x + '".')
        ),
        iC(d.children, u, E, x)),
        !(d.path == null && !d.index) &&
          u.push({ path: x, score: dM(x, d.index), routesMeta: E })
    }),
    u
  )
}
function iM(i) {
  i.sort((u, c) =>
    u.score !== c.score
      ? c.score - u.score
      : pM(
          u.routesMeta.map((v) => v.childrenIndex),
          c.routesMeta.map((v) => v.childrenIndex)
        )
  )
}
const oM = /^:\w+$/,
  lM = 3,
  uM = 2,
  sM = 1,
  cM = 10,
  fM = -2,
  SE = (i) => i === '*'
function dM(i, u) {
  let c = i.split('/'),
    v = c.length
  return (
    c.some(SE) && (v += fM),
    u && (v += uM),
    c
      .filter((d) => !SE(d))
      .reduce((d, y) => d + (oM.test(y) ? lM : y === '' ? sM : cM), v)
  )
}
function pM(i, u) {
  return i.length === u.length && i.slice(0, -1).every((v, d) => v === u[d])
    ? i[i.length - 1] - u[u.length - 1]
    : 0
}
function vM(i, u) {
  let { routesMeta: c } = i,
    v = {},
    d = '/',
    y = []
  for (let f = 0; f < c.length; ++f) {
    let x = c[f],
      E = f === c.length - 1,
      C = d === '/' ? u : u.slice(d.length) || '/',
      R = Km(
        { path: x.relativePath, caseSensitive: x.caseSensitive, end: E },
        C
      )
    if (!R) return null
    Object.assign(v, R.params)
    let L = x.route
    y.push({
      params: v,
      pathname: Oi([d, R.pathname]),
      pathnameBase: bM(Oi([d, R.pathnameBase])),
      route: L,
    }),
      R.pathnameBase !== '/' && (d = Oi([d, R.pathnameBase]))
  }
  return y
}
function Km(i, u) {
  typeof i == 'string' && (i = { path: i, caseSensitive: !1, end: !0 })
  let [c, v] = hM(i.path, i.caseSensitive, i.end),
    d = u.match(c)
  if (!d) return null
  let y = d[0],
    f = y.replace(/(.)\/+$/, '$1'),
    x = d.slice(1)
  return {
    params: v.reduce((C, R, L) => {
      if (R === '*') {
        let V = x[L] || ''
        f = y.slice(0, y.length - V.length).replace(/(.)\/+$/, '$1')
      }
      return (C[R] = mM(x[L] || '', R)), C
    }, {}),
    pathname: y,
    pathnameBase: f,
    pattern: i,
  }
}
function hM(i, u, c) {
  u === void 0 && (u = !1),
    c === void 0 && (c = !0),
    So(
      i === '*' || !i.endsWith('*') || i.endsWith('/*'),
      'Route path "' +
        i +
        '" will be treated as if it were ' +
        ('"' + i.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + i.replace(/\*$/, '/*') + '".')
    )
  let v = [],
    d =
      '^' +
      i
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/:(\w+)/g, (f, x) => (v.push(x), '([^\\/]+)'))
  return (
    i.endsWith('*')
      ? (v.push('*'),
        (d += i === '*' || i === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : (d += c ? '\\/*$' : '(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)'),
    [new RegExp(d, u ? void 0 : 'i'), v]
  )
}
function mM(i, u) {
  try {
    return decodeURIComponent(i)
  } catch (c) {
    return (
      So(
        !1,
        'The value for the URL param "' +
          u +
          '" will not be decoded because' +
          (' the string "' +
            i +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + c + ').')
      ),
      i
    )
  }
}
function oC(i, u) {
  if (u === '/') return i
  if (!i.toLowerCase().startsWith(u.toLowerCase())) return null
  let c = u.endsWith('/') ? u.length - 1 : u.length,
    v = i.charAt(c)
  return v && v !== '/' ? null : i.slice(c) || '/'
}
function at(i, u) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(u)
}
function So(i, u) {
  if (!i) {
    typeof console < 'u' && console.warn(u)
    try {
      throw new Error(u)
    } catch {}
  }
}
function yM(i, u) {
  u === void 0 && (u = '/')
  let {
    pathname: c,
    search: v = '',
    hash: d = '',
  } = typeof i == 'string' ? ga(i) : i
  return {
    pathname: c ? (c.startsWith('/') ? c : gM(c, u)) : u,
    search: SM(v),
    hash: EM(d),
  }
}
function gM(i, u) {
  let c = u.replace(/\/+$/, '').split('/')
  return (
    i.split('/').forEach((d) => {
      d === '..' ? c.length > 1 && c.pop() : d !== '.' && c.push(d)
    }),
    c.length > 1 ? c.join('/') : '/'
  )
}
function lC(i, u, c) {
  let v = typeof i == 'string' ? ga(i) : Ut({}, i),
    d = i === '' || v.pathname === '',
    y = d ? '/' : v.pathname,
    f
  if (y == null) f = c
  else {
    let R = u.length - 1
    if (y.startsWith('..')) {
      let L = y.split('/')
      for (; L[0] === '..'; ) L.shift(), (R -= 1)
      v.pathname = L.join('/')
    }
    f = R >= 0 ? u[R] : '/'
  }
  let x = yM(v, f),
    E = y && y !== '/' && y.endsWith('/'),
    C = (d || y === '.') && c.endsWith('/')
  return !x.pathname.endsWith('/') && (E || C) && (x.pathname += '/'), x
}
const Oi = (i) => i.join('/').replace(/\/\/+/g, '/'),
  bM = (i) => i.replace(/\/+$/, '').replace(/^\/*/, '/'),
  SM = (i) => (!i || i === '?' ? '' : i.startsWith('?') ? i : '?' + i),
  EM = (i) => (!i || i === '#' ? '' : i.startsWith('#') ? i : '#' + i)
class CM {
  constructor(u) {
    ;(this.pendingKeys = new Set()),
      (this.cancelled = !1),
      (this.subscriber = void 0),
      u instanceof Promise
        ? ((this.data = u), this.trackPromise('__single__', u))
        : Array.isArray(u)
        ? ((this.data = [...u]), u.forEach((c, v) => this.trackPromise(v, c)))
        : typeof u == 'object'
        ? ((this.data = Ut({}, u)),
          Object.entries(u).forEach((c) => {
            let [v, d] = c
            return this.trackPromise(v, d)
          }))
        : at(!1, 'Incorrect data type passed to deferred()')
  }
  trackPromise(u, c) {
    c instanceof Promise &&
      (this.pendingKeys.add(u),
      c.then(
        (v) => this.onSettle(u, null, v),
        (v) => this.onSettle(u, v)
      ))
  }
  onSettle(u, c, v) {
    var d
    if (this.cancelled) return
    this.pendingKeys.delete(u)
    let y = c ? new RM(c) : v
    if (this.data instanceof Promise) this.data = y
    else if (Array.isArray(this.data)) {
      at(typeof u == 'number', 'expected key to be a number')
      let f = [...this.data]
      ;(f[u] = y), (this.data = f)
    } else
      typeof this.data == 'object'
        ? (this.data = Ut({}, this.data, { [u]: y }))
        : at(!1, 'Incorrect data type on DeferredData')
    ;(d = this.subscriber) == null || d.call(this, !1)
  }
  subscribe(u) {
    this.subscriber = u
  }
  cancel() {
    var u
    ;(this.cancelled = !0),
      this.pendingKeys.forEach((c, v) => this.pendingKeys.delete(v)),
      (u = this.subscriber) == null || u.call(this, !0)
  }
  get done() {
    return this.pendingKeys.size === 0
  }
}
class RM extends Error {}
class _l {
  constructor(u, c, v) {
    ;(this.status = u), (this.statusText = c || ''), (this.data = v)
  }
}
function uC(i) {
  return i instanceof _l
}
const xm = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  xM = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  }
function TM(i) {
  var u, c, v
  at(
    i.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  )
  let d = aC(i.routes),
    y = null,
    f = null,
    x = null,
    E = null,
    C = null,
    R = !1,
    L = xs(d, i.history.location, i.basename),
    V = null
  if (L == null) {
    let { matches: P, route: G, error: q } = TE(d)
    ;(L = P), (V = { [G.id]: q })
  }
  let F = !L.some((P) => P.route.loader) || i.hydrationData != null,
    $,
    _ = {
      historyAction: i.history.action,
      location: i.history.location,
      matches: L,
      initialized: F,
      navigation: xm,
      restoreScrollPosition: null,
      resetScrollPosition: !0,
      revalidation: 'idle',
      loaderData: ((u = i.hydrationData) == null ? void 0 : u.loaderData) || {},
      actionData:
        ((c = i.hydrationData) == null ? void 0 : c.actionData) || null,
      errors: ((v = i.hydrationData) == null ? void 0 : v.errors) || V,
      fetchers: new Map(),
    },
    ge = null,
    oe = !0,
    Z,
    me = !1,
    Ee = !1,
    K = [],
    Ce = [],
    ee = new Map(),
    lt = 0,
    X = -1,
    Re = new Map(),
    Te = new Set(),
    nt = new Map(),
    ve = new Map()
  function He() {
    return (
      (y = i.history.listen((P) => {
        let { action: G, location: q } = P
        return Xt(G, q)
      })),
      _.initialized || Xt(rr.Pop, _.location),
      $
    )
  }
  function vt() {
    var P
    y && y(),
      (f = null),
      (P = Z) == null || P.abort(),
      _.fetchers.forEach((G, q) => wn(q))
  }
  function ze(P) {
    if (f) throw new Error('A router only accepts one active subscriber')
    return (
      (f = P),
      () => {
        f = null
      }
    )
  }
  function le(P) {
    ;(_ = Ut({}, _, P)), f == null || f(_)
  }
  function Ue(P, G, q) {
    let he =
        _.actionData != null &&
        _.navigation.formMethod != null &&
        _.navigation.state === 'loading',
      Be = q.loaderData
        ? { loaderData: Nm(_.loaderData, q.loaderData, q.matches || []) }
        : {}
    le(
      Ut({}, he ? {} : { actionData: null }, q, Be, {
        historyAction: P,
        location: G,
        initialized: !0,
        navigation: xm,
        revalidation: 'idle',
        restoreScrollPosition: _.navigation.formData
          ? !1
          : Qn(G, q.matches || _.matches),
        resetScrollPosition: oe,
      })
    ),
      me ||
        P === rr.Pop ||
        (P === rr.Push
          ? i.history.push(G, G.state)
          : P === rr.Replace && i.history.replace(G, G.state)),
      (ge = null),
      (oe = !0),
      (me = !1),
      (Ee = !1),
      (K = []),
      (Ce = [])
  }
  async function Kt(P, G) {
    if (typeof P == 'number') {
      i.history.go(P)
      return
    }
    let { path: q, submission: he, error: Be } = EE(P, G),
      Ye = bo(_.location, q, G == null ? void 0 : G.state),
      Fe =
        (G == null ? void 0 : G.replace) === !0 || he != null
          ? rr.Replace
          : rr.Push,
      xe = G && 'resetScroll' in G ? G.resetScroll : void 0
    return await Xt(Fe, Ye, {
      submission: he,
      pendingError: Be,
      resetScroll: xe,
      replace: G == null ? void 0 : G.replace,
    })
  }
  function zn() {
    if (
      ((Ee = !0),
      K.push(...Ft()),
      le({ revalidation: 'loading' }),
      _.navigation.state !== 'submitting')
    ) {
      if (_.navigation.state === 'idle') {
        Xt(_.historyAction, _.location, { startUninterruptedRevalidation: !0 })
        return
      }
      Xt(ge || _.historyAction, _.navigation.location, {
        overrideNavigation: _.navigation,
      })
    }
  }
  async function Xt(P, G, q) {
    var he
    ;(he = Z) == null || he.abort(),
      (Z = null),
      (ge = P),
      (me = (q == null ? void 0 : q.startUninterruptedRevalidation) === !0),
      qn(_.location, _.matches),
      (oe = (q == null ? void 0 : q.resetScroll) !== !1)
    let Be = q == null ? void 0 : q.overrideNavigation,
      Ye = xs(d, G, i.basename)
    if (!Ye) {
      let { matches: ce, route: Me, error: qe } = TE(d)
      Ft(), Ue(P, G, { matches: ce, loaderData: {}, errors: { [Me.id]: qe } })
      return
    }
    if (_M(_.location, G)) {
      Ue(P, G, { matches: Ye })
      return
    }
    Z = new AbortController()
    let Fe = Cs(G, Z.signal, q == null ? void 0 : q.submission),
      xe,
      We
    if (q != null && q.pendingError) We = { [xl(Ye).route.id]: q.pendingError }
    else if (q != null && q.submission) {
      let ce = await Ht(Fe, G, q.submission, Ye, { replace: q.replace })
      if (ce.shortCircuited) return
      ;(xe = ce.pendingActionData),
        (We = ce.pendingActionError),
        (Be = Ut({ state: 'loading', location: G }, q.submission))
    }
    let {
      shortCircuited: it,
      loaderData: Nt,
      errors: J,
    } = await vn(Fe, P, G, Ye, Be, q == null ? void 0 : q.submission, xe, We)
    it || ((Z = null), Ue(P, G, { matches: Ye, loaderData: Nt, errors: J }))
  }
  async function Ht(P, G, q, he, Be) {
    ;(Ee = !0),
      K.push(...Ft()),
      nt.forEach((We, it) => {
        ee.has(it) && (Ce.push(it), rn(it))
      })
    let Ye = Ut({ state: 'submitting', location: G }, q)
    le({ navigation: Ye })
    let Fe,
      xe = _E(he, G)
    if (!xe.route.action) Fe = NE(G)
    else if (((Fe = await Es('action', P, xe)), P.signal.aborted))
      return { shortCircuited: !0 }
    if (Tl(Fe)) {
      let We = Ut(
          { state: 'loading', location: bo(_.location, Fe.location) },
          q
        ),
        it = (Be == null ? void 0 : Be.replace) !== !0
      return await mn(Fe, We, it), { shortCircuited: !0 }
    }
    if (Ts(Fe))
      return {
        pendingActionError: { [xl(he, xe.route.id).route.id]: Fe.error },
      }
    if (go(Fe)) throw new Error('deferred() is not supported in actions')
    return { pendingActionData: { [xe.route.id]: Fe.data } }
  }
  async function vn(P, G, q, he, Be, Ye, Fe, xe) {
    let We = Be
    We ||
      (We = {
        state: 'loading',
        location: q,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      })
    let [it, Nt] = CE(_, he, Ye, q, Ee, K, Ce, Fe, xe, nt)
    if (
      (Ft(
        (ht) =>
          !(he != null && he.some(($e) => $e.route.id === ht)) ||
          (it == null ? void 0 : it.some(($e) => $e.route.id === ht))
      ),
      it.length === 0 && Nt.length === 0)
    )
      return (
        Ue(G, q, {
          matches: he,
          loaderData: Nm(_.loaderData, {}, he),
          errors: xe || null,
          actionData: Fe || null,
        }),
        { shortCircuited: !0 }
      )
    me ||
      (Nt.forEach((ht) => {
        var $e
        let [Bt] = ht,
          yt = {
            state: 'loading',
            data: ($e = _.fetchers.get(Bt)) == null ? void 0 : $e.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          }
        _.fetchers.set(Bt, yt)
      }),
      le(
        Ut(
          { navigation: We, actionData: Fe || _.actionData || null },
          Nt.length > 0 ? { fetchers: new Map(_.fetchers) } : {}
        )
      )),
      (X = ++lt),
      Nt.forEach((ht) => {
        let [$e] = ht
        return ee.set($e, Z)
      })
    let {
      results: J,
      loaderResults: ce,
      fetcherResults: Me,
    } = await Jt(it, Nt, P)
    if (P.signal.aborted) return { shortCircuited: !0 }
    Nt.forEach((ht) => {
      let [$e] = ht
      return ee.delete($e)
    })
    let qe = wE(J)
    if (qe) {
      let ht = Tm(_, qe)
      return await mn(qe, ht), { shortCircuited: !0 }
    }
    let { loaderData: ot, errors: Ot } = xE(_, he, it, ce, xe, Nt, Me, ve)
    ve.forEach((ht, $e) => {
      ht.subscribe((Bt) => {
        if (Bt) {
          ve.delete($e)
          return
        }
        le({ loaderData: Ut({}, _.loaderData, { [$e]: ht.data }) }),
          ht.done && ve.delete($e)
      })
    }),
      gn()
    let Lt = Gt(X)
    return Ut(
      { loaderData: ot, errors: Ot },
      Lt || Nt.length > 0 ? { fetchers: new Map(_.fetchers) } : {}
    )
  }
  function hn(P) {
    return _.fetchers.get(P) || xM
  }
  function wr(P, G, q, he) {
    if (typeof AbortController > 'u')
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      )
    ee.has(P) && rn(P)
    let Be = xs(d, q, i.basename)
    if (!Be) {
      yn(P, G, new _l(404, 'Not Found', null))
      return
    }
    let { path: Ye, submission: Fe } = EE(q, he),
      xe = _E(Be, Ye)
    if (Fe) {
      dr(P, G, Ye, xe, Fe)
      return
    }
    nt.set(P, [Ye, xe]), pr(P, G, Ye, xe)
  }
  async function dr(P, G, q, he, Be) {
    var Ye
    if (
      ((Ee = !0),
      nt.delete(P),
      K.push(...Ft()),
      nt.forEach((an, bn) => {
        ee.has(bn) && (Ce.push(bn), rn(bn))
      }),
      !he.route.action)
    ) {
      let { error: an } = NE(q)
      yn(P, G, an)
      return
    }
    let Fe = Ut({ state: 'submitting' }, Be, {
      data: ((Ye = _.fetchers.get(P)) == null ? void 0 : Ye.data) || void 0,
    })
    _.fetchers.set(P, Fe), le({ fetchers: new Map(_.fetchers) })
    let xe = new AbortController(),
      We = Cs(q, xe.signal, Be)
    ee.set(P, xe)
    let it = await Es('action', We, he)
    if (We.signal.aborted) {
      ee.get(P) === xe && ee.delete(P)
      return
    }
    if (Tl(it)) {
      ee.delete(P), Te.add(P)
      let an = Ut({ state: 'loading' }, Be, { data: void 0 })
      _.fetchers.set(P, an), le({ fetchers: new Map(_.fetchers) })
      let bn = Ut(
        { state: 'loading', location: bo(_.location, it.location) },
        Be
      )
      await mn(it, bn)
      return
    }
    if (Ts(it)) {
      yn(P, G, it.error)
      return
    }
    go(it) && at(!1, 'deferred() is not supported in actions')
    let Nt = _.navigation.location || _.location,
      J = Cs(Nt, xe.signal),
      ce =
        _.navigation.state !== 'idle'
          ? xs(d, _.navigation.location, i.basename)
          : _.matches
    at(ce, "Didn't find any matches after fetcher action")
    let Me = ++lt
    Re.set(P, Me)
    let qe = Ut({ state: 'loading', data: it.data }, Be)
    _.fetchers.set(P, qe)
    let [ot, Ot] = CE(
      _,
      ce,
      Be,
      Nt,
      Ee,
      K,
      Ce,
      { [he.route.id]: it.data },
      void 0,
      nt
    )
    Ot.filter((an) => {
      let [bn] = an
      return bn !== P
    }).forEach((an) => {
      var bn
      let [ea] = an,
        ba = {
          state: 'loading',
          data: (bn = _.fetchers.get(P)) == null ? void 0 : bn.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        }
      _.fetchers.set(ea, ba), ee.set(ea, xe)
    }),
      le({ fetchers: new Map(_.fetchers) })
    let {
      results: Lt,
      loaderResults: ht,
      fetcherResults: $e,
    } = await Jt(ot, Ot, J)
    if (xe.signal.aborted) return
    Re.delete(P),
      ee.delete(P),
      Ot.forEach((an) => {
        let [bn] = an
        return ee.delete(bn)
      })
    let Bt = wE(Lt)
    if (Bt) {
      let an = Tm(_, Bt)
      await mn(Bt, an)
      return
    }
    let { loaderData: yt, errors: Tt } = xE(
        _,
        _.matches,
        ot,
        ht,
        void 0,
        Ot,
        $e,
        ve
      ),
      Dr = {
        state: 'idle',
        data: it.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      }
    _.fetchers.set(P, Dr)
    let vr = Gt(Me)
    if (_.navigation.state === 'loading' && Me > X) {
      var Zr
      at(ge, 'Expected pending action'),
        (Zr = Z) == null || Zr.abort(),
        Ue(ge, _.navigation.location, {
          matches: ce,
          loaderData: yt,
          errors: Tt,
          fetchers: new Map(_.fetchers),
        })
    } else
      le(
        Ut(
          { errors: Tt, loaderData: Nm(_.loaderData, yt, ce) },
          vr ? { fetchers: new Map(_.fetchers) } : {}
        )
      ),
        (Ee = !1)
  }
  async function pr(P, G, q, he) {
    var Be
    let Ye = {
      state: 'loading',
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      data: ((Be = _.fetchers.get(P)) == null ? void 0 : Be.data) || void 0,
    }
    _.fetchers.set(P, Ye), le({ fetchers: new Map(_.fetchers) })
    let Fe = new AbortController(),
      xe = Cs(q, Fe.signal)
    ee.set(P, Fe)
    let We = await Es('loader', xe, he)
    if (
      (go(We) && (We = (await cC(We, xe.signal)) || We),
      ee.get(P) === Fe && ee.delete(P),
      xe.signal.aborted)
    )
      return
    if (Tl(We)) {
      let Nt = Tm(_, We)
      await mn(We, Nt)
      return
    }
    if (Ts(We)) {
      let Nt = xl(_.matches, G)
      _.fetchers.delete(P),
        le({
          fetchers: new Map(_.fetchers),
          errors: { [Nt.route.id]: We.error },
        })
      return
    }
    at(!go(We), 'Unhandled fetcher deferred data')
    let it = {
      state: 'idle',
      data: We.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
    }
    _.fetchers.set(P, it), le({ fetchers: new Map(_.fetchers) })
  }
  async function mn(P, G, q) {
    q === void 0 && (q = !1),
      P.revalidate && (Ee = !0),
      at(G.location, 'Expected a location on the redirect navigation'),
      (Z = null),
      await Xt(q ? rr.Push : rr.Replace, G.location, { overrideNavigation: G })
  }
  async function Jt(P, G, q) {
    let he = await Promise.all([
        ...P.map((Fe) => Es('loader', q, Fe)),
        ...G.map((Fe) => {
          let [, xe, We] = Fe
          return Es('loader', Cs(xe, q.signal), We)
        }),
      ]),
      Be = he.slice(0, P.length),
      Ye = he.slice(P.length)
    return (
      await DE(P, Be, q.signal, _.loaderData, ve),
      await DE(
        G.map((Fe) => {
          let [, , xe] = Fe
          return xe
        }),
        Ye,
        q.signal
      ),
      { results: he, loaderResults: Be, fetcherResults: Ye }
    )
  }
  function yn(P, G, q) {
    let he = xl(_.matches, G)
    wn(P), le({ errors: { [he.route.id]: q }, fetchers: new Map(_.fetchers) })
  }
  function wn(P) {
    ee.has(P) && rn(P),
      nt.delete(P),
      Re.delete(P),
      Te.delete(P),
      _.fetchers.delete(P)
  }
  function rn(P) {
    let G = ee.get(P)
    at(G, 'Expected fetch controller: ' + P), G.abort(), ee.delete(P)
  }
  function zt(P) {
    for (let G of P) {
      let q = hn(G),
        he = {
          state: 'idle',
          data: q.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        }
      _.fetchers.set(G, he)
    }
  }
  function gn() {
    let P = []
    for (let G of Te) {
      let q = _.fetchers.get(G)
      at(q, 'Expected fetcher: ' + G),
        q.state === 'loading' && (Te.delete(G), P.push(G))
    }
    zt(P)
  }
  function Gt(P) {
    let G = []
    for (let [q, he] of Re)
      if (he < P) {
        let Be = _.fetchers.get(q)
        at(Be, 'Expected fetcher: ' + q),
          Be.state === 'loading' && (rn(q), Re.delete(q), G.push(q))
      }
    return zt(G), G.length > 0
  }
  function Ft(P) {
    let G = []
    return (
      ve.forEach((q, he) => {
        ;(!P || P(he)) && (q.cancel(), G.push(he))
      }),
      G
    )
  }
  function qt(P, G, q) {
    if (
      ((x = P), (C = G), (E = q || ((he) => he.key)), !R && _.navigation === xm)
    ) {
      R = !0
      let he = Qn(_.location, _.matches)
      he != null && le({ restoreScrollPosition: he })
    }
    return () => {
      ;(x = null), (C = null), (E = null)
    }
  }
  function qn(P, G) {
    if (x && E && C) {
      let q = E(P, G) || P.key
      x[q] = C()
    }
  }
  function Qn(P, G) {
    if (x && E && C) {
      let q = E(P, G) || P.key,
        he = x[q]
      if (typeof he == 'number') return he
    }
    return null
  }
  return (
    ($ = {
      get state() {
        return _
      },
      get routes() {
        return d
      },
      initialize: He,
      subscribe: ze,
      enableScrollRestoration: qt,
      navigate: Kt,
      fetch: wr,
      revalidate: zn,
      createHref: ad,
      getFetcher: hn,
      deleteFetcher: wn,
      dispose: vt,
      _internalFetchControllers: ee,
      _internalActiveDeferreds: ve,
    }),
    $
  )
}
function EE(i, u) {
  let c = typeof i == 'string' ? i : Ns(i)
  if (!u || (!('formMethod' in u) && !('formData' in u))) return { path: c }
  if (u.formMethod != null && u.formMethod !== 'get')
    return {
      path: c,
      submission: {
        formMethod: u.formMethod,
        formAction: ad(ga(c)),
        formEncType:
          (u == null ? void 0 : u.formEncType) ||
          'application/x-www-form-urlencoded',
        formData: u.formData,
      },
    }
  if (!u.formData) return { path: c }
  let v = ga(c),
    d
  try {
    d = sC(u.formData, v.search)
  } catch {
    return {
      path: c,
      error: new _l(
        400,
        'Bad Request',
        'Cannot submit binary form data using GET'
      ),
    }
  }
  return { path: Ns(Ut({}, v, { search: '?' + d })) }
}
function Tm(i, u) {
  let {
    formMethod: c,
    formAction: v,
    formEncType: d,
    formData: y,
  } = i.navigation
  return {
    state: 'loading',
    location: bo(i.location, u.location),
    formMethod: c || void 0,
    formAction: v || void 0,
    formEncType: d || void 0,
    formData: y || void 0,
  }
}
function NM(i, u) {
  let c = i
  if (u) {
    let v = i.findIndex((d) => d.route.id === u)
    v >= 0 && (c = i.slice(0, v))
  }
  return c
}
function CE(i, u, c, v, d, y, f, x, E, C) {
  let R = E ? Object.values(E)[0] : x ? Object.values(x)[0] : null,
    L = E ? Object.keys(E)[0] : void 0,
    F = NM(u, L).filter(
      (_, ge) =>
        _.route.loader != null &&
        (wM(i.loaderData, i.matches[ge], _) ||
          y.some((oe) => oe === _.route.id) ||
          RE(i.location, i.matches[ge], c, v, _, d, R))
    ),
    $ = []
  return (
    C == null ||
      C.forEach((_, ge) => {
        let [oe, Z] = _
        f.includes(ge)
          ? $.push([ge, oe, Z])
          : d && RE(oe, Z, c, oe, Z, d, R) && $.push([ge, oe, Z])
      }),
    [F, $]
  )
}
function wM(i, u, c) {
  let v = !u || c.route.id !== u.route.id,
    d = i[c.route.id] === void 0
  return v || d
}
function RE(i, u, c, v, d, y, f) {
  var x
  let E = jm(i),
    C = u.params,
    R = jm(v),
    L = d.params,
    V =
      u.pathname !== d.pathname ||
      (((x = u.route.path) == null ? void 0 : x.endsWith('*')) &&
        u.params['*'] !== d.params['*']) ||
      E.toString() === R.toString() ||
      E.search !== R.search ||
      y
  if (d.route.shouldRevalidate) {
    let F = d.route.shouldRevalidate(
      Ut({ currentUrl: E, currentParams: C, nextUrl: R, nextParams: L }, c, {
        actionResult: f,
        defaultShouldRevalidate: V,
      })
    )
    if (typeof F == 'boolean') return F
  }
  return V
}
async function Es(i, u, c, v, d) {
  v === void 0 && (v = !1), d === void 0 && (d = !1)
  let y,
    f,
    x,
    E = new Promise((L, V) => (x = V)),
    C = () => x()
  u.signal.addEventListener('abort', C)
  try {
    let L = c.route[i]
    at(
      L,
      'Could not find the ' + i + ' to run on the "' + c.route.id + '" route'
    ),
      (f = await Promise.race([L({ request: u, params: c.params }), E]))
  } catch (L) {
    ;(y = fr.error), (f = L)
  } finally {
    u.signal.removeEventListener('abort', C)
  }
  if (f instanceof Response) {
    var R
    let L = f.status,
      V = f.headers.get('Location')
    if (d) throw f
    if (L >= 300 && L <= 399 && V != null) {
      if (v) throw f
      return {
        type: fr.redirect,
        status: L,
        location: V,
        revalidate: f.headers.get('X-Remix-Revalidate') !== null,
      }
    }
    let F
    return (
      (R = f.headers.get('Content-Type')) != null &&
      R.startsWith('application/json')
        ? (F = await f.json())
        : (F = await f.text()),
      y === fr.error
        ? { type: y, error: new _l(L, f.statusText, F) }
        : { type: fr.data, data: F, statusCode: f.status, headers: f.headers }
    )
  }
  return y === fr.error
    ? { type: y, error: f }
    : f instanceof CM
    ? { type: fr.deferred, deferredData: f }
    : { type: fr.data, data: f }
}
function Cs(i, u, c) {
  let v = jm(i).toString(),
    d = { signal: u }
  if (c) {
    let { formMethod: y, formEncType: f, formData: x } = c
    ;(d.method = y.toUpperCase()),
      (d.body = f === 'application/x-www-form-urlencoded' ? sC(x) : x)
  }
  return new Request(v, d)
}
function sC(i, u) {
  let c = new URLSearchParams(u)
  for (let [v, d] of i.entries())
    at(
      typeof d == 'string',
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
    ),
      c.append(v, d)
  return c
}
function DM(i, u, c, v, d) {
  let y = {},
    f = null,
    x,
    E = !1,
    C = {}
  return (
    c.forEach((R, L) => {
      let V = u[L].route.id
      if (
        (at(!Tl(R), 'Cannot handle redirect results in processLoaderData'),
        Ts(R))
      ) {
        let F = xl(i, V),
          $ = R.error
        v && (($ = Object.values(v)[0]), (v = void 0)),
          (f = Object.assign(f || {}, { [F.route.id]: $ })),
          E || ((E = !0), (x = uC(R.error) ? R.error.status : 500))
      } else
        go(R)
          ? (d == null || d.set(V, R.deferredData),
            (y[V] = R.deferredData.data))
          : ((y[V] = R.data),
            R.statusCode !== 200 && !E && (x = R.statusCode),
            R.headers && (C[V] = R.headers))
    }),
    v && (f = v),
    { loaderData: y, errors: f, statusCode: x || 200, loaderHeaders: C }
  )
}
function xE(i, u, c, v, d, y, f, x) {
  let { loaderData: E, errors: C } = DM(u, c, v, d, x)
  for (let L = 0; L < y.length; L++) {
    let [V, , F] = y[L]
    at(
      f !== void 0 && f[L] !== void 0,
      'Did not find corresponding fetcher result'
    )
    let $ = f[L]
    if (Ts($)) {
      var R
      let _ = xl(i.matches, F.route.id)
      ;((R = C) != null && R[_.route.id]) ||
        (C = Ut({}, C, { [_.route.id]: $.error })),
        i.fetchers.delete(V)
    } else {
      if (Tl($)) throw new Error('Unhandled fetcher revalidation redirect')
      if (go($)) throw new Error('Unhandled fetcher deferred data')
      {
        let _ = {
          state: 'idle',
          data: $.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        }
        i.fetchers.set(V, _)
      }
    }
  }
  return { loaderData: E, errors: C }
}
function Nm(i, u, c) {
  let v = Ut({}, u)
  return (
    c.forEach((d) => {
      let y = d.route.id
      u[y] === void 0 && i[y] !== void 0 && (v[y] = i[y])
    }),
    v
  )
}
function xl(i, u) {
  return (
    (u ? i.slice(0, i.findIndex((v) => v.route.id === u) + 1) : [...i])
      .reverse()
      .find((v) => v.route.errorElement) || i[0]
  )
}
function TE(i) {
  let u = i.find((c) => c.index || c.path === '' || c.path === '/') || {
    id: '__shim-404-route__',
  }
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: u }],
    route: u,
    error: new _l(404, 'Not Found', null),
  }
}
function NE(i) {
  let u = typeof i == 'string' ? i : ad(i)
  return (
    console.warn(
      "You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for " +
        ('[' + u + ']')
    ),
    {
      type: fr.error,
      error: new _l(
        405,
        'Method Not Allowed',
        'No action found for [' + u + ']'
      ),
    }
  )
}
function wE(i) {
  for (let u = i.length - 1; u >= 0; u--) {
    let c = i[u]
    if (Tl(c)) return c
  }
}
function ad(i) {
  return (i.pathname || '') + (i.search || '')
}
function _M(i, u) {
  return i.pathname === u.pathname && i.search === u.search && i.hash !== u.hash
}
function go(i) {
  return i.type === fr.deferred
}
function Ts(i) {
  return i.type === fr.error
}
function Tl(i) {
  return (i == null ? void 0 : i.type) === fr.redirect
}
async function DE(i, u, c, v, d) {
  for (let y = 0; y < u.length; y++) {
    let f = u[y],
      x = i[y].route.id
    go(f) &&
      (!v || v[x] !== void 0) &&
      (d == null || d.set(x, f.deferredData),
      await cC(f, c).then((E) => {
        d == null || d.delete(x), E && (u[y] = E)
      }))
  }
}
async function cC(i, u) {
  if (!i.deferredData.done) {
    let c = () => i.deferredData.cancel()
    if (
      (u.addEventListener('abort', c),
      await new Promise((d) => {
        i.deferredData.subscribe((y) => {
          u.removeEventListener('abort', c), (y || i.deferredData.done) && d(y)
        })
      }))
    )
      return
  }
  return { type: fr.data, data: i.deferredData.data }
}
function OM(i) {
  return new URLSearchParams(i).getAll('index').some((u) => u === '')
}
function _E(i, u) {
  let c = typeof u == 'string' ? ga(u).search : u.search
  return i[i.length - 1].route.index && !OM(c || '')
    ? i.slice(-2)[0]
    : i.slice(-1)[0]
}
function jm(i) {
  let u =
      typeof window < 'u' && typeof window.location < 'u'
        ? window.location.origin
        : 'unknown://unknown',
    c = typeof i == 'string' ? i : ad(i)
  return new URL(c, u)
}
const MM = ['window']
function LM(i) {
  let { window: u } = i,
    c = eM(i, MM),
    v = tM({ window: u })
  return TM(Ut({ history: v }, c))
}
var Xm = { exports: {} },
  Hm = {}
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function () {
  var i = w.exports,
    u = Symbol.for('react.element'),
    c = Symbol.for('react.portal'),
    v = Symbol.for('react.fragment'),
    d = Symbol.for('react.strict_mode'),
    y = Symbol.for('react.profiler'),
    f = Symbol.for('react.provider'),
    x = Symbol.for('react.context'),
    E = Symbol.for('react.forward_ref'),
    C = Symbol.for('react.suspense'),
    R = Symbol.for('react.suspense_list'),
    L = Symbol.for('react.memo'),
    V = Symbol.for('react.lazy'),
    F = Symbol.for('react.offscreen'),
    $ = Symbol.iterator,
    _ = '@@iterator'
  function ge(S) {
    if (S === null || typeof S != 'object') return null
    var I = ($ && S[$]) || S[_]
    return typeof I == 'function' ? I : null
  }
  var oe = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  function Z(S) {
    {
      for (
        var I = arguments.length, ne = new Array(I > 1 ? I - 1 : 0), Ne = 1;
        Ne < I;
        Ne++
      )
        ne[Ne - 1] = arguments[Ne]
      me('error', S, ne)
    }
  }
  function me(S, I, ne) {
    {
      var Ne = oe.ReactDebugCurrentFrame,
        Qe = Ne.getStackAddendum()
      Qe !== '' && ((I += '%s'), (ne = ne.concat([Qe])))
      var ct = ne.map(function (be) {
        return String(be)
      })
      ct.unshift('Warning: ' + I),
        Function.prototype.apply.call(console[S], console, ct)
    }
  }
  var Ee = !1,
    K = !1,
    Ce = !1,
    ee = !1,
    lt = !1,
    X
  X = Symbol.for('react.module.reference')
  function Re(S) {
    return !!(
      typeof S == 'string' ||
      typeof S == 'function' ||
      S === v ||
      S === y ||
      lt ||
      S === d ||
      S === C ||
      S === R ||
      ee ||
      S === F ||
      Ee ||
      K ||
      Ce ||
      (typeof S == 'object' &&
        S !== null &&
        (S.$$typeof === V ||
          S.$$typeof === L ||
          S.$$typeof === f ||
          S.$$typeof === x ||
          S.$$typeof === E ||
          S.$$typeof === X ||
          S.getModuleId !== void 0))
    )
  }
  function Te(S, I, ne) {
    var Ne = S.displayName
    if (Ne) return Ne
    var Qe = I.displayName || I.name || ''
    return Qe !== '' ? ne + '(' + Qe + ')' : ne
  }
  function nt(S) {
    return S.displayName || 'Context'
  }
  function ve(S) {
    if (S == null) return null
    if (
      (typeof S.tag == 'number' &&
        Z(
          'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
        ),
      typeof S == 'function')
    )
      return S.displayName || S.name || null
    if (typeof S == 'string') return S
    switch (S) {
      case v:
        return 'Fragment'
      case c:
        return 'Portal'
      case y:
        return 'Profiler'
      case d:
        return 'StrictMode'
      case C:
        return 'Suspense'
      case R:
        return 'SuspenseList'
    }
    if (typeof S == 'object')
      switch (S.$$typeof) {
        case x:
          var I = S
          return nt(I) + '.Consumer'
        case f:
          var ne = S
          return nt(ne._context) + '.Provider'
        case E:
          return Te(S, S.render, 'ForwardRef')
        case L:
          var Ne = S.displayName || null
          return Ne !== null ? Ne : ve(S.type) || 'Memo'
        case V: {
          var Qe = S,
            ct = Qe._payload,
            be = Qe._init
          try {
            return ve(be(ct))
          } catch {
            return null
          }
        }
      }
    return null
  }
  var He = Object.assign,
    vt = 0,
    ze,
    le,
    Ue,
    Kt,
    zn,
    Xt,
    Ht
  function vn() {}
  vn.__reactDisabledLog = !0
  function hn() {
    {
      if (vt === 0) {
        ;(ze = console.log),
          (le = console.info),
          (Ue = console.warn),
          (Kt = console.error),
          (zn = console.group),
          (Xt = console.groupCollapsed),
          (Ht = console.groupEnd)
        var S = { configurable: !0, enumerable: !0, value: vn, writable: !0 }
        Object.defineProperties(console, {
          info: S,
          log: S,
          warn: S,
          error: S,
          group: S,
          groupCollapsed: S,
          groupEnd: S,
        })
      }
      vt++
    }
  }
  function wr() {
    {
      if ((vt--, vt === 0)) {
        var S = { configurable: !0, enumerable: !0, writable: !0 }
        Object.defineProperties(console, {
          log: He({}, S, { value: ze }),
          info: He({}, S, { value: le }),
          warn: He({}, S, { value: Ue }),
          error: He({}, S, { value: Kt }),
          group: He({}, S, { value: zn }),
          groupCollapsed: He({}, S, { value: Xt }),
          groupEnd: He({}, S, { value: Ht }),
        })
      }
      vt < 0 &&
        Z(
          'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
        )
    }
  }
  var dr = oe.ReactCurrentDispatcher,
    pr
  function mn(S, I, ne) {
    {
      if (pr === void 0)
        try {
          throw Error()
        } catch (Qe) {
          var Ne = Qe.stack.trim().match(/\n( *(at )?)/)
          pr = (Ne && Ne[1]) || ''
        }
      return (
        `
` +
        pr +
        S
      )
    }
  }
  var Jt = !1,
    yn
  {
    var wn = typeof WeakMap == 'function' ? WeakMap : Map
    yn = new wn()
  }
  function rn(S, I) {
    if (!S || Jt) return ''
    {
      var ne = yn.get(S)
      if (ne !== void 0) return ne
    }
    var Ne
    Jt = !0
    var Qe = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    var ct
    ;(ct = dr.current), (dr.current = null), hn()
    try {
      if (I) {
        var be = function () {
          throw Error()
        }
        if (
          (Object.defineProperty(be.prototype, 'props', {
            set: function () {
              throw Error()
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(be, [])
          } catch (hr) {
            Ne = hr
          }
          Reflect.construct(S, [], be)
        } else {
          try {
            be.call()
          } catch (hr) {
            Ne = hr
          }
          S.call(be.prototype)
        }
      } else {
        try {
          throw Error()
        } catch (hr) {
          Ne = hr
        }
        S()
      }
    } catch (hr) {
      if (hr && Ne && typeof hr.stack == 'string') {
        for (
          var Ve = hr.stack.split(`
`),
            Vt = Ne.stack.split(`
`),
            Ct = Ve.length - 1,
            Ke = Vt.length - 1;
          Ct >= 1 && Ke >= 0 && Ve[Ct] !== Vt[Ke];

        )
          Ke--
        for (; Ct >= 1 && Ke >= 0; Ct--, Ke--)
          if (Ve[Ct] !== Vt[Ke]) {
            if (Ct !== 1 || Ke !== 1)
              do
                if ((Ct--, Ke--, Ke < 0 || Ve[Ct] !== Vt[Ke])) {
                  var $n =
                    `
` + Ve[Ct].replace(' at new ', ' at ')
                  return (
                    S.displayName &&
                      $n.includes('<anonymous>') &&
                      ($n = $n.replace('<anonymous>', S.displayName)),
                    typeof S == 'function' && yn.set(S, $n),
                    $n
                  )
                }
              while (Ct >= 1 && Ke >= 0)
            break
          }
      }
    } finally {
      ;(Jt = !1), (dr.current = ct), wr(), (Error.prepareStackTrace = Qe)
    }
    var na = S ? S.displayName || S.name : '',
      ki = na ? mn(na) : ''
    return typeof S == 'function' && yn.set(S, ki), ki
  }
  function zt(S, I, ne) {
    return rn(S, !1)
  }
  function gn(S) {
    var I = S.prototype
    return !!(I && I.isReactComponent)
  }
  function Gt(S, I, ne) {
    if (S == null) return ''
    if (typeof S == 'function') return rn(S, gn(S))
    if (typeof S == 'string') return mn(S)
    switch (S) {
      case C:
        return mn('Suspense')
      case R:
        return mn('SuspenseList')
    }
    if (typeof S == 'object')
      switch (S.$$typeof) {
        case E:
          return zt(S.render)
        case L:
          return Gt(S.type, I, ne)
        case V: {
          var Ne = S,
            Qe = Ne._payload,
            ct = Ne._init
          try {
            return Gt(ct(Qe), I, ne)
          } catch {}
        }
      }
    return ''
  }
  var Ft = Object.prototype.hasOwnProperty,
    qt = {},
    qn = oe.ReactDebugCurrentFrame
  function Qn(S) {
    if (S) {
      var I = S._owner,
        ne = Gt(S.type, S._source, I ? I.type : null)
      qn.setExtraStackFrame(ne)
    } else qn.setExtraStackFrame(null)
  }
  function P(S, I, ne, Ne, Qe) {
    {
      var ct = Function.call.bind(Ft)
      for (var be in S)
        if (ct(S, be)) {
          var Ve = void 0
          try {
            if (typeof S[be] != 'function') {
              var Vt = Error(
                (Ne || 'React class') +
                  ': ' +
                  ne +
                  ' type `' +
                  be +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof S[be] +
                  '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
              )
              throw ((Vt.name = 'Invariant Violation'), Vt)
            }
            Ve = S[be](
              I,
              be,
              Ne,
              ne,
              null,
              'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
            )
          } catch (Ct) {
            Ve = Ct
          }
          Ve &&
            !(Ve instanceof Error) &&
            (Qn(Qe),
            Z(
              '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
              Ne || 'React class',
              ne,
              be,
              typeof Ve
            ),
            Qn(null)),
            Ve instanceof Error &&
              !(Ve.message in qt) &&
              ((qt[Ve.message] = !0),
              Qn(Qe),
              Z('Failed %s type: %s', ne, Ve.message),
              Qn(null))
        }
    }
  }
  var G = Array.isArray
  function q(S) {
    return G(S)
  }
  function he(S) {
    {
      var I = typeof Symbol == 'function' && Symbol.toStringTag,
        ne = (I && S[Symbol.toStringTag]) || S.constructor.name || 'Object'
      return ne
    }
  }
  function Be(S) {
    try {
      return Ye(S), !1
    } catch {
      return !0
    }
  }
  function Ye(S) {
    return '' + S
  }
  function Fe(S) {
    if (Be(S))
      return (
        Z(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          he(S)
        ),
        Ye(S)
      )
  }
  var xe = oe.ReactCurrentOwner,
    We = { key: !0, ref: !0, __self: !0, __source: !0 },
    it,
    Nt,
    J
  J = {}
  function ce(S) {
    if (Ft.call(S, 'ref')) {
      var I = Object.getOwnPropertyDescriptor(S, 'ref').get
      if (I && I.isReactWarning) return !1
    }
    return S.ref !== void 0
  }
  function Me(S) {
    if (Ft.call(S, 'key')) {
      var I = Object.getOwnPropertyDescriptor(S, 'key').get
      if (I && I.isReactWarning) return !1
    }
    return S.key !== void 0
  }
  function qe(S, I) {
    if (
      typeof S.ref == 'string' &&
      xe.current &&
      I &&
      xe.current.stateNode !== I
    ) {
      var ne = ve(xe.current.type)
      J[ne] ||
        (Z(
          'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
          ve(xe.current.type),
          S.ref
        ),
        (J[ne] = !0))
    }
  }
  function ot(S, I) {
    {
      var ne = function () {
        it ||
          ((it = !0),
          Z(
            '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            I
          ))
      }
      ;(ne.isReactWarning = !0),
        Object.defineProperty(S, 'key', { get: ne, configurable: !0 })
    }
  }
  function Ot(S, I) {
    {
      var ne = function () {
        Nt ||
          ((Nt = !0),
          Z(
            '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            I
          ))
      }
      ;(ne.isReactWarning = !0),
        Object.defineProperty(S, 'ref', { get: ne, configurable: !0 })
    }
  }
  var Lt = function (S, I, ne, Ne, Qe, ct, be) {
    var Ve = { $$typeof: u, type: S, key: I, ref: ne, props: be, _owner: ct }
    return (
      (Ve._store = {}),
      Object.defineProperty(Ve._store, 'validated', {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(Ve, '_self', {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne,
      }),
      Object.defineProperty(Ve, '_source', {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Qe,
      }),
      Object.freeze && (Object.freeze(Ve.props), Object.freeze(Ve)),
      Ve
    )
  }
  function ht(S, I, ne, Ne, Qe) {
    {
      var ct,
        be = {},
        Ve = null,
        Vt = null
      ne !== void 0 && (Fe(ne), (Ve = '' + ne)),
        Me(I) && (Fe(I.key), (Ve = '' + I.key)),
        ce(I) && ((Vt = I.ref), qe(I, Qe))
      for (ct in I) Ft.call(I, ct) && !We.hasOwnProperty(ct) && (be[ct] = I[ct])
      if (S && S.defaultProps) {
        var Ct = S.defaultProps
        for (ct in Ct) be[ct] === void 0 && (be[ct] = Ct[ct])
      }
      if (Ve || Vt) {
        var Ke =
          typeof S == 'function' ? S.displayName || S.name || 'Unknown' : S
        Ve && ot(be, Ke), Vt && Ot(be, Ke)
      }
      return Lt(S, Ve, Vt, Qe, Ne, xe.current, be)
    }
  }
  var $e = oe.ReactCurrentOwner,
    Bt = oe.ReactDebugCurrentFrame
  function yt(S) {
    if (S) {
      var I = S._owner,
        ne = Gt(S.type, S._source, I ? I.type : null)
      Bt.setExtraStackFrame(ne)
    } else Bt.setExtraStackFrame(null)
  }
  var Tt
  Tt = !1
  function Dr(S) {
    return typeof S == 'object' && S !== null && S.$$typeof === u
  }
  function vr() {
    {
      if ($e.current) {
        var S = ve($e.current.type)
        if (S)
          return (
            `

Check the render method of \`` +
            S +
            '`.'
          )
      }
      return ''
    }
  }
  function Zr(S) {
    {
      if (S !== void 0) {
        var I = S.fileName.replace(/^.*[\\\/]/, ''),
          ne = S.lineNumber
        return (
          `

Check your code at ` +
          I +
          ':' +
          ne +
          '.'
        )
      }
      return ''
    }
  }
  var an = {}
  function bn(S) {
    {
      var I = vr()
      if (!I) {
        var ne = typeof S == 'string' ? S : S.displayName || S.name
        ne &&
          (I =
            `

Check the top-level render call using <` +
            ne +
            '>.')
      }
      return I
    }
  }
  function ea(S, I) {
    {
      if (!S._store || S._store.validated || S.key != null) return
      S._store.validated = !0
      var ne = bn(I)
      if (an[ne]) return
      an[ne] = !0
      var Ne = ''
      S &&
        S._owner &&
        S._owner !== $e.current &&
        (Ne = ' It was passed a child from ' + ve(S._owner.type) + '.'),
        yt(S),
        Z(
          'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
          ne,
          Ne
        ),
        yt(null)
    }
  }
  function ba(S, I) {
    {
      if (typeof S != 'object') return
      if (q(S))
        for (var ne = 0; ne < S.length; ne++) {
          var Ne = S[ne]
          Dr(Ne) && ea(Ne, I)
        }
      else if (Dr(S)) S._store && (S._store.validated = !0)
      else if (S) {
        var Qe = ge(S)
        if (typeof Qe == 'function' && Qe !== S.entries)
          for (var ct = Qe.call(S), be; !(be = ct.next()).done; )
            Dr(be.value) && ea(be.value, I)
      }
    }
  }
  function Sa(S) {
    {
      var I = S.type
      if (I == null || typeof I == 'string') return
      var ne
      if (typeof I == 'function') ne = I.propTypes
      else if (typeof I == 'object' && (I.$$typeof === E || I.$$typeof === L))
        ne = I.propTypes
      else return
      if (ne) {
        var Ne = ve(I)
        P(ne, S.props, 'prop', Ne, S)
      } else if (I.PropTypes !== void 0 && !Tt) {
        Tt = !0
        var Qe = ve(I)
        Z(
          'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
          Qe || 'Unknown'
        )
      }
      typeof I.getDefaultProps == 'function' &&
        !I.getDefaultProps.isReactClassApproved &&
        Z(
          'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
        )
    }
  }
  function Ka(S) {
    {
      for (var I = Object.keys(S.props), ne = 0; ne < I.length; ne++) {
        var Ne = I[ne]
        if (Ne !== 'children' && Ne !== 'key') {
          yt(S),
            Z(
              'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
              Ne
            ),
            yt(null)
          break
        }
      }
      S.ref !== null &&
        (yt(S),
        Z('Invalid attribute `ref` supplied to `React.Fragment`.'),
        yt(null))
    }
  }
  function Xa(S, I, ne, Ne, Qe, ct) {
    {
      var be = Re(S)
      if (!be) {
        var Ve = ''
        ;(S === void 0 ||
          (typeof S == 'object' &&
            S !== null &&
            Object.keys(S).length === 0)) &&
          (Ve +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.")
        var Vt = Zr(Qe)
        Vt ? (Ve += Vt) : (Ve += vr())
        var Ct
        S === null
          ? (Ct = 'null')
          : q(S)
          ? (Ct = 'array')
          : S !== void 0 && S.$$typeof === u
          ? ((Ct = '<' + (ve(S.type) || 'Unknown') + ' />'),
            (Ve =
              ' Did you accidentally export a JSX literal instead of a component?'))
          : (Ct = typeof S),
          Z(
            'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            Ct,
            Ve
          )
      }
      var Ke = ht(S, I, ne, Qe, ct)
      if (Ke == null) return Ke
      if (be) {
        var $n = I.children
        if ($n !== void 0)
          if (Ne)
            if (q($n)) {
              for (var na = 0; na < $n.length; na++) ba($n[na], S)
              Object.freeze && Object.freeze($n)
            } else
              Z(
                'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
              )
          else ba($n, S)
      }
      return S === v ? Ka(Ke) : Sa(Ke), Ke
    }
  }
  var ta = Xa
  ;(Hm.Fragment = v), (Hm.jsxDEV = ta)
})()
;(function (i) {
  i.exports = Hm
})(Xm)
const Li = Xm.exports.Fragment,
  D = Xm.exports.jsxDEV
var Tn =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/react-router@6.4.0-pre.10_react@18.2.0/node_modules/react-router/dist/index.js'
function AM(i, u) {
  return (i === u && (i !== 0 || 1 / i === 1 / u)) || (i !== i && u !== u)
}
const fC = typeof Object.is == 'function' ? Object.is : AM,
  { useState: kM, useEffect: UM, useLayoutEffect: FM, useDebugValue: jM } = ed
let OE = !1,
  ME = !1
function HM(i, u, c) {
  OE ||
    ('startTransition' in ed &&
      ((OE = !0),
      console.error(
        'You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.'
      )))
  const v = u()
  if (!ME) {
    const f = u()
    fC(v, f) ||
      (console.error(
        'The result of getSnapshot should be cached to avoid an infinite loop'
      ),
      (ME = !0))
  }
  const [{ inst: d }, y] = kM({ inst: { value: v, getSnapshot: u } })
  return (
    FM(() => {
      ;(d.value = v), (d.getSnapshot = u), wm(d) && y({ inst: d })
    }, [i, v, u]),
    UM(
      () => (
        wm(d) && y({ inst: d }),
        i(() => {
          wm(d) && y({ inst: d })
        })
      ),
      [i]
    ),
    jM(v),
    v
  )
}
function wm(i) {
  const u = i.getSnapshot,
    c = i.value
  try {
    const v = u()
    return !fC(c, v)
  } catch {
    return !0
  }
}
function zM(i, u, c) {
  return u()
}
const $M =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  PM = !$M,
  BM = PM ? zM : HM,
  VM = 'useSyncExternalStore' in ed ? ((i) => i.useSyncExternalStore)(ed) : BM,
  dC = w.exports.createContext(null)
dC.displayName = 'DataStaticRouterContext'
const Ds = w.exports.createContext(null)
Ds.displayName = 'DataRouter'
const _s = w.exports.createContext(null)
_s.displayName = 'DataRouterState'
const pC = w.exports.createContext(null)
pC.displayName = 'Deferred'
const id = w.exports.createContext(null)
id.displayName = 'Navigation'
const od = w.exports.createContext(null)
od.displayName = 'Location'
const Co = w.exports.createContext({ outlet: null, matches: [] })
Co.displayName = 'Route'
const Jm = w.exports.createContext(null)
Jm.displayName = 'RouteError'
function YM(i) {
  Ol() ||
    at(!1, 'useHref() may be used only in the context of a <Router> component.')
  let { basename: u, navigator: c } = w.exports.useContext(id),
    { hash: v, pathname: d, search: y } = ws(i),
    f = d
  return (
    u !== '/' && (f = d === '/' ? u : Oi([u, d])),
    c.createHref({ pathname: f, search: y, hash: v })
  )
}
function Ol() {
  return w.exports.useContext(od) != null
}
function Os() {
  return (
    Ol() ||
      at(
        !1,
        'useLocation() may be used only in the context of a <Router> component.'
      ),
    w.exports.useContext(od).location
  )
}
function IM(i) {
  Ol() ||
    at(
      !1,
      'useMatch() may be used only in the context of a <Router> component.'
    )
  let { pathname: u } = Os()
  return w.exports.useMemo(() => Km(i, u), [u, i])
}
function vC(i) {
  return i.filter(
    (u, c) =>
      c === 0 || (!u.route.index && u.pathnameBase !== i[c - 1].pathnameBase)
  )
}
function WM() {
  Ol() ||
    at(
      !1,
      'useNavigate() may be used only in the context of a <Router> component.'
    )
  let { basename: i, navigator: u } = w.exports.useContext(id),
    { matches: c } = w.exports.useContext(Co),
    { pathname: v } = Os(),
    d = JSON.stringify(vC(c).map((x) => x.pathnameBase)),
    y = w.exports.useRef(!1)
  return (
    w.exports.useEffect(() => {
      y.current = !0
    }),
    w.exports.useCallback(
      function (x, E) {
        if (
          (E === void 0 && (E = {}),
          So(
            y.current,
            'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
          ),
          !y.current)
        )
          return
        if (typeof x == 'number') {
          u.go(x)
          return
        }
        let C = lC(x, JSON.parse(d), v)
        i !== '/' &&
          (C.pathname = C.pathname === '/' ? i : Oi([i, C.pathname])),
          (E.replace ? u.replace : u.push)(C, E.state, E)
      },
      [i, u, d, v]
    )
  )
}
function ws(i) {
  let { matches: u } = w.exports.useContext(Co),
    { pathname: c } = Os(),
    v = JSON.stringify(vC(u).map((d) => d.pathnameBase))
  return w.exports.useMemo(() => lC(i, JSON.parse(v), c), [i, v, c])
}
function GM(i, u) {
  Ol() ||
    at(
      !1,
      'useRoutes() may be used only in the context of a <Router> component.'
    )
  let c = w.exports.useContext(_s),
    { matches: v } = w.exports.useContext(Co),
    d = v[v.length - 1],
    y = d ? d.params : {},
    f = d ? d.pathname : '/',
    x = d ? d.pathnameBase : '/',
    E = d && d.route
  {
    let _ = (E && E.path) || ''
    eL(
      f,
      !E || _.endsWith('*'),
      'You rendered descendant <Routes> (or called `useRoutes()`) at ' +
        ('"' + f + '" (under <Route path="' + _ + '">) but the ') +
        `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` +
        ('Please change the parent <Route path="' + _ + '"> to <Route ') +
        ('path="' + (_ === '/' ? '*' : _ + '/*') + '">.')
    )
  }
  let C = Os(),
    R
  if (u) {
    var L
    let _ = typeof u == 'string' ? ga(u) : u
    x === '/' ||
      ((L = _.pathname) == null ? void 0 : L.startsWith(x)) ||
      at(
        !1,
        'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was ' +
          ('matched by all parent routes. The current pathname base is "' +
            x +
            '" ') +
          ('but pathname "' +
            _.pathname +
            '" was given in the `location` prop.')
      ),
      (R = _)
  } else R = C
  let V = R.pathname || '/',
    F = x === '/' ? V : V.slice(x.length) || '/',
    $ = xs(i, { pathname: F })
  return (
    So(
      E || $ != null,
      'No routes matched location "' + R.pathname + R.search + R.hash + '" '
    ),
    So(
      $ == null || $[$.length - 1].route.element !== void 0,
      'Matched leaf route at location "' +
        R.pathname +
        R.search +
        R.hash +
        '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'
    ),
    XM(
      $ &&
        $.map((_) =>
          Object.assign({}, _, {
            params: Object.assign({}, y, _.params),
            pathname: Oi([x, _.pathname]),
            pathnameBase: _.pathnameBase === '/' ? x : Oi([x, _.pathnameBase]),
          })
        ),
      v,
      c || void 0
    )
  )
}
function qM() {
  let i = ZM(),
    u = uC(i)
      ? i.status + ' ' + i.statusText
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    c = i instanceof Error ? i.stack : null,
    v = 'rgba(200,200,200, 0.5)',
    d = { padding: '0.5rem', backgroundColor: v },
    y = { padding: '2px 4px', backgroundColor: v }
  return D(
    Li,
    {
      children: [
        D(
          'h2',
          { children: 'Unhandled Thrown Error!' },
          void 0,
          !1,
          { fileName: Tn, lineNumber: 565, columnNumber: 78 },
          this
        ),
        D(
          'h3',
          { style: { fontStyle: 'italic' }, children: u },
          void 0,
          !1,
          { fileName: Tn, lineNumber: 565, columnNumber: 151 },
          this
        ),
        c
          ? D(
              'pre',
              { style: d, children: c },
              void 0,
              !1,
              { fileName: Tn, lineNumber: 569, columnNumber: 37 },
              this
            )
          : null,
        D(
          'p',
          { children: '\u{1F4BF} Hey developer \u{1F44B}' },
          void 0,
          !1,
          { fileName: Tn, lineNumber: 571, columnNumber: 34 },
          this
        ),
        D(
          'p',
          {
            children: [
              'You can provide a way better UX than this when your app throws errors by providing your own\xA0',
              D(
                'code',
                { style: y, children: 'errorElement' },
                void 0,
                !1,
                { fileName: Tn, lineNumber: 571, columnNumber: 265 },
                this
              ),
              ' props on\xA0',
              D(
                'code',
                { style: y, children: '<Route>' },
                void 0,
                !1,
                { fileName: Tn, lineNumber: 573, columnNumber: 53 },
                this
              ),
            ],
          },
          void 0,
          !0,
          { fileName: Tn, lineNumber: 571, columnNumber: 122 },
          this
        ),
      ],
    },
    void 0,
    !0
  )
}
class QM extends w.exports.Component {
  constructor(u) {
    super(u), (this.state = { location: u.location, error: u.error })
  }
  static getDerivedStateFromError(u) {
    return { error: u }
  }
  static getDerivedStateFromProps(u, c) {
    return c.location !== u.location
      ? { error: u.error, location: u.location }
      : { error: u.error || c.error, location: c.location }
  }
  componentDidCatch(u, c) {
    console.error('React Router caught the following error during render', u, c)
  }
  render() {
    return this.state.error
      ? D(
          Jm.Provider,
          { value: this.state.error, children: this.props.component },
          void 0,
          !1,
          { fileName: Tn, lineNumber: 624, columnNumber: 44 },
          this
        )
      : this.props.children
  }
}
function KM(i) {
  let { routeContext: u, match: c, children: v } = i,
    d = w.exports.useContext(dC)
  return (
    d && c.route.errorElement && (d._deepestRenderedBoundaryId = c.route.id),
    D(
      Co.Provider,
      { value: u, children: v },
      void 0,
      !1,
      { fileName: Tn, lineNumber: 645, columnNumber: 23 },
      this
    )
  )
}
function XM(i, u, c) {
  if ((u === void 0 && (u = []), i == null))
    if (c != null && c.errors) i = c.matches
    else return null
  let v = i,
    d = c == null ? void 0 : c.errors
  if (d != null) {
    let y = v.findIndex(
      (f) => f.route.id && (d == null ? void 0 : d[f.route.id])
    )
    y >= 0 ||
      at(!1, 'Could not find a matching route for the current errors: ' + d),
      (v = v.slice(0, Math.min(v.length, y + 1)))
  }
  return v.reduceRight((y, f, x) => {
    let E = f.route.id ? (d == null ? void 0 : d[f.route.id]) : null,
      C = c
        ? f.route.errorElement ||
          D(
            qM,
            {},
            void 0,
            !1,
            { fileName: Tn, lineNumber: 678, columnNumber: 83 },
            this
          )
        : null,
      R = () =>
        D(
          KM,
          {
            match: f,
            routeContext: { outlet: y, matches: u.concat(v.slice(0, x + 1)) },
            children: E ? C : f.route.element !== void 0 ? f.route.element : y,
          },
          void 0,
          !1,
          { fileName: Tn, lineNumber: 680, columnNumber: 42 },
          this
        )
    return c && (f.route.errorElement || x === 0)
      ? D(
          QM,
          { location: c.location, component: C, error: E, children: R() },
          void 0,
          !1,
          { fileName: Tn, lineNumber: 691, columnNumber: 88 },
          this
        )
      : R()
  }, null)
}
var zm
;(function (i) {
  ;(i.UseLoaderData = 'useLoaderData'),
    (i.UseActionData = 'useActionData'),
    (i.UseRouteError = 'useRouteError'),
    (i.UseNavigation = 'useNavigation'),
    (i.UseRouteLoaderData = 'useRouteLoaderData'),
    (i.UseMatches = 'useMatches'),
    (i.UseRevalidator = 'useRevalidator')
})(zm || (zm = {}))
function JM(i) {
  let u = w.exports.useContext(_s)
  return u || at(!1, i + ' must be used within a DataRouterStateContext'), u
}
function ZM() {
  var i
  let u = w.exports.useContext(Jm),
    c = JM(zm.UseRouteError),
    v = w.exports.useContext(Co),
    d = v.matches[v.matches.length - 1],
    y = w.exports.useContext(pC)
  return y && y instanceof Error
    ? y
    : u ||
        (v || at(!1, 'useRouteError must be used inside a RouteContext'),
        d.route.id ||
          at(
            !1,
            'useRouteError can only be used on routes that contain a unique "id"'
          ),
        (i = c.errors) == null ? void 0 : i[d.route.id])
}
const LE = {}
function eL(i, u, c) {
  !u && !LE[i] && ((LE[i] = !0), So(!1, c))
}
function tL(i) {
  let { basename: u, children: c, fallbackElement: v, router: d } = i,
    y = VM(
      d.subscribe,
      () => d.state,
      () => d.state
    ),
    f = w.exports.useMemo(
      () => ({
        createHref: d.createHref,
        go: (E) => d.navigate(E),
        push: (E, C, R) =>
          d.navigate(E, {
            state: C,
            resetScroll: R == null ? void 0 : R.resetScroll,
          }),
        replace: (E, C, R) =>
          d.navigate(E, {
            replace: !0,
            state: C,
            resetScroll: R == null ? void 0 : R.resetScroll,
          }),
      }),
      [d]
    ),
    x = { router: d, navigator: f, static: !1, basename: u || '/' }
  return y.initialized
    ? D(
        Ds.Provider,
        {
          value: x,
          children: D(
            _s.Provider,
            { value: y, children: c },
            void 0,
            !1,
            { fileName: Tn, lineNumber: 891, columnNumber: 19 },
            this
          ),
        },
        void 0,
        !1,
        { fileName: Tn, lineNumber: 889, columnNumber: 23 },
        this
      )
    : D(Li, { children: v }, void 0, !1)
}
function nL() {
  let i = w.exports.useContext(Ds)
  i || at(!1, '<DataRouter> may only be rendered within a DataRouterContext')
  let { router: u, navigator: c, basename: v } = i
  return D(
    rL,
    {
      basename: v,
      location: u.state.location,
      navigationType: u.state.historyAction,
      navigator: c,
      children: D(
        aL,
        {},
        void 0,
        !1,
        { fileName: Tn, lineNumber: 914, columnNumber: 19 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: Tn, lineNumber: 909, columnNumber: 23 },
    this
  )
}
function $m(i) {
  at(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  )
}
function rL(i) {
  let {
    basename: u = '/',
    children: c = null,
    location: v,
    navigationType: d = rr.Pop,
    navigator: y,
    static: f = !1,
  } = i
  Ol() &&
    at(
      !1,
      'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
    )
  let x = u.replace(/^\/*/, '/'),
    E = w.exports.useMemo(
      () => ({ basename: x, navigator: y, static: f }),
      [x, y, f]
    )
  typeof v == 'string' && (v = ga(v))
  let {
      pathname: C = '/',
      search: R = '',
      hash: L = '',
      state: V = null,
      key: F = 'default',
    } = v,
    $ = w.exports.useMemo(() => {
      let _ = oC(C, x)
      return _ == null
        ? null
        : { pathname: _, search: R, hash: L, state: V, key: F }
    }, [x, C, R, L, V, F])
  return (
    So(
      $ != null,
      '<Router basename="' +
        x +
        '"> is not able to match the URL ' +
        ('"' + C + R + L + '" because it does not start with the ') +
        "basename, so the <Router> won't render anything."
    ),
    $ == null
      ? null
      : D(
          id.Provider,
          {
            value: E,
            children: D(
              od.Provider,
              { children: c, value: { location: $, navigationType: d } },
              void 0,
              !1,
              { fileName: Tn, lineNumber: 1091, columnNumber: 19 },
              this
            ),
          },
          void 0,
          !1,
          { fileName: Tn, lineNumber: 1089, columnNumber: 23 },
          this
        )
  )
}
function aL(i) {
  let { children: u, location: c } = i,
    v = w.exports.useContext(Ds),
    d = v && !u ? v.router.routes : td(u)
  return GM(d, c)
}
function td(i, u) {
  u === void 0 && (u = [])
  let c = []
  return (
    w.exports.Children.forEach(i, (v, d) => {
      if (!w.exports.isValidElement(v)) return
      if (v.type === w.exports.Fragment) {
        c.push.apply(c, td(v.props.children, u))
        return
      }
      v.type !== $m &&
        at(
          !1,
          '[' +
            (typeof v.type == 'string' ? v.type : v.type.name) +
            '] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>'
        )
      let y = [...u, d],
        f = {
          id: v.props.id || y.join('-'),
          caseSensitive: v.props.caseSensitive,
          element: v.props.element,
          index: v.props.index,
          path: v.props.path,
          loader: v.props.loader,
          action: v.props.action,
          errorElement: v.props.errorElement,
          shouldRevalidate: v.props.shouldRevalidate,
          handle: v.props.handle,
        }
      v.props.children && (f.children = td(v.props.children, y)), c.push(f)
    }),
    c
  )
}
var wl =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/react-router-dom@6.4.0-pre.10_biqbaboplfbrettd7655fr4n2y/node_modules/react-router-dom/dist/index.js'
function Zm(i, u) {
  if (i == null) return {}
  var c = {},
    v = Object.keys(i),
    d,
    y
  for (y = 0; y < v.length; y++)
    (d = v[y]), !(u.indexOf(d) >= 0) && (c[d] = i[d])
  return c
}
const Zf = 'get',
  Dm = 'application/x-www-form-urlencoded'
function ld(i) {
  return i != null && typeof i.tagName == 'string'
}
function iL(i) {
  return ld(i) && i.tagName.toLowerCase() === 'button'
}
function oL(i) {
  return ld(i) && i.tagName.toLowerCase() === 'form'
}
function lL(i) {
  return ld(i) && i.tagName.toLowerCase() === 'input'
}
function uL(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)
}
function sL(i, u) {
  return i.button === 0 && (!u || u === '_self') && !uL(i)
}
function cL(i, u, c) {
  let v, d, y, f
  if (oL(i)) {
    let R = c.submissionTrigger
    ;(v = c.method || i.getAttribute('method') || Zf),
      (d = c.action || i.getAttribute('action') || u),
      (y = c.encType || i.getAttribute('enctype') || Dm),
      (f = new FormData(i)),
      R && R.name && f.append(R.name, R.value)
  } else if (iL(i) || (lL(i) && (i.type === 'submit' || i.type === 'image'))) {
    let R = i.form
    if (R == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      )
    ;(v =
      c.method ||
      i.getAttribute('formmethod') ||
      R.getAttribute('method') ||
      Zf),
      (d =
        c.action ||
        i.getAttribute('formaction') ||
        R.getAttribute('action') ||
        u),
      (y =
        c.encType ||
        i.getAttribute('formenctype') ||
        R.getAttribute('enctype') ||
        Dm),
      (f = new FormData(R)),
      i.name && f.set(i.name, i.value)
  } else {
    if (ld(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      )
    if (
      ((v = c.method || Zf),
      (d = c.action || u),
      (y = c.encType || Dm),
      i instanceof FormData)
    )
      f = i
    else if (((f = new FormData()), i instanceof URLSearchParams))
      for (let [R, L] of i) f.append(R, L)
    else if (i != null) for (let R of Object.keys(i)) f.append(R, i[R])
  }
  let { protocol: x, host: E } = window.location
  return { url: new URL(d, x + '//' + E), method: v, encType: y, formData: f }
}
const fL = [
    'onClick',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'resetScroll',
  ],
  dL = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'children',
  ],
  pL = [
    'reloadDocument',
    'replace',
    'method',
    'action',
    'onSubmit',
    'fetcherKey',
    'routeId',
  ]
let _m
function vL(i) {
  let {
    basename: u,
    children: c,
    hydrationData: v,
    fallbackElement: d,
    routes: y,
    window: f,
  } = i
  return (
    _m ||
      (_m = LM({
        basename: u,
        hydrationData: v || window.__staticRouterHydrationData,
        window: f,
        routes: y || td(c),
      }).initialize()),
    D(
      tL,
      {
        router: _m,
        basename: u,
        fallbackElement: d,
        children: D(
          nL,
          {},
          void 0,
          !1,
          { fileName: wl, lineNumber: 254, columnNumber: 19 },
          this
        ),
      },
      void 0,
      !1,
      { fileName: wl, lineNumber: 250, columnNumber: 23 },
      this
    )
  )
}
const hC = w.exports.forwardRef(function (u, c) {
  let {
      onClick: v,
      reloadDocument: d,
      replace: y,
      state: f,
      target: x,
      to: E,
      resetScroll: C,
    } = u,
    R = Zm(u, fL),
    L = YM(E),
    V = yL(E, { replace: y, state: f, target: x, resetScroll: C })
  function F($) {
    v && v($), $.defaultPrevented || V($)
  }
  return D(
    'a',
    { ...R, href: L, onClick: d ? v : F, ref: c, target: x },
    void 0,
    !1,
    { fileName: wl, lineNumber: 388, columnNumber: 5 },
    this
  )
})
hC.displayName = 'Link'
const hL = w.exports.forwardRef(function (u, c) {
  let {
      'aria-current': v = 'page',
      caseSensitive: d = !1,
      className: y = '',
      end: f = !1,
      style: x,
      to: E,
      children: C,
    } = u,
    R = Zm(u, dL),
    L = ws(E),
    V = IM({ path: L.pathname, end: f, caseSensitive: d }),
    F = w.exports.useContext(_s),
    $ = F == null ? void 0 : F.navigation.location,
    _ = ws($ || ''),
    oe =
      w.exports.useMemo(
        () =>
          $
            ? Km({ path: L.pathname, end: f, caseSensitive: d }, _.pathname)
            : null,
        [$, L.pathname, d, f, _.pathname]
      ) != null,
    Z = V != null,
    me = Z ? v : void 0,
    Ee
  typeof y == 'function'
    ? (Ee = y({ isActive: Z, isPending: oe }))
    : (Ee = [y, Z ? 'active' : null, oe ? 'pending' : null]
        .filter(Boolean)
        .join(' '))
  let K = typeof x == 'function' ? x({ isActive: Z, isPending: oe }) : x
  return D(
    hC,
    {
      ...R,
      'aria-current': me,
      className: Ee,
      ref: c,
      style: K,
      to: E,
      children: typeof C == 'function' ? C({ isActive: Z, isPending: oe }) : C,
    },
    void 0,
    !1,
    { fileName: wl, lineNumber: 454, columnNumber: 23 },
    this
  )
})
hL.displayName = 'NavLink'
const mC = w.exports.forwardRef((i, u) =>
  D(
    mL,
    { ...i, ref: u },
    void 0,
    !1,
    { fileName: wl, lineNumber: 478, columnNumber: 23 },
    globalThis
  )
)
mC.displayName = 'Form'
const mL = w.exports.forwardRef((i, u) => {
  let {
      reloadDocument: c,
      replace: v,
      method: d = Zf,
      action: y = '.',
      onSubmit: f,
      fetcherKey: x,
      routeId: E,
    } = i,
    C = Zm(i, pL),
    R = gL(x, E),
    L = d.toLowerCase() === 'get' ? 'get' : 'post',
    V = yC(y)
  return D(
    'form',
    {
      ref: u,
      method: L,
      action: V,
      onSubmit: c
        ? f
        : ($) => {
            if ((f && f($), $.defaultPrevented)) return
            $.preventDefault()
            let _ = $.nativeEvent.submitter
            R(_ || $.currentTarget, { method: d, replace: v })
          },
      ...C,
    },
    void 0,
    !1,
    { fileName: wl, lineNumber: 514, columnNumber: 23 },
    globalThis
  )
})
mC.displayName = 'Form'
function yL(i, u) {
  let {
      target: c,
      replace: v,
      state: d,
      resetScroll: y,
    } = u === void 0 ? {} : u,
    f = WM(),
    x = Os(),
    E = ws(i)
  return w.exports.useCallback(
    (C) => {
      if (sL(C, c)) {
        C.preventDefault()
        let R = v !== void 0 ? v : Ns(x) === Ns(E)
        f(i, { replace: R, state: d, resetScroll: y })
      }
    },
    [x, f, E, v, d, c, i, y]
  )
}
function gL(i, u) {
  let c = w.exports.useContext(Ds)
  c || at(!1, 'useSubmitImpl must be used within a Data Router')
  let { router: v } = c,
    d = yC()
  return w.exports.useCallback(
    function (y, f) {
      if ((f === void 0 && (f = {}), typeof document > 'u'))
        throw new Error(
          'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
        )
      let { method: x, encType: E, formData: C, url: R } = cL(y, d, f),
        L = R.pathname + R.search,
        V = { replace: f.replace, formData: C, formMethod: x, formEncType: E }
      i
        ? (u == null && at(!1, 'No routeId available for useFetcher()'),
          v.fetch(i, u, L, V))
        : v.navigate(L, V)
    },
    [d, v, i, u]
  )
}
function yC(i) {
  i === void 0 && (i = '.')
  let u = w.exports.useContext(Co)
  u || at(!1, 'useFormAction must be used inside a RouteContext')
  let [c] = u.matches.slice(-1),
    { pathname: v, search: d } = ws(i)
  return (
    i === '.' &&
      c.route.index &&
      (d = d ? d.replace(/^\?/, '?index&') : '?index'),
    v + d
  )
}
let Xr = typeof window < 'u' ? w.exports.useLayoutEffect : w.exports.useEffect
function Mi(i) {
  let u = w.exports.useRef(i)
  return (
    Xr(() => {
      u.current = i
    }, [i]),
    u
  )
}
function ud() {
  let i = [],
    u = [],
    c = {
      enqueue(v) {
        u.push(v)
      },
      addEventListener(v, d, y, f) {
        return (
          v.addEventListener(d, y, f),
          c.add(() => v.removeEventListener(d, y, f))
        )
      },
      requestAnimationFrame(...v) {
        let d = requestAnimationFrame(...v)
        return c.add(() => cancelAnimationFrame(d))
      },
      nextFrame(...v) {
        return c.requestAnimationFrame(() => c.requestAnimationFrame(...v))
      },
      setTimeout(...v) {
        let d = setTimeout(...v)
        return c.add(() => clearTimeout(d))
      },
      add(v) {
        return (
          i.push(v),
          () => {
            let d = i.indexOf(v)
            if (d >= 0) {
              let [y] = i.splice(d, 1)
              y()
            }
          }
        )
      },
      dispose() {
        for (let v of i.splice(0)) v()
      },
      async workQueue() {
        for (let v of u.splice(0)) await v()
      },
    }
  return c
}
function bL() {
  let [i] = w.exports.useState(ud)
  return w.exports.useEffect(() => () => i.dispose(), [i]), i
}
let xt = function (i) {
    let u = Mi(i)
    return Wt.useCallback((...c) => u.current(...c), [u])
  },
  Om = { serverHandoffComplete: !1 }
function Ml() {
  let [i, u] = w.exports.useState(Om.serverHandoffComplete)
  return (
    w.exports.useEffect(() => {
      i !== !0 && u(!0)
    }, [i]),
    w.exports.useEffect(() => {
      Om.serverHandoffComplete === !1 && (Om.serverHandoffComplete = !0)
    }, []),
    i
  )
}
var AE
let SL = 0
function kE() {
  return ++SL
}
let Nr =
  (AE = Wt.useId) != null
    ? AE
    : function () {
        let i = Ml(),
          [u, c] = Wt.useState(i ? kE : null)
        return (
          Xr(() => {
            u === null && c(kE())
          }, [u]),
          u != null ? '' + u : void 0
        )
      }
function jt(i, u, ...c) {
  if (i in u) {
    let d = u[i]
    return typeof d == 'function' ? d(...c) : d
  }
  let v = new Error(
    `Tried to handle "${i}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      u
    )
      .map((d) => `"${d}"`)
      .join(', ')}.`
  )
  throw (Error.captureStackTrace && Error.captureStackTrace(v, jt), v)
}
function Ms(i) {
  return typeof window > 'u'
    ? null
    : i instanceof Node
    ? i.ownerDocument
    : i != null && i.hasOwnProperty('current') && i.current instanceof Node
    ? i.current.ownerDocument
    : document
}
let Pm = [
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
var ya = ((i) => (
    (i[(i.First = 1)] = 'First'),
    (i[(i.Previous = 2)] = 'Previous'),
    (i[(i.Next = 4)] = 'Next'),
    (i[(i.Last = 8)] = 'Last'),
    (i[(i.WrapAround = 16)] = 'WrapAround'),
    (i[(i.NoScroll = 32)] = 'NoScroll'),
    i
  ))(ya || {}),
  gC = ((i) => (
    (i[(i.Error = 0)] = 'Error'),
    (i[(i.Overflow = 1)] = 'Overflow'),
    (i[(i.Success = 2)] = 'Success'),
    (i[(i.Underflow = 3)] = 'Underflow'),
    i
  ))(gC || {}),
  EL = ((i) => (
    (i[(i.Previous = -1)] = 'Previous'), (i[(i.Next = 1)] = 'Next'), i
  ))(EL || {})
function bC(i = document.body) {
  return i == null ? [] : Array.from(i.querySelectorAll(Pm))
}
var ey = ((i) => (
  (i[(i.Strict = 0)] = 'Strict'), (i[(i.Loose = 1)] = 'Loose'), i
))(ey || {})
function SC(i, u = 0) {
  var c
  return i === ((c = Ms(i)) == null ? void 0 : c.body)
    ? !1
    : jt(u, {
        [0]() {
          return i.matches(Pm)
        },
        [1]() {
          let v = i
          for (; v !== null; ) {
            if (v.matches(Pm)) return !0
            v = v.parentElement
          }
          return !1
        },
      })
}
function Nl(i) {
  i == null || i.focus({ preventScroll: !0 })
}
let CL = ['textarea', 'input'].join(',')
function RL(i) {
  var u, c
  return (c =
    (u = i == null ? void 0 : i.matches) == null ? void 0 : u.call(i, CL)) !=
    null
    ? c
    : !1
}
function xL(i, u = (c) => c) {
  return i.slice().sort((c, v) => {
    let d = u(c),
      y = u(v)
    if (d === null || y === null) return 0
    let f = d.compareDocumentPosition(y)
    return f & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : f & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0
  })
}
function Ga(i, u, c = !0) {
  let v = Array.isArray(i)
      ? i.length > 0
        ? i[0].ownerDocument
        : document
      : i.ownerDocument,
    d = Array.isArray(i) ? (c ? xL(i) : i) : bC(i),
    y = v.activeElement,
    f = (() => {
      if (u & 5) return 1
      if (u & 10) return -1
      throw new Error(
        'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
      )
    })(),
    x = (() => {
      if (u & 1) return 0
      if (u & 2) return Math.max(0, d.indexOf(y)) - 1
      if (u & 4) return Math.max(0, d.indexOf(y)) + 1
      if (u & 8) return d.length - 1
      throw new Error(
        'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
      )
    })(),
    E = u & 32 ? { preventScroll: !0 } : {},
    C = 0,
    R = d.length,
    L
  do {
    if (C >= R || C + R <= 0) return 0
    let V = x + C
    if (u & 16) V = (V + R) % R
    else {
      if (V < 0) return 3
      if (V >= R) return 1
    }
    ;(L = d[V]), L == null || L.focus(E), (C += f)
  } while (L !== v.activeElement)
  return (
    u & 6 && RL(L) && L.select(),
    L.hasAttribute('tabindex') || L.setAttribute('tabindex', '0'),
    2
  )
}
function Bm(i, u, c) {
  let v = Mi(u)
  w.exports.useEffect(() => {
    function d(y) {
      v.current(y)
    }
    return (
      window.addEventListener(i, d, c),
      () => window.removeEventListener(i, d, c)
    )
  }, [i, c])
}
function EC(i, u, c = !0) {
  let v = w.exports.useRef(!1)
  w.exports.useEffect(() => {
    requestAnimationFrame(() => {
      v.current = c
    })
  }, [c])
  function d(y, f) {
    if (!v.current || y.defaultPrevented) return
    let x = (function C(R) {
        return typeof R == 'function'
          ? C(R())
          : Array.isArray(R) || R instanceof Set
          ? R
          : [R]
      })(i),
      E = f(y)
    if (E !== null && !!E.ownerDocument.documentElement.contains(E)) {
      for (let C of x) {
        if (C === null) continue
        let R = C instanceof HTMLElement ? C : C.current
        if (R != null && R.contains(E)) return
      }
      return (
        !SC(E, ey.Loose) && E.tabIndex !== -1 && y.preventDefault(), u(y, E)
      )
    }
  }
  Bm('click', (y) => d(y, (f) => f.target), !0),
    Bm(
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
function UE(i) {
  var u
  if (i.type) return i.type
  let c = (u = i.as) != null ? u : 'button'
  if (typeof c == 'string' && c.toLowerCase() === 'button') return 'button'
}
function TL(i, u) {
  let [c, v] = w.exports.useState(() => UE(i))
  return (
    Xr(() => {
      v(UE(i))
    }, [i.type, i.as]),
    Xr(() => {
      c ||
        !u.current ||
        (u.current instanceof HTMLButtonElement &&
          !u.current.hasAttribute('type') &&
          v('button'))
    }, [c, u]),
    c
  )
}
let CC = Symbol()
function RC(i, u = !0) {
  return Object.assign(i, { [CC]: u })
}
function jn(...i) {
  let u = w.exports.useRef(i)
  w.exports.useEffect(() => {
    u.current = i
  }, [i])
  let c = xt((v) => {
    for (let d of u.current)
      d != null && (typeof d == 'function' ? d(v) : (d.current = v))
  })
  return i.every((v) => v == null || (v == null ? void 0 : v[CC])) ? void 0 : c
}
var Ai = ((i) => (
    (i[(i.None = 0)] = 'None'),
    (i[(i.RenderStrategy = 1)] = 'RenderStrategy'),
    (i[(i.Static = 2)] = 'Static'),
    i
  ))(Ai || {}),
  qa = ((i) => (
    (i[(i.Unmount = 0)] = 'Unmount'), (i[(i.Hidden = 1)] = 'Hidden'), i
  ))(qa || {})
function Hn({
  ourProps: i,
  theirProps: u,
  slot: c,
  defaultTag: v,
  features: d,
  visible: y = !0,
  name: f,
}) {
  let x = xC(u, i)
  if (y) return Qf(x, c, v, f)
  let E = d != null ? d : 0
  if (E & 2) {
    let { static: C = !1, ...R } = x
    if (C) return Qf(R, c, v, f)
  }
  if (E & 1) {
    let { unmount: C = !0, ...R } = x
    return jt(C ? 0 : 1, {
      [0]() {
        return null
      },
      [1]() {
        return Qf({ ...R, hidden: !0, style: { display: 'none' } }, c, v, f)
      },
    })
  }
  return Qf(x, c, v, f)
}
function Qf(i, u = {}, c, v) {
  let {
      as: d = c,
      children: y,
      refName: f = 'ref',
      ...x
    } = Mm(i, ['unmount', 'static']),
    E = i.ref !== void 0 ? { [f]: i.ref } : {},
    C = typeof y == 'function' ? y(u) : y
  x.className &&
    typeof x.className == 'function' &&
    (x.className = x.className(u))
  let R = {}
  if (d === w.exports.Fragment && Object.keys(FE(x)).length > 0) {
    if (!w.exports.isValidElement(C) || (Array.isArray(C) && C.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          '',
          `The current component <${v} /> is rendering a "Fragment".`,
          'However we need to passthrough the following props:',
          Object.keys(x).map((L) => `  - ${L}`).join(`
`),
          '',
          'You can apply a few solutions:',
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            'Render a single element as the child so that we can forward the props onto that element.',
          ].map((L) => `  - ${L}`).join(`
`),
        ].join(`
`)
      )
    return w.exports.cloneElement(
      C,
      Object.assign({}, xC(C.props, FE(Mm(x, ['ref']))), R, E)
    )
  }
  return w.exports.createElement(
    d,
    Object.assign(
      {},
      Mm(x, ['ref']),
      d !== w.exports.Fragment && E,
      d !== w.exports.Fragment && R
    ),
    C
  )
}
function xC(...i) {
  if (i.length === 0) return {}
  if (i.length === 1) return i[0]
  let u = {},
    c = {}
  for (let v of i)
    for (let d in v)
      d.startsWith('on') && typeof v[d] == 'function'
        ? (c[d] != null || (c[d] = []), c[d].push(v[d]))
        : (u[d] = v[d])
  if (u.disabled || u['aria-disabled'])
    return Object.assign(
      u,
      Object.fromEntries(Object.keys(c).map((v) => [v, void 0]))
    )
  for (let v in c)
    Object.assign(u, {
      [v](d, ...y) {
        let f = c[v]
        for (let x of f) {
          if (d.defaultPrevented) return
          x(d, ...y)
        }
      },
    })
  return u
}
function Nn(i) {
  var u
  return Object.assign(w.exports.forwardRef(i), {
    displayName: (u = i.displayName) != null ? u : i.name,
  })
}
function FE(i) {
  let u = Object.assign({}, i)
  for (let c in u) u[c] === void 0 && delete u[c]
  return u
}
function Mm(i, u = []) {
  let c = Object.assign({}, i)
  for (let v of u) v in c && delete c[v]
  return c
}
function ty(i) {
  let u = i.parentElement,
    c = null
  for (; u && !(u instanceof HTMLFieldSetElement); )
    u instanceof HTMLLegendElement && (c = u), (u = u.parentElement)
  let v = (u == null ? void 0 : u.getAttribute('disabled')) === ''
  return v && NL(c) ? !1 : v
}
function NL(i) {
  if (!i) return !1
  let u = i.previousElementSibling
  for (; u !== null; ) {
    if (u instanceof HTMLLegendElement) return !1
    u = u.previousElementSibling
  }
  return !0
}
let wL = 'div'
var Eo = ((i) => (
  (i[(i.None = 1)] = 'None'),
  (i[(i.Focusable = 2)] = 'Focusable'),
  (i[(i.Hidden = 4)] = 'Hidden'),
  i
))(Eo || {})
let Dl = Nn(function (i, u) {
    let { features: c = 1, ...v } = i,
      d = {
        ref: u,
        'aria-hidden': (c & 2) === 2 ? !0 : void 0,
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
          ...((c & 4) === 4 && (c & 2) !== 2 && { display: 'none' }),
        },
      }
    return Hn({
      ourProps: d,
      theirProps: v,
      slot: {},
      defaultTag: wL,
      name: 'Hidden',
    })
  }),
  ny = w.exports.createContext(null)
ny.displayName = 'OpenClosedContext'
var Jr = ((i) => (
  (i[(i.Open = 0)] = 'Open'), (i[(i.Closed = 1)] = 'Closed'), i
))(Jr || {})
function Ls() {
  return w.exports.useContext(ny)
}
function TC({ value: i, children: u }) {
  return Wt.createElement(ny.Provider, { value: i }, u)
}
var Wa = ((i) => (
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
  ))(Wa || {}),
  Qa = ((i) => (
    (i[(i.Forwards = 0)] = 'Forwards'), (i[(i.Backwards = 1)] = 'Backwards'), i
  ))(Qa || {})
function ry() {
  let i = w.exports.useRef(0)
  return (
    Bm(
      'keydown',
      (u) => {
        u.key === 'Tab' && (i.current = u.shiftKey ? 1 : 0)
      },
      !0
    ),
    i
  )
}
function ay() {
  let i = w.exports.useRef(!1)
  return (
    Xr(
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
function Ro(...i) {
  return w.exports.useMemo(() => Ms(...i), [...i])
}
function sd(i, u, c, v) {
  let d = Mi(c)
  w.exports.useEffect(() => {
    i = i != null ? i : window
    function y(f) {
      d.current(f)
    }
    return i.addEventListener(u, y, v), () => i.removeEventListener(u, y, v)
  }, [i, u, v])
}
function iy(i) {
  typeof queueMicrotask == 'function'
    ? queueMicrotask(i)
    : Promise.resolve()
        .then(i)
        .catch((u) =>
          setTimeout(() => {
            throw u
          })
        )
}
function NC(i, u) {
  let c = w.exports.useRef([]),
    v = xt(i)
  w.exports.useEffect(() => {
    for (let [d, y] of u.entries())
      if (c.current[d] !== y) {
        let f = v(u)
        return (c.current = u), f
      }
  }, [v, ...u])
}
var jE =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@headlessui+react@1.6.6_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js'
let DL = 'div'
var wC = ((i) => (
  (i[(i.None = 1)] = 'None'),
  (i[(i.InitialFocus = 2)] = 'InitialFocus'),
  (i[(i.TabLock = 4)] = 'TabLock'),
  (i[(i.FocusLock = 8)] = 'FocusLock'),
  (i[(i.RestoreFocus = 16)] = 'RestoreFocus'),
  (i[(i.All = 30)] = 'All'),
  i
))(wC || {})
let Rs = Object.assign(
  Nn(function (i, u) {
    let c = w.exports.useRef(null),
      v = jn(c, u),
      { initialFocus: d, containers: y, features: f = 30, ...x } = i
    Ml() || (f = 1)
    let E = Ro(c)
    _L({ ownerDocument: E }, Boolean(f & 16))
    let C = OL(
      { ownerDocument: E, container: c, initialFocus: d },
      Boolean(f & 2)
    )
    ML(
      {
        ownerDocument: E,
        container: c,
        containers: y,
        previousActiveElement: C,
      },
      Boolean(f & 8)
    )
    let R = ry(),
      L = xt(() => {
        let F = c.current
        !F ||
          jt(R.current, {
            [Qa.Forwards]: () => Ga(F, ya.First),
            [Qa.Backwards]: () => Ga(F, ya.Last),
          })
      }),
      V = { ref: v }
    return D(
      Li,
      {
        children: [
          Boolean(f & 4) &&
            D(
              Dl,
              {
                as: 'button',
                type: 'button',
                onFocus: L,
                features: Eo.Focusable,
              },
              void 0,
              !1,
              { fileName: jE, lineNumber: 1, columnNumber: 1608 },
              this
            ),
          Hn({ ourProps: V, theirProps: x, defaultTag: DL, name: 'FocusTrap' }),
          Boolean(f & 4) &&
            D(
              Dl,
              {
                as: 'button',
                type: 'button',
                onFocus: L,
                features: Eo.Focusable,
              },
              void 0,
              !1,
              { fileName: jE, lineNumber: 1, columnNumber: 1763 },
              this
            ),
        ],
      },
      void 0,
      !0
    )
  }),
  { features: wC }
)
function _L({ ownerDocument: i }, u) {
  let c = w.exports.useRef(null)
  sd(
    i == null ? void 0 : i.defaultView,
    'focusout',
    (d) => {
      !u || c.current || (c.current = d.target)
    },
    !0
  ),
    NC(() => {
      u ||
        ((i == null ? void 0 : i.activeElement) ===
          (i == null ? void 0 : i.body) && Nl(c.current),
        (c.current = null))
    }, [u])
  let v = w.exports.useRef(!1)
  w.exports.useEffect(
    () => (
      (v.current = !1),
      () => {
        ;(v.current = !0),
          iy(() => {
            !v.current || (Nl(c.current), (c.current = null))
          })
      }
    ),
    []
  )
}
function OL({ ownerDocument: i, container: u, initialFocus: c }, v) {
  let d = w.exports.useRef(null)
  return (
    NC(() => {
      if (!v) return
      let y = u.current
      if (!y) return
      let f = i == null ? void 0 : i.activeElement
      if (c != null && c.current) {
        if ((c == null ? void 0 : c.current) === f) {
          d.current = f
          return
        }
      } else if (y.contains(f)) {
        d.current = f
        return
      }
      c != null && c.current
        ? Nl(c.current)
        : Ga(y, ya.First) === gC.Error &&
          console.warn(
            'There are no focusable elements inside the <FocusTrap />'
          ),
        (d.current = i == null ? void 0 : i.activeElement)
    }, [v]),
    d
  )
}
function ML(
  { ownerDocument: i, container: u, containers: c, previousActiveElement: v },
  d
) {
  let y = ay()
  sd(
    i == null ? void 0 : i.defaultView,
    'focus',
    (f) => {
      if (!d || !y.current) return
      let x = new Set(c == null ? void 0 : c.current)
      x.add(u)
      let E = v.current
      if (!E) return
      let C = f.target
      C && C instanceof HTMLElement
        ? LL(x, C)
          ? ((v.current = C), Nl(C))
          : (f.preventDefault(), f.stopPropagation(), Nl(E))
        : Nl(v.current)
    },
    !0
  )
}
function LL(i, u) {
  var c
  for (let v of i) if ((c = v.current) != null && c.contains(u)) return !0
  return !1
}
let Rl = new Set(),
  _i = new Map()
function HE(i) {
  i.setAttribute('aria-hidden', 'true'), (i.inert = !0)
}
function zE(i) {
  let u = _i.get(i)
  !u ||
    (u['aria-hidden'] === null
      ? i.removeAttribute('aria-hidden')
      : i.setAttribute('aria-hidden', u['aria-hidden']),
    (i.inert = u.inert))
}
function AL(i, u = !0) {
  Xr(() => {
    if (!u || !i.current) return
    let c = i.current,
      v = Ms(c)
    if (v) {
      Rl.add(c)
      for (let d of _i.keys()) d.contains(c) && (zE(d), _i.delete(d))
      return (
        v.querySelectorAll('body > *').forEach((d) => {
          if (d instanceof HTMLElement) {
            for (let y of Rl) if (d.contains(y)) return
            Rl.size === 1 &&
              (_i.set(d, {
                'aria-hidden': d.getAttribute('aria-hidden'),
                inert: d.inert,
              }),
              HE(d))
          }
        }),
        () => {
          if ((Rl.delete(c), Rl.size > 0))
            v.querySelectorAll('body > *').forEach((d) => {
              if (d instanceof HTMLElement && !_i.has(d)) {
                for (let y of Rl) if (d.contains(y)) return
                _i.set(d, {
                  'aria-hidden': d.getAttribute('aria-hidden'),
                  inert: d.inert,
                }),
                  HE(d)
              }
            })
          else for (let d of _i.keys()) zE(d), _i.delete(d)
        }
      )
    }
  }, [u])
}
let DC = w.exports.createContext(!1)
function kL() {
  return w.exports.useContext(DC)
}
function Vm(i) {
  return Wt.createElement(DC.Provider, { value: i.force }, i.children)
}
var UL =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@headlessui+react@1.6.6_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/portal/portal.js'
function FL(i) {
  let u = kL(),
    c = w.exports.useContext(_C),
    v = Ro(i),
    [d, y] = w.exports.useState(() => {
      if ((!u && c !== null) || typeof window > 'u') return null
      let f = v == null ? void 0 : v.getElementById('headlessui-portal-root')
      if (f) return f
      if (v === null) return null
      let x = v.createElement('div')
      return (
        x.setAttribute('id', 'headlessui-portal-root'), v.body.appendChild(x)
      )
    })
  return (
    w.exports.useEffect(() => {
      d !== null &&
        ((v != null && v.body.contains(d)) ||
          v == null ||
          v.body.appendChild(d))
    }, [d, v]),
    w.exports.useEffect(() => {
      u || (c !== null && y(c.current))
    }, [c, y, u]),
    d
  )
}
let jL = w.exports.Fragment,
  HL = Nn(function (i, u) {
    let c = i,
      v = w.exports.useRef(null),
      d = jn(
        RC((R) => {
          v.current = R
        }),
        u
      ),
      y = Ro(v),
      f = FL(v),
      [x] = w.exports.useState(() => {
        var R
        return typeof window > 'u'
          ? null
          : (R = y == null ? void 0 : y.createElement('div')) != null
          ? R
          : null
      }),
      E = Ml(),
      C = w.exports.useRef(!1)
    return (
      Xr(() => {
        if (((C.current = !1), !(!f || !x)))
          return (
            f.contains(x) ||
              (x.setAttribute('data-headlessui-portal', ''), f.appendChild(x)),
            () => {
              ;(C.current = !0),
                iy(() => {
                  var R
                  !C.current ||
                    !f ||
                    !x ||
                    (f.removeChild(x),
                    f.childNodes.length <= 0 &&
                      ((R = f.parentElement) == null || R.removeChild(f)))
                })
            }
          )
      }, [f, x]),
      E
        ? !f || !x
          ? null
          : Qm.exports.createPortal(
              Hn({
                ourProps: { ref: d },
                theirProps: c,
                defaultTag: jL,
                name: 'Portal',
              }),
              x
            )
        : null
    )
  }),
  zL = w.exports.Fragment,
  _C = w.exports.createContext(null),
  $L = Nn(function (i, u) {
    let { target: c, ...v } = i,
      d = { ref: jn(u) }
    return D(
      _C.Provider,
      {
        value: c,
        children: Hn({
          ourProps: d,
          theirProps: v,
          defaultTag: zL,
          name: 'Popover.Group',
        }),
      },
      void 0,
      !1,
      { fileName: UL, lineNumber: 1, columnNumber: 1746 },
      this
    )
  }),
  Ym = Object.assign(HL, { Group: $L }),
  OC = w.exports.createContext(null)
function MC() {
  let i = w.exports.useContext(OC)
  if (i === null) {
    let u = new Error(
      'You used a <Description /> component, but it is not inside a relevant parent.'
    )
    throw (Error.captureStackTrace && Error.captureStackTrace(u, MC), u)
  }
  return i
}
function PL() {
  let [i, u] = w.exports.useState([])
  return [
    i.length > 0 ? i.join(' ') : void 0,
    w.exports.useMemo(
      () =>
        function (c) {
          let v = xt(
              (y) => (
                u((f) => [...f, y]),
                () =>
                  u((f) => {
                    let x = f.slice(),
                      E = x.indexOf(y)
                    return E !== -1 && x.splice(E, 1), x
                  })
              )
            ),
            d = w.exports.useMemo(
              () => ({
                register: v,
                slot: c.slot,
                name: c.name,
                props: c.props,
              }),
              [v, c.slot, c.name, c.props]
            )
          return Wt.createElement(OC.Provider, { value: d }, c.children)
        },
      [u]
    ),
  ]
}
let BL = 'p',
  VL = Nn(function (i, u) {
    let c = MC(),
      v = `headlessui-description-${Nr()}`,
      d = jn(u)
    Xr(() => c.register(v), [v, c.register])
    let y = i,
      f = { ref: d, ...c.props, id: v }
    return Hn({
      ourProps: f,
      theirProps: y,
      slot: c.slot || {},
      defaultTag: BL,
      name: c.name || 'Description',
    })
  }),
  oy = w.exports.createContext(() => {})
oy.displayName = 'StackContext'
var Im = ((i) => ((i[(i.Add = 0)] = 'Add'), (i[(i.Remove = 1)] = 'Remove'), i))(
  Im || {}
)
function YL() {
  return w.exports.useContext(oy)
}
function IL({ children: i, onUpdate: u, type: c, element: v }) {
  let d = YL(),
    y = xt((...f) => {
      u == null || u(...f), d(...f)
    })
  return (
    Xr(() => (y(0, c, v), () => y(1, c, v)), [y, c, v]),
    Wt.createElement(oy.Provider, { value: y }, i)
  )
}
var yo =
    '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@headlessui+react@1.6.6_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/dialog/dialog.js',
  WL = ((i) => ((i[(i.Open = 0)] = 'Open'), (i[(i.Closed = 1)] = 'Closed'), i))(
    WL || {}
  ),
  GL = ((i) => ((i[(i.SetTitleId = 0)] = 'SetTitleId'), i))(GL || {})
let qL = {
    [0](i, u) {
      return i.titleId === u.id ? i : { ...i, titleId: u.id }
    },
  },
  nd = w.exports.createContext(null)
nd.displayName = 'DialogContext'
function As(i) {
  let u = w.exports.useContext(nd)
  if (u === null) {
    let c = new Error(`<${i} /> is missing a parent <Dialog /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(c, As), c)
  }
  return u
}
function QL(i, u) {
  return jt(u.type, qL, i, u)
}
let KL = 'div',
  XL = Ai.RenderStrategy | Ai.Static,
  JL = Nn(function (i, u) {
    let { open: c, onClose: v, initialFocus: d, __demoMode: y = !1, ...f } = i,
      [x, E] = w.exports.useState(0),
      C = Ls()
    c === void 0 &&
      C !== null &&
      (c = jt(C, { [Jr.Open]: !0, [Jr.Closed]: !1 }))
    let R = w.exports.useRef(new Set()),
      L = w.exports.useRef(null),
      V = jn(L, u),
      F = w.exports.useRef(null),
      $ = Ro(L),
      _ = i.hasOwnProperty('open') || C !== null,
      ge = i.hasOwnProperty('onClose')
    if (!_ && !ge)
      throw new Error(
        'You have to provide an `open` and an `onClose` prop to the `Dialog` component.'
      )
    if (!_)
      throw new Error(
        'You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.'
      )
    if (!ge)
      throw new Error(
        'You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.'
      )
    if (typeof c != 'boolean')
      throw new Error(
        `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c}`
      )
    if (typeof v != 'function')
      throw new Error(
        `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${v}`
      )
    let oe = c ? 0 : 1,
      [Z, me] = w.exports.useReducer(QL, {
        titleId: null,
        descriptionId: null,
        panelRef: w.exports.createRef(),
      }),
      Ee = xt(() => v(!1)),
      K = xt((ze) => me({ type: 0, id: ze })),
      Ce = Ml() ? (y ? !1 : oe === 0) : !1,
      ee = x > 1,
      lt = w.exports.useContext(nd) !== null,
      X = ee ? 'parent' : 'leaf'
    AL(L, ee ? Ce : !1),
      EC(
        () => {
          var ze, le
          return [
            ...Array.from(
              (ze =
                $ == null
                  ? void 0
                  : $.querySelectorAll('body > *, [data-headlessui-portal]')) !=
                null
                ? ze
                : []
            ).filter(
              (Ue) =>
                !(
                  !(Ue instanceof HTMLElement) ||
                  Ue.contains(F.current) ||
                  (Z.panelRef.current && Ue.contains(Z.panelRef.current))
                )
            ),
            (le = Z.panelRef.current) != null ? le : L.current,
          ]
        },
        Ee,
        Ce && !ee
      ),
      sd($ == null ? void 0 : $.defaultView, 'keydown', (ze) => {
        ze.defaultPrevented ||
          (ze.key === Wa.Escape &&
            oe === 0 &&
            (ee || (ze.preventDefault(), ze.stopPropagation(), Ee())))
      }),
      w.exports.useEffect(() => {
        var ze
        if (oe !== 0 || lt) return
        let le = Ms(L)
        if (!le) return
        let Ue = le.documentElement,
          Kt = (ze = le.defaultView) != null ? ze : window,
          zn = Ue.style.overflow,
          Xt = Ue.style.paddingRight,
          Ht = Kt.innerWidth - Ue.clientWidth
        if (((Ue.style.overflow = 'hidden'), Ht > 0)) {
          let vn = Ue.clientWidth - Ue.offsetWidth,
            hn = Ht - vn
          Ue.style.paddingRight = `${hn}px`
        }
        return () => {
          ;(Ue.style.overflow = zn), (Ue.style.paddingRight = Xt)
        }
      }, [oe, lt]),
      w.exports.useEffect(() => {
        if (oe !== 0 || !L.current) return
        let ze = new IntersectionObserver((le) => {
          for (let Ue of le)
            Ue.boundingClientRect.x === 0 &&
              Ue.boundingClientRect.y === 0 &&
              Ue.boundingClientRect.width === 0 &&
              Ue.boundingClientRect.height === 0 &&
              Ee()
        })
        return ze.observe(L.current), () => ze.disconnect()
      }, [oe, L, Ee])
    let [Re, Te] = PL(),
      nt = `headlessui-dialog-${Nr()}`,
      ve = w.exports.useMemo(
        () => [{ dialogState: oe, close: Ee, setTitleId: K }, Z],
        [oe, Z, Ee, K]
      ),
      He = w.exports.useMemo(() => ({ open: oe === 0 }), [oe]),
      vt = {
        ref: V,
        id: nt,
        role: 'dialog',
        'aria-modal': oe === 0 ? !0 : void 0,
        'aria-labelledby': Z.titleId,
        'aria-describedby': Re,
      }
    return D(
      IL,
      {
        type: 'Dialog',
        element: L,
        onUpdate: xt((ze, le, Ue) => {
          le === 'Dialog' &&
            jt(ze, {
              [Im.Add]() {
                R.current.add(Ue), E((Kt) => Kt + 1)
              },
              [Im.Remove]() {
                R.current.add(Ue), E((Kt) => Kt - 1)
              },
            })
        }),
        children: [
          D(
            Vm,
            {
              force: !0,
              children: Wt.createElement(
                Ym,
                null,
                D(
                  nd.Provider,
                  {
                    value: ve,
                    children: Wt.createElement(
                      Ym.Group,
                      { target: L },
                      D(
                        Vm,
                        {
                          force: !1,
                          children: Wt.createElement(
                            Te,
                            { slot: He, name: 'Dialog.Description' },
                            D(
                              Rs,
                              {
                                initialFocus: d,
                                containers: R,
                                features: Ce
                                  ? jt(X, {
                                      parent: Rs.features.RestoreFocus,
                                      leaf:
                                        Rs.features.All &
                                        ~Rs.features.FocusLock,
                                    })
                                  : Rs.features.None,
                                children: Hn({
                                  ourProps: vt,
                                  theirProps: f,
                                  slot: He,
                                  defaultTag: KL,
                                  features: XL,
                                  visible: oe === 0,
                                  name: 'Dialog',
                                }),
                              },
                              void 0,
                              !1,
                              {
                                fileName: yo,
                                lineNumber: 1,
                                columnNumber: 4696,
                              },
                              this
                            )
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: yo, lineNumber: 1, columnNumber: 4609 },
                        this
                      )
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: yo, lineNumber: 1, columnNumber: 4532 },
                  this
                )
              ),
            },
            void 0,
            !1,
            { fileName: yo, lineNumber: 1, columnNumber: 4476 },
            this
          ),
          D(
            Dl,
            { features: Eo.Hidden, ref: F },
            void 0,
            !1,
            { fileName: yo, lineNumber: 1, columnNumber: 4953 },
            this
          ),
        ],
      },
      void 0,
      !0,
      { fileName: yo, lineNumber: 1, columnNumber: 4304 },
      this
    )
  }),
  ZL = 'div',
  eA = Nn(function (i, u) {
    let [{ dialogState: c, close: v }] = As('Dialog.Overlay'),
      d = jn(u),
      y = `headlessui-dialog-overlay-${Nr()}`,
      f = xt((E) => {
        if (E.target === E.currentTarget) {
          if (ty(E.currentTarget)) return E.preventDefault()
          E.preventDefault(), E.stopPropagation(), v()
        }
      }),
      x = w.exports.useMemo(() => ({ open: c === 0 }), [c])
    return Hn({
      ourProps: { ref: d, id: y, 'aria-hidden': !0, onClick: f },
      theirProps: i,
      slot: x,
      defaultTag: ZL,
      name: 'Dialog.Overlay',
    })
  }),
  tA = 'div',
  nA = Nn(function (i, u) {
    let [{ dialogState: c }, v] = As('Dialog.Backdrop'),
      d = jn(u),
      y = `headlessui-dialog-backdrop-${Nr()}`
    w.exports.useEffect(() => {
      if (v.panelRef.current === null)
        throw new Error(
          'A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.'
        )
    }, [v.panelRef])
    let f = w.exports.useMemo(() => ({ open: c === 0 }), [c])
    return D(
      Vm,
      {
        force: !0,
        children: Wt.createElement(
          Ym,
          null,
          Hn({
            ourProps: { ref: d, id: y, 'aria-hidden': !0 },
            theirProps: i,
            slot: f,
            defaultTag: tA,
            name: 'Dialog.Backdrop',
          })
        ),
      },
      void 0,
      !1,
      { fileName: yo, lineNumber: 1, columnNumber: 5727 },
      this
    )
  }),
  rA = 'div',
  aA = Nn(function (i, u) {
    let [{ dialogState: c }, v] = As('Dialog.Panel'),
      d = jn(u, v.panelRef),
      y = `headlessui-dialog-panel-${Nr()}`,
      f = w.exports.useMemo(() => ({ open: c === 0 }), [c]),
      x = xt((E) => {
        E.stopPropagation()
      })
    return Hn({
      ourProps: { ref: d, id: y, onClick: x },
      theirProps: i,
      slot: f,
      defaultTag: rA,
      name: 'Dialog.Panel',
    })
  }),
  iA = 'h2',
  oA = Nn(function (i, u) {
    let [{ dialogState: c, setTitleId: v }] = As('Dialog.Title'),
      d = `headlessui-dialog-title-${Nr()}`,
      y = jn(u)
    w.exports.useEffect(() => (v(d), () => v(null)), [d, v])
    let f = w.exports.useMemo(() => ({ open: c === 0 }), [c])
    return Hn({
      ourProps: { ref: y, id: d },
      theirProps: i,
      slot: f,
      defaultTag: iA,
      name: 'Dialog.Title',
    })
  }),
  $E = Object.assign(JL, {
    Backdrop: nA,
    Panel: aA,
    Overlay: eA,
    Title: oA,
    Description: VL,
  })
var Wm =
    '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@headlessui+react@1.6.6_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/popover/popover.js',
  lA = ((i) => ((i[(i.Open = 0)] = 'Open'), (i[(i.Closed = 1)] = 'Closed'), i))(
    lA || {}
  ),
  uA = ((i) => (
    (i[(i.TogglePopover = 0)] = 'TogglePopover'),
    (i[(i.ClosePopover = 1)] = 'ClosePopover'),
    (i[(i.SetButton = 2)] = 'SetButton'),
    (i[(i.SetButtonId = 3)] = 'SetButtonId'),
    (i[(i.SetPanel = 4)] = 'SetPanel'),
    (i[(i.SetPanelId = 5)] = 'SetPanelId'),
    i
  ))(uA || {})
let sA = {
    [0]: (i) => ({
      ...i,
      popoverState: jt(i.popoverState, { [0]: 1, [1]: 0 }),
    }),
    [1](i) {
      return i.popoverState === 1 ? i : { ...i, popoverState: 1 }
    },
    [2](i, u) {
      return i.button === u.button ? i : { ...i, button: u.button }
    },
    [3](i, u) {
      return i.buttonId === u.buttonId ? i : { ...i, buttonId: u.buttonId }
    },
    [4](i, u) {
      return i.panel === u.panel ? i : { ...i, panel: u.panel }
    },
    [5](i, u) {
      return i.panelId === u.panelId ? i : { ...i, panelId: u.panelId }
    },
  },
  ly = w.exports.createContext(null)
ly.displayName = 'PopoverContext'
function cd(i) {
  let u = w.exports.useContext(ly)
  if (u === null) {
    let c = new Error(`<${i} /> is missing a parent <Popover /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(c, cd), c)
  }
  return u
}
let uy = w.exports.createContext(null)
uy.displayName = 'PopoverAPIContext'
function sy(i) {
  let u = w.exports.useContext(uy)
  if (u === null) {
    let c = new Error(`<${i} /> is missing a parent <Popover /> component.`)
    throw (Error.captureStackTrace && Error.captureStackTrace(c, sy), c)
  }
  return u
}
let cy = w.exports.createContext(null)
cy.displayName = 'PopoverGroupContext'
function LC() {
  return w.exports.useContext(cy)
}
let fy = w.exports.createContext(null)
fy.displayName = 'PopoverPanelContext'
function cA() {
  return w.exports.useContext(fy)
}
function fA(i, u) {
  return jt(u.type, sA, i, u)
}
let dA = 'div',
  pA = Nn(function (i, u) {
    var c
    let v = `headlessui-popover-button-${Nr()}`,
      d = `headlessui-popover-panel-${Nr()}`,
      y = w.exports.useRef(null),
      f = jn(
        u,
        RC((X) => {
          y.current = X
        })
      ),
      x = w.exports.useReducer(fA, {
        popoverState: 1,
        button: null,
        buttonId: v,
        panel: null,
        panelId: d,
        beforePanelSentinel: w.exports.createRef(),
        afterPanelSentinel: w.exports.createRef(),
      }),
      [
        {
          popoverState: E,
          button: C,
          panel: R,
          beforePanelSentinel: L,
          afterPanelSentinel: V,
        },
        F,
      ] = x,
      $ = Ro((c = y.current) != null ? c : C)
    w.exports.useEffect(() => F({ type: 3, buttonId: v }), [v, F]),
      w.exports.useEffect(() => F({ type: 5, panelId: d }), [d, F])
    let _ = w.exports.useMemo(() => {
        if (!C || !R) return !1
        for (let X of document.querySelectorAll('body > *'))
          if (
            Number(X == null ? void 0 : X.contains(C)) ^
            Number(X == null ? void 0 : X.contains(R))
          )
            return !0
        return !1
      }, [C, R]),
      ge = w.exports.useMemo(
        () => ({ buttonId: v, panelId: d, close: () => F({ type: 1 }) }),
        [v, d, F]
      ),
      oe = LC(),
      Z = oe == null ? void 0 : oe.registerPopover,
      me = xt(() => {
        var X
        return (X = oe == null ? void 0 : oe.isFocusWithinPopoverGroup()) !=
          null
          ? X
          : ($ == null ? void 0 : $.activeElement) &&
              ((C == null ? void 0 : C.contains($.activeElement)) ||
                (R == null ? void 0 : R.contains($.activeElement)))
      })
    w.exports.useEffect(() => (Z == null ? void 0 : Z(ge)), [Z, ge]),
      sd(
        $ == null ? void 0 : $.defaultView,
        'focus',
        (X) => {
          var Re, Te, nt, ve
          E === 0 &&
            (me() ||
              !C ||
              !R ||
              ((Te = (Re = L.current) == null ? void 0 : Re.contains) != null &&
                Te.call(Re, X.target)) ||
              ((ve = (nt = V.current) == null ? void 0 : nt.contains) != null &&
                ve.call(nt, X.target)) ||
              F({ type: 1 }))
        },
        !0
      ),
      EC(
        [C, R],
        (X, Re) => {
          F({ type: 1 }),
            SC(Re, ey.Loose) || (X.preventDefault(), C == null || C.focus())
        },
        E === 0
      )
    let Ee = xt((X) => {
        F({ type: 1 })
        let Re = (() =>
          X
            ? X instanceof HTMLElement
              ? X
              : X.current instanceof HTMLElement
              ? X.current
              : C
            : C)()
        Re == null || Re.focus()
      }),
      K = w.exports.useMemo(() => ({ close: Ee, isPortalled: _ }), [Ee, _]),
      Ce = w.exports.useMemo(() => ({ open: E === 0, close: Ee }), [E, Ee]),
      ee = i,
      lt = { ref: f }
    return Wt.createElement(
      ly.Provider,
      { value: x },
      Wt.createElement(
        uy.Provider,
        { value: K },
        Wt.createElement(
          TC,
          { value: jt(E, { [0]: Jr.Open, [1]: Jr.Closed }) },
          Hn({
            ourProps: lt,
            theirProps: ee,
            slot: Ce,
            defaultTag: dA,
            name: 'Popover',
          })
        )
      )
    )
  }),
  vA = 'button',
  hA = Nn(function (i, u) {
    let [c, v] = cd('Popover.Button'),
      { isPortalled: d } = sy('Popover.Button'),
      y = w.exports.useRef(null),
      f = `headlessui-focus-sentinel-${Nr()}`,
      x = LC(),
      E = x == null ? void 0 : x.closeOthers,
      C = cA(),
      R = C === null ? !1 : C === c.panelId,
      L = jn(y, u, R ? null : (X) => v({ type: 2, button: X })),
      V = jn(y, u),
      F = Ro(y),
      $ = xt((X) => {
        var Re, Te, nt
        if (R) {
          if (c.popoverState === 1) return
          switch (X.key) {
            case Wa.Space:
            case Wa.Enter:
              X.preventDefault(),
                (Te = (Re = X.target).click) == null || Te.call(Re),
                v({ type: 1 }),
                (nt = c.button) == null || nt.focus()
              break
          }
        } else
          switch (X.key) {
            case Wa.Space:
            case Wa.Enter:
              X.preventDefault(),
                X.stopPropagation(),
                c.popoverState === 1 && (E == null || E(c.buttonId)),
                v({ type: 0 })
              break
            case Wa.Escape:
              if (c.popoverState !== 0)
                return E == null ? void 0 : E(c.buttonId)
              if (
                !y.current ||
                ((F == null ? void 0 : F.activeElement) &&
                  !y.current.contains(F.activeElement))
              )
                return
              X.preventDefault(), X.stopPropagation(), v({ type: 1 })
              break
          }
      }),
      _ = xt((X) => {
        R || (X.key === Wa.Space && X.preventDefault())
      }),
      ge = xt((X) => {
        var Re, Te
        ty(X.currentTarget) ||
          i.disabled ||
          (R
            ? (v({ type: 1 }), (Re = c.button) == null || Re.focus())
            : (X.preventDefault(),
              X.stopPropagation(),
              c.popoverState === 1 && (E == null || E(c.buttonId)),
              v({ type: 0 }),
              (Te = c.button) == null || Te.focus()))
      }),
      oe = xt((X) => {
        X.preventDefault(), X.stopPropagation()
      }),
      Z = c.popoverState === 0,
      me = w.exports.useMemo(() => ({ open: Z }), [Z]),
      Ee = TL(i, y),
      K = i,
      Ce = R
        ? { ref: V, type: Ee, onKeyDown: $, onClick: ge }
        : {
            ref: L,
            id: c.buttonId,
            type: Ee,
            'aria-expanded': i.disabled ? void 0 : c.popoverState === 0,
            'aria-controls': c.panel ? c.panelId : void 0,
            onKeyDown: $,
            onKeyUp: _,
            onClick: ge,
            onMouseDown: oe,
          },
      ee = ry(),
      lt = xt(() => {
        let X = c.panel
        if (!X) return
        function Re() {
          jt(ee.current, {
            [Qa.Forwards]: () => Ga(X, ya.First),
            [Qa.Backwards]: () => Ga(X, ya.Last),
          })
        }
        Re()
      })
    return D(
      Li,
      {
        children: [
          Hn({
            ourProps: Ce,
            theirProps: K,
            slot: me,
            defaultTag: vA,
            name: 'Popover.Button',
          }),
          Z &&
            !R &&
            d &&
            D(
              Dl,
              {
                id: f,
                features: Eo.Focusable,
                as: 'button',
                type: 'button',
                onFocus: lt,
              },
              void 0,
              !1,
              { fileName: Wm, lineNumber: 1, columnNumber: 6082 },
              this
            ),
        ],
      },
      void 0,
      !0
    )
  }),
  mA = 'div',
  yA = Ai.RenderStrategy | Ai.Static,
  gA = Nn(function (i, u) {
    let [{ popoverState: c }, v] = cd('Popover.Overlay'),
      d = jn(u),
      y = `headlessui-popover-overlay-${Nr()}`,
      f = Ls(),
      x = (() => (f !== null ? f === Jr.Open : c === 0))(),
      E = xt((R) => {
        if (ty(R.currentTarget)) return R.preventDefault()
        v({ type: 1 })
      }),
      C = w.exports.useMemo(() => ({ open: c === 0 }), [c])
    return Hn({
      ourProps: { ref: d, id: y, 'aria-hidden': !0, onClick: E },
      theirProps: i,
      slot: C,
      defaultTag: mA,
      features: yA,
      visible: x,
      name: 'Popover.Overlay',
    })
  }),
  bA = 'div',
  SA = Ai.RenderStrategy | Ai.Static,
  EA = Nn(function (i, u) {
    let { focus: c = !1, ...v } = i,
      [d, y] = cd('Popover.Panel'),
      { close: f, isPortalled: x } = sy('Popover.Panel'),
      E = `headlessui-focus-sentinel-before-${Nr()}`,
      C = `headlessui-focus-sentinel-after-${Nr()}`,
      R = w.exports.useRef(null),
      L = jn(R, u, (K) => {
        y({ type: 4, panel: K })
      }),
      V = Ro(R),
      F = Ls(),
      $ = (() => (F !== null ? F === Jr.Open : d.popoverState === 0))(),
      _ = xt((K) => {
        var Ce
        switch (K.key) {
          case Wa.Escape:
            if (
              d.popoverState !== 0 ||
              !R.current ||
              ((V == null ? void 0 : V.activeElement) &&
                !R.current.contains(V.activeElement))
            )
              return
            K.preventDefault(),
              K.stopPropagation(),
              y({ type: 1 }),
              (Ce = d.button) == null || Ce.focus()
            break
        }
      })
    w.exports.useEffect(() => {
      var K
      i.static ||
        (d.popoverState === 1 &&
          ((K = i.unmount) != null ? K : !0) &&
          y({ type: 4, panel: null }))
    }, [d.popoverState, i.unmount, i.static, y]),
      w.exports.useEffect(() => {
        if (!c || d.popoverState !== 0 || !R.current) return
        let K = V == null ? void 0 : V.activeElement
        R.current.contains(K) || Ga(R.current, ya.First)
      }, [c, R, d.popoverState])
    let ge = w.exports.useMemo(
        () => ({ open: d.popoverState === 0, close: f }),
        [d, f]
      ),
      oe = {
        ref: L,
        id: d.panelId,
        onKeyDown: _,
        onBlur:
          c && d.popoverState === 0
            ? (K) => {
                var Ce, ee, lt, X, Re
                let Te = K.relatedTarget
                !Te ||
                  !R.current ||
                  ((Ce = R.current) != null && Ce.contains(Te)) ||
                  (y({ type: 1 }),
                  (((lt =
                    (ee = d.beforePanelSentinel.current) == null
                      ? void 0
                      : ee.contains) == null
                    ? void 0
                    : lt.call(ee, Te)) ||
                    ((Re =
                      (X = d.afterPanelSentinel.current) == null
                        ? void 0
                        : X.contains) == null
                      ? void 0
                      : Re.call(X, Te))) &&
                    Te.focus({ preventScroll: !0 }))
              }
            : void 0,
        tabIndex: -1,
      },
      Z = ry(),
      me = xt(() => {
        let K = R.current
        if (!K) return
        function Ce() {
          jt(Z.current, {
            [Qa.Forwards]: () => {
              Ga(K, ya.First)
            },
            [Qa.Backwards]: () => {
              var ee
              ;(ee = d.button) == null || ee.focus({ preventScroll: !0 })
            },
          })
        }
        Ce()
      }),
      Ee = xt(() => {
        let K = R.current
        if (!K) return
        function Ce() {
          jt(Z.current, {
            [Qa.Forwards]: () => {
              var ee, lt, X
              if (!d.button) return
              let Re = bC(),
                Te = Re.indexOf(d.button),
                nt = Re.slice(0, Te + 1),
                ve = [...Re.slice(Te + 1), ...nt]
              for (let He of ve.slice())
                if (
                  ((lt =
                    (ee = He == null ? void 0 : He.id) == null
                      ? void 0
                      : ee.startsWith) == null
                    ? void 0
                    : lt.call(ee, 'headlessui-focus-sentinel-')) ||
                  ((X = d.panel) == null ? void 0 : X.contains(He))
                ) {
                  let vt = ve.indexOf(He)
                  vt !== -1 && ve.splice(vt, 1)
                }
              Ga(ve, ya.First, !1)
            },
            [Qa.Backwards]: () => Ga(K, ya.Last),
          })
        }
        Ce()
      })
    return Wt.createElement(
      fy.Provider,
      { value: d.panelId },
      $ &&
        x &&
        D(
          Dl,
          {
            id: E,
            ref: d.beforePanelSentinel,
            features: Eo.Focusable,
            as: 'button',
            type: 'button',
            onFocus: me,
          },
          void 0,
          !1,
          { fileName: Wm, lineNumber: 1, columnNumber: 8645 },
          this
        ),
      Hn({
        ourProps: oe,
        theirProps: v,
        slot: ge,
        defaultTag: bA,
        features: SA,
        visible: $,
        name: 'Popover.Panel',
      }),
      $ &&
        x &&
        D(
          Dl,
          {
            id: C,
            ref: d.afterPanelSentinel,
            features: Eo.Focusable,
            as: 'button',
            type: 'button',
            onFocus: Ee,
          },
          void 0,
          !1,
          { fileName: Wm, lineNumber: 1, columnNumber: 8857 },
          this
        )
    )
  }),
  CA = 'div',
  RA = Nn(function (i, u) {
    let c = w.exports.useRef(null),
      v = jn(c, u),
      [d, y] = w.exports.useState([]),
      f = xt(($) => {
        y((_) => {
          let ge = _.indexOf($)
          if (ge !== -1) {
            let oe = _.slice()
            return oe.splice(ge, 1), oe
          }
          return _
        })
      }),
      x = xt(($) => (y((_) => [..._, $]), () => f($))),
      E = xt(() => {
        var $
        let _ = Ms(c)
        if (!_) return !1
        let ge = _.activeElement
        return ($ = c.current) != null && $.contains(ge)
          ? !0
          : d.some((oe) => {
              var Z, me
              return (
                ((Z = _.getElementById(oe.buttonId)) == null
                  ? void 0
                  : Z.contains(ge)) ||
                ((me = _.getElementById(oe.panelId)) == null
                  ? void 0
                  : me.contains(ge))
              )
            })
      }),
      C = xt(($) => {
        for (let _ of d) _.buttonId !== $ && _.close()
      }),
      R = w.exports.useMemo(
        () => ({
          registerPopover: x,
          unregisterPopover: f,
          isFocusWithinPopoverGroup: E,
          closeOthers: C,
        }),
        [x, f, E, C]
      ),
      L = w.exports.useMemo(() => ({}), []),
      V = i,
      F = { ref: v }
    return Wt.createElement(
      cy.Provider,
      { value: R },
      Hn({
        ourProps: F,
        theirProps: V,
        slot: L,
        defaultTag: CA,
        name: 'Popover.Group',
      })
    )
  }),
  PE = Object.assign(pA, { Button: hA, Overlay: gA, Panel: EA, Group: RA })
function xA(i) {
  let u = { called: !1 }
  return (...c) => {
    if (!u.called) return (u.called = !0), i(...c)
  }
}
function Lm(i, ...u) {
  i && u.length > 0 && i.classList.add(...u)
}
function Am(i, ...u) {
  i && u.length > 0 && i.classList.remove(...u)
}
var Gm = ((i) => ((i.Ended = 'ended'), (i.Cancelled = 'cancelled'), i))(
  Gm || {}
)
function TA(i, u) {
  let c = ud()
  if (!i) return c.dispose
  let { transitionDuration: v, transitionDelay: d } = getComputedStyle(i),
    [y, f] = [v, d].map((x) => {
      let [E = 0] = x
        .split(',')
        .filter(Boolean)
        .map((C) => (C.includes('ms') ? parseFloat(C) : parseFloat(C) * 1e3))
        .sort((C, R) => R - C)
      return E
    })
  if (y + f !== 0) {
    let x = []
    x.push(
      c.addEventListener(i, 'transitionrun', (E) => {
        E.target === E.currentTarget &&
          (x.splice(0).forEach((C) => C()),
          x.push(
            c.addEventListener(i, 'transitionend', (C) => {
              C.target === C.currentTarget &&
                (u('ended'), x.splice(0).forEach((R) => R()))
            }),
            c.addEventListener(i, 'transitioncancel', (C) => {
              C.target === C.currentTarget &&
                (u('cancelled'), x.splice(0).forEach((R) => R()))
            })
          ))
      })
    )
  } else u('ended')
  return c.add(() => u('cancelled')), c.dispose
}
function NA(i, u, c, v) {
  let d = c ? 'enter' : 'leave',
    y = ud(),
    f = v !== void 0 ? xA(v) : () => {},
    x = jt(d, { enter: () => u.enter, leave: () => u.leave }),
    E = jt(d, { enter: () => u.enterTo, leave: () => u.leaveTo }),
    C = jt(d, { enter: () => u.enterFrom, leave: () => u.leaveFrom })
  return (
    Am(
      i,
      ...u.enter,
      ...u.enterTo,
      ...u.enterFrom,
      ...u.leave,
      ...u.leaveFrom,
      ...u.leaveTo,
      ...u.entered
    ),
    Lm(i, ...x, ...C),
    y.nextFrame(() => {
      Am(i, ...C),
        Lm(i, ...E),
        TA(
          i,
          (R) => (R === 'ended' && (Am(i, ...x), Lm(i, ...u.entered)), f(R))
        )
    }),
    y.dispose
  )
}
function wA({
  container: i,
  direction: u,
  classes: c,
  events: v,
  onStart: d,
  onStop: y,
}) {
  let f = ay(),
    x = bL(),
    E = Mi(u),
    C = xt(() =>
      jt(E.current, {
        enter: () => v.current.beforeEnter(),
        leave: () => v.current.beforeLeave(),
        idle: () => {},
      })
    ),
    R = xt(() =>
      jt(E.current, {
        enter: () => v.current.afterEnter(),
        leave: () => v.current.afterLeave(),
        idle: () => {},
      })
    )
  Xr(() => {
    let L = ud()
    x.add(L.dispose)
    let V = i.current
    if (!!V && E.current !== 'idle' && !!f.current)
      return (
        L.dispose(),
        C(),
        d.current(E.current),
        L.add(
          NA(V, c.current, E.current === 'enter', (F) => {
            L.dispose(),
              jt(F, {
                [Gm.Ended]() {
                  R(), y.current(E.current)
                },
                [Gm.Cancelled]: () => {},
              })
          })
        ),
        L.dispose
      )
  }, [u])
}
var rd =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@headlessui+react@1.6.6_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/transitions/transition.js'
function ho(i = '') {
  return i.split(' ').filter((u) => u.trim().length > 1)
}
let fd = w.exports.createContext(null)
fd.displayName = 'TransitionContext'
var DA = ((i) => ((i.Visible = 'visible'), (i.Hidden = 'hidden'), i))(DA || {})
function _A() {
  let i = w.exports.useContext(fd)
  if (i === null)
    throw new Error(
      'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
    )
  return i
}
function OA() {
  let i = w.exports.useContext(dd)
  if (i === null)
    throw new Error(
      'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
    )
  return i
}
let dd = w.exports.createContext(null)
dd.displayName = 'NestingContext'
function pd(i) {
  return 'children' in i
    ? pd(i.children)
    : i.current.filter(({ state: u }) => u === 'visible').length > 0
}
function AC(i) {
  let u = Mi(i),
    c = w.exports.useRef([]),
    v = ay(),
    d = xt((f, x = qa.Hidden) => {
      let E = c.current.findIndex(({ id: C }) => C === f)
      E !== -1 &&
        (jt(x, {
          [qa.Unmount]() {
            c.current.splice(E, 1)
          },
          [qa.Hidden]() {
            c.current[E].state = 'hidden'
          },
        }),
        iy(() => {
          var C
          !pd(c) && v.current && ((C = u.current) == null || C.call(u))
        }))
    }),
    y = xt((f) => {
      let x = c.current.find(({ id: E }) => E === f)
      return (
        x
          ? x.state !== 'visible' && (x.state = 'visible')
          : c.current.push({ id: f, state: 'visible' }),
        () => d(f, qa.Unmount)
      )
    })
  return w.exports.useMemo(
    () => ({ children: c, register: y, unregister: d }),
    [y, d, c]
  )
}
function MA() {}
let LA = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave']
function BE(i) {
  var u
  let c = {}
  for (let v of LA) c[v] = (u = i[v]) != null ? u : MA
  return c
}
function AA(i) {
  let u = w.exports.useRef(BE(i))
  return (
    w.exports.useEffect(() => {
      u.current = BE(i)
    }, [i]),
    u
  )
}
let kA = 'div',
  kC = Ai.RenderStrategy,
  UC = Nn(function (i, u) {
    let {
        beforeEnter: c,
        afterEnter: v,
        beforeLeave: d,
        afterLeave: y,
        enter: f,
        enterFrom: x,
        enterTo: E,
        entered: C,
        leave: R,
        leaveFrom: L,
        leaveTo: V,
        ...F
      } = i,
      $ = w.exports.useRef(null),
      _ = jn($, u),
      [ge, oe] = w.exports.useState('visible'),
      Z = F.unmount ? qa.Unmount : qa.Hidden,
      { show: me, appear: Ee, initial: K } = _A(),
      { register: Ce, unregister: ee } = OA(),
      lt = w.exports.useRef(null),
      X = Nr()
    w.exports.useEffect(() => {
      if (X) return Ce(X)
    }, [Ce, X]),
      w.exports.useEffect(() => {
        if (Z === qa.Hidden && !!X) {
          if (me && ge !== 'visible') {
            oe('visible')
            return
          }
          jt(ge, { hidden: () => ee(X), visible: () => Ce(X) })
        }
      }, [ge, X, Ce, ee, me, Z])
    let Re = Mi({
        enter: ho(f),
        enterFrom: ho(x),
        enterTo: ho(E),
        entered: ho(C),
        leave: ho(R),
        leaveFrom: ho(L),
        leaveTo: ho(V),
      }),
      Te = AA({ beforeEnter: c, afterEnter: v, beforeLeave: d, afterLeave: y }),
      nt = Ml()
    w.exports.useEffect(() => {
      if (nt && ge === 'visible' && $.current === null)
        throw new Error(
          'Did you forget to passthrough the `ref` to the actual DOM node?'
        )
    }, [$, ge, nt])
    let ve = K && !Ee,
      He = (() =>
        !nt || ve || lt.current === me ? 'idle' : me ? 'enter' : 'leave')(),
      vt = w.exports.useRef(!1),
      ze = AC(() => {
        vt.current || (oe('hidden'), ee(X))
      })
    wA({
      container: $,
      classes: Re,
      events: Te,
      direction: He,
      onStart: Mi(() => {
        vt.current = !0
      }),
      onStop: Mi((Kt) => {
        ;(vt.current = !1), Kt === 'leave' && !pd(ze) && (oe('hidden'), ee(X))
      }),
    }),
      w.exports.useEffect(() => {
        !ve || (Z === qa.Hidden ? (lt.current = null) : (lt.current = me))
      }, [me, ve, ge])
    let le = F,
      Ue = { ref: _ }
    return D(
      dd.Provider,
      {
        value: ze,
        children: Wt.createElement(
          TC,
          { value: jt(ge, { visible: Jr.Open, hidden: Jr.Closed }) },
          Hn({
            ourProps: Ue,
            theirProps: le,
            defaultTag: kA,
            features: kC,
            visible: ge === 'visible',
            name: 'Transition.Child',
          })
        ),
      },
      void 0,
      !1,
      { fileName: rd, lineNumber: 1, columnNumber: 3477 },
      this
    )
  }),
  qm = Nn(function (i, u) {
    let { show: c, appear: v = !1, unmount: d, ...y } = i,
      f = w.exports.useRef(null),
      x = jn(f, u)
    Ml()
    let E = Ls()
    if (
      (c === void 0 &&
        E !== null &&
        (c = jt(E, { [Jr.Open]: !0, [Jr.Closed]: !1 })),
      ![!0, !1].includes(c))
    )
      throw new Error(
        'A <Transition /> is used but it is missing a `show={true | false}` prop.'
      )
    let [C, R] = w.exports.useState(c ? 'visible' : 'hidden'),
      L = AC(() => {
        R('hidden')
      }),
      [V, F] = w.exports.useState(!0),
      $ = w.exports.useRef([c])
    Xr(() => {
      V !== !1 &&
        $.current[$.current.length - 1] !== c &&
        ($.current.push(c), F(!1))
    }, [$, c])
    let _ = w.exports.useMemo(
      () => ({ show: c, appear: v, initial: V }),
      [c, v, V]
    )
    w.exports.useEffect(() => {
      if (c) R('visible')
      else if (!pd(L)) R('hidden')
      else {
        let oe = f.current
        if (!oe) return
        let Z = oe.getBoundingClientRect()
        Z.x === 0 && Z.y === 0 && Z.width === 0 && Z.height === 0 && R('hidden')
      }
    }, [c, L])
    let ge = { unmount: d }
    return D(
      dd.Provider,
      {
        value: L,
        children: D(
          fd.Provider,
          {
            value: _,
            children: Hn({
              ourProps: {
                ...ge,
                as: w.exports.Fragment,
                children: Wt.createElement(UC, { ref: x, ...ge, ...y }),
              },
              theirProps: {},
              defaultTag: w.exports.Fragment,
              features: kC,
              visible: C === 'visible',
              name: 'Transition',
            }),
          },
          void 0,
          !1,
          { fileName: rd, lineNumber: 1, columnNumber: 4427 },
          this
        ),
      },
      void 0,
      !1,
      { fileName: rd, lineNumber: 1, columnNumber: 4386 },
      this
    )
  }),
  UA = Nn(function (i, u) {
    let c = w.exports.useContext(fd) !== null,
      v = Ls() !== null
    return D(
      Li,
      {
        children:
          !c && v
            ? D(
                qm,
                { ref: u, ...i },
                void 0,
                !1,
                { fileName: rd, lineNumber: 1, columnNumber: 4727 },
                this
              )
            : Wt.createElement(UC, { ref: u, ...i }),
      },
      void 0,
      !1
    )
  }),
  Kf = Object.assign(qm, { Child: UA, Root: qm })
var VE =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/BellIcon.js'
function FA(i, u) {
  return D(
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
          ref: u,
        },
        i
      ),
      children: D(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
        },
        void 0,
        !1,
        { fileName: VE, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: VE, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const jA = w.exports.forwardRef(FA),
  HA = jA
var YE =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/CalendarIcon.js'
function zA(i, u) {
  return D(
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
          ref: u,
        },
        i
      ),
      children: D(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        },
        void 0,
        !1,
        { fileName: YE, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: YE, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const $A = w.exports.forwardRef(zA),
  PA = $A
var IE =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/HomeIcon.js'
function BA(i, u) {
  return D(
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
          ref: u,
        },
        i
      ),
      children: D(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
        },
        void 0,
        !1,
        { fileName: IE, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: IE, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const VA = w.exports.forwardRef(BA),
  YA = VA
var WE =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/MapIcon.js'
function IA(i, u) {
  return D(
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
          ref: u,
        },
        i
      ),
      children: D(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
        },
        void 0,
        !1,
        { fileName: WE, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: WE, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const WA = w.exports.forwardRef(IA),
  GA = WA
var GE =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/MenuIcon.js'
function qA(i, u) {
  return D(
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
          ref: u,
        },
        i
      ),
      children: D(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M4 6h16M4 12h16M4 18h16',
        },
        void 0,
        !1,
        { fileName: GE, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: GE, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const QA = w.exports.forwardRef(qA),
  KA = QA
var qE =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/SearchCircleIcon.js'
function XA(i, u) {
  return D(
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
          ref: u,
        },
        i
      ),
      children: D(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        void 0,
        !1,
        { fileName: qE, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: qE, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const JA = w.exports.forwardRef(XA),
  ZA = JA
var QE =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/SpeakerphoneIcon.js'
function ek(i, u) {
  return D(
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
          ref: u,
        },
        i
      ),
      children: D(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
        },
        void 0,
        !1,
        { fileName: QE, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: QE, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const tk = w.exports.forwardRef(ek),
  nk = tk
var KE =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/UserGroupIcon.js'
function rk(i, u) {
  return D(
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
          ref: u,
        },
        i
      ),
      children: D(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        },
        void 0,
        !1,
        { fileName: KE, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: KE, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const ak = w.exports.forwardRef(rk),
  ik = ak
var XE =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/outline/esm/XIcon.js'
function ok(i, u) {
  return D(
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
          ref: u,
        },
        i
      ),
      children: D(
        'path',
        {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M6 18L18 6M6 6l12 12',
        },
        void 0,
        !1,
        { fileName: XE, lineNumber: 12, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: XE, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const lk = w.exports.forwardRef(ok),
  uk = lk
var pe =
  '/Users/jeffsee/code/tinacms/packages/@tinacms/app/src/admin/layout.tsx'
const JE = [
  { name: 'Dashboard', href: '#', icon: YA, current: !0 },
  { name: 'Calendar', href: '#', icon: PA, current: !1 },
  { name: 'Teams', href: '#', icon: ik, current: !1 },
  { name: 'Directory', href: '#', icon: ZA, current: !1 },
  { name: 'Announcements', href: '#', icon: nk, current: !1 },
  { name: 'Office Map', href: '#', icon: GA, current: !1 },
]
function Xf(...i) {
  return i.filter(Boolean).join(' ')
}
function sk({ status: i, children: u }) {
  const [c, v] = w.exports.useState(!1)
  return D(
    Li,
    {
      children: D(
        'div',
        {
          className: 'h-screen flex',
          children: [
            D(
              Kf.Root,
              {
                show: c,
                as: w.exports.Fragment,
                children: D(
                  $E,
                  {
                    as: 'div',
                    className: 'relative z-40 sm:hidden',
                    onClose: v,
                    children: [
                      D(
                        Kf.Child,
                        {
                          as: w.exports.Fragment,
                          enter: 'transition-opacity ease-linear duration-300',
                          enterFrom: 'opacity-0',
                          enterTo: 'opacity-100',
                          leave: 'transition-opacity ease-linear duration-300',
                          leaveFrom: 'opacity-100',
                          leaveTo: 'opacity-0',
                          children: D(
                            'div',
                            {
                              className:
                                'fixed inset-0 bg-gray-600 bg-opacity-75',
                            },
                            void 0,
                            !1,
                            { fileName: pe, lineNumber: 57, columnNumber: 15 },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        { fileName: pe, lineNumber: 48, columnNumber: 13 },
                        this
                      ),
                      D(
                        'div',
                        {
                          className: 'fixed inset-0 flex z-40',
                          children: [
                            D(
                              Kf.Child,
                              {
                                as: w.exports.Fragment,
                                enter:
                                  'transition ease-in-out duration-300 transform',
                                enterFrom: '-translate-x-full',
                                enterTo: 'translate-x-0',
                                leave:
                                  'transition ease-in-out duration-300 transform',
                                leaveFrom: 'translate-x-0',
                                leaveTo: '-translate-x-full',
                                children: D(
                                  $E.Panel,
                                  {
                                    className:
                                      'relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none',
                                    children: [
                                      D(
                                        Kf.Child,
                                        {
                                          as: w.exports.Fragment,
                                          enter: 'ease-in-out duration-300',
                                          enterFrom: 'opacity-0',
                                          enterTo: 'opacity-100',
                                          leave: 'ease-in-out duration-300',
                                          leaveFrom: 'opacity-100',
                                          leaveTo: 'opacity-0',
                                          children: D(
                                            'div',
                                            {
                                              className:
                                                'absolute top-0 right-0 -mr-12 pt-2',
                                              children: D(
                                                'button',
                                                {
                                                  type: 'button',
                                                  className:
                                                    'ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white',
                                                  onClick: () => v(!1),
                                                  children: [
                                                    D(
                                                      'span',
                                                      {
                                                        className: 'sr-only',
                                                        children:
                                                          'Close sidebar',
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: pe,
                                                        lineNumber: 86,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                    D(
                                                      uk,
                                                      {
                                                        className:
                                                          'h-6 w-6 text-white',
                                                        'aria-hidden': 'true',
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: pe,
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
                                                  fileName: pe,
                                                  lineNumber: 81,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: pe,
                                              lineNumber: 80,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: pe,
                                          lineNumber: 71,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                      D(
                                        'div',
                                        {
                                          className:
                                            'flex-1 h-0 pt-5 pb-4 overflow-y-auto',
                                          children: [
                                            D(
                                              'div',
                                              {
                                                className:
                                                  'flex-shrink-0 flex items-center px-4',
                                                children: D(
                                                  'img',
                                                  {
                                                    className: 'h-8 w-auto',
                                                    src: 'https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-900-text.svg',
                                                    alt: 'Workflow',
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: pe,
                                                    lineNumber: 96,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: pe,
                                                lineNumber: 95,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                            D(
                                              'nav',
                                              {
                                                'aria-label': 'Sidebar',
                                                className: 'mt-5',
                                                children: D(
                                                  'div',
                                                  {
                                                    className: 'px-2 space-y-1',
                                                    children: JE.map((d) =>
                                                      D(
                                                        'a',
                                                        {
                                                          href: d.href,
                                                          className: Xf(
                                                            d.current
                                                              ? 'bg-gray-100 text-gray-900'
                                                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                          ),
                                                          children: [
                                                            D(
                                                              d.icon,
                                                              {
                                                                className: Xf(
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
                                                                fileName: pe,
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
                                                          fileName: pe,
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
                                                    fileName: pe,
                                                    lineNumber: 103,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: pe,
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
                                          fileName: pe,
                                          lineNumber: 94,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                      D(
                                        'div',
                                        {
                                          className:
                                            'flex-shrink-0 flex border-t border-gray-200 p-4',
                                          children: D(
                                            'a',
                                            {
                                              href: '#',
                                              className:
                                                'flex-shrink-0 group block',
                                              children: D(
                                                'div',
                                                {
                                                  className:
                                                    'flex items-center',
                                                  children: [
                                                    D(
                                                      'div',
                                                      {
                                                        children: D(
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
                                                            fileName: pe,
                                                            lineNumber: 134,
                                                            columnNumber: 27,
                                                          },
                                                          this
                                                        ),
                                                      },
                                                      void 0,
                                                      !1,
                                                      {
                                                        fileName: pe,
                                                        lineNumber: 133,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                    D(
                                                      'div',
                                                      {
                                                        className: 'ml-3',
                                                        children: [
                                                          D(
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
                                                              fileName: pe,
                                                              lineNumber: 141,
                                                              columnNumber: 27,
                                                            },
                                                            this
                                                          ),
                                                          D(
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
                                                              fileName: pe,
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
                                                        fileName: pe,
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
                                                  fileName: pe,
                                                  lineNumber: 132,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: pe,
                                              lineNumber: 131,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: pe,
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
                                    fileName: pe,
                                    lineNumber: 70,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: pe,
                                lineNumber: 61,
                                columnNumber: 15,
                              },
                              this
                            ),
                            D(
                              'div',
                              {
                                className: 'flex-shrink-0 w-14',
                                'aria-hidden': 'true',
                              },
                              void 0,
                              !1,
                              {
                                fileName: pe,
                                lineNumber: 153,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: pe, lineNumber: 60, columnNumber: 13 },
                        this
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  { fileName: pe, lineNumber: 43, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: pe, lineNumber: 42, columnNumber: 9 },
              this
            ),
            D(
              'div',
              {
                className: `sm:flex-shrink-0 ${
                  i === 'hidden' ? 'hidden' : 'flex'
                }`,
                children: D(
                  'div',
                  {
                    className: 'flex flex-col w-64',
                    children: D(
                      'div',
                      {
                        className:
                          'flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100',
                        children: [
                          D(
                            'div',
                            {
                              className:
                                'flex-1 flex flex-col pt-5 pb-4 overflow-y-auto',
                              children: [
                                D(
                                  'div',
                                  {
                                    className:
                                      'flex items-center flex-shrink-0 px-4',
                                    children: D(
                                      'img',
                                      {
                                        className: 'h-8 w-auto',
                                        src: 'https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-900-text.svg',
                                        alt: 'Workflow',
                                      },
                                      void 0,
                                      !1,
                                      {
                                        fileName: pe,
                                        lineNumber: 171,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: pe,
                                    lineNumber: 170,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                                D(
                                  'nav',
                                  {
                                    className: 'mt-5 flex-1',
                                    'aria-label': 'Sidebar',
                                    children: D(
                                      'div',
                                      {
                                        className: 'px-2 space-y-1',
                                        children: JE.map((d) =>
                                          D(
                                            'a',
                                            {
                                              href: d.href,
                                              className: Xf(
                                                d.current
                                                  ? 'bg-gray-200 text-gray-900'
                                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                              ),
                                              children: [
                                                D(
                                                  d.icon,
                                                  {
                                                    className: Xf(
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
                                                    fileName: pe,
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
                                              fileName: pe,
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
                                        fileName: pe,
                                        lineNumber: 178,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: pe,
                                    lineNumber: 177,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            { fileName: pe, lineNumber: 169, columnNumber: 15 },
                            this
                          ),
                          D(
                            'div',
                            {
                              className:
                                'flex-shrink-0 flex border-t border-gray-200 p-4',
                              children: D(
                                'a',
                                {
                                  href: '#',
                                  className: 'flex-shrink-0 w-full group block',
                                  children: D(
                                    'div',
                                    {
                                      className: 'flex items-center',
                                      children: [
                                        D(
                                          'div',
                                          {
                                            children: D(
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
                                                fileName: pe,
                                                lineNumber: 209,
                                                columnNumber: 23,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          !1,
                                          {
                                            fileName: pe,
                                            lineNumber: 208,
                                            columnNumber: 21,
                                          },
                                          this
                                        ),
                                        D(
                                          'div',
                                          {
                                            className: 'ml-3',
                                            children: [
                                              D(
                                                'p',
                                                {
                                                  className:
                                                    'text-sm font-medium text-gray-700 group-hover:text-gray-900',
                                                  children: 'Whitney Francis',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: pe,
                                                  lineNumber: 216,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                              D(
                                                'p',
                                                {
                                                  className:
                                                    'text-xs font-medium text-gray-500 group-hover:text-gray-700',
                                                  children: 'View profile',
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: pe,
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
                                            fileName: pe,
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
                                      fileName: pe,
                                      lineNumber: 207,
                                      columnNumber: 19,
                                    },
                                    this
                                  ),
                                },
                                void 0,
                                !1,
                                {
                                  fileName: pe,
                                  lineNumber: 206,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            { fileName: pe, lineNumber: 205, columnNumber: 15 },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      { fileName: pe, lineNumber: 168, columnNumber: 13 },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: pe, lineNumber: 166, columnNumber: 11 },
                  this
                ),
              },
              void 0,
              !1,
              { fileName: pe, lineNumber: 161, columnNumber: 9 },
              this
            ),
            D(
              'div',
              {
                className: 'flex flex-col min-w-0 flex-1 overflow-hidden',
                children: [
                  D(
                    'div',
                    {
                      className: 'sm:hidden',
                      children: D(
                        'div',
                        {
                          className:
                            'flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5',
                          children: [
                            D(
                              'div',
                              {
                                children: D(
                                  'img',
                                  {
                                    className: 'h-8 w-auto',
                                    src: 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg',
                                    alt: 'Workflow',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: pe,
                                    lineNumber: 233,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: pe,
                                lineNumber: 232,
                                columnNumber: 15,
                              },
                              this
                            ),
                            D(
                              'div',
                              {
                                children: D(
                                  'button',
                                  {
                                    type: 'button',
                                    className:
                                      '-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900',
                                    onClick: () => v(!0),
                                    children: [
                                      D(
                                        'span',
                                        {
                                          className: 'sr-only',
                                          children: 'Open sidebar',
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: pe,
                                          lineNumber: 245,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                      D(
                                        KA,
                                        {
                                          className: 'h-6 w-6',
                                          'aria-hidden': 'true',
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: pe,
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
                                    fileName: pe,
                                    lineNumber: 240,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: pe,
                                lineNumber: 239,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        { fileName: pe, lineNumber: 231, columnNumber: 13 },
                        this
                      ),
                    },
                    void 0,
                    !1,
                    { fileName: pe, lineNumber: 230, columnNumber: 11 },
                    this
                  ),
                  D(
                    'div',
                    {
                      className: 'flex-1 relative z-0 flex overflow-hidden',
                      children: [
                        D(
                          'main',
                          {
                            className:
                              'flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last',
                            children: D(
                              'div',
                              {
                                className: 'absolute inset-0',
                                children: D(
                                  'div',
                                  { className: 'h-full', children: u },
                                  void 0,
                                  !1,
                                  {
                                    fileName: pe,
                                    lineNumber: 255,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: pe,
                                lineNumber: 254,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: pe, lineNumber: 252, columnNumber: 13 },
                          this
                        ),
                        D(
                          'aside',
                          {
                            className: `${
                              i === 'hidden' ? 'hidden' : 'flex'
                            } relative xl:order-first xl:flex-col flex-shrink-0 w-96 border-r border-gray-200 overflow-y-auto`,
                            children: D(
                              'div',
                              {
                                className: 'absolute inset-0 py-6 px-4 sm:px-6',
                                children: D(
                                  'div',
                                  {
                                    className:
                                      'h-full border-2 border-gray-200 border-dashed rounded-lg',
                                    children: 'Hi there',
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: pe,
                                    lineNumber: 269,
                                    columnNumber: 17,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: pe,
                                lineNumber: 268,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          !1,
                          { fileName: pe, lineNumber: 262, columnNumber: 13 },
                          this
                        ),
                      ],
                    },
                    void 0,
                    !0,
                    { fileName: pe, lineNumber: 251, columnNumber: 11 },
                    this
                  ),
                ],
              },
              void 0,
              !0,
              { fileName: pe, lineNumber: 229, columnNumber: 9 },
              this
            ),
          ],
        },
        void 0,
        !0,
        { fileName: pe, lineNumber: 41, columnNumber: 7 },
        this
      ),
    },
    void 0,
    !1
  )
}
var ZE =
  '/Users/jeffsee/code/tinacms/node_modules/.pnpm/@heroicons+react@1.0.6_react@18.2.0/node_modules/@heroicons/react/solid/esm/SearchIcon.js'
function ck(i, u) {
  return D(
    'svg',
    {
      ...Object.assign(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          'aria-hidden': 'true',
          ref: u,
        },
        i
      ),
      children: D(
        'path',
        {
          fillRule: 'evenodd',
          d: 'M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z',
          clipRule: 'evenodd',
        },
        void 0,
        !1,
        { fileName: ZE, lineNumber: 10, columnNumber: 27 },
        this
      ),
    },
    void 0,
    !1,
    { fileName: ZE, lineNumber: 4, columnNumber: 23 },
    this
  )
}
const fk = w.exports.forwardRef(ck),
  dk = fk
var Rt = '/Users/jeffsee/code/tinacms/packages/@tinacms/app/src/admin/nav.tsx'
const km = {
    name: 'Chelsea Hagon',
    email: 'chelsea.hagon@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  pk = [
    { name: 'Dashboard', href: '#', current: !0 },
    { name: 'Calendar', href: '#', current: !1 },
    { name: 'Teams', href: '#', current: !1 },
    { name: 'Directory', href: '#', current: !1 },
  ],
  vk = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
function eC(...i) {
  return i.filter(Boolean).join(' ')
}
function hk({ setStatus: i, value: u, setValue: c }) {
  return D(
    Li,
    {
      children: D(
        PE,
        {
          as: 'header',
          className: ({ open: v }) =>
            eC(
              v ? 'fixed inset-0 z-40 overflow-y-auto' : '',
              'bg-white shadow-sm lg:static lg:overflow-y-visible border-b border-gray-200'
            ),
          children: ({ open: v }) =>
            D(
              Li,
              {
                children: [
                  D(
                    'div',
                    {
                      className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
                      children: D(
                        'div',
                        {
                          className:
                            'relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8',
                          children: [
                            D(
                              'div',
                              {
                                className:
                                  'flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2',
                                children: D(
                                  'div',
                                  {
                                    className:
                                      'flex-shrink-0 flex items-center',
                                    children: D(
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
                            D(
                              'div',
                              {
                                className:
                                  'min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-8',
                                children: D(
                                  'div',
                                  {
                                    className:
                                      'flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0',
                                    children: D(
                                      'div',
                                      {
                                        className: 'w-full',
                                        children: [
                                          D(
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
                                          D(
                                            'div',
                                            {
                                              className: 'relative',
                                              children: [
                                                D(
                                                  'div',
                                                  {
                                                    className:
                                                      'pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center',
                                                    children: D(
                                                      dk,
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
                                                D(
                                                  'input',
                                                  {
                                                    id: 'search',
                                                    name: 'search',
                                                    value: u,
                                                    onChange: (d) =>
                                                      c(d.target.value),
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
                  D(
                    PE.Panel,
                    {
                      as: 'nav',
                      className: 'lg:hidden',
                      'aria-label': 'Global',
                      children: [
                        D(
                          'div',
                          {
                            className:
                              'max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4',
                            children: pk.map((d) =>
                              D(
                                'a',
                                {
                                  href: d.href,
                                  'aria-current': d.current ? 'page' : void 0,
                                  className: eC(
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
                        D(
                          'div',
                          {
                            className: 'border-t border-gray-200 pt-4 pb-3',
                            children: [
                              D(
                                'div',
                                {
                                  className:
                                    'max-w-3xl mx-auto px-4 flex items-center sm:px-6',
                                  children: [
                                    D(
                                      'div',
                                      {
                                        className: 'flex-shrink-0',
                                        children: D(
                                          'img',
                                          {
                                            className: 'h-10 w-10 rounded-full',
                                            src: km.imageUrl,
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
                                    D(
                                      'div',
                                      {
                                        className: 'ml-3',
                                        children: [
                                          D(
                                            'div',
                                            {
                                              className:
                                                'text-base font-medium text-gray-800',
                                              children: km.name,
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
                                          D(
                                            'div',
                                            {
                                              className:
                                                'text-sm font-medium text-gray-500',
                                              children: km.email,
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
                                    D(
                                      'button',
                                      {
                                        type: 'button',
                                        className:
                                          'ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                                        children: [
                                          D(
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
                                          D(
                                            HA,
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
                              D(
                                'div',
                                {
                                  className:
                                    'mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4',
                                  children: vk.map((d) =>
                                    D(
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
var Jf = '/Users/jeffsee/code/tinacms/packages/@tinacms/app/src/admin/index.tsx'
const tC = () => {
  const i = w.exports.useRef(null),
    [u, c] = Wt.useState('hidden'),
    [v, d] = w.exports.useState('/')
  return (
    w.exports.useEffect(() => {
      setInterval(() => {
        i.current && d(i.current.contentWindow.location.pathname)
      }, 500)
    }, [i.current]),
    D(
      'div',
      {
        children: D(
          sk,
          {
            status: u,
            children: [
              D(
                hk,
                { status: u, setStatus: c, value: v, setValue: d },
                void 0,
                !1,
                { fileName: Jf, lineNumber: 20, columnNumber: 9 },
                void 0
              ),
              D(
                'iframe',
                {
                  onLoad: (y) => console.log('loaded', y),
                  ref: i,
                  className: 'h-full w-full',
                  src: '/',
                },
                void 0,
                !1,
                { fileName: Jf, lineNumber: 26, columnNumber: 9 },
                void 0
              ),
            ],
          },
          void 0,
          !0,
          { fileName: Jf, lineNumber: 19, columnNumber: 7 },
          void 0
        ),
      },
      void 0,
      !1,
      { fileName: Jf, lineNumber: 18, columnNumber: 5 },
      void 0
    )
  )
}
var mo = '/Users/jeffsee/code/tinacms/packages/@tinacms/app/src/main.tsx'
Fm.createRoot(document.getElementById('root')).render(
  D(
    Wt.StrictMode,
    {
      children: D(
        'div',
        {
          className: 'tina-tailwind',
          children: D(
            vL,
            {
              children: [
                D(
                  $m,
                  {
                    path: '/',
                    element: D(
                      tC,
                      {},
                      void 0,
                      !1,
                      { fileName: mo, lineNumber: 13, columnNumber: 34 },
                      globalThis
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: mo, lineNumber: 13, columnNumber: 9 },
                  globalThis
                ),
                D(
                  $m,
                  {
                    path: 'admin',
                    element: D(
                      tC,
                      {},
                      void 0,
                      !1,
                      { fileName: mo, lineNumber: 14, columnNumber: 38 },
                      globalThis
                    ),
                  },
                  void 0,
                  !1,
                  { fileName: mo, lineNumber: 14, columnNumber: 9 },
                  globalThis
                ),
              ],
            },
            void 0,
            !0,
            { fileName: mo, lineNumber: 12, columnNumber: 7 },
            globalThis
          ),
        },
        void 0,
        !1,
        { fileName: mo, lineNumber: 11, columnNumber: 5 },
        globalThis
      ),
    },
    void 0,
    !1,
    { fileName: mo, lineNumber: 10, columnNumber: 3 },
    globalThis
  )
)
//# sourceMappingURL=index.c242a3e6.js.map
