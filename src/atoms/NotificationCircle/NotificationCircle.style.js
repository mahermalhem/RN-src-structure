import {StyleSheet} from 'react-native';
import {scale} from '_styles/scaling';

const style = theme =>
  StyleSheet.create({
    container: {
      width: scale(16),
      height: scale(16),
      backgroundColor: theme.supportingColors.marigold500,
      borderRadius: scale(16),
      justifyContent: 'center',
      alignContent: 'center',
    },
    textStyle: {
      alignSelf: 'center',
      color: theme.backgroundColors.bgl0,
    },
  });

export default style;
