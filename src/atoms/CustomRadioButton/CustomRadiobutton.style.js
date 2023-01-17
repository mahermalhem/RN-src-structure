import {StyleSheet} from 'react-native';
import {scale} from '_styles/scaling';

const styles = theme =>
  StyleSheet.create({
    container: {
      width: scale(24),
      height: scale(24),
      borderRadius: scale(12),
      borderWidth: scale(1),
      borderColor: theme?.supportingColors?.londonRain600,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme?.backgroundColors?.bgl0,
    },
    innerCircle: {
      width: scale(16),
      height: scale(16),
      borderRadius: scale(8),
      backgroundColor: theme?.supportingColors?.londonRain600,
    },
  });

export default styles;
