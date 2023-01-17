import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './CustomButton.style';

import {useTheme} from '_styles/theming';
import CustomText from '../CustomText/CustomText.component';

const CustomButton = props => {
  const {
    type,
    title,
    iconLeft,
    iconRight,
    overrideStyle,
    overrideTextStyle,
    overrideRightIconStyle,
    overrideLeftIconStyle,
    overrideFontType,
    onPress,
    size,
    disabled,
  } = props;

  const theme = useTheme();

  const {container, iconStyle} = styles(theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles(theme)[type],
        styles(theme)[size],
        container,
        overrideStyle,
      ]}
      disabled={disabled}>
      {!!iconLeft && (
        <Image
          source={iconLeft}
          resizeMode={'contain'}
          style={[
            iconStyle,
            styles(theme)[`tint${type}`],
            overrideLeftIconStyle,
          ]}
        />
      )}
      <CustomText
        text={title}
        overrideStyle={[styles(theme)[`text${type}`], overrideTextStyle]}
        textFontStyle={overrideFontType ? overrideFontType : 'callout1SemiBold'}
      />
      {!!iconRight && (
        <Image
          source={iconRight}
          resizeMode={'contain'}
          style={[
            iconStyle,
            styles(theme)[`tint${type}`],
            overrideRightIconStyle,
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  type: PropTypes.oneOf([
    'Primary',
    'Secondary',
    'TertiaryWhite',
    'TertiaryDark',
    'Destructive',
  ]),
  title: PropTypes.string,
  iconLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  overrideStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  overrideRightIconStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  onPress: PropTypes.func.isRequired,
  size: PropTypes.oneOf([
    'extraSmall',
    'small',
    'medium',
    'smallWH',
    'mediumWH',
    'default',
  ]),
  overrideTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
  overrideFontType: PropTypes.string,
  overrideLeftIconStyle: PropTypes.object,
};

CustomButton.defaultProps = {
  type: 'Primary',
  title: 'Button Label',
  iconLeft: '',
  iconRight: '',
  overrideStyle: {},
  overrideRightIconStyle: null,
  onPress: () => {},
  size: 'default',
  overrideTextStyle: null,
  disabled: false,
  overrideFontType: '',
  overrideLeftIconStyle: {},
};

export default CustomButton;
