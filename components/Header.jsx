import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Header() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Palette Generator</Text>
        <Text>Work in progress</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f6f6f6',
    alignSelf: 'stretch',
    height: 100,
    paddingTop: 50,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'orange',
    fontSize: 20,
  },
});
