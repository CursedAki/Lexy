import express from 'express';
import { obtenerRespuesta } from './config/openaiConfig.js'; // Asegúrate de que la ruta sea correcta
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:3001', // El puerto donde corre tu frontend (React)
  methods: ['GET', 'POST'],         // Métodos permitidos
  credentials: true,                // Permitir credenciales si es necesario
}));

app.use(express.json());

app.post('/chat', async (req, res) => {
  const { mensaje } = req.body;
  
  try {
    const respuesta = await obtenerRespuesta(mensaje);
    res.json({ answer:respuesta });
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
