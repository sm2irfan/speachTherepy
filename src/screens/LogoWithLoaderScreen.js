import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LogoWithLoaderScreen = () => {
	return (
		<View style={styles.mainContainer}>
			<Text>Welcome to SpeechMaser</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		zIndex: 1000,
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
	},
});

export default LogoWithLoaderScreen;
