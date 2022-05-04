import React from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	Image,
	TouchableOpacity,
} from 'react-native';
import { Text } from '../components';
import Arrow from '../assets/images/Arrow.png';

//SocialSkillType

const CognitiveSkillType = ({ name, onpress }) => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={onpress}
			activeOpacity={0.7}>
			<View style={styles.section}>
				<Text type="body">{name}</Text>
			</View>
			<View style={styles.section}>
				<View style={styles.rightIconSection}>
					<Image source={Arrow} style={styles.icon} />
				</View>
			</View>
		</TouchableOpacity>
	);
};

const CognitiveSkillsHome = ({ navigation }) => {
	return (
		<ScrollView
			contentContainerStyle={styles.mainContainer}
			showsVerticalScrollIndicator={false}>
			<Text type="title" style={styles.headText}>
				Cognitive Skills
			</Text>
			<View style={styles.list}>
				<CognitiveSkillType
					name={'RountTable'}
					onpress={() => {
						navigation.navigate('RountTable');
					}}
				/>
				<CognitiveSkillType
					name={'RountTable2'}
					onpress={() => {
						navigation.navigate('RountTable2');
					}}
				/>
				<CognitiveSkillType
					name={'HalfMatch'}
					onpress={() => {
						navigation.navigate('HalfMatch');
					}}
				/>
			</View>
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
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingRight: 5,
		paddingBottom: 5,
		paddingLeft: 15,
		paddingTop: 10,
		borderRadius: 10,
		backgroundColor: 'white',
		elevation: 0.7,
		minHeight: 120,
		width: '100%',
		marginTop: 15,
	},
	list: {
		justifyContent: 'space-between',
	},
	section: {
		flex: 1,
		flexDirection: 'row',
		paddingBottom: 5,
	},
	rightIconSection: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		justifyContent: 'flex-end',
	},
	icon: {
		width: 50,
		height: 50,
	},
});

export default CognitiveSkillsHome;
