import React from 'react';
import {Dimensions} from 'react-native';
import {scale, verticalScale} from '_styles/scaling';
import PropTypes from 'prop-types';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import styles from './PinInput.style';
import {useTheme} from '_styles/theming';

const PinInput = props => {
  const theme = useTheme();
  const {
    isError,
    onPinChange,
    inputProps,
    cellSpacing,
    overrideContainerStyle,
    overrideErrorStyle,
    overrideDefaultStyle,
    overrideFocusedStyle,
    pin,
    pinInputHeight,
    autoFocus,
    refProp,
  } = props;

  const {defaultStyle, focusedStyle, errorStyle, containerStyle} = styles(
    pinInputHeight,
    theme,
  );

  const cellStyle = isError
    ? [errorStyle, overrideErrorStyle]
    : [defaultStyle, overrideDefaultStyle];

  const testRegex = (text, pattern) => {
    if (text.length === 0) {
      return true;
    } else {
      const regex = new RegExp(pattern).test(text);
      return regex;
    }
  };

  const convertArabicNumberToEnglish = number => {
    return number
      .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
        return d.charCodeAt(0) - 1632;
      })
      .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
        return d.charCodeAt(0) - 1776;
      });
  };

  const updateCodeValue = val => {
    val = convertArabicNumberToEnglish(val);
    if (testRegex(val, /^[0-9]*$/)) {
      onPinChange(val);
    }
  };

  return (
    <SmoothPinCodeInput
      {...props}
      cellStyle={cellStyle}
      autoFocus={autoFocus}
      cellStyleFocused={[focusedStyle, overrideFocusedStyle]}
      cellSize={Dimensions.get('window').width / 5.5}
      cellSpacing={cellSpacing}
      onTextChange={val => {
        updateCodeValue(val);
      }}
      value={pin}
      keyboardType="number-pad"
      containerStyle={[overrideContainerStyle, containerStyle]}
      ref={refProp}
      inputProps={inputProps}
      codeLength={4}
    />
  );
};

PinInput.propTypes = {
  isError: PropTypes.bool,
  onPinChange: PropTypes.func,
  inputProps: PropTypes.any,
  cellSpacing: PropTypes.number,
  overrideContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  overrideErrorStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  overrideDefaultStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  overrideFocusedStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  pin: PropTypes.string,
  pinInputHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoFocus: PropTypes.bool,
  refProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any}),
  ]),
};

PinInput.defaultProps = {
  isError: false,
  onPinChange: () => {},
  cellSpacing: scale(10),
  pin: '',
  pinInputHeight: verticalScale(51),
  autoFocus: true,
  refProp: null,
};

export default PinInput;
