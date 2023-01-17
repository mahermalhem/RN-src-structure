import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './RoundedContainer.style';
import {useTheme} from '_styles/theming';

const RoundedContainer = props => {
  const themes = useTheme();
  const {overrideStyle, children} = props;
  const {container} = styles(themes);
  return <View style={[container, overrideStyle]}>{children}</View>;
};

RoundedContainer.propTypes = {
  overrideStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
};
RoundedContainer.defaultProps = {
  overrideStyle: {},
  children: null,
};

export default RoundedContainer;
