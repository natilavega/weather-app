const API_KEY = import.meta.env.VITE_API_KEY
const WEATHER_ENDPOINT_BASE = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&lang=es`

export async function searchWeather ( { search } ) {
  if ( search === '' ) return ( {} )

  try {
    const response = await fetch( `${ WEATHER_ENDPOINT_BASE }&q=${ search }` )
    const data = await response.json()
    return data
  } catch ( error ) {
    throw new Error ('Error en la búsqueda. ' + error.message)
  }
}
