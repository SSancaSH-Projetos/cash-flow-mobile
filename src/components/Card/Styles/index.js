import { StyleSheet } from "react-native";
import Colors from "../../../colors";


const styles = StyleSheet.create({
    container:{
        marginTop:12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow:{
        padding:20,
        marginBottom: 6,
        width: '90%',
        height: 'auto',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },
    header:{
        flexDirection:"row",
        justifyContent: 'space-between'
    },
    body:{

    },
    containerFooter:{
        flexDirection:"row",
        marginTop:30,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contentText:{
        flexDirection:"row",
        alignItems: 'center',
    },
    dateTravel: {
        marginLeft:20,
    },
    titleCard:{
        fontSize:26,
        marginBottom:20
    },
    btn_description:{
        marginLeft:100
    },
    text_btn_description:{
        fontSize:18,
        textDecorationLine:"underline"
    }

});

export default styles;