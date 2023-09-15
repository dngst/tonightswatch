import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="pagenavigation"
export default class extends Controller {
  connect() {
    console.log("Page navigation controller loaded.")
  }

  handleKeyDown(event){
    switch (event.key) {
      case "ArrowRight":
        const nextLink = document.querySelector('a[rel="next"]');
          if (nextLink) {
            nextLink.click();
          }
        break;
      case "ArrowLeft":
        const prevLink = document.querySelector('a[rel="prev"]');
          if (prevLink) {
            prevLink.click();
          }
        break;
      default:
        break;
    }
  }
}
