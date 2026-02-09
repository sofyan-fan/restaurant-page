const contentContainer = document.getElementById("content");

export const renderLandingPage = function renderLP(){
  return contentContainer.innerHTML = `
  <div class="content-left">
      <h2>Serious Meat. Serious Flavor.</h2>
      <p class="pitch">Our burgers and steaks start with premium cuts of beef, freshly prepared and never compromised.
        From juicy, hand-pressed patties to expertly grilled steaks, we focus on quality meat, bold seasoning, and
        precise cooking
        to deliver unforgettable flavor in every bite.</p>
    </div>
    <div class="content-right"></div>`
}



