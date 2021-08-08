import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Screen} from '@team-anli/base.ui.screen';
import {Text} from '@team-anli/base.ui.text';
import {View} from '@team-anli/base.ui.view';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, TextInput} from 'react-native-paper';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
});

type FormData = {
  name: string;
  description: string;
};

const Component = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const {canGoBack, goBack} = useNavigation();

  const onSubmit = <T,>(_: T) => {
    canGoBack() && goBack();
  };

  return (
    <Screen>
      <View flex={1}>
        <Text margin="m">Create Goal</Text>

        <View margin="m">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                accessibilityLabel="goal name input"
                label="Name"
                mode="outlined"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
            defaultValue=""
          />
          {errors.name?.type === 'required' && <Text>Name is required.</Text>}
        </View>

        <View margin="m">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                label="Description"
                accessibilityLabel="goal description input"
                mode="outlined"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="description"
            defaultValue=""
          />
          {errors.description?.type === 'required' && (
            <Text>Description is required.</Text>
          )}
        </View>
      </View>

      <View margin="m">
        <Button mode="contained" onPress={handleSubmit(onSubmit)}>
          Save
        </Button>
      </View>
    </Screen>
  );
};

const options: StackNavigationOptions = {};

export const GoalCreateScreen = {Component, options};
