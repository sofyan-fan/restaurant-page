const slogan = document.createElement("h2");
const introduction = document.createElement("p");

introduction.classList.add("introduction")

slogan.innerHTML = "Serious Meat. Serious Flavor.";
introduction.innerHTML = "Our burgers and steaks start with premium cuts of beef, freshly prepared and never compromised. From juicy, hand - pressed patties to expertly grilled steaks, we focus on quality meat, bold seasoning, and precise cooking to deliver unforgettable flavor in every bite."


export const contentLeft = document.querySelector(".content-left");
export const renderLandingPage = function renderLP() {

  contentLeft.append(
    slogan,
    introduction,
  )
}
export const menuBtn = document.querySelector(".btn-menu");
export const reservationBtn = document.querySelector(".btn-reservation");
export const contactBtn = document.querySelector(".btn-contact");

