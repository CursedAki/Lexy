require('dotenv').config();
const openai = require('openai');

const configuration = new openai.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openaiApi = new openai.OpenAIApi(configuration);

async function testOpenAI() {
  try {
    const response = await openaiApi.createCompletion({
      model: "text-davinci-003",
      prompt: "¿Cuál es la capital de Chile?",
      max_tokens: 5,
    });
    console.log(response.data.choices[0].text);
  } catch (error) {
    console.error("Error:", error);
  }
}

testOpenAI();

