import { PageView } from "./pageView.js";

export class SkillsPage extends PageView {
	_GetContents() {
		const wrapper = document.createElement("div");

		const aboutSection = this._GetSkillsSection();

		wrapper.appendChild(aboutSection);

		return wrapper;
	}

	_GetSkillsSection() {
		const section = document.createElement("div");

		let content = `<h2>Skills</h2>
        	<div id="skills-grid" class="skills-grid">
        		${this._GetOSList()}
        		${this._GetLanguageList()}
        		${this._GetToolList()}
        	</div>
        	<h2>
        		<a href='images/Joshua_Fawcett_Resume.pdf' target='_blank' class='resume-link'>
        			<strong>Resume <i class="fa-solid fa-1x fa-arrow-up-right-from-square" title="Resume Link"></i></strong>
        		</a>
        	</h2>`;

        section.innerHTML = content;

		return section;
	}

	_GetOSList() {
		let content = `
			<div class="os-list">
                <h3>Operating Systems</h3>
                <ul>
                    <li>Windows</li>
                    <li>Unix/Linux</li>
                    <li>Mac</li>
                </ul>
            </div>`;

        return content;
	}

	_GetLanguageList() {
		let content = `            
		<div class="language-list">
            <h3 style="margin: 0em 0em 0.5em 0em">Languages</h3>
            <div class="languages">
                <p>Python
                	<div class="skill-bar"><div class="percent-bar" style="width: 85%"></div></div>
                </p>
                <p>C
                	<div class="skill-bar"><div class="percent-bar" style="width: 75%"></div></div>
                </p>
                <p>JavaScript
                	<div class="skill-bar"><div class="percent-bar" style="width: 70%"></div></div>
                </p>
                <p>HTML
                	<div class="skill-bar"><div class="percent-bar" style="width: 70%"></div></div>
                </p>
                <p>CSS
                	<div class="skill-bar"><div class="percent-bar" style="width: 70%"></div></div>
                </p>
                <p>C#
                	<div class="skill-bar"><div class="percent-bar" style="width: 65%"></div></div>
                </p>
                <p>C++
                	<div class="skill-bar"><div class="percent-bar" style="width: 57%"></div></div>
                </p>
                <p>Swift
                	<div class="skill-bar"><div class="percent-bar" style="width: 49%"></div></div>
                </p>
            </div>
        </div>`;
        return content;
	}

	_GetToolList() {
		let content = `            
			<div class="tools-list">
	            <h3>Tools</h3>
	            <ul>
	                <li>Bash</li>
	                <li>Git</li>
	                <li>Github</li>
	                <li>Command Line</li>
	                <li>Vim</li>
	                <li>Unity</li>
	                <li>MS Office</li>
	                <li>Sqlite</li>
	                <li>Kanban</li>
	                <li>x86-64</li>
	            </ul>
	        </div>`;
		return content;
	}
}