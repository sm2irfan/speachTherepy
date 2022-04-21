import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { CircleButton, Text } from '../components';
import Instruction from '../assets/images/Instruction.png';
import AR from '../assets/images/AR.png';
import Info from '../assets/images/Info.png';

const data = [
	{
		name: 'Buddy',
	},
	{
		name: 'Minion',
	},
];

const EmotionType = ({ character, onPressInfo, onPressAR }) => {
	return (
		<View style={styles.container}>
			<View style={styles.section}>
				<Text type="body">{character.name}</Text>
			</View>
			<View style={styles.rightIconSection}>
				<CircleButton icon={Info} onPress={onPressInfo} />
				<CircleButton icon={AR} onPress={onPressAR} />
			</View>
		</View>
	);
};

const InteractiveCharacters = ({ navigation }) => {
	const onPressInstruction = () => {
		navigation.navigate('InteractiveCharactersInstruction');
	};

	return (
		<ScrollView
			contentContainerStyle={styles.mainContainer}
			showsVerticalScrollIndicator={false}>
			<View style={styles.headerContainer}>
				<Text type="title" style={styles.headText}>
					Interactive Characters
				</Text>
				<View style={styles.infoIconContainer}>
					<CircleButton
						icon={Instruction}
						onPress={onPressInstruction}
					/>
				</View>
			</View>
			{data.map((item, index) => (
				<EmotionType key={index} character={item} />
			))}
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
		paddingRight: 5,
		paddingBottom: 10,
		paddingLeft: 15,
		paddingTop: 10,
		borderRadius: 10,
		backgroundColor: 'white',
		elevation: 0.7,
		width: '100%',
		marginTop: 15,
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	section: {
		flex: 1,
		flexDirection: 'row',
		paddingBottom: 5,
		alignItems: 'center',
	},
	rightIconSection: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	infoIconContainer: {
		paddingTop: 10,
	},
});

export default InteractiveCharacters;
