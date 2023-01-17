import React from 'react';
import {Text} from 'react-native';

import PropTypes from 'prop-types';

import {useTheme} from '_styles/theming';
import styles from './CustomText.style';
import {TextStyle} from '_utils/typography';

const CustomText = props => {
  const theme = useTheme();
  const {mainText} = styles(theme);
  const {text, overrideStyle, textFontStyle, fontScaling} = props;

  return (
    <Text
      {...props}
      style={[TextStyle[textFontStyle], mainText, overrideStyle]}
      allowFontScaling={fontScaling}>
      {text}
    </Text>
  );
};

CustomText.propTypes = {
  text: PropTypes.string,
  overrideStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textFontStyle: PropTypes.string,
  fontScaling: PropTypes.bool,
};

CustomText.defaultProps = {
  text: '',
  overrideStyle: {},
  textFontStyle: 'largeTitle',
  fontScaling: false,
};

export default CustomText;
