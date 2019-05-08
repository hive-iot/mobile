import React from "react";
import { Image } from "react-native";

export default function Logo(props) {
  return (
    <Image
      source={require("../../assets/bee_logo.png")}
      style={{ height: props.logoSize, width: props.logoSize }}
    />
  );
}
