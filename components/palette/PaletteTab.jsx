import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function PaletteTab(props) {
  return (
    <>
      <View style={[styles.paletteTab, { backgroundColor: props.colorHex }]}>
        <Text style={styles.paletteTabText}>{props.colorHex}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  paletteTab: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    alignSelf: 'stretch',
    backgroundColor: '#f5dce7',
  },
  paletteTabText: {
    textTransform: 'uppercase',
    fontSize: 20,
  },
});
