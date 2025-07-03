/**
 * projectCard.js
 * -----------
 * Defines factory function to create a card element that contains a project display.
 * Used primarily in the projects page to group and present project details.
 *
 * Exports:
 * - createProjectCard(title, items): returns a DOM element
 * 
 * Dependencies:
 * - None 
 */

/**
 * Creates a card element with a project summary display.
 * 
 * @param {object} projectJSON - JSON object containing project details
 * @returns: {HTMLElement} A fully constructed card DOM element
 */
export function createProjectCard(projectJSON) {
	const container = document.createElement("div");
	container.className = "project";

	console.log(projectJSON.id)
	let titleElement = document.createElement("h2");
	titleElement.innerText = projectJSON.title;

	let dateElement = document.createElement("p");
	dateElement.innerText = projectJSON.date.label;
	dateElement.className = "project-date";

	titleElement.appendChild(dateElement);

	container.appendChild(titleElement);

	return container;
}