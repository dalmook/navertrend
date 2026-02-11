async function proxy(context) {
  const WORKER_BASE = "https://navertrenddalbong.sungmookcho3341.workers.dev";
  const inUrl = new URL(context.request.url);
  const targetUrl = WORKER_BASE + inUrl.pathname + inUrl.search;
  return fetch(new Request(targetUrl, context.request));
}

export const onRequest = proxy;
export const onRequestGet = proxy;
export const onRequestPost = proxy;
export const onRequestDelete = proxy;
export const onRequestPut = proxy;
export const onRequestPatch = proxy;
export const onRequestOptions = proxy;
