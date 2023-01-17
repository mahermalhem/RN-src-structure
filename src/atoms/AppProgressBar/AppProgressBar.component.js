import React from 'react';
import * as Progress from 'react-native-progress';
import PropTypes from 'prop-types';

import {useTheme} from '_styles/theming';

const AppProgressBar = props => {
  const {width, progress, fillColor, borderRadius, borderWidth, height} = props;
  const {backgroundColors} = useTheme();

  return (
    <Progress.Bar
      color={fillColor}
      borderColor={backgroundColors.bgl0}
      unfilledColor={backgroundColors.bgl0}
      progress={progress}
      width={width}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      height={height}
    />
  );
};

AppProgressBar.defaultProps = {
  width: null,
  borderRadius: 4,
  borderWidth: 0,
  height: 8,
};

AppProgressBar.propTypes = {
  width: PropTypes.number,
  progress: PropTypes.number.isRequired,
  fillColor: PropTypes.string.isRequired,
  borderRadius: PropTypes.number,
  borderWidth: PropTypes.number,
  height: PropTypes.number,
};

export default AppProgressBar;
