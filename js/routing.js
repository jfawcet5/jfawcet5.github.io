/**
 * routing.js
 * ----------
 * Handles SPA routing using hash-based URLs. 
 * Determines which page component to render based on the current URL hash.
 * 
 * Exports:
 * - handleRouteChange(): Called on page load and hash changes 
 * to render the correct view
 * 
 * Dependencies:
 * - pageEnum.js: Maps string page IDs to internal keys
 * - Individual view classes from /views
 * 
 * Usage:
 * - Called by main.js to initialize and respond to navigation.
 */

import { pageId } from "./data/pageEnum.js";

import { HomePage } from "./views/homePage.js";
import { ProjectsPage } from "./views/projectsPage.js";
import { SkillsPage } from "./views/skillsPage.js";

// Maps page IDs to page view classes
const routes = {
	[pageId.NULL]: new HomePage(),
	[pageId.HOME]: new HomePage(),
	[pageId.PROJECTS]: new ProjectsPage(),
	[pageId.SKILLS]: new SkillsPage()
}

/**
 * Handles loading the correct page based on the current URL hash.
 */
export function handleRouteChange() {
	// HTML element <main> where all SPA page content gets rendered
	const main = document.querySelector("main");
	// Clear previous contents
	main.innerHTML = '';

	// Retrieve current URL hash
	const currentRoute = window.location.hash;

	// Map URL hash to correct pageView instance
	const page = routes[currentRoute] || routes[pageId.HOME];

	// If page exists, render it as a child of <main>
	// page defaults to pageId.HOME so this should always work.
	if (page) {
		main.appendChild(page.Render());
	}	
}