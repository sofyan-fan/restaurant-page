import {
  contentLeft,
  menuBtn
} from "./landing";

let menuActive = false;



class menuItem {
  constructor(item, description, price) {
    this.item = item;
    this.description = description;
    this.price = price;
  }
};

class Menu {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
  }

  getItems() {
    return this.items
  }

}

export const menu = new Menu()
menu.addItem(new menuItem("Burger", "100% Angus beef and 100% Halal", `€${50}`));
menu.addItem(new menuItem("Steak", "100% wagyu beef and 100% Halal", `€${120}`));
menu.addItem(new menuItem("French fries", "Authentic French fries served with bearnaise mayonaise", `€${25}`));
menu.addItem(new menuItem("Drinks", "Seperate menu on in the restaurant", `from €${(3.50).toFixed(2)}`));


// DOM
const menuTitle = document.createElement("div");
const menuContainer = document.createElement("div");


const renderMenu = function () {
  
  contentLeft.innerHTML = ""
  
  menu.getItems().forEach(item => {
    
    const itemContainer = document.createElement("div");
    const itemNameDes = document.createElement("div");
    const itemPrice = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemDes = document.createElement("p");
    
    itemContainer.classList.add("item-container");
    itemNameDes.classList.add("item-name-des");
    itemPrice.classList.add("item-price");
    itemName.classList.add("item-name");
    itemDes.classList.add('item-des');
    
    itemName.innerHTML = `${item.item}`;
    itemDes.innerHTML = `${item.description}`;
    itemPrice.innerHTML = `${item.price}`;
    
    menuTitle.innerHTML = `<h2> Menu </h2>`
    
    contentLeft.className = "container-left-menu";
    
    
    contentLeft.append(
      menuTitle,
      menuContainer,
    );
    
    menuContainer.append(
      itemContainer,
    );
    
    itemContainer.append(
      itemNameDes,
      itemPrice,
    )
    
    itemNameDes.append(
      itemName,
      itemDes,
    )
    
    ;
  })
}

export const menuEventHandler = function menuEventHandler() {
  menuBtn.addEventListener("click", () => {
   
menuContainer.innerHTML = ""
renderMenu()
    
    
  })
};