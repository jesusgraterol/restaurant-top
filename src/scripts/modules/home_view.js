import View from "./view.js";


/**
 * HomeView Module
 * ...
 */
const HomeView = function() {
    // Create the element
    let _el = document.createElement("main");
    _el.id = "home_container";

    // Create the inner element
    let _inner_el = document.createElement("div");
    _inner_el.id = "home";

    // Create the splash element
    let _splash_el = document.createElement("div");
    _splash_el.className = "splash";
    
    // Create the splash's text elements and include them in the splash element
    const _parragraph_els = [
        _create_splash_text_el("Authentic Tastes. Authentic Atmosphere."),
        _create_splash_text_el("Japanese Cuisines & Sushi Bar"),
        _create_splash_text_el("Make the most of your meal and add a little cheer!"),
    ];
    _parragraph_els.forEach((p) => _splash_el.appendChild(p));

    // Create the actions el container
    let _actions_el = document.createElement("div");
    _actions_el.className = "actions";

    // Create the action buttons and include them into the actions container
    const _splash_reservation_button_el = 
        _create_splash_action_button("splash_reservation_button", "MAKE RESERVATION");
    const _splash_menu_button_el = 
        _create_splash_action_button("splash_menu_button", "VIEW MENU");
    _actions_el.appendChild(_splash_reservation_button_el);
    _actions_el.appendChild(_splash_menu_button_el);

    // Include the actions into the splash
    _splash_el.appendChild(_actions_el);

    // Include the splash into the inner el
    _inner_el.appendChild(_splash_el);

    // Include the inner el into the core el
    _el.appendChild(_inner_el);

    // Extend the activation functionality from the View Module
    const { activate, deactivate } = View(_el);

    // Finally, activate the view as home is the default view
    activate();








    /****************
     * MISC HELPERS *
     ****************/



    /**
     * Creates a splash parragraph element.
     * @param {*} text 
     * @returns HTMLElement
     */
    function _create_splash_text_el(text) {
        let el = document.createElement("p");
        el.innerText = text;
        return el;
    }




    /**
     * Creates an action button element.
     * @param {*} id 
     * @param {*} text 
     * @returns HTMLElement
     */
    function _create_splash_action_button(id, text) {
        let el = document.createElement("button");
        el.id = id;
        el.innerText = text;
        return el;
    }








    /******************
     * MODULE EXPORTS *
     ******************/
    return {
        get el() { return _el },
        get splash_reservation_button_el() { return _splash_reservation_button_el },
        get splash_menu_button_el() { return _splash_menu_button_el },
        activate,
        deactivate
    }
}










// Export the factory
export default HomeView;