import React from 'react';

import {useTheme} from '_styles/theming';
import styles from './CountdownTimer.styles';
import CountDown from 'react-native-countdown-component';
import {getTimeDisplay, convertSecondsToDateFormat} from '_utils/countdown';

const CountDownTimer = () => {
  const theme = useTheme();
  const {separatorStyle, timeLabelStyle, digitTxtStyle, digitStyle} =
    styles(theme);

  // 123 seconds => mm:ss
  // 12390 seconds => hh:mm:ss
  // 467000 seconds => dd:hh:mm:ss
  const {timeToShow, timeLabels} = getTimeDisplay(
    convertSecondsToDateFormat(12390),
  );

  return (
    <CountDown
      until={467000}
      showSeparator
      timeToShow={timeToShow}
      timeLabels={timeLabels}
      digitStyle={digitStyle}
      digitTxtStyle={digitTxtStyle}
      timeLabelStyle={timeLabelStyle}
      separatorStyle={separatorStyle}
    />
  );
};

export default CountDownTimer;
