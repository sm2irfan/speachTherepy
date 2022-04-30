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

import TriangleSec from '../components/TriangleSec';
import Heart from '../components/Heart';
import SquareSce from '../components/SquareSec';

const CIRCLE_RADIUS = 200;

type ContextType = {
	translateXSquare: number;
	translateYSquare: number;
	translateXTriangle: number;
	translateYTriangle: number;
	translateXHeart: number;
	translateYHeart: number;
};

export default function App() {
	const translateXSquare = useSharedValue(0);
	const translateYSquare = useSharedValue(100);
	const translateXTriangle = useSharedValue(0);
	const translateYTriangle = useSharedValue(0);
	const translateXHeart = useSharedValue(0);
	const translateYHeart = useSharedValue(0);

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
			console.log('x', translateXHeart, 'y', translateYHeart);
			const xSitLocation = -170;
			const ySitLocation = -175;

			if (
				translateYSquare.value > ySitLocation - 40 &&
				translateYSquare.value < ySitLocation + 40 &&
				translateXSquare.value > xSitLocation - 40 &&
				translateXSquare.value < xSitLocation + 40
			) {
				translateXSquare.value = withSpring(0);
				translateYSquare.value = withSpring(-165);
			} else {
				translateXSquare.value = withSpring(0);
				translateYSquare.value = withSpring(100);
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
			const xSitLocation = -170;
			const ySitLocation = -175;

			if (
				translateYTriangle.value > ySitLocation - 40 &&
				translateYTriangle.value < ySitLocation + 40 &&
				translateXTriangle.value > xSitLocation - 40 &&
				translateXTriangle.value < xSitLocation + 40
			) {
				translateXTriangle.value = withSpring(-170);
				translateYTriangle.value = withSpring(-176);
			} else {
				translateXTriangle.value = withSpring(0);
				translateYTriangle.value = withSpring(0);
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

	/*Heart
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
			context.translateXHeart = translateXHeart.value;
			context.translateYHeart = translateYHeart.value;
		},
		onActive: (event, context) => {
			translateXHeart.value =
				event.translationX + context.translateXHeart;
			translateYHeart.value =
				event.translationY + context.translateYHeart;
		},
		onEnd: () => {
			console.log('x', translateXHeart, 'y', translateYHeart);
			const xSitLocation = -160;
			const ySitLocation = -100;

			if (
				translateYHeart.value > ySitLocation - 40 &&
				translateYHeart.value < ySitLocation + 40 &&
				translateXHeart.value > xSitLocation - 40 &&
				translateXHeart.value < xSitLocation + 40
			) {
				translateXHeart.value = withSpring(-166);
				translateYHeart.value = withSpring(-102);
			} else {
				translateXHeart.value = withSpring(0);
				translateYHeart.value = withSpring(0);
			}
		},
	});

	const rStyleHeart = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXHeart.value,
				},
				{
					translateY: translateYHeart.value,
				},
			],
		};
	});

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<View style={[styles.headShape]}>
				<View
					style={{
						transform: [{ translateX: 20 }, { translateY: -10 }],
					}}>
					<TriangleSec
						height={90}
						widht={70}
						color="rgba(255, 255, 0, 0.5)"
					/>
				</View>
				<View
					style={{
						transform: [{ translateX: 80 }, { translateY: 0 }],
					}}>
					<Heart
						height={65}
						widht={65}
						color="rgba(0, 128, 0, 0.5)"
					/>
				</View>
				<View
					style={{
						transform: [{ translateX: 150 }, { translateY: 0 }],
					}}>
					<SquareSce
						height={70}
						widht={100}
						color="rgba(0, 0, 256, 0.5)"
					/>
				</View>
			</View>
			<View style={[styles.container, { flexDirection: 'row' }]}>
				<PanGestureHandler onGestureEvent={panGestureEventSquare}>
					<Animated.View style={[rStyleSquare]}>
						<SquareSce
							height={70}
							widht={100}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventTriangle}>
					<Animated.View style={[rStyleTriangle, { margin: 20 }]}>
						<TriangleSec
							height={90}
							widht={70}
							color="rgba(255, 255, 0, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventHeart}>
					<Animated.View style={rStyleHeart}>
						<Heart
							height={60}
							widht={60}
							color="rgba(0, 128, 0, 1)"
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
