/**
 * skillsPage.js
 * -------------
 * Defines the SkillsPage class, extending the base 'PageView' class
 * Displays a categorized list of technical skills using reusable card components.
 *
 * Exports:
 * - SkillsPage: A class representing the skills view of the application.
 * 
 * Dependencies:
 * - views/pageView.js (base class)
 * - components/itemCard.js (used to render grouped skill cards)
 * 
 * Usage: 
 * - Triggered by the router when hash is 'skills'.
 */

import { PageView } from "./pageView.js";

import * as UIFactory from "../components/index.js";

export class SkillsPage extends PageView {
	_GetContents() {
		const aboutSection = this._GetSkillsSection();

		return aboutSection;
	}

	_GetSkillsSection() {
		const skillContainer = document.createElement("div");

		const section1 = document.createElement("div");

        const header = document.createElement("h2");
        header.innerText = "Skills";

        skillContainer.appendChild(header);

        //section1.innerHTML = content;

        const cardContainer = document.createElement("div");
        cardContainer.className = "carousel-container";

        const carousel = document.createElement("div");
        carousel.className = "card-carousel";

        const langs = ["Python", "C", "C++", "C#", 
        	"JavaScript", "HTML", "CSS"];

        const tools = ["Git", "Linux", "Make", "Unity", "Trello/Kanban"];

        const other = [".NET", "WPF", "XAML", "AWS", "Elastic"];

        const langCard = UIFactory.createSkillCard("Languages", langs);
        const toolCard = UIFactory.createSkillCard("Tools", tools);
        const otherCard = UIFactory.createSkillCard("Other", other);

        carousel.appendChild(langCard);
        carousel.appendChild(toolCard);
        carousel.appendChild(otherCard);

        cardContainer.appendChild(carousel);

        skillContainer.appendChild(cardContainer);

		return skillContainer;
	}
}