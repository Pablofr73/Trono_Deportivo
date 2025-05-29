import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const categorias = [
    'Todos',
    'Fútbol',
    'Béisbol',
    'Fútbol Americano',
    'Baloncesto',
    'Automovilismo',
  ];

  const topDeportes = [
    { id: 1, nombre: 'Champions League', imagen: '/img/competencias/futbol/UEFAChampionsLeague.png', categoria: 'Fútbol' },
    { id: 2, nombre: 'Europa League', imagen: '/img/competencias/futbol/UEFAEuropaLeague.png', categoria: 'Fútbol' },
    { id: 3, nombre: 'Conference League', imagen: '/img/competencias/futbol/UEFAConferenceLeague.png', categoria: 'Fútbol' },
    { id: 5, nombre: 'NBA', imagen: '/img/competencias/basquetbal/nba.png', categoria: 'Baloncesto' },
    { id: 6, nombre: 'MLB', imagen: '/img/competencias/beisbol/mlb.png', categoria: 'Béisbol' },
    { id: 7, nombre: 'NFL', imagen: '/img/competencias/futbol americano/nfl.png', categoria: 'Fútbol Americano' },
    { id: 8, nombre: 'Fórmula 1', imagen: '/img/competencias/automovilismo/f1.png', categoria: 'Automovilismo' },
    { id: 4, nombre: 'Copa MX', imagen: '/img/competencias/futbol/copamx.png', categoria: 'Fútbol' },
  ];

  const filteredSports = activeCategory === 'Todos' 
    ? topDeportes 
    : topDeportes.filter(deporte => deporte.categoria === activeCategory);

  return (
    <div className="App">

      <nav className="main-menu">
        <ul>
          {categorias.map((categoria) => (
            <li 
              key={categoria}
              className={activeCategory === categoria ? 'active' : ''}
              onClick={() => setActiveCategory(categoria)}
            >
              <span>{categoria}</span>
            </li>
          ))}
        </ul>
      </nav>

      <header className="hero">
        <h1>TRONO DEPORTIVO</h1>
        <p>Los campeonatos más importantes del mundo, en un solo lugar</p>
        <div className="hero-gradient"></div>
      </header>

      <section className="top-deportes">
        <h2>
          <span>Top Deportes</span>
          {activeCategory !== 'Todos' && <span className="category-tag">{activeCategory}</span>}
        </h2>
        
        <div className="deportes-grid">
          {filteredSports.map((deporte) => (
            <div key={deporte.id} className="deporte-card">
              <div className="card-inner">
                <div className="card-front">
                  <img 
                    src={deporte.imagen} 
                    alt={deporte.nombre} 
                    className="deporte-logo" 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'https://via.placeholder.com/150?text=' + deporte.nombre;
                    }}
                  />
                  <h3>{deporte.nombre}</h3>
                </div>
                <div className="card-back">
                  <p>Ver más información sobre {deporte.nombre}</p>
                  <button className="explore-btn">Explorar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="app-footer">
        <p>© 2025 TRONO DEPORTIVO - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;