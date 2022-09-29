
import './css/style.css'
import blue from './imgs/blue.jpg';
function Nombre(props) {
  return <div id="header"><div class="title"><h1><a href="#" class="title">{props.name}</a></h1><div class="tagline">Videogame Wiki</div></div></div>;
}
function Menu(props) {
  return ( <div id="menu">
  <h2>Navegar</h2>
  <ul>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Contenido 1</a></li>
    <li><a href="#">Contenido 2</a></li>
    <li><a href="#">Contenido 3</a></li>
    <li><a href="#">Contenido 4</a></li>
    <li><a href="#">Contenido 5</a></li>
  </ul>
</div>);
}
function Menu_main(props) {
  return (<div id="main">
  <div class="main_content">
  <h2>Los inicios        </h2>
      <p><img src={blue}  className="blue" alt="blue" /> Durante bastante tiempo ha sido complicado señalar cual fue el</p>
<p>primer videojuego, principalmente debido a las múltiples definiciones</p>
      <p>de este que se han ido estableciendo, pero se puede considerar</p>
      <p>como primer videojuego el Nought and crosses, también llamado</p>
      <p>OXO, desarrollado por Alexander S.Douglas en 1952. El juego era</p>
      <p>una versión computerizada del tres en raya que se ejecutaba sobre</p>
      <p>la EDSAC y permitía enfrentar a un jugador humano contra la máquina.</p>
    </div>
    </div>);
}
function Content(props) {
  return (<div id="content">
 <Menu menu="menu"/>
<Menu_main menuM="menuM"/>
      </div>);
}
function Footer(props) {
  return     (<div id="footer">
  <div class="bottom">copyright</div>
</div>);
}
function App() {

  return (
    <div className="App">
      <div id="wrap">
      <Nombre name="STEEM" />
  <Content content="Content"/>
    </div>
<Footer footer="footer"/>
    </div>
  )
}

export default App
