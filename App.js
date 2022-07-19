import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './components/Header';
import PaletteView from './components/palette/PaletteView';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <PaletteView />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
