import {TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './CustomTextArea.style';
import PropTypes from 'prop-types';
import {useTheme} from '_styles/theming';
import {RoundedContainer} from '_atoms';

const CustomTextArea = props => {
  const theme = useTheme();
  const {
    handleChange,
    inputValue,
    overrideInputStyle,
    overrideContainerStyle,
    error,
    placeholder,
    disabled,
    onBlur,
    onFocus,
    refProp,
    overridePlaceholderTextColor,
    numberOfLines,
    maxLength,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const {inputContainer, focusedInput, inputStyle, errorStyle, disabledInput} =
    styles(theme);

  return (
    <RoundedContainer
      overrideStyle={[
        inputContainer,
        error ? errorStyle : isFocused && focusedInput,
        overrideContainerStyle,
      ]}>
      <TextInput
        ref={refProp}
        {...props}
        onFocus={() => {
          setIsFocused(true);
          onFocus();
        }}
        onBlur={e => {
          setIsFocused(false);
          onBlur(e);
        }}
        allowFontScaling={false}
        onChangeText={handleChange}
        value={inputValue}
        style={[disabled ? disabledInput : inputStyle, overrideInputStyle]}
        placeholder={placeholder}
        placeholderTextColor={
          overridePlaceholderTextColor ?? theme?.neutralColors?.gray200
        }
        editable={!disabled}
        autoCapitalize={'none'}
        autoCorrect={false}
        multiline={true}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
      />
    </RoundedContainer>
  );
};

CustomTextArea.propTypes = {
  handleChange: PropTypes.func,
  inputValue: PropTypes.string,
  overridePlaceholderTextColor: PropTypes.string,
  numberOfLines: PropTypes.number,
  overrideInputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  overrideContainerStyle: PropTypes.oneOfType([PropTypes.object]),
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  refProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any}),
  ]),
  maxLength: PropTypes.number,
};

CustomTextArea.defaultProps = {
  handleChange: () => {},
  inputValue: undefined,
  overridePlaceholderTextColor: null,
  numberOfLines: 5,
  overrideInputStyle: {},
  overrideContainerStyle: {},
  error: null,
  placeholder: 'Enter text here',
  disabled: false,
  onBlur: () => {},
  onFocus: () => {},
  onSubmitEditing: () => {},
  refProp: null,
  maxLength: null,
};

export default CustomTextArea;
