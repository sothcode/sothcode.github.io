class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    				<header id="header">
    					<h1 id="logo"><a href="/index.html">Seth Howell</a></h1>
    					<nav id="nav">
    						<ul>
    							<li><a href="/aboutme/aboutme.html">About Me</a>
    								<ul>
    									<li><a href="/aboutme/resume.html">CV & Resume</a></li>
    									<li><a href="/aboutme/interests.html">Personal Interests</a>
    										<ul>
    											<li><a href="/aboutme/music.html">Music</a></li>
    											<li><a href="/aboutme/food.html">Cooking & Baking</a></li>
    											<li><a href="/aboutme/hike.html">Hiking</a></li>
    											<li><a href="/aboutme/random.html">Random</a></li>
    										</ul>
    									</li>
    								</ul>
    							</li>
    							<li><a href="/projects/projects.html">Technical Experience</a>
    								<ul>
    									<li><a href="/projects/sphenix.html">sPHENIX TPC</a></li>
    									<li><a href="/projects/racing.html">Bruin Racing</a></li>
    									<li><a href="/projects/parislab.html">Molecular Dynamics</a></li>
    								</ul>
    							</li>
    							<li><a href="/services/services.html">Services</a>
    								<ul>
    									<li><a href="/services/tutoring.html">Tutoring</a></li>
    									<li><a href="/services/consulting.html">Consulting</a></li>
    									<!--<li><a href="/layouts/left-sidebar.html">Left Sidebar</a></li>-->
    									<!--<li><a href="/layouts/right-sidebar.html">Right Sidebar</a></li>-->
    									<!--<li><a href="/layouts/no-sidebar.html">No Sidebar</a></li>-->
    									<!--<li><a href="/layouts/elements.html">Elements</a></li>-->
    								</ul>
    							</li>
    							<li><a href="#" class="button primary">Say Hi!</a></li>
    						</ul>
    					</nav>
    				</header>
        `;
    }
}
customElements.define('main-header', MainHeader);

class MainFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    				<footer id="footer">
    					<ul class="icons">
    						<li><a href="https://www.facebook.com/seth.howell.7106/" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
    						<li><a href="https://www.linkedin.com/in/seth-howell-b06a32194/" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
    						<li><a href="https://www.instagram.com/ho.well.s/?hl=en" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
    						<li><a href="https://github.com/sothcode" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
    						<li><a href="mailto:smh2838@gmail.com" class="icon solid alt fa-envelope"><span class="label">Email</span></a></li>
    					</ul>
    					<ul class="copyright">
    						<li>&copy; Seth Howell. All rights reserved.</li>
    					</ul>
    				</footer>
        `;
    }
}
customElements.define('main-footer', MainFooter);
