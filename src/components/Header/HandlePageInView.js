import { throttle } from "lodash";

export function handledPageInView(history, location) {
  const landingPage = document.querySelector(".landing-page");
  const products = document.querySelector("#produse");
  const portofolio = document.querySelector("#portofoliu");
  const contact = document.querySelector("#contact").parentElement
    .parentElement;

  landingPage.addEventListener(
    "scroll",
    throttle(() => {
      if (
        landingPage.scrollTop >= 0 &&
        landingPage.scrollTop < products.offsetTop &&
        location.hash !== "#home"
      ) {
        history.push("/#home");
        return;
      }

      if (
        landingPage.scrollTop >= products.offsetTop &&
        landingPage.scrollTop < portofolio.offsetTop &&
        location.hash !== "#produse"
      ) {
        history.push("/#produse");
        return;
      }

      if (
        landingPage.scrollTop >= portofolio.offsetTop &&
        landingPage.scrollTop < contact.offsetTop &&
        location.hash !== "#portofoliu"
      ) {
        history.push("/#portofoliu");
        return;
      }

      if (
        landingPage.scrollTop >= contact.offsetTop &&
        location.hash !== "#contact"
      ) {
        history.push("/#contact");
        return;
      }
    }, 500)
  );
}
