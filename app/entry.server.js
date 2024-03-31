import { jsx as _jsx } from "hono/jsx/jsx-runtime";
/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
var ABORT_DELAY = 5000;
export default function handleRequest(request, responseStatusCode, responseHeaders, remixContext, 
// This is ignored so we can keep it in the template for visibility.  Feel
// free to delete this parameter in your app if you're not using it!
// eslint-disable-next-line @typescript-eslint/no-unused-vars
loadContext) {
    return isbot(request.headers.get("user-agent") || "")
        ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext)
        : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
    return new Promise(function (resolve, reject) {
        var shellRendered = false;
        var _a = renderToPipeableStream(_jsx(RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }), {
            onAllReady: function () {
                shellRendered = true;
                var body = new PassThrough();
                var stream = createReadableStreamFromReadable(body);
                responseHeaders.set("Content-Type", "text/html");
                resolve(new Response(stream, {
                    headers: responseHeaders,
                    status: responseStatusCode,
                }));
                pipe(body);
            },
            onShellError: function (error) {
                reject(error);
            },
            onError: function (error) {
                responseStatusCode = 500;
                // Log streaming rendering errors from inside the shell.  Don't log
                // errors encountered during initial shell rendering since they'll
                // reject and get logged in handleDocumentRequest.
                if (shellRendered) {
                    console.error(error);
                }
            },
        }), pipe = _a.pipe, abort = _a.abort;
        setTimeout(abort, ABORT_DELAY);
    });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
    return new Promise(function (resolve, reject) {
        var shellRendered = false;
        var _a = renderToPipeableStream(_jsx(RemixServer, { context: remixContext, url: request.url, abortDelay: ABORT_DELAY }), {
            onShellReady: function () {
                shellRendered = true;
                var body = new PassThrough();
                var stream = createReadableStreamFromReadable(body);
                responseHeaders.set("Content-Type", "text/html");
                resolve(new Response(stream, {
                    headers: responseHeaders,
                    status: responseStatusCode,
                }));
                pipe(body);
            },
            onShellError: function (error) {
                reject(error);
            },
            onError: function (error) {
                responseStatusCode = 500;
                // Log streaming rendering errors from inside the shell.  Don't log
                // errors encountered during initial shell rendering since they'll
                // reject and get logged in handleDocumentRequest.
                if (shellRendered) {
                    console.error(error);
                }
            },
        }), pipe = _a.pipe, abort = _a.abort;
        setTimeout(abort, ABORT_DELAY);
    });
}
