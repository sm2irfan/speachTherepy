import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ArrowProps {
	color?: string;
	widht?: number;
	height?: number;
}
const Arrowicon = ({
	color = '#000000',
	widht = 10,
	height = 18,
}: ArrowProps) => {
	return (
		<View>
			<Svg width={widht} height={height} viewBox="0 0 256 512">
				<Path
					fill={color}
					fillRule="evenodd"
					d="M150 0 L75 200 L225 200 Z"
				/>
			</Svg>
		</View>
	);
};

const styles = StyleSheet.create({
	posittion: {
		transform: [{ translateX: 0 }, { translateY: -200 }],
	},
});

export default Arrowicon;
