/**
 * horizontalSpacer.js
 * -----------
 * Defines factory function to create a horizontal spacer.
 *
 * Exports:
 * - createSpacer(title, items): returns a DOM element
 * 
 * Dependencies:
 * - None 
 */

/**
 * Creates a horizontal spacer element.
 * 
 * @returns: {HTMLElement} A spacer div.
 */
export function createSpacer() {
	const container = document.createElement("div");
	container.className = "spacer";

	return container;
}