import { createStackNavigator, createAppContainer } from "react-navigation";

import Hive from "./components/screens/Hive";
import Home from "./components/screens/Home";
import Sound from "./components/screens/Sound";
import Error from "./components/screens/Error";
import Splash from "./components/screens/Splash";
import Repository from "./components/screens/Repository";

const Navigator = createStackNavigator(
  {
    Splash: { screen: Splash },
    Home: { screen: Home },
    Hive: { screen: Hive },
    Sound: { screen: Sound },
    Repository: { screen: Repository },
    Error: { screen: Error }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: { swipeEnabled: true, gesturesEnabled: true }
  }
);

const App = createAppContainer(Navigator);

export default App;
