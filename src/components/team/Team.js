import "./Team.css";

function Team() {

    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: process.env.REACT_APP_API }).base('appWPDVfFKbFOF1eA');

    function getArticles() {
        base('dirigeants').select({
            view: "Grid view"
        }).firstPage(function page(err, records) {
            if (err) { console.error(err); return; }
            document.getElementById('myteam').innerText = "";
            records.forEach(async function(record) {
                var url = await record.get('image')[0].url;
                document.getElementById('myteam').innerHTML += "<p><img src=" + url + " alt='" + record.get('role') + "'></img><span>" + record.get('nom') +"</span><span>" + record.get('role') + "</span></p>";
            });
        });
    }

    getArticles();

    return (
        <div id="Team">
            <h1>Nos dirigeants</h1>
            <div className="team-content" id="myteam"></div>
        </div>
    );
}

export default Team;