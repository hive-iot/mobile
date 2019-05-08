import React from "react";
import { View, Text, Image } from "react-native";

// Styles
import styles from "../../styles";

export default function Alert(props) {
  return (
    <View style={styles.alert}>
      <Image
        source={require("../../assets/honeycomb_white.png")}
        style={styles.alertImage}
      />
      <Text style={styles.alertText}>
        {props.message || "Check on your hive!"}
      </Text>
    </View>
  );
}
