import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { VictoryBar } from "victory-native";
import { load } from "app/utils";

class ModalScreen extends React.Component {
  state = { data: [], graphData: [1] };
  async componentDidMount() {
    const data = await load();
    const graphData = Object.keys(data).map(o => {
      const askiObj = data[o];
      return {x: askiObj.ascii, y: askiObj.count};
    });
    this.setState({ data, graphData });
  }

  renderBtn = el => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.textStyle}>{el.ascii}</Text>
      </TouchableOpacity>
    );
  };

  renderNavBtn = () => {
    const {
      navigation: { pop }
    } = this.props;
    return (
      <TouchableOpacity
        style={{ justifySelf: "flex-start", marginLeft: "auto" }}
        onPress={() => pop()}
      >
        <Text>x</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { graphData } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.sectionHeader}>{this.renderNavBtn()}</View>
        <View style={styles.gridView}>
          <VictoryBar data={graphData} />
        </View>
      </SafeAreaView>
    );
  }
}

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  gridView: {
    flex: 1
  },
  itemContainer: {
    justifyContent: "center",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#9980FA",
    borderRadius: 5,
    padding: 5,
    height: 55
  },
  textStyle: {
    fontSize: 12,
    fontFamily: "Hiragino Mincho ProN",
    textAlign: "center"
  },
  sectionHeader: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    color: "#9980FA",
    width: "100%",
    padding: 10
  },
  sectionHeaderText: {
    fontSize: 36,
    fontWeight: "700",
    alignItems: "center",
    backgroundColor: "#fff",
    color: "#9980FA",
    padding: 10
  }
});
