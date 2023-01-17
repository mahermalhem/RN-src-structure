import {StyleSheet} from 'react-native';

const styles = theme =>
  StyleSheet.create({
    map: {
      flex: 1,
      backgroundColor: theme?.neutralColors?.gray200,
    },
  });

export default styles;
