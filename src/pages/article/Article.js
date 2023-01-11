import '../../App.css';
import './Article.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import share from '../../images/share.png';

function Article() {

    const [article, setArticle] = useState({
        Titre: "",
        Image: "",
        Contenu: "",
        Date: "",
        Auteur: "",
        Tags: ""
    })

    const { link } = useParams();

    useEffect(() => {
        getArticle();
        // eslint-disable-next-line
    }, []);
    
    async function getArticle() {

        var Airtable = require('airtable');
        var base = new Airtable({ apiKey: process.env.REACT_APP_API }).base('appWPDVfFKbFOF1eA');

        const records = await base('articles')
            .select({
                filterByFormula: `SEARCH("${link}",{url} & "")`,
            })
            .all();

        document.title = records[0].fields.titre + " - La Plume De Vinci";

        setArticle({
            Titre: records[0].fields.titre,
            Image: records[0].fields.image,
            Contenu: records[0].fields.contenu,
            Date: records[0].fields.date,
            Auteur: records[0].fields.auteur,
            Tags: records[0].fields.tags
        })
    };

    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
      
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
      
        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }
      
        document.body.removeChild(textArea);
    }

    function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(function() {
            document.getElementById("share-message").style.display = "flex";
            setTimeout(() => {
                document.getElementById("share-message").style.opacity = "1";
            }, 10);
            setTimeout(() => {
                document.getElementById("share-message").style.opacity = "0";
                setTimeout(() => {
                    document.getElementById("share-message").style.display = "none";
                }, 200);
            }, 2000);
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    }

    return (
        <div className="App">
            <div className='div-img'>
                <img className='actu-img' alt={article.Titre} src={article.Image}></img>
            </div>
            <div className='div-article'>
                <div className='author'>Rédigé par {article.Auteur}</div>
                <span>{article.Tags}</span>
                <br></br>
                <h1>{article.Titre}</h1>
                <p>
                    <ReactMarkdown children={article.Contenu} />
                </p>
            </div>
            <div className='share'>
                <p>
                    <img src={share} alt="share" onClick={() => copyTextToClipboard(window.location.href)}></img>
                </p>
            </div>
            <div id='share-message'><p>Le lien a été copié !</p></div>
        </div>
    )
}

export default Article;