import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


class ModalScreen extends React.Component {
  renderNavBtn = () => {
    const {
      navigation: { pop },
    } = this.props;
    return (
      <TouchableOpacity
        style={{ justifySelf: 'flex-start', marginLeft: 'auto' }}
        onPress={() => pop()}
      >
        <Text style={styles.sectionHeaderText}>
          <FontAwesome name="remove" size={24} color="#9980FA" />
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.sectionHeader}>{this.renderNavBtn()}</View>
        <View style={styles.gridView}>
          <Text style={[
            styles.sectionHeaderText,
            {textAlign: 'center'}
            ]}>Help</Text>

            <View style={{justifyContent: 'center'}}>
              <Text style={styles.sectionSubheaderText}>Step 1</Text>
              <Text style={styles.sectionText}>Find the asset of your dream.</Text>

              <Text style={styles.sectionSubheaderText}>Step 2</Text>
              <Text style={styles.sectionText}>Tap the asset to copy it.</Text>

              <Text style={styles.sectionSubheaderText}>Step 3</Text>
              <Text style={styles.sectionText}>Paste anywhere!</Text>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gridView: {
    flex: 1,
    width: '80%',
    alignSelf: 'center'
  },
  itemContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#9980FA',
    borderRadius: 5,
    padding: 5,
    height: 55,
  },
  textStyle: {
    fontSize: 12,
    fontFamily: 'Hiragino Mincho ProN',
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    color: '#9980FA',
    width: '100%',
    padding: 10,
  },
  sectionSubheaderText: {
    fontSize: 24,
    fontWeight: '700',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#9980FA',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  sectionText: {
    fontSize: 16,
    fontWeight: '400',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  sectionHeaderText: {
    fontSize: 36,
    fontWeight: '700',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#9980FA',
    padding: 10,
  },
});
