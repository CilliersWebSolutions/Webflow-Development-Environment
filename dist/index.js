"use strict"; (() => {
	var ra = "164", si = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, ri = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, yh = 0, Za = 1, vh = 2; var Ol = 1, Mh = 2, _n = 3, sn = 0, wt = 1, Zt = 2, Dn = 0, Ri = 1, Ka = 2, Ja = 3, $a = 4, Sh = 5, Qn = 100, bh = 101, Ah = 102, Th = 103, Eh = 104, wh = 200, Rh = 201, Ch = 202, Ph = 203, Eo = 204, wo = 205, Ih = 206, Lh = 207, Nh = 208, Dh = 209, Uh = 210, Oh = 211, Fh = 212, Bh = 213, zh = 214, kh = 0, Hh = 1, Vh = 2, $s = 3, Gh = 4, Wh = 5, Xh = 6, Yh = 7, Fl = 0, qh = 1, Zh = 2, Un = 0, Kh = 1, Jh = 2, $h = 3, jh = 4, Qh = 5, eu = 6, tu = 7, ja = "attached", nu = "detached", Bl = 300, Li = 301, Ni = 302, Ro = 303, Co = 304, Pr = 306, ti = 1e3, xn = 1001, os = 1002, St = 1003, oa = 1004; var Ti = 1005; var Et = 1006, ns = 1007; var en = 1008; var On = 1009, iu = 1010, su = 1011, zl = 1012, kl = 1013, Di = 1014, tn = 1015, Ir = 1016, Hl = 1017, Vl = 1018, ys = 1020, ru = 35902, ou = 1021, au = 1022, Jt = 1023, cu = 1024, lu = 1025, Ci = 1026, as = 1027, Gl = 1028, Wl = 1029, hu = 1030, Xl = 1031, Yl = 1033, Wr = 33776, Xr = 33777, Yr = 33778, qr = 33779, Qa = 35840, ec = 35841, tc = 35842, nc = 35843, ic = 36196, sc = 37492, rc = 37496, oc = 37808, ac = 37809, cc = 37810, lc = 37811, hc = 37812, uc = 37813, dc = 37814, fc = 37815, pc = 37816, mc = 37817, gc = 37818, _c = 37819, xc = 37820, yc = 37821, Zr = 36492, vc = 36494, Mc = 36495, uu = 36283, Sc = 36284, bc = 36285, Ac = 36286; var Ui = 2300, ni = 2301, Kr = 2302, Tc = 2400, Ec = 2401, wc = 2402, du = 2500; var ql = 0, Lr = 1, vs = 2, fu = 3200, pu = 3201, Zl = 0, mu = 1, Ln = "", ot = "srgb", ht = "srgb-linear", aa = "display-p3", Nr = "display-p3-linear", js = "linear", et = "srgb", Qs = "rec709", er = "p3"; var ai = 7680; var Rc = 519, gu = 512, _u = 513, xu = 514, Kl = 515, yu = 516, vu = 517, Mu = 518, Su = 519, Po = 35044; var Cc = "300 es", yn = 2e3, tr = 2001, rn = class { addEventListener(e, t) { this._listeners === void 0 && (this._listeners = {}); let n = this._listeners; n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t) } hasEventListener(e, t) { if (this._listeners === void 0) return !1; let n = this._listeners; return n[e] !== void 0 && n[e].indexOf(t) !== -1 } removeEventListener(e, t) { if (this._listeners === void 0) return; let i = this._listeners[e]; if (i !== void 0) { let r = i.indexOf(t); r !== -1 && i.splice(r, 1) } } dispatchEvent(e) { if (this._listeners === void 0) return; let n = this._listeners[e.type]; if (n !== void 0) { e.target = this; let i = n.slice(0); for (let r = 0, o = i.length; r < o; r++)i[r].call(this, e); e.target = null } } }, vt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Pc = 1234567, is = Math.PI / 180, Oi = 180 / Math.PI; function $t() { let s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0; return (vt[s & 255] + vt[s >> 8 & 255] + vt[s >> 16 & 255] + vt[s >> 24 & 255] + "-" + vt[e & 255] + vt[e >> 8 & 255] + "-" + vt[e >> 16 & 15 | 64] + vt[e >> 24 & 255] + "-" + vt[t & 63 | 128] + vt[t >> 8 & 255] + "-" + vt[t >> 16 & 255] + vt[t >> 24 & 255] + vt[n & 255] + vt[n >> 8 & 255] + vt[n >> 16 & 255] + vt[n >> 24 & 255]).toLowerCase() } function gt(s, e, t) { return Math.max(e, Math.min(t, s)) } function ca(s, e) { return (s % e + e) % e } function bu(s, e, t, n, i) { return n + (s - e) * (i - n) / (t - e) } function Au(s, e, t) { return s !== e ? (t - s) / (e - s) : 0 } function ss(s, e, t) { return (1 - t) * s + t * e } function Tu(s, e, t, n) { return ss(s, e, 1 - Math.exp(-t * n)) } function Eu(s, e = 1) { return e - Math.abs(ca(s, e * 2) - e) } function wu(s, e, t) { return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s)) } function Ru(s, e, t) { return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10)) } function Cu(s, e) { return s + Math.floor(Math.random() * (e - s + 1)) } function Pu(s, e) { return s + Math.random() * (e - s) } function Iu(s) { return s * (.5 - Math.random()) } function Lu(s) { s !== void 0 && (Pc = s); let e = Pc += 1831565813; return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296 } function Nu(s) { return s * is } function Du(s) { return s * Oi } function Uu(s) { return (s & s - 1) === 0 && s !== 0 } function Ou(s) { return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2)) } function Fu(s) { return Math.pow(2, Math.floor(Math.log(s) / Math.LN2)) } function Bu(s, e, t, n, i) { let r = Math.cos, o = Math.sin, a = r(t / 2), c = o(t / 2), l = r((e + n) / 2), h = o((e + n) / 2), u = r((e - n) / 2), d = o((e - n) / 2), f = r((n - e) / 2), g = o((n - e) / 2); switch (i) { case "XYX": s.set(a * h, c * u, c * d, a * l); break; case "YZY": s.set(c * d, a * h, c * u, a * l); break; case "ZXZ": s.set(c * u, c * d, a * h, a * l); break; case "XZX": s.set(a * h, c * g, c * f, a * l); break; case "YXY": s.set(c * f, a * h, c * g, a * l); break; case "ZYZ": s.set(c * g, c * f, a * h, a * l); break; default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i) } } function Kt(s, e) { switch (e.constructor) { case Float32Array: return s; case Uint32Array: return s / 4294967295; case Uint16Array: return s / 65535; case Uint8Array: return s / 255; case Int32Array: return Math.max(s / 2147483647, -1); case Int16Array: return Math.max(s / 32767, -1); case Int8Array: return Math.max(s / 127, -1); default: throw new Error("Invalid component type.") } } function qe(s, e) { switch (e.constructor) { case Float32Array: return s; case Uint32Array: return Math.round(s * 4294967295); case Uint16Array: return Math.round(s * 65535); case Uint8Array: return Math.round(s * 255); case Int32Array: return Math.round(s * 2147483647); case Int16Array: return Math.round(s * 32767); case Int8Array: return Math.round(s * 127); default: throw new Error("Invalid component type.") } } var Dr = { DEG2RAD: is, RAD2DEG: Oi, generateUUID: $t, clamp: gt, euclideanModulo: ca, mapLinear: bu, inverseLerp: Au, lerp: ss, damp: Tu, pingpong: Eu, smoothstep: wu, smootherstep: Ru, randInt: Cu, randFloat: Pu, randFloatSpread: Iu, seededRandom: Lu, degToRad: Nu, radToDeg: Du, isPowerOfTwo: Uu, ceilPowerOfTwo: Ou, floorPowerOfTwo: Fu, setQuaternionFromProperEuler: Bu, normalize: qe, denormalize: Kt }, xe = class s { constructor(e = 0, t = 0) { s.prototype.isVector2 = !0, this.x = e, this.y = t } get width() { return this.x } set width(e) { this.x = e } get height() { return this.y } set height(e) { this.y = e } set(e, t) { return this.x = e, this.y = t, this } setScalar(e) { return this.x = e, this.y = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y) } copy(e) { return this.x = e.x, this.y = e.y, this } add(e) { return this.x += e.x, this.y += e.y, this } addScalar(e) { return this.x += e, this.y += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this } subScalar(e) { return this.x -= e, this.y -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this } divide(e) { return this.x /= e.x, this.y /= e.y, this } divideScalar(e) { return this.multiplyScalar(1 / e) } applyMatrix3(e) { let t = this.x, n = this.y, i = e.elements; return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this } clampLength(e, t) { let n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this } negate() { return this.x = -this.x, this.y = -this.y, this } dot(e) { return this.x * e.x + this.y * e.y } cross(e) { return this.x * e.y - this.y * e.x } lengthSq() { return this.x * this.x + this.y * this.y } length() { return Math.sqrt(this.x * this.x + this.y * this.y) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) } normalize() { return this.divideScalar(this.length() || 1) } angle() { return Math.atan2(-this.y, -this.x) + Math.PI } angleTo(e) { let t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; let n = this.dot(e) / t; return Math.acos(gt(n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { let t = this.x - e.x, n = this.y - e.y; return t * t + n * n } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this } equals(e) { return e.x === this.x && e.y === this.y } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this } rotateAround(e, t) { let n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, o = this.y - e.y; return this.x = r * n - o * i + e.x, this.y = r * i + o * n + e.y, this } random() { return this.x = Math.random(), this.y = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y } }, Ie = class s { constructor(e, t, n, i, r, o, a, c, l) { s.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, o, a, c, l) } set(e, t, n, i, r, o, a, c, l) { let h = this.elements; return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = r, h[5] = c, h[6] = n, h[7] = o, h[8] = l, this } identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this } copy(e) { let t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this } extractBasis(e, t, n) { return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this } setFromMatrix4(e) { let t = e.elements; return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, t) { let n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], f = n[5], g = n[8], x = i[0], m = i[3], p = i[6], A = i[1], M = i[4], T = i[7], N = i[2], R = i[5], w = i[8]; return r[0] = o * x + a * A + c * N, r[3] = o * m + a * M + c * R, r[6] = o * p + a * T + c * w, r[1] = l * x + h * A + u * N, r[4] = l * m + h * M + u * R, r[7] = l * p + h * T + u * w, r[2] = d * x + f * A + g * N, r[5] = d * m + f * M + g * R, r[8] = d * p + f * T + g * w, this } multiplyScalar(e) { let t = this.elements; return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this } determinant() { let e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8]; return t * o * h - t * a * l - n * r * h + n * a * c + i * r * l - i * o * c } invert() { let e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = h * o - a * l, d = a * c - h * r, f = l * r - o * c, g = t * u + n * d + i * f; if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); let x = 1 / g; return e[0] = u * x, e[1] = (i * l - h * n) * x, e[2] = (a * n - i * o) * x, e[3] = d * x, e[4] = (h * t - i * c) * x, e[5] = (i * r - a * t) * x, e[6] = f * x, e[7] = (n * c - l * t) * x, e[8] = (o * t - n * r) * x, this } transpose() { let e, t = this.elements; return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this } getNormalMatrix(e) { return this.setFromMatrix4(e).invert().transpose() } transposeIntoArray(e) { let t = this.elements; return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this } setUvTransform(e, t, n, i, r, o, a) { let c = Math.cos(r), l = Math.sin(r); return this.set(n * c, n * l, -n * (c * o + l * a) + o + e, -i * l, i * c, -i * (-l * o + c * a) + a + t, 0, 0, 1), this } scale(e, t) { return this.premultiply(Jr.makeScale(e, t)), this } rotate(e) { return this.premultiply(Jr.makeRotation(-e)), this } translate(e, t) { return this.premultiply(Jr.makeTranslation(e, t)), this } makeTranslation(e, t) { return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this } makeRotation(e) { let t = Math.cos(e), n = Math.sin(e); return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this } makeScale(e, t) { return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this } equals(e) { let t = this.elements, n = e.elements; for (let i = 0; i < 9; i++)if (t[i] !== n[i]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 9; n++)this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { let n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e } clone() { return new this.constructor().fromArray(this.elements) } }, Jr = new Ie; function Jl(s) { for (let e = s.length - 1; e >= 0; --e)if (s[e] >= 65535) return !0; return !1 } function cs(s) { return document.createElementNS("http://www.w3.org/1999/xhtml", s) } function zu() { let s = cs("canvas"); return s.style.display = "block", s } var Ic = {}; function $l(s) { s in Ic || (Ic[s] = !0, console.warn(s)) } var Lc = new Ie().set(.8224621, .177538, 0, .0331941, .9668058, 0, .0170827, .0723974, .9105199), Nc = new Ie().set(1.2249401, -.2249404, 0, -.0420569, 1.0420571, 0, -.0196376, -.0786361, 1.0982735), bs = { [ht]: { transfer: js, primaries: Qs, toReference: s => s, fromReference: s => s }, [ot]: { transfer: et, primaries: Qs, toReference: s => s.convertSRGBToLinear(), fromReference: s => s.convertLinearToSRGB() }, [Nr]: { transfer: js, primaries: er, toReference: s => s.applyMatrix3(Nc), fromReference: s => s.applyMatrix3(Lc) }, [aa]: { transfer: et, primaries: er, toReference: s => s.convertSRGBToLinear().applyMatrix3(Nc), fromReference: s => s.applyMatrix3(Lc).convertLinearToSRGB() } }, ku = new Set([ht, Nr]), We = { enabled: !0, _workingColorSpace: ht, get workingColorSpace() { return this._workingColorSpace }, set workingColorSpace(s) { if (!ku.has(s)) throw new Error(`Unsupported working color space, "${s}".`); this._workingColorSpace = s }, convert: function (s, e, t) { if (this.enabled === !1 || e === t || !e || !t) return s; let n = bs[e].toReference, i = bs[t].fromReference; return i(n(s)) }, fromWorkingColorSpace: function (s, e) { return this.convert(s, this._workingColorSpace, e) }, toWorkingColorSpace: function (s, e) { return this.convert(s, e, this._workingColorSpace) }, getPrimaries: function (s) { return bs[s].primaries }, getTransfer: function (s) { return s === Ln ? js : bs[s].transfer } }; function Pi(s) { return s < .04045 ? s * .0773993808 : Math.pow(s * .9478672986 + .0521327014, 2.4) } function $r(s) { return s < .0031308 ? s * 12.92 : 1.055 * Math.pow(s, .41666) - .055 } var ci, Io = class { static getDataURL(e) { if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src; let t; if (e instanceof HTMLCanvasElement) t = e; else { ci === void 0 && (ci = cs("canvas")), ci.width = e.width, ci.height = e.height; let n = ci.getContext("2d"); e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = ci } return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png") } static sRGBToLinear(e) { if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) { let t = cs("canvas"); t.width = e.width, t.height = e.height; let n = t.getContext("2d"); n.drawImage(e, 0, 0, e.width, e.height); let i = n.getImageData(0, 0, e.width, e.height), r = i.data; for (let o = 0; o < r.length; o++)r[o] = Pi(r[o] / 255) * 255; return n.putImageData(i, 0, 0), t } else if (e.data) { let t = e.data.slice(0); for (let n = 0; n < t.length; n++)t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Pi(t[n] / 255) * 255) : t[n] = Pi(t[n]); return { data: t, width: e.width, height: e.height } } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e } }, Hu = 0, nr = class { constructor(e = null) { this.isSource = !0, Object.defineProperty(this, "id", { value: Hu++ }), this.uuid = $t(), this.data = e, this.dataReady = !0, this.version = 0 } set needsUpdate(e) { e === !0 && this.version++ } toJSON(e) { let t = e === void 0 || typeof e == "string"; if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid]; let n = { uuid: this.uuid, url: "" }, i = this.data; if (i !== null) { let r; if (Array.isArray(i)) { r = []; for (let o = 0, a = i.length; o < a; o++)i[o].isDataTexture ? r.push(jr(i[o].image)) : r.push(jr(i[o])) } else r = jr(i); n.url = r } return t || (e.images[this.uuid] = n), n } }; function jr(s) { return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? Io.getDataURL(s) : s.data ? { data: Array.from(s.data), width: s.width, height: s.height, type: s.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) } var Vu = 0, _t = class s extends rn { constructor(e = s.DEFAULT_IMAGE, t = s.DEFAULT_MAPPING, n = xn, i = xn, r = Et, o = en, a = Jt, c = On, l = s.DEFAULT_ANISOTROPY, h = Ln) { super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Vu++ }), this.uuid = $t(), this.name = "", this.source = new nr(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new xe(0, 0), this.repeat = new xe(1, 1), this.center = new xe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ie, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0 } get image() { return this.source.data } set image(e = null) { this.source.data = e } updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) } clone() { return new this.constructor().copy(this) } copy(e) { return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this } toJSON(e) { let t = e === void 0 || typeof e == "string"; if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid]; let n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n } dispose() { this.dispatchEvent({ type: "dispose" }) } transformUv(e) { if (this.mapping !== Bl) return e; if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) { case ti: e.x = e.x - Math.floor(e.x); break; case xn: e.x = e.x < 0 ? 0 : 1; break; case os: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x); break }if (e.y < 0 || e.y > 1) switch (this.wrapT) { case ti: e.y = e.y - Math.floor(e.y); break; case xn: e.y = e.y < 0 ? 0 : 1; break; case os: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y); break }return this.flipY && (e.y = 1 - e.y), e } set needsUpdate(e) { e === !0 && (this.version++, this.source.needsUpdate = !0) } set needsPMREMUpdate(e) { e === !0 && this.pmremVersion++ } }; _t.DEFAULT_IMAGE = null; _t.DEFAULT_MAPPING = Bl; _t.DEFAULT_ANISOTROPY = 1; var $e = class s { constructor(e = 0, t = 0, n = 0, i = 1) { s.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i } get width() { return this.z } set width(e) { this.z = e } get height() { return this.w } set height(e) { this.w = e } set(e, t, n, i) { return this.x = e, this.y = t, this.z = n, this.w = i, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this.w = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setW(e) { return this.w = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; case 2: this.z = t; break; case 3: this.w = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; case 3: return this.w; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z, this.w) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this.w += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this } applyMatrix4(e) { let t = this.x, n = this.y, i = this.z, r = this.w, o = e.elements; return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r, this } divideScalar(e) { return this.multiplyScalar(1 / e) } setAxisAngleFromQuaternion(e) { this.w = 2 * Math.acos(e.w); let t = Math.sqrt(1 - e.w * e.w); return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this } setAxisAngleFromRotationMatrix(e) { let t, n, i, r, c = e.elements, l = c[0], h = c[4], u = c[8], d = c[1], f = c[5], g = c[9], x = c[2], m = c[6], p = c[10]; if (Math.abs(h - d) < .01 && Math.abs(u - x) < .01 && Math.abs(g - m) < .01) { if (Math.abs(h + d) < .1 && Math.abs(u + x) < .1 && Math.abs(g + m) < .1 && Math.abs(l + f + p - 3) < .1) return this.set(1, 0, 0, 0), this; t = Math.PI; let M = (l + 1) / 2, T = (f + 1) / 2, N = (p + 1) / 2, R = (h + d) / 4, w = (u + x) / 4, H = (g + m) / 4; return M > T && M > N ? M < .01 ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(M), i = R / n, r = w / n) : T > N ? T < .01 ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(T), n = R / i, r = H / i) : N < .01 ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(N), n = w / r, i = H / r), this.set(n, i, r, t), this } let A = Math.sqrt((m - g) * (m - g) + (u - x) * (u - x) + (d - h) * (d - h)); return Math.abs(A) < .001 && (A = 1), this.x = (m - g) / A, this.y = (u - x) / A, this.z = (d - h) / A, this.w = Math.acos((l + f + p - 1) / 2), this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this } clampLength(e, t) { let n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z, yield this.w } }, Lo = class extends rn { constructor(e = 1, t = 1, n = {}) { super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new $e(0, 0, e, t), this.scissorTest = !1, this.viewport = new $e(0, 0, e, t); let i = { width: e, height: t, depth: 1 }; n = Object.assign({ generateMipmaps: !1, internalFormat: null, minFilter: Et, depthBuffer: !0, stencilBuffer: !1, resolveDepthBuffer: !0, resolveStencilBuffer: !0, depthTexture: null, samples: 0, count: 1 }, n); let r = new _t(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace); r.flipY = !1, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = []; let o = n.count; for (let a = 0; a < o; a++)this.textures[a] = r.clone(), this.textures[a].isRenderTargetTexture = !0; this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples } get texture() { return this.textures[0] } set texture(e) { this.textures[0] = e } setSize(e, t, n = 1) { if (this.width !== e || this.height !== t || this.depth !== n) { this.width = e, this.height = t, this.depth = n; for (let i = 0, r = this.textures.length; i < r; i++)this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n; this.dispose() } this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t) } clone() { return new this.constructor().copy(this) } copy(e) { this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0; for (let n = 0, i = e.textures.length; n < i; n++)this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0; let t = Object.assign({}, e.texture.image); return this.texture.source = new nr(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this } dispose() { this.dispatchEvent({ type: "dispose" }) } }, vn = class extends Lo { constructor(e = 1, t = 1, n = {}) { super(e, t, n), this.isWebGLRenderTarget = !0 } }, ir = class extends _t { constructor(e = null, t = 1, n = 1, i = 1) { super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = St, this.minFilter = St, this.wrapR = xn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } }; var No = class extends _t { constructor(e = null, t = 1, n = 1, i = 1) { super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = St, this.minFilter = St, this.wrapR = xn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } }; var Rt = class { constructor(e = 0, t = 0, n = 0, i = 1) { this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i } static slerpFlat(e, t, n, i, r, o, a) { let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3], d = r[o + 0], f = r[o + 1], g = r[o + 2], x = r[o + 3]; if (a === 0) { e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u; return } if (a === 1) { e[t + 0] = d, e[t + 1] = f, e[t + 2] = g, e[t + 3] = x; return } if (u !== x || c !== d || l !== f || h !== g) { let m = 1 - a, p = c * d + l * f + h * g + u * x, A = p >= 0 ? 1 : -1, M = 1 - p * p; if (M > Number.EPSILON) { let N = Math.sqrt(M), R = Math.atan2(N, p * A); m = Math.sin(m * R) / N, a = Math.sin(a * R) / N } let T = a * A; if (c = c * m + d * T, l = l * m + f * T, h = h * m + g * T, u = u * m + x * T, m === 1 - a) { let N = 1 / Math.sqrt(c * c + l * l + h * h + u * u); c *= N, l *= N, h *= N, u *= N } } e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u } static multiplyQuaternionsFlat(e, t, n, i, r, o) { let a = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = r[o], d = r[o + 1], f = r[o + 2], g = r[o + 3]; return e[t] = a * g + h * u + c * f - l * d, e[t + 1] = c * g + h * d + l * u - a * f, e[t + 2] = l * g + h * f + a * d - c * u, e[t + 3] = h * g - a * u - c * d - l * f, e } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get w() { return this._w } set w(e) { this._w = e, this._onChangeCallback() } set(e, t, n, i) { return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._w) } copy(e) { return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this } setFromEuler(e, t = !0) { let n = e._x, i = e._y, r = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), h = a(i / 2), u = a(r / 2), d = c(n / 2), f = c(i / 2), g = c(r / 2); switch (o) { case "XYZ": this._x = d * h * u + l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u - d * f * g; break; case "YXZ": this._x = d * h * u + l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u + d * f * g; break; case "ZXY": this._x = d * h * u - l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u - d * f * g; break; case "ZYX": this._x = d * h * u - l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u + d * f * g; break; case "YZX": this._x = d * h * u + l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u - d * f * g; break; case "XZY": this._x = d * h * u - l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u + d * f * g; break; default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o) }return t === !0 && this._onChangeCallback(), this } setFromAxisAngle(e, t) { let n = t / 2, i = Math.sin(n); return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this } setFromRotationMatrix(e) { let t = e.elements, n = t[0], i = t[4], r = t[8], o = t[1], a = t[5], c = t[9], l = t[2], h = t[6], u = t[10], d = n + a + u; if (d > 0) { let f = .5 / Math.sqrt(d + 1); this._w = .25 / f, this._x = (h - c) * f, this._y = (r - l) * f, this._z = (o - i) * f } else if (n > a && n > u) { let f = 2 * Math.sqrt(1 + n - a - u); this._w = (h - c) / f, this._x = .25 * f, this._y = (i + o) / f, this._z = (r + l) / f } else if (a > u) { let f = 2 * Math.sqrt(1 + a - n - u); this._w = (r - l) / f, this._x = (i + o) / f, this._y = .25 * f, this._z = (c + h) / f } else { let f = 2 * Math.sqrt(1 + u - n - a); this._w = (o - i) / f, this._x = (r + l) / f, this._y = (c + h) / f, this._z = .25 * f } return this._onChangeCallback(), this } setFromUnitVectors(e, t) { let n = e.dot(t) + 1; return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize() } angleTo(e) { return 2 * Math.acos(Math.abs(gt(this.dot(e), -1, 1))) } rotateTowards(e, t) { let n = this.angleTo(e); if (n === 0) return this; let i = Math.min(1, t / n); return this.slerp(e, i), this } identity() { return this.set(0, 0, 0, 1) } invert() { return this.conjugate() } conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this } dot(e) { return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w } lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w } length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) } normalize() { let e = this.length(); return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this } multiply(e) { return this.multiplyQuaternions(this, e) } premultiply(e) { return this.multiplyQuaternions(e, this) } multiplyQuaternions(e, t) { let n = e._x, i = e._y, r = e._z, o = e._w, a = t._x, c = t._y, l = t._z, h = t._w; return this._x = n * h + o * a + i * l - r * c, this._y = i * h + o * c + r * a - n * l, this._z = r * h + o * l + n * c - i * a, this._w = o * h - n * a - i * c - r * l, this._onChangeCallback(), this } slerp(e, t) { if (t === 0) return this; if (t === 1) return this.copy(e); let n = this._x, i = this._y, r = this._z, o = this._w, a = o * e._w + n * e._x + i * e._y + r * e._z; if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = r, this; let c = 1 - a * a; if (c <= Number.EPSILON) { let f = 1 - t; return this._w = f * o + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * r + t * this._z, this.normalize(), this } let l = Math.sqrt(c), h = Math.atan2(l, a), u = Math.sin((1 - t) * h) / l, d = Math.sin(t * h) / l; return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this } slerpQuaternions(e, t, n) { return this.copy(e).slerp(t, n) } random() { let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n); return this.set(i * Math.sin(e), i * Math.cos(e), r * Math.sin(t), r * Math.cos(t)) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w } fromArray(e, t = 0) { return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e } fromBufferAttribute(e, t) { return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this } toJSON() { return this.toArray() } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._w } }, C = class s { constructor(e = 0, t = 0, n = 0) { s.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n } set(e, t, n) { return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; case 2: this.z = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this } multiplyVectors(e, t) { return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this } applyEuler(e) { return this.applyQuaternion(Dc.setFromEuler(e)) } applyAxisAngle(e, t) { return this.applyQuaternion(Dc.setFromAxisAngle(e, t)) } applyMatrix3(e) { let t = this.x, n = this.y, i = this.z, r = e.elements; return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this } applyNormalMatrix(e) { return this.applyMatrix3(e).normalize() } applyMatrix4(e) { let t = this.x, n = this.y, i = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]); return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o, this } applyQuaternion(e) { let t = this.x, n = this.y, i = this.z, r = e.x, o = e.y, a = e.z, c = e.w, l = 2 * (o * i - a * n), h = 2 * (a * t - r * i), u = 2 * (r * n - o * t); return this.x = t + c * l + o * u - a * h, this.y = n + c * h + a * l - r * u, this.z = i + c * u + r * h - o * l, this } project(e) { return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix) } unproject(e) { return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld) } transformDirection(e) { let t = this.x, n = this.y, i = this.z, r = e.elements; return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize() } divide(e) { return this.x /= e.x, this.y /= e.y, this.z /= e.z, this } divideScalar(e) { return this.multiplyScalar(1 / e) } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this } clampLength(e, t) { let n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this } cross(e) { return this.crossVectors(this, e) } crossVectors(e, t) { let n = e.x, i = e.y, r = e.z, o = t.x, a = t.y, c = t.z; return this.x = i * c - r * a, this.y = r * o - n * c, this.z = n * a - i * o, this } projectOnVector(e) { let t = e.lengthSq(); if (t === 0) return this.set(0, 0, 0); let n = e.dot(this) / t; return this.copy(e).multiplyScalar(n) } projectOnPlane(e) { return Qr.copy(this).projectOnVector(e), this.sub(Qr) } reflect(e) { return this.sub(Qr.copy(e).multiplyScalar(2 * this.dot(e))) } angleTo(e) { let t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; let n = this.dot(e) / t; return Math.acos(gt(n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { let t = this.x - e.x, n = this.y - e.y, i = this.z - e.z; return t * t + n * n + i * i } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z) } setFromSpherical(e) { return this.setFromSphericalCoords(e.radius, e.phi, e.theta) } setFromSphericalCoords(e, t, n) { let i = Math.sin(t) * e; return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this } setFromCylindrical(e) { return this.setFromCylindricalCoords(e.radius, e.theta, e.y) } setFromCylindricalCoords(e, t, n) { return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this } setFromMatrixPosition(e) { let t = e.elements; return this.x = t[12], this.y = t[13], this.z = t[14], this } setFromMatrixScale(e) { let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length(); return this.x = t, this.y = n, this.z = i, this } setFromMatrixColumn(e, t) { return this.fromArray(e.elements, t * 4) } setFromMatrix3Column(e, t) { return this.fromArray(e.elements, t * 3) } setFromEuler(e) { return this.x = e._x, this.y = e._y, this.z = e._z, this } setFromColor(e) { return this.x = e.r, this.y = e.g, this.z = e.b, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this } randomDirection() { let e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t); return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z } }, Qr = new C, Dc = new Rt, Ht = class { constructor(e = new C(1 / 0, 1 / 0, 1 / 0), t = new C(-1 / 0, -1 / 0, -1 / 0)) { this.isBox3 = !0, this.min = e, this.max = t } set(e, t) { return this.min.copy(e), this.max.copy(t), this } setFromArray(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t += 3)this.expandByPoint(Wt.fromArray(e, t)); return this } setFromBufferAttribute(e) { this.makeEmpty(); for (let t = 0, n = e.count; t < n; t++)this.expandByPoint(Wt.fromBufferAttribute(e, t)); return this } setFromPoints(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t++)this.expandByPoint(e[t]); return this } setFromCenterAndSize(e, t) { let n = Wt.copy(t).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this } setFromObject(e, t = !1) { return this.makeEmpty(), this.expandByObject(e, t) } clone() { return new this.constructor().copy(this) } copy(e) { return this.min.copy(e.min), this.max.copy(e.max), this } makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this } isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z } getCenter(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5) } getSize(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min) } expandByPoint(e) { return this.min.min(e), this.max.max(e), this } expandByVector(e) { return this.min.sub(e), this.max.add(e), this } expandByScalar(e) { return this.min.addScalar(-e), this.max.addScalar(e), this } expandByObject(e, t = !1) { e.updateWorldMatrix(!1, !1); let n = e.geometry; if (n !== void 0) { let r = n.getAttribute("position"); if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0) for (let o = 0, a = r.count; o < a; o++)e.isMesh === !0 ? e.getVertexPosition(o, Wt) : Wt.fromBufferAttribute(r, o), Wt.applyMatrix4(e.matrixWorld), this.expandByPoint(Wt); else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), As.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), As.copy(n.boundingBox)), As.applyMatrix4(e.matrixWorld), this.union(As) } let i = e.children; for (let r = 0, o = i.length; r < o; r++)this.expandByObject(i[r], t); return this } containsPoint(e) { return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z) } containsBox(e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z } getParameter(e, t) { return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z)) } intersectsBox(e) { return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z) } intersectsSphere(e) { return this.clampPoint(e.center, Wt), Wt.distanceToSquared(e.center) <= e.radius * e.radius } intersectsPlane(e) { let t, n; return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant } intersectsTriangle(e) { if (this.isEmpty()) return !1; this.getCenter(qi), Ts.subVectors(this.max, qi), li.subVectors(e.a, qi), hi.subVectors(e.b, qi), ui.subVectors(e.c, qi), En.subVectors(hi, li), wn.subVectors(ui, hi), Yn.subVectors(li, ui); let t = [0, -En.z, En.y, 0, -wn.z, wn.y, 0, -Yn.z, Yn.y, En.z, 0, -En.x, wn.z, 0, -wn.x, Yn.z, 0, -Yn.x, -En.y, En.x, 0, -wn.y, wn.x, 0, -Yn.y, Yn.x, 0]; return !eo(t, li, hi, ui, Ts) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !eo(t, li, hi, ui, Ts)) ? !1 : (Es.crossVectors(En, wn), t = [Es.x, Es.y, Es.z], eo(t, li, hi, ui, Ts)) } clampPoint(e, t) { return t.copy(e).clamp(this.min, this.max) } distanceToPoint(e) { return this.clampPoint(e, Wt).distanceTo(e) } getBoundingSphere(e) { return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Wt).length() * .5), e } intersect(e) { return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this } union(e) { return this.min.min(e.min), this.max.max(e.max), this } applyMatrix4(e) { return this.isEmpty() ? this : (un[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), un[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), un[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), un[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), un[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), un[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), un[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), un[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(un), this) } translate(e) { return this.min.add(e), this.max.add(e), this } equals(e) { return e.min.equals(this.min) && e.max.equals(this.max) } }, un = [new C, new C, new C, new C, new C, new C, new C, new C], Wt = new C, As = new Ht, li = new C, hi = new C, ui = new C, En = new C, wn = new C, Yn = new C, qi = new C, Ts = new C, Es = new C, qn = new C; function eo(s, e, t, n, i) { for (let r = 0, o = s.length - 3; r <= o; r += 3) { qn.fromArray(s, r); let a = i.x * Math.abs(qn.x) + i.y * Math.abs(qn.y) + i.z * Math.abs(qn.z), c = e.dot(qn), l = t.dot(qn), h = n.dot(qn); if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a) return !1 } return !0 } var Gu = new Ht, Zi = new C, to = new C, Nt = class { constructor(e = new C, t = -1) { this.isSphere = !0, this.center = e, this.radius = t } set(e, t) { return this.center.copy(e), this.radius = t, this } setFromPoints(e, t) { let n = this.center; t !== void 0 ? n.copy(t) : Gu.setFromPoints(e).getCenter(n); let i = 0; for (let r = 0, o = e.length; r < o; r++)i = Math.max(i, n.distanceToSquared(e[r])); return this.radius = Math.sqrt(i), this } copy(e) { return this.center.copy(e.center), this.radius = e.radius, this } isEmpty() { return this.radius < 0 } makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this } containsPoint(e) { return e.distanceToSquared(this.center) <= this.radius * this.radius } distanceToPoint(e) { return e.distanceTo(this.center) - this.radius } intersectsSphere(e) { let t = this.radius + e.radius; return e.center.distanceToSquared(this.center) <= t * t } intersectsBox(e) { return e.intersectsSphere(this) } intersectsPlane(e) { return Math.abs(e.distanceToPoint(this.center)) <= this.radius } clampPoint(e, t) { let n = this.center.distanceToSquared(e); return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t } getBoundingBox(e) { return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e) } applyMatrix4(e) { return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this } translate(e) { return this.center.add(e), this } expandByPoint(e) { if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this; Zi.subVectors(e, this.center); let t = Zi.lengthSq(); if (t > this.radius * this.radius) { let n = Math.sqrt(t), i = (n - this.radius) * .5; this.center.addScaledVector(Zi, i / n), this.radius += i } return this } union(e) { return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (to.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Zi.copy(e.center).add(to)), this.expandByPoint(Zi.copy(e.center).sub(to))), this) } equals(e) { return e.center.equals(this.center) && e.radius === this.radius } clone() { return new this.constructor().copy(this) } }, dn = new C, no = new C, ws = new C, Rn = new C, io = new C, Rs = new C, so = new C, Fn = class { constructor(e = new C, t = new C(0, 0, -1)) { this.origin = e, this.direction = t } set(e, t) { return this.origin.copy(e), this.direction.copy(t), this } copy(e) { return this.origin.copy(e.origin), this.direction.copy(e.direction), this } at(e, t) { return t.copy(this.origin).addScaledVector(this.direction, e) } lookAt(e) { return this.direction.copy(e).sub(this.origin).normalize(), this } recast(e) { return this.origin.copy(this.at(e, dn)), this } closestPointToPoint(e, t) { t.subVectors(e, this.origin); let n = t.dot(this.direction); return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n) } distanceToPoint(e) { return Math.sqrt(this.distanceSqToPoint(e)) } distanceSqToPoint(e) { let t = dn.subVectors(e, this.origin).dot(this.direction); return t < 0 ? this.origin.distanceToSquared(e) : (dn.copy(this.origin).addScaledVector(this.direction, t), dn.distanceToSquared(e)) } distanceSqToSegment(e, t, n, i) { no.copy(e).add(t).multiplyScalar(.5), ws.copy(t).sub(e).normalize(), Rn.copy(this.origin).sub(no); let r = e.distanceTo(t) * .5, o = -this.direction.dot(ws), a = Rn.dot(this.direction), c = -Rn.dot(ws), l = Rn.lengthSq(), h = Math.abs(1 - o * o), u, d, f, g; if (h > 0) if (u = o * c - a, d = o * a - c, g = r * h, u >= 0) if (d >= -g) if (d <= g) { let x = 1 / h; u *= x, d *= x, f = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * c) + l } else d = r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l; else d = -r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l; else d <= -g ? (u = Math.max(0, -(-o * r + a)), d = u > 0 ? -r : Math.min(Math.max(-r, -c), r), f = -u * u + d * (d + 2 * c) + l) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -c), r), f = d * (d + 2 * c) + l) : (u = Math.max(0, -(o * r + a)), d = u > 0 ? r : Math.min(Math.max(-r, -c), r), f = -u * u + d * (d + 2 * c) + l); else d = o > 0 ? -r : r, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * c) + l; return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(no).addScaledVector(ws, d), f } intersectSphere(e, t) { dn.subVectors(e.center, this.origin); let n = dn.dot(this.direction), i = dn.dot(dn) - n * n, r = e.radius * e.radius; if (i > r) return null; let o = Math.sqrt(r - i), a = n - o, c = n + o; return c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t) } intersectsSphere(e) { return this.distanceSqToPoint(e.center) <= e.radius * e.radius } distanceToPlane(e) { let t = e.normal.dot(this.direction); if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null; let n = -(this.origin.dot(e.normal) + e.constant) / t; return n >= 0 ? n : null } intersectPlane(e, t) { let n = this.distanceToPlane(e); return n === null ? null : this.at(n, t) } intersectsPlane(e) { let t = e.distanceToPoint(this.origin); return t === 0 || e.normal.dot(this.direction) * t < 0 } intersectBox(e, t) { let n, i, r, o, a, c, l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin; return l >= 0 ? (n = (e.min.x - d.x) * l, i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, i = (e.min.x - d.x) * l), h >= 0 ? (r = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || r > i || ((r > n || isNaN(n)) && (n = r), (o < i || isNaN(i)) && (i = o), u >= 0 ? (a = (e.min.z - d.z) * u, c = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, c = (e.min.z - d.z) * u), n > c || a > i) || ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t) } intersectsBox(e) { return this.intersectBox(e, dn) !== null } intersectTriangle(e, t, n, i, r) { io.subVectors(t, e), Rs.subVectors(n, e), so.crossVectors(io, Rs); let o = this.direction.dot(so), a; if (o > 0) { if (i) return null; a = 1 } else if (o < 0) a = -1, o = -o; else return null; Rn.subVectors(this.origin, e); let c = a * this.direction.dot(Rs.crossVectors(Rn, Rs)); if (c < 0) return null; let l = a * this.direction.dot(io.cross(Rn)); if (l < 0 || c + l > o) return null; let h = -a * Rn.dot(so); return h < 0 ? null : this.at(h / o, r) } applyMatrix4(e) { return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this } equals(e) { return e.origin.equals(this.origin) && e.direction.equals(this.direction) } clone() { return new this.constructor().copy(this) } }, Le = class s { constructor(e, t, n, i, r, o, a, c, l, h, u, d, f, g, x, m) { s.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, o, a, c, l, h, u, d, f, g, x, m) } set(e, t, n, i, r, o, a, c, l, h, u, d, f, g, x, m) { let p = this.elements; return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = r, p[5] = o, p[9] = a, p[13] = c, p[2] = l, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = g, p[11] = x, p[15] = m, this } identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } clone() { return new s().fromArray(this.elements) } copy(e) { let t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this } copyPosition(e) { let t = this.elements, n = e.elements; return t[12] = n[12], t[13] = n[13], t[14] = n[14], this } setFromMatrix3(e) { let t = e.elements; return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this } extractBasis(e, t, n) { return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this } makeBasis(e, t, n) { return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this } extractRotation(e) { let t = this.elements, n = e.elements, i = 1 / di.setFromMatrixColumn(e, 0).length(), r = 1 / di.setFromMatrixColumn(e, 1).length(), o = 1 / di.setFromMatrixColumn(e, 2).length(); return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromEuler(e) { let t = this.elements, n = e.x, i = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(r), u = Math.sin(r); if (e.order === "XYZ") { let d = o * h, f = o * u, g = a * h, x = a * u; t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = f + g * l, t[5] = d - x * l, t[9] = -a * c, t[2] = x - d * l, t[6] = g + f * l, t[10] = o * c } else if (e.order === "YXZ") { let d = c * h, f = c * u, g = l * h, x = l * u; t[0] = d + x * a, t[4] = g * a - f, t[8] = o * l, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = f * a - g, t[6] = x + d * a, t[10] = o * c } else if (e.order === "ZXY") { let d = c * h, f = c * u, g = l * h, x = l * u; t[0] = d - x * a, t[4] = -o * u, t[8] = g + f * a, t[1] = f + g * a, t[5] = o * h, t[9] = x - d * a, t[2] = -o * l, t[6] = a, t[10] = o * c } else if (e.order === "ZYX") { let d = o * h, f = o * u, g = a * h, x = a * u; t[0] = c * h, t[4] = g * l - f, t[8] = d * l + x, t[1] = c * u, t[5] = x * l + d, t[9] = f * l - g, t[2] = -l, t[6] = a * c, t[10] = o * c } else if (e.order === "YZX") { let d = o * c, f = o * l, g = a * c, x = a * l; t[0] = c * h, t[4] = x - d * u, t[8] = g * u + f, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -l * h, t[6] = f * u + g, t[10] = d - x * u } else if (e.order === "XZY") { let d = o * c, f = o * l, g = a * c, x = a * l; t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = d * u + x, t[5] = o * h, t[9] = f * u - g, t[2] = g * u - f, t[6] = a * h, t[10] = x * u + d } return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromQuaternion(e) { return this.compose(Wu, e, Xu) } lookAt(e, t, n) { let i = this.elements; return It.subVectors(e, t), It.lengthSq() === 0 && (It.z = 1), It.normalize(), Cn.crossVectors(n, It), Cn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? It.x += 1e-4 : It.z += 1e-4, It.normalize(), Cn.crossVectors(n, It)), Cn.normalize(), Cs.crossVectors(It, Cn), i[0] = Cn.x, i[4] = Cs.x, i[8] = It.x, i[1] = Cn.y, i[5] = Cs.y, i[9] = It.y, i[2] = Cn.z, i[6] = Cs.z, i[10] = It.z, this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, t) { let n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], f = n[13], g = n[2], x = n[6], m = n[10], p = n[14], A = n[3], M = n[7], T = n[11], N = n[15], R = i[0], w = i[4], H = i[8], b = i[12], v = i[1], B = i[5], X = i[9], P = i[13], W = i[2], q = i[6], J = i[10], ie = i[14], V = i[3], Q = i[7], j = i[11], de = i[15]; return r[0] = o * R + a * v + c * W + l * V, r[4] = o * w + a * B + c * q + l * Q, r[8] = o * H + a * X + c * J + l * j, r[12] = o * b + a * P + c * ie + l * de, r[1] = h * R + u * v + d * W + f * V, r[5] = h * w + u * B + d * q + f * Q, r[9] = h * H + u * X + d * J + f * j, r[13] = h * b + u * P + d * ie + f * de, r[2] = g * R + x * v + m * W + p * V, r[6] = g * w + x * B + m * q + p * Q, r[10] = g * H + x * X + m * J + p * j, r[14] = g * b + x * P + m * ie + p * de, r[3] = A * R + M * v + T * W + N * V, r[7] = A * w + M * B + T * q + N * Q, r[11] = A * H + M * X + T * J + N * j, r[15] = A * b + M * P + T * ie + N * de, this } multiplyScalar(e) { let t = this.elements; return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this } determinant() { let e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], o = e[1], a = e[5], c = e[9], l = e[13], h = e[2], u = e[6], d = e[10], f = e[14], g = e[3], x = e[7], m = e[11], p = e[15]; return g * (+r * c * u - i * l * u - r * a * d + n * l * d + i * a * f - n * c * f) + x * (+t * c * f - t * l * d + r * o * d - i * o * f + i * l * h - r * c * h) + m * (+t * l * u - t * a * f - r * o * u + n * o * f + r * a * h - n * l * h) + p * (-i * a * h - t * c * u + t * a * d + i * o * u - n * o * d + n * c * h) } transpose() { let e = this.elements, t; return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this } setPosition(e, t, n) { let i = this.elements; return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this } invert() { let e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = e[9], d = e[10], f = e[11], g = e[12], x = e[13], m = e[14], p = e[15], A = u * m * l - x * d * l + x * c * f - a * m * f - u * c * p + a * d * p, M = g * d * l - h * m * l - g * c * f + o * m * f + h * c * p - o * d * p, T = h * x * l - g * u * l + g * a * f - o * x * f - h * a * p + o * u * p, N = g * u * c - h * x * c - g * a * d + o * x * d + h * a * m - o * u * m, R = t * A + n * M + i * T + r * N; if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); let w = 1 / R; return e[0] = A * w, e[1] = (x * d * r - u * m * r - x * i * f + n * m * f + u * i * p - n * d * p) * w, e[2] = (a * m * r - x * c * r + x * i * l - n * m * l - a * i * p + n * c * p) * w, e[3] = (u * c * r - a * d * r - u * i * l + n * d * l + a * i * f - n * c * f) * w, e[4] = M * w, e[5] = (h * m * r - g * d * r + g * i * f - t * m * f - h * i * p + t * d * p) * w, e[6] = (g * c * r - o * m * r - g * i * l + t * m * l + o * i * p - t * c * p) * w, e[7] = (o * d * r - h * c * r + h * i * l - t * d * l - o * i * f + t * c * f) * w, e[8] = T * w, e[9] = (g * u * r - h * x * r - g * n * f + t * x * f + h * n * p - t * u * p) * w, e[10] = (o * x * r - g * a * r + g * n * l - t * x * l - o * n * p + t * a * p) * w, e[11] = (h * a * r - o * u * r - h * n * l + t * u * l + o * n * f - t * a * f) * w, e[12] = N * w, e[13] = (h * x * i - g * u * i + g * n * d - t * x * d - h * n * m + t * u * m) * w, e[14] = (g * a * i - o * x * i - g * n * c + t * x * c + o * n * m - t * a * m) * w, e[15] = (o * u * i - h * a * i + h * n * c - t * u * c - o * n * d + t * a * d) * w, this } scale(e) { let t = this.elements, n = e.x, i = e.y, r = e.z; return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this } getMaxScaleOnAxis() { let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10]; return Math.sqrt(Math.max(t, n, i)) } makeTranslation(e, t, n) { return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this } makeRotationX(e) { let t = Math.cos(e), n = Math.sin(e); return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this } makeRotationY(e) { let t = Math.cos(e), n = Math.sin(e); return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this } makeRotationZ(e) { let t = Math.cos(e), n = Math.sin(e); return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } makeRotationAxis(e, t) { let n = Math.cos(t), i = Math.sin(t), r = 1 - n, o = e.x, a = e.y, c = e.z, l = r * o, h = r * a; return this.set(l * o + n, l * a - i * c, l * c + i * a, 0, l * a + i * c, h * a + n, h * c - i * o, 0, l * c - i * a, h * c + i * o, r * c * c + n, 0, 0, 0, 0, 1), this } makeScale(e, t, n) { return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this } makeShear(e, t, n, i, r, o) { return this.set(1, n, r, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this } compose(e, t, n) { let i = this.elements, r = t._x, o = t._y, a = t._z, c = t._w, l = r + r, h = o + o, u = a + a, d = r * l, f = r * h, g = r * u, x = o * h, m = o * u, p = a * u, A = c * l, M = c * h, T = c * u, N = n.x, R = n.y, w = n.z; return i[0] = (1 - (x + p)) * N, i[1] = (f + T) * N, i[2] = (g - M) * N, i[3] = 0, i[4] = (f - T) * R, i[5] = (1 - (d + p)) * R, i[6] = (m + A) * R, i[7] = 0, i[8] = (g + M) * w, i[9] = (m - A) * w, i[10] = (1 - (d + x)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this } decompose(e, t, n) { let i = this.elements, r = di.set(i[0], i[1], i[2]).length(), o = di.set(i[4], i[5], i[6]).length(), a = di.set(i[8], i[9], i[10]).length(); this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], Xt.copy(this); let l = 1 / r, h = 1 / o, u = 1 / a; return Xt.elements[0] *= l, Xt.elements[1] *= l, Xt.elements[2] *= l, Xt.elements[4] *= h, Xt.elements[5] *= h, Xt.elements[6] *= h, Xt.elements[8] *= u, Xt.elements[9] *= u, Xt.elements[10] *= u, t.setFromRotationMatrix(Xt), n.x = r, n.y = o, n.z = a, this } makePerspective(e, t, n, i, r, o, a = yn) { let c = this.elements, l = 2 * r / (t - e), h = 2 * r / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i), f, g; if (a === yn) f = -(o + r) / (o - r), g = -2 * o * r / (o - r); else if (a === tr) f = -o / (o - r), g = -o * r / (o - r); else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a); return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = f, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this } makeOrthographic(e, t, n, i, r, o, a = yn) { let c = this.elements, l = 1 / (t - e), h = 1 / (n - i), u = 1 / (o - r), d = (t + e) * l, f = (n + i) * h, g, x; if (a === yn) g = (o + r) * u, x = -2 * u; else if (a === tr) g = r * u, x = -1 * u; else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a); return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -f, c[2] = 0, c[6] = 0, c[10] = x, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this } equals(e) { let t = this.elements, n = e.elements; for (let i = 0; i < 16; i++)if (t[i] !== n[i]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 16; n++)this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { let n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e } }, di = new C, Xt = new Le, Wu = new C(0, 0, 0), Xu = new C(1, 1, 1), Cn = new C, Cs = new C, It = new C, Uc = new Le, Oc = new Rt, on = class s { constructor(e = 0, t = 0, n = 0, i = s.DEFAULT_ORDER) { this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get order() { return this._order } set order(e) { this._order = e, this._onChangeCallback() } set(e, t, n, i = this._order) { return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._order) } copy(e) { return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this } setFromRotationMatrix(e, t = this._order, n = !0) { let i = e.elements, r = i[0], o = i[4], a = i[8], c = i[1], l = i[5], h = i[9], u = i[2], d = i[6], f = i[10]; switch (t) { case "XYZ": this._y = Math.asin(gt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, l), this._z = 0); break; case "YXZ": this._x = Math.asin(-gt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, r), this._z = 0); break; case "ZXY": this._x = Math.asin(gt(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, r)); break; case "ZYX": this._y = Math.asin(-gt(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-o, l)); break; case "YZX": this._z = Math.asin(gt(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, f)); break; case "XZY": this._z = Math.asin(-gt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, f), this._y = 0); break; default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t) }return this._order = t, n === !0 && this._onChangeCallback(), this } setFromQuaternion(e, t, n) { return Uc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Uc, t, n) } setFromVector3(e, t = this._order) { return this.set(e.x, e.y, e.z, t) } reorder(e) { return Oc.setFromEuler(this), this.setFromQuaternion(Oc, e) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order } fromArray(e) { return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._order } }; on.DEFAULT_ORDER = "XYZ"; var sr = class { constructor() { this.mask = 1 } set(e) { this.mask = (1 << e | 0) >>> 0 } enable(e) { this.mask |= 1 << e | 0 } enableAll() { this.mask = -1 } toggle(e) { this.mask ^= 1 << e | 0 } disable(e) { this.mask &= ~(1 << e | 0) } disableAll() { this.mask = 0 } test(e) { return (this.mask & e.mask) !== 0 } isEnabled(e) { return (this.mask & (1 << e | 0)) !== 0 } }, Yu = 0, Fc = new C, fi = new Rt, fn = new Le, Ps = new C, Ki = new C, qu = new C, Zu = new Rt, Bc = new C(1, 0, 0), zc = new C(0, 1, 0), kc = new C(0, 0, 1), Hc = { type: "added" }, Ku = { type: "removed" }, pi = { type: "childadded", child: null }, ro = { type: "childremoved", child: null }, rt = class s extends rn { constructor() { super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Yu++ }), this.uuid = $t(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = s.DEFAULT_UP.clone(); let e = new C, t = new on, n = new Rt, i = new C(1, 1, 1); function r() { n.setFromEuler(t, !1) } function o() { t.setFromQuaternion(n, void 0, !1) } t._onChange(r), n._onChange(o), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: i }, modelViewMatrix: { value: new Le }, normalMatrix: { value: new Ie } }), this.matrix = new Le, this.matrixWorld = new Le, this.matrixAutoUpdate = s.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new sr, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {} } onBeforeShadow() { } onAfterShadow() { } onBeforeRender() { } onAfterRender() { } applyMatrix4(e) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale) } applyQuaternion(e) { return this.quaternion.premultiply(e), this } setRotationFromAxisAngle(e, t) { this.quaternion.setFromAxisAngle(e, t) } setRotationFromEuler(e) { this.quaternion.setFromEuler(e, !0) } setRotationFromMatrix(e) { this.quaternion.setFromRotationMatrix(e) } setRotationFromQuaternion(e) { this.quaternion.copy(e) } rotateOnAxis(e, t) { return fi.setFromAxisAngle(e, t), this.quaternion.multiply(fi), this } rotateOnWorldAxis(e, t) { return fi.setFromAxisAngle(e, t), this.quaternion.premultiply(fi), this } rotateX(e) { return this.rotateOnAxis(Bc, e) } rotateY(e) { return this.rotateOnAxis(zc, e) } rotateZ(e) { return this.rotateOnAxis(kc, e) } translateOnAxis(e, t) { return Fc.copy(e).applyQuaternion(this.quaternion), this.position.add(Fc.multiplyScalar(t)), this } translateX(e) { return this.translateOnAxis(Bc, e) } translateY(e) { return this.translateOnAxis(zc, e) } translateZ(e) { return this.translateOnAxis(kc, e) } localToWorld(e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld) } worldToLocal(e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(fn.copy(this.matrixWorld).invert()) } lookAt(e, t, n) { e.isVector3 ? Ps.copy(e) : Ps.set(e, t, n); let i = this.parent; this.updateWorldMatrix(!0, !1), Ki.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? fn.lookAt(Ki, Ps, this.up) : fn.lookAt(Ps, Ki, this.up), this.quaternion.setFromRotationMatrix(fn), i && (fn.extractRotation(i.matrixWorld), fi.setFromRotationMatrix(fn), this.quaternion.premultiply(fi.invert())) } add(e) { if (arguments.length > 1) { for (let t = 0; t < arguments.length; t++)this.add(arguments[t]); return this } return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Hc), pi.child = e, this.dispatchEvent(pi), pi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this) } remove(e) { if (arguments.length > 1) { for (let n = 0; n < arguments.length; n++)this.remove(arguments[n]); return this } let t = this.children.indexOf(e); return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ku), ro.child = e, this.dispatchEvent(ro), ro.child = null), this } removeFromParent() { let e = this.parent; return e !== null && e.remove(this), this } clear() { return this.remove(...this.children) } attach(e) { return this.updateWorldMatrix(!0, !1), fn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), fn.multiply(e.parent.matrixWorld)), e.applyMatrix4(fn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Hc), pi.child = e, this.dispatchEvent(pi), pi.child = null, this } getObjectById(e) { return this.getObjectByProperty("id", e) } getObjectByName(e) { return this.getObjectByProperty("name", e) } getObjectByProperty(e, t) { if (this[e] === t) return this; for (let n = 0, i = this.children.length; n < i; n++) { let o = this.children[n].getObjectByProperty(e, t); if (o !== void 0) return o } } getObjectsByProperty(e, t, n = []) { this[e] === t && n.push(this); let i = this.children; for (let r = 0, o = i.length; r < o; r++)i[r].getObjectsByProperty(e, t, n); return n } getWorldPosition(e) { return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld) } getWorldQuaternion(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ki, e, qu), e } getWorldScale(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ki, Zu, e), e } getWorldDirection(e) { this.updateWorldMatrix(!0, !1); let t = this.matrixWorld.elements; return e.set(t[8], t[9], t[10]).normalize() } raycast() { } traverse(e) { e(this); let t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].traverse(e) } traverseVisible(e) { if (this.visible === !1) return; e(this); let t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].traverseVisible(e) } traverseAncestors(e) { let t = this.parent; t !== null && (e(t), t.traverseAncestors(e)) } updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 } updateMatrixWorld(e) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0); let t = this.children; for (let n = 0, i = t.length; n < i; n++) { let r = t[n]; (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e) } } updateWorldMatrix(e, t) { let n = this.parent; if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) { let i = this.children; for (let r = 0, o = i.length; r < o; r++) { let a = i[r]; a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0) } } } toJSON(e) { let t = e === void 0 || typeof e == "string", n = {}; t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" }); let i = {}; i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map(a => ({ boxInitialized: a.boxInitialized, boxMin: a.box.min.toArray(), boxMax: a.box.max.toArray(), sphereInitialized: a.sphereInitialized, sphereRadius: a.sphere.radius, sphereCenter: a.sphere.center.toArray() })), i.maxGeometryCount = this._maxGeometryCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), this.boundingBox !== null && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() })); function r(a, c) { return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid } if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid); else if (this.isMesh || this.isLine || this.isPoints) { i.geometry = r(e.geometries, this.geometry); let a = this.geometry.parameters; if (a !== void 0 && a.shapes !== void 0) { let c = a.shapes; if (Array.isArray(c)) for (let l = 0, h = c.length; l < h; l++) { let u = c[l]; r(e.shapes, u) } else r(e.shapes, c) } } if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) { let a = []; for (let c = 0, l = this.material.length; c < l; c++)a.push(r(e.materials, this.material[c])); i.material = a } else i.material = r(e.materials, this.material); if (this.children.length > 0) { i.children = []; for (let a = 0; a < this.children.length; a++)i.children.push(this.children[a].toJSON(e).object) } if (this.animations.length > 0) { i.animations = []; for (let a = 0; a < this.animations.length; a++) { let c = this.animations[a]; i.animations.push(r(e.animations, c)) } } if (t) { let a = o(e.geometries), c = o(e.materials), l = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), f = o(e.animations), g = o(e.nodes); a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), g.length > 0 && (n.nodes = g) } return n.object = i, n; function o(a) { let c = []; for (let l in a) { let h = a[l]; delete h.metadata, c.push(h) } return c } } clone(e) { return new this.constructor().copy(this, e) } copy(e, t = !0) { if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let n = 0; n < e.children.length; n++) { let i = e.children[n]; this.add(i.clone()) } return this } }; rt.DEFAULT_UP = new C(0, 1, 0); rt.DEFAULT_MATRIX_AUTO_UPDATE = !0; rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0; var Yt = new C, pn = new C, oo = new C, mn = new C, mi = new C, gi = new C, Vc = new C, ao = new C, co = new C, lo = new C, Ei = class s { constructor(e = new C, t = new C, n = new C) { this.a = e, this.b = t, this.c = n } static getNormal(e, t, n, i) { i.subVectors(n, t), Yt.subVectors(e, t), i.cross(Yt); let r = i.lengthSq(); return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0) } static getBarycoord(e, t, n, i, r) { Yt.subVectors(i, t), pn.subVectors(n, t), oo.subVectors(e, t); let o = Yt.dot(Yt), a = Yt.dot(pn), c = Yt.dot(oo), l = pn.dot(pn), h = pn.dot(oo), u = o * l - a * a; if (u === 0) return r.set(0, 0, 0), null; let d = 1 / u, f = (l * c - a * h) * d, g = (o * h - a * c) * d; return r.set(1 - f - g, g, f) } static containsPoint(e, t, n, i) { return this.getBarycoord(e, t, n, i, mn) === null ? !1 : mn.x >= 0 && mn.y >= 0 && mn.x + mn.y <= 1 } static getInterpolation(e, t, n, i, r, o, a, c) { return this.getBarycoord(e, t, n, i, mn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(r, mn.x), c.addScaledVector(o, mn.y), c.addScaledVector(a, mn.z), c) } static isFrontFacing(e, t, n, i) { return Yt.subVectors(n, t), pn.subVectors(e, t), Yt.cross(pn).dot(i) < 0 } set(e, t, n) { return this.a.copy(e), this.b.copy(t), this.c.copy(n), this } setFromPointsAndIndices(e, t, n, i) { return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this } setFromAttributeAndIndices(e, t, n, i) { return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this } clone() { return new this.constructor().copy(this) } copy(e) { return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this } getArea() { return Yt.subVectors(this.c, this.b), pn.subVectors(this.a, this.b), Yt.cross(pn).length() * .5 } getMidpoint(e) { return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) } getNormal(e) { return s.getNormal(this.a, this.b, this.c, e) } getPlane(e) { return e.setFromCoplanarPoints(this.a, this.b, this.c) } getBarycoord(e, t) { return s.getBarycoord(e, this.a, this.b, this.c, t) } getInterpolation(e, t, n, i, r) { return s.getInterpolation(e, this.a, this.b, this.c, t, n, i, r) } containsPoint(e) { return s.containsPoint(e, this.a, this.b, this.c) } isFrontFacing(e) { return s.isFrontFacing(this.a, this.b, this.c, e) } intersectsBox(e) { return e.intersectsTriangle(this) } closestPointToPoint(e, t) { let n = this.a, i = this.b, r = this.c, o, a; mi.subVectors(i, n), gi.subVectors(r, n), ao.subVectors(e, n); let c = mi.dot(ao), l = gi.dot(ao); if (c <= 0 && l <= 0) return t.copy(n); co.subVectors(e, i); let h = mi.dot(co), u = gi.dot(co); if (h >= 0 && u <= h) return t.copy(i); let d = c * u - h * l; if (d <= 0 && c >= 0 && h <= 0) return o = c / (c - h), t.copy(n).addScaledVector(mi, o); lo.subVectors(e, r); let f = mi.dot(lo), g = gi.dot(lo); if (g >= 0 && f <= g) return t.copy(r); let x = f * l - c * g; if (x <= 0 && l >= 0 && g <= 0) return a = l / (l - g), t.copy(n).addScaledVector(gi, a); let m = h * g - f * u; if (m <= 0 && u - h >= 0 && f - g >= 0) return Vc.subVectors(r, i), a = (u - h) / (u - h + (f - g)), t.copy(i).addScaledVector(Vc, a); let p = 1 / (m + x + d); return o = x * p, a = d * p, t.copy(n).addScaledVector(mi, o).addScaledVector(gi, a) } equals(e) { return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c) } }, jl = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Pn = { h: 0, s: 0, l: 0 }, Is = { h: 0, s: 0, l: 0 }; function ho(s, e, t) { return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s } var Me = class { constructor(e, t, n) { return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n) } set(e, t, n) { if (t === void 0 && n === void 0) { let i = e; i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i) } else this.setRGB(e, t, n); return this } setScalar(e) { return this.r = e, this.g = e, this.b = e, this } setHex(e, t = ot) { return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, We.toWorkingColorSpace(this, t), this } setRGB(e, t, n, i = We.workingColorSpace) { return this.r = e, this.g = t, this.b = n, We.toWorkingColorSpace(this, i), this } setHSL(e, t, n, i = We.workingColorSpace) { if (e = ca(e, 1), t = gt(t, 0, 1), n = gt(n, 0, 1), t === 0) this.r = this.g = this.b = n; else { let r = n <= .5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r; this.r = ho(o, r, e + 1 / 3), this.g = ho(o, r, e), this.b = ho(o, r, e - 1 / 3) } return We.toWorkingColorSpace(this, i), this } setStyle(e, t = ot) { function n(r) { r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.") } let i; if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) { let r, o = i[1], a = i[2]; switch (o) { case "rgb": case "rgba": if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t); if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t); break; case "hsl": case "hsla": if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t); break; default: console.warn("THREE.Color: Unknown color model " + e) } } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) { let r = i[1], o = r.length; if (o === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t); if (o === 6) return this.setHex(parseInt(r, 16), t); console.warn("THREE.Color: Invalid hex color " + e) } else if (e && e.length > 0) return this.setColorName(e, t); return this } setColorName(e, t = ot) { let n = jl[e.toLowerCase()]; return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this } clone() { return new this.constructor(this.r, this.g, this.b) } copy(e) { return this.r = e.r, this.g = e.g, this.b = e.b, this } copySRGBToLinear(e) { return this.r = Pi(e.r), this.g = Pi(e.g), this.b = Pi(e.b), this } copyLinearToSRGB(e) { return this.r = $r(e.r), this.g = $r(e.g), this.b = $r(e.b), this } convertSRGBToLinear() { return this.copySRGBToLinear(this), this } convertLinearToSRGB() { return this.copyLinearToSRGB(this), this } getHex(e = ot) { return We.fromWorkingColorSpace(Mt.copy(this), e), Math.round(gt(Mt.r * 255, 0, 255)) * 65536 + Math.round(gt(Mt.g * 255, 0, 255)) * 256 + Math.round(gt(Mt.b * 255, 0, 255)) } getHexString(e = ot) { return ("000000" + this.getHex(e).toString(16)).slice(-6) } getHSL(e, t = We.workingColorSpace) { We.fromWorkingColorSpace(Mt.copy(this), t); let n = Mt.r, i = Mt.g, r = Mt.b, o = Math.max(n, i, r), a = Math.min(n, i, r), c, l, h = (a + o) / 2; if (a === o) c = 0, l = 0; else { let u = o - a; switch (l = h <= .5 ? u / (o + a) : u / (2 - o - a), o) { case n: c = (i - r) / u + (i < r ? 6 : 0); break; case i: c = (r - n) / u + 2; break; case r: c = (n - i) / u + 4; break }c /= 6 } return e.h = c, e.s = l, e.l = h, e } getRGB(e, t = We.workingColorSpace) { return We.fromWorkingColorSpace(Mt.copy(this), t), e.r = Mt.r, e.g = Mt.g, e.b = Mt.b, e } getStyle(e = ot) { We.fromWorkingColorSpace(Mt.copy(this), e); let t = Mt.r, n = Mt.g, i = Mt.b; return e !== ot ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})` } offsetHSL(e, t, n) { return this.getHSL(Pn), this.setHSL(Pn.h + e, Pn.s + t, Pn.l + n) } add(e) { return this.r += e.r, this.g += e.g, this.b += e.b, this } addColors(e, t) { return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this } addScalar(e) { return this.r += e, this.g += e, this.b += e, this } sub(e) { return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this } multiply(e) { return this.r *= e.r, this.g *= e.g, this.b *= e.b, this } multiplyScalar(e) { return this.r *= e, this.g *= e, this.b *= e, this } lerp(e, t) { return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this } lerpColors(e, t, n) { return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this } lerpHSL(e, t) { this.getHSL(Pn), e.getHSL(Is); let n = ss(Pn.h, Is.h, t), i = ss(Pn.s, Is.s, t), r = ss(Pn.l, Is.l, t); return this.setHSL(n, i, r), this } setFromVector3(e) { return this.r = e.x, this.g = e.y, this.b = e.z, this } applyMatrix3(e) { let t = this.r, n = this.g, i = this.b, r = e.elements; return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this } equals(e) { return e.r === this.r && e.g === this.g && e.b === this.b } fromArray(e, t = 0) { return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e } fromBufferAttribute(e, t) { return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this } toJSON() { return this.getHex() } *[Symbol.iterator]() { yield this.r, yield this.g, yield this.b } }, Mt = new Me; Me.NAMES = jl; var Ju = 0, Dt = class extends rn { constructor() { super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Ju++ }), this.uuid = $t(), this.name = "", this.type = "Material", this.blending = Ri, this.side = sn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Eo, this.blendDst = wo, this.blendEquation = Qn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Me(0, 0, 0), this.blendAlpha = 0, this.depthFunc = $s, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Rc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ai, this.stencilZFail = ai, this.stencilZPass = ai, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0 } get alphaTest() { return this._alphaTest } set alphaTest(e) { this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e } onBuild() { } onBeforeRender() { } onBeforeCompile() { } customProgramCacheKey() { return this.onBeforeCompile.toString() } setValues(e) { if (e !== void 0) for (let t in e) { let n = e[t]; if (n === void 0) { console.warn(`THREE.Material: parameter '${t}' has value of undefined.`); continue } let i = this[t]; if (i === void 0) { console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`); continue } i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n } } toJSON(e) { let t = e === void 0 || typeof e == "string"; t && (e = { textures: {}, images: {} }); let n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } }; n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ri && (n.blending = this.blending), this.side !== sn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Eo && (n.blendSrc = this.blendSrc), this.blendDst !== wo && (n.blendDst = this.blendDst), this.blendEquation !== Qn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== $s && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Rc && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ai && (n.stencilFail = this.stencilFail), this.stencilZFail !== ai && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== ai && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData); function i(r) { let o = []; for (let a in r) { let c = r[a]; delete c.metadata, o.push(c) } return o } if (t) { let r = i(e.textures), o = i(e.images); r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o) } return n } clone() { return new this.constructor().copy(this) } copy(e) { this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite; let t = e.clippingPlanes, n = null; if (t !== null) { let i = t.length; n = new Array(i); for (let r = 0; r !== i; ++r)n[r] = t[r].clone() } return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this } dispose() { this.dispatchEvent({ type: "dispose" }) } set needsUpdate(e) { e === !0 && this.version++ } }, Ut = class extends Dt { constructor(e) { super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Me(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new on, this.combine = Fl, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this } }; var lt = new C, Ls = new xe, st = class { constructor(e, t, n = !1) { if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Po, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = tn, this.version = 0 } onUploadCallback() { } set needsUpdate(e) { e === !0 && this.version++ } get updateRange() { return $l("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange } setUsage(e) { return this.usage = e, this } addUpdateRange(e, t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(e) { return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this } copyAt(e, t, n) { e *= this.itemSize, n *= t.itemSize; for (let i = 0, r = this.itemSize; i < r; i++)this.array[e + i] = t.array[n + i]; return this } copyArray(e) { return this.array.set(e), this } applyMatrix3(e) { if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++)Ls.fromBufferAttribute(this, t), Ls.applyMatrix3(e), this.setXY(t, Ls.x, Ls.y); else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++)lt.fromBufferAttribute(this, t), lt.applyMatrix3(e), this.setXYZ(t, lt.x, lt.y, lt.z); return this } applyMatrix4(e) { for (let t = 0, n = this.count; t < n; t++)lt.fromBufferAttribute(this, t), lt.applyMatrix4(e), this.setXYZ(t, lt.x, lt.y, lt.z); return this } applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++)lt.fromBufferAttribute(this, t), lt.applyNormalMatrix(e), this.setXYZ(t, lt.x, lt.y, lt.z); return this } transformDirection(e) { for (let t = 0, n = this.count; t < n; t++)lt.fromBufferAttribute(this, t), lt.transformDirection(e), this.setXYZ(t, lt.x, lt.y, lt.z); return this } set(e, t = 0) { return this.array.set(e, t), this } getComponent(e, t) { let n = this.array[e * this.itemSize + t]; return this.normalized && (n = Kt(n, this.array)), n } setComponent(e, t, n) { return this.normalized && (n = qe(n, this.array)), this.array[e * this.itemSize + t] = n, this } getX(e) { let t = this.array[e * this.itemSize]; return this.normalized && (t = Kt(t, this.array)), t } setX(e, t) { return this.normalized && (t = qe(t, this.array)), this.array[e * this.itemSize] = t, this } getY(e) { let t = this.array[e * this.itemSize + 1]; return this.normalized && (t = Kt(t, this.array)), t } setY(e, t) { return this.normalized && (t = qe(t, this.array)), this.array[e * this.itemSize + 1] = t, this } getZ(e) { let t = this.array[e * this.itemSize + 2]; return this.normalized && (t = Kt(t, this.array)), t } setZ(e, t) { return this.normalized && (t = qe(t, this.array)), this.array[e * this.itemSize + 2] = t, this } getW(e) { let t = this.array[e * this.itemSize + 3]; return this.normalized && (t = Kt(t, this.array)), t } setW(e, t) { return this.normalized && (t = qe(t, this.array)), this.array[e * this.itemSize + 3] = t, this } setXY(e, t, n) { return e *= this.itemSize, this.normalized && (t = qe(t, this.array), n = qe(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this } setXYZ(e, t, n, i) { return e *= this.itemSize, this.normalized && (t = qe(t, this.array), n = qe(n, this.array), i = qe(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this } setXYZW(e, t, n, i, r) { return e *= this.itemSize, this.normalized && (t = qe(t, this.array), n = qe(n, this.array), i = qe(i, this.array), r = qe(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this } onUpload(e) { return this.onUploadCallback = e, this } clone() { return new this.constructor(this.array, this.itemSize).copy(this) } toJSON() { let e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized }; return this.name !== "" && (e.name = this.name), this.usage !== Po && (e.usage = this.usage), e } }; var rr = class extends st { constructor(e, t, n) { super(new Uint16Array(e), t, n) } }; var or = class extends st { constructor(e, t, n) { super(new Uint32Array(e), t, n) } }; var kt = class extends st { constructor(e, t, n) { super(new Float32Array(e), t, n) } }, $u = 0, zt = new Le, uo = new rt, _i = new C, Lt = new Ht, Ji = new Ht, mt = new C, Ct = class s extends rn { constructor() { super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: $u++ }), this.uuid = $t(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} } getIndex() { return this.index } setIndex(e) { return Array.isArray(e) ? this.index = new (Jl(e) ? or : rr)(e, 1) : this.index = e, this } getAttribute(e) { return this.attributes[e] } setAttribute(e, t) { return this.attributes[e] = t, this } deleteAttribute(e) { return delete this.attributes[e], this } hasAttribute(e) { return this.attributes[e] !== void 0 } addGroup(e, t, n = 0) { this.groups.push({ start: e, count: t, materialIndex: n }) } clearGroups() { this.groups = [] } setDrawRange(e, t) { this.drawRange.start = e, this.drawRange.count = t } applyMatrix4(e) { let t = this.attributes.position; t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0); let n = this.attributes.normal; if (n !== void 0) { let r = new Ie().getNormalMatrix(e); n.applyNormalMatrix(r), n.needsUpdate = !0 } let i = this.attributes.tangent; return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this } applyQuaternion(e) { return zt.makeRotationFromQuaternion(e), this.applyMatrix4(zt), this } rotateX(e) { return zt.makeRotationX(e), this.applyMatrix4(zt), this } rotateY(e) { return zt.makeRotationY(e), this.applyMatrix4(zt), this } rotateZ(e) { return zt.makeRotationZ(e), this.applyMatrix4(zt), this } translate(e, t, n) { return zt.makeTranslation(e, t, n), this.applyMatrix4(zt), this } scale(e, t, n) { return zt.makeScale(e, t, n), this.applyMatrix4(zt), this } lookAt(e) { return uo.lookAt(e), uo.updateMatrix(), this.applyMatrix4(uo.matrix), this } center() { return this.computeBoundingBox(), this.boundingBox.getCenter(_i).negate(), this.translate(_i.x, _i.y, _i.z), this } setFromPoints(e) { let t = []; for (let n = 0, i = e.length; n < i; n++) { let r = e[n]; t.push(r.x, r.y, r.z || 0) } return this.setAttribute("position", new kt(t, 3)), this } computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new Ht); let e = this.attributes.position, t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new C(-1 / 0, -1 / 0, -1 / 0), new C(1 / 0, 1 / 0, 1 / 0)); return } if (e !== void 0) { if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) { let r = t[n]; Lt.setFromBufferAttribute(r), this.morphTargetsRelative ? (mt.addVectors(this.boundingBox.min, Lt.min), this.boundingBox.expandByPoint(mt), mt.addVectors(this.boundingBox.max, Lt.max), this.boundingBox.expandByPoint(mt)) : (this.boundingBox.expandByPoint(Lt.min), this.boundingBox.expandByPoint(Lt.max)) } } else this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) } computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new Nt); let e = this.attributes.position, t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new C, 1 / 0); return } if (e) { let n = this.boundingSphere.center; if (Lt.setFromBufferAttribute(e), t) for (let r = 0, o = t.length; r < o; r++) { let a = t[r]; Ji.setFromBufferAttribute(a), this.morphTargetsRelative ? (mt.addVectors(Lt.min, Ji.min), Lt.expandByPoint(mt), mt.addVectors(Lt.max, Ji.max), Lt.expandByPoint(mt)) : (Lt.expandByPoint(Ji.min), Lt.expandByPoint(Ji.max)) } Lt.getCenter(n); let i = 0; for (let r = 0, o = e.count; r < o; r++)mt.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(mt)); if (t) for (let r = 0, o = t.length; r < o; r++) { let a = t[r], c = this.morphTargetsRelative; for (let l = 0, h = a.count; l < h; l++)mt.fromBufferAttribute(a, l), c && (_i.fromBufferAttribute(e, l), mt.add(_i)), i = Math.max(i, n.distanceToSquared(mt)) } this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } } computeTangents() { let e = this.index, t = this.attributes; if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) { console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); return } let n = t.position, i = t.normal, r = t.uv; this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new st(new Float32Array(4 * n.count), 4)); let o = this.getAttribute("tangent"), a = [], c = []; for (let H = 0; H < n.count; H++)a[H] = new C, c[H] = new C; let l = new C, h = new C, u = new C, d = new xe, f = new xe, g = new xe, x = new C, m = new C; function p(H, b, v) { l.fromBufferAttribute(n, H), h.fromBufferAttribute(n, b), u.fromBufferAttribute(n, v), d.fromBufferAttribute(r, H), f.fromBufferAttribute(r, b), g.fromBufferAttribute(r, v), h.sub(l), u.sub(l), f.sub(d), g.sub(d); let B = 1 / (f.x * g.y - g.x * f.y); isFinite(B) && (x.copy(h).multiplyScalar(g.y).addScaledVector(u, -f.y).multiplyScalar(B), m.copy(u).multiplyScalar(f.x).addScaledVector(h, -g.x).multiplyScalar(B), a[H].add(x), a[b].add(x), a[v].add(x), c[H].add(m), c[b].add(m), c[v].add(m)) } let A = this.groups; A.length === 0 && (A = [{ start: 0, count: e.count }]); for (let H = 0, b = A.length; H < b; ++H) { let v = A[H], B = v.start, X = v.count; for (let P = B, W = B + X; P < W; P += 3)p(e.getX(P + 0), e.getX(P + 1), e.getX(P + 2)) } let M = new C, T = new C, N = new C, R = new C; function w(H) { N.fromBufferAttribute(i, H), R.copy(N); let b = a[H]; M.copy(b), M.sub(N.multiplyScalar(N.dot(b))).normalize(), T.crossVectors(R, b); let B = T.dot(c[H]) < 0 ? -1 : 1; o.setXYZW(H, M.x, M.y, M.z, B) } for (let H = 0, b = A.length; H < b; ++H) { let v = A[H], B = v.start, X = v.count; for (let P = B, W = B + X; P < W; P += 3)w(e.getX(P + 0)), w(e.getX(P + 1)), w(e.getX(P + 2)) } } computeVertexNormals() { let e = this.index, t = this.getAttribute("position"); if (t !== void 0) { let n = this.getAttribute("normal"); if (n === void 0) n = new st(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n); else for (let d = 0, f = n.count; d < f; d++)n.setXYZ(d, 0, 0, 0); let i = new C, r = new C, o = new C, a = new C, c = new C, l = new C, h = new C, u = new C; if (e) for (let d = 0, f = e.count; d < f; d += 3) { let g = e.getX(d + 0), x = e.getX(d + 1), m = e.getX(d + 2); i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, x), o.fromBufferAttribute(t, m), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), a.fromBufferAttribute(n, g), c.fromBufferAttribute(n, x), l.fromBufferAttribute(n, m), a.add(h), c.add(h), l.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(x, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z) } else for (let d = 0, f = t.count; d < f; d += 3)i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z); this.normalizeNormals(), n.needsUpdate = !0 } } normalizeNormals() { let e = this.attributes.normal; for (let t = 0, n = e.count; t < n; t++)mt.fromBufferAttribute(e, t), mt.normalize(), e.setXYZ(t, mt.x, mt.y, mt.z) } toNonIndexed() { function e(a, c) { let l = a.array, h = a.itemSize, u = a.normalized, d = new l.constructor(c.length * h), f = 0, g = 0; for (let x = 0, m = c.length; x < m; x++) { a.isInterleavedBufferAttribute ? f = c[x] * a.data.stride + a.offset : f = c[x] * h; for (let p = 0; p < h; p++)d[g++] = l[f++] } return new st(d, h, u) } if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; let t = new s, n = this.index.array, i = this.attributes; for (let a in i) { let c = i[a], l = e(c, n); t.setAttribute(a, l) } let r = this.morphAttributes; for (let a in r) { let c = [], l = r[a]; for (let h = 0, u = l.length; h < u; h++) { let d = l[h], f = e(d, n); c.push(f) } t.morphAttributes[a] = c } t.morphTargetsRelative = this.morphTargetsRelative; let o = this.groups; for (let a = 0, c = o.length; a < c; a++) { let l = o[a]; t.addGroup(l.start, l.count, l.materialIndex) } return t } toJSON() { let e = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) { let c = this.parameters; for (let l in c) c[l] !== void 0 && (e[l] = c[l]); return e } e.data = { attributes: {} }; let t = this.index; t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) }); let n = this.attributes; for (let c in n) { let l = n[c]; e.data.attributes[c] = l.toJSON(e.data) } let i = {}, r = !1; for (let c in this.morphAttributes) { let l = this.morphAttributes[c], h = []; for (let u = 0, d = l.length; u < d; u++) { let f = l[u]; h.push(f.toJSON(e.data)) } h.length > 0 && (i[c] = h, r = !0) } r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative); let o = this.groups; o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o))); let a = this.boundingSphere; return a !== null && (e.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), e } clone() { return new this.constructor().copy(this) } copy(e) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; let t = {}; this.name = e.name; let n = e.index; n !== null && this.setIndex(n.clone(t)); let i = e.attributes; for (let l in i) { let h = i[l]; this.setAttribute(l, h.clone(t)) } let r = e.morphAttributes; for (let l in r) { let h = [], u = r[l]; for (let d = 0, f = u.length; d < f; d++)h.push(u[d].clone(t)); this.morphAttributes[l] = h } this.morphTargetsRelative = e.morphTargetsRelative; let o = e.groups; for (let l = 0, h = o.length; l < h; l++) { let u = o[l]; this.addGroup(u.start, u.count, u.materialIndex) } let a = e.boundingBox; a !== null && (this.boundingBox = a.clone()); let c = e.boundingSphere; return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this } dispose() { this.dispatchEvent({ type: "dispose" }) } }, Gc = new Le, Zn = new Fn, Ns = new Nt, Wc = new C, xi = new C, yi = new C, vi = new C, fo = new C, Ds = new C, Us = new xe, Os = new xe, Fs = new xe, Xc = new C, Yc = new C, qc = new C, Bs = new C, zs = new C, bt = class extends rt { constructor(e = new Ct, t = new Ut) { super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } updateMorphTargets() { let t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { let i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, o = i.length; r < o; r++) { let a = i[r].name || String(r); this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } getVertexPosition(e, t) { let n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, o = n.morphTargetsRelative; t.fromBufferAttribute(i, e); let a = this.morphTargetInfluences; if (r && a) { Ds.set(0, 0, 0); for (let c = 0, l = r.length; c < l; c++) { let h = a[c], u = r[c]; h !== 0 && (fo.fromBufferAttribute(u, e), o ? Ds.addScaledVector(fo, h) : Ds.addScaledVector(fo.sub(t), h)) } t.add(Ds) } return t } raycast(e, t) { let n = this.geometry, i = this.material, r = this.matrixWorld; i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Ns.copy(n.boundingSphere), Ns.applyMatrix4(r), Zn.copy(e.ray).recast(e.near), !(Ns.containsPoint(Zn.origin) === !1 && (Zn.intersectSphere(Ns, Wc) === null || Zn.origin.distanceToSquared(Wc) > (e.far - e.near) ** 2)) && (Gc.copy(r).invert(), Zn.copy(e.ray).applyMatrix4(Gc), !(n.boundingBox !== null && Zn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Zn))) } _computeIntersections(e, t, n) { let i, r = this.geometry, o = this.material, a = r.index, c = r.attributes.position, l = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, f = r.drawRange; if (a !== null) if (Array.isArray(o)) for (let g = 0, x = d.length; g < x; g++) { let m = d[g], p = o[m.materialIndex], A = Math.max(m.start, f.start), M = Math.min(a.count, Math.min(m.start + m.count, f.start + f.count)); for (let T = A, N = M; T < N; T += 3) { let R = a.getX(T), w = a.getX(T + 1), H = a.getX(T + 2); i = ks(this, p, e, n, l, h, u, R, w, H), i && (i.faceIndex = Math.floor(T / 3), i.face.materialIndex = m.materialIndex, t.push(i)) } } else { let g = Math.max(0, f.start), x = Math.min(a.count, f.start + f.count); for (let m = g, p = x; m < p; m += 3) { let A = a.getX(m), M = a.getX(m + 1), T = a.getX(m + 2); i = ks(this, o, e, n, l, h, u, A, M, T), i && (i.faceIndex = Math.floor(m / 3), t.push(i)) } } else if (c !== void 0) if (Array.isArray(o)) for (let g = 0, x = d.length; g < x; g++) { let m = d[g], p = o[m.materialIndex], A = Math.max(m.start, f.start), M = Math.min(c.count, Math.min(m.start + m.count, f.start + f.count)); for (let T = A, N = M; T < N; T += 3) { let R = T, w = T + 1, H = T + 2; i = ks(this, p, e, n, l, h, u, R, w, H), i && (i.faceIndex = Math.floor(T / 3), i.face.materialIndex = m.materialIndex, t.push(i)) } } else { let g = Math.max(0, f.start), x = Math.min(c.count, f.start + f.count); for (let m = g, p = x; m < p; m += 3) { let A = m, M = m + 1, T = m + 2; i = ks(this, o, e, n, l, h, u, A, M, T), i && (i.faceIndex = Math.floor(m / 3), t.push(i)) } } } }; function ju(s, e, t, n, i, r, o, a) { let c; if (e.side === wt ? c = n.intersectTriangle(o, r, i, !0, a) : c = n.intersectTriangle(i, r, o, e.side === sn, a), c === null) return null; zs.copy(a), zs.applyMatrix4(s.matrixWorld); let l = t.ray.origin.distanceTo(zs); return l < t.near || l > t.far ? null : { distance: l, point: zs.clone(), object: s } } function ks(s, e, t, n, i, r, o, a, c, l) { s.getVertexPosition(a, xi), s.getVertexPosition(c, yi), s.getVertexPosition(l, vi); let h = ju(s, e, t, n, xi, yi, vi, Bs); if (h) { i && (Us.fromBufferAttribute(i, a), Os.fromBufferAttribute(i, c), Fs.fromBufferAttribute(i, l), h.uv = Ei.getInterpolation(Bs, xi, yi, vi, Us, Os, Fs, new xe)), r && (Us.fromBufferAttribute(r, a), Os.fromBufferAttribute(r, c), Fs.fromBufferAttribute(r, l), h.uv1 = Ei.getInterpolation(Bs, xi, yi, vi, Us, Os, Fs, new xe)), o && (Xc.fromBufferAttribute(o, a), Yc.fromBufferAttribute(o, c), qc.fromBufferAttribute(o, l), h.normal = Ei.getInterpolation(Bs, xi, yi, vi, Xc, Yc, qc, new C), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1)); let u = { a, b: c, c: l, normal: new C, materialIndex: 0 }; Ei.getNormal(xi, yi, vi, u.normal), h.face = u } return h } var ls = class s extends Ct { constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) { super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: r, depthSegments: o }; let a = this; i = Math.floor(i), r = Math.floor(r), o = Math.floor(o); let c = [], l = [], h = [], u = [], d = 0, f = 0; g("z", "y", "x", -1, -1, n, t, e, o, r, 0), g("z", "y", "x", 1, -1, n, t, -e, o, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(c), this.setAttribute("position", new kt(l, 3)), this.setAttribute("normal", new kt(h, 3)), this.setAttribute("uv", new kt(u, 2)); function g(x, m, p, A, M, T, N, R, w, H, b) { let v = T / w, B = N / H, X = T / 2, P = N / 2, W = R / 2, q = w + 1, J = H + 1, ie = 0, V = 0, Q = new C; for (let j = 0; j < J; j++) { let de = j * B - P; for (let Fe = 0; Fe < q; Fe++) { let Ye = Fe * v - X; Q[x] = Ye * A, Q[m] = de * M, Q[p] = W, l.push(Q.x, Q.y, Q.z), Q[x] = 0, Q[m] = 0, Q[p] = R > 0 ? 1 : -1, h.push(Q.x, Q.y, Q.z), u.push(Fe / w), u.push(1 - j / H), ie += 1 } } for (let j = 0; j < H; j++)for (let de = 0; de < w; de++) { let Fe = d + de + q * j, Ye = d + de + q * (j + 1), G = d + (de + 1) + q * (j + 1), ee = d + (de + 1) + q * j; c.push(Fe, Ye, ee), c.push(Ye, G, ee), V += 6 } a.addGroup(f, V, b), f += V, d += ie } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new s(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments) } }; function Fi(s) { let e = {}; for (let t in s) { e[t] = {}; for (let n in s[t]) { let i = s[t][n]; i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i } } return e } function Tt(s) { let e = {}; for (let t = 0; t < s.length; t++) { let n = Fi(s[t]); for (let i in n) e[i] = n[i] } return e } function Qu(s) { let e = []; for (let t = 0; t < s.length; t++)e.push(s[t].clone()); return e } function Ql(s) { let e = s.getRenderTarget(); return e === null ? s.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : We.workingColorSpace } var ed = { clone: Fi, merge: Tt }, td = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, nd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, an = class extends Dt { constructor(e) { super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = td, this.fragmentShader = nd, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = { clipCullDistance: !1, multiDraw: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e) } copy(e) { return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Fi(e.uniforms), this.uniformsGroups = Qu(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this } toJSON(e) { let t = super.toJSON(e); t.glslVersion = this.glslVersion, t.uniforms = {}; for (let i in this.uniforms) { let o = this.uniforms[i].value; o && o.isTexture ? t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ? t.uniforms[i] = { type: "c", value: o.getHex() } : o && o.isVector2 ? t.uniforms[i] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? t.uniforms[i] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? t.uniforms[i] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? t.uniforms[i] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? t.uniforms[i] = { type: "m4", value: o.toArray() } : t.uniforms[i] = { value: o } } Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping; let n = {}; for (let i in this.extensions) this.extensions[i] === !0 && (n[i] = !0); return Object.keys(n).length > 0 && (t.extensions = n), t } }, ar = class extends rt { constructor() { super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Le, this.projectionMatrix = new Le, this.projectionMatrixInverse = new Le, this.coordinateSystem = yn } copy(e, t) { return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this } getWorldDirection(e) { return super.getWorldDirection(e).negate() } updateMatrixWorld(e) { super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert() } updateWorldMatrix(e, t) { super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert() } clone() { return new this.constructor().copy(this) } }, In = new C, Zc = new xe, Kc = new xe, ut = class extends ar { constructor(e = 50, t = 1, n = .1, i = 2e3) { super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this } setFocalLength(e) { let t = .5 * this.getFilmHeight() / e; this.fov = Oi * 2 * Math.atan(t), this.updateProjectionMatrix() } getFocalLength() { let e = Math.tan(is * .5 * this.fov); return .5 * this.getFilmHeight() / e } getEffectiveFOV() { return Oi * 2 * Math.atan(Math.tan(is * .5 * this.fov) / this.zoom) } getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1) } getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1) } getViewBounds(e, t, n) { In.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(In.x, In.y).multiplyScalar(-e / In.z), In.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(In.x, In.y).multiplyScalar(-e / In.z) } getViewSize(e, t) { return this.getViewBounds(e, Zc, Kc), t.subVectors(Kc, Zc) } setViewOffset(e, t, n, i, r, o) { this.aspect = e / t, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { let e = this.near, t = e * Math.tan(is * .5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -.5 * i, o = this.view; if (this.view !== null && this.view.enabled) { let c = o.fullWidth, l = o.fullHeight; r += o.offsetX * i / c, t -= o.offsetY * n / l, i *= o.width / c, n *= o.height / l } let a = this.filmOffset; a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { let t = super.toJSON(e); return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t } }, Mi = -90, Si = 1, Do = class extends rt { constructor(e, t, n) { super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0; let i = new ut(Mi, Si, e, t); i.layers = this.layers, this.add(i); let r = new ut(Mi, Si, e, t); r.layers = this.layers, this.add(r); let o = new ut(Mi, Si, e, t); o.layers = this.layers, this.add(o); let a = new ut(Mi, Si, e, t); a.layers = this.layers, this.add(a); let c = new ut(Mi, Si, e, t); c.layers = this.layers, this.add(c); let l = new ut(Mi, Si, e, t); l.layers = this.layers, this.add(l) } updateCoordinateSystem() { let e = this.coordinateSystem, t = this.children.concat(), [n, i, r, o, a, c] = t; for (let l of t) this.remove(l); if (e === yn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1); else if (e === tr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1); else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e); for (let l of t) this.add(l), l.updateMatrixWorld() } update(e, t) { this.parent === null && this.updateMatrixWorld(); let { renderTarget: n, activeMipmapLevel: i } = this; this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem()); let [r, o, a, c, l, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), g = e.xr.enabled; e.xr.enabled = !1; let x = n.texture.generateMipmaps; n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, o), e.setRenderTarget(n, 2, i), e.render(t, a), e.setRenderTarget(n, 3, i), e.render(t, c), e.setRenderTarget(n, 4, i), e.render(t, l), n.texture.generateMipmaps = x, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, d, f), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0 } }, cr = class extends _t { constructor(e, t, n, i, r, o, a, c, l, h) { e = e !== void 0 ? e : [], t = t !== void 0 ? t : Li, super(e, t, n, i, r, o, a, c, l, h), this.isCubeTexture = !0, this.flipY = !1 } get images() { return this.image } set images(e) { this.image = e } }, Uo = class extends vn {
			constructor(e = 1, t = {}) { super(e, e, t), this.isWebGLCubeRenderTarget = !0; let n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n]; this.texture = new cr(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Et } fromEquirectangularTexture(e, t) {
				this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter; let n = {
					uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`}, i = new ls(5, 5, 5), r = new an({ name: "CubemapFromEquirect", uniforms: Fi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: wt, blending: Dn }); r.uniforms.tEquirect.value = t; let o = new bt(i, r), a = t.minFilter; return t.minFilter === en && (t.minFilter = Et), new Do(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this
			} clear(e, t, n, i) { let r = e.getRenderTarget(); for (let o = 0; o < 6; o++)e.setRenderTarget(this, o), e.clear(t, n, i); e.setRenderTarget(r) }
		}, po = new C, id = new C, sd = new Ie, qt = class { constructor(e = new C(1, 0, 0), t = 0) { this.isPlane = !0, this.normal = e, this.constant = t } set(e, t) { return this.normal.copy(e), this.constant = t, this } setComponents(e, t, n, i) { return this.normal.set(e, t, n), this.constant = i, this } setFromNormalAndCoplanarPoint(e, t) { return this.normal.copy(e), this.constant = -t.dot(this.normal), this } setFromCoplanarPoints(e, t, n) { let i = po.subVectors(n, t).cross(id.subVectors(e, t)).normalize(); return this.setFromNormalAndCoplanarPoint(i, e), this } copy(e) { return this.normal.copy(e.normal), this.constant = e.constant, this } normalize() { let e = 1 / this.normal.length(); return this.normal.multiplyScalar(e), this.constant *= e, this } negate() { return this.constant *= -1, this.normal.negate(), this } distanceToPoint(e) { return this.normal.dot(e) + this.constant } distanceToSphere(e) { return this.distanceToPoint(e.center) - e.radius } projectPoint(e, t) { return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e)) } intersectLine(e, t) { let n = e.delta(po), i = this.normal.dot(n); if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null; let r = -(e.start.dot(this.normal) + this.constant) / i; return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r) } intersectsLine(e) { let t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end); return t < 0 && n > 0 || n < 0 && t > 0 } intersectsBox(e) { return e.intersectsPlane(this) } intersectsSphere(e) { return e.intersectsPlane(this) } coplanarPoint(e) { return e.copy(this.normal).multiplyScalar(-this.constant) } applyMatrix4(e, t) { let n = t || sd.getNormalMatrix(e), i = this.coplanarPoint(po).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize(); return this.constant = -i.dot(r), this } translate(e) { return this.constant -= e.dot(this.normal), this } equals(e) { return e.normal.equals(this.normal) && e.constant === this.constant } clone() { return new this.constructor().copy(this) } }, Kn = new Nt, Hs = new C, hs = class { constructor(e = new qt, t = new qt, n = new qt, i = new qt, r = new qt, o = new qt) { this.planes = [e, t, n, i, r, o] } set(e, t, n, i, r, o) { let a = this.planes; return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this } copy(e) { let t = this.planes; for (let n = 0; n < 6; n++)t[n].copy(e.planes[n]); return this } setFromProjectionMatrix(e, t = yn) { let n = this.planes, i = e.elements, r = i[0], o = i[1], a = i[2], c = i[3], l = i[4], h = i[5], u = i[6], d = i[7], f = i[8], g = i[9], x = i[10], m = i[11], p = i[12], A = i[13], M = i[14], T = i[15]; if (n[0].setComponents(c - r, d - l, m - f, T - p).normalize(), n[1].setComponents(c + r, d + l, m + f, T + p).normalize(), n[2].setComponents(c + o, d + h, m + g, T + A).normalize(), n[3].setComponents(c - o, d - h, m - g, T - A).normalize(), n[4].setComponents(c - a, d - u, m - x, T - M).normalize(), t === yn) n[5].setComponents(c + a, d + u, m + x, T + M).normalize(); else if (t === tr) n[5].setComponents(a, u, x, M).normalize(); else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t); return this } intersectsObject(e) { if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld); else { let t = e.geometry; t.boundingSphere === null && t.computeBoundingSphere(), Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld) } return this.intersectsSphere(Kn) } intersectsSprite(e) { return Kn.center.set(0, 0, 0), Kn.radius = .7071067811865476, Kn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Kn) } intersectsSphere(e) { let t = this.planes, n = e.center, i = -e.radius; for (let r = 0; r < 6; r++)if (t[r].distanceToPoint(n) < i) return !1; return !0 } intersectsBox(e) { let t = this.planes; for (let n = 0; n < 6; n++) { let i = t[n]; if (Hs.x = i.normal.x > 0 ? e.max.x : e.min.x, Hs.y = i.normal.y > 0 ? e.max.y : e.min.y, Hs.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Hs) < 0) return !1 } return !0 } containsPoint(e) { let t = this.planes; for (let n = 0; n < 6; n++)if (t[n].distanceToPoint(e) < 0) return !1; return !0 } clone() { return new this.constructor().copy(this) } }; function eh() { let s = null, e = !1, t = null, n = null; function i(r, o) { t(r, o), n = s.requestAnimationFrame(i) } return { start: function () { e !== !0 && t !== null && (n = s.requestAnimationFrame(i), e = !0) }, stop: function () { s.cancelAnimationFrame(n), e = !1 }, setAnimationLoop: function (r) { t = r }, setContext: function (r) { s = r } } } function rd(s) { let e = new WeakMap; function t(a, c) { let l = a.array, h = a.usage, u = l.byteLength, d = s.createBuffer(); s.bindBuffer(c, d), s.bufferData(c, l, h), a.onUploadCallback(); let f; if (l instanceof Float32Array) f = s.FLOAT; else if (l instanceof Uint16Array) a.isFloat16BufferAttribute ? f = s.HALF_FLOAT : f = s.UNSIGNED_SHORT; else if (l instanceof Int16Array) f = s.SHORT; else if (l instanceof Uint32Array) f = s.UNSIGNED_INT; else if (l instanceof Int32Array) f = s.INT; else if (l instanceof Int8Array) f = s.BYTE; else if (l instanceof Uint8Array) f = s.UNSIGNED_BYTE; else if (l instanceof Uint8ClampedArray) f = s.UNSIGNED_BYTE; else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l); return { buffer: d, type: f, bytesPerElement: l.BYTES_PER_ELEMENT, version: a.version, size: u } } function n(a, c, l) { let h = c.array, u = c._updateRange, d = c.updateRanges; if (s.bindBuffer(l, a), u.count === -1 && d.length === 0 && s.bufferSubData(l, 0, h), d.length !== 0) { for (let f = 0, g = d.length; f < g; f++) { let x = d[f]; s.bufferSubData(l, x.start * h.BYTES_PER_ELEMENT, h, x.start, x.count) } c.clearUpdateRanges() } u.count !== -1 && (s.bufferSubData(l, u.offset * h.BYTES_PER_ELEMENT, h, u.offset, u.count), u.count = -1), c.onUploadCallback() } function i(a) { return a.isInterleavedBufferAttribute && (a = a.data), e.get(a) } function r(a) { a.isInterleavedBufferAttribute && (a = a.data); let c = e.get(a); c && (s.deleteBuffer(c.buffer), e.delete(a)) } function o(a, c) { if (a.isGLBufferAttribute) { let h = e.get(a); (!h || h.version < a.version) && e.set(a, { buffer: a.buffer, type: a.type, bytesPerElement: a.elementSize, version: a.version }); return } a.isInterleavedBufferAttribute && (a = a.data); let l = e.get(a); if (l === void 0) e.set(a, t(a, c)); else if (l.version < a.version) { if (l.size !== a.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."); n(l.buffer, a, c), l.version = a.version } } return { get: i, remove: r, update: o } } var lr = class s extends Ct { constructor(e = 1, t = 1, n = 1, i = 1) { super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i }; let r = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(i), l = a + 1, h = c + 1, u = e / a, d = t / c, f = [], g = [], x = [], m = []; for (let p = 0; p < h; p++) { let A = p * d - o; for (let M = 0; M < l; M++) { let T = M * u - r; g.push(T, -A, 0), x.push(0, 0, 1), m.push(M / a), m.push(1 - p / c) } } for (let p = 0; p < c; p++)for (let A = 0; A < a; A++) { let M = A + l * p, T = A + l * (p + 1), N = A + 1 + l * (p + 1), R = A + 1 + l * p; f.push(M, T, R), f.push(T, N, R) } this.setIndex(f), this.setAttribute("position", new kt(g, 3)), this.setAttribute("normal", new kt(x, 3)), this.setAttribute("uv", new kt(m, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new s(e.width, e.height, e.widthSegments, e.heightSegments) } }, od = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, ad = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, cd = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, ld = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, hd = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, ud = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, dd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, fd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, pd = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, md = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, gd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, _d = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, xd = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, yd = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, vd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Md = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Sd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, bd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Ad = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Td = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Ed = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, wd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Rd = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Cd = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Pd = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Id = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Ld = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Nd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Dd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Ud = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Od = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Fd = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, Bd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, zd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, kd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Hd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Vd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Gd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Wd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Xd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Yd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, qd = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Zd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Kd = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Jd = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, $d = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, jd = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Qd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, ef = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, tf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, nf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, sf = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, rf = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, of = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, af = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, cf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, lf = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, hf = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, uf = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, df = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, ff = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, pf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, mf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, gf = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, _f = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, xf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, yf = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, vf = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Mf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Sf = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, bf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Af = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Tf = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Ef = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, wf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Rf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Cf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Pf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, If = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Lf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Nf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Df = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Uf = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Of = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Ff = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Bf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, zf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, kf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Hf = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Vf = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`, Gf = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Wf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Xf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Yf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, qf = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Zf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Kf = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Jf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, $f = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, jf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Qf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, ep = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, tp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, np = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, ip = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, sp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, rp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`, op = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, ap = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, cp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, lp = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, hp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, up = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, dp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, fp = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, pp = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, mp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, gp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, _p = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, xp = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, yp = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, vp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Mp = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Sp = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, bp = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ap = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Tp = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ep = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, wp = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Rp = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Cp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Pp = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Ip = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Lp = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Np = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Dp = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Up = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Op = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Fp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Bp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, zp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Pe = { alphahash_fragment: od, alphahash_pars_fragment: ad, alphamap_fragment: cd, alphamap_pars_fragment: ld, alphatest_fragment: hd, alphatest_pars_fragment: ud, aomap_fragment: dd, aomap_pars_fragment: fd, batching_pars_vertex: pd, batching_vertex: md, begin_vertex: gd, beginnormal_vertex: _d, bsdfs: xd, iridescence_fragment: yd, bumpmap_pars_fragment: vd, clipping_planes_fragment: Md, clipping_planes_pars_fragment: Sd, clipping_planes_pars_vertex: bd, clipping_planes_vertex: Ad, color_fragment: Td, color_pars_fragment: Ed, color_pars_vertex: wd, color_vertex: Rd, common: Cd, cube_uv_reflection_fragment: Pd, defaultnormal_vertex: Id, displacementmap_pars_vertex: Ld, displacementmap_vertex: Nd, emissivemap_fragment: Dd, emissivemap_pars_fragment: Ud, colorspace_fragment: Od, colorspace_pars_fragment: Fd, envmap_fragment: Bd, envmap_common_pars_fragment: zd, envmap_pars_fragment: kd, envmap_pars_vertex: Hd, envmap_physical_pars_fragment: jd, envmap_vertex: Vd, fog_vertex: Gd, fog_pars_vertex: Wd, fog_fragment: Xd, fog_pars_fragment: Yd, gradientmap_pars_fragment: qd, lightmap_pars_fragment: Zd, lights_lambert_fragment: Kd, lights_lambert_pars_fragment: Jd, lights_pars_begin: $d, lights_toon_fragment: Qd, lights_toon_pars_fragment: ef, lights_phong_fragment: tf, lights_phong_pars_fragment: nf, lights_physical_fragment: sf, lights_physical_pars_fragment: rf, lights_fragment_begin: of, lights_fragment_maps: af, lights_fragment_end: cf, logdepthbuf_fragment: lf, logdepthbuf_pars_fragment: hf, logdepthbuf_pars_vertex: uf, logdepthbuf_vertex: df, map_fragment: ff, map_pars_fragment: pf, map_particle_fragment: mf, map_particle_pars_fragment: gf, metalnessmap_fragment: _f, metalnessmap_pars_fragment: xf, morphinstance_vertex: yf, morphcolor_vertex: vf, morphnormal_vertex: Mf, morphtarget_pars_vertex: Sf, morphtarget_vertex: bf, normal_fragment_begin: Af, normal_fragment_maps: Tf, normal_pars_fragment: Ef, normal_pars_vertex: wf, normal_vertex: Rf, normalmap_pars_fragment: Cf, clearcoat_normal_fragment_begin: Pf, clearcoat_normal_fragment_maps: If, clearcoat_pars_fragment: Lf, iridescence_pars_fragment: Nf, opaque_fragment: Df, packing: Uf, premultiplied_alpha_fragment: Of, project_vertex: Ff, dithering_fragment: Bf, dithering_pars_fragment: zf, roughnessmap_fragment: kf, roughnessmap_pars_fragment: Hf, shadowmap_pars_fragment: Vf, shadowmap_pars_vertex: Gf, shadowmap_vertex: Wf, shadowmask_pars_fragment: Xf, skinbase_vertex: Yf, skinning_pars_vertex: qf, skinning_vertex: Zf, skinnormal_vertex: Kf, specularmap_fragment: Jf, specularmap_pars_fragment: $f, tonemapping_fragment: jf, tonemapping_pars_fragment: Qf, transmission_fragment: ep, transmission_pars_fragment: tp, uv_pars_fragment: np, uv_pars_vertex: ip, uv_vertex: sp, worldpos_vertex: rp, background_vert: op, background_frag: ap, backgroundCube_vert: cp, backgroundCube_frag: lp, cube_vert: hp, cube_frag: up, depth_vert: dp, depth_frag: fp, distanceRGBA_vert: pp, distanceRGBA_frag: mp, equirect_vert: gp, equirect_frag: _p, linedashed_vert: xp, linedashed_frag: yp, meshbasic_vert: vp, meshbasic_frag: Mp, meshlambert_vert: Sp, meshlambert_frag: bp, meshmatcap_vert: Ap, meshmatcap_frag: Tp, meshnormal_vert: Ep, meshnormal_frag: wp, meshphong_vert: Rp, meshphong_frag: Cp, meshphysical_vert: Pp, meshphysical_frag: Ip, meshtoon_vert: Lp, meshtoon_frag: Np, points_vert: Dp, points_frag: Up, shadow_vert: Op, shadow_frag: Fp, sprite_vert: Bp, sprite_frag: zp }, re = { common: { diffuse: { value: new Me(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ie }, alphaMap: { value: null }, alphaMapTransform: { value: new Ie }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ie } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ie }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ie } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ie } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ie }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ie }, normalScale: { value: new xe(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ie }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ie } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ie } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ie } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Me(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Me(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ie }, alphaTest: { value: 0 }, uvTransform: { value: new Ie } }, sprite: { diffuse: { value: new Me(16777215) }, opacity: { value: 1 }, center: { value: new xe(.5, .5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ie }, alphaMap: { value: null }, alphaMapTransform: { value: new Ie }, alphaTest: { value: 0 } } }, Qt = { basic: { uniforms: Tt([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.fog]), vertexShader: Pe.meshbasic_vert, fragmentShader: Pe.meshbasic_frag }, lambert: { uniforms: Tt([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.fog, re.lights, { emissive: { value: new Me(0) } }]), vertexShader: Pe.meshlambert_vert, fragmentShader: Pe.meshlambert_frag }, phong: { uniforms: Tt([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.fog, re.lights, { emissive: { value: new Me(0) }, specular: { value: new Me(1118481) }, shininess: { value: 30 } }]), vertexShader: Pe.meshphong_vert, fragmentShader: Pe.meshphong_frag }, standard: { uniforms: Tt([re.common, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.roughnessmap, re.metalnessmap, re.fog, re.lights, { emissive: { value: new Me(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Pe.meshphysical_vert, fragmentShader: Pe.meshphysical_frag }, toon: { uniforms: Tt([re.common, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.gradientmap, re.fog, re.lights, { emissive: { value: new Me(0) } }]), vertexShader: Pe.meshtoon_vert, fragmentShader: Pe.meshtoon_frag }, matcap: { uniforms: Tt([re.common, re.bumpmap, re.normalmap, re.displacementmap, re.fog, { matcap: { value: null } }]), vertexShader: Pe.meshmatcap_vert, fragmentShader: Pe.meshmatcap_frag }, points: { uniforms: Tt([re.points, re.fog]), vertexShader: Pe.points_vert, fragmentShader: Pe.points_frag }, dashed: { uniforms: Tt([re.common, re.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Pe.linedashed_vert, fragmentShader: Pe.linedashed_frag }, depth: { uniforms: Tt([re.common, re.displacementmap]), vertexShader: Pe.depth_vert, fragmentShader: Pe.depth_frag }, normal: { uniforms: Tt([re.common, re.bumpmap, re.normalmap, re.displacementmap, { opacity: { value: 1 } }]), vertexShader: Pe.meshnormal_vert, fragmentShader: Pe.meshnormal_frag }, sprite: { uniforms: Tt([re.sprite, re.fog]), vertexShader: Pe.sprite_vert, fragmentShader: Pe.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ie }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Pe.background_vert, fragmentShader: Pe.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ie } }, vertexShader: Pe.backgroundCube_vert, fragmentShader: Pe.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Pe.cube_vert, fragmentShader: Pe.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Pe.equirect_vert, fragmentShader: Pe.equirect_frag }, distanceRGBA: { uniforms: Tt([re.common, re.displacementmap, { referencePosition: { value: new C }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Pe.distanceRGBA_vert, fragmentShader: Pe.distanceRGBA_frag }, shadow: { uniforms: Tt([re.lights, re.fog, { color: { value: new Me(0) }, opacity: { value: 1 } }]), vertexShader: Pe.shadow_vert, fragmentShader: Pe.shadow_frag } }; Qt.physical = { uniforms: Tt([Qt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ie }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ie }, clearcoatNormalScale: { value: new xe(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ie }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ie }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ie }, sheen: { value: 0 }, sheenColor: { value: new Me(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ie }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ie }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ie }, transmissionSamplerSize: { value: new xe }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ie }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Me(0) }, specularColor: { value: new Me(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ie }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ie }, anisotropyVector: { value: new xe }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ie } }]), vertexShader: Pe.meshphysical_vert, fragmentShader: Pe.meshphysical_frag }; var Vs = { r: 0, b: 0, g: 0 }, Jn = new on, kp = new Le; function Hp(s, e, t, n, i, r, o) { let a = new Me(0), c = r === !0 ? 0 : 1, l, h, u = null, d = 0, f = null; function g(A) { let M = A.isScene === !0 ? A.background : null; return M && M.isTexture && (M = (A.backgroundBlurriness > 0 ? t : e).get(M)), M } function x(A) { let M = !1, T = g(A); T === null ? p(a, c) : T && T.isColor && (p(T, 1), M = !0); let N = s.xr.getEnvironmentBlendMode(); N === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : N === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (s.autoClear || M) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil) } function m(A, M) { let T = g(M); T && (T.isCubeTexture || T.mapping === Pr) ? (h === void 0 && (h = new bt(new ls(1, 1, 1), new an({ name: "BackgroundCubeMaterial", uniforms: Fi(Qt.backgroundCube.uniforms), vertexShader: Qt.backgroundCube.vertexShader, fragmentShader: Qt.backgroundCube.fragmentShader, side: wt, depthTest: !1, depthWrite: !1, fog: !1 })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function (N, R, w) { this.matrixWorld.copyPosition(w.matrixWorld) }, Object.defineProperty(h.material, "envMap", { get: function () { return this.uniforms.envMap.value } }), i.update(h)), Jn.copy(M.backgroundRotation), Jn.x *= -1, Jn.y *= -1, Jn.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === !1 && (Jn.y *= -1, Jn.z *= -1), h.material.uniforms.envMap.value = T, h.material.uniforms.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = M.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(Jn)), h.material.toneMapped = We.getTransfer(T.colorSpace) !== et, (u !== T || d !== T.version || f !== s.toneMapping) && (h.material.needsUpdate = !0, u = T, d = T.version, f = s.toneMapping), h.layers.enableAll(), A.unshift(h, h.geometry, h.material, 0, 0, null)) : T && T.isTexture && (l === void 0 && (l = new bt(new lr(2, 2), new an({ name: "BackgroundMaterial", uniforms: Fi(Qt.background.uniforms), vertexShader: Qt.background.vertexShader, fragmentShader: Qt.background.fragmentShader, side: sn, depthTest: !1, depthWrite: !1, fog: !1 })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function () { return this.uniforms.t2D.value } }), i.update(l)), l.material.uniforms.t2D.value = T, l.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, l.material.toneMapped = We.getTransfer(T.colorSpace) !== et, T.matrixAutoUpdate === !0 && T.updateMatrix(), l.material.uniforms.uvTransform.value.copy(T.matrix), (u !== T || d !== T.version || f !== s.toneMapping) && (l.material.needsUpdate = !0, u = T, d = T.version, f = s.toneMapping), l.layers.enableAll(), A.unshift(l, l.geometry, l.material, 0, 0, null)) } function p(A, M) { A.getRGB(Vs, Ql(s)), n.buffers.color.setClear(Vs.r, Vs.g, Vs.b, M, o) } return { getClearColor: function () { return a }, setClearColor: function (A, M = 1) { a.set(A), c = M, p(a, c) }, getClearAlpha: function () { return c }, setClearAlpha: function (A) { c = A, p(a, c) }, render: x, addToRenderList: m } } function Vp(s, e) { let t = s.getParameter(s.MAX_VERTEX_ATTRIBS), n = {}, i = d(null), r = i, o = !1; function a(v, B, X, P, W) { let q = !1, J = u(P, X, B); r !== J && (r = J, l(r.object)), q = f(v, P, X, W), q && g(v, P, X, W), W !== null && e.update(W, s.ELEMENT_ARRAY_BUFFER), (q || o) && (o = !1, T(v, B, X, P), W !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get(W).buffer)) } function c() { return s.createVertexArray() } function l(v) { return s.bindVertexArray(v) } function h(v) { return s.deleteVertexArray(v) } function u(v, B, X) { let P = X.wireframe === !0, W = n[v.id]; W === void 0 && (W = {}, n[v.id] = W); let q = W[B.id]; q === void 0 && (q = {}, W[B.id] = q); let J = q[P]; return J === void 0 && (J = d(c()), q[P] = J), J } function d(v) { let B = [], X = [], P = []; for (let W = 0; W < t; W++)B[W] = 0, X[W] = 0, P[W] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: B, enabledAttributes: X, attributeDivisors: P, object: v, attributes: {}, index: null } } function f(v, B, X, P) { let W = r.attributes, q = B.attributes, J = 0, ie = X.getAttributes(); for (let V in ie) if (ie[V].location >= 0) { let j = W[V], de = q[V]; if (de === void 0 && (V === "instanceMatrix" && v.instanceMatrix && (de = v.instanceMatrix), V === "instanceColor" && v.instanceColor && (de = v.instanceColor)), j === void 0 || j.attribute !== de || de && j.data !== de.data) return !0; J++ } return r.attributesNum !== J || r.index !== P } function g(v, B, X, P) { let W = {}, q = B.attributes, J = 0, ie = X.getAttributes(); for (let V in ie) if (ie[V].location >= 0) { let j = q[V]; j === void 0 && (V === "instanceMatrix" && v.instanceMatrix && (j = v.instanceMatrix), V === "instanceColor" && v.instanceColor && (j = v.instanceColor)); let de = {}; de.attribute = j, j && j.data && (de.data = j.data), W[V] = de, J++ } r.attributes = W, r.attributesNum = J, r.index = P } function x() { let v = r.newAttributes; for (let B = 0, X = v.length; B < X; B++)v[B] = 0 } function m(v) { p(v, 0) } function p(v, B) { let X = r.newAttributes, P = r.enabledAttributes, W = r.attributeDivisors; X[v] = 1, P[v] === 0 && (s.enableVertexAttribArray(v), P[v] = 1), W[v] !== B && (s.vertexAttribDivisor(v, B), W[v] = B) } function A() { let v = r.newAttributes, B = r.enabledAttributes; for (let X = 0, P = B.length; X < P; X++)B[X] !== v[X] && (s.disableVertexAttribArray(X), B[X] = 0) } function M(v, B, X, P, W, q, J) { J === !0 ? s.vertexAttribIPointer(v, B, X, W, q) : s.vertexAttribPointer(v, B, X, P, W, q) } function T(v, B, X, P) { x(); let W = P.attributes, q = X.getAttributes(), J = B.defaultAttributeValues; for (let ie in q) { let V = q[ie]; if (V.location >= 0) { let Q = W[ie]; if (Q === void 0 && (ie === "instanceMatrix" && v.instanceMatrix && (Q = v.instanceMatrix), ie === "instanceColor" && v.instanceColor && (Q = v.instanceColor)), Q !== void 0) { let j = Q.normalized, de = Q.itemSize, Fe = e.get(Q); if (Fe === void 0) continue; let Ye = Fe.buffer, G = Fe.type, ee = Fe.bytesPerElement, he = G === s.INT || G === s.UNSIGNED_INT || Q.gpuType === kl; if (Q.isInterleavedBufferAttribute) { let se = Q.data, Be = se.stride, Ne = Q.offset; if (se.isInstancedInterleavedBuffer) { for (let D = 0; D < V.locationSize; D++)p(V.location + D, se.meshPerAttribute); v.isInstancedMesh !== !0 && P._maxInstanceCount === void 0 && (P._maxInstanceCount = se.meshPerAttribute * se.count) } else for (let D = 0; D < V.locationSize; D++)m(V.location + D); s.bindBuffer(s.ARRAY_BUFFER, Ye); for (let D = 0; D < V.locationSize; D++)M(V.location + D, de / V.locationSize, G, j, Be * ee, (Ne + de / V.locationSize * D) * ee, he) } else { if (Q.isInstancedBufferAttribute) { for (let se = 0; se < V.locationSize; se++)p(V.location + se, Q.meshPerAttribute); v.isInstancedMesh !== !0 && P._maxInstanceCount === void 0 && (P._maxInstanceCount = Q.meshPerAttribute * Q.count) } else for (let se = 0; se < V.locationSize; se++)m(V.location + se); s.bindBuffer(s.ARRAY_BUFFER, Ye); for (let se = 0; se < V.locationSize; se++)M(V.location + se, de / V.locationSize, G, j, de * ee, de / V.locationSize * se * ee, he) } } else if (J !== void 0) { let j = J[ie]; if (j !== void 0) switch (j.length) { case 2: s.vertexAttrib2fv(V.location, j); break; case 3: s.vertexAttrib3fv(V.location, j); break; case 4: s.vertexAttrib4fv(V.location, j); break; default: s.vertexAttrib1fv(V.location, j) } } } } A() } function N() { H(); for (let v in n) { let B = n[v]; for (let X in B) { let P = B[X]; for (let W in P) h(P[W].object), delete P[W]; delete B[X] } delete n[v] } } function R(v) { if (n[v.id] === void 0) return; let B = n[v.id]; for (let X in B) { let P = B[X]; for (let W in P) h(P[W].object), delete P[W]; delete B[X] } delete n[v.id] } function w(v) { for (let B in n) { let X = n[B]; if (X[v.id] === void 0) continue; let P = X[v.id]; for (let W in P) h(P[W].object), delete P[W]; delete X[v.id] } } function H() { b(), o = !0, r !== i && (r = i, l(r.object)) } function b() { i.geometry = null, i.program = null, i.wireframe = !1 } return { setup: a, reset: H, resetDefaultState: b, dispose: N, releaseStatesOfGeometry: R, releaseStatesOfProgram: w, initAttributes: x, enableAttribute: m, disableUnusedAttributes: A } } function Gp(s, e, t) { let n; function i(l) { n = l } function r(l, h) { s.drawArrays(n, l, h), t.update(h, n, 1) } function o(l, h, u) { u !== 0 && (s.drawArraysInstanced(n, l, h, u), t.update(h, n, u)) } function a(l, h, u) { if (u === 0) return; let d = e.get("WEBGL_multi_draw"); if (d === null) for (let f = 0; f < u; f++)this.render(l[f], h[f]); else { d.multiDrawArraysWEBGL(n, l, 0, h, 0, u); let f = 0; for (let g = 0; g < u; g++)f += h[g]; t.update(f, n, 1) } } function c(l, h, u, d) { if (u === 0) return; let f = e.get("WEBGL_multi_draw"); if (f === null) for (let g = 0; g < l.length; g++)o(l[g], h[g], d[g]); else { f.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, d, 0, u); let g = 0; for (let x = 0; x < u; x++)g += h[x]; for (let x = 0; x < d.length; x++)t.update(g, n, d[x]) } } this.setMode = i, this.render = r, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = c } function Wp(s, e, t, n) { let i; function r() { if (i !== void 0) return i; if (e.has("EXT_texture_filter_anisotropic") === !0) { let R = e.get("EXT_texture_filter_anisotropic"); i = s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else i = 0; return i } function o(R) { return !(R !== Jt && n.convert(R) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT)) } function a(R) { let w = R === Ir && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float")); return !(R !== On && n.convert(R) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) && R !== tn && !w) } function c(R) { if (R === "highp") { if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0) return "highp"; R = "mediump" } return R === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp" } let l = t.precision !== void 0 ? t.precision : "highp", h = c(l); h !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", h, "instead."), l = h); let u = t.logarithmicDepthBuffer === !0, d = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), f = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = s.getParameter(s.MAX_TEXTURE_SIZE), x = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), m = s.getParameter(s.MAX_VERTEX_ATTRIBS), p = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), A = s.getParameter(s.MAX_VARYING_VECTORS), M = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), T = f > 0, N = s.getParameter(s.MAX_SAMPLES); return { isWebGL2: !0, getMaxAnisotropy: r, getMaxPrecision: c, textureFormatReadable: o, textureTypeReadable: a, precision: l, logarithmicDepthBuffer: u, maxTextures: d, maxVertexTextures: f, maxTextureSize: g, maxCubemapSize: x, maxAttributes: m, maxVertexUniforms: p, maxVaryings: A, maxFragmentUniforms: M, vertexTextures: T, maxSamples: N } } function Xp(s) { let e = this, t = null, n = 0, i = !1, r = !1, o = new qt, a = new Ie, c = { value: null, needsUpdate: !1 }; this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function (u, d) { let f = u.length !== 0 || d || n !== 0 || i; return i = d, n = u.length, f }, this.beginShadows = function () { r = !0, h(null) }, this.endShadows = function () { r = !1 }, this.setGlobalState = function (u, d) { t = h(u, d, 0) }, this.setState = function (u, d, f) { let g = u.clippingPlanes, x = u.clipIntersection, m = u.clipShadows, p = s.get(u); if (!i || g === null || g.length === 0 || r && !m) r ? h(null) : l(); else { let A = r ? 0 : n, M = A * 4, T = p.clippingState || null; c.value = T, T = h(g, d, M, f); for (let N = 0; N !== M; ++N)T[N] = t[N]; p.clippingState = T, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += A } }; function l() { c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0 } function h(u, d, f, g) { let x = u !== null ? u.length : 0, m = null; if (x !== 0) { if (m = c.value, g !== !0 || m === null) { let p = f + x * 4, A = d.matrixWorldInverse; a.getNormalMatrix(A), (m === null || m.length < p) && (m = new Float32Array(p)); for (let M = 0, T = f; M !== x; ++M, T += 4)o.copy(u[M]).applyMatrix4(A, a), o.normal.toArray(m, T), m[T + 3] = o.constant } c.value = m, c.needsUpdate = !0 } return e.numPlanes = x, e.numIntersection = 0, m } } function Yp(s) { let e = new WeakMap; function t(o, a) { return a === Ro ? o.mapping = Li : a === Co && (o.mapping = Ni), o } function n(o) { if (o && o.isTexture) { let a = o.mapping; if (a === Ro || a === Co) if (e.has(o)) { let c = e.get(o).texture; return t(c, o.mapping) } else { let c = o.image; if (c && c.height > 0) { let l = new Uo(c.height); return l.fromEquirectangularTexture(s, o), e.set(o, l), o.addEventListener("dispose", i), t(l.texture, o.mapping) } else return null } } return o } function i(o) { let a = o.target; a.removeEventListener("dispose", i); let c = e.get(a); c !== void 0 && (e.delete(a), c.dispose()) } function r() { e = new WeakMap } return { get: n, dispose: r } } var Bi = class extends ar { constructor(e = -1, t = 1, n = 1, i = -1, r = .1, o = 2e3) { super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this } setViewOffset(e, t, n, i, r, o) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2, r = n - e, o = n + e, a = i + t, c = i - t; if (this.view !== null && this.view.enabled) { let l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom; r += l * this.view.offsetX, o = r + l * this.view.width, a -= h * this.view.offsetY, c = a - h * this.view.height } this.projectionMatrix.makeOrthographic(r, o, a, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { let t = super.toJSON(e); return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t } }, wi = 4, Jc = [.125, .215, .35, .446, .526, .582], ei = 20, mo = new Bi, $c = new Me, go = null, _o = 0, xo = 0, yo = !1, jn = (1 + Math.sqrt(5)) / 2, bi = 1 / jn, jc = [new C(-jn, bi, 0), new C(jn, bi, 0), new C(-bi, 0, jn), new C(bi, 0, jn), new C(0, jn, -bi), new C(0, jn, bi), new C(-1, 1, -1), new C(1, 1, -1), new C(-1, 1, 1), new C(1, 1, 1)], hr = class { constructor(e) { this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial) } fromScene(e, t = 0, n = .1, i = 100) { go = this._renderer.getRenderTarget(), _o = this._renderer.getActiveCubeFace(), xo = this._renderer.getActiveMipmapLevel(), yo = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256); let r = this._allocateTargets(); return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r } fromEquirectangular(e, t = null) { return this._fromTexture(e, t) } fromCubemap(e, t = null) { return this._fromTexture(e, t) } compileCubemapShader() { this._cubemapMaterial === null && (this._cubemapMaterial = tl(), this._compileMaterial(this._cubemapMaterial)) } compileEquirectangularShader() { this._equirectMaterial === null && (this._equirectMaterial = el(), this._compileMaterial(this._equirectMaterial)) } dispose() { this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose() } _setSize(e) { this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax) } _dispose() { this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(); for (let e = 0; e < this._lodPlanes.length; e++)this._lodPlanes[e].dispose() } _cleanup(e) { this._renderer.setRenderTarget(go, _o, xo), this._renderer.xr.enabled = yo, e.scissorTest = !1, Gs(e, 0, 0, e.width, e.height) } _fromTexture(e, t) { e.mapping === Li || e.mapping === Ni ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), go = this._renderer.getRenderTarget(), _o = this._renderer.getActiveCubeFace(), xo = this._renderer.getActiveMipmapLevel(), yo = this._renderer.xr.enabled, this._renderer.xr.enabled = !1; let n = t || this._allocateTargets(); return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n } _allocateTargets() { let e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: Et, minFilter: Et, generateMipmaps: !1, type: Ir, format: Jt, colorSpace: ht, depthBuffer: !1 }, i = Qc(e, t, n); if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) { this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Qc(e, t, n); let { _lodMax: r } = this; ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = qp(r)), this._blurMaterial = Zp(r, e, t) } return i } _compileMaterial(e) { let t = new bt(this._lodPlanes[0], e); this._renderer.compile(t, mo) } _sceneToCubeUV(e, t, n, i) { let a = new ut(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping; h.getClearColor($c), h.toneMapping = Un, h.autoClear = !1; let f = new Ut({ name: "PMREM.Background", side: wt, depthWrite: !1, depthTest: !1 }), g = new bt(new ls, f), x = !1, m = e.background; m ? m.isColor && (f.color.copy(m), e.background = null, x = !0) : (f.color.copy($c), x = !0); for (let p = 0; p < 6; p++) { let A = p % 3; A === 0 ? (a.up.set(0, c[p], 0), a.lookAt(l[p], 0, 0)) : A === 1 ? (a.up.set(0, 0, c[p]), a.lookAt(0, l[p], 0)) : (a.up.set(0, c[p], 0), a.lookAt(0, 0, l[p])); let M = this._cubeSize; Gs(i, A * M, p > 2 ? M : 0, M, M), h.setRenderTarget(i), x && h.render(g, a), h.render(e, a) } g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = m } _textureToCubeUV(e, t) { let n = this._renderer, i = e.mapping === Li || e.mapping === Ni; i ? (this._cubemapMaterial === null && (this._cubemapMaterial = tl()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = el()); let r = i ? this._cubemapMaterial : this._equirectMaterial, o = new bt(this._lodPlanes[0], r), a = r.uniforms; a.envMap.value = e; let c = this._cubeSize; Gs(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, mo) } _applyPMREM(e) { let t = this._renderer, n = t.autoClear; t.autoClear = !1; let i = this._lodPlanes.length; for (let r = 1; r < i; r++) { let o = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), a = jc[(i - r - 1) % jc.length]; this._blur(e, r - 1, r, o, a) } t.autoClear = n } _blur(e, t, n, i, r) { let o = this._pingPongRenderTarget; this._halfBlur(e, o, t, n, i, "latitudinal", r), this._halfBlur(o, e, n, n, i, "longitudinal", r) } _halfBlur(e, t, n, i, r, o, a) { let c = this._renderer, l = this._blurMaterial; o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); let h = 3, u = new bt(this._lodPlanes[i], l), d = l.uniforms, f = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * ei - 1), x = r / g, m = isFinite(r) ? 1 + Math.floor(h * x) : ei; m > ei && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ei}`); let p = [], A = 0; for (let w = 0; w < ei; ++w) { let H = w / x, b = Math.exp(-H * H / 2); p.push(b), w === 0 ? A += b : w < m && (A += 2 * b) } for (let w = 0; w < p.length; w++)p[w] = p[w] / A; d.envMap.value = e.texture, d.samples.value = m, d.weights.value = p, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a); let { _lodMax: M } = this; d.dTheta.value = g, d.mipInt.value = M - n; let T = this._sizeLods[i], N = 3 * T * (i > M - wi ? i - M + wi : 0), R = 4 * (this._cubeSize - T); Gs(t, N, R, 3 * T, 2 * T), c.setRenderTarget(t), c.render(u, mo) } }; function qp(s) { let e = [], t = [], n = [], i = s, r = s - wi + 1 + Jc.length; for (let o = 0; o < r; o++) { let a = Math.pow(2, i); t.push(a); let c = 1 / a; o > s - wi ? c = Jc[o - s + wi - 1] : o === 0 && (c = 0), n.push(c); let l = 1 / (a - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, g = 6, x = 3, m = 2, p = 1, A = new Float32Array(x * g * f), M = new Float32Array(m * g * f), T = new Float32Array(p * g * f); for (let R = 0; R < f; R++) { let w = R % 3 * 2 / 3 - 1, H = R > 2 ? 0 : -1, b = [w, H, 0, w + 2 / 3, H, 0, w + 2 / 3, H + 1, 0, w, H, 0, w + 2 / 3, H + 1, 0, w, H + 1, 0]; A.set(b, x * g * R), M.set(d, m * g * R); let v = [R, R, R, R, R, R]; T.set(v, p * g * R) } let N = new Ct; N.setAttribute("position", new st(A, x)), N.setAttribute("uv", new st(M, m)), N.setAttribute("faceIndex", new st(T, p)), e.push(N), i > wi && i-- } return { lodPlanes: e, sizeLods: t, sigmas: n } } function Qc(s, e, t) { let n = new vn(s, e, t); return n.texture.mapping = Pr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n } function Gs(s, e, t, n, i) { s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i) } function Zp(s, e, t) {
		let n = new Float32Array(ei), i = new C(0, 1, 0); return new an({
			name: "SphericalGaussianBlur", defines: { n: ei, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${s}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: la(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: Dn, depthTest: !1, depthWrite: !1
		})
	} function el() {
		return new an({
			name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: la(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: Dn, depthTest: !1, depthWrite: !1
		})
	} function tl() {
		return new an({
			name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: la(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Dn, depthTest: !1, depthWrite: !1
		})
	} function la() {
		return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`} function Kp(s) { let e = new WeakMap, t = null; function n(a) { if (a && a.isTexture) { let c = a.mapping, l = c === Ro || c === Co, h = c === Li || c === Ni; if (l || h) { let u = e.get(a), d = u !== void 0 ? u.texture.pmremVersion : 0; if (a.isRenderTargetTexture && a.pmremVersion !== d) return t === null && (t = new hr(s)), u = l ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), u.texture.pmremVersion = a.pmremVersion, e.set(a, u), u.texture; if (u !== void 0) return u.texture; { let f = a.image; return l && f && f.height > 0 || h && f && i(f) ? (t === null && (t = new hr(s)), u = l ? t.fromEquirectangular(a) : t.fromCubemap(a), u.texture.pmremVersion = a.pmremVersion, e.set(a, u), a.addEventListener("dispose", r), u.texture) : null } } } return a } function i(a) { let c = 0, l = 6; for (let h = 0; h < l; h++)a[h] !== void 0 && c++; return c === l } function r(a) { let c = a.target; c.removeEventListener("dispose", r); let l = e.get(c); l !== void 0 && (e.delete(c), l.dispose()) } function o() { e = new WeakMap, t !== null && (t.dispose(), t = null) } return { get: n, dispose: o } } function Jp(s) { let e = {}; function t(n) { if (e[n] !== void 0) return e[n]; let i; switch (n) { case "WEBGL_depth_texture": i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture"); break; case "EXT_texture_filter_anisotropic": i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break; case "WEBGL_compressed_texture_s3tc": i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break; case "WEBGL_compressed_texture_pvrtc": i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break; default: i = s.getExtension(n) }return e[n] = i, i } return { has: function (n) { return t(n) !== null }, init: function () { t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent") }, get: function (n) { let i = t(n); return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i } } } function $p(s, e, t, n) { let i = {}, r = new WeakMap; function o(u) { let d = u.target; d.index !== null && e.remove(d.index); for (let g in d.attributes) e.remove(d.attributes[g]); for (let g in d.morphAttributes) { let x = d.morphAttributes[g]; for (let m = 0, p = x.length; m < p; m++)e.remove(x[m]) } d.removeEventListener("dispose", o), delete i[d.id]; let f = r.get(d); f && (e.remove(f), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries-- } function a(u, d) { return i[d.id] === !0 || (d.addEventListener("dispose", o), i[d.id] = !0, t.memory.geometries++), d } function c(u) { let d = u.attributes; for (let g in d) e.update(d[g], s.ARRAY_BUFFER); let f = u.morphAttributes; for (let g in f) { let x = f[g]; for (let m = 0, p = x.length; m < p; m++)e.update(x[m], s.ARRAY_BUFFER) } } function l(u) { let d = [], f = u.index, g = u.attributes.position, x = 0; if (f !== null) { let A = f.array; x = f.version; for (let M = 0, T = A.length; M < T; M += 3) { let N = A[M + 0], R = A[M + 1], w = A[M + 2]; d.push(N, R, R, w, w, N) } } else if (g !== void 0) { let A = g.array; x = g.version; for (let M = 0, T = A.length / 3 - 1; M < T; M += 3) { let N = M + 0, R = M + 1, w = M + 2; d.push(N, R, R, w, w, N) } } else return; let m = new (Jl(d) ? or : rr)(d, 1); m.version = x; let p = r.get(u); p && e.remove(p), r.set(u, m) } function h(u) { let d = r.get(u); if (d) { let f = u.index; f !== null && d.version < f.version && l(u) } else l(u); return r.get(u) } return { get: a, update: c, getWireframeAttribute: h } } function jp(s, e, t) { let n; function i(d) { n = d } let r, o; function a(d) { r = d.type, o = d.bytesPerElement } function c(d, f) { s.drawElements(n, f, r, d * o), t.update(f, n, 1) } function l(d, f, g) { g !== 0 && (s.drawElementsInstanced(n, f, r, d * o, g), t.update(f, n, g)) } function h(d, f, g) { if (g === 0) return; let x = e.get("WEBGL_multi_draw"); if (x === null) for (let m = 0; m < g; m++)this.render(d[m] / o, f[m]); else { x.multiDrawElementsWEBGL(n, f, 0, r, d, 0, g); let m = 0; for (let p = 0; p < g; p++)m += f[p]; t.update(m, n, 1) } } function u(d, f, g, x) { if (g === 0) return; let m = e.get("WEBGL_multi_draw"); if (m === null) for (let p = 0; p < d.length; p++)l(d[p] / o, f[p], x[p]); else { m.multiDrawElementsInstancedWEBGL(n, f, 0, r, d, 0, x, 0, g); let p = 0; for (let A = 0; A < g; A++)p += f[A]; for (let A = 0; A < x.length; A++)t.update(p, n, x[A]) } } this.setMode = i, this.setIndex = a, this.render = c, this.renderInstances = l, this.renderMultiDraw = h, this.renderMultiDrawInstances = u } function Qp(s) { let e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; function n(r, o, a) { switch (t.calls++, o) { case s.TRIANGLES: t.triangles += a * (r / 3); break; case s.LINES: t.lines += a * (r / 2); break; case s.LINE_STRIP: t.lines += a * (r - 1); break; case s.LINE_LOOP: t.lines += a * r; break; case s.POINTS: t.points += a * r; break; default: console.error("THREE.WebGLInfo: Unknown draw mode:", o); break } } function i() { t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0 } return { memory: e, render: t, programs: null, autoReset: !0, reset: i, update: n } } function em(s, e, t) { let n = new WeakMap, i = new $e; function r(o, a, c) { let l = o.morphTargetInfluences, h = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, u = h !== void 0 ? h.length : 0, d = n.get(a); if (d === void 0 || d.count !== u) { let b = function () { w.dispose(), n.delete(a), a.removeEventListener("dispose", b) }; d !== void 0 && d.texture.dispose(); let f = a.morphAttributes.position !== void 0, g = a.morphAttributes.normal !== void 0, x = a.morphAttributes.color !== void 0, m = a.morphAttributes.position || [], p = a.morphAttributes.normal || [], A = a.morphAttributes.color || [], M = 0; f === !0 && (M = 1), g === !0 && (M = 2), x === !0 && (M = 3); let T = a.attributes.position.count * M, N = 1; T > e.maxTextureSize && (N = Math.ceil(T / e.maxTextureSize), T = e.maxTextureSize); let R = new Float32Array(T * N * 4 * u), w = new ir(R, T, N, u); w.type = tn, w.needsUpdate = !0; let H = M * 4; for (let v = 0; v < u; v++) { let B = m[v], X = p[v], P = A[v], W = T * N * 4 * v; for (let q = 0; q < B.count; q++) { let J = q * H; f === !0 && (i.fromBufferAttribute(B, q), R[W + J + 0] = i.x, R[W + J + 1] = i.y, R[W + J + 2] = i.z, R[W + J + 3] = 0), g === !0 && (i.fromBufferAttribute(X, q), R[W + J + 4] = i.x, R[W + J + 5] = i.y, R[W + J + 6] = i.z, R[W + J + 7] = 0), x === !0 && (i.fromBufferAttribute(P, q), R[W + J + 8] = i.x, R[W + J + 9] = i.y, R[W + J + 10] = i.z, R[W + J + 11] = P.itemSize === 4 ? i.w : 1) } } d = { count: u, texture: w, size: new xe(T, N) }, n.set(a, d), a.addEventListener("dispose", b) } if (o.isInstancedMesh === !0 && o.morphTexture !== null) c.getUniforms().setValue(s, "morphTexture", o.morphTexture, t); else { let f = 0; for (let x = 0; x < l.length; x++)f += l[x]; let g = a.morphTargetsRelative ? 1 : 1 - f; c.getUniforms().setValue(s, "morphTargetBaseInfluence", g), c.getUniforms().setValue(s, "morphTargetInfluences", l) } c.getUniforms().setValue(s, "morphTargetsTexture", d.texture, t), c.getUniforms().setValue(s, "morphTargetsTextureSize", d.size) } return { update: r } } function tm(s, e, t, n) { let i = new WeakMap; function r(c) { let l = n.render.frame, h = c.geometry, u = e.get(c, h); if (i.get(u) !== l && (e.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), i.get(c) !== l && (t.update(c.instanceMatrix, s.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, s.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) { let d = c.skeleton; i.get(d) !== l && (d.update(), i.set(d, l)) } return u } function o() { i = new WeakMap } function a(c) { let l = c.target; l.removeEventListener("dispose", a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor) } return { update: r, dispose: o } } var ur = class extends _t { constructor(e, t, n, i, r, o, a, c, l, h) { if (h = h !== void 0 ? h : Ci, h !== Ci && h !== as) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"); n === void 0 && h === Ci && (n = Di), n === void 0 && h === as && (n = ys), super(null, i, r, o, a, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : St, this.minFilter = c !== void 0 ? c : St, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null } copy(e) { return super.copy(e), this.compareFunction = e.compareFunction, this } toJSON(e) { let t = super.toJSON(e); return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t } }, th = new _t, nh = new ur(1, 1); nh.compareFunction = Kl; var ih = new ir, sh = new No, rh = new cr, nl = [], il = [], sl = new Float32Array(16), rl = new Float32Array(9), ol = new Float32Array(4); function Vi(s, e, t) { let n = s[0]; if (n <= 0 || n > 0) return s; let i = e * t, r = nl[i]; if (r === void 0 && (r = new Float32Array(i), nl[i] = r), e !== 0) { n.toArray(r, 0); for (let o = 1, a = 0; o !== e; ++o)a += t, s[o].toArray(r, a) } return r } function dt(s, e) { if (s.length !== e.length) return !1; for (let t = 0, n = s.length; t < n; t++)if (s[t] !== e[t]) return !1; return !0 } function ft(s, e) { for (let t = 0, n = e.length; t < n; t++)s[t] = e[t] } function Ur(s, e) { let t = il[e]; t === void 0 && (t = new Int32Array(e), il[e] = t); for (let n = 0; n !== e; ++n)t[n] = s.allocateTextureUnit(); return t } function nm(s, e) { let t = this.cache; t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e) } function im(s, e) { let t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (dt(t, e)) return; s.uniform2fv(this.addr, e), ft(t, e) } } function sm(s, e) { let t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b); else { if (dt(t, e)) return; s.uniform3fv(this.addr, e), ft(t, e) } } function rm(s, e) { let t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (dt(t, e)) return; s.uniform4fv(this.addr, e), ft(t, e) } } function om(s, e) { let t = this.cache, n = e.elements; if (n === void 0) { if (dt(t, e)) return; s.uniformMatrix2fv(this.addr, !1, e), ft(t, e) } else { if (dt(t, n)) return; ol.set(n), s.uniformMatrix2fv(this.addr, !1, ol), ft(t, n) } } function am(s, e) { let t = this.cache, n = e.elements; if (n === void 0) { if (dt(t, e)) return; s.uniformMatrix3fv(this.addr, !1, e), ft(t, e) } else { if (dt(t, n)) return; rl.set(n), s.uniformMatrix3fv(this.addr, !1, rl), ft(t, n) } } function cm(s, e) { let t = this.cache, n = e.elements; if (n === void 0) { if (dt(t, e)) return; s.uniformMatrix4fv(this.addr, !1, e), ft(t, e) } else { if (dt(t, n)) return; sl.set(n), s.uniformMatrix4fv(this.addr, !1, sl), ft(t, n) } } function lm(s, e) { let t = this.cache; t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e) } function hm(s, e) { let t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (dt(t, e)) return; s.uniform2iv(this.addr, e), ft(t, e) } } function um(s, e) { let t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else { if (dt(t, e)) return; s.uniform3iv(this.addr, e), ft(t, e) } } function dm(s, e) { let t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (dt(t, e)) return; s.uniform4iv(this.addr, e), ft(t, e) } } function fm(s, e) { let t = this.cache; t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e) } function pm(s, e) { let t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (dt(t, e)) return; s.uniform2uiv(this.addr, e), ft(t, e) } } function mm(s, e) { let t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else { if (dt(t, e)) return; s.uniform3uiv(this.addr, e), ft(t, e) } } function gm(s, e) { let t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (dt(t, e)) return; s.uniform4uiv(this.addr, e), ft(t, e) } } function _m(s, e, t) { let n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i); let r = this.type === s.SAMPLER_2D_SHADOW ? nh : th; t.setTexture2D(e || r, i) } function xm(s, e, t) { let n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || sh, i) } function ym(s, e, t) { let n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || rh, i) } function vm(s, e, t) { let n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || ih, i) } function Mm(s) { switch (s) { case 5126: return nm; case 35664: return im; case 35665: return sm; case 35666: return rm; case 35674: return om; case 35675: return am; case 35676: return cm; case 5124: case 35670: return lm; case 35667: case 35671: return hm; case 35668: case 35672: return um; case 35669: case 35673: return dm; case 5125: return fm; case 36294: return pm; case 36295: return mm; case 36296: return gm; case 35678: case 36198: case 36298: case 36306: case 35682: return _m; case 35679: case 36299: case 36307: return xm; case 35680: case 36300: case 36308: case 36293: return ym; case 36289: case 36303: case 36311: case 36292: return vm } } function Sm(s, e) { s.uniform1fv(this.addr, e) } function bm(s, e) { let t = Vi(e, this.size, 2); s.uniform2fv(this.addr, t) } function Am(s, e) { let t = Vi(e, this.size, 3); s.uniform3fv(this.addr, t) } function Tm(s, e) { let t = Vi(e, this.size, 4); s.uniform4fv(this.addr, t) } function Em(s, e) { let t = Vi(e, this.size, 4); s.uniformMatrix2fv(this.addr, !1, t) } function wm(s, e) { let t = Vi(e, this.size, 9); s.uniformMatrix3fv(this.addr, !1, t) } function Rm(s, e) { let t = Vi(e, this.size, 16); s.uniformMatrix4fv(this.addr, !1, t) } function Cm(s, e) { s.uniform1iv(this.addr, e) } function Pm(s, e) { s.uniform2iv(this.addr, e) } function Im(s, e) { s.uniform3iv(this.addr, e) } function Lm(s, e) { s.uniform4iv(this.addr, e) } function Nm(s, e) { s.uniform1uiv(this.addr, e) } function Dm(s, e) { s.uniform2uiv(this.addr, e) } function Um(s, e) { s.uniform3uiv(this.addr, e) } function Om(s, e) { s.uniform4uiv(this.addr, e) } function Fm(s, e, t) { let n = this.cache, i = e.length, r = Ur(t, i); dt(n, r) || (s.uniform1iv(this.addr, r), ft(n, r)); for (let o = 0; o !== i; ++o)t.setTexture2D(e[o] || th, r[o]) } function Bm(s, e, t) { let n = this.cache, i = e.length, r = Ur(t, i); dt(n, r) || (s.uniform1iv(this.addr, r), ft(n, r)); for (let o = 0; o !== i; ++o)t.setTexture3D(e[o] || sh, r[o]) } function zm(s, e, t) { let n = this.cache, i = e.length, r = Ur(t, i); dt(n, r) || (s.uniform1iv(this.addr, r), ft(n, r)); for (let o = 0; o !== i; ++o)t.setTextureCube(e[o] || rh, r[o]) } function km(s, e, t) { let n = this.cache, i = e.length, r = Ur(t, i); dt(n, r) || (s.uniform1iv(this.addr, r), ft(n, r)); for (let o = 0; o !== i; ++o)t.setTexture2DArray(e[o] || ih, r[o]) } function Hm(s) { switch (s) { case 5126: return Sm; case 35664: return bm; case 35665: return Am; case 35666: return Tm; case 35674: return Em; case 35675: return wm; case 35676: return Rm; case 5124: case 35670: return Cm; case 35667: case 35671: return Pm; case 35668: case 35672: return Im; case 35669: case 35673: return Lm; case 5125: return Nm; case 36294: return Dm; case 36295: return Um; case 36296: return Om; case 35678: case 36198: case 36298: case 36306: case 35682: return Fm; case 35679: case 36299: case 36307: return Bm; case 35680: case 36300: case 36308: case 36293: return zm; case 36289: case 36303: case 36311: case 36292: return km } } var Oo = class { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Mm(t.type) } }, Fo = class { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Hm(t.type) } }, Bo = class { constructor(e) { this.id = e, this.seq = [], this.map = {} } setValue(e, t, n) { let i = this.seq; for (let r = 0, o = i.length; r !== o; ++r) { let a = i[r]; a.setValue(e, t[a.id], n) } } }, vo = /(\w+)(\])?(\[|\.)?/g; function al(s, e) { s.seq.push(e), s.map[e.id] = e } function Vm(s, e, t) { let n = s.name, i = n.length; for (vo.lastIndex = 0; ;) { let r = vo.exec(n), o = vo.lastIndex, a = r[1], c = r[2] === "]", l = r[3]; if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === i) { al(t, l === void 0 ? new Oo(a, s, e) : new Fo(a, s, e)); break } else { let u = t.map[a]; u === void 0 && (u = new Bo(a), al(t, u)), t = u } } } var Ii = class { constructor(e, t) { this.seq = [], this.map = {}; let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS); for (let i = 0; i < n; ++i) { let r = e.getActiveUniform(t, i), o = e.getUniformLocation(t, r.name); Vm(r, o, this) } } setValue(e, t, n, i) { let r = this.map[t]; r !== void 0 && r.setValue(e, n, i) } setOptional(e, t, n) { let i = t[n]; i !== void 0 && this.setValue(e, n, i) } static upload(e, t, n, i) { for (let r = 0, o = t.length; r !== o; ++r) { let a = t[r], c = n[a.id]; c.needsUpdate !== !1 && a.setValue(e, c.value, i) } } static seqWithValue(e, t) { let n = []; for (let i = 0, r = e.length; i !== r; ++i) { let o = e[i]; o.id in t && n.push(o) } return n } }; function cl(s, e, t) { let n = s.createShader(e); return s.shaderSource(n, t), s.compileShader(n), n } var Gm = 37297, Wm = 0; function Xm(s, e) {
		let t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length); for (let o = i; o < r; o++) { let a = o + 1; n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`) } return n.join(`
`)
	} function Ym(s) { let e = We.getPrimaries(We.workingColorSpace), t = We.getPrimaries(s), n; switch (e === t ? n = "" : e === er && t === Qs ? n = "LinearDisplayP3ToLinearSRGB" : e === Qs && t === er && (n = "LinearSRGBToLinearDisplayP3"), s) { case ht: case Nr: return [n, "LinearTransferOETF"]; case ot: case aa: return [n, "sRGBTransferOETF"]; default: return console.warn("THREE.WebGLProgram: Unsupported color space:", s), [n, "LinearTransferOETF"] } } function ll(s, e, t) {
		let n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim(); if (n && i === "") return ""; let r = /ERROR: 0:(\d+)/.exec(i); if (r) {
			let o = parseInt(r[1]); return t.toUpperCase() + `

`+ i + `

`+ Xm(s.getShaderSource(e), o)
		} else return i
	} function qm(s, e) { let t = Ym(e); return `vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }` } function Zm(s, e) { let t; switch (e) { case Kh: t = "Linear"; break; case Jh: t = "Reinhard"; break; case $h: t = "OptimizedCineon"; break; case jh: t = "ACESFilmic"; break; case eu: t = "AgX"; break; case tu: t = "Neutral"; break; case Qh: t = "Custom"; break; default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear" }return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }" } function Km(s) {
		return [s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(ts).join(`
`)
	} function Jm(s) {
		let e = []; for (let t in s) { let n = s[t]; n !== !1 && e.push("#define " + t + " " + n) } return e.join(`
`)
	} function $m(s, e) { let t = {}, n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES); for (let i = 0; i < n; i++) { let r = s.getActiveAttrib(e, i), o = r.name, a = 1; r.type === s.FLOAT_MAT2 && (a = 2), r.type === s.FLOAT_MAT3 && (a = 3), r.type === s.FLOAT_MAT4 && (a = 4), t[o] = { type: r.type, location: s.getAttribLocation(e, o), locationSize: a } } return t } function ts(s) { return s !== "" } function hl(s, e) { let t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps; return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows) } function ul(s, e) { return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) } var jm = /^[ \t]*#include +<([\w\d./]+)>/gm; function zo(s) { return s.replace(jm, eg) } var Qm = new Map; function eg(s, e) { let t = Pe[e]; if (t === void 0) { let n = Qm.get(e); if (n !== void 0) t = Pe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n); else throw new Error("Can not resolve #include <" + e + ">") } return zo(t) } var tg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g; function dl(s) { return s.replace(tg, ng) } function ng(s, e, t, n) { let i = ""; for (let r = parseInt(e); r < parseInt(t); r++)i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r); return i } function fl(s) {
		let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`; return s.precision === "highp" ? e += `
#define HIGH_PRECISION`: s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION`: s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e
	} function ig(s) { let e = "SHADOWMAP_TYPE_BASIC"; return s.shadowMapType === Ol ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === Mh ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === _n && (e = "SHADOWMAP_TYPE_VSM"), e } function sg(s) { let e = "ENVMAP_TYPE_CUBE"; if (s.envMap) switch (s.envMapMode) { case Li: case Ni: e = "ENVMAP_TYPE_CUBE"; break; case Pr: e = "ENVMAP_TYPE_CUBE_UV"; break }return e } function rg(s) { let e = "ENVMAP_MODE_REFLECTION"; if (s.envMap) switch (s.envMapMode) { case Ni: e = "ENVMAP_MODE_REFRACTION"; break }return e } function og(s) { let e = "ENVMAP_BLENDING_NONE"; if (s.envMap) switch (s.combine) { case Fl: e = "ENVMAP_BLENDING_MULTIPLY"; break; case qh: e = "ENVMAP_BLENDING_MIX"; break; case Zh: e = "ENVMAP_BLENDING_ADD"; break }return e } function ag(s) { let e = s.envMapCubeUVHeight; if (e === null) return null; let t = Math.log2(e) - 2, n = 1 / e; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t } } function cg(s, e, t, n) {
		let i = s.getContext(), r = t.defines, o = t.vertexShader, a = t.fragmentShader, c = ig(t), l = sg(t), h = rg(t), u = og(t), d = ag(t), f = Km(t), g = Jm(r), x = i.createProgram(), m, p, A = t.glslVersion ? "#version " + t.glslVersion + `
`: ""; t.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(ts).join(`
`), m.length > 0 && (m += `
`), p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(ts).join(`
`), p.length > 0 && (p += `
`)) : (m = [fl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(ts).join(`
`), p = [fl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + l : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Un ? "#define TONE_MAPPING" : "", t.toneMapping !== Un ? Pe.tonemapping_pars_fragment : "", t.toneMapping !== Un ? Zm("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Pe.colorspace_pars_fragment, qm("linearToOutputTexel", t.outputColorSpace), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(ts).join(`
`)), o = zo(o), o = hl(o, t), o = ul(o, t), a = zo(a), a = hl(a, t), a = ul(a, t), o = dl(o), a = dl(a), t.isRawShaderMaterial !== !0 && (A = `#version 300 es
`, m = [f, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
`+ m, p = ["#define varying in", t.glslVersion === Cc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Cc ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
`+ p); let M = A + m + o, T = A + p + a, N = cl(i, i.VERTEX_SHADER, M), R = cl(i, i.FRAGMENT_SHADER, T); i.attachShader(x, N), i.attachShader(x, R), t.index0AttributeName !== void 0 ? i.bindAttribLocation(x, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(x, 0, "position"), i.linkProgram(x); function w(B) {
			if (s.debug.checkShaderErrors) {
				let X = i.getProgramInfoLog(x).trim(), P = i.getShaderInfoLog(N).trim(), W = i.getShaderInfoLog(R).trim(), q = !0, J = !0; if (i.getProgramParameter(x, i.LINK_STATUS) === !1) if (q = !1, typeof s.debug.onShaderError == "function") s.debug.onShaderError(i, x, N, R); else {
					let ie = ll(i, N, "vertex"), V = ll(i, R, "fragment"); console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(x, i.VALIDATE_STATUS) + `

Material Name: `+ B.name + `
Material Type: `+ B.type + `

Program Info Log: `+ X + `
`+ ie + `
`+ V)
				} else X !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", X) : (P === "" || W === "") && (J = !1); J && (B.diagnostics = { runnable: q, programLog: X, vertexShader: { log: P, prefix: m }, fragmentShader: { log: W, prefix: p } })
			} i.deleteShader(N), i.deleteShader(R), H = new Ii(i, x), b = $m(i, x)
		} let H; this.getUniforms = function () { return H === void 0 && w(this), H }; let b; this.getAttributes = function () { return b === void 0 && w(this), b }; let v = t.rendererExtensionParallelShaderCompile === !1; return this.isReady = function () { return v === !1 && (v = i.getProgramParameter(x, Gm)), v }, this.destroy = function () { n.releaseStatesOfProgram(this), i.deleteProgram(x), this.program = void 0 }, this.type = t.shaderType, this.name = t.shaderName, this.id = Wm++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = N, this.fragmentShader = R, this
	} var lg = 0, ko = class { constructor() { this.shaderCache = new Map, this.materialCache = new Map } update(e) { let t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e); return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this } remove(e) { let t = this.materialCache.get(e); for (let n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code); return this.materialCache.delete(e), this } getVertexShaderID(e) { return this._getShaderStage(e.vertexShader).id } getFragmentShaderID(e) { return this._getShaderStage(e.fragmentShader).id } dispose() { this.shaderCache.clear(), this.materialCache.clear() } _getShaderCacheForMaterial(e) { let t = this.materialCache, n = t.get(e); return n === void 0 && (n = new Set, t.set(e, n)), n } _getShaderStage(e) { let t = this.shaderCache, n = t.get(e); return n === void 0 && (n = new Ho(e), t.set(e, n)), n } }, Ho = class { constructor(e) { this.id = lg++, this.code = e, this.usedTimes = 0 } }; function hg(s, e, t, n, i, r, o) { let a = new sr, c = new ko, l = new Set, h = [], u = i.logarithmicDepthBuffer, d = i.vertexTextures, f = i.precision, g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; function x(b) { return l.add(b), b === 0 ? "uv" : `uv${b}` } function m(b, v, B, X, P) { let W = X.fog, q = P.geometry, J = b.isMeshStandardMaterial ? X.environment : null, ie = (b.isMeshStandardMaterial ? t : e).get(b.envMap || J), V = ie && ie.mapping === Pr ? ie.image.height : null, Q = g[b.type]; b.precision !== null && (f = i.getMaxPrecision(b.precision), f !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", f, "instead.")); let j = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color, de = j !== void 0 ? j.length : 0, Fe = 0; q.morphAttributes.position !== void 0 && (Fe = 1), q.morphAttributes.normal !== void 0 && (Fe = 2), q.morphAttributes.color !== void 0 && (Fe = 3); let Ye, G, ee, he; if (Q) { let Ge = Qt[Q]; Ye = Ge.vertexShader, G = Ge.fragmentShader } else Ye = b.vertexShader, G = b.fragmentShader, c.update(b), ee = c.getVertexShaderID(b), he = c.getFragmentShaderID(b); let se = s.getRenderTarget(), Be = P.isInstancedMesh === !0, Ne = P.isBatchedMesh === !0, D = !!b.map, Ze = !!b.matcap, ge = !!ie, Ke = !!b.aoMap, ye = !!b.lightMap, ze = !!b.bumpMap, Te = !!b.normalMap, He = !!b.displacementMap, tt = !!b.emissiveMap, E = !!b.metalnessMap, y = !!b.roughnessMap, k = b.anisotropy > 0, Y = b.clearcoat > 0, K = b.dispersion > 0, $ = b.iridescence > 0, me = b.sheen > 0, ae = b.transmission > 0, oe = k && !!b.anisotropyMap, Se = Y && !!b.clearcoatMap, ne = Y && !!b.clearcoatNormalMap, pe = Y && !!b.clearcoatRoughnessMap, Ve = $ && !!b.iridescenceMap, _e = $ && !!b.iridescenceThicknessMap, le = me && !!b.sheenColorMap, Ee = me && !!b.sheenRoughnessMap, De = !!b.specularMap, Je = !!b.specularColorMap, Re = !!b.specularIntensityMap, _ = ae && !!b.transmissionMap, I = ae && !!b.thicknessMap, U = !!b.gradientMap, Z = !!b.alphaMap, te = b.alphaTest > 0, we = !!b.alphaHash, Ue = !!b.extensions, it = Un; b.toneMapped && (se === null || se.isXRRenderTarget === !0) && (it = s.toneMapping); let pt = { shaderID: Q, shaderType: b.type, shaderName: b.name, vertexShader: Ye, fragmentShader: G, defines: b.defines, customVertexShaderID: ee, customFragmentShaderID: he, isRawShaderMaterial: b.isRawShaderMaterial === !0, glslVersion: b.glslVersion, precision: f, batching: Ne, instancing: Be, instancingColor: Be && P.instanceColor !== null, instancingMorph: Be && P.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: se === null ? s.outputColorSpace : se.isXRRenderTarget === !0 ? se.texture.colorSpace : ht, alphaToCoverage: !!b.alphaToCoverage, map: D, matcap: Ze, envMap: ge, envMapMode: ge && ie.mapping, envMapCubeUVHeight: V, aoMap: Ke, lightMap: ye, bumpMap: ze, normalMap: Te, displacementMap: d && He, emissiveMap: tt, normalMapObjectSpace: Te && b.normalMapType === mu, normalMapTangentSpace: Te && b.normalMapType === Zl, metalnessMap: E, roughnessMap: y, anisotropy: k, anisotropyMap: oe, clearcoat: Y, clearcoatMap: Se, clearcoatNormalMap: ne, clearcoatRoughnessMap: pe, dispersion: K, iridescence: $, iridescenceMap: Ve, iridescenceThicknessMap: _e, sheen: me, sheenColorMap: le, sheenRoughnessMap: Ee, specularMap: De, specularColorMap: Je, specularIntensityMap: Re, transmission: ae, transmissionMap: _, thicknessMap: I, gradientMap: U, opaque: b.transparent === !1 && b.blending === Ri && b.alphaToCoverage === !1, alphaMap: Z, alphaTest: te, alphaHash: we, combine: b.combine, mapUv: D && x(b.map.channel), aoMapUv: Ke && x(b.aoMap.channel), lightMapUv: ye && x(b.lightMap.channel), bumpMapUv: ze && x(b.bumpMap.channel), normalMapUv: Te && x(b.normalMap.channel), displacementMapUv: He && x(b.displacementMap.channel), emissiveMapUv: tt && x(b.emissiveMap.channel), metalnessMapUv: E && x(b.metalnessMap.channel), roughnessMapUv: y && x(b.roughnessMap.channel), anisotropyMapUv: oe && x(b.anisotropyMap.channel), clearcoatMapUv: Se && x(b.clearcoatMap.channel), clearcoatNormalMapUv: ne && x(b.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: pe && x(b.clearcoatRoughnessMap.channel), iridescenceMapUv: Ve && x(b.iridescenceMap.channel), iridescenceThicknessMapUv: _e && x(b.iridescenceThicknessMap.channel), sheenColorMapUv: le && x(b.sheenColorMap.channel), sheenRoughnessMapUv: Ee && x(b.sheenRoughnessMap.channel), specularMapUv: De && x(b.specularMap.channel), specularColorMapUv: Je && x(b.specularColorMap.channel), specularIntensityMapUv: Re && x(b.specularIntensityMap.channel), transmissionMapUv: _ && x(b.transmissionMap.channel), thicknessMapUv: I && x(b.thicknessMap.channel), alphaMapUv: Z && x(b.alphaMap.channel), vertexTangents: !!q.attributes.tangent && (Te || k), vertexColors: b.vertexColors, vertexAlphas: b.vertexColors === !0 && !!q.attributes.color && q.attributes.color.itemSize === 4, pointsUvs: P.isPoints === !0 && !!q.attributes.uv && (D || Z), fog: !!W, useFog: b.fog === !0, fogExp2: !!W && W.isFogExp2, flatShading: b.flatShading === !0, sizeAttenuation: b.sizeAttenuation === !0, logarithmicDepthBuffer: u, skinning: P.isSkinnedMesh === !0, morphTargets: q.morphAttributes.position !== void 0, morphNormals: q.morphAttributes.normal !== void 0, morphColors: q.morphAttributes.color !== void 0, morphTargetsCount: de, morphTextureStride: Fe, numDirLights: v.directional.length, numPointLights: v.point.length, numSpotLights: v.spot.length, numSpotLightMaps: v.spotLightMap.length, numRectAreaLights: v.rectArea.length, numHemiLights: v.hemi.length, numDirLightShadows: v.directionalShadowMap.length, numPointLightShadows: v.pointShadowMap.length, numSpotLightShadows: v.spotShadowMap.length, numSpotLightShadowsWithMaps: v.numSpotLightShadowsWithMaps, numLightProbes: v.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: b.dithering, shadowMapEnabled: s.shadowMap.enabled && B.length > 0, shadowMapType: s.shadowMap.type, toneMapping: it, useLegacyLights: s._useLegacyLights, decodeVideoTexture: D && b.map.isVideoTexture === !0 && We.getTransfer(b.map.colorSpace) === et, premultipliedAlpha: b.premultipliedAlpha, doubleSided: b.side === Zt, flipSided: b.side === wt, useDepthPacking: b.depthPacking >= 0, depthPacking: b.depthPacking || 0, index0AttributeName: b.index0AttributeName, extensionClipCullDistance: Ue && b.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: Ue && b.extensions.multiDraw === !0 && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: b.customProgramCacheKey() }; return pt.vertexUv1s = l.has(1), pt.vertexUv2s = l.has(2), pt.vertexUv3s = l.has(3), l.clear(), pt } function p(b) { let v = []; if (b.shaderID ? v.push(b.shaderID) : (v.push(b.customVertexShaderID), v.push(b.customFragmentShaderID)), b.defines !== void 0) for (let B in b.defines) v.push(B), v.push(b.defines[B]); return b.isRawShaderMaterial === !1 && (A(v, b), M(v, b), v.push(s.outputColorSpace)), v.push(b.customProgramCacheKey), v.join() } function A(b, v) { b.push(v.precision), b.push(v.outputColorSpace), b.push(v.envMapMode), b.push(v.envMapCubeUVHeight), b.push(v.mapUv), b.push(v.alphaMapUv), b.push(v.lightMapUv), b.push(v.aoMapUv), b.push(v.bumpMapUv), b.push(v.normalMapUv), b.push(v.displacementMapUv), b.push(v.emissiveMapUv), b.push(v.metalnessMapUv), b.push(v.roughnessMapUv), b.push(v.anisotropyMapUv), b.push(v.clearcoatMapUv), b.push(v.clearcoatNormalMapUv), b.push(v.clearcoatRoughnessMapUv), b.push(v.iridescenceMapUv), b.push(v.iridescenceThicknessMapUv), b.push(v.sheenColorMapUv), b.push(v.sheenRoughnessMapUv), b.push(v.specularMapUv), b.push(v.specularColorMapUv), b.push(v.specularIntensityMapUv), b.push(v.transmissionMapUv), b.push(v.thicknessMapUv), b.push(v.combine), b.push(v.fogExp2), b.push(v.sizeAttenuation), b.push(v.morphTargetsCount), b.push(v.morphAttributeCount), b.push(v.numDirLights), b.push(v.numPointLights), b.push(v.numSpotLights), b.push(v.numSpotLightMaps), b.push(v.numHemiLights), b.push(v.numRectAreaLights), b.push(v.numDirLightShadows), b.push(v.numPointLightShadows), b.push(v.numSpotLightShadows), b.push(v.numSpotLightShadowsWithMaps), b.push(v.numLightProbes), b.push(v.shadowMapType), b.push(v.toneMapping), b.push(v.numClippingPlanes), b.push(v.numClipIntersection), b.push(v.depthPacking) } function M(b, v) { a.disableAll(), v.supportsVertexTextures && a.enable(0), v.instancing && a.enable(1), v.instancingColor && a.enable(2), v.instancingMorph && a.enable(3), v.matcap && a.enable(4), v.envMap && a.enable(5), v.normalMapObjectSpace && a.enable(6), v.normalMapTangentSpace && a.enable(7), v.clearcoat && a.enable(8), v.iridescence && a.enable(9), v.alphaTest && a.enable(10), v.vertexColors && a.enable(11), v.vertexAlphas && a.enable(12), v.vertexUv1s && a.enable(13), v.vertexUv2s && a.enable(14), v.vertexUv3s && a.enable(15), v.vertexTangents && a.enable(16), v.anisotropy && a.enable(17), v.alphaHash && a.enable(18), v.batching && a.enable(19), v.dispersion && a.enable(20), b.push(a.mask), a.disableAll(), v.fog && a.enable(0), v.useFog && a.enable(1), v.flatShading && a.enable(2), v.logarithmicDepthBuffer && a.enable(3), v.skinning && a.enable(4), v.morphTargets && a.enable(5), v.morphNormals && a.enable(6), v.morphColors && a.enable(7), v.premultipliedAlpha && a.enable(8), v.shadowMapEnabled && a.enable(9), v.useLegacyLights && a.enable(10), v.doubleSided && a.enable(11), v.flipSided && a.enable(12), v.useDepthPacking && a.enable(13), v.dithering && a.enable(14), v.transmission && a.enable(15), v.sheen && a.enable(16), v.opaque && a.enable(17), v.pointsUvs && a.enable(18), v.decodeVideoTexture && a.enable(19), v.alphaToCoverage && a.enable(20), b.push(a.mask) } function T(b) { let v = g[b.type], B; if (v) { let X = Qt[v]; B = ed.clone(X.uniforms) } else B = b.uniforms; return B } function N(b, v) { let B; for (let X = 0, P = h.length; X < P; X++) { let W = h[X]; if (W.cacheKey === v) { B = W, ++B.usedTimes; break } } return B === void 0 && (B = new cg(s, v, b, r), h.push(B)), B } function R(b) { if (--b.usedTimes === 0) { let v = h.indexOf(b); h[v] = h[h.length - 1], h.pop(), b.destroy() } } function w(b) { c.remove(b) } function H() { c.dispose() } return { getParameters: m, getProgramCacheKey: p, getUniforms: T, acquireProgram: N, releaseProgram: R, releaseShaderCache: w, programs: h, dispose: H } } function ug() { let s = new WeakMap; function e(r) { let o = s.get(r); return o === void 0 && (o = {}, s.set(r, o)), o } function t(r) { s.delete(r) } function n(r, o, a) { s.get(r)[o] = a } function i() { s = new WeakMap } return { get: e, remove: t, update: n, dispose: i } } function dg(s, e) { return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id } function pl(s, e) { return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id } function ml() { let s = [], e = 0, t = [], n = [], i = []; function r() { e = 0, t.length = 0, n.length = 0, i.length = 0 } function o(u, d, f, g, x, m) { let p = s[e]; return p === void 0 ? (p = { id: u.id, object: u, geometry: d, material: f, groupOrder: g, renderOrder: u.renderOrder, z: x, group: m }, s[e] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = f, p.groupOrder = g, p.renderOrder = u.renderOrder, p.z = x, p.group = m), e++, p } function a(u, d, f, g, x, m) { let p = o(u, d, f, g, x, m); f.transmission > 0 ? n.push(p) : f.transparent === !0 ? i.push(p) : t.push(p) } function c(u, d, f, g, x, m) { let p = o(u, d, f, g, x, m); f.transmission > 0 ? n.unshift(p) : f.transparent === !0 ? i.unshift(p) : t.unshift(p) } function l(u, d) { t.length > 1 && t.sort(u || dg), n.length > 1 && n.sort(d || pl), i.length > 1 && i.sort(d || pl) } function h() { for (let u = e, d = s.length; u < d; u++) { let f = s[u]; if (f.id === null) break; f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null } } return { opaque: t, transmissive: n, transparent: i, init: r, push: a, unshift: c, finish: h, sort: l } } function fg() { let s = new WeakMap; function e(n, i) { let r = s.get(n), o; return r === void 0 ? (o = new ml, s.set(n, [o])) : i >= r.length ? (o = new ml, r.push(o)) : o = r[i], o } function t() { s = new WeakMap } return { get: e, dispose: t } } function pg() { let s = {}; return { get: function (e) { if (s[e.id] !== void 0) return s[e.id]; let t; switch (e.type) { case "DirectionalLight": t = { direction: new C, color: new Me }; break; case "SpotLight": t = { position: new C, direction: new C, color: new Me, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 }; break; case "PointLight": t = { position: new C, color: new Me, distance: 0, decay: 0 }; break; case "HemisphereLight": t = { direction: new C, skyColor: new Me, groundColor: new Me }; break; case "RectAreaLight": t = { color: new Me, position: new C, halfWidth: new C, halfHeight: new C }; break }return s[e.id] = t, t } } } function mg() { let s = {}; return { get: function (e) { if (s[e.id] !== void 0) return s[e.id]; let t; switch (e.type) { case "DirectionalLight": t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new xe }; break; case "SpotLight": t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new xe }; break; case "PointLight": t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new xe, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break }return s[e.id] = t, t } } } var gg = 0; function _g(s, e) { return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0) } function xg(s) { let e = new pg, t = mg(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 }; for (let l = 0; l < 9; l++)n.probe.push(new C); let i = new C, r = new Le, o = new Le; function a(l, h) { let u = 0, d = 0, f = 0; for (let B = 0; B < 9; B++)n.probe[B].set(0, 0, 0); let g = 0, x = 0, m = 0, p = 0, A = 0, M = 0, T = 0, N = 0, R = 0, w = 0, H = 0; l.sort(_g); let b = h === !0 ? Math.PI : 1; for (let B = 0, X = l.length; B < X; B++) { let P = l[B], W = P.color, q = P.intensity, J = P.distance, ie = P.shadow && P.shadow.map ? P.shadow.map.texture : null; if (P.isAmbientLight) u += W.r * q * b, d += W.g * q * b, f += W.b * q * b; else if (P.isLightProbe) { for (let V = 0; V < 9; V++)n.probe[V].addScaledVector(P.sh.coefficients[V], q); H++ } else if (P.isDirectionalLight) { let V = e.get(P); if (V.color.copy(P.color).multiplyScalar(P.intensity * b), P.castShadow) { let Q = P.shadow, j = t.get(P); j.shadowBias = Q.bias, j.shadowNormalBias = Q.normalBias, j.shadowRadius = Q.radius, j.shadowMapSize = Q.mapSize, n.directionalShadow[g] = j, n.directionalShadowMap[g] = ie, n.directionalShadowMatrix[g] = P.shadow.matrix, M++ } n.directional[g] = V, g++ } else if (P.isSpotLight) { let V = e.get(P); V.position.setFromMatrixPosition(P.matrixWorld), V.color.copy(W).multiplyScalar(q * b), V.distance = J, V.coneCos = Math.cos(P.angle), V.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), V.decay = P.decay, n.spot[m] = V; let Q = P.shadow; if (P.map && (n.spotLightMap[R] = P.map, R++, Q.updateMatrices(P), P.castShadow && w++), n.spotLightMatrix[m] = Q.matrix, P.castShadow) { let j = t.get(P); j.shadowBias = Q.bias, j.shadowNormalBias = Q.normalBias, j.shadowRadius = Q.radius, j.shadowMapSize = Q.mapSize, n.spotShadow[m] = j, n.spotShadowMap[m] = ie, N++ } m++ } else if (P.isRectAreaLight) { let V = e.get(P); V.color.copy(W).multiplyScalar(q), V.halfWidth.set(P.width * .5, 0, 0), V.halfHeight.set(0, P.height * .5, 0), n.rectArea[p] = V, p++ } else if (P.isPointLight) { let V = e.get(P); if (V.color.copy(P.color).multiplyScalar(P.intensity * b), V.distance = P.distance, V.decay = P.decay, P.castShadow) { let Q = P.shadow, j = t.get(P); j.shadowBias = Q.bias, j.shadowNormalBias = Q.normalBias, j.shadowRadius = Q.radius, j.shadowMapSize = Q.mapSize, j.shadowCameraNear = Q.camera.near, j.shadowCameraFar = Q.camera.far, n.pointShadow[x] = j, n.pointShadowMap[x] = ie, n.pointShadowMatrix[x] = P.shadow.matrix, T++ } n.point[x] = V, x++ } else if (P.isHemisphereLight) { let V = e.get(P); V.skyColor.copy(P.color).multiplyScalar(q * b), V.groundColor.copy(P.groundColor).multiplyScalar(q * b), n.hemi[A] = V, A++ } } p > 0 && (s.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = re.LTC_FLOAT_1, n.rectAreaLTC2 = re.LTC_FLOAT_2) : (n.rectAreaLTC1 = re.LTC_HALF_1, n.rectAreaLTC2 = re.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = d, n.ambient[2] = f; let v = n.hash; (v.directionalLength !== g || v.pointLength !== x || v.spotLength !== m || v.rectAreaLength !== p || v.hemiLength !== A || v.numDirectionalShadows !== M || v.numPointShadows !== T || v.numSpotShadows !== N || v.numSpotMaps !== R || v.numLightProbes !== H) && (n.directional.length = g, n.spot.length = m, n.rectArea.length = p, n.point.length = x, n.hemi.length = A, n.directionalShadow.length = M, n.directionalShadowMap.length = M, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = N, n.spotShadowMap.length = N, n.directionalShadowMatrix.length = M, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = N + R - w, n.spotLightMap.length = R, n.numSpotLightShadowsWithMaps = w, n.numLightProbes = H, v.directionalLength = g, v.pointLength = x, v.spotLength = m, v.rectAreaLength = p, v.hemiLength = A, v.numDirectionalShadows = M, v.numPointShadows = T, v.numSpotShadows = N, v.numSpotMaps = R, v.numLightProbes = H, n.version = gg++) } function c(l, h) { let u = 0, d = 0, f = 0, g = 0, x = 0, m = h.matrixWorldInverse; for (let p = 0, A = l.length; p < A; p++) { let M = l[p]; if (M.isDirectionalLight) { let T = n.directional[u]; T.direction.setFromMatrixPosition(M.matrixWorld), i.setFromMatrixPosition(M.target.matrixWorld), T.direction.sub(i), T.direction.transformDirection(m), u++ } else if (M.isSpotLight) { let T = n.spot[f]; T.position.setFromMatrixPosition(M.matrixWorld), T.position.applyMatrix4(m), T.direction.setFromMatrixPosition(M.matrixWorld), i.setFromMatrixPosition(M.target.matrixWorld), T.direction.sub(i), T.direction.transformDirection(m), f++ } else if (M.isRectAreaLight) { let T = n.rectArea[g]; T.position.setFromMatrixPosition(M.matrixWorld), T.position.applyMatrix4(m), o.identity(), r.copy(M.matrixWorld), r.premultiply(m), o.extractRotation(r), T.halfWidth.set(M.width * .5, 0, 0), T.halfHeight.set(0, M.height * .5, 0), T.halfWidth.applyMatrix4(o), T.halfHeight.applyMatrix4(o), g++ } else if (M.isPointLight) { let T = n.point[d]; T.position.setFromMatrixPosition(M.matrixWorld), T.position.applyMatrix4(m), d++ } else if (M.isHemisphereLight) { let T = n.hemi[x]; T.direction.setFromMatrixPosition(M.matrixWorld), T.direction.transformDirection(m), x++ } } } return { setup: a, setupView: c, state: n } } function gl(s) { let e = new xg(s), t = [], n = []; function i(h) { l.camera = h, t.length = 0, n.length = 0 } function r(h) { t.push(h) } function o(h) { n.push(h) } function a(h) { e.setup(t, h) } function c(h) { e.setupView(t, h) } let l = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} }; return { init: i, state: l, setupLights: a, setupLightsView: c, pushLight: r, pushShadow: o } } function yg(s) { let e = new WeakMap; function t(i, r = 0) { let o = e.get(i), a; return o === void 0 ? (a = new gl(s), e.set(i, [a])) : r >= o.length ? (a = new gl(s), o.push(a)) : a = o[r], a } function n() { e = new WeakMap } return { get: t, dispose: n } } var Vo = class extends Dt { constructor(e) { super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = fu, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e) } copy(e) { return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this } }, Go = class extends Dt { constructor(e) { super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e) } copy(e) { return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this } }, vg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Mg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`; function Sg(s, e, t) { let n = new hs, i = new xe, r = new xe, o = new $e, a = new Vo({ depthPacking: pu }), c = new Go, l = {}, h = t.maxTextureSize, u = { [sn]: wt, [wt]: sn, [Zt]: Zt }, d = new an({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new xe }, radius: { value: 4 } }, vertexShader: vg, fragmentShader: Mg }), f = d.clone(); f.defines.HORIZONTAL_PASS = 1; let g = new Ct; g.setAttribute("position", new st(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); let x = new bt(g, d), m = this; this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Ol; let p = this.type; this.render = function (R, w, H) { if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || R.length === 0) return; let b = s.getRenderTarget(), v = s.getActiveCubeFace(), B = s.getActiveMipmapLevel(), X = s.state; X.setBlending(Dn), X.buffers.color.setClear(1, 1, 1, 1), X.buffers.depth.setTest(!0), X.setScissorTest(!1); let P = p !== _n && this.type === _n, W = p === _n && this.type !== _n; for (let q = 0, J = R.length; q < J; q++) { let ie = R[q], V = ie.shadow; if (V === void 0) { console.warn("THREE.WebGLShadowMap:", ie, "has no shadow."); continue } if (V.autoUpdate === !1 && V.needsUpdate === !1) continue; i.copy(V.mapSize); let Q = V.getFrameExtents(); if (i.multiply(Q), r.copy(V.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / Q.x), i.x = r.x * Q.x, V.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / Q.y), i.y = r.y * Q.y, V.mapSize.y = r.y)), V.map === null || P === !0 || W === !0) { let de = this.type !== _n ? { minFilter: St, magFilter: St } : {}; V.map !== null && V.map.dispose(), V.map = new vn(i.x, i.y, de), V.map.texture.name = ie.name + ".shadowMap", V.camera.updateProjectionMatrix() } s.setRenderTarget(V.map), s.clear(); let j = V.getViewportCount(); for (let de = 0; de < j; de++) { let Fe = V.getViewport(de); o.set(r.x * Fe.x, r.y * Fe.y, r.x * Fe.z, r.y * Fe.w), X.viewport(o), V.updateMatrices(ie, de), n = V.getFrustum(), T(w, H, V.camera, ie, this.type) } V.isPointLightShadow !== !0 && this.type === _n && A(V, H), V.needsUpdate = !1 } p = this.type, m.needsUpdate = !1, s.setRenderTarget(b, v, B) }; function A(R, w) { let H = e.update(x); d.defines.VSM_SAMPLES !== R.blurSamples && (d.defines.VSM_SAMPLES = R.blurSamples, f.defines.VSM_SAMPLES = R.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), R.mapPass === null && (R.mapPass = new vn(i.x, i.y)), d.uniforms.shadow_pass.value = R.map.texture, d.uniforms.resolution.value = R.mapSize, d.uniforms.radius.value = R.radius, s.setRenderTarget(R.mapPass), s.clear(), s.renderBufferDirect(w, null, H, d, x, null), f.uniforms.shadow_pass.value = R.mapPass.texture, f.uniforms.resolution.value = R.mapSize, f.uniforms.radius.value = R.radius, s.setRenderTarget(R.map), s.clear(), s.renderBufferDirect(w, null, H, f, x, null) } function M(R, w, H, b) { let v = null, B = H.isPointLight === !0 ? R.customDistanceMaterial : R.customDepthMaterial; if (B !== void 0) v = B; else if (v = H.isPointLight === !0 ? c : a, s.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) { let X = v.uuid, P = w.uuid, W = l[X]; W === void 0 && (W = {}, l[X] = W); let q = W[P]; q === void 0 && (q = v.clone(), W[P] = q, w.addEventListener("dispose", N)), v = q } if (v.visible = w.visible, v.wireframe = w.wireframe, b === _n ? v.side = w.shadowSide !== null ? w.shadowSide : w.side : v.side = w.shadowSide !== null ? w.shadowSide : u[w.side], v.alphaMap = w.alphaMap, v.alphaTest = w.alphaTest, v.map = w.map, v.clipShadows = w.clipShadows, v.clippingPlanes = w.clippingPlanes, v.clipIntersection = w.clipIntersection, v.displacementMap = w.displacementMap, v.displacementScale = w.displacementScale, v.displacementBias = w.displacementBias, v.wireframeLinewidth = w.wireframeLinewidth, v.linewidth = w.linewidth, H.isPointLight === !0 && v.isMeshDistanceMaterial === !0) { let X = s.properties.get(v); X.light = H } return v } function T(R, w, H, b, v) { if (R.visible === !1) return; if (R.layers.test(w.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && v === _n) && (!R.frustumCulled || n.intersectsObject(R))) { R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse, R.matrixWorld); let P = e.update(R), W = R.material; if (Array.isArray(W)) { let q = P.groups; for (let J = 0, ie = q.length; J < ie; J++) { let V = q[J], Q = W[V.materialIndex]; if (Q && Q.visible) { let j = M(R, Q, b, v); R.onBeforeShadow(s, R, w, H, P, j, V), s.renderBufferDirect(H, null, P, j, R, V), R.onAfterShadow(s, R, w, H, P, j, V) } } } else if (W.visible) { let q = M(R, W, b, v); R.onBeforeShadow(s, R, w, H, P, q, null), s.renderBufferDirect(H, null, P, q, R, null), R.onAfterShadow(s, R, w, H, P, q, null) } } let X = R.children; for (let P = 0, W = X.length; P < W; P++)T(X[P], w, H, b, v) } function N(R) { R.target.removeEventListener("dispose", N); for (let H in l) { let b = l[H], v = R.target.uuid; v in b && (b[v].dispose(), delete b[v]) } } } function bg(s) { function e() { let _ = !1, I = new $e, U = null, Z = new $e(0, 0, 0, 0); return { setMask: function (te) { U !== te && !_ && (s.colorMask(te, te, te, te), U = te) }, setLocked: function (te) { _ = te }, setClear: function (te, we, Ue, it, pt) { pt === !0 && (te *= it, we *= it, Ue *= it), I.set(te, we, Ue, it), Z.equals(I) === !1 && (s.clearColor(te, we, Ue, it), Z.copy(I)) }, reset: function () { _ = !1, U = null, Z.set(-1, 0, 0, 0) } } } function t() { let _ = !1, I = null, U = null, Z = null; return { setTest: function (te) { te ? he(s.DEPTH_TEST) : se(s.DEPTH_TEST) }, setMask: function (te) { I !== te && !_ && (s.depthMask(te), I = te) }, setFunc: function (te) { if (U !== te) { switch (te) { case kh: s.depthFunc(s.NEVER); break; case Hh: s.depthFunc(s.ALWAYS); break; case Vh: s.depthFunc(s.LESS); break; case $s: s.depthFunc(s.LEQUAL); break; case Gh: s.depthFunc(s.EQUAL); break; case Wh: s.depthFunc(s.GEQUAL); break; case Xh: s.depthFunc(s.GREATER); break; case Yh: s.depthFunc(s.NOTEQUAL); break; default: s.depthFunc(s.LEQUAL) }U = te } }, setLocked: function (te) { _ = te }, setClear: function (te) { Z !== te && (s.clearDepth(te), Z = te) }, reset: function () { _ = !1, I = null, U = null, Z = null } } } function n() { let _ = !1, I = null, U = null, Z = null, te = null, we = null, Ue = null, it = null, pt = null; return { setTest: function (Ge) { _ || (Ge ? he(s.STENCIL_TEST) : se(s.STENCIL_TEST)) }, setMask: function (Ge) { I !== Ge && !_ && (s.stencilMask(Ge), I = Ge) }, setFunc: function (Ge, at, Qe) { (U !== Ge || Z !== at || te !== Qe) && (s.stencilFunc(Ge, at, Qe), U = Ge, Z = at, te = Qe) }, setOp: function (Ge, at, Qe) { (we !== Ge || Ue !== at || it !== Qe) && (s.stencilOp(Ge, at, Qe), we = Ge, Ue = at, it = Qe) }, setLocked: function (Ge) { _ = Ge }, setClear: function (Ge) { pt !== Ge && (s.clearStencil(Ge), pt = Ge) }, reset: function () { _ = !1, I = null, U = null, Z = null, te = null, we = null, Ue = null, it = null, pt = null } } } let i = new e, r = new t, o = new n, a = new WeakMap, c = new WeakMap, l = {}, h = {}, u = new WeakMap, d = [], f = null, g = !1, x = null, m = null, p = null, A = null, M = null, T = null, N = null, R = new Me(0, 0, 0), w = 0, H = !1, b = null, v = null, B = null, X = null, P = null, W = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS), q = !1, J = 0, ie = s.getParameter(s.VERSION); ie.indexOf("WebGL") !== -1 ? (J = parseFloat(/^WebGL (\d)/.exec(ie)[1]), q = J >= 1) : ie.indexOf("OpenGL ES") !== -1 && (J = parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]), q = J >= 2); let V = null, Q = {}, j = s.getParameter(s.SCISSOR_BOX), de = s.getParameter(s.VIEWPORT), Fe = new $e().fromArray(j), Ye = new $e().fromArray(de); function G(_, I, U, Z) { let te = new Uint8Array(4), we = s.createTexture(); s.bindTexture(_, we), s.texParameteri(_, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(_, s.TEXTURE_MAG_FILTER, s.NEAREST); for (let Ue = 0; Ue < U; Ue++)_ === s.TEXTURE_3D || _ === s.TEXTURE_2D_ARRAY ? s.texImage3D(I, 0, s.RGBA, 1, 1, Z, 0, s.RGBA, s.UNSIGNED_BYTE, te) : s.texImage2D(I + Ue, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, te); return we } let ee = {}; ee[s.TEXTURE_2D] = G(s.TEXTURE_2D, s.TEXTURE_2D, 1), ee[s.TEXTURE_CUBE_MAP] = G(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ee[s.TEXTURE_2D_ARRAY] = G(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), ee[s.TEXTURE_3D] = G(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1), i.setClear(0, 0, 0, 1), r.setClear(1), o.setClear(0), he(s.DEPTH_TEST), r.setFunc($s), ze(!1), Te(Za), he(s.CULL_FACE), Ke(Dn); function he(_) { l[_] !== !0 && (s.enable(_), l[_] = !0) } function se(_) { l[_] !== !1 && (s.disable(_), l[_] = !1) } function Be(_, I) { return h[_] !== I ? (s.bindFramebuffer(_, I), h[_] = I, _ === s.DRAW_FRAMEBUFFER && (h[s.FRAMEBUFFER] = I), _ === s.FRAMEBUFFER && (h[s.DRAW_FRAMEBUFFER] = I), !0) : !1 } function Ne(_, I) { let U = d, Z = !1; if (_) { U = u.get(I), U === void 0 && (U = [], u.set(I, U)); let te = _.textures; if (U.length !== te.length || U[0] !== s.COLOR_ATTACHMENT0) { for (let we = 0, Ue = te.length; we < Ue; we++)U[we] = s.COLOR_ATTACHMENT0 + we; U.length = te.length, Z = !0 } } else U[0] !== s.BACK && (U[0] = s.BACK, Z = !0); Z && s.drawBuffers(U) } function D(_) { return f !== _ ? (s.useProgram(_), f = _, !0) : !1 } let Ze = { [Qn]: s.FUNC_ADD, [bh]: s.FUNC_SUBTRACT, [Ah]: s.FUNC_REVERSE_SUBTRACT }; Ze[Th] = s.MIN, Ze[Eh] = s.MAX; let ge = { [wh]: s.ZERO, [Rh]: s.ONE, [Ch]: s.SRC_COLOR, [Eo]: s.SRC_ALPHA, [Uh]: s.SRC_ALPHA_SATURATE, [Nh]: s.DST_COLOR, [Ih]: s.DST_ALPHA, [Ph]: s.ONE_MINUS_SRC_COLOR, [wo]: s.ONE_MINUS_SRC_ALPHA, [Dh]: s.ONE_MINUS_DST_COLOR, [Lh]: s.ONE_MINUS_DST_ALPHA, [Oh]: s.CONSTANT_COLOR, [Fh]: s.ONE_MINUS_CONSTANT_COLOR, [Bh]: s.CONSTANT_ALPHA, [zh]: s.ONE_MINUS_CONSTANT_ALPHA }; function Ke(_, I, U, Z, te, we, Ue, it, pt, Ge) { if (_ === Dn) { g === !0 && (se(s.BLEND), g = !1); return } if (g === !1 && (he(s.BLEND), g = !0), _ !== Sh) { if (_ !== x || Ge !== H) { if ((m !== Qn || M !== Qn) && (s.blendEquation(s.FUNC_ADD), m = Qn, M = Qn), Ge) switch (_) { case Ri: s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA); break; case Ka: s.blendFunc(s.ONE, s.ONE); break; case Ja: s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE); break; case $a: s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA); break; default: console.error("THREE.WebGLState: Invalid blending: ", _); break } else switch (_) { case Ri: s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA); break; case Ka: s.blendFunc(s.SRC_ALPHA, s.ONE); break; case Ja: s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE); break; case $a: s.blendFunc(s.ZERO, s.SRC_COLOR); break; default: console.error("THREE.WebGLState: Invalid blending: ", _); break }p = null, A = null, T = null, N = null, R.set(0, 0, 0), w = 0, x = _, H = Ge } return } te = te || I, we = we || U, Ue = Ue || Z, (I !== m || te !== M) && (s.blendEquationSeparate(Ze[I], Ze[te]), m = I, M = te), (U !== p || Z !== A || we !== T || Ue !== N) && (s.blendFuncSeparate(ge[U], ge[Z], ge[we], ge[Ue]), p = U, A = Z, T = we, N = Ue), (it.equals(R) === !1 || pt !== w) && (s.blendColor(it.r, it.g, it.b, pt), R.copy(it), w = pt), x = _, H = !1 } function ye(_, I) { _.side === Zt ? se(s.CULL_FACE) : he(s.CULL_FACE); let U = _.side === wt; I && (U = !U), ze(U), _.blending === Ri && _.transparent === !1 ? Ke(Dn) : Ke(_.blending, _.blendEquation, _.blendSrc, _.blendDst, _.blendEquationAlpha, _.blendSrcAlpha, _.blendDstAlpha, _.blendColor, _.blendAlpha, _.premultipliedAlpha), r.setFunc(_.depthFunc), r.setTest(_.depthTest), r.setMask(_.depthWrite), i.setMask(_.colorWrite); let Z = _.stencilWrite; o.setTest(Z), Z && (o.setMask(_.stencilWriteMask), o.setFunc(_.stencilFunc, _.stencilRef, _.stencilFuncMask), o.setOp(_.stencilFail, _.stencilZFail, _.stencilZPass)), tt(_.polygonOffset, _.polygonOffsetFactor, _.polygonOffsetUnits), _.alphaToCoverage === !0 ? he(s.SAMPLE_ALPHA_TO_COVERAGE) : se(s.SAMPLE_ALPHA_TO_COVERAGE) } function ze(_) { b !== _ && (_ ? s.frontFace(s.CW) : s.frontFace(s.CCW), b = _) } function Te(_) { _ !== yh ? (he(s.CULL_FACE), _ !== v && (_ === Za ? s.cullFace(s.BACK) : _ === vh ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : se(s.CULL_FACE), v = _ } function He(_) { _ !== B && (q && s.lineWidth(_), B = _) } function tt(_, I, U) { _ ? (he(s.POLYGON_OFFSET_FILL), (X !== I || P !== U) && (s.polygonOffset(I, U), X = I, P = U)) : se(s.POLYGON_OFFSET_FILL) } function E(_) { _ ? he(s.SCISSOR_TEST) : se(s.SCISSOR_TEST) } function y(_) { _ === void 0 && (_ = s.TEXTURE0 + W - 1), V !== _ && (s.activeTexture(_), V = _) } function k(_, I, U) { U === void 0 && (V === null ? U = s.TEXTURE0 + W - 1 : U = V); let Z = Q[U]; Z === void 0 && (Z = { type: void 0, texture: void 0 }, Q[U] = Z), (Z.type !== _ || Z.texture !== I) && (V !== U && (s.activeTexture(U), V = U), s.bindTexture(_, I || ee[_]), Z.type = _, Z.texture = I) } function Y() { let _ = Q[V]; _ !== void 0 && _.type !== void 0 && (s.bindTexture(_.type, null), _.type = void 0, _.texture = void 0) } function K() { try { s.compressedTexImage2D.apply(s, arguments) } catch (_) { console.error("THREE.WebGLState:", _) } } function $() { try { s.compressedTexImage3D.apply(s, arguments) } catch (_) { console.error("THREE.WebGLState:", _) } } function me() { try { s.texSubImage2D.apply(s, arguments) } catch (_) { console.error("THREE.WebGLState:", _) } } function ae() { try { s.texSubImage3D.apply(s, arguments) } catch (_) { console.error("THREE.WebGLState:", _) } } function oe() { try { s.compressedTexSubImage2D.apply(s, arguments) } catch (_) { console.error("THREE.WebGLState:", _) } } function Se() { try { s.compressedTexSubImage3D.apply(s, arguments) } catch (_) { console.error("THREE.WebGLState:", _) } } function ne() { try { s.texStorage2D.apply(s, arguments) } catch (_) { console.error("THREE.WebGLState:", _) } } function pe() { try { s.texStorage3D.apply(s, arguments) } catch (_) { console.error("THREE.WebGLState:", _) } } function Ve() { try { s.texImage2D.apply(s, arguments) } catch (_) { console.error("THREE.WebGLState:", _) } } function _e() { try { s.texImage3D.apply(s, arguments) } catch (_) { console.error("THREE.WebGLState:", _) } } function le(_) { Fe.equals(_) === !1 && (s.scissor(_.x, _.y, _.z, _.w), Fe.copy(_)) } function Ee(_) { Ye.equals(_) === !1 && (s.viewport(_.x, _.y, _.z, _.w), Ye.copy(_)) } function De(_, I) { let U = c.get(I); U === void 0 && (U = new WeakMap, c.set(I, U)); let Z = U.get(_); Z === void 0 && (Z = s.getUniformBlockIndex(I, _.name), U.set(_, Z)) } function Je(_, I) { let Z = c.get(I).get(_); a.get(I) !== Z && (s.uniformBlockBinding(I, Z, _.__bindingPointIndex), a.set(I, Z)) } function Re() { s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), l = {}, V = null, Q = {}, h = {}, u = new WeakMap, d = [], f = null, g = !1, x = null, m = null, p = null, A = null, M = null, T = null, N = null, R = new Me(0, 0, 0), w = 0, H = !1, b = null, v = null, B = null, X = null, P = null, Fe.set(0, 0, s.canvas.width, s.canvas.height), Ye.set(0, 0, s.canvas.width, s.canvas.height), i.reset(), r.reset(), o.reset() } return { buffers: { color: i, depth: r, stencil: o }, enable: he, disable: se, bindFramebuffer: Be, drawBuffers: Ne, useProgram: D, setBlending: Ke, setMaterial: ye, setFlipSided: ze, setCullFace: Te, setLineWidth: He, setPolygonOffset: tt, setScissorTest: E, activeTexture: y, bindTexture: k, unbindTexture: Y, compressedTexImage2D: K, compressedTexImage3D: $, texImage2D: Ve, texImage3D: _e, updateUBOMapping: De, uniformBlockBinding: Je, texStorage2D: ne, texStorage3D: pe, texSubImage2D: me, texSubImage3D: ae, compressedTexSubImage2D: oe, compressedTexSubImage3D: Se, scissor: le, viewport: Ee, reset: Re } } function Ag(s, e, t, n, i, r, o) { let a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new xe, h = new WeakMap, u, d = new WeakMap, f = !1; try { f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null } catch { } function g(E, y) { return f ? new OffscreenCanvas(E, y) : cs("canvas") } function x(E, y, k) { let Y = 1, K = tt(E); if ((K.width > k || K.height > k) && (Y = k / Math.max(K.width, K.height)), Y < 1) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) { let $ = Math.floor(Y * K.width), me = Math.floor(Y * K.height); u === void 0 && (u = g($, me)); let ae = y ? g($, me) : u; return ae.width = $, ae.height = me, ae.getContext("2d").drawImage(E, 0, 0, $, me), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + K.width + "x" + K.height + ") to (" + $ + "x" + me + ")."), ae } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + K.width + "x" + K.height + ")."), E; return E } function m(E) { return E.generateMipmaps && E.minFilter !== St && E.minFilter !== Et } function p(E) { s.generateMipmap(E) } function A(E, y, k, Y, K = !1) { if (E !== null) { if (s[E] !== void 0) return s[E]; console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'") } let $ = y; if (y === s.RED && (k === s.FLOAT && ($ = s.R32F), k === s.HALF_FLOAT && ($ = s.R16F), k === s.UNSIGNED_BYTE && ($ = s.R8)), y === s.RED_INTEGER && (k === s.UNSIGNED_BYTE && ($ = s.R8UI), k === s.UNSIGNED_SHORT && ($ = s.R16UI), k === s.UNSIGNED_INT && ($ = s.R32UI), k === s.BYTE && ($ = s.R8I), k === s.SHORT && ($ = s.R16I), k === s.INT && ($ = s.R32I)), y === s.RG && (k === s.FLOAT && ($ = s.RG32F), k === s.HALF_FLOAT && ($ = s.RG16F), k === s.UNSIGNED_BYTE && ($ = s.RG8)), y === s.RG_INTEGER && (k === s.UNSIGNED_BYTE && ($ = s.RG8UI), k === s.UNSIGNED_SHORT && ($ = s.RG16UI), k === s.UNSIGNED_INT && ($ = s.RG32UI), k === s.BYTE && ($ = s.RG8I), k === s.SHORT && ($ = s.RG16I), k === s.INT && ($ = s.RG32I)), y === s.RGB && k === s.UNSIGNED_INT_5_9_9_9_REV && ($ = s.RGB9_E5), y === s.RGBA) { let me = K ? js : We.getTransfer(Y); k === s.FLOAT && ($ = s.RGBA32F), k === s.HALF_FLOAT && ($ = s.RGBA16F), k === s.UNSIGNED_BYTE && ($ = me === et ? s.SRGB8_ALPHA8 : s.RGBA8), k === s.UNSIGNED_SHORT_4_4_4_4 && ($ = s.RGBA4), k === s.UNSIGNED_SHORT_5_5_5_1 && ($ = s.RGB5_A1) } return ($ === s.R16F || $ === s.R32F || $ === s.RG16F || $ === s.RG32F || $ === s.RGBA16F || $ === s.RGBA32F) && e.get("EXT_color_buffer_float"), $ } function M(E, y) { return m(E) === !0 || E.isFramebufferTexture && E.minFilter !== St && E.minFilter !== Et ? Math.log2(Math.max(y.width, y.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? y.mipmaps.length : 1 } function T(E) { let y = E.target; y.removeEventListener("dispose", T), R(y), y.isVideoTexture && h.delete(y) } function N(E) { let y = E.target; y.removeEventListener("dispose", N), H(y) } function R(E) { let y = n.get(E); if (y.__webglInit === void 0) return; let k = E.source, Y = d.get(k); if (Y) { let K = Y[y.__cacheKey]; K.usedTimes--, K.usedTimes === 0 && w(E), Object.keys(Y).length === 0 && d.delete(k) } n.remove(E) } function w(E) { let y = n.get(E); s.deleteTexture(y.__webglTexture); let k = E.source, Y = d.get(k); delete Y[y.__cacheKey], o.memory.textures-- } function H(E) { let y = n.get(E); if (E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget) for (let Y = 0; Y < 6; Y++) { if (Array.isArray(y.__webglFramebuffer[Y])) for (let K = 0; K < y.__webglFramebuffer[Y].length; K++)s.deleteFramebuffer(y.__webglFramebuffer[Y][K]); else s.deleteFramebuffer(y.__webglFramebuffer[Y]); y.__webglDepthbuffer && s.deleteRenderbuffer(y.__webglDepthbuffer[Y]) } else { if (Array.isArray(y.__webglFramebuffer)) for (let Y = 0; Y < y.__webglFramebuffer.length; Y++)s.deleteFramebuffer(y.__webglFramebuffer[Y]); else s.deleteFramebuffer(y.__webglFramebuffer); if (y.__webglDepthbuffer && s.deleteRenderbuffer(y.__webglDepthbuffer), y.__webglMultisampledFramebuffer && s.deleteFramebuffer(y.__webglMultisampledFramebuffer), y.__webglColorRenderbuffer) for (let Y = 0; Y < y.__webglColorRenderbuffer.length; Y++)y.__webglColorRenderbuffer[Y] && s.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]); y.__webglDepthRenderbuffer && s.deleteRenderbuffer(y.__webglDepthRenderbuffer) } let k = E.textures; for (let Y = 0, K = k.length; Y < K; Y++) { let $ = n.get(k[Y]); $.__webglTexture && (s.deleteTexture($.__webglTexture), o.memory.textures--), n.remove(k[Y]) } n.remove(E) } let b = 0; function v() { b = 0 } function B() { let E = b; return E >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + i.maxTextures), b += 1, E } function X(E) { let y = []; return y.push(E.wrapS), y.push(E.wrapT), y.push(E.wrapR || 0), y.push(E.magFilter), y.push(E.minFilter), y.push(E.anisotropy), y.push(E.internalFormat), y.push(E.format), y.push(E.type), y.push(E.generateMipmaps), y.push(E.premultiplyAlpha), y.push(E.flipY), y.push(E.unpackAlignment), y.push(E.colorSpace), y.join() } function P(E, y) { let k = n.get(E); if (E.isVideoTexture && Te(E), E.isRenderTargetTexture === !1 && E.version > 0 && k.__version !== E.version) { let Y = E.image; if (Y === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found."); else if (Y.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete"); else { Fe(k, E, y); return } } t.bindTexture(s.TEXTURE_2D, k.__webglTexture, s.TEXTURE0 + y) } function W(E, y) { let k = n.get(E); if (E.version > 0 && k.__version !== E.version) { Fe(k, E, y); return } t.bindTexture(s.TEXTURE_2D_ARRAY, k.__webglTexture, s.TEXTURE0 + y) } function q(E, y) { let k = n.get(E); if (E.version > 0 && k.__version !== E.version) { Fe(k, E, y); return } t.bindTexture(s.TEXTURE_3D, k.__webglTexture, s.TEXTURE0 + y) } function J(E, y) { let k = n.get(E); if (E.version > 0 && k.__version !== E.version) { Ye(k, E, y); return } t.bindTexture(s.TEXTURE_CUBE_MAP, k.__webglTexture, s.TEXTURE0 + y) } let ie = { [ti]: s.REPEAT, [xn]: s.CLAMP_TO_EDGE, [os]: s.MIRRORED_REPEAT }, V = { [St]: s.NEAREST, [oa]: s.NEAREST_MIPMAP_NEAREST, [Ti]: s.NEAREST_MIPMAP_LINEAR, [Et]: s.LINEAR, [ns]: s.LINEAR_MIPMAP_NEAREST, [en]: s.LINEAR_MIPMAP_LINEAR }, Q = { [gu]: s.NEVER, [Su]: s.ALWAYS, [_u]: s.LESS, [Kl]: s.LEQUAL, [xu]: s.EQUAL, [Mu]: s.GEQUAL, [yu]: s.GREATER, [vu]: s.NOTEQUAL }; function j(E, y) { if (y.type === tn && e.has("OES_texture_float_linear") === !1 && (y.magFilter === Et || y.magFilter === ns || y.magFilter === Ti || y.magFilter === en || y.minFilter === Et || y.minFilter === ns || y.minFilter === Ti || y.minFilter === en) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s.texParameteri(E, s.TEXTURE_WRAP_S, ie[y.wrapS]), s.texParameteri(E, s.TEXTURE_WRAP_T, ie[y.wrapT]), (E === s.TEXTURE_3D || E === s.TEXTURE_2D_ARRAY) && s.texParameteri(E, s.TEXTURE_WRAP_R, ie[y.wrapR]), s.texParameteri(E, s.TEXTURE_MAG_FILTER, V[y.magFilter]), s.texParameteri(E, s.TEXTURE_MIN_FILTER, V[y.minFilter]), y.compareFunction && (s.texParameteri(E, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(E, s.TEXTURE_COMPARE_FUNC, Q[y.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) { if (y.magFilter === St || y.minFilter !== Ti && y.minFilter !== en || y.type === tn && e.has("OES_texture_float_linear") === !1) return; if (y.anisotropy > 1 || n.get(y).__currentAnisotropy) { let k = e.get("EXT_texture_filter_anisotropic"); s.texParameterf(E, k.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(y.anisotropy, i.getMaxAnisotropy())), n.get(y).__currentAnisotropy = y.anisotropy } } } function de(E, y) { let k = !1; E.__webglInit === void 0 && (E.__webglInit = !0, y.addEventListener("dispose", T)); let Y = y.source, K = d.get(Y); K === void 0 && (K = {}, d.set(Y, K)); let $ = X(y); if ($ !== E.__cacheKey) { K[$] === void 0 && (K[$] = { texture: s.createTexture(), usedTimes: 0 }, o.memory.textures++, k = !0), K[$].usedTimes++; let me = K[E.__cacheKey]; me !== void 0 && (K[E.__cacheKey].usedTimes--, me.usedTimes === 0 && w(y)), E.__cacheKey = $, E.__webglTexture = K[$].texture } return k } function Fe(E, y, k) { let Y = s.TEXTURE_2D; (y.isDataArrayTexture || y.isCompressedArrayTexture) && (Y = s.TEXTURE_2D_ARRAY), y.isData3DTexture && (Y = s.TEXTURE_3D); let K = de(E, y), $ = y.source; t.bindTexture(Y, E.__webglTexture, s.TEXTURE0 + k); let me = n.get($); if ($.version !== me.__version || K === !0) { t.activeTexture(s.TEXTURE0 + k); let ae = We.getPrimaries(We.workingColorSpace), oe = y.colorSpace === Ln ? null : We.getPrimaries(y.colorSpace), Se = y.colorSpace === Ln || ae === oe ? s.NONE : s.BROWSER_DEFAULT_WEBGL; s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, y.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, y.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Se); let ne = x(y.image, !1, i.maxTextureSize); ne = He(y, ne); let pe = r.convert(y.format, y.colorSpace), Ve = r.convert(y.type), _e = A(y.internalFormat, pe, Ve, y.colorSpace, y.isVideoTexture); j(Y, y); let le, Ee = y.mipmaps, De = y.isVideoTexture !== !0, Je = me.__version === void 0 || K === !0, Re = $.dataReady, _ = M(y, ne); if (y.isDepthTexture) _e = s.DEPTH_COMPONENT16, y.type === tn ? _e = s.DEPTH_COMPONENT32F : y.type === Di ? _e = s.DEPTH_COMPONENT24 : y.type === ys && (_e = s.DEPTH24_STENCIL8), Je && (De ? t.texStorage2D(s.TEXTURE_2D, 1, _e, ne.width, ne.height) : t.texImage2D(s.TEXTURE_2D, 0, _e, ne.width, ne.height, 0, pe, Ve, null)); else if (y.isDataTexture) if (Ee.length > 0) { De && Je && t.texStorage2D(s.TEXTURE_2D, _, _e, Ee[0].width, Ee[0].height); for (let I = 0, U = Ee.length; I < U; I++)le = Ee[I], De ? Re && t.texSubImage2D(s.TEXTURE_2D, I, 0, 0, le.width, le.height, pe, Ve, le.data) : t.texImage2D(s.TEXTURE_2D, I, _e, le.width, le.height, 0, pe, Ve, le.data); y.generateMipmaps = !1 } else De ? (Je && t.texStorage2D(s.TEXTURE_2D, _, _e, ne.width, ne.height), Re && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, ne.width, ne.height, pe, Ve, ne.data)) : t.texImage2D(s.TEXTURE_2D, 0, _e, ne.width, ne.height, 0, pe, Ve, ne.data); else if (y.isCompressedTexture) if (y.isCompressedArrayTexture) { De && Je && t.texStorage3D(s.TEXTURE_2D_ARRAY, _, _e, Ee[0].width, Ee[0].height, ne.depth); for (let I = 0, U = Ee.length; I < U; I++)le = Ee[I], y.format !== Jt ? pe !== null ? De ? Re && t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, I, 0, 0, 0, le.width, le.height, ne.depth, pe, le.data, 0, 0) : t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, I, _e, le.width, le.height, ne.depth, 0, le.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : De ? Re && t.texSubImage3D(s.TEXTURE_2D_ARRAY, I, 0, 0, 0, le.width, le.height, ne.depth, pe, Ve, le.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, I, _e, le.width, le.height, ne.depth, 0, pe, Ve, le.data) } else { De && Je && t.texStorage2D(s.TEXTURE_2D, _, _e, Ee[0].width, Ee[0].height); for (let I = 0, U = Ee.length; I < U; I++)le = Ee[I], y.format !== Jt ? pe !== null ? De ? Re && t.compressedTexSubImage2D(s.TEXTURE_2D, I, 0, 0, le.width, le.height, pe, le.data) : t.compressedTexImage2D(s.TEXTURE_2D, I, _e, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : De ? Re && t.texSubImage2D(s.TEXTURE_2D, I, 0, 0, le.width, le.height, pe, Ve, le.data) : t.texImage2D(s.TEXTURE_2D, I, _e, le.width, le.height, 0, pe, Ve, le.data) } else if (y.isDataArrayTexture) De ? (Je && t.texStorage3D(s.TEXTURE_2D_ARRAY, _, _e, ne.width, ne.height, ne.depth), Re && t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ne.width, ne.height, ne.depth, pe, Ve, ne.data)) : t.texImage3D(s.TEXTURE_2D_ARRAY, 0, _e, ne.width, ne.height, ne.depth, 0, pe, Ve, ne.data); else if (y.isData3DTexture) De ? (Je && t.texStorage3D(s.TEXTURE_3D, _, _e, ne.width, ne.height, ne.depth), Re && t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, ne.width, ne.height, ne.depth, pe, Ve, ne.data)) : t.texImage3D(s.TEXTURE_3D, 0, _e, ne.width, ne.height, ne.depth, 0, pe, Ve, ne.data); else if (y.isFramebufferTexture) { if (Je) if (De) t.texStorage2D(s.TEXTURE_2D, _, _e, ne.width, ne.height); else { let I = ne.width, U = ne.height; for (let Z = 0; Z < _; Z++)t.texImage2D(s.TEXTURE_2D, Z, _e, I, U, 0, pe, Ve, null), I >>= 1, U >>= 1 } } else if (Ee.length > 0) { if (De && Je) { let I = tt(Ee[0]); t.texStorage2D(s.TEXTURE_2D, _, _e, I.width, I.height) } for (let I = 0, U = Ee.length; I < U; I++)le = Ee[I], De ? Re && t.texSubImage2D(s.TEXTURE_2D, I, 0, 0, pe, Ve, le) : t.texImage2D(s.TEXTURE_2D, I, _e, pe, Ve, le); y.generateMipmaps = !1 } else if (De) { if (Je) { let I = tt(ne); t.texStorage2D(s.TEXTURE_2D, _, _e, I.width, I.height) } Re && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, pe, Ve, ne) } else t.texImage2D(s.TEXTURE_2D, 0, _e, pe, Ve, ne); m(y) && p(Y), me.__version = $.version, y.onUpdate && y.onUpdate(y) } E.__version = y.version } function Ye(E, y, k) { if (y.image.length !== 6) return; let Y = de(E, y), K = y.source; t.bindTexture(s.TEXTURE_CUBE_MAP, E.__webglTexture, s.TEXTURE0 + k); let $ = n.get(K); if (K.version !== $.__version || Y === !0) { t.activeTexture(s.TEXTURE0 + k); let me = We.getPrimaries(We.workingColorSpace), ae = y.colorSpace === Ln ? null : We.getPrimaries(y.colorSpace), oe = y.colorSpace === Ln || me === ae ? s.NONE : s.BROWSER_DEFAULT_WEBGL; s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, y.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, y.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, oe); let Se = y.isCompressedTexture || y.image[0].isCompressedTexture, ne = y.image[0] && y.image[0].isDataTexture, pe = []; for (let U = 0; U < 6; U++)!Se && !ne ? pe[U] = x(y.image[U], !0, i.maxCubemapSize) : pe[U] = ne ? y.image[U].image : y.image[U], pe[U] = He(y, pe[U]); let Ve = pe[0], _e = r.convert(y.format, y.colorSpace), le = r.convert(y.type), Ee = A(y.internalFormat, _e, le, y.colorSpace), De = y.isVideoTexture !== !0, Je = $.__version === void 0 || Y === !0, Re = K.dataReady, _ = M(y, Ve); j(s.TEXTURE_CUBE_MAP, y); let I; if (Se) { De && Je && t.texStorage2D(s.TEXTURE_CUBE_MAP, _, Ee, Ve.width, Ve.height); for (let U = 0; U < 6; U++) { I = pe[U].mipmaps; for (let Z = 0; Z < I.length; Z++) { let te = I[Z]; y.format !== Jt ? _e !== null ? De ? Re && t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + U, Z, 0, 0, te.width, te.height, _e, te.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + U, Z, Ee, te.width, te.height, 0, te.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : De ? Re && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + U, Z, 0, 0, te.width, te.height, _e, le, te.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + U, Z, Ee, te.width, te.height, 0, _e, le, te.data) } } } else { if (I = y.mipmaps, De && Je) { I.length > 0 && _++; let U = tt(pe[0]); t.texStorage2D(s.TEXTURE_CUBE_MAP, _, Ee, U.width, U.height) } for (let U = 0; U < 6; U++)if (ne) { De ? Re && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + U, 0, 0, 0, pe[U].width, pe[U].height, _e, le, pe[U].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + U, 0, Ee, pe[U].width, pe[U].height, 0, _e, le, pe[U].data); for (let Z = 0; Z < I.length; Z++) { let we = I[Z].image[U].image; De ? Re && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + U, Z + 1, 0, 0, we.width, we.height, _e, le, we.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + U, Z + 1, Ee, we.width, we.height, 0, _e, le, we.data) } } else { De ? Re && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + U, 0, 0, 0, _e, le, pe[U]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + U, 0, Ee, _e, le, pe[U]); for (let Z = 0; Z < I.length; Z++) { let te = I[Z]; De ? Re && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + U, Z + 1, 0, 0, _e, le, te.image[U]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + U, Z + 1, Ee, _e, le, te.image[U]) } } } m(y) && p(s.TEXTURE_CUBE_MAP), $.__version = K.version, y.onUpdate && y.onUpdate(y) } E.__version = y.version } function G(E, y, k, Y, K, $) { let me = r.convert(k.format, k.colorSpace), ae = r.convert(k.type), oe = A(k.internalFormat, me, ae, k.colorSpace); if (!n.get(y).__hasExternalTextures) { let ne = Math.max(1, y.width >> $), pe = Math.max(1, y.height >> $); K === s.TEXTURE_3D || K === s.TEXTURE_2D_ARRAY ? t.texImage3D(K, $, oe, ne, pe, y.depth, 0, me, ae, null) : t.texImage2D(K, $, oe, ne, pe, 0, me, ae, null) } t.bindFramebuffer(s.FRAMEBUFFER, E), ze(y) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, Y, K, n.get(k).__webglTexture, 0, ye(y)) : (K === s.TEXTURE_2D || K >= s.TEXTURE_CUBE_MAP_POSITIVE_X && K <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, Y, K, n.get(k).__webglTexture, $), t.bindFramebuffer(s.FRAMEBUFFER, null) } function ee(E, y, k) { if (s.bindRenderbuffer(s.RENDERBUFFER, E), y.depthBuffer && !y.stencilBuffer) { let Y = s.DEPTH_COMPONENT24; if (k || ze(y)) { let K = y.depthTexture; K && K.isDepthTexture && (K.type === tn ? Y = s.DEPTH_COMPONENT32F : K.type === Di && (Y = s.DEPTH_COMPONENT24)); let $ = ye(y); ze(y) ? a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, $, Y, y.width, y.height) : s.renderbufferStorageMultisample(s.RENDERBUFFER, $, Y, y.width, y.height) } else s.renderbufferStorage(s.RENDERBUFFER, Y, y.width, y.height); s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, E) } else if (y.depthBuffer && y.stencilBuffer) { let Y = ye(y); k && ze(y) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, Y, s.DEPTH24_STENCIL8, y.width, y.height) : ze(y) ? a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Y, s.DEPTH24_STENCIL8, y.width, y.height) : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, y.width, y.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, E) } else { let Y = y.textures; for (let K = 0; K < Y.length; K++) { let $ = Y[K], me = r.convert($.format, $.colorSpace), ae = r.convert($.type), oe = A($.internalFormat, me, ae, $.colorSpace), Se = ye(y); k && ze(y) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, Se, oe, y.width, y.height) : ze(y) ? a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Se, oe, y.width, y.height) : s.renderbufferStorage(s.RENDERBUFFER, oe, y.width, y.height) } } s.bindRenderbuffer(s.RENDERBUFFER, null) } function he(E, y) { if (y && y.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported"); if (t.bindFramebuffer(s.FRAMEBUFFER, E), !(y.depthTexture && y.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); (!n.get(y.depthTexture).__webglTexture || y.depthTexture.image.width !== y.width || y.depthTexture.image.height !== y.height) && (y.depthTexture.image.width = y.width, y.depthTexture.image.height = y.height, y.depthTexture.needsUpdate = !0), P(y.depthTexture, 0); let Y = n.get(y.depthTexture).__webglTexture, K = ye(y); if (y.depthTexture.format === Ci) ze(y) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, Y, 0, K) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, Y, 0); else if (y.depthTexture.format === as) ze(y) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, Y, 0, K) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, Y, 0); else throw new Error("Unknown depthTexture format") } function se(E) { let y = n.get(E), k = E.isWebGLCubeRenderTarget === !0; if (E.depthTexture && !y.__autoAllocateDepthBuffer) { if (k) throw new Error("target.depthTexture not supported in Cube render targets"); he(y.__webglFramebuffer, E) } else if (k) { y.__webglDepthbuffer = []; for (let Y = 0; Y < 6; Y++)t.bindFramebuffer(s.FRAMEBUFFER, y.__webglFramebuffer[Y]), y.__webglDepthbuffer[Y] = s.createRenderbuffer(), ee(y.__webglDepthbuffer[Y], E, !1) } else t.bindFramebuffer(s.FRAMEBUFFER, y.__webglFramebuffer), y.__webglDepthbuffer = s.createRenderbuffer(), ee(y.__webglDepthbuffer, E, !1); t.bindFramebuffer(s.FRAMEBUFFER, null) } function Be(E, y, k) { let Y = n.get(E); y !== void 0 && G(Y.__webglFramebuffer, E, E.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), k !== void 0 && se(E) } function Ne(E) { let y = E.texture, k = n.get(E), Y = n.get(y); E.addEventListener("dispose", N); let K = E.textures, $ = E.isWebGLCubeRenderTarget === !0, me = K.length > 1; if (me || (Y.__webglTexture === void 0 && (Y.__webglTexture = s.createTexture()), Y.__version = y.version, o.memory.textures++), $) { k.__webglFramebuffer = []; for (let ae = 0; ae < 6; ae++)if (y.mipmaps && y.mipmaps.length > 0) { k.__webglFramebuffer[ae] = []; for (let oe = 0; oe < y.mipmaps.length; oe++)k.__webglFramebuffer[ae][oe] = s.createFramebuffer() } else k.__webglFramebuffer[ae] = s.createFramebuffer() } else { if (y.mipmaps && y.mipmaps.length > 0) { k.__webglFramebuffer = []; for (let ae = 0; ae < y.mipmaps.length; ae++)k.__webglFramebuffer[ae] = s.createFramebuffer() } else k.__webglFramebuffer = s.createFramebuffer(); if (me) for (let ae = 0, oe = K.length; ae < oe; ae++) { let Se = n.get(K[ae]); Se.__webglTexture === void 0 && (Se.__webglTexture = s.createTexture(), o.memory.textures++) } if (E.samples > 0 && ze(E) === !1) { k.__webglMultisampledFramebuffer = s.createFramebuffer(), k.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, k.__webglMultisampledFramebuffer); for (let ae = 0; ae < K.length; ae++) { let oe = K[ae]; k.__webglColorRenderbuffer[ae] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, k.__webglColorRenderbuffer[ae]); let Se = r.convert(oe.format, oe.colorSpace), ne = r.convert(oe.type), pe = A(oe.internalFormat, Se, ne, oe.colorSpace, E.isXRRenderTarget === !0), Ve = ye(E); s.renderbufferStorageMultisample(s.RENDERBUFFER, Ve, pe, E.width, E.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ae, s.RENDERBUFFER, k.__webglColorRenderbuffer[ae]) } s.bindRenderbuffer(s.RENDERBUFFER, null), E.depthBuffer && (k.__webglDepthRenderbuffer = s.createRenderbuffer(), ee(k.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(s.FRAMEBUFFER, null) } } if ($) { t.bindTexture(s.TEXTURE_CUBE_MAP, Y.__webglTexture), j(s.TEXTURE_CUBE_MAP, y); for (let ae = 0; ae < 6; ae++)if (y.mipmaps && y.mipmaps.length > 0) for (let oe = 0; oe < y.mipmaps.length; oe++)G(k.__webglFramebuffer[ae][oe], E, y, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ae, oe); else G(k.__webglFramebuffer[ae], E, y, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0); m(y) && p(s.TEXTURE_CUBE_MAP), t.unbindTexture() } else if (me) { for (let ae = 0, oe = K.length; ae < oe; ae++) { let Se = K[ae], ne = n.get(Se); t.bindTexture(s.TEXTURE_2D, ne.__webglTexture), j(s.TEXTURE_2D, Se), G(k.__webglFramebuffer, E, Se, s.COLOR_ATTACHMENT0 + ae, s.TEXTURE_2D, 0), m(Se) && p(s.TEXTURE_2D) } t.unbindTexture() } else { let ae = s.TEXTURE_2D; if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (ae = E.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), t.bindTexture(ae, Y.__webglTexture), j(ae, y), y.mipmaps && y.mipmaps.length > 0) for (let oe = 0; oe < y.mipmaps.length; oe++)G(k.__webglFramebuffer[oe], E, y, s.COLOR_ATTACHMENT0, ae, oe); else G(k.__webglFramebuffer, E, y, s.COLOR_ATTACHMENT0, ae, 0); m(y) && p(ae), t.unbindTexture() } E.depthBuffer && se(E) } function D(E) { let y = E.textures; for (let k = 0, Y = y.length; k < Y; k++) { let K = y[k]; if (m(K)) { let $ = E.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : s.TEXTURE_2D, me = n.get(K).__webglTexture; t.bindTexture($, me), p($), t.unbindTexture() } } } let Ze = [], ge = []; function Ke(E) { if (E.samples > 0) { if (ze(E) === !1) { let y = E.textures, k = E.width, Y = E.height, K = s.COLOR_BUFFER_BIT, $ = E.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, me = n.get(E), ae = y.length > 1; if (ae) for (let oe = 0; oe < y.length; oe++)t.bindFramebuffer(s.FRAMEBUFFER, me.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + oe, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, me.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + oe, s.TEXTURE_2D, null, 0); t.bindFramebuffer(s.READ_FRAMEBUFFER, me.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, me.__webglFramebuffer); for (let oe = 0; oe < y.length; oe++) { if (E.resolveDepthBuffer && (E.depthBuffer && (K |= s.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (K |= s.STENCIL_BUFFER_BIT)), ae) { s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, me.__webglColorRenderbuffer[oe]); let Se = n.get(y[oe]).__webglTexture; s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, Se, 0) } s.blitFramebuffer(0, 0, k, Y, 0, 0, k, Y, K, s.NEAREST), c === !0 && (Ze.length = 0, ge.length = 0, Ze.push(s.COLOR_ATTACHMENT0 + oe), E.depthBuffer && E.resolveDepthBuffer === !1 && (Ze.push($), ge.push($), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, ge)), s.invalidateFramebuffer(s.READ_FRAMEBUFFER, Ze)) } if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), ae) for (let oe = 0; oe < y.length; oe++) { t.bindFramebuffer(s.FRAMEBUFFER, me.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + oe, s.RENDERBUFFER, me.__webglColorRenderbuffer[oe]); let Se = n.get(y[oe]).__webglTexture; t.bindFramebuffer(s.FRAMEBUFFER, me.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + oe, s.TEXTURE_2D, Se, 0) } t.bindFramebuffer(s.DRAW_FRAMEBUFFER, me.__webglMultisampledFramebuffer) } else if (E.depthBuffer && E.resolveDepthBuffer === !1 && c) { let y = E.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT; s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [y]) } } } function ye(E) { return Math.min(i.maxSamples, E.samples) } function ze(E) { let y = n.get(E); return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && y.__useRenderToTexture !== !1 } function Te(E) { let y = o.render.frame; h.get(E) !== y && (h.set(E, y), E.update()) } function He(E, y) { let k = E.colorSpace, Y = E.format, K = E.type; return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || k !== ht && k !== Ln && (We.getTransfer(k) === et ? (Y !== Jt || K !== On) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", k)), y } function tt(E) { return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (l.width = E.naturalWidth || E.width, l.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (l.width = E.displayWidth, l.height = E.displayHeight) : (l.width = E.width, l.height = E.height), l } this.allocateTextureUnit = B, this.resetTextureUnits = v, this.setTexture2D = P, this.setTexture2DArray = W, this.setTexture3D = q, this.setTextureCube = J, this.rebindTextures = Be, this.setupRenderTarget = Ne, this.updateRenderTargetMipmap = D, this.updateMultisampleRenderTarget = Ke, this.setupDepthRenderbuffer = se, this.setupFrameBufferTexture = G, this.useMultisampledRTT = ze } function Tg(s, e) { function t(n, i = Ln) { let r, o = We.getTransfer(i); if (n === On) return s.UNSIGNED_BYTE; if (n === Hl) return s.UNSIGNED_SHORT_4_4_4_4; if (n === Vl) return s.UNSIGNED_SHORT_5_5_5_1; if (n === ru) return s.UNSIGNED_INT_5_9_9_9_REV; if (n === iu) return s.BYTE; if (n === su) return s.SHORT; if (n === zl) return s.UNSIGNED_SHORT; if (n === kl) return s.INT; if (n === Di) return s.UNSIGNED_INT; if (n === tn) return s.FLOAT; if (n === Ir) return s.HALF_FLOAT; if (n === ou) return s.ALPHA; if (n === au) return s.RGB; if (n === Jt) return s.RGBA; if (n === cu) return s.LUMINANCE; if (n === lu) return s.LUMINANCE_ALPHA; if (n === Ci) return s.DEPTH_COMPONENT; if (n === as) return s.DEPTH_STENCIL; if (n === Gl) return s.RED; if (n === Wl) return s.RED_INTEGER; if (n === hu) return s.RG; if (n === Xl) return s.RG_INTEGER; if (n === Yl) return s.RGBA_INTEGER; if (n === Wr || n === Xr || n === Yr || n === qr) if (o === et) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) { if (n === Wr) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT; if (n === Xr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (n === Yr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (n === qr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else return null; else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) { if (n === Wr) return r.COMPRESSED_RGB_S3TC_DXT1_EXT; if (n === Xr) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (n === Yr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (n === qr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT } else return null; if (n === Qa || n === ec || n === tc || n === nc) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) { if (n === Qa) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (n === ec) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (n === tc) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (n === nc) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } else return null; if (n === ic || n === sc || n === rc) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) { if (n === ic || n === sc) return o === et ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2; if (n === rc) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC } else return null; if (n === oc || n === ac || n === cc || n === lc || n === hc || n === uc || n === dc || n === fc || n === pc || n === mc || n === gc || n === _c || n === xc || n === yc) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) { if (n === oc) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR; if (n === ac) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR; if (n === cc) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR; if (n === lc) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR; if (n === hc) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR; if (n === uc) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR; if (n === dc) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR; if (n === fc) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR; if (n === pc) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR; if (n === mc) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR; if (n === gc) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR; if (n === _c) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR; if (n === xc) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR; if (n === yc) return o === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR } else return null; if (n === Zr || n === vc || n === Mc) if (r = e.get("EXT_texture_compression_bptc"), r !== null) { if (n === Zr) return o === et ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT; if (n === vc) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT; if (n === Mc) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT } else return null; if (n === uu || n === Sc || n === bc || n === Ac) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) { if (n === Zr) return r.COMPRESSED_RED_RGTC1_EXT; if (n === Sc) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT; if (n === bc) return r.COMPRESSED_RED_GREEN_RGTC2_EXT; if (n === Ac) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT } else return null; return n === ys ? s.UNSIGNED_INT_24_8 : s[n] !== void 0 ? s[n] : null } return { convert: t } } var Wo = class extends ut { constructor(e = []) { super(), this.isArrayCamera = !0, this.cameras = e } }, nn = class extends rt { constructor() { super(), this.isGroup = !0, this.type = "Group" } }, Eg = { type: "move" }, rs = class { constructor() { this._targetRay = null, this._grip = null, this._hand = null } getHandSpace() { return this._hand === null && (this._hand = new nn, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand } getTargetRaySpace() { return this._targetRay === null && (this._targetRay = new nn, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new C, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new C), this._targetRay } getGripSpace() { return this._grip === null && (this._grip = new nn, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new C, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new C), this._grip } dispatchEvent(e) { return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this } connect(e) { if (e && e.hand) { let t = this._hand; if (t) for (let n of e.hand.values()) this._getHandJoint(t, n) } return this.dispatchEvent({ type: "connected", data: e }), this } disconnect(e) { return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this } update(e, t, n) { let i = null, r = null, o = null, a = this._targetRay, c = this._grip, l = this._hand; if (e && t.session.visibilityState !== "visible-blurred") { if (l && e.hand) { o = !0; for (let x of e.hand.values()) { let m = t.getJointPose(x, n), p = this._getHandJoint(l, x); m !== null && (p.matrix.fromArray(m.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = m.radius), p.visible = m !== null } let h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = .02, g = .005; l.inputState.pinching && d > f + g ? (l.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !l.inputState.pinching && d <= f - g && (l.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this })) } else c !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1, r.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1)); a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Eg))) } return a !== null && (a.visible = i !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = o !== null), this } _getHandJoint(e, t) { if (e.joints[t.jointName] === void 0) { let n = new nn; n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n) } return e.joints[t.jointName] } }, wg = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Rg = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`, Xo = class { constructor() { this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0 } init(e, t, n) { if (this.texture === null) { let i = new _t, r = e.properties.get(i); r.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i } } render(e, t) { if (this.texture !== null) { if (this.mesh === null) { let n = t.cameras[0].viewport, i = new an({ vertexShader: wg, fragmentShader: Rg, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: n.z }, depthHeight: { value: n.w } } }); this.mesh = new bt(new lr(20, 20), i) } e.render(this.mesh, t) } } reset() { this.texture = null, this.mesh = null } }, Yo = class extends rn { constructor(e, t) { super(); let n = this, i = null, r = 1, o = null, a = "local-floor", c = 1, l = null, h = null, u = null, d = null, f = null, g = null, x = new Xo, m = t.getContextAttributes(), p = null, A = null, M = [], T = [], N = new xe, R = null, w = new ut; w.layers.enable(1), w.viewport = new $e; let H = new ut; H.layers.enable(2), H.viewport = new $e; let b = [w, H], v = new Wo; v.layers.enable(1), v.layers.enable(2); let B = null, X = null; this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (G) { let ee = M[G]; return ee === void 0 && (ee = new rs, M[G] = ee), ee.getTargetRaySpace() }, this.getControllerGrip = function (G) { let ee = M[G]; return ee === void 0 && (ee = new rs, M[G] = ee), ee.getGripSpace() }, this.getHand = function (G) { let ee = M[G]; return ee === void 0 && (ee = new rs, M[G] = ee), ee.getHandSpace() }; function P(G) { let ee = T.indexOf(G.inputSource); if (ee === -1) return; let he = M[ee]; he !== void 0 && (he.update(G.inputSource, G.frame, l || o), he.dispatchEvent({ type: G.type, data: G.inputSource })) } function W() { i.removeEventListener("select", P), i.removeEventListener("selectstart", P), i.removeEventListener("selectend", P), i.removeEventListener("squeeze", P), i.removeEventListener("squeezestart", P), i.removeEventListener("squeezeend", P), i.removeEventListener("end", W), i.removeEventListener("inputsourceschange", q); for (let G = 0; G < M.length; G++) { let ee = T[G]; ee !== null && (T[G] = null, M[G].disconnect(ee)) } B = null, X = null, x.reset(), e.setRenderTarget(p), f = null, d = null, u = null, i = null, A = null, Ye.stop(), n.isPresenting = !1, e.setPixelRatio(R), e.setSize(N.width, N.height, !1), n.dispatchEvent({ type: "sessionend" }) } this.setFramebufferScaleFactor = function (G) { r = G, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function (G) { a = G, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function () { return l || o }, this.setReferenceSpace = function (G) { l = G }, this.getBaseLayer = function () { return d !== null ? d : f }, this.getBinding = function () { return u }, this.getFrame = function () { return g }, this.getSession = function () { return i }, this.setSession = async function (G) { if (i = G, i !== null) { if (p = e.getRenderTarget(), i.addEventListener("select", P), i.addEventListener("selectstart", P), i.addEventListener("selectend", P), i.addEventListener("squeeze", P), i.addEventListener("squeezestart", P), i.addEventListener("squeezeend", P), i.addEventListener("end", W), i.addEventListener("inputsourceschange", q), m.xrCompatible !== !0 && await t.makeXRCompatible(), R = e.getPixelRatio(), e.getSize(N), i.renderState.layers === void 0) { let ee = { antialias: m.antialias, alpha: !0, depth: m.depth, stencil: m.stencil, framebufferScaleFactor: r }; f = new XRWebGLLayer(i, t, ee), i.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, !1), A = new vn(f.framebufferWidth, f.framebufferHeight, { format: Jt, type: On, colorSpace: e.outputColorSpace, stencilBuffer: m.stencil }) } else { let ee = null, he = null, se = null; m.depth && (se = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ee = m.stencil ? as : Ci, he = m.stencil ? ys : Di); let Be = { colorFormat: t.RGBA8, depthFormat: se, scaleFactor: r }; u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(Be), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), A = new vn(d.textureWidth, d.textureHeight, { format: Jt, type: On, depthTexture: new ur(d.textureWidth, d.textureHeight, he, void 0, void 0, void 0, void 0, void 0, void 0, ee), stencilBuffer: m.stencil, colorSpace: e.outputColorSpace, samples: m.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === !1 }) } A.isXRRenderTarget = !0, this.setFoveation(c), l = null, o = await i.requestReferenceSpace(a), Ye.setContext(i), Ye.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" }) } }, this.getEnvironmentBlendMode = function () { if (i !== null) return i.environmentBlendMode }; function q(G) { for (let ee = 0; ee < G.removed.length; ee++) { let he = G.removed[ee], se = T.indexOf(he); se >= 0 && (T[se] = null, M[se].disconnect(he)) } for (let ee = 0; ee < G.added.length; ee++) { let he = G.added[ee], se = T.indexOf(he); if (se === -1) { for (let Ne = 0; Ne < M.length; Ne++)if (Ne >= T.length) { T.push(he), se = Ne; break } else if (T[Ne] === null) { T[Ne] = he, se = Ne; break } if (se === -1) break } let Be = M[se]; Be && Be.connect(he) } } let J = new C, ie = new C; function V(G, ee, he) { J.setFromMatrixPosition(ee.matrixWorld), ie.setFromMatrixPosition(he.matrixWorld); let se = J.distanceTo(ie), Be = ee.projectionMatrix.elements, Ne = he.projectionMatrix.elements, D = Be[14] / (Be[10] - 1), Ze = Be[14] / (Be[10] + 1), ge = (Be[9] + 1) / Be[5], Ke = (Be[9] - 1) / Be[5], ye = (Be[8] - 1) / Be[0], ze = (Ne[8] + 1) / Ne[0], Te = D * ye, He = D * ze, tt = se / (-ye + ze), E = tt * -ye; ee.matrixWorld.decompose(G.position, G.quaternion, G.scale), G.translateX(E), G.translateZ(tt), G.matrixWorld.compose(G.position, G.quaternion, G.scale), G.matrixWorldInverse.copy(G.matrixWorld).invert(); let y = D + tt, k = Ze + tt, Y = Te - E, K = He + (se - E), $ = ge * Ze / k * y, me = Ke * Ze / k * y; G.projectionMatrix.makePerspective(Y, K, $, me, y, k), G.projectionMatrixInverse.copy(G.projectionMatrix).invert() } function Q(G, ee) { ee === null ? G.matrixWorld.copy(G.matrix) : G.matrixWorld.multiplyMatrices(ee.matrixWorld, G.matrix), G.matrixWorldInverse.copy(G.matrixWorld).invert() } this.updateCamera = function (G) { if (i === null) return; x.texture !== null && (G.near = x.depthNear, G.far = x.depthFar), v.near = H.near = w.near = G.near, v.far = H.far = w.far = G.far, (B !== v.near || X !== v.far) && (i.updateRenderState({ depthNear: v.near, depthFar: v.far }), B = v.near, X = v.far, w.near = B, w.far = X, H.near = B, H.far = X, w.updateProjectionMatrix(), H.updateProjectionMatrix(), G.updateProjectionMatrix()); let ee = G.parent, he = v.cameras; Q(v, ee); for (let se = 0; se < he.length; se++)Q(he[se], ee); he.length === 2 ? V(v, w, H) : v.projectionMatrix.copy(w.projectionMatrix), j(G, v, ee) }; function j(G, ee, he) { he === null ? G.matrix.copy(ee.matrixWorld) : (G.matrix.copy(he.matrixWorld), G.matrix.invert(), G.matrix.multiply(ee.matrixWorld)), G.matrix.decompose(G.position, G.quaternion, G.scale), G.updateMatrixWorld(!0), G.projectionMatrix.copy(ee.projectionMatrix), G.projectionMatrixInverse.copy(ee.projectionMatrixInverse), G.isPerspectiveCamera && (G.fov = Oi * 2 * Math.atan(1 / G.projectionMatrix.elements[5]), G.zoom = 1) } this.getCamera = function () { return v }, this.getFoveation = function () { if (!(d === null && f === null)) return c }, this.setFoveation = function (G) { c = G, d !== null && (d.fixedFoveation = G), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = G) }, this.hasDepthSensing = function () { return x.texture !== null }; let de = null; function Fe(G, ee) { if (h = ee.getViewerPose(l || o), g = ee, h !== null) { let he = h.views; f !== null && (e.setRenderTargetFramebuffer(A, f.framebuffer), e.setRenderTarget(A)); let se = !1; he.length !== v.cameras.length && (v.cameras.length = 0, se = !0); for (let Ne = 0; Ne < he.length; Ne++) { let D = he[Ne], Ze = null; if (f !== null) Ze = f.getViewport(D); else { let Ke = u.getViewSubImage(d, D); Ze = Ke.viewport, Ne === 0 && (e.setRenderTargetTextures(A, Ke.colorTexture, d.ignoreDepthValues ? void 0 : Ke.depthStencilTexture), e.setRenderTarget(A)) } let ge = b[Ne]; ge === void 0 && (ge = new ut, ge.layers.enable(Ne), ge.viewport = new $e, b[Ne] = ge), ge.matrix.fromArray(D.transform.matrix), ge.matrix.decompose(ge.position, ge.quaternion, ge.scale), ge.projectionMatrix.fromArray(D.projectionMatrix), ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(), ge.viewport.set(Ze.x, Ze.y, Ze.width, Ze.height), Ne === 0 && (v.matrix.copy(ge.matrix), v.matrix.decompose(v.position, v.quaternion, v.scale)), se === !0 && v.cameras.push(ge) } let Be = i.enabledFeatures; if (Be && Be.includes("depth-sensing")) { let Ne = u.getDepthInformation(he[0]); Ne && Ne.isValid && Ne.texture && x.init(e, Ne, i.renderState) } } for (let he = 0; he < M.length; he++) { let se = T[he], Be = M[he]; se !== null && Be !== void 0 && Be.update(se, ee, l || o) } x.render(e, v), de && de(G, ee), ee.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ee }), g = null } let Ye = new eh; Ye.setAnimationLoop(Fe), this.setAnimationLoop = function (G) { de = G }, this.dispose = function () { } } }, $n = new on, Cg = new Le; function Pg(s, e) { function t(m, p) { m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix) } function n(m, p) { p.color.getRGB(m.fogColor.value, Ql(s)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density) } function i(m, p, A, M, T) { p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(m, p) : p.isMeshToonMaterial ? (r(m, p), u(m, p)) : p.isMeshPhongMaterial ? (r(m, p), h(m, p)) : p.isMeshStandardMaterial ? (r(m, p), d(m, p), p.isMeshPhysicalMaterial && f(m, p, T)) : p.isMeshMatcapMaterial ? (r(m, p), g(m, p)) : p.isMeshDepthMaterial ? r(m, p) : p.isMeshDistanceMaterial ? (r(m, p), x(m, p)) : p.isMeshNormalMaterial ? r(m, p) : p.isLineBasicMaterial ? (o(m, p), p.isLineDashedMaterial && a(m, p)) : p.isPointsMaterial ? c(m, p, A, M) : p.isSpriteMaterial ? l(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1) } function r(m, p) { m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, t(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === wt && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, t(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === wt && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, t(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, t(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest); let A = e.get(p), M = A.envMap, T = A.envMapRotation; if (M && (m.envMap.value = M, $n.copy(T), $n.x *= -1, $n.y *= -1, $n.z *= -1, M.isCubeTexture && M.isRenderTargetTexture === !1 && ($n.y *= -1, $n.z *= -1), m.envMapRotation.value.setFromMatrix4(Cg.makeRotationFromEuler($n)), m.flipEnvMap.value = M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap) { m.lightMap.value = p.lightMap; let N = s._useLegacyLights === !0 ? Math.PI : 1; m.lightMapIntensity.value = p.lightMapIntensity * N, t(p.lightMap, m.lightMapTransform) } p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, m.aoMapTransform)) } function o(m, p) { m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, t(p.map, m.mapTransform)) } function a(m, p) { m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale } function c(m, p, A, M) { m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * A, m.scale.value = M * .5, p.map && (m.map.value = p.map, t(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest) } function l(m, p) { m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest) } function h(m, p) { m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4) } function u(m, p) { p.gradientMap && (m.gradientMap.value = p.gradientMap) } function d(m, p) { m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, m.roughnessMapTransform)), p.envMap && (m.envMapIntensity.value = p.envMapIntensity) } function f(m, p, A) { m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === wt && m.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (m.dispersion.value = p.dispersion), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = A.texture, m.transmissionSamplerSize.value.set(A.width, A.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, m.specularIntensityMapTransform)) } function g(m, p) { p.matcap && (m.matcap.value = p.matcap) } function x(m, p) { let A = e.get(p).light; m.referencePosition.value.setFromMatrixPosition(A.matrixWorld), m.nearDistance.value = A.shadow.camera.near, m.farDistance.value = A.shadow.camera.far } return { refreshFogUniforms: n, refreshMaterialUniforms: i } } function Ig(s, e, t, n) { let i = {}, r = {}, o = [], a = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS); function c(A, M) { let T = M.program; n.uniformBlockBinding(A, T) } function l(A, M) { let T = i[A.id]; T === void 0 && (g(A), T = h(A), i[A.id] = T, A.addEventListener("dispose", m)); let N = M.program; n.updateUBOMapping(A, N); let R = e.render.frame; r[A.id] !== R && (d(A), r[A.id] = R) } function h(A) { let M = u(); A.__bindingPointIndex = M; let T = s.createBuffer(), N = A.__size, R = A.usage; return s.bindBuffer(s.UNIFORM_BUFFER, T), s.bufferData(s.UNIFORM_BUFFER, N, R), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, M, T), T } function u() { for (let A = 0; A < a; A++)if (o.indexOf(A) === -1) return o.push(A), A; return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0 } function d(A) { let M = i[A.id], T = A.uniforms, N = A.__cache; s.bindBuffer(s.UNIFORM_BUFFER, M); for (let R = 0, w = T.length; R < w; R++) { let H = Array.isArray(T[R]) ? T[R] : [T[R]]; for (let b = 0, v = H.length; b < v; b++) { let B = H[b]; if (f(B, R, b, N) === !0) { let X = B.__offset, P = Array.isArray(B.value) ? B.value : [B.value], W = 0; for (let q = 0; q < P.length; q++) { let J = P[q], ie = x(J); typeof J == "number" || typeof J == "boolean" ? (B.__data[0] = J, s.bufferSubData(s.UNIFORM_BUFFER, X + W, B.__data)) : J.isMatrix3 ? (B.__data[0] = J.elements[0], B.__data[1] = J.elements[1], B.__data[2] = J.elements[2], B.__data[3] = 0, B.__data[4] = J.elements[3], B.__data[5] = J.elements[4], B.__data[6] = J.elements[5], B.__data[7] = 0, B.__data[8] = J.elements[6], B.__data[9] = J.elements[7], B.__data[10] = J.elements[8], B.__data[11] = 0) : (J.toArray(B.__data, W), W += ie.storage / Float32Array.BYTES_PER_ELEMENT) } s.bufferSubData(s.UNIFORM_BUFFER, X, B.__data) } } } s.bindBuffer(s.UNIFORM_BUFFER, null) } function f(A, M, T, N) { let R = A.value, w = M + "_" + T; if (N[w] === void 0) return typeof R == "number" || typeof R == "boolean" ? N[w] = R : N[w] = R.clone(), !0; { let H = N[w]; if (typeof R == "number" || typeof R == "boolean") { if (H !== R) return N[w] = R, !0 } else if (H.equals(R) === !1) return H.copy(R), !0 } return !1 } function g(A) { let M = A.uniforms, T = 0, N = 16; for (let w = 0, H = M.length; w < H; w++) { let b = Array.isArray(M[w]) ? M[w] : [M[w]]; for (let v = 0, B = b.length; v < B; v++) { let X = b[v], P = Array.isArray(X.value) ? X.value : [X.value]; for (let W = 0, q = P.length; W < q; W++) { let J = P[W], ie = x(J), V = T % N; V !== 0 && N - V < ie.boundary && (T += N - V), X.__data = new Float32Array(ie.storage / Float32Array.BYTES_PER_ELEMENT), X.__offset = T, T += ie.storage } } } let R = T % N; return R > 0 && (T += N - R), A.__size = T, A.__cache = {}, this } function x(A) { let M = { boundary: 0, storage: 0 }; return typeof A == "number" || typeof A == "boolean" ? (M.boundary = 4, M.storage = 4) : A.isVector2 ? (M.boundary = 8, M.storage = 8) : A.isVector3 || A.isColor ? (M.boundary = 16, M.storage = 12) : A.isVector4 ? (M.boundary = 16, M.storage = 16) : A.isMatrix3 ? (M.boundary = 48, M.storage = 48) : A.isMatrix4 ? (M.boundary = 64, M.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), M } function m(A) { let M = A.target; M.removeEventListener("dispose", m); let T = o.indexOf(M.__bindingPointIndex); o.splice(T, 1), s.deleteBuffer(i[M.id]), delete i[M.id], delete r[M.id] } function p() { for (let A in i) s.deleteBuffer(i[A]); o = [], i = {}, r = {} } return { bind: c, update: l, dispose: p } } var dr = class { constructor(e = {}) { let { canvas: t = zu(), context: n = null, depth: i = !0, stencil: r = !1, alpha: o = !1, antialias: a = !1, premultipliedAlpha: c = !0, preserveDrawingBuffer: l = !1, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = !1 } = e; this.isWebGLRenderer = !0; let d; if (n !== null) { if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163."); d = n.getContextAttributes().alpha } else d = o; let f = new Uint32Array(4), g = new Int32Array(4), x = null, m = null, p = [], A = []; this.domElement = t, this.debug = { checkShaderErrors: !0, onShaderError: null }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = ot, this._useLegacyLights = !1, this.toneMapping = Un, this.toneMappingExposure = 1; let M = this, T = !1, N = 0, R = 0, w = null, H = -1, b = null, v = new $e, B = new $e, X = null, P = new Me(0), W = 0, q = t.width, J = t.height, ie = 1, V = null, Q = null, j = new $e(0, 0, q, J), de = new $e(0, 0, q, J), Fe = !1, Ye = new hs, G = !1, ee = !1, he = new Le, se = new C, Be = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }; function Ne() { return w === null ? ie : 1 } let D = n; function Ze(S, L) { return t.getContext(S, L) } try { let S = { alpha: !0, depth: i, stencil: r, antialias: a, premultipliedAlpha: c, preserveDrawingBuffer: l, powerPreference: h, failIfMajorPerformanceCaveat: u }; if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${ra}`), t.addEventListener("webglcontextlost", _, !1), t.addEventListener("webglcontextrestored", I, !1), t.addEventListener("webglcontextcreationerror", U, !1), D === null) { let L = "webgl2"; if (D = Ze(L, S), D === null) throw Ze(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") } } catch (S) { throw console.error("THREE.WebGLRenderer: " + S.message), S } let ge, Ke, ye, ze, Te, He, tt, E, y, k, Y, K, $, me, ae, oe, Se, ne, pe, Ve, _e, le, Ee, De; function Je() { ge = new Jp(D), ge.init(), le = new Tg(D, ge), Ke = new Wp(D, ge, e, le), ye = new bg(D), ze = new Qp(D), Te = new ug, He = new Ag(D, ge, ye, Te, Ke, le, ze), tt = new Yp(M), E = new Kp(M), y = new rd(D), Ee = new Vp(D, y), k = new $p(D, y, ze, Ee), Y = new tm(D, k, y, ze), pe = new em(D, Ke, He), oe = new Xp(Te), K = new hg(M, tt, E, ge, Ke, Ee, oe), $ = new Pg(M, Te), me = new fg, ae = new yg(ge), ne = new Hp(M, tt, E, ye, Y, d, c), Se = new Sg(M, Y, Ke), De = new Ig(D, ze, Ke, ye), Ve = new Gp(D, ge, ze), _e = new jp(D, ge, ze), ze.programs = K.programs, M.capabilities = Ke, M.extensions = ge, M.properties = Te, M.renderLists = me, M.shadowMap = Se, M.state = ye, M.info = ze } Je(); let Re = new Yo(M, D); this.xr = Re, this.getContext = function () { return D }, this.getContextAttributes = function () { return D.getContextAttributes() }, this.forceContextLoss = function () { let S = ge.get("WEBGL_lose_context"); S && S.loseContext() }, this.forceContextRestore = function () { let S = ge.get("WEBGL_lose_context"); S && S.restoreContext() }, this.getPixelRatio = function () { return ie }, this.setPixelRatio = function (S) { S !== void 0 && (ie = S, this.setSize(q, J, !1)) }, this.getSize = function (S) { return S.set(q, J) }, this.setSize = function (S, L, z = !0) { if (Re.isPresenting) { console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."); return } q = S, J = L, t.width = Math.floor(S * ie), t.height = Math.floor(L * ie), z === !0 && (t.style.width = S + "px", t.style.height = L + "px"), this.setViewport(0, 0, S, L) }, this.getDrawingBufferSize = function (S) { return S.set(q * ie, J * ie).floor() }, this.setDrawingBufferSize = function (S, L, z) { q = S, J = L, ie = z, t.width = Math.floor(S * z), t.height = Math.floor(L * z), this.setViewport(0, 0, S, L) }, this.getCurrentViewport = function (S) { return S.copy(v) }, this.getViewport = function (S) { return S.copy(j) }, this.setViewport = function (S, L, z, O) { S.isVector4 ? j.set(S.x, S.y, S.z, S.w) : j.set(S, L, z, O), ye.viewport(v.copy(j).multiplyScalar(ie).round()) }, this.getScissor = function (S) { return S.copy(de) }, this.setScissor = function (S, L, z, O) { S.isVector4 ? de.set(S.x, S.y, S.z, S.w) : de.set(S, L, z, O), ye.scissor(B.copy(de).multiplyScalar(ie).round()) }, this.getScissorTest = function () { return Fe }, this.setScissorTest = function (S) { ye.setScissorTest(Fe = S) }, this.setOpaqueSort = function (S) { V = S }, this.setTransparentSort = function (S) { Q = S }, this.getClearColor = function (S) { return S.copy(ne.getClearColor()) }, this.setClearColor = function () { ne.setClearColor.apply(ne, arguments) }, this.getClearAlpha = function () { return ne.getClearAlpha() }, this.setClearAlpha = function () { ne.setClearAlpha.apply(ne, arguments) }, this.clear = function (S = !0, L = !0, z = !0) { let O = 0; if (S) { let F = !1; if (w !== null) { let ce = w.texture.format; F = ce === Yl || ce === Xl || ce === Wl } if (F) { let ce = w.texture.type, ue = ce === On || ce === Di || ce === zl || ce === ys || ce === Hl || ce === Vl, fe = ne.getClearColor(), ve = ne.getClearAlpha(), be = fe.r, Ce = fe.g, Oe = fe.b; ue ? (f[0] = be, f[1] = Ce, f[2] = Oe, f[3] = ve, D.clearBufferuiv(D.COLOR, 0, f)) : (g[0] = be, g[1] = Ce, g[2] = Oe, g[3] = ve, D.clearBufferiv(D.COLOR, 0, g)) } else O |= D.COLOR_BUFFER_BIT } L && (O |= D.DEPTH_BUFFER_BIT), z && (O |= D.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), D.clear(O) }, this.clearColor = function () { this.clear(!0, !1, !1) }, this.clearDepth = function () { this.clear(!1, !0, !1) }, this.clearStencil = function () { this.clear(!1, !1, !0) }, this.dispose = function () { t.removeEventListener("webglcontextlost", _, !1), t.removeEventListener("webglcontextrestored", I, !1), t.removeEventListener("webglcontextcreationerror", U, !1), me.dispose(), ae.dispose(), Te.dispose(), tt.dispose(), E.dispose(), Y.dispose(), Ee.dispose(), De.dispose(), K.dispose(), Re.dispose(), Re.removeEventListener("sessionstart", Ge), Re.removeEventListener("sessionend", at), Qe.stop() }; function _(S) { S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), T = !0 } function I() { console.log("THREE.WebGLRenderer: Context Restored."), T = !1; let S = ze.autoReset, L = Se.enabled, z = Se.autoUpdate, O = Se.needsUpdate, F = Se.type; Je(), ze.autoReset = S, Se.enabled = L, Se.autoUpdate = z, Se.needsUpdate = O, Se.type = F } function U(S) { console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage) } function Z(S) { let L = S.target; L.removeEventListener("dispose", Z), te(L) } function te(S) { we(S), Te.remove(S) } function we(S) { let L = Te.get(S).programs; L !== void 0 && (L.forEach(function (z) { K.releaseProgram(z) }), S.isShaderMaterial && K.releaseShaderCache(S)) } this.renderBufferDirect = function (S, L, z, O, F, ce) { L === null && (L = Be); let ue = F.isMesh && F.matrixWorld.determinant() < 0, fe = mh(S, L, z, O, F); ye.setMaterial(O, ue); let ve = z.index, be = 1; if (O.wireframe === !0) { if (ve = k.getWireframeAttribute(z), ve === void 0) return; be = 2 } let Ce = z.drawRange, Oe = z.attributes.position, ct = Ce.start * be, xt = (Ce.start + Ce.count) * be; ce !== null && (ct = Math.max(ct, ce.start * be), xt = Math.min(xt, (ce.start + ce.count) * be)), ve !== null ? (ct = Math.max(ct, 0), xt = Math.min(xt, ve.count)) : Oe != null && (ct = Math.max(ct, 0), xt = Math.min(xt, Oe.count)); let Pt = xt - ct; if (Pt < 0 || Pt === 1 / 0) return; Ee.setup(F, O, fe, z, ve); let hn, Xe = Ve; if (ve !== null && (hn = y.get(ve), Xe = _e, Xe.setIndex(hn)), F.isMesh) O.wireframe === !0 ? (ye.setLineWidth(O.wireframeLinewidth * Ne()), Xe.setMode(D.LINES)) : Xe.setMode(D.TRIANGLES); else if (F.isLine) { let Ae = O.linewidth; Ae === void 0 && (Ae = 1), ye.setLineWidth(Ae * Ne()), F.isLineSegments ? Xe.setMode(D.LINES) : F.isLineLoop ? Xe.setMode(D.LINE_LOOP) : Xe.setMode(D.LINE_STRIP) } else F.isPoints ? Xe.setMode(D.POINTS) : F.isSprite && Xe.setMode(D.TRIANGLES); if (F.isBatchedMesh) F._multiDrawInstances !== null ? Xe.renderMultiDrawInstances(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount, F._multiDrawInstances) : Xe.renderMultiDraw(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount); else if (F.isInstancedMesh) Xe.renderInstances(ct, Pt, F.count); else if (z.isInstancedBufferGeometry) { let Ae = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0, Xi = Math.min(z.instanceCount, Ae); Xe.renderInstances(ct, Pt, Xi) } else Xe.render(ct, Pt) }; function Ue(S, L, z) { S.transparent === !0 && S.side === Zt && S.forceSinglePass === !1 ? (S.side = wt, S.needsUpdate = !0, Ss(S, L, z), S.side = sn, S.needsUpdate = !0, Ss(S, L, z), S.side = Zt) : Ss(S, L, z) } this.compile = function (S, L, z = null) { z === null && (z = S), m = ae.get(z), m.init(L), A.push(m), z.traverseVisible(function (F) { F.isLight && F.layers.test(L.layers) && (m.pushLight(F), F.castShadow && m.pushShadow(F)) }), S !== z && S.traverseVisible(function (F) { F.isLight && F.layers.test(L.layers) && (m.pushLight(F), F.castShadow && m.pushShadow(F)) }), m.setupLights(M._useLegacyLights); let O = new Set; return S.traverse(function (F) { let ce = F.material; if (ce) if (Array.isArray(ce)) for (let ue = 0; ue < ce.length; ue++) { let fe = ce[ue]; Ue(fe, z, F), O.add(fe) } else Ue(ce, z, F), O.add(ce) }), A.pop(), m = null, O }, this.compileAsync = function (S, L, z = null) { let O = this.compile(S, L, z); return new Promise(F => { function ce() { if (O.forEach(function (ue) { Te.get(ue).currentProgram.isReady() && O.delete(ue) }), O.size === 0) { F(S); return } setTimeout(ce, 10) } ge.get("KHR_parallel_shader_compile") !== null ? ce() : setTimeout(ce, 10) }) }; let it = null; function pt(S) { it && it(S) } function Ge() { Qe.stop() } function at() { Qe.start() } let Qe = new eh; Qe.setAnimationLoop(pt), typeof self < "u" && Qe.setContext(self), this.setAnimationLoop = function (S) { it = S, Re.setAnimationLoop(S), S === null ? Qe.stop() : Qe.start() }, Re.addEventListener("sessionstart", Ge), Re.addEventListener("sessionend", at), this.render = function (S, L) { if (L !== void 0 && L.isCamera !== !0) { console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); return } if (T === !0) return; S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === !0 && L.updateMatrixWorld(), Re.enabled === !0 && Re.isPresenting === !0 && (Re.cameraAutoUpdate === !0 && Re.updateCamera(L), L = Re.getCamera()), S.isScene === !0 && S.onBeforeRender(M, S, L, w), m = ae.get(S, A.length), m.init(L), A.push(m), he.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), Ye.setFromProjectionMatrix(he), ee = this.localClippingEnabled, G = oe.init(this.clippingPlanes, ee), x = me.get(S, p.length), x.init(), p.push(x), bn(S, L, 0, M.sortObjects), x.finish(), M.sortObjects === !0 && x.sort(V, Q); let z = Re.enabled === !1 || Re.isPresenting === !1 || Re.hasDepthSensing() === !1; z && ne.addToRenderList(x, S), this.info.render.frame++, G === !0 && oe.beginShadows(); let O = m.state.shadowsArray; Se.render(O, S, L), G === !0 && oe.endShadows(), this.info.autoReset === !0 && this.info.reset(); let F = x.opaque, ce = x.transmissive; if (m.setupLights(M._useLegacyLights), L.isArrayCamera) { let ue = L.cameras; if (ce.length > 0) for (let fe = 0, ve = ue.length; fe < ve; fe++) { let be = ue[fe]; An(F, ce, S, be) } z && ne.render(S); for (let fe = 0, ve = ue.length; fe < ve; fe++) { let be = ue[fe]; Ft(x, S, be, be.viewport) } } else ce.length > 0 && An(F, ce, S, L), z && ne.render(S), Ft(x, S, L); w !== null && (He.updateMultisampleRenderTarget(w), He.updateRenderTargetMipmap(w)), S.isScene === !0 && S.onAfterRender(M, S, L), Ee.resetDefaultState(), H = -1, b = null, A.pop(), A.length > 0 ? (m = A[A.length - 1], G === !0 && oe.setGlobalState(M.clippingPlanes, m.state.camera)) : m = null, p.pop(), p.length > 0 ? x = p[p.length - 1] : x = null }; function bn(S, L, z, O) { if (S.visible === !1) return; if (S.layers.test(L.layers)) { if (S.isGroup) z = S.renderOrder; else if (S.isLOD) S.autoUpdate === !0 && S.update(L); else if (S.isLight) m.pushLight(S), S.castShadow && m.pushShadow(S); else if (S.isSprite) { if (!S.frustumCulled || Ye.intersectsSprite(S)) { O && se.setFromMatrixPosition(S.matrixWorld).applyMatrix4(he); let ue = Y.update(S), fe = S.material; fe.visible && x.push(S, ue, fe, z, se.z, null) } } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || Ye.intersectsObject(S))) { let ue = Y.update(S), fe = S.material; if (O && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), se.copy(S.boundingSphere.center)) : (ue.boundingSphere === null && ue.computeBoundingSphere(), se.copy(ue.boundingSphere.center)), se.applyMatrix4(S.matrixWorld).applyMatrix4(he)), Array.isArray(fe)) { let ve = ue.groups; for (let be = 0, Ce = ve.length; be < Ce; be++) { let Oe = ve[be], ct = fe[Oe.materialIndex]; ct && ct.visible && x.push(S, ue, ct, z, se.z, Oe) } } else fe.visible && x.push(S, ue, fe, z, se.z, null) } } let ce = S.children; for (let ue = 0, fe = ce.length; ue < fe; ue++)bn(ce[ue], L, z, O) } function Ft(S, L, z, O) { let F = S.opaque, ce = S.transmissive, ue = S.transparent; m.setupLightsView(z), G === !0 && oe.setGlobalState(M.clippingPlanes, z), O && ye.viewport(v.copy(O)), F.length > 0 && ln(F, L, z), ce.length > 0 && ln(ce, L, z), ue.length > 0 && ln(ue, L, z), ye.buffers.depth.setTest(!0), ye.buffers.depth.setMask(!0), ye.buffers.color.setMask(!0), ye.setPolygonOffset(!1) } function An(S, L, z, O) { if ((z.isScene === !0 ? z.overrideMaterial : null) !== null) return; m.state.transmissionRenderTarget[O.id] === void 0 && (m.state.transmissionRenderTarget[O.id] = new vn(1, 1, { generateMipmaps: !0, type: ge.has("EXT_color_buffer_half_float") || ge.has("EXT_color_buffer_float") ? Ir : On, minFilter: en, samples: 4, stencilBuffer: r, resolveDepthBuffer: !1, resolveStencilBuffer: !1 })); let ce = m.state.transmissionRenderTarget[O.id], ue = O.viewport || v; ce.setSize(ue.z, ue.w); let fe = M.getRenderTarget(); M.setRenderTarget(ce), M.getClearColor(P), W = M.getClearAlpha(), W < 1 && M.setClearColor(16777215, .5), M.clear(); let ve = M.toneMapping; M.toneMapping = Un; let be = O.viewport; if (O.viewport !== void 0 && (O.viewport = void 0), m.setupLightsView(O), G === !0 && oe.setGlobalState(M.clippingPlanes, O), ln(S, z, O), He.updateMultisampleRenderTarget(ce), He.updateRenderTargetMipmap(ce), ge.has("WEBGL_multisampled_render_to_texture") === !1) { let Ce = !1; for (let Oe = 0, ct = L.length; Oe < ct; Oe++) { let xt = L[Oe], Pt = xt.object, hn = xt.geometry, Xe = xt.material, Ae = xt.group; if (Xe.side === Zt && Pt.layers.test(O.layers)) { let Xi = Xe.side; Xe.side = wt, Xe.needsUpdate = !0, Wi(Pt, z, O, hn, Xe, Ae), Xe.side = Xi, Xe.needsUpdate = !0, Ce = !0 } } Ce === !0 && (He.updateMultisampleRenderTarget(ce), He.updateRenderTargetMipmap(ce)) } M.setRenderTarget(fe), M.setClearColor(P, W), be !== void 0 && (O.viewport = be), M.toneMapping = ve } function ln(S, L, z) { let O = L.isScene === !0 ? L.overrideMaterial : null; for (let F = 0, ce = S.length; F < ce; F++) { let ue = S[F], fe = ue.object, ve = ue.geometry, be = O === null ? ue.material : O, Ce = ue.group; fe.layers.test(z.layers) && Wi(fe, L, z, ve, be, Ce) } } function Wi(S, L, z, O, F, ce) { S.onBeforeRender(M, L, z, O, F, ce), S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), F.onBeforeRender(M, L, z, O, S, ce), F.transparent === !0 && F.side === Zt && F.forceSinglePass === !1 ? (F.side = wt, F.needsUpdate = !0, M.renderBufferDirect(z, L, O, F, S, ce), F.side = sn, F.needsUpdate = !0, M.renderBufferDirect(z, L, O, F, S, ce), F.side = Zt) : M.renderBufferDirect(z, L, O, F, S, ce), S.onAfterRender(M, L, z, O, F, ce) } function Ss(S, L, z) { L.isScene !== !0 && (L = Be); let O = Te.get(S), F = m.state.lights, ce = m.state.shadowsArray, ue = F.state.version, fe = K.getParameters(S, F.state, ce, L, z), ve = K.getProgramCacheKey(fe), be = O.programs; O.environment = S.isMeshStandardMaterial ? L.environment : null, O.fog = L.fog, O.envMap = (S.isMeshStandardMaterial ? E : tt).get(S.envMap || O.environment), O.envMapRotation = O.environment !== null && S.envMap === null ? L.environmentRotation : S.envMapRotation, be === void 0 && (S.addEventListener("dispose", Z), be = new Map, O.programs = be); let Ce = be.get(ve); if (Ce !== void 0) { if (O.currentProgram === Ce && O.lightsStateVersion === ue) return Xa(S, fe), Ce } else fe.uniforms = K.getUniforms(S), S.onBuild(z, fe, M), S.onBeforeCompile(fe, M), Ce = K.acquireProgram(fe, ve), be.set(ve, Ce), O.uniforms = fe.uniforms; let Oe = O.uniforms; return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Oe.clippingPlanes = oe.uniform), Xa(S, fe), O.needsLights = _h(S), O.lightsStateVersion = ue, O.needsLights && (Oe.ambientLightColor.value = F.state.ambient, Oe.lightProbe.value = F.state.probe, Oe.directionalLights.value = F.state.directional, Oe.directionalLightShadows.value = F.state.directionalShadow, Oe.spotLights.value = F.state.spot, Oe.spotLightShadows.value = F.state.spotShadow, Oe.rectAreaLights.value = F.state.rectArea, Oe.ltc_1.value = F.state.rectAreaLTC1, Oe.ltc_2.value = F.state.rectAreaLTC2, Oe.pointLights.value = F.state.point, Oe.pointLightShadows.value = F.state.pointShadow, Oe.hemisphereLights.value = F.state.hemi, Oe.directionalShadowMap.value = F.state.directionalShadowMap, Oe.directionalShadowMatrix.value = F.state.directionalShadowMatrix, Oe.spotShadowMap.value = F.state.spotShadowMap, Oe.spotLightMatrix.value = F.state.spotLightMatrix, Oe.spotLightMap.value = F.state.spotLightMap, Oe.pointShadowMap.value = F.state.pointShadowMap, Oe.pointShadowMatrix.value = F.state.pointShadowMatrix), O.currentProgram = Ce, O.uniformsList = null, Ce } function Wa(S) { if (S.uniformsList === null) { let L = S.currentProgram.getUniforms(); S.uniformsList = Ii.seqWithValue(L.seq, S.uniforms) } return S.uniformsList } function Xa(S, L) { let z = Te.get(S); z.outputColorSpace = L.outputColorSpace, z.batching = L.batching, z.instancing = L.instancing, z.instancingColor = L.instancingColor, z.instancingMorph = L.instancingMorph, z.skinning = L.skinning, z.morphTargets = L.morphTargets, z.morphNormals = L.morphNormals, z.morphColors = L.morphColors, z.morphTargetsCount = L.morphTargetsCount, z.numClippingPlanes = L.numClippingPlanes, z.numIntersection = L.numClipIntersection, z.vertexAlphas = L.vertexAlphas, z.vertexTangents = L.vertexTangents, z.toneMapping = L.toneMapping } function mh(S, L, z, O, F) { L.isScene !== !0 && (L = Be), He.resetTextureUnits(); let ce = L.fog, ue = O.isMeshStandardMaterial ? L.environment : null, fe = w === null ? M.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : ht, ve = (O.isMeshStandardMaterial ? E : tt).get(O.envMap || ue), be = O.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4, Ce = !!z.attributes.tangent && (!!O.normalMap || O.anisotropy > 0), Oe = !!z.morphAttributes.position, ct = !!z.morphAttributes.normal, xt = !!z.morphAttributes.color, Pt = Un; O.toneMapped && (w === null || w.isXRRenderTarget === !0) && (Pt = M.toneMapping); let hn = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, Xe = hn !== void 0 ? hn.length : 0, Ae = Te.get(O), Xi = m.state.lights; if (G === !0 && (ee === !0 || S !== b)) { let Bt = S === b && O.id === H; oe.setState(O, S, Bt) } let nt = !1; O.version === Ae.__version ? (Ae.needsLights && Ae.lightsStateVersion !== Xi.state.version || Ae.outputColorSpace !== fe || F.isBatchedMesh && Ae.batching === !1 || !F.isBatchedMesh && Ae.batching === !0 || F.isInstancedMesh && Ae.instancing === !1 || !F.isInstancedMesh && Ae.instancing === !0 || F.isSkinnedMesh && Ae.skinning === !1 || !F.isSkinnedMesh && Ae.skinning === !0 || F.isInstancedMesh && Ae.instancingColor === !0 && F.instanceColor === null || F.isInstancedMesh && Ae.instancingColor === !1 && F.instanceColor !== null || F.isInstancedMesh && Ae.instancingMorph === !0 && F.morphTexture === null || F.isInstancedMesh && Ae.instancingMorph === !1 && F.morphTexture !== null || Ae.envMap !== ve || O.fog === !0 && Ae.fog !== ce || Ae.numClippingPlanes !== void 0 && (Ae.numClippingPlanes !== oe.numPlanes || Ae.numIntersection !== oe.numIntersection) || Ae.vertexAlphas !== be || Ae.vertexTangents !== Ce || Ae.morphTargets !== Oe || Ae.morphNormals !== ct || Ae.morphColors !== xt || Ae.toneMapping !== Pt || Ae.morphTargetsCount !== Xe) && (nt = !0) : (nt = !0, Ae.__version = O.version); let Xn = Ae.currentProgram; nt === !0 && (Xn = Ss(O, L, F)); let Ya = !1, Yi = !1, Hr = !1, yt = Xn.getUniforms(), Tn = Ae.uniforms; if (ye.useProgram(Xn.program) && (Ya = !0, Yi = !0, Hr = !0), O.id !== H && (H = O.id, Yi = !0), Ya || b !== S) { yt.setValue(D, "projectionMatrix", S.projectionMatrix), yt.setValue(D, "viewMatrix", S.matrixWorldInverse); let Bt = yt.map.cameraPosition; Bt !== void 0 && Bt.setValue(D, se.setFromMatrixPosition(S.matrixWorld)), Ke.logarithmicDepthBuffer && yt.setValue(D, "logDepthBufFC", 2 / (Math.log(S.far + 1) / Math.LN2)), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && yt.setValue(D, "isOrthographic", S.isOrthographicCamera === !0), b !== S && (b = S, Yi = !0, Hr = !0) } if (F.isSkinnedMesh) { yt.setOptional(D, F, "bindMatrix"), yt.setOptional(D, F, "bindMatrixInverse"); let Bt = F.skeleton; Bt && (Bt.boneTexture === null && Bt.computeBoneTexture(), yt.setValue(D, "boneTexture", Bt.boneTexture, He)) } F.isBatchedMesh && (yt.setOptional(D, F, "batchingTexture"), yt.setValue(D, "batchingTexture", F._matricesTexture, He)); let Vr = z.morphAttributes; if ((Vr.position !== void 0 || Vr.normal !== void 0 || Vr.color !== void 0) && pe.update(F, z, Xn), (Yi || Ae.receiveShadow !== F.receiveShadow) && (Ae.receiveShadow = F.receiveShadow, yt.setValue(D, "receiveShadow", F.receiveShadow)), O.isMeshGouraudMaterial && O.envMap !== null && (Tn.envMap.value = ve, Tn.flipEnvMap.value = ve.isCubeTexture && ve.isRenderTargetTexture === !1 ? -1 : 1), O.isMeshStandardMaterial && O.envMap === null && L.environment !== null && (Tn.envMapIntensity.value = L.environmentIntensity), Yi && (yt.setValue(D, "toneMappingExposure", M.toneMappingExposure), Ae.needsLights && gh(Tn, Hr), ce && O.fog === !0 && $.refreshFogUniforms(Tn, ce), $.refreshMaterialUniforms(Tn, O, ie, J, m.state.transmissionRenderTarget[S.id]), Ii.upload(D, Wa(Ae), Tn, He)), O.isShaderMaterial && O.uniformsNeedUpdate === !0 && (Ii.upload(D, Wa(Ae), Tn, He), O.uniformsNeedUpdate = !1), O.isSpriteMaterial && yt.setValue(D, "center", F.center), yt.setValue(D, "modelViewMatrix", F.modelViewMatrix), yt.setValue(D, "normalMatrix", F.normalMatrix), yt.setValue(D, "modelMatrix", F.matrixWorld), O.isShaderMaterial || O.isRawShaderMaterial) { let Bt = O.uniformsGroups; for (let Gr = 0, xh = Bt.length; Gr < xh; Gr++) { let qa = Bt[Gr]; De.update(qa, Xn), De.bind(qa, Xn) } } return Xn } function gh(S, L) { S.ambientLightColor.needsUpdate = L, S.lightProbe.needsUpdate = L, S.directionalLights.needsUpdate = L, S.directionalLightShadows.needsUpdate = L, S.pointLights.needsUpdate = L, S.pointLightShadows.needsUpdate = L, S.spotLights.needsUpdate = L, S.spotLightShadows.needsUpdate = L, S.rectAreaLights.needsUpdate = L, S.hemisphereLights.needsUpdate = L } function _h(S) { return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0 } this.getActiveCubeFace = function () { return N }, this.getActiveMipmapLevel = function () { return R }, this.getRenderTarget = function () { return w }, this.setRenderTargetTextures = function (S, L, z) { Te.get(S.texture).__webglTexture = L, Te.get(S.depthTexture).__webglTexture = z; let O = Te.get(S); O.__hasExternalTextures = !0, O.__autoAllocateDepthBuffer = z === void 0, O.__autoAllocateDepthBuffer || ge.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), O.__useRenderToTexture = !1) }, this.setRenderTargetFramebuffer = function (S, L) { let z = Te.get(S); z.__webglFramebuffer = L, z.__useDefaultFramebuffer = L === void 0 }, this.setRenderTarget = function (S, L = 0, z = 0) { w = S, N = L, R = z; let O = !0, F = null, ce = !1, ue = !1; if (S) { let ve = Te.get(S); ve.__useDefaultFramebuffer !== void 0 ? (ye.bindFramebuffer(D.FRAMEBUFFER, null), O = !1) : ve.__webglFramebuffer === void 0 ? He.setupRenderTarget(S) : ve.__hasExternalTextures && He.rebindTextures(S, Te.get(S.texture).__webglTexture, Te.get(S.depthTexture).__webglTexture); let be = S.texture; (be.isData3DTexture || be.isDataArrayTexture || be.isCompressedArrayTexture) && (ue = !0); let Ce = Te.get(S).__webglFramebuffer; S.isWebGLCubeRenderTarget ? (Array.isArray(Ce[L]) ? F = Ce[L][z] : F = Ce[L], ce = !0) : S.samples > 0 && He.useMultisampledRTT(S) === !1 ? F = Te.get(S).__webglMultisampledFramebuffer : Array.isArray(Ce) ? F = Ce[z] : F = Ce, v.copy(S.viewport), B.copy(S.scissor), X = S.scissorTest } else v.copy(j).multiplyScalar(ie).floor(), B.copy(de).multiplyScalar(ie).floor(), X = Fe; if (ye.bindFramebuffer(D.FRAMEBUFFER, F) && O && ye.drawBuffers(S, F), ye.viewport(v), ye.scissor(B), ye.setScissorTest(X), ce) { let ve = Te.get(S.texture); D.framebufferTexture2D(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_CUBE_MAP_POSITIVE_X + L, ve.__webglTexture, z) } else if (ue) { let ve = Te.get(S.texture), be = L || 0; D.framebufferTextureLayer(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, ve.__webglTexture, z || 0, be) } H = -1 }, this.readRenderTargetPixels = function (S, L, z, O, F, ce, ue) { if (!(S && S.isWebGLRenderTarget)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); return } let fe = Te.get(S).__webglFramebuffer; if (S.isWebGLCubeRenderTarget && ue !== void 0 && (fe = fe[ue]), fe) { ye.bindFramebuffer(D.FRAMEBUFFER, fe); try { let ve = S.texture, be = ve.format, Ce = ve.type; if (!Ke.textureFormatReadable(be)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); return } if (!Ke.textureTypeReadable(Ce)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."); return } L >= 0 && L <= S.width - O && z >= 0 && z <= S.height - F && D.readPixels(L, z, O, F, le.convert(be), le.convert(Ce), ce) } finally { let ve = w !== null ? Te.get(w).__webglFramebuffer : null; ye.bindFramebuffer(D.FRAMEBUFFER, ve) } } }, this.copyFramebufferToTexture = function (S, L, z = 0) { let O = Math.pow(2, -z), F = Math.floor(L.image.width * O), ce = Math.floor(L.image.height * O); He.setTexture2D(L, 0), D.copyTexSubImage2D(D.TEXTURE_2D, z, 0, 0, S.x, S.y, F, ce), ye.unbindTexture() }, this.copyTextureToTexture = function (S, L, z, O = 0) { let F = L.image.width, ce = L.image.height, ue = le.convert(z.format), fe = le.convert(z.type); He.setTexture2D(z, 0), D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, z.flipY), D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, z.premultiplyAlpha), D.pixelStorei(D.UNPACK_ALIGNMENT, z.unpackAlignment), L.isDataTexture ? D.texSubImage2D(D.TEXTURE_2D, O, S.x, S.y, F, ce, ue, fe, L.image.data) : L.isCompressedTexture ? D.compressedTexSubImage2D(D.TEXTURE_2D, O, S.x, S.y, L.mipmaps[0].width, L.mipmaps[0].height, ue, L.mipmaps[0].data) : D.texSubImage2D(D.TEXTURE_2D, O, S.x, S.y, ue, fe, L.image), O === 0 && z.generateMipmaps && D.generateMipmap(D.TEXTURE_2D), ye.unbindTexture() }, this.copyTextureToTexture3D = function (S, L, z, O, F = 0) { let ce = S.max.x - S.min.x, ue = S.max.y - S.min.y, fe = S.max.z - S.min.z, ve = le.convert(O.format), be = le.convert(O.type), Ce; if (O.isData3DTexture) He.setTexture3D(O, 0), Ce = D.TEXTURE_3D; else if (O.isDataArrayTexture || O.isCompressedArrayTexture) He.setTexture2DArray(O, 0), Ce = D.TEXTURE_2D_ARRAY; else { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."); return } D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, O.flipY), D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha), D.pixelStorei(D.UNPACK_ALIGNMENT, O.unpackAlignment); let Oe = D.getParameter(D.UNPACK_ROW_LENGTH), ct = D.getParameter(D.UNPACK_IMAGE_HEIGHT), xt = D.getParameter(D.UNPACK_SKIP_PIXELS), Pt = D.getParameter(D.UNPACK_SKIP_ROWS), hn = D.getParameter(D.UNPACK_SKIP_IMAGES), Xe = z.isCompressedTexture ? z.mipmaps[F] : z.image; D.pixelStorei(D.UNPACK_ROW_LENGTH, Xe.width), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, Xe.height), D.pixelStorei(D.UNPACK_SKIP_PIXELS, S.min.x), D.pixelStorei(D.UNPACK_SKIP_ROWS, S.min.y), D.pixelStorei(D.UNPACK_SKIP_IMAGES, S.min.z), z.isDataTexture || z.isData3DTexture ? D.texSubImage3D(Ce, F, L.x, L.y, L.z, ce, ue, fe, ve, be, Xe.data) : O.isCompressedArrayTexture ? D.compressedTexSubImage3D(Ce, F, L.x, L.y, L.z, ce, ue, fe, ve, Xe.data) : D.texSubImage3D(Ce, F, L.x, L.y, L.z, ce, ue, fe, ve, be, Xe), D.pixelStorei(D.UNPACK_ROW_LENGTH, Oe), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, ct), D.pixelStorei(D.UNPACK_SKIP_PIXELS, xt), D.pixelStorei(D.UNPACK_SKIP_ROWS, Pt), D.pixelStorei(D.UNPACK_SKIP_IMAGES, hn), F === 0 && O.generateMipmaps && D.generateMipmap(Ce), ye.unbindTexture() }, this.initTexture = function (S) { S.isCubeTexture ? He.setTextureCube(S, 0) : S.isData3DTexture ? He.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? He.setTexture2DArray(S, 0) : He.setTexture2D(S, 0), ye.unbindTexture() }, this.resetState = function () { N = 0, R = 0, w = null, ye.reset(), Ee.reset() }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } get coordinateSystem() { return yn } get outputColorSpace() { return this._outputColorSpace } set outputColorSpace(e) { this._outputColorSpace = e; let t = this.getContext(); t.drawingBufferColorSpace = e === aa ? "display-p3" : "srgb", t.unpackColorSpace = We.workingColorSpace === Nr ? "display-p3" : "srgb" } get useLegacyLights() { return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights } set useLegacyLights(e) { console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e } }; var fr = class extends rt { constructor() { super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new on, this.environmentIntensity = 1, this.environmentRotation = new on, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } copy(e, t) { return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this } toJSON(e) { let t = super.toJSON(e); return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t } }, us = class { constructor(e, t) { this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Po, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = $t() } onUploadCallback() { } set needsUpdate(e) { e === !0 && this.version++ } get updateRange() { return $l("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange } setUsage(e) { return this.usage = e, this } addUpdateRange(e, t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(e) { return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this } copyAt(e, t, n) { e *= this.stride, n *= t.stride; for (let i = 0, r = this.stride; i < r; i++)this.array[e + i] = t.array[n + i]; return this } set(e, t = 0) { return this.array.set(e, t), this } clone(e) { e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = $t()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer); let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride); return n.setUsage(this.usage), n } onUpload(e) { return this.onUploadCallback = e, this } toJSON(e) { return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = $t()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride } } }, At = new C, ds = class s { constructor(e, t, n, i = !1) { this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i } get count() { return this.data.count } get array() { return this.data.array } set needsUpdate(e) { this.data.needsUpdate = e } applyMatrix4(e) { for (let t = 0, n = this.data.count; t < n; t++)At.fromBufferAttribute(this, t), At.applyMatrix4(e), this.setXYZ(t, At.x, At.y, At.z); return this } applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++)At.fromBufferAttribute(this, t), At.applyNormalMatrix(e), this.setXYZ(t, At.x, At.y, At.z); return this } transformDirection(e) { for (let t = 0, n = this.count; t < n; t++)At.fromBufferAttribute(this, t), At.transformDirection(e), this.setXYZ(t, At.x, At.y, At.z); return this } getComponent(e, t) { let n = this.array[e * this.data.stride + this.offset + t]; return this.normalized && (n = Kt(n, this.array)), n } setComponent(e, t, n) { return this.normalized && (n = qe(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this } setX(e, t) { return this.normalized && (t = qe(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this } setY(e, t) { return this.normalized && (t = qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this } setZ(e, t) { return this.normalized && (t = qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this } setW(e, t) { return this.normalized && (t = qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this } getX(e) { let t = this.data.array[e * this.data.stride + this.offset]; return this.normalized && (t = Kt(t, this.array)), t } getY(e) { let t = this.data.array[e * this.data.stride + this.offset + 1]; return this.normalized && (t = Kt(t, this.array)), t } getZ(e) { let t = this.data.array[e * this.data.stride + this.offset + 2]; return this.normalized && (t = Kt(t, this.array)), t } getW(e) { let t = this.data.array[e * this.data.stride + this.offset + 3]; return this.normalized && (t = Kt(t, this.array)), t } setXY(e, t, n) { return e = e * this.data.stride + this.offset, this.normalized && (t = qe(t, this.array), n = qe(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this } setXYZ(e, t, n, i) { return e = e * this.data.stride + this.offset, this.normalized && (t = qe(t, this.array), n = qe(n, this.array), i = qe(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this } setXYZW(e, t, n, i, r) { return e = e * this.data.stride + this.offset, this.normalized && (t = qe(t, this.array), n = qe(n, this.array), i = qe(i, this.array), r = qe(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this } clone(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."); let t = []; for (let n = 0; n < this.count; n++) { let i = n * this.data.stride + this.offset; for (let r = 0; r < this.itemSize; r++)t.push(this.data.array[i + r]) } return new st(new this.array.constructor(t), this.itemSize, this.normalized) } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new s(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized) } toJSON(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."); let t = []; for (let n = 0; n < this.count; n++) { let i = n * this.data.stride + this.offset; for (let r = 0; r < this.itemSize; r++)t.push(this.data.array[i + r]) } return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized } } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: !0, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized } } }; var _l = new C, xl = new $e, yl = new $e, Lg = new C, vl = new Le, Ws = new C, Mo = new Nt, Ml = new Le, So = new Fn, pr = class extends bt { constructor(e, t) { super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = ja, this.bindMatrix = new Le, this.bindMatrixInverse = new Le, this.boundingBox = null, this.boundingSphere = null } computeBoundingBox() { let e = this.geometry; this.boundingBox === null && (this.boundingBox = new Ht), this.boundingBox.makeEmpty(); let t = e.getAttribute("position"); for (let n = 0; n < t.count; n++)this.getVertexPosition(n, Ws), this.boundingBox.expandByPoint(Ws) } computeBoundingSphere() { let e = this.geometry; this.boundingSphere === null && (this.boundingSphere = new Nt), this.boundingSphere.makeEmpty(); let t = e.getAttribute("position"); for (let n = 0; n < t.count; n++)this.getVertexPosition(n, Ws), this.boundingSphere.expandByPoint(Ws) } copy(e, t) { return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this } raycast(e, t) { let n = this.material, i = this.matrixWorld; n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Mo.copy(this.boundingSphere), Mo.applyMatrix4(i), e.ray.intersectsSphere(Mo) !== !1 && (Ml.copy(i).invert(), So.copy(e.ray).applyMatrix4(Ml), !(this.boundingBox !== null && So.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, So))) } getVertexPosition(e, t) { return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t } bind(e, t) { this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert() } pose() { this.skeleton.pose() } normalizeSkinWeights() { let e = new $e, t = this.geometry.attributes.skinWeight; for (let n = 0, i = t.count; n < i; n++) { e.fromBufferAttribute(t, n); let r = 1 / e.manhattanLength(); r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w) } } updateMatrixWorld(e) { super.updateMatrixWorld(e), this.bindMode === ja ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === nu ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode) } applyBoneTransform(e, t) { let n = this.skeleton, i = this.geometry; xl.fromBufferAttribute(i.attributes.skinIndex, e), yl.fromBufferAttribute(i.attributes.skinWeight, e), _l.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0); for (let r = 0; r < 4; r++) { let o = yl.getComponent(r); if (o !== 0) { let a = xl.getComponent(r); vl.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(Lg.copy(_l).applyMatrix4(vl), o) } } return t.applyMatrix4(this.bindMatrixInverse) } }, fs = class extends rt { constructor() { super(), this.isBone = !0, this.type = "Bone" } }, mr = class extends _t { constructor(e = null, t = 1, n = 1, i, r, o, a, c, l = St, h = St, u, d) { super(null, o, a, c, l, h, i, r, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } }, Sl = new Le, Ng = new Le, gr = class s { constructor(e = [], t = []) { this.uuid = $t(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init() } init() { let e = this.bones, t = this.boneInverses; if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses(); else if (e.length !== t.length) { console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = []; for (let n = 0, i = this.bones.length; n < i; n++)this.boneInverses.push(new Le) } } calculateInverses() { this.boneInverses.length = 0; for (let e = 0, t = this.bones.length; e < t; e++) { let n = new Le; this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n) } } pose() { for (let e = 0, t = this.bones.length; e < t; e++) { let n = this.bones[e]; n && n.matrixWorld.copy(this.boneInverses[e]).invert() } for (let e = 0, t = this.bones.length; e < t; e++) { let n = this.bones[e]; n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale)) } } update() { let e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture; for (let r = 0, o = e.length; r < o; r++) { let a = e[r] ? e[r].matrixWorld : Ng; Sl.multiplyMatrices(a, t[r]), Sl.toArray(n, r * 16) } i !== null && (i.needsUpdate = !0) } clone() { return new s(this.bones, this.boneInverses) } computeBoneTexture() { let e = Math.sqrt(this.bones.length * 4); e = Math.ceil(e / 4) * 4, e = Math.max(e, 4); let t = new Float32Array(e * e * 4); t.set(this.boneMatrices); let n = new mr(t, e, e, Jt, tn); return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this } getBoneByName(e) { for (let t = 0, n = this.bones.length; t < n; t++) { let i = this.bones[t]; if (i.name === e) return i } } dispose() { this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null) } fromJSON(e, t) { this.uuid = e.uuid; for (let n = 0, i = e.bones.length; n < i; n++) { let r = e.bones[n], o = t[r]; o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new fs), this.bones.push(o), this.boneInverses.push(new Le().fromArray(e.boneInverses[n])) } return this.init(), this } toJSON() { let e = { metadata: { version: 4.6, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] }; e.uuid = this.uuid; let t = this.bones, n = this.boneInverses; for (let i = 0, r = t.length; i < r; i++) { let o = t[i]; e.bones.push(o.uuid); let a = n[i]; e.boneInverses.push(a.toArray()) } return e } }, ii = class extends st { constructor(e, t, n, i = 1) { super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i } copy(e) { return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this } toJSON() { let e = super.toJSON(); return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e } }, Ai = new Le, bl = new Le, Xs = [], Al = new Ht, Dg = new Le, $i = new bt, ji = new Nt, _r = class extends bt { constructor(e, t, n) { super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new ii(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null; for (let i = 0; i < n; i++)this.setMatrixAt(i, Dg) } computeBoundingBox() { let e = this.geometry, t = this.count; this.boundingBox === null && (this.boundingBox = new Ht), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty(); for (let n = 0; n < t; n++)this.getMatrixAt(n, Ai), Al.copy(e.boundingBox).applyMatrix4(Ai), this.boundingBox.union(Al) } computeBoundingSphere() { let e = this.geometry, t = this.count; this.boundingSphere === null && (this.boundingSphere = new Nt), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty(); for (let n = 0; n < t; n++)this.getMatrixAt(n, Ai), ji.copy(e.boundingSphere).applyMatrix4(Ai), this.boundingSphere.union(ji) } copy(e, t) { return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this } getColorAt(e, t) { t.fromArray(this.instanceColor.array, e * 3) } getMatrixAt(e, t) { t.fromArray(this.instanceMatrix.array, e * 16) } getMorphAt(e, t) { let n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, r = n.length + 1, o = e * r + 1; for (let a = 0; a < n.length; a++)n[a] = i[o + a] } raycast(e, t) { let n = this.matrixWorld, i = this.count; if ($i.geometry = this.geometry, $i.material = this.material, $i.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ji.copy(this.boundingSphere), ji.applyMatrix4(n), e.ray.intersectsSphere(ji) !== !1)) for (let r = 0; r < i; r++) { this.getMatrixAt(r, Ai), bl.multiplyMatrices(n, Ai), $i.matrixWorld = bl, $i.raycast(e, Xs); for (let o = 0, a = Xs.length; o < a; o++) { let c = Xs[o]; c.instanceId = r, c.object = this, t.push(c) } Xs.length = 0 } } setColorAt(e, t) { this.instanceColor === null && (this.instanceColor = new ii(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3) } setMatrixAt(e, t) { t.toArray(this.instanceMatrix.array, e * 16) } setMorphAt(e, t) { let n = t.morphTargetInfluences, i = n.length + 1; this.morphTexture === null && (this.morphTexture = new mr(new Float32Array(i * this.count), i, this.count, Gl, tn)); let r = this.morphTexture.source.data.data, o = 0; for (let l = 0; l < n.length; l++)o += n[l]; let a = this.geometry.morphTargetsRelative ? 1 : 1 - o, c = i * e; r[c] = a, r.set(n, c + 1) } updateMorphTargets() { } dispose() { return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this } }; var ps = class extends Dt { constructor(e) { super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Me(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this } }, xr = new C, yr = new C, Tl = new Le, Qi = new Fn, Ys = new Nt, bo = new C, El = new C, zi = class extends rt { constructor(e = new Ct, t = new ps) { super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } computeLineDistances() { let e = this.geometry; if (e.index === null) { let t = e.attributes.position, n = [0]; for (let i = 1, r = t.count; i < r; i++)xr.fromBufferAttribute(t, i - 1), yr.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += xr.distanceTo(yr); e.setAttribute("lineDistance", new kt(n, 1)) } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this } raycast(e, t) { let n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), Ys.copy(n.boundingSphere), Ys.applyMatrix4(i), Ys.radius += r, e.ray.intersectsSphere(Ys) === !1) return; Tl.copy(i).invert(), Qi.copy(e.ray).applyMatrix4(Tl); let a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position; if (h !== null) { let f = Math.max(0, o.start), g = Math.min(h.count, o.start + o.count); for (let x = f, m = g - 1; x < m; x += l) { let p = h.getX(x), A = h.getX(x + 1), M = qs(this, e, Qi, c, p, A); M && t.push(M) } if (this.isLineLoop) { let x = h.getX(g - 1), m = h.getX(f), p = qs(this, e, Qi, c, x, m); p && t.push(p) } } else { let f = Math.max(0, o.start), g = Math.min(d.count, o.start + o.count); for (let x = f, m = g - 1; x < m; x += l) { let p = qs(this, e, Qi, c, x, x + 1); p && t.push(p) } if (this.isLineLoop) { let x = qs(this, e, Qi, c, g - 1, f); x && t.push(x) } } } updateMorphTargets() { let t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { let i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, o = i.length; r < o; r++) { let a = i[r].name || String(r); this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } }; function qs(s, e, t, n, i, r) { let o = s.geometry.attributes.position; if (xr.fromBufferAttribute(o, i), yr.fromBufferAttribute(o, r), t.distanceSqToSegment(xr, yr, bo, El) > n) return; bo.applyMatrix4(s.matrixWorld); let c = e.ray.origin.distanceTo(bo); if (!(c < e.near || c > e.far)) return { distance: c, point: El.clone().applyMatrix4(s.matrixWorld), index: i, face: null, faceIndex: null, object: s } } var wl = new C, Rl = new C, vr = class extends zi { constructor(e, t) { super(e, t), this.isLineSegments = !0, this.type = "LineSegments" } computeLineDistances() { let e = this.geometry; if (e.index === null) { let t = e.attributes.position, n = []; for (let i = 0, r = t.count; i < r; i += 2)wl.fromBufferAttribute(t, i), Rl.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + wl.distanceTo(Rl); e.setAttribute("lineDistance", new kt(n, 1)) } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this } }, Mr = class extends zi { constructor(e, t) { super(e, t), this.isLineLoop = !0, this.type = "LineLoop" } }, ms = class extends Dt { constructor(e) { super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Me(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this } }, Cl = new Le, qo = new Fn, Zs = new Nt, Ks = new C, Sr = class extends rt { constructor(e = new Ct, t = new ms) { super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } raycast(e, t) { let n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, o = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), Zs.copy(n.boundingSphere), Zs.applyMatrix4(i), Zs.radius += r, e.ray.intersectsSphere(Zs) === !1) return; Cl.copy(i).invert(), qo.copy(e.ray).applyMatrix4(Cl); let a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = n.index, u = n.attributes.position; if (l !== null) { let d = Math.max(0, o.start), f = Math.min(l.count, o.start + o.count); for (let g = d, x = f; g < x; g++) { let m = l.getX(g); Ks.fromBufferAttribute(u, m), Pl(Ks, m, c, i, e, t, this) } } else { let d = Math.max(0, o.start), f = Math.min(u.count, o.start + o.count); for (let g = d, x = f; g < x; g++)Ks.fromBufferAttribute(u, g), Pl(Ks, g, c, i, e, t, this) } } updateMorphTargets() { let t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { let i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, o = i.length; r < o; r++) { let a = i[r].name || String(r); this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } }; function Pl(s, e, t, n, i, r, o) { let a = qo.distanceSqToPoint(s); if (a < t) { let c = new C; qo.closestPointToPoint(s, c), c.applyMatrix4(n); let l = i.ray.origin.distanceTo(c); if (l < i.near || l > i.far) return; r.push({ distance: l, distanceToRay: Math.sqrt(a), point: c, index: e, face: null, object: o }) } } var ki = class extends Dt { constructor(e) { super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Me(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Me(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Zl, this.normalScale = new xe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new on, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this } }, Ot = class extends ki { constructor(e) { super(), this.isMeshPhysicalMaterial = !0, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new xe(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function () { return gt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1) }, set: function (t) { this.ior = (1 + .4 * t) / (1 - .4 * t) } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Me(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Me(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Me(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e) } get anisotropy() { return this._anisotropy } set anisotropy(e) { this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e } get clearcoat() { return this._clearcoat } set clearcoat(e) { this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e } get iridescence() { return this._iridescence } set iridescence(e) { this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e } get dispersion() { return this._dispersion } set dispersion(e) { this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e } get sheen() { return this._sheen } set sheen(e) { this._sheen > 0 != e > 0 && this.version++, this._sheen = e } get transmission() { return this._transmission } set transmission(e) { this._transmission > 0 != e > 0 && this.version++, this._transmission = e } copy(e) { return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this } }; function Js(s, e, t) { return !s || !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s) } function Ug(s) { return ArrayBuffer.isView(s) && !(s instanceof DataView) } function Og(s) { function e(i, r) { return s[i] - s[r] } let t = s.length, n = new Array(t); for (let i = 0; i !== t; ++i)n[i] = i; return n.sort(e), n } function Il(s, e, t) { let n = s.length, i = new s.constructor(n); for (let r = 0, o = 0; o !== n; ++r) { let a = t[r] * e; for (let c = 0; c !== e; ++c)i[o++] = s[a + c] } return i } function oh(s, e, t, n) { let i = 1, r = s[0]; for (; r !== void 0 && r[n] === void 0;)r = s[i++]; if (r === void 0) return; let o = r[n]; if (o !== void 0) if (Array.isArray(o)) do o = r[n], o !== void 0 && (e.push(r.time), t.push.apply(t, o)), r = s[i++]; while (r !== void 0); else if (o.toArray !== void 0) do o = r[n], o !== void 0 && (e.push(r.time), o.toArray(t, t.length)), r = s[i++]; while (r !== void 0); else do o = r[n], o !== void 0 && (e.push(r.time), t.push(o)), r = s[i++]; while (r !== void 0) } var Bn = class { constructor(e, t, n, i) { this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {} } evaluate(e) { let t = this.parameterPositions, n = this._cachedIndex, i = t[n], r = t[n - 1]; n: { e: { let o; t: { i: if (!(e < i)) { for (let a = n + 2; ;) { if (i === void 0) { if (e < r) break i; return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1) } if (n === a) break; if (r = i, i = t[++n], e < i) break e } o = t.length; break t } if (!(e >= r)) { let a = t[1]; e < a && (n = 2, r = a); for (let c = n - 2; ;) { if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0); if (n === c) break; if (i = r, r = t[--n - 1], e >= r) break e } o = n, n = 0; break t } break n } for (; n < o;) { let a = n + o >>> 1; e < t[a] ? o = a : n = a + 1 } if (i = t[n], r = t[n - 1], r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0); if (i === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1) } this._cachedIndex = n, this.intervalChanged_(n, r, i) } return this.interpolate_(n, r, e, i) } getSettings_() { return this.settings || this.DefaultSettings_ } copySampleValue_(e) { let t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i; for (let o = 0; o !== i; ++o)t[o] = n[r + o]; return t } interpolate_() { throw new Error("call to abstract method") } intervalChanged_() { } }, Zo = class extends Bn { constructor(e, t, n, i) { super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Tc, endingEnd: Tc } } intervalChanged_(e, t, n) { let i = this.parameterPositions, r = e - 2, o = e + 1, a = i[r], c = i[o]; if (a === void 0) switch (this.getSettings_().endingStart) { case Ec: r = e, a = 2 * t - n; break; case wc: r = i.length - 2, a = t + i[r] - i[r + 1]; break; default: r = e, a = n }if (c === void 0) switch (this.getSettings_().endingEnd) { case Ec: o = e, c = 2 * n - t; break; case wc: o = 1, c = n + i[1] - i[0]; break; default: o = e - 1, c = t }let l = (n - t) * .5, h = this.valueSize; this._weightPrev = l / (t - a), this._weightNext = l / (c - n), this._offsetPrev = r * h, this._offsetNext = o * h } interpolate_(e, t, n, i) { let r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = e * a, l = c - a, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, g = (n - t) / (i - t), x = g * g, m = x * g, p = -d * m + 2 * d * x - d * g, A = (1 + d) * m + (-1.5 - 2 * d) * x + (-.5 + d) * g + 1, M = (-1 - f) * m + (1.5 + f) * x + .5 * g, T = f * m - f * x; for (let N = 0; N !== a; ++N)r[N] = p * o[h + N] + A * o[l + N] + M * o[c + N] + T * o[u + N]; return r } }, Ko = class extends Bn { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e, t, n, i) { let r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = e * a, l = c - a, h = (n - t) / (i - t), u = 1 - h; for (let d = 0; d !== a; ++d)r[d] = o[l + d] * u + o[c + d] * h; return r } }, Jo = class extends Bn { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e) { return this.copySampleValue_(e - 1) } }, Vt = class { constructor(e, t, n, i) { if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined"); if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e); this.name = e, this.times = Js(t, this.TimeBufferType), this.values = Js(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation) } static toJSON(e) { let t = e.constructor, n; if (t.toJSON !== this.toJSON) n = t.toJSON(e); else { n = { name: e.name, times: Js(e.times, Array), values: Js(e.values, Array) }; let i = e.getInterpolation(); i !== e.DefaultInterpolation && (n.interpolation = i) } return n.type = e.ValueTypeName, n } InterpolantFactoryMethodDiscrete(e) { return new Jo(this.times, this.values, this.getValueSize(), e) } InterpolantFactoryMethodLinear(e) { return new Ko(this.times, this.values, this.getValueSize(), e) } InterpolantFactoryMethodSmooth(e) { return new Zo(this.times, this.values, this.getValueSize(), e) } setInterpolation(e) { let t; switch (e) { case Ui: t = this.InterpolantFactoryMethodDiscrete; break; case ni: t = this.InterpolantFactoryMethodLinear; break; case Kr: t = this.InterpolantFactoryMethodSmooth; break }if (t === void 0) { let n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name; if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation); else throw new Error(n); return console.warn("THREE.KeyframeTrack:", n), this } return this.createInterpolant = t, this } getInterpolation() { switch (this.createInterpolant) { case this.InterpolantFactoryMethodDiscrete: return Ui; case this.InterpolantFactoryMethodLinear: return ni; case this.InterpolantFactoryMethodSmooth: return Kr } } getValueSize() { return this.values.length / this.times.length } shift(e) { if (e !== 0) { let t = this.times; for (let n = 0, i = t.length; n !== i; ++n)t[n] += e } return this } scale(e) { if (e !== 1) { let t = this.times; for (let n = 0, i = t.length; n !== i; ++n)t[n] *= e } return this } trim(e, t) { let n = this.times, i = n.length, r = 0, o = i - 1; for (; r !== i && n[r] < e;)++r; for (; o !== -1 && n[o] > t;)--o; if (++o, r !== 0 || o !== i) { r >= o && (o = Math.max(o, 1), r = o - 1); let a = this.getValueSize(); this.times = n.slice(r, o), this.values = this.values.slice(r * a, o * a) } return this } validate() { let e = !0, t = this.getValueSize(); t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1); let n = this.times, i = this.values, r = n.length; r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1); let o = null; for (let a = 0; a !== r; a++) { let c = n[a]; if (typeof c == "number" && isNaN(c)) { console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, c), e = !1; break } if (o !== null && o > c) { console.error("THREE.KeyframeTrack: Out of order keys.", this, a, c, o), e = !1; break } o = c } if (i !== void 0 && Ug(i)) for (let a = 0, c = i.length; a !== c; ++a) { let l = i[a]; if (isNaN(l)) { console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, l), e = !1; break } } return e } optimize() { let e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Kr, r = e.length - 1, o = 1; for (let a = 1; a < r; ++a) { let c = !1, l = e[a], h = e[a + 1]; if (l !== h && (a !== 1 || l !== e[0])) if (i) c = !0; else { let u = a * n, d = u - n, f = u + n; for (let g = 0; g !== n; ++g) { let x = t[u + g]; if (x !== t[d + g] || x !== t[f + g]) { c = !0; break } } } if (c) { if (a !== o) { e[o] = e[a]; let u = a * n, d = o * n; for (let f = 0; f !== n; ++f)t[d + f] = t[u + f] } ++o } } if (r > 0) { e[o] = e[r]; for (let a = r * n, c = o * n, l = 0; l !== n; ++l)t[c + l] = t[a + l]; ++o } return o !== e.length ? (this.times = e.slice(0, o), this.values = t.slice(0, o * n)) : (this.times = e, this.values = t), this } clone() { let e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t); return i.createInterpolant = this.createInterpolant, i } }; Vt.prototype.TimeBufferType = Float32Array; Vt.prototype.ValueBufferType = Float32Array; Vt.prototype.DefaultInterpolation = ni; var zn = class extends Vt { }; zn.prototype.ValueTypeName = "bool"; zn.prototype.ValueBufferType = Array; zn.prototype.DefaultInterpolation = Ui; zn.prototype.InterpolantFactoryMethodLinear = void 0; zn.prototype.InterpolantFactoryMethodSmooth = void 0; var br = class extends Vt { }; br.prototype.ValueTypeName = "color"; var Mn = class extends Vt { }; Mn.prototype.ValueTypeName = "number"; var $o = class extends Bn { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e, t, n, i) { let r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = (n - t) / (i - t), l = e * a; for (let h = l + a; l !== h; l += 4)Rt.slerpFlat(r, 0, o, l - a, o, l, c); return r } }, cn = class extends Vt { InterpolantFactoryMethodLinear(e) { return new $o(this.times, this.values, this.getValueSize(), e) } }; cn.prototype.ValueTypeName = "quaternion"; cn.prototype.DefaultInterpolation = ni; cn.prototype.InterpolantFactoryMethodSmooth = void 0; var kn = class extends Vt { }; kn.prototype.ValueTypeName = "string"; kn.prototype.ValueBufferType = Array; kn.prototype.DefaultInterpolation = Ui; kn.prototype.InterpolantFactoryMethodLinear = void 0; kn.prototype.InterpolantFactoryMethodSmooth = void 0; var Sn = class extends Vt { }; Sn.prototype.ValueTypeName = "vector"; var Ar = class { constructor(e = "", t = -1, n = [], i = du) { this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = $t(), this.duration < 0 && this.resetDuration() } static parse(e) { let t = [], n = e.tracks, i = 1 / (e.fps || 1); for (let o = 0, a = n.length; o !== a; ++o)t.push(Bg(n[o]).scale(i)); let r = new this(e.name, e.duration, t, e.blendMode); return r.uuid = e.uuid, r } static toJSON(e) { let t = [], n = e.tracks, i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode }; for (let r = 0, o = n.length; r !== o; ++r)t.push(Vt.toJSON(n[r])); return i } static CreateFromMorphTargetSequence(e, t, n, i) { let r = t.length, o = []; for (let a = 0; a < r; a++) { let c = [], l = []; c.push((a + r - 1) % r, a, (a + 1) % r), l.push(0, 1, 0); let h = Og(c); c = Il(c, 1, h), l = Il(l, 1, h), !i && c[0] === 0 && (c.push(r), l.push(l[0])), o.push(new Mn(".morphTargetInfluences[" + t[a].name + "]", c, l).scale(1 / n)) } return new this(e, -1, o) } static findByName(e, t) { let n = e; if (!Array.isArray(e)) { let i = e; n = i.geometry && i.geometry.animations || i.animations } for (let i = 0; i < n.length; i++)if (n[i].name === t) return n[i]; return null } static CreateClipsFromMorphTargetSequences(e, t, n) { let i = {}, r = /^([\w-]*?)([\d]+)$/; for (let a = 0, c = e.length; a < c; a++) { let l = e[a], h = l.name.match(r); if (h && h.length > 1) { let u = h[1], d = i[u]; d || (i[u] = d = []), d.push(l) } } let o = []; for (let a in i) o.push(this.CreateFromMorphTargetSequence(a, i[a], t, n)); return o } static parseAnimation(e, t) { if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null; let n = function (u, d, f, g, x) { if (f.length !== 0) { let m = [], p = []; oh(f, m, p, g), m.length !== 0 && x.push(new u(d, m, p)) } }, i = [], r = e.name || "default", o = e.fps || 30, a = e.blendMode, c = e.length || -1, l = e.hierarchy || []; for (let u = 0; u < l.length; u++) { let d = l[u].keys; if (!(!d || d.length === 0)) if (d[0].morphTargets) { let f = {}, g; for (g = 0; g < d.length; g++)if (d[g].morphTargets) for (let x = 0; x < d[g].morphTargets.length; x++)f[d[g].morphTargets[x]] = -1; for (let x in f) { let m = [], p = []; for (let A = 0; A !== d[g].morphTargets.length; ++A) { let M = d[g]; m.push(M.time), p.push(M.morphTarget === x ? 1 : 0) } i.push(new Mn(".morphTargetInfluence[" + x + "]", m, p)) } c = f.length * o } else { let f = ".bones[" + t[u].name + "]"; n(Sn, f + ".position", d, "pos", i), n(cn, f + ".quaternion", d, "rot", i), n(Sn, f + ".scale", d, "scl", i) } } return i.length === 0 ? null : new this(r, c, i, a) } resetDuration() { let e = this.tracks, t = 0; for (let n = 0, i = e.length; n !== i; ++n) { let r = this.tracks[n]; t = Math.max(t, r.times[r.times.length - 1]) } return this.duration = t, this } trim() { for (let e = 0; e < this.tracks.length; e++)this.tracks[e].trim(0, this.duration); return this } validate() { let e = !0; for (let t = 0; t < this.tracks.length; t++)e = e && this.tracks[t].validate(); return e } optimize() { for (let e = 0; e < this.tracks.length; e++)this.tracks[e].optimize(); return this } clone() { let e = []; for (let t = 0; t < this.tracks.length; t++)e.push(this.tracks[t].clone()); return new this.constructor(this.name, this.duration, e, this.blendMode) } toJSON() { return this.constructor.toJSON(this) } }; function Fg(s) { switch (s.toLowerCase()) { case "scalar": case "double": case "float": case "number": case "integer": return Mn; case "vector": case "vector2": case "vector3": case "vector4": return Sn; case "color": return br; case "quaternion": return cn; case "bool": case "boolean": return zn; case "string": return kn }throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s) } function Bg(s) { if (s.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse"); let e = Fg(s.type); if (s.times === void 0) { let t = [], n = []; oh(s.keys, t, n, "value"), s.times = t, s.values = n } return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation) } var Nn = { enabled: !1, files: {}, add: function (s, e) { this.enabled !== !1 && (this.files[s] = e) }, get: function (s) { if (this.enabled !== !1) return this.files[s] }, remove: function (s) { delete this.files[s] }, clear: function () { this.files = {} } }, jo = class { constructor(e, t, n) { let i = this, r = !1, o = 0, a = 0, c, l = []; this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function (h) { a++, r === !1 && i.onStart !== void 0 && i.onStart(h, o, a), r = !0 }, this.itemEnd = function (h) { o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (r = !1, i.onLoad !== void 0 && i.onLoad()) }, this.itemError = function (h) { i.onError !== void 0 && i.onError(h) }, this.resolveURL = function (h) { return c ? c(h) : h }, this.setURLModifier = function (h) { return c = h, this }, this.addHandler = function (h, u) { return l.push(h, u), this }, this.removeHandler = function (h) { let u = l.indexOf(h); return u !== -1 && l.splice(u, 2), this }, this.getHandler = function (h) { for (let u = 0, d = l.length; u < d; u += 2) { let f = l[u], g = l[u + 1]; if (f.global && (f.lastIndex = 0), f.test(h)) return g } return null } } }, zg = new jo, jt = class { constructor(e) { this.manager = e !== void 0 ? e : zg, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {} } load() { } loadAsync(e, t) { let n = this; return new Promise(function (i, r) { n.load(e, i, t, r) }) } parse() { } setCrossOrigin(e) { return this.crossOrigin = e, this } setWithCredentials(e) { return this.withCredentials = e, this } setPath(e) { return this.path = e, this } setResourcePath(e) { return this.resourcePath = e, this } setRequestHeader(e) { return this.requestHeader = e, this } }; jt.DEFAULT_MATERIAL_NAME = "__DEFAULT"; var gn = {}, Qo = class extends Error { constructor(e, t) { super(e), this.response = t } }, Hn = class extends jt { constructor(e) { super(e) } load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); let r = Nn.get(e); if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => { t && t(r), this.manager.itemEnd(e) }, 0), r; if (gn[e] !== void 0) { gn[e].push({ onLoad: t, onProgress: n, onError: i }); return } gn[e] = [], gn[e].push({ onLoad: t, onProgress: n, onError: i }); let o = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), a = this.mimeType, c = this.responseType; fetch(o).then(l => { if (l.status === 200 || l.status === 0) { if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0) return l; let h = gn[e], u = l.body.getReader(), d = l.headers.get("X-File-Size") || l.headers.get("Content-Length"), f = d ? parseInt(d) : 0, g = f !== 0, x = 0, m = new ReadableStream({ start(p) { A(); function A() { u.read().then(({ done: M, value: T }) => { if (M) p.close(); else { x += T.byteLength; let N = new ProgressEvent("progress", { lengthComputable: g, loaded: x, total: f }); for (let R = 0, w = h.length; R < w; R++) { let H = h[R]; H.onProgress && H.onProgress(N) } p.enqueue(T), A() } }) } } }); return new Response(m) } else throw new Qo(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l) }).then(l => { switch (c) { case "arraybuffer": return l.arrayBuffer(); case "blob": return l.blob(); case "document": return l.text().then(h => new DOMParser().parseFromString(h, a)); case "json": return l.json(); default: if (a === void 0) return l.text(); { let u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, f = new TextDecoder(d); return l.arrayBuffer().then(g => f.decode(g)) } } }).then(l => { Nn.add(e, l); let h = gn[e]; delete gn[e]; for (let u = 0, d = h.length; u < d; u++) { let f = h[u]; f.onLoad && f.onLoad(l) } }).catch(l => { let h = gn[e]; if (h === void 0) throw this.manager.itemError(e), l; delete gn[e]; for (let u = 0, d = h.length; u < d; u++) { let f = h[u]; f.onError && f.onError(l) } this.manager.itemError(e) }).finally(() => { this.manager.itemEnd(e) }), this.manager.itemStart(e) } setResponseType(e) { return this.responseType = e, this } setMimeType(e) { return this.mimeType = e, this } }; var ea = class extends jt { constructor(e) { super(e) } load(e, t, n, i) { this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); let r = this, o = Nn.get(e); if (o !== void 0) return r.manager.itemStart(e), setTimeout(function () { t && t(o), r.manager.itemEnd(e) }, 0), o; let a = cs("img"); function c() { h(), Nn.add(e, this), t && t(this), r.manager.itemEnd(e) } function l(u) { h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e) } function h() { a.removeEventListener("load", c, !1), a.removeEventListener("error", l, !1) } return a.addEventListener("load", c, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a } }; var Hi = class extends jt { constructor(e) { super(e) } load(e, t, n, i) { let r = new _t, o = new ea(this.manager); return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function (a) { r.image = a, r.needsUpdate = !0, t !== void 0 && t(r) }, n, i), r } }, gs = class extends rt { constructor(e, t = 1) { super(), this.isLight = !0, this.type = "Light", this.color = new Me(e), this.intensity = t } dispose() { } copy(e, t) { return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this } toJSON(e) { let t = super.toJSON(e); return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t } }; var Ao = new Le, Ll = new C, Nl = new C, _s = class { constructor(e) { this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new xe(512, 512), this.map = null, this.mapPass = null, this.matrix = new Le, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new hs, this._frameExtents = new xe(1, 1), this._viewportCount = 1, this._viewports = [new $e(0, 0, 1, 1)] } getViewportCount() { return this._viewportCount } getFrustum() { return this._frustum } updateMatrices(e) { let t = this.camera, n = this.matrix; Ll.setFromMatrixPosition(e.matrixWorld), t.position.copy(Ll), Nl.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Nl), t.updateMatrixWorld(), Ao.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ao), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(Ao) } getViewport(e) { return this._viewports[e] } getFrameExtents() { return this._frameExtents } dispose() { this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose() } copy(e) { return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this } clone() { return new this.constructor().copy(this) } toJSON() { let e = {}; return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e } }, ta = class extends _s { constructor() { super(new ut(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1 } updateMatrices(e) { let t = this.camera, n = Oi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far; (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e) } copy(e) { return super.copy(e), this.focus = e.focus, this } }, Tr = class extends gs { constructor(e, t, n = 0, i = Math.PI / 3, r = 0, o = 2) { super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(rt.DEFAULT_UP), this.updateMatrix(), this.target = new rt, this.distance = n, this.angle = i, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new ta } get power() { return this.intensity * Math.PI } set power(e) { this.intensity = e / Math.PI } dispose() { this.shadow.dispose() } copy(e, t) { return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } }, Dl = new Le, es = new C, To = new C, na = class extends _s { constructor() { super(new ut(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new xe(4, 2), this._viewportCount = 6, this._viewports = [new $e(2, 1, 1, 1), new $e(0, 1, 1, 1), new $e(3, 1, 1, 1), new $e(1, 1, 1, 1), new $e(3, 0, 1, 1), new $e(1, 0, 1, 1)], this._cubeDirections = [new C(1, 0, 0), new C(-1, 0, 0), new C(0, 0, 1), new C(0, 0, -1), new C(0, 1, 0), new C(0, -1, 0)], this._cubeUps = [new C(0, 1, 0), new C(0, 1, 0), new C(0, 1, 0), new C(0, 1, 0), new C(0, 0, 1), new C(0, 0, -1)] } updateMatrices(e, t = 0) { let n = this.camera, i = this.matrix, r = e.distance || n.far; r !== n.far && (n.far = r, n.updateProjectionMatrix()), es.setFromMatrixPosition(e.matrixWorld), n.position.copy(es), To.copy(n.position), To.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(To), n.updateMatrixWorld(), i.makeTranslation(-es.x, -es.y, -es.z), Dl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Dl) } }, Er = class extends gs { constructor(e, t, n = 0, i = 2) { super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new na } get power() { return this.intensity * 4 * Math.PI } set power(e) { this.intensity = e / (4 * Math.PI) } dispose() { this.shadow.dispose() } copy(e, t) { return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this } }, ia = class extends _s { constructor() { super(new Bi(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0 } }, wr = class extends gs { constructor(e, t) { super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(rt.DEFAULT_UP), this.updateMatrix(), this.target = new rt, this.shadow = new ia } dispose() { this.shadow.dispose() } copy(e) { return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } }; var Vn = class { static decodeText(e) { if (typeof TextDecoder < "u") return new TextDecoder().decode(e); let t = ""; for (let n = 0, i = e.length; n < i; n++)t += String.fromCharCode(e[n]); try { return decodeURIComponent(escape(t)) } catch { return t } } static extractUrlBase(e) { let t = e.lastIndexOf("/"); return t === -1 ? "./" : e.slice(0, t + 1) } static resolveURL(e, t) { return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e) } }; var Rr = class extends jt { constructor(e) { super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" } } setOptions(e) { return this.options = e, this } load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); let r = this, o = Nn.get(e); if (o !== void 0) { if (r.manager.itemStart(e), o.then) { o.then(l => { t && t(l), r.manager.itemEnd(e) }).catch(l => { i && i(l) }); return } return setTimeout(function () { t && t(o), r.manager.itemEnd(e) }, 0), o } let a = {}; a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader; let c = fetch(e, a).then(function (l) { return l.blob() }).then(function (l) { return createImageBitmap(l, Object.assign(r.options, { colorSpaceConversion: "none" })) }).then(function (l) { return Nn.add(e, l), t && t(l), r.manager.itemEnd(e), l }).catch(function (l) { i && i(l), Nn.remove(e), r.manager.itemError(e), r.manager.itemEnd(e) }); Nn.add(e, c), r.manager.itemStart(e) } }; var Cr = class { constructor(e = !0) { this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1 } start() { this.startTime = Ul(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0 } stop() { this.getElapsedTime(), this.running = !1, this.autoStart = !1 } getElapsedTime() { return this.getDelta(), this.elapsedTime } getDelta() { let e = 0; if (this.autoStart && !this.running) return this.start(), 0; if (this.running) { let t = Ul(); e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e } return e } }; function Ul() { return (typeof performance > "u" ? Date : performance).now() } var ha = "\\[\\]\\.:\\/", kg = new RegExp("[" + ha + "]", "g"), ua = "[^" + ha + "]", Hg = "[^" + ha.replace("\\.", "") + "]", Vg = /((?:WC+[\/:])*)/.source.replace("WC", ua), Gg = /(WCOD+)?/.source.replace("WCOD", Hg), Wg = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ua), Xg = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ua), Yg = new RegExp("^" + Vg + Gg + Wg + Xg + "$"), qg = ["material", "materials", "bones", "map"], sa = class { constructor(e, t, n) { let i = n || je.parseTrackName(t); this._targetGroup = e, this._bindings = e.subscribe_(t, i) } getValue(e, t) { this.bind(); let n = this._targetGroup.nCachedObjects_, i = this._bindings[n]; i !== void 0 && i.getValue(e, t) } setValue(e, t) { let n = this._bindings; for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)n[i].setValue(e, t) } bind() { let e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].bind() } unbind() { let e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].unbind() } }, je = class s { constructor(e, t, n) { this.path = t, this.parsedPath = n || s.parseTrackName(t), this.node = s.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } static create(e, t, n) { return e && e.isAnimationObjectGroup ? new s.Composite(e, t, n) : new s(e, t, n) } static sanitizeNodeName(e) { return e.replace(/\s/g, "_").replace(kg, "") } static parseTrackName(e) { let t = Yg.exec(e); if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e); let n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, i = n.nodeName && n.nodeName.lastIndexOf("."); if (i !== void 0 && i !== -1) { let r = n.nodeName.substring(i + 1); qg.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r) } if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e); return n } static findNode(e, t) { if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e; if (e.skeleton) { let n = e.skeleton.getBoneByName(t); if (n !== void 0) return n } if (e.children) { let n = function (r) { for (let o = 0; o < r.length; o++) { let a = r[o]; if (a.name === t || a.uuid === t) return a; let c = n(a.children); if (c) return c } return null }, i = n(e.children); if (i) return i } return null } _getValue_unavailable() { } _setValue_unavailable() { } _getValue_direct(e, t) { e[t] = this.targetObject[this.propertyName] } _getValue_array(e, t) { let n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i)e[t++] = n[i] } _getValue_arrayElement(e, t) { e[t] = this.resolvedProperty[this.propertyIndex] } _getValue_toArray(e, t) { this.resolvedProperty.toArray(e, t) } _setValue_direct(e, t) { this.targetObject[this.propertyName] = e[t] } _setValue_direct_setNeedsUpdate(e, t) { this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0 } _setValue_direct_setMatrixWorldNeedsUpdate(e, t) { this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_array(e, t) { let n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i)n[i] = e[t++] } _setValue_array_setNeedsUpdate(e, t) { let n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i)n[i] = e[t++]; this.targetObject.needsUpdate = !0 } _setValue_array_setMatrixWorldNeedsUpdate(e, t) { let n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i)n[i] = e[t++]; this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_arrayElement(e, t) { this.resolvedProperty[this.propertyIndex] = e[t] } _setValue_arrayElement_setNeedsUpdate(e, t) { this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0 } _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) { this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_fromArray(e, t) { this.resolvedProperty.fromArray(e, t) } _setValue_fromArray_setNeedsUpdate(e, t) { this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0 } _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) { this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0 } _getValue_unbound(e, t) { this.bind(), this.getValue(e, t) } _setValue_unbound(e, t) { this.bind(), this.setValue(e, t) } bind() { let e = this.node, t = this.parsedPath, n = t.objectName, i = t.propertyName, r = t.propertyIndex; if (e || (e = s.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) { console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + "."); return } if (n) { let l = t.objectIndex; switch (n) { case "materials": if (!e.material) { console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); return } if (!e.material.materials) { console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this); return } e = e.material.materials; break; case "bones": if (!e.skeleton) { console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this); return } e = e.skeleton.bones; for (let h = 0; h < e.length; h++)if (e[h].name === l) { l = h; break } break; case "map": if ("map" in e) { e = e.map; break } if (!e.material) { console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); return } if (!e.material.map) { console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this); return } e = e.material.map; break; default: if (e[n] === void 0) { console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this); return } e = e[n] }if (l !== void 0) { if (e[l] === void 0) { console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e); return } e = e[l] } } let o = e[i]; if (o === void 0) { let l = t.nodeName; console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e); return } let a = this.Versioning.None; this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate); let c = this.BindingType.Direct; if (r !== void 0) { if (i === "morphTargetInfluences") { if (!e.geometry) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this); return } if (!e.geometry.morphAttributes) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this); return } e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]) } c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r } else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i; this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][a] } unbind() { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } }; je.Composite = sa; je.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }; je.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }; je.prototype.GetterByBindingType = [je.prototype._getValue_direct, je.prototype._getValue_array, je.prototype._getValue_arrayElement, je.prototype._getValue_toArray]; je.prototype.SetterByBindingTypeAndVersioning = [[je.prototype._setValue_direct, je.prototype._setValue_direct_setNeedsUpdate, je.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [je.prototype._setValue_array, je.prototype._setValue_array_setNeedsUpdate, je.prototype._setValue_array_setMatrixWorldNeedsUpdate], [je.prototype._setValue_arrayElement, je.prototype._setValue_arrayElement_setNeedsUpdate, je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [je.prototype._setValue_fromArray, je.prototype._setValue_fromArray_setNeedsUpdate, je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]]; var c_ = new Float32Array(1); var xs = class { constructor(e = 1, t = 0, n = 0) { return this.radius = e, this.phi = t, this.theta = n, this } set(e, t, n) { return this.radius = e, this.phi = t, this.theta = n, this } copy(e) { return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this } makeSafe() { return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this } setFromVector3(e) { return this.setFromCartesianCoords(e.x, e.y, e.z) } setFromCartesianCoords(e, t, n) { return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(gt(t / this.radius, -1, 1))), this } clone() { return new this.constructor().copy(this) } }; typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: ra } })); typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ra); var ah = { type: "change" }, da = { type: "start" }, ch = { type: "end" }, Or = new Fn, lh = new qt, Kg = Math.cos(70 * Dr.DEG2RAD), Fr = class extends rn { constructor(e, t) { super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new C, this.cursor = new C, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: si.ROTATE, MIDDLE: si.DOLLY, RIGHT: si.PAN }, this.touches = { ONE: ri.ROTATE, TWO: ri.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function () { return a.phi }, this.getAzimuthalAngle = function () { return a.theta }, this.getDistance = function () { return this.object.position.distanceTo(this.target) }, this.listenToKeyEvents = function (_) { _.addEventListener("keydown", Se), this._domElementKeyEvents = _ }, this.stopListenToKeyEvents = function () { this._domElementKeyEvents.removeEventListener("keydown", Se), this._domElementKeyEvents = null }, this.saveState = function () { n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom }, this.reset = function () { n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(ah), n.update(), r = i.NONE }, this.update = function () { let _ = new C, I = new Rt().setFromUnitVectors(e.up, new C(0, 1, 0)), U = I.clone().invert(), Z = new C, te = new Rt, we = new C, Ue = 2 * Math.PI; return function (pt = null) { let Ge = n.object.position; _.copy(Ge).sub(n.target), _.applyQuaternion(I), a.setFromVector3(_), n.autoRotate && r === i.NONE && X(v(pt)), n.enableDamping ? (a.theta += c.theta * n.dampingFactor, a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta, a.phi += c.phi); let at = n.minAzimuthAngle, Qe = n.maxAzimuthAngle; isFinite(at) && isFinite(Qe) && (at < -Math.PI ? at += Ue : at > Math.PI && (at -= Ue), Qe < -Math.PI ? Qe += Ue : Qe > Math.PI && (Qe -= Ue), at <= Qe ? a.theta = Math.max(at, Math.min(Qe, a.theta)) : a.theta = a.theta > (at + Qe) / 2 ? Math.max(at, a.theta) : Math.min(Qe, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), n.target.sub(n.cursor), n.target.clampLength(n.minTargetRadius, n.maxTargetRadius), n.target.add(n.cursor); let bn = !1; if (n.zoomToCursor && R || n.object.isOrthographicCamera) a.radius = j(a.radius); else { let Ft = a.radius; a.radius = j(a.radius * l), bn = Ft != a.radius } if (_.setFromSpherical(a), _.applyQuaternion(U), Ge.copy(n.target).add(_), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0)), n.zoomToCursor && R) { let Ft = null; if (n.object.isPerspectiveCamera) { let An = _.length(); Ft = j(An * l); let ln = An - Ft; n.object.position.addScaledVector(T, ln), n.object.updateMatrixWorld(), bn = !!ln } else if (n.object.isOrthographicCamera) { let An = new C(N.x, N.y, 0); An.unproject(n.object); let ln = n.object.zoom; n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), n.object.updateProjectionMatrix(), bn = ln !== n.object.zoom; let Wi = new C(N.x, N.y, 0); Wi.unproject(n.object), n.object.position.sub(Wi).add(An), n.object.updateMatrixWorld(), Ft = _.length() } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = !1; Ft !== null && (this.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(Ft).add(n.object.position) : (Or.origin.copy(n.object.position), Or.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(Or.direction)) < Kg ? e.lookAt(n.target) : (lh.setFromNormalAndCoplanarPoint(n.object.up, n.target), Or.intersectPlane(lh, n.target)))) } else if (n.object.isOrthographicCamera) { let Ft = n.object.zoom; n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / l)), Ft !== n.object.zoom && (n.object.updateProjectionMatrix(), bn = !0) } return l = 1, R = !1, bn || Z.distanceToSquared(n.object.position) > o || 8 * (1 - te.dot(n.object.quaternion)) > o || we.distanceToSquared(n.target) > o ? (n.dispatchEvent(ah), Z.copy(n.object.position), te.copy(n.object.quaternion), we.copy(n.target), !0) : !1 } }(), this.dispose = function () { n.domElement.removeEventListener("contextmenu", Ve), n.domElement.removeEventListener("pointerdown", E), n.domElement.removeEventListener("pointercancel", k), n.domElement.removeEventListener("wheel", $), n.domElement.removeEventListener("pointermove", y), n.domElement.removeEventListener("pointerup", k), n.domElement.getRootNode().removeEventListener("keydown", ae, { capture: !0 }), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", Se), n._domElementKeyEvents = null) }; let n = this, i = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, r = i.NONE, o = 1e-6, a = new xs, c = new xs, l = 1, h = new C, u = new xe, d = new xe, f = new xe, g = new xe, x = new xe, m = new xe, p = new xe, A = new xe, M = new xe, T = new C, N = new xe, R = !1, w = [], H = {}, b = !1; function v(_) { return _ !== null ? 2 * Math.PI / 60 * n.autoRotateSpeed * _ : 2 * Math.PI / 60 / 60 * n.autoRotateSpeed } function B(_) { let I = Math.abs(_ * .01); return Math.pow(.95, n.zoomSpeed * I) } function X(_) { c.theta -= _ } function P(_) { c.phi -= _ } let W = function () { let _ = new C; return function (U, Z) { _.setFromMatrixColumn(Z, 0), _.multiplyScalar(-U), h.add(_) } }(), q = function () { let _ = new C; return function (U, Z) { n.screenSpacePanning === !0 ? _.setFromMatrixColumn(Z, 1) : (_.setFromMatrixColumn(Z, 0), _.crossVectors(n.object.up, _)), _.multiplyScalar(U), h.add(_) } }(), J = function () { let _ = new C; return function (U, Z) { let te = n.domElement; if (n.object.isPerspectiveCamera) { let we = n.object.position; _.copy(we).sub(n.target); let Ue = _.length(); Ue *= Math.tan(n.object.fov / 2 * Math.PI / 180), W(2 * U * Ue / te.clientHeight, n.object.matrix), q(2 * Z * Ue / te.clientHeight, n.object.matrix) } else n.object.isOrthographicCamera ? (W(U * (n.object.right - n.object.left) / n.object.zoom / te.clientWidth, n.object.matrix), q(Z * (n.object.top - n.object.bottom) / n.object.zoom / te.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1) } }(); function ie(_) { n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l /= _ : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1) } function V(_) { n.object.isPerspectiveCamera || n.object.isOrthographicCamera ? l *= _ : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1) } function Q(_, I) { if (!n.zoomToCursor) return; R = !0; let U = n.domElement.getBoundingClientRect(), Z = _ - U.left, te = I - U.top, we = U.width, Ue = U.height; N.x = Z / we * 2 - 1, N.y = -(te / Ue) * 2 + 1, T.set(N.x, N.y, 1).unproject(n.object).sub(n.object.position).normalize() } function j(_) { return Math.max(n.minDistance, Math.min(n.maxDistance, _)) } function de(_) { u.set(_.clientX, _.clientY) } function Fe(_) { Q(_.clientX, _.clientX), p.set(_.clientX, _.clientY) } function Ye(_) { g.set(_.clientX, _.clientY) } function G(_) { d.set(_.clientX, _.clientY), f.subVectors(d, u).multiplyScalar(n.rotateSpeed); let I = n.domElement; X(2 * Math.PI * f.x / I.clientHeight), P(2 * Math.PI * f.y / I.clientHeight), u.copy(d), n.update() } function ee(_) { A.set(_.clientX, _.clientY), M.subVectors(A, p), M.y > 0 ? ie(B(M.y)) : M.y < 0 && V(B(M.y)), p.copy(A), n.update() } function he(_) { x.set(_.clientX, _.clientY), m.subVectors(x, g).multiplyScalar(n.panSpeed), J(m.x, m.y), g.copy(x), n.update() } function se(_) { Q(_.clientX, _.clientY), _.deltaY < 0 ? V(B(_.deltaY)) : _.deltaY > 0 && ie(B(_.deltaY)), n.update() } function Be(_) { let I = !1; switch (_.code) { case n.keys.UP: _.ctrlKey || _.metaKey || _.shiftKey ? P(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : J(0, n.keyPanSpeed), I = !0; break; case n.keys.BOTTOM: _.ctrlKey || _.metaKey || _.shiftKey ? P(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : J(0, -n.keyPanSpeed), I = !0; break; case n.keys.LEFT: _.ctrlKey || _.metaKey || _.shiftKey ? X(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : J(n.keyPanSpeed, 0), I = !0; break; case n.keys.RIGHT: _.ctrlKey || _.metaKey || _.shiftKey ? X(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : J(-n.keyPanSpeed, 0), I = !0; break }I && (_.preventDefault(), n.update()) } function Ne(_) { if (w.length === 1) u.set(_.pageX, _.pageY); else { let I = Je(_), U = .5 * (_.pageX + I.x), Z = .5 * (_.pageY + I.y); u.set(U, Z) } } function D(_) { if (w.length === 1) g.set(_.pageX, _.pageY); else { let I = Je(_), U = .5 * (_.pageX + I.x), Z = .5 * (_.pageY + I.y); g.set(U, Z) } } function Ze(_) { let I = Je(_), U = _.pageX - I.x, Z = _.pageY - I.y, te = Math.sqrt(U * U + Z * Z); p.set(0, te) } function ge(_) { n.enableZoom && Ze(_), n.enablePan && D(_) } function Ke(_) { n.enableZoom && Ze(_), n.enableRotate && Ne(_) } function ye(_) { if (w.length == 1) d.set(_.pageX, _.pageY); else { let U = Je(_), Z = .5 * (_.pageX + U.x), te = .5 * (_.pageY + U.y); d.set(Z, te) } f.subVectors(d, u).multiplyScalar(n.rotateSpeed); let I = n.domElement; X(2 * Math.PI * f.x / I.clientHeight), P(2 * Math.PI * f.y / I.clientHeight), u.copy(d) } function ze(_) { if (w.length === 1) x.set(_.pageX, _.pageY); else { let I = Je(_), U = .5 * (_.pageX + I.x), Z = .5 * (_.pageY + I.y); x.set(U, Z) } m.subVectors(x, g).multiplyScalar(n.panSpeed), J(m.x, m.y), g.copy(x) } function Te(_) { let I = Je(_), U = _.pageX - I.x, Z = _.pageY - I.y, te = Math.sqrt(U * U + Z * Z); A.set(0, te), M.set(0, Math.pow(A.y / p.y, n.zoomSpeed)), ie(M.y), p.copy(A); let we = (_.pageX + I.x) * .5, Ue = (_.pageY + I.y) * .5; Q(we, Ue) } function He(_) { n.enableZoom && Te(_), n.enablePan && ze(_) } function tt(_) { n.enableZoom && Te(_), n.enableRotate && ye(_) } function E(_) { n.enabled !== !1 && (w.length === 0 && (n.domElement.setPointerCapture(_.pointerId), n.domElement.addEventListener("pointermove", y), n.domElement.addEventListener("pointerup", k)), !Ee(_) && (_e(_), _.pointerType === "touch" ? ne(_) : Y(_))) } function y(_) { n.enabled !== !1 && (_.pointerType === "touch" ? pe(_) : K(_)) } function k(_) { switch (le(_), w.length) { case 0: n.domElement.releasePointerCapture(_.pointerId), n.domElement.removeEventListener("pointermove", y), n.domElement.removeEventListener("pointerup", k), n.dispatchEvent(ch), r = i.NONE; break; case 1: let I = w[0], U = H[I]; ne({ pointerId: I, pageX: U.x, pageY: U.y }); break } } function Y(_) { let I; switch (_.button) { case 0: I = n.mouseButtons.LEFT; break; case 1: I = n.mouseButtons.MIDDLE; break; case 2: I = n.mouseButtons.RIGHT; break; default: I = -1 }switch (I) { case si.DOLLY: if (n.enableZoom === !1) return; Fe(_), r = i.DOLLY; break; case si.ROTATE: if (_.ctrlKey || _.metaKey || _.shiftKey) { if (n.enablePan === !1) return; Ye(_), r = i.PAN } else { if (n.enableRotate === !1) return; de(_), r = i.ROTATE } break; case si.PAN: if (_.ctrlKey || _.metaKey || _.shiftKey) { if (n.enableRotate === !1) return; de(_), r = i.ROTATE } else { if (n.enablePan === !1) return; Ye(_), r = i.PAN } break; default: r = i.NONE }r !== i.NONE && n.dispatchEvent(da) } function K(_) { switch (r) { case i.ROTATE: if (n.enableRotate === !1) return; G(_); break; case i.DOLLY: if (n.enableZoom === !1) return; ee(_); break; case i.PAN: if (n.enablePan === !1) return; he(_); break } } function $(_) { n.enabled === !1 || n.enableZoom === !1 || r !== i.NONE || (_.preventDefault(), n.dispatchEvent(da), se(me(_)), n.dispatchEvent(ch)) } function me(_) { let I = _.deltaMode, U = { clientX: _.clientX, clientY: _.clientY, deltaY: _.deltaY }; switch (I) { case 1: U.deltaY *= 16; break; case 2: U.deltaY *= 100; break }return _.ctrlKey && !b && (U.deltaY *= 10), U } function ae(_) { _.key === "Control" && (b = !0, n.domElement.getRootNode().addEventListener("keyup", oe, { passive: !0, capture: !0 })) } function oe(_) { _.key === "Control" && (b = !1, n.domElement.getRootNode().removeEventListener("keyup", oe, { passive: !0, capture: !0 })) } function Se(_) { n.enabled === !1 || n.enablePan === !1 || Be(_) } function ne(_) { switch (De(_), w.length) { case 1: switch (n.touches.ONE) { case ri.ROTATE: if (n.enableRotate === !1) return; Ne(_), r = i.TOUCH_ROTATE; break; case ri.PAN: if (n.enablePan === !1) return; D(_), r = i.TOUCH_PAN; break; default: r = i.NONE }break; case 2: switch (n.touches.TWO) { case ri.DOLLY_PAN: if (n.enableZoom === !1 && n.enablePan === !1) return; ge(_), r = i.TOUCH_DOLLY_PAN; break; case ri.DOLLY_ROTATE: if (n.enableZoom === !1 && n.enableRotate === !1) return; Ke(_), r = i.TOUCH_DOLLY_ROTATE; break; default: r = i.NONE }break; default: r = i.NONE }r !== i.NONE && n.dispatchEvent(da) } function pe(_) { switch (De(_), r) { case i.TOUCH_ROTATE: if (n.enableRotate === !1) return; ye(_), n.update(); break; case i.TOUCH_PAN: if (n.enablePan === !1) return; ze(_), n.update(); break; case i.TOUCH_DOLLY_PAN: if (n.enableZoom === !1 && n.enablePan === !1) return; He(_), n.update(); break; case i.TOUCH_DOLLY_ROTATE: if (n.enableZoom === !1 && n.enableRotate === !1) return; tt(_), n.update(); break; default: r = i.NONE } } function Ve(_) { n.enabled !== !1 && _.preventDefault() } function _e(_) { w.push(_.pointerId) } function le(_) { delete H[_.pointerId]; for (let I = 0; I < w.length; I++)if (w[I] == _.pointerId) { w.splice(I, 1); return } } function Ee(_) { for (let I = 0; I < w.length; I++)if (w[I] == _.pointerId) return !0; return !1 } function De(_) { let I = H[_.pointerId]; I === void 0 && (I = new xe, H[_.pointerId] = I), I.set(_.pageX, _.pageY) } function Je(_) { let I = _.pointerId === w[0] ? w[1] : w[0]; return H[I] } n.domElement.addEventListener("contextmenu", Ve), n.domElement.addEventListener("pointerdown", E), n.domElement.addEventListener("pointercancel", k), n.domElement.addEventListener("wheel", $, { passive: !1 }), n.domElement.getRootNode().addEventListener("keydown", ae, { passive: !0, capture: !0 }), this.update() } }; function fa(s, e) { if (e === ql) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s; if (e === vs || e === Lr) { let t = s.getIndex(); if (t === null) { let o = [], a = s.getAttribute("position"); if (a !== void 0) { for (let c = 0; c < a.count; c++)o.push(c); s.setIndex(o), t = s.getIndex() } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s } let n = t.count - 2, i = []; if (e === vs) for (let o = 1; o <= n; o++)i.push(t.getX(0)), i.push(t.getX(o)), i.push(t.getX(o + 1)); else for (let o = 0; o < n; o++)o % 2 === 0 ? (i.push(t.getX(o)), i.push(t.getX(o + 1)), i.push(t.getX(o + 2))) : (i.push(t.getX(o + 2)), i.push(t.getX(o + 1)), i.push(t.getX(o))); i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."); let r = s.clone(); return r.setIndex(i), r.clearGroups(), r } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), s } var Br = class extends jt { constructor(e) { super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function (t) { return new va(t) }), this.register(function (t) { return new Ma(t) }), this.register(function (t) { return new Pa(t) }), this.register(function (t) { return new Ia(t) }), this.register(function (t) { return new La(t) }), this.register(function (t) { return new ba(t) }), this.register(function (t) { return new Aa(t) }), this.register(function (t) { return new Ta(t) }), this.register(function (t) { return new Ea(t) }), this.register(function (t) { return new ya(t) }), this.register(function (t) { return new wa(t) }), this.register(function (t) { return new Sa(t) }), this.register(function (t) { return new Ca(t) }), this.register(function (t) { return new Ra(t) }), this.register(function (t) { return new _a(t) }), this.register(function (t) { return new Na(t) }), this.register(function (t) { return new Da(t) }) } load(e, t, n, i) { let r = this, o; if (this.resourcePath !== "") o = this.resourcePath; else if (this.path !== "") { let l = Vn.extractUrlBase(e); o = Vn.resolveURL(l, this.path) } else o = Vn.extractUrlBase(e); this.manager.itemStart(e); let a = function (l) { i ? i(l) : console.error(l), r.manager.itemError(e), r.manager.itemEnd(e) }, c = new Hn(this.manager); c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function (l) { try { r.parse(l, o, function (h) { t(h), r.manager.itemEnd(e) }, a) } catch (h) { a(h) } }, n, a) } setDRACOLoader(e) { return this.dracoLoader = e, this } setDDSLoader() { throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".') } setKTX2Loader(e) { return this.ktx2Loader = e, this } setMeshoptDecoder(e) { return this.meshoptDecoder = e, this } register(e) { return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this } unregister(e) { return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this } parse(e, t, n, i) { let r, o = {}, a = {}, c = new TextDecoder; if (typeof e == "string") r = JSON.parse(e); else if (e instanceof ArrayBuffer) if (c.decode(new Uint8Array(e, 0, 4)) === ph) { try { o[ke.KHR_BINARY_GLTF] = new Ua(e) } catch (u) { i && i(u); return } r = JSON.parse(o[ke.KHR_BINARY_GLTF].content) } else r = JSON.parse(c.decode(e)); else r = e; if (r.asset === void 0 || r.asset.version[0] < 2) { i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")); return } let l = new Va(r, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder }); l.fileLoader.setRequestHeader(this.requestHeader); for (let h = 0; h < this.pluginCallbacks.length; h++) { let u = this.pluginCallbacks[h](l); u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[u.name] = u, o[u.name] = !0 } if (r.extensionsUsed) for (let h = 0; h < r.extensionsUsed.length; ++h) { let u = r.extensionsUsed[h], d = r.extensionsRequired || []; switch (u) { case ke.KHR_MATERIALS_UNLIT: o[u] = new xa; break; case ke.KHR_DRACO_MESH_COMPRESSION: o[u] = new Oa(r, this.dracoLoader); break; case ke.KHR_TEXTURE_TRANSFORM: o[u] = new Fa; break; case ke.KHR_MESH_QUANTIZATION: o[u] = new Ba; break; default: d.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".') } } l.setExtensions(o), l.setPlugins(a), l.parse(n, i) } parseAsync(e, t) { let n = this; return new Promise(function (i, r) { n.parse(e, t, i, r) }) } }; function Jg() { let s = {}; return { get: function (e) { return s[e] }, add: function (e, t) { s[e] = t }, remove: function (e) { delete s[e] }, removeAll: function () { s = {} } } } var ke = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_MATERIALS_BUMP: "EXT_materials_bump", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" }, _a = class { constructor(e) { this.parser = e, this.name = ke.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} } } _markDefs() { let e = this.parser, t = this.parser.json.nodes || []; for (let n = 0, i = t.length; n < i; n++) { let r = t[n]; r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light) } } _loadLight(e) { let t = this.parser, n = "light:" + e, i = t.cache.get(n); if (i) return i; let r = t.json, c = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e], l, h = new Me(16777215); c.color !== void 0 && h.setRGB(c.color[0], c.color[1], c.color[2], ht); let u = c.range !== void 0 ? c.range : 0; switch (c.type) { case "directional": l = new wr(h), l.target.position.set(0, 0, -1), l.add(l.target); break; case "point": l = new Er(h), l.distance = u; break; case "spot": l = new Tr(h), l.distance = u, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target); break; default: throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type) }return l.position.set(0, 0, 0), l.decay = 2, Wn(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i } getDependency(e, t) { if (e === "light") return this._loadLight(t) } createNodeAttachment(e) { let t = this, n = this.parser, r = n.json.nodes[e], a = (r.extensions && r.extensions[this.name] || {}).light; return a === void 0 ? null : this._loadLight(a).then(function (c) { return n._getNodeRef(t.cache, a, c) }) } }, xa = class { constructor() { this.name = ke.KHR_MATERIALS_UNLIT } getMaterialType() { return Ut } extendParams(e, t, n) { let i = []; e.color = new Me(1, 1, 1), e.opacity = 1; let r = t.pbrMetallicRoughness; if (r) { if (Array.isArray(r.baseColorFactor)) { let o = r.baseColorFactor; e.color.setRGB(o[0], o[1], o[2], ht), e.opacity = o[3] } r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, ot)) } return Promise.all(i) } }, ya = class { constructor(e) { this.parser = e, this.name = ke.KHR_MATERIALS_EMISSIVE_STRENGTH } extendMaterialParams(e, t) { let i = this.parser.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); let r = i.extensions[this.name].emissiveStrength; return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve() } }, va = class { constructor(e) { this.parser = e, this.name = ke.KHR_MATERIALS_CLEARCOAT } getMaterialType(e) { let n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Ot } extendMaterialParams(e, t) { let n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); let r = [], o = i.extensions[this.name]; if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) { let a = o.clearcoatNormalTexture.scale; t.clearcoatNormalScale = new xe(a, a) } return Promise.all(r) } }, Ma = class { constructor(e) { this.parser = e, this.name = ke.KHR_MATERIALS_DISPERSION } getMaterialType(e) { let n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Ot } extendMaterialParams(e, t) { let i = this.parser.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); let r = i.extensions[this.name]; return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve() } }, Sa = class { constructor(e) { this.parser = e, this.name = ke.KHR_MATERIALS_IRIDESCENCE } getMaterialType(e) { let n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Ot } extendMaterialParams(e, t) { let n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); let r = [], o = i.extensions[this.name]; return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r) } }, ba = class { constructor(e) { this.parser = e, this.name = ke.KHR_MATERIALS_SHEEN } getMaterialType(e) { let n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Ot } extendMaterialParams(e, t) { let n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); let r = []; t.sheenColor = new Me(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1; let o = i.extensions[this.name]; if (o.sheenColorFactor !== void 0) { let a = o.sheenColorFactor; t.sheenColor.setRGB(a[0], a[1], a[2], ht) } return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, ot)), o.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r) } }, Aa = class { constructor(e) { this.parser = e, this.name = ke.KHR_MATERIALS_TRANSMISSION } getMaterialType(e) { let n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Ot } extendMaterialParams(e, t) { let n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); let r = [], o = i.extensions[this.name]; return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r) } }, Ta = class { constructor(e) { this.parser = e, this.name = ke.KHR_MATERIALS_VOLUME } getMaterialType(e) { let n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Ot } extendMaterialParams(e, t) { let n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); let r = [], o = i.extensions[this.name]; t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0; let a = o.attenuationColor || [1, 1, 1]; return t.attenuationColor = new Me().setRGB(a[0], a[1], a[2], ht), Promise.all(r) } }, Ea = class { constructor(e) { this.parser = e, this.name = ke.KHR_MATERIALS_IOR } getMaterialType(e) { let n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Ot } extendMaterialParams(e, t) { let i = this.parser.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); let r = i.extensions[this.name]; return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve() } }, wa = class { constructor(e) { this.parser = e, this.name = ke.KHR_MATERIALS_SPECULAR } getMaterialType(e) { let n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Ot } extendMaterialParams(e, t) { let n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); let r = [], o = i.extensions[this.name]; t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture)); let a = o.specularColorFactor || [1, 1, 1]; return t.specularColor = new Me().setRGB(a[0], a[1], a[2], ht), o.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, ot)), Promise.all(r) } }, Ra = class { constructor(e) { this.parser = e, this.name = ke.EXT_MATERIALS_BUMP } getMaterialType(e) { let n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Ot } extendMaterialParams(e, t) { let n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); let r = [], o = i.extensions[this.name]; return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(r) } }, Ca = class { constructor(e) { this.parser = e, this.name = ke.KHR_MATERIALS_ANISOTROPY } getMaterialType(e) { let n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : Ot } extendMaterialParams(e, t) { let n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); let r = [], o = i.extensions[this.name]; return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r) } }, Pa = class { constructor(e) { this.parser = e, this.name = ke.KHR_TEXTURE_BASISU } loadTexture(e) { let t = this.parser, n = t.json, i = n.textures[e]; if (!i.extensions || !i.extensions[this.name]) return null; let r = i.extensions[this.name], o = t.options.ktx2Loader; if (!o) { if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"); return null } return t.loadTextureImage(e, r.source, o) } }, Ia = class { constructor(e) { this.parser = e, this.name = ke.EXT_TEXTURE_WEBP, this.isSupported = null } loadTexture(e) { let t = this.name, n = this.parser, i = n.json, r = i.textures[e]; if (!r.extensions || !r.extensions[t]) return null; let o = r.extensions[t], a = i.images[o.source], c = n.textureLoader; if (a.uri) { let l = n.options.manager.getHandler(a.uri); l !== null && (c = l) } return this.detectSupport().then(function (l) { if (l) return n.loadTextureImage(e, o.source, c); if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported."); return n.loadTexture(e) }) } detectSupport() { return this.isSupported || (this.isSupported = new Promise(function (e) { let t = new Image; t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function () { e(t.height === 1) } })), this.isSupported } }, La = class { constructor(e) { this.parser = e, this.name = ke.EXT_TEXTURE_AVIF, this.isSupported = null } loadTexture(e) { let t = this.name, n = this.parser, i = n.json, r = i.textures[e]; if (!r.extensions || !r.extensions[t]) return null; let o = r.extensions[t], a = i.images[o.source], c = n.textureLoader; if (a.uri) { let l = n.options.manager.getHandler(a.uri); l !== null && (c = l) } return this.detectSupport().then(function (l) { if (l) return n.loadTextureImage(e, o.source, c); if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported."); return n.loadTexture(e) }) } detectSupport() { return this.isSupported || (this.isSupported = new Promise(function (e) { let t = new Image; t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function () { e(t.height === 1) } })), this.isSupported } }, Na = class { constructor(e) { this.name = ke.EXT_MESHOPT_COMPRESSION, this.parser = e } loadBufferView(e) { let t = this.parser.json, n = t.bufferViews[e]; if (n.extensions && n.extensions[this.name]) { let i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), o = this.parser.options.meshoptDecoder; if (!o || !o.supported) { if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"); return null } return r.then(function (a) { let c = i.byteOffset || 0, l = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(a, c, l); return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function (f) { return f.buffer }) : o.ready.then(function () { let f = new ArrayBuffer(h * u); return o.decodeGltfBuffer(new Uint8Array(f), h, u, d, i.mode, i.filter), f }) }) } else return null } }, Da = class { constructor(e) { this.name = ke.EXT_MESH_GPU_INSTANCING, this.parser = e } createNodeMesh(e) { let t = this.parser.json, n = t.nodes[e]; if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null; let i = t.meshes[n.mesh]; for (let l of i.primitives) if (l.mode !== Gt.TRIANGLES && l.mode !== Gt.TRIANGLE_STRIP && l.mode !== Gt.TRIANGLE_FAN && l.mode !== void 0) return null; let o = n.extensions[this.name].attributes, a = [], c = {}; for (let l in o) a.push(this.parser.getDependency("accessor", o[l]).then(h => (c[l] = h, c[l]))); return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then(l => { let h = l.pop(), u = h.isGroup ? h.children : [h], d = l[0].count, f = []; for (let g of u) { let x = new Le, m = new C, p = new Rt, A = new C(1, 1, 1), M = new _r(g.geometry, g.material, d); for (let T = 0; T < d; T++)c.TRANSLATION && m.fromBufferAttribute(c.TRANSLATION, T), c.ROTATION && p.fromBufferAttribute(c.ROTATION, T), c.SCALE && A.fromBufferAttribute(c.SCALE, T), M.setMatrixAt(T, x.compose(m, p, A)); for (let T in c) if (T === "_COLOR_0") { let N = c[T]; M.instanceColor = new ii(N.array, N.itemSize, N.normalized) } else T !== "TRANSLATION" && T !== "ROTATION" && T !== "SCALE" && g.geometry.setAttribute(T, c[T]); rt.prototype.copy.call(M, g), this.parser.assignFinalMaterial(M), f.push(M) } return h.isGroup ? (h.clear(), h.add(...f), h) : f[0] })) } }, ph = "glTF", Ms = 12, hh = { JSON: 1313821514, BIN: 5130562 }, Ua = class { constructor(e) { this.name = ke.KHR_BINARY_GLTF, this.content = null, this.body = null; let t = new DataView(e, 0, Ms), n = new TextDecoder; if (this.header = { magic: n.decode(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, !0), length: t.getUint32(8, !0) }, this.header.magic !== ph) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header."); if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected."); let i = this.header.length - Ms, r = new DataView(e, Ms), o = 0; for (; o < i;) { let a = r.getUint32(o, !0); o += 4; let c = r.getUint32(o, !0); if (o += 4, c === hh.JSON) { let l = new Uint8Array(e, Ms + o, a); this.content = n.decode(l) } else if (c === hh.BIN) { let l = Ms + o; this.body = e.slice(l, l + a) } o += a } if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.") } }, Oa = class { constructor(e, t) { if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided."); this.name = ke.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload() } decodePrimitive(e, t) { let n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, c = {}, l = {}; for (let h in o) { let u = ka[h] || h.toLowerCase(); a[u] = o[h] } for (let h in e.attributes) { let u = ka[h] || h.toLowerCase(); if (o[h] !== void 0) { let d = n.accessors[e.attributes[h]], f = Gi[d.componentType]; l[u] = f.name, c[u] = d.normalized === !0 } } return t.getDependency("bufferView", r).then(function (h) { return new Promise(function (u, d) { i.decodeDracoFile(h, function (f) { for (let g in f.attributes) { let x = f.attributes[g], m = c[g]; m !== void 0 && (x.normalized = m) } u(f) }, a, l, ht, d) }) }) } }, Fa = class { constructor() { this.name = ke.KHR_TEXTURE_TRANSFORM } extendTexture(e, t) { return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e } }, Ba = class { constructor() { this.name = ke.KHR_MESH_QUANTIZATION } }, zr = class extends Bn { constructor(e, t, n, i) { super(e, t, n, i) } copySampleValue_(e) { let t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i; for (let o = 0; o !== i; o++)t[o] = n[r + o]; return t } interpolate_(e, t, n, i) { let r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = a * 2, l = a * 3, h = i - t, u = (n - t) / h, d = u * u, f = d * u, g = e * l, x = g - l, m = -2 * f + 3 * d, p = f - d, A = 1 - m, M = p - d + u; for (let T = 0; T !== a; T++) { let N = o[x + T + a], R = o[x + T + c] * h, w = o[g + T + a], H = o[g + T] * h; r[T] = A * N + M * R + m * w + p * H } return r } }, $g = new Rt, za = class extends zr { interpolate_(e, t, n, i) { let r = super.interpolate_(e, t, n, i); return $g.fromArray(r).normalize().toArray(r), r } }, Gt = { FLOAT: 5126, FLOAT_MAT3: 35675, FLOAT_MAT4: 35676, FLOAT_VEC2: 35664, FLOAT_VEC3: 35665, FLOAT_VEC4: 35666, LINEAR: 9729, REPEAT: 10497, SAMPLER_2D: 35678, POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6, UNSIGNED_BYTE: 5121, UNSIGNED_SHORT: 5123 }, Gi = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, uh = { 9728: St, 9729: Et, 9984: oa, 9985: ns, 9986: Ti, 9987: en }, dh = { 33071: xn, 33648: os, 10497: ti }, pa = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, ka = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, Gn = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, jg = { CUBICSPLINE: void 0, LINEAR: ni, STEP: Ui }, ma = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" }; function Qg(s) { return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new ki({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: !1, depthTest: !0, side: sn })), s.DefaultMaterial } function oi(s, e, t) { for (let n in t.extensions) s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]) } function Wn(s, e) { e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras)) } function e_(s, e, t) { let n = !1, i = !1, r = !1; for (let l = 0, h = e.length; l < h; l++) { let u = e[l]; if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (r = !0), n && i && r) break } if (!n && !i && !r) return Promise.resolve(s); let o = [], a = [], c = []; for (let l = 0, h = e.length; l < h; l++) { let u = e[l]; if (n) { let d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : s.attributes.position; o.push(d) } if (i) { let d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : s.attributes.normal; a.push(d) } if (r) { let d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : s.attributes.color; c.push(d) } } return Promise.all([Promise.all(o), Promise.all(a), Promise.all(c)]).then(function (l) { let h = l[0], u = l[1], d = l[2]; return n && (s.morphAttributes.position = h), i && (s.morphAttributes.normal = u), r && (s.morphAttributes.color = d), s.morphTargetsRelative = !0, s }) } function t_(s, e) { if (s.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++)s.morphTargetInfluences[t] = e.weights[t]; if (e.extras && Array.isArray(e.extras.targetNames)) { let t = e.extras.targetNames; if (s.morphTargetInfluences.length === t.length) { s.morphTargetDictionary = {}; for (let n = 0, i = t.length; n < i; n++)s.morphTargetDictionary[t[n]] = n } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.") } } function n_(s) { let e, t = s.extensions && s.extensions[ke.KHR_DRACO_MESH_COMPRESSION]; if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + ga(t.attributes) : e = s.indices + ":" + ga(s.attributes) + ":" + s.mode, s.targets !== void 0) for (let n = 0, i = s.targets.length; n < i; n++)e += ":" + ga(s.targets[n]); return e } function ga(s) { let e = "", t = Object.keys(s).sort(); for (let n = 0, i = t.length; n < i; n++)e += t[n] + ":" + s[t[n]] + ";"; return e } function Ha(s) { switch (s) { case Int8Array: return 1 / 127; case Uint8Array: return 1 / 255; case Int16Array: return 1 / 32767; case Uint16Array: return 1 / 65535; default: throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.") } } function i_(s) { return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png" } var s_ = new Le, Va = class { constructor(e = {}, t = {}) { this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Jg, this.associations = new Map, this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {}; let n = !1, i = !1, r = -1; typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && r < 98 ? this.textureLoader = new Hi(this.options.manager) : this.textureLoader = new Rr(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Hn(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0) } setExtensions(e) { this.extensions = e } setPlugins(e) { this.plugins = e } parse(e, t) { let n = this, i = this.json, r = this.extensions; this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function (o) { return o._markDefs && o._markDefs() }), Promise.all(this._invokeAll(function (o) { return o.beforeRoot && o.beforeRoot() })).then(function () { return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]) }).then(function (o) { let a = { scene: o[0][i.scene || 0], scenes: o[0], animations: o[1], cameras: o[2], asset: i.asset, parser: n, userData: {} }; return oi(r, a, i), Wn(a, i), Promise.all(n._invokeAll(function (c) { return c.afterRoot && c.afterRoot(a) })).then(function () { for (let c of a.scenes) c.updateMatrixWorld(); e(a) }) }).catch(t) } _markDefs() { let e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || []; for (let i = 0, r = t.length; i < r; i++) { let o = t[i].joints; for (let a = 0, c = o.length; a < c; a++)e[o[a]].isBone = !0 } for (let i = 0, r = e.length; i < r; i++) { let o = e[i]; o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera) } } _addNodeRef(e, t) { t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++) } _getNodeRef(e, t, n) { if (e.refs[t] <= 1) return n; let i = n.clone(), r = (o, a) => { let c = this.associations.get(o); c != null && this.associations.set(a, c); for (let [l, h] of o.children.entries()) r(h, a.children[l]) }; return r(n, i), i.name += "_instance_" + e.uses[t]++, i } _invokeOne(e) { let t = Object.values(this.plugins); t.push(this); for (let n = 0; n < t.length; n++) { let i = e(t[n]); if (i) return i } return null } _invokeAll(e) { let t = Object.values(this.plugins); t.unshift(this); let n = []; for (let i = 0; i < t.length; i++) { let r = e(t[i]); r && n.push(r) } return n } getDependency(e, t) { let n = e + ":" + t, i = this.cache.get(n); if (!i) { switch (e) { case "scene": i = this.loadScene(t); break; case "node": i = this._invokeOne(function (r) { return r.loadNode && r.loadNode(t) }); break; case "mesh": i = this._invokeOne(function (r) { return r.loadMesh && r.loadMesh(t) }); break; case "accessor": i = this.loadAccessor(t); break; case "bufferView": i = this._invokeOne(function (r) { return r.loadBufferView && r.loadBufferView(t) }); break; case "buffer": i = this.loadBuffer(t); break; case "material": i = this._invokeOne(function (r) { return r.loadMaterial && r.loadMaterial(t) }); break; case "texture": i = this._invokeOne(function (r) { return r.loadTexture && r.loadTexture(t) }); break; case "skin": i = this.loadSkin(t); break; case "animation": i = this._invokeOne(function (r) { return r.loadAnimation && r.loadAnimation(t) }); break; case "camera": i = this.loadCamera(t); break; default: if (i = this._invokeOne(function (r) { return r != this && r.getDependency && r.getDependency(e, t) }), !i) throw new Error("Unknown type: " + e); break }this.cache.add(n, i) } return i } getDependencies(e) { let t = this.cache.get(e); if (!t) { let n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || []; t = Promise.all(i.map(function (r, o) { return n.getDependency(e, o) })), this.cache.add(e, t) } return t } loadBuffer(e) { let t = this.json.buffers[e], n = this.fileLoader; if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported."); if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body); let i = this.options; return new Promise(function (r, o) { n.load(Vn.resolveURL(t.uri, i.path), r, void 0, function () { o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')) }) }) } loadBufferView(e) { let t = this.json.bufferViews[e]; return this.getDependency("buffer", t.buffer).then(function (n) { let i = t.byteLength || 0, r = t.byteOffset || 0; return n.slice(r, r + i) }) } loadAccessor(e) { let t = this, n = this.json, i = this.json.accessors[e]; if (i.bufferView === void 0 && i.sparse === void 0) { let o = pa[i.type], a = Gi[i.componentType], c = i.normalized === !0, l = new a(i.count * o); return Promise.resolve(new st(l, o, c)) } let r = []; return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function (o) { let a = o[0], c = pa[i.type], l = Gi[i.componentType], h = l.BYTES_PER_ELEMENT, u = h * c, d = i.byteOffset || 0, f = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0, x, m; if (f && f !== u) { let p = Math.floor(d / f), A = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count, M = t.cache.get(A); M || (x = new l(a, p * f, i.count * f / h), M = new us(x, f / h), t.cache.add(A, M)), m = new ds(M, c, d % f / h, g) } else a === null ? x = new l(i.count * c) : x = new l(a, d, i.count * c), m = new st(x, c, g); if (i.sparse !== void 0) { let p = pa.SCALAR, A = Gi[i.sparse.indices.componentType], M = i.sparse.indices.byteOffset || 0, T = i.sparse.values.byteOffset || 0, N = new A(o[1], M, i.sparse.count * p), R = new l(o[2], T, i.sparse.count * c); a !== null && (m = new st(m.array.slice(), m.itemSize, m.normalized)); for (let w = 0, H = N.length; w < H; w++) { let b = N[w]; if (m.setX(b, R[w * c]), c >= 2 && m.setY(b, R[w * c + 1]), c >= 3 && m.setZ(b, R[w * c + 2]), c >= 4 && m.setW(b, R[w * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.") } } return m }) } loadTexture(e) { let t = this.json, n = this.options, r = t.textures[e].source, o = t.images[r], a = this.textureLoader; if (o.uri) { let c = n.manager.getHandler(o.uri); c !== null && (a = c) } return this.loadTextureImage(e, r, a) } loadTextureImage(e, t, n) { let i = this, r = this.json, o = r.textures[e], a = r.images[t], c = (a.uri || a.bufferView) + ":" + o.sampler; if (this.textureCache[c]) return this.textureCache[c]; let l = this.loadImageSource(t, n).then(function (h) { h.flipY = !1, h.name = o.name || a.name || "", h.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (h.name = a.uri); let d = (r.samplers || {})[o.sampler] || {}; return h.magFilter = uh[d.magFilter] || Et, h.minFilter = uh[d.minFilter] || en, h.wrapS = dh[d.wrapS] || ti, h.wrapT = dh[d.wrapT] || ti, i.associations.set(h, { textures: e }), h }).catch(function () { return null }); return this.textureCache[c] = l, l } loadImageSource(e, t) { let n = this, i = this.json, r = this.options; if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then(u => u.clone()); let o = i.images[e], a = self.URL || self.webkitURL, c = o.uri || "", l = !1; if (o.bufferView !== void 0) c = n.getDependency("bufferView", o.bufferView).then(function (u) { l = !0; let d = new Blob([u], { type: o.mimeType }); return c = a.createObjectURL(d), c }); else if (o.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"); let h = Promise.resolve(c).then(function (u) { return new Promise(function (d, f) { let g = d; t.isImageBitmapLoader === !0 && (g = function (x) { let m = new _t(x); m.needsUpdate = !0, d(m) }), t.load(Vn.resolveURL(u, r.path), g, void 0, f) }) }).then(function (u) { return l === !0 && a.revokeObjectURL(c), u.userData.mimeType = o.mimeType || i_(o.uri), u }).catch(function (u) { throw console.error("THREE.GLTFLoader: Couldn't load texture", c), u }); return this.sourceCache[e] = h, h } assignTexture(e, t, n, i) { let r = this; return this.getDependency("texture", n.index).then(function (o) { if (!o) return null; if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), r.extensions[ke.KHR_TEXTURE_TRANSFORM]) { let a = n.extensions !== void 0 ? n.extensions[ke.KHR_TEXTURE_TRANSFORM] : void 0; if (a) { let c = r.associations.get(o); o = r.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), r.associations.set(o, c) } } return i !== void 0 && (o.colorSpace = i), e[t] = o, o }) } assignFinalMaterial(e) { let t = e.geometry, n = e.material, i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, o = t.attributes.normal === void 0; if (e.isPoints) { let a = "PointsMaterial:" + n.uuid, c = this.cache.get(a); c || (c = new ms, Dt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(a, c)), n = c } else if (e.isLine) { let a = "LineBasicMaterial:" + n.uuid, c = this.cache.get(a); c || (c = new ps, Dt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(a, c)), n = c } if (i || r || o) { let a = "ClonedMaterial:" + n.uuid + ":"; i && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), o && (a += "flat-shading:"); let c = this.cache.get(a); c || (c = n.clone(), r && (c.vertexColors = !0), o && (c.flatShading = !0), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(a, c), this.associations.set(c, this.associations.get(n))), n = c } e.material = n } getMaterialType() { return ki } loadMaterial(e) { let t = this, n = this.json, i = this.extensions, r = n.materials[e], o, a = {}, c = r.extensions || {}, l = []; if (c[ke.KHR_MATERIALS_UNLIT]) { let u = i[ke.KHR_MATERIALS_UNLIT]; o = u.getMaterialType(), l.push(u.extendParams(a, r, t)) } else { let u = r.pbrMetallicRoughness || {}; if (a.color = new Me(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) { let d = u.baseColorFactor; a.color.setRGB(d[0], d[1], d[2], ht), a.opacity = d[3] } u.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", u.baseColorTexture, ot)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function (d) { return d.getMaterialType && d.getMaterialType(e) }), l.push(Promise.all(this._invokeAll(function (d) { return d.extendMaterialParams && d.extendMaterialParams(e, a) }))) } r.doubleSided === !0 && (a.side = Zt); let h = r.alphaMode || ma.OPAQUE; if (h === ma.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, h === ma.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : .5)), r.normalTexture !== void 0 && o !== Ut && (l.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new xe(1, 1), r.normalTexture.scale !== void 0)) { let u = r.normalTexture.scale; a.normalScale.set(u, u) } if (r.occlusionTexture !== void 0 && o !== Ut && (l.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== Ut) { let u = r.emissiveFactor; a.emissive = new Me().setRGB(u[0], u[1], u[2], ht) } return r.emissiveTexture !== void 0 && o !== Ut && l.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, ot)), Promise.all(l).then(function () { let u = new o(a); return r.name && (u.name = r.name), Wn(u, r), t.associations.set(u, { materials: e }), r.extensions && oi(i, u, r), u }) } createUniqueName(e) { let t = je.sanitizeNodeName(e || ""); return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t) } loadGeometries(e) { let t = this, n = this.extensions, i = this.primitiveCache; function r(a) { return n[ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function (c) { return fh(c, a, t) }) } let o = []; for (let a = 0, c = e.length; a < c; a++) { let l = e[a], h = n_(l), u = i[h]; if (u) o.push(u.promise); else { let d; l.extensions && l.extensions[ke.KHR_DRACO_MESH_COMPRESSION] ? d = r(l) : d = fh(new Ct, l, t), i[h] = { primitive: l, promise: d }, o.push(d) } } return Promise.all(o) } loadMesh(e) { let t = this, n = this.json, i = this.extensions, r = n.meshes[e], o = r.primitives, a = []; for (let c = 0, l = o.length; c < l; c++) { let h = o[c].material === void 0 ? Qg(this.cache) : this.getDependency("material", o[c].material); a.push(h) } return a.push(t.loadGeometries(o)), Promise.all(a).then(function (c) { let l = c.slice(0, c.length - 1), h = c[c.length - 1], u = []; for (let f = 0, g = h.length; f < g; f++) { let x = h[f], m = o[f], p, A = l[f]; if (m.mode === Gt.TRIANGLES || m.mode === Gt.TRIANGLE_STRIP || m.mode === Gt.TRIANGLE_FAN || m.mode === void 0) p = r.isSkinnedMesh === !0 ? new pr(x, A) : new bt(x, A), p.isSkinnedMesh === !0 && p.normalizeSkinWeights(), m.mode === Gt.TRIANGLE_STRIP ? p.geometry = fa(p.geometry, Lr) : m.mode === Gt.TRIANGLE_FAN && (p.geometry = fa(p.geometry, vs)); else if (m.mode === Gt.LINES) p = new vr(x, A); else if (m.mode === Gt.LINE_STRIP) p = new zi(x, A); else if (m.mode === Gt.LINE_LOOP) p = new Mr(x, A); else if (m.mode === Gt.POINTS) p = new Sr(x, A); else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode); Object.keys(p.geometry.morphAttributes).length > 0 && t_(p, r), p.name = t.createUniqueName(r.name || "mesh_" + e), Wn(p, r), m.extensions && oi(i, p, m), t.assignFinalMaterial(p), u.push(p) } for (let f = 0, g = u.length; f < g; f++)t.associations.set(u[f], { meshes: e, primitives: f }); if (u.length === 1) return r.extensions && oi(i, u[0], r), u[0]; let d = new nn; r.extensions && oi(i, d, r), t.associations.set(d, { meshes: e }); for (let f = 0, g = u.length; f < g; f++)d.add(u[f]); return d }) } loadCamera(e) { let t, n = this.json.cameras[e], i = n[n.type]; if (!i) { console.warn("THREE.GLTFLoader: Missing camera parameters."); return } return n.type === "perspective" ? t = new ut(Dr.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Bi(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Wn(t, n), Promise.resolve(t) } loadSkin(e) { let t = this.json.skins[e], n = []; for (let i = 0, r = t.joints.length; i < r; i++)n.push(this._loadNodeShallow(t.joints[i])); return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function (i) { let r = i.pop(), o = i, a = [], c = []; for (let l = 0, h = o.length; l < h; l++) { let u = o[l]; if (u) { a.push(u); let d = new Le; r !== null && d.fromArray(r.array, l * 16), c.push(d) } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]) } return new gr(a, c) }) } loadAnimation(e) { let t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, o = [], a = [], c = [], l = [], h = []; for (let u = 0, d = i.channels.length; u < d; u++) { let f = i.channels[u], g = i.samplers[f.sampler], x = f.target, m = x.node, p = i.parameters !== void 0 ? i.parameters[g.input] : g.input, A = i.parameters !== void 0 ? i.parameters[g.output] : g.output; x.node !== void 0 && (o.push(this.getDependency("node", m)), a.push(this.getDependency("accessor", p)), c.push(this.getDependency("accessor", A)), l.push(g), h.push(x)) } return Promise.all([Promise.all(o), Promise.all(a), Promise.all(c), Promise.all(l), Promise.all(h)]).then(function (u) { let d = u[0], f = u[1], g = u[2], x = u[3], m = u[4], p = []; for (let A = 0, M = d.length; A < M; A++) { let T = d[A], N = f[A], R = g[A], w = x[A], H = m[A]; if (T === void 0) continue; T.updateMatrix && T.updateMatrix(); let b = n._createAnimationTracks(T, N, R, w, H); if (b) for (let v = 0; v < b.length; v++)p.push(b[v]) } return new Ar(r, void 0, p) }) } createNodeMesh(e) { let t = this.json, n = this, i = t.nodes[e]; return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function (r) { let o = n._getNodeRef(n.meshCache, i.mesh, r); return i.weights !== void 0 && o.traverse(function (a) { if (a.isMesh) for (let c = 0, l = i.weights.length; c < l; c++)a.morphTargetInfluences[c] = i.weights[c] }), o }) } loadNode(e) { let t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), o = [], a = i.children || []; for (let l = 0, h = a.length; l < h; l++)o.push(n.getDependency("node", a[l])); let c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin); return Promise.all([r, Promise.all(o), c]).then(function (l) { let h = l[0], u = l[1], d = l[2]; d !== null && h.traverse(function (f) { f.isSkinnedMesh && f.bind(d, s_) }); for (let f = 0, g = u.length; f < g; f++)h.add(u[f]); return h }) } _loadNodeShallow(e) { let t = this.json, n = this.extensions, i = this; if (this.nodeCache[e] !== void 0) return this.nodeCache[e]; let r = t.nodes[e], o = r.name ? i.createUniqueName(r.name) : "", a = [], c = i._invokeOne(function (l) { return l.createNodeMesh && l.createNodeMesh(e) }); return c && a.push(c), r.camera !== void 0 && a.push(i.getDependency("camera", r.camera).then(function (l) { return i._getNodeRef(i.cameraCache, r.camera, l) })), i._invokeAll(function (l) { return l.createNodeAttachment && l.createNodeAttachment(e) }).forEach(function (l) { a.push(l) }), this.nodeCache[e] = Promise.all(a).then(function (l) { let h; if (r.isBone === !0 ? h = new fs : l.length > 1 ? h = new nn : l.length === 1 ? h = l[0] : h = new rt, h !== l[0]) for (let u = 0, d = l.length; u < d; u++)h.add(l[u]); if (r.name && (h.userData.name = r.name, h.name = o), Wn(h, r), r.extensions && oi(n, h, r), r.matrix !== void 0) { let u = new Le; u.fromArray(r.matrix), h.applyMatrix4(u) } else r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale); return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h }), this.nodeCache[e] } loadScene(e) { let t = this.extensions, n = this.json.scenes[e], i = this, r = new nn; n.name && (r.name = i.createUniqueName(n.name)), Wn(r, n), n.extensions && oi(t, r, n); let o = n.nodes || [], a = []; for (let c = 0, l = o.length; c < l; c++)a.push(i.getDependency("node", o[c])); return Promise.all(a).then(function (c) { for (let h = 0, u = c.length; h < u; h++)r.add(c[h]); let l = h => { let u = new Map; for (let [d, f] of i.associations) (d instanceof Dt || d instanceof _t) && u.set(d, f); return h.traverse(d => { let f = i.associations.get(d); f != null && u.set(d, f) }), u }; return i.associations = l(r), r }) } _createAnimationTracks(e, t, n, i, r) { let o = [], a = e.name ? e.name : e.uuid, c = []; Gn[r.path] === Gn.weights ? e.traverse(function (d) { d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid) }) : c.push(a); let l; switch (Gn[r.path]) { case Gn.weights: l = Mn; break; case Gn.rotation: l = cn; break; case Gn.position: case Gn.scale: l = Sn; break; default: switch (n.itemSize) { case 1: l = Mn; break; case 2: case 3: default: l = Sn; break }break }let h = i.interpolation !== void 0 ? jg[i.interpolation] : ni, u = this._getArrayFromAccessor(n); for (let d = 0, f = c.length; d < f; d++) { let g = new l(c[d] + "." + Gn[r.path], t.array, u, h); i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), o.push(g) } return o } _getArrayFromAccessor(e) { let t = e.array; if (e.normalized) { let n = Ha(t.constructor), i = new Float32Array(t.length); for (let r = 0, o = t.length; r < o; r++)i[r] = t[r] * n; t = i } return t } _createCubicSplineTrackInterpolant(e) { e.createInterpolant = function (n) { let i = this instanceof cn ? za : zr; return new i(this.times, this.values, this.getValueSize() / 3, n) }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0 } }; function r_(s, e, t) { let n = e.attributes, i = new Ht; if (n.POSITION !== void 0) { let a = t.json.accessors[n.POSITION], c = a.min, l = a.max; if (c !== void 0 && l !== void 0) { if (i.set(new C(c[0], c[1], c[2]), new C(l[0], l[1], l[2])), a.normalized) { let h = Ha(Gi[a.componentType]); i.min.multiplyScalar(h), i.max.multiplyScalar(h) } } else { console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION."); return } } else return; let r = e.targets; if (r !== void 0) { let a = new C, c = new C; for (let l = 0, h = r.length; l < h; l++) { let u = r[l]; if (u.POSITION !== void 0) { let d = t.json.accessors[u.POSITION], f = d.min, g = d.max; if (f !== void 0 && g !== void 0) { if (c.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))), c.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))), c.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))), d.normalized) { let x = Ha(Gi[d.componentType]); c.multiplyScalar(x) } a.max(c) } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.") } } i.expandByVector(a) } s.boundingBox = i; let o = new Nt; i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = o } function fh(s, e, t) { let n = e.attributes, i = []; function r(o, a) { return t.getDependency("accessor", o).then(function (c) { s.setAttribute(a, c) }) } for (let o in n) { let a = ka[o] || o.toLowerCase(); a in s.attributes || i.push(r(n[o], a)) } if (e.indices !== void 0 && !s.index) { let o = t.getDependency("accessor", e.indices).then(function (a) { s.setIndex(a) }); i.push(o) } return We.workingColorSpace !== ht && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`), Wn(s, e), r_(s, e, t), Promise.all(i).then(function () { return e.targets !== void 0 ? e_(s, e.targets, t) : s }) } var Ga = new WeakMap, kr = class extends jt {
		constructor(e) { super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = { position: "POSITION", normal: "NORMAL", color: "COLOR", uv: "TEX_COORD" }, this.defaultAttributeTypes = { position: "Float32Array", normal: "Float32Array", color: "Float32Array", uv: "Float32Array" } } setDecoderPath(e) { return this.decoderPath = e, this } setDecoderConfig(e) { return this.decoderConfig = e, this } setWorkerLimit(e) { return this.workerLimit = e, this } load(e, t, n, i) { let r = new Hn(this.manager); r.setPath(this.path), r.setResponseType("arraybuffer"), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(e, o => { this.parse(o, t, i) }, n, i) } parse(e, t, n = () => { }) { this.decodeDracoFile(e, t, null, null, ot).catch(n) } decodeDracoFile(e, t, n, i, r = ht, o = () => { }) { let a = { attributeIDs: n || this.defaultAttributeIDs, attributeTypes: i || this.defaultAttributeTypes, useUniqueIDs: !!n, vertexColorSpace: r }; return this.decodeGeometry(e, a).then(t).catch(o) } decodeGeometry(e, t) { let n = JSON.stringify(t); if (Ga.has(e)) { let c = Ga.get(e); if (c.key === n) return c.promise; if (e.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.") } let i, r = this.workerNextTaskID++, o = e.byteLength, a = this._getWorker(r, o).then(c => (i = c, new Promise((l, h) => { i._callbacks[r] = { resolve: l, reject: h }, i.postMessage({ type: "decode", id: r, taskConfig: t, buffer: e }, [e]) }))).then(c => this._createGeometry(c.geometry)); return a.catch(() => !0).then(() => { i && r && this._releaseTask(i, r) }), Ga.set(e, { key: n, promise: a }), a } _createGeometry(e) { let t = new Ct; e.index && t.setIndex(new st(e.index.array, 1)); for (let n = 0; n < e.attributes.length; n++) { let i = e.attributes[n], r = i.name, o = i.array, a = i.itemSize, c = new st(o, a); r === "color" && (this._assignVertexColorSpace(c, i.vertexColorSpace), c.normalized = !(o instanceof Float32Array)), t.setAttribute(r, c) } return t } _assignVertexColorSpace(e, t) { if (t !== ot) return; let n = new Me; for (let i = 0, r = e.count; i < r; i++)n.fromBufferAttribute(e, i).convertSRGBToLinear(), e.setXYZ(i, n.r, n.g, n.b) } _loadLibrary(e, t) { let n = new Hn(this.manager); return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((i, r) => { n.load(e, i, void 0, r) }) } preload() { return this._initDecoder(), this } _initDecoder() {
			if (this.decoderPending) return this.decoderPending; let e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = []; return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then(n => {
				let i = n[0]; e || (this.decoderConfig.wasmBinary = n[1]); let r = o_.toString(), o = ["/* draco decoder */", i, "", "/* worker */", r.substring(r.indexOf("{") + 1, r.lastIndexOf("}"))].join(`
`); this.workerSourceURL = URL.createObjectURL(new Blob([o]))
			}), this.decoderPending
		} _getWorker(e, t) { return this._initDecoder().then(() => { if (this.workerPool.length < this.workerLimit) { let i = new Worker(this.workerSourceURL); i._callbacks = {}, i._taskCosts = {}, i._taskLoad = 0, i.postMessage({ type: "init", decoderConfig: this.decoderConfig }), i.onmessage = function (r) { let o = r.data; switch (o.type) { case "decode": i._callbacks[o.id].resolve(o); break; case "error": i._callbacks[o.id].reject(o); break; default: console.error('THREE.DRACOLoader: Unexpected message, "' + o.type + '"') } }, this.workerPool.push(i) } else this.workerPool.sort(function (i, r) { return i._taskLoad > r._taskLoad ? -1 : 1 }); let n = this.workerPool[this.workerPool.length - 1]; return n._taskCosts[e] = t, n._taskLoad += t, n }) } _releaseTask(e, t) { e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t] } debug() { console.log("Task load: ", this.workerPool.map(e => e._taskLoad)) } dispose() { for (let e = 0; e < this.workerPool.length; ++e)this.workerPool[e].terminate(); return this.workerPool.length = 0, this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL), this }
	}; function o_() { let s, e; onmessage = function (o) { let a = o.data; switch (a.type) { case "init": s = a.decoderConfig, e = new Promise(function (h) { s.onModuleLoaded = function (u) { h({ draco: u }) }, DracoDecoderModule(s) }); break; case "decode": let c = a.buffer, l = a.taskConfig; e.then(h => { let u = h.draco, d = new u.Decoder; try { let f = t(u, d, new Int8Array(c), l), g = f.attributes.map(x => x.array.buffer); f.index && g.push(f.index.array.buffer), self.postMessage({ type: "decode", id: a.id, geometry: f }, g) } catch (f) { console.error(f), self.postMessage({ type: "error", id: a.id, error: f.message }) } finally { u.destroy(d) } }); break } }; function t(o, a, c, l) { let h = l.attributeIDs, u = l.attributeTypes, d, f, g = a.GetEncodedGeometryType(c); if (g === o.TRIANGULAR_MESH) d = new o.Mesh, f = a.DecodeArrayToMesh(c, c.byteLength, d); else if (g === o.POINT_CLOUD) d = new o.PointCloud, f = a.DecodeArrayToPointCloud(c, c.byteLength, d); else throw new Error("THREE.DRACOLoader: Unexpected geometry type."); if (!f.ok() || d.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + f.error_msg()); let x = { index: null, attributes: [] }; for (let m in h) { let p = self[u[m]], A, M; if (l.useUniqueIDs) M = h[m], A = a.GetAttributeByUniqueId(d, M); else { if (M = a.GetAttributeId(d, o[h[m]]), M === -1) continue; A = a.GetAttribute(d, M) } let T = i(o, a, d, m, p, A); m === "color" && (T.vertexColorSpace = l.vertexColorSpace), x.attributes.push(T) } return g === o.TRIANGULAR_MESH && (x.index = n(o, a, d)), o.destroy(d), x } function n(o, a, c) { let h = c.num_faces() * 3, u = h * 4, d = o._malloc(u); a.GetTrianglesUInt32Array(c, u, d); let f = new Uint32Array(o.HEAPF32.buffer, d, h).slice(); return o._free(d), { array: f, itemSize: 1 } } function i(o, a, c, l, h, u) { let d = u.num_components(), g = c.num_points() * d, x = g * h.BYTES_PER_ELEMENT, m = r(o, h), p = o._malloc(x); a.GetAttributeDataArrayForAllPoints(c, u, m, x, p); let A = new h(o.HEAPF32.buffer, p, g).slice(); return o._free(p), { name: l, array: A, itemSize: d } } function r(o, a) { switch (a) { case Float32Array: return o.DT_FLOAT32; case Int8Array: return o.DT_INT8; case Int16Array: return o.DT_INT16; case Int32Array: return o.DT_INT32; case Uint8Array: return o.DT_UINT8; case Uint16Array: return o.DT_UINT16; case Uint32Array: return o.DT_UINT32 } } } window.Webflow || (window.Webflow = []); window.Webflow.push(() => { a_() }); function a_() { document.querySelectorAll('[data-3d="c"]').forEach(e => { let t = document.createElement("canvas"); t.classList.add("webgl"), e.appendChild(t); let n = new fr, i = new Hi, r = new kr, o = ""; r.setDecoderPath("https://cdn.jsdelivr.net/gh/CilliersWebSolutions/draco@main/draco/"); let a = new Br; a.setDRACOLoader(r); let c = i.load("https://uploads-ssl.webflow.com/661bd3640db9efe63984e8eb/663e0809e234450ecf26d391_bakedTexture.jpg"); c.flipY = !1, c.colorSpace = ot; let l = new Ut({ map: c }), h = new Ut({ color: 16777215 }); a.load("https://uploads-ssl.webflow.com/661bd3640db9efe63984e8eb/663e1dba2a6df1674f1ff9ab_placeholderRobotCentered.glb.txt", p => { console.log(p); let A = p.scene.children.find(M => M.name === "robotBaked"); A.material = l, n.add(p.scene), console.log(p.scene) }); let u = { width: e.clientWidth, height: e.clientHeight }; document.addEventListener("resize", () => { u.width = e.clientWidth, u.height = e.clientHeight, d.aspect = u.width / u.height, g.setSize(u.width, u.height), g.setPixelRatio(Math.min(window.devicePixelRatio, 2)) }); let d = new ut(45, u.width / u.height, .1, 100); d.position.x = 10, d.position.y = 5, d.position.z = 5, n.add(d); let f = new Fr(d, t); f.enableDamping = !0, f.dampingFactor = .009, f.enablePan = !1, f.enableZoom = !1; let g = new dr({ canvas: t, antialias: !0, alpha: !0 }); g.setSize(u.width, u.height), g.setPixelRatio(Math.min(window.devicePixelRatio, 2)); let x = new Cr, m = () => { let p = x.getElapsedTime(); f.update(), g.render(n, d), window.requestAnimationFrame(m) }; m() }) }
})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
