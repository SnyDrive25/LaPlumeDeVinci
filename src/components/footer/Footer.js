import "./Footer.css";

function Footer() {

    return (
        <div id="Footer">
            <div className="footer-nav">
                <a href="../ecriture">Ecriture créative</a>
                <a href="../journalisme">Journalisme</a>
                <a href="../">Nous contacter</a>
                <a href="https://forms.office.com/r/N6tBPMuHPB" target="_blank" rel="noreferrer">Inscription</a>
            </div>
            <div className="barre"></div>
            <div className="footer-content">
                <div className="footer-btns">
                    <a href="https://www.instagram.com/lpdv_laplumedevinci" target="_blank" rel="noreferrer"><i class="fa fa-instagram"></i></a>
                    <a href="https://www.facebook.com/lpdvLaPlumeDeVinci/" target="_blank" rel="noreferrer"><i class="fa fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/company/la-plume-de-vinci/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin"></i></a>
                    <a href="https://www.youtube.com/channel/UCgLo306ZFXm4FoSYz1ExUyw" target="_blank" rel="noreferrer"><i class="fa fa-youtube-play"></i></a>
                </div>
                <p><a href="mailto:laplume@devinci.fr">laplume@devinci.fr</a></p>
            </div>
            <div className="me">Réalisé avec ❤️ par @<a href="https://linktr.ee/snydrive" target="_blank" rel="noreferrer">SnyDrive</a></div>
        </div>
    );
}

export default Footer;