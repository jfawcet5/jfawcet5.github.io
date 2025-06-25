import { pageId } from "./data/pageEnum.js";

import { HomePage } from "./views/homePage.js";
import { ProjectsPage } from "./views/projectsPage.js";
import { SkillsPage } from "./views/skillsPage.js";


const routes = {
	[pageId.NULL]: new HomePage(),
	[pageId.HOME]: new HomePage(),
	[pageId.PROJECTS]: new ProjectsPage(),
	[pageId.SKILLS]: new SkillsPage()
}

export function handleRouteChange() {
	const main = document.querySelector("main");
	main.innerHTML = '';

	const currentRoute = window.location.hash;
	const page = routes[currentRoute] || routes[pageId.HOME];

	if (page) {
		main.appendChild(page.Render());
	}	
}