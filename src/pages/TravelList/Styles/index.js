import { StyleSheet } from "react-native";
import Colors from "../../../colors";
import colors from "../../../colors";


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    containerTitle:{
        width:"100%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
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
        bottom:'0%',
        width:70,
        height:70,
        borderRadius:100,
        backgroundColor:Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingContainer:{
       height:'100%',
       justifyContent:'center',
       alignItems:'center'
    },
    main:{
        height:'85%'
    }

});

export default styles;