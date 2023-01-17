import React from 'react';
import {View, Image} from 'react-native';

import PropTypes from 'prop-types';
import styles from './StatusTextEntity.style';

import {CustomText} from '_atoms';

const StatusTextEntity = props => {
  const {icon, color, title} = props;
  const {titleContainer, iconContainer, titleStyle, iconStyle} = styles(color);
  return (
    <View style={titleContainer}>
      <View style={iconContainer}>
        <Image source={icon} style={iconStyle} />
      </View>
      <CustomText
        overrideStyle={titleStyle}
        text={title.toUpperCase()}
        textFontStyle={'caption2Bold'}
      />
    </View>
  );
};

StatusTextEntity.propTypes = {
  icon: PropTypes.number,
  color: PropTypes.string,
  title: PropTypes.string,
};

StatusTextEntity.defaultProps = {
  icon: undefined,
  color: '#000000',
  title: '',
};

export default StatusTextEntity;
