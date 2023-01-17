import {Switch} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '_styles/theming';

const CustomSwitch = props => {
  const {
    falseTrackColor,
    trueTrackColor,
    disabled,
    disabledColor,
    thumbColor,
    toggleSwitch,
    switchValue,
    overrideStyle,
  } = props;

  const theme = useTheme();

  const colorThumb = disabled
    ? disabledColor
    : thumbColor
    ? thumbColor
    : theme?.backgroundColors?.bgl0;
  const falseColor = falseTrackColor
    ? falseTrackColor
    : theme?.supportingColors?.earlGrey200;
  const trueColor = trueTrackColor
    ? trueTrackColor
    : theme?.supportingColors?.londonRain500;

  return (
    <Switch
      trackColor={{false: falseColor, true: trueColor}}
      thumbColor={colorThumb}
      onValueChange={toggleSwitch}
      value={switchValue}
      style={overrideStyle}
    />
  );
};

CustomSwitch.propTypes = {
  falseTrackColor: PropTypes.string,
  trueTrackColor: PropTypes.string,
  disabled: PropTypes.bool,
  disabledColor: PropTypes.string,
  thumbColor: PropTypes.string,
  toggleSwitch: PropTypes.func,
  switchValue: PropTypes.bool,
  overrideStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

CustomSwitch.defaultProps = {
  disabled: false,
};

export default CustomSwitch;
