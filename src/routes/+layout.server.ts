export function load({ request, getClientAddress }) {
  const xvRegion = request.headers.get("X-Vercel-IP-Country-Region");
  const xvCountry = request.headers.get("X-Vercel-IP-Country");
  const xvCity = request.headers.get("X-Vercel-IP-City");
  const xvLat = request.headers.get("X-Vercel-latitude");
  const xvLng = request.headers.get("X-Vercel-longitude");
  const gca = getClientAddress();

  return {
    locationData: {
      xvRegion,
      xvCountry,
      xvCity,
      xvLat,
      xvLng,
      gca,
    },
  };
}
