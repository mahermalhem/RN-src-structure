import {Button, Text, I18nManager} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import Config from 'react-native-config';

import {themes, useTheme} from '_styles/theming';

import styles from './Landing.style';
import {changeLanguage, translate} from '_locales/i18n';
import NavigationServices from '_navigations/NavigationServices';
import StackNames from '_navigations/StackNames';
import updateTheme from '_redux/actions/themeActions';
import testApiService from '_services/testApiService/TestApiService.service';

const Landing = () => {
  const storeDispatch = useDispatch();
  const theme = useTheme();
  const [rate, setRate] = useState(null);

  const {textColor} = styles(theme);

  const testAPI = async () => {
    try {
      const res = await testApiService();
      setRate(res?.bpi?.USD?.rate);
    } catch (error) {
      console.log(error);
      alert(JSON.stringify(error));
    }
  };

  useEffect(() => {
    testAPI();
  }, []);

  return (
    <>
      <Text style={textColor}>
        {translate('splash.splashTitle')} - {Config.ENVIRONMENT}
      </Text>
      <Text style={textColor}>API Res - BTC rate - {rate} USD</Text>
      <Button
        title="Go to dashboard"
        onPress={() =>
          NavigationServices.navigateToStack(StackNames.AuthenticatedStack)
        }
      />
      <Button
        title="Change Language"
        onPress={() => changeLanguage(I18nManager.isRTL ? 'en' : 'ar')}
      />
      <Button
        title="Light Theme"
        onPress={() => storeDispatch(updateTheme(themes.default))}
      />
      <Button
        title="Dark Theme"
        onPress={() => storeDispatch(updateTheme(themes.dark))}
      />
      <Button
        title="Other theme"
        onPress={() => storeDispatch(updateTheme(themes.other))}
      />
    </>
  );
};

export default Landing;
