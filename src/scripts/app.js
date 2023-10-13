import Header from "./modules/header.js";
import HomeView from "./modules/home_view.js";
import MenuView from "./modules/menu_view.js";
import ContactView from "./modules/contact_view.js";


const App = function(images) {
    // Initialize the global app container element
    const _app_container_el = document.getElementById("app_container");
    
    // Initialize the Header Element as well as the Tabs
    const header = Header();
    _app_container_el.appendChild(header.el);
    header.el.addEventListener("click", _on_tab_click);

    // Initialize the views
    const _views = [
        HomeView(),
        MenuView(images.menu_images),
        ContactView(images.contact_images)
    ];

    // Append the views to the app
    _views.forEach((view) => _app_container_el.appendChild(view.el));

    // Subscribe to the splash button clicks
    _views[0].splash_reservation_button_el.addEventListener("click", (e) => _on_tab_click(2));
    _views[0].splash_menu_button_el.addEventListener("click", (e) => _on_tab_click(1));








    /******************************
     * TAB CLICK EVENT MANAGEMENT *
     ******************************/




    /**
     * Triggers whenever a tab is clicked and manages the 
     * @param {*} e 
     */
    function _on_tab_click(e) {
        // Extract the index from the given value
        const new_index = header.extract_tab_index(e);

        // If the extracted index is a number and the tab is not active, proceed
        if (typeof new_index == "number" && !header.is_tab_active(new_index)) {
            // Handle the tabs' states
            header.on_tab_changes(new_index);

            // Handle the view activation
            _activate_view(new_index);
        }
    }





    /**
     * Activates a view based on the active tab index after deactivating the previous one.
     * @param {*} active_tab_index 
     */
    function _activate_view(active_tab_index) {
        // Firstly, hide all the views
        _views.forEach((view) => view.deactivate());

        // Finally, activate the view
        _views[active_tab_index].activate();
    }
}





export default App;