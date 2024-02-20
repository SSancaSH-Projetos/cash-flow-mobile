import { StyleSheet } from "react-native";
import colors from '../../../colors'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.branco,
    },
    containerLogo: {
      flex: 2,
      backgroundColor: colors.branco,
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerForm: {
      flex:1,
      backgroundColor: colors.primary,
      borderTopLeftRadius: 25,
      borderTopRightRadius:25,
      paddingStart:'5%',
      paddingRight:'5%',
  
    },
    title: {
      fontSize:24,
      fontWeight: 'bold',
      marginTop: 28,
      marginBottom: 12,
      color: colors.branco,
    },
    text: {
      color: colors.cinzaClaro
    },
    button: {
      position: 'absolute',
      backgroundColor: colors.branco,
      borderRadius: 10,
      paddingVertical: 8,
      width: '60%',
      alignSelf: 'center',
      bottom: '15%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText:{
      fontSize: 18,
      color: colors.primary,
      fontWeight: 'bold',
    },
  })

  export default styles;