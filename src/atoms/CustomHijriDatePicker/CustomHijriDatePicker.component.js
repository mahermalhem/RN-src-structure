import React, {Component} from 'react';
import {View, I18nManager} from 'react-native';
import PropTypes from 'prop-types';

import styles from './CustomHijriDatePicker.style';
import {HIJRI_END_YEAR, HIJRI_START_YEAR} from '_utils/constants';
import {Dropdown} from '_molecules';
import {toGregorian, fromGregorian} from './UmmaAlQuraCalendar';
import {translate} from '_locales/i18n';
import {convertArabicNumberToEnglish} from '_utils/helpers';

const initialState = {
  day: null,
  month: null,
  year: null,
  defaultDay: null,
  defaultMonth: null,
  defaultYear: null,
  setDayFirstTime: false,
  setMonthFirstTime: false,
  setYearFirstTime: false,
};

class CustomHijriDatePicker extends Component {
  state = initialState;

  componentDidMount() {
    const {defaultValue, value} = this.props;
    if (defaultValue && !value) {
      const defaultValueArray = defaultValue.split('/');
      const day =
        defaultValueArray[2].length > 1
          ? defaultValueArray[2]
          : '0' + defaultValueArray[2];
      const month =
        defaultValueArray[1].length > 1
          ? defaultValueArray[1]
          : '0' + defaultValueArray[1];
      this.setState({
        defaultDay: day,
        defaultMonth: month,
        defaultYear: defaultValueArray[0],
        day: day,
        month: month,
        year: defaultValueArray[0],
      });
    }
    if (value) {
      const valueArray = value.split('/');
      const day =
        valueArray[0].length > 1 ? valueArray[0] : '0' + valueArray[0];
      const month =
        valueArray[1].length > 1 ? valueArray[1] : '0' + valueArray[1];
      const year = valueArray[2];
      this.setDay(day);
      this.setMonth(month);
      this.setYear(year);
      this.setState({
        defaultDay: day,
        defaultMonth: month,
        defaultYear: year,
      });
    }
  }

  setDay(value) {
    const {gregorianMaxDate, gregorianMinDate} = this.props;
    const {month, year} = this.state;
    this.setState({
      day: value,
    });

    if (month && year) {
      const gregorianDate = toGregorian({
        year: Number(year),
        month: Number(month),
        day: Number(value),
      });
      if (gregorianMaxDate && new Date(gregorianDate) > gregorianMaxDate) {
        this.resetDate(fromGregorian(gregorianMaxDate));
      } else if (
        gregorianMinDate &&
        new Date(gregorianDate) < gregorianMinDate
      ) {
        const hijriDate = fromGregorian(gregorianMinDate);
        hijriDate.day += 1;
        this.resetDate(hijriDate);

        this.state.setDayFirstTime
          ? this.props.displayErrorMsg && alert(this.props.displayErrorMsg)
          : this.setState({setDayFirstTime: true});
      } else {
        this.props.onDateSelect({
          year: year,
          month: month,
          day: value,
          gregorianDate: {
            year: gregorianDate.getFullYear(),
            month: gregorianDate.getMonth() + 1,
            day: gregorianDate.getDate(),
          },
        });
      }
    }
  }

  setMonth(value) {
    if (!value) {
      return;
    }
    const {gregorianMaxDate, gregorianMinDate} = this.props;
    const {day, year} = this.state;
    this.setState({
      month: value,
    });
    if (day && year) {
      const gregorianDate = toGregorian({
        year: Number(year),
        month: Number(value),
        day: Number(day),
      });
      if (gregorianMaxDate && new Date(gregorianDate) > gregorianMaxDate) {
        this.resetDate(fromGregorian(gregorianMaxDate));
      } else if (
        gregorianMinDate &&
        new Date(gregorianDate) < gregorianMinDate
      ) {
        const hijriDate = fromGregorian(gregorianMinDate);
        hijriDate.day += 1;
        this.resetDate(hijriDate);

        this.state.setMonthFirstTime
          ? this.props.displayErrorMsg && alert(this.props.displayErrorMsg)
          : this.setState({setMonthFirstTime: true});
      } else {
        this.props.onDateSelect({
          year: this.state.year,
          month: value,
          day: this.state.day,
          gregorianDate: {
            year: gregorianDate.getFullYear(),
            month: gregorianDate.getMonth() + 1,
            day: gregorianDate.getDate(),
          },
        });
      }
    }
  }

  setYear(value) {
    const {gregorianMaxDate, gregorianMinDate} = this.props;
    const {day, month} = this.state;
    const unixMinDate = Date.parse(gregorianMinDate);
    let date = new Date(unixMinDate);
    let dateConverted = date.setHours(0);
    this.setState({
      year: value,
    });
    if (month && day) {
      const gregorianDate = toGregorian({
        year: Number(value),
        month: Number(month),
        day: Number(day),
      });
      if (gregorianMaxDate && new Date(gregorianDate) > gregorianMaxDate) {
        this.resetDate(fromGregorian(gregorianMaxDate));
      } else if (dateConverted && gregorianDate.getTime() < dateConverted) {
        const hijriDate = fromGregorian(new Date(dateConverted));
        hijriDate.day += 1;
        this.resetDate(hijriDate);

        this.state.setYearFirstTime
          ? this.props.displayErrorMsg && alert(this.props.displayErrorMsg)
          : this.setState({setYearFirstTime: true});
      } else {
        this.props.onDateSelect({
          year: value,
          month: this.state.month,
          day: this.state.day,
          gregorianDate: {
            year: gregorianDate.getFullYear(),
            month: gregorianDate.getMonth() + 1,
            day: gregorianDate.getDate(),
          },
        });
      }
    }
  }

