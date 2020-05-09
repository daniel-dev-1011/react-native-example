/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

/*
* Check if email is valid or not
*/ 
export const isEmailValid = email => {
  var pattern = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email)
}

/*
* Check if input string's length at least 6 chars
*/
export const isAtleast6Chars = string => {
  var pattern = /^.{6,}$/;
  return pattern.test(string)
}

/*
* Match at least 1 uppercase, 1 lower case, 1 number
* Description: 
* (?=.*[a-z]) : use positive look ahead to see if at least one lower case letter exists
* (?=.*[A-Z]) : use positive look ahead to see if at least one upper case letter exists
* (?=.*\d) : use positive look ahead to see if at least one digit exists
* (?=.*\W]) : use positive look ahead to see if at least one non-word character exists
*/
export const isMatchPasswordRule = password => {
  var pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
  return pattern.test(password)
}

/*
* Check if string is contain at least 1 non-space character
*/
export const isStringEmpty = string => {
  var pattern = /^(?!\s*$).+/;
  return !pattern.test(string)
}

