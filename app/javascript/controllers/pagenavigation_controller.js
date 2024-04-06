import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="pagenavigation"
export default class extends Controller {
    connect() {
    }

    handleKeyDown(event){
        const nextLink = document.querySelector('a[rel="next"]');
        const prevLink = document.querySelector('a[rel="prev"]');
        switch (event.key) {
            case "ArrowRight":
            case "l":
            case " ":
                if (nextLink) {
                    nextLink.click();
                }
                break;
            case "ArrowLeft":
            case "h":
                if (prevLink) {
                    prevLink.click();
                }
                break;
            default:
                break;
        }
    }
}
