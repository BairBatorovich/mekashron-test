import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            image: this.props.image,
            title: this.props.title,
            total: this.props.total,
            price: this.props.price,
            count: this.props.count,
            discount: this.props.discount,
            discountPrice: this.props.discountPrice,
        };
    }


    render() {
        const { id, image, title, total, price, count, discount, discountPrice } = this.state;

        return (
            <View style={discount > 0 ? styles.product1 : styles.product}>
                <Image source={require('../../assets/wine1.png')} style={styles.productImg} />
                <View style={styles.productTtl}>
                    <Text style={styles.productTtlTxt}>{title}</Text>
                </View>
                <View style={styles.productTotal}>
                    <Text style={styles.productTotalTxt}>{total}</Text>
                    { count > 1 ? <Text style={styles.productTotalCountTxt}>{count} x {price}</Text> : null }
                    { discount > 0 ? <Text style={styles.productTotalDiscountTxt}>{discount} x ({discountPrice})</Text> : null }
                </View>
            </View>
        )
    }
};


export default Product;