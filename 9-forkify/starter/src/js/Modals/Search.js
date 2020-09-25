import axios from "axios";

class Search {
  constructor(query) {
    this.query = query;
  }

  async getSearchResults() {
    const cors = "https://cors-anywhere.herokuapp.com/";

    //   fetch(`${cors}https://recipesapi.herokuapp.com/api/search?q=${query}`)
    //     .then((res) => res.json())
    //     .then((res) => console.log(res));

    try {
      const res = await axios.get(
        `${cors}https://recipesapi.herokuapp.com/api/search?q=${this.query}`
      );
      this.result = res.data.recipes;
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
}

export default Search;
