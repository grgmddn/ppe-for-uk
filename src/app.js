import Cookies from 'js-cookie';

import 'reset-css';
import './styles/main.scss';

const runTime = new Date();

const setCookieConsent = () => {
  let key = 'cookie_consent_accepted';
  let cookieConsentBanner = document.getElementById('cookieConsent');
  let cookieConsentAcceptButton = document.getElementById('cookieConsentAccept');

  if (cookieConsentBanner && cookieConsentAcceptButton) {

    if (Cookies.get(key)) {

      cookieConsentBanner.classList.add('is-hidden');

    } else {

      cookieConsentAcceptButton.addEventListener('click', () => {

        Cookies.set(key, true, { expires: 180 });

        if (Cookies.get(key)) {
          cookieConsentBanner.classList.add('is-hidden');
        } else {
          console.warn('Unable set cookies.');
        }
      });

    }

  } else {
    console.warn('No cookie consent banner!');
  }
};

window.onload = () => {
  console.log(`Application started on ${runTime}`);
  setCookieConsent();
};
