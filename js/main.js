import { handleRouteChange } from "./routing.js";

window.addEventListener("load", handleRouteChange);
window.addEventListener("hashchange", handleRouteChange);