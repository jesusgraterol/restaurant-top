/**
 * App Imports
 * Stylesheets, assets and scripts should be imported in the following section so they are included
 * in the build.
 */


// Scripts
import App from "./scripts/app.js";


// Stylesheets
import "./stylesheets/app.css";

// Menu Images
import menu_01 from "./assets/img/menu/menu_01.jpg";
import menu_02 from "./assets/img/menu/menu_02.jpg";
import menu_03 from "./assets/img/menu/menu_03.jpg";
import menu_04 from "./assets/img/menu/menu_04.jpg";
import menu_05 from "./assets/img/menu/menu_05.jpg";
import menu_06 from "./assets/img/menu/menu_06.jpg";
import menu_07 from "./assets/img/menu/menu_07.jpg";
import menu_08 from "./assets/img/menu/menu_08.jpg";
import menu_09 from "./assets/img/menu/menu_09.jpg";
import menu_10 from "./assets/img/menu/menu_10.jpg";
import menu_11 from "./assets/img/menu/menu_11.jpg";
import menu_12 from "./assets/img/menu/menu_12.jpg";

// Address Image
import addr from "./assets/img/addr.png"



/**
 * App Initializer
 * Once all the modules have been loaded, the app is initialized.
 */
const app = App({
    menu_images: [
        menu_01, menu_02, menu_03, menu_04, menu_05, menu_06, menu_07, menu_08, menu_09, menu_10,
        menu_11, menu_12
    ],
    contact_images: [ addr ]
});