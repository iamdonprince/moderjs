import { elements } from "./base";

export const getInput = () => elements.getInput.value;
export const clearInput = () => {
  elements.getInput.value = "";
};
export const clearResultsList = () => {
  elements.resultList.innerHTML = "";
};

function limitRecipeTitle(title, limit = 17) {
  if (title.length > limit) {
    const newTitleArr = [];
    let newTitle = title.split(" ");
    newTitle.reduce((acc, curr) => {
      if (acc + curr.length < limit) {
        newTitleArr.push(curr);
      }
      return acc + curr.length;
    }, 0);
    return newTitleArr.join(" ") + "...";
  } else {
    return title;
  }
}

const createButton = (page, type) => {
  return `
 <button class="btn-inline results__btn--${type}" data-goto=${
    type === "prev" ? page - 1 : page + 1
  }>
     <svg class="search__icon">
         <use href="img/icons.svg#icon-triangle-${
           type === "prev" ? "left" : "right"
         }"></use>
     </svg>
     <span>Page  ${type === "prev" ? page - 1 : page + 1}</span>
 </button> 
 `;
};

const renderButtons = (page, numResults, resPerPage) => {
  const pages = Math.ceil(numResults / resPerPage);

  let button;
  if (page === 1 && pages > 1) {
    // buttom to go to netxt page
    button = createButton(page, "next");
  } else if (page < pages) {
    //both button
    button = `
    button = createButton(page, 'prev')
    button = createButton(page, 'next')
    
    `;
  } else if (page === pages && pages > 1) {
    // only button to go to prev page
    button = createButton(page, "prev");
  }

  elements.searchResPages.insertAdjacentHTML("afterbegin", button);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;

  recipes.slice(start, end).forEach((data) => {
    const markup = `<li>
    <a class="results__link results__link--active" href="${data.recipe_id}">
        <figure class="results__fig">
            <img src="${data.image_url}" alt="Test">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitRecipeTitle(data.title)}</h4>
            <p class="results__author">
            ${data.publisher}</p>
        </div>
    </a>
</li>`;

    elements.resultList.insertAdjacentHTML("beforeend", markup);
  });
  renderButtons(page, recipes.length, resPerPage);
};
