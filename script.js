let bookList = ["Compilers: Principles, Techniques, & Tools", 
				"Interactive Computer Graphics", 
				"Machine Learning: A Probabilistic Perspective", 
				"Clean Code: A Handbook of Agile Software Craftsmanship", 
				"Secure and Resilient Software Development", 
				"Artificial Intelligence: A Modern Approach"];

let index = -1;

let timer = null;

function setNextItem() {
	let spanItem = document.getElementById("cycle-span");
	if (spanItem === null) {
		return;
	}
	index = (index + 1) % bookList.length;
	spanItem.textContent = bookList[index];
}

function fadeOut() {
	let spanItem = document.getElementById("cycle-span");
	if (spanItem === null) {
		return;
	}
	let opacity = parseFloat(spanItem.style.opacity);
	if (opacity <= 0) {
		timer = setTimeout(cycle, 500);
		return;
	} else {
		opacity -= 0.05;
		spanItem.style.opacity = opacity;
		timer = setTimeout(fadeOut, 100);
		return;
	}
}

function fadeIn() {
	let spanItem = document.getElementById("cycle-span");
	if (spanItem === null) {
		return;
	}
	let opacity = parseFloat(spanItem.style.opacity);
	if (opacity >= 1) {
		timer = setTimeout(fadeOut, 5000)
	} else {
		opacity += 0.05;
		spanItem.style.opacity = opacity;
		timer = setTimeout(fadeIn, 100);
	}
}

function cycle() {
	setNextItem();
	fadeIn();
}

//setTimeout(fadeOut, 5000);
timer = setTimeout(cycle, 1000);

let curPage = "Home";

function gotoPage(page) {
	let content;
	
	if (page == "Skills") {
		content = SkillsPage.render();
		curPage = page;
		clearTimeout(timer);
		timer = null;
	} else if (page == "Projects") {
		content = ProjectsPage.render();
		curPage = page;
		clearTimeout(timer);
		timer = null;
	} else {
		if (curPage != "Home"){
		curPage = "Home";
		content = HomePage.render();
		index = -1;
		timer = setTimeout(cycle, 1000);
		} else {
			return;
		}
	}

	document.querySelector("main").innerHTML = content;
}

function scrollToProject(hashName) {
	gotoPage('Projects');
	let element = document.getElementById(hashName);
	element.scrollIntoView();
    //location.hash = "#" + hashName;
}

class HomePage {
	static render() {
		let content = `${HomePage._about()}${HomePage._projects()}${HomePage._skills()}<br>${HomePage._contact()}`
		return content;
	}

	static _about() {
		let content = `<div class="about-section">
          <h2>About</h2>
          <p class="about-p">Hi, I'm Joshua Fawcett. I am currently a senior at the University of Oregon, 
          majoring in Computer and Information Science and minoring in Mathemetics. I'm a life-long learner 
          who loves to read textbooks, write code, tackle challenging problems, and help friends with their 
          math, physics, and writing.<br><br>In my free time, I enjoy spending time with friends and family, 
          bowling, hiking, and playing/making video games.<br><br>Some of my current reading material includes: 
          <span id="cycle-span" style="opacity: 0;"></span></p>
          <div class="box"><br><br>Picture or cool icon goes here</div>
        </div>`
		return content;
	}

	static _projects() {
		let content = `<div class="project-section">
          <h2>Projects</h2>
          <ul>
            <li><button class="text-button" onclick="scrollToProject('messenger-project')">Secure Messenger Application</button></li>
            <li><button class="text-button" onclick="scrollToProject('pub-sub-project')">Publisher/Subscriber Server</button></li>
            <li><button class="text-button" onclick="scrollToProject('yoon-project')">Open-world RPG Game</button></li>
            <li><button class="text-button" onclick="scrollToProject('cipher-visualization-project')">Vigenere Cipher Visualization Tool</button></li>
          </ul>
        </div>`;
		return content;
	}

