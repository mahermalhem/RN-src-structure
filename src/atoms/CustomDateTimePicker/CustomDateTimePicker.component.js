import {Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import PropTypes from 'prop-types';
import CustomText from '../CustomText/CustomText.component';
import {useTheme} from '_styles/theming';
import styles from './CustomDateTimePicker.style';

const CustomDateTimePicker = props => {
  const {
    date,
    minimumDate,
    maximumDate,
    placeholder,
    onDateSelected,
    error,
    overrideContainerStyle,
    overrideTextStyle,
    icon,
    disabled,
    overrideIconStyle,
  } = props;
  const [showPicker, setShowPicker] = useState(false);
  const theme = useTheme();
  const formatDate = () => {
    if (date && typeof date === 'string') {
      if (moment(date, 'DD/MM/YYYY').isValid()) {
        return date;
      } else {
        return date + ' (Invalid Date)';
      }
    } else if (date && typeof date === 'object') {
      return moment(date).locale('en').format('DD/MM/YYYY');
    } else {
      return placeholder;
    }
  };

  const getDate = () => {
    const isValid = moment(date, 'DD/MM/YYYY').isValid();
    if (isValid) {
      return new Date(moment(date, 'DD/MM/YYYY').locale('en').toDate());
    }
  };

  const {
    container,
    errorStyle,
    focusedContainer,
    textStyle,
    disabledTextStyle,
    iconStyle,
  } = styles(theme);

  return (
    <TouchableOpacity
      style={[
        container,
        error ? errorStyle : showPicker && focusedContainer,
        overrideContainerStyle,
      ]}
      disabled={disabled}
      onPress={() => setShowPicker(true)}>
      <CustomText
        style={[disabled ? disabledTextStyle : textStyle, overrideTextStyle]}
        text={formatDate()}
        textFontStyle={'body'}
      />
      {icon && (
        <Image
          source={icon}
          resizeMode="contain"
          style={[iconStyle, overrideIconStyle]}
        />
      )}
      <DateTimePicker
        {...props}
        isVisible={showPicker}
        mode="date"
        date={date ? getDate() : new Date()}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        onConfirm={selectedDate => {
          setShowPicker(false);
          onDateSelected(selectedDate);
        }}
        onCancel={() => {
          setShowPicker(false);
        }}
      />
    </TouchableOpacity>
  );
};

CustomDateTimePicker.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  placeholder: PropTypes.string,
  minimumDate: PropTypes.instanceOf(Date),
  maximumDate: PropTypes.instanceOf(Date),
  onDateSelected: PropTypes.func,
  error: PropTypes.string,
  overrideContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  overrideTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  overrideIconStyle: PropTypes.object,
};

CustomDateTimePicker.defaultProps = {
  placeholder: 'Select Date',
  onDateSelected: () => {},
  minimumDate: new Date(new Date().setDate(new Date().getDate() - 29930)),
  maximumDate: new Date(new Date().setDate(new Date().getDate() + 365)),
  disabled: false,
};

export default CustomDateTimePicker;
