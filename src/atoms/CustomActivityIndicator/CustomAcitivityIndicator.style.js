import {StyleSheet} from 'react-native';
import {scale} from '_styles/scaling';

const styles = () =>
  StyleSheet.create({
    loaderStyle: {
      width: scale(100),
      height: scale(100),
    },
  });

export default styles;
