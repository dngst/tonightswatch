import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="pagenavigation"
export default class extends Controller {
  connect() {
  }

  handleKeyDown(event){
    switch (event.key) {
      case "ArrowRight":
        const nextLink = document.querySelector('a[rel="next"]');
        if (nextLink) {
          nextLink.click();
        }
        break;
      case " ":
        const altnextLink = document.querySelector('a[rel="next"]');
        if (altnextLink) {
          altnextLink.click();
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
