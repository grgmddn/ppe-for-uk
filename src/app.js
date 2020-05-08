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

      cookieConsentBanner.classList.remove('is-hidden');

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

const scrollTo = (element) => {

  let offset = document.getElementsByClassName('c-pageHeader')[0].offsetHeight;
  let count = (element.getBoundingClientRect().top + window.scrollY) - offset;

  return window.scroll({
    top: count,
    left: 0,
    behavior: 'smooth'
  });
};

const initVideo = () => {
  const player = document.getElementById('video');
  const video = player.querySelector('.o-asset__source');
  player.classList.add('is-ready');

  function togglePlay() {
    const playState = video.paused ? 'play' : 'pause';
    video[playState]();
    player.classList.toggle('is-playing');
  }

  player.addEventListener('click', (event) => {
    event.preventDefault();
    togglePlay();
  });
};

window.onload = () => {
  console.log(`Application started on ${runTime}`);
  setCookieConsent();

  if (document.getElementById('read-more')) {
    document.getElementById('read-more').addEventListener('click', (event) => {
      event.preventDefault();
      scrollTo(document.getElementById('what-is-this-campaign'));
    });
  }
  if (document.getElementById('video')) {
    console.log('has video');
    initVideo();
  }
};
