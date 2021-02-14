import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import ButtonCustom from "../components/ButtonCustom";

import colors from "../constants/colors";
import defaultStyle from "../constants/defaultStyle";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={defaultStyle.title}>The Game is Over!</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/success.png")}
            style={styles.image}
          />
          {/* <Image source={{uri:https://i.pinimg.com/564x/ca/93/68/ca9368ef147aff0510e7d666a6d526a3.jpg}} style={styles.image} /> */}
        </View>
        <View style={styles.resultContainer}>
          <Text style={{ ...defaultStyle.bodyText, ...styles.resultText }}>
            You needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds
            and the number was{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </Text>
        </View>
        <ButtonCustom onPress={props.onRestart}>NEW GAME</ButtonCustom>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  resultContainer: {
    marginVertical: Dimensions.get("window").height / 40,
  },
  resultText: {
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
    textAlign: "center",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
