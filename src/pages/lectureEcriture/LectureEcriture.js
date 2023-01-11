import '../../App.css';
import '../journalisme/Journalisme.css';

function LectureEcriture() {

    document.title = "Ecrits - La Plume De Vinci";

    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: process.env.REACT_APP_API }).base('appWPDVfFKbFOF1eA');

    function getArticles() {
        base('ecrits').select({
            view: "Grid view"
        }).firstPage(function page(err, records) {
            if (err) { console.error(err); return; }
            document.getElementById('articles').innerText = "";
            records.forEach(function(record) {
                document.getElementById('articles').innerHTML += "<div class='article' onclick='window.location.href=`../ecriture/" + record.get('url') + "`'>" +
                    "<h1 style='background-image: url(" + record.get('image') + "'>" + record.get('titre') + "</h1>" +
                    "<div class='article-ctn'>" +
                    "<a class='date'>" + record.get('date') + "</a>" +
                    "<a class='tags'>" + record.get('tags') + "</a>" +
                    "<br></br>" +
                    "<p>" + record.get('contenu').slice(0, 150) + " [...]</p>" +
                    "</div>" +
                    "</div>";
            });
            });
    }

    getArticles();

    return (
        <div className="App withpad">
            <div id="articles">

            </div>
        </div>
    )
}

export default LectureEcriture;