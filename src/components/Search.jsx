import { useSearch } from '../hooks/useSarch'

export function Search ( { onSearch } ) {
  const { search, updateSearch, error } = useSearch()

  const handleChange = ( event ) => {
    const newSearch = event.target.value

    if ( newSearch.startsWith( ' ' ) ) return
    if ( newSearch.match(/\d+/g) !== null ) return

    updateSearch( newSearch )
  }
  
  const handleSubmit = ( event ) => {
    event.preventDefault()
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
        />
        <button>Buscar</button>
      </form>
      { error && <small>{ error }</small> }
    </header>
  )
}
