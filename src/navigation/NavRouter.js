import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoWithLoaderScreen from '../screens/LogoWithLoaderScreen';

const Stack = createNativeStackNavigator();

const NavRouter = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="LogoWithLoaderScreen"
					component={LogoWithLoaderScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default NavRouter;
