import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen} from '@team-anli/base.ui.screen';
import {Text} from '@team-anli/base.ui.text';
import {View} from '@team-anli/base.ui.view';
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
