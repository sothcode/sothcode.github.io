// components.js contains common header and footer elements
class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header id="header">
                <h1 id="logo"><a href="index.html">Seth Howell</a></h1>
                <nav id="nav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li>
                            <a href="#">Layouts</a>
                            <ul>
                                <li><a href="sphenix.html">sPHENIX</a></li>
                                <li><a href="racing.html">Bruin Racing</a></li>
                                <li><a href="no-sidebar.html">PARISLab</a></li>
                                <li>
                                    <a href="#">Submenu</a>
                                    <ul>
                                        <li><a href="#">Option 1</a></li>
                                        <li><a href="#">Option 2</a></li>
                                        <li><a href="#">Option 3</a></li>
                                        <li><a href="#">Option 4</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="aboutme.html">About Me</a></li>
                        <li><a href="#" class="button primary">Say Hi!</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

class SpecialFooter extends HTMLElement {
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

customElements.define('custom-header', SpecialHeader);
customElements.define('custom-footer', SpecialFooter);
