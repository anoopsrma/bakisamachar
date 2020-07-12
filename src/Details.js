import React, { Component } from 'react';
import { Text, Linking, StyleSheet, Dimensions, View, Share } from 'react-native';
import HTML from 'react-native-render-html';
import { Html5Entities } from 'html-entities';
import NepaliDate from 'nepali-date-converter';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

export default class Details extends Component {
    constructor(props) {
        super(props);
    }

    onShare = async () => {
        try {
            const result = await Share.share({
                message: this.props.route.params.item.guid.rendered
            });
        } catch (error) {
            alert(error.message);
        }
    };

    render() {
        let date = new NepaliDate(new Date(this.props.route.params.item.date)).format('MMMM DD, YYYY');
        let title = new Html5Entities().decode(this.props.route.params.item.title.rendered)
        let content = this.props.route.params.item.content.rendered
        let html = content.replace(/<p> .*?>/g, "").replace(/<h.*?>/g, "<strong>").replace(/<\/h.*?>/g, "<\/strong>").replace(/(\r\n|\n|\r)/gm, "");

        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <View style={{flex:1, flexDirection:"row", alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={styles.date}>मिति : {date} B.S</Text>
                        <Button style={{ flex: 1}} color="#4CAAF5" icon="share" mode="contained" onPress={() => this.onShare()}>Share</Button>
                    </View>
                </View>

                <HTML
                    html={html + '<br><br>'}
                    imagesMaxWidth={Dimensions.get('window').width}
                    imagesInitialDimensions={{ width: Dimensions.get('window').width, height: 200 }}
                    ignoredTags={[]}
                    allowedStyles={[]}
                    decodeEntities={true}
                    baseFontStyle={styles.baseFont}
                    tagsStyles={tagStyle}
                    onLinkPress={(event, href) => { Linking.openURL(href) }}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 15,
        includeFontPadding: false
    },
    date: {
        flex:3,
        fontSize: 15,
        marginVertical: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'grey'
    },
    baseFont: {
        fontSize: 18,
        fontWeight: 'normal',
        lineHeight: 35,
    }
});

const tagStyle = {
    iframe: {
        maxHeight: 250,
        maxWidth: Dimensions.get('window').width,
    },
    a: {
        textDecorationLine: 'none'
    },
    img: {
        marginVertical: 10
    },
    p: {
        textAlign: 'justify'
    }
}
