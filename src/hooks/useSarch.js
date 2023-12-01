import { useEffect, useState, useRef } from 'react'

export function useSearch () {
  const [ search, updateSearch ] = useState( '' )
  const [ error, setError ] = useState( null )
  const isFirstInput = useRef( true )

  useEffect( () => {
    if ( isFirstInput.current ) {
      isFirstInput.current = search === ''
      return
    }

    if ( search === '' ) {
      setError( 'Debe ingresar el nombre de una ciudad.' )
      return
    }

    if ( search.length < 3 ) {
      setError( 'La búsqueda debe tener al menos 3 caracteres.' )
      return
    }

    setError( null )
  }, [ search ] )
  
  return { search, updateSearch, error }
}
