export class PageView {
	Render() {
		const container = document.createElement("div");
		container.className = "pageview";

		const contents = this._GetContents();

		container.appendChild(contents);

		return container;
	}

	_GetContents() {
		const p = document.createElement("p");
		p.textContent = "contents";
		return p;
	}
}