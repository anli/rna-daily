import {useNavigation} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen} from '@team-anli/base.ui.screen';
import {Text} from '@team-anli/base.ui.text';
import {View} from '@team-anli/base.ui.view';
import React from 'react';
import {Button} from 'react-native-paper';

const Component = () => {
  const {navigate} = useNavigation();

  const onCreateGoal = () => navigate('GoalCreate');

  return (
    <Screen>
      <Text>App</Text>

      <View flexDirection="row">
        <Button mode="contained" onPress={onCreateGoal}>
          Create Goal
        </Button>
      </View>
    </Screen>
  );
};

const options: StackNavigationOptions = {};

export const HomeScreen = {Component, options};
