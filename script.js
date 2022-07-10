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
}

class HomePage {
	static render() {
		let content = `${HomePage._about()}${HomePage._projects()}${HomePage._skills()}<br>${HomePage._contact()}`
		return content;
	}

	static _about() {
		let content = `<div class="about-section">
          <h2>About</h2>
          <img class="box right" src="images/picture2.jpeg" />
          <p class="about-p">Hi, I'm Joshua Fawcett. I am recent graduate from the University of Oregon, with a major in 
          Computer and Information Science and minor in Mathemetics. I'm a life-long learner who loves to read textbooks, 
          write code, tackle challenging problems, and help friends with their math, physics, and writing.<br><br>In my free 
          time, I enjoy spending time with friends and family, bowling, hiking, and playing/making video games.<br><br>Some 
          of my current reading material includes: <span id="cycle-span" style="opacity: 0;"></span></p>
        </div>`
		return content;
	}

	static _projects() {
		let content = `<div class="project-section">
          <h2>Projects</h2>
          <ul>
            <li><button class="text-button" onclick="scrollToProject('cipher-visualization-project')">Vigenere Cipher Visualization Tool</button></li>
            <li><button class="text-button" onclick="scrollToProject('messenger-project')">Secure Messenger Application</button></li>
            <li><button class="text-button" onclick="scrollToProject('yoon-project')">Open-world RPG Game</button></li>
            <li><button class="text-button" onclick="scrollToProject('pub-sub-project')">Publisher/Subscriber Server</button></li>
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
        	<div id="skills-grid" class="skills-grid">
        		${SkillsPage._osList()}
        		${SkillsPage._langList()}
        		${SkillsPage._toolList()}
        	</div>
        	<h2><a href='images/Joshua_Fawcett_Resume.pdf' target='_blank'><strong>Click here for resume</strong></a></h2>
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

	static _toolList() {	
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

class ProjectsPage {
	static render() {
		let content = `${ProjectsPage._projects()}`;
		return content;
	}

	static _projList() {
		let content = `
		<div class="project-list">

			<div class="project" id="messenger-project">
				<h2>Secure Messenger Application<p class="project-date">March 2022</p></h2>
				<a href="https://github.com/jfawcet5/CIS433-CourseProject">
					<div class="overlay"><p>Github Repo</p></div>
					<img class="box project-display" src="images/messenger.png" />
				</a>
				<div class="project-description">
					<p>Led a team of two in the design and implementation of a secure messenger application that was created 
						 for my Computer & Network Security class. Our application implements a simple client-server architecture,
						 as well as NAT traversal for client-client communication and we used session keys, end-to-end encryption,
						 cryptographic hashes, and signatures for security. 
					</p>
					<br>
					<p>I was responsible for managing the project timeline and implementing the client and server modules for 
					   NAT traversal and communication, various parts of the UI (main menu, preferences menu, and chat menu), many
					   parts of the SQLite database, and parts of the encryption (AES and RSA ciphers). I was also responsible 
					   for the integration of each of the modules.</p>
					<br>
					<p class="technologies">Technologies Used: Python, Tkinter, 
					<a style="display: inline; color: blue; text-decoration: underline;" href="https://cryptography.io/en/latest/">Cryptography Module</a>, 
					AWS, SQLite, Git</p>
				</div>
			</div>
			<div class="spacer"></div>

			<div class="project" id="interpolation-demo-project">
				<h2>Polynomial Interpolation Demo<p class="project-date">December 2021</p></h2>
				<a href="https://github.com/jfawcet5/Math351-Project">
					<div class="overlay"><p>Github Repo</p></div>
					<img class="box project-display" src="images/interpolation-demo.png" />
				</a>
				<div class="project-description">
					<p>Worked with a classmate in my Elementary Numerical Analysis class to create a polynomial interpolation 
						 demo from scratch for our course project submission. Our system uses the Newton algorithm for polynomial 
						 interpolation to calculate the lowest-degree polynomial that passes through a set of data points defined 
						 by the user.  
					</p>
					<br>
					<p>I was responsible for implementing the user interface, including all functionality related to the buttons, menus, 
						 point plotting, line rendering, and accurately displaying a dynamic cartesian grid with the ability to zoom and scroll.
					</p>
					<br>
					<p class="technologies">Technologies Used: Python 3, Pygame, Git</p>
				</div>
			</div>
			<div class="spacer"></div>

			<div class="project" id="python-games-project">
				<h2>Arcade Game Clones<p class="project-date">July 2021</p></h2>
				<a href="https://github.com/jfawcet5/Python-games">
					<div class="overlay"><p>Github Repo</p></div>
					<img class="box project-display" src="images/Joust.jpg" />
				</a>
				<div class="project-description">
					<p>This was a personal project where I created clones of classic arcade games from scratch using the Python 
						 programming language. The three games I made are: Pong, Space Invader, and Joust (Shown in screenshot).I started 
						 simple with Pong and gradually worked my way up to Joust.
					</p>
					<br>
					<p>I learned a lot about different techniques for implementing simple games with a fairly object-oriented
						 approach and managing different tasks related to game functionality (game loop, physics, animation, etc.). There 
						 are still a few bugs in each of the games and I haven't gotten around to finishing all of the features, but 
						 I had a lot of fun making them and am happy with how they turned out so far.
					</p>
					<br>
					<p class="technologies">Technologies Used: Python 3, Pygame</p>
				</div>
			</div>
			<div class="spacer"></div>

			<div class="project" id="cipher-visualization-project">
				<h2>Vigenere Cipher Visualization Tool<p class="project-date">May 2021</p></h2>
				<a href="https://github.com/maxjhop/VigenereVisualization">
						<div class="overlay"><p>Github Repo</p></div>
						<img class="box project-display" src="images/vigenerevisualization.png" />
				</a>
				<div class="project-description">
					<p>Led a team of four classmates to design and implement an algorithm visualizer for the vigenere cipher, 
							with the intent of creating a system for cryptography professors at the University of Oregon to use as a 
							teaching tool. Loosely followed an agile/prototyping software development lifecycle to develop the system over 
							the course of three weeks.
					</p>
					<br>
					<p>I was responsible for implementing the vigenere cipher encryption/decryption algorithm, animation pacing, 
							animation control (pause/play, speed up/down, etc.), integration between table highlighting and animation
							controls, and  project management to meet deadlines and coordinate tasks between team members.
					</p>
					<br>
					<p class="technologies">Technologies Used: Python 3, Pygame, Git</p>
				</div>
			</div>
			<div class="spacer"></div>

			<div class="project" id="yoon-project">
				<h2>Open-world RPG Game<p class="project-date">May 2021</p></h2>
				<a href="https://github.com/jfawcet5/Yoon">
					<div class="overlay"><p>Github Repo</p></div>
					<img class="box project-display" src="images/yoon.png" />
				</a>
				<div class="project-description">
					<p>Worked on a team of three to design and implement an open-world RPG game for my game programming class.
						We followed an agile software development lifecycle with the help of Kanban to complete the project over the
						span of about five weeks.
					</p>
					<br>
					<p>I was responsible for implementing the user interface design and functionality for the main menu, inventory, 
						 pause menu, skills menu, and cheat menu, I also worked on enemy behavior and AI, NPC pathfinding, level creation, 
						 game progression, game state (saving/loading between scenes), and player stats.
					</p>
					<br>
					<p class="technologies">Technologies Used: Unity Game Engine, C#, Kanban/Trello, Git</p>
				</div>
			</div>
			<div class="spacer"></div>

			<div class="project" id="pub-sub-project">
				<h2>Publisher/Subscriber Server<p class="project-date">May 2020</p></h2>
				<a href="https://github.com/jfawcet5/CIS415-Project3">
					<div class="overlay"><p>Github Repo</p></div>
					<img class="box project-display" src="images/pub-sub.png" />
				</a>
				<div class="project-description">
					<p>Implemented a publisher/subscriber program to simulate the functionality of a server backend for a
						 fake social media platform. Leveraged thread pools, synchronization, and circular ring buffers in 
						 order to handle the read/write commands from prewritten publisher/subscriber files to simulate
						 client behaviors simultaneously.  
					</p>
					<br>
					<p>
						In short, a 2D array called the topic store contains circular ring buffers called topic queues, which hold topic entries
						that are written by the publisher threads. Subscriber threads read topic entries from a particular topic queue 
						and a topic cleanup thread dequeues old topic entries.
					</p>
					<br>
					<p class="technologies">Technologies Used: C, Make/Makefile, Linux</p>
				</div>
			</div>
			<div class="spacer"></div>
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



