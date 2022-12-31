import React, { Component ,useState,useEffect,} from 'react';
import { Dimensions, Platform, PixelRatio,PermissionsAndroid,Share} 
  from 'react-native';

export const shareItem = async (msg) => {
  try {
      const result = await Share.share({
          ...Platform.select({
              ios: {
                  //message: 'Have a look on : ',
                  url: msg
              },
              android: {
                  message: msg
              }
          }),
          title: 'Wow, did you see that?'
      });
      if (result.action === Share.sharedAction) {
          if (result.activityType) {
              // shared with activity type of result.activityType
          } else {
              // shared
              console.log('shared')
          }
      } else if (result.action === Share.dismissedAction) {
          // dismissed
          console.log('dismissed share')
      }
  } catch (error) {
      alert(error.message);
  }
}
