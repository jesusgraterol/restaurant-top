import View from "./view.js";


/**
 * MenuView Module
 * ...
 */
const MenuView = function(menu_images) {
    // Create the element
    let _el = document.createElement("main");
    _el.id = "menu_container";

    // Create the inner element
    let _inner_el = document.createElement("div");
    _inner_el.id = "menu";

    // Declare the menu items
    const _menu_items = [
        { title: "Dragon Roll", description: "A roll with shrimp tempura, cucumber, avocado, and eel." },
        { title: "California Roll", description: "A classic roll with avocado, cucumber, and imitation crab." },
        { title: "Crunch Roll", description: "A roll with shrimp tempura, cucumber, avocado, and panko crumbs." },
        { title: "Philadelphia Roll", description: "A roll with cream cheese, avocado, and smoked salmon." },
        { title: "Rainbow Roll", description: "A roll with salmon, tuna, yellowtail, eel, and avocado." },
        { title: "Spicy Tuna Roll", description: "A roll with tuna, mayonnaise, sriracha, and cucumber." },
        { title: "Tempura Roll", description: "A roll with shrimp tempura and avocado." },
        { title: "Spider Roll", description: "A roll with soft shell crab, cucumber, and avocado." },
        { title: "Salmon Roll", description: "A roll with salmon and cucumber." },
        { title: "Tuna Roll", description: "A roll with tuna and cucumber." },
        { title: "Yellowtail Roll", description: "A roll with yellowtail and cucumber." },
        { title: "Eel Roll", description: "A roll with eel and cucumber." },
    ];

    // Iterate over each item, create the element and append it to the inner container
    for (let i = 0; i < _menu_items.length; i++) {
        const _item_el = _build_menu_item(_menu_items[i], menu_images[i]);
        _inner_el.appendChild(_item_el);
    }

    // Include the inner el into the core el
    _el.appendChild(_inner_el);

    // Extend the activation functionality from the View Module
    const { activate, deactivate } = View(_el);








    /****************
     * MISC HELPERS *
     ****************/




    /**
     * Builds a menu item element and returns it.
     * @param {*} text 
     * @param {*} image_url 
     * @returns HTMLElement
     */
    function _build_menu_item(text, image_url) {
        // Create the card element
        let el = document.createElement("div");
        el.classList.add("card");

        // Create the image element
        let img_el = document.createElement("img");
        img_el.src = image_url;
        img_el.alt = text.title;

        // Create the dish description
        let dish_desc_el = document.createElement("div");
        dish_desc_el.classList.add("dish-description");
        let title_el = document.createElement("h3");
        title_el.innerText = text.title;
        let desc_el = document.createElement("p");
        desc_el.innerText = text.description;   

        // Put together the dish description element
        dish_desc_el.appendChild(title_el);
        dish_desc_el.appendChild(desc_el);

        // Add the image to the menu item
        el.appendChild(img_el);

        // Add the dish description to the menu item
        el.appendChild(dish_desc_el);

        // Finally, return the element
        return el;

    }







    /******************
     * MODULE EXPORTS *
     ******************/
    return {
        get el() { return _el },
        activate,
        deactivate
    }
}










// Export the factory
export default MenuView;