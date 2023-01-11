import '../../App.css';
import Social from '../../components/social/Social';
import Team from '../../components/team/Team';

function Contact() {

    document.title = "La Plume De Vinci";

    return (
        <div className="App">
            <h1 className='mytitle'>La Plume de Vinci</h1>
            <h2 className='mytitle'>Prendre son envol dans cette littérature qui nous entoure</h2>
            <Social />
            <Team />
        </div>
    )
}

export default Contact;