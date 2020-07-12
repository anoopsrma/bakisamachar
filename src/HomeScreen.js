import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { getCategoryPosts } from "./news";
import NewsItem from './NewsItem';
import { ActivityIndicator } from 'react-native-paper';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: []
        }
        this.fetchNews = this.fetchNews.bind(this);
    }
    componentDidMount() {
        if (this.props.route.params.news instanceof Object) {
            this.setState({ dataSource: this.props.route.params.news, isLoading: false })
        } else {
            this.fetchNews()
        }
    }
    componentDidunMount() {
        this.setState({ isLoading: true })
    }
    fetchNews() {
        getCategoryPosts(this.props.route.params.news)
            .then(dataSource => {
                this.setState({ dataSource: dataSource, isLoading: false })
            })
            .catch(() => this.setState({ isLoading: false }));
    }
    newsDetail(item) {
        this.props.navigation.navigate('Details', { name: 'Custom profile header', item: item })
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="green" />
                </View>
            )
        }
        return (
            <View>
                <FlatList
                    data={this.state.dataSource}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableNativeFeedback onPress={() => this.newsDetail(item)}  >
                            <NewsItem newsItem={item} />
                        </TouchableNativeFeedback>
                    )}
                />
            </View>
        )
    }
}
