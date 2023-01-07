import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {colors} from '../../const/color';

const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  textHeaderContainer: {
    flexDirection: 'row',
    paddingLeft: 24,
    paddingTop: 12,
  },
  root: {
    flex: 1,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  imgHeader: {
    height: 19,
    width: 16,
    marginLeft: 10,
  },
  textHeader2: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    paddingLeft: 24,
    paddingTop: 8,
  },
  logo: {
    width: 81,
    height: 54,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    paddingVertical: 72,
  },
  appName: {
    fontSize: 48,
    color: '#fff',
    fontWeight: '700',
  },
  textInput: {
    height: 44,
    width: (windowWidth / 10) * 8,
    fontSize: 12,
    paddingLeft: 23,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 22,
    backgroundColor: colors.input,
    marginVertical: 16,
  },
  textInputForgot: {
    height: 44,
    width: (windowWidth / 10) * 8,
    fontSize: 12,
    paddingLeft: 23,
    borderColor: '#A5CFFF',
    borderWidth: 1,
    borderRadius: 22,
    backgroundColor: '#FFF',
    marginVertical: 16,
  },
  textInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPass: {
    fontSize: 12,
    color: '#3D4048',
    fontWeight: '400',
    marginLeft: 240,
  },
  buttonContainer: {
    paddingVertical: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fingerText: {
    color: colors.primary,
  },
  signUpText: {
    color: colors.primary,
    fontWeight: '700',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '84%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    flexDirection: 'row',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
  },
  otpCode: {
    width: 36,
    height: 36,
    borderWidth: 2,
    textAlign: 'center',
    marginVertical: 24,
    marginHorizontal: 16,
    fontWeight: 'bold',
  },
});
