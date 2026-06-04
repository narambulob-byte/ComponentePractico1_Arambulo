import { useState } from 'react'

function Hero() {

  const [titulo, setTitulo] = useState( "Descubre la Cultura Japonesa" )
  const [mostrarCuriosidad, setMostrarCuriosidad] = useState( false )

  function cambiarTitulo() {
    setTitulo( "Bienvenido a un viaje por Japón <3 " )
  }

  function mostrarInformacion() {
    setMostrarCuriosidad( !mostrarCuriosidad )
  }

  return (
    <section id="inicio" className="hero">

      <h1>{titulo}</h1>

      <p>
        Explora las tradiciones, la gastronomía y los lugares más emblemáticos de Japón.
      </p>

      <button onClick={cambiarTitulo}> Cambio de titulo</button>
      <button onClick={mostrarInformacion}> Curiosidad Japonesa </button>
        {mostrarCuriosidad && (
            <p>
                 Japón está formado por más de 6.800 islas y combina tradiciones milenarias con tecnología de vanguardia.
            </p>
        )}

    </section>
  )
}

export default Hero