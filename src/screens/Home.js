import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../components';

const Home = ({ navigation }) => {
	return (
		<View style={styles.mainContainer}>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('SocialSkillHome');
				}}>
				<Text type="label">Social Skills</Text>
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
	},
});

export default Home;
