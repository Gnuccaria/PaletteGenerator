import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Header() {
  return (
    <>
      <View style={styles.header}>
        <Text>Palette Generator</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f6f6f6',
    alignSelf: 'stretch',
    color: 'orange',
  },
});
