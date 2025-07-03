/**
 * pageView.js
 * -----------
 * Defines the abstract base class 'PageView' used by all SPA views.
 * Implements shared rendering logic for views using the Template Method pattern.
 *
 * Exports:
 * - PageView: An abstract class representing a single web page implementation.
 * 
 * Dependencies:
 * - None 
 * 
 * Usage: 
 * - Extend this class to create individual pages such as Home, Skills, or Projects.
 */

/**
 * Base class for all SPA views.
 * Implements the Template Method pattern.
 * 
 * Public Method:
 * - Render(): Returns a page container element with contents
 * 
 * Private (to be overridden):
 * - _GetContents(): Should return a DOM element representing the specific page content.
 */
export class PageView {
	constructor() {
		this._wrapper = document.createElement("div");
		this._wrapper.className = "pageview";
	}

	Render() {
		if (this._wrapper.innerHTML === "") {
			const contents = this._GetContents();

			this._wrapper.appendChild(contents);
		}

		return this._wrapper;
	}

	_GetContents() {
		const p = document.createElement("p");
		p.textContent = "contents";
		return p;
	}
}