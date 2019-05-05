import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Clipboard,
  TouchableOpacity
} from 'react-native';
import { Notification, AsciiButton } from 'app/src/components';
import styles from 'app/src/constants/Stylesheet';
import { save } from 'app/src/utils';
import { ascii } from 'app/src/assets/data';
import { SectionGrid } from 'react-native-super-grid';
import { FontAwesome } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
  state = { modal: false, el: null };

  setClipboard = (el) => {
    const { ascii } = el;
    Clipboard.setString(ascii);
    save(el);
  };

  toggleModal = (el) => {
    this.setState({ modal: true, el });

    setTimeout(() => this.setState({ modal: false, el: undefined }), 3500);
  }

  renderBtn = el => (
    <AsciiButton
      el={el}
      onPress={() => {
        this.toggleModal(el);
        this.setClipboard(el);
      }
        }
    />
  );

  renderNavBtn = () => {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <TouchableOpacity
        style={{ justifySelf: "flex-start" }}
        onPress={() => navigate("Modal")}
      >
        <Text style={styles.sectionHeaderText}>
          <FontAwesome name="question" size={32} color="#9980FA" />
        </Text>
      </TouchableOpacity>
    );
  };

  renderExtraBtn = () => {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <TouchableOpacity
        style={{ justifySelf: "flex-start" }}
        // onPress={() => navigate("Modal")}
      >
        <Text style={styles.sectionHeaderText}>
          {/* <FontAwesome name="question" size={32} color="#9980FA" /> */}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <SectionGrid
          sections={[
            {
              title: 'Aski',
              data: ascii,
            },
          ]}
          style={styles.gridView}
          itemDimension={100}
          items={ascii}
          renderItem={({ item }) => this.renderBtn(item)}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              {/* {this.renderNavBtn()} */}
              {this.renderExtraBtn()}
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
              {/* {this.renderExtraBtn()} */}
              {this.renderNavBtn()}
            </View>
          )}
        />
        <Notification
          {...this.state}
          closeModal={() => {
            this.setState({ modal: false, el: null });
          }}
        />
      </SafeAreaView>
    );
  }
}
