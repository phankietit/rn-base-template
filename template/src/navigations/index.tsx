import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';


import { navigationRef } from './Navigator';
import { NavigatorParamList } from '@src/models/navigation';
import { ScreenName } from './model';
import Signin from '@src/containers/signin';
import RootScreen from '@src/containers';

const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={ScreenName.Signin} component={Signin} />
        <Stack.Screen name={ScreenName.Root} component={RootScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
