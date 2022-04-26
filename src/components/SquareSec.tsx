import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface SquareProps {
	color?: string;
	widht?: number;
	height?: number;
}
const SquareSec = ({
	color = '#000000',
	widht = 10,
	height = 18,
}: SquareProps) => {
	return (
		<View>
			<Svg width={widht} height={height} viewBox="0 0 100 100">
				<Path
					fill={color}
					fillRule="evenodd"
					d="M10 10 H 90 V 90 H 10 L 10 10"
				/>
			</Svg>
		</View>
	);
};

export default SquareSec;
