import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '_styles/scaling';

const styles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: scale(10),
      height: verticalScale(44),
      borderRadius: scale(12),
      backgroundColor: theme?.backgroundColors?.bgl0 + '80',
      borderColor: theme?.backgroundColors?.bgl0,
      alignItems: 'center',
      borderWidth: scale(1),
      marginVertical: verticalScale(4),
      width: '100%',
    },
    focusedContainer: {
      backgroundColor: theme?.supportingColors?.coffee100,
      borderColor: theme?.primaryColors?.coffee500,
    },
    errorStyle: {
      backgroundColor: theme?.supportingColors?.marigold100,
      borderColor: theme?.supportingColors?.marigold500,
    },
    textStyle: {
      color: theme?.neutralColors?.black,
      flex: 1,
      padding: 0,
    },
    disabledTextStyle: {
      padding: 0,
      color: theme?.neutralColors?.gray200,
    },
    iconStyle: {
      width: scale(18),
      height: scale(18),
      tintColor: theme?.supportingColors?.coffee500,
    },
    placeholderTextStyle: {
      color: theme?.neutralColors?.gray200,
    },
  });

export default styles;
