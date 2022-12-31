import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Scenes from '_navigations/Scenes';
import Dashboard from '_scenes/Dashboard/Dashboard.component';

const AuthenticatedStackNavigator = createNativeStackNavigator();

function AuthenticatedStack() {
  return (
    <AuthenticatedStackNavigator.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      <AuthenticatedStackNavigator.Screen
        name={Scenes.dashboard}
        component={Dashboard}
      />
    </AuthenticatedStackNavigator.Navigator>
  );
}

export default AuthenticatedStack;
