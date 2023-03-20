import { useState } from "react";
import "./Navbar.css";
import logo from '../../images/logo.png';

function Navbar() {

    const [nav, setNav] = useState(false);

    function biggerNav() {
        if (nav) {
            setNav(false);
            document.getElementById("scrolled").style.display = "none";
            document.getElementById("cross").style.display = "none";
            document.getElementById("hamburger").style.display = "block";
            document.getElementById("Navbar").style.height = "10vh";
        }
        else {
            setNav(true);
            document.getElementById("Navbar").style.height = "60vh";
            document.getElementById("hamburger").style.display = "none";
            document.getElementById("cross").style.display = "block";
            setTimeout(() => {
                document.getElementById("scrolled").style.display = "block";
            }, 400);
        }
    }

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ) {
            document.getElementById("Navbar").style.backgroundColor = "var(--black)";
        } 
        else {
            document.getElementById("Navbar").style.backgroundColor = "transparent";
        }
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 100) {
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("Navbar").style.top = "0";
                document.getElementById("Navbar").style.opacity = "1";
            } else {
                document.getElementById("Navbar").style.top = "-11vh";
                document.getElementById("Navbar").style.opacity = "0";
            }
            prevScrollpos = currentScrollPos;
        }
    }

    return (
        <div id="Navbar">
            <div className="titles">
                <img src={logo} alt='logo' id="logo" onClick={() => window.location.href = '../'}></img>
                <a href="../journalisme">Journalisme</a>
                <a href="../ecriture">Ecriture créative</a>
                <span id="hamburger" onClick={() => biggerNav()}></span>
                <span id="cross" onClick={() => biggerNav()}></span>
            </div>
            <div className="titles2">
                <a href="../" className="notel">Nous Contacter</a>
                <a href="https://forms.office.com/r/N6tBPMuHPB" target="_blank" rel="noreferrer" className="notel">Inscription</a>
            </div>
            <div id="scrolled">
                <a href="../ecriture">Ecriture créative</a>
                <br></br>
                <a href="../journalisme">Journalisme</a>
                <br></br>
                <a href="../">Contact</a>
                <br></br>
                <a href="https://forms.office.com/r/N6tBPMuHPB" target="_blank" rel="noreferrer">Inscription</a>
            </div>
        </div>
    );
}

export default Navbar;