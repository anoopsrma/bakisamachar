import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, StyleSheet, StatusBar, ActivityIndicator } from 'react-native'

const image = require('../img/bg_splash.jpg');

export default class Splash extends Component {
    constructor(props) {
		super(props);
	}
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor : '#fff',
                padding: 40,
            },
            image: {
                width: "100%",
                height: "30%",
            },
        });

        return (
            <>
            <StatusBar hidden = {true}/>
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image} imageStyle={{ borderRadius: 6, resizeMode: "cover"}}>
                </ImageBackground>
                <ActivityIndicator size="large" color="green" />
            </View>
            </>
        );
    }
}
