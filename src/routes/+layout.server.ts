const fetchTimesByLocation = async (request: any) => {
  const baseURL = "https://api.aladhan.com/v1/timingsByCity"
  // http://api.aladhan.com/v1/timingsByCity?city=Dubai&country=United Arab Emirates&method=8
  const city = request.headers.get("X-Vercel-IP-City");
  const state = request.headers.get("X-Vercel-IP-Country-Region");
  const country = request.headers.get("X-Vercel-IP-Country");
  const method = 2 // ISNA
  // const url = `${baseURL}?/city=${city}&state=${state}&country=${country}&method=${method}`
  // console.log(url)
  const json = await fetch(`${baseURL}?city=${city}&state=${state}&country=${country}&method=${method}`)
  return await json.json()
}

export async function load({ request, getClientAddress }) {
  const xvRegion = request.headers.get("X-Vercel-IP-Country-Region");
  const xvCountry = request.headers.get("X-Vercel-IP-Country");
  const xvCity = request.headers.get("X-Vercel-IP-City");
  const xvLat = request.headers.get("X-Vercel-latitude");
  const xvLng = request.headers.get("X-Vercel-longitude");
  const gca = getClientAddress();

  const pt = await fetchTimesByLocation(request)
  

  return {
    locationData: {
      xvRegion,
      xvCountry,
      xvCity,
      xvLat,
      xvLng,
      gca,
      pt
    },
  };
}
