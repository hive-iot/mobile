import React from "react";
import { Image } from "react-native";

export function CombYellow(props) {
  const height = props.size || 70;
  const width = props.size || 70;

  return (
    <Image
      source={require("../../assets/comb_yellow.png")}
      style={{ height, width }}
    />
  );
}

export function CombPurple(props) {
  const height = props.size || 70;
  const width = props.size || 70;

  return (
    <Image
      source={require("../../assets/comb_purple.png")}
      style={{ height, width }}
    />
  );
}
