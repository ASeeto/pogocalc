'use strict';

import { Dimensions, StyleSheet } from 'react-native';

const window = Dimensions.get('window');

const input = {
	position: 'absolute',
	width: window.width
};

const styles = {
	container: {
		flex: 1,
		paddingTop: 50,
		backgroundColor: '#FFF',
	},
	title: {
		alignItems: 'center'
	},
	overlay: {
		flex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		backgroundColor: '#000',
		opacity: .5,
		height: window.height,
		width: window.width,
		zIndex: 1
	},
	autocompleteContainer1: {
		...input,
		top: 0
	},
	autocompleteContainer2: {
		...input,
		top: 50
	},
	autocompleteContainer3: {
		...input,
		top: 100
	},
	autocompleteContainer4: {
		...input,
		top: 150
	},
	itemText: {
		fontSize: 15,
		margin: 2
	}
};

export default StyleSheet.create(styles);