/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import { deleteData } from '../../utils/DataUtils';
import store from '../../redux/store/reduxStore';
import { logOut } from '../../redux/action';

const deleteCurrentUserInfo = (props) => {
    if (deleteData('userInfo').then(result => {
        if (result) {
            store.dispatch(logOut())
            props.navigation.replace('Login')
        } else {
            alert('error while remove value !')
        }
    }));
    return null;
}

export default deleteCurrentUserInfo