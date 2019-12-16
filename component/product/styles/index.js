import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
// import { getStatusBarHeight } from 'react-native-status-bar-height';
// const heightSB = getStatusBarHeight();

const styles = StyleSheet.create({
   product: {
      flexDirection: "row",
      marginTop: 5,
      marginBottom: 5,
      borderRadius: 3,
      backgroundColor: '#FEFEFE',
      width: 343,
      height: 71,
      justifyContent: "space-between",
      alignItems: "center",
   },
   product1: {
      flexDirection: "row",
      marginTop: 5,
      marginBottom: 5,
      paddingTop: 10,
      borderRadius: 3,
      backgroundColor: '#FEFEFE',
      width: 343,
      height: 85,
      justifyContent: "space-between",
      alignItems: "flex-start",
   },
   productImg: {
      height: 51,
      width: 35,
      backgroundColor: '#DFDFDF',
      marginLeft: 10,
      marginRight: 10,
   },
   productTtl: {
      height: 51,
      width: 176,
   },
   productTtlTxt: {
      fontSize:14,
      textAlign: 'left',
      lineHeight: 19,
   },
   productTotal: {
      height: 51,
      width: 102,
      marginRight: 10,
   },
   productTotalTxt: {
      textAlign: 'right',
      color: '#151515',
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 25,
   },
   productTotalCountTxt: {
      textAlign: 'right',
      color: '#666666',
      fontSize: 14,
      lineHeight: 19,
   },
   productTotalDiscountTxt: {
      textAlign: 'right',
      color: '#FF2929',
      fontSize: 14,
      lineHeight: 19,
   },
});

export default styles;