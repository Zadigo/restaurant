// !function (o, t) {
//     "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.VueGeolocation = t() : o.VueGeolocation = t()
// }(this, function () {
//     return function (o) {
//         function t(n) {
//             if (e[n]) return e[n].exports; var r = e[n] = {
//                 i: n, l: !1, exports: {}
//             };
//             return o[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
//         }
//         var e = {};
//         return t.m = o,
//             t.c = e,
//             t.i = function (o) { return o },
//             t.d = function (o, e, n) { t.o(o, e) || Object.defineProperty(o, e, { configurable: !1, enumerable: !0, get: n }) },
//             t.n = function (o) { var e = o && o.__esModule ? function () { return o.default } : function () { return o }; return t.d(e, "a", e), e },
//             t.o = function (o, t) { return Object.prototype.hasOwnProperty.call(o, t) }, t.p = "",
//             t(t.s = 0)
//     }([function (o, t, e) {
//         "use strict";
//         Object.defineProperty(t, "__esModule", { value: !0 });
//         var n = {
//             install: function (o) {
//                 o.prototype.$getLocation = n.getLocation,
//                     o.prototype.$watchLocation = n.watchLocation,
//                     o.prototype.$clearLocationWatch = n.clearLocation
//             },
//             getLocation: function () {
//                 var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
//                     t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
//                 return new Promise(function (e, r) {
//                     if (t) return void r("reject forced for testing purposes");
//                     n._isAvailable() ? window.navigator.geolocation.getCurrentPosition(function (o) {
//                         e({
//                             lat: o.coords.latitude,
//                             lng: o.coords.longitude,
//                             altitude: o.coords.altitude,
//                             altitudeAccuracy: o.coords.altitudeAccuracy,
//                             accuracy: o.coords.accuracy
//                         })
//                     },
//                         function () {
//                             r("no position access")
//                         }, o) : r("no browser support")
//                 })
//             },
//             watchLocation: function () {
//                 var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
//                     t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
//                 return new Promise(function (e, r) {
//                     if (t) return void r("reject forced for testing purposes");
//                     n._isAvailable() ? window.navigator.geolocation.watchPosition(function (o) {
//                         e({
//                             lat: o.coords.latitude,
//                             lng: o.coords.longitude,
//                             altitude: o.coords.altitude,
//                             altitudeAccuracy: o.coords.altitudeAccuracy,
//                             accuracy: o.coords.accuracy,
//                             heading: o.coords.heading,
//                             speed: o.coords.speed
//                         })
//                     }, function () { r("no position access") }, o) : r("no browser support")
//                 })
//             }, clearLocation: function (o) {
//                 return new Promise(function (t, e) {
//                     n._isAvailable() ? o ? t(window.navigator.geolocation.clearWatch(o)) : e("please provide watchID") : e("no browser support")
//                 })
//             },
//             _isAvailable: function () {
//                 return "geolocation" in window.navigator
//             }
//         };
//         t.default = n,
//             "undefined" != typeof window && window.Vue && window.Vue.use(n)
//     }])
// });
