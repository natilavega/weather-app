import responseWeather from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'
import './App.css'

function App () {
  const { location, current: weather }= responseWeather

  return (
    <>
      <header>
        <form className='form'>
          <input placeholder='Buenos Aires, Nueva York, Londres...' />
          <button>Buscar</button>
        </form>
      </header>
      <main>
        {
          location ? (
            <div className='location'>
              <p><strong>{ location.name }</strong>, { location.region }, { location.country }</p>
            </div>
          ) : (null)
        }
        {
          weather ? (
            <div className='weather'>
              <div>
                <img src={ weather.condition.icon } alt={ weather.condition.text } />
                <h3>{ weather.temp_c }°c</h3>
              </div>
              <p>{ weather.condition.text }</p>
            </div>
          ) : (
            <p>No se encontraron resultados.</p>
          )
        }
      </main>
    </> 
  )
}

export default App
