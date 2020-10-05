export const setCookie = (value) => {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = '_cookies_accepted=' + value + '; ' + expires;
  if (value == 'all' || value == 'functionality') {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({event: 'pageview'});
  }
};

export const getCookie = () => {
  const toMatch = '_cookies_accepted=';
  const splitArray = document.cookie.split(';');
  for (let i = 0; i < splitArray.length; i++) {
    let cookie = splitArray[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(toMatch) === 0) {
      return cookie.substring(toMatch.length, cookie.length);
    }
  }
  return '';
};

export const preferenceNotSelected = () => {
  const cookieValue = getCookie('_cookies_accepted');
  // Skip a value of "true" to override old existing cookies
  if (cookieValue && cookieValue != 'true') {
    return false;
  } else {
    return true;
  }
};
