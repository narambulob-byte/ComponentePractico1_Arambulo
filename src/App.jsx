import Navbar from "./Componentes/Navbar";
import Hero from "./Componentes/Hero";
import Card from "./Componentes/Card";
import Footer from "./Componentes/Footer";
import tradicionesImg from "./assets/tradiciones.png";
import gastronomiaImg from "./assets/gastronomia.png";
import turismoImg from "./assets/turismo.png";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <section id="tradiciones" className="cards-container">
        <Card
          imagen={tradicionesImg}
          titulo="Tradiciones"
          descripcion="Japón conserva costumbres centenarias como la ceremonia del té, el uso del kimono y festivales tradicionales que forman parte de su identidad cultural."
        />
      </section>

      <section id="gastronomia" className="cards-container">
        <Card
          imagen={gastronomiaImg}
          titulo="Gastronomía"
          descripcion="La cocina japonesa es reconocida mundialmente por platos como el sushi, ramen, tempura y otras preparaciones que combinan sabor y presentación."
        />
      </section>

      <section id="turismo" className="cards-container">
        <Card
          imagen={turismoImg}
          titulo="Turismo"
          descripcion="Desde templos históricos hasta ciudades modernas como Tokio, Japón ofrece experiencias únicas para visitantes de todo el mundo."
        />
      </section>

      <Footer />
    </>
  );
}

export default App;