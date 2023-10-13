


/**
 * Header Module
 * ....
 */
const Header = function() {
    // Create the element
    let el = document.createElement("header");

    // Create the logo and add it to the header
    let _logo_el = document.createElement("p");
    _logo_el.className = "logo";
    _logo_el.innerText = "SushiVille";
    el.appendChild(_logo_el);

    // Initialize the active tab
    let _active_tab = 0;

    // Initialize the tabs' container
    let _tabs_container_el = document.createElement("ul");

    // Initialize the individual tab elements
    let _tab_els = [
        _create_tab_el(0, "HOME"),
        _create_tab_el(1, "MENU"),
        _create_tab_el(2, "CONTACT"),
    ];

    // Set the first tab as active
    _tab_els[0].classList.add("active");

    // Add them to the container
    _tab_els.forEach((tab) => _tabs_container_el.appendChild(tab));

    // Include the tabs container element into the header
    el.appendChild(_tabs_container_el);



    





    /*********************
     * TAB EVENT HANDLER *
     *********************/




    /**
     * Triggers whenever a new tab is clicked and updates the current state.
     * @param {*} new_index 
     */
    function on_tab_changes(new_index) {
        // Reset the active state
        _reset_active_state();

        // Set the new index & the class on the new tab
        _active_tab = new_index;
        _tab_els[new_index].classList.add("active");
    }







    







    /****************
     * MISC HELPERS *
     ****************/




    /**
     * Iterates over all the tab elements and removes the "active" class if found.
     */
    function _reset_active_state() { _tab_els.forEach((tab) => tab.classList.remove("active")) }





    /**
     * Verifies if a given tab is currently active.
     * @param {*} tab_index 
     * @returns boolean
     */
    function is_tab_active(tab_index) { return tab_index == _active_tab }





    /**
     * Creates a default tab button element and returns it.
     * @param {*} tab_index 
     * @param {*} tab_name 
     * @returns HTMLElement
     */
    function _create_tab_el(tab_index, tab_name) {
        let tab_el = document.createElement("li");
        tab_el.setAttribute("role", "button");
        tab_el.setAttribute("data-tab-index", tab_index);
        tab_el.innerText = tab_name;
        return tab_el;
    }





    




    /******************
     * MODULE EXPORTS *
     ******************/
    return {
        el,
        on_tab_changes,
        is_tab_active
    }
}




// Export the factory
export default Header;