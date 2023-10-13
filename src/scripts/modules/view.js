

/**
 * View Module
 * ...
 */
const View = function(_view_el) {


    /**
     * View Activator and Deactivator
     */
    function activate() { _view_el.style.display = "block" }
    function deactivate() { _view_el.style.display = "none" }


    /******************
     * MODULE EXPORTS *
     ******************/
    return {
        activate,
        deactivate
    }
}










// Export the factory
export default View;