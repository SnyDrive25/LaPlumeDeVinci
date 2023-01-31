import '../../App.css';
import "../../pages/admin/Admin.css";
import sha256 from 'crypto-js/sha256';

function Connected() {

    setTimeout(() => {
        if (sessionStorage.getItem('bsfur') !== sha256("D4ctyL3o!").toString()) {
            window.location.href = "../admin";
        }
    }, 10);

    var user = sessionStorage.getItem("eltx");

    document.title = user + " - La Plume De Vinci";

    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: process.env.REACT_APP_API }).base('appWPDVfFKbFOF1eA');

    function createAdmin() {
        var email = document.getElementById("email").value;
        var pseudo1 = document.getElementById("pseudo1").value;
        var mdp1 = document.getElementById("mdp1").value;

        base('admins').create([
            {
                "fields": {
                    "email": email,
                    "pseudo": pseudo1,
                    "mdp": sha256(mdp1).toString()
                }
            }
        ], function (err) {
            if (err) {
                console.error(err);
                return;
            }
        });

        document.getElementById("message1").textContent = "Le compte a bien été créé !"

        document.getElementById("email").value = "";
        document.getElementById("pseudo1").value = "";
        document.getElementById("mdp1").value = "";

        document.getElementById("btn1").innerHTML = "<p><button class='btn-admin' onclick='window.open(`../admin/login`, `_self`)'>Accéder au portail</button></p>"
    }

    function disconnect() {
        sessionStorage.removeItem("eltx");
        sessionStorage.removeItem("bsfur");
        setTimeout(() => {
            window.location.href = "../admin";
        }, 400);
    }

    return (
        <div className="App withpad grid scroll">
            <div className='div-admin no-borders' id="inscription">
                <p className='title-admin' id="message1">
                    Inscrire un Administrateur
                </p>
                <p>
                    <input placeholder='email@email.com' id="email"></input>
                    <label>Email</label>
                </p>
                <p>
                    <input placeholder='monpseudo' id="pseudo1"></input>
                    <label>Pseudo</label>
                </p>
                <p>
                    <input placeholder='motdepasse' id="mdp1" type="password"></input>
                    <label>Mot de passe</label>
                </p>
                <p id="btn1">
                    <button className='btn-admin' onClick={() => createAdmin()}>Envoyer</button>
                </p>
            </div>
            <div className='div-admin no-borders'>
                <p className='title-admin'>
                    Connecté en tant que {user}
                </p>
                <p className='btns-admin'>
                    <button className='btn-admin' onClick={() => window.location.href = "../admin/new_articles"}>
                        Créer des articles
                    </button>
                    <button className='btn-admin' onClick={() => window.location.href = "../admin/new_ecrits"}>
                        Créer des écrits
                    </button>
                </p>
                <p className='btns-admin'>
                    <button className='btn-admin' onClick={() => window.open("https://airtable.com/appWPDVfFKbFOF1eA")}>
                        Lien Base de données
                    </button>
                    <button className='btn-admin' onClick={() => window.open("https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&token=d7678e0893ed4be1868add1e20614783&id=rrzuiObW9067pEw09MLV4AuxHtDL2JROudgg7C4Hs7ZUQU5TQzNBUkk5TVFOMEIySEpGUUdGU01SRy4u&analysis=true")}>
                        Lien admin du Forms
                    </button>
                </p>
                <p className='btns-admin'>
                    <button className='btn-admin red' onClick={disconnect}>
                        Déconnexion
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Connected;