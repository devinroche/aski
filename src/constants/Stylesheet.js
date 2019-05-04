import { StyleSheet } from 'react-native';
import Colors from './Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: Colors.tintColor,
    borderRadius: 5,
    padding: 0,
    height: 55,
  },
  safeArea: { flex: 1, backgroundColor: Colors.textWhite },
  textStyle: {
    fontSize: 14,
    fontFamily: 'Hiragino Mincho ProN',
    textAlign: 'center',
  },
  customBackgroundDialog: {
    opacity: 0.9,
    backgroundColor: Colors.tintColor,
  },
  sectionHeader: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.textWhite,
    color: Colors.tintColor,
    padding: 5,
  },
  sectionHeaderText: {
    fontSize: 36,
    fontWeight: '700',
    alignItems: 'center',
    backgroundColor: Colors.textWhite,
    color: Colors.tintColor,
    padding: 10,
  },
});
