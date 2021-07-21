import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Facebook extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{color: '#00008b'}}>Facebook</Text>
      </View>
    );
  }
}
