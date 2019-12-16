import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }


    render() {
        return (
            <View style={styles.header}>
                <Image source={require('../assets/menu.png')} style={styles.headerImg} />
                <View style={styles.headerUser}>
                    <Image source={require('../assets/user.png')} style={styles.headerPhoto}/>
                    <Text>Johnissimus Van-Doe</Text>
                    <Image source={require('../assets/down.png')}/>
                </View>
            </View>
        )
    }
};


export default Header;