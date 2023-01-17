import {StyleSheet} from 'react-native';
import {verticalScale} from '_styles/scaling';

const style = theme =>
  StyleSheet.create({
    divider: {
      width: '100%',
      height: verticalScale(1),
      backgroundColor: theme?.supportingColors.coffee100,
      marginTop: verticalScale(20),
    },
  });

export default style;
