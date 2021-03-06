import DOMHandler from "../dom-handler.js";
import { saveToLocalStorage } from "../utils.js";

// Este evento es para efecutuar la compra, y se elimina los datos de la compra efectuada.
export function addEventButtonToPay() {
  const button = document.querySelector(".js-button-to-pay");
  button?.addEventListener("click", () => {
    saveToLocalStorage("sale completed", true);
    saveToLocalStorage("selected products(ID's)", []);
    saveToLocalStorage("Products to seil", []);
    saveToLocalStorage("sale description", []);

    DOMHandler.reload();
  });
}
