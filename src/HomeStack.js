import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./HomeScreen";
import Details from "./Details";
import Header from './Header'

const Stack = createStackNavigator();

export default class HomeStack extends Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName="Home"
                headerMode="screen"
                screenOptions={{
                    header: ({ previous }) => {
                        return (
                            <Header {...this.props} previous={previous} />
                        )
                    }
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} initialParams={{ news: this.props.route.params.news }} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        );
    }
}
