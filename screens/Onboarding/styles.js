import {StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'space-between',
    alignItems: 'center',
    resizeMode: 'cover',
    flex: 1,
  },
  linear: {
    borderRadius: 13,
    marginTop: widthPercentageToDP('8%'),
    paddingVertical: 7,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default styles;
