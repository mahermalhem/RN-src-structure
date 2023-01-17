import {StyleSheet, Platform} from 'react-native';
import {verticalScale} from '_styles/scaling';

const videoMargin = Platform.select({
  ios: {
    marginBottom: verticalScale(20),
  },
  android: {
    marginBottom: verticalScale(25),
  },
});

export default StyleSheet.create({
  videoContainer: {
    ...videoMargin,
    overflow: 'hidden',
    borderRadius: 12,
  },
  webViewStyle: {borderRadius: 12},
});
