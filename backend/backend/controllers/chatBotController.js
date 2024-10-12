// backend/controllers/chatbotController.js
async function obtenerRespuesta(prompt) {
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",  // O el modelo que estés usando
        prompt: prompt,
        max_tokens: 100,
      });
  
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error("Error al obtener respuesta de OpenAI:", error);
    }
  }
  
