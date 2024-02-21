import { StyleSheet } from "react-native";
import Colors from "../../../colors";


const styles = StyleSheet.create({
    btnAreaTextoSenha:{
        flex: 1,
        position: "absolute",
        width:70,
        height:70,
        borderRadius:100,
        marginLeft:280,
        marginTop:680,
        backgroundColor:Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerIfEmpty:{
        height:600,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    containerHeader:{
        alignContent:'center',
        justifyContent:'center'
    },
    TitleIfEmpty:{
        fontSize:24,

    }

});

export default styles;