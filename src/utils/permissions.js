import React, { Component ,useState,useEffect,} from 'react';
import { Dimensions, Platform, PixelRatio,PermissionsAndroid,Share} 
  from 'react-native';
import { strings } from './I18n';
import { COLOR } from './constants/COLORS';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext();

export const pickPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permissions for write access',
          message: 'Give permission to your storage to write a file',
          buttonPositive: 'ok',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        console.log('You can use WRITE_EXTERNAL_STORAGE');

      } else {
        console.log('permission denied');
        return;
      }
    } catch (err) {
      console.warn(err);
      return;
    }
  }
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permissions for write access',
          message: 'Give permission to your storage to write a file',
          buttonPositive: 'ok',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        console.log('You can use READ_EXTERNAL_STORAGE');
      } else {
        console.log('permission denied');
        return;
      }
    } catch (err) {
      console.warn(err);
      return;
    }
  }
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Permissions for RECORD_AUDIO',
          message: 'Give permission to your storage to RECORD_AUDIO',
          buttonPositive: 'ok',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use RECORD_AUDIO');
      } else {
        console.log('permission denied RECORD_AUDIO');
        return;
      }
    } catch (err) {
      console.warn(err);
      return;
    }
  }
}



