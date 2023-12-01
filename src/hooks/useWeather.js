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
      setWeather( newWeather )
    } catch ( error ) {
      setError( error )
    } finally {
      setLoading( false )
    }
  }, [])
  
  return { weather, getWeather, loading, error }
}

