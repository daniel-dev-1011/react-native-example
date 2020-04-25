/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import AsyncStorage from '@react-native-community/async-storage';

export const getUserInfo = async () => {
    try {
        const value = await AsyncStorage.getItem('userInfo');
        if (value !== null) {
            return JSON.parse(value) //userData is Object
        } else {
            // alert('Failed to retrieve info.')
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