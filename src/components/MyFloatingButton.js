/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import { FloatingAction } from "react-native-floating-action";
import React, {useState} from 'react';
import { View } from "react-native";
import CreateBookModal from './CreateBookModal';

const MyFloatingButton = () => {
  const [isVisible, setVisible] = useState(false);

  return(
    <View>
      <FloatingAction
        color={'#42f5e3'}
        animated={false}
        onPressMain={() => console.log('asdasdasd')} />
      <CreateBookModal 
        onToggleModal={(shouldShow) => setVisible(shouldShow)}
        visible={isVisible}/>
    </View>
  )
}

export default MyFloatingButton
