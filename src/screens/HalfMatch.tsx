import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
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

const CIRCLE_RADIUS = 200;

type ContextType = {
	translateXHartRight: number;
	translateYHartRight: number;
	translateXHartLeft: number;
	translateYHartLeft: number;
	translateXRectAngle: number;
	translateYRectAngle: number;
};

export default function App() {
	const translateXHartRight = useSharedValue(100);
	const translateYHartRight = useSharedValue(0);
	const translateXHartLeft = useSharedValue(70);
	const translateYHartLeft = useSharedValue(0);
	const translateXRectAngle = useSharedValue(50);
	const translateYRectAngle = useSharedValue(0);

	/*HartRight
	 * 
	 * 
	 * 
	 * 
	HartRight */

	const panGestureEventSquare = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXHartRight = translateXHartRight.value;
			context.translateYHartRight = translateYHartRight.value;
		},
		onActive: (event, context) => {
			translateXHartRight.value =
				event.translationX + context.translateXHartRight;
			translateYHartRight.value =
				event.translationY + context.translateYHartRight;
		},
		onEnd: () => {
			console.log(
				'HartRight',
				translateXRectAngle,
				'y',
				translateYRectAngle,
			);
			const xSitLocation = -170;
			const ySitLocation = -175;

			if (
				translateYHartRight.value > ySitLocation - 40 &&
				translateYHartRight.value < ySitLocation + 40 &&
				translateXHartRight.value > xSitLocation - 40 &&
				translateXHartRight.value < xSitLocation + 40
			) {
				translateXHartRight.value = withSpring(0);
				translateYHartRight.value = withSpring(-165);
			} else {
				translateXHartRight.value = withSpring(100);
				translateYHartRight.value = withSpring(0);
			}
		},
	});

	const rStyleSquare = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXHartRight.value,
				},
				{
					translateY: translateYHartRight.value,
				},
			],
		};
	});

	/*HartHalf Left
	 * 
	 * 
	 * 
	 * 
	HeartHalf */

	const panGestureEventTriangle = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXHartLeft = translateXHartLeft.value;
			context.translateYHartLeft = translateYHartLeft.value;
		},
		onActive: (event, context) => {
			translateXHartLeft.value =
				event.translationX + context.translateXHartLeft;
			translateYHartLeft.value =
				event.translationY + context.translateYHartLeft;
		},
		onEnd: () => {
			console.log(
				'HartLeft',
				translateXHartLeft,
				'y',
				translateYHartLeft,
			);
			const xSitLocation = 50;
			const ySitLocation = -333;

			if (
				translateYHartLeft.value > ySitLocation - 40 &&
				translateYHartLeft.value < ySitLocation + 40 &&
				translateXHartLeft.value > xSitLocation - 40 &&
				translateXHartLeft.value < xSitLocation + 40
			) {
				translateXHartLeft.value = withSpring(50);
				translateYHartLeft.value = withSpring(-333);
			} else {
				translateXHartLeft.value = withSpring(70);
				translateYHartLeft.value = withSpring(0);
			}
		},
	});

	const rStyleTriangle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXHartLeft.value,
				},
				{
					translateY: translateYHartLeft.value,
				},
			],
		};
	});

	/*Heart RectAngle
	 * 
	 * 
	 * 
	 * 
	Heart */

	const panGestureEventHeart = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXRectAngle = translateXRectAngle.value;
			context.translateYRectAngle = translateYRectAngle.value;
		},
		onActive: (event, context) => {
			translateXRectAngle.value =
				event.translationX + context.translateXRectAngle;
			translateYRectAngle.value =
				event.translationY + context.translateYRectAngle;
		},
		onEnd: () => {
			console.log(
				'Rectangle',
				translateXRectAngle,
				'y',
				translateYRectAngle,
			);
			const xSitLocation = -160;
			const ySitLocation = -100;

			if (
				translateYRectAngle.value > ySitLocation - 40 &&
				translateYRectAngle.value < ySitLocation + 40 &&
				translateXRectAngle.value > xSitLocation - 40 &&
				translateXRectAngle.value < xSitLocation + 40
			) {
				translateXRectAngle.value = withSpring(-166);
				translateYRectAngle.value = withSpring(-102);
			} else {
				translateXRectAngle.value = withSpring(50);
				translateYRectAngle.value = withSpring(0);
			}
		},
	});

	const rStyleHeart = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXRectAngle.value,
				},
				{
					translateY: translateYRectAngle.value,
				},
			],
		};
	});

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<View style={{ height: 300 }}>
				<View
					style={{
						transform: [{ translateX: 130 }, { translateY: 30 }],
					}}>
					<Arrowicon
						height={250}
						width={150}
						color="rgba(0, 128, 0, 1)"
					/>
				</View>
				<View
					style={{
						transform: [{ translateX: 192 }, { translateY: -230 }],
					}}>
					<HeartRight
						height={250}
						width={150}
						color="rgba(0, 0, 256, 1)"
					/>
				</View>
			</View>
			<View style={[styles.container, { flexDirection: 'row' }]}>
				<PanGestureHandler onGestureEvent={panGestureEventSquare}>
					<Animated.View style={[rStyleSquare]}>
						<HeartRight
							height={250}
							width={150}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventTriangle}>
					<Animated.View style={[rStyleTriangle, { margin: 20 }]}>
						<HartLeft
							height={250}
							width={150}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventHeart}>
					<Animated.View style={rStyleHeart}>
						<RectAngle
							height={250}
							width={250}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
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
	headShape: {
		flexDirection: 'row',
		transform: [{ translateX: 0 }, { translateY: 50 }],
		height: 120,
		backgroundColor: 'rgba(128,128,0,0.3)',
		// padding: 5,
		marginLeft: 2,
	},
});

