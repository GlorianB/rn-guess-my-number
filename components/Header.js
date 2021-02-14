import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../constants/colors";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {},
  headerAndroid: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    borderBottomColor: Platform.OS === "android" ? "transparent" : "#ccc",
    borderBottomWidth: Platform.OS === "android" ? 0 : 1,
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});

export default Header;
