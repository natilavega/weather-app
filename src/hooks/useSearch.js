import { useEffect, useState, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'

export function useSearch () {
  const [ search, updateSearch ] = useState( '' )
  const [ error, setError ] = useState( null )

  const isFirstInput = useRef( true )
  const previousSearch = useRef( search )

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

  const debounceSearch = useCallback(
    debounce( ( onSearch, search ) => {
      onSearch( { search } )
    }, 300), []
  )

  return { search, updateSearch, debounceSearch, previousSearch, error }
}