	static _skills() {
		let content = `<div class="skills-section">
          <h2>Skills</h2>
          <div class="skill-list">
            <i class="fa-brands fa-2x fa-html5" title="HTML5"></i>
            <i class="fa-brands fa-2x fa-css3-alt" title="CSS3"></i>
            <i class="fa-brands fa-2x fa-js" title="JavaScript programming language"></i>
            <i class="fa-brands fa-2x fa-python" title="Python programming language"></i>
            <i class="fa-brands fa-2x fa-git-square" title="Git version control"></i>
            <i class="fa-brands fa-2x fa-github-square" title="Github"></i>
            <i class="fa-brands fa-2x fa-linux" title="Unix/Linux"></i>
            <i class="fa-solid fa-2x fa-terminal" title="Command Line"></i>
            <i class="fa-brands fa-2x fa-swift" title="Swift programming language"></i>
            <i class="fa-brands fa-2x fa-windows" title="Windows"></i>
            <i class="fa-brands fa-2x fa-apple" title="Mac"></i>
            <i class="fa-solid fa-2x fa-c" title="C# programming language">#</i>
          </div>
        </div>`;
        return content;
	}

	static _contact() {
		let content = `<div class="contact-section">
          <h2>Contact</h2>
          <p>Email: joshfawcettshs10@gmail.com</p>
          <p>Github: <a href="https://github.com/jfawcet5">github.com/jfawcet5</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/jfawcet5">linkedin.com/jfawcet5</a></p>
        </div>`;
        return content;
	}
}


class SkillsPage {
	static render() {
		let content = `
		<div class="skills-section">
      		<h2>Skills</h2>
        	<div class="skills-grid">
        		${SkillsPage._osList()}
        		${SkillsPage._langList()}
        		${SkillsPage._toolList()}
        	</div>
    	</div>`;

		return content;
	}

	static _osList() {
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

	static _langList() {
		let content = `            
		<div class="language-list">
            <h3>Languages</h3>
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

	static _toolList() {	
		let content = `            
			<div class="tools-list">
	            <h3>Tools</h3>
	            <ul>
	                <li>Bash</li>
	                <li>Git</li>
	                <li>Github</li>
	                <li>Command Line</li>
	                <li>VIM</li>
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

class ProjectsPage {
	static render() {
		let content = `${ProjectsPage._projects()}`;
		return content;
	}

	static _projList() {
		let content = `
		<div class="project-list">
			<div class="project" id="messenger-project">
				<h2>
				  <a href="https://github.com/jfawcet5/CIS433-CourseProject"><strong>Secure Messenger Application</strong></a>
				</h2>
				<div class="box p1"><br><br>Project screenshot goes here</div>
				<div class="project-description">
					<p>Description goes here</p>
				</div>
			</div>
			<div class="spacer"></div>

			<div class="project" id="cipher-visualization-project">
				<h2>
				  <a href="https://github.com/maxjhop/VigenereVisualization"><strong>Vigenere Cipher Visualization Tool</strong></a>
				</h2>
				<div class="box p1"><br><br>Project screenshot goes here</div>
				<div class="project-description">
					<p>Description goes here</p>
				</div>
			</div>
			<div class="spacer"></div>

			<div class="project" id="yoon-project">
				<h2><a href="https://github.com/jfawcet5/Yoon"><strong>Open-world RPG Game</strong></a></h2>
				<div class="box p1"><br><br>Project screenshot goes here</div>
				<div class="project-description">
					<p>Description goes here</p>
				</div>
			</div>
			<div class="spacer"></div>

			<div class="project" id="pub-sub-project">
				<h2>
				  <a href="https://github.com/jfawcet5/CIS415-Project3"><strong>Publisher/Subscriber Server</strong></a>
				</h2>
				<div class="box p1"><br><br>Project screenshot goes here</div>
				<div class="project-description">
					<p>Description goes here</p>
				</div>
			</div>
	   </div>`;
		return content;
	}

	static _projects() {
		let content = `<div class="project-section">
          <h2>Projects</h2>
          <br>
          <p>Here's a list of some of the projects I've worked on over the years.</p>
          <div class="spacer"></div>
          ${ProjectsPage._projList()}
        </div>`;
    	return content;
	}
}



