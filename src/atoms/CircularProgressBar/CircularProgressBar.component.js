import React from 'react';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';
import {useTheme} from '_styles/theming';
import styles from './CircularProgressBar.style';

const CircularProgressBar = props => {
  const {progress, fillColor, borderRadius, borderWidth, text, size} = props;
  const theme = useTheme();
  const {progressText} = styles(theme);

  return (
    <Progress.Circle
      showsText
      size={size}
      thickness={2}
      formatText={() => text}
      color={fillColor}
      direction="counter-clockwise"
      borderColor={theme.backgroundColors.bgl0}
      unfilledColor="transparent"
      progress={progress}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      textStyle={progressText}
    />
  );
};

CircularProgressBar.defaultProps = {
  borderRadius: 4,
  borderWidth: 0,
  size: 40,
};

CircularProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  fillColor: PropTypes.string.isRequired,
  borderRadius: PropTypes.number,
  borderWidth: PropTypes.number,
  text: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default CircularProgressBar;
