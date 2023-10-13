import View from "./view.js";


/**
 * ContactView Module
 * ...
 */
const ContactView = function(contact_images) {
    // Create the element
    let _el = document.createElement("main");
    _el.id = "contact_container";

    // Create the inner element
    let _inner_el = document.createElement("div");
    _inner_el.id = "contact";

    // Create the card container element
    let _card_el = document.createElement("div");
    _card_el.classList.add("card");

    // Create the title element
    let _title_el = document.createElement("h2");
    _title_el.innerText = "Get in touch!";
    _card_el.appendChild(_title_el);

    // Create the subtitle element
    let _subtitle_el = document.createElement("p");
    _subtitle_el.classList.add("subtitle");
    _subtitle_el.innerText = " You can contact our team every day from 7am until 11pm, and we will be happy to help with your reservation.";
    _card_el.appendChild(_subtitle_el);

    // Create the Call us Section
    _card_el.appendChild(_build_section_title("Call us"));
    _card_el.appendChild(_build_section_row("call", "1 (234) 567-891"));
    _card_el.appendChild(_build_section_row("call", "1 (234) 987-654"));
    _card_el.appendChild(document.createElement("hr"));

    // Create the Email us Section
    _card_el.appendChild(_build_section_title("Email us"));
    _card_el.appendChild(_build_section_row("mail", "hello@sushiville.com"));
    _card_el.appendChild(document.createElement("hr"));

    // Create the Visit us Section
    _card_el.appendChild(_build_section_title("Visit us"));
    _card_el.appendChild(_build_section_row("pin_drop", "121 Rock Street, 21 Avenue New York, NY 92103-9000"));

    // Create the image element
    let _img_el = document.createElement("img");
    _img_el.src = contact_images[0];
    _img_el.alt = "Address";
    _card_el.appendChild(_img_el);

    // Include the card into the inner el
    _inner_el.appendChild(_card_el);

    // Include the inner el into the core el
    _el.appendChild(_inner_el);

    // Extend the activation functionality from the View Module
    const { activate, deactivate } = View(_el);








    /****************
     * MISC HELPERS *
     ****************/




    /**
     * Builds the DOM Element for a section title.
     * @param {*} title 
     * @returns HTMLElement
     */
    function _build_section_title(title) {
        let el = document.createElement("h3");
        el.innerText = title;
        return el;
    }




    /**
     * Builds the DOM Element for a section row.
     * @param {*} icon 
     * @param {*} text 
     * @returns HTMLElement
     */
    function _build_section_row(icon, text) {
        // Init the row div
        let el = document.createElement("div");
        el.classList.add("row");

        // Init the icon el
        let icon_el = document.createElement("span");
        icon_el.classList.add("md-icon");
        icon_el.innerText = icon;
        el.appendChild(icon_el);

        // Init the text el
        let text_el = document.createElement("span");
        text_el.innerText = text;
        el.appendChild(text_el);

        // Finally, return the row
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
export default ContactView;