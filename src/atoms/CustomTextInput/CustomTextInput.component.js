import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './CustomTextInput.style';
import PropTypes from 'prop-types';
import {useTheme} from '_styles/theming';
import {RoundedContainer} from '_atoms';

const CustomTextInput = props => {
  const theme = useTheme();
  const {
    leftChild,
    rightChild,
    handleChange,
    inputValue,
    overrideInputStyle,
    overrideContainerStyle,
    error,
    placeholder,
    keyboardType,
    secureTextEntry,
    disabled,
    hasReturnKeyType,
    returnKeyType,
    onBlur,
    onFocus,
    onSubmitEditing,
    refProp,
    overridePlaceholderTextColor,
    defaultValue,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const {
    inputContainer,
    focusedInput,
    inputStyle,
    errorStyle,
    disabledInput,
    startSide,
  } = styles(theme);

  return (
    <RoundedContainer
      overrideStyle={[
        inputContainer,
        error ? errorStyle : isFocused && focusedInput,
        overrideContainerStyle,
      ]}>
      <View style={startSide}>
        {!!leftChild && leftChild}
        <TextInput
          defaultValue={defaultValue}
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
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          editable={!disabled}
          returnKeyType={hasReturnKeyType ? returnKeyType : undefined}
          onSubmitEditing={onSubmitEditing}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        {!!rightChild && rightChild}
      </View>
    </RoundedContainer>
  );
};

CustomTextInput.propTypes = {
  handleChange: PropTypes.func,
  inputValue: PropTypes.string,
  overrideInputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  overrideContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  error: PropTypes.bool,
  leftChild: PropTypes.element,
  rightChild: PropTypes.element,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  disabled: PropTypes.bool,
  returnKeyType: PropTypes.oneOf(['next', 'done', 'default']),
  hasReturnKeyType: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  overridePlaceholderTextColor: PropTypes.string,
  onSubmitEditing: PropTypes.func,
  refProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any}),
  ]),
  defaultValue: PropTypes.string,
};

CustomTextInput.defaultProps = {
  handleChange: () => {},
  inputValue: undefined,
  overrideInputStyle: {},
  overrideContainerStyle: {},
  error: null,
  leftChild: null,
  rightChild: null,
  placeholder: 'Enter text here',
  keyboardType: 'default',
  secureTextEntry: false,
  disabled: false,
  returnKeyType: undefined,
  hasReturnKeyType: false,
  onBlur: () => {},
  onFocus: () => {},
  onSubmitEditing: () => {},
  refProp: null,
  overridePlaceholderTextColor: null,
  defaultValue: '',
};

export default CustomTextInput;
