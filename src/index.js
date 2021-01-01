fetch(
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=19735813-38939a283ca61b34fac8c005d',
)
  .then(res => res.json())
  .then(console.log);
