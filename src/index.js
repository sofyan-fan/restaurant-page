import "./style.css";
import {
  greeting
} from "./testing.js"
import {
  renderLandingPage
} from "./pages/landing.js";
import {
  menuEventHandler
} from "./pages/menu.js";

import {
  menu
} from "./pages/menu.js";
import { reservationEventHandler } from "./pages/reservation.js";

import { contactEventHandler } from "./pages/contact.js";




renderLandingPage();

menuEventHandler();

reservationEventHandler();

contactEventHandler();





console.log(greeting);
console.log(Element);
console.log("This works");