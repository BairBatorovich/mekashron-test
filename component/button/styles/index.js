import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
// import { getStatusBarHeight } from 'react-native-status-bar-height';
// const heightSB = getStatusBarHeight();

const styles = StyleSheet.create({
    clubBtn: {
        flexDirection: "row",
        marginTop: 10,
        borderRadius: 60,
        backgroundColor: '#28A745',
        width: 343,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    clubBtnTxt: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white',
    },
    clubBtnImg: {
        marginRight: 9
    },
    BigBtn: {
        backgroundColor: '#002A5C',
        width: 205,
        height: 110,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3
    },
    SmallBtn: {
        backgroundColor: '#FEFEFE',
        width: 130,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
    },
    SmallBtnTxt: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#151515',
    },
    SmallBtnTxtCancel: {
        fontSize: 14,
        fontWeight: "bold",
        color: '#666666',
    },
});

export default styles;