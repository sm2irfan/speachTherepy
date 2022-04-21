import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoWithLoaderScreen from '../screens/LogoWithLoaderScreen';
import Home from '../screens/Home';
import SocialSkillsHome from '../screens/SocialSkillsHome';
import LearnEmotions from '../screens/LearnEmotions';
import SocialStories from '../screens/SocialStories';
import InteractiveCharacters from '../screens/InteractiveCharacters';
import SocialStoriesInstruction from '../screens/SocialStoriesInstruction';
import LearnEmotionsInstruction from '../screens/LearnEmotionsInstruction';
import InteractiveCharactersInstruction from '../screens/InteractiveCharactersInstruction';

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
				<Stack.Screen name="LearnEmotions" component={LearnEmotions} />
				<Stack.Screen name="SocialStories" component={SocialStories} />
				<Stack.Screen
					name="InteractiveCharacters"
					component={InteractiveCharacters}
				/>
				<Stack.Screen
					name="SocialStoriesInstruction"
					component={SocialStoriesInstruction}
				/>
				<Stack.Screen
					name="LearnEmotionsInstruction"
					component={LearnEmotionsInstruction}
				/>
				<Stack.Screen
					name="InteractiveCharactersInstruction"
					component={InteractiveCharactersInstruction}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default NavRouter;
