import { useCallback, useState } from 'react'
import { searchWeather } from '../services/weather'

export function useWeather () {
  const [ weather, setWeather ] = useState( {} )
  const [ loading, setLoading ] = useState( false )
  const [ error, setError ] = useState( null )
  
  const getWeather = useCallback( async ( { search } ) => {
    try {
      setLoading( true )
      setError( null )
      
      const newWeather = await searchWeather( { search } )

      newWeather?.error
        ? handleResponseError( newWeather.error )
        : setWeather( newWeather )
    } catch ( error ) {
      setError( error.message )
    } finally {
      setLoading( false )
    }
  }, [] )
  
  const handleResponseError = ( response ) => {
    response.code === 1006
      ? setError( 'La ciudad no ha sido encontrada.' )
      : setError( 'Se ha producido un error en la conexión con el servidor.' )
  }
  
  return { weather, getWeather, loading, error }
}

