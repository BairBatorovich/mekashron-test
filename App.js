import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import ClubBtn from './component/button/ClubBtn';
import Search from './component/Search';
import BigBtn from './component/button/BigBtn';
import SmallBtn from './component/button/SmallBtn';
import Product from './component/product/Product';
import Header from './component/Header';
import styles from './styles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [
        {
          id: 1,
          image: '../../assets/wine1.png',
          title: `Kendall Jackson Vintner's Reserve Chardonnay`,
          total: '$349.38',
          price: '$349.38',
          count: 1,
          discount: 0,
          discountPrice: 0
        },
        {
          id: 2,
          image: '../../assets/wine2.png',
          title: `Kendall Jackson Vintner's Reserve Chardonnay Luxury Wine`,
          total: '$4,439.98',
          price: '$2035.67',
          count: 2,
          discount: 0,
          discountPrice: 0
        },
        {
          id: 3,
          image: '../../assets/null.png',
          title: `Kendall Chardonnay`,
          total: '$349.38',
          price: '$349.38',
          count: 1,
          discount: 0,
          discountPrice: 0
        },
        {
          id: 4,
          image: '../../assets/wine1.png',
          title: `Kendall Jackson Vintner's Reserve Chardonnay`,
          total: 349.38,
          price: 349.38,
          count: 1,
          discount: 0,
          discountPrice: 0
        },
        {
          id: 5,
          image: '../../assets/wine2.png',
          title: `Jackson Luxury Wine`,
          total: '$439.98',
          price: '$345.67',
          count: 2,
          discount: 10,
          discountPrice: '-$25.99'
        },
      ],
      orderTotal: {
        discount: '10% (-$25.99)',
        total: '$1,300.00',
        items: 7,
        number: '#0134234'
      }
    };
  }
  render() {
    const { order, orderTotal } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.container} >
        <ImageBackground style={styles.background} source={require('./assets/background.png')}>
          <Header/>
        <ClubBtn />
        <Search />
        <View style={styles.container4}>
          <View style={styles.orderItem}>
            <Text style={styles.orderItemTxt}>{orderTotal.items} items</Text>
            <Text style={styles.orderItemTxt}>{orderTotal.number}</Text>
          </View>
          {order.map(item => <Product
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            total={item.total}
            price={item.price}
            count={item.count}
            discount={item.discount}
            discountPrice={item.discountPrice}
          />)}
          {orderTotal.discount != '' ? <View style={styles.container3}>
            <Text style={styles.discount}>Discount: <Text style={styles.orderDiscount}>{orderTotal.discount}</Text></Text>
            <Text style={styles.discount}>Total: <Text style={styles.orderTotal}>{orderTotal.total}</Text></Text>
          </View> : null}
        </View>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <SmallBtn name='New order'/>
            <SmallBtn name='Cancel order'/>
          </View>
          <BigBtn />
        </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}

export default App;