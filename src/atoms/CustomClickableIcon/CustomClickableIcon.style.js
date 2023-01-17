import {StyleSheet, I18nManager} from 'react-native';
import {scale} from '_styles/scaling';

export default theme =>
  StyleSheet.create({
    container: {
      width: scale(43),
      height: scale(40),
      borderRadius: scale(12),
      backgroundColor: theme?.backgroundColors?.bgl1,
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
      borderWidth: 1,
      borderColor: theme.backgroundColors.bgl0,
    },
    iconStyle: {
      width: scale(24),
      height: scale(24),
    },
  });
