import { jsx as _jsx, jsxs as _jsxs } from "hono/jsx/jsx-runtime";
export var meta = function () {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};
export default function Index() {
    return (_jsxs("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [_jsx("h1", { children: "Welcome to Rebun" }), _jsxs("ul", { children: [_jsx("li", { children: _jsx("a", { target: "_blank", href: "https://remix.run/tutorials/blog", rel: "noreferrer", children: "15m Quickstart Blog Tutorial" }) }), _jsx("li", { children: _jsx("a", { target: "_blank", href: "https://remix.run/tutorials/jokes", rel: "noreferrer", children: "Deep Dive Jokes App Tutorial" }) }), _jsx("li", { children: _jsx("a", { target: "_blank", href: "https://remix.run/docs", rel: "noreferrer", children: "Remix Docs" }) })] })] }));
}
