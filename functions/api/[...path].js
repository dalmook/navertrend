async function proxy(context) {
  const WORKER_BASE = "https://navertrenddalbong.sungmookcho3341.workers.dev";

  const inUrl = new URL(context.request.url);
  const targetUrl = WORKER_BASE + inUrl.pathname + inUrl.search;

  // 원 요청 그대로 upstream에 전달 (method/headers/body 포함)
  return fetch(new Request(targetUrl, context.request));
}

// ✅ 모든 메서드 허용 (이게 있으면 기본적으로 전부 처리)
export const onRequest = proxy;

// ✅ 혹시 Pages가 메서드별로 매칭하는 상황까지 커버(안전빵)
export const onRequestGet = proxy;
export const onRequestPost = proxy;
export const onRequestDelete = proxy;
export const onRequestPut = proxy;
export const onRequestPatch = proxy;
export const onRequestOptions = proxy;
