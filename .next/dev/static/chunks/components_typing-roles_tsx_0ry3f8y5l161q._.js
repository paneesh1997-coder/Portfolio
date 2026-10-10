(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/typing-roles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypingRoles",
    ()=>TypingRoles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const roles = [
    'Product Designer',
    'UX Designer',
    'Brand Strategist'
];
function TypingRoles() {
    _s();
    const [roleIndex, setRoleIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [characterCount, setCharacterCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(roles[0].length);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reduceMotion, setReduceMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypingRoles.useEffect": ()=>{
            const media = window.matchMedia('(prefers-reduced-motion: reduce)');
            const updatePreference = {
                "TypingRoles.useEffect.updatePreference": ()=>setReduceMotion(media.matches)
            }["TypingRoles.useEffect.updatePreference"];
            updatePreference();
            media.addEventListener('change', updatePreference);
            return ({
                "TypingRoles.useEffect": ()=>media.removeEventListener('change', updatePreference)
            })["TypingRoles.useEffect"];
        }
    }["TypingRoles.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypingRoles.useEffect": ()=>{
            if (reduceMotion) return;
            const role = roles[roleIndex];
            const atEnd = characterCount === role.length;
            const atStart = characterCount === 0;
            const delay = deleting ? 55 : atEnd ? 1450 : 95;
            const timer = window.setTimeout({
                "TypingRoles.useEffect.timer": ()=>{
                    if (atEnd && !deleting) {
                        setDeleting(true);
                        return;
                    }
                    if (atStart && deleting) {
                        setDeleting(false);
                        setRoleIndex({
                            "TypingRoles.useEffect.timer": (current)=>(current + 1) % roles.length
                        }["TypingRoles.useEffect.timer"]);
                        return;
                    }
                    setCharacterCount({
                        "TypingRoles.useEffect.timer": (count)=>count + (deleting ? -1 : 1)
                    }["TypingRoles.useEffect.timer"]);
                }
            }["TypingRoles.useEffect.timer"], delay);
            return ({
                "TypingRoles.useEffect": ()=>window.clearTimeout(timer)
            })["TypingRoles.useEffect"];
        }
    }["TypingRoles.useEffect"], [
        characterCount,
        deleting,
        reduceMotion,
        roleIndex
    ]);
    const visibleRole = reduceMotion ? roles[0] : roles[roleIndex].slice(0, characterCount);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "typing-role",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                children: [
                    "(",
                    visibleRole,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "typing-caret"
                    }, void 0, false, {
                        fileName: "[project]/components/typing-roles.tsx",
                        lineNumber: 51,
                        columnNumber: 46
                    }, this),
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/components/typing-roles.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "(Product Designer, UX Designer, and Brand Strategist)"
            }, void 0, false, {
                fileName: "[project]/components/typing-roles.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/typing-roles.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(TypingRoles, "lBPWLdBtiolnkzYZ//fs08IE+7M=");
_c = TypingRoles;
var _c;
__turbopack_context__.k.register(_c, "TypingRoles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_typing-roles_tsx_0ry3f8y5l161q._.js.map