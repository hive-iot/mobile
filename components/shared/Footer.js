import React from "react";
import { Font } from "expo";
import { Text, View } from "react-native";

// Styles
import styles from "../../styles";

export default class Footer extends React.Component {
  state = { fontLoaded: false };

  async componentDidMount() {
    await Font.loadAsync({
      "pacifico-regular": require("../../assets/fonts/Pacifico-Regular.ttf")
    });

    await Font.loadAsync({
      "poppins-regular": require("../../assets/fonts/Poppins-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    return fontLoaded ? (
      <View style={styles.footer}>
        <Text
          style={{
            fontFamily: "pacifico-regular",
            fontSize: 25
          }}
        >
          Honey
        </Text>
      </View>
    ) : null;
  }
}
