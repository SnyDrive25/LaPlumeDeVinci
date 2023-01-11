import '../../App.css';
import Social from '../../components/social/Social';

function Home() {

    document.title = "Accueil - La Plume De Vinci";

    return (
        <div className="App withpad">
            <div className='flex'>
                <div className='part left'>
                    <h1>Axe Journalisme</h1>
                    <div className='ctn'>
                        <button className='special-btn'>Lire le journal</button>
                    </div>
                </div>
                <div className='part right'>
                    <h1>Axe Ecriture</h1>
                    <div className='ctn'>
                        <button className='special-btn'>Lire le poème</button>
                    </div>
                </div>
            </div>
            <Social />
        </div>
    )
}

export default Home;