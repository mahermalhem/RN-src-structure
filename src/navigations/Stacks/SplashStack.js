import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Scenes from '_navigations/Scenes';
import Splash from '_scenes/Splash/Splash.component';
import Landing from '_scenes/Landing/Landing.component';

const SplashStackNavigator = createNativeStackNavigator();

function SplashStack() {
  return (
    <SplashStackNavigator.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      <SplashStackNavigator.Screen name={Scenes.splash} component={Splash} />
      <SplashStackNavigator.Screen name={Scenes.landing} component={Landing} />
    </SplashStackNavigator.Navigator>
  );
}

export default SplashStack;
