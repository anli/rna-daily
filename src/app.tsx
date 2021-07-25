import {navigationRef, rootNavigate, RootNavigator} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import DevMenu from 'react-native-dev-menu';

/* istanbul ignore next */
if (__DEV__) {
  DevMenu.addItem('StoryBook', () => {
    rootNavigate('Storybook');
  });
  DevMenu.addItem('App', () => {
    rootNavigate('Home');
  });
}

export const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};
