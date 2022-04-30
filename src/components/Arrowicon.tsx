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
					d="m67.5 0 15.828 66.334h51.221l-41.438 40.997 15.828 66.335L67.5 132.669l-41.439 40.997 15.828-66.335L.451 66.334h51.22L67.5 0Z"
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
