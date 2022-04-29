import { getItFromLocalStorage } from "../utils.js";
import { aside } from "../components/aside-categories.js";
import { searchTool } from "../components/input-search.js";
import { productCards } from "../components/product-cards.js";
import { addEventChangeCategory } from "../events/aside-events.js";
import {
  addEventGoToCartPage,
  addEventOnSearch,
} from "../events/header-events.js";
import { addEventAddProductToCart } from "../events/product-events.js";
import { inputSelect } from "../components/input-sort.js";
import { addEventSelectSort } from "../events/sort-events.js";

function render() {
  const products = getItFromLocalStorage("products");
  return `
  ${searchTool()}
  <div class="container">
    ${aside()}
    <div>
      ${inputSelect()}
      <div class="cards__container">
        ${
          products.length > 0
            ? products.map(productCards)
            : "<h1>Sorry! We don't have this product 😣</h1>"
        }
      </div>
    </div>
  </div>
  `;
}

function ProductsPage() {
  return {
    toString() {
      return render();
    },
    addListeners() {
      addEventChangeCategory();
      addEventOnSearch();
      addEventAddProductToCart();
      addEventSelectSort();
      addEventGoToCartPage();
    },
    state: {
      errors: {},
    },
  };
}

export default ProductsPage;
