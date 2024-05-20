// ModalLogout/Styles/index.js
import { StyleSheet } from 'react-native';
import Colors from '../../../colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    padding: 10,
  },
  modalContainer: {
    position: 'absolute',
    top: 10,
    right: 10, // Alterado para o canto superior direito
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 20,
    elevation: 5,
  },
  modalView: {
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
  },
  btnLogout:{
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  }
});

export default styles;
