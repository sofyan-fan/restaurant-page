import {
  contactBtn,
  contentLeft

} from "./landing";



const formContainer = document.createElement("div");
formContainer.classList.add("form-container");



formContainer.innerHTML = ` 
<form class="form "action="">
  <label for="fullname">Full Name:</label>
  <input type="text" id="fullname" name="fullname" required>
  <label for="phone">Phone number:</label>
  <input type="tel"
  id="phone"
  name="phone"
  required>
  <label for="email">Email address</label>
  <input type="email">
  <label for="date">Date:</label>
  <input type="date" id="date" name="date" required>
  <label for="time">Time:</label>
  <input type="time" id="time" name="time"required>
  <label for="numberofguests">Number of guests:</label>
  <input type="number" id="numberofguests" name="numberofguests required">
  <input type="submit">
</form>
`


export const reservationEventHandler = function reservationEventHandler() {
  reservationBtn.addEventListener("click", () => {
   
    
      contentLeft.innerHTML = ""
      contentLeft.appendChild(formContainer);
 
 

})};