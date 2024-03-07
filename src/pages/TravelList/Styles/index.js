import { StyleSheet } from "react-native";
import Colors from "../../../colors";


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    card:{             
        heigh: '100%',
        marginBottom: 10,
    },
    item:{
        marginTop: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize:24,
    },
    containerBottom:{
        flex: 1,
        position: 'absolute',
        left:'75%',
        top:'85%',
        width:70,
        height:70,
        borderRadius:100,
        backgroundColor:Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center'
    },

});

export default styles;