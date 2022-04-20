import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoWithLoaderScreen from '../screens/LogoWithLoaderScreen';
import Home from '../screens/Home';
import SocialSkillsHome from '../screens/SocialSkillsHome';

const Stack = createNativeStackNavigator();

const NavRouter = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="SocialSkillHome"
					component={SocialSkillsHome}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default NavRouter;
