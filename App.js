import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppContainer } from "./src/navigation/AppNavigator";

export default class App extends React.Component {
  componentDidMount(){
    console.disableYellowBox = true;
  }
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
