export function onRequest({ request }: { request: Request }): Response {
  const country = request.headers.get('CF-IPCountry')
  return Response.json(
    { country: country || null },
    { headers: { 'Cache-Control': 'no-store' } },
  )
}