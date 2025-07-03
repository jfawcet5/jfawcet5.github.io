/**
 * skillCard.js
 * -----------
 * Defines factory function to create a card element that contains a title and a list of items.
 * Used primarily in the skills page to group and present related skills.
 *
 * Exports:
 * - createSkillCard(title, items): returns a DOM element
 * 
 * Dependencies:
 * - None 
 */

/**
 * Creates a card element with a title and an optional list of items.
 * 
 * @param {string} title - The title displayed at the top of the card
 * @param {string[]} [items=[]] - A list of strings to be displayed in the card
 * @returns: {HTMLElement} A fully constructed card DOM element
 */
export function createSkillCard(title, items = []) {
	const cardContainer = document.createElement("div");
	cardContainer.className = "skill-card";

	const cardHeader = document.createElement("h3");
	cardHeader.className = "skill-card-header";
	cardHeader.innerText = title;

	const cardBody = document.createElement("div");
	cardBody.className = "skill-card-body";

	const cardItemList = document.createElement("ul");
	cardItemList.className = "skill-card-item-list";

	for (const str of items) {
		const listItem = document.createElement("li");
		listItem.textContent = str;
		cardItemList.appendChild(listItem);
	}

	cardBody.appendChild(cardItemList);

	cardContainer.appendChild(cardHeader);
	cardContainer.appendChild(cardBody);

	return cardContainer;
}