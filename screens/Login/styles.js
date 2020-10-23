import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(43, 38, 60)',
    paddingTop: hp('10%'),
    paddingHorizontal: wp('10%'),
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: hp('5.5%'),
  },
  input: {
    backgroundColor: 'rgb(84, 78, 97)',
    marginVertical: hp('0.5%'),
    paddingVertical: hp('1.15%'),
    paddingRight: width / 2,
    paddingLeft: wp('5%'),
    borderRadius: 35,
    color: 'white',
  },
  button: {
    marginTop: hp('5%'),
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
  },
  bottom: {
    flexDirection: 'row',
    marginTop: hp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'rgb(174, 169, 184)',
  },
  linear: {
    borderRadius: 35,
    paddingVertical: hp('1.2%'),
    paddingHorizontal: width / 3.185,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
});

export default styles;
