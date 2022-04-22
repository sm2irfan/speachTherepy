import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from '../components';

const SocialStoriesInstruction = ({ navigation }) => {
	return (
		<ScrollView
			contentContainerStyle={styles.mainContainer}
			showsVerticalScrollIndicator={false}>
			<View style={styles.headerContainer}>
				<Text type="title" style={styles.headText}>
					Social Stories Instructions
				</Text>
			</View>
			<View style={styles.container} />
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	mainContainer: {
		flexGrow: 1,
		padding: 15,
	},
	headText: {
		paddingTop: 20,
		paddingBottom: 25,
		paddingLeft: 5,
	},
	container: {
		flex: 1,
		paddingRight: 5,
		paddingBottom: 5,
		paddingLeft: 15,
		paddingTop: 10,
		borderRadius: 10,
		backgroundColor: 'white',
		elevation: 0.7,
		width: '100%',
		marginTop: 10,
	},
	section: {
		flex: 1,
		flexDirection: 'row',
		paddingBottom: 5,
	},

	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export default SocialStoriesInstruction;
