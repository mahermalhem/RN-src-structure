import {View, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './CircularCardView.style';

import {useTheme, themes} from '_styles/theming';
import CustomText from '../CustomText/CustomText.component';
import {getFirstAndLastInitials} from '_utils/helpers';

const CircularCardView = props => {
  const {
    type,
    title,
    overrideStyle,
    overrideTextStyle,
    overrideFontType,
    icon,
    overrideIconStyle,
    showStatus,
    statusColor,
  } = props;
  const theme = useTheme();

  const {container, textStyle, iconStyle, statusView} = styles(theme);

  return (
    <View style={[container, overrideStyle]}>
      {type == 'Text' ? (
        <CustomText
          text={getFirstAndLastInitials(title)}
          overrideStyle={[textStyle, overrideTextStyle]}
          textFontStyle={
            overrideFontType ? overrideFontType : 'callout1SemiBold'
          }
        />
      ) : (
        <Image
          source={icon}
          style={[iconStyle, overrideIconStyle]}
          resizeMode={'contain'}
        />
      )}
      {showStatus && (
        <View style={[statusView, {backgroundColor: statusColor}]} />
      )}
    </View>
  );
};

CircularCardView.propTypes = {
  type: PropTypes.oneOf(['Icon', 'Text']),
  title: PropTypes.string,
  overrideStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  overrideTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  overrideFontType: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
      headers: PropTypes.objectOf(PropTypes.string),
    }),
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.shape({
        uri: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        headers: PropTypes.objectOf(PropTypes.string),
      }),
    ),
  ]),
  overrideIconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  showStatus: PropTypes.bool,
  statusColor: PropTypes.string,
};

CircularCardView.defaultProps = {
  type: 'Text',
  title: '',
  overrideStyle: {},
  overrideTextStyle: null,
  overrideFontType: '',
  overrideIconStyle: {},
  icon: '',
  showStatus: false,
  statusColor: themes.default.pfmColors.positive500,
};

export default CircularCardView;
