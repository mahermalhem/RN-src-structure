import {StyleSheet} from 'react-native';
import {scale} from '_styles/scaling';

const styles = (pinInputHeight, theme) =>
  StyleSheet.create({
    defaultStyle: {
      borderColor: theme?.backgroundColors.bgl0,
      borderWidth: 1,
      height: pinInputHeight,
      backgroundColor: theme?.backgroundColors.bgl0 + '80',
      borderRadius: scale(4),
    },
    focusedStyle: {
      borderColor: theme?.secondaryColors.emerald600,
      borderWidth: 1,
      backgroundColor: theme?.backgroundColors.bgl2,
      borderRadius: scale(4),
    },
    errorStyle: {
      borderColor: theme?.secondaryColors.marigold600,
      borderWidth: 1,
      height: pinInputHeight,
      backgroundColor: theme?.supportingColors.marigold100,
      borderRadius: scale(4),
    },
    containerStyle: {},
  });

export default styles;
