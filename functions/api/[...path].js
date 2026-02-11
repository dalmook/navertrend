export async function onRequest({ request }) {
  const WORKER_BASE = "https://navertrenddalbong.sungmookcho3341.workers.dev";

  const inUrl = new URL(request.url);
  const targetUrl = WORKER_BASE + inUrl.pathname + inUrl.search;

  // 원 요청을 그대로 Worker로 전달 (method/headers/body 포함)
  const upstreamReq = new Request(targetUrl, request);

  return fetch(upstreamReq);
}
