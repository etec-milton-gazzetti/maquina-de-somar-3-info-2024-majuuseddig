import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Terceiro Info 2024</Text>
      <Text style={{ fontWeight: 'bold' }}>Etec Professor Milton Gazetti</Text>
      <Text style={{ fontStyle: 'italic' }}>Desenvolvimento de Dispositivos Móveis II</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
