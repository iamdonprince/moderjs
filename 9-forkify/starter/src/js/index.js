//  https://recipesapi.herokuapp.com/api/search
// https://recipesapi.herokuapp.com/api/search?q=chicken&page=3
// https://recipesapi.herokuapp.com/api/get

import Search from "./Modals/Search";
import * as SearchView from "./Views/SearchView";
import { elements, renderLoader, clearLoader } from "./Views/base";
//global state
const state = {};

const controllerSearch = async () => {
  //get query
  const query = SearchView.getInput();
  console.log(query);
  if (query) {
    state.search = new Search(query);

    // prepared ui  for search
    SearchView.clearInput();
    SearchView.clearResultsList();
    renderLoader(elements.searchRes);

    //search for recipesapi
    await state.search.getSearchResults();

    //   render result to UI
    clearLoader();
    SearchView.renderResults(state.search.result);
  }
};

elements.searchBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  controllerSearch();
});
