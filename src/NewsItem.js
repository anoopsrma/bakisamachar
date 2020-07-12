import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import NepaliDate from 'nepali-date-converter';
import { Html5Entities } from 'html-entities';

export default class NewsItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let date = new NepaliDate(new Date(this.props.newsItem.date)).format('MMMM DD, YYYY');
        let title = new Html5Entities().decode(this.props.newsItem.title.rendered)
        if (this.props.newsItem._embedded !== undefined) {
            url = { uri: this.props.newsItem._embedded['wp:featuredmedia'][0].link }
        } else {
            url = require('../img/default_news.jpg')
        }

        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <View style={{ flex: 3 }}>
                        <Image
                            style={styles.tinyLogo}
                            source={url}
                        />
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                        <View style={styles.date}>
                            <Text>
                                मिति : {date} B.S
                        </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        marginTop: 2,
        height: 120,
        backgroundColor: '#fff',
    },
    item: {
        flexDirection: 'row'
    },
    tinyLogo: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    text: {
        flex: 5,
        paddingHorizontal: 10,
        marginVertical: 5
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 5,
        textAlign: 'justify'
    },
    date: {
        flex: 1,
        fontSize: 13,
        marginVertical: 5,
        fontStyle: 'italic',
        color: 'grey',
        justifyContent: 'flex-end',
    }
});
