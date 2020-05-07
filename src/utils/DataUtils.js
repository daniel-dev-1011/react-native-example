/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import AsyncStorage from '@react-native-community/async-storage';

export const getUserInfo = async () => {
    try {
        const value = await AsyncStorage.getItem('userInfo');
        if (value !== null) {
            return JSON.parse(value) //userData is Object
        } else {

        }
    } catch (error) {
        alert('Failed to retrieve info.')
    }
}

export const saveUserInfo = async (info) => {
    try {
        await AsyncStorage.setItem('userInfo', JSON.stringify(info));
    } catch {
        alert('Failed to save name.')
    }
}

export const deleteData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (error) {
        console.log('error while delete data async: ', error);
        return false;
    }
}

export const getCurrentLang = async () => {
    try {
        const lang = await AsyncStorage.getItem('currentLang')
        if (lang !== null)  {
            return JSON.parse(lang);
        }
    } catch (error) {
        console.log(error)
    }
    return 'en'
}

export const saveCurrentLang = async (currentLang) => {
    try {
        const lang = await AsyncStorage.setItem('currentLang', JSON.stringify(currentLang))
        return lang;
    } catch (error) {
        console.log(error)
    }
    return 'en'
}

export const getImageResource = (nation) => {
    switch (nation) {
        case "ESPAÑOL":
            return require("../images/spain.png")
        case "PORTUGUÊS (BR)":
            return require("../images/brazil.png")
        case "DEUTSCH":
            return require("../images/deutch.png")
        case "POLSKI":
            return require("../images/polski.png")
        case "Български":
            return require("../images/bulgaria.png")
        case "ENGLISH":
            return require("../images/united-kingdom.png")
    }
}

export const getLocalize = (nation) => {
    switch (nation) {
        case "ESPAÑOL":
            return "es";
        case "DEUTSCH":
            return "de";
        case "ENGLISH":
            return "en";
        case "POLSKI":
            return "po";
        case "Български":
            return "bg";
        case "PORTUGUÊS (BR)":
            return "ptR";
    }
}