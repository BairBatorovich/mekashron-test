import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles'

class BigBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
     
      }


    render() {
        const { active, name1, name2 } = this.props;
        return (
            <TouchableOpacity style={styles.BigBtn}>
                <Text style={styles.clubBtnTxt}>Checkout</Text> 
            </TouchableOpacity>
        )
    }
};


export default BigBtn;