/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

export const convertErrorCode = (errorCode) => {
    switch (errorCode) {
        case '0103':
        case '0106':
            return "Wrong email or password."
        case '0105':
            return "This email does not exist."
        case '0000': 
            return "No Internet Connection."
        default:
            return "error while logging in, please try again !"
    }
}