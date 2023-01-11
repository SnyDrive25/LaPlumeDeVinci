import "./Social.css";
import lpdv from '../../images/logo.png';

function Social() {

    return (
        <div id="Social">
            <div className="social-content">
                <img src={lpdv} alt="logo_lpdv"></img>
                <h1>Pour nous suivre sur nos réseaux sociaux</h1>
                <div className="social-btns">
                    <a href="https://www.instagram.com/lpdv_laplumedevinci" target="_blank" rel="noreferrer"><i class="fa fa-instagram"></i></a>
                    <a href="https://www.facebook.com/lpdvLaPlumeDeVinci/" target="_blank" rel="noreferrer"><i class="fa fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/company/la-plume-de-vinci/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin"></i></a>
                    <a href="https://www.youtube.com/channel/UCgLo306ZFXm4FoSYz1ExUyw" target="_blank" rel="noreferrer"><i class="fa fa-youtube-play"></i></a>
                </div>
                <p>Pour contacter notre bureau : <a href="mailto:laplume@devinci.fr" target="_blank" rel="noreferrer">laplume@devinci.fr</a></p>
            </div>
        </div>
    );
}

export default Social;