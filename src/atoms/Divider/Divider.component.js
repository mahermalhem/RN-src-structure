import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './Divider.style';
import {useTheme} from '_styles/theming';

const Divider = props => {
  const themes = useTheme();
  const {overrideStyle} = props;
  const {divider} = styles(themes);
  return <View style={[divider, overrideStyle]} />;
};

Divider.propTypes = {
  overrideStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
Divider.defaultProps = {
  overrideStyle: {},
};

export default Divider;
