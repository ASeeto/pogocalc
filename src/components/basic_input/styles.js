'use strict';

import { Dimensions, StyleSheet } from 'react-native';

const window = Dimensions.get('window');

const border = {
	borderColor: '#b9b9b9',
	borderRadius: 1,
	borderWidth: 1
};

const styles = {
	container: {
		flex: 1
	},
	inputContainer: {
		...border,
		margin: 10,
		marginBottom: 0,
	},
	input: {
		backgroundColor: 'white',
		height: 40,
		paddingLeft: 3,
	}
};

export default StyleSheet.create(styles);