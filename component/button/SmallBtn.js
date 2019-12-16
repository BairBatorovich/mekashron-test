import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles'

class SmallBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        };

    }


    render() {
        const { name } = this.state;
        return (
            <TouchableOpacity style={ styles.SmallBtn }>
                <Text style={ name == 'New order' ? styles.SmallBtnTxt : styles.SmallBtnTxtCancel}>{name}</Text>
            </TouchableOpacity>
        )
    }
};


export default SmallBtn;