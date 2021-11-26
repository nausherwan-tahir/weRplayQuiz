import {ScaledSheet} from 'react-native-size-matters';
import {blueColor, whiteColor} from '../../Utils';

export const styles = ScaledSheet.create({
    main: {
        flex:1
    },
    content: {
        backgroundColor:blueColor
    },
    background: {
        padding: 20
    },
    icon: {
        height:80, 
        width:80, 
        borderRadius:40, 
        marginBottom:10
    },
    name: {
        color:whiteColor, 
        fontSize:18, 
        marginLeft: 5
    },
    drawerList: {
        flex:1, 
        backgroundColor: whiteColor, 
        paddingTop:10
    },
    drawerFooter: {
        padding:20, 
        borderTopWidth:1, 
        borderTopColor:blueColor
    },
    text: {
        fontSize: 15,
        marginLeft: 5,
        textAlign: 'center'
    },
    logout: {
        height: 25,
        width: 25
    }
});
