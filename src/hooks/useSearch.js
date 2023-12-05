import { useEffect, useState, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'

export function useSearch () {
  const [ search, updateSearch ] = useState( '' )
  const [ error, setError ] = useState( false )

  const isFirstInput = useRef( true )
  const previousSearch = useRef( search )

  useEffect( () => {
    if ( isFirstInput.current ) {
      isFirstInput.current = search === ''
      return
    }

    if ( search === '' ) {
      setError( true )
      return
    }

    setError( false )
  }, [ search ] )

  const debounceSearch = useCallback(
    debounce( ( onSearch, search ) => {
      onSearch( { search } )
    }, 300), []
  )

  return { search, updateSearch, debounceSearch, previousSearch, error }
}
