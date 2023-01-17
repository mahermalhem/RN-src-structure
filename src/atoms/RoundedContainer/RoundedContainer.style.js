import {StyleSheet} from 'react-native';
import {scale} from '_styles/scaling';

const style = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColors.bgl1,
      borderColor: theme.backgroundColors.bgl0,
      borderWidth: scale(1),
      borderRadius: scale(12),
    },
  });

export default style;
