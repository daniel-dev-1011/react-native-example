/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react';
import MaterialTopTab from '../../navigation/MaterialTopTabNavigation';

export default function MyProfile(props) {
  return (
    <MaterialTopTab navigation={props.navigation} shouldShowProfile={true}/>
  )
}