import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
import { getStatusBarHeight } from 'react-native-status-bar-height';
const heightSB = getStatusBarHeight();

const styles = StyleSheet.create({
    container: {
        paddingTop: heightSB,
    },
    background: {
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    container1: {
        flexDirection: "row",
        alignItems: 'center'
    },
    container2: {
        width: 130,
        height: 120,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginRight: 8,
    },
    container3: {
        alignItems: 'flex-end'
    },
    container4: {
        marginTop: 5
    },
    discount: {
        color: '#666666',
        fontSize: 13,
        lineHeight: 18,
    },
    orderDiscount: {
        color: '#FF0606',
        fontSize: 13,
        lineHeight: 18,
    },
    orderTotal: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
        lineHeight: 18,
    },
    orderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    orderItemTxt: {
        fontSize: 12,
        color: '#151515',
        lineHeight: 16
    },
});

export default styles;