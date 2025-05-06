module.exports = {

"[project]/node_modules/@react-email/components/node_modules/prettier/standalone.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "__debug": (()=>Do),
    "check": (()=>so),
    "default": (()=>lc),
    "doc": (()=>ar),
    "format": (()=>gu),
    "formatWithCursor": (()=>Cu),
    "getSupportInfo": (()=>ao),
    "util": (()=>lr),
    "version": (()=>lu)
});
var yu = Object.create;
var vt = Object.defineProperty;
var Au = Object.getOwnPropertyDescriptor;
var vu = Object.getOwnPropertyNames;
var Bu = Object.getPrototypeOf, wu = Object.prototype.hasOwnProperty;
var fr = (e)=>{
    throw TypeError(e);
};
var dr = (e, t)=>()=>(t || e((t = {
            exports: {}
        }).exports, t), t.exports), Bt = (e, t)=>{
    for(var r in t)vt(e, r, {
        get: t[r],
        enumerable: !0
    });
}, _u = (e, t, r, n)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let u of vu(t))!wu.call(e, u) && u !== r && vt(e, u, {
        get: ()=>t[u],
        enumerable: !(n = Au(t, u)) || n.enumerable
    });
    return e;
};
var Me = (e, t, r)=>(r = e != null ? yu(Bu(e)) : {}, _u(t || !e || !e.__esModule ? vt(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
var xu = (e, t, r)=>t.has(e) || fr("Cannot " + r);
var pr = (e, t, r)=>t.has(e) ? fr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r);
var pe = (e, t, r)=>(xu(e, t, "access private method"), r);
var st = dr((na, Fn)=>{
    "use strict";
    var pn = new Proxy(String, {
        get: ()=>pn
    });
    Fn.exports = pn;
});
var Wn = dr((nr)=>{
    "use strict";
    Object.defineProperty(nr, "__esModule", {
        value: !0
    });
    function Bi() {
        return new Proxy({}, {
            get: ()=>(e)=>e
        });
    }
    var Hn = /\r\n|[\n\r\u2028\u2029]/;
    function wi(e, t, r) {
        let n = Object.assign({
            column: 0,
            line: -1
        }, e.start), u = Object.assign({}, n, e.end), { linesAbove: i = 2, linesBelow: o = 3 } = r || {}, s = n.line, a = n.column, D = u.line, l = u.column, p = Math.max(s - (i + 1), 0), f = Math.min(t.length, D + o);
        s === -1 && (p = 0), D === -1 && (f = t.length);
        let d = D - s, c = {};
        if (d) for(let F = 0; F <= d; F++){
            let m = F + s;
            if (!a) c[m] = !0;
            else if (F === 0) {
                let h = t[m - 1].length;
                c[m] = [
                    a,
                    h - a + 1
                ];
            } else if (F === d) c[m] = [
                0,
                l
            ];
            else {
                let h = t[m - F].length;
                c[m] = [
                    0,
                    h
                ];
            }
        }
        else a === l ? a ? c[s] = [
            a,
            0
        ] : c[s] = !0 : c[s] = [
            a,
            l - a
        ];
        return {
            start: p,
            end: f,
            markerLines: c
        };
    }
    function _i(e, t, r = {}) {
        let u = Bi(!1), i = e.split(Hn), { start: o, end: s, markerLines: a } = wi(t, i, r), D = t.start && typeof t.start.column == "number", l = String(s).length, f = e.split(Hn, s).slice(o, s).map((d, c)=>{
            let F = o + 1 + c, h = ` ${` ${F}`.slice(-l)} |`, C = a[F], v = !a[F + 1];
            if (C) {
                let E = "";
                if (Array.isArray(C)) {
                    let g = d.slice(0, Math.max(C[0] - 1, 0)).replace(/[^\t]/g, " "), j = C[1] || 1;
                    E = [
                        `
 `,
                        u.gutter(h.replace(/\d/g, " ")),
                        " ",
                        g,
                        u.marker("^").repeat(j)
                    ].join(""), v && r.message && (E += " " + u.message(r.message));
                }
                return [
                    u.marker(">"),
                    u.gutter(h),
                    d.length > 0 ? ` ${d}` : "",
                    E
                ].join("");
            } else return ` ${u.gutter(h)}${d.length > 0 ? ` ${d}` : ""}`;
        }).join(`
`);
        return r.message && !D && (f = `${" ".repeat(l + 1)}${r.message}
${f}`), f;
    }
    nr.codeFrameColumns = _i;
});
var cr = {};
Bt(cr, {
    __debug: ()=>Do,
    check: ()=>so,
    doc: ()=>ar,
    format: ()=>gu,
    formatWithCursor: ()=>Cu,
    getSupportInfo: ()=>ao,
    util: ()=>lr,
    version: ()=>lu
});
var bu = (e, t, r, n)=>{
    if (!(e && t == null)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
}, ne = bu;
function M() {}
M.prototype = {
    diff: function(t, r) {
        var n, u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = u.callback;
        typeof u == "function" && (i = u, u = {});
        var o = this;
        function s(E) {
            return E = o.postProcess(E, u), i ? (setTimeout(function() {
                i(E);
            }, 0), !0) : E;
        }
        t = this.castInput(t, u), r = this.castInput(r, u), t = this.removeEmpty(this.tokenize(t, u)), r = this.removeEmpty(this.tokenize(r, u));
        var a = r.length, D = t.length, l = 1, p = a + D;
        u.maxEditLength != null && (p = Math.min(p, u.maxEditLength));
        var f = (n = u.timeout) !== null && n !== void 0 ? n : 1 / 0, d = Date.now() + f, c = [
            {
                oldPos: -1,
                lastComponent: void 0
            }
        ], F = this.extractCommon(c[0], r, t, 0, u);
        if (c[0].oldPos + 1 >= D && F + 1 >= a) return s(Fr(o, c[0].lastComponent, r, t, o.useLongestToken));
        var m = -1 / 0, h = 1 / 0;
        function C() {
            for(var E = Math.max(m, -l); E <= Math.min(h, l); E += 2){
                var g = void 0, j = c[E - 1], b = c[E + 1];
                j && (c[E - 1] = void 0);
                var X = !1;
                if (b) {
                    var ae = b.oldPos - E;
                    X = b && 0 <= ae && ae < a;
                }
                var $e = j && j.oldPos + 1 < D;
                if (!X && !$e) {
                    c[E] = void 0;
                    continue;
                }
                if (!$e || X && j.oldPos < b.oldPos ? g = o.addToPath(b, !0, !1, 0, u) : g = o.addToPath(j, !1, !0, 1, u), F = o.extractCommon(g, r, t, E, u), g.oldPos + 1 >= D && F + 1 >= a) return s(Fr(o, g.lastComponent, r, t, o.useLongestToken));
                c[E] = g, g.oldPos + 1 >= D && (h = Math.min(h, E - 1)), F + 1 >= a && (m = Math.max(m, E + 1));
            }
            l++;
        }
        if (i) (function E() {
            setTimeout(function() {
                if (l > p || Date.now() > d) return i();
                C() || E();
            }, 0);
        })();
        else for(; l <= p && Date.now() <= d;){
            var v = C();
            if (v) return v;
        }
    },
    addToPath: function(t, r, n, u, i) {
        var o = t.lastComponent;
        return o && !i.oneChangePerToken && o.added === r && o.removed === n ? {
            oldPos: t.oldPos + u,
            lastComponent: {
                count: o.count + 1,
                added: r,
                removed: n,
                previousComponent: o.previousComponent
            }
        } : {
            oldPos: t.oldPos + u,
            lastComponent: {
                count: 1,
                added: r,
                removed: n,
                previousComponent: o
            }
        };
    },
    extractCommon: function(t, r, n, u, i) {
        for(var o = r.length, s = n.length, a = t.oldPos, D = a - u, l = 0; D + 1 < o && a + 1 < s && this.equals(n[a + 1], r[D + 1], i);)D++, a++, l++, i.oneChangePerToken && (t.lastComponent = {
            count: 1,
            previousComponent: t.lastComponent,
            added: !1,
            removed: !1
        });
        return l && !i.oneChangePerToken && (t.lastComponent = {
            count: l,
            previousComponent: t.lastComponent,
            added: !1,
            removed: !1
        }), t.oldPos = a, D;
    },
    equals: function(t, r, n) {
        return n.comparator ? n.comparator(t, r) : t === r || n.ignoreCase && t.toLowerCase() === r.toLowerCase();
    },
    removeEmpty: function(t) {
        for(var r = [], n = 0; n < t.length; n++)t[n] && r.push(t[n]);
        return r;
    },
    castInput: function(t) {
        return t;
    },
    tokenize: function(t) {
        return Array.from(t);
    },
    join: function(t) {
        return t.join("");
    },
    postProcess: function(t) {
        return t;
    }
};
function Fr(e, t, r, n, u) {
    for(var i = [], o; t;)i.push(t), o = t.previousComponent, delete t.previousComponent, t = o;
    i.reverse();
    for(var s = 0, a = i.length, D = 0, l = 0; s < a; s++){
        var p = i[s];
        if (p.removed) p.value = e.join(n.slice(l, l + p.count)), l += p.count;
        else {
            if (!p.added && u) {
                var f = r.slice(D, D + p.count);
                f = f.map(function(d, c) {
                    var F = n[l + c];
                    return F.length > d.length ? F : d;
                }), p.value = e.join(f);
            } else p.value = e.join(r.slice(D, D + p.count));
            D += p.count, p.added || (l += p.count);
        }
    }
    return i;
}
var Fo = new M;
function mr(e, t) {
    var r;
    for(r = 0; r < e.length && r < t.length; r++)if (e[r] != t[r]) return e.slice(0, r);
    return e.slice(0, r);
}
function hr(e, t) {
    var r;
    if (!e || !t || e[e.length - 1] != t[t.length - 1]) return "";
    for(r = 0; r < e.length && r < t.length; r++)if (e[e.length - (r + 1)] != t[t.length - (r + 1)]) return e.slice(-r);
    return e.slice(-r);
}
function wt(e, t, r) {
    if (e.slice(0, t.length) != t) throw Error("string ".concat(JSON.stringify(e), " doesn't start with prefix ").concat(JSON.stringify(t), "; this is a bug"));
    return r + e.slice(t.length);
}
function _t(e, t, r) {
    if (!t) return e + r;
    if (e.slice(-t.length) != t) throw Error("string ".concat(JSON.stringify(e), " doesn't end with suffix ").concat(JSON.stringify(t), "; this is a bug"));
    return e.slice(0, -t.length) + r;
}
function we(e, t) {
    return wt(e, t, "");
}
function Ue(e, t) {
    return _t(e, t, "");
}
function Er(e, t) {
    return t.slice(0, Nu(e, t));
}
function Nu(e, t) {
    var r = 0;
    e.length > t.length && (r = e.length - t.length);
    var n = t.length;
    e.length < t.length && (n = e.length);
    var u = Array(n), i = 0;
    u[0] = 0;
    for(var o = 1; o < n; o++){
        for(t[o] == t[i] ? u[o] = u[i] : u[o] = i; i > 0 && t[o] != t[i];)i = u[i];
        t[o] == t[i] && i++;
    }
    i = 0;
    for(var s = r; s < e.length; s++){
        for(; i > 0 && e[s] != t[i];)i = u[i];
        e[s] == t[i] && i++;
    }
    return i;
}
var Ve = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", Ou = new RegExp("[".concat(Ve, "]+|\\s+|[^").concat(Ve, "]"), "ug"), Ge = new M;
Ge.equals = function(e, t, r) {
    return r.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e.trim() === t.trim();
};
Ge.tokenize = function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r;
    if (t.intlSegmenter) {
        if (t.intlSegmenter.resolvedOptions().granularity != "word") throw new Error('The segmenter passed must have a granularity of "word"');
        r = Array.from(t.intlSegmenter.segment(e), function(i) {
            return i.segment;
        });
    } else r = e.match(Ou) || [];
    var n = [], u = null;
    return r.forEach(function(i) {
        /\s/.test(i) ? u == null ? n.push(i) : n.push(n.pop() + i) : /\s/.test(u) ? n[n.length - 1] == u ? n.push(n.pop() + i) : n.push(u + i) : n.push(i), u = i;
    }), n;
};
Ge.join = function(e) {
    return e.map(function(t, r) {
        return r == 0 ? t : t.replace(/^\s+/, "");
    }).join("");
};
Ge.postProcess = function(e, t) {
    if (!e || t.oneChangePerToken) return e;
    var r = null, n = null, u = null;
    return e.forEach(function(i) {
        i.added ? n = i : i.removed ? u = i : ((n || u) && Cr(r, u, n, i), r = i, n = null, u = null);
    }), (n || u) && Cr(r, u, n, null), e;
};
function Cr(e, t, r, n) {
    if (t && r) {
        var u = t.value.match(/^\s*/)[0], i = t.value.match(/\s*$/)[0], o = r.value.match(/^\s*/)[0], s = r.value.match(/\s*$/)[0];
        if (e) {
            var a = mr(u, o);
            e.value = _t(e.value, o, a), t.value = we(t.value, a), r.value = we(r.value, a);
        }
        if (n) {
            var D = hr(i, s);
            n.value = wt(n.value, s, D), t.value = Ue(t.value, D), r.value = Ue(r.value, D);
        }
    } else if (r) e && (r.value = r.value.replace(/^\s*/, "")), n && (n.value = n.value.replace(/^\s*/, ""));
    else if (e && n) {
        var l = n.value.match(/^\s*/)[0], p = t.value.match(/^\s*/)[0], f = t.value.match(/\s*$/)[0], d = mr(l, p);
        t.value = we(t.value, d);
        var c = hr(we(l, d), f);
        t.value = Ue(t.value, c), n.value = wt(n.value, l, c), e.value = _t(e.value, l, l.slice(0, l.length - c.length));
    } else if (n) {
        var F = n.value.match(/^\s*/)[0], m = t.value.match(/\s*$/)[0], h = Er(m, F);
        t.value = Ue(t.value, h);
    } else if (e) {
        var C = e.value.match(/\s*$/)[0], v = t.value.match(/^\s*/)[0], E = Er(C, v);
        t.value = we(t.value, E);
    }
}
var Su = new M;
Su.tokenize = function(e) {
    var t = new RegExp("(\\r?\\n)|[".concat(Ve, "]+|[^\\S\\n\\r]+|[^").concat(Ve, "]"), "ug");
    return e.match(t) || [];
};
var Nt = new M;
Nt.tokenize = function(e, t) {
    t.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
    var r = [], n = e.split(/(\n|\r\n)/);
    n[n.length - 1] || n.pop();
    for(var u = 0; u < n.length; u++){
        var i = n[u];
        u % 2 && !t.newlineIsToken ? r[r.length - 1] += i : r.push(i);
    }
    return r;
};
Nt.equals = function(e, t, r) {
    return r.ignoreWhitespace ? ((!r.newlineIsToken || !e.includes(`
`)) && (e = e.trim()), (!r.newlineIsToken || !t.includes(`
`)) && (t = t.trim())) : r.ignoreNewlineAtEof && !r.newlineIsToken && (e.endsWith(`
`) && (e = e.slice(0, -1)), t.endsWith(`
`) && (t = t.slice(0, -1))), M.prototype.equals.call(this, e, t, r);
};
var Tu = new M;
Tu.tokenize = function(e) {
    return e.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var ku = new M;
ku.tokenize = function(e) {
    return e.split(/([{}:;,]|\s+)/);
};
function xt(e) {
    "@babel/helpers - typeof";
    return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, xt(e);
}
var _e = new M;
_e.useLongestToken = !0;
_e.tokenize = Nt.tokenize;
_e.castInput = function(e, t) {
    var r = t.undefinedReplacement, n = t.stringifyReplacer, u = n === void 0 ? function(i, o) {
        return typeof o > "u" ? r : o;
    } : n;
    return typeof e == "string" ? e : JSON.stringify(bt(e, null, null, u), u, "  ");
};
_e.equals = function(e, t, r) {
    return M.prototype.equals.call(_e, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"), r);
};
function bt(e, t, r, n, u) {
    t = t || [], r = r || [], n && (e = n(u, e));
    var i;
    for(i = 0; i < t.length; i += 1)if (t[i] === e) return r[i];
    var o;
    if (Object.prototype.toString.call(e) === "[object Array]") {
        for(t.push(e), o = new Array(e.length), r.push(o), i = 0; i < e.length; i += 1)o[i] = bt(e[i], t, r, n, u);
        return t.pop(), r.pop(), o;
    }
    if (e && e.toJSON && (e = e.toJSON()), xt(e) === "object" && e !== null) {
        t.push(e), o = {}, r.push(o);
        var s = [], a;
        for(a in e)Object.prototype.hasOwnProperty.call(e, a) && s.push(a);
        for(s.sort(), i = 0; i < s.length; i += 1)a = s[i], o[a] = bt(e[a], t, r, n, a);
        t.pop(), r.pop();
    } else o = e;
    return o;
}
var ze = new M;
ze.tokenize = function(e) {
    return e.slice();
};
ze.join = ze.removeEmpty = function(e) {
    return e;
};
function gr(e, t, r) {
    return ze.diff(e, t, r);
}
function yr(e) {
    let t = e.indexOf("\r");
    return t !== -1 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
}
function xe(e) {
    switch(e){
        case "cr":
            return "\r";
        case "crlf":
            return `\r
`;
        default:
            return `
`;
    }
}
function Ot(e, t) {
    let r;
    switch(t){
        case `
`:
            r = /\n/gu;
            break;
        case "\r":
            r = /\r/gu;
            break;
        case `\r
`:
            r = /\r\n/gu;
            break;
        default:
            throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
    }
    let n = e.match(r);
    return n ? n.length : 0;
}
function Ar(e) {
    return ne(!1, e, /\r\n?/gu, `
`);
}
var U = "string", H = "array", V = "cursor", T = "indent", k = "align", L = "trim", B = "group", N = "fill", w = "if-break", P = "indent-if-break", I = "line-suffix", R = "line-suffix-boundary", A = "line", O = "label", _ = "break-parent", Ke = new Set([
    V,
    T,
    k,
    L,
    B,
    N,
    w,
    P,
    I,
    R,
    A,
    O,
    _
]);
function Lu(e) {
    if (typeof e == "string") return U;
    if (Array.isArray(e)) return H;
    if (!e) return;
    let { type: t } = e;
    if (Ke.has(t)) return t;
}
var z = Lu;
var Pu = (e)=>new Intl.ListFormat("en-US", {
        type: "disjunction"
    }).format(e);
function Iu(e) {
    let t = e === null ? "null" : typeof e;
    if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
    if (z(e)) throw new Error("doc is valid.");
    let r = Object.prototype.toString.call(e);
    if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
    let n = Pu([
        ...Ke
    ].map((u)=>`'${u}'`));
    return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var St = class extends Error {
    name = "InvalidDocError";
    constructor(t){
        super(Iu(t)), this.doc = t;
    }
}, Q = St;
var vr = {};
function Ru(e, t, r, n) {
    let u = [
        e
    ];
    for(; u.length > 0;){
        let i = u.pop();
        if (i === vr) {
            r(u.pop());
            continue;
        }
        r && u.push(i, vr);
        let o = z(i);
        if (!o) throw new Q(i);
        if ((t == null ? void 0 : t(i)) !== !1) switch(o){
            case H:
            case N:
                {
                    let s = o === H ? i : i.parts;
                    for(let a = s.length, D = a - 1; D >= 0; --D)u.push(s[D]);
                    break;
                }
            case w:
                u.push(i.flatContents, i.breakContents);
                break;
            case B:
                if (n && i.expandedStates) for(let s = i.expandedStates.length, a = s - 1; a >= 0; --a)u.push(i.expandedStates[a]);
                else u.push(i.contents);
                break;
            case k:
            case T:
            case P:
            case O:
            case I:
                u.push(i.contents);
                break;
            case U:
            case V:
            case L:
            case R:
            case A:
            case _:
                break;
            default:
                throw new Q(i);
        }
    }
}
var be = Ru;
var Br = ()=>{}, G = Br, Je = Br;
function le(e) {
    return G(e), {
        type: T,
        contents: e
    };
}
function De(e, t) {
    return G(t), {
        type: k,
        contents: t,
        n: e
    };
}
function Tt(e, t = {}) {
    return G(e), Je(t.expandedStates, !0), {
        type: B,
        id: t.id,
        contents: e,
        break: !!t.shouldBreak,
        expandedStates: t.expandedStates
    };
}
function wr(e) {
    return De(Number.NEGATIVE_INFINITY, e);
}
function _r(e) {
    return De({
        type: "root"
    }, e);
}
function xr(e) {
    return De(-1, e);
}
function br(e, t) {
    return Tt(e[0], {
        ...t,
        expandedStates: e
    });
}
function Nr(e) {
    return Je(e), {
        type: N,
        parts: e
    };
}
function Or(e, t = "", r = {}) {
    return G(e), t !== "" && G(t), {
        type: w,
        breakContents: e,
        flatContents: t,
        groupId: r.groupId
    };
}
function Sr(e, t) {
    return G(e), {
        type: P,
        contents: e,
        groupId: t.groupId,
        negate: t.negate
    };
}
function Ne(e) {
    return G(e), {
        type: I,
        contents: e
    };
}
var Tr = {
    type: R
}, Fe = {
    type: _
}, kr = {
    type: L
}, Oe = {
    type: A,
    hard: !0
}, kt = {
    type: A,
    hard: !0,
    literal: !0
}, qe = {
    type: A
}, Lr = {
    type: A,
    soft: !0
}, K = [
    Oe,
    Fe
], Xe = [
    kt,
    Fe
], Z = {
    type: V
};
function Se(e, t) {
    G(e), Je(t);
    let r = [];
    for(let n = 0; n < t.length; n++)n !== 0 && r.push(e), r.push(t[n]);
    return r;
}
function Qe(e, t, r) {
    G(e);
    let n = e;
    if (t > 0) {
        for(let u = 0; u < Math.floor(t / r); ++u)n = le(n);
        n = De(t % r, n), n = De(Number.NEGATIVE_INFINITY, n);
    }
    return n;
}
function Pr(e, t) {
    return G(t), e ? {
        type: O,
        label: e,
        contents: t
    } : t;
}
function ee(e) {
    var t;
    if (!e) return "";
    if (Array.isArray(e)) {
        let r = [];
        for (let n of e)if (Array.isArray(n)) r.push(...ee(n));
        else {
            let u = ee(n);
            u !== "" && r.push(u);
        }
        return r;
    }
    return e.type === w ? {
        ...e,
        breakContents: ee(e.breakContents),
        flatContents: ee(e.flatContents)
    } : e.type === B ? {
        ...e,
        contents: ee(e.contents),
        expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(ee)
    } : e.type === N ? {
        type: "fill",
        parts: e.parts.map(ee)
    } : e.contents ? {
        ...e,
        contents: ee(e.contents)
    } : e;
}
function Ir(e) {
    let t = Object.create(null), r = new Set;
    return n(ee(e));
    "TURBOPACK unreachable";
    function n(i, o, s) {
        var a, D;
        if (typeof i == "string") return JSON.stringify(i);
        if (Array.isArray(i)) {
            let l = i.map(n).filter(Boolean);
            return l.length === 1 ? l[0] : `[${l.join(", ")}]`;
        }
        if (i.type === A) {
            let l = ((a = s == null ? void 0 : s[o + 1]) == null ? void 0 : a.type) === _;
            return i.literal ? l ? "literalline" : "literallineWithoutBreakParent" : i.hard ? l ? "hardline" : "hardlineWithoutBreakParent" : i.soft ? "softline" : "line";
        }
        if (i.type === _) return ((D = s == null ? void 0 : s[o - 1]) == null ? void 0 : D.type) === A && s[o - 1].hard ? void 0 : "breakParent";
        if (i.type === L) return "trim";
        if (i.type === T) return "indent(" + n(i.contents) + ")";
        if (i.type === k) return i.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + n(i.contents) + ")" : i.n < 0 ? "dedent(" + n(i.contents) + ")" : i.n.type === "root" ? "markAsRoot(" + n(i.contents) + ")" : "align(" + JSON.stringify(i.n) + ", " + n(i.contents) + ")";
        if (i.type === w) return "ifBreak(" + n(i.breakContents) + (i.flatContents ? ", " + n(i.flatContents) : "") + (i.groupId ? (i.flatContents ? "" : ', ""') + `, { groupId: ${u(i.groupId)} }` : "") + ")";
        if (i.type === P) {
            let l = [];
            i.negate && l.push("negate: true"), i.groupId && l.push(`groupId: ${u(i.groupId)}`);
            let p = l.length > 0 ? `, { ${l.join(", ")} }` : "";
            return `indentIfBreak(${n(i.contents)}${p})`;
        }
        if (i.type === B) {
            let l = [];
            i.break && i.break !== "propagated" && l.push("shouldBreak: true"), i.id && l.push(`id: ${u(i.id)}`);
            let p = l.length > 0 ? `, { ${l.join(", ")} }` : "";
            return i.expandedStates ? `conditionalGroup([${i.expandedStates.map((f)=>n(f)).join(",")}]${p})` : `group(${n(i.contents)}${p})`;
        }
        if (i.type === N) return `fill([${i.parts.map((l)=>n(l)).join(", ")}])`;
        if (i.type === I) return "lineSuffix(" + n(i.contents) + ")";
        if (i.type === R) return "lineSuffixBoundary";
        if (i.type === O) return `label(${JSON.stringify(i.label)}, ${n(i.contents)})`;
        throw new Error("Unknown doc type " + i.type);
    }
    function u(i) {
        if (typeof i != "symbol") return JSON.stringify(String(i));
        if (i in t) return t[i];
        let o = i.description || "symbol";
        for(let s = 0;; s++){
            let a = o + (s > 0 ? ` #${s}` : "");
            if (!r.has(a)) return r.add(a), t[i] = `Symbol.for(${JSON.stringify(a)})`;
        }
    }
}
var Yu = (e, t, r)=>{
    if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
}, y = Yu;
var Rr = ()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function Yr(e) {
    return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function jr(e) {
    return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || e === 9855 || e >= 9866 && e <= 9871 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101631 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129673 || e >= 129679 && e <= 129734 || e >= 129742 && e <= 129756 || e >= 129759 && e <= 129769 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var Hr = (e)=>!(Yr(e) || jr(e));
var ju = /[^\x20-\x7F]/u;
function Hu(e) {
    if (!e) return 0;
    if (!ju.test(e)) return e.length;
    e = e.replace(Rr(), "  ");
    let t = 0;
    for (let r of e){
        let n = r.codePointAt(0);
        n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (t += Hr(n) ? 1 : 2);
    }
    return t;
}
var Te = Hu;
function Le(e, t) {
    if (typeof e == "string") return t(e);
    let r = new Map;
    return n(e);
    "TURBOPACK unreachable";
    function n(i) {
        if (r.has(i)) return r.get(i);
        let o = u(i);
        return r.set(i, o), o;
    }
    function u(i) {
        switch(z(i)){
            case H:
                return t(i.map(n));
            case N:
                return t({
                    ...i,
                    parts: i.parts.map(n)
                });
            case w:
                return t({
                    ...i,
                    breakContents: n(i.breakContents),
                    flatContents: n(i.flatContents)
                });
            case B:
                {
                    let { expandedStates: o, contents: s } = i;
                    return o ? (o = o.map(n), s = o[0]) : s = n(s), t({
                        ...i,
                        contents: s,
                        expandedStates: o
                    });
                }
            case k:
            case T:
            case P:
            case O:
            case I:
                return t({
                    ...i,
                    contents: n(i.contents)
                });
            case U:
            case V:
            case L:
            case R:
            case A:
            case _:
                return t(i);
            default:
                throw new Q(i);
        }
    }
}
function Ze(e, t, r) {
    let n = r, u = !1;
    function i(o) {
        if (u) return !1;
        let s = t(o);
        s !== void 0 && (u = !0, n = s);
    }
    return be(e, i), n;
}
function Wu(e) {
    if (e.type === B && e.break || e.type === A && e.hard || e.type === _) return !0;
}
function Mr(e) {
    return Ze(e, Wu, !1);
}
function Wr(e) {
    if (e.length > 0) {
        let t = y(!1, e, -1);
        !t.expandedStates && !t.break && (t.break = "propagated");
    }
    return null;
}
function Ur(e) {
    let t = new Set, r = [];
    function n(i) {
        if (i.type === _ && Wr(r), i.type === B) {
            if (r.push(i), t.has(i)) return !1;
            t.add(i);
        }
    }
    function u(i) {
        i.type === B && r.pop().break && Wr(r);
    }
    be(e, n, u, !0);
}
function $u(e) {
    return e.type === A && !e.hard ? e.soft ? "" : " " : e.type === w ? e.flatContents : e;
}
function Vr(e) {
    return Le(e, $u);
}
function $r(e) {
    for(e = [
        ...e
    ]; e.length >= 2 && y(!1, e, -2).type === A && y(!1, e, -1).type === _;)e.length -= 2;
    if (e.length > 0) {
        let t = ke(y(!1, e, -1));
        e[e.length - 1] = t;
    }
    return e;
}
function ke(e) {
    switch(z(e)){
        case T:
        case P:
        case B:
        case I:
        case O:
            {
                let t = ke(e.contents);
                return {
                    ...e,
                    contents: t
                };
            }
        case w:
            return {
                ...e,
                breakContents: ke(e.breakContents),
                flatContents: ke(e.flatContents)
            };
        case N:
            return {
                ...e,
                parts: $r(e.parts)
            };
        case H:
            return $r(e);
        case U:
            return e.replace(/[\n\r]*$/u, "");
        case k:
        case V:
        case L:
        case R:
        case A:
        case _:
            break;
        default:
            throw new Q(e);
    }
    return e;
}
function et(e) {
    return ke(Uu(e));
}
function Mu(e) {
    switch(z(e)){
        case N:
            if (e.parts.every((t)=>t === "")) return "";
            break;
        case B:
            if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
            if (e.contents.type === B && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
            break;
        case k:
        case T:
        case P:
        case I:
            if (!e.contents) return "";
            break;
        case w:
            if (!e.flatContents && !e.breakContents) return "";
            break;
        case H:
            {
                let t = [];
                for (let r of e){
                    if (!r) continue;
                    let [n, ...u] = Array.isArray(r) ? r : [
                        r
                    ];
                    typeof n == "string" && typeof y(!1, t, -1) == "string" ? t[t.length - 1] += n : t.push(n), t.push(...u);
                }
                return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
            }
        case U:
        case V:
        case L:
        case R:
        case A:
        case O:
        case _:
            break;
        default:
            throw new Q(e);
    }
    return e;
}
function Uu(e) {
    return Le(e, (t)=>Mu(t));
}
function zr(e, t = Xe) {
    return Le(e, (r)=>typeof r == "string" ? Se(t, r.split(`
`)) : r);
}
function Vu(e) {
    if (e.type === A) return !0;
}
function Gr(e) {
    return Ze(e, Vu, !1);
}
function me(e, t) {
    return e.type === O ? {
        ...e,
        contents: t(e.contents)
    } : t(e);
}
var Y = Symbol("MODE_BREAK"), J = Symbol("MODE_FLAT"), he = Symbol("cursor"), Lt = Symbol("DOC_FILL_PRINTED_LENGTH");
function Kr() {
    return {
        value: "",
        length: 0,
        queue: []
    };
}
function zu(e, t) {
    return Pt(e, {
        type: "indent"
    }, t);
}
function Gu(e, t, r) {
    return t === Number.NEGATIVE_INFINITY ? e.root || Kr() : t < 0 ? Pt(e, {
        type: "dedent"
    }, r) : t ? t.type === "root" ? {
        ...e,
        root: e
    } : Pt(e, {
        type: typeof t == "string" ? "stringAlign" : "numberAlign",
        n: t
    }, r) : e;
}
function Pt(e, t, r) {
    let n = t.type === "dedent" ? e.queue.slice(0, -1) : [
        ...e.queue,
        t
    ], u = "", i = 0, o = 0, s = 0;
    for (let c of n)switch(c.type){
        case "indent":
            l(), r.useTabs ? a(1) : D(r.tabWidth);
            break;
        case "stringAlign":
            l(), u += c.n, i += c.n.length;
            break;
        case "numberAlign":
            o += 1, s += c.n;
            break;
        default:
            throw new Error(`Unexpected type '${c.type}'`);
    }
    return f(), {
        ...e,
        value: u,
        length: i,
        queue: n
    };
    "TURBOPACK unreachable";
    function a(c) {
        u += "	".repeat(c), i += r.tabWidth * c;
    }
    function D(c) {
        u += " ".repeat(c), i += c;
    }
    function l() {
        r.useTabs ? p() : f();
    }
    function p() {
        o > 0 && a(o), d();
    }
    function f() {
        s > 0 && D(s), d();
    }
    function d() {
        o = 0, s = 0;
    }
}
function It(e) {
    let t = 0, r = 0, n = e.length;
    e: for(; n--;){
        let u = e[n];
        if (u === he) {
            r++;
            continue;
        }
        for(let i = u.length - 1; i >= 0; i--){
            let o = u[i];
            if (o === " " || o === "	") t++;
            else {
                e[n] = u.slice(0, i + 1);
                break e;
            }
        }
    }
    if (t > 0 || r > 0) for(e.length = n + 1; r-- > 0;)e.push(he);
    return t;
}
function tt(e, t, r, n, u, i) {
    if (r === Number.POSITIVE_INFINITY) return !0;
    let o = t.length, s = [
        e
    ], a = [];
    for(; r >= 0;){
        if (s.length === 0) {
            if (o === 0) return !0;
            s.push(t[--o]);
            continue;
        }
        let { mode: D, doc: l } = s.pop(), p = z(l);
        switch(p){
            case U:
                a.push(l), r -= Te(l);
                break;
            case H:
            case N:
                {
                    let f = p === H ? l : l.parts, d = l[Lt] ?? 0;
                    for(let c = f.length - 1; c >= d; c--)s.push({
                        mode: D,
                        doc: f[c]
                    });
                    break;
                }
            case T:
            case k:
            case P:
            case O:
                s.push({
                    mode: D,
                    doc: l.contents
                });
                break;
            case L:
                r += It(a);
                break;
            case B:
                {
                    if (i && l.break) return !1;
                    let f = l.break ? Y : D, d = l.expandedStates && f === Y ? y(!1, l.expandedStates, -1) : l.contents;
                    s.push({
                        mode: f,
                        doc: d
                    });
                    break;
                }
            case w:
                {
                    let d = (l.groupId ? u[l.groupId] || J : D) === Y ? l.breakContents : l.flatContents;
                    d && s.push({
                        mode: D,
                        doc: d
                    });
                    break;
                }
            case A:
                if (D === Y || l.hard) return !0;
                l.soft || (a.push(" "), r--);
                break;
            case I:
                n = !0;
                break;
            case R:
                if (n) return !1;
                break;
        }
    }
    return !1;
}
function Ee(e, t) {
    let r = {}, n = t.printWidth, u = xe(t.endOfLine), i = 0, o = [
        {
            ind: Kr(),
            mode: Y,
            doc: e
        }
    ], s = [], a = !1, D = [], l = 0;
    for(Ur(e); o.length > 0;){
        let { ind: f, mode: d, doc: c } = o.pop();
        switch(z(c)){
            case U:
                {
                    let F = u !== `
` ? ne(!1, c, `
`, u) : c;
                    s.push(F), o.length > 0 && (i += Te(F));
                    break;
                }
            case H:
                for(let F = c.length - 1; F >= 0; F--)o.push({
                    ind: f,
                    mode: d,
                    doc: c[F]
                });
                break;
            case V:
                if (l >= 2) throw new Error("There are too many 'cursor' in doc.");
                s.push(he), l++;
                break;
            case T:
                o.push({
                    ind: zu(f, t),
                    mode: d,
                    doc: c.contents
                });
                break;
            case k:
                o.push({
                    ind: Gu(f, c.n, t),
                    mode: d,
                    doc: c.contents
                });
                break;
            case L:
                i -= It(s);
                break;
            case B:
                switch(d){
                    case J:
                        if (!a) {
                            o.push({
                                ind: f,
                                mode: c.break ? Y : J,
                                doc: c.contents
                            });
                            break;
                        }
                    case Y:
                        {
                            a = !1;
                            let F = {
                                ind: f,
                                mode: J,
                                doc: c.contents
                            }, m = n - i, h = D.length > 0;
                            if (!c.break && tt(F, o, m, h, r)) o.push(F);
                            else if (c.expandedStates) {
                                let C = y(!1, c.expandedStates, -1);
                                if (c.break) {
                                    o.push({
                                        ind: f,
                                        mode: Y,
                                        doc: C
                                    });
                                    break;
                                } else for(let v = 1; v < c.expandedStates.length + 1; v++)if (v >= c.expandedStates.length) {
                                    o.push({
                                        ind: f,
                                        mode: Y,
                                        doc: C
                                    });
                                    break;
                                } else {
                                    let E = c.expandedStates[v], g = {
                                        ind: f,
                                        mode: J,
                                        doc: E
                                    };
                                    if (tt(g, o, m, h, r)) {
                                        o.push(g);
                                        break;
                                    }
                                }
                            } else o.push({
                                ind: f,
                                mode: Y,
                                doc: c.contents
                            });
                            break;
                        }
                }
                c.id && (r[c.id] = y(!1, o, -1).mode);
                break;
            case N:
                {
                    let F = n - i, m = c[Lt] ?? 0, { parts: h } = c, C = h.length - m;
                    if (C === 0) break;
                    let v = h[m + 0], E = h[m + 1], g = {
                        ind: f,
                        mode: J,
                        doc: v
                    }, j = {
                        ind: f,
                        mode: Y,
                        doc: v
                    }, b = tt(g, [], F, D.length > 0, r, !0);
                    if (C === 1) {
                        b ? o.push(g) : o.push(j);
                        break;
                    }
                    let X = {
                        ind: f,
                        mode: J,
                        doc: E
                    }, ae = {
                        ind: f,
                        mode: Y,
                        doc: E
                    };
                    if (C === 2) {
                        b ? o.push(X, g) : o.push(ae, j);
                        break;
                    }
                    let $e = h[m + 2], At = {
                        ind: f,
                        mode: d,
                        doc: {
                            ...c,
                            [Lt]: m + 2
                        }
                    };
                    tt({
                        ind: f,
                        mode: J,
                        doc: [
                            v,
                            E,
                            $e
                        ]
                    }, [], F, D.length > 0, r, !0) ? o.push(At, X, g) : b ? o.push(At, ae, g) : o.push(At, ae, j);
                    break;
                }
            case w:
            case P:
                {
                    let F = c.groupId ? r[c.groupId] : d;
                    if (F === Y) {
                        let m = c.type === w ? c.breakContents : c.negate ? c.contents : le(c.contents);
                        m && o.push({
                            ind: f,
                            mode: d,
                            doc: m
                        });
                    }
                    if (F === J) {
                        let m = c.type === w ? c.flatContents : c.negate ? le(c.contents) : c.contents;
                        m && o.push({
                            ind: f,
                            mode: d,
                            doc: m
                        });
                    }
                    break;
                }
            case I:
                D.push({
                    ind: f,
                    mode: d,
                    doc: c.contents
                });
                break;
            case R:
                D.length > 0 && o.push({
                    ind: f,
                    mode: d,
                    doc: Oe
                });
                break;
            case A:
                switch(d){
                    case J:
                        if (c.hard) a = !0;
                        else {
                            c.soft || (s.push(" "), i += 1);
                            break;
                        }
                    case Y:
                        if (D.length > 0) {
                            o.push({
                                ind: f,
                                mode: d,
                                doc: c
                            }, ...D.reverse()), D.length = 0;
                            break;
                        }
                        c.literal ? f.root ? (s.push(u, f.root.value), i = f.root.length) : (s.push(u), i = 0) : (i -= It(s), s.push(u + f.value), i = f.length);
                        break;
                }
                break;
            case O:
                o.push({
                    ind: f,
                    mode: d,
                    doc: c.contents
                });
                break;
            case _:
                break;
            default:
                throw new Q(c);
        }
        o.length === 0 && D.length > 0 && (o.push(...D.reverse()), D.length = 0);
    }
    let p = s.indexOf(he);
    if (p !== -1) {
        let f = s.indexOf(he, p + 1);
        if (f === -1) return {
            formatted: s.filter((m)=>m !== he).join("")
        };
        let d = s.slice(0, p).join(""), c = s.slice(p + 1, f).join(""), F = s.slice(f + 1).join("");
        return {
            formatted: d + c + F,
            cursorNodeStart: d.length,
            cursorNodeText: c
        };
    }
    return {
        formatted: s.join("")
    };
}
function Ku(e, t, r = 0) {
    let n = 0;
    for(let u = r; u < e.length; ++u)e[u] === "	" ? n = n + t - n % t : n++;
    return n;
}
var Ce = Ku;
var te, Yt, rt, Rt = class {
    constructor(t){
        pr(this, te);
        this.stack = [
            t
        ];
    }
    get key() {
        let { stack: t, siblings: r } = this;
        return y(!1, t, r === null ? -2 : -4) ?? null;
    }
    get index() {
        return this.siblings === null ? null : y(!1, this.stack, -2);
    }
    get node() {
        return y(!1, this.stack, -1);
    }
    get parent() {
        return this.getNode(1);
    }
    get grandparent() {
        return this.getNode(2);
    }
    get isInArray() {
        return this.siblings !== null;
    }
    get siblings() {
        let { stack: t } = this, r = y(!1, t, -3);
        return Array.isArray(r) ? r : null;
    }
    get next() {
        let { siblings: t } = this;
        return t === null ? null : t[this.index + 1];
    }
    get previous() {
        let { siblings: t } = this;
        return t === null ? null : t[this.index - 1];
    }
    get isFirst() {
        return this.index === 0;
    }
    get isLast() {
        let { siblings: t, index: r } = this;
        return t !== null && r === t.length - 1;
    }
    get isRoot() {
        return this.stack.length === 1;
    }
    get root() {
        return this.stack[0];
    }
    get ancestors() {
        return [
            ...pe(this, te, rt).call(this)
        ];
    }
    getName() {
        let { stack: t } = this, { length: r } = t;
        return r > 1 ? y(!1, t, -2) : null;
    }
    getValue() {
        return y(!1, this.stack, -1);
    }
    getNode(t = 0) {
        let r = pe(this, te, Yt).call(this, t);
        return r === -1 ? null : this.stack[r];
    }
    getParentNode(t = 0) {
        return this.getNode(t + 1);
    }
    call(t, ...r) {
        let { stack: n } = this, { length: u } = n, i = y(!1, n, -1);
        for (let o of r)i = i[o], n.push(o, i);
        try {
            return t(this);
        } finally{
            n.length = u;
        }
    }
    callParent(t, r = 0) {
        let n = pe(this, te, Yt).call(this, r + 1), u = this.stack.splice(n + 1);
        try {
            return t(this);
        } finally{
            this.stack.push(...u);
        }
    }
    each(t, ...r) {
        let { stack: n } = this, { length: u } = n, i = y(!1, n, -1);
        for (let o of r)i = i[o], n.push(o, i);
        try {
            for(let o = 0; o < i.length; ++o)n.push(o, i[o]), t(this, o, i), n.length -= 2;
        } finally{
            n.length = u;
        }
    }
    map(t, ...r) {
        let n = [];
        return this.each((u, i, o)=>{
            n[i] = t(u, i, o);
        }, ...r), n;
    }
    match(...t) {
        let r = this.stack.length - 1, n = null, u = this.stack[r--];
        for (let i of t){
            if (u === void 0) return !1;
            let o = null;
            if (typeof n == "number" && (o = n, n = this.stack[r--], u = this.stack[r--]), i && !i(u, n, o)) return !1;
            n = this.stack[r--], u = this.stack[r--];
        }
        return !0;
    }
    findAncestor(t) {
        for (let r of pe(this, te, rt).call(this))if (t(r)) return r;
    }
    hasAncestor(t) {
        for (let r of pe(this, te, rt).call(this))if (t(r)) return !0;
        return !1;
    }
};
te = new WeakSet, Yt = function(t) {
    let { stack: r } = this;
    for(let n = r.length - 1; n >= 0; n -= 2)if (!Array.isArray(r[n]) && --t < 0) return n;
    return -1;
}, rt = function*() {
    let { stack: t } = this;
    for(let r = t.length - 3; r >= 0; r -= 2){
        let n = t[r];
        Array.isArray(n) || (yield n);
    }
};
var Jr = Rt;
var qr = new Proxy(()=>{}, {
    get: ()=>qr
}), Pe = qr;
function Ju(e) {
    return e !== null && typeof e == "object";
}
var Xr = Ju;
function* ge(e, t) {
    let { getVisitorKeys: r, filter: n = ()=>!0 } = t, u = (i)=>Xr(i) && n(i);
    for (let i of r(e)){
        let o = e[i];
        if (Array.isArray(o)) for (let s of o)u(s) && (yield s);
        else u(o) && (yield o);
    }
}
function* Qr(e, t) {
    let r = [
        e
    ];
    for(let n = 0; n < r.length; n++){
        let u = r[n];
        for (let i of ge(u, t))yield i, r.push(i);
    }
}
function Zr(e, t) {
    return ge(e, t).next().done;
}
function ye(e) {
    return (t, r, n)=>{
        let u = !!(n != null && n.backwards);
        if (r === !1) return !1;
        let { length: i } = t, o = r;
        for(; o >= 0 && o < i;){
            let s = t.charAt(o);
            if (e instanceof RegExp) {
                if (!e.test(s)) return o;
            } else if (!e.includes(s)) return o;
            u ? o-- : o++;
        }
        return o === -1 || o === i ? o : !1;
    };
}
var en = ye(/\s/u), S = ye(" 	"), nt = ye(",; 	"), ut = ye(/[^\n\r]/u);
function qu(e, t, r) {
    let n = !!(r != null && r.backwards);
    if (t === !1) return !1;
    let u = e.charAt(t);
    if (n) {
        if (e.charAt(t - 1) === "\r" && u === `
`) return t - 2;
        if (u === `
` || u === "\r" || u === "\u2028" || u === "\u2029") return t - 1;
    } else {
        if (u === "\r" && e.charAt(t + 1) === `
`) return t + 2;
        if (u === `
` || u === "\r" || u === "\u2028" || u === "\u2029") return t + 1;
    }
    return t;
}
var W = qu;
function Xu(e, t, r = {}) {
    let n = S(e, r.backwards ? t - 1 : t, r), u = W(e, n, r);
    return n !== u;
}
var $ = Xu;
function Qu(e) {
    return Array.isArray(e) && e.length > 0;
}
var jt = Qu;
var tn = new Set([
    "tokens",
    "comments",
    "parent",
    "enclosingNode",
    "precedingNode",
    "followingNode"
]), Zu = (e)=>Object.keys(e).filter((t)=>!tn.has(t));
function ei(e) {
    return e ? (t)=>e(t, tn) : Zu;
}
var q = ei;
function ti(e) {
    let t = e.type || e.kind || "(unknown type)", r = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
    return r.length > 20 && (r = r.slice(0, 19) + "\u2026"), t + (r ? " " + r : "");
}
function Ht(e, t) {
    (e.comments ?? (e.comments = [])).push(t), t.printed = !1, t.nodeDescription = ti(e);
}
function ue(e, t) {
    t.leading = !0, t.trailing = !1, Ht(e, t);
}
function re(e, t, r) {
    t.leading = !1, t.trailing = !1, r && (t.marker = r), Ht(e, t);
}
function ie(e, t) {
    t.leading = !1, t.trailing = !0, Ht(e, t);
}
var Wt = new WeakMap;
function it(e, t) {
    if (Wt.has(e)) return Wt.get(e);
    let { printer: { getCommentChildNodes: r, canAttachComment: n, getVisitorKeys: u }, locStart: i, locEnd: o } = t;
    if (!n) return [];
    let s = ((r == null ? void 0 : r(e, t)) ?? [
        ...ge(e, {
            getVisitorKeys: q(u)
        })
    ]).flatMap((a)=>n(a) ? [
            a
        ] : it(a, t));
    return s.sort((a, D)=>i(a) - i(D) || o(a) - o(D)), Wt.set(e, s), s;
}
function nn(e, t, r, n) {
    let { locStart: u, locEnd: i } = r, o = u(t), s = i(t), a = it(e, r), D, l, p = 0, f = a.length;
    for(; p < f;){
        let d = p + f >> 1, c = a[d], F = u(c), m = i(c);
        if (F <= o && s <= m) return nn(c, t, r, c);
        if (m <= o) {
            D = c, p = d + 1;
            continue;
        }
        if (s <= F) {
            l = c, f = d;
            continue;
        }
        throw new Error("Comment location overlaps with node location");
    }
    if ((n == null ? void 0 : n.type) === "TemplateLiteral") {
        let { quasis: d } = n, c = Mt(d, t, r);
        D && Mt(d, D, r) !== c && (D = null), l && Mt(d, l, r) !== c && (l = null);
    }
    return {
        enclosingNode: n,
        precedingNode: D,
        followingNode: l
    };
}
var $t = ()=>!1;
function un(e, t) {
    let { comments: r } = e;
    if (delete e.comments, !jt(r) || !t.printer.canAttachComment) return;
    let n = [], { locStart: u, locEnd: i, printer: { experimentalFeatures: { avoidAstMutation: o = !1 } = {}, handleComments: s = {} }, originalText: a } = t, { ownLine: D = $t, endOfLine: l = $t, remaining: p = $t } = s, f = r.map((d, c)=>({
            ...nn(e, d, t),
            comment: d,
            text: a,
            options: t,
            ast: e,
            isLastComment: r.length - 1 === c
        }));
    for (let [d, c] of f.entries()){
        let { comment: F, precedingNode: m, enclosingNode: h, followingNode: C, text: v, options: E, ast: g, isLastComment: j } = c;
        if (E.parser === "json" || E.parser === "json5" || E.parser === "jsonc" || E.parser === "__js_expression" || E.parser === "__ts_expression" || E.parser === "__vue_expression" || E.parser === "__vue_ts_expression") {
            if (u(F) - u(g) <= 0) {
                ue(g, F);
                continue;
            }
            if (i(F) - i(g) >= 0) {
                ie(g, F);
                continue;
            }
        }
        let b;
        if (o ? b = [
            c
        ] : (F.enclosingNode = h, F.precedingNode = m, F.followingNode = C, b = [
            F,
            v,
            E,
            g,
            j
        ]), ri(v, E, f, d)) F.placement = "ownLine", D(...b) || (C ? ue(C, F) : m ? ie(m, F) : h ? re(h, F) : re(g, F));
        else if (ni(v, E, f, d)) F.placement = "endOfLine", l(...b) || (m ? ie(m, F) : C ? ue(C, F) : h ? re(h, F) : re(g, F));
        else if (F.placement = "remaining", !p(...b)) if (m && C) {
            let X = n.length;
            X > 0 && n[X - 1].followingNode !== C && rn(n, E), n.push(c);
        } else m ? ie(m, F) : C ? ue(C, F) : h ? re(h, F) : re(g, F);
    }
    if (rn(n, t), !o) for (let d of r)delete d.precedingNode, delete d.enclosingNode, delete d.followingNode;
}
var on = (e)=>!/[\S\n\u2028\u2029]/u.test(e);
function ri(e, t, r, n) {
    let { comment: u, precedingNode: i } = r[n], { locStart: o, locEnd: s } = t, a = o(u);
    if (i) for(let D = n - 1; D >= 0; D--){
        let { comment: l, precedingNode: p } = r[D];
        if (p !== i || !on(e.slice(s(l), a))) break;
        a = o(l);
    }
    return $(e, a, {
        backwards: !0
    });
}
function ni(e, t, r, n) {
    let { comment: u, followingNode: i } = r[n], { locStart: o, locEnd: s } = t, a = s(u);
    if (i) for(let D = n + 1; D < r.length; D++){
        let { comment: l, followingNode: p } = r[D];
        if (p !== i || !on(e.slice(a, o(l)))) break;
        a = s(l);
    }
    return $(e, a);
}
function rn(e, t) {
    var s, a;
    let r = e.length;
    if (r === 0) return;
    let { precedingNode: n, followingNode: u } = e[0], i = t.locStart(u), o;
    for(o = r; o > 0; --o){
        let { comment: D, precedingNode: l, followingNode: p } = e[o - 1];
        Pe.strictEqual(l, n), Pe.strictEqual(p, u);
        let f = t.originalText.slice(t.locEnd(D), i);
        if (((a = (s = t.printer).isGap) == null ? void 0 : a.call(s, f, t)) ?? /^[\s(]*$/u.test(f)) i = t.locStart(D);
        else break;
    }
    for (let [D, { comment: l }] of e.entries())D < o ? ie(n, l) : ue(u, l);
    for (let D of [
        n,
        u
    ])D.comments && D.comments.length > 1 && D.comments.sort((l, p)=>t.locStart(l) - t.locStart(p));
    e.length = 0;
}
function Mt(e, t, r) {
    let n = r.locStart(t) - 1;
    for(let u = 1; u < e.length; ++u)if (n < r.locStart(e[u])) return u - 1;
    return 0;
}
function ui(e, t) {
    let r = t - 1;
    r = S(e, r, {
        backwards: !0
    }), r = W(e, r, {
        backwards: !0
    }), r = S(e, r, {
        backwards: !0
    });
    let n = W(e, r, {
        backwards: !0
    });
    return r !== n;
}
var Ie = ui;
function sn(e, t) {
    let r = e.node;
    return r.printed = !0, t.printer.printComment(e, t);
}
function ii(e, t) {
    var l;
    let r = e.node, n = [
        sn(e, t)
    ], { printer: u, originalText: i, locStart: o, locEnd: s } = t;
    if ((l = u.isBlockComment) == null ? void 0 : l.call(u, r)) {
        let p = $(i, s(r)) ? $(i, o(r), {
            backwards: !0
        }) ? K : qe : " ";
        n.push(p);
    } else n.push(K);
    let D = W(i, S(i, s(r)));
    return D !== !1 && $(i, D) && n.push(K), n;
}
function oi(e, t, r) {
    var D;
    let n = e.node, u = sn(e, t), { printer: i, originalText: o, locStart: s } = t, a = (D = i.isBlockComment) == null ? void 0 : D.call(i, n);
    if (r != null && r.hasLineSuffix && !(r != null && r.isBlock) || $(o, s(n), {
        backwards: !0
    })) {
        let l = Ie(o, s(n));
        return {
            doc: Ne([
                K,
                l ? K : "",
                u
            ]),
            isBlock: a,
            hasLineSuffix: !0
        };
    }
    return !a || r != null && r.hasLineSuffix ? {
        doc: [
            Ne([
                " ",
                u
            ]),
            Fe
        ],
        isBlock: a,
        hasLineSuffix: !0
    } : {
        doc: [
            " ",
            u
        ],
        isBlock: a,
        hasLineSuffix: !1
    };
}
function si(e, t) {
    let r = e.node;
    if (!r) return {};
    let n = t[Symbol.for("printedComments")];
    if ((r.comments || []).filter((a)=>!n.has(a)).length === 0) return {
        leading: "",
        trailing: ""
    };
    let i = [], o = [], s;
    return e.each(()=>{
        let a = e.node;
        if (n != null && n.has(a)) return;
        let { leading: D, trailing: l } = a;
        D ? i.push(ii(e, t)) : l && (s = oi(e, t, s), o.push(s.doc));
    }, "comments"), {
        leading: i,
        trailing: o
    };
}
function an(e, t, r) {
    let { leading: n, trailing: u } = si(e, r);
    return !n && !u ? t : me(t, (i)=>[
            n,
            i,
            u
        ]);
}
function Dn(e) {
    let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: r } = e;
    for (let n of t){
        if (!n.printed && !r.has(n)) throw new Error('Comment "' + n.value.trim() + '" was not printed. Please report this error!');
        delete n.printed;
    }
}
function ai(e) {
    return ()=>{};
}
var ln = ai;
var Re = class extends Error {
    name = "ConfigError";
}, Ye = class extends Error {
    name = "UndefinedParserError";
};
var cn = {
    cursorOffset: {
        category: "Special",
        type: "int",
        default: -1,
        range: {
            start: -1,
            end: 1 / 0,
            step: 1
        },
        description: "Print (to stderr) where a cursor at the given position would move to after formatting.",
        cliCategory: "Editor"
    },
    endOfLine: {
        category: "Global",
        type: "choice",
        default: "lf",
        description: "Which end of line characters to apply.",
        choices: [
            {
                value: "lf",
                description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"
            },
            {
                value: "crlf",
                description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"
            },
            {
                value: "cr",
                description: "Carriage Return character only (\\r), used very rarely"
            },
            {
                value: "auto",
                description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)`
            }
        ]
    },
    filepath: {
        category: "Special",
        type: "path",
        description: "Specify the input filepath. This will be used to do parser inference.",
        cliName: "stdin-filepath",
        cliCategory: "Other",
        cliDescription: "Path to the file to pretend that stdin comes from."
    },
    insertPragma: {
        category: "Special",
        type: "boolean",
        default: !1,
        description: "Insert @format pragma into file's first docblock comment.",
        cliCategory: "Other"
    },
    parser: {
        category: "Global",
        type: "choice",
        default: void 0,
        description: "Which parser to use.",
        exception: (e)=>typeof e == "string" || typeof e == "function",
        choices: [
            {
                value: "flow",
                description: "Flow"
            },
            {
                value: "babel",
                description: "JavaScript"
            },
            {
                value: "babel-flow",
                description: "Flow"
            },
            {
                value: "babel-ts",
                description: "TypeScript"
            },
            {
                value: "typescript",
                description: "TypeScript"
            },
            {
                value: "acorn",
                description: "JavaScript"
            },
            {
                value: "espree",
                description: "JavaScript"
            },
            {
                value: "meriyah",
                description: "JavaScript"
            },
            {
                value: "css",
                description: "CSS"
            },
            {
                value: "less",
                description: "Less"
            },
            {
                value: "scss",
                description: "SCSS"
            },
            {
                value: "json",
                description: "JSON"
            },
            {
                value: "json5",
                description: "JSON5"
            },
            {
                value: "jsonc",
                description: "JSON with Comments"
            },
            {
                value: "json-stringify",
                description: "JSON.stringify"
            },
            {
                value: "graphql",
                description: "GraphQL"
            },
            {
                value: "markdown",
                description: "Markdown"
            },
            {
                value: "mdx",
                description: "MDX"
            },
            {
                value: "vue",
                description: "Vue"
            },
            {
                value: "yaml",
                description: "YAML"
            },
            {
                value: "glimmer",
                description: "Ember / Handlebars"
            },
            {
                value: "html",
                description: "HTML"
            },
            {
                value: "angular",
                description: "Angular"
            },
            {
                value: "lwc",
                description: "Lightning Web Components"
            }
        ]
    },
    plugins: {
        type: "path",
        array: !0,
        default: [
            {
                value: []
            }
        ],
        category: "Global",
        description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
        exception: (e)=>typeof e == "string" || typeof e == "object",
        cliName: "plugin",
        cliCategory: "Config"
    },
    printWidth: {
        category: "Global",
        type: "int",
        default: 80,
        description: "The line length where Prettier will try wrap.",
        range: {
            start: 0,
            end: 1 / 0,
            step: 1
        }
    },
    rangeEnd: {
        category: "Special",
        type: "int",
        default: 1 / 0,
        range: {
            start: 0,
            end: 1 / 0,
            step: 1
        },
        description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`,
        cliCategory: "Editor"
    },
    rangeStart: {
        category: "Special",
        type: "int",
        default: 0,
        range: {
            start: 0,
            end: 1 / 0,
            step: 1
        },
        description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`,
        cliCategory: "Editor"
    },
    requirePragma: {
        category: "Special",
        type: "boolean",
        default: !1,
        description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,
        cliCategory: "Other"
    },
    tabWidth: {
        type: "int",
        category: "Global",
        default: 2,
        description: "Number of spaces per indentation level.",
        range: {
            start: 0,
            end: 1 / 0,
            step: 1
        }
    },
    useTabs: {
        category: "Global",
        type: "boolean",
        default: !1,
        description: "Indent with tabs instead of spaces."
    },
    embeddedLanguageFormatting: {
        category: "Global",
        type: "choice",
        default: "auto",
        description: "Control how Prettier formats quoted code embedded in the file.",
        choices: [
            {
                value: "auto",
                description: "Format embedded code if Prettier can automatically identify it."
            },
            {
                value: "off",
                description: "Never automatically format embedded code."
            }
        ]
    }
};
function ot({ plugins: e = [], showDeprecated: t = !1 } = {}) {
    let r = e.flatMap((u)=>u.languages ?? []), n = [];
    for (let u of li(Object.assign({}, ...e.map(({ options: i })=>i), cn)))!t && u.deprecated || (Array.isArray(u.choices) && (t || (u.choices = u.choices.filter((i)=>!i.deprecated)), u.name === "parser" && (u.choices = [
        ...u.choices,
        ...Di(u.choices, r, e)
    ])), u.pluginDefaults = Object.fromEntries(e.filter((i)=>{
        var o;
        return ((o = i.defaultOptions) == null ? void 0 : o[u.name]) !== void 0;
    }).map((i)=>[
            i.name,
            i.defaultOptions[u.name]
        ])), n.push(u));
    return {
        languages: r,
        options: n
    };
}
function* Di(e, t, r) {
    let n = new Set(e.map((u)=>u.value));
    for (let u of t)if (u.parsers) {
        for (let i of u.parsers)if (!n.has(i)) {
            n.add(i);
            let o = r.find((a)=>a.parsers && Object.prototype.hasOwnProperty.call(a.parsers, i)), s = u.name;
            o != null && o.name && (s += ` (plugin: ${o.name})`), yield {
                value: i,
                description: s
            };
        }
    }
}
function li(e) {
    let t = [];
    for (let [r, n] of Object.entries(e)){
        let u = {
            name: r,
            ...n
        };
        Array.isArray(u.default) && (u.default = y(!1, u.default, -1).value), t.push(u);
    }
    return t;
}
var ci = (e)=>String(e).split(/[/\\]/u).pop();
function fn(e, t) {
    if (!t) return;
    let r = ci(t).toLowerCase();
    return e.find(({ filenames: n })=>n == null ? void 0 : n.some((u)=>u.toLowerCase() === r)) ?? e.find(({ extensions: n })=>n == null ? void 0 : n.some((u)=>r.endsWith(u)));
}
function fi(e, t) {
    if (t) return e.find(({ name: r })=>r.toLowerCase() === t) ?? e.find(({ aliases: r })=>r == null ? void 0 : r.includes(t)) ?? e.find(({ extensions: r })=>r == null ? void 0 : r.includes(`.${t}`));
}
function di(e, t) {
    let r = e.plugins.flatMap((u)=>u.languages ?? []), n = fi(r, t.language) ?? fn(r, t.physicalFile) ?? fn(r, t.file) ?? (t.physicalFile, void 0);
    return n == null ? void 0 : n.parsers[0];
}
var dn = di;
var oe = {
    key: (e)=>/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e),
    value (e) {
        if (e === null || typeof e != "object") return JSON.stringify(e);
        if (Array.isArray(e)) return `[${e.map((r)=>oe.value(r)).join(", ")}]`;
        let t = Object.keys(e);
        return t.length === 0 ? "{}" : `{ ${t.map((r)=>`${oe.key(r)}: ${oe.value(e[r])}`).join(", ")} }`;
    },
    pair: ({ key: e, value: t })=>oe.value({
            [e]: t
        })
};
var Ut = Me(st(), 1), mn = (e, t, { descriptor: r })=>{
    let n = [
        `${Ut.default.yellow(typeof e == "string" ? r.key(e) : r.pair(e))} is deprecated`
    ];
    return t && n.push(`we now treat it as ${Ut.default.blue(typeof t == "string" ? r.key(t) : r.pair(t))}`), n.join("; ") + ".";
};
var ce = Me(st(), 1);
var at = Symbol.for("vnopts.VALUE_NOT_EXIST"), Ae = Symbol.for("vnopts.VALUE_UNCHANGED");
var hn = " ".repeat(2), Cn = (e, t, r)=>{
    let { text: n, list: u } = r.normalizeExpectedResult(r.schemas[e].expected(r)), i = [];
    return n && i.push(En(e, t, n, r.descriptor)), u && i.push([
        En(e, t, u.title, r.descriptor)
    ].concat(u.values.map((o)=>gn(o, r.loggerPrintWidth))).join(`
`)), yn(i, r.loggerPrintWidth);
};
function En(e, t, r, n) {
    return [
        `Invalid ${ce.default.red(n.key(e))} value.`,
        `Expected ${ce.default.blue(r)},`,
        `but received ${t === at ? ce.default.gray("nothing") : ce.default.red(n.value(t))}.`
    ].join(" ");
}
function gn({ text: e, list: t }, r) {
    let n = [];
    return e && n.push(`- ${ce.default.blue(e)}`), t && n.push([
        `- ${ce.default.blue(t.title)}:`
    ].concat(t.values.map((u)=>gn(u, r - hn.length).replace(/^|\n/g, `$&${hn}`))).join(`
`)), yn(n, r);
}
function yn(e, t) {
    if (e.length === 1) return e[0];
    let [r, n] = e, [u, i] = e.map((o)=>o.split(`
`, 1)[0].length);
    return u > t && u > i ? n : r;
}
var Gt = Me(st(), 1);
var Vt = [], An = [];
function zt(e, t) {
    if (e === t) return 0;
    let r = e;
    e.length > t.length && (e = t, t = r);
    let n = e.length, u = t.length;
    for(; n > 0 && e.charCodeAt(~-n) === t.charCodeAt(~-u);)n--, u--;
    let i = 0;
    for(; i < n && e.charCodeAt(i) === t.charCodeAt(i);)i++;
    if (n -= i, u -= i, n === 0) return u;
    let o, s, a, D, l = 0, p = 0;
    for(; l < n;)An[l] = e.charCodeAt(i + l), Vt[l] = ++l;
    for(; p < u;)for(o = t.charCodeAt(i + p), a = p++, s = p, l = 0; l < n; l++)D = o === An[l] ? a : a + 1, a = Vt[l], s = Vt[l] = a > s ? D > s ? s + 1 : D : D > a ? a + 1 : D;
    return s;
}
var Dt = (e, t, { descriptor: r, logger: n, schemas: u })=>{
    let i = [
        `Ignored unknown option ${Gt.default.yellow(r.pair({
            key: e,
            value: t
        }))}.`
    ], o = Object.keys(u).sort().find((s)=>zt(e, s) < 3);
    o && i.push(`Did you mean ${Gt.default.blue(r.key(o))}?`), n.warn(i.join(" "));
};
var pi = [
    "default",
    "expected",
    "validate",
    "deprecated",
    "forward",
    "redirect",
    "overlap",
    "preprocess",
    "postprocess"
];
function Fi(e, t) {
    let r = new e(t), n = Object.create(r);
    for (let u of pi)u in t && (n[u] = mi(t[u], r, x.prototype[u].length));
    return n;
}
var x = class {
    static create(t) {
        return Fi(this, t);
    }
    constructor(t){
        this.name = t.name;
    }
    default(t) {}
    expected(t) {
        return "nothing";
    }
    validate(t, r) {
        return !1;
    }
    deprecated(t, r) {
        return !1;
    }
    forward(t, r) {}
    redirect(t, r) {}
    overlap(t, r, n) {
        return t;
    }
    preprocess(t, r) {
        return t;
    }
    postprocess(t, r) {
        return Ae;
    }
};
function mi(e, t, r) {
    return typeof e == "function" ? (...n)=>e(...n.slice(0, r - 1), t, ...n.slice(r - 1)) : ()=>e;
}
var lt = class extends x {
    constructor(t){
        super(t), this._sourceName = t.sourceName;
    }
    expected(t) {
        return t.schemas[this._sourceName].expected(t);
    }
    validate(t, r) {
        return r.schemas[this._sourceName].validate(t, r);
    }
    redirect(t, r) {
        return this._sourceName;
    }
};
var ct = class extends x {
    expected() {
        return "anything";
    }
    validate() {
        return !0;
    }
};
var ft = class extends x {
    constructor({ valueSchema: t, name: r = t.name, ...n }){
        super({
            ...n,
            name: r
        }), this._valueSchema = t;
    }
    expected(t) {
        let { text: r, list: n } = t.normalizeExpectedResult(this._valueSchema.expected(t));
        return {
            text: r && `an array of ${r}`,
            list: n && {
                title: "an array of the following values",
                values: [
                    {
                        list: n
                    }
                ]
            }
        };
    }
    validate(t, r) {
        if (!Array.isArray(t)) return !1;
        let n = [];
        for (let u of t){
            let i = r.normalizeValidateResult(this._valueSchema.validate(u, r), u);
            i !== !0 && n.push(i.value);
        }
        return n.length === 0 ? !0 : {
            value: n
        };
    }
    deprecated(t, r) {
        let n = [];
        for (let u of t){
            let i = r.normalizeDeprecatedResult(this._valueSchema.deprecated(u, r), u);
            i !== !1 && n.push(...i.map(({ value: o })=>({
                    value: [
                        o
                    ]
                })));
        }
        return n;
    }
    forward(t, r) {
        let n = [];
        for (let u of t){
            let i = r.normalizeForwardResult(this._valueSchema.forward(u, r), u);
            n.push(...i.map(vn));
        }
        return n;
    }
    redirect(t, r) {
        let n = [], u = [];
        for (let i of t){
            let o = r.normalizeRedirectResult(this._valueSchema.redirect(i, r), i);
            "remain" in o && n.push(o.remain), u.push(...o.redirect.map(vn));
        }
        return n.length === 0 ? {
            redirect: u
        } : {
            redirect: u,
            remain: n
        };
    }
    overlap(t, r) {
        return t.concat(r);
    }
};
function vn({ from: e, to: t }) {
    return {
        from: [
            e
        ],
        to: t
    };
}
var dt = class extends x {
    expected() {
        return "true or false";
    }
    validate(t) {
        return typeof t == "boolean";
    }
};
function wn(e, t) {
    let r = Object.create(null);
    for (let n of e){
        let u = n[t];
        if (r[u]) throw new Error(`Duplicate ${t} ${JSON.stringify(u)}`);
        r[u] = n;
    }
    return r;
}
function _n(e, t) {
    let r = new Map;
    for (let n of e){
        let u = n[t];
        if (r.has(u)) throw new Error(`Duplicate ${t} ${JSON.stringify(u)}`);
        r.set(u, n);
    }
    return r;
}
function xn() {
    let e = Object.create(null);
    return (t)=>{
        let r = JSON.stringify(t);
        return e[r] ? !0 : (e[r] = !0, !1);
    };
}
function bn(e, t) {
    let r = [], n = [];
    for (let u of e)t(u) ? r.push(u) : n.push(u);
    return [
        r,
        n
    ];
}
function Nn(e) {
    return e === Math.floor(e);
}
function On(e, t) {
    if (e === t) return 0;
    let r = typeof e, n = typeof t, u = [
        "undefined",
        "object",
        "boolean",
        "number",
        "string"
    ];
    return r !== n ? u.indexOf(r) - u.indexOf(n) : r !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
}
function Sn(e) {
    return (...t)=>{
        let r = e(...t);
        return typeof r == "string" ? new Error(r) : r;
    };
}
function Kt(e) {
    return e === void 0 ? {} : e;
}
function Jt(e) {
    if (typeof e == "string") return {
        text: e
    };
    let { text: t, list: r } = e;
    return hi((t || r) !== void 0, "Unexpected `expected` result, there should be at least one field."), r ? {
        text: t,
        list: {
            title: r.title,
            values: r.values.map(Jt)
        }
    } : {
        text: t
    };
}
function qt(e, t) {
    return e === !0 ? !0 : e === !1 ? {
        value: t
    } : e;
}
function Xt(e, t, r = !1) {
    return e === !1 ? !1 : e === !0 ? r ? !0 : [
        {
            value: t
        }
    ] : "value" in e ? [
        e
    ] : e.length === 0 ? !1 : e;
}
function Bn(e, t) {
    return typeof e == "string" || "key" in e ? {
        from: t,
        to: e
    } : "from" in e ? {
        from: e.from,
        to: e.to
    } : {
        from: t,
        to: e.to
    };
}
function pt(e, t) {
    return e === void 0 ? [] : Array.isArray(e) ? e.map((r)=>Bn(r, t)) : [
        Bn(e, t)
    ];
}
function Qt(e, t) {
    let r = pt(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
    return r.length === 0 ? {
        remain: t,
        redirect: r
    } : typeof e == "object" && "remain" in e ? {
        remain: e.remain,
        redirect: r
    } : {
        redirect: r
    };
}
function hi(e, t) {
    if (!e) throw new Error(t);
}
var Ft = class extends x {
    constructor(t){
        super(t), this._choices = _n(t.choices.map((r)=>r && typeof r == "object" ? r : {
                value: r
            }), "value");
    }
    expected({ descriptor: t }) {
        let r = Array.from(this._choices.keys()).map((o)=>this._choices.get(o)).filter(({ hidden: o })=>!o).map((o)=>o.value).sort(On).map(t.value), n = r.slice(0, -2), u = r.slice(-2);
        return {
            text: n.concat(u.join(" or ")).join(", "),
            list: {
                title: "one of the following values",
                values: r
            }
        };
    }
    validate(t) {
        return this._choices.has(t);
    }
    deprecated(t) {
        let r = this._choices.get(t);
        return r && r.deprecated ? {
            value: t
        } : !1;
    }
    forward(t) {
        let r = this._choices.get(t);
        return r ? r.forward : void 0;
    }
    redirect(t) {
        let r = this._choices.get(t);
        return r ? r.redirect : void 0;
    }
};
var mt = class extends x {
    expected() {
        return "a number";
    }
    validate(t, r) {
        return typeof t == "number";
    }
};
var ht = class extends mt {
    expected() {
        return "an integer";
    }
    validate(t, r) {
        return r.normalizeValidateResult(super.validate(t, r), t) === !0 && Nn(t);
    }
};
var je = class extends x {
    expected() {
        return "a string";
    }
    validate(t) {
        return typeof t == "string";
    }
};
var Tn = oe, kn = Dt, Ln = Cn, Pn = mn;
var Et = class {
    constructor(t, r){
        let { logger: n = console, loggerPrintWidth: u = 80, descriptor: i = Tn, unknown: o = kn, invalid: s = Ln, deprecated: a = Pn, missing: D = ()=>!1, required: l = ()=>!1, preprocess: p = (d)=>d, postprocess: f = ()=>Ae } = r || {};
        this._utils = {
            descriptor: i,
            logger: n || {
                warn: ()=>{}
            },
            loggerPrintWidth: u,
            schemas: wn(t, "name"),
            normalizeDefaultResult: Kt,
            normalizeExpectedResult: Jt,
            normalizeDeprecatedResult: Xt,
            normalizeForwardResult: pt,
            normalizeRedirectResult: Qt,
            normalizeValidateResult: qt
        }, this._unknownHandler = o, this._invalidHandler = Sn(s), this._deprecatedHandler = a, this._identifyMissing = (d, c)=>!(d in c) || D(d, c), this._identifyRequired = l, this._preprocess = p, this._postprocess = f, this.cleanHistory();
    }
    cleanHistory() {
        this._hasDeprecationWarned = xn();
    }
    normalize(t) {
        let r = {}, u = [
            this._preprocess(t, this._utils)
        ], i = ()=>{
            for(; u.length !== 0;){
                let o = u.shift(), s = this._applyNormalization(o, r);
                u.push(...s);
            }
        };
        i();
        for (let o of Object.keys(this._utils.schemas)){
            let s = this._utils.schemas[o];
            if (!(o in r)) {
                let a = Kt(s.default(this._utils));
                "value" in a && u.push({
                    [o]: a.value
                });
            }
        }
        i();
        for (let o of Object.keys(this._utils.schemas)){
            if (!(o in r)) continue;
            let s = this._utils.schemas[o], a = r[o], D = s.postprocess(a, this._utils);
            D !== Ae && (this._applyValidation(D, o, s), r[o] = D);
        }
        return this._applyPostprocess(r), this._applyRequiredCheck(r), r;
    }
    _applyNormalization(t, r) {
        let n = [], { knownKeys: u, unknownKeys: i } = this._partitionOptionKeys(t);
        for (let o of u){
            let s = this._utils.schemas[o], a = s.preprocess(t[o], this._utils);
            this._applyValidation(a, o, s);
            let D = ({ from: d, to: c })=>{
                n.push(typeof c == "string" ? {
                    [c]: d
                } : {
                    [c.key]: c.value
                });
            }, l = ({ value: d, redirectTo: c })=>{
                let F = Xt(s.deprecated(d, this._utils), a, !0);
                if (F !== !1) if (F === !0) this._hasDeprecationWarned(o) || this._utils.logger.warn(this._deprecatedHandler(o, c, this._utils));
                else for (let { value: m } of F){
                    let h = {
                        key: o,
                        value: m
                    };
                    if (!this._hasDeprecationWarned(h)) {
                        let C = typeof c == "string" ? {
                            key: c,
                            value: m
                        } : c;
                        this._utils.logger.warn(this._deprecatedHandler(h, C, this._utils));
                    }
                }
            };
            pt(s.forward(a, this._utils), a).forEach(D);
            let f = Qt(s.redirect(a, this._utils), a);
            if (f.redirect.forEach(D), "remain" in f) {
                let d = f.remain;
                r[o] = o in r ? s.overlap(r[o], d, this._utils) : d, l({
                    value: d
                });
            }
            for (let { from: d, to: c } of f.redirect)l({
                value: d,
                redirectTo: c
            });
        }
        for (let o of i){
            let s = t[o];
            this._applyUnknownHandler(o, s, r, (a, D)=>{
                n.push({
                    [a]: D
                });
            });
        }
        return n;
    }
    _applyRequiredCheck(t) {
        for (let r of Object.keys(this._utils.schemas))if (this._identifyMissing(r, t) && this._identifyRequired(r)) throw this._invalidHandler(r, at, this._utils);
    }
    _partitionOptionKeys(t) {
        let [r, n] = bn(Object.keys(t).filter((u)=>!this._identifyMissing(u, t)), (u)=>u in this._utils.schemas);
        return {
            knownKeys: r,
            unknownKeys: n
        };
    }
    _applyValidation(t, r, n) {
        let u = qt(n.validate(t, this._utils), t);
        if (u !== !0) throw this._invalidHandler(r, u.value, this._utils);
    }
    _applyUnknownHandler(t, r, n, u) {
        let i = this._unknownHandler(t, r, this._utils);
        if (i) for (let o of Object.keys(i)){
            if (this._identifyMissing(o, i)) continue;
            let s = i[o];
            o in this._utils.schemas ? u(o, s) : n[o] = s;
        }
    }
    _applyPostprocess(t) {
        let r = this._postprocess(t, this._utils);
        if (r !== Ae) {
            if (r.delete) for (let n of r.delete)delete t[n];
            if (r.override) {
                let { knownKeys: n, unknownKeys: u } = this._partitionOptionKeys(r.override);
                for (let i of n){
                    let o = r.override[i];
                    this._applyValidation(o, i, this._utils.schemas[i]), t[i] = o;
                }
                for (let i of u){
                    let o = r.override[i];
                    this._applyUnknownHandler(i, o, t, (s, a)=>{
                        let D = this._utils.schemas[s];
                        this._applyValidation(a, s, D), t[s] = a;
                    });
                }
            }
        }
    }
};
var Zt;
function Ci(e, t, { logger: r = !1, isCLI: n = !1, passThrough: u = !1, FlagSchema: i, descriptor: o } = {}) {
    if (n) {
        if (!i) throw new Error("'FlagSchema' option is required.");
        if (!o) throw new Error("'descriptor' option is required.");
    } else o = oe;
    let s = u ? Array.isArray(u) ? (f, d)=>u.includes(f) ? {
            [f]: d
        } : void 0 : (f, d)=>({
            [f]: d
        }) : (f, d, c)=>{
        let { _: F, ...m } = c.schemas;
        return Dt(f, d, {
            ...c,
            schemas: m
        });
    }, a = gi(t, {
        isCLI: n,
        FlagSchema: i
    }), D = new Et(a, {
        logger: r,
        unknown: s,
        descriptor: o
    }), l = r !== !1;
    l && Zt && (D._hasDeprecationWarned = Zt);
    let p = D.normalize(e);
    return l && (Zt = D._hasDeprecationWarned), p;
}
function gi(e, { isCLI: t, FlagSchema: r }) {
    let n = [];
    t && n.push(ct.create({
        name: "_"
    }));
    for (let u of e)n.push(yi(u, {
        isCLI: t,
        optionInfos: e,
        FlagSchema: r
    })), u.alias && t && n.push(lt.create({
        name: u.alias,
        sourceName: u.name
    }));
    return n;
}
function yi(e, { isCLI: t, optionInfos: r, FlagSchema: n }) {
    let { name: u } = e, i = {
        name: u
    }, o, s = {};
    switch(e.type){
        case "int":
            o = ht, t && (i.preprocess = Number);
            break;
        case "string":
            o = je;
            break;
        case "choice":
            o = Ft, i.choices = e.choices.map((a)=>a != null && a.redirect ? {
                    ...a,
                    redirect: {
                        to: {
                            key: e.name,
                            value: a.redirect
                        }
                    }
                } : a);
            break;
        case "boolean":
            o = dt;
            break;
        case "flag":
            o = n, i.flags = r.flatMap((a)=>[
                    a.alias,
                    a.description && a.name,
                    a.oppositeDescription && `no-${a.name}`
                ].filter(Boolean));
            break;
        case "path":
            o = je;
            break;
        default:
            throw new Error(`Unexpected type ${e.type}`);
    }
    if (e.exception ? i.validate = (a, D, l)=>e.exception(a) || D.validate(a, l) : i.validate = (a, D, l)=>a === void 0 || D.validate(a, l), e.redirect && (s.redirect = (a)=>a ? {
            to: typeof e.redirect == "string" ? e.redirect : {
                key: e.redirect.option,
                value: e.redirect.value
            }
        } : void 0), e.deprecated && (s.deprecated = !0), t && !e.array) {
        let a = i.preprocess || ((D)=>D);
        i.preprocess = (D, l, p)=>l.preprocess(a(Array.isArray(D) ? y(!1, D, -1) : D), p);
    }
    return e.array ? ft.create({
        ...t ? {
            preprocess: (a)=>Array.isArray(a) ? a : [
                    a
                ]
        } : {},
        ...s,
        valueSchema: o.create(i)
    }) : o.create({
        ...i,
        ...s
    });
}
var In = Ci;
var Ai = (e, t, r)=>{
    if (!(e && t == null)) {
        if (t.findLast) return t.findLast(r);
        for(let n = t.length - 1; n >= 0; n--){
            let u = t[n];
            if (r(u, n, t)) return u;
        }
    }
}, er = Ai;
function tr(e, t) {
    if (!t) throw new Error("parserName is required.");
    let r = er(!1, e, (u)=>u.parsers && Object.prototype.hasOwnProperty.call(u.parsers, t));
    if (r) return r;
    let n = `Couldn't resolve parser "${t}".`;
    throw n += " Plugins must be explicitly added to the standalone bundle.", new Re(n);
}
function Rn(e, t) {
    if (!t) throw new Error("astFormat is required.");
    let r = er(!1, e, (u)=>u.printers && Object.prototype.hasOwnProperty.call(u.printers, t));
    if (r) return r;
    let n = `Couldn't find plugin for AST format "${t}".`;
    throw n += " Plugins must be explicitly added to the standalone bundle.", new Re(n);
}
function Ct({ plugins: e, parser: t }) {
    let r = tr(e, t);
    return rr(r, t);
}
function rr(e, t) {
    let r = e.parsers[t];
    return typeof r == "function" ? r() : r;
}
function Yn(e, t) {
    let r = e.printers[t];
    return typeof r == "function" ? r() : r;
}
var jn = {
    astFormat: "estree",
    printer: {},
    originalText: void 0,
    locStart: null,
    locEnd: null
};
async function vi(e, t = {}) {
    var p;
    let r = {
        ...e
    };
    if (!r.parser) if (r.filepath) {
        if (r.parser = dn(r, {
            physicalFile: r.filepath
        }), !r.parser) throw new Ye(`No parser could be inferred for file "${r.filepath}".`);
    } else throw new Ye("No parser and no file path given, couldn't infer a parser.");
    let n = ot({
        plugins: e.plugins,
        showDeprecated: !0
    }).options, u = {
        ...jn,
        ...Object.fromEntries(n.filter((f)=>f.default !== void 0).map((f)=>[
                f.name,
                f.default
            ]))
    }, i = tr(r.plugins, r.parser), o = await rr(i, r.parser);
    r.astFormat = o.astFormat, r.locEnd = o.locEnd, r.locStart = o.locStart;
    let s = (p = i.printers) != null && p[o.astFormat] ? i : Rn(r.plugins, o.astFormat), a = await Yn(s, o.astFormat);
    r.printer = a;
    let D = s.defaultOptions ? Object.fromEntries(Object.entries(s.defaultOptions).filter(([, f])=>f !== void 0)) : {}, l = {
        ...u,
        ...D
    };
    for (let [f, d] of Object.entries(l))(r[f] === null || r[f] === void 0) && (r[f] = d);
    return r.parser === "json" && (r.trailingComma = "none"), In(r, n, {
        passThrough: Object.keys(jn),
        ...t
    });
}
var se = vi;
var $n = Me(Wn(), 1);
async function xi(e, t) {
    let r = await Ct(t), n = r.preprocess ? r.preprocess(e, t) : e;
    t.originalText = n;
    let u;
    try {
        u = await r.parse(n, t, t);
    } catch (i) {
        bi(i, e);
    }
    return {
        text: n,
        ast: u
    };
}
function bi(e, t) {
    let { loc: r } = e;
    if (r) {
        let n = (0, $n.codeFrameColumns)(t, r, {
            highlightCode: !0
        });
        throw e.message += `
` + n, e.codeFrame = n, e;
    }
    throw e;
}
var fe = xi;
async function Mn(e, t, r, n, u) {
    let { embeddedLanguageFormatting: i, printer: { embed: o, hasPrettierIgnore: s = ()=>!1, getVisitorKeys: a } } = r;
    if (!o || i !== "auto") return;
    if (o.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");
    let D = q(o.getVisitorKeys ?? a), l = [];
    d();
    let p = e.stack;
    for (let { print: c, node: F, pathStack: m } of l)try {
        e.stack = m;
        let h = await c(f, t, e, r);
        h && u.set(F, h);
    } catch (h) {
        if (globalThis.PRETTIER_DEBUG) throw h;
    }
    e.stack = p;
    function f(c, F) {
        return Ni(c, F, r, n);
    }
    function d() {
        let { node: c } = e;
        if (c === null || typeof c != "object" || s(e)) return;
        for (let m of D(c))Array.isArray(c[m]) ? e.each(d, m) : e.call(d, m);
        let F = o(e, r);
        if (F) {
            if (typeof F == "function") {
                l.push({
                    print: F,
                    node: c,
                    pathStack: [
                        ...e.stack
                    ]
                });
                return;
            }
            u.set(c, F);
        }
    }
}
async function Ni(e, t, r, n) {
    let u = await se({
        ...r,
        ...t,
        parentParser: r.parser,
        originalText: e
    }, {
        passThrough: !0
    }), { ast: i } = await fe(e, u), o = await n(i, u);
    return et(o);
}
function Oi(e, t) {
    let { originalText: r, [Symbol.for("comments")]: n, locStart: u, locEnd: i, [Symbol.for("printedComments")]: o } = t, { node: s } = e, a = u(s), D = i(s);
    for (let l of n)u(l) >= a && i(l) <= D && o.add(l);
    return r.slice(a, D);
}
var Un = Oi;
async function He(e, t) {
    ({ ast: e } = await ur(e, t));
    let r = new Map, n = new Jr(e), u = ln(t), i = new Map;
    await Mn(n, s, t, He, i);
    let o = await Vn(n, t, s, void 0, i);
    if (Dn(t), t.nodeAfterCursor && !t.nodeBeforeCursor) return [
        Z,
        o
    ];
    if (t.nodeBeforeCursor && !t.nodeAfterCursor) return [
        o,
        Z
    ];
    return o;
    "TURBOPACK unreachable";
    function s(D, l) {
        return D === void 0 || D === n ? a(l) : Array.isArray(D) ? n.call(()=>a(l), ...D) : n.call(()=>a(l), D);
    }
    function a(D) {
        u(n);
        let l = n.node;
        if (l == null) return "";
        let p = l && typeof l == "object" && D === void 0;
        if (p && r.has(l)) return r.get(l);
        let f = Vn(n, t, s, D, i);
        return p && r.set(l, f), f;
    }
}
function Vn(e, t, r, n, u) {
    var a;
    let { node: i } = e, { printer: o } = t, s;
    switch((a = o.hasPrettierIgnore) != null && a.call(o, e) ? s = Un(e, t) : u.has(i) ? s = u.get(i) : s = o.print(e, t, r, n), i){
        case t.cursorNode:
            s = me(s, (D)=>[
                    Z,
                    D,
                    Z
                ]);
            break;
        case t.nodeBeforeCursor:
            s = me(s, (D)=>[
                    D,
                    Z
                ]);
            break;
        case t.nodeAfterCursor:
            s = me(s, (D)=>[
                    Z,
                    D
                ]);
            break;
    }
    return o.printComment && (!o.willPrintOwnComments || !o.willPrintOwnComments(e, t)) && (s = an(e, s, t)), s;
}
async function ur(e, t) {
    let r = e.comments ?? [];
    t[Symbol.for("comments")] = r, t[Symbol.for("tokens")] = e.tokens ?? [], t[Symbol.for("printedComments")] = new Set, un(e, t);
    let { printer: { preprocess: n } } = t;
    return e = n ? await n(e, t) : e, {
        ast: e,
        comments: r
    };
}
function Si(e, t) {
    let { cursorOffset: r, locStart: n, locEnd: u } = t, i = q(t.printer.getVisitorKeys), o = (d)=>n(d) <= r && u(d) >= r, s = e, a = [
        e
    ];
    for (let d of Qr(e, {
        getVisitorKeys: i,
        filter: o
    }))a.push(d), s = d;
    if (Zr(s, {
        getVisitorKeys: i
    })) return {
        cursorNode: s
    };
    let D, l, p = -1, f = Number.POSITIVE_INFINITY;
    for(; a.length > 0 && (D === void 0 || l === void 0);){
        s = a.pop();
        let d = D !== void 0, c = l !== void 0;
        for (let F of ge(s, {
            getVisitorKeys: i
        })){
            if (!d) {
                let m = u(F);
                m <= r && m > p && (D = F, p = m);
            }
            if (!c) {
                let m = n(F);
                m >= r && m < f && (l = F, f = m);
            }
        }
    }
    return {
        nodeBeforeCursor: D,
        nodeAfterCursor: l
    };
}
var zn = Si;
function Ti(e, t) {
    let { printer: { massageAstNode: r, getVisitorKeys: n } } = t;
    if (!r) return e;
    let u = q(n), i = r.ignoredProperties ?? new Set;
    return o(e);
    "TURBOPACK unreachable";
    function o(s, a) {
        if (!(s !== null && typeof s == "object")) return s;
        if (Array.isArray(s)) return s.map((f)=>o(f, a)).filter(Boolean);
        let D = {}, l = new Set(u(s));
        for(let f in s)!Object.prototype.hasOwnProperty.call(s, f) || i.has(f) || (l.has(f) ? D[f] = o(s[f], s) : D[f] = s[f]);
        let p = r(s, D, a);
        if (p !== null) return p ?? D;
    }
}
var Gn = Ti;
var ki = (e, t, r)=>{
    if (!(e && t == null)) {
        if (t.findLastIndex) return t.findLastIndex(r);
        for(let n = t.length - 1; n >= 0; n--){
            let u = t[n];
            if (r(u, n, t)) return n;
        }
        return -1;
    }
}, Kn = ki;
var Li = ({ parser: e })=>e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify";
function Pi(e, t) {
    let r = [
        e.node,
        ...e.parentNodes
    ], n = new Set([
        t.node,
        ...t.parentNodes
    ]);
    return r.find((u)=>Xn.has(u.type) && n.has(u));
}
function Jn(e) {
    let t = Kn(!1, e, (r)=>r.type !== "Program" && r.type !== "File");
    return t === -1 ? e : e.slice(0, t + 1);
}
function Ii(e, t, { locStart: r, locEnd: n }) {
    let u = e.node, i = t.node;
    if (u === i) return {
        startNode: u,
        endNode: i
    };
    let o = r(e.node);
    for (let a of Jn(t.parentNodes))if (r(a) >= o) i = a;
    else break;
    let s = n(t.node);
    for (let a of Jn(e.parentNodes)){
        if (n(a) <= s) u = a;
        else break;
        if (u === i) break;
    }
    return {
        startNode: u,
        endNode: i
    };
}
function ir(e, t, r, n, u = [], i) {
    let { locStart: o, locEnd: s } = r, a = o(e), D = s(e);
    if (!(t > D || t < a || i === "rangeEnd" && t === a || i === "rangeStart" && t === D)) {
        for (let l of it(e, r)){
            let p = ir(l, t, r, n, [
                e,
                ...u
            ], i);
            if (p) return p;
        }
        if (!n || n(e, u[0])) return {
            node: e,
            parentNodes: u
        };
    }
}
function Ri(e, t) {
    return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
var Xn = new Set([
    "JsonRoot",
    "ObjectExpression",
    "ArrayExpression",
    "StringLiteral",
    "NumericLiteral",
    "BooleanLiteral",
    "NullLiteral",
    "UnaryExpression",
    "TemplateLiteral"
]), Yi = new Set([
    "OperationDefinition",
    "FragmentDefinition",
    "VariableDefinition",
    "TypeExtensionDefinition",
    "ObjectTypeDefinition",
    "FieldDefinition",
    "DirectiveDefinition",
    "EnumTypeDefinition",
    "EnumValueDefinition",
    "InputValueDefinition",
    "InputObjectTypeDefinition",
    "SchemaDefinition",
    "OperationTypeDefinition",
    "InterfaceTypeDefinition",
    "UnionTypeDefinition",
    "ScalarTypeDefinition"
]);
function qn(e, t, r) {
    if (!t) return !1;
    switch(e.parser){
        case "flow":
        case "babel":
        case "babel-flow":
        case "babel-ts":
        case "typescript":
        case "acorn":
        case "espree":
        case "meriyah":
        case "__babel_estree":
            return Ri(t.type, r == null ? void 0 : r.type);
        case "json":
        case "json5":
        case "jsonc":
        case "json-stringify":
            return Xn.has(t.type);
        case "graphql":
            return Yi.has(t.kind);
        case "vue":
            return t.tag !== "root";
    }
    return !1;
}
function Qn(e, t, r) {
    let { rangeStart: n, rangeEnd: u, locStart: i, locEnd: o } = t;
    Pe.ok(u > n);
    let s = e.slice(n, u).search(/\S/u), a = s === -1;
    if (!a) for(n += s; u > n && !/\S/u.test(e[u - 1]); --u);
    let D = ir(r, n, t, (d, c)=>qn(t, d, c), [], "rangeStart"), l = a ? D : ir(r, u, t, (d)=>qn(t, d), [], "rangeEnd");
    if (!D || !l) return {
        rangeStart: 0,
        rangeEnd: 0
    };
    let p, f;
    if (Li(t)) {
        let d = Pi(D, l);
        p = d, f = d;
    } else ({ startNode: p, endNode: f } = Ii(D, l, t));
    return {
        rangeStart: Math.min(i(p), i(f)),
        rangeEnd: Math.max(o(p), o(f))
    };
}
var ru = "\uFEFF", Zn = Symbol("cursor");
async function nu(e, t, r = 0) {
    if (!e || e.trim().length === 0) return {
        formatted: "",
        cursorOffset: -1,
        comments: []
    };
    let { ast: n, text: u } = await fe(e, t);
    t.cursorOffset >= 0 && (t = {
        ...t,
        ...zn(n, t)
    });
    let i = await He(n, t, r);
    r > 0 && (i = Qe([
        K,
        i
    ], r, t.tabWidth));
    let o = Ee(i, t);
    if (r > 0) {
        let a = o.formatted.trim();
        o.cursorNodeStart !== void 0 && (o.cursorNodeStart -= o.formatted.indexOf(a), o.cursorNodeStart < 0 && (o.cursorNodeStart = 0, o.cursorNodeText = o.cursorNodeText.trimStart()), o.cursorNodeStart + o.cursorNodeText.length > a.length && (o.cursorNodeText = o.cursorNodeText.trimEnd())), o.formatted = a + xe(t.endOfLine);
    }
    let s = t[Symbol.for("comments")];
    if (t.cursorOffset >= 0) {
        let a, D, l, p;
        if ((t.cursorNode || t.nodeBeforeCursor || t.nodeAfterCursor) && o.cursorNodeText) if (l = o.cursorNodeStart, p = o.cursorNodeText, t.cursorNode) a = t.locStart(t.cursorNode), D = u.slice(a, t.locEnd(t.cursorNode));
        else {
            if (!t.nodeBeforeCursor && !t.nodeAfterCursor) throw new Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
            a = t.nodeBeforeCursor ? t.locEnd(t.nodeBeforeCursor) : 0;
            let h = t.nodeAfterCursor ? t.locStart(t.nodeAfterCursor) : u.length;
            D = u.slice(a, h);
        }
        else a = 0, D = u, l = 0, p = o.formatted;
        let f = t.cursorOffset - a;
        if (D === p) return {
            formatted: o.formatted,
            cursorOffset: l + f,
            comments: s
        };
        let d = D.split("");
        d.splice(f, 0, Zn);
        let c = p.split(""), F = gr(d, c), m = l;
        for (let h of F)if (h.removed) {
            if (h.value.includes(Zn)) break;
        } else m += h.count;
        return {
            formatted: o.formatted,
            cursorOffset: m,
            comments: s
        };
    }
    return {
        formatted: o.formatted,
        cursorOffset: -1,
        comments: s
    };
}
async function ji(e, t) {
    let { ast: r, text: n } = await fe(e, t), { rangeStart: u, rangeEnd: i } = Qn(n, t, r), o = n.slice(u, i), s = Math.min(u, n.lastIndexOf(`
`, u) + 1), a = n.slice(s, u).match(/^\s*/u)[0], D = Ce(a, t.tabWidth), l = await nu(o, {
        ...t,
        rangeStart: 0,
        rangeEnd: Number.POSITIVE_INFINITY,
        cursorOffset: t.cursorOffset > u && t.cursorOffset <= i ? t.cursorOffset - u : -1,
        endOfLine: "lf"
    }, D), p = l.formatted.trimEnd(), { cursorOffset: f } = t;
    f > i ? f += p.length - o.length : l.cursorOffset >= 0 && (f = l.cursorOffset + u);
    let d = n.slice(0, u) + p + n.slice(i);
    if (t.endOfLine !== "lf") {
        let c = xe(t.endOfLine);
        f >= 0 && c === `\r
` && (f += Ot(d.slice(0, f), `
`)), d = ne(!1, d, `
`, c);
    }
    return {
        formatted: d,
        cursorOffset: f,
        comments: l.comments
    };
}
function or(e, t, r) {
    return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? r : t;
}
function eu(e, t) {
    let { cursorOffset: r, rangeStart: n, rangeEnd: u } = t;
    return r = or(e, r, -1), n = or(e, n, 0), u = or(e, u, e.length), {
        ...t,
        cursorOffset: r,
        rangeStart: n,
        rangeEnd: u
    };
}
function uu(e, t) {
    let { cursorOffset: r, rangeStart: n, rangeEnd: u, endOfLine: i } = eu(e, t), o = e.charAt(0) === ru;
    if (o && (e = e.slice(1), r--, n--, u--), i === "auto" && (i = yr(e)), e.includes("\r")) {
        let s = (a)=>Ot(e.slice(0, Math.max(a, 0)), `\r
`);
        r -= s(r), n -= s(n), u -= s(u), e = Ar(e);
    }
    return {
        hasBOM: o,
        text: e,
        options: eu(e, {
            ...t,
            cursorOffset: r,
            rangeStart: n,
            rangeEnd: u,
            endOfLine: i
        })
    };
}
async function tu(e, t) {
    let r = await Ct(t);
    return !r.hasPragma || r.hasPragma(e);
}
async function sr(e, t) {
    let { hasBOM: r, text: n, options: u } = uu(e, await se(t));
    if (u.rangeStart >= u.rangeEnd && n !== "" || u.requirePragma && !await tu(n, u)) return {
        formatted: e,
        cursorOffset: t.cursorOffset,
        comments: []
    };
    let i;
    return u.rangeStart > 0 || u.rangeEnd < n.length ? i = await ji(n, u) : (!u.requirePragma && u.insertPragma && u.printer.insertPragma && !await tu(n, u) && (n = u.printer.insertPragma(n)), i = await nu(n, u)), r && (i.formatted = ru + i.formatted, i.cursorOffset >= 0 && i.cursorOffset++), i;
}
async function iu(e, t, r) {
    let { text: n, options: u } = uu(e, await se(t)), i = await fe(n, u);
    return r && (r.preprocessForPrint && (i.ast = await ur(i.ast, u)), r.massage && (i.ast = Gn(i.ast, u))), i;
}
async function ou(e, t) {
    t = await se(t);
    let r = await He(e, t);
    return Ee(r, t);
}
async function su(e, t) {
    let r = Ir(e), { formatted: n } = await sr(r, {
        ...t,
        parser: "__js_expression"
    });
    return n;
}
async function au(e, t) {
    t = await se(t);
    let { ast: r } = await fe(e, t);
    return He(r, t);
}
async function Du(e, t) {
    return Ee(e, await se(t));
}
var ar = {};
Bt(ar, {
    builders: ()=>Wi,
    printer: ()=>$i,
    utils: ()=>Mi
});
var Wi = {
    join: Se,
    line: qe,
    softline: Lr,
    hardline: K,
    literalline: Xe,
    group: Tt,
    conditionalGroup: br,
    fill: Nr,
    lineSuffix: Ne,
    lineSuffixBoundary: Tr,
    cursor: Z,
    breakParent: Fe,
    ifBreak: Or,
    trim: kr,
    indent: le,
    indentIfBreak: Sr,
    align: De,
    addAlignmentToDoc: Qe,
    markAsRoot: _r,
    dedentToRoot: wr,
    dedent: xr,
    hardlineWithoutBreakParent: Oe,
    literallineWithoutBreakParent: kt,
    label: Pr,
    concat: (e)=>e
}, $i = {
    printDocToString: Ee
}, Mi = {
    willBreak: Mr,
    traverseDoc: be,
    findInDoc: Ze,
    mapDoc: Le,
    removeLines: Vr,
    stripTrailingHardline: et,
    replaceEndOfLine: zr,
    canBreak: Gr
};
var lu = "3.4.2";
var lr = {};
Bt(lr, {
    addDanglingComment: ()=>re,
    addLeadingComment: ()=>ue,
    addTrailingComment: ()=>ie,
    getAlignmentSize: ()=>Ce,
    getIndentSize: ()=>cu,
    getMaxContinuousCount: ()=>fu,
    getNextNonSpaceNonCommentCharacter: ()=>du,
    getNextNonSpaceNonCommentCharacterIndex: ()=>ro,
    getPreferredQuote: ()=>Fu,
    getStringWidth: ()=>Te,
    hasNewline: ()=>$,
    hasNewlineInRange: ()=>mu,
    hasSpaces: ()=>hu,
    isNextLineEmpty: ()=>oo,
    isNextLineEmptyAfterIndex: ()=>gt,
    isPreviousLineEmpty: ()=>uo,
    makeString: ()=>Eu,
    skip: ()=>ye,
    skipEverythingButNewLine: ()=>ut,
    skipInlineComment: ()=>ve,
    skipNewline: ()=>W,
    skipSpaces: ()=>S,
    skipToLineEnd: ()=>nt,
    skipTrailingComment: ()=>Be,
    skipWhitespace: ()=>en
});
function Ui(e, t) {
    if (t === !1) return !1;
    if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
        for(let r = t + 2; r < e.length; ++r)if (e.charAt(r) === "*" && e.charAt(r + 1) === "/") return r + 2;
    }
    return t;
}
var ve = Ui;
function Vi(e, t) {
    return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? ut(e, t) : t;
}
var Be = Vi;
function zi(e, t) {
    let r = null, n = t;
    for(; n !== r;)r = n, n = S(e, n), n = ve(e, n), n = Be(e, n), n = W(e, n);
    return n;
}
var We = zi;
function Gi(e, t) {
    let r = null, n = t;
    for(; n !== r;)r = n, n = nt(e, n), n = ve(e, n), n = S(e, n);
    return n = Be(e, n), n = W(e, n), n !== !1 && $(e, n);
}
var gt = Gi;
function Ki(e, t) {
    let r = e.lastIndexOf(`
`);
    return r === -1 ? 0 : Ce(e.slice(r + 1).match(/^[\t ]*/u)[0], t);
}
var cu = Ki;
function Dr(e) {
    if (typeof e != "string") throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Ji(e, t) {
    let r = e.match(new RegExp(`(${Dr(t)})+`, "gu"));
    return r === null ? 0 : r.reduce((n, u)=>Math.max(n, u.length / t.length), 0);
}
var fu = Ji;
function qi(e, t) {
    let r = We(e, t);
    return r === !1 ? "" : e.charAt(r);
}
var du = qi;
var yt = "'", pu = '"';
function Xi(e, t) {
    let r = t === !0 || t === yt ? yt : pu, n = r === yt ? pu : yt, u = 0, i = 0;
    for (let o of e)o === r ? u++ : o === n && i++;
    return u > i ? n : r;
}
var Fu = Xi;
function Qi(e, t, r) {
    for(let n = t; n < r; ++n)if (e.charAt(n) === `
`) return !0;
    return !1;
}
var mu = Qi;
function Zi(e, t, r = {}) {
    return S(e, r.backwards ? t - 1 : t, r) !== t;
}
var hu = Zi;
function eo(e, t, r) {
    let n = t === '"' ? "'" : '"', i = ne(!1, e, /\\(.)|(["'])/gsu, (o, s, a)=>s === n ? s : a === t ? "\\" + a : a || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s) ? s : "\\" + s));
    return t + i + t;
}
var Eu = eo;
function to(e, t, r) {
    return We(e, r(t));
}
function ro(e, t) {
    return arguments.length === 2 || typeof t == "number" ? We(e, t) : to(...arguments);
}
function no(e, t, r) {
    return Ie(e, r(t));
}
function uo(e, t) {
    return arguments.length === 2 || typeof t == "number" ? Ie(e, t) : no(...arguments);
}
function io(e, t, r) {
    return gt(e, r(t));
}
function oo(e, t) {
    return arguments.length === 2 || typeof t == "number" ? gt(e, t) : io(...arguments);
}
function de(e, t = 1) {
    return async (...r)=>{
        let n = r[t] ?? {}, u = n.plugins ?? [];
        return r[t] = {
            ...n,
            plugins: Array.isArray(u) ? u : Object.values(u)
        }, e(...r);
    };
}
var Cu = de(sr);
async function gu(e, t) {
    let { formatted: r } = await Cu(e, {
        ...t,
        cursorOffset: -1
    });
    return r;
}
async function so(e, t) {
    return await gu(e, t) === e;
}
var ao = de(ot, 0), Do = {
    parse: de(iu),
    formatAST: de(ou),
    formatDoc: de(su),
    printToDoc: de(au),
    printDocToString: de(Du)
};
var lc = cr;
;
}}),
"[project]/node_modules/@react-email/components/node_modules/prettier/plugins/html.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Nh),
    "languages": (()=>As),
    "options": (()=>vs),
    "parsers": (()=>Gr),
    "printers": (()=>Io)
});
var ri = Object.defineProperty;
var Xr = (t)=>{
    throw TypeError(t);
};
var Jr = (t, e)=>{
    for(var r in e)ri(t, r, {
        get: e[r],
        enumerable: !0
    });
};
var Zr = (t, e, r)=>e.has(t) || Xr("Cannot " + r);
var K = (t, e, r)=>(Zr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), en = (t, e, r)=>e.has(t) ? Xr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), tn = (t, e, r, n)=>(Zr(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
var Yr = {};
Jr(Yr, {
    languages: ()=>As,
    options: ()=>vs,
    parsers: ()=>Gr,
    printers: ()=>Io
});
var ni = (t, e, r, n)=>{
    if (!(t && e == null)) return e.replaceAll ? e.replaceAll(r, n) : r.global ? e.replace(r, n) : e.split(r).join(n);
}, w = ni;
var Ve = "string", Ue = "array", We = "cursor", De = "indent", ve = "align", ze = "trim", ye = "group", we = "fill", be = "if-break", Te = "indent-if-break", Ge = "line-suffix", Ye = "line-suffix-boundary", Q = "line", je = "label", xe = "break-parent", St = new Set([
    We,
    De,
    ve,
    ze,
    ye,
    we,
    be,
    Te,
    Ge,
    Ye,
    Q,
    je,
    xe
]);
function si(t) {
    if (typeof t == "string") return Ve;
    if (Array.isArray(t)) return Ue;
    if (!t) return;
    let { type: e } = t;
    if (St.has(e)) return e;
}
var Ke = si;
var ii = (t)=>new Intl.ListFormat("en-US", {
        type: "disjunction"
    }).format(t);
function ai(t) {
    let e = t === null ? "null" : typeof t;
    if (e !== "string" && e !== "object") return `Unexpected doc '${e}', 
Expected it to be 'string' or 'object'.`;
    if (Ke(t)) throw new Error("doc is valid.");
    let r = Object.prototype.toString.call(t);
    if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
    let n = ii([
        ...St
    ].map((s)=>`'${s}'`));
    return `Unexpected doc.type '${t.type}'.
Expected it to be ${n}.`;
}
var or = class extends Error {
    name = "InvalidDocError";
    constructor(e){
        super(ai(e)), this.doc = e;
    }
}, ur = or;
var rn = ()=>{}, re = rn, _t = rn;
function k(t) {
    return re(t), {
        type: De,
        contents: t
    };
}
function nn(t, e) {
    return re(e), {
        type: ve,
        contents: e,
        n: t
    };
}
function _(t, e = {}) {
    return re(t), _t(e.expandedStates, !0), {
        type: ye,
        id: e.id,
        contents: t,
        break: !!e.shouldBreak,
        expandedStates: e.expandedStates
    };
}
function sn(t) {
    return nn(Number.NEGATIVE_INFINITY, t);
}
function an(t) {
    return nn({
        type: "root"
    }, t);
}
function Et(t) {
    return _t(t), {
        type: we,
        parts: t
    };
}
function le(t, e = "", r = {}) {
    return re(t), e !== "" && re(e), {
        type: be,
        breakContents: t,
        flatContents: e,
        groupId: r.groupId
    };
}
function on(t, e) {
    return re(t), {
        type: Te,
        contents: t,
        groupId: e.groupId,
        negate: e.negate
    };
}
var ne = {
    type: xe
};
var oi = {
    type: Q,
    hard: !0
}, ui = {
    type: Q,
    hard: !0,
    literal: !0
}, E = {
    type: Q
}, v = {
    type: Q,
    soft: !0
}, S = [
    oi,
    ne
], un = [
    ui,
    ne
];
function q(t, e) {
    re(t), _t(e);
    let r = [];
    for(let n = 0; n < e.length; n++)n !== 0 && r.push(t), r.push(e[n]);
    return r;
}
var li = (t, e, r)=>{
    if (!(t && e == null)) return Array.isArray(e) || typeof e == "string" ? e[r < 0 ? e.length + r : r] : e.at(r);
}, se = li;
function lr(t, e) {
    if (typeof t == "string") return e(t);
    let r = new Map;
    return n(t);
    "TURBOPACK unreachable";
    function n(i) {
        if (r.has(i)) return r.get(i);
        let a = s(i);
        return r.set(i, a), a;
    }
    function s(i) {
        switch(Ke(i)){
            case Ue:
                return e(i.map(n));
            case we:
                return e({
                    ...i,
                    parts: i.parts.map(n)
                });
            case be:
                return e({
                    ...i,
                    breakContents: n(i.breakContents),
                    flatContents: n(i.flatContents)
                });
            case ye:
                {
                    let { expandedStates: a, contents: o } = i;
                    return a ? (a = a.map(n), o = a[0]) : o = n(o), e({
                        ...i,
                        contents: o,
                        expandedStates: a
                    });
                }
            case ve:
            case De:
            case Te:
            case je:
            case Ge:
                return e({
                    ...i,
                    contents: n(i.contents)
                });
            case Ve:
            case We:
            case ze:
            case Ye:
            case Q:
            case xe:
                return e(i);
            default:
                throw new ur(i);
        }
    }
}
function B(t, e = un) {
    return lr(t, (r)=>typeof r == "string" ? q(e, r.split(`
`)) : r);
}
var At = "'", ln = '"';
function ci(t, e) {
    let r = e === !0 || e === At ? At : ln, n = r === At ? ln : At, s = 0, i = 0;
    for (let a of t)a === r ? s++ : a === n && i++;
    return s > i ? n : r;
}
var cn = ci;
function cr(t) {
    if (typeof t != "string") throw new TypeError("Expected a string");
    return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var H, pr = class {
    constructor(e){
        en(this, H);
        tn(this, H, new Set(e));
    }
    getLeadingWhitespaceCount(e) {
        let r = K(this, H), n = 0;
        for(let s = 0; s < e.length && r.has(e.charAt(s)); s++)n++;
        return n;
    }
    getTrailingWhitespaceCount(e) {
        let r = K(this, H), n = 0;
        for(let s = e.length - 1; s >= 0 && r.has(e.charAt(s)); s--)n++;
        return n;
    }
    getLeadingWhitespace(e) {
        let r = this.getLeadingWhitespaceCount(e);
        return e.slice(0, r);
    }
    getTrailingWhitespace(e) {
        let r = this.getTrailingWhitespaceCount(e);
        return e.slice(e.length - r);
    }
    hasLeadingWhitespace(e) {
        return K(this, H).has(e.charAt(0));
    }
    hasTrailingWhitespace(e) {
        return K(this, H).has(se(!1, e, -1));
    }
    trimStart(e) {
        let r = this.getLeadingWhitespaceCount(e);
        return e.slice(r);
    }
    trimEnd(e) {
        let r = this.getTrailingWhitespaceCount(e);
        return e.slice(0, e.length - r);
    }
    trim(e) {
        return this.trimEnd(this.trimStart(e));
    }
    split(e, r = !1) {
        let n = `[${cr([
            ...K(this, H)
        ].join(""))}]+`, s = new RegExp(r ? `(${n})` : n, "u");
        return e.split(s);
    }
    hasWhitespaceCharacter(e) {
        let r = K(this, H);
        return Array.prototype.some.call(e, (n)=>r.has(n));
    }
    hasNonWhitespaceCharacter(e) {
        let r = K(this, H);
        return Array.prototype.some.call(e, (n)=>!r.has(n));
    }
    isWhitespaceOnly(e) {
        let r = K(this, H);
        return Array.prototype.every.call(e, (n)=>r.has(n));
    }
};
H = new WeakMap;
var pn = pr;
var pi = [
    "	",
    `
`,
    "\f",
    "\r",
    " "
], hi = new pn(pi), N = hi;
var hr = class extends Error {
    name = "UnexpectedNodeError";
    constructor(e, r, n = "type"){
        super(`Unexpected ${r} node ${n}: ${JSON.stringify(e[n])}.`), this.node = e;
    }
}, hn = hr;
function mi(t) {
    return (t == null ? void 0 : t.type) === "front-matter";
}
var ke = mi;
var fi = new Set([
    "sourceSpan",
    "startSourceSpan",
    "endSourceSpan",
    "nameSpan",
    "valueSpan",
    "keySpan",
    "tagDefinition",
    "tokens",
    "valueTokens",
    "switchValueSourceSpan",
    "expSourceSpan",
    "valueSourceSpan"
]), di = new Set([
    "if",
    "else if",
    "for",
    "switch",
    "case"
]);
function mn(t, e) {
    var r;
    if (t.type === "text" || t.type === "comment" || ke(t) || t.type === "yaml" || t.type === "toml") return null;
    if (t.type === "attribute" && delete e.value, t.type === "docType" && delete e.value, t.type === "angularControlFlowBlock" && (r = t.parameters) != null && r.children) for (let n of e.parameters.children)di.has(t.name) ? delete n.expression : n.expression = n.expression.trim();
    t.type === "angularIcuExpression" && (e.switchValue = t.switchValue.trim()), t.type === "angularLetDeclarationInitializer" && delete e.value;
}
mn.ignoredProperties = fi;
var fn = mn;
async function gi(t, e) {
    if (t.language === "yaml") {
        let r = t.value.trim(), n = r ? await e(r, {
            parser: "yaml"
        }) : "";
        return an([
            t.startDelimiter,
            t.explicitLanguage,
            S,
            n,
            n ? S : "",
            t.endDelimiter
        ]);
    }
}
var dn = gi;
function ce(t, e = !0) {
    return [
        k([
            v,
            t
        ]),
        e ? v : ""
    ];
}
function Y(t, e) {
    let r = t.type === "NGRoot" ? t.node.type === "NGMicrosyntax" && t.node.body.length === 1 && t.node.body[0].type === "NGMicrosyntaxExpression" ? t.node.body[0].expression : t.node : t.type === "JsExpressionRoot" ? t.node : t;
    return r && (r.type === "ObjectExpression" || r.type === "ArrayExpression" || (e.parser === "__vue_expression" || e.parser === "__vue_ts_expression") && (r.type === "TemplateLiteral" || r.type === "StringLiteral"));
}
async function T(t, e, r, n) {
    r = {
        __isInHtmlAttribute: !0,
        __embeddedInHtml: !0,
        ...r
    };
    let s = !0;
    n && (r.__onHtmlBindingRoot = (a, o)=>{
        s = n(a, o);
    });
    let i = await e(t, r, e);
    return s ? _(i) : ce(i);
}
function Ci(t, e, r, n) {
    let { node: s } = r, i = n.originalText.slice(s.sourceSpan.start.offset, s.sourceSpan.end.offset);
    return /^\s*$/u.test(i) ? "" : T(i, t, {
        parser: "__ng_directive",
        __isInHtmlAttribute: !1
    }, Y);
}
var gn = Ci;
var Si = (t)=>String(t).split(/[/\\]/u).pop();
function Cn(t, e) {
    if (!e) return;
    let r = Si(e).toLowerCase();
    return t.find(({ filenames: n })=>n == null ? void 0 : n.some((s)=>s.toLowerCase() === r)) ?? t.find(({ extensions: n })=>n == null ? void 0 : n.some((s)=>r.endsWith(s)));
}
function _i(t, e) {
    if (e) return t.find(({ name: r })=>r.toLowerCase() === e) ?? t.find(({ aliases: r })=>r == null ? void 0 : r.includes(e)) ?? t.find(({ extensions: r })=>r == null ? void 0 : r.includes(`.${e}`));
}
function Ei(t, e) {
    let r = t.plugins.flatMap((s)=>s.languages ?? []), n = _i(r, e.language) ?? Cn(r, e.physicalFile) ?? Cn(r, e.file) ?? (e.physicalFile, void 0);
    return n == null ? void 0 : n.parsers[0];
}
var Be = Ei;
var Sn = "inline", _n = {
    area: "none",
    base: "none",
    basefont: "none",
    datalist: "none",
    head: "none",
    link: "none",
    meta: "none",
    noembed: "none",
    noframes: "none",
    param: "block",
    rp: "none",
    script: "block",
    style: "none",
    template: "inline",
    title: "none",
    html: "block",
    body: "block",
    address: "block",
    blockquote: "block",
    center: "block",
    dialog: "block",
    div: "block",
    figure: "block",
    figcaption: "block",
    footer: "block",
    form: "block",
    header: "block",
    hr: "block",
    legend: "block",
    listing: "block",
    main: "block",
    p: "block",
    plaintext: "block",
    pre: "block",
    search: "block",
    xmp: "block",
    slot: "contents",
    ruby: "ruby",
    rt: "ruby-text",
    article: "block",
    aside: "block",
    h1: "block",
    h2: "block",
    h3: "block",
    h4: "block",
    h5: "block",
    h6: "block",
    hgroup: "block",
    nav: "block",
    section: "block",
    dir: "block",
    dd: "block",
    dl: "block",
    dt: "block",
    menu: "block",
    ol: "block",
    ul: "block",
    li: "list-item",
    table: "table",
    caption: "table-caption",
    colgroup: "table-column-group",
    col: "table-column",
    thead: "table-header-group",
    tbody: "table-row-group",
    tfoot: "table-footer-group",
    tr: "table-row",
    td: "table-cell",
    th: "table-cell",
    input: "inline-block",
    button: "inline-block",
    fieldset: "block",
    details: "block",
    summary: "block",
    marquee: "inline-block",
    source: "block",
    track: "block",
    meter: "inline-block",
    progress: "inline-block",
    object: "inline-block",
    video: "inline-block",
    audio: "inline-block",
    select: "inline-block",
    option: "block",
    optgroup: "block"
}, En = "normal", An = {
    listing: "pre",
    plaintext: "pre",
    pre: "pre",
    xmp: "pre",
    nobr: "nowrap",
    table: "initial",
    textarea: "pre-wrap"
};
function Ai(t) {
    return t.type === "element" && !t.hasExplicitNamespace && ![
        "html",
        "svg"
    ].includes(t.namespace);
}
var pe = Ai;
var Di = (t)=>w(!1, t, /^[\t\f\r ]*\n/gu, ""), mr = (t)=>Di(N.trimEnd(t)), Dn = (t)=>{
    let e = t, r = N.getLeadingWhitespace(e);
    r && (e = e.slice(r.length));
    let n = N.getTrailingWhitespace(e);
    return n && (e = e.slice(0, -n.length)), {
        leadingWhitespace: r,
        trailingWhitespace: n,
        text: e
    };
};
function Dt(t, e) {
    return !!(t.type === "ieConditionalComment" && t.lastChild && !t.lastChild.isSelfClosing && !t.lastChild.endSourceSpan || t.type === "ieConditionalComment" && !t.complete || he(t) && t.children.some((r)=>r.type !== "text" && r.type !== "interpolation") || wt(t, e) && !U(t) && t.type !== "interpolation");
}
function me(t) {
    return t.type === "attribute" || !t.parent || !t.prev ? !1 : vi(t.prev);
}
function vi(t) {
    return t.type === "comment" && t.value.trim() === "prettier-ignore";
}
function O(t) {
    return t.type === "text" || t.type === "comment";
}
function U(t) {
    return t.type === "element" && (t.fullName === "script" || t.fullName === "style" || t.fullName === "svg:style" || t.fullName === "svg:script" || pe(t) && (t.name === "script" || t.name === "style"));
}
function vn(t) {
    return t.children && !U(t);
}
function yn(t) {
    return U(t) || t.type === "interpolation" || fr(t);
}
function fr(t) {
    return In(t).startsWith("pre");
}
function wn(t, e) {
    var s, i;
    let r = n();
    if (r && !t.prev && (i = (s = t.parent) == null ? void 0 : s.tagDefinition) != null && i.ignoreFirstLf) return t.type === "interpolation";
    return r;
    "TURBOPACK unreachable";
    function n() {
        return ke(t) || t.type === "angularControlFlowBlock" ? !1 : (t.type === "text" || t.type === "interpolation") && t.prev && (t.prev.type === "text" || t.prev.type === "interpolation") ? !0 : !t.parent || t.parent.cssDisplay === "none" ? !1 : he(t.parent) ? !0 : !(!t.prev && (t.parent.type === "root" || he(t) && t.parent || U(t.parent) || Je(t.parent, e) || !ki(t.parent.cssDisplay)) || t.prev && !Fi(t.prev.cssDisplay));
    }
}
function bn(t, e) {
    return ke(t) || t.type === "angularControlFlowBlock" ? !1 : (t.type === "text" || t.type === "interpolation") && t.next && (t.next.type === "text" || t.next.type === "interpolation") ? !0 : !t.parent || t.parent.cssDisplay === "none" ? !1 : he(t.parent) ? !0 : !(!t.next && (t.parent.type === "root" || he(t) && t.parent || U(t.parent) || Je(t.parent, e) || !Bi(t.parent.cssDisplay)) || t.next && !Li(t.next.cssDisplay));
}
function Tn(t) {
    return Ni(t.cssDisplay) && !U(t);
}
function Qe(t) {
    return ke(t) || t.next && t.sourceSpan.end && t.sourceSpan.end.line + 1 < t.next.sourceSpan.start.line;
}
function xn(t) {
    return dr(t) || t.type === "element" && t.children.length > 0 && ([
        "body",
        "script",
        "style"
    ].includes(t.name) || t.children.some((e)=>wi(e))) || t.firstChild && t.firstChild === t.lastChild && t.firstChild.type !== "text" && Bn(t.firstChild) && (!t.lastChild.isTrailingSpaceSensitive || Ln(t.lastChild));
}
function dr(t) {
    return t.type === "element" && t.children.length > 0 && ([
        "html",
        "head",
        "ul",
        "ol",
        "select"
    ].includes(t.name) || t.cssDisplay.startsWith("table") && t.cssDisplay !== "table-cell");
}
function vt(t) {
    return Fn(t) || t.prev && yi(t.prev) || kn(t);
}
function yi(t) {
    return Fn(t) || t.type === "element" && t.fullName === "br" || kn(t);
}
function kn(t) {
    return Bn(t) && Ln(t);
}
function Bn(t) {
    return t.hasLeadingSpaces && (t.prev ? t.prev.sourceSpan.end.line < t.sourceSpan.start.line : t.parent.type === "root" || t.parent.startSourceSpan.end.line < t.sourceSpan.start.line);
}
function Ln(t) {
    return t.hasTrailingSpaces && (t.next ? t.next.sourceSpan.start.line > t.sourceSpan.end.line : t.parent.type === "root" || t.parent.endSourceSpan && t.parent.endSourceSpan.start.line > t.sourceSpan.end.line);
}
function Fn(t) {
    switch(t.type){
        case "ieConditionalComment":
        case "comment":
        case "directive":
            return !0;
        case "element":
            return [
                "script",
                "select"
            ].includes(t.name);
    }
    return !1;
}
function yt(t) {
    return t.lastChild ? yt(t.lastChild) : t;
}
function wi(t) {
    var e;
    return (e = t.children) == null ? void 0 : e.some((r)=>r.type !== "text");
}
function Nn(t) {
    if (t) switch(t){
        case "module":
        case "text/javascript":
        case "text/babel":
        case "application/javascript":
            return "babel";
        case "application/x-typescript":
            return "typescript";
        case "text/markdown":
            return "markdown";
        case "text/html":
            return "html";
        case "text/x-handlebars-template":
            return "glimmer";
        default:
            if (t.endsWith("json") || t.endsWith("importmap") || t === "speculationrules") return "json";
    }
}
function bi(t, e) {
    let { name: r, attrMap: n } = t;
    if (r !== "script" || Object.prototype.hasOwnProperty.call(n, "src")) return;
    let { type: s, lang: i } = t.attrMap;
    return !i && !s ? "babel" : Be(e, {
        language: i
    }) ?? Nn(s);
}
function Ti(t, e) {
    if (!wt(t, e)) return;
    let { attrMap: r } = t;
    if (Object.prototype.hasOwnProperty.call(r, "src")) return;
    let { type: n, lang: s } = r;
    return Be(e, {
        language: s
    }) ?? Nn(n);
}
function xi(t, e) {
    if (t.name !== "style") return;
    let { lang: r } = t.attrMap;
    return r ? Be(e, {
        language: r
    }) : "css";
}
function gr(t, e) {
    return bi(t, e) ?? xi(t, e) ?? Ti(t, e);
}
function Xe(t) {
    return t === "block" || t === "list-item" || t.startsWith("table");
}
function ki(t) {
    return !Xe(t) && t !== "inline-block";
}
function Bi(t) {
    return !Xe(t) && t !== "inline-block";
}
function Li(t) {
    return !Xe(t);
}
function Fi(t) {
    return !Xe(t);
}
function Ni(t) {
    return !Xe(t) && t !== "inline-block";
}
function he(t) {
    return In(t).startsWith("pre");
}
function Pi(t, e) {
    let r = t;
    for(; r;){
        if (e(r)) return !0;
        r = r.parent;
    }
    return !1;
}
function Pn(t, e) {
    var n;
    if (fe(t, e)) return "block";
    if (((n = t.prev) == null ? void 0 : n.type) === "comment") {
        let s = t.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);
        if (s) return s[1];
    }
    let r = !1;
    if (t.type === "element" && t.namespace === "svg") if (Pi(t, (s)=>s.fullName === "svg:foreignObject")) r = !0;
    else return t.name === "svg" ? "inline-block" : "block";
    switch(e.htmlWhitespaceSensitivity){
        case "strict":
            return "inline";
        case "ignore":
            return "block";
        default:
            return t.type === "element" && (!t.namespace || r || pe(t)) && _n[t.name] || Sn;
    }
}
function In(t) {
    return t.type === "element" && (!t.namespace || pe(t)) && An[t.name] || En;
}
function Ii(t) {
    let e = Number.POSITIVE_INFINITY;
    for (let r of t.split(`
`)){
        if (r.length === 0) continue;
        let n = N.getLeadingWhitespaceCount(r);
        if (n === 0) return 0;
        r.length !== n && n < e && (e = n);
    }
    return e === Number.POSITIVE_INFINITY ? 0 : e;
}
function Cr(t, e = Ii(t)) {
    return e === 0 ? t : t.split(`
`).map((r)=>r.slice(e)).join(`
`);
}
function Sr(t) {
    return w(!1, w(!1, t, "&apos;", "'"), "&quot;", '"');
}
function P(t) {
    return Sr(t.value);
}
var Ri = new Set([
    "template",
    "style",
    "script"
]);
function Je(t, e) {
    return fe(t, e) && !Ri.has(t.fullName);
}
function fe(t, e) {
    return e.parser === "vue" && t.type === "element" && t.parent.type === "root" && t.fullName.toLowerCase() !== "html";
}
function wt(t, e) {
    return fe(t, e) && (Je(t, e) || t.attrMap.lang && t.attrMap.lang !== "html");
}
function Rn(t) {
    let e = t.fullName;
    return e.charAt(0) === "#" || e === "slot-scope" || e === "v-slot" || e.startsWith("v-slot:");
}
function On(t, e) {
    let r = t.parent;
    if (!fe(r, e)) return !1;
    let n = r.fullName, s = t.fullName;
    return n === "script" && s === "setup" || n === "style" && s === "vars";
}
function bt(t, e = t.value) {
    return t.parent.isWhitespaceSensitive ? t.parent.isIndentationSensitive ? B(e) : B(Cr(mr(e)), S) : q(E, N.split(e));
}
function Tt(t, e) {
    return fe(t, e) && t.name === "script";
}
var _r = /\{\{(.+?)\}\}/su;
async function $n(t, e) {
    let r = [];
    for (let [n, s] of t.split(_r).entries())if (n % 2 === 0) r.push(B(s));
    else try {
        r.push(_([
            "{{",
            k([
                E,
                await T(s, e, {
                    parser: "__ng_interpolation",
                    __isInHtmlInterpolation: !0
                })
            ]),
            E,
            "}}"
        ]));
    } catch  {
        r.push("{{", B(s), "}}");
    }
    return r;
}
function Er({ parser: t }) {
    return (e, r, n)=>T(P(n.node), e, {
            parser: t
        }, Y);
}
var Oi = Er({
    parser: "__ng_action"
}), $i = Er({
    parser: "__ng_binding"
}), Mi = Er({
    parser: "__ng_directive"
});
function qi(t, e) {
    if (e.parser !== "angular") return;
    let { node: r } = t, n = r.fullName;
    if (n.startsWith("(") && n.endsWith(")") || n.startsWith("on-")) return Oi;
    if (n.startsWith("[") && n.endsWith("]") || /^bind(?:on)?-/u.test(n) || /^ng-(?:if|show|hide|class|style)$/u.test(n)) return $i;
    if (n.startsWith("*")) return Mi;
    let s = P(r);
    if (/^i18n(?:-.+)?$/u.test(n)) return ()=>ce(Et(bt(r, s.trim())), !s.includes("@@"));
    if (_r.test(s)) return (i)=>$n(s, i);
}
var Mn = qi;
function Hi(t, e) {
    let { node: r } = t, n = P(r);
    if (r.fullName === "class" && !e.parentParser && !n.includes("{{")) return ()=>n.trim().split(/\s+/u).join(" ");
}
var qn = Hi;
function Hn(t) {
    return t === "	" || t === `
` || t === "\f" || t === "\r" || t === " ";
}
var Vi = /^[ \t\n\r\u000c]+/, Ui = /^[, \t\n\r\u000c]+/, Wi = /^[^ \t\n\r\u000c]+/, zi = /[,]+$/, Vn = /^\d+$/, Gi = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
function Yi(t) {
    let e = t.length, r, n, s, i, a, o = 0, u;
    function p(C) {
        let A, D = C.exec(t.substring(o));
        if (D) return [A] = D, o += A.length, A;
    }
    let l = [];
    for(;;){
        if (p(Ui), o >= e) {
            if (l.length === 0) throw new Error("Must contain one or more image candidate strings.");
            return l;
        }
        u = o, r = p(Wi), n = [], r.slice(-1) === "," ? (r = r.replace(zi, ""), d()) : f();
    }
    function f() {
        for(p(Vi), s = "", i = "in descriptor";;){
            if (a = t.charAt(o), i === "in descriptor") if (Hn(a)) s && (n.push(s), s = "", i = "after descriptor");
            else if (a === ",") {
                o += 1, s && n.push(s), d();
                return;
            } else if (a === "(") s += a, i = "in parens";
            else if (a === "") {
                s && n.push(s), d();
                return;
            } else s += a;
            else if (i === "in parens") if (a === ")") s += a, i = "in descriptor";
            else if (a === "") {
                n.push(s), d();
                return;
            } else s += a;
            else if (i === "after descriptor" && !Hn(a)) if (a === "") {
                d();
                return;
            } else i = "in descriptor", o -= 1;
            o += 1;
        }
    }
    function d() {
        let C = !1, A, D, R, F, c = {}, g, y, M, x, V;
        for(F = 0; F < n.length; F++)g = n[F], y = g[g.length - 1], M = g.substring(0, g.length - 1), x = parseInt(M, 10), V = parseFloat(M), Vn.test(M) && y === "w" ? ((A || D) && (C = !0), x === 0 ? C = !0 : A = x) : Gi.test(M) && y === "x" ? ((A || D || R) && (C = !0), V < 0 ? C = !0 : D = V) : Vn.test(M) && y === "h" ? ((R || D) && (C = !0), x === 0 ? C = !0 : R = x) : C = !0;
        if (!C) c.source = {
            value: r,
            startOffset: u
        }, A && (c.width = {
            value: A
        }), D && (c.density = {
            value: D
        }), R && (c.height = {
            value: R
        }), l.push(c);
        else throw new Error(`Invalid srcset descriptor found in "${t}" at "${g}".`);
    }
}
var Un = Yi;
function ji(t) {
    if (t.node.fullName === "srcset" && (t.parent.fullName === "img" || t.parent.fullName === "source")) return ()=>Qi(P(t.node));
}
var Wn = {
    width: "w",
    height: "h",
    density: "x"
}, Ki = Object.keys(Wn);
function Qi(t) {
    let e = Un(t), r = Ki.filter((l)=>e.some((f)=>Object.prototype.hasOwnProperty.call(f, l)));
    if (r.length > 1) throw new Error("Mixed descriptor in srcset is not supported");
    let [n] = r, s = Wn[n], i = e.map((l)=>l.source.value), a = Math.max(...i.map((l)=>l.length)), o = e.map((l)=>l[n] ? String(l[n].value) : ""), u = o.map((l)=>{
        let f = l.indexOf(".");
        return f === -1 ? l.length : f;
    }), p = Math.max(...u);
    return ce(q([
        ",",
        E
    ], i.map((l, f)=>{
        let d = [
            l
        ], C = o[f];
        if (C) {
            let A = a - l.length + 1, D = p - u[f], R = " ".repeat(A + D);
            d.push(le(R, " "), C + s);
        }
        return d;
    })));
}
var zn = ji;
function Gn(t, e) {
    let { node: r } = t, n = P(t.node).trim();
    if (r.fullName === "style" && !e.parentParser && !n.includes("{{")) return async (s)=>ce(await s(n, {
            parser: "css",
            __isHTMLStyleAttribute: !0
        }));
}
var Ar = new WeakMap;
function Xi(t, e) {
    let { root: r } = t;
    return Ar.has(r) || Ar.set(r, r.children.some((n)=>Tt(n, e) && [
            "ts",
            "typescript"
        ].includes(n.attrMap.lang))), Ar.get(r);
}
var Le = Xi;
function Yn(t, e, r) {
    let { node: n } = r, s = P(n);
    return T(`type T<${s}> = any`, t, {
        parser: "babel-ts",
        __isEmbeddedTypescriptGenericParameters: !0
    }, Y);
}
function jn(t, e, { parseWithTs: r }) {
    return T(`function _(${t}) {}`, e, {
        parser: r ? "babel-ts" : "babel",
        __isVueBindings: !0
    });
}
async function Kn(t, e, r, n) {
    let s = P(r.node), { left: i, operator: a, right: o } = Ji(s), u = Le(r, n);
    return [
        _(await T(`function _(${i}) {}`, t, {
            parser: u ? "babel-ts" : "babel",
            __isVueForBindingLeft: !0
        })),
        " ",
        a,
        " ",
        await T(o, t, {
            parser: u ? "__ts_expression" : "__js_expression"
        })
    ];
}
function Ji(t) {
    let e = /(.*?)\s+(in|of)\s+(.*)/su, r = /,([^,\]}]*)(?:,([^,\]}]*))?$/u, n = /^\(|\)$/gu, s = t.match(e);
    if (!s) return;
    let i = {};
    if (i.for = s[3].trim(), !i.for) return;
    let a = w(!1, s[1].trim(), n, ""), o = a.match(r);
    o ? (i.alias = a.replace(r, ""), i.iterator1 = o[1].trim(), o[2] && (i.iterator2 = o[2].trim())) : i.alias = a;
    let u = [
        i.alias,
        i.iterator1,
        i.iterator2
    ];
    if (!u.some((p, l)=>!p && (l === 0 || u.slice(l + 1).some(Boolean)))) return {
        left: u.filter(Boolean).join(","),
        operator: s[2],
        right: i.for
    };
}
function Zi(t, e) {
    if (e.parser !== "vue") return;
    let { node: r } = t, n = r.fullName;
    if (n === "v-for") return Kn;
    if (n === "generic" && Tt(r.parent, e)) return Yn;
    let s = P(r), i = Le(t, e);
    if (Rn(r) || On(r, e)) return (a)=>jn(s, a, {
            parseWithTs: i
        });
    if (n.startsWith("@") || n.startsWith("v-on:")) return (a)=>ea(s, a, {
            parseWithTs: i
        });
    if (n.startsWith(":") || n.startsWith("v-bind:")) return (a)=>ta(s, a, {
            parseWithTs: i
        });
    if (n.startsWith("v-")) return (a)=>Qn(s, a, {
            parseWithTs: i
        });
}
async function ea(t, e, { parseWithTs: r }) {
    var n;
    try {
        return await Qn(t, e, {
            parseWithTs: r
        });
    } catch (s) {
        if (((n = s.cause) == null ? void 0 : n.code) !== "BABEL_PARSER_SYNTAX_ERROR") throw s;
    }
    return T(t, e, {
        parser: r ? "__vue_ts_event_binding" : "__vue_event_binding"
    }, Y);
}
function ta(t, e, { parseWithTs: r }) {
    return T(t, e, {
        parser: r ? "__vue_ts_expression" : "__vue_expression"
    }, Y);
}
function Qn(t, e, { parseWithTs: r }) {
    return T(t, e, {
        parser: r ? "__ts_expression" : "__js_expression"
    }, Y);
}
var Xn = Zi;
function ra(t, e) {
    let { node: r } = t;
    if (r.value) {
        if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(e.originalText.slice(r.valueSpan.start.offset, r.valueSpan.end.offset)) || e.parser === "lwc" && r.value.startsWith("{") && r.value.endsWith("}")) return [
            r.rawName,
            "=",
            r.value
        ];
        for (let n of [
            zn,
            Gn,
            qn,
            Xn,
            Mn
        ]){
            let s = n(t, e);
            if (s) return na(s);
        }
    }
}
function na(t) {
    return async (e, r, n, s)=>{
        let i = await t(e, r, n, s);
        if (i) return i = lr(i, (a)=>typeof a == "string" ? w(!1, a, '"', "&quot;") : a), [
            n.node.rawName,
            '="',
            _(i),
            '"'
        ];
    };
}
var Jn = ra;
var Zn = new Proxy(()=>{}, {
    get: ()=>Zn
}), Dr = Zn;
function sa(t) {
    return Array.isArray(t) && t.length > 0;
}
var Fe = sa;
function X(t) {
    return t.sourceSpan.start.offset;
}
function J(t) {
    return t.sourceSpan.end.offset;
}
function Ze(t, e) {
    return [
        t.isSelfClosing ? "" : ia(t, e),
        de(t, e)
    ];
}
function ia(t, e) {
    return t.lastChild && Se(t.lastChild) ? "" : [
        aa(t, e),
        xt(t, e)
    ];
}
function de(t, e) {
    return (t.next ? j(t.next) : Ce(t.parent)) ? "" : [
        ge(t, e),
        W(t, e)
    ];
}
function aa(t, e) {
    return Ce(t) ? ge(t.lastChild, e) : "";
}
function W(t, e) {
    return Se(t) ? xt(t.parent, e) : et(t) ? kt(t.next, e) : "";
}
function xt(t, e) {
    if (Dr(!t.isSelfClosing), ts(t, e)) return "";
    switch(t.type){
        case "ieConditionalComment":
            return "<!";
        case "element":
            if (t.hasHtmComponentClosingTag) return "<//";
        default:
            return `</${t.rawName}`;
    }
}
function ge(t, e) {
    if (ts(t, e)) return "";
    switch(t.type){
        case "ieConditionalComment":
        case "ieConditionalEndComment":
            return "[endif]-->";
        case "ieConditionalStartComment":
            return "]><!-->";
        case "interpolation":
            return "}}";
        case "angularIcuExpression":
            return "}";
        case "element":
            if (t.isSelfClosing) return "/>";
        default:
            return ">";
    }
}
function ts(t, e) {
    return !t.isSelfClosing && !t.endSourceSpan && (me(t) || Dt(t.parent, e));
}
function j(t) {
    return t.prev && t.prev.type !== "docType" && t.type !== "angularControlFlowBlock" && !O(t.prev) && t.isLeadingSpaceSensitive && !t.hasLeadingSpaces;
}
function Ce(t) {
    var e;
    return ((e = t.lastChild) == null ? void 0 : e.isTrailingSpaceSensitive) && !t.lastChild.hasTrailingSpaces && !O(yt(t.lastChild)) && !he(t);
}
function Se(t) {
    return !t.next && !t.hasTrailingSpaces && t.isTrailingSpaceSensitive && O(yt(t));
}
function et(t) {
    return t.next && !O(t.next) && O(t) && t.isTrailingSpaceSensitive && !t.hasTrailingSpaces;
}
function oa(t) {
    let e = t.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);
    return e ? e[1] ? e[1].split(/\s+/u) : !0 : !1;
}
function tt(t) {
    return !t.prev && t.isLeadingSpaceSensitive && !t.hasLeadingSpaces;
}
function ua(t, e, r) {
    var f;
    let { node: n } = t;
    if (!Fe(n.attrs)) return n.isSelfClosing ? " " : "";
    let s = ((f = n.prev) == null ? void 0 : f.type) === "comment" && oa(n.prev.value), i = typeof s == "boolean" ? ()=>s : Array.isArray(s) ? (d)=>s.includes(d.rawName) : ()=>!1, a = t.map(({ node: d })=>i(d) ? B(e.originalText.slice(X(d), J(d))) : r(), "attrs"), o = n.type === "element" && n.fullName === "script" && n.attrs.length === 1 && n.attrs[0].fullName === "src" && n.children.length === 0, p = e.singleAttributePerLine && n.attrs.length > 1 && !fe(n, e) ? S : E, l = [
        k([
            o ? " " : E,
            q(p, a)
        ])
    ];
    return n.firstChild && tt(n.firstChild) || n.isSelfClosing && Ce(n.parent) || o ? l.push(n.isSelfClosing ? " " : "") : l.push(e.bracketSameLine ? n.isSelfClosing ? " " : "" : n.isSelfClosing ? E : v), l;
}
function la(t) {
    return t.firstChild && tt(t.firstChild) ? "" : Bt(t);
}
function rt(t, e, r) {
    let { node: n } = t;
    return [
        _e(n, e),
        ua(t, e, r),
        n.isSelfClosing ? "" : la(n)
    ];
}
function _e(t, e) {
    return t.prev && et(t.prev) ? "" : [
        z(t, e),
        kt(t, e)
    ];
}
function z(t, e) {
    return tt(t) ? Bt(t.parent) : j(t) ? ge(t.prev, e) : "";
}
var es = "<!doctype";
function kt(t, e) {
    switch(t.type){
        case "ieConditionalComment":
        case "ieConditionalStartComment":
            return `<!--[if ${t.condition}`;
        case "ieConditionalEndComment":
            return "<!--<!";
        case "interpolation":
            return "{{";
        case "docType":
            {
                if (t.value === "html") {
                    let n = e.filepath ?? "";
                    if (/\.html?$/u.test(n)) return es;
                }
                return e.originalText.slice(X(t), J(t)).slice(0, es.length);
            }
        case "angularIcuExpression":
            return "{";
        case "element":
            if (t.condition) return `<!--[if ${t.condition}]><!--><${t.rawName}`;
        default:
            return `<${t.rawName}`;
    }
}
function Bt(t) {
    switch(Dr(!t.isSelfClosing), t.type){
        case "ieConditionalComment":
            return "]>";
        case "element":
            if (t.condition) return "><!--<![endif]-->";
        default:
            return ">";
    }
}
function ca(t, e) {
    if (!t.endSourceSpan) return "";
    let r = t.startSourceSpan.end.offset;
    t.firstChild && tt(t.firstChild) && (r -= Bt(t).length);
    let n = t.endSourceSpan.start.offset;
    return t.lastChild && Se(t.lastChild) ? n += xt(t, e).length : Ce(t) && (n -= ge(t.lastChild, e).length), e.originalText.slice(r, n);
}
var Lt = ca;
var pa = new Set([
    "if",
    "else if",
    "for",
    "switch",
    "case"
]);
function ha(t, e) {
    let { node: r } = t;
    switch(r.type){
        case "element":
            if (U(r) || r.type === "interpolation") return;
            if (!r.isSelfClosing && wt(r, e)) {
                let n = gr(r, e);
                return n ? async (s, i)=>{
                    let a = Lt(r, e), o = /^\s*$/u.test(a), u = "";
                    return o || (u = await s(mr(a), {
                        parser: n,
                        __embeddedInHtml: !0
                    }), o = u === ""), [
                        z(r, e),
                        _(rt(t, e, i)),
                        o ? "" : S,
                        u,
                        o ? "" : S,
                        Ze(r, e),
                        W(r, e)
                    ];
                } : void 0;
            }
            break;
        case "text":
            if (U(r.parent)) {
                let n = gr(r.parent, e);
                if (n) return async (s)=>{
                    let i = n === "markdown" ? Cr(r.value.replace(/^[^\S\n]*\n/u, "")) : r.value, a = {
                        parser: n,
                        __embeddedInHtml: !0
                    };
                    if (e.parser === "html" && n === "babel") {
                        let o = "script", { attrMap: u } = r.parent;
                        u && (u.type === "module" || u.type === "text/babel" && u["data-type"] === "module") && (o = "module"), a.__babelSourceType = o;
                    }
                    return [
                        ne,
                        z(r, e),
                        await s(i, a),
                        W(r, e)
                    ];
                };
            } else if (r.parent.type === "interpolation") return async (n)=>{
                let s = {
                    __isInHtmlInterpolation: !0,
                    __embeddedInHtml: !0
                };
                return e.parser === "angular" ? s.parser = "__ng_interpolation" : e.parser === "vue" ? s.parser = Le(t, e) ? "__vue_ts_expression" : "__vue_expression" : s.parser = "__js_expression", [
                    k([
                        E,
                        await n(r.value, s)
                    ]),
                    r.parent.next && j(r.parent.next) ? " " : E
                ];
            };
            break;
        case "attribute":
            return Jn(t, e);
        case "front-matter":
            return (n)=>dn(r, n);
        case "angularControlFlowBlockParameters":
            return pa.has(t.parent.name) ? gn : void 0;
        case "angularLetDeclarationInitializer":
            return (n)=>T(r.value, n, {
                    parser: "__ng_binding",
                    __isInHtmlAttribute: !1
                });
    }
}
var rs = ha;
var nt = null;
function st(t) {
    if (nt !== null && typeof nt.property) {
        let e = nt;
        return nt = st.prototype = null, e;
    }
    return nt = st.prototype = t ?? Object.create(null), new st;
}
var ma = 10;
for(let t = 0; t <= ma; t++)st();
function vr(t) {
    return st(t);
}
function fa(t, e = "type") {
    vr(t);
    function r(n) {
        let s = n[e], i = t[s];
        if (!Array.isArray(i)) throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), {
            node: n
        });
        return i;
    }
    return r;
}
var ns = fa;
var da = {
    "front-matter": [],
    root: [
        "children"
    ],
    element: [
        "attrs",
        "children"
    ],
    ieConditionalComment: [
        "children"
    ],
    ieConditionalStartComment: [],
    ieConditionalEndComment: [],
    interpolation: [
        "children"
    ],
    text: [
        "children"
    ],
    docType: [],
    comment: [],
    attribute: [],
    cdata: [],
    angularControlFlowBlock: [
        "children",
        "parameters"
    ],
    angularControlFlowBlockParameters: [
        "children"
    ],
    angularControlFlowBlockParameter: [],
    angularLetDeclaration: [
        "init"
    ],
    angularLetDeclarationInitializer: [],
    angularIcuExpression: [
        "cases"
    ],
    angularIcuCase: [
        "expression"
    ]
}, ss = da;
var ga = ns(ss), is = ga;
function as(t) {
    return /^\s*<!--\s*@(?:format|prettier)\s*-->/u.test(t);
}
function os(t) {
    return `<!-- @format -->

` + t;
}
var us = new Map([
    [
        "if",
        new Set([
            "else if",
            "else"
        ])
    ],
    [
        "else if",
        new Set([
            "else if",
            "else"
        ])
    ],
    [
        "for",
        new Set([
            "empty"
        ])
    ],
    [
        "defer",
        new Set([
            "placeholder",
            "error",
            "loading"
        ])
    ],
    [
        "placeholder",
        new Set([
            "placeholder",
            "error",
            "loading"
        ])
    ],
    [
        "error",
        new Set([
            "placeholder",
            "error",
            "loading"
        ])
    ],
    [
        "loading",
        new Set([
            "placeholder",
            "error",
            "loading"
        ])
    ]
]);
function ls(t) {
    let e = J(t);
    return t.type === "element" && !t.endSourceSpan && Fe(t.children) ? Math.max(e, ls(se(!1, t.children, -1))) : e;
}
function it(t, e, r) {
    let n = t.node;
    if (me(n)) {
        let s = ls(n);
        return [
            z(n, e),
            B(N.trimEnd(e.originalText.slice(X(n) + (n.prev && et(n.prev) ? kt(n).length : 0), s - (n.next && j(n.next) ? ge(n, e).length : 0)))),
            W(n, e)
        ];
    }
    return r();
}
function Ft(t, e) {
    return O(t) && O(e) ? t.isTrailingSpaceSensitive ? t.hasTrailingSpaces ? vt(e) ? S : E : "" : vt(e) ? S : v : et(t) && (me(e) || e.firstChild || e.isSelfClosing || e.type === "element" && e.attrs.length > 0) || t.type === "element" && t.isSelfClosing && j(e) ? "" : !e.isLeadingSpaceSensitive || vt(e) || j(e) && t.lastChild && Se(t.lastChild) && t.lastChild.lastChild && Se(t.lastChild.lastChild) ? S : e.hasLeadingSpaces ? E : v;
}
function Ne(t, e, r) {
    let { node: n } = t;
    if (dr(n)) return [
        ne,
        ...t.map((i)=>{
            let a = i.node, o = a.prev ? Ft(a.prev, a) : "";
            return [
                o ? [
                    o,
                    Qe(a.prev) ? S : ""
                ] : "",
                it(i, e, r)
            ];
        }, "children")
    ];
    let s = n.children.map(()=>Symbol(""));
    return t.map((i, a)=>{
        let o = i.node;
        if (O(o)) {
            if (o.prev && O(o.prev)) {
                let A = Ft(o.prev, o);
                if (A) return Qe(o.prev) ? [
                    S,
                    S,
                    it(i, e, r)
                ] : [
                    A,
                    it(i, e, r)
                ];
            }
            return it(i, e, r);
        }
        let u = [], p = [], l = [], f = [], d = o.prev ? Ft(o.prev, o) : "", C = o.next ? Ft(o, o.next) : "";
        return d && (Qe(o.prev) ? u.push(S, S) : d === S ? u.push(S) : O(o.prev) ? p.push(d) : p.push(le("", v, {
            groupId: s[a - 1]
        }))), C && (Qe(o) ? O(o.next) && f.push(S, S) : C === S ? O(o.next) && f.push(S) : l.push(C)), [
            ...u,
            _([
                ...p,
                _([
                    it(i, e, r),
                    ...l
                ], {
                    id: s[a]
                })
            ]),
            ...f
        ];
    }, "children");
}
function cs(t, e, r) {
    let { node: n } = t, s = [];
    Ca(t) && s.push("} "), s.push("@", n.name), n.parameters && s.push(" (", _(r("parameters")), ")"), s.push(" {");
    let i = ps(n);
    return n.children.length > 0 ? (n.firstChild.hasLeadingSpaces = !0, n.lastChild.hasTrailingSpaces = !0, s.push(k([
        S,
        Ne(t, e, r)
    ])), i && s.push(S, "}")) : i && s.push("}"), _(s, {
        shouldBreak: !0
    });
}
function ps(t) {
    var e, r;
    return !(((e = t.next) == null ? void 0 : e.type) === "angularControlFlowBlock" && (r = us.get(t.name)) != null && r.has(t.next.name));
}
function Ca(t) {
    let { previous: e } = t;
    return (e == null ? void 0 : e.type) === "angularControlFlowBlock" && !me(e) && !ps(e);
}
function hs(t, e, r) {
    return [
        k([
            v,
            q([
                ";",
                E
            ], t.map(r, "children"))
        ]),
        v
    ];
}
function ms(t, e, r) {
    let { node: n } = t;
    return [
        _e(n, e),
        _([
            n.switchValue.trim(),
            ", ",
            n.clause,
            n.cases.length > 0 ? [
                ",",
                k([
                    E,
                    q(E, t.map(r, "cases"))
                ])
            ] : "",
            v
        ]),
        de(n, e)
    ];
}
function fs(t, e, r) {
    let { node: n } = t;
    return [
        n.value,
        " {",
        _([
            k([
                v,
                t.map(({ node: s })=>s.type === "text" && !N.trim(s.value) ? "" : r(), "expression")
            ]),
            v
        ]),
        "}"
    ];
}
function ds(t, e, r) {
    let { node: n } = t;
    if (Dt(n, e)) return [
        z(n, e),
        _(rt(t, e, r)),
        B(Lt(n, e)),
        ...Ze(n, e),
        W(n, e)
    ];
    let s = n.children.length === 1 && (n.firstChild.type === "interpolation" || n.firstChild.type === "angularIcuExpression") && n.firstChild.isLeadingSpaceSensitive && !n.firstChild.hasLeadingSpaces && n.lastChild.isTrailingSpaceSensitive && !n.lastChild.hasTrailingSpaces, i = Symbol("element-attr-group-id"), a = (l)=>_([
            _(rt(t, e, r), {
                id: i
            }),
            l,
            Ze(n, e)
        ]), o = (l)=>s ? on(l, {
            groupId: i
        }) : (U(n) || Je(n, e)) && n.parent.type === "root" && e.parser === "vue" && !e.vueIndentScriptAndStyle ? l : k(l), u = ()=>s ? le(v, "", {
            groupId: i
        }) : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive ? E : n.firstChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive ? sn(v) : v, p = ()=>(n.next ? j(n.next) : Ce(n.parent)) ? n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? " " : "" : s ? le(v, "", {
            groupId: i
        }) : n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? E : (n.lastChild.type === "comment" || n.lastChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${e.tabWidth * (t.ancestors.length - 1)}}$`, "u").test(n.lastChild.value) ? "" : v;
    return n.children.length === 0 ? a(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? E : "") : a([
        xn(n) ? ne : "",
        o([
            u(),
            Ne(t, e, r)
        ]),
        p()
    ]);
}
function at(t) {
    return t >= 9 && t <= 32 || t == 160;
}
function Nt(t) {
    return 48 <= t && t <= 57;
}
function ot(t) {
    return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function gs(t) {
    return t >= 97 && t <= 102 || t >= 65 && t <= 70 || Nt(t);
}
function Pt(t) {
    return t === 10 || t === 13;
}
function yr(t) {
    return 48 <= t && t <= 55;
}
function It(t) {
    return t === 39 || t === 34 || t === 96;
}
var Sa = /-+([a-z0-9])/g;
function Ss(t) {
    return t.replace(Sa, (...e)=>e[1].toUpperCase());
}
var ie = class t {
    constructor(e, r, n, s){
        this.file = e, this.offset = r, this.line = n, this.col = s;
    }
    toString() {
        return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
    }
    moveBy(e) {
        let r = this.file.content, n = r.length, s = this.offset, i = this.line, a = this.col;
        for(; s > 0 && e < 0;)if (s--, e++, r.charCodeAt(s) == 10) {
            i--;
            let u = r.substring(0, s - 1).lastIndexOf(String.fromCharCode(10));
            a = u > 0 ? s - u : s;
        } else a--;
        for(; s < n && e > 0;){
            let o = r.charCodeAt(s);
            s++, e--, o == 10 ? (i++, a = 0) : a++;
        }
        return new t(this.file, s, i, a);
    }
    getContext(e, r) {
        let n = this.file.content, s = this.offset;
        if (s != null) {
            s > n.length - 1 && (s = n.length - 1);
            let i = s, a = 0, o = 0;
            for(; a < e && s > 0 && (s--, a++, !(n[s] == `
` && ++o == r)););
            for(a = 0, o = 0; a < e && i < n.length - 1 && (i++, a++, !(n[i] == `
` && ++o == r)););
            return {
                before: n.substring(s, this.offset),
                after: n.substring(this.offset, i + 1)
            };
        }
        return null;
    }
}, Ee = class {
    constructor(e, r){
        this.content = e, this.url = r;
    }
}, h = class {
    constructor(e, r, n = e, s = null){
        this.start = e, this.end = r, this.fullStart = n, this.details = s;
    }
    toString() {
        return this.start.file.content.substring(this.start.offset, this.end.offset);
    }
}, Rt;
(function(t) {
    t[t.WARNING = 0] = "WARNING", t[t.ERROR = 1] = "ERROR";
})(Rt || (Rt = {}));
var Ie = class {
    constructor(e, r, n = Rt.ERROR){
        this.span = e, this.msg = r, this.level = n;
    }
    contextualMessage() {
        let e = this.span.start.getContext(100, 3);
        return e ? `${this.msg} ("${e.before}[${Rt[this.level]} ->]${e.after}")` : this.msg;
    }
    toString() {
        let e = this.span.details ? `, ${this.span.details}` : "";
        return `${this.contextualMessage()}: ${this.span.start}${e}`;
    }
};
var _a = [
    Aa,
    Da,
    ya,
    ba,
    Ta,
    Ba,
    xa,
    ka,
    La,
    wa
];
function Ea(t, e) {
    for (let r of _a)r(t, e);
    return t;
}
function Aa(t) {
    t.walk((e)=>{
        if (e.type === "element" && e.tagDefinition.ignoreFirstLf && e.children.length > 0 && e.children[0].type === "text" && e.children[0].value[0] === `
`) {
            let r = e.children[0];
            r.value.length === 1 ? e.removeChild(r) : r.value = r.value.slice(1);
        }
    });
}
function Da(t) {
    let e = (r)=>{
        var n, s;
        return r.type === "element" && ((n = r.prev) == null ? void 0 : n.type) === "ieConditionalStartComment" && r.prev.sourceSpan.end.offset === r.startSourceSpan.start.offset && ((s = r.firstChild) == null ? void 0 : s.type) === "ieConditionalEndComment" && r.firstChild.sourceSpan.start.offset === r.startSourceSpan.end.offset;
    };
    t.walk((r)=>{
        if (r.children) for(let n = 0; n < r.children.length; n++){
            let s = r.children[n];
            if (!e(s)) continue;
            let i = s.prev, a = s.firstChild;
            r.removeChild(i), n--;
            let o = new h(i.sourceSpan.start, a.sourceSpan.end), u = new h(o.start, s.sourceSpan.end);
            s.condition = i.condition, s.sourceSpan = u, s.startSourceSpan = o, s.removeChild(a);
        }
    });
}
function va(t, e, r) {
    t.walk((n)=>{
        if (n.children) for(let s = 0; s < n.children.length; s++){
            let i = n.children[s];
            if (i.type !== "text" && !e(i)) continue;
            i.type !== "text" && (i.type = "text", i.value = r(i));
            let a = i.prev;
            !a || a.type !== "text" || (a.value += i.value, a.sourceSpan = new h(a.sourceSpan.start, i.sourceSpan.end), n.removeChild(i), s--);
        }
    });
}
function ya(t) {
    return va(t, (e)=>e.type === "cdata", (e)=>`<![CDATA[${e.value}]]>`);
}
function wa(t) {
    let e = (r)=>{
        var n, s;
        return r.type === "element" && r.attrs.length === 0 && r.children.length === 1 && r.firstChild.type === "text" && !N.hasWhitespaceCharacter(r.children[0].value) && !r.firstChild.hasLeadingSpaces && !r.firstChild.hasTrailingSpaces && r.isLeadingSpaceSensitive && !r.hasLeadingSpaces && r.isTrailingSpaceSensitive && !r.hasTrailingSpaces && ((n = r.prev) == null ? void 0 : n.type) === "text" && ((s = r.next) == null ? void 0 : s.type) === "text";
    };
    t.walk((r)=>{
        if (r.children) for(let n = 0; n < r.children.length; n++){
            let s = r.children[n];
            if (!e(s)) continue;
            let i = s.prev, a = s.next;
            i.value += `<${s.rawName}>` + s.firstChild.value + `</${s.rawName}>` + a.value, i.sourceSpan = new h(i.sourceSpan.start, a.sourceSpan.end), i.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive, i.hasTrailingSpaces = a.hasTrailingSpaces, r.removeChild(s), n--, r.removeChild(a);
        }
    });
}
function ba(t, e) {
    if (e.parser === "html") return;
    let r = /\{\{(.+?)\}\}/su;
    t.walk((n)=>{
        if (vn(n)) for (let s of n.children){
            if (s.type !== "text") continue;
            let i = s.sourceSpan.start, a = null, o = s.value.split(r);
            for(let u = 0; u < o.length; u++, i = a){
                let p = o[u];
                if (u % 2 === 0) {
                    a = i.moveBy(p.length), p.length > 0 && n.insertChildBefore(s, {
                        type: "text",
                        value: p,
                        sourceSpan: new h(i, a)
                    });
                    continue;
                }
                a = i.moveBy(p.length + 4), n.insertChildBefore(s, {
                    type: "interpolation",
                    sourceSpan: new h(i, a),
                    children: p.length === 0 ? [] : [
                        {
                            type: "text",
                            value: p,
                            sourceSpan: new h(i.moveBy(2), a.moveBy(-2))
                        }
                    ]
                });
            }
            n.removeChild(s);
        }
    });
}
function Ta(t) {
    t.walk((e)=>{
        if (!e.children) return;
        if (e.children.length === 0 || e.children.length === 1 && e.children[0].type === "text" && N.trim(e.children[0].value).length === 0) {
            e.hasDanglingSpaces = e.children.length > 0, e.children = [];
            return;
        }
        let r = yn(e), n = fr(e);
        if (!r) for(let s = 0; s < e.children.length; s++){
            let i = e.children[s];
            if (i.type !== "text") continue;
            let { leadingWhitespace: a, text: o, trailingWhitespace: u } = Dn(i.value), p = i.prev, l = i.next;
            o ? (i.value = o, i.sourceSpan = new h(i.sourceSpan.start.moveBy(a.length), i.sourceSpan.end.moveBy(-u.length)), a && (p && (p.hasTrailingSpaces = !0), i.hasLeadingSpaces = !0), u && (i.hasTrailingSpaces = !0, l && (l.hasLeadingSpaces = !0))) : (e.removeChild(i), s--, (a || u) && (p && (p.hasTrailingSpaces = !0), l && (l.hasLeadingSpaces = !0)));
        }
        e.isWhitespaceSensitive = r, e.isIndentationSensitive = n;
    });
}
function xa(t) {
    t.walk((e)=>{
        e.isSelfClosing = !e.children || e.type === "element" && (e.tagDefinition.isVoid || e.endSourceSpan && e.startSourceSpan.start === e.endSourceSpan.start && e.startSourceSpan.end === e.endSourceSpan.end);
    });
}
function ka(t, e) {
    t.walk((r)=>{
        r.type === "element" && (r.hasHtmComponentClosingTag = r.endSourceSpan && /^<\s*\/\s*\/\s*>$/u.test(e.originalText.slice(r.endSourceSpan.start.offset, r.endSourceSpan.end.offset)));
    });
}
function Ba(t, e) {
    t.walk((r)=>{
        r.cssDisplay = Pn(r, e);
    });
}
function La(t, e) {
    t.walk((r)=>{
        let { children: n } = r;
        if (n) {
            if (n.length === 0) {
                r.isDanglingSpaceSensitive = Tn(r);
                return;
            }
            for (let s of n)s.isLeadingSpaceSensitive = wn(s, e), s.isTrailingSpaceSensitive = bn(s, e);
            for(let s = 0; s < n.length; s++){
                let i = n[s];
                i.isLeadingSpaceSensitive = (s === 0 || i.prev.isTrailingSpaceSensitive) && i.isLeadingSpaceSensitive, i.isTrailingSpaceSensitive = (s === n.length - 1 || i.next.isLeadingSpaceSensitive) && i.isTrailingSpaceSensitive;
            }
        }
    });
}
var _s = Ea;
function Fa(t, e, r) {
    let { node: n } = t;
    switch(n.type){
        case "front-matter":
            return B(n.raw);
        case "root":
            return e.__onHtmlRoot && e.__onHtmlRoot(n), [
                _(Ne(t, e, r)),
                S
            ];
        case "element":
        case "ieConditionalComment":
            return ds(t, e, r);
        case "angularControlFlowBlock":
            return cs(t, e, r);
        case "angularControlFlowBlockParameters":
            return hs(t, e, r);
        case "angularControlFlowBlockParameter":
            return N.trim(n.expression);
        case "angularLetDeclaration":
            return _([
                "@let ",
                _([
                    n.id,
                    " =",
                    _(k([
                        E,
                        r("init")
                    ]))
                ]),
                ";"
            ]);
        case "angularLetDeclarationInitializer":
            return n.value;
        case "angularIcuExpression":
            return ms(t, e, r);
        case "angularIcuCase":
            return fs(t, e, r);
        case "ieConditionalStartComment":
        case "ieConditionalEndComment":
            return [
                _e(n),
                de(n)
            ];
        case "interpolation":
            return [
                _e(n, e),
                ...t.map(r, "children"),
                de(n, e)
            ];
        case "text":
            {
                if (n.parent.type === "interpolation") {
                    let o = /\n[^\S\n]*$/u, u = o.test(n.value), p = u ? n.value.replace(o, "") : n.value;
                    return [
                        B(p),
                        u ? S : ""
                    ];
                }
                let s = z(n, e), i = bt(n), a = W(n, e);
                return i[0] = [
                    s,
                    i[0]
                ], i.push([
                    i.pop(),
                    a
                ]), Et(i);
            }
        case "docType":
            return [
                _([
                    _e(n, e),
                    " ",
                    w(!1, n.value.replace(/^html\b/iu, "html"), /\s+/gu, " ")
                ]),
                de(n, e)
            ];
        case "comment":
            return [
                z(n, e),
                B(e.originalText.slice(X(n), J(n))),
                W(n, e)
            ];
        case "attribute":
            {
                if (n.value === null) return n.rawName;
                let s = Sr(n.value), i = cn(s, '"');
                return [
                    n.rawName,
                    "=",
                    i,
                    B(i === '"' ? w(!1, s, '"', "&quot;") : w(!1, s, "'", "&apos;")),
                    i
                ];
            }
        case "cdata":
        default:
            throw new hn(n, "HTML");
    }
}
var Na = {
    preprocess: _s,
    print: Fa,
    insertPragma: os,
    massageAstNode: fn,
    embed: rs,
    getVisitorKeys: is
}, Es = Na;
var As = [
    {
        linguistLanguageId: 146,
        name: "Angular",
        type: "markup",
        tmScope: "text.html.basic",
        aceMode: "html",
        codemirrorMode: "htmlmixed",
        codemirrorMimeType: "text/html",
        color: "#e34c26",
        aliases: [
            "xhtml"
        ],
        extensions: [
            ".component.html"
        ],
        parsers: [
            "angular"
        ],
        vscodeLanguageIds: [
            "html"
        ],
        filenames: []
    },
    {
        linguistLanguageId: 146,
        name: "HTML",
        type: "markup",
        tmScope: "text.html.basic",
        aceMode: "html",
        codemirrorMode: "htmlmixed",
        codemirrorMimeType: "text/html",
        color: "#e34c26",
        aliases: [
            "xhtml"
        ],
        extensions: [
            ".html",
            ".hta",
            ".htm",
            ".html.hl",
            ".inc",
            ".xht",
            ".xhtml",
            ".mjml"
        ],
        parsers: [
            "html"
        ],
        vscodeLanguageIds: [
            "html"
        ]
    },
    {
        linguistLanguageId: 146,
        name: "Lightning Web Components",
        type: "markup",
        tmScope: "text.html.basic",
        aceMode: "html",
        codemirrorMode: "htmlmixed",
        codemirrorMimeType: "text/html",
        color: "#e34c26",
        aliases: [
            "xhtml"
        ],
        extensions: [],
        parsers: [
            "lwc"
        ],
        vscodeLanguageIds: [
            "html"
        ],
        filenames: []
    },
    {
        linguistLanguageId: 391,
        name: "Vue",
        type: "markup",
        color: "#41b883",
        extensions: [
            ".vue"
        ],
        tmScope: "text.html.vue",
        aceMode: "html",
        parsers: [
            "vue"
        ],
        vscodeLanguageIds: [
            "vue"
        ]
    }
];
var wr = {
    bracketSpacing: {
        category: "Common",
        type: "boolean",
        default: !0,
        description: "Print spaces between brackets.",
        oppositeDescription: "Do not print spaces between brackets."
    },
    singleQuote: {
        category: "Common",
        type: "boolean",
        default: !1,
        description: "Use single quotes instead of double quotes."
    },
    proseWrap: {
        category: "Common",
        type: "choice",
        default: "preserve",
        description: "How to wrap prose.",
        choices: [
            {
                value: "always",
                description: "Wrap prose if it exceeds the print width."
            },
            {
                value: "never",
                description: "Do not wrap prose."
            },
            {
                value: "preserve",
                description: "Wrap prose as-is."
            }
        ]
    },
    bracketSameLine: {
        category: "Common",
        type: "boolean",
        default: !1,
        description: "Put > of opening tags on the last line instead of on a new line."
    },
    singleAttributePerLine: {
        category: "Common",
        type: "boolean",
        default: !1,
        description: "Enforce single attribute per line in HTML, Vue and JSX."
    }
};
var Ds = "HTML", Pa = {
    bracketSameLine: wr.bracketSameLine,
    htmlWhitespaceSensitivity: {
        category: Ds,
        type: "choice",
        default: "css",
        description: "How to handle whitespaces in HTML.",
        choices: [
            {
                value: "css",
                description: "Respect the default value of CSS display property."
            },
            {
                value: "strict",
                description: "Whitespaces are considered sensitive."
            },
            {
                value: "ignore",
                description: "Whitespaces are considered insensitive."
            }
        ]
    },
    singleAttributePerLine: wr.singleAttributePerLine,
    vueIndentScriptAndStyle: {
        category: Ds,
        type: "boolean",
        default: !1,
        description: "Indent script and style tags in Vue files."
    }
}, vs = Pa;
var Gr = {};
Jr(Gr, {
    angular: ()=>Fo,
    html: ()=>Lo,
    lwc: ()=>Po,
    vue: ()=>No
});
var Cp = new RegExp(`(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`, "g");
var ys;
(function(t) {
    t[t.Emulated = 0] = "Emulated", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom";
})(ys || (ys = {}));
var ws;
(function(t) {
    t[t.OnPush = 0] = "OnPush", t[t.Default = 1] = "Default";
})(ws || (ws = {}));
var bs;
(function(t) {
    t[t.None = 0] = "None", t[t.SignalBased = 1] = "SignalBased", t[t.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform";
})(bs || (bs = {}));
var br = {
    name: "custom-elements"
}, Tr = {
    name: "no-errors-schema"
};
var Z;
(function(t) {
    t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL";
})(Z || (Z = {}));
var Ts;
(function(t) {
    t[t.Error = 0] = "Error", t[t.Warning = 1] = "Warning", t[t.Ignore = 2] = "Ignore";
})(Ts || (Ts = {}));
var I;
(function(t) {
    t[t.RAW_TEXT = 0] = "RAW_TEXT", t[t.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", t[t.PARSABLE_DATA = 2] = "PARSABLE_DATA";
})(I || (I = {}));
function ut(t, e = !0) {
    if (t[0] != ":") return [
        null,
        t
    ];
    let r = t.indexOf(":", 1);
    if (r === -1) {
        if (e) throw new Error(`Unsupported format "${t}" expecting ":namespace:name"`);
        return [
            null,
            t
        ];
    }
    return [
        t.slice(1, r),
        t.slice(r + 1)
    ];
}
function xr(t) {
    return ut(t)[1] === "ng-container";
}
function kr(t) {
    return ut(t)[1] === "ng-content";
}
function Re(t) {
    return t === null ? null : ut(t)[0];
}
function Oe(t, e) {
    return t ? `:${t}:${e}` : e;
}
var $t;
function Br() {
    return $t || ($t = {}, Ot(Z.HTML, [
        "iframe|srcdoc",
        "*|innerHTML",
        "*|outerHTML"
    ]), Ot(Z.STYLE, [
        "*|style"
    ]), Ot(Z.URL, [
        "*|formAction",
        "area|href",
        "area|ping",
        "audio|src",
        "a|href",
        "a|ping",
        "blockquote|cite",
        "body|background",
        "del|cite",
        "form|action",
        "img|src",
        "input|src",
        "ins|cite",
        "q|cite",
        "source|src",
        "track|src",
        "video|poster",
        "video|src"
    ]), Ot(Z.RESOURCE_URL, [
        "applet|code",
        "applet|codebase",
        "base|href",
        "embed|src",
        "frame|src",
        "head|profile",
        "html|manifest",
        "iframe|src",
        "link|href",
        "media|src",
        "object|codebase",
        "object|data",
        "script|src"
    ])), $t;
}
function Ot(t, e) {
    for (let r of e)$t[r.toLowerCase()] = t;
}
var Mt = class {
};
var Ia = "boolean", Ra = "number", Oa = "string", $a = "object", Ma = [
    "[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored",
    "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy",
    "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy",
    "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume",
    ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",
    ":svg:graphics^:svg:|",
    ":svg:animation^:svg:|*begin,*end,*repeat",
    ":svg:geometry^:svg:|",
    ":svg:componentTransferFunction^:svg:|",
    ":svg:gradient^:svg:|",
    ":svg:textContent^:svg:graphics|",
    ":svg:textPositioning^:svg:textContent|",
    "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username",
    "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username",
    "audio^media|",
    "br^[HTMLElement]|clear",
    "base^[HTMLElement]|href,target",
    "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink",
    "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value",
    "canvas^[HTMLElement]|#height,#width",
    "content^[HTMLElement]|select",
    "dl^[HTMLElement]|!compact",
    "data^[HTMLElement]|value",
    "datalist^[HTMLElement]|",
    "details^[HTMLElement]|!open",
    "dialog^[HTMLElement]|!open,returnValue",
    "dir^[HTMLElement]|!compact",
    "div^[HTMLElement]|align",
    "embed^[HTMLElement]|align,height,name,src,type,width",
    "fieldset^[HTMLElement]|!disabled,name",
    "font^[HTMLElement]|color,face,size",
    "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target",
    "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src",
    "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows",
    "hr^[HTMLElement]|align,color,!noShade,size,width",
    "head^[HTMLElement]|",
    "h1,h2,h3,h4,h5,h6^[HTMLElement]|align",
    "html^[HTMLElement]|version",
    "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width",
    "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width",
    "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width",
    "li^[HTMLElement]|type,#value",
    "label^[HTMLElement]|htmlFor",
    "legend^[HTMLElement]|align",
    "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type",
    "map^[HTMLElement]|name",
    "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width",
    "menu^[HTMLElement]|!compact",
    "meta^[HTMLElement]|content,httpEquiv,media,name,scheme",
    "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value",
    "ins,del^[HTMLElement]|cite,dateTime",
    "ol^[HTMLElement]|!compact,!reversed,#start,type",
    "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width",
    "optgroup^[HTMLElement]|!disabled,label",
    "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value",
    "output^[HTMLElement]|defaultValue,%htmlFor,name,value",
    "p^[HTMLElement]|align",
    "param^[HTMLElement]|name,type,value,valueType",
    "picture^[HTMLElement]|",
    "pre^[HTMLElement]|#width",
    "progress^[HTMLElement]|#max,#value",
    "q,blockquote,cite^[HTMLElement]|",
    "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type",
    "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value",
    "slot^[HTMLElement]|name",
    "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width",
    "span^[HTMLElement]|",
    "style^[HTMLElement]|!disabled,media,type",
    "caption^[HTMLElement]|align",
    "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width",
    "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width",
    "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width",
    "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign",
    "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign",
    "template^[HTMLElement]|",
    "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap",
    "time^[HTMLElement]|dateTime",
    "title^[HTMLElement]|text",
    "track^[HTMLElement]|!default,kind,label,src,srclang",
    "ul^[HTMLElement]|!compact,type",
    "unknown^[HTMLElement]|",
    "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width",
    ":svg:a^:svg:graphics|",
    ":svg:animate^:svg:animation|",
    ":svg:animateMotion^:svg:animation|",
    ":svg:animateTransform^:svg:animation|",
    ":svg:circle^:svg:geometry|",
    ":svg:clipPath^:svg:graphics|",
    ":svg:defs^:svg:graphics|",
    ":svg:desc^:svg:|",
    ":svg:discard^:svg:|",
    ":svg:ellipse^:svg:geometry|",
    ":svg:feBlend^:svg:|",
    ":svg:feColorMatrix^:svg:|",
    ":svg:feComponentTransfer^:svg:|",
    ":svg:feComposite^:svg:|",
    ":svg:feConvolveMatrix^:svg:|",
    ":svg:feDiffuseLighting^:svg:|",
    ":svg:feDisplacementMap^:svg:|",
    ":svg:feDistantLight^:svg:|",
    ":svg:feDropShadow^:svg:|",
    ":svg:feFlood^:svg:|",
    ":svg:feFuncA^:svg:componentTransferFunction|",
    ":svg:feFuncB^:svg:componentTransferFunction|",
    ":svg:feFuncG^:svg:componentTransferFunction|",
    ":svg:feFuncR^:svg:componentTransferFunction|",
    ":svg:feGaussianBlur^:svg:|",
    ":svg:feImage^:svg:|",
    ":svg:feMerge^:svg:|",
    ":svg:feMergeNode^:svg:|",
    ":svg:feMorphology^:svg:|",
    ":svg:feOffset^:svg:|",
    ":svg:fePointLight^:svg:|",
    ":svg:feSpecularLighting^:svg:|",
    ":svg:feSpotLight^:svg:|",
    ":svg:feTile^:svg:|",
    ":svg:feTurbulence^:svg:|",
    ":svg:filter^:svg:|",
    ":svg:foreignObject^:svg:graphics|",
    ":svg:g^:svg:graphics|",
    ":svg:image^:svg:graphics|decoding",
    ":svg:line^:svg:geometry|",
    ":svg:linearGradient^:svg:gradient|",
    ":svg:mpath^:svg:|",
    ":svg:marker^:svg:|",
    ":svg:mask^:svg:|",
    ":svg:metadata^:svg:|",
    ":svg:path^:svg:geometry|",
    ":svg:pattern^:svg:|",
    ":svg:polygon^:svg:geometry|",
    ":svg:polyline^:svg:geometry|",
    ":svg:radialGradient^:svg:gradient|",
    ":svg:rect^:svg:geometry|",
    ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan",
    ":svg:script^:svg:|type",
    ":svg:set^:svg:animation|",
    ":svg:stop^:svg:|",
    ":svg:style^:svg:|!disabled,media,title,type",
    ":svg:switch^:svg:graphics|",
    ":svg:symbol^:svg:|",
    ":svg:tspan^:svg:textPositioning|",
    ":svg:text^:svg:textPositioning|",
    ":svg:textPath^:svg:textContent|",
    ":svg:title^:svg:|",
    ":svg:use^:svg:graphics|",
    ":svg:view^:svg:|#zoomAndPan",
    "data^[HTMLElement]|value",
    "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name",
    "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default",
    "summary^[HTMLElement]|",
    "time^[HTMLElement]|dateTime",
    ":svg:cursor^:svg:|",
    ":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",
    ":math:math^:math:|",
    ":math:maction^:math:|",
    ":math:menclose^:math:|",
    ":math:merror^:math:|",
    ":math:mfenced^:math:|",
    ":math:mfrac^:math:|",
    ":math:mi^:math:|",
    ":math:mmultiscripts^:math:|",
    ":math:mn^:math:|",
    ":math:mo^:math:|",
    ":math:mover^:math:|",
    ":math:mpadded^:math:|",
    ":math:mphantom^:math:|",
    ":math:mroot^:math:|",
    ":math:mrow^:math:|",
    ":math:ms^:math:|",
    ":math:mspace^:math:|",
    ":math:msqrt^:math:|",
    ":math:mstyle^:math:|",
    ":math:msub^:math:|",
    ":math:msubsup^:math:|",
    ":math:msup^:math:|",
    ":math:mtable^:math:|",
    ":math:mtd^:math:|",
    ":math:mtext^:math:|",
    ":math:mtr^:math:|",
    ":math:munder^:math:|",
    ":math:munderover^:math:|",
    ":math:semantics^:math:|"
], xs = new Map(Object.entries({
    class: "className",
    for: "htmlFor",
    formaction: "formAction",
    innerHtml: "innerHTML",
    readonly: "readOnly",
    tabindex: "tabIndex"
})), qa = Array.from(xs).reduce((t, [e, r])=>(t.set(e, r), t), new Map), qt = class extends Mt {
    constructor(){
        super(), this._schema = new Map, this._eventSchema = new Map, Ma.forEach((e)=>{
            let r = new Map, n = new Set, [s, i] = e.split("|"), a = i.split(","), [o, u] = s.split("^");
            o.split(",").forEach((l)=>{
                this._schema.set(l.toLowerCase(), r), this._eventSchema.set(l.toLowerCase(), n);
            });
            let p = u && this._schema.get(u.toLowerCase());
            if (p) {
                for (let [l, f] of p)r.set(l, f);
                for (let l of this._eventSchema.get(u.toLowerCase()))n.add(l);
            }
            a.forEach((l)=>{
                if (l.length > 0) switch(l[0]){
                    case "*":
                        n.add(l.substring(1));
                        break;
                    case "!":
                        r.set(l.substring(1), Ia);
                        break;
                    case "#":
                        r.set(l.substring(1), Ra);
                        break;
                    case "%":
                        r.set(l.substring(1), $a);
                        break;
                    default:
                        r.set(l, Oa);
                }
            });
        });
    }
    hasProperty(e, r, n) {
        if (n.some((i)=>i.name === Tr.name)) return !0;
        if (e.indexOf("-") > -1) {
            if (xr(e) || kr(e)) return !1;
            if (n.some((i)=>i.name === br.name)) return !0;
        }
        return (this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).has(r);
    }
    hasElement(e, r) {
        return r.some((n)=>n.name === Tr.name) || e.indexOf("-") > -1 && (xr(e) || kr(e) || r.some((n)=>n.name === br.name)) ? !0 : this._schema.has(e.toLowerCase());
    }
    securityContext(e, r, n) {
        n && (r = this.getMappedPropName(r)), e = e.toLowerCase(), r = r.toLowerCase();
        let s = Br()[e + "|" + r];
        return s || (s = Br()["*|" + r], s || Z.NONE);
    }
    getMappedPropName(e) {
        return xs.get(e) ?? e;
    }
    getDefaultComponentElementName() {
        return "ng-component";
    }
    validateProperty(e) {
        return e.toLowerCase().startsWith("on") ? {
            error: !0,
            msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.`
        } : {
            error: !1
        };
    }
    validateAttribute(e) {
        return e.toLowerCase().startsWith("on") ? {
            error: !0,
            msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...`
        } : {
            error: !1
        };
    }
    allKnownElementNames() {
        return Array.from(this._schema.keys());
    }
    allKnownAttributesOfElement(e) {
        let r = this._schema.get(e.toLowerCase()) || this._schema.get("unknown");
        return Array.from(r.keys()).map((n)=>qa.get(n) ?? n);
    }
    allKnownEventsOfElement(e) {
        return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
    }
    normalizeAnimationStyleProperty(e) {
        return Ss(e);
    }
    normalizeAnimationStyleValue(e, r, n) {
        let s = "", i = n.toString().trim(), a = null;
        if (Ha(e) && n !== 0 && n !== "0") if (typeof n == "number") s = "px";
        else {
            let o = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
            o && o[1].length == 0 && (a = `Please provide a CSS unit value for ${r}:${n}`);
        }
        return {
            error: a,
            value: i + s
        };
    }
};
function Ha(t) {
    switch(t){
        case "width":
        case "height":
        case "minWidth":
        case "minHeight":
        case "maxWidth":
        case "maxHeight":
        case "left":
        case "top":
        case "bottom":
        case "right":
        case "fontSize":
        case "outlineWidth":
        case "outlineOffset":
        case "paddingTop":
        case "paddingLeft":
        case "paddingBottom":
        case "paddingRight":
        case "marginTop":
        case "marginLeft":
        case "marginBottom":
        case "marginRight":
        case "borderRadius":
        case "borderWidth":
        case "borderTopWidth":
        case "borderLeftWidth":
        case "borderRightWidth":
        case "borderBottomWidth":
        case "textIndent":
            return !0;
        default:
            return !1;
    }
}
var m = class {
    constructor({ closedByChildren: e, implicitNamespacePrefix: r, contentType: n = I.PARSABLE_DATA, closedByParent: s = !1, isVoid: i = !1, ignoreFirstLf: a = !1, preventNamespaceInheritance: o = !1, canSelfClose: u = !1 } = {}){
        this.closedByChildren = {}, this.closedByParent = !1, e && e.length > 0 && e.forEach((p)=>this.closedByChildren[p] = !0), this.isVoid = i, this.closedByParent = s || i, this.implicitNamespacePrefix = r || null, this.contentType = n, this.ignoreFirstLf = a, this.preventNamespaceInheritance = o, this.canSelfClose = u ?? i;
    }
    isClosedByChild(e) {
        return this.isVoid || e.toLowerCase() in this.closedByChildren;
    }
    getContentType(e) {
        return typeof this.contentType == "object" ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType;
    }
}, ks, lt;
function $e(t) {
    return lt || (ks = new m({
        canSelfClose: !0
    }), lt = Object.assign(Object.create(null), {
        base: new m({
            isVoid: !0
        }),
        meta: new m({
            isVoid: !0
        }),
        area: new m({
            isVoid: !0
        }),
        embed: new m({
            isVoid: !0
        }),
        link: new m({
            isVoid: !0
        }),
        img: new m({
            isVoid: !0
        }),
        input: new m({
            isVoid: !0
        }),
        param: new m({
            isVoid: !0
        }),
        hr: new m({
            isVoid: !0
        }),
        br: new m({
            isVoid: !0
        }),
        source: new m({
            isVoid: !0
        }),
        track: new m({
            isVoid: !0
        }),
        wbr: new m({
            isVoid: !0
        }),
        p: new m({
            closedByChildren: [
                "address",
                "article",
                "aside",
                "blockquote",
                "div",
                "dl",
                "fieldset",
                "footer",
                "form",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "header",
                "hgroup",
                "hr",
                "main",
                "nav",
                "ol",
                "p",
                "pre",
                "section",
                "table",
                "ul"
            ],
            closedByParent: !0
        }),
        thead: new m({
            closedByChildren: [
                "tbody",
                "tfoot"
            ]
        }),
        tbody: new m({
            closedByChildren: [
                "tbody",
                "tfoot"
            ],
            closedByParent: !0
        }),
        tfoot: new m({
            closedByChildren: [
                "tbody"
            ],
            closedByParent: !0
        }),
        tr: new m({
            closedByChildren: [
                "tr"
            ],
            closedByParent: !0
        }),
        td: new m({
            closedByChildren: [
                "td",
                "th"
            ],
            closedByParent: !0
        }),
        th: new m({
            closedByChildren: [
                "td",
                "th"
            ],
            closedByParent: !0
        }),
        col: new m({
            isVoid: !0
        }),
        svg: new m({
            implicitNamespacePrefix: "svg"
        }),
        foreignObject: new m({
            implicitNamespacePrefix: "svg",
            preventNamespaceInheritance: !0
        }),
        math: new m({
            implicitNamespacePrefix: "math"
        }),
        li: new m({
            closedByChildren: [
                "li"
            ],
            closedByParent: !0
        }),
        dt: new m({
            closedByChildren: [
                "dt",
                "dd"
            ]
        }),
        dd: new m({
            closedByChildren: [
                "dt",
                "dd"
            ],
            closedByParent: !0
        }),
        rb: new m({
            closedByChildren: [
                "rb",
                "rt",
                "rtc",
                "rp"
            ],
            closedByParent: !0
        }),
        rt: new m({
            closedByChildren: [
                "rb",
                "rt",
                "rtc",
                "rp"
            ],
            closedByParent: !0
        }),
        rtc: new m({
            closedByChildren: [
                "rb",
                "rtc",
                "rp"
            ],
            closedByParent: !0
        }),
        rp: new m({
            closedByChildren: [
                "rb",
                "rt",
                "rtc",
                "rp"
            ],
            closedByParent: !0
        }),
        optgroup: new m({
            closedByChildren: [
                "optgroup"
            ],
            closedByParent: !0
        }),
        option: new m({
            closedByChildren: [
                "option",
                "optgroup"
            ],
            closedByParent: !0
        }),
        pre: new m({
            ignoreFirstLf: !0
        }),
        listing: new m({
            ignoreFirstLf: !0
        }),
        style: new m({
            contentType: I.RAW_TEXT
        }),
        script: new m({
            contentType: I.RAW_TEXT
        }),
        title: new m({
            contentType: {
                default: I.ESCAPABLE_RAW_TEXT,
                svg: I.PARSABLE_DATA
            }
        }),
        textarea: new m({
            contentType: I.ESCAPABLE_RAW_TEXT,
            ignoreFirstLf: !0
        })
    }), new qt().allKnownElementNames().forEach((e)=>{
        !lt[e] && Re(e) === null && (lt[e] = new m({
            canSelfClose: !1
        }));
    })), lt[t] ?? ks;
}
var ae = class {
    constructor(e, r){
        this.sourceSpan = e, this.i18n = r;
    }
}, Ht = class extends ae {
    constructor(e, r, n, s){
        super(r, s), this.value = e, this.tokens = n, this.type = "text";
    }
    visit(e, r) {
        return e.visitText(this, r);
    }
}, Vt = class extends ae {
    constructor(e, r, n, s){
        super(r, s), this.value = e, this.tokens = n, this.type = "cdata";
    }
    visit(e, r) {
        return e.visitCdata(this, r);
    }
}, Ut = class extends ae {
    constructor(e, r, n, s, i, a){
        super(s, a), this.switchValue = e, this.type = r, this.cases = n, this.switchValueSourceSpan = i;
    }
    visit(e, r) {
        return e.visitExpansion(this, r);
    }
}, Wt = class {
    constructor(e, r, n, s, i){
        this.value = e, this.expression = r, this.sourceSpan = n, this.valueSourceSpan = s, this.expSourceSpan = i, this.type = "expansionCase";
    }
    visit(e, r) {
        return e.visitExpansionCase(this, r);
    }
}, zt = class extends ae {
    constructor(e, r, n, s, i, a, o){
        super(n, o), this.name = e, this.value = r, this.keySpan = s, this.valueSpan = i, this.valueTokens = a, this.type = "attribute";
    }
    visit(e, r) {
        return e.visitAttribute(this, r);
    }
    get nameSpan() {
        return this.keySpan;
    }
}, G = class extends ae {
    constructor(e, r, n, s, i, a = null, o = null, u){
        super(s, u), this.name = e, this.attrs = r, this.children = n, this.startSourceSpan = i, this.endSourceSpan = a, this.nameSpan = o, this.type = "element";
    }
    visit(e, r) {
        return e.visitElement(this, r);
    }
}, Gt = class {
    constructor(e, r){
        this.value = e, this.sourceSpan = r, this.type = "comment";
    }
    visit(e, r) {
        return e.visitComment(this, r);
    }
}, Yt = class {
    constructor(e, r){
        this.value = e, this.sourceSpan = r, this.type = "docType";
    }
    visit(e, r) {
        return e.visitDocType(this, r);
    }
}, ee = class extends ae {
    constructor(e, r, n, s, i, a, o = null, u){
        super(s, u), this.name = e, this.parameters = r, this.children = n, this.nameSpan = i, this.startSourceSpan = a, this.endSourceSpan = o, this.type = "block";
    }
    visit(e, r) {
        return e.visitBlock(this, r);
    }
}, ct = class {
    constructor(e, r){
        this.expression = e, this.sourceSpan = r, this.type = "blockParameter", this.startSourceSpan = null, this.endSourceSpan = null;
    }
    visit(e, r) {
        return e.visitBlockParameter(this, r);
    }
}, pt = class {
    constructor(e, r, n, s, i){
        this.name = e, this.value = r, this.sourceSpan = n, this.nameSpan = s, this.valueSpan = i, this.type = "letDeclaration", this.startSourceSpan = null, this.endSourceSpan = null;
    }
    visit(e, r) {
        return e.visitLetDeclaration(this, r);
    }
};
function jt(t, e, r = null) {
    let n = [], s = t.visit ? (i)=>t.visit(i, r) || i.visit(t, r) : (i)=>i.visit(t, r);
    return e.forEach((i)=>{
        let a = s(i);
        a && n.push(a);
    }), n;
}
var ht = class {
    constructor(){}
    visitElement(e, r) {
        this.visitChildren(r, (n)=>{
            n(e.attrs), n(e.children);
        });
    }
    visitAttribute(e, r) {}
    visitText(e, r) {}
    visitCdata(e, r) {}
    visitComment(e, r) {}
    visitDocType(e, r) {}
    visitExpansion(e, r) {
        return this.visitChildren(r, (n)=>{
            n(e.cases);
        });
    }
    visitExpansionCase(e, r) {}
    visitBlock(e, r) {
        this.visitChildren(r, (n)=>{
            n(e.parameters), n(e.children);
        });
    }
    visitBlockParameter(e, r) {}
    visitLetDeclaration(e, r) {}
    visitChildren(e, r) {
        let n = [], s = this;
        function i(a) {
            a && n.push(jt(s, a, e));
        }
        return r(i), Array.prototype.concat.apply([], n);
    }
};
var Me = {
    AElig: "\xC6",
    AMP: "&",
    amp: "&",
    Aacute: "\xC1",
    Abreve: "\u0102",
    Acirc: "\xC2",
    Acy: "\u0410",
    Afr: "\u{1D504}",
    Agrave: "\xC0",
    Alpha: "\u0391",
    Amacr: "\u0100",
    And: "\u2A53",
    Aogon: "\u0104",
    Aopf: "\u{1D538}",
    ApplyFunction: "\u2061",
    af: "\u2061",
    Aring: "\xC5",
    angst: "\xC5",
    Ascr: "\u{1D49C}",
    Assign: "\u2254",
    colone: "\u2254",
    coloneq: "\u2254",
    Atilde: "\xC3",
    Auml: "\xC4",
    Backslash: "\u2216",
    setminus: "\u2216",
    setmn: "\u2216",
    smallsetminus: "\u2216",
    ssetmn: "\u2216",
    Barv: "\u2AE7",
    Barwed: "\u2306",
    doublebarwedge: "\u2306",
    Bcy: "\u0411",
    Because: "\u2235",
    becaus: "\u2235",
    because: "\u2235",
    Bernoullis: "\u212C",
    Bscr: "\u212C",
    bernou: "\u212C",
    Beta: "\u0392",
    Bfr: "\u{1D505}",
    Bopf: "\u{1D539}",
    Breve: "\u02D8",
    breve: "\u02D8",
    Bumpeq: "\u224E",
    HumpDownHump: "\u224E",
    bump: "\u224E",
    CHcy: "\u0427",
    COPY: "\xA9",
    copy: "\xA9",
    Cacute: "\u0106",
    Cap: "\u22D2",
    CapitalDifferentialD: "\u2145",
    DD: "\u2145",
    Cayleys: "\u212D",
    Cfr: "\u212D",
    Ccaron: "\u010C",
    Ccedil: "\xC7",
    Ccirc: "\u0108",
    Cconint: "\u2230",
    Cdot: "\u010A",
    Cedilla: "\xB8",
    cedil: "\xB8",
    CenterDot: "\xB7",
    centerdot: "\xB7",
    middot: "\xB7",
    Chi: "\u03A7",
    CircleDot: "\u2299",
    odot: "\u2299",
    CircleMinus: "\u2296",
    ominus: "\u2296",
    CirclePlus: "\u2295",
    oplus: "\u2295",
    CircleTimes: "\u2297",
    otimes: "\u2297",
    ClockwiseContourIntegral: "\u2232",
    cwconint: "\u2232",
    CloseCurlyDoubleQuote: "\u201D",
    rdquo: "\u201D",
    rdquor: "\u201D",
    CloseCurlyQuote: "\u2019",
    rsquo: "\u2019",
    rsquor: "\u2019",
    Colon: "\u2237",
    Proportion: "\u2237",
    Colone: "\u2A74",
    Congruent: "\u2261",
    equiv: "\u2261",
    Conint: "\u222F",
    DoubleContourIntegral: "\u222F",
    ContourIntegral: "\u222E",
    conint: "\u222E",
    oint: "\u222E",
    Copf: "\u2102",
    complexes: "\u2102",
    Coproduct: "\u2210",
    coprod: "\u2210",
    CounterClockwiseContourIntegral: "\u2233",
    awconint: "\u2233",
    Cross: "\u2A2F",
    Cscr: "\u{1D49E}",
    Cup: "\u22D3",
    CupCap: "\u224D",
    asympeq: "\u224D",
    DDotrahd: "\u2911",
    DJcy: "\u0402",
    DScy: "\u0405",
    DZcy: "\u040F",
    Dagger: "\u2021",
    ddagger: "\u2021",
    Darr: "\u21A1",
    Dashv: "\u2AE4",
    DoubleLeftTee: "\u2AE4",
    Dcaron: "\u010E",
    Dcy: "\u0414",
    Del: "\u2207",
    nabla: "\u2207",
    Delta: "\u0394",
    Dfr: "\u{1D507}",
    DiacriticalAcute: "\xB4",
    acute: "\xB4",
    DiacriticalDot: "\u02D9",
    dot: "\u02D9",
    DiacriticalDoubleAcute: "\u02DD",
    dblac: "\u02DD",
    DiacriticalGrave: "`",
    grave: "`",
    DiacriticalTilde: "\u02DC",
    tilde: "\u02DC",
    Diamond: "\u22C4",
    diam: "\u22C4",
    diamond: "\u22C4",
    DifferentialD: "\u2146",
    dd: "\u2146",
    Dopf: "\u{1D53B}",
    Dot: "\xA8",
    DoubleDot: "\xA8",
    die: "\xA8",
    uml: "\xA8",
    DotDot: "\u20DC",
    DotEqual: "\u2250",
    doteq: "\u2250",
    esdot: "\u2250",
    DoubleDownArrow: "\u21D3",
    Downarrow: "\u21D3",
    dArr: "\u21D3",
    DoubleLeftArrow: "\u21D0",
    Leftarrow: "\u21D0",
    lArr: "\u21D0",
    DoubleLeftRightArrow: "\u21D4",
    Leftrightarrow: "\u21D4",
    hArr: "\u21D4",
    iff: "\u21D4",
    DoubleLongLeftArrow: "\u27F8",
    Longleftarrow: "\u27F8",
    xlArr: "\u27F8",
    DoubleLongLeftRightArrow: "\u27FA",
    Longleftrightarrow: "\u27FA",
    xhArr: "\u27FA",
    DoubleLongRightArrow: "\u27F9",
    Longrightarrow: "\u27F9",
    xrArr: "\u27F9",
    DoubleRightArrow: "\u21D2",
    Implies: "\u21D2",
    Rightarrow: "\u21D2",
    rArr: "\u21D2",
    DoubleRightTee: "\u22A8",
    vDash: "\u22A8",
    DoubleUpArrow: "\u21D1",
    Uparrow: "\u21D1",
    uArr: "\u21D1",
    DoubleUpDownArrow: "\u21D5",
    Updownarrow: "\u21D5",
    vArr: "\u21D5",
    DoubleVerticalBar: "\u2225",
    par: "\u2225",
    parallel: "\u2225",
    shortparallel: "\u2225",
    spar: "\u2225",
    DownArrow: "\u2193",
    ShortDownArrow: "\u2193",
    darr: "\u2193",
    downarrow: "\u2193",
    DownArrowBar: "\u2913",
    DownArrowUpArrow: "\u21F5",
    duarr: "\u21F5",
    DownBreve: "\u0311",
    DownLeftRightVector: "\u2950",
    DownLeftTeeVector: "\u295E",
    DownLeftVector: "\u21BD",
    leftharpoondown: "\u21BD",
    lhard: "\u21BD",
    DownLeftVectorBar: "\u2956",
    DownRightTeeVector: "\u295F",
    DownRightVector: "\u21C1",
    rhard: "\u21C1",
    rightharpoondown: "\u21C1",
    DownRightVectorBar: "\u2957",
    DownTee: "\u22A4",
    top: "\u22A4",
    DownTeeArrow: "\u21A7",
    mapstodown: "\u21A7",
    Dscr: "\u{1D49F}",
    Dstrok: "\u0110",
    ENG: "\u014A",
    ETH: "\xD0",
    Eacute: "\xC9",
    Ecaron: "\u011A",
    Ecirc: "\xCA",
    Ecy: "\u042D",
    Edot: "\u0116",
    Efr: "\u{1D508}",
    Egrave: "\xC8",
    Element: "\u2208",
    in: "\u2208",
    isin: "\u2208",
    isinv: "\u2208",
    Emacr: "\u0112",
    EmptySmallSquare: "\u25FB",
    EmptyVerySmallSquare: "\u25AB",
    Eogon: "\u0118",
    Eopf: "\u{1D53C}",
    Epsilon: "\u0395",
    Equal: "\u2A75",
    EqualTilde: "\u2242",
    eqsim: "\u2242",
    esim: "\u2242",
    Equilibrium: "\u21CC",
    rightleftharpoons: "\u21CC",
    rlhar: "\u21CC",
    Escr: "\u2130",
    expectation: "\u2130",
    Esim: "\u2A73",
    Eta: "\u0397",
    Euml: "\xCB",
    Exists: "\u2203",
    exist: "\u2203",
    ExponentialE: "\u2147",
    ee: "\u2147",
    exponentiale: "\u2147",
    Fcy: "\u0424",
    Ffr: "\u{1D509}",
    FilledSmallSquare: "\u25FC",
    FilledVerySmallSquare: "\u25AA",
    blacksquare: "\u25AA",
    squarf: "\u25AA",
    squf: "\u25AA",
    Fopf: "\u{1D53D}",
    ForAll: "\u2200",
    forall: "\u2200",
    Fouriertrf: "\u2131",
    Fscr: "\u2131",
    GJcy: "\u0403",
    GT: ">",
    gt: ">",
    Gamma: "\u0393",
    Gammad: "\u03DC",
    Gbreve: "\u011E",
    Gcedil: "\u0122",
    Gcirc: "\u011C",
    Gcy: "\u0413",
    Gdot: "\u0120",
    Gfr: "\u{1D50A}",
    Gg: "\u22D9",
    ggg: "\u22D9",
    Gopf: "\u{1D53E}",
    GreaterEqual: "\u2265",
    ge: "\u2265",
    geq: "\u2265",
    GreaterEqualLess: "\u22DB",
    gel: "\u22DB",
    gtreqless: "\u22DB",
    GreaterFullEqual: "\u2267",
    gE: "\u2267",
    geqq: "\u2267",
    GreaterGreater: "\u2AA2",
    GreaterLess: "\u2277",
    gl: "\u2277",
    gtrless: "\u2277",
    GreaterSlantEqual: "\u2A7E",
    geqslant: "\u2A7E",
    ges: "\u2A7E",
    GreaterTilde: "\u2273",
    gsim: "\u2273",
    gtrsim: "\u2273",
    Gscr: "\u{1D4A2}",
    Gt: "\u226B",
    NestedGreaterGreater: "\u226B",
    gg: "\u226B",
    HARDcy: "\u042A",
    Hacek: "\u02C7",
    caron: "\u02C7",
    Hat: "^",
    Hcirc: "\u0124",
    Hfr: "\u210C",
    Poincareplane: "\u210C",
    HilbertSpace: "\u210B",
    Hscr: "\u210B",
    hamilt: "\u210B",
    Hopf: "\u210D",
    quaternions: "\u210D",
    HorizontalLine: "\u2500",
    boxh: "\u2500",
    Hstrok: "\u0126",
    HumpEqual: "\u224F",
    bumpe: "\u224F",
    bumpeq: "\u224F",
    IEcy: "\u0415",
    IJlig: "\u0132",
    IOcy: "\u0401",
    Iacute: "\xCD",
    Icirc: "\xCE",
    Icy: "\u0418",
    Idot: "\u0130",
    Ifr: "\u2111",
    Im: "\u2111",
    image: "\u2111",
    imagpart: "\u2111",
    Igrave: "\xCC",
    Imacr: "\u012A",
    ImaginaryI: "\u2148",
    ii: "\u2148",
    Int: "\u222C",
    Integral: "\u222B",
    int: "\u222B",
    Intersection: "\u22C2",
    bigcap: "\u22C2",
    xcap: "\u22C2",
    InvisibleComma: "\u2063",
    ic: "\u2063",
    InvisibleTimes: "\u2062",
    it: "\u2062",
    Iogon: "\u012E",
    Iopf: "\u{1D540}",
    Iota: "\u0399",
    Iscr: "\u2110",
    imagline: "\u2110",
    Itilde: "\u0128",
    Iukcy: "\u0406",
    Iuml: "\xCF",
    Jcirc: "\u0134",
    Jcy: "\u0419",
    Jfr: "\u{1D50D}",
    Jopf: "\u{1D541}",
    Jscr: "\u{1D4A5}",
    Jsercy: "\u0408",
    Jukcy: "\u0404",
    KHcy: "\u0425",
    KJcy: "\u040C",
    Kappa: "\u039A",
    Kcedil: "\u0136",
    Kcy: "\u041A",
    Kfr: "\u{1D50E}",
    Kopf: "\u{1D542}",
    Kscr: "\u{1D4A6}",
    LJcy: "\u0409",
    LT: "<",
    lt: "<",
    Lacute: "\u0139",
    Lambda: "\u039B",
    Lang: "\u27EA",
    Laplacetrf: "\u2112",
    Lscr: "\u2112",
    lagran: "\u2112",
    Larr: "\u219E",
    twoheadleftarrow: "\u219E",
    Lcaron: "\u013D",
    Lcedil: "\u013B",
    Lcy: "\u041B",
    LeftAngleBracket: "\u27E8",
    lang: "\u27E8",
    langle: "\u27E8",
    LeftArrow: "\u2190",
    ShortLeftArrow: "\u2190",
    larr: "\u2190",
    leftarrow: "\u2190",
    slarr: "\u2190",
    LeftArrowBar: "\u21E4",
    larrb: "\u21E4",
    LeftArrowRightArrow: "\u21C6",
    leftrightarrows: "\u21C6",
    lrarr: "\u21C6",
    LeftCeiling: "\u2308",
    lceil: "\u2308",
    LeftDoubleBracket: "\u27E6",
    lobrk: "\u27E6",
    LeftDownTeeVector: "\u2961",
    LeftDownVector: "\u21C3",
    dharl: "\u21C3",
    downharpoonleft: "\u21C3",
    LeftDownVectorBar: "\u2959",
    LeftFloor: "\u230A",
    lfloor: "\u230A",
    LeftRightArrow: "\u2194",
    harr: "\u2194",
    leftrightarrow: "\u2194",
    LeftRightVector: "\u294E",
    LeftTee: "\u22A3",
    dashv: "\u22A3",
    LeftTeeArrow: "\u21A4",
    mapstoleft: "\u21A4",
    LeftTeeVector: "\u295A",
    LeftTriangle: "\u22B2",
    vartriangleleft: "\u22B2",
    vltri: "\u22B2",
    LeftTriangleBar: "\u29CF",
    LeftTriangleEqual: "\u22B4",
    ltrie: "\u22B4",
    trianglelefteq: "\u22B4",
    LeftUpDownVector: "\u2951",
    LeftUpTeeVector: "\u2960",
    LeftUpVector: "\u21BF",
    uharl: "\u21BF",
    upharpoonleft: "\u21BF",
    LeftUpVectorBar: "\u2958",
    LeftVector: "\u21BC",
    leftharpoonup: "\u21BC",
    lharu: "\u21BC",
    LeftVectorBar: "\u2952",
    LessEqualGreater: "\u22DA",
    leg: "\u22DA",
    lesseqgtr: "\u22DA",
    LessFullEqual: "\u2266",
    lE: "\u2266",
    leqq: "\u2266",
    LessGreater: "\u2276",
    lessgtr: "\u2276",
    lg: "\u2276",
    LessLess: "\u2AA1",
    LessSlantEqual: "\u2A7D",
    leqslant: "\u2A7D",
    les: "\u2A7D",
    LessTilde: "\u2272",
    lesssim: "\u2272",
    lsim: "\u2272",
    Lfr: "\u{1D50F}",
    Ll: "\u22D8",
    Lleftarrow: "\u21DA",
    lAarr: "\u21DA",
    Lmidot: "\u013F",
    LongLeftArrow: "\u27F5",
    longleftarrow: "\u27F5",
    xlarr: "\u27F5",
    LongLeftRightArrow: "\u27F7",
    longleftrightarrow: "\u27F7",
    xharr: "\u27F7",
    LongRightArrow: "\u27F6",
    longrightarrow: "\u27F6",
    xrarr: "\u27F6",
    Lopf: "\u{1D543}",
    LowerLeftArrow: "\u2199",
    swarr: "\u2199",
    swarrow: "\u2199",
    LowerRightArrow: "\u2198",
    searr: "\u2198",
    searrow: "\u2198",
    Lsh: "\u21B0",
    lsh: "\u21B0",
    Lstrok: "\u0141",
    Lt: "\u226A",
    NestedLessLess: "\u226A",
    ll: "\u226A",
    Map: "\u2905",
    Mcy: "\u041C",
    MediumSpace: "\u205F",
    Mellintrf: "\u2133",
    Mscr: "\u2133",
    phmmat: "\u2133",
    Mfr: "\u{1D510}",
    MinusPlus: "\u2213",
    mnplus: "\u2213",
    mp: "\u2213",
    Mopf: "\u{1D544}",
    Mu: "\u039C",
    NJcy: "\u040A",
    Nacute: "\u0143",
    Ncaron: "\u0147",
    Ncedil: "\u0145",
    Ncy: "\u041D",
    NegativeMediumSpace: "\u200B",
    NegativeThickSpace: "\u200B",
    NegativeThinSpace: "\u200B",
    NegativeVeryThinSpace: "\u200B",
    ZeroWidthSpace: "\u200B",
    NewLine: `
`,
    Nfr: "\u{1D511}",
    NoBreak: "\u2060",
    NonBreakingSpace: "\xA0",
    nbsp: "\xA0",
    Nopf: "\u2115",
    naturals: "\u2115",
    Not: "\u2AEC",
    NotCongruent: "\u2262",
    nequiv: "\u2262",
    NotCupCap: "\u226D",
    NotDoubleVerticalBar: "\u2226",
    npar: "\u2226",
    nparallel: "\u2226",
    nshortparallel: "\u2226",
    nspar: "\u2226",
    NotElement: "\u2209",
    notin: "\u2209",
    notinva: "\u2209",
    NotEqual: "\u2260",
    ne: "\u2260",
    NotEqualTilde: "\u2242\u0338",
    nesim: "\u2242\u0338",
    NotExists: "\u2204",
    nexist: "\u2204",
    nexists: "\u2204",
    NotGreater: "\u226F",
    ngt: "\u226F",
    ngtr: "\u226F",
    NotGreaterEqual: "\u2271",
    nge: "\u2271",
    ngeq: "\u2271",
    NotGreaterFullEqual: "\u2267\u0338",
    ngE: "\u2267\u0338",
    ngeqq: "\u2267\u0338",
    NotGreaterGreater: "\u226B\u0338",
    nGtv: "\u226B\u0338",
    NotGreaterLess: "\u2279",
    ntgl: "\u2279",
    NotGreaterSlantEqual: "\u2A7E\u0338",
    ngeqslant: "\u2A7E\u0338",
    nges: "\u2A7E\u0338",
    NotGreaterTilde: "\u2275",
    ngsim: "\u2275",
    NotHumpDownHump: "\u224E\u0338",
    nbump: "\u224E\u0338",
    NotHumpEqual: "\u224F\u0338",
    nbumpe: "\u224F\u0338",
    NotLeftTriangle: "\u22EA",
    nltri: "\u22EA",
    ntriangleleft: "\u22EA",
    NotLeftTriangleBar: "\u29CF\u0338",
    NotLeftTriangleEqual: "\u22EC",
    nltrie: "\u22EC",
    ntrianglelefteq: "\u22EC",
    NotLess: "\u226E",
    nless: "\u226E",
    nlt: "\u226E",
    NotLessEqual: "\u2270",
    nle: "\u2270",
    nleq: "\u2270",
    NotLessGreater: "\u2278",
    ntlg: "\u2278",
    NotLessLess: "\u226A\u0338",
    nLtv: "\u226A\u0338",
    NotLessSlantEqual: "\u2A7D\u0338",
    nleqslant: "\u2A7D\u0338",
    nles: "\u2A7D\u0338",
    NotLessTilde: "\u2274",
    nlsim: "\u2274",
    NotNestedGreaterGreater: "\u2AA2\u0338",
    NotNestedLessLess: "\u2AA1\u0338",
    NotPrecedes: "\u2280",
    npr: "\u2280",
    nprec: "\u2280",
    NotPrecedesEqual: "\u2AAF\u0338",
    npre: "\u2AAF\u0338",
    npreceq: "\u2AAF\u0338",
    NotPrecedesSlantEqual: "\u22E0",
    nprcue: "\u22E0",
    NotReverseElement: "\u220C",
    notni: "\u220C",
    notniva: "\u220C",
    NotRightTriangle: "\u22EB",
    nrtri: "\u22EB",
    ntriangleright: "\u22EB",
    NotRightTriangleBar: "\u29D0\u0338",
    NotRightTriangleEqual: "\u22ED",
    nrtrie: "\u22ED",
    ntrianglerighteq: "\u22ED",
    NotSquareSubset: "\u228F\u0338",
    NotSquareSubsetEqual: "\u22E2",
    nsqsube: "\u22E2",
    NotSquareSuperset: "\u2290\u0338",
    NotSquareSupersetEqual: "\u22E3",
    nsqsupe: "\u22E3",
    NotSubset: "\u2282\u20D2",
    nsubset: "\u2282\u20D2",
    vnsub: "\u2282\u20D2",
    NotSubsetEqual: "\u2288",
    nsube: "\u2288",
    nsubseteq: "\u2288",
    NotSucceeds: "\u2281",
    nsc: "\u2281",
    nsucc: "\u2281",
    NotSucceedsEqual: "\u2AB0\u0338",
    nsce: "\u2AB0\u0338",
    nsucceq: "\u2AB0\u0338",
    NotSucceedsSlantEqual: "\u22E1",
    nsccue: "\u22E1",
    NotSucceedsTilde: "\u227F\u0338",
    NotSuperset: "\u2283\u20D2",
    nsupset: "\u2283\u20D2",
    vnsup: "\u2283\u20D2",
    NotSupersetEqual: "\u2289",
    nsupe: "\u2289",
    nsupseteq: "\u2289",
    NotTilde: "\u2241",
    nsim: "\u2241",
    NotTildeEqual: "\u2244",
    nsime: "\u2244",
    nsimeq: "\u2244",
    NotTildeFullEqual: "\u2247",
    ncong: "\u2247",
    NotTildeTilde: "\u2249",
    nap: "\u2249",
    napprox: "\u2249",
    NotVerticalBar: "\u2224",
    nmid: "\u2224",
    nshortmid: "\u2224",
    nsmid: "\u2224",
    Nscr: "\u{1D4A9}",
    Ntilde: "\xD1",
    Nu: "\u039D",
    OElig: "\u0152",
    Oacute: "\xD3",
    Ocirc: "\xD4",
    Ocy: "\u041E",
    Odblac: "\u0150",
    Ofr: "\u{1D512}",
    Ograve: "\xD2",
    Omacr: "\u014C",
    Omega: "\u03A9",
    ohm: "\u03A9",
    Omicron: "\u039F",
    Oopf: "\u{1D546}",
    OpenCurlyDoubleQuote: "\u201C",
    ldquo: "\u201C",
    OpenCurlyQuote: "\u2018",
    lsquo: "\u2018",
    Or: "\u2A54",
    Oscr: "\u{1D4AA}",
    Oslash: "\xD8",
    Otilde: "\xD5",
    Otimes: "\u2A37",
    Ouml: "\xD6",
    OverBar: "\u203E",
    oline: "\u203E",
    OverBrace: "\u23DE",
    OverBracket: "\u23B4",
    tbrk: "\u23B4",
    OverParenthesis: "\u23DC",
    PartialD: "\u2202",
    part: "\u2202",
    Pcy: "\u041F",
    Pfr: "\u{1D513}",
    Phi: "\u03A6",
    Pi: "\u03A0",
    PlusMinus: "\xB1",
    plusmn: "\xB1",
    pm: "\xB1",
    Popf: "\u2119",
    primes: "\u2119",
    Pr: "\u2ABB",
    Precedes: "\u227A",
    pr: "\u227A",
    prec: "\u227A",
    PrecedesEqual: "\u2AAF",
    pre: "\u2AAF",
    preceq: "\u2AAF",
    PrecedesSlantEqual: "\u227C",
    prcue: "\u227C",
    preccurlyeq: "\u227C",
    PrecedesTilde: "\u227E",
    precsim: "\u227E",
    prsim: "\u227E",
    Prime: "\u2033",
    Product: "\u220F",
    prod: "\u220F",
    Proportional: "\u221D",
    prop: "\u221D",
    propto: "\u221D",
    varpropto: "\u221D",
    vprop: "\u221D",
    Pscr: "\u{1D4AB}",
    Psi: "\u03A8",
    QUOT: '"',
    quot: '"',
    Qfr: "\u{1D514}",
    Qopf: "\u211A",
    rationals: "\u211A",
    Qscr: "\u{1D4AC}",
    RBarr: "\u2910",
    drbkarow: "\u2910",
    REG: "\xAE",
    circledR: "\xAE",
    reg: "\xAE",
    Racute: "\u0154",
    Rang: "\u27EB",
    Rarr: "\u21A0",
    twoheadrightarrow: "\u21A0",
    Rarrtl: "\u2916",
    Rcaron: "\u0158",
    Rcedil: "\u0156",
    Rcy: "\u0420",
    Re: "\u211C",
    Rfr: "\u211C",
    real: "\u211C",
    realpart: "\u211C",
    ReverseElement: "\u220B",
    SuchThat: "\u220B",
    ni: "\u220B",
    niv: "\u220B",
    ReverseEquilibrium: "\u21CB",
    leftrightharpoons: "\u21CB",
    lrhar: "\u21CB",
    ReverseUpEquilibrium: "\u296F",
    duhar: "\u296F",
    Rho: "\u03A1",
    RightAngleBracket: "\u27E9",
    rang: "\u27E9",
    rangle: "\u27E9",
    RightArrow: "\u2192",
    ShortRightArrow: "\u2192",
    rarr: "\u2192",
    rightarrow: "\u2192",
    srarr: "\u2192",
    RightArrowBar: "\u21E5",
    rarrb: "\u21E5",
    RightArrowLeftArrow: "\u21C4",
    rightleftarrows: "\u21C4",
    rlarr: "\u21C4",
    RightCeiling: "\u2309",
    rceil: "\u2309",
    RightDoubleBracket: "\u27E7",
    robrk: "\u27E7",
    RightDownTeeVector: "\u295D",
    RightDownVector: "\u21C2",
    dharr: "\u21C2",
    downharpoonright: "\u21C2",
    RightDownVectorBar: "\u2955",
    RightFloor: "\u230B",
    rfloor: "\u230B",
    RightTee: "\u22A2",
    vdash: "\u22A2",
    RightTeeArrow: "\u21A6",
    map: "\u21A6",
    mapsto: "\u21A6",
    RightTeeVector: "\u295B",
    RightTriangle: "\u22B3",
    vartriangleright: "\u22B3",
    vrtri: "\u22B3",
    RightTriangleBar: "\u29D0",
    RightTriangleEqual: "\u22B5",
    rtrie: "\u22B5",
    trianglerighteq: "\u22B5",
    RightUpDownVector: "\u294F",
    RightUpTeeVector: "\u295C",
    RightUpVector: "\u21BE",
    uharr: "\u21BE",
    upharpoonright: "\u21BE",
    RightUpVectorBar: "\u2954",
    RightVector: "\u21C0",
    rharu: "\u21C0",
    rightharpoonup: "\u21C0",
    RightVectorBar: "\u2953",
    Ropf: "\u211D",
    reals: "\u211D",
    RoundImplies: "\u2970",
    Rrightarrow: "\u21DB",
    rAarr: "\u21DB",
    Rscr: "\u211B",
    realine: "\u211B",
    Rsh: "\u21B1",
    rsh: "\u21B1",
    RuleDelayed: "\u29F4",
    SHCHcy: "\u0429",
    SHcy: "\u0428",
    SOFTcy: "\u042C",
    Sacute: "\u015A",
    Sc: "\u2ABC",
    Scaron: "\u0160",
    Scedil: "\u015E",
    Scirc: "\u015C",
    Scy: "\u0421",
    Sfr: "\u{1D516}",
    ShortUpArrow: "\u2191",
    UpArrow: "\u2191",
    uarr: "\u2191",
    uparrow: "\u2191",
    Sigma: "\u03A3",
    SmallCircle: "\u2218",
    compfn: "\u2218",
    Sopf: "\u{1D54A}",
    Sqrt: "\u221A",
    radic: "\u221A",
    Square: "\u25A1",
    squ: "\u25A1",
    square: "\u25A1",
    SquareIntersection: "\u2293",
    sqcap: "\u2293",
    SquareSubset: "\u228F",
    sqsub: "\u228F",
    sqsubset: "\u228F",
    SquareSubsetEqual: "\u2291",
    sqsube: "\u2291",
    sqsubseteq: "\u2291",
    SquareSuperset: "\u2290",
    sqsup: "\u2290",
    sqsupset: "\u2290",
    SquareSupersetEqual: "\u2292",
    sqsupe: "\u2292",
    sqsupseteq: "\u2292",
    SquareUnion: "\u2294",
    sqcup: "\u2294",
    Sscr: "\u{1D4AE}",
    Star: "\u22C6",
    sstarf: "\u22C6",
    Sub: "\u22D0",
    Subset: "\u22D0",
    SubsetEqual: "\u2286",
    sube: "\u2286",
    subseteq: "\u2286",
    Succeeds: "\u227B",
    sc: "\u227B",
    succ: "\u227B",
    SucceedsEqual: "\u2AB0",
    sce: "\u2AB0",
    succeq: "\u2AB0",
    SucceedsSlantEqual: "\u227D",
    sccue: "\u227D",
    succcurlyeq: "\u227D",
    SucceedsTilde: "\u227F",
    scsim: "\u227F",
    succsim: "\u227F",
    Sum: "\u2211",
    sum: "\u2211",
    Sup: "\u22D1",
    Supset: "\u22D1",
    Superset: "\u2283",
    sup: "\u2283",
    supset: "\u2283",
    SupersetEqual: "\u2287",
    supe: "\u2287",
    supseteq: "\u2287",
    THORN: "\xDE",
    TRADE: "\u2122",
    trade: "\u2122",
    TSHcy: "\u040B",
    TScy: "\u0426",
    Tab: "	",
    Tau: "\u03A4",
    Tcaron: "\u0164",
    Tcedil: "\u0162",
    Tcy: "\u0422",
    Tfr: "\u{1D517}",
    Therefore: "\u2234",
    there4: "\u2234",
    therefore: "\u2234",
    Theta: "\u0398",
    ThickSpace: "\u205F\u200A",
    ThinSpace: "\u2009",
    thinsp: "\u2009",
    Tilde: "\u223C",
    sim: "\u223C",
    thicksim: "\u223C",
    thksim: "\u223C",
    TildeEqual: "\u2243",
    sime: "\u2243",
    simeq: "\u2243",
    TildeFullEqual: "\u2245",
    cong: "\u2245",
    TildeTilde: "\u2248",
    ap: "\u2248",
    approx: "\u2248",
    asymp: "\u2248",
    thickapprox: "\u2248",
    thkap: "\u2248",
    Topf: "\u{1D54B}",
    TripleDot: "\u20DB",
    tdot: "\u20DB",
    Tscr: "\u{1D4AF}",
    Tstrok: "\u0166",
    Uacute: "\xDA",
    Uarr: "\u219F",
    Uarrocir: "\u2949",
    Ubrcy: "\u040E",
    Ubreve: "\u016C",
    Ucirc: "\xDB",
    Ucy: "\u0423",
    Udblac: "\u0170",
    Ufr: "\u{1D518}",
    Ugrave: "\xD9",
    Umacr: "\u016A",
    UnderBar: "_",
    lowbar: "_",
    UnderBrace: "\u23DF",
    UnderBracket: "\u23B5",
    bbrk: "\u23B5",
    UnderParenthesis: "\u23DD",
    Union: "\u22C3",
    bigcup: "\u22C3",
    xcup: "\u22C3",
    UnionPlus: "\u228E",
    uplus: "\u228E",
    Uogon: "\u0172",
    Uopf: "\u{1D54C}",
    UpArrowBar: "\u2912",
    UpArrowDownArrow: "\u21C5",
    udarr: "\u21C5",
    UpDownArrow: "\u2195",
    updownarrow: "\u2195",
    varr: "\u2195",
    UpEquilibrium: "\u296E",
    udhar: "\u296E",
    UpTee: "\u22A5",
    bot: "\u22A5",
    bottom: "\u22A5",
    perp: "\u22A5",
    UpTeeArrow: "\u21A5",
    mapstoup: "\u21A5",
    UpperLeftArrow: "\u2196",
    nwarr: "\u2196",
    nwarrow: "\u2196",
    UpperRightArrow: "\u2197",
    nearr: "\u2197",
    nearrow: "\u2197",
    Upsi: "\u03D2",
    upsih: "\u03D2",
    Upsilon: "\u03A5",
    Uring: "\u016E",
    Uscr: "\u{1D4B0}",
    Utilde: "\u0168",
    Uuml: "\xDC",
    VDash: "\u22AB",
    Vbar: "\u2AEB",
    Vcy: "\u0412",
    Vdash: "\u22A9",
    Vdashl: "\u2AE6",
    Vee: "\u22C1",
    bigvee: "\u22C1",
    xvee: "\u22C1",
    Verbar: "\u2016",
    Vert: "\u2016",
    VerticalBar: "\u2223",
    mid: "\u2223",
    shortmid: "\u2223",
    smid: "\u2223",
    VerticalLine: "|",
    verbar: "|",
    vert: "|",
    VerticalSeparator: "\u2758",
    VerticalTilde: "\u2240",
    wr: "\u2240",
    wreath: "\u2240",
    VeryThinSpace: "\u200A",
    hairsp: "\u200A",
    Vfr: "\u{1D519}",
    Vopf: "\u{1D54D}",
    Vscr: "\u{1D4B1}",
    Vvdash: "\u22AA",
    Wcirc: "\u0174",
    Wedge: "\u22C0",
    bigwedge: "\u22C0",
    xwedge: "\u22C0",
    Wfr: "\u{1D51A}",
    Wopf: "\u{1D54E}",
    Wscr: "\u{1D4B2}",
    Xfr: "\u{1D51B}",
    Xi: "\u039E",
    Xopf: "\u{1D54F}",
    Xscr: "\u{1D4B3}",
    YAcy: "\u042F",
    YIcy: "\u0407",
    YUcy: "\u042E",
    Yacute: "\xDD",
    Ycirc: "\u0176",
    Ycy: "\u042B",
    Yfr: "\u{1D51C}",
    Yopf: "\u{1D550}",
    Yscr: "\u{1D4B4}",
    Yuml: "\u0178",
    ZHcy: "\u0416",
    Zacute: "\u0179",
    Zcaron: "\u017D",
    Zcy: "\u0417",
    Zdot: "\u017B",
    Zeta: "\u0396",
    Zfr: "\u2128",
    zeetrf: "\u2128",
    Zopf: "\u2124",
    integers: "\u2124",
    Zscr: "\u{1D4B5}",
    aacute: "\xE1",
    abreve: "\u0103",
    ac: "\u223E",
    mstpos: "\u223E",
    acE: "\u223E\u0333",
    acd: "\u223F",
    acirc: "\xE2",
    acy: "\u0430",
    aelig: "\xE6",
    afr: "\u{1D51E}",
    agrave: "\xE0",
    alefsym: "\u2135",
    aleph: "\u2135",
    alpha: "\u03B1",
    amacr: "\u0101",
    amalg: "\u2A3F",
    and: "\u2227",
    wedge: "\u2227",
    andand: "\u2A55",
    andd: "\u2A5C",
    andslope: "\u2A58",
    andv: "\u2A5A",
    ang: "\u2220",
    angle: "\u2220",
    ange: "\u29A4",
    angmsd: "\u2221",
    measuredangle: "\u2221",
    angmsdaa: "\u29A8",
    angmsdab: "\u29A9",
    angmsdac: "\u29AA",
    angmsdad: "\u29AB",
    angmsdae: "\u29AC",
    angmsdaf: "\u29AD",
    angmsdag: "\u29AE",
    angmsdah: "\u29AF",
    angrt: "\u221F",
    angrtvb: "\u22BE",
    angrtvbd: "\u299D",
    angsph: "\u2222",
    angzarr: "\u237C",
    aogon: "\u0105",
    aopf: "\u{1D552}",
    apE: "\u2A70",
    apacir: "\u2A6F",
    ape: "\u224A",
    approxeq: "\u224A",
    apid: "\u224B",
    apos: "'",
    aring: "\xE5",
    ascr: "\u{1D4B6}",
    ast: "*",
    midast: "*",
    atilde: "\xE3",
    auml: "\xE4",
    awint: "\u2A11",
    bNot: "\u2AED",
    backcong: "\u224C",
    bcong: "\u224C",
    backepsilon: "\u03F6",
    bepsi: "\u03F6",
    backprime: "\u2035",
    bprime: "\u2035",
    backsim: "\u223D",
    bsim: "\u223D",
    backsimeq: "\u22CD",
    bsime: "\u22CD",
    barvee: "\u22BD",
    barwed: "\u2305",
    barwedge: "\u2305",
    bbrktbrk: "\u23B6",
    bcy: "\u0431",
    bdquo: "\u201E",
    ldquor: "\u201E",
    bemptyv: "\u29B0",
    beta: "\u03B2",
    beth: "\u2136",
    between: "\u226C",
    twixt: "\u226C",
    bfr: "\u{1D51F}",
    bigcirc: "\u25EF",
    xcirc: "\u25EF",
    bigodot: "\u2A00",
    xodot: "\u2A00",
    bigoplus: "\u2A01",
    xoplus: "\u2A01",
    bigotimes: "\u2A02",
    xotime: "\u2A02",
    bigsqcup: "\u2A06",
    xsqcup: "\u2A06",
    bigstar: "\u2605",
    starf: "\u2605",
    bigtriangledown: "\u25BD",
    xdtri: "\u25BD",
    bigtriangleup: "\u25B3",
    xutri: "\u25B3",
    biguplus: "\u2A04",
    xuplus: "\u2A04",
    bkarow: "\u290D",
    rbarr: "\u290D",
    blacklozenge: "\u29EB",
    lozf: "\u29EB",
    blacktriangle: "\u25B4",
    utrif: "\u25B4",
    blacktriangledown: "\u25BE",
    dtrif: "\u25BE",
    blacktriangleleft: "\u25C2",
    ltrif: "\u25C2",
    blacktriangleright: "\u25B8",
    rtrif: "\u25B8",
    blank: "\u2423",
    blk12: "\u2592",
    blk14: "\u2591",
    blk34: "\u2593",
    block: "\u2588",
    bne: "=\u20E5",
    bnequiv: "\u2261\u20E5",
    bnot: "\u2310",
    bopf: "\u{1D553}",
    bowtie: "\u22C8",
    boxDL: "\u2557",
    boxDR: "\u2554",
    boxDl: "\u2556",
    boxDr: "\u2553",
    boxH: "\u2550",
    boxHD: "\u2566",
    boxHU: "\u2569",
    boxHd: "\u2564",
    boxHu: "\u2567",
    boxUL: "\u255D",
    boxUR: "\u255A",
    boxUl: "\u255C",
    boxUr: "\u2559",
    boxV: "\u2551",
    boxVH: "\u256C",
    boxVL: "\u2563",
    boxVR: "\u2560",
    boxVh: "\u256B",
    boxVl: "\u2562",
    boxVr: "\u255F",
    boxbox: "\u29C9",
    boxdL: "\u2555",
    boxdR: "\u2552",
    boxdl: "\u2510",
    boxdr: "\u250C",
    boxhD: "\u2565",
    boxhU: "\u2568",
    boxhd: "\u252C",
    boxhu: "\u2534",
    boxminus: "\u229F",
    minusb: "\u229F",
    boxplus: "\u229E",
    plusb: "\u229E",
    boxtimes: "\u22A0",
    timesb: "\u22A0",
    boxuL: "\u255B",
    boxuR: "\u2558",
    boxul: "\u2518",
    boxur: "\u2514",
    boxv: "\u2502",
    boxvH: "\u256A",
    boxvL: "\u2561",
    boxvR: "\u255E",
    boxvh: "\u253C",
    boxvl: "\u2524",
    boxvr: "\u251C",
    brvbar: "\xA6",
    bscr: "\u{1D4B7}",
    bsemi: "\u204F",
    bsol: "\\",
    bsolb: "\u29C5",
    bsolhsub: "\u27C8",
    bull: "\u2022",
    bullet: "\u2022",
    bumpE: "\u2AAE",
    cacute: "\u0107",
    cap: "\u2229",
    capand: "\u2A44",
    capbrcup: "\u2A49",
    capcap: "\u2A4B",
    capcup: "\u2A47",
    capdot: "\u2A40",
    caps: "\u2229\uFE00",
    caret: "\u2041",
    ccaps: "\u2A4D",
    ccaron: "\u010D",
    ccedil: "\xE7",
    ccirc: "\u0109",
    ccups: "\u2A4C",
    ccupssm: "\u2A50",
    cdot: "\u010B",
    cemptyv: "\u29B2",
    cent: "\xA2",
    cfr: "\u{1D520}",
    chcy: "\u0447",
    check: "\u2713",
    checkmark: "\u2713",
    chi: "\u03C7",
    cir: "\u25CB",
    cirE: "\u29C3",
    circ: "\u02C6",
    circeq: "\u2257",
    cire: "\u2257",
    circlearrowleft: "\u21BA",
    olarr: "\u21BA",
    circlearrowright: "\u21BB",
    orarr: "\u21BB",
    circledS: "\u24C8",
    oS: "\u24C8",
    circledast: "\u229B",
    oast: "\u229B",
    circledcirc: "\u229A",
    ocir: "\u229A",
    circleddash: "\u229D",
    odash: "\u229D",
    cirfnint: "\u2A10",
    cirmid: "\u2AEF",
    cirscir: "\u29C2",
    clubs: "\u2663",
    clubsuit: "\u2663",
    colon: ":",
    comma: ",",
    commat: "@",
    comp: "\u2201",
    complement: "\u2201",
    congdot: "\u2A6D",
    copf: "\u{1D554}",
    copysr: "\u2117",
    crarr: "\u21B5",
    cross: "\u2717",
    cscr: "\u{1D4B8}",
    csub: "\u2ACF",
    csube: "\u2AD1",
    csup: "\u2AD0",
    csupe: "\u2AD2",
    ctdot: "\u22EF",
    cudarrl: "\u2938",
    cudarrr: "\u2935",
    cuepr: "\u22DE",
    curlyeqprec: "\u22DE",
    cuesc: "\u22DF",
    curlyeqsucc: "\u22DF",
    cularr: "\u21B6",
    curvearrowleft: "\u21B6",
    cularrp: "\u293D",
    cup: "\u222A",
    cupbrcap: "\u2A48",
    cupcap: "\u2A46",
    cupcup: "\u2A4A",
    cupdot: "\u228D",
    cupor: "\u2A45",
    cups: "\u222A\uFE00",
    curarr: "\u21B7",
    curvearrowright: "\u21B7",
    curarrm: "\u293C",
    curlyvee: "\u22CE",
    cuvee: "\u22CE",
    curlywedge: "\u22CF",
    cuwed: "\u22CF",
    curren: "\xA4",
    cwint: "\u2231",
    cylcty: "\u232D",
    dHar: "\u2965",
    dagger: "\u2020",
    daleth: "\u2138",
    dash: "\u2010",
    hyphen: "\u2010",
    dbkarow: "\u290F",
    rBarr: "\u290F",
    dcaron: "\u010F",
    dcy: "\u0434",
    ddarr: "\u21CA",
    downdownarrows: "\u21CA",
    ddotseq: "\u2A77",
    eDDot: "\u2A77",
    deg: "\xB0",
    delta: "\u03B4",
    demptyv: "\u29B1",
    dfisht: "\u297F",
    dfr: "\u{1D521}",
    diamondsuit: "\u2666",
    diams: "\u2666",
    digamma: "\u03DD",
    gammad: "\u03DD",
    disin: "\u22F2",
    div: "\xF7",
    divide: "\xF7",
    divideontimes: "\u22C7",
    divonx: "\u22C7",
    djcy: "\u0452",
    dlcorn: "\u231E",
    llcorner: "\u231E",
    dlcrop: "\u230D",
    dollar: "$",
    dopf: "\u{1D555}",
    doteqdot: "\u2251",
    eDot: "\u2251",
    dotminus: "\u2238",
    minusd: "\u2238",
    dotplus: "\u2214",
    plusdo: "\u2214",
    dotsquare: "\u22A1",
    sdotb: "\u22A1",
    drcorn: "\u231F",
    lrcorner: "\u231F",
    drcrop: "\u230C",
    dscr: "\u{1D4B9}",
    dscy: "\u0455",
    dsol: "\u29F6",
    dstrok: "\u0111",
    dtdot: "\u22F1",
    dtri: "\u25BF",
    triangledown: "\u25BF",
    dwangle: "\u29A6",
    dzcy: "\u045F",
    dzigrarr: "\u27FF",
    eacute: "\xE9",
    easter: "\u2A6E",
    ecaron: "\u011B",
    ecir: "\u2256",
    eqcirc: "\u2256",
    ecirc: "\xEA",
    ecolon: "\u2255",
    eqcolon: "\u2255",
    ecy: "\u044D",
    edot: "\u0117",
    efDot: "\u2252",
    fallingdotseq: "\u2252",
    efr: "\u{1D522}",
    eg: "\u2A9A",
    egrave: "\xE8",
    egs: "\u2A96",
    eqslantgtr: "\u2A96",
    egsdot: "\u2A98",
    el: "\u2A99",
    elinters: "\u23E7",
    ell: "\u2113",
    els: "\u2A95",
    eqslantless: "\u2A95",
    elsdot: "\u2A97",
    emacr: "\u0113",
    empty: "\u2205",
    emptyset: "\u2205",
    emptyv: "\u2205",
    varnothing: "\u2205",
    emsp13: "\u2004",
    emsp14: "\u2005",
    emsp: "\u2003",
    eng: "\u014B",
    ensp: "\u2002",
    eogon: "\u0119",
    eopf: "\u{1D556}",
    epar: "\u22D5",
    eparsl: "\u29E3",
    eplus: "\u2A71",
    epsi: "\u03B5",
    epsilon: "\u03B5",
    epsiv: "\u03F5",
    straightepsilon: "\u03F5",
    varepsilon: "\u03F5",
    equals: "=",
    equest: "\u225F",
    questeq: "\u225F",
    equivDD: "\u2A78",
    eqvparsl: "\u29E5",
    erDot: "\u2253",
    risingdotseq: "\u2253",
    erarr: "\u2971",
    escr: "\u212F",
    eta: "\u03B7",
    eth: "\xF0",
    euml: "\xEB",
    euro: "\u20AC",
    excl: "!",
    fcy: "\u0444",
    female: "\u2640",
    ffilig: "\uFB03",
    fflig: "\uFB00",
    ffllig: "\uFB04",
    ffr: "\u{1D523}",
    filig: "\uFB01",
    fjlig: "fj",
    flat: "\u266D",
    fllig: "\uFB02",
    fltns: "\u25B1",
    fnof: "\u0192",
    fopf: "\u{1D557}",
    fork: "\u22D4",
    pitchfork: "\u22D4",
    forkv: "\u2AD9",
    fpartint: "\u2A0D",
    frac12: "\xBD",
    half: "\xBD",
    frac13: "\u2153",
    frac14: "\xBC",
    frac15: "\u2155",
    frac16: "\u2159",
    frac18: "\u215B",
    frac23: "\u2154",
    frac25: "\u2156",
    frac34: "\xBE",
    frac35: "\u2157",
    frac38: "\u215C",
    frac45: "\u2158",
    frac56: "\u215A",
    frac58: "\u215D",
    frac78: "\u215E",
    frasl: "\u2044",
    frown: "\u2322",
    sfrown: "\u2322",
    fscr: "\u{1D4BB}",
    gEl: "\u2A8C",
    gtreqqless: "\u2A8C",
    gacute: "\u01F5",
    gamma: "\u03B3",
    gap: "\u2A86",
    gtrapprox: "\u2A86",
    gbreve: "\u011F",
    gcirc: "\u011D",
    gcy: "\u0433",
    gdot: "\u0121",
    gescc: "\u2AA9",
    gesdot: "\u2A80",
    gesdoto: "\u2A82",
    gesdotol: "\u2A84",
    gesl: "\u22DB\uFE00",
    gesles: "\u2A94",
    gfr: "\u{1D524}",
    gimel: "\u2137",
    gjcy: "\u0453",
    glE: "\u2A92",
    gla: "\u2AA5",
    glj: "\u2AA4",
    gnE: "\u2269",
    gneqq: "\u2269",
    gnap: "\u2A8A",
    gnapprox: "\u2A8A",
    gne: "\u2A88",
    gneq: "\u2A88",
    gnsim: "\u22E7",
    gopf: "\u{1D558}",
    gscr: "\u210A",
    gsime: "\u2A8E",
    gsiml: "\u2A90",
    gtcc: "\u2AA7",
    gtcir: "\u2A7A",
    gtdot: "\u22D7",
    gtrdot: "\u22D7",
    gtlPar: "\u2995",
    gtquest: "\u2A7C",
    gtrarr: "\u2978",
    gvertneqq: "\u2269\uFE00",
    gvnE: "\u2269\uFE00",
    hardcy: "\u044A",
    harrcir: "\u2948",
    harrw: "\u21AD",
    leftrightsquigarrow: "\u21AD",
    hbar: "\u210F",
    hslash: "\u210F",
    planck: "\u210F",
    plankv: "\u210F",
    hcirc: "\u0125",
    hearts: "\u2665",
    heartsuit: "\u2665",
    hellip: "\u2026",
    mldr: "\u2026",
    hercon: "\u22B9",
    hfr: "\u{1D525}",
    hksearow: "\u2925",
    searhk: "\u2925",
    hkswarow: "\u2926",
    swarhk: "\u2926",
    hoarr: "\u21FF",
    homtht: "\u223B",
    hookleftarrow: "\u21A9",
    larrhk: "\u21A9",
    hookrightarrow: "\u21AA",
    rarrhk: "\u21AA",
    hopf: "\u{1D559}",
    horbar: "\u2015",
    hscr: "\u{1D4BD}",
    hstrok: "\u0127",
    hybull: "\u2043",
    iacute: "\xED",
    icirc: "\xEE",
    icy: "\u0438",
    iecy: "\u0435",
    iexcl: "\xA1",
    ifr: "\u{1D526}",
    igrave: "\xEC",
    iiiint: "\u2A0C",
    qint: "\u2A0C",
    iiint: "\u222D",
    tint: "\u222D",
    iinfin: "\u29DC",
    iiota: "\u2129",
    ijlig: "\u0133",
    imacr: "\u012B",
    imath: "\u0131",
    inodot: "\u0131",
    imof: "\u22B7",
    imped: "\u01B5",
    incare: "\u2105",
    infin: "\u221E",
    infintie: "\u29DD",
    intcal: "\u22BA",
    intercal: "\u22BA",
    intlarhk: "\u2A17",
    intprod: "\u2A3C",
    iprod: "\u2A3C",
    iocy: "\u0451",
    iogon: "\u012F",
    iopf: "\u{1D55A}",
    iota: "\u03B9",
    iquest: "\xBF",
    iscr: "\u{1D4BE}",
    isinE: "\u22F9",
    isindot: "\u22F5",
    isins: "\u22F4",
    isinsv: "\u22F3",
    itilde: "\u0129",
    iukcy: "\u0456",
    iuml: "\xEF",
    jcirc: "\u0135",
    jcy: "\u0439",
    jfr: "\u{1D527}",
    jmath: "\u0237",
    jopf: "\u{1D55B}",
    jscr: "\u{1D4BF}",
    jsercy: "\u0458",
    jukcy: "\u0454",
    kappa: "\u03BA",
    kappav: "\u03F0",
    varkappa: "\u03F0",
    kcedil: "\u0137",
    kcy: "\u043A",
    kfr: "\u{1D528}",
    kgreen: "\u0138",
    khcy: "\u0445",
    kjcy: "\u045C",
    kopf: "\u{1D55C}",
    kscr: "\u{1D4C0}",
    lAtail: "\u291B",
    lBarr: "\u290E",
    lEg: "\u2A8B",
    lesseqqgtr: "\u2A8B",
    lHar: "\u2962",
    lacute: "\u013A",
    laemptyv: "\u29B4",
    lambda: "\u03BB",
    langd: "\u2991",
    lap: "\u2A85",
    lessapprox: "\u2A85",
    laquo: "\xAB",
    larrbfs: "\u291F",
    larrfs: "\u291D",
    larrlp: "\u21AB",
    looparrowleft: "\u21AB",
    larrpl: "\u2939",
    larrsim: "\u2973",
    larrtl: "\u21A2",
    leftarrowtail: "\u21A2",
    lat: "\u2AAB",
    latail: "\u2919",
    late: "\u2AAD",
    lates: "\u2AAD\uFE00",
    lbarr: "\u290C",
    lbbrk: "\u2772",
    lbrace: "{",
    lcub: "{",
    lbrack: "[",
    lsqb: "[",
    lbrke: "\u298B",
    lbrksld: "\u298F",
    lbrkslu: "\u298D",
    lcaron: "\u013E",
    lcedil: "\u013C",
    lcy: "\u043B",
    ldca: "\u2936",
    ldrdhar: "\u2967",
    ldrushar: "\u294B",
    ldsh: "\u21B2",
    le: "\u2264",
    leq: "\u2264",
    leftleftarrows: "\u21C7",
    llarr: "\u21C7",
    leftthreetimes: "\u22CB",
    lthree: "\u22CB",
    lescc: "\u2AA8",
    lesdot: "\u2A7F",
    lesdoto: "\u2A81",
    lesdotor: "\u2A83",
    lesg: "\u22DA\uFE00",
    lesges: "\u2A93",
    lessdot: "\u22D6",
    ltdot: "\u22D6",
    lfisht: "\u297C",
    lfr: "\u{1D529}",
    lgE: "\u2A91",
    lharul: "\u296A",
    lhblk: "\u2584",
    ljcy: "\u0459",
    llhard: "\u296B",
    lltri: "\u25FA",
    lmidot: "\u0140",
    lmoust: "\u23B0",
    lmoustache: "\u23B0",
    lnE: "\u2268",
    lneqq: "\u2268",
    lnap: "\u2A89",
    lnapprox: "\u2A89",
    lne: "\u2A87",
    lneq: "\u2A87",
    lnsim: "\u22E6",
    loang: "\u27EC",
    loarr: "\u21FD",
    longmapsto: "\u27FC",
    xmap: "\u27FC",
    looparrowright: "\u21AC",
    rarrlp: "\u21AC",
    lopar: "\u2985",
    lopf: "\u{1D55D}",
    loplus: "\u2A2D",
    lotimes: "\u2A34",
    lowast: "\u2217",
    loz: "\u25CA",
    lozenge: "\u25CA",
    lpar: "(",
    lparlt: "\u2993",
    lrhard: "\u296D",
    lrm: "\u200E",
    lrtri: "\u22BF",
    lsaquo: "\u2039",
    lscr: "\u{1D4C1}",
    lsime: "\u2A8D",
    lsimg: "\u2A8F",
    lsquor: "\u201A",
    sbquo: "\u201A",
    lstrok: "\u0142",
    ltcc: "\u2AA6",
    ltcir: "\u2A79",
    ltimes: "\u22C9",
    ltlarr: "\u2976",
    ltquest: "\u2A7B",
    ltrPar: "\u2996",
    ltri: "\u25C3",
    triangleleft: "\u25C3",
    lurdshar: "\u294A",
    luruhar: "\u2966",
    lvertneqq: "\u2268\uFE00",
    lvnE: "\u2268\uFE00",
    mDDot: "\u223A",
    macr: "\xAF",
    strns: "\xAF",
    male: "\u2642",
    malt: "\u2720",
    maltese: "\u2720",
    marker: "\u25AE",
    mcomma: "\u2A29",
    mcy: "\u043C",
    mdash: "\u2014",
    mfr: "\u{1D52A}",
    mho: "\u2127",
    micro: "\xB5",
    midcir: "\u2AF0",
    minus: "\u2212",
    minusdu: "\u2A2A",
    mlcp: "\u2ADB",
    models: "\u22A7",
    mopf: "\u{1D55E}",
    mscr: "\u{1D4C2}",
    mu: "\u03BC",
    multimap: "\u22B8",
    mumap: "\u22B8",
    nGg: "\u22D9\u0338",
    nGt: "\u226B\u20D2",
    nLeftarrow: "\u21CD",
    nlArr: "\u21CD",
    nLeftrightarrow: "\u21CE",
    nhArr: "\u21CE",
    nLl: "\u22D8\u0338",
    nLt: "\u226A\u20D2",
    nRightarrow: "\u21CF",
    nrArr: "\u21CF",
    nVDash: "\u22AF",
    nVdash: "\u22AE",
    nacute: "\u0144",
    nang: "\u2220\u20D2",
    napE: "\u2A70\u0338",
    napid: "\u224B\u0338",
    napos: "\u0149",
    natur: "\u266E",
    natural: "\u266E",
    ncap: "\u2A43",
    ncaron: "\u0148",
    ncedil: "\u0146",
    ncongdot: "\u2A6D\u0338",
    ncup: "\u2A42",
    ncy: "\u043D",
    ndash: "\u2013",
    neArr: "\u21D7",
    nearhk: "\u2924",
    nedot: "\u2250\u0338",
    nesear: "\u2928",
    toea: "\u2928",
    nfr: "\u{1D52B}",
    nharr: "\u21AE",
    nleftrightarrow: "\u21AE",
    nhpar: "\u2AF2",
    nis: "\u22FC",
    nisd: "\u22FA",
    njcy: "\u045A",
    nlE: "\u2266\u0338",
    nleqq: "\u2266\u0338",
    nlarr: "\u219A",
    nleftarrow: "\u219A",
    nldr: "\u2025",
    nopf: "\u{1D55F}",
    not: "\xAC",
    notinE: "\u22F9\u0338",
    notindot: "\u22F5\u0338",
    notinvb: "\u22F7",
    notinvc: "\u22F6",
    notnivb: "\u22FE",
    notnivc: "\u22FD",
    nparsl: "\u2AFD\u20E5",
    npart: "\u2202\u0338",
    npolint: "\u2A14",
    nrarr: "\u219B",
    nrightarrow: "\u219B",
    nrarrc: "\u2933\u0338",
    nrarrw: "\u219D\u0338",
    nscr: "\u{1D4C3}",
    nsub: "\u2284",
    nsubE: "\u2AC5\u0338",
    nsubseteqq: "\u2AC5\u0338",
    nsup: "\u2285",
    nsupE: "\u2AC6\u0338",
    nsupseteqq: "\u2AC6\u0338",
    ntilde: "\xF1",
    nu: "\u03BD",
    num: "#",
    numero: "\u2116",
    numsp: "\u2007",
    nvDash: "\u22AD",
    nvHarr: "\u2904",
    nvap: "\u224D\u20D2",
    nvdash: "\u22AC",
    nvge: "\u2265\u20D2",
    nvgt: ">\u20D2",
    nvinfin: "\u29DE",
    nvlArr: "\u2902",
    nvle: "\u2264\u20D2",
    nvlt: "<\u20D2",
    nvltrie: "\u22B4\u20D2",
    nvrArr: "\u2903",
    nvrtrie: "\u22B5\u20D2",
    nvsim: "\u223C\u20D2",
    nwArr: "\u21D6",
    nwarhk: "\u2923",
    nwnear: "\u2927",
    oacute: "\xF3",
    ocirc: "\xF4",
    ocy: "\u043E",
    odblac: "\u0151",
    odiv: "\u2A38",
    odsold: "\u29BC",
    oelig: "\u0153",
    ofcir: "\u29BF",
    ofr: "\u{1D52C}",
    ogon: "\u02DB",
    ograve: "\xF2",
    ogt: "\u29C1",
    ohbar: "\u29B5",
    olcir: "\u29BE",
    olcross: "\u29BB",
    olt: "\u29C0",
    omacr: "\u014D",
    omega: "\u03C9",
    omicron: "\u03BF",
    omid: "\u29B6",
    oopf: "\u{1D560}",
    opar: "\u29B7",
    operp: "\u29B9",
    or: "\u2228",
    vee: "\u2228",
    ord: "\u2A5D",
    order: "\u2134",
    orderof: "\u2134",
    oscr: "\u2134",
    ordf: "\xAA",
    ordm: "\xBA",
    origof: "\u22B6",
    oror: "\u2A56",
    orslope: "\u2A57",
    orv: "\u2A5B",
    oslash: "\xF8",
    osol: "\u2298",
    otilde: "\xF5",
    otimesas: "\u2A36",
    ouml: "\xF6",
    ovbar: "\u233D",
    para: "\xB6",
    parsim: "\u2AF3",
    parsl: "\u2AFD",
    pcy: "\u043F",
    percnt: "%",
    period: ".",
    permil: "\u2030",
    pertenk: "\u2031",
    pfr: "\u{1D52D}",
    phi: "\u03C6",
    phiv: "\u03D5",
    straightphi: "\u03D5",
    varphi: "\u03D5",
    phone: "\u260E",
    pi: "\u03C0",
    piv: "\u03D6",
    varpi: "\u03D6",
    planckh: "\u210E",
    plus: "+",
    plusacir: "\u2A23",
    pluscir: "\u2A22",
    plusdu: "\u2A25",
    pluse: "\u2A72",
    plussim: "\u2A26",
    plustwo: "\u2A27",
    pointint: "\u2A15",
    popf: "\u{1D561}",
    pound: "\xA3",
    prE: "\u2AB3",
    prap: "\u2AB7",
    precapprox: "\u2AB7",
    precnapprox: "\u2AB9",
    prnap: "\u2AB9",
    precneqq: "\u2AB5",
    prnE: "\u2AB5",
    precnsim: "\u22E8",
    prnsim: "\u22E8",
    prime: "\u2032",
    profalar: "\u232E",
    profline: "\u2312",
    profsurf: "\u2313",
    prurel: "\u22B0",
    pscr: "\u{1D4C5}",
    psi: "\u03C8",
    puncsp: "\u2008",
    qfr: "\u{1D52E}",
    qopf: "\u{1D562}",
    qprime: "\u2057",
    qscr: "\u{1D4C6}",
    quatint: "\u2A16",
    quest: "?",
    rAtail: "\u291C",
    rHar: "\u2964",
    race: "\u223D\u0331",
    racute: "\u0155",
    raemptyv: "\u29B3",
    rangd: "\u2992",
    range: "\u29A5",
    raquo: "\xBB",
    rarrap: "\u2975",
    rarrbfs: "\u2920",
    rarrc: "\u2933",
    rarrfs: "\u291E",
    rarrpl: "\u2945",
    rarrsim: "\u2974",
    rarrtl: "\u21A3",
    rightarrowtail: "\u21A3",
    rarrw: "\u219D",
    rightsquigarrow: "\u219D",
    ratail: "\u291A",
    ratio: "\u2236",
    rbbrk: "\u2773",
    rbrace: "}",
    rcub: "}",
    rbrack: "]",
    rsqb: "]",
    rbrke: "\u298C",
    rbrksld: "\u298E",
    rbrkslu: "\u2990",
    rcaron: "\u0159",
    rcedil: "\u0157",
    rcy: "\u0440",
    rdca: "\u2937",
    rdldhar: "\u2969",
    rdsh: "\u21B3",
    rect: "\u25AD",
    rfisht: "\u297D",
    rfr: "\u{1D52F}",
    rharul: "\u296C",
    rho: "\u03C1",
    rhov: "\u03F1",
    varrho: "\u03F1",
    rightrightarrows: "\u21C9",
    rrarr: "\u21C9",
    rightthreetimes: "\u22CC",
    rthree: "\u22CC",
    ring: "\u02DA",
    rlm: "\u200F",
    rmoust: "\u23B1",
    rmoustache: "\u23B1",
    rnmid: "\u2AEE",
    roang: "\u27ED",
    roarr: "\u21FE",
    ropar: "\u2986",
    ropf: "\u{1D563}",
    roplus: "\u2A2E",
    rotimes: "\u2A35",
    rpar: ")",
    rpargt: "\u2994",
    rppolint: "\u2A12",
    rsaquo: "\u203A",
    rscr: "\u{1D4C7}",
    rtimes: "\u22CA",
    rtri: "\u25B9",
    triangleright: "\u25B9",
    rtriltri: "\u29CE",
    ruluhar: "\u2968",
    rx: "\u211E",
    sacute: "\u015B",
    scE: "\u2AB4",
    scap: "\u2AB8",
    succapprox: "\u2AB8",
    scaron: "\u0161",
    scedil: "\u015F",
    scirc: "\u015D",
    scnE: "\u2AB6",
    succneqq: "\u2AB6",
    scnap: "\u2ABA",
    succnapprox: "\u2ABA",
    scnsim: "\u22E9",
    succnsim: "\u22E9",
    scpolint: "\u2A13",
    scy: "\u0441",
    sdot: "\u22C5",
    sdote: "\u2A66",
    seArr: "\u21D8",
    sect: "\xA7",
    semi: ";",
    seswar: "\u2929",
    tosa: "\u2929",
    sext: "\u2736",
    sfr: "\u{1D530}",
    sharp: "\u266F",
    shchcy: "\u0449",
    shcy: "\u0448",
    shy: "\xAD",
    sigma: "\u03C3",
    sigmaf: "\u03C2",
    sigmav: "\u03C2",
    varsigma: "\u03C2",
    simdot: "\u2A6A",
    simg: "\u2A9E",
    simgE: "\u2AA0",
    siml: "\u2A9D",
    simlE: "\u2A9F",
    simne: "\u2246",
    simplus: "\u2A24",
    simrarr: "\u2972",
    smashp: "\u2A33",
    smeparsl: "\u29E4",
    smile: "\u2323",
    ssmile: "\u2323",
    smt: "\u2AAA",
    smte: "\u2AAC",
    smtes: "\u2AAC\uFE00",
    softcy: "\u044C",
    sol: "/",
    solb: "\u29C4",
    solbar: "\u233F",
    sopf: "\u{1D564}",
    spades: "\u2660",
    spadesuit: "\u2660",
    sqcaps: "\u2293\uFE00",
    sqcups: "\u2294\uFE00",
    sscr: "\u{1D4C8}",
    star: "\u2606",
    sub: "\u2282",
    subset: "\u2282",
    subE: "\u2AC5",
    subseteqq: "\u2AC5",
    subdot: "\u2ABD",
    subedot: "\u2AC3",
    submult: "\u2AC1",
    subnE: "\u2ACB",
    subsetneqq: "\u2ACB",
    subne: "\u228A",
    subsetneq: "\u228A",
    subplus: "\u2ABF",
    subrarr: "\u2979",
    subsim: "\u2AC7",
    subsub: "\u2AD5",
    subsup: "\u2AD3",
    sung: "\u266A",
    sup1: "\xB9",
    sup2: "\xB2",
    sup3: "\xB3",
    supE: "\u2AC6",
    supseteqq: "\u2AC6",
    supdot: "\u2ABE",
    supdsub: "\u2AD8",
    supedot: "\u2AC4",
    suphsol: "\u27C9",
    suphsub: "\u2AD7",
    suplarr: "\u297B",
    supmult: "\u2AC2",
    supnE: "\u2ACC",
    supsetneqq: "\u2ACC",
    supne: "\u228B",
    supsetneq: "\u228B",
    supplus: "\u2AC0",
    supsim: "\u2AC8",
    supsub: "\u2AD4",
    supsup: "\u2AD6",
    swArr: "\u21D9",
    swnwar: "\u292A",
    szlig: "\xDF",
    target: "\u2316",
    tau: "\u03C4",
    tcaron: "\u0165",
    tcedil: "\u0163",
    tcy: "\u0442",
    telrec: "\u2315",
    tfr: "\u{1D531}",
    theta: "\u03B8",
    thetasym: "\u03D1",
    thetav: "\u03D1",
    vartheta: "\u03D1",
    thorn: "\xFE",
    times: "\xD7",
    timesbar: "\u2A31",
    timesd: "\u2A30",
    topbot: "\u2336",
    topcir: "\u2AF1",
    topf: "\u{1D565}",
    topfork: "\u2ADA",
    tprime: "\u2034",
    triangle: "\u25B5",
    utri: "\u25B5",
    triangleq: "\u225C",
    trie: "\u225C",
    tridot: "\u25EC",
    triminus: "\u2A3A",
    triplus: "\u2A39",
    trisb: "\u29CD",
    tritime: "\u2A3B",
    trpezium: "\u23E2",
    tscr: "\u{1D4C9}",
    tscy: "\u0446",
    tshcy: "\u045B",
    tstrok: "\u0167",
    uHar: "\u2963",
    uacute: "\xFA",
    ubrcy: "\u045E",
    ubreve: "\u016D",
    ucirc: "\xFB",
    ucy: "\u0443",
    udblac: "\u0171",
    ufisht: "\u297E",
    ufr: "\u{1D532}",
    ugrave: "\xF9",
    uhblk: "\u2580",
    ulcorn: "\u231C",
    ulcorner: "\u231C",
    ulcrop: "\u230F",
    ultri: "\u25F8",
    umacr: "\u016B",
    uogon: "\u0173",
    uopf: "\u{1D566}",
    upsi: "\u03C5",
    upsilon: "\u03C5",
    upuparrows: "\u21C8",
    uuarr: "\u21C8",
    urcorn: "\u231D",
    urcorner: "\u231D",
    urcrop: "\u230E",
    uring: "\u016F",
    urtri: "\u25F9",
    uscr: "\u{1D4CA}",
    utdot: "\u22F0",
    utilde: "\u0169",
    uuml: "\xFC",
    uwangle: "\u29A7",
    vBar: "\u2AE8",
    vBarv: "\u2AE9",
    vangrt: "\u299C",
    varsubsetneq: "\u228A\uFE00",
    vsubne: "\u228A\uFE00",
    varsubsetneqq: "\u2ACB\uFE00",
    vsubnE: "\u2ACB\uFE00",
    varsupsetneq: "\u228B\uFE00",
    vsupne: "\u228B\uFE00",
    varsupsetneqq: "\u2ACC\uFE00",
    vsupnE: "\u2ACC\uFE00",
    vcy: "\u0432",
    veebar: "\u22BB",
    veeeq: "\u225A",
    vellip: "\u22EE",
    vfr: "\u{1D533}",
    vopf: "\u{1D567}",
    vscr: "\u{1D4CB}",
    vzigzag: "\u299A",
    wcirc: "\u0175",
    wedbar: "\u2A5F",
    wedgeq: "\u2259",
    weierp: "\u2118",
    wp: "\u2118",
    wfr: "\u{1D534}",
    wopf: "\u{1D568}",
    wscr: "\u{1D4CC}",
    xfr: "\u{1D535}",
    xi: "\u03BE",
    xnis: "\u22FB",
    xopf: "\u{1D569}",
    xscr: "\u{1D4CD}",
    yacute: "\xFD",
    yacy: "\u044F",
    ycirc: "\u0177",
    ycy: "\u044B",
    yen: "\xA5",
    yfr: "\u{1D536}",
    yicy: "\u0457",
    yopf: "\u{1D56A}",
    yscr: "\u{1D4CE}",
    yucy: "\u044E",
    yuml: "\xFF",
    zacute: "\u017A",
    zcaron: "\u017E",
    zcy: "\u0437",
    zdot: "\u017C",
    zeta: "\u03B6",
    zfr: "\u{1D537}",
    zhcy: "\u0436",
    zigrarr: "\u21DD",
    zopf: "\u{1D56B}",
    zscr: "\u{1D4CF}",
    zwj: "\u200D",
    zwnj: "\u200C"
}, Ua = "\uE500";
Me.ngsp = Ua;
var Wa = [
    /@/,
    /^\s*$/,
    /[<>]/,
    /^[{}]$/,
    /&(#|[a-z])/i,
    /^\/\//
];
function Bs(t, e) {
    if (e != null && !(Array.isArray(e) && e.length == 2)) throw new Error(`Expected '${t}' to be an array, [start, end].`);
    if (e != null) {
        let r = e[0], n = e[1];
        Wa.forEach((s)=>{
            if (s.test(r) || s.test(n)) throw new Error(`['${r}', '${n}'] contains unusable interpolation symbol.`);
        });
    }
}
var Lr = class t {
    static fromArray(e) {
        return e ? (Bs("interpolation", e), new t(e[0], e[1])) : Fr;
    }
    constructor(e, r){
        this.start = e, this.end = r;
    }
}, Fr = new Lr("{{", "}}");
var ft = class extends Ie {
    constructor(e, r, n){
        super(n, e), this.tokenType = r;
    }
}, Or = class {
    constructor(e, r, n){
        this.tokens = e, this.errors = r, this.nonNormalizedIcuExpressions = n;
    }
};
function Us(t, e, r, n = {}) {
    let s = new $r(new Ee(t, e), r, n);
    return s.tokenize(), new Or(Co(s.tokens), s.errors, s.nonNormalizedIcuExpressions);
}
var lo = /\r\n?/g;
function qe(t) {
    return `Unexpected character "${t === 0 ? "EOF" : String.fromCharCode(t)}"`;
}
function Is(t) {
    return `Unknown entity "${t}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function co(t, e) {
    return `Unable to parse entity "${e}" - ${t} character reference entities must end with ";"`;
}
var Zt;
(function(t) {
    t.HEX = "hexadecimal", t.DEC = "decimal";
})(Zt || (Zt = {}));
var dt = class {
    constructor(e){
        this.error = e;
    }
}, $r = class {
    constructor(e, r, n){
        this._getTagContentType = r, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = !1, this._fullNameStack = [], this.tokens = [], this.errors = [], this.nonNormalizedIcuExpressions = [], this._tokenizeIcu = n.tokenizeExpansionForms || !1, this._interpolationConfig = n.interpolationConfig || Fr, this._leadingTriviaCodePoints = n.leadingTriviaChars && n.leadingTriviaChars.map((i)=>i.codePointAt(0) || 0), this._canSelfClose = n.canSelfClose || !1, this._allowHtmComponentClosingTags = n.allowHtmComponentClosingTags || !1;
        let s = n.range || {
            endPos: e.content.length,
            startPos: 0,
            startLine: 0,
            startCol: 0
        };
        this._cursor = n.escapedString ? new Mr(e, s) : new er(e, s), this._preserveLineEndings = n.preserveLineEndings || !1, this._i18nNormalizeLineEndingsInICUs = n.i18nNormalizeLineEndingsInICUs || !1, this._tokenizeBlocks = n.tokenizeBlocks ?? !0, this._tokenizeLet = n.tokenizeLet ?? !0;
        try {
            this._cursor.init();
        } catch (i) {
            this.handleError(i);
        }
    }
    _processCarriageReturns(e) {
        return this._preserveLineEndings ? e : e.replace(lo, `
`);
    }
    tokenize() {
        for(; this._cursor.peek() !== 0;){
            let e = this._cursor.clone();
            try {
                if (this._attemptCharCode(60)) if (this._attemptCharCode(33)) this._attemptStr("[CDATA[") ? this._consumeCdata(e) : this._attemptStr("--") ? this._consumeComment(e) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(e) : this._consumeBogusComment(e);
                else if (this._attemptCharCode(47)) this._consumeTagClose(e);
                else {
                    let r = this._cursor.clone();
                    this._attemptCharCode(63) ? (this._cursor = r, this._consumeBogusComment(e)) : this._consumeTagOpen(e);
                }
                else this._tokenizeLet && this._cursor.peek() === 64 && !this._inInterpolation && this._attemptStr("@let") ? this._consumeLetDeclaration(e) : this._tokenizeBlocks && this._attemptCharCode(64) ? this._consumeBlockStart(e) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125) ? this._consumeBlockEnd(e) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(5, 8, ()=>this._isTextEnd(), ()=>this._isTagStart());
            } catch (r) {
                this.handleError(r);
            }
        }
        this._beginToken(34), this._endToken([]);
    }
    _getBlockName() {
        let e = !1, r = this._cursor.clone();
        return this._attemptCharCodeUntilFn((n)=>at(n) ? !e : $s(n) ? (e = !0, !1) : !0), this._cursor.getChars(r).trim();
    }
    _consumeBlockStart(e) {
        this._beginToken(25, e);
        let r = this._endToken([
            this._getBlockName()
        ]);
        if (this._cursor.peek() === 40) if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(b), this._attemptCharCode(41)) this._attemptCharCodeUntilFn(b);
        else {
            r.type = 29;
            return;
        }
        this._attemptCharCode(123) ? (this._beginToken(26), this._endToken([])) : r.type = 29;
    }
    _consumeBlockEnd(e) {
        this._beginToken(27, e), this._endToken([]);
    }
    _consumeBlockParameters() {
        for(this._attemptCharCodeUntilFn(Ms); this._cursor.peek() !== 41 && this._cursor.peek() !== 0;){
            this._beginToken(28);
            let e = this._cursor.clone(), r = null, n = 0;
            for(; this._cursor.peek() !== 59 && this._cursor.peek() !== 0 || r !== null;){
                let s = this._cursor.peek();
                if (s === 92) this._cursor.advance();
                else if (s === r) r = null;
                else if (r === null && It(s)) r = s;
                else if (s === 40 && r === null) n++;
                else if (s === 41 && r === null) {
                    if (n === 0) break;
                    n > 0 && n--;
                }
                this._cursor.advance();
            }
            this._endToken([
                this._cursor.getChars(e)
            ]), this._attemptCharCodeUntilFn(Ms);
        }
    }
    _consumeLetDeclaration(e) {
        if (this._beginToken(30, e), at(this._cursor.peek())) this._attemptCharCodeUntilFn(b);
        else {
            let s = this._endToken([
                this._cursor.getChars(e)
            ]);
            s.type = 33;
            return;
        }
        let r = this._endToken([
            this._getLetDeclarationName()
        ]);
        if (this._attemptCharCodeUntilFn(b), !this._attemptCharCode(61)) {
            r.type = 33;
            return;
        }
        this._attemptCharCodeUntilFn((s)=>b(s) && !Pt(s)), this._consumeLetDeclarationValue(), this._cursor.peek() === 59 ? (this._beginToken(32), this._endToken([]), this._cursor.advance()) : (r.type = 33, r.sourceSpan = this._cursor.getSpan(e));
    }
    _getLetDeclarationName() {
        let e = this._cursor.clone(), r = !1;
        return this._attemptCharCodeUntilFn((n)=>ot(n) || n === 36 || n === 95 || r && Nt(n) ? (r = !0, !1) : !0), this._cursor.getChars(e).trim();
    }
    _consumeLetDeclarationValue() {
        let e = this._cursor.clone();
        for(this._beginToken(31, e); this._cursor.peek() !== 0;){
            let r = this._cursor.peek();
            if (r === 59) break;
            It(r) && (this._cursor.advance(), this._attemptCharCodeUntilFn((n)=>n === 92 ? (this._cursor.advance(), !1) : n === r)), this._cursor.advance();
        }
        this._endToken([
            this._cursor.getChars(e)
        ]);
    }
    _tokenizeExpansionForm() {
        if (this.isExpansionFormStart()) return this._consumeExpansionFormStart(), !0;
        if (fo(this._cursor.peek()) && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), !0;
        if (this._cursor.peek() === 125) {
            if (this._isInExpansionCase()) return this._consumeExpansionCaseEnd(), !0;
            if (this._isInExpansionForm()) return this._consumeExpansionFormEnd(), !0;
        }
        return !1;
    }
    _beginToken(e, r = this._cursor.clone()) {
        this._currentTokenStart = r, this._currentTokenType = e;
    }
    _endToken(e, r) {
        if (this._currentTokenStart === null) throw new ft("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(r));
        if (this._currentTokenType === null) throw new ft("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
        let n = {
            type: this._currentTokenType,
            parts: e,
            sourceSpan: (r ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints)
        };
        return this.tokens.push(n), this._currentTokenStart = null, this._currentTokenType = null, n;
    }
    _createError(e, r) {
        this._isInExpansionForm() && (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
        let n = new ft(e, this._currentTokenType, r);
        return this._currentTokenStart = null, this._currentTokenType = null, new dt(n);
    }
    handleError(e) {
        if (e instanceof gt && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof dt) this.errors.push(e.error);
        else throw e;
    }
    _attemptCharCode(e) {
        return this._cursor.peek() === e ? (this._cursor.advance(), !0) : !1;
    }
    _attemptCharCodeCaseInsensitive(e) {
        return go(this._cursor.peek(), e) ? (this._cursor.advance(), !0) : !1;
    }
    _requireCharCode(e) {
        let r = this._cursor.clone();
        if (!this._attemptCharCode(e)) throw this._createError(qe(this._cursor.peek()), this._cursor.getSpan(r));
    }
    _attemptStr(e) {
        let r = e.length;
        if (this._cursor.charsLeft() < r) return !1;
        let n = this._cursor.clone();
        for(let s = 0; s < r; s++)if (!this._attemptCharCode(e.charCodeAt(s))) return this._cursor = n, !1;
        return !0;
    }
    _attemptStrCaseInsensitive(e) {
        for(let r = 0; r < e.length; r++)if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(r))) return !1;
        return !0;
    }
    _requireStr(e) {
        let r = this._cursor.clone();
        if (!this._attemptStr(e)) throw this._createError(qe(this._cursor.peek()), this._cursor.getSpan(r));
    }
    _requireStrCaseInsensitive(e) {
        let r = this._cursor.clone();
        if (!this._attemptStrCaseInsensitive(e)) throw this._createError(qe(this._cursor.peek()), this._cursor.getSpan(r));
    }
    _attemptCharCodeUntilFn(e) {
        for(; !e(this._cursor.peek());)this._cursor.advance();
    }
    _requireCharCodeUntilFn(e, r) {
        let n = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(e), this._cursor.diff(n) < r) throw this._createError(qe(this._cursor.peek()), this._cursor.getSpan(n));
    }
    _attemptUntilChar(e) {
        for(; this._cursor.peek() !== e;)this._cursor.advance();
    }
    _readChar() {
        let e = String.fromCodePoint(this._cursor.peek());
        return this._cursor.advance(), e;
    }
    _consumeEntity(e) {
        this._beginToken(9);
        let r = this._cursor.clone();
        if (this._cursor.advance(), this._attemptCharCode(35)) {
            let n = this._attemptCharCode(120) || this._attemptCharCode(88), s = this._cursor.clone();
            if (this._attemptCharCodeUntilFn(ho), this._cursor.peek() != 59) {
                this._cursor.advance();
                let a = n ? Zt.HEX : Zt.DEC;
                throw this._createError(co(a, this._cursor.getChars(r)), this._cursor.getSpan());
            }
            let i = this._cursor.getChars(s);
            this._cursor.advance();
            try {
                let a = parseInt(i, n ? 16 : 10);
                this._endToken([
                    String.fromCharCode(a),
                    this._cursor.getChars(r)
                ]);
            } catch  {
                throw this._createError(Is(this._cursor.getChars(r)), this._cursor.getSpan());
            }
        } else {
            let n = this._cursor.clone();
            if (this._attemptCharCodeUntilFn(mo), this._cursor.peek() != 59) this._beginToken(e, r), this._cursor = n, this._endToken([
                "&"
            ]);
            else {
                let s = this._cursor.getChars(n);
                this._cursor.advance();
                let i = Me[s];
                if (!i) throw this._createError(Is(s), this._cursor.getSpan(r));
                this._endToken([
                    i,
                    `&${s};`
                ]);
            }
        }
    }
    _consumeRawText(e, r) {
        this._beginToken(e ? 6 : 7);
        let n = [];
        for(;;){
            let s = this._cursor.clone(), i = r();
            if (this._cursor = s, i) break;
            e && this._cursor.peek() === 38 ? (this._endToken([
                this._processCarriageReturns(n.join(""))
            ]), n.length = 0, this._consumeEntity(6), this._beginToken(6)) : n.push(this._readChar());
        }
        this._endToken([
            this._processCarriageReturns(n.join(""))
        ]);
    }
    _consumeComment(e) {
        this._beginToken(10, e), this._endToken([]), this._consumeRawText(!1, ()=>this._attemptStr("-->")), this._beginToken(11), this._requireStr("-->"), this._endToken([]);
    }
    _consumeBogusComment(e) {
        this._beginToken(10, e), this._endToken([]), this._consumeRawText(!1, ()=>this._cursor.peek() === 62), this._beginToken(11), this._cursor.advance(), this._endToken([]);
    }
    _consumeCdata(e) {
        this._beginToken(12, e), this._endToken([]), this._consumeRawText(!1, ()=>this._attemptStr("]]>")), this._beginToken(13), this._requireStr("]]>"), this._endToken([]);
    }
    _consumeDocType(e) {
        this._beginToken(18, e), this._endToken([]), this._consumeRawText(!1, ()=>this._cursor.peek() === 62), this._beginToken(19), this._cursor.advance(), this._endToken([]);
    }
    _consumePrefixAndName() {
        let e = this._cursor.clone(), r = "";
        for(; this._cursor.peek() !== 58 && !po(this._cursor.peek());)this._cursor.advance();
        let n;
        this._cursor.peek() === 58 ? (r = this._cursor.getChars(e), this._cursor.advance(), n = this._cursor.clone()) : n = e, this._requireCharCodeUntilFn(Rs, r === "" ? 0 : 1);
        let s = this._cursor.getChars(n);
        return [
            r,
            s
        ];
    }
    _consumeTagOpen(e) {
        let r, n, s, i = [];
        try {
            if (!ot(this._cursor.peek())) throw this._createError(qe(this._cursor.peek()), this._cursor.getSpan(e));
            for(s = this._consumeTagOpenStart(e), n = s.parts[0], r = s.parts[1], this._attemptCharCodeUntilFn(b); this._cursor.peek() !== 47 && this._cursor.peek() !== 62 && this._cursor.peek() !== 60 && this._cursor.peek() !== 0;){
                let [o, u] = this._consumeAttributeName();
                if (this._attemptCharCodeUntilFn(b), this._attemptCharCode(61)) {
                    this._attemptCharCodeUntilFn(b);
                    let p = this._consumeAttributeValue();
                    i.push({
                        prefix: o,
                        name: u,
                        value: p
                    });
                } else i.push({
                    prefix: o,
                    name: u
                });
                this._attemptCharCodeUntilFn(b);
            }
            this._consumeTagOpenEnd();
        } catch (o) {
            if (o instanceof dt) {
                s ? s.type = 4 : (this._beginToken(5, e), this._endToken([
                    "<"
                ]));
                return;
            }
            throw o;
        }
        if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === 2) return;
        let a = this._getTagContentType(r, n, this._fullNameStack.length > 0, i);
        this._handleFullNameStackForTagOpen(n, r), a === I.RAW_TEXT ? this._consumeRawTextWithTagClose(n, r, !1) : a === I.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(n, r, !0);
    }
    _consumeRawTextWithTagClose(e, r, n) {
        this._consumeRawText(n, ()=>!this._attemptCharCode(60) || !this._attemptCharCode(47) || (this._attemptCharCodeUntilFn(b), !this._attemptStrCaseInsensitive(e ? `${e}:${r}` : r)) ? !1 : (this._attemptCharCodeUntilFn(b), this._attemptCharCode(62))), this._beginToken(3), this._requireCharCodeUntilFn((s)=>s === 62, 3), this._cursor.advance(), this._endToken([
            e,
            r
        ]), this._handleFullNameStackForTagClose(e, r);
    }
    _consumeTagOpenStart(e) {
        this._beginToken(0, e);
        let r = this._consumePrefixAndName();
        return this._endToken(r);
    }
    _consumeAttributeName() {
        let e = this._cursor.peek();
        if (e === 39 || e === 34) throw this._createError(qe(e), this._cursor.getSpan());
        this._beginToken(14);
        let r = this._consumePrefixAndName();
        return this._endToken(r), r;
    }
    _consumeAttributeValue() {
        let e;
        if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
            let r = this._cursor.peek();
            this._consumeQuote(r);
            let n = ()=>this._cursor.peek() === r;
            e = this._consumeWithInterpolation(16, 17, n, n), this._consumeQuote(r);
        } else {
            let r = ()=>Rs(this._cursor.peek());
            e = this._consumeWithInterpolation(16, 17, r, r);
        }
        return e;
    }
    _consumeQuote(e) {
        this._beginToken(15), this._requireCharCode(e), this._endToken([
            String.fromCodePoint(e)
        ]);
    }
    _consumeTagOpenEnd() {
        let e = this._attemptCharCode(47) ? 2 : 1;
        this._beginToken(e), this._requireCharCode(62), this._endToken([]);
    }
    _consumeTagClose(e) {
        if (this._beginToken(3, e), this._attemptCharCodeUntilFn(b), this._allowHtmComponentClosingTags && this._attemptCharCode(47)) this._attemptCharCodeUntilFn(b), this._requireCharCode(62), this._endToken([]);
        else {
            let [r, n] = this._consumePrefixAndName();
            this._attemptCharCodeUntilFn(b), this._requireCharCode(62), this._endToken([
                r,
                n
            ]), this._handleFullNameStackForTagClose(r, n);
        }
    }
    _consumeExpansionFormStart() {
        this._beginToken(20), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(20), this._beginToken(7);
        let e = this._readUntil(44), r = this._processCarriageReturns(e);
        if (this._i18nNormalizeLineEndingsInICUs) this._endToken([
            r
        ]);
        else {
            let s = this._endToken([
                e
            ]);
            r !== e && this.nonNormalizedIcuExpressions.push(s);
        }
        this._requireCharCode(44), this._attemptCharCodeUntilFn(b), this._beginToken(7);
        let n = this._readUntil(44);
        this._endToken([
            n
        ]), this._requireCharCode(44), this._attemptCharCodeUntilFn(b);
    }
    _consumeExpansionCaseStart() {
        this._beginToken(21);
        let e = this._readUntil(123).trim();
        this._endToken([
            e
        ]), this._attemptCharCodeUntilFn(b), this._beginToken(22), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(b), this._expansionCaseStack.push(22);
    }
    _consumeExpansionCaseEnd() {
        this._beginToken(23), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(b), this._expansionCaseStack.pop();
    }
    _consumeExpansionFormEnd() {
        this._beginToken(24), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
    }
    _consumeWithInterpolation(e, r, n, s) {
        this._beginToken(e);
        let i = [];
        for(; !n();){
            let o = this._cursor.clone();
            this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (this._endToken([
                this._processCarriageReturns(i.join(""))
            ], o), i.length = 0, this._consumeInterpolation(r, o, s), this._beginToken(e)) : this._cursor.peek() === 38 ? (this._endToken([
                this._processCarriageReturns(i.join(""))
            ]), i.length = 0, this._consumeEntity(e), this._beginToken(e)) : i.push(this._readChar());
        }
        this._inInterpolation = !1;
        let a = this._processCarriageReturns(i.join(""));
        return this._endToken([
            a
        ]), a;
    }
    _consumeInterpolation(e, r, n) {
        let s = [];
        this._beginToken(e, r), s.push(this._interpolationConfig.start);
        let i = this._cursor.clone(), a = null, o = !1;
        for(; this._cursor.peek() !== 0 && (n === null || !n());){
            let u = this._cursor.clone();
            if (this._isTagStart()) {
                this._cursor = u, s.push(this._getProcessedChars(i, u)), this._endToken(s);
                return;
            }
            if (a === null) if (this._attemptStr(this._interpolationConfig.end)) {
                s.push(this._getProcessedChars(i, u)), s.push(this._interpolationConfig.end), this._endToken(s);
                return;
            } else this._attemptStr("//") && (o = !0);
            let p = this._cursor.peek();
            this._cursor.advance(), p === 92 ? this._cursor.advance() : p === a ? a = null : !o && a === null && It(p) && (a = p);
        }
        s.push(this._getProcessedChars(i, this._cursor)), this._endToken(s);
    }
    _getProcessedChars(e, r) {
        return this._processCarriageReturns(r.getChars(e));
    }
    _isTextEnd() {
        return !!(this._isTagStart() || this._cursor.peek() === 0 || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === 125 && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._cursor.peek() === 64 || this._cursor.peek() === 125));
    }
    _isTagStart() {
        if (this._cursor.peek() === 60) {
            let e = this._cursor.clone();
            e.advance();
            let r = e.peek();
            if (97 <= r && r <= 122 || 65 <= r && r <= 90 || r === 47 || r === 33) return !0;
        }
        return !1;
    }
    _isBlockStart() {
        if (this._tokenizeBlocks && this._cursor.peek() === 64) {
            let e = this._cursor.clone();
            if (e.advance(), $s(e.peek())) return !0;
        }
        return !1;
    }
    _readUntil(e) {
        let r = this._cursor.clone();
        return this._attemptUntilChar(e), this._cursor.getChars(r);
    }
    _isInExpansion() {
        return this._isInExpansionCase() || this._isInExpansionForm();
    }
    _isInExpansionCase() {
        return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 22;
    }
    _isInExpansionForm() {
        return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 20;
    }
    isExpansionFormStart() {
        if (this._cursor.peek() !== 123) return !1;
        if (this._interpolationConfig) {
            let e = this._cursor.clone(), r = this._attemptStr(this._interpolationConfig.start);
            return this._cursor = e, !r;
        }
        return !0;
    }
    _handleFullNameStackForTagOpen(e, r) {
        let n = Oe(e, r);
        (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === n) && this._fullNameStack.push(n);
    }
    _handleFullNameStackForTagClose(e, r) {
        let n = Oe(e, r);
        this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === n && this._fullNameStack.pop();
    }
};
function b(t) {
    return !at(t) || t === 0;
}
function Rs(t) {
    return at(t) || t === 62 || t === 60 || t === 47 || t === 39 || t === 34 || t === 61 || t === 0;
}
function po(t) {
    return (t < 97 || 122 < t) && (t < 65 || 90 < t) && (t < 48 || t > 57);
}
function ho(t) {
    return t === 59 || t === 0 || !gs(t);
}
function mo(t) {
    return t === 59 || t === 0 || !ot(t);
}
function fo(t) {
    return t !== 125;
}
function go(t, e) {
    return Os(t) === Os(e);
}
function Os(t) {
    return t >= 97 && t <= 122 ? t - 97 + 65 : t;
}
function $s(t) {
    return ot(t) || Nt(t) || t === 95;
}
function Ms(t) {
    return t !== 59 && b(t);
}
function Co(t) {
    let e = [], r;
    for(let n = 0; n < t.length; n++){
        let s = t[n];
        r && r.type === 5 && s.type === 5 || r && r.type === 16 && s.type === 16 ? (r.parts[0] += s.parts[0], r.sourceSpan.end = s.sourceSpan.end) : (r = s, e.push(r));
    }
    return e;
}
var er = class t {
    constructor(e, r){
        if (e instanceof t) {
            this.file = e.file, this.input = e.input, this.end = e.end;
            let n = e.state;
            this.state = {
                peek: n.peek,
                offset: n.offset,
                line: n.line,
                column: n.column
            };
        } else {
            if (!r) throw new Error("Programming error: the range argument must be provided with a file argument.");
            this.file = e, this.input = e.content, this.end = r.endPos, this.state = {
                peek: -1,
                offset: r.startPos,
                line: r.startLine,
                column: r.startCol
            };
        }
    }
    clone() {
        return new t(this);
    }
    peek() {
        return this.state.peek;
    }
    charsLeft() {
        return this.end - this.state.offset;
    }
    diff(e) {
        return this.state.offset - e.state.offset;
    }
    advance() {
        this.advanceState(this.state);
    }
    init() {
        this.updatePeek(this.state);
    }
    getSpan(e, r) {
        e = e || this;
        let n = e;
        if (r) for(; this.diff(e) > 0 && r.indexOf(e.peek()) !== -1;)n === e && (e = e.clone()), e.advance();
        let s = this.locationFromCursor(e), i = this.locationFromCursor(this), a = n !== e ? this.locationFromCursor(n) : s;
        return new h(s, i, a);
    }
    getChars(e) {
        return this.input.substring(e.state.offset, this.state.offset);
    }
    charAt(e) {
        return this.input.charCodeAt(e);
    }
    advanceState(e) {
        if (e.offset >= this.end) throw this.state = e, new gt('Unexpected character "EOF"', this);
        let r = this.charAt(e.offset);
        r === 10 ? (e.line++, e.column = 0) : Pt(r) || e.column++, e.offset++, this.updatePeek(e);
    }
    updatePeek(e) {
        e.peek = e.offset >= this.end ? 0 : this.charAt(e.offset);
    }
    locationFromCursor(e) {
        return new ie(e.file, e.state.offset, e.state.line, e.state.column);
    }
}, Mr = class t extends er {
    constructor(e, r){
        e instanceof t ? (super(e), this.internalState = {
            ...e.internalState
        }) : (super(e, r), this.internalState = this.state);
    }
    advance() {
        this.state = this.internalState, super.advance(), this.processEscapeSequence();
    }
    init() {
        super.init(), this.processEscapeSequence();
    }
    clone() {
        return new t(this);
    }
    getChars(e) {
        let r = e.clone(), n = "";
        for(; r.internalState.offset < this.internalState.offset;)n += String.fromCodePoint(r.peek()), r.advance();
        return n;
    }
    processEscapeSequence() {
        let e = ()=>this.internalState.peek;
        if (e() === 92) if (this.internalState = {
            ...this.state
        }, this.advanceState(this.internalState), e() === 110) this.state.peek = 10;
        else if (e() === 114) this.state.peek = 13;
        else if (e() === 118) this.state.peek = 11;
        else if (e() === 116) this.state.peek = 9;
        else if (e() === 98) this.state.peek = 8;
        else if (e() === 102) this.state.peek = 12;
        else if (e() === 117) if (this.advanceState(this.internalState), e() === 123) {
            this.advanceState(this.internalState);
            let r = this.clone(), n = 0;
            for(; e() !== 125;)this.advanceState(this.internalState), n++;
            this.state.peek = this.decodeHexDigits(r, n);
        } else {
            let r = this.clone();
            this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 4);
        }
        else if (e() === 120) {
            this.advanceState(this.internalState);
            let r = this.clone();
            this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 2);
        } else if (yr(e())) {
            let r = "", n = 0, s = this.clone();
            for(; yr(e()) && n < 3;)s = this.clone(), r += String.fromCodePoint(e()), this.advanceState(this.internalState), n++;
            this.state.peek = parseInt(r, 8), this.internalState = s.internalState;
        } else Pt(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
    }
    decodeHexDigits(e, r) {
        let n = this.input.slice(e.internalState.offset, e.internalState.offset + r), s = parseInt(n, 16);
        if (isNaN(s)) throw e.state = e.internalState, new gt("Invalid hexadecimal escape sequence", e);
        return s;
    }
}, gt = class {
    constructor(e, r){
        this.msg = e, this.cursor = r;
    }
};
var L = class t extends Ie {
    static create(e, r, n) {
        return new t(e, r, n);
    }
    constructor(e, r, n){
        super(r, n), this.elementName = e;
    }
}, Vr = class {
    constructor(e, r){
        this.rootNodes = e, this.errors = r;
    }
}, tr = class {
    constructor(e){
        this.getTagDefinition = e;
    }
    parse(e, r, n, s = !1, i) {
        let a = (D)=>(R, ...F)=>D(R.toLowerCase(), ...F), o = s ? this.getTagDefinition : a(this.getTagDefinition), u = (D)=>o(D).getContentType(), p = s ? i : a(i), f = Us(e, r, i ? (D, R, F, c)=>{
            let g = p(D, R, F, c);
            return g !== void 0 ? g : u(D);
        } : u, n), d = n && n.canSelfClose || !1, C = n && n.allowHtmComponentClosingTags || !1, A = new Ur(f.tokens, o, d, C, s);
        return A.build(), new Vr(A.rootNodes, f.errors.concat(A.errors));
    }
}, Ur = class t {
    constructor(e, r, n, s, i){
        this.tokens = e, this.getTagDefinition = r, this.canSelfClose = n, this.allowHtmComponentClosingTags = s, this.isTagNameCaseSensitive = i, this._index = -1, this._containerStack = [], this.rootNodes = [], this.errors = [], this._advance();
    }
    build() {
        for(; this._peek.type !== 34;)this._peek.type === 0 || this._peek.type === 4 ? this._consumeStartTag(this._advance()) : this._peek.type === 3 ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === 12 ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === 10 ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === 5 || this._peek.type === 7 || this._peek.type === 6 ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === 20 ? this._consumeExpansion(this._advance()) : this._peek.type === 25 ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === 27 ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === 29 ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === 30 ? (this._closeVoidElement(), this._consumeLet(this._advance())) : this._peek.type === 18 ? this._consumeDocType(this._advance()) : this._peek.type === 33 ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._advance();
        for (let e of this._containerStack)e instanceof ee && this.errors.push(L.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`));
    }
    _advance() {
        let e = this._peek;
        return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], e;
    }
    _advanceIf(e) {
        return this._peek.type === e ? this._advance() : null;
    }
    _consumeCdata(e) {
        let r = this._advance(), n = this._getText(r), s = this._advanceIf(13);
        this._addToParent(new Vt(n, new h(e.sourceSpan.start, (s || r).sourceSpan.end), [
            r
        ]));
    }
    _consumeComment(e) {
        let r = this._advanceIf(7), n = this._advanceIf(11), s = r != null ? r.parts[0].trim() : null, i = n == null ? e.sourceSpan : new h(e.sourceSpan.start, n.sourceSpan.end, e.sourceSpan.fullStart);
        this._addToParent(new Gt(s, i));
    }
    _consumeDocType(e) {
        let r = this._advanceIf(7), n = this._advanceIf(19), s = r != null ? r.parts[0].trim() : null, i = new h(e.sourceSpan.start, (n || r || e).sourceSpan.end);
        this._addToParent(new Yt(s, i));
    }
    _consumeExpansion(e) {
        let r = this._advance(), n = this._advance(), s = [];
        for(; this._peek.type === 21;){
            let a = this._parseExpansionCase();
            if (!a) return;
            s.push(a);
        }
        if (this._peek.type !== 24) {
            this.errors.push(L.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
            return;
        }
        let i = new h(e.sourceSpan.start, this._peek.sourceSpan.end, e.sourceSpan.fullStart);
        this._addToParent(new Ut(r.parts[0], n.parts[0], s, i, r.sourceSpan)), this._advance();
    }
    _parseExpansionCase() {
        let e = this._advance();
        if (this._peek.type !== 22) return this.errors.push(L.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
        let r = this._advance(), n = this._collectExpansionExpTokens(r);
        if (!n) return null;
        let s = this._advance();
        n.push({
            type: 34,
            parts: [],
            sourceSpan: s.sourceSpan
        });
        let i = new t(n, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
        if (i.build(), i.errors.length > 0) return this.errors = this.errors.concat(i.errors), null;
        let a = new h(e.sourceSpan.start, s.sourceSpan.end, e.sourceSpan.fullStart), o = new h(r.sourceSpan.start, s.sourceSpan.end, r.sourceSpan.fullStart);
        return new Wt(e.parts[0], i.rootNodes, a, e.sourceSpan, o);
    }
    _collectExpansionExpTokens(e) {
        let r = [], n = [
            22
        ];
        for(;;){
            if ((this._peek.type === 20 || this._peek.type === 22) && n.push(this._peek.type), this._peek.type === 23) if (Ws(n, 22)) {
                if (n.pop(), n.length === 0) return r;
            } else return this.errors.push(L.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
            if (this._peek.type === 24) if (Ws(n, 20)) n.pop();
            else return this.errors.push(L.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
            if (this._peek.type === 34) return this.errors.push(L.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
            r.push(this._advance());
        }
    }
    _getText(e) {
        let r = e.parts[0];
        if (r.length > 0 && r[0] == `
`) {
            let n = this._getClosestParentElement();
            n != null && n.children.length == 0 && this.getTagDefinition(n.name).ignoreFirstLf && (r = r.substring(1));
        }
        return r;
    }
    _consumeText(e) {
        let r = [
            e
        ], n = e.sourceSpan, s = e.parts[0];
        if (s.length > 0 && s[0] === `
`) {
            let i = this._getContainer();
            i != null && i.children.length === 0 && this.getTagDefinition(i.name).ignoreFirstLf && (s = s.substring(1), r[0] = {
                type: e.type,
                sourceSpan: e.sourceSpan,
                parts: [
                    s
                ]
            });
        }
        for(; this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9;)e = this._advance(), r.push(e), e.type === 8 ? s += e.parts.join("").replace(/&([^;]+);/g, zs) : e.type === 9 ? s += e.parts[0] : s += e.parts.join("");
        if (s.length > 0) {
            let i = e.sourceSpan;
            this._addToParent(new Ht(s, new h(n.start, i.end, n.fullStart, n.details), r));
        }
    }
    _closeVoidElement() {
        let e = this._getContainer();
        e instanceof G && this.getTagDefinition(e.name).isVoid && this._containerStack.pop();
    }
    _consumeStartTag(e) {
        let [r, n] = e.parts, s = [];
        for(; this._peek.type === 14;)s.push(this._consumeAttr(this._advance()));
        let i = this._getElementFullName(r, n, this._getClosestParentElement()), a = !1;
        if (this._peek.type === 2) {
            this._advance(), a = !0;
            let C = this.getTagDefinition(i);
            this.canSelfClose || C.canSelfClose || Re(i) !== null || C.isVoid || this.errors.push(L.create(i, e.sourceSpan, `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`));
        } else this._peek.type === 1 && (this._advance(), a = !1);
        let o = this._peek.sourceSpan.fullStart, u = new h(e.sourceSpan.start, o, e.sourceSpan.fullStart), p = new h(e.sourceSpan.start, o, e.sourceSpan.fullStart), l = new h(e.sourceSpan.start.moveBy(1), e.sourceSpan.end), f = new G(i, s, [], u, p, void 0, l), d = this._getContainer();
        this._pushContainer(f, d instanceof G && this.getTagDefinition(d.name).isClosedByChild(f.name)), a ? this._popContainer(i, G, u) : e.type === 4 && (this._popContainer(i, G, null), this.errors.push(L.create(i, u, `Opening tag "${i}" not terminated.`)));
    }
    _pushContainer(e, r) {
        r && this._containerStack.pop(), this._addToParent(e), this._containerStack.push(e);
    }
    _consumeEndTag(e) {
        let r = this.allowHtmComponentClosingTags && e.parts.length === 0 ? null : this._getElementFullName(e.parts[0], e.parts[1], this._getClosestParentElement());
        if (r && this.getTagDefinition(r).isVoid) this.errors.push(L.create(r, e.sourceSpan, `Void elements do not have end tags "${e.parts[1]}"`));
        else if (!this._popContainer(r, G, e.sourceSpan)) {
            let n = `Unexpected closing tag "${r}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
            this.errors.push(L.create(r, e.sourceSpan, n));
        }
    }
    _popContainer(e, r, n) {
        let s = !1;
        for(let i = this._containerStack.length - 1; i >= 0; i--){
            let a = this._containerStack[i];
            if (Re(a.name) ? a.name === e : (e == null || a.name.toLowerCase() === e.toLowerCase()) && a instanceof r) return a.endSourceSpan = n, a.sourceSpan.end = n !== null ? n.end : a.sourceSpan.end, this._containerStack.splice(i, this._containerStack.length - i), !s;
            (a instanceof ee || a instanceof G && !this.getTagDefinition(a.name).closedByParent) && (s = !0);
        }
        return !1;
    }
    _consumeAttr(e) {
        let r = Oe(e.parts[0], e.parts[1]), n = e.sourceSpan.end, s;
        this._peek.type === 15 && (s = this._advance());
        let i = "", a = [], o, u;
        if (this._peek.type === 16) for(o = this._peek.sourceSpan, u = this._peek.sourceSpan.end; this._peek.type === 16 || this._peek.type === 17 || this._peek.type === 9;){
            let f = this._advance();
            a.push(f), f.type === 17 ? i += f.parts.join("").replace(/&([^;]+);/g, zs) : f.type === 9 ? i += f.parts[0] : i += f.parts.join(""), u = n = f.sourceSpan.end;
        }
        this._peek.type === 15 && (u = n = this._advance().sourceSpan.end);
        let l = o && u && new h((s == null ? void 0 : s.sourceSpan.start) ?? o.start, u, (s == null ? void 0 : s.sourceSpan.fullStart) ?? o.fullStart);
        return new zt(r, i, new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), e.sourceSpan, l, a.length > 0 ? a : void 0, void 0);
    }
    _consumeBlockOpen(e) {
        let r = [];
        for(; this._peek.type === 28;){
            let o = this._advance();
            r.push(new ct(o.parts[0], o.sourceSpan));
        }
        this._peek.type === 26 && this._advance();
        let n = this._peek.sourceSpan.fullStart, s = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), i = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), a = new ee(e.parts[0], r, [], s, e.sourceSpan, i);
        this._pushContainer(a, !1);
    }
    _consumeBlockClose(e) {
        this._popContainer(null, ee, e.sourceSpan) || this.errors.push(L.create(null, e.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
    }
    _consumeIncompleteBlock(e) {
        let r = [];
        for(; this._peek.type === 28;){
            let o = this._advance();
            r.push(new ct(o.parts[0], o.sourceSpan));
        }
        let n = this._peek.sourceSpan.fullStart, s = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), i = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), a = new ee(e.parts[0], r, [], s, e.sourceSpan, i);
        this._pushContainer(a, !1), this._popContainer(null, ee, null), this.errors.push(L.create(e.parts[0], s, `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
    }
    _consumeLet(e) {
        let r = e.parts[0], n, s;
        if (this._peek.type !== 31) {
            this.errors.push(L.create(e.parts[0], e.sourceSpan, `Invalid @let declaration "${r}". Declaration must have a value.`));
            return;
        } else n = this._advance();
        if (this._peek.type !== 32) {
            this.errors.push(L.create(e.parts[0], e.sourceSpan, `Unterminated @let declaration "${r}". Declaration must be terminated with a semicolon.`));
            return;
        } else s = this._advance();
        let i = s.sourceSpan.fullStart, a = new h(e.sourceSpan.start, i, e.sourceSpan.fullStart), o = e.sourceSpan.toString().lastIndexOf(r), u = e.sourceSpan.start.moveBy(o), p = new h(u, e.sourceSpan.end), l = new pt(r, n.parts[0], a, p, n.sourceSpan);
        this._addToParent(l);
    }
    _consumeIncompleteLet(e) {
        let r = e.parts[0] ?? "", n = r ? ` "${r}"` : "";
        if (r.length > 0) {
            let s = e.sourceSpan.toString().lastIndexOf(r), i = e.sourceSpan.start.moveBy(s), a = new h(i, e.sourceSpan.end), o = new h(e.sourceSpan.start, e.sourceSpan.start.moveBy(0)), u = new pt(r, "", e.sourceSpan, a, o);
            this._addToParent(u);
        }
        this.errors.push(L.create(e.parts[0], e.sourceSpan, `Incomplete @let declaration${n}. @let declarations must be written as \`@let <name> = <value>;\``));
    }
    _getContainer() {
        return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
    }
    _getClosestParentElement() {
        for(let e = this._containerStack.length - 1; e > -1; e--)if (this._containerStack[e] instanceof G) return this._containerStack[e];
        return null;
    }
    _addToParent(e) {
        let r = this._getContainer();
        r === null ? this.rootNodes.push(e) : r.children.push(e);
    }
    _getElementFullName(e, r, n) {
        if (e === "" && (e = this.getTagDefinition(r).implicitNamespacePrefix || "", e === "" && n != null)) {
            let s = ut(n.name)[1];
            this.getTagDefinition(s).preventNamespaceInheritance || (e = Re(n.name));
        }
        return Oe(e, r);
    }
};
function Ws(t, e) {
    return t.length > 0 && t[t.length - 1] === e;
}
function zs(t, e) {
    return Me[e] !== void 0 ? Me[e] || t : /^#x[a-f0-9]+$/i.test(e) ? String.fromCodePoint(parseInt(e.slice(2), 16)) : /^#\d+$/.test(e) ? String.fromCodePoint(parseInt(e.slice(1), 10)) : t;
}
var rr = class extends tr {
    constructor(){
        super($e);
    }
    parse(e, r, n, s = !1, i) {
        return super.parse(e, r, n, s, i);
    }
};
var Wr = null, So = ()=>(Wr || (Wr = new rr), Wr);
function zr(t, e = {}) {
    let { canSelfClose: r = !1, allowHtmComponentClosingTags: n = !1, isTagNameCaseSensitive: s = !1, getTagContentType: i, tokenizeAngularBlocks: a = !1, tokenizeAngularLetDeclaration: o = !1 } = e;
    return So().parse(t, "angular-html-parser", {
        tokenizeExpansionForms: a,
        interpolationConfig: void 0,
        canSelfClose: r,
        allowHtmComponentClosingTags: n,
        tokenizeBlocks: a,
        tokenizeLet: o
    }, s, i);
}
function _o(t, e) {
    let r = new SyntaxError(t + " (" + e.loc.start.line + ":" + e.loc.start.column + ")");
    return Object.assign(r, e);
}
var Gs = _o;
var Ct = 3;
function Eo(t) {
    let e = t.slice(0, Ct);
    if (e !== "---" && e !== "+++") return;
    let r = t.indexOf(`
`, Ct);
    if (r === -1) return;
    let n = t.slice(Ct, r).trim(), s = t.indexOf(`
${e}`, r), i = n;
    if (i || (i = e === "+++" ? "toml" : "yaml"), s === -1 && e === "---" && i === "yaml" && (s = t.indexOf(`
...`, r)), s === -1) return;
    let a = s + 1 + Ct, o = t.charAt(a + 1);
    if (!/\s?/u.test(o)) return;
    let u = t.slice(0, a);
    return {
        type: "front-matter",
        language: i,
        explicitLanguage: n,
        value: t.slice(r + 1, s),
        startDelimiter: e,
        endDelimiter: u.slice(-Ct),
        raw: u
    };
}
function Ao(t) {
    let e = Eo(t);
    if (!e) return {
        content: t
    };
    let { raw: r } = e;
    return {
        frontMatter: e,
        content: w(!1, r, /[^\n]/gu, " ") + t.slice(r.length)
    };
}
var Ys = Ao;
var nr = {
    attrs: !0,
    children: !0,
    cases: !0,
    expression: !0
}, js = new Set([
    "parent"
]), sr = class t {
    constructor(e = {}){
        for (let r of new Set([
            ...js,
            ...Object.keys(e)
        ]))this.setProperty(r, e[r]);
    }
    setProperty(e, r) {
        if (this[e] !== r) {
            if (e in nr && (r = r.map((n)=>this.createChild(n))), !js.has(e)) {
                this[e] = r;
                return;
            }
            Object.defineProperty(this, e, {
                value: r,
                enumerable: !1,
                configurable: !0
            });
        }
    }
    map(e) {
        let r;
        for(let n in nr){
            let s = this[n];
            if (s) {
                let i = Do(s, (a)=>a.map(e));
                r !== s && (r || (r = new t({
                    parent: this.parent
                })), r.setProperty(n, i));
            }
        }
        if (r) for(let n in this)n in nr || (r[n] = this[n]);
        return e(r || this);
    }
    walk(e) {
        for(let r in nr){
            let n = this[r];
            if (n) for(let s = 0; s < n.length; s++)n[s].walk(e);
        }
        e(this);
    }
    createChild(e) {
        let r = e instanceof t ? e.clone() : new t(e);
        return r.setProperty("parent", this), r;
    }
    insertChildBefore(e, r) {
        this.children.splice(this.children.indexOf(e), 0, this.createChild(r));
    }
    removeChild(e) {
        this.children.splice(this.children.indexOf(e), 1);
    }
    replaceChild(e, r) {
        this.children[this.children.indexOf(e)] = this.createChild(r);
    }
    clone() {
        return new t(this);
    }
    get firstChild() {
        var e;
        return (e = this.children) == null ? void 0 : e[0];
    }
    get lastChild() {
        var e;
        return (e = this.children) == null ? void 0 : e[this.children.length - 1];
    }
    get prev() {
        var e, r;
        return (r = (e = this.parent) == null ? void 0 : e.children) == null ? void 0 : r[this.parent.children.indexOf(this) - 1];
    }
    get next() {
        var e, r;
        return (r = (e = this.parent) == null ? void 0 : e.children) == null ? void 0 : r[this.parent.children.indexOf(this) + 1];
    }
    get rawName() {
        return this.hasExplicitNamespace ? this.fullName : this.name;
    }
    get fullName() {
        return this.namespace ? this.namespace + ":" + this.name : this.name;
    }
    get attrMap() {
        return Object.fromEntries(this.attrs.map((e)=>[
                e.fullName,
                e.value
            ]));
    }
};
function Do(t, e) {
    let r = t.map(e);
    return r.some((n, s)=>n !== t[s]) ? r : t;
}
var vo = [
    {
        regex: /^(\[if([^\]]*)\]>)(.*?)<!\s*\[endif\]$/su,
        parse: yo
    },
    {
        regex: /^\[if([^\]]*)\]><!$/u,
        parse: wo
    },
    {
        regex: /^<!\s*\[endif\]$/u,
        parse: bo
    }
];
function Ks(t, e) {
    if (t.value) for (let { regex: r, parse: n } of vo){
        let s = t.value.match(r);
        if (s) return n(t, e, s);
    }
    return null;
}
function yo(t, e, r) {
    let [, n, s, i] = r, a = 4 + n.length, o = t.sourceSpan.start.moveBy(a), u = o.moveBy(i.length), [p, l] = (()=>{
        try {
            return [
                !0,
                e(i, o).children
            ];
        } catch  {
            return [
                !1,
                [
                    {
                        type: "text",
                        value: i,
                        sourceSpan: new h(o, u)
                    }
                ]
            ];
        }
    })();
    return {
        type: "ieConditionalComment",
        complete: p,
        children: l,
        condition: w(!1, s.trim(), /\s+/gu, " "),
        sourceSpan: t.sourceSpan,
        startSourceSpan: new h(t.sourceSpan.start, o),
        endSourceSpan: new h(u, t.sourceSpan.end)
    };
}
function wo(t, e, r) {
    let [, n] = r;
    return {
        type: "ieConditionalStartComment",
        condition: w(!1, n.trim(), /\s+/gu, " "),
        sourceSpan: t.sourceSpan
    };
}
function bo(t) {
    return {
        type: "ieConditionalEndComment",
        sourceSpan: t.sourceSpan
    };
}
var ir = new Map([
    [
        "*",
        new Set([
            "accesskey",
            "autocapitalize",
            "autofocus",
            "class",
            "contenteditable",
            "dir",
            "draggable",
            "enterkeyhint",
            "hidden",
            "id",
            "inert",
            "inputmode",
            "is",
            "itemid",
            "itemprop",
            "itemref",
            "itemscope",
            "itemtype",
            "lang",
            "nonce",
            "popover",
            "slot",
            "spellcheck",
            "style",
            "tabindex",
            "title",
            "translate",
            "writingsuggestions"
        ])
    ],
    [
        "a",
        new Set([
            "charset",
            "coords",
            "download",
            "href",
            "hreflang",
            "name",
            "ping",
            "referrerpolicy",
            "rel",
            "rev",
            "shape",
            "target",
            "type"
        ])
    ],
    [
        "applet",
        new Set([
            "align",
            "alt",
            "archive",
            "code",
            "codebase",
            "height",
            "hspace",
            "name",
            "object",
            "vspace",
            "width"
        ])
    ],
    [
        "area",
        new Set([
            "alt",
            "coords",
            "download",
            "href",
            "hreflang",
            "nohref",
            "ping",
            "referrerpolicy",
            "rel",
            "shape",
            "target",
            "type"
        ])
    ],
    [
        "audio",
        new Set([
            "autoplay",
            "controls",
            "crossorigin",
            "loop",
            "muted",
            "preload",
            "src"
        ])
    ],
    [
        "base",
        new Set([
            "href",
            "target"
        ])
    ],
    [
        "basefont",
        new Set([
            "color",
            "face",
            "size"
        ])
    ],
    [
        "blockquote",
        new Set([
            "cite"
        ])
    ],
    [
        "body",
        new Set([
            "alink",
            "background",
            "bgcolor",
            "link",
            "text",
            "vlink"
        ])
    ],
    [
        "br",
        new Set([
            "clear"
        ])
    ],
    [
        "button",
        new Set([
            "disabled",
            "form",
            "formaction",
            "formenctype",
            "formmethod",
            "formnovalidate",
            "formtarget",
            "name",
            "popovertarget",
            "popovertargetaction",
            "type",
            "value"
        ])
    ],
    [
        "canvas",
        new Set([
            "height",
            "width"
        ])
    ],
    [
        "caption",
        new Set([
            "align"
        ])
    ],
    [
        "col",
        new Set([
            "align",
            "char",
            "charoff",
            "span",
            "valign",
            "width"
        ])
    ],
    [
        "colgroup",
        new Set([
            "align",
            "char",
            "charoff",
            "span",
            "valign",
            "width"
        ])
    ],
    [
        "data",
        new Set([
            "value"
        ])
    ],
    [
        "del",
        new Set([
            "cite",
            "datetime"
        ])
    ],
    [
        "details",
        new Set([
            "name",
            "open"
        ])
    ],
    [
        "dialog",
        new Set([
            "open"
        ])
    ],
    [
        "dir",
        new Set([
            "compact"
        ])
    ],
    [
        "div",
        new Set([
            "align"
        ])
    ],
    [
        "dl",
        new Set([
            "compact"
        ])
    ],
    [
        "embed",
        new Set([
            "height",
            "src",
            "type",
            "width"
        ])
    ],
    [
        "fieldset",
        new Set([
            "disabled",
            "form",
            "name"
        ])
    ],
    [
        "font",
        new Set([
            "color",
            "face",
            "size"
        ])
    ],
    [
        "form",
        new Set([
            "accept",
            "accept-charset",
            "action",
            "autocomplete",
            "enctype",
            "method",
            "name",
            "novalidate",
            "target"
        ])
    ],
    [
        "frame",
        new Set([
            "frameborder",
            "longdesc",
            "marginheight",
            "marginwidth",
            "name",
            "noresize",
            "scrolling",
            "src"
        ])
    ],
    [
        "frameset",
        new Set([
            "cols",
            "rows"
        ])
    ],
    [
        "h1",
        new Set([
            "align"
        ])
    ],
    [
        "h2",
        new Set([
            "align"
        ])
    ],
    [
        "h3",
        new Set([
            "align"
        ])
    ],
    [
        "h4",
        new Set([
            "align"
        ])
    ],
    [
        "h5",
        new Set([
            "align"
        ])
    ],
    [
        "h6",
        new Set([
            "align"
        ])
    ],
    [
        "head",
        new Set([
            "profile"
        ])
    ],
    [
        "hr",
        new Set([
            "align",
            "noshade",
            "size",
            "width"
        ])
    ],
    [
        "html",
        new Set([
            "manifest",
            "version"
        ])
    ],
    [
        "iframe",
        new Set([
            "align",
            "allow",
            "allowfullscreen",
            "allowpaymentrequest",
            "allowusermedia",
            "frameborder",
            "height",
            "loading",
            "longdesc",
            "marginheight",
            "marginwidth",
            "name",
            "referrerpolicy",
            "sandbox",
            "scrolling",
            "src",
            "srcdoc",
            "width"
        ])
    ],
    [
        "img",
        new Set([
            "align",
            "alt",
            "border",
            "crossorigin",
            "decoding",
            "fetchpriority",
            "height",
            "hspace",
            "ismap",
            "loading",
            "longdesc",
            "name",
            "referrerpolicy",
            "sizes",
            "src",
            "srcset",
            "usemap",
            "vspace",
            "width"
        ])
    ],
    [
        "input",
        new Set([
            "accept",
            "align",
            "alt",
            "autocomplete",
            "checked",
            "dirname",
            "disabled",
            "form",
            "formaction",
            "formenctype",
            "formmethod",
            "formnovalidate",
            "formtarget",
            "height",
            "ismap",
            "list",
            "max",
            "maxlength",
            "min",
            "minlength",
            "multiple",
            "name",
            "pattern",
            "placeholder",
            "popovertarget",
            "popovertargetaction",
            "readonly",
            "required",
            "size",
            "src",
            "step",
            "type",
            "usemap",
            "value",
            "width"
        ])
    ],
    [
        "ins",
        new Set([
            "cite",
            "datetime"
        ])
    ],
    [
        "isindex",
        new Set([
            "prompt"
        ])
    ],
    [
        "label",
        new Set([
            "for",
            "form"
        ])
    ],
    [
        "legend",
        new Set([
            "align"
        ])
    ],
    [
        "li",
        new Set([
            "type",
            "value"
        ])
    ],
    [
        "link",
        new Set([
            "as",
            "blocking",
            "charset",
            "color",
            "crossorigin",
            "disabled",
            "fetchpriority",
            "href",
            "hreflang",
            "imagesizes",
            "imagesrcset",
            "integrity",
            "media",
            "referrerpolicy",
            "rel",
            "rev",
            "sizes",
            "target",
            "type"
        ])
    ],
    [
        "map",
        new Set([
            "name"
        ])
    ],
    [
        "menu",
        new Set([
            "compact"
        ])
    ],
    [
        "meta",
        new Set([
            "charset",
            "content",
            "http-equiv",
            "media",
            "name",
            "scheme"
        ])
    ],
    [
        "meter",
        new Set([
            "high",
            "low",
            "max",
            "min",
            "optimum",
            "value"
        ])
    ],
    [
        "object",
        new Set([
            "align",
            "archive",
            "border",
            "classid",
            "codebase",
            "codetype",
            "data",
            "declare",
            "form",
            "height",
            "hspace",
            "name",
            "standby",
            "type",
            "typemustmatch",
            "usemap",
            "vspace",
            "width"
        ])
    ],
    [
        "ol",
        new Set([
            "compact",
            "reversed",
            "start",
            "type"
        ])
    ],
    [
        "optgroup",
        new Set([
            "disabled",
            "label"
        ])
    ],
    [
        "option",
        new Set([
            "disabled",
            "label",
            "selected",
            "value"
        ])
    ],
    [
        "output",
        new Set([
            "for",
            "form",
            "name"
        ])
    ],
    [
        "p",
        new Set([
            "align"
        ])
    ],
    [
        "param",
        new Set([
            "name",
            "type",
            "value",
            "valuetype"
        ])
    ],
    [
        "pre",
        new Set([
            "width"
        ])
    ],
    [
        "progress",
        new Set([
            "max",
            "value"
        ])
    ],
    [
        "q",
        new Set([
            "cite"
        ])
    ],
    [
        "script",
        new Set([
            "async",
            "blocking",
            "charset",
            "crossorigin",
            "defer",
            "fetchpriority",
            "integrity",
            "language",
            "nomodule",
            "referrerpolicy",
            "src",
            "type"
        ])
    ],
    [
        "select",
        new Set([
            "autocomplete",
            "disabled",
            "form",
            "multiple",
            "name",
            "required",
            "size"
        ])
    ],
    [
        "slot",
        new Set([
            "name"
        ])
    ],
    [
        "source",
        new Set([
            "height",
            "media",
            "sizes",
            "src",
            "srcset",
            "type",
            "width"
        ])
    ],
    [
        "style",
        new Set([
            "blocking",
            "media",
            "type"
        ])
    ],
    [
        "table",
        new Set([
            "align",
            "bgcolor",
            "border",
            "cellpadding",
            "cellspacing",
            "frame",
            "rules",
            "summary",
            "width"
        ])
    ],
    [
        "tbody",
        new Set([
            "align",
            "char",
            "charoff",
            "valign"
        ])
    ],
    [
        "td",
        new Set([
            "abbr",
            "align",
            "axis",
            "bgcolor",
            "char",
            "charoff",
            "colspan",
            "headers",
            "height",
            "nowrap",
            "rowspan",
            "scope",
            "valign",
            "width"
        ])
    ],
    [
        "template",
        new Set([
            "shadowrootclonable",
            "shadowrootdelegatesfocus",
            "shadowrootmode"
        ])
    ],
    [
        "textarea",
        new Set([
            "autocomplete",
            "cols",
            "dirname",
            "disabled",
            "form",
            "maxlength",
            "minlength",
            "name",
            "placeholder",
            "readonly",
            "required",
            "rows",
            "wrap"
        ])
    ],
    [
        "tfoot",
        new Set([
            "align",
            "char",
            "charoff",
            "valign"
        ])
    ],
    [
        "th",
        new Set([
            "abbr",
            "align",
            "axis",
            "bgcolor",
            "char",
            "charoff",
            "colspan",
            "headers",
            "height",
            "nowrap",
            "rowspan",
            "scope",
            "valign",
            "width"
        ])
    ],
    [
        "thead",
        new Set([
            "align",
            "char",
            "charoff",
            "valign"
        ])
    ],
    [
        "time",
        new Set([
            "datetime"
        ])
    ],
    [
        "tr",
        new Set([
            "align",
            "bgcolor",
            "char",
            "charoff",
            "valign"
        ])
    ],
    [
        "track",
        new Set([
            "default",
            "kind",
            "label",
            "src",
            "srclang"
        ])
    ],
    [
        "ul",
        new Set([
            "compact",
            "type"
        ])
    ],
    [
        "video",
        new Set([
            "autoplay",
            "controls",
            "crossorigin",
            "height",
            "loop",
            "muted",
            "playsinline",
            "poster",
            "preload",
            "src",
            "width"
        ])
    ]
]);
var Qs = new Set([
    "a",
    "abbr",
    "acronym",
    "address",
    "applet",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "basefont",
    "bdi",
    "bdo",
    "bgsound",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "command",
    "content",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "image",
    "img",
    "input",
    "ins",
    "isindex",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "listing",
    "main",
    "map",
    "mark",
    "marquee",
    "math",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "multicol",
    "nav",
    "nextid",
    "nobr",
    "noembed",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "plaintext",
    "pre",
    "progress",
    "q",
    "rb",
    "rbc",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "script",
    "search",
    "section",
    "select",
    "shadow",
    "slot",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "svg",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "xmp"
]);
function To(t) {
    if (t.type === "block") {
        if (t.name = w(!1, t.name.toLowerCase(), /\s+/gu, " ").trim(), t.type = "angularControlFlowBlock", !Fe(t.parameters)) {
            delete t.parameters;
            return;
        }
        for (let e of t.parameters)e.type = "angularControlFlowBlockParameter";
        t.parameters = {
            type: "angularControlFlowBlockParameters",
            children: t.parameters,
            sourceSpan: new h(t.parameters[0].sourceSpan.start, se(!1, t.parameters, -1).sourceSpan.end)
        };
    }
}
function xo(t) {
    t.type === "letDeclaration" && (t.type = "angularLetDeclaration", t.id = t.name, t.init = {
        type: "angularLetDeclarationInitializer",
        sourceSpan: new h(t.valueSpan.start, t.valueSpan.end),
        value: t.value
    }, delete t.name, delete t.value);
}
function ko(t) {
    (t.type === "plural" || t.type === "select") && (t.clause = t.type, t.type = "angularIcuExpression"), t.type === "expansionCase" && (t.type = "angularIcuCase");
}
function Js(t, e, r) {
    let { name: n, canSelfClose: s = !0, normalizeTagName: i = !1, normalizeAttributeName: a = !1, allowHtmComponentClosingTags: o = !1, isTagNameCaseSensitive: u = !1, shouldParseAsRawText: p } = e, { rootNodes: l, errors: f } = zr(t, {
        canSelfClose: s,
        allowHtmComponentClosingTags: o,
        isTagNameCaseSensitive: u,
        getTagContentType: p ? (...c)=>p(...c) ? I.RAW_TEXT : void 0 : void 0,
        tokenizeAngularBlocks: n === "angular" ? !0 : void 0,
        tokenizeAngularLetDeclaration: n === "angular" ? !0 : void 0
    });
    if (n === "vue") {
        if (l.some((x)=>x.type === "docType" && x.value === "html" || x.type === "element" && x.name.toLowerCase() === "html")) return Js(t, ei, r);
        let g, y = ()=>g ?? (g = zr(t, {
                canSelfClose: s,
                allowHtmComponentClosingTags: o,
                isTagNameCaseSensitive: u
            })), M = (x)=>y().rootNodes.find(({ startSourceSpan: V })=>V && V.start.offset === x.startSourceSpan.start.offset) ?? x;
        for (let [x, V] of l.entries()){
            let { endSourceSpan: jr, startSourceSpan: ti } = V;
            if (jr === null) f = y().errors, l[x] = M(V);
            else if (Bo(V, r)) {
                let Kr = y().errors.find((Qr)=>Qr.span.start.offset > ti.start.offset && Qr.span.start.offset < jr.end.offset);
                Kr && Xs(Kr), l[x] = M(V);
            }
        }
    }
    f.length > 0 && Xs(f[0]);
    let d = (c)=>{
        let g = c.name.startsWith(":") ? c.name.slice(1).split(":")[0] : null, y = c.nameSpan.toString(), M = g !== null && y.startsWith(`${g}:`), x = M ? y.slice(g.length + 1) : y;
        c.name = x, c.namespace = g, c.hasExplicitNamespace = M;
    }, C = (c)=>{
        switch(c.type){
            case "element":
                d(c);
                for (let g of c.attrs)d(g), g.valueSpan ? (g.value = g.valueSpan.toString(), /["']/u.test(g.value[0]) && (g.value = g.value.slice(1, -1))) : g.value = null;
                break;
            case "comment":
                c.value = c.sourceSpan.toString().slice(4, -3);
                break;
            case "text":
                c.value = c.sourceSpan.toString();
                break;
        }
    }, A = (c, g)=>{
        let y = c.toLowerCase();
        return g(y) ? y : c;
    }, D = (c)=>{
        if (c.type === "element" && (i && (!c.namespace || c.namespace === c.tagDefinition.implicitNamespacePrefix || pe(c)) && (c.name = A(c.name, (g)=>Qs.has(g))), a)) for (let g of c.attrs)g.namespace || (g.name = A(g.name, (y)=>ir.has(c.name) && (ir.get("*").has(y) || ir.get(c.name).has(y))));
    }, R = (c)=>{
        c.sourceSpan && c.endSourceSpan && (c.sourceSpan = new h(c.sourceSpan.start, c.endSourceSpan.end));
    }, F = (c)=>{
        if (c.type === "element") {
            let g = $e(u ? c.name : c.name.toLowerCase());
            !c.namespace || c.namespace === g.implicitNamespacePrefix || pe(c) ? c.tagDefinition = g : c.tagDefinition = $e("");
        }
    };
    return jt(new class extends ht {
        visitExpansionCase(c, g) {
            n === "angular" && this.visitChildren(g, (y)=>{
                y(c.expression);
            });
        }
        visit(c) {
            C(c), F(c), D(c), R(c);
        }
    }, l), l;
}
function Bo(t, e) {
    var n;
    if (t.type !== "element" || t.name !== "template") return !1;
    let r = (n = t.attrs.find((s)=>s.name === "lang")) == null ? void 0 : n.value;
    return !r || Be(e, {
        language: r
    }) === "html";
}
function Xs(t) {
    let { msg: e, span: { start: r, end: n } } = t;
    throw Gs(e, {
        loc: {
            start: {
                line: r.line + 1,
                column: r.col + 1
            },
            end: {
                line: n.line + 1,
                column: n.col + 1
            }
        },
        cause: t
    });
}
function Zs(t, e, r = {}, n = !0) {
    let { frontMatter: s, content: i } = n ? Ys(t) : {
        frontMatter: null,
        content: t
    }, a = new Ee(t, r.filepath), o = new ie(a, 0, 0, 0), u = o.moveBy(t.length), p = {
        type: "root",
        sourceSpan: new h(o, u),
        children: Js(i, e, r)
    };
    if (s) {
        let d = new ie(a, 0, 0, 0), C = d.moveBy(s.raw.length);
        s.sourceSpan = new h(d, C), p.children.unshift(s);
    }
    let l = new sr(p), f = (d, C)=>{
        let { offset: A } = C, D = w(!1, t.slice(0, A), /[^\n\r]/gu, " "), F = Zs(D + d, e, r, !1);
        F.sourceSpan = new h(C, se(!1, F.children, -1).sourceSpan.end);
        let c = F.children[0];
        return c.length === A ? F.children.shift() : (c.sourceSpan = new h(c.sourceSpan.start.moveBy(A), c.sourceSpan.end), c.value = c.value.slice(A)), F;
    };
    return l.walk((d)=>{
        if (d.type === "comment") {
            let C = Ks(d, f);
            C && d.parent.replaceChild(d, C);
        }
        To(d), xo(d), ko(d);
    }), l;
}
function ar(t) {
    return {
        parse: (e, r)=>Zs(e, t, r),
        hasPragma: as,
        astFormat: "html",
        locStart: X,
        locEnd: J
    };
}
var ei = {
    name: "html",
    normalizeTagName: !0,
    normalizeAttributeName: !0,
    allowHtmComponentClosingTags: !0
}, Lo = ar(ei), Fo = ar({
    name: "angular"
}), No = ar({
    name: "vue",
    isTagNameCaseSensitive: !0,
    shouldParseAsRawText (t, e, r, n) {
        return t.toLowerCase() !== "html" && !r && (t !== "template" || n.some(({ name: s, value: i })=>s === "lang" && i !== "html" && i !== "" && i !== void 0));
    }
}), Po = ar({
    name: "lwc",
    canSelfClose: !1
});
var Io = {
    html: Es
};
var Nh = Yr;
;
}}),

};

//# sourceMappingURL=f0818_prettier_2c862a._.js.map