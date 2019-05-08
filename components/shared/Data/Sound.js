import React from "react";
import { Text, TouchableOpacity } from "react-native";

// Icons
import { CombYellow, CombPurple } from "../Icons";

// Styles
import styles from "../../../styles";

export default function Sound(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.feed}>
      <Text style={styles.feedHeader}>Sound</Text>
      <CombYellow />
    </TouchableOpacity>
  );
}
