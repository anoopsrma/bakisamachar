import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
    const createTwoButtonAlert = () =>{
        props.navigation.toggleDrawer()
        Alert.alert(
            "Aakash Digital Payment Pvt.Ltd",
            `द्वारा संचालित नेपाली भाषा मा प्रकाशित हुने डिजिटल अनलाइन पत्रिका हो। हाल यस साइट परिक्षणको क्रममा रहेको छ । सम्बन्धित निकायबाट अनुमती लिए पश्चात हामी यहाहरुलाई हलपल ताजा समाचार उपलब्ध गराउने छौ।\n\nकम्पनि दर्ता न : … 170200/073-074\nपोखरा ५ मालेपाटन\nPhone No. :- 061520431, 9827157000\nEmail:- info@bakisamachar.com`,
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Animated.View>
                    <Drawer.Section style={styles.drawerSection} >
                        <View>
                            <TouchableOpacity onPress={() => { props.navigation.toggleDrawer(); }}>
                                <Image
                                    source={require('../img/bg_splash.jpg')}
                                    style={styles.image}
                                />
                            </TouchableOpacity>
                        </View>
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="fire"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Latest News"
                            onPress={() => { props.navigation.navigate('LatestNews') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="fire"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Main News"
                            onPress={() => { props.navigation.navigate('MainNews') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="fire"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Trending   "
                            onPress={() => { props.navigation.navigate('Trending') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="fire"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Politics   "
                            onPress={() => { props.navigation.navigate('Politics') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="heart-pulse"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Corona   "
                            onPress={() => { props.navigation.navigate('Corona') }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons name="newspaper" color={color} size={size} />
                            )}
                            label="National    "
                            onPress={() => { props.navigation.navigate('National') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="border-outside"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="International     "
                            onPress={() => { props.navigation.navigate('International') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="home-currency-usd"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Prabas     "
                            onPress={() => { props.navigation.navigate('Prabas') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="soccer"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Sport     "
                            onPress={() => { props.navigation.navigate('Sport') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="currency-usd"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Business     "
                            onPress={() => { props.navigation.navigate('Business') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="telescope"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Science     "
                            onPress={() => { props.navigation.navigate('Science') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="account-tie"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="About     "
                            onPress={ createTwoButtonAlert }
                        />
                    </Drawer.Section>
                </Animated.View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 60,
        marginTop: '7%',
        marginBottom: '10%'
    },
    drawerSection: {
        paddingVertical: 5,
    },
});
