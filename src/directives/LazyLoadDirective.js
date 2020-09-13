/**
 * From https://css-tricks.com/lazy-loading-images-with-vue-js-directives-and-intersection-observer/
 * Author: Mateusz Rybczonek
 * Published: Oct 15, 2018 
 */
export default {
    inserted: el => {
      function loadImage() {
        // const imageElement = Array.from(el.children).find(
        // el => el.nodeName === "IMG"
        // );
        const imageElement = el
        if (imageElement) {
          imageElement.addEventListener("load", () => {
            setTimeout(() => el.classList.add("loaded"), 100);
          });
          imageElement.addEventListener("error", () => console.log("error"));
          imageElement.src = imageElement.dataset.url;
        }
      }
  
      function handleIntersect(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadImage();
            observer.unobserve(el);
          }
        });
      }
  
      function createObserver() {
        const options = {
          root: null,
          threshold: "0"
        };
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(el);
      }
      if (window["IntersectionObserver"]) {
        createObserver();
      } else {
        loadImage();
      }
    }
  };