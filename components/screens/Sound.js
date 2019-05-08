import React from "react";
import { Font, Audio } from "expo";
import { View, Image, Text, TouchableOpacity } from "react-native";

// Components
import Header from "../shared/Header";
import Hr from "../shared/Hr";

// Styles
import styles from "../../styles";

export default class Sound extends React.Component {
  state = { fontLoaded: false };
  player = new Audio.Sound();

  async componentDidMount() {
    await this.player.loadAsync(require("../../assets/sounds/sound.mp3"));
    // await this.player.loadAsync({ uri: "http://ea3437ff.ngrok.io/audio" });

    await Font.loadAsync({
      "pacifico-regular": require("../../assets/fonts/Pacifico-Regular.ttf")
    });

    await Font.loadAsync({
      "poppins-bold": require("../../assets/fonts/Poppins-Bold.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  play = async () => {
    try {
      await this.player.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  stop = async () => {
    try {
      await this.player.stopAsync();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { fontLoaded } = this.state;
    return (
      <View style={styles.container}>
        <Header logoSize={50} />

        {fontLoaded && (
          <View style={styles.hiveHeaderContainer}>
            <Image
              source={require("../../assets/honeycomb_black.png")}
              style={styles.hiveHeaderContainerImage}
            />
            <Text style={{ fontFamily: "poppins-bold", fontSize: 30 }}>
              Sound Feed
            </Text>
          </View>
        )}

        <Hr />

        <View style={styles.playContainer}>
          <TouchableOpacity onPress={() => this.play()}>
            <Image
              source={require("../../assets/play_green.png")}
              style={styles.playImage}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginVertical: 10,
                justifyContent: "center",
                marginLeft: 15
              }}
            >
              Play
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.stop()}>
            <Image
              source={require("../../assets/play_pink.png")}
              style={styles.playImage}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginVertical: 10,
                alignItems: "center",
                marginLeft: 15
              }}
            >
              Stop
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
