import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';

import {
	GestureHandlerRootView,
	PanGestureHandler,
	PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

import { Square } from '../components';
import { Triangle } from '../components';
import { Circle } from '../components';

const CIRCLE_RADIUS = 200;

type ContextType = {
	translateXSquare: number;
	translateYSquare: number;
	translateXTriangle: number;
	translateYTriangle: number;
	translateXCircle: number;
	translateYCircle: number;
};

export default function App() {
	const translateXSquare = useSharedValue(-153);
	const translateYSquare = useSharedValue(150);
	const translateXTriangle = useSharedValue(-70);
	const translateYTriangle = useSharedValue(100);
	const translateXCircle = useSharedValue(-10);
	const translateYCircle = useSharedValue(40);

	/*Square
	 * 
	 * 
	 * 
	 * 
	Square */

	const panGestureEventSquare = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXSquare = translateXSquare.value;
			context.translateYSquare = translateYSquare.value;
		},
		onActive: (event, context) => {
			translateXSquare.value =
				event.translationX + context.translateXSquare;
			translateYSquare.value =
				event.translationY + context.translateYSquare;
		},
		onEnd: () => {
			const distance = Math.sqrt(
				translateXSquare.value ** 2 + translateYSquare.value ** 2,
			);

			if (
				translateYSquare.value > -240 &&
				translateYSquare.value < -140 &&
				translateXSquare.value > -35 &&
				translateXSquare.value < 35
			) {
				translateXSquare.value = withSpring(0);
				translateYSquare.value = withSpring(-165);
			} else {
				translateXSquare.value = withSpring(-153);
				translateYSquare.value = withSpring(150);
			}
		},
	});

	const rStyleSquare = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXSquare.value,
				},
				{
					translateY: translateYSquare.value,
				},
			],
		};
	});

	/*Triangel
	 * 
	 * 
	 * 
	 * 
	Triangel */

	const panGestureEventTriangle = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXTriangle = translateXTriangle.value;
			context.translateYTriangle = translateYTriangle.value;
		},
		onActive: (event, context) => {
			translateXTriangle.value =
				event.translationX + context.translateXTriangle;
			translateYTriangle.value =
				event.translationY + context.translateYTriangle;
		},
		onEnd: () => {
			console.log('x', translateXTriangle, 'y', translateYTriangle);
			if (
				translateYTriangle.value > -240 &&
				translateYTriangle.value < -160 &&
				translateXTriangle.value > -150 &&
				translateXTriangle.value < -90
			) {
				translateXTriangle.value = withSpring(-130);
				translateYTriangle.value = withSpring(-176);
			} else {
				translateXTriangle.value = withSpring(-75);
				translateYTriangle.value = withSpring(100);
			}
		},
	});

	const rStyleTriangle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXTriangle.value,
				},
				{
					translateY: translateYTriangle.value,
				},
			],
		};
	});

	/*Circle
	 * 
	 * 
	 * 
	 * 
	Circle */

	const panGestureEventCircle = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXCircle = translateXCircle.value;
			context.translateYCircle = translateYCircle.value;
		},
		onActive: (event, context) => {
			translateXCircle.value =
				event.translationX + context.translateXCircle;
			translateYCircle.value =
				event.translationY + context.translateYCircle;
		},
		onEnd: () => {
			console.log('x', translateXCircle, 'y', translateYCircle);
			if (
				translateYCircle.value > -240 &&
				translateYCircle.value < -160 &&
				translateXCircle.value > -150 &&
				translateXCircle.value < -90
			) {
				translateXCircle.value = withSpring(-130);
				translateYCircle.value = withSpring(-176);
			} else {
				translateXCircle.value = withSpring(-5);
				translateYCircle.value = withSpring(45);
			}
		},
	});

	const rStyleCircle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXCircle.value,
				},
				{
					translateY: translateYCircle.value,
				},
			],
		};
	});

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Square size="medium" />
				<Circle size="dotCenter" />
				<Circle size="dotLeft" />
				<Circle size="dotRight" />
				<Triangle size="medium" />
				<Circle size="dotCenter" />
				<Circle size="dotLeft" />
				<Circle size="dotRight" />
				<Circle size="medium" />

				<PanGestureHandler onGestureEvent={panGestureEventSquare}>
					<Animated.View style={[styles.square, rStyleSquare]} />
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventTriangle}>
					<Animated.View style={[styles.triangle, rStyleTriangle]} />
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventCircle}>
					<Animated.View style={[styles.circle, rStyleCircle]} />
				</PanGestureHandler>
			</View>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	square: {
		width: 50,
		height: 50,
		backgroundColor: 'rgba(0, 0, 256, 1)',
		borderRadius: 5,
	},

	triangle: {
		width: 0,
		height: 0,
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderLeftWidth: 25,
		borderRightWidth: 25,
		borderBottomWidth: 50,
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		borderBottomColor: 'rgba(255, 0, 0, 0.8)',
	},
	circle: {
		width: 55,
		height: 55,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
		borderWidth: 5,
		borderColor: 'rgba(0, 0, 40, 0.5)',
		backgroundColor: 'rgba(0, 0, 40, 0.5)',
	},
});
