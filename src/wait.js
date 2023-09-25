element = ".calendly-element";

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

/* waitForElm(".calendly-element").then((elm) => {
  console.log("element ready.");
  elm.classList.toggle("loading");
  elm.classList.toggle("full");
}); */

setTimeout(() => {
  Calendly.initInlineWidget({
    url: "https://calendly.com/patriciailuztro/template?hide_gdpr_banner=1",
    parentElement: document.querySelector(".calendly-inline-widget"),
  });
});
