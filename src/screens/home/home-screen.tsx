import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen, Text, View} from '@ui';
import React from 'react';
import {Button} from 'react-native-paper';

const Component = () => {
  return (
    <Screen>
      <Text>App</Text>

      <View flexDirection="row">
        <Button mode="contained">Create Goal</Button>
      </View>
    </Screen>
  );
};

const options: StackNavigationOptions = {
  headerShown: false,
};

export const HomeScreen = {Component, options};
