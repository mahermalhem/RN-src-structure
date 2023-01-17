import {StyleSheet} from 'react-native';

const textStyle = theme =>
  StyleSheet.create({
    mainText: {
      textAlign: 'left',
      color: theme.neutralColors.black2,
    },
  });

export default textStyle;
