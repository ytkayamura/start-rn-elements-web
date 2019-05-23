import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

const Hello = () => (
  <div>
    <Text>Hello React Native Elements!</Text>
  </div>
);

const App = () => (
  <div>
    <View style={styles.container}>
      <Hello />
      <Button title="Solid Button" />
    </View>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));

