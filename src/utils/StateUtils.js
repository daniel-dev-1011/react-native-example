/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import NetInfo from "@react-native-community/netinfo";

export const isNetworkConnection = () => {
  return NetInfo.fetch();
}