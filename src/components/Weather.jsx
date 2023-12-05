import { Error } from './Error'
import '../styles/Weather.css'

export function Weather ( { weather: { location, current }, error } ) { 
  return (
    <>
      {
        current ? (
          <>
            <div className='location'>
              <h3>{ location.name }</h3>
              <p>{ location.region }, { location.country }</p>
            </div>
            <div className='weather'>
              <div>
                <img src={ current.condition.icon } alt={ current.condition.text } />
                <h1>{ current.temp_c }°C</h1>
              </div>
              <div>
                <p>{ current.condition.text }</p>
              </div>
            </div>
          </>
        ) : (
          <Error error={ error } />
        )
      }
    </>
  )
}
