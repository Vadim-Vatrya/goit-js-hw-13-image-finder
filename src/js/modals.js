import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    console.log('Кликнули не по картинке!');
    return;
  }

  const openImage = event.target.dataset.src;
  const instance = basicLightbox.create(`<img src="${openImage}">`);

  instance.show();
}

export default openModal;
