
import { SKILLS } from "../data/skills.js";

function preprocessProjectData(rawJson) {
	;
}

export async function fetchProjectDetails() {
	const res = await fetch("/resources/data/projects.json");

	if (!res.ok) {
		throw new Error(`Failed to load projects: ${res.status}`);
	}

	const jsonData = await res.json();
	return jsonData;
}