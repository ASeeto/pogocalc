'use strict';

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

/*
 *  Returns the main container for this application.
 */
const Main = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>
				Welcome to PoGoCalc!
			</Text>
			<Text style={styles.instructions}>
				To get started, edit index.ios.js
			</Text>
			<Text style={styles.instructions}>
				Press Cmd+R to reload,{'\n'}
				Cmd+D or shake for dev menu
			</Text>
		</View>
	);
};

export default Main;