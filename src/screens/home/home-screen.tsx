import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen} from '@ui';
import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const Component = () => {
  return (
    <Screen>
      <Text>App</Text>

      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Button mode="contained">Create Goal</Button>
      </View>
    </Screen>
  );
};

const options: StackNavigationOptions = {
  headerShown: false,
};

export const HomeScreen = {Component, options};
