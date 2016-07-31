'use strict';

import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './styles';

const BasicInput = (props) => {
	return (
		<View style={[styles.container, props.customContainerStyle]}>
			<View style={styles.inputContainer}>
				<TextInput onChangeText={props.onChangeText} placeholder={props.placeholder} style={styles.input} />
			</View>
		</View>
	);
};

BasicInput.propTypes = {
	customContainerStyle: React.PropTypes.number,
	onChangeText: React.PropTypes.func,
	placeholder: React.PropTypes.string
};

BasicInput.defaultProps = {
	customContainerStyle: {},
	placeholder: ''
};

export default BasicInput;