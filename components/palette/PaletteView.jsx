import React, { useState } from 'react';
import { View, Button } from 'react-native';
import PaletteTab from './PaletteTab';

export default function PaletteView() {
  const [colorArray, setColorArray] = useState([]);

  const getRanColor = () => {
    let colorHexArray = [];

    for (let j = 0; j < 5; j++) {
      let colorHex = '#';
      for (let i = 0; i < 6; i++) {
        let selectedHex = Math.random() * 16;
        selectedHex = Math.floor(selectedHex).toString(16);
        colorHex = colorHex + selectedHex;
      }
      colorHexArray.push(colorHex);
    }
    setColorArray(colorHexArray);
  };

  return (
    <>
      <View>
        {colorArray.map((color) => (
          <PaletteTab colorHex={color} />
        ))}
        <Button title="Generate" onPress={getRanColor} />
      </View>
    </>
  );
}
