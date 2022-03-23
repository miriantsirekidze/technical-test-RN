import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Fetch from './components/Fetch';


export default function App() {
  return (
    <View style={styles.container}>
      <Fetch/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282c34",
    flex: 1,
  }
})
