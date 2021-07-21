import * as React from "react";
import { createAppContainer } from "react-navigation";

import { createBottomTabNavigator } from "react-navigation-tabs";
import Facebook from "./screens/Facebook";
import Instagram from "./screens/Instagram";

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Instagram: Instagram,
  Facebook: Facebook
});

const AppContainer = createAppContainer(TabNavigator);