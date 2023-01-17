import {StyleSheet} from 'react-native';
import {TextStyle} from '_utils/typography';
import {moderateScale, scale, verticalScale} from '_styles/scaling';

const styles = theme =>
  StyleSheet.create({
    separatorStyle: {
      ...TextStyle.title1Bold,
      fontSize: moderateScale(25),
      marginBottom: verticalScale(20),
      color: theme?.primaryColors?.coffee800,
    },
    timeLabelStyle: {
      ...TextStyle.caption2SemiBold,
      fontSize: moderateScale(11),
      color: theme?.supportingColors?.marigold500,
    },
    digitTxtStyle: {
      ...TextStyle.title1Bold,
      fontSize: moderateScale(35),
      color: theme?.primaryColors?.coffee800,
    },
    digitStyle: {
      width: scale(45),
      height: verticalScale(42),
      marginBottom: verticalScale(10),
    },
  });

export default styles;
