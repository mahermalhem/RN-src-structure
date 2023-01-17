import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '_styles/scaling';

const styles = color =>
  StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: verticalScale(8),
    },
    titleStyle: {
      color: color,
      marginLeft: scale(5),
    },
    iconStyle: {
      tintColor: color,
    },
    iconContainer: {
      width: scale(24),
      height: scale(24),
    },
  });

export default styles;
