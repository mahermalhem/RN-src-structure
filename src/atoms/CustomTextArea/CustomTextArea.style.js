import {StyleSheet, I18nManager} from 'react-native';
import {scale, verticalScale} from '_styles/scaling';
import {TextStyle} from '_utils/typography';

const styles = theme =>
  StyleSheet.create({
    inputContainer: {
      padding: scale(10),
      minHeight: verticalScale(140),
      marginVertical: verticalScale(4),
    },
    focusedInput: {
      backgroundColor: theme?.supportingColors?.coffee100,
      borderColor: theme?.primaryColors?.coffee500,
    },
    errorStyle: {
      backgroundColor: theme?.supportingColors?.marigold100,
      borderColor: theme?.supportingColors?.marigold500,
    },
    inputStyle: {
      ...TextStyle.body,
      color: theme?.neutralColors?.black,
      flex: 1,
      padding: 0,
      textAlign: I18nManager.isRTL ? 'right' : 'left',
      textAlignVertical: 'top',
    },
    disabledInput: {
      ...TextStyle.body,
      lineHeight: undefined,
      padding: 0,
      color: theme?.neutralColors?.gray200,
      textAlign: I18nManager.isRTL ? 'right' : 'left',
      textAlignVertical: 'top',
    },
  });

export default styles;
