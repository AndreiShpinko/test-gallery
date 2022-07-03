const Service = {
  API_URL: "https://api.unsplash.com",
  KEY: "4-K_6FyHN93SO0WfRHBk8WddCpsFoaWIk_6EM3XtSYM",

  getPhotos() {
    return fetch(
      `${this.API_URL}/photos/?client_id=${this.KEY}&per_page=50`
    ).then((res) => res.json());
  },

  getPhotosByQuery(query) {
    return fetch(
      `${this.API_URL}/search/photos/?client_id=${this.KEY}&per_page=50&query=${query}`
    ).then((res) => res.json());
  },
};

export default Service;
