const apiKey = '19735813-38939a283ca61b34fac8c005d';
const url =
  ' https://pixabay.com/api/?image_type=photo&orientation=horizontal&order=latest&per_page=12&key=19735813-38939a283ca61b34fac8c005d';

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data.hits))
  .catch(error => console.log(error));
