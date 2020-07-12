import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { createDrawerNavigator, DrawerItems } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Splash';
import { getCategoryPosts } from "./news";
import {DrawerContent} from "./DrawerContent"
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: []
        }
        this.fetchNews = this.fetchNews.bind(this);
    }
    componentDidMount() {
        setInterval(() => { this.fetchNews() }, 2000);
    }
    componentDidUnMount() {
        this.setState({ isLoading: false })
    }
    fetchNews() {
        getCategoryPosts(0)
            .then(dataSource => {
                this.setState({ dataSource:dataSource, isLoading: false })
            })
            .catch(() => this.setState({ isLoading: false }));
    }

    render() {
        if (this.state.isLoading) {
            return <Splash />;
        }
        return (
            <>
            <StatusBar hidden = {false} backgroundColor = "#4CAAF5"/>
            <NavigationContainer>
                <Drawer.Navigator
                initialRouteName="LatestNews"
                keyboardDismissMode = 'on-drag'
                drawerContent={props => <DrawerContent {...props} />} >
                    <Drawer.Screen name="LatestNews" component={HomeStack} initialParams={{ news: this.state.dataSource }}/>
                    <Drawer.Screen name="MainNews" component={HomeStack} initialParams={{ news: 171 }}/>
                    <Drawer.Screen name="Trending" component={HomeStack} initialParams={{ news: 138 }}/>
                    <Drawer.Screen name="Politics" component={HomeStack} initialParams={{ news: 149 }}/>
                    <Drawer.Screen name="Corona" component={HomeStack} initialParams={{ news: 115 }} />
                    <Drawer.Screen name="National" component={HomeStack} initialParams={{ news: 139 }} />
                    <Drawer.Screen name="International" component={HomeStack} initialParams={{ news: 16 }}/>
                    <Drawer.Screen name="Prabas" component={HomeStack} initialParams={{ news: 18 }}/>
                    <Drawer.Screen name="Sport" component={HomeStack} initialParams={{ news: 4 }}/>
                    <Drawer.Screen name="Business" component={HomeStack} initialParams={{ news: 129 }}/>
                    <Drawer.Screen name="Science" component={HomeStack} initialParams={{news: 6}}/>
                    <Drawer.Screen name="About" component={HomeStack} options={{title: ""}}/>
                </Drawer.Navigator>
            </NavigationContainer>
            </>
        );
    }
}
