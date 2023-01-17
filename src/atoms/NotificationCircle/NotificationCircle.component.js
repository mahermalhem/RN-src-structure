import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './NotificationCircle.style';
import {useTheme} from '_styles/theming';
import CustomText from '../CustomText/CustomText.component';

const NotificationCircle = props => {
  const themes = useTheme();
  const {count, overrideStyle, overrideTextStyle, overrideFont} = props;
  const {container, textStyle} = styles(themes);
  return (
    <View style={[container, overrideStyle]}>
      <CustomText
        text={count}
        textFontStyle={overrideFont ?? 'caption2Bold'}
        overrideStyle={[textStyle, overrideTextStyle]}
      />
    </View>
  );
};

NotificationCircle.propTypes = {
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  overrideStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  overrideTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  overrideFont: PropTypes.string,
};
NotificationCircle.defaultProps = {
  overrideStyle: {},
  overrideTextStyle: {},
  count: 0,
  overrideFont: '',
};

export default NotificationCircle;
