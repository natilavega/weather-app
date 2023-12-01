export function Weather ( { weather: { location, current }, error } ) {
  return (
    <>
      {
        current ? (
          <>
            <div className='location'>
              <p><strong>{ location.name }</strong>, { location.region }, { location.country }</p>
            </div>
            <div className='weather'>
              <div>
                <img src={ current.condition.icon } alt={ current.condition.text } />
                <h3>{ current.temp_c }°C</h3>
              </div>
              <p>{ current.condition.text }</p>
            </div>
          </>
        ) : (
          error ? <p>No se encontraron resultados.</p> : <p>No se realizó ninguna búsqueda.</p>
        )
        }
    </>
  )
}
