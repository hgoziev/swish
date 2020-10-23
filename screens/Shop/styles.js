import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(39, 34, 52)',
    paddingRight: wp('5%'),
    paddingLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  linear: {
    borderRadius: 8,
    paddingHorizontal: wp('1.8%'),
    paddingVertical: wp('0.9 %'),
  },
  search: {
    backgroundColor: 'rgb(55, 52, 73)',
    paddingRight: wp('30%'),
    marginRight: wp('-3%'),
    color: 'white',
    paddingLeft: wp('5%'),
    paddingVertical: hp('0.367%'),
    borderRadius: 30,
  },
  categoryImage: {
    width: width / 3.3,
    height: width / 3.3,
    borderRadius: 15,
    opacity: 0.75,
  },
  categoryText: {
    fontSize: 24,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: -75,
    color: 'rgb(245, 54, 0)',
    borderWidth: 2,
    borderColor: 'rgb(243, 91, 0)',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  categoryTextBrands: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgb(245, 54, 0)',
    borderWidth: 2,
    borderColor: 'rgb(243, 91, 0)',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  categoryBrandContainer: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'rgb(239, 239, 239)',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3.3,
    height: width / 3.3,
    borderRadius: 15,
  },
  mainImages: {
    width: width / 3.5,
    height: width / 3.3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'silver',
  },
  mainHighlighted: {
    width: width / 1.65,
    height: width / 1.65,
    borderRadius: 10,
  },
  mainSideHighlighted: {
    width: width / 3.3,
    height: width / 1.65,
    borderRadius: 10,
  },
  mainImageContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 6,
  },
  mainHighlightedImage: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 6,
  },
});

export default styles;
