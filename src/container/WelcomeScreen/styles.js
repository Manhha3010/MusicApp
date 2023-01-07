import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imgStyle: {
    width: 346,
    height: 327,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
  },
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  textContent: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    paddingVertical: 20,
    color: '#3D4048',
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 63,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  buttonContainer: {
    width: 327,
    height: 44,
    backgroundColor: '#0085FF',
    borderRadius: 22,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    lineHeight: 44,
    fontSize: 16,
  },
});
