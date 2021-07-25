import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@screens';
import {StorybookScreen} from '@storybook-ui';
import React from 'react';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen.Component}
        options={HomeScreen.options}
      />
      <Stack.Screen
        name="Storybook"
        component={StorybookScreen.Component}
        options={StorybookScreen.options}
      />
    </Stack.Navigator>
  );
};
