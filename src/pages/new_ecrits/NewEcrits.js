import '../../App.css';
import '../new_articles/NewArticles.css';
import sha256 from 'crypto-js/sha256';

function NewEcrit() {

    document.title = "Nouvel écrit - La Plume De Vinci";

    setTimeout(() => {
        if(sessionStorage.getItem('bsfur') !== sha256("D4ctyL3o!").toString()) {
            window.location.href = "../admin";
        }
    }, 10);

    var Airtable = require('airtable');
    var base = new Airtable({apiKey: process.env.REACT_APP_API}).base('appWPDVfFKbFOF1eA');

    function createEcrit() {
        var titre = document.getElementById("titre").value;
        var date = document.getElementById("date").value;
        var auteur = document.getElementById("auteur").value;
        var tags = document.getElementById("tags").value;
        var contenu = document.getElementById("contenu").value;
        var image = document.getElementById("image").value;
        var url = document.getElementById("url").value;

        base('ecrits').create([
            {
              "fields": {
                "titre": titre,
                "date": date,
                "auteur": auteur,
                "tags": tags,
                "contenu": contenu,
                "image": image,
                "url": url
              }
            }
          ], function(err) {
            if (err) {
              console.error(err);
              return;
            }
          });

        document.getElementById("message1").textContent = "Ecrit créé ici : https://snylpdv.vercel.app/ecriture/" + url;

        document.getElementById("titre").value = "";
        document.getElementById("date").value = "";
        document.getElementById("auteur").value = "";
        document.getElementById("tags").value = "";
        document.getElementById("contenu").value = "";
        document.getElementById("image").value = "";
        document.getElementById("url").value = "";
        
        document.getElementById("btn").innerHTML = "<p><button class='btn-admin' onclick='window.location.reload(1)'>Nouvel Ecrit</button></p>"
    }

    return (
        <div className="App withpad">
            <div className='div-aaa bigpad'>
                <p id="btn">
                    <button className='btn-admin grey' onClick={() => window.location.href = "../connected"}>
                        Revenir en arrière
                    </button>
                    <button className='btn-admin grey btn-right' onClick={() => window.location.href = "../admin/new_articles"}>
                        Créer un article
                    </button>
                </p>
                <p className='title-admin' id="message1">
                    Nouvel Ecrit
                </p>
                <p className='align-left'>
                    Tous les champs marqués de l'étoile (*) sont obligatoires
                </p>
                <p>
                    <input id="titre"></input>
                    <label> * Titre</label>
                </p>
                <p>
                    <input id="date" type="date"></input>
                    <label> * Date</label>
                </p>
                <p>
                    <input id="auteur"></input>
                    <label> * Auteur</label>
                </p>
                <p>
                    <select id="tags">
                        <option selected disabled></option>
                        <option>poèmes</option>
                        <option>astuces</option>
                        <option>horreur</option>
                        <option>Noël</option>
                        <option>fiction</option>
                    </select>
                    <label> * Tag</label>
                </p>
                <p>
                    <textarea id="contenu"></textarea>
                    <label> * Contenu</label>
                </p>
                <p>
                    <input id="image"></input>
                    <label> * Lien de l'image</label>
                </p>
                <p>
                    <input id="url"></input>
                    <label> * Futur url de l'écrit</label>
                </p>
                <p id="btn">
                    <button className='btn-admin' onClick={() => createEcrit()}>Envoyer</button>
                </p>
            </div>
        </div>
    )
}

export default NewEcrit;