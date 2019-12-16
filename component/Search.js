import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import styles from './styles'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }


    render() {
        const { active, name1, name2 } = this.props;
        return (
            <View style={styles.search}>
                <Image source={require('../assets/search.png')} style={styles.searchImgLeans} />
                <Text style={styles.searchTxt}>Club member</Text>
                <TouchableOpacity style={styles.searchSquareBlack}>
                    <Image source={require('../assets/barcode.png')} style={styles.searchImgBarCode}/>
                </TouchableOpacity>
            </View>
        )
    }
};


export default Search;