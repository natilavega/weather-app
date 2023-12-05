import { useSearch } from '../hooks/useSearch'
import '../styles/Search.css'

export function Search ( { onSearch } ) {
  const { search, updateSearch, debounceSearch, previousSearch, error }
    = useSearch()

  const handleChange = ( event ) => {
    const newSearch = event.target.value

    if ( newSearch.startsWith( ' ' ) ) return
    if ( newSearch.match(/\d+/g) !== null ) return

    updateSearch( newSearch )
    debounceSearch( onSearch, newSearch )
  }
  
  const handleSubmit = ( event ) => {
    event.preventDefault()

    if ( search === previousSearch.current ) return 
    previousSearch.current = search

    onSearch( { search } )
  }

  return (
    <header>
      <form className='form' onSubmit={ handleSubmit }>
        <input
          value={ search }
          onChange={ handleChange }
          name='search'
          placeholder='Buenos Aires, Nueva York, Londres...'
          style={ error ? { border : '1.5px solid var(--error)' } : { border : 'none' } }
        />
        <button>Buscar</button>
      </form>
    </header>
  )
}
