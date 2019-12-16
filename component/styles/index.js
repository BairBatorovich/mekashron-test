import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
// import { getStatusBarHeight } from 'react-native-status-bar-height';
// const heightSB = getStatusBarHeight();

const styles = StyleSheet.create({
    search: {
        flexDirection: "row",
        marginTop: 10,
        borderRadius: 3,
        backgroundColor: '#FEFEFE',
        width: 343,
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchTxt: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'white'
    },
    searchImgLeans: {
        marginLeft: 16
    },
    searchSquareBlack: {
        backgroundColor: '#151515',
        width: 75,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginRight: 3,
    },
    searchImgBarCode: {
        width: 24,
        height: 21
    },
    header: {
        flexDirection: "row",
        backgroundColor: '#FEFEFE',
        width: WIDTH,
        height: 51,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    headerImg: {
        marginLeft: 10,
    },
    headerUser: {
        marginLeft: 10,
        flexDirection: 'row',
        width: WIDTH - 83,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    headerPhoto: {
        borderRadius: 25
    },
});

export default styles;