import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@team-anli/base.themes';
import {render as NativeRender} from '@testing-library/react-native';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

const Stack = createStackNavigator();

export const render = ({component}: {component: any}) =>
  NativeRender(
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Test" component={component} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>,
  );
