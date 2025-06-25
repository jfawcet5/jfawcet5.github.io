import { PageView } from "./pageView.js";

export class HomePage extends PageView {
	_GetContents() {
		const wrapper = document.createElement("div");

		const aboutSection = this._GetAboutSection();
		const projectSection = this._GetProjectSection();
		const skillsSection = this._GetSkillsSection();
		const contactSection = this._GetContactSection();

		wrapper.appendChild(aboutSection);
		wrapper.appendChild(projectSection);
		wrapper.appendChild(skillsSection);
		wrapper.appendChild(contactSection);

		return wrapper;
	}

	_GetAboutSection() {
		const section = document.createElement("div");

		const contents = `<h2>About</h2>
          <img class="box right" src="images/picture2.jpeg" />
          <p class="about-p">Hi, I'm Joshua Fawcett. I am a recent graduate from the University of Oregon, with a major in 
          Computer and Information Science and minor in Mathemetics. I'm a life-long learner who loves to read textbooks, 
          write code, tackle challenging problems, and help friends with their math, physics, and writing.<br><br>In my free 
          time, I enjoy spending time with friends and family, bowling, hiking, and playing/making video games.<br><br></p>`

		section.innerHTML = contents;

		return section;
	}

	_GetProjectSection() {
		const section = document.createElement("div");

		const contents = `<h2>Projects</h2>
          <ul>
            <li><button class="text-button" onclick="scrollToProject('cipher-visualization-project')">Vigenere Cipher Visualization Tool</button></li>
            <li><button class="text-button" onclick="scrollToProject('messenger-project')">Secure Messenger Application</button></li>
            <li><button class="text-button" onclick="scrollToProject('yoon-project')">Open-world RPG Game</button></li>
            <li><button class="text-button" onclick="scrollToProject('pub-sub-project')">Publisher/Subscriber Server</button></li>
          </ul>`

		section.innerHTML = contents;

		return section;
	}

	_GetSkillsSection() {
		const section = document.createElement("div");

		const contents = `<h2>Skills</h2>
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
          </div>`

		section.innerHTML = contents;

		return section;
	}

	_GetContactSection() {
		const section = document.createElement("div");

		const contents = `<h2>Contact</h2>
          <p>Email: joshfawcettshs10@gmail.com</p>
          <p>Github: <a href="https://github.com/jfawcet5">github.com/jfawcet5</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/jfawcet5">linkedin.com/jfawcet5</a></p>
          <br>
          <p>
        		<a href='images/Joshua_Fawcett_Resume.pdf' target='_blank' class='resume-link'>
        			<strong>Resume <i class="fa-solid fa-1x fa-arrow-up-right-from-square" title="Resume Link"></i></strong>
        		</a>
        	</p>`

		section.innerHTML = contents;

		return section;
	}

}