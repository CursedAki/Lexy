import React, { useState } from 'react';
import '../Components/chatBot.css';  // Añadirás estilos personalizados aquí

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      role: 'user',
      content: input,
    };

    setMessages([...messages, newMessage]);
    setInput('');

    // lógica para llamar a la API del backend 
    try {
      const response = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensaje: input }),
      });
      
      const data = await response.json();
      console.log(data.answer)
      
      setMessages([...messages, newMessage, { role: 'bot', content: data.answer }]);
    } catch (error) {
      console.error("Error al obtener respuesta del chatbot:", error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
        
      </div>
      
      <form className="input-box" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Escribe tu mensaje..." 
          required 
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ChatBot;
