import { useWeather } from './hooks/useWeather'
import { Search } from './components/Search'
import { Weather } from './components/Weather'
import { Spinner } from './components/Spinner'
import './App.css'

function App () {
  const { weather, getWeather, loading, error } = useWeather()

  return (
    <>
      <Search onSearch={ getWeather } />
      <main>
        {
          loading
            ? <Spinner />
            : <Weather weather={ weather } error={ error } />
        }
      </main>
    </> 
  )
}

export default App
