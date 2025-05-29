import React from 'react';
import './App.css'; // Crearemos este archivo para los estilos

function App() {
  // Datos hardcodeados (luego los reemplazas con tu DB)
  const deportes = [
    { id: 1, nombre: 'Copa MX', imagen: '/img/competencias/futbol/mexico/copaMX/copamx.png' }
  ];

  return (
    <div className="App">
      <h1>TRONO DEPORTIVO</h1>
      <div className="deportes-grid">
        {deportes.map((deporte) => (
          <div key={deporte.id} className="deporte-card">
            <img 
              src={deporte.imagen} 
              alt={deporte.nombre}
              className="deporte-logo"
            />
            <h3>{deporte.nombre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;