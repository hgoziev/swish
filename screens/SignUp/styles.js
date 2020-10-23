import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(43, 38, 60)',
    paddingTop: hp('15%'),
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
    alignItems: 'center',
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
    paddingHorizontal: wp('22%'),
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 16,
  },
  loginText: {
    fontSize: 18,
    color: 'rgb(238, 255, 0)',
    paddingLeft: wp('3%'),
  },
  attribution: {
    fontSize: 18,
    color: 'silver',
    fontWeight: '600',
    marginTop: 80,
    textAlign: 'center',
  },
});

export default styles;
