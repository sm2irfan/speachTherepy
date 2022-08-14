import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface SquareProps {
	color?: string;
	width?: number;
	height?: number;
	boxWidth?: number;
}
const SquareSec = ({
	color = '#000000',
	width = 10,
	height = 18,
	boxWidth = 100,
}: SquareProps) => {
	return (
		<View>
			<Svg width={width} height={height} viewBox="0 0 100 100">
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
