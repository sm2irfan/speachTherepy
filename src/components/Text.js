import React from 'react';
import { Text as Txt, StyleSheet } from 'react-native';

const Text = props => {
	const getTextType = type => {
		switch (type) {
			case 'title':
				return [styles.titleText];
			case 'body':
				return [styles.bodyText];
			case 'label':
				return [styles.labelText];
		}
	};

	const getTextColor = color => {
		switch (color) {
			case 'black':
				return { color: 'black' };
			case 'white':
				return { color: 'white' };
			case 'gray':
				return { color: 'gray' };
		}
	};

	return (
		<Txt
			{...props}
			allowFontScaling={true}
			style={[
				styles.text,
				props.style,
				getTextType(props.type),
				getTextColor(props.color),
			]}>
			{props.children}
		</Txt>
	);
};

const styles = StyleSheet.create({
	text: {
		// fontFamily: 'normal',
	},
	titleText: {
		fontSize: 26,
	},
	bodyText: {
		fontSize: 22,
	},
	labelText: {
		fontSize: 18,
	},
});

export { Text };