  resetDate(hijriDate) {
    const dayStr =
      hijriDate.day.toString().length > 1
        ? hijriDate.day.toString()
        : '0' + hijriDate.day;
    const monthStr =
      hijriDate.month.toString().length > 1
        ? hijriDate.month.toString()
        : '0' + hijriDate.month;
    const yearStr = '' + hijriDate.year;
    this.setState({
      day: dayStr,
      month: monthStr,
      year: yearStr,
    });
  }

  getIndex(element) {
    return element.value === this;
  }

  render() {
    const {day, month, year, defaultDay, defaultMonth, defaultYear} =
      this.state;

    // const {value} = this.props;

    const {
      container,
      innerContainerDay,
      innerContainerMonth,
      innerContainerYear,
    } = styles;

    const {value} = this.props;
    let displayedDefaultD;
    let displayedDefaultM;
    let displayedDefaultY;

    if (value) {
      const valueArray = value.split('/');
      const valueDay =
        valueArray[0].length > 1 ? valueArray[0] : '0' + valueArray[0];
      const valueMonth =
        valueArray[1].length > 1 ? valueArray[1] : '0' + valueArray[1];
      displayedDefaultD = valueDay;
      displayedDefaultM = valueMonth;
      displayedDefaultY = valueArray[2];
    } else if (defaultDay) {
      displayedDefaultD = defaultDay;
      displayedDefaultM = defaultMonth;
      displayedDefaultY = defaultYear;
    } else {
      const currentDate = new Date();
      const currentHijriDate = fromGregorian(currentDate);
      displayedDefaultD =
        currentHijriDate.day.toString().length === 1
          ? '0' + currentHijriDate.day.toString()
          : currentHijriDate.day.toString();
      displayedDefaultM = currentHijriDate.month.toString();
      displayedDefaultY = currentHijriDate.year.toString();
    }

    let months = [
      {
        label: translate('components.month1'),
        value: '01',
        key: 1,
      },
      {
        label: translate('components.month2'),
        value: '02',
        key: 2,
      },
      {
        label: translate('components.month3'),
        value: '03',
        key: 3,
      },
      {
        label: translate('components.month4'),
        value: '04',
        key: 4,
      },
      {
        label: translate('components.month5'),
        value: '05',
        key: 5,
      },
      {
        label: translate('components.month6'),
        value: '06',
        key: 6,
      },
      {
        label: translate('components.month7'),
        value: '07',
        key: 7,
      },
      {
        label: translate('components.month8'),
        value: '08',
        key: 8,
      },
      {
        label: translate('components.month9'),
        value: '09',
        key: 9,
      },
      {
        label: translate('components.month10'),
        value: '10',
        key: 10,
      },
      {
        label: translate('components.month11'),
        value: '11',
        key: 11,
      },
      {
        label: translate('components.month12'),
        value: '12',
        key: 12,
      },
    ];

    let years = [];
    for (
      let yearCount = HIJRI_END_YEAR;
      yearCount >= HIJRI_START_YEAR;
      yearCount--
    ) {
      years.push({
        key: yearCount,
        label: I18nManager.isRTL
          ? convertArabicNumberToEnglish(yearCount.toString())
          : yearCount.toString(),
        value: yearCount.toString(),
      });
    }

    let days = [];
    for (let dayCount = 1; dayCount <= 30; dayCount++) {
      days.push({
        key: dayCount,
        label:
          dayCount.toString().length === 1
            ? I18nManager.isRTL
              ? convertArabicNumberToEnglish('0' + dayCount.toString())
              : '0' + dayCount.toString()
            : I18nManager.isRTL
            ? convertArabicNumberToEnglish(dayCount.toString())
            : dayCount.toString(),
        value:
          dayCount.toString().length === 1
            ? '0' + dayCount.toString()
            : dayCount.toString(),
      });
    }
    return (
      <View style={container}>
        <View style={innerContainerDay}>
          <Dropdown
            items={days}
            onValueChange={values => {
              values && this.setDay(values);
            }}
            onDonePress={() => {
              !day && this.setDay(displayedDefaultD);
            }}
            value={day ? day : displayedDefaultD}
            placeholder={translate('components.day')}
            title=""
            disabled={this.props.disabled}
            isError={!!this.props.displayErrorMsg}
          />
        </View>
        <View style={innerContainerMonth}>
          <Dropdown
            items={months}
            onValueChange={values => {
              this.setMonth(values);
            }}
            onDonePress={() => {
              !month &&
                this.setMonth(months[Number(displayedDefaultM) - 1].value);
            }}
            value={month ? month : displayedDefaultM.toString()}
            placeholder={translate('components.month')}
            title=""
            disabled={this.props.disabled}
            isError={!!this.props.displayErrorMsg}
          />
        </View>
        <View style={innerContainerYear}>
          <Dropdown
            items={years}
            onValueChange={values => {
              this.setYear(values);
            }}
            onDonePress={() => {
              !year && this.setYear(displayedDefaultY);
            }}
            value={year ? year : displayedDefaultY}
            placeholder={translate('components.year')}
            title=""
            disabled={this.props.disabled}
            isError={!!this.props.displayErrorMsg}
          />
        </View>
      </View>
    );
  }
}

CustomHijriDatePicker.propTypes = {
  onDateSelect: PropTypes.func,
  displayErrorMsg: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  gregorianMaxDate: PropTypes.any,
  gregorianMinDate: PropTypes.any,
  disabled: PropTypes.bool,
};

CustomHijriDatePicker.defaultProps = {
  defaultValue: '',
  onDateSelect: () => {},
  disabled: false,
};

export default CustomHijriDatePicker;
