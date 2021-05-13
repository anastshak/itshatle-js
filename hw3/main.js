const MENU = [{
        id: "position1",
        name: "Mini cheese Burger",
        price: 9.00,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
        img: "./images/menu-burger.jpg"

    },

    {
        id: "position2",
        name: "Double size burger",
        price: 11.00,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
        img: "./images/menu-burger.jpg"
    },

    {
        id: "position3",
        name: "Bacon, EGG and Cheese",
        price: 13.00,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
        img: "./images/menu-burger.jpg"
    },

    {
        id: "position4",
        name: "Pulled porx Burger",
        price: 18.00,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
        img: "./images/menu-burger.jpg"
    },

    {
        id: "position5",
        name: "Fried chicken Burger",
        price: 22.00,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
        img: "./images/menu-burger.jpg"
    }

];

let htmlMenu = '';
let menuList = document.getElementById("menu");

function getElements(array) {
    array.forEach(({
        id,
        img,
        name,
        price,
        description
    }) => {
        htmlMenu += `
        <div class="menu-content_item">
            <img class="menu-content_image" src="${img}">
            <h3 class="menu-content_text">
                <span class="menu-content_name">${name}</span>
                <span class="menu-content_price"><strong>$${price}.00</strong></span>
                <p class="menu-content_description">${description}</p>
            </h3>
        </div>
        `
    });
}
getElements(MENU);

menuList.innerHTML = htmlMenu;