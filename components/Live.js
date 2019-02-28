import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";

class Live extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icons name={"lens"} size={10} color={"#ffffff"} style={styles.icon} />
        <Text style={styles.title}>LIVE</Text>
      </View>
    );
  }
}

export { Live };

const styles = StyleSheet.create({
  container: { flexDirection: "row", paddingTop: 10, marginLeft: 12 },
  icon: { marginTop: 3 },
  title: { color: "#fff", fontSize: 13, fontWeight: "700", marginLeft: 2 }
});
