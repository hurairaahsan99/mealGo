/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import SearchBar from '../../../Search/Search';
import {ResturentInfo} from '../components/Resturent-Info';
import {space} from '../../../../theme/spacings';
import {colors} from '../../../../theme/colors';

export default function ResturentScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <SearchBar />
        </View>
        <View style={styles.list}>
          <ResturentInfo />
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.bg.secondary,
  },
  search: {
    padding: space.md,
    margin: space.sm,
    backgroundColor: colors.bg.secondary,
  },
  list: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.bg.secondary,
  },
});
