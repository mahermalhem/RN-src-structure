import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '_styles/scaling';

const customButtonStyles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: verticalScale(52),
      borderRadius: scale(12),
    },
    iconStyle: {
      marginHorizontal: scale(8),
    },
    extraSmall: {
      width: scale(90),
      height: verticalScale(40),
    },
    small: {
      width: scale(123),
      height: verticalScale(52),
    },
    medium: {
      width: scale(181),
      height: verticalScale(52),
    },
    smallWH: {
      width: scale(123),
      height: verticalScale(40),
    },
    mediumWH: {
      width: scale(181),
      height: verticalScale(40),
    },

    Primary: {
      backgroundColor: theme?.primaryColors?.coffee800,
      color: theme?.backgroundColors?.bgl0,
    },
    textPrimary: {
      color: theme?.backgroundColors?.bgl0,
    },
    tintPrimary: {
      tintColor: theme.supportingColors.coffee400,
    },
    Secondary: {
      backgroundColor: theme?.backgroundColors?.bgl1,
      color: theme?.primaryColors?.coffee800,
      borderWidth: scale(1),
      borderColor: theme?.backgroundColors?.bgl0,
    },
    textSecondary: {
      color: theme?.primaryColors?.coffee800,
    },
    tintSecondary: {
      tintColor: theme.supportingColors.coffee500,
    },
    TertiaryWhite: {
      backgroundColor: 'transparent',
      color: theme?.supportingColors?.marigold500,
    },
    textTertiaryWhite: {
      color: theme?.supportingColors?.marigold500,
    },
    tintTertiaryWhite: {
      tintColor: theme.supportingColors.marigold400,
    },
    TertiaryDark: {
      backgroundColor: theme?.supportingColors?.marigold200,
      color: theme?.supportingColors?.marigold500,
    },
    textTertiaryDark: {
      color: theme?.supportingColors?.marigold500,
    },
    tintTertiaryDark: {
      tintColor: theme?.supportingColors?.marigold500,
    },
    Destructive: {
      backgroundColor: theme?.secondaryColors?.marigold600,
      color: theme?.backgroundColors?.bgl0,
    },
    textDestructive: {
      color: theme?.backgroundColors?.bgl0,
    },
    tintDestructive: {
      tintColor: theme.supportingColors.marigold200,
    },
  });

export default customButtonStyles;
