import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

const CircleButton = ({ icon, onPress }) => {
	return (
		<TouchableOpacity
			style={styles.circleButton}
			onPress={onPress}
			activeOpacity={0.7}>
			<Image style={styles.icon} source={icon} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	circleButton: {
		width: 50,
		height: 50,
		padding: 10,
		marginTop: 5,
		borderRadius: 100 / 2,
		marginHorizontal: 5,
		backgroundColor: 'rgba(52, 52, 52, 0.5)',
	},
	icon: {
		height: '100%',
		width: 'auto',
	},
});

export { CircleButton };
