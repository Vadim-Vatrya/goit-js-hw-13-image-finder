import galleryList from './templates/galleryList.hbs';

const url =
  ' https://pixabay.com/api/?image_type=photo&orientation=horizontal&order=latest&per_page=12&key=19735813-38939a283ca61b34fac8c005d';

fetch(url)
  .then(res => res.json())
  .then(({ hits }) => {
    console.log(hits);

    markup = galleryList(hits);
    console.log(markup);
  })
  .catch(error => console.log(error));
