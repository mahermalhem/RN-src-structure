import React, {useEffect, useRef, useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import ReactNativePinView from 'react-native-pin-view';

import PropTypes from 'prop-types';

import styles from './Passcode.style';
import {useTheme} from '_styles/theming';

import backspace from '_assets/icons/backSpace.png';
import {TextStyle} from '_utils/typography';

const PassCode = props => {
  const pinView = useRef(null);
  const [enteredPin, setEnteredPin] = useState('');
  const themes = useTheme();

  const {onFulfill, pinLength} = props;

  useEffect(() => {
    if (enteredPin.length === pinLength) {
      onFulfill(enteredPin);
    }
  }, [enteredPin]);

  const {
    inputAreaStyle,
    buttonViewStyle,
    inputViewFilledStyle,
    deleteIcon,
    buttonAreaStyle,
    buttonTextStyle,
    inputViewEmptyStyle,
  } = styles(themes);

  return (
    <ReactNativePinView
      inputSize={16}
      ref={pinView}
      activeOpacity={0.5}
      pinLength={pinLength}
      onValueChange={value => setEnteredPin(value)}
      buttonAreaStyle={buttonAreaStyle}
      inputTextStyle={TextStyle.title2}
      inputAreaStyle={inputAreaStyle}
      inputViewEmptyStyle={inputViewEmptyStyle}
      inputViewFilledStyle={inputViewFilledStyle}
      buttonViewStyle={buttonViewStyle}
      buttonTextStyle={buttonTextStyle}
      customRightButton={
        <TouchableOpacity onPress={() => pinView.current.clear()}>
          <Image style={deleteIcon} source={backspace} />
        </TouchableOpacity>
      }
    />
  );
};

PassCode.propTypes = {
  pinLength: PropTypes.number,
  onFulfill: PropTypes.func,
};

PassCode.defaultProps = {
  pinLength: 5,
  onFulfill: () => {},
};

export default PassCode;
