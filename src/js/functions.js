import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import refs from './reference';
import picturesTpl from '../templates/galleryList.hbs';

function openModal() {
  refs.galleryContainer.onclick = event => {
    if (event.target.nodeName !== 'IMG') {
      console.log('Кликнули не по картинке!');
      return;
    }
    basicLightbox.create(`<img src="${event.target.dataset.source}">`).show();
  };
}

function makePicturesMarkup(images) {
  const markup = picturesTpl(images);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

function clearGallery() {
  refs.galleryContainer.innerHTML = '';
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto',
  });
}

export { openModal, makePicturesMarkup, clearGallery, scrollToTop };
