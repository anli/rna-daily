import {StackNavigationOptions} from '@react-navigation/stack';
import React from 'react';
import {StorybookUIRoot} from './storybook-ui-root';

const Component = () => {
  return <StorybookUIRoot />;
};

const options: StackNavigationOptions = {
  headerShown: false,
};

export const StorybookScreen = {Component, options};
