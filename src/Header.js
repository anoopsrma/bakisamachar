import React from 'react';
import { Appbar, Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
    const navigation = useNavigation();
    const _goBack = () => navigation.pop();
    const _toggleDrawer = () => props.navigation.toggleDrawer();
    return (
        <Appbar.Header theme={{ colors: { primary: '#4CAAF5' } }}>
            {props.previous ? (
                <Appbar.BackAction onPress={_goBack} color={'#fff'}/>
            ) : (
                    <TouchableOpacity style={{ marginLeft: 10 }} onPress={_toggleDrawer}>
                        <Icon name="menu" size={30} color={'#fff'} />
                    </TouchableOpacity>
                )}
            <Appbar.Content
            titleStyle={{
                color:"#fff",
                width:'80%',
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
            }}
            title={props.route.name}
            />
        </Appbar.Header>
    );
};
export default Header;
