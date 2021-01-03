import galleryList from './templates/galleryList.hbs';
import appendImagesMarkup from './js/make-Gallery-Markup';

const refs = {
  inputForm: document.querySelector('#search-form'),
  galleryImages: document.querySelector('.gallery'),
  button: document.querySelector('.load-more-button'),
};

// function appendImagesMarkup(images) {
//   const markup = galleryList(images);

//   refs.galleryImages.insertAdjacentElement('beforeend', markup);
// }

refs.inputForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;
  // console.log(inputValue);
  const url =
    ' https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${{inputValue}}&order=latest&per_page=12&key=19735813-38939a283ca61b34fac8c005d';

  fetch(url)
    .then(res => res.json())
    .then(({ hits }) => {
      const markup = galleryList(hits);

      refs.galleryImages.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
});

// const url =
//   ' https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&order=latest&per_page=12&key=19735813-38939a283ca61b34fac8c005d';

// fetch(url)
//   .then(res => res.json())
//   .then(({ hits }) => {
//     const markup = galleryList(hits);

//     refs.galleryImages.insertAdjacentHTML('beforeend', markup);
//   })
//   .catch(error => console.log(error));
