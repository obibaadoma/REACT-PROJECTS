import { useState, useEffect } from 'react';
import './styleColor.css';

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('#000000');
  const [color, setColor] = useState(' ');

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i + 1) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor('rgb(${r}, ${g}, ${b})');
  }

  useEffect(() => {
    if (typeOfColor === 'rgb') handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  function handleCreateRandomColor() {
    if (typeOfColor === 'hex') {
      handleCreateRandomHexColor();
    } else {
      handleCreateRandomRgbColor();
    }
  }

  return (
    <div className="color-container">
      <button type="button" onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
      <button type="button" onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button type="button" onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomColor}>Generate Random Color</button>

      <div className="color-display">
        <h3>{typeOfColor === 'rgb' ? 'RBB Color' : 'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
