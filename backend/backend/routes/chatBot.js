// backend/routes/chatbot.js
const express = require('express');
const router = express.Router();
const obtenerRespuesta = require('../config/openaiConfig'); // Ajusta la ruta según corresponda

router.post('/chatbot', async (req, res) => {
  try {
    const { prompt } = req.body; 
    const response = await obtenerRespuesta(prompt);  
    res.json({ answer: response });
    console.log(response)
  } catch (error) {
    console.error("Error en la ruta del chatbot:", error);
    res.status(500).json({ error: "Ocurrió un error al procesar la solicitud." });
  }
});

module.exports = router;
