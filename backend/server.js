const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Permite conexión con React

// Ruta de prueba (luego la conectas a tu DB)
app.get('/api/deportes', (req, res) => {
  res.json([
    { id: 1, nombre: "Fútbol" },
    { id: 2, nombre: "Baloncesto" },
    { id: 3, nombre: "Tenis" }
  ]);
});

// Inicia el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});