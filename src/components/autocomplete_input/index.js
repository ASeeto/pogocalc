'use strict';

import Autocomplete from 'react-native-autocomplete-input';
import React from 'react';

import styles from './styles';

const AutocompleteInput = (props) => {
	return (
		<Autocomplete
			autoCapitalize="none"
			autoCorrect={false}
			containerStyle={[styles.container, props.customContainerStyle]}
			data={props.data}
			defaultValue={props.defaultValue}
			onChangeText={props.onChangeText}
			placeholder={props.placeholder}
			renderItem={props.renderItem}
		/>
	);
};

AutocompleteInput.propTypes = {
	customContainerStyle: React.PropTypes.number,
	data: React.PropTypes.array,
	defaultValue: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
	onChangeText: React.PropTypes.func,
	placeholder: React.PropTypes.string,
	renderItem: React.PropTypes.func
};

AutocompleteInput.defaultProps = {
	customContainerStyle: {},
	placeholder: ''
};

export default AutocompleteInput;