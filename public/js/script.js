$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

console.log(tabTogglers);

tabTogglers.forEach(function (toggler) {
  toggler.addEventListener("click", function (e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      tabTogglers[i].classList.remove(
        "hover:border-[#CDF7DC]",
        "hover:text-[#CDF7DC]",
        "border-[#1DB954]",
        "border-b-2"
      );

      tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
    }
    e.target.classList.add(
      "hover:border-[#CDF7DC]",
      "hover:text-[#CDF7DC]",
      "border-[#1DB954]",
      "border-b-2"
    );
  });
});
