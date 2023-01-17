import {Platform, StyleSheet} from 'react-native';

import {scale, verticalScale} from '_styles/scaling';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'android' && verticalScale(4),
  },
  innerContainerDay: {
    flex: 0.25,
    marginEnd: scale(6),
  },
  innerContainerMonth: {
    flex: 0.5,
    marginEnd: scale(6),
  },
  innerContainerYear: {
    flex: 0.27,
  },
});
