import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Clipboard
} from "react-native";
import Notification from "../components/Notification";
import { styles } from "../constants/Stylesheet";
import { save, load } from "../utils";
import { ascii } from "../data";
import { SectionGrid } from "react-native-super-grid";

export default class HomeScreen extends React.Component {
  state = { modal: false, el: null };

  setClipboard = el => {
    const { ascii } = el;
    Clipboard.setString(ascii);
    save(el);
  };

  toggleModal = el => this.setState({ modal: true, el });

  renderBtn = el => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.toggleModal(el);
          this.setClipboard(el);
        }}
        style={styles.itemContainer}
      >
        <Text style={styles.textStyle}>{el.ascii}</Text>
      </TouchableOpacity>
    );
  };

  renderNavBtn = () => {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <TouchableOpacity
        style={{ justifySelf: "flex-end", marginLeft: "auto" }}
        onPress={() => navigate("Modal")}
      >
        <Text>Stats</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <SectionGrid
          sections={[
            {
              title: `Aski`,
              data: ascii
            }
          ]}
          style={styles.gridView}
          itemDimension={100}
          items={ascii}
          renderItem={({ item }) => this.renderBtn(item)}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
              {/* {this.renderNavBtn()} */}
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
