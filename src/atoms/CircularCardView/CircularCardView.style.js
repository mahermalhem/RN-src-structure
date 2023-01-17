import {StyleSheet} from 'react-native';
import {scale} from '_styles/scaling';

const circularCardViewStyles = theme =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: scale(52.63),
      width: scale(52.63),
      borderRadius: scale(27),
    },
    textStyle: {
      textAlign: 'center',
      color: theme.backgroundColors.bgl0,
      fontSize: scale(16),
      lineHeight: undefined,
    },
    iconStyle: {
      width: scale(20),
    },
    statusView: {
      position: 'absolute',
      bottom: scale(-1.67),
      right: scale(5.28),
      width: scale(12),
      height: scale(12),
      borderRadius: scale(6),
      backgroundColor: theme.pfmColors.positive500,
    },
  });

export default circularCardViewStyles;
