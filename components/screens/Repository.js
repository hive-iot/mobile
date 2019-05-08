import React from "react";
import { Font } from "expo";
import { View, Text, Image } from "react-native";

// Components
import Header from "../shared/Header";
import Hr from "../shared/Hr";

// Styles
import styles from "../../styles";

// Services
import { fetchRepo } from "../../services/repo";

export default class Repository extends React.Component {
  state = { fontLoaded: false, repo: [] };

  async componentDidMount() {
    await Font.loadAsync({
      "pacifico-regular": require("../../assets/fonts/Pacifico-Regular.ttf")
    });

    await Font.loadAsync({
      "poppins-bold": require("../../assets/fonts/Poppins-Bold.ttf")
    });

    const repo = await fetchRepo();

    console.log(repo);

    this.setState({ fontLoaded: true, repo });
  }

  render() {
    const { fontLoaded, repo } = this.state;
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
              Hive Data
            </Text>
          </View>
        )}

        <Hr />

        {repo.length > 0 ? (
          <View>
            <Text>stuff</Text>
          </View>
        ) : (
          <Text style={styles.offlineStream}>Repo data not available.</Text>
        )}
      </View>
    );
  }
}
