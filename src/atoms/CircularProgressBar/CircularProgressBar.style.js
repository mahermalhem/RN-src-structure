import {StyleSheet} from 'react-native';
import {TextStyle} from '_utils/typography';

const ProgressStyles = theme =>
  StyleSheet.create({
    progressText: {
      ...TextStyle.caption1,
      color: theme.neutralColors.black2,
    },
  });

export default ProgressStyles;
