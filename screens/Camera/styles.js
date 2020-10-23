import {StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  pictureButton: {
    paddingBottom: 10,
    paddingTop: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    width: width,
  },
  tickCrossTouchable: {
    marginHorizontal: 8,
    marginBottom: heightPercentageToDP('5%'),
  },
  tickAndCrossForTakenImage: {
    marginHorizontal: 10,
    width: 60,
    height: 60,
  },
  GalleryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    padding: 2,
  },
  bottomCameraIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ImageBackgroundOfRenderImage: {
    width: width,
    height: height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ImageBackgroundOfFinalReturn: {
    flex: 1,
    flexDirection: 'row',
    width: width,
    height: height / 1.2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default styles;
