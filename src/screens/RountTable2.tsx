import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path, Polygon } from 'react-native-svg';
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

	//second

	translateXSquare2: number;
	translateYSquare2: number;
	translateXTriangle2: number;
	translateYTriangle2: number;
	translateXHeart2: number;
	translateYHeart2: number;
};

export default function App() {
	const translateXSquare = useSharedValue(-4);
	const translateYSquare = useSharedValue(425);
	const translateXTriangle = useSharedValue(78);
	const translateYTriangle = useSharedValue(381);
	const translateXHeart = useSharedValue(-111);
	const translateYHeart = useSharedValue(429);

	//second
	const translateXSquare2 = useSharedValue(107);
	const translateYSquare2 = useSharedValue(371);
	const translateXTriangle2 = useSharedValue(-78);
	const translateYTriangle2 = useSharedValue(345);
	const translateXHeart2 = useSharedValue(0);
	const translateYHeart2 = useSharedValue(373);

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
			console.log('x', translateXSquare, 'y', translateYSquare);
			const xSitLocation = 285;
			const ySitLocation = 64;

			if (
				translateYSquare.value > ySitLocation - 40 &&
				translateYSquare.value < ySitLocation + 40 &&
				translateXSquare.value > xSitLocation - 40 &&
				translateXSquare.value < xSitLocation + 40
			) {
				translateXSquare.value = withSpring(285);
				translateYSquare.value = withSpring(64);
			} else {
				translateXSquare.value = withSpring(-4);
				translateYSquare.value = withSpring(425);
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
			const xSitLocation = -97;
			const ySitLocation = 30;

			if (
				translateYTriangle.value > ySitLocation - 40 &&
				translateYTriangle.value < ySitLocation + 40 &&
				translateXTriangle.value > xSitLocation - 40 &&
				translateXTriangle.value < xSitLocation + 40
			) {
				translateXTriangle.value = withSpring(-97);
				translateYTriangle.value = withSpring(30);
			} else {
				translateXTriangle.value = withSpring(78);
				translateYTriangle.value = withSpring(381);
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
			const xSitLocation = -50;
			const ySitLocation = 63;

			if (
				translateYHeart.value > ySitLocation - 40 &&
				translateYHeart.value < ySitLocation + 40 &&
				translateXHeart.value > xSitLocation - 40 &&
				translateXHeart.value < xSitLocation + 40
			) {
				translateXHeart.value = withSpring(-50);
				translateYHeart.value = withSpring(63);
			} else {
				translateXHeart.value = withSpring(-111);
				translateYHeart.value = withSpring(429);
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

	//second

	/*Square
	 * 
	 * 
	 * 
	 * 
	Square */

	const panGestureEventSquare2 = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXSquare2 = translateXSquare2.value;
			context.translateYSquare2 = translateYSquare2.value;
		},
		onActive: (event, context) => {
			translateXSquare2.value =
				event.translationX + context.translateXSquare2;
			translateYSquare2.value =
				event.translationY + context.translateYSquare2;
		},
		onEnd: () => {
			console.log('x', translateXSquare2, 'y', translateYSquare2);
			const xSitLocation = 287;
			const ySitLocation = 12;

			if (
				translateYSquare2.value > ySitLocation - 40 &&
				translateYSquare2.value < ySitLocation + 40 &&
				translateXSquare2.value > xSitLocation - 40 &&
				translateXSquare2.value < xSitLocation + 40
			) {
				translateXSquare2.value = withSpring(287);
				translateYSquare2.value = withSpring(12);
			} else {
				translateXSquare2.value = withSpring(107);
				translateYSquare2.value = withSpring(371);
			}
		},
	});

	const rStyleSquare2 = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXSquare2.value,
				},
				{
					translateY: translateYSquare2.value,
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

	const panGestureEventTriangle2 = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXTriangle2 = translateXTriangle2.value;
			context.translateYTriangle2 = translateYTriangle2.value;
		},
		onActive: (event, context) => {
			translateXTriangle2.value =
				event.translationX + context.translateXTriangle2;
			translateYTriangle2.value =
				event.translationY + context.translateYTriangle2;
		},
		onEnd: () => {
			console.log('x', translateXTriangle2, 'y', translateYTriangle2);
			const xSitLocation = -95;
			const ySitLocation = -18;

			if (
				translateYTriangle2.value > ySitLocation - 40 &&
				translateYTriangle2.value < ySitLocation + 40 &&
				translateXTriangle2.value > xSitLocation - 40 &&
				translateXTriangle2.value < xSitLocation + 40
			) {
				translateXTriangle2.value = withSpring(-95);
				translateYTriangle2.value = withSpring(-18);
			} else {
				translateXTriangle2.value = withSpring(-78);
				translateYTriangle2.value = withSpring(345);
			}
		},
	});

	const rStyleTriangle2 = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXTriangle2.value,
				},
				{
					translateY: translateYTriangle2.value,
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

	const panGestureEventHeart2 = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		ContextType
	>({
		onStart: (event, context) => {
			context.translateXHeart2 = translateXHeart2.value;
			context.translateYHeart2 = translateYHeart2.value;
		},
		onActive: (event, context) => {
			translateXHeart2.value =
				event.translationX + context.translateXHeart2;
			translateYHeart2.value =
				event.translationY + context.translateYHeart2;
		},
		onEnd: () => {
			console.log('x', translateXHeart2, 'y', translateYHeart2);
			const xSitLocation = -48;
			const ySitLocation = 15;

			if (
				translateYHeart2.value > ySitLocation - 40 &&
				translateYHeart2.value < ySitLocation + 40 &&
				translateXHeart2.value > xSitLocation - 40 &&
				translateXHeart2.value < xSitLocation + 40
			) {
				translateXHeart2.value = withSpring(-48);
				translateYHeart2.value = withSpring(15);
			} else {
				translateXHeart2.value = withSpring(0);
				translateYHeart2.value = withSpring(373);
			}
		},
	});

	const rStyleHeart2 = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateXHeart2.value,
				},
				{
					translateY: translateYHeart2.value,
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
						width={70}
						color="rgba(255, 255, 0, 0.5)"
					/>
				</View>
				<View
					style={{
						transform: [{ translateX: 80 }, { translateY: 0 }],
					}}>
					<Heart
						height={65}
						width={65}
						color="rgba(0, 128, 0, 0.5)"
					/>
				</View>
				<View
					style={{
						transform: [{ translateX: 150 }, { translateY: 0 }],
					}}>
					<SquareSce
						height={70}
						width={100}
						color="rgba(0, 0, 256, 0.5)"
					/>
				</View>
			</View>
			<View style={[{ flexDirection: 'row' }]}>
				<PanGestureHandler onGestureEvent={panGestureEventSquare}>
					<Animated.View style={[rStyleSquare]}>
						<SquareSce
							height={70}
							width={100}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventTriangle}>
					<Animated.View style={[rStyleTriangle, { margin: 20 }]}>
						<TriangleSec
							height={90}
							width={70}
							color="rgba(255, 255, 0, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventHeart}>
					<Animated.View style={rStyleHeart}>
						<Heart
							height={60}
							width={60}
							color="rgba(0, 128, 0, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
			</View>
			<View style={[{ flexDirection: 'row' }]}>
				<PanGestureHandler onGestureEvent={panGestureEventSquare2}>
					<Animated.View style={[rStyleSquare2]}>
						<SquareSce
							height={70}
							width={100}
							color="rgba(0, 0, 256, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventTriangle2}>
					<Animated.View style={[rStyleTriangle2, { margin: 20 }]}>
						<TriangleSec
							height={90}
							width={70}
							color="rgba(255, 255, 0, 1)"
						/>
					</Animated.View>
				</PanGestureHandler>
				<PanGestureHandler onGestureEvent={panGestureEventHeart2}>
					<Animated.View style={rStyleHeart2}>
						<Heart
							height={60}
							width={60}
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
		height: 70,
		backgroundColor: 'rgba(128,128,0,0.3)',
		// padding: 5,
		marginLeft: 2,
	},
});

const TriangleSec = ({ color = '#000000', width = 10, height = 18 }) => {
	return (
		<View>
			<Svg
				width={width}
				height={height}
				viewBox="0 0 531.74 460.5"
				fill={color}>
				<Polygon
					stroke="#000000"
					points="0.866,460 265.87,1 530.874,460 "
				/>
			</Svg>
		</View>
	);
};
