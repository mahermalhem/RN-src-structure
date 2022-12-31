import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {setI18nConfig} from '_locales/i18n';
import {retrieveSecureData, storageKeys} from '_utils/localStorage';
import NavigationServices from '_navigations/NavigationServices';
import Scenes from '_navigations/Scenes';

const Splash = () => {
  const handleLanguage = async () => {
    const lang = await retrieveSecureData(storageKeys.selectedLanguage);
    setI18nConfig(lang);
  };

  const handleRedirection = async () => {
    NavigationServices.navigate(Scenes.landing);
  };

  useFocusEffect(
    useCallback(() => {
      // SplashScreen.hide();
      setTimeout(() => {
        handleRedirection();
      }, 1500);
      handleLanguage();
    }, []),
  );

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;
