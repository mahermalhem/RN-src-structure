import React, { Component, useState, useEffect, } from 'react';
import { Dimensions, Platform, PixelRatio, PermissionsAndroid, Share }
    from 'react-native';
import { strings } from './I18n';
import { COLOR } from '../constants/COLORS'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const themes = [
    {
        id: '1',
        name: "Aqua Marine",
        colors: COLOR.LINEAR_GRADIENT_COLOR_DEFAULT,
    },
    {
        id: '2',
        name: "Dark blues",
        colors: COLOR.LINEAR_GRADIENT_COLOR_darkblues,
    },
    {
        id: '3',
        name: "Gries",
        colors: COLOR.LINEAR_GRADIENT_COLOR_geies,
    },
    {
        id: '4',
        name: "Lawrencium",
        colors: COLOR.LINEAR_GRADIENT_COLOR_Lawrencium,
    },
    {
        id: '5',
        name: "ANWER",
        colors: COLOR.LINEAR_GRADIENT_COLOR_ANWER,
    },
    {
        id: '6',
        name: "Blu",
        colors: COLOR.LINEAR_GRADIENT_COLOR_BLU,
    },
    {
        id: '7',
        name: "Piggy pink",
        colors: COLOR.LINEAR_GRADIENT_COLOR_PIGGY_PINK,
    },
    {
        id: '8',
        name: "Blues",
        colors: COLOR.LINEAR_GRADIENT_COLOR_COOL_BLUES,
    },
    {
        id: '9',
        name: "Mega torn",
        colors: COLOR.LINEAR_GRADIENT_COLOR_MEGA_TRON,
    },
    {
        id: '10',
        name: "Moolit asteroid",
        colors: COLOR.LINEAR_GRADIENT_COLOR_MOONLIT_ASTEROID,
    },
    {
        id: '11',
        name: "Evening sunshine",
        colors: COLOR.LINEAR_GRADIENT_COLOR_EveningSunshine,
    },
    {
        id: '12',
        name: "Dark ocean",
        colors: COLOR.LINEAR_GRADIENT_COLOR_DarkOcean,
    },
    {
        id: '13',
        name: "Grade grey",
        colors: COLOR.LINEAR_GRADIENT_COLOR_GRADE_GREY,
    },
    {
        id: '14',
        name: "Cool sky",
        colors: COLOR.LINEAR_GRADIENT_COLOR_CoolSky,
    },
    {
        id: '15',
        name: "Yoda",
        colors: COLOR.LINEAR_GRADIENT_COLOR_Yoda,
    },
    {
        id: '16',
        name: "Memariani",
        colors: COLOR.LINEAR_GRADIENT_COLOR_Memariani,
    },
    {
        id: '18',
        name: "Amin",
        colors: COLOR.LINEAR_GRADIENT_COLOR_Amin,
    },
    {
        id: '17',
        name: "TaranTado",
        colors: COLOR.LINEAR_GRADIENT_COLOR_TaranTado,
    },
    {
        id: '19',
        name: "By design",
        colors: COLOR.LINEAR_GRADIENT_COLOR_ByDesign,
    },
    {
        id: '20',
        name: "Ultra voilet",
        colors: COLOR.LINEAR_GRADIENT_COLOR_UltraVoilet,
    },
    {
        id: '21',
        name: "Burning orange",
        colors: COLOR.LINEAR_GRADIENT_COLOR_BurningOrange,
    },
    {
        id: '22',
        name: "Wiretap",
        colors: COLOR.LINEAR_GRADIENT_COLOR_Wiretap,
    },
    {
        id: '24',
        name: "Sin city red",
        colors: COLOR.LINEAR_GRADIENT_COLOR_SinCityRed,
    },
    {
        id: '26',
        name: "Blue raspberry",
        colors: COLOR.LINEAR_GRADIENT_COLOR_BlueRaspberry,
    },
    {
        id: '27',
        name: "Magic",
        colors: COLOR.LINEAR_GRADIENT_COLOR_Magic,
    },
    {
        id: '28',
        name: "Evening night",
        colors: COLOR.LINEAR_GRADIENT_COLOR_EveningNight,
    },
    {
        id: '29',
        name: "eXpresso",
        colors: COLOR.LINEAR_GRADIENT_COLOR_eXpresso,
    },
    {
        id: '30',
        name: "Slight OceanView",
        colors: COLOR.LINEAR_GRADIENT_COLOR_SlightOceanView,
    },
    {
        id: '31',
        name: "Moon Purple",
        colors: COLOR.LINEAR_GRADIENT_COLOR_MoonPurple,
    },
    {
        id: '32',
        name: "Harvey",
        colors: COLOR.LINEAR_GRADIENT_COLOR_Harvey,
    },
    {
        id: '33',
        name: "Neuromancer",
        colors: COLOR.LINEAR_GRADIENT_COLOR_Neuromancer,
    },
    {
        id: '34',
        name: "AzurLane",
        colors: COLOR.LINEAR_GRADIENT_COLOR_AzurLane,
    },
    {
        id: '35',
        name: "Witching Hour",
        colors: COLOR.LINEAR_GRADIENT_COLOR_WitchingHour,
    },
    {
        id: '36',
        name: "Metapolis",
        colors: COLOR.LINEAR_GRADIENT_COLOR_Metapolis,
    },
    {
        id: '37',
        name: "Kyoo Pal",
        colors: COLOR.LINEAR_GRADIENT_COLOR_KyooPal,
    },
    {
        id: '38',
        name: "Kye Meh",
        colors: COLOR.LINEAR_GRADIENT_COLOR_KyeMeh,
    },
    {
        id: '39',
        name: "Kyoo Tah",
        colors: COLOR.LINEAR_GRADIENT_COLOR_KyooTah,
    },
    {
        id: '40',
        name: "Red Sunset",
        colors: COLOR.LINEAR_GRADIENT_COLOR_RedSunset,
    },
    {
        id: '41',
        name: "Bighead",
        colors: COLOR.LINEAR_GRADIENT_COLOR_Bighead,
    },
    {
        id: '42',
        name: "Titanium",
        colors: COLOR.LINEAR_GRADIENT_COLOR_Titanium,
    },
    {
        id: '43',
        name: "50 Shades of gray",
        colors: COLOR.LINEAR_GRADIENT_COLOR_50ShadesOfGray,
    },
    

]
export const getColorsByThemeId = async (themeIdTemp) => {//i send this as component to refresh the component i am in, others will use new local

    if (themes.filter(eachItem => eachItem.id === themeIdTemp)[0].colors) {
        return themes.filter(eachItem => eachItem.id === themeIdTemp)[0].colors;
    } else {
        return (COLOR.LINEAR_GRADIENT_COLOR_DEFAULT)
    }
};

export const changeTheme = async (themeId) => {//i send this as component to refresh the component i am in, others will use new local
    if (themeId) {
        await AsyncStorage.setItem('themeId', themeId)
    } else {
        await AsyncStorage.setItem('themeId', '1')
    }
};

