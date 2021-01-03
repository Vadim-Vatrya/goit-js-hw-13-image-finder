const apiKey = '19735813 - 38939a283ca61b34fac8c005d';

export default {
  searchQuery: '',
  page: 1,
  imagesOnPage: 12,

  fetchPictures() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.imagesOnPage}&key=${apiKey}`;

    return fetch(url)
      .then(responce => responce.json())
      .then(({ hits }) => {
        console.log(data.hits);
        this.nextPage;
        return hits;
      })
      .catch(error => console.log(error));
  },

  resetPage() {
    this.page = 1;
  },

  nextPage() {
    this.page += 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
