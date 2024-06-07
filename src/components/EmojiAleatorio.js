import React, { useState } from 'react';

const emojis = ["😀", "😂", "😍", "😎", "😢", "🥶"];

const EmojiAleatorio = () => {
  const [emoji, setEmoji] = useState("😀");

  const generarEmoji = () => {
    const nuevoEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(nuevoEmoji);
  };

  return (
    <div>
      <p style={{ fontSize: '2em' }}>{emoji}</p>
      <button onClick={generarEmoji}>Generar Emoji</button>
    </div>
  );
};

export default EmojiAleatorio;
