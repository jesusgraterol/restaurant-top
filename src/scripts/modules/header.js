/**
 * Header Module
 * The header module handles the elements located at the top of the page, including the tab navigation.
 */
const Header = function() {
    // Create the element
    let _el = document.createElement("header");

    // Create the logo and add it to the header
    let _logo_el = document.createElement("p");
    _logo_el.className = "logo";
    _logo_el.innerText = "SushiVille";
    _el.appendChild(_logo_el);

    // Initialize the active tab
    let _active_tab = 0;

    // Initialize the tabs' container
    let _tabs_container_el = document.createElement("ul");

    // Initialize the individual tab elements (li)
    let _tab_els = [
        _create_tab_el(0, "HOME"),
        _create_tab_el(1, "MENU"),
        _create_tab_el(2, "CONTACT"),
    ];

    // Set the first tab as active
    _tab_els[0].classList.add("active");

    // Add the tabs to the container (ul)
    _tab_els.forEach((tab) => _tabs_container_el.appendChild(tab));

    // Include the tabs container element into the header
    _el.appendChild(_tabs_container_el);









    /*********************
     * TAB EVENT HANDLER *
     *********************/




    /**
     * Triggers whenever a new tab is clicked and updates the current state.
     * @param {*} new_index 
     */
    function on_tab_changes(new_index) {
        // Reset the active state for all the tabs
        _reset_active_state();

        // Activate the new tab
        _activate_tab(new_index);
    }




    /**
     * Activates the new given tab index.
     * @param {*} new_index 
     */
    function _activate_tab(new_index) {
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






    /**
     * Extracts the tab index from a given value. If no index is identified, it returns undefined.
     * @param {*} event_or_index 
     * @returns number|undefined
     */
    function extract_tab_index(event_or_index) {
        // If it is a number, return it right away
        if (typeof event_or_index == "number") { return event_or_index }

        // If it is an event object, check if it is valid and return it in number format
        else if (
            event_or_index && 
            typeof event_or_index == "object" &&
            /^[0-9]{1}$/.test(event_or_index.target.getAttribute("data-tab-index"))
        ) {
            return Number(event_or_index.target.getAttribute("data-tab-index"));
        }

        // Otherwise, it is invalid
        else { return undefined }
    }



    






    /******************
     * MODULE EXPORTS *
     ******************/
    return {
        get el() { return _el },
        on_tab_changes,
        is_tab_active,
        extract_tab_index
    }
}




// Export the factory
export default Header;