import { StyleSheet } from "react-native";
import Colors from "../../../colors";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.primary,
    },
    containerHeader:{
        marginTop:'14%',
        marginBottom: '8%',
        paddingStart:'5%',
    },
    message:{
        fontSize:28,
        fontWeight: 'bold',
        color: Colors.branco,
    },
    containerForm:{
        backgroundColor: Colors.branco,
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart:'5%',
        paddingEnd:'5%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    safeArea:{
        width: '100%',
        justifyContent: 'center',
        alignItems:'center',
        borderColor: Colors.cinza,
        margin:16,
        fontSize:20,
        padding:10,
    },
    item:{
        width: '100%',
        height:45,
        borderWidth:1,
        borderRadius:5,
        borderColor: Colors.primary,
        marginBottom:8,
        marginTop:8,
        fontSize:18,
        padding:10,
    }, 
    btnArea:{
        borderRadius:10,
        borderColor: Colors.primary,
        alignItems: 'center',
        width: '100%',
        backgroundColor: Colors.primary,
        paddingTop: 14,
        paddingBottom:14,
        marginTop: 24,
    },
    btnTexto:{
        color: Colors.branco,
        fontSize:20,
        fontWeight: 'bold',
    },
    btnAreaTextoSenha:{
        marginTop:12,
        padding:10,
    },
    btnTextoSenha:{
       fontWeight: 'bold',
       color: Colors.primary
    }
    
});

export default styles;