import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import StackNames from '_navigations/StackNames';
import {ThemeProvider} from '_styles/theming';
import SplashStack from './Stacks/SplashStack';
import AuthenticatedStack from './Stacks/AuthenticatedStack';

const MainStackNavigator = createNativeStackNavigator();

function AppContainer() {
  const themeState = useSelector(state => state.themeState);

  return (
    <ThemeProvider
      theme={themeState && themeState.data && themeState.data.theme}>
      <MainStackNavigator.Navigator
        initialRouteName={StackNames.splashStack}
        screenOptions={{gestureEnabled: false, headerShown: false}}>
        <MainStackNavigator.Screen
          name={StackNames.splashStack}
          component={SplashStack}
        />
        <MainStackNavigator.Screen
          name={StackNames.AuthenticatedStack}
          component={AuthenticatedStack}
        />
      </MainStackNavigator.Navigator>
    </ThemeProvider>
  );
}

export default AppContainer;
