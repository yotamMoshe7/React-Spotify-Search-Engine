import axios from 'axios';
import { LOCAL_STORAGE_EXPIRE_TOKEN_TIME } from '../utils/Constants';

// Create object for spotify access_token, token_type and expires_in values
export const getParamValues = (url) => {
  return url
    .slice(1)
    .split('&')
    .reduce((prev, curr) => {
      const [title, value] = curr.split('=');
      prev[title] = value;
      return prev;
    }, {});
};

// Add the access_token to every axios API request
export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem('params'));
    if (params) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${params.access_token}`;
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};

// Check if token expire time is end
export const checkTokenExpireTime = () => {
  let expiryTime = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_EXPIRE_TOKEN_TIME)
  );
  const currentTime = new Date().getTime();
  return currentTime < expiryTime;
};

// Compare functions
export const compareByName = (artist1, artist2) => {
  if (artist1.name < artist2.name) {
    return -1;
  }
  if (artist1.name > artist2.name) {
    return 1;
  }
  return 0;
};

export const compareByFollowers = (artist1, artist2) => {
  if (parseInt(artist1.followers.total) > parseInt(artist2.followers.total)) {
    return -1;
  }
  if (parseInt(artist1.followers.total) < parseInt(artist2.followers.total)) {
    return 1;
  }
  return 0;
};
