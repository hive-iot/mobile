import React from "react";
import { Font } from "expo";
import { View, Text } from "react-native";

// Feeds
import Live from "./Data/Live";
import Sound from "./Data/Sound";
import Hive from "./Data/Hive";
import Repository from "./Data/Repository";

export default class Feed extends React.Component {
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

  onPressLiveFeed = () => console.log("Live");

  onPressSoundFeed = () => {
    this.props.navigate("Sound");
  };

  onPressHiveFeed = () => {
    this.props.navigate("Hive", {
      insideTemp: this.props.insideTemp,
      outsideTemp: this.props.outsideTemp,
      insideHumidity: this.props.insideHumidity,
      outsideHumidity: this.props.outsideHumidity
    });
  };

  onPressRepositoryFeed = () => {
    this.props.navigate("Repository");
  };

  render() {
    const { fontLoaded } = this.state;

    return (
      <View style={{ marginTop: 5, marginBottom: 20 }}>
        {fontLoaded && (
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              fontFamily: "pacifico-regular"
            }}
          >
            Feed
          </Text>
        )}

        {/* Feed Container */}
        <View style={{ flexDirection: "row" }}>
          {/* Live Feed */}
          {/* <Live onPress={this.onPressLiveFeed} /> */}

          {/* Sound Feed */}
          <Sound onPress={this.onPressSoundFeed} />

          {/* Hive Feed */}
          <Hive onPress={this.onPressHiveFeed} />

          {/* Repository Feed */}
          <Repository onPress={this.onPressRepositoryFeed} />
        </View>
      </View>
    );
  }
}
