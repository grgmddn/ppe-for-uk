import 'reset-css';
import './styles/main.scss';

const runTime = new Date();

const scrollTo = (element) => {

  let offset = document.getElementsByClassName('c-pageHeader')[0].offsetHeight;
  let count = (element.getBoundingClientRect().top + window.scrollY) - offset;

  return window.scroll({
    top: count,
    left: 0,
    behavior: 'smooth'
  });
};

window.onload = () => {
  console.log(`Application started on ${runTime}`);
  setCookieConsent();

  document.getElementById('read-more').addEventListener('click', (event) => {
    event.preventDefault();
    scrollTo(document.getElementById('what-is-this-campaign'));
  });
};
