import { useWeather } from './hooks/useWeather'
import { Search } from './components/Search'
import { Weather } from './components/Weather'
import './App.css'

function App () {
  const { weather, getWeather, loading, error } = useWeather()

  return (
    <>
      <Search onSearch={ getWeather } />
      <main>
        { loading ? <p>Cargando...</p> : <Weather weather={ weather } error={error} /> }
      </main>
    </> 
  )
}

export default App
