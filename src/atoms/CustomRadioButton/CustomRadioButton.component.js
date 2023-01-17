import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '_styles/theming';
import styles from './CustomRadiobutton.style';
import PropTypes from 'prop-types';

const CustomRadioButton = props => {
  const {onPress, value, overrideInnerCircle, overrideContainerCircle} = props;
  const theme = useTheme();

  const {container, innerCircle} = styles(theme);
  return (
    <TouchableOpacity
      style={[container, overrideContainerCircle]}
      onPress={onPress}>
      {value && <View style={[innerCircle, overrideInnerCircle]} />}
    </TouchableOpacity>
  );
};

CustomRadioButton.propTypes = {
  onPress: PropTypes.func,
  value: PropTypes.bool,
  overrideInnerCircle: PropTypes.object,
  overrideContainerCircle: PropTypes.object,
};

CustomRadioButton.defaultProps = {
  onPress: () => {},
  value: false,
  overrideInnerCircle: {},
  overrideContainerCircle: {},
};

export default CustomRadioButton;
