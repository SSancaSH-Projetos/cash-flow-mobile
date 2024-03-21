import { StyleSheet } from "react-native";
import colors from '../../../colors/'


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
        borderTopRightRadius: 10,
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
    },

    //DETAILS
    containerDetail:{
        backgroundColor: colors.primary,
        width: '90%',
        height: 'auto',
        marginBottom: 10, 
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        alignItems: 'center',
        justifyContent: 'center'
    },
    value:{
        fontSize: 20,
        color:colors.branco,
        fontWeight: 'bold',
        padding: 5,
    },
    infoContainer:{
        width: '100%',
        justifyContent: 'flex-start',
        padding: 5,
    },
    textDetail:{
        color: colors.branco,
        fontSize: 18,
        fontWeight: 'bold',
    }, 
    text:{
        color: colors.branco,
        fontSize: 16,
        marginLeft: 20,
    },
    bottomDetail:{
        backgroundColor: 'red',
        padding: 10,
        marginBottom: 8,
        borderRadius: 8,
    },
    bottomText:{
        color: colors.branco,
        fontSize: 16,
        fontWeight: 'bold',
    }
  

});

export default styles;