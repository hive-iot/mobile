import React from "react";
import { View, Image } from "react-native";

// Components
import Logo from "./Logo";

// Styles
import styles from "../../styles";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/bee_trail.png")}
        style={{ marginTop: 30 }}
      />
      <Logo logoSize={props.logoSize || 30} />
    </View>
  );
}
