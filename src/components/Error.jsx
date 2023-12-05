import cloudOff from '../assets/cloud-off-icon.svg'
import uploadCloud from '../assets/upload-cloud-icon.svg'

export function Error ( { error } ) {
  return (
    <section>
      {
        error
          ? (
            <>
              <img src={ cloudOff } alt='Datos no encontrados.' />
              <div>
                <p style={ { color: 'var(--text-muted)' } }>
                  { error }
                </p>
                <p style={ { color: 'var(--text-muted)' } }>
                  Por favor, inténtelo nuevamente.
                </p>
              </div>
            </>
          ) : (
            <>
              <img src={ uploadCloud } alt='Datos no ingresados.' />
              <p style={ { color: 'var(--text-muted)' } }>
                Ingresa una ciudad para realizar la búsqueda.
              </p>
            </>
          )
      }
    </section>
  )
}
