import '../../App.css';
import './Admin.css';
import sha256 from 'crypto-js/sha256';

function Admin() {

    document.title = "Admin - La Plume De Vinci";

    setTimeout(() => {
        if(sessionStorage.getItem('bsfur') === sha256("D4ctyL3o!").toString()) {
            window.location.href = "../connected";
            document.getElementById("message2").textContent = "Vous êtes connecté";
        }
    }, 10);

    var Airtable = require('airtable');
    var base = new Airtable({apiKey: process.env.REACT_APP_API}).base('appWPDVfFKbFOF1eA');

    async function verifyAdmin() {
        var pseudo2 = document.getElementById("pseudo2").value;
        var mdp2 = document.getElementById("mdp2").value;

        const records = await base('admins').select({
            filterByFormula: `SEARCH("${pseudo2}",{pseudo} & "")`,
        }).all();

        if(sha256(mdp2).toString() === records[0].fields.mdp) {
            sessionStorage.setItem("bsfur", sha256("D4ctyL3o!").toString());
            sessionStorage.setItem("eltx", pseudo2);
            window.location.href = "../connected";
        }
        else {
            document.getElementById("message2").textContent = "Erreur lors de la connexion. Veuillez réessayer";
            document.getElementById("pseudo2").value = "";
            document.getElementById("mdp2").value = "";
        }
    }

    return (
        <div className="App withpad grid">
            <div className='div-admin' id="connexion">
                <p className='title-admin' id="message2">
                    Connexion
                </p>
                <p id="pseudo22">
                    <input placeholder='monpseudo' id="pseudo2"></input>
                    <label>Pseudo</label>
                </p>
                <p id="mdp22">
                    <input placeholder='motdepasse' id="mdp2" type="password"></input>
                    <label>Mot de passe</label>
                </p>
                <p id="btn2">
                    <button className='btn-admin' onClick={() => verifyAdmin()}>Connecter</button>
                </p>
            </div>
        </div>
    )
}

export default Admin;