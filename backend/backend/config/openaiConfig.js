import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();
const apiKey = 'CODIGO SECRETO ACÁ'

const openai = new OpenAI({
  
  apiKey,  // Tu clave API
});

export async function obtenerRespuesta(prompt) {
  const promptInicial = "Eres un asistente especializado en temas legales de Chile. Responde únicamente preguntas relacionadas con la legislación chilena. Si la pregunta no es relevante, indícalo educadamente. Después de cada respuesta satisfactoria indica al usuario si le gustaría contactarse con un abogado de la empresa para obtener mayor asesoría al respecto";
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // O el modelo que estés usando
      messages: [
        { role: "system", "content":promptInicial},
        { role: "user", content: prompt },
      ],
    });
    return completion.choices[0].message.content.trim(); // Devuelve la respuesta del chatbot
  } catch (error) {
    console.error("Error al obtener respuesta de OpenAI:", error);
    throw new Error('Error al generar la respuesta del chatbot');
  }
}

