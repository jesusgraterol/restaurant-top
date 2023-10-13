import Header from "./modules/header.js";


const App = function() {
    // Initialize the global app container element
    const _app_container_el = document.getElementById("app_container");
    
    // Initialize the Header Element as well as the Tabs
    const header = Header();
    _app_container_el.appendChild(header.el);
    header.el.addEventListener("click", _on_tab_click);








    /******************************
     * TAB CLICK EVENT MANAGEMENT *
     ******************************/




    /**
     * Triggers whenever a tab is clicked and manages the 
     * @param {*} e 
     */
    function _on_tab_click(e) {
        // Ensure a valid tab was clicked
        const clicked_tab_raw = e.target.getAttribute("data-tab-index");
        if (/^[0-9]{1}$/.test(clicked_tab_raw) && !header.is_tab_active(clicked_tab_raw)) {
            // Initialize the tab number
            const clicked_tab = Number(clicked_tab_raw);

            // Handle the tabs' states
            header.on_tab_changes(clicked_tab);

            // Handle the view activation
            _activate_view(clicked_tab);
        }
    }




    function _activate_view(active_tab_index) {

    }

}





export default App;