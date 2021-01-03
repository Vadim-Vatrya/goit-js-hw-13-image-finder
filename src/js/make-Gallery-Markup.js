import reference from './reference';
import galleryList from '../templates/galleryList.hbs';
import refs from './reference';

function appendImagesMarkup(images) {
  const markup = gallaryList(images);

  refs.galleryImages.insertAdjacentElement('beforeend', markup);
}

export default appendImagesMarkup;
