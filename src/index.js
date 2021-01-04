import './css/styles.css';
import ImageApiService from './js/apiService';
import refs from './js/reference';
import {
  openModal,
  makePicturesMarkup,
  clearGallery,
  scrollToTop,
} from './js/functions';
import { showError, showSuccess } from './js/notification';

const imageApiService = new ImageApiService();

refs.inputForm.addEventListener('submit', handleFormSubmit);
refs.scrollBtn.addEventListener('click', () => {
  scrollToTop();
});

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  imageApiService.query = form.elements.query.value;

  if (imageApiService.query === '') {
    showError();
    clearGallery();
    return;
  }
  imageApiService.resetPage();
  imageApiService.fetchImages().then(images => {
    clearGallery();
    showSuccess();
    makePicturesMarkup(images);
    openModal();
    event.target.reset();
    scrollToTop();
    refs.scrollBtn.classList.remove('is-open');
  });
}

const observer = new IntersectionObserver(onEntry, { rootMargin: '50px' });
function onEntry(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && imageApiService.query !== '') {
      imageApiService.fetchImages().then(makePicturesMarkup);
      refs.scrollBtn.classList.add('is-open');
    }
  });
}
observer.observe(refs.gate);
