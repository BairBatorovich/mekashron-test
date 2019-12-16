import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import styles from './styles'

class clubBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
     
      }


    render() {
        return (
            <TouchableOpacity style={styles.clubBtn}>
                <Image source={require('../../assets/member.png')} style={styles.clubBtnImg}/>
                <Text style={styles.clubBtnTxt}>Club member</Text> 
            </TouchableOpacity>
        )
    }
};


export default clubBtn;