const Arrowicon = ({ color = '#000000', width = 10, height = 18 }) => {
	return (
		<View>
			<Svg width={width} height={height} viewBox="0 0 127 171">
				<Path
					// fill={color}
					// fillRule="evenodd"
					stroke="#000"
					d="M63.465 77v92.996c-16.922-.255-32.347-13.433-43.605-34.876C8.504 113.49 1.465 83.573 1.465 50.5c0-16.527 2.495-28.309 6.478-36.19C11.918 6.441 17.36 2.48 23.296 1.505 29.253.53 35.81 2.542 42.024 6.846c6.21 4.301 12.036 10.864 16.504 18.897a37.136 37.136 0 0 0 1.672 2.716l.269.4c.366.544.678 1.006.953 1.486.66 1.152 1.114 2.41 1.422 5.022.62 5.276.621 15.859.621 41.633Zm1 0c0-25.774.001-36.358.622-41.633.307-2.611.76-3.87 1.421-5.022.276-.48.587-.942.953-1.486l.27-.4a37.101 37.101 0 0 0 1.671-2.716C73.87 17.71 79.697 11.147 85.906 6.846 92.12 2.542 98.677.53 104.634 1.506c5.935.974 11.378 4.936 15.354 12.803 3.982 7.882 6.477 19.664 6.477 36.191 0 33.073-7.039 62.99-18.395 84.62-11.257 21.443-26.683 34.621-43.605 34.876V77Z"
				/>
			</Svg>
		</View>
	);
};

const HartLeft = ({ color = '#000000', width = 10, height = 18 }) => {
	return (
		<View>
			<Svg width={width} height={height} viewBox="0 0 127 171">
				<Path
					fill={color}
					// fillRule="evenodd"
					stroke="#000"
					d="M63.465 77v92.996c-16.922-.255-32.347-13.433-43.605-34.876C8.504 113.49 1.465 83.573 1.465 50.5c0-16.527 2.495-28.309 6.478-36.19C11.918 6.441 17.36 2.48 23.296 1.505 29.253.53 35.81 2.542 42.024 6.846c6.21 4.301 12.036 10.864 16.504 18.897a37.136 37.136 0 0 0 1.672 2.716l.269.4c.366.544.678 1.006.953 1.486.66 1.152 1.114 2.41 1.422 5.022.62 5.276.621 15.859.621 41.633Z"
				/>
			</Svg>
		</View>
	);
};

const RectAngle = ({ color = '#000000', width = 10, height = 18 }) => {
	return (
		<View>
			<Svg width={width} height={height} viewBox="0 0 100 100">
				<Path
					fill={color}
					fillRule="evenodd"
					d="M10 10 H 35 V 90 H 10 L 10 10"
				/>
			</Svg>
		</View>
	);
};

const HeartRight = ({ color = '#000000', width = 10, height = 18 }) => {
	return (
		<View>
			<Svg width={width} height={height} viewBox="0 0 127 171">
				<Path
					fill={color}
					// fillRule="evenodd"
					stroke="#000"
					d="M11.465 87v92.996c16.922-.255 32.347-13.433 43.605-34.876 11.356-21.63 18.395-51.547 18.395-84.62 0-16.527-2.495-28.309-6.477-36.19-3.976-7.868-9.419-11.83-15.354-12.804-5.957-.978-12.514 1.036-18.728 5.34-6.21 4.301-12.036 10.864-16.504 18.897a37.101 37.101 0 0 1-1.672 2.716l-.269.4c-.366.544-.677 1.006-.953 1.486-.66 1.152-1.114 2.41-1.421 5.022-.62 5.276-.622 15.859-.622 41.633Z"
				/>
			</Svg>
		</View>
	);
};
