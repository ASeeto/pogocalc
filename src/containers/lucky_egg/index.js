'use strict';

import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

/*
 *  Lucky Egg
 */
class LuckyEgg extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Lucky Egg Calculator</Text>
			</View>
		);
	}
};

export default LuckyEgg;