import {StackNavigationOptions} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const Component = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>

      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Button mode="contained">Create Goal</Button>
      </View>
    </SafeAreaView>
  );
};

const options: StackNavigationOptions = {
  headerShown: false,
};

export const HomeScreen = {Component, options};
