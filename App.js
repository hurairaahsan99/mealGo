/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import SearchBar from './src/components/Search';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <SearchBar />
        </View>
        <View style={styles.list}>
          <Text>list for resturants</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: 'yellow',
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});
