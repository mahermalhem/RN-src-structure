import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import PropTypes from 'prop-types';

import {useTheme} from '_styles/theming';
import styles from './CustomClickableIcon.style';
import NavigationServices from '_navigations/NavigationServices';

import BackArrow from '_assets/icons/backArrow.png';

const CustomClickableIcon = props => {
  const {overrideStyle, icon, onPress, overrideIconStyle, disabled} = props;
  const theme = useTheme();
  const {container, iconStyle} = styles(theme);

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={disabled ? 0 : 1}
      style={[container, overrideStyle]}
      onPress={() => (onPress ? onPress() : NavigationServices.goBack())}>
      <Image
        source={icon ? icon : BackArrow}
        resizeMode={'contain'}
        style={[iconStyle, overrideIconStyle]}
      />
    </TouchableOpacity>
  );
};

CustomClickableIcon.propTypes = {
  overrideStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  overrideIconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
};

CustomClickableIcon.defaultProps = {
  onPress: null,
  icon: null,
  overrideStyle: null,
  overrideIconStyle: null,
  disabled: false,
};

export default CustomClickableIcon;
