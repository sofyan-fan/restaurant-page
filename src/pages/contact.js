import {
  contentLeft,
  contactBtn,
} from "./landing";

function renderContact() {
  contentLeft.innerHTML = `
        <p>Phone: (202) 555‑0147 </p>
      <p>Location: Sirloin Springs, Montana</p>
      <p>Instagram: @ssteaksandburgers </p>
      <p>Tiktok: @ssteaksburgers </p>
  `
}

export const contactEventHandler = function contactEventHandler() {
  contactBtn.addEventListener("click", () => {

    contentLeft.className = "contact-container";
    renderContact()
  })
};