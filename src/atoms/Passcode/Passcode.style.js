import {StyleSheet, I18nManager} from 'react-native';
import {scale, verticalScale} from '_styles/scaling';
import {TextStyle} from '_utils/typography';

const Passcode = themes =>
  StyleSheet.create({
    inputAreaStyle: {
      backgroundColor: 'transparent',
      paddingVertical: verticalScale(30),
      transform: I18nManager.isRTL ? [{scaleX: -1}] : [{scaleX: 1}],
    },
    buttonViewStyle: {
      backgroundColor: 'transparent',
      color: themes.primaryColors.coffee800,
      borderColor: themes.primaryColors.coffee800,
      borderWidth: 2,
      width: scale(67),
      height: scale(67),
      borderRadius: scale(50),
      transform: I18nManager.isRTL ? [{scaleX: -1}] : [{scaleX: 1}],
    },
    inputViewEmptyStyle: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: themes.primaryColors.coffee800,
    },
    inputViewFilledStyle: {
      backgroundColor: themes.primaryColors.coffee800,
    },
    buttonTextStyle: {
      color: themes.primaryColors.coffee800,
      ...TextStyle.title2,
    },
    buttonAreaStyle: {
      paddingHorizontal: scale(40),
      transform: I18nManager.isRTL ? [{scaleX: -1}] : [{scaleX: 1}],
    },
    underlayColor: {
      backgroundColor: 'transparent',
    },
    deleteIcon: {
      width: scale(27.04),
      height: scale(18.8),
      transform: I18nManager.isRTL ? [{scaleX: -1}] : [{scaleX: 1}],
      tintColor: themes.primaryColors.coffee800,
    },
  });

export default Passcode;